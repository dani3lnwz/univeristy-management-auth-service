import { IAcademicSemester } from './academicSemester.interface';
import { academicSemester } from './academicSemesterModel';

const createSemester = async (
  payload: IAcademicSemester
): Promise<IAcademicSemester> => {
  const result = await academicSemester.create(payload);
  return result;
};

export const AcademicSemesterService = {
  createSemester,
};
