/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Section` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Section.name_unique" ON "Section"("name");

-- AlterIndex
ALTER INDEX "Profile_userId_key" RENAME TO "Profile.userId_unique";

-- AlterIndex
ALTER INDEX "Props_componentId_key" RENAME TO "Props.componentId_unique";

-- AlterIndex
ALTER INDEX "User_email_key" RENAME TO "User.email_unique";
