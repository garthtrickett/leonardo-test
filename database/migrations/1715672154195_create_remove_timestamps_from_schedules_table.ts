import { BaseSchema } from '@adonisjs/lucid/schema'

export default class RemoveTimestampsFromSchedules extends BaseSchema {
  protected tableName = 'schedules'

  public async up() {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('created_at')
      table.dropColumn('updated_at')
    })
  }

  public async down() {
    this.schema.table(this.tableName, (table) => {
      table.timestamp('created_at').nullable()
      table.timestamp('updated_at').nullable()
    })
  }
}
