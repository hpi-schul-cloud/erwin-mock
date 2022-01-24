import { Injectable } from '@nestjs/common';
import { UserDto, UserSchoolAssignmentDto, SchoolDto, SexDto } from './dtos';

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

const mockUserSchools: UserSchoolAssignmentDto[] = [
    { school: mockSchools[0], role: 'student', start: new Date('2012-08-01'), end: new Date('2022-07-31') },
    { school: mockSchools[0], role: 'student', start: new Date('2011-03-01'), end: new Date('2017-07-31') },
    { school: mockSchools[0], role: 'teacher', start: new Date('1982-08-01'), end: new Date('2027-07-31') },
    { school: mockSchools[1], role: 'student', start: new Date('2009-08-01'), end: new Date('2020-07-31') },
    { school: mockSchools[1], role: 'teacher', start: new Date('1985-01-01'), end: new Date('2029-12-31') },
    {
        school: mockSchools[1],
        role: 'class-representative',
        start: new Date('2022-01-01'),
        end: new Date('2023-01-01'),
    },
    { school: mockSchools[2], role: 'student', start: new Date('2022-05-01'), end: new Date('2025-04-30') },
    { school: mockSchools[2], role: 'student', start: new Date('2022-05-01'), end: new Date('2026-04-30') },
    { school: mockSchools[2], role: 'teacher', start: new Date('2015-01-01'), end: new Date('2055-01-01') },
    { school: mockSchools[3], role: 'student', start: new Date('2022-08-01'), end: new Date('2026-07-31') },
    { school: mockSchools[3], role: 'teacher', start: new Date('2000-09-30'), end: new Date('2025-08-01') },
    {
        school: mockSchools[3],
        role: 'guardian-representative',
        start: new Date('2020-07-08'),
        end: new Date('2030-12-31'),
    },
];

const mockUsers: UserDto[] = [
    {
        id: '4dfb0d08-5a25-4092-8b5f-bf1e1cadfd70',
        studentId: '513-06-9822',
        firstName: 'Ricardo',
        lastName: 'Parton',
        preferredName: 'rparton',
        sex: SexDto.NONE,
        dateOfBirth: new Date('2005-02-13'),
        schools: [mockUserSchools[0] ?? {}],
    },
    {
        id: 'a13f1b1a-4dc2-454d-ae8a-855fd956723c',
        studentId: '252-40-7829',
        firstName: 'Fabiano',
        lastName: 'Castelyn',
        preferredName: 'fcastelyn',
        sex: SexDto.NONE,
        dateOfBirth: new Date('2000-02-28'),
        schools: [mockUserSchools[1]],
    },
    {
        id: '7b85d42f-1b1a-874h-av8a-855fd963823c',
        firstName: 'Erika',
        lastName: 'Rein',
        preferredName: 'erika.rein',
        sex: SexDto.FEMALE,
        dateOfBirth: new Date('1962-11-07'),
        schools: [mockUserSchools[2]],
    },
    {
        id: 'c40f541a-0e83-45d7-81a0-0f68142ce66d',
        studentId: '106-51-7835',
        firstName: 'Ida',
        lastName: 'Rawlinson',
        preferredName: 'irawlinson',
        sex: SexDto.NONE,
        dateOfBirth: new Date('2002-12-09'),
        schools: [mockUserSchools[3]],
    },
    {
        id: '58350a25-0c5e-4ebc-8f2d-ff1728a0d1de',
        firstName: 'Manfred',
        lastName: 'Schmidt',
        preferredName: 'manfred.schmidt',
        sex: SexDto.MALE,
        dateOfBirth: new Date('1960-08-02'),
        schools: [mockUserSchools[4]],
    },
    {
        id: 'ef2e7d8c-5e10-4077-ae77-6ec086cbf1c4',
        firstName: 'Lisa',
        lastName: 'Klein',
        preferredName: 'li.klein',
        sex: SexDto.FEMALE,
        dateOfBirth: new Date('1990-09-13'),
        schools: [mockUserSchools[5]],
    },
    {
        id: 'r40g641a-0e83-45d7-9h72-0f68142ce66d',
        studentId: '789-73-5482',
        firstName: 'Anna',
        lastName: 'Müller',
        preferredName: 'amueller',
        sex: SexDto.FEMALE,
        dateOfBirth: new Date('2006-04-02'),
        schools: [mockUserSchools[6]],
        // classes: [mockUserSchools[1]],
    },
    {
        id: 'c40f541a-22t4-45d7-81a0-0f68142ce66d',
        studentId: '789-74-6472',
        firstName: 'Anja',
        lastName: 'Müller',
        preferredName: 'anmueller',
        sex: SexDto.FEMALE,
        dateOfBirth: new Date('2006-04-02'),
        schools: [mockUserSchools[7]],
    },
    {
        // same id, when teacher has different roles at two different schools?
        id: 'ef2e7d8c-5e10-4077-ae77-6ec086cbf1c4',
        firstName: 'Lisa',
        lastName: 'Klein',
        preferredName: 'li.klein',
        sex: SexDto.FEMALE,
        dateOfBirth: new Date('1990-09-13'),
        schools: [mockUserSchools[8]],
    },
    {
        id: 'c54f579b-de32-40f7-62g0-0f68142ce44x',
        // still has her old studentId
        studentId: '123-45-6789',
        firstName: 'Lisa',
        lastName: 'Berger',
        preferredName: 'liberger',
        sex: SexDto.FEMALE,
        dateOfBirth: new Date('2015-01-29'),
        schools: [mockUserSchools[9]],
    },
    {
        // same id, when same teacher is at two different schools?
        id: '58350a25-0c5e-4ebc-8f2d-ff1728a0d1de',
        firstName: 'Manfred',
        lastName: 'Schmidt',
        preferredName: 'manfred.schmidt',
        sex: SexDto.MALE,
        dateOfBirth: new Date('1960-08-02'),
        schools: [mockUserSchools[10]],
    },
    {
        id: '25a934d5-236d-4fa5-bb34-0ecf3b1ea0c5',
        firstName: 'Andrew',
        lastName: 'McKinney',
        preferredName: 'amckinney',
        sex: SexDto.DIVERSE,
        dateOfBirth: new Date('1980-10-08'),
        schools: [mockUserSchools[11]],
    },
];

/* const mockClasses: ClassDto[] = [
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
]; */

const mockUsersSchoolsMap = new Map<string, UserSchoolAssignmentDto[]>();

for (let i = 0; i < mockUsers.length; i += 1) {
    mockUsersSchoolsMap.set(mockUsers[i].id, [mockUserSchools[i]]);
}

@Injectable()
export class UsersService {
    public async getUsers(): Promise<UserDto[]> {
        return Promise.resolve(mockUsers);
    }

    public async getUser(id: string): Promise<UserDto> {
        const user = mockUsers.find((e) => e.id === id);

        if (user) {
            return Promise.resolve(user);
        }

        throw new Error();
    }

    public async getUserSchools(id: string): Promise<Array<UserSchoolAssignmentDto>> {
        const userAssignmentsMap = mockUsersSchoolsMap.get(id);

        if (userAssignmentsMap) {
            return Promise.resolve(userAssignmentsMap);
        }

        throw new Error();
    }
}
