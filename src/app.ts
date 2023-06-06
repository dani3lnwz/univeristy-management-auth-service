import express, { Application } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import routes from './app/routes';
const app: Application = express();

app.use(cors());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Application routes
// console.log(app.get('env'))

// app.use('/api/v1/users/', UserRoutes);
// app.use('/api/v1/academic-semesters', AcademicSemesterRoutes);
app.use('/api/v1/', routes);

//Testing
// app.get('/', async (req: Request, res: Response , next: NextFunction) => {
//   Promise.reject(new Error ('Unhandled Promise Rejection'))
// })

app.use(globalErrorHandler);

export default app;
