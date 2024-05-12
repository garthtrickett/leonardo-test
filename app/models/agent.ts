import { DateTime } from 'luxon'
import { BaseModel, column, beforeCreate } from '@adonisjs/lucid/orm'
import { v4 as uuidv4 } from 'uuid'

export default class Agent extends BaseModel {
  @column({ isPrimary: true })
  declare id: string

  @column()
  declare name: string

  @beforeCreate()
  public static assignUuid(agent: Agent) {
    agent.id = uuidv4()
  }
}
