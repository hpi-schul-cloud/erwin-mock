import { SchoolDto } from './school.dto';

export class UserSchoolAssignmentDto {
    school: SchoolDto;
    role: string;
    start: Date;
    end: Date;
}
