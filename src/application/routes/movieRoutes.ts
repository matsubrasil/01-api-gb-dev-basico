import { Router } from 'express'

import { CreateMovieController } from '../controller/movie/createMovieController'
import { ListMoviesByReleaseDateController } from '../controller/movie/listMoviesByReleaseDateController'

const movieRoutes = Router()
const createMovieController = new CreateMovieController()
const listMoviesByReleaseDateController =
  new ListMoviesByReleaseDateController()

movieRoutes.post('/', createMovieController.handle)
movieRoutes.get('/listByRelease', listMoviesByReleaseDateController.handle)

export { movieRoutes }
