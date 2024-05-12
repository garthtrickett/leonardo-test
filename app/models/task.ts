import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, beforeCreate } from '@adonisjs/lucid/orm'
import Account from '#models/account'
import Schedule from '#models/account'
import { v4 as uuidv4 } from 'uuid'

export default class Task extends BaseModel {
  @column({ isPrimary: true })
  declare id: string

  @column()
  declare accountId: string

  @column()
  declare scheduleId: string

  @column.dateTime()
  declare startTime: DateTime

  @column()
  declare duration: number

  @column()
  declare type: 'break' | 'work'

  @belongsTo(() => Account)
  public account: belongsTo<typeof Account>

  @belongsTo(() => Schedule)
  public schedule: belongsTo<typeof Schedule>

  @beforeCreate()
  public static assignUuid(task: Task) {
    task.id = uuidv4()
  }
}
