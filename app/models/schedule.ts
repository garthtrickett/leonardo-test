import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, beforeCreate, hasMany } from '@adonisjs/lucid/orm'
import Account from '#models/account'
import Agent from '#models/agent'

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

  // I would put created_at and updated_at here for both Schedules and Tasks but im getting an error so leaving it out. Would investigate further on real project

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
