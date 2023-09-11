CREATE TABLE "travels" (
	"id" SERIAL,
	"passengerId" INT NOT NULL,
	"flightId" INT NOT NULL,
	PRIMARY KEY ("id")
);

CREATE TABLE "flights" (
	"id" SERIAL,
	"origin" INT NOT NULL,
	"destination" INT NOT NULL,
	"date" TIMESTAMP NOT NULL,
	PRIMARY KEY ("id")
);

CREATE TABLE "passengers" (
	"id" SERIAL,
	"firstName" TEXT NOT NULL,
	"lastName" TEXT NOT NULL,
	PRIMARY KEY ("id")
);

CREATE TABLE "cities" (
	"id" SERIAL,
	"name" TEXT NOT NULL,
	PRIMARY KEY ("id")
);

ALTER TABLE "passengers" ADD CONSTRAINT "firstName_length_check" CHECK (LENGTH("firstName") BETWEEN 2 AND 100);
ALTER TABLE "passengers" ADD CONSTRAINT "lastName_length_check" CHECK (LENGTH("lastName") BETWEEN 2 AND 100);

ALTER TABLE "cities" ADD CONSTRAINT "name_unique" UNIQUE ("name");

ALTER TABLE "travels" ADD CONSTRAINT "travels_fk0" FOREIGN KEY ("passengerId") REFERENCES "passengers"("id");

ALTER TABLE "travels" ADD CONSTRAINT "travels_fk1" FOREIGN KEY ("flightId") REFERENCES "flights"("id");

ALTER TABLE "flights" ADD CONSTRAINT "flights_fk0" FOREIGN KEY ("origin") REFERENCES "cities"("id");

ALTER TABLE "flights" ADD CONSTRAINT "flights_fk1" FOREIGN KEY ("destination") REFERENCES "cities"("id");
