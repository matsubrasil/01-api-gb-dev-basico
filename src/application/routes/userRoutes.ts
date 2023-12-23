import { Router } from 'express'
import { CreateUserController } from '../controller/user/createUserController'
import { ListUsersController } from '../controller/user/listUsersController'

const userRoutes = Router()
const createUserController = new CreateUserController()
const listUsersController = new ListUsersController()

userRoutes.post('/', createUserController.handle)
userRoutes.get('/', listUsersController.handle)

export { userRoutes }
