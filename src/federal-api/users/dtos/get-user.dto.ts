import { ClassDto } from './class.dto';
import { UserSchoolsAssignmentsDto } from './user-schools-assignments.dto';
import { GuardianDto } from './guardian.dto';
import { SexDto } from './sex.dto';
import { SubjectDto } from './subject.dto';

export class GetUserDto {
    id: string;
    studentId?: string;
    firstName: string;
    lastName: string;
    preferredName: string;
    dateOfBirth: Date;
    sex: SexDto;
    schools: Array<UserSchoolsAssignmentsDto>;
    classes?: Array<ClassDto>;
    subjects?: Array<SubjectDto>;
    guardians?: Array<GuardianDto>;
}
