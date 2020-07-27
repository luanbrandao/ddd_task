// yarn typeorm migration:create -n CreateTasks
// yarn typeorm migrations:run
// yarn typeorm migrations:revert
// yarn typeorm migrations:show
import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateTasks1595877224162 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'tasks',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'title',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'date',
            // no mysql -> timestamp
            type: 'timestamp with time zone',
            isNullable: false,
          },
          {
            name: 'content',
            // no mysql -> timestamp
            type: 'text',
            isNullable: false,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable('tasks');
  }
}
