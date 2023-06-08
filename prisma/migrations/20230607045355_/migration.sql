/*
  Warnings:

  - The primary key for the `tblvariant` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `Id` on the `tblvariant` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `IdCategory` on the `tblvariant` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `Int`.

*/
-- AlterTable
ALTER TABLE `tblvariant` DROP PRIMARY KEY,
    MODIFY `Id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `IdCategory` INTEGER NULL,
    ADD PRIMARY KEY (`Id`);

-- AddForeignKey
ALTER TABLE `tblvariant` ADD CONSTRAINT `tblvariant_IdCategory_fkey` FOREIGN KEY (`IdCategory`) REFERENCES `tblcategory`(`Id`) ON DELETE SET NULL ON UPDATE CASCADE;
