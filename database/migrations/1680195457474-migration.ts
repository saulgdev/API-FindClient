import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1680195457474 implements MigrationInterface {
    name = 'migration1680195457474'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "cliente" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "phone" character varying NOT NULL, CONSTRAINT "UQ_503f81286c5e49acd6a832abf43" UNIQUE ("email"), CONSTRAINT "PK_18990e8df6cf7fe71b9dc0f5f39" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "contato" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "phone" character varying NOT NULL, "userId" integer, CONSTRAINT "PK_9592a5553a9dfaeebe7d0cd0e5b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "contato" ADD CONSTRAINT "FK_6a1c6136b834ed3d34e9caa7eaf" FOREIGN KEY ("userId") REFERENCES "cliente"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contato" DROP CONSTRAINT "FK_6a1c6136b834ed3d34e9caa7eaf"`);
        await queryRunner.query(`DROP TABLE "contato"`);
        await queryRunner.query(`DROP TABLE "cliente"`);
    }

}
