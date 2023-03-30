import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1680196044358 implements MigrationInterface {
    name = 'migration1680196044358'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contato" DROP CONSTRAINT "FK_6a1c6136b834ed3d34e9caa7eaf"`);
        await queryRunner.query(`ALTER TABLE "contato" RENAME COLUMN "userId" TO "user"`);
        await queryRunner.query(`ALTER TABLE "contato" ADD CONSTRAINT "FK_a0d5a8eaf8794cbfdee55cc1ba2" FOREIGN KEY ("user") REFERENCES "cliente"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contato" DROP CONSTRAINT "FK_a0d5a8eaf8794cbfdee55cc1ba2"`);
        await queryRunner.query(`ALTER TABLE "contato" RENAME COLUMN "user" TO "userId"`);
        await queryRunner.query(`ALTER TABLE "contato" ADD CONSTRAINT "FK_6a1c6136b834ed3d34e9caa7eaf" FOREIGN KEY ("userId") REFERENCES "cliente"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
