import { BaseSchema } from '@adonisjs/lucid/schema'

export default class UpdateAgents extends BaseSchema {
  protected tableName = 'agents'

  public async up() {
    this.schema.dropTableIfExists(this.tableName)
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary().notNullable()
      table.string('name').notNullable()
      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTableIfExists(this.tableName)
    this.schema.createTable(this.tableName, (table) => {
      table.integer('id').primary().notNullable()
      table.string('name').notNullable()
      table.timestamps(true)
    })
  }
}
