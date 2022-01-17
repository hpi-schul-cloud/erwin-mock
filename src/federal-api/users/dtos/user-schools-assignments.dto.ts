import { SchoolDto } from './school.dto';

export class UserSchoolsAssignmentsDto {
    school: SchoolDto;
    role: string;
    start: Date;
    end: Date;
}
