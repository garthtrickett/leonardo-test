import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  async up() {
    this.schema.alterTable('users', (table) => {
      table.dropColumn('id')
      table.uuid('id').primary().notNullable()
    })
  }
}
