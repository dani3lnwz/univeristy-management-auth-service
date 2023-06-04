import express, { Application } from 'express'
import cors from 'cors'
import usersRouter from './app/modules/users/users.route'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
const app: Application = express()

app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Application routes
// console.log(app.get('env'))

app.use('/api/v1/users/', usersRouter)

//Testing
// app.get('/', async (req: Request, res: Response) => {
//   res.send('Working Successfully')
// })

app.use(globalErrorHandler)

export default app
