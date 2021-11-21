-- CreateEnum
CREATE TYPE "ComponentType" AS ENUM ('TEXT', 'IMAGE', 'CUSTOM');

-- CreateTable
CREATE TABLE "Props" (
    "id" SERIAL NOT NULL,
    "componentId" INTEGER NOT NULL,
    "width" TEXT NOT NULL,
    "height" TEXT NOT NULL,
    "marginTop" TEXT NOT NULL,
    "marginRight" TEXT NOT NULL,
    "marginBottom" TEXT NOT NULL,
    "marginLeft" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Component" (
    "id" SERIAL NOT NULL,
    "componentType" "ComponentType" NOT NULL,
    "sectionId" INTEGER,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ComponentsOrder" (
    "id" SERIAL NOT NULL,
    "componentId" TEXT NOT NULL,
    "componentsOrderId" INTEGER,
    "sectionId" INTEGER,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Section" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Props.componentId_unique" ON "Props"("componentId");

-- AddForeignKey
ALTER TABLE "Props" ADD FOREIGN KEY ("componentId") REFERENCES "Component"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Component" ADD FOREIGN KEY ("sectionId") REFERENCES "Section"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ComponentsOrder" ADD FOREIGN KEY ("componentsOrderId") REFERENCES "ComponentsOrder"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ComponentsOrder" ADD FOREIGN KEY ("sectionId") REFERENCES "Section"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AlterIndex
ALTER INDEX "Profile_userId_key" RENAME TO "Profile.userId_unique";

-- AlterIndex
ALTER INDEX "User_email_key" RENAME TO "User.email_unique";
