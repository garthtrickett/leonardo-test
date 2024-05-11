import { BaseSchema } from '@adonisjs/lucid/schema'

export default class DropTables extends BaseSchema {
  public async up() {
    this.schema.dropTableIfExists('alter_users_ids')
    this.schema.dropTableIfExists('change_user_id_to_uiids')
    this.schema.dropTableIfExists('create_schedules')
  }

  public async down() {
    // Recreate the tables if necessary
  }
}
