import { Controller, Get, HttpException, HttpStatus, Param } from '@nestjs/common';
import { ApiProduces, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserDto, UserSchoolAssignmentDto } from './dtos';
import { UsersService } from './users.service';

@Controller('/api/users')
@ApiTags('users')
@ApiProduces('application/json')
export class UsersController {
    public constructor(private readonly service: UsersService) {}

    @Get()
    @ApiResponse({
        status: 200,
        description: 'Returns all associated user data.',
        type: UserDto,
    })
    public async getUsers(): Promise<UserDto[]> {
        return this.service.getUsers();
    }

    @Get(':id')
    @ApiResponse({
        status: 200,
        description: 'Returns associated user data.',
        type: UserDto,
    })
    @ApiResponse({ status: 404, description: 'User not found.' })
    public async getUser(@Param('id') id: string): Promise<UserDto> {
        try {
            return await this.service.getUser(id);
        } catch (err) {
            throw new HttpException('User not found', HttpStatus.NOT_FOUND);
        }
    }

    @Get(':id/schools')
    @ApiResponse({
        status: 200,
        description: 'Returns associated user schools.',
        type: [UserSchoolAssignmentDto],
    })
    @ApiResponse({ status: 404, description: 'User not found.' })
    public async getUserSchools(@Param('id') id: string): Promise<Array<UserSchoolAssignmentDto>> {
        try {
            return await this.service.getUserSchools(id);
        } catch (err) {
            throw new HttpException('User not found', HttpStatus.NOT_FOUND);
        }
    }
}
