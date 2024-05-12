import { BaseSchema } from '@adonisjs/lucid/schema'

export default class AlterTasks extends BaseSchema {
  protected tableName = 'tasks'

  public async up() {}

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.integer('account_id').alter()
    })
  }
}
