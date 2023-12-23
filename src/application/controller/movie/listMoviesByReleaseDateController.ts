import { Request, Response } from 'express'
import { ListMoviesByReleaseDateUseCase } from '../../usecase/movie/ListMoviesByReleaseDateUseCase'

export class ListMoviesByReleaseDateController {
  async handle(req: Request, res: Response) {
    const listMoviesByReleaseDateUseCase = new ListMoviesByReleaseDateUseCase()
    const result = await listMoviesByReleaseDateUseCase.execute()

    return res.status(200).json(result)
  }
}
