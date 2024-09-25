-- CreateTable
CREATE TABLE "Book" (
    "id" SERIAL NOT NULL,
    "Title" TEXT NOT NULL,
    "Author" TEXT NOT NULL,
    "ISBN" TEXT NOT NULL,

    CONSTRAINT "Book_pkey" PRIMARY KEY ("id")
);
