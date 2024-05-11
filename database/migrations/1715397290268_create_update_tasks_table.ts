import { BaseSchema } from '@adonisjs/lucid/schema'

export default class UpdateTasks extends BaseSchema {
  protected tableName = 'tasks'

  public async up() {
    this.schema.dropTableIfExists(this.tableName)

    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary().notNullable()
      table.integer('account_id')
      table.uuid('schedule_id')
      table.dateTime('start_time')
      table.integer('duration')
      table.enum('type', ['break', 'work'])
    })
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('account_id')
      table.dropColumn('schedule_id')
      table.dropColumn('start_time')
      table.dropColumn('duration')
      table.dropColumn('type')
    })
  }
}
