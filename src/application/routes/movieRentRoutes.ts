import { Router } from 'express'
import { CreateMovieRentController } from '../controller/movie-rent/createMovieRentController'
import { ListMoviesRentedByUsersController } from '../controller/movie-rent/listMoviesRentedByUsersController'

const movieRentRoutes = Router()

const createMovieRentController = new CreateMovieRentController()
const listMoviesRentedByUsersController =
  new ListMoviesRentedByUsersController()

movieRentRoutes.post('/', createMovieRentController.handle)
movieRentRoutes.get('/byUsers', listMoviesRentedByUsersController.handle)

export { movieRentRoutes }
