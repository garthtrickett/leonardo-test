import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, beforeCreate } from '@adonisjs/lucid/orm'
import Account from '#models/account'
import Agent from '#models/agent'
import { v4 as uuidv4 } from 'uuid'

export default class Schedule extends BaseModel {
  @column({ isPrimary: true })
  declare id: string

  @column()
  declare accountId: string

  @column()
  declare agentId: string

  @column.dateTime()
  declare startTime: DateTime

  @column.dateTime()
  declare endTime: DateTime

  @belongsTo(() => Account)
  public account: BelongsTo<typeof Account>

  @belongsTo(() => Agent)
  public agent: BelongsTo<typeof Agent>

  @hasMany(() => Task)
  public tasks: HasMany<typeof Task>

  @beforeCreate()
  public static assignUuid(schedule: Schedule) {
    schedule.id = uuidv4()
  }
}
