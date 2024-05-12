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

// TASKS
router.get('tasks', [TasksController, 'index'])
router.post('tasks', [TasksController, 'store'])
router.get('tasks/:id', [TasksController, 'show'])
router.delete('tasks/:id', [TasksController, 'destroy'])
