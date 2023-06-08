-- CreateTable
CREATE TABLE `tblusers` (
    `Id` VARCHAR(191) NOT NULL,
    `Username` VARCHAR(191) NOT NULL,
    `Email` VARCHAR(191) NOT NULL,
    `Password` VARCHAR(191) NOT NULL,
    `IsDelete` BOOLEAN NULL,
    `CreateBy` VARCHAR(191) NULL,
    `CreatedDate` DATETIME(3) NULL,
    `UpdateBy` VARCHAR(191) NULL,
    `UpdateDate` DATETIME(3) NULL,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
