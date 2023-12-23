import { Router } from 'express'
import { userRoutes } from './userRoutes'
import { movieRoutes } from './movieRoutes'
import { movieRentRoutes } from './movieRentRoutes'

const routes = Router()

routes.use('/users', userRoutes)
routes.use('/movies', movieRoutes)
routes.use('/movies/rent', movieRentRoutes)

export { routes }
