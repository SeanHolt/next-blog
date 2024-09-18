/*
type User = {
    id: number;
    email: string;
    name: string;
    posts?: Post[];
    comments?: PostComment[];
}
*/
export class User {
    public id: number;
    public email: string;
    public name: string;
    public posts?: Post[];
    public comments?: PostComment[];

    public addComment(c: PostComment): User {
        if (!this.comments) this.comments = []
        this.comments.push(c)
        return this;
    }
    public removeComment(c: PostComment): User {
        if (!this.comments) this.comments = [];
        for (let i = 0; i < this.comments.length; i++) {
            if (this.comments[i] === c) {
                this.comments = this.comments.slice(i)
                return this;
            }
        }
        return this;
    }
    public addPost(p: Post): User {
        if (!this.posts) this.posts = []
        this.posts.push(p)
        return this;
    }
    public removePost(p: Post): User {
        if (!this.posts) this.posts = []
        for (let i = 0; i < this.posts.length; i++) {
            if (this.posts[i] === p) {
                this.posts = this.posts?.slice(i)
                return this;
            }
        }
        return this;
    }
}
export type Post = {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    title: string;
    content: string;
    published: boolean;
    viewCount: number;
    author?: User;
    authorId: number;
    comments?: PostComment[];
}
export type PostComment = {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    title: string;
    content: string;
    post?: Post;
    postId: number;
    author?: User;
    authorId: number;
}

