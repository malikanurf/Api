'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
Route.group(()=>{

	Route.get('students', 'StudentController.index')
	Route.get('students/:id', 'StudentController.show')
	Route.post('students', 'StudentController.store')
	Route.put('students/:id', 'StudentController.update')
	Route.delete('students/:id', 'StudentController.delete')
	Route.get('tokobukus', 'TokobukuController.index')
	Route.get('tokobukus/:id', 'TokobukuController.show')
	Route.post('tokobukus', 'TokobukuController.store')
	Route.put('tokobukus/:id', 'TokobukuController.update')
	Route.delete('tokobukus/:id', 'TokobukuController.delete')
	Route.get('users', 'UserController.index')
	Route.get('users/:id', 'UserController.show')
	Route.post('users', 'UserController.store')
	Route.put('users/:id', 'UserController.update')
	Route.delete('users/:id', 'UserController.delete')
}).prefix('/api/v1')
