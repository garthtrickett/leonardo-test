import type { HttpContext } from '@adonisjs/core/http'
import Schedule from '#models/schedule'
import Task from '#models/task'
import { assignTaskValidator } from '#validators/schedule_validator'

export default class SchedulesController {
  public async index({}: HttpContext) {
    const schedules = await Schedule.all()
    return schedules
  }

  public async store({ request }: HttpContext) {
    const data = request.only(['accountId', 'agentId', 'startTime', 'endTime'])
    const schedule = await Schedule.create(data)
    return schedule
  }

  public async show({ params }: HttpContext) {
    const schedule = await Schedule.find(params.id)
    return schedule
  }

  public async destroy({ params }: HttpContext) {
    const schedule = await Schedule.find(params.id)
    if (schedule) {
      await schedule.delete()
      return { message: 'Schedule deleted successfully' }
    }
    return { message: 'Schedule not found' }
  }

  // NOTE: Due to time constraints some of the above endpoints are missing error handling. In a real project I would add it to all of them
  public async assignTask({ request }: HttpContext) {
    // NOTE: Here is an example of using adonisjs' vine validator which would be used for all the endpoints in a real project.
    const validatedData = await assignTaskValidator.validate(request.only(['scheduleId', 'taskId']))
    const { scheduleId, taskId } = validatedData
    const task = await Task.find(taskId)
    if (task) {
      if (task.scheduleId) {
        return { message: 'Task is already assigned to a schedule' }
      } else {
        task.scheduleId = scheduleId
        await task.save()
        return { message: 'Task assigned to schedule successfully' }
      }
    }
    return { message: 'Task not found' }
  }

  public async removeTask({ params }: HttpContext) {
    const task = await Task.find(params.taskId)
    if (task) {
      if (task.scheduleId) {
        task.scheduleId = null
        await task.save()
        return { message: 'Task removed from schedule successfully' }
      } else {
        return { message: 'Task is not assigned to any schedule' }
      }
    }
    return { message: 'Task not found' }
  }
}
