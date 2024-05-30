-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "userid" TEXT NOT NULL,
    "password" TEXT,
    "username" TEXT NOT NULL,
    "email" TEXT,
    "phone" TEXT,
    "github_id" TEXT,
    "avater" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Goods" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "poster" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Goods_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_userid_key" ON "User"("userid");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_github_id_key" ON "User"("github_id");

-- CreateIndex
CREATE UNIQUE INDEX "Goods_title_key" ON "Goods"("title");
