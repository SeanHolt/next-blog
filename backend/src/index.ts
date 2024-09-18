import { PrismaClient } from "@prisma/client";
import cors from "cors";
import express from "express";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();
const app = express();

app.use(express.json());
app.use(cors());

app
  .get("/drafts/:id", async (req, res) => {
    const posts = await prisma.post.findMany({
      where: { published: false, authorId: Number(req.params.id) },
      include: { author: true },
    });
    res.json(posts);
  })
  .get("/feed", async (req, res) => {
    const posts = await prisma.post.findMany({
      where: { published: true },
      orderBy: { createdAt: "desc" },
      include: { author: true, _count: true },
    });
    res.json(posts);
  })
  .post("/post", async (req, res) => {
    const { title, content, authorEmail } = req.body;
    if (!title || !content || !authorEmail)
      return res.status(404).json({ message: "Content not found" });
    const user = await prisma.user.findUnique({
      where: { email: authorEmail },
    });
    if (user) {
      const result = await prisma.post.create({
        data: {
          title,
          content,
          published: false,
          author: { connect: { ...user } },
        },
      });
      return res.status(200).json(result);
    }
    return res.status(404).json({ message: "User not found" });
  })
  .delete("/post/:id", async (req, res) => {
    const { id } = req.params;
    console.log("\tDELETE /post/" + id);
    const post = await prisma.post.delete({
      where: {
        id: Number(id),
      },
    });
    res.json(post);
  })
  .get("/post/:id", async (req, res) => {
    const { id } = req.params;
    console.log("\tGET /post/" + id);
    const post = await prisma.post.findUnique({
      where: {
        id: Number(id),
      },
      include: { author: true, comments: { include: { author: true } } },
    });
    res.json(post);
  })
  .get("/comments/author/:id", async (req, res) => {
    const author = await prisma.user.findFirst({
      where: { id: Number(req.params.id) },
    });
    if (!author) return res.status(404).json({ message: "Author not found" });
    const comments = await prisma.comment.findMany({
      where: { authorId: Number(req.params.id) },
      include: { author: true, post: true },
    });
    return res.status(200).json(comments);
  })
  .get("/comments/post/:id", async (req, res) => {
    const post = await prisma.post.findFirst({
      where: { id: Number(req.params.id) },
    });
    if (!post) return res.status(404).json({ message: "Post not found" });
    const comments = await prisma.comment.findMany({
      where: { postId: post.id },
      include: { post: true, author: true },
    });
    console.log("comments = ", comments);
    return res.status(200).json(comments);
  })
  .post("/comment/:id", async (req, res) => {
    const { id } = req.params;
    const { id: authorId } = req.params;
    console.log("\tPOST /comment/" + id);
    const comment = await prisma.comment.create({
      data: {
        content: req.body.content,
        title: req.body.title,
        post: { connect: { id: Number(id) } },
        author: { connect: { id: Number(authorId) } },
      },
    });
    return res.status(200).json(comment);
  })
  .put("/publish/:id", async (req, res) => {
    const { id } = req.params;
    const post = await prisma.post.update({
      where: { id: Number(id) },
      data: {
        published: true,
      },
    });
    res.json(post);
  })
  .post("/register", async (req, res, next) => {
    try {
      const { email, password, name } = req.body;
      if (!email || !password) {
        return res
          .status(401)
          .json({ message: "You must provide an email and password" });
      }
      const existingUser = await prisma.user.findUnique({
        where: {
          email,
        },
      });
      if (existingUser) {
        return res
          .status(400)
          .json({ message: "That email address is already in use" });
      }
      const user = await prisma.user.create({
        data: { email, password, name },
      });
      res.json({ user });
    } catch (err) {
      next(err);
    }
  })
  .post("/login", async (req, res, next) => {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res
          .status(403)
          .json({ message: "You must provide an email and password" });
      }
      const existingUser = await prisma.user.findFirst({ where: { email } });
      if (!existingUser) {
        return res.status(403).json({ message: "Invalid login credentials 1" });
      }
      const validPassword = await bcrypt.compare(
        password,
        existingUser.password
      );
      if (!validPassword) {
        return res.status(403).json({ message: "Invalid login credentials 2" });
      }
      if (existingUser.password) delete (existingUser as any).password;
      res.json({ user: { ...existingUser } });
    } catch (err) {
      next(err);
    }
  });
const server = app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
