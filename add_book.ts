
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({})

const main = async () => {
    const addBook = await prisma.book.create({
        data: {
            title: "Prisma",
            ISBN: "123456678",
            author: {
                create: {
                    name: "Author Name", 
                    bio: "Author bio",
                },
            },
        },
    });
    console.log(addBook);
}

main()
  