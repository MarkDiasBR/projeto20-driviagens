CREATE TABLE `travels` (
	`id` serial NOT NULL AUTO_INCREMENT,
	`passengerId` INT NOT NULL,
	`flightId` INT NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `flights` (
	`id` serial NOT NULL AUTO_INCREMENT,
	`origin` INT NOT NULL,
	`destination` INT NOT NULL,
	`date` TIMESTAMP NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `passengers` (
	`id` serial NOT NULL AUTO_INCREMENT,
	`firstName` TEXT NOT NULL,
	`lastName` TEXT NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `cities` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`name` TEXT NOT NULL,
	PRIMARY KEY (`id`)
);

ALTER TABLE `travels` ADD CONSTRAINT `travels_fk0` FOREIGN KEY (`passengerId`) REFERENCES `passengers`(`id`);

ALTER TABLE `travels` ADD CONSTRAINT `travels_fk1` FOREIGN KEY (`flightId`) REFERENCES `flights`(`id`);

ALTER TABLE `flights` ADD CONSTRAINT `flights_fk0` FOREIGN KEY (`origin`) REFERENCES `cities`(`id`);

ALTER TABLE `flights` ADD CONSTRAINT `flights_fk1` FOREIGN KEY (`destination`) REFERENCES `cities`(`id`);
