/*
  Warnings:

  - You are about to drop the `ComponentsOrder` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `componentsOrder` to the `Section` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ComponentsOrder" DROP CONSTRAINT "ComponentsOrder_componentsOrderId_fkey";

-- DropForeignKey
ALTER TABLE "ComponentsOrder" DROP CONSTRAINT "ComponentsOrder_sectionId_fkey";

-- AlterTable
ALTER TABLE "Section" ADD COLUMN     "componentsOrder" JSONB NOT NULL;

-- DropTable
DROP TABLE "ComponentsOrder";
