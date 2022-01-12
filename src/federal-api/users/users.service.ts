import { Injectable } from '@nestjs/common';
import { GetUserDto, GetUserSchoolsDto, SchoolDto, SexDto } from './dtos';

const mockSchools: SchoolDto[] = [
    {
        id: '1',
        displayName: 'Geschwister-Scholl-Schule',
    },
    {
        id: '2',
        displayName: 'Erich Kästner-Schule',
    },
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
        schools: [mockSchools[0]],
    },
    {
        id: 'a13f1b1a-4dc2-454d-ae8a-855fd956723c',
        studentId: '252-40-7829',
        firstName: 'Fabiano',
        lastName: 'Castelyn',
        preferredName: 'fcastelyn',
        sex: SexDto.NONE,
        dateOfBirth: new Date('2000-02-28'),
        schools: [mockSchools[0]],
    },
    {
        id: 'c40f541a-0e83-45d7-81a0-0f68142ce66d',
        studentId: '106-51-7835',
        firstName: 'Ida',
        lastName: 'Rawlinson',
        preferredName: 'irawlinson',
        sex: SexDto.NONE,
        dateOfBirth: new Date('2002-12-09'),
        schools: [mockSchools[1]],
    },
];

const mockUserSchools: GetUserSchoolsDto[] = [
    { school: mockSchools[0], role: 'student', start: new Date(), end: new Date() },
    { school: mockSchools[0], role: 'student', start: new Date(), end: new Date() },
    { school: mockSchools[1], role: 'student', start: new Date(), end: new Date() },
];

const mockUsersSchoolsMap = new Map<string, GetUserSchoolsDto[]>();
mockUsersSchoolsMap.set(mockUsers[0].id, [mockUserSchools[0]]);
mockUsersSchoolsMap.set(mockUsers[1].id, [mockUserSchools[1]]);
mockUsersSchoolsMap.set(mockUsers[2].id, [mockUserSchools[2]]);

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

    public async getUserSchools(id: string): Promise<Array<GetUserSchoolsDto>> {
        const ret = mockUsersSchoolsMap.get(id);
        if (ret) {
            return ret;
        } else {
            throw Error;
        }
    }
}
