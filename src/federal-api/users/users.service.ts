import { Injectable } from '@nestjs/common';
import { GetUserDto, UserSchoolsAssignmentsDto, SchoolDto, SexDto, ClassDto } from './dtos';

const mockSchools: SchoolDto[] = [
    {
        id: '1',
        displayName: 'Geschwister-Scholl-Schule',
    },
    {
        id: '2',
        displayName: 'Erich Kästner-Schule',
    },
    {
        id: '3',
        displayName: 'Staatliche Berufsbildende Schule für Wirtschaft und Soziales',
    },
    {
        id: '4',
        displayName: 'Grundschule Auf der Lieth',
    },
];

const mockUserSchools: UserSchoolsAssignmentsDto[] = [
    { school: mockSchools[0], role: 'student', start: new Date(), end: new Date() },
    { school: mockSchools[0], role: 'student', start: new Date(), end: new Date() },
    { school: mockSchools[0], role: 'teacher', start: new Date(), end: new Date() },
    { school: mockSchools[1], role: 'student', start: new Date(), end: new Date() },
    { school: mockSchools[1], role: 'teacher', start: new Date(), end: new Date() },
    { school: mockSchools[1], role: 'class-representative', start: new Date(), end: new Date() },
    { school: mockSchools[2], role: 'student', start: new Date(), end: new Date() },
    { school: mockSchools[2], role: 'student', start: new Date(), end: new Date() },
    { school: mockSchools[2], role: 'teacher', start: new Date(), end: new Date() },
    { school: mockSchools[3], role: 'student', start: new Date(), end: new Date() },
    { school: mockSchools[3], role: 'teacher', start: new Date(), end: new Date() },
    { school: mockSchools[3], role: 'guardian-representative', start: new Date(), end: new Date() },
];

const mockUsers: GetUserDto[] = [
    {
        id: '4dfb0d08-5a25-4092-8b5f-bf1e1cadfd70',
        studentId: '513-06-9822',
        firstName: 'Ricardo',
        lastName: 'Parton',
        preferredName: 'rparton',
        sex: SexDto.NONE,
        dateOfBirth: new Date('2005-02-13'),
        schools: [mockUserSchools[0]],
    },
    {
        id: 'a13f1b1a-4dc2-454d-ae8a-855fd956723c',
        studentId: '252-40-7829',
        firstName: 'Fabiano',
        lastName: 'Castelyn',
        preferredName: 'fcastelyn',
        sex: SexDto.NONE,
        dateOfBirth: new Date('2000-02-28'),
        schools: [mockUserSchools[0]],
    },
    {
        id: '7b85d42f-1b1a-874h-av8a-855fd963823c',
        firstName: 'Erika',
        lastName: 'Rein',
        preferredName: 'erika.rein',
        sex: SexDto.FEMALE,
        dateOfBirth: new Date('1962-11-07'),
        schools: [mockUserSchools[0]],
    },
    {
        id: 'c40f541a-0e83-45d7-81a0-0f68142ce66d',
        studentId: '106-51-7835',
        firstName: 'Ida',
        lastName: 'Rawlinson',
        preferredName: 'irawlinson',
        sex: SexDto.NONE,
        dateOfBirth: new Date('2002-12-09'),
        schools: [mockUserSchools[1]],
    },
    {
        id: '58350a25-0c5e-4ebc-8f2d-ff1728a0d1de',
        firstName: 'Manfred',
        lastName: 'Schmidt',
        preferredName: 'manfred.schmidt',
        sex: SexDto.MALE,
        dateOfBirth: new Date('1960-08-02'),
        schools: [mockUserSchools[1]],
    },
    {
        id: 'ef2e7d8c-5e10-4077-ae77-6ec086cbf1c4',
        firstName: 'Lisa',
        lastName: 'Klein',
        preferredName: 'li.klein',
        sex: SexDto.FEMALE,
        dateOfBirth: new Date('1990-09-13'),
        schools: [mockUserSchools[1]],
    },
    {
        id: 'r40g641a-0e83-45d7-9h72-0f68142ce66d',
        studentId: '789-73-5482',
        firstName: 'Anna',
        lastName: 'Müller',
        preferredName: 'amueller',
        sex: SexDto.FEMALE,
        dateOfBirth: new Date('2006-04-02'),
        schools: [mockUserSchools[2]],
        //classes: [mockUserSchools[1]],
    },
    {
        id: 'c40f541a-22t4-45d7-81a0-0f68142ce66d',
        studentId: '789-74-6472',
        firstName: 'Anja',
        lastName: 'Müller',
        preferredName: 'anmueller',
        sex: SexDto.FEMALE,
        dateOfBirth: new Date('2006-04-02'),
        schools: [mockUserSchools[2]],
    },
    {
        //same id, when teacher has different roles at two different schools?
        id: 'ef2e7d8c-5e10-4077-ae77-6ec086cbf1c4',
        firstName: 'Lisa',
        lastName: 'Klein',
        preferredName: 'li.klein',
        sex: SexDto.FEMALE,
        dateOfBirth: new Date('1990-09-13'),
        schools: [mockUserSchools[2]],
    },
    {
        id: 'c54f579b-de32-40f7-62g0-0f68142ce44x',
        //still has her old studentId
        studentId: '123-45-6789',
        firstName: 'Lisa',
        lastName: 'Berger',
        preferredName: 'liberger',
        sex: SexDto.FEMALE,
        dateOfBirth: new Date('2015-01-29'),
        schools: [mockUserSchools[3]],
    },
    {
        //same id, when same teacher is at two different schools?
        id: '58350a25-0c5e-4ebc-8f2d-ff1728a0d1de',
        firstName: 'Manfred',
        lastName: 'Schmidt',
        preferredName: 'manfred.schmidt',
        sex: SexDto.MALE,
        dateOfBirth: new Date('1960-08-02'),
        schools: [mockUserSchools[3]],
    },
    {
        id: '25a934d5-236d-4fa5-bb34-0ecf3b1ea0c5',
        firstName: 'Andrew',
        lastName: 'McKinney',
        preferredName: 'amckinney',
        sex: SexDto.DIVERSE,
        dateOfBirth: new Date('1980-10-08'),
        schools: [mockUserSchools[3]],
    },
];

