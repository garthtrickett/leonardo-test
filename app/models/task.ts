import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Task extends BaseModel {
  @column({ isPrimary: true })
  declare id: string

  @column()
  declare accountId: number

  @column()
  declare scheduleId: string

  @column.dateTime()
  declare startTime: DateTime

  @column()
  declare duration: number

  @column()
  declare type: 'break' | 'work'

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
