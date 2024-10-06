import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateSampleTable1728199704792 implements MigrationInterface {
    name = 'CreateSampleTable1728199704792'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "sample" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "description" text NOT NULL, "password" text NOT NULL, CONSTRAINT "PK_1e92238b098b5a4d13f6422cba7" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "sample"`);
    }

}
