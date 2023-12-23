import 'express-async-errors'
import express, { Request, Response, NextFunction } from 'express'
import { routes } from './application/routes'
import { AppError } from './application/errors/appErrors'

const app = express()
app.use(express.json())

app.use('/api/v1/', routes)

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: 'error',
        message: err.message,
      })
    }
    return response.status(500).json({
      status: 'error',
      message: `Internal server error - ${err.message}`,
    })
  }
)

app.listen(3333, () => console.log('server running on port 3333'))
