import { Request, Response } from 'express'
import { ListMoviesRentedByUsers } from '../../usecase/movie-rent/ListMoviesRentedByUsers'

export class ListMoviesRentedByUsersController {
  async handle(req: Request, res: Response) {
    const listMoviesRentedByUsers = new ListMoviesRentedByUsers()
    const result = await listMoviesRentedByUsers.execute()

    return res.status(201).json(result)
  }
}
