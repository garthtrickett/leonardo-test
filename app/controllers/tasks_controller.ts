import type { HttpContext } from '@adonisjs/core/http'

import Task from '#models/task'

export default class TasksController {
  public async index({}: HttpContext) {
    const tasks = await Task.all()
    return tasks
  }

  public async store({ request }: HttpContext) {
    const data = request.only(['accountId', 'scheduleId', 'startTime', 'duration', 'type'])
    const task = await Task.create(data)
    return task
  }

  public async show({ params }: HttpContext) {
    const task = await Task.find(params.id)
    return task
  }

  public async destroy({ params }: HttpContext) {
    const task = await Task.find(params.id)
    if (task) {
      await task.delete()
      return { message: 'Task deleted successfully' }
    }
    return { message: 'Task not found' }
  }
}
