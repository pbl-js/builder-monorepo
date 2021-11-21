-- DropForeignKey
ALTER TABLE "Props" DROP CONSTRAINT "Props_componentId_fkey";

-- AlterTable
ALTER TABLE "Section" ADD COLUMN     "destinationUrl" TEXT NOT NULL DEFAULT E'http://localhost:1111/graphql';

-- AddForeignKey
ALTER TABLE "Props" ADD CONSTRAINT "Props_componentId_fkey" FOREIGN KEY ("componentId") REFERENCES "Component"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- RenameIndex
ALTER INDEX "Profile.userId_unique" RENAME TO "Profile_userId_key";

-- RenameIndex
ALTER INDEX "Props.componentId_unique" RENAME TO "Props_componentId_key";

-- RenameIndex
ALTER INDEX "User.email_unique" RENAME TO "User_email_key";
