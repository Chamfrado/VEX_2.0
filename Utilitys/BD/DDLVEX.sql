-- MySQL Script generated by MySQL Workbench
-- Fri Nov 25 20:54:42 2022
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema VEX_DB
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema VEX_DB
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `VEX_DB` DEFAULT CHARACTER SET utf8 ;
USE `VEX_DB` ;

-- -----------------------------------------------------
-- Table `VEX_DB`.`trader`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `VEX_DB`.`trader` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name_trader` VARCHAR(45) NOT NULL,
  `phone_trader` VARCHAR(45) NOT NULL,
  `pass_trader` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `VEX_DB`.`client`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `VEX_DB`.`client` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name_client` VARCHAR(45) NOT NULL,
  `phone_client` VARCHAR(45) NOT NULL,
  `trader_id` INT NOT NULL,
  PRIMARY KEY (`id`, `trader_id`),
  INDEX `fk_client_trader1_idx` (`trader_id` ASC) VISIBLE,
  CONSTRAINT `fk_client_trader1`
    FOREIGN KEY (`trader_id`)
    REFERENCES `VEX_DB`.`trader` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `VEX_DB`.`product`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `VEX_DB`.`product` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name_product` VARCHAR(45) NOT NULL,
  `price_product` DECIMAL(10,2) NOT NULL,
  `trader_id` INT NOT NULL,
  PRIMARY KEY (`id`, `trader_id`),
  INDEX `fk_product_trader1_idx` (`trader_id` ASC) VISIBLE,
  CONSTRAINT `fk_product_trader1`
    FOREIGN KEY (`trader_id`)
    REFERENCES `VEX_DB`.`trader` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `VEX_DB`.`sale`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `VEX_DB`.`sale` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `date_sale` DATETIME NOT NULL,
  `total_sale` DECIMAL(10,2) NOT NULL,
  `client_id` INT NOT NULL,
  PRIMARY KEY (`id`, `client_id`),
  INDEX `fk_sale_client1_idx` (`client_id` ASC) VISIBLE,
  CONSTRAINT `fk_sale_client1`
    FOREIGN KEY (`client_id`)
    REFERENCES `VEX_DB`.`client` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `VEX_DB`.`product_has_sale`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `VEX_DB`.`product_has_sale` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `product_id` INT NOT NULL,
  `sale_id` INT NOT NULL,
  `quantity_sale_product` INT NOT NULL,
  `price_product_sale` DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (`id`, `product_id`, `sale_id`),
  INDEX `fk_product_has_sale_sale1_idx` (`sale_id` ASC) VISIBLE,
  INDEX `fk_product_has_sale_product_idx` (`product_id` ASC) VISIBLE,
  CONSTRAINT `fk_product_has_sale_product`
    FOREIGN KEY (`product_id`)
    REFERENCES `VEX_DB`.`product` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_product_has_sale_sale1`
    FOREIGN KEY (`sale_id`)
    REFERENCES `VEX_DB`.`sale` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
