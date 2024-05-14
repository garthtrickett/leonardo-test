/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import TasksController from '#controllers/tasks_controller'
import SchedulesController from '#controllers/schedules_controller'

// TASKS
router.get('tasks', [TasksController, 'index'])
router.post('tasks', [TasksController, 'store'])
router.get('tasks/:id', [TasksController, 'show'])
router.delete('tasks/:id', [TasksController, 'destroy'])

// SCHEDULES
router.get('schedules', [SchedulesController, 'index'])
router.post('schedules', [SchedulesController, 'store'])
router.get('schedules/:id', [SchedulesController, 'show'])
router.delete('schedules/:id', [SchedulesController, 'destroy'])

// TASK AND SCHEDULE
router.post('schedules/assignTask', [SchedulesController, 'assignTask'])
router.post('schedules/removeTask/:taskId', [SchedulesController, 'removeTask'])
