import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createTools1617284275756 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'tools',
            columns: [
                {
                    name: "id",
                    type: "integer",
                    isPrimary: true,
                    isGenerated:true,
                    generationStrategy: 'increment'
                },
                {
                    name: "title",
                    type: "varchar"
                },
                {
                    name: "link",
                    type: "varchar"
                },
                {
                    name: "description",
                    type: "varchar"
                },
                {
                    name: "tags",
                    type: "varchar"
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('tools');
    }

}