/*const mockClasses: ClassDto[] = [
    {
        id: '1',
        displayName: 'Mathe',
        summary: 'Algebra 1',
    },
    {
        id: '2',
        displayName: 'Englisch - Grundlagen',
    },
    {
        id: '3',
        displayName: 'Werkstoffkunde',
        summary: 'Holzmaterialien',
        school: [mockSchools[3]],
        schoolYear: '2020/2021',
    },
    {
        id: '4',
        displayName: 'Deutsch - Leistungskurs',
    },
];*/

const mockUsersSchoolsMap = new Map<string, UserSchoolsAssignmentsDto[]>();
mockUsersSchoolsMap.set(mockUsers[0].id, [mockUserSchools[0]]);
mockUsersSchoolsMap.set(mockUsers[1].id, [mockUserSchools[1]]);
mockUsersSchoolsMap.set(mockUsers[2].id, [mockUserSchools[2]]);
mockUsersSchoolsMap.set(mockUsers[3].id, [mockUserSchools[3]]);
mockUsersSchoolsMap.set(mockUsers[4].id, [mockUserSchools[4]]);
mockUsersSchoolsMap.set(mockUsers[5].id, [mockUserSchools[5]]);
mockUsersSchoolsMap.set(mockUsers[6].id, [mockUserSchools[6]]);
mockUsersSchoolsMap.set(mockUsers[7].id, [mockUserSchools[7]]);
mockUsersSchoolsMap.set(mockUsers[8].id, [mockUserSchools[8]]);
mockUsersSchoolsMap.set(mockUsers[9].id, [mockUserSchools[9]]);
mockUsersSchoolsMap.set(mockUsers[10].id, [mockUserSchools[10]]);
mockUsersSchoolsMap.set(mockUsers[11].id, [mockUserSchools[11]]);

@Injectable()
export class UsersService {
    public async getUsers(): Promise<GetUserDto[]> {
        return mockUsers;
    }

    public async getUser(id: string): Promise<GetUserDto> {
        const ret = mockUsers.find((e) => e.id === id);
        if (ret) {
            return ret;
        } else {
            throw Error;
        }
    }

    public async getUserSchools(id: string): Promise<Array<UserSchoolsAssignmentsDto>> {
        const ret = mockUsersSchoolsMap.get(id);
        if (ret) {
            return ret;
        } else {
            throw Error;
        }
    }
}
