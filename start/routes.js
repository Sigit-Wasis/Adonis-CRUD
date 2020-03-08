'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

// ADD POST
Route.get('/posts', 'PostController.index').as('posts.index')
Route.get('/posts/create', 'PostController.create').as('posts.create')
Route.post('/posts/store', 'PostController.store').as('posts.store')
Route.get('/posts/edit/:id', 'PostController.edit').as('posts.edit')
Route.post('/posts/update/:id', 'PostController.update').as('posts.update')
Route.get('/posts/delete/:id', 'PostController.delete').as('posts.delete')

// ADD KAJIAN
Route.get('/kajians', 'PostController.index').as('kajians.index')
Route.get('/kajians/create', 'PostController.create').as('kajians.create')
Route.post('/kajians/store', 'PostController.store').as('kajians.store')
Route.get('/kajians/edit/:id', 'PostController.edit').as('kajians.edit')
Route.post('/kajians/update/:id', 'PostController.update').as('kajians.update')
Route.get('/kajians/delete/:id', 'PostController.delete').as('kajians.delete')

Route.get('login', 'Auth/LoginController.index').as('login.index').middleware(['RedirectIfAuthenticated'])
Route.post('login', 'Auth/LoginController.check').as('login.check').middleware(['RedirectIfAuthenticated'])
Route.get('logout', 'Auth/LoginController.logout').as('logout').middleware(['Authenticate'])
Route.get('/register', 'Auth/RegisterController.index').as('register.index').middleware(['RedirectIfAuthenticated'])
Route.post('/register', 'Auth/RegisterController.store').as('register.store').middleware(['RedirectIfAuthenticated'])

Route.get('/dashboard', 'DashboardController.index').as('dashboard')
