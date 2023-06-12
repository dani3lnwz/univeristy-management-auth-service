import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import routes from './app/routes';
import httpStatus from 'http-status';
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

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not Found',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'Api not found',
      },
    ],
  });
  next();
});

export default app;

// {
//   "password": "123456",
//   "student": {
//     "name":{
//       "firstName":"Tuhuran",
//       "lastName":"Newaz",
//       "middleName":"Daniel"
//     },
//     "dateOfBirth":"28-11-1992",
//     "gender":"male",
//     "bloodGroup": "O+",
//     "email": "user@gmail.com",
//     "contactNo": "user_4",
//     "emergencyContactNo": "0176783738494",
//     "presentAddress": "COMILLA",
//     "permanentAddress": "COMILLA",
//     "academicFaculty": "",
//     "academicDepartment": "",
//     "academicSemester": "",
//     "guardian": {
//       "fatherName": "MD.ABBU",
//       "fatherOccupation": "Business Man",
//       "fatherContactNo": "01787386837638",
//       "motherName": "Mrs.AMMU",
//       "motherOccupation": "Housewife",
//       "motherContactNo": "0153637457373",
//       "address": "COMILLA"
//     },
//     "localGuardian": {
//       "name": "Jannatul Ferdous",
//       "occupation": "Service Holder",
//       "contactNo": "017273637823",
//       "address": "COMILLA"
//     }
//   }
// }
