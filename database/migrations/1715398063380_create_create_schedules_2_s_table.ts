import { BaseSchema } from '@adonisjs/lucid/schema'

export default class CreateSchedules extends BaseSchema {
  protected tableName = 'schedules'

  public async up() {
    this.schema.dropTableIfExists(this.tableName)

    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary().notNullable()
      table.uuid('account_id')
      table.uuid('agent_id')
      table.dateTime('start_time')
      table.dateTime('end_time')
      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })
  }

  public async down() {
    this.schema.dropTableIfExists(this.tableName)
  }
}
