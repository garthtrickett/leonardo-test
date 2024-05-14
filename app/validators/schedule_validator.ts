import vine from '@vinejs/vine'

/**
 * Validates the task assignment action
 */
export const assignTaskValidator = vine.compile(
  vine.object({
    taskId: vine.string().uuid(),
    scheduleId: vine.string().uuid(),
  })
)
