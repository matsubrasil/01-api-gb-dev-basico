import { Movie } from '@prisma/client'
import { CreateMovieDTO } from '../../../domain/dto/CreateMovieDTO'
import { prisma } from '../../../prisma/client'
import { AppError } from '../../errors/appErrors'

export class CreateMovieUseCase {
  async execute({
    title,
    duration,
    release_date,
  }: CreateMovieDTO): Promise<Movie> {
    const movieAlreadyExists = await prisma.movie.findUnique({
      where: { title },
    })

    if (movieAlreadyExists) {
      throw new AppError('Movie already exists!!')
    }

    const movie = await prisma.movie.create({
      data: {
        title,
        duration,
        release_date,
      },
    })

    return movie
  }
}
