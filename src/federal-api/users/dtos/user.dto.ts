import { ClassDto } from './class.dto';
import { UserSchoolAssignmentDto } from './user-school-assignment.dto';
import { GuardianDto } from './guardian.dto';
import { SexDto } from './sex.dto';
import { SubjectDto } from './subject.dto';

export class UserDto {
    id: string;
    studentId?: string;
    firstName: string;
    lastName: string;
    preferredName: string;
    dateOfBirth: Date;
    sex: SexDto;
    schools: Array<UserSchoolAssignmentDto>;
    classes?: Array<ClassDto>;
    subjects?: Array<SubjectDto>;
    guardians?: Array<GuardianDto>;
}
