import { PrismaClient, Prisma } from "@prisma/client";
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

const userData: Prisma.UserCreateInput[] = [
    {
        name: 'Sean',
        email: 'mordist1@gmail.com',
        password: bcrypt.hashSync('1234', 12),
        posts: {
            create: [
                {
                    title: "Join Prisma Discord",
                    content: "http://www.discord.io/",
                    published: true,
                    comments: {
                        create: [
                            {
                                content: "This is my first comment",
                                title: "Comment Title"
                            }
                        ]
                    }
                }
            ]
        }
    }
]

async function main() {
    console.log("Start seeding...")
    for (const u of userData) {
        const user = await prisma.user.create({data: u})
        console.log(`\tCreated user with id: ${user.id}`)
    }
    console.log("Finished seeding.")
}

main().then(async () => {
    await prisma.$disconnect()
}).catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})