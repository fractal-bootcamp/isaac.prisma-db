import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const addBook = await prisma.member.create({
    data: {
      Name: "Hi!",
      Email: "123456678",
      Address: "asdfasddasf",
      RentalBook: {
        connect: {
          id: 1,
        },
      },
    },
  });
  console.log(addBook);
};

main();
