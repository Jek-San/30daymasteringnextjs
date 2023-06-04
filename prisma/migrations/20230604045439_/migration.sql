/*
  Warnings:

  - The primary key for the `tblvariant` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE `tblvariant` DROP PRIMARY KEY,
    MODIFY `Id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`Id`);
