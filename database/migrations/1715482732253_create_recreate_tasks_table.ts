import { BaseSchema } from '@adonisjs/lucid/schema'

export default class CreateTasks extends BaseSchema {
  protected tableName = 'tasks'

  public async up() {
    this.schema.dropTableIfExists(this.tableName)
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary()
      table.uuid('account_id')
      table.uuid('schedule_id')
      table.timestamp('start_time', { useTz: true })
      table.integer('duration')
      table.text('type')
      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
