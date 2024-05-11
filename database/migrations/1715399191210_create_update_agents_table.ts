import { BaseSchema } from '@adonisjs/lucid/schema'

export default class UpdateAgents extends BaseSchema {
  protected tableName = 'agents'

  public async up() {
    this.schema.dropTableIfExists(this.tableName)
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary().notNullable()
      // add other columns here
    })
  }

  public async down() {
    this.schema.dropTableIfExists(this.tableName)
    this.schema.createTable(this.tableName, (table) => {
      table.integer('id').primary().notNullable()
      // add other columns here
    })
  }
}
