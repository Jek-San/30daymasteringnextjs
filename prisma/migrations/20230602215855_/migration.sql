-- CreateTable
CREATE TABLE `tblcategory` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `NameCategory` VARCHAR(255) NULL,
    `Description` VARCHAR(255) NULL,
    `IsDelete` BOOLEAN NULL,
    `CreateBy` VARCHAR(255) NULL,
    `CreatedDate` DATETIME(0) NULL,
    `UpdateBy` VARCHAR(255) NULL,
    `UpdateDate` DATETIME(0) NULL,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tblproduct` (
    `Id` INTEGER NOT NULL,
    `NameProduct` VARCHAR(255) NULL,
    `Price` FLOAT NULL,
    `Stock` VARCHAR(255) NULL,
    `IdVariant` INTEGER NULL,
    `Image` VARCHAR(255) NULL,
    `IsDelete` BOOLEAN NULL,
    `CreateBy` VARCHAR(255) NULL,
    `CreatedDate` DATETIME(0) NULL,
    `UpdateBy` VARCHAR(255) NULL,
    `UpdateDate` DATETIME(0) NULL,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tblvariant` (
    `Id` INTEGER NOT NULL,
    `IdCategory` VARCHAR(255) NULL,
    `NameVariant` VARCHAR(255) NULL,
    `Description` VARCHAR(255) NULL,
    `IsDelete` BOOLEAN NULL,
    `CreateBy` VARCHAR(255) NULL,
    `CreatedDate` DATETIME(0) NULL,
    `UpdateBy` VARCHAR(255) NULL,
    `UpdateDate` DATETIME(0) NULL,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
