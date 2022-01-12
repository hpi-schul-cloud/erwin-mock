import { Controller, Get, HttpException, HttpStatus, Param } from '@nestjs/common';
import { ApiProduces, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetUserDto, GetUserSchoolsDto } from './dtos';
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
        type: GetUserDto,
    })
    public async getUsers(): Promise<GetUserDto[]> {
        return await this.service.getUsers();
    }

    @Get(':id')
    @ApiResponse({
        status: 200,
        description: 'Returns associated user data.',
        type: GetUserDto,
    })
    @ApiResponse({ status: 404, description: 'User not found.' })
    public async getUser(@Param('id') id: string): Promise<GetUserDto> {
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
        type: [GetUserSchoolsDto],
    })
    @ApiResponse({ status: 404, description: 'User not found.' })
    public async getUserSchools(@Param('id') id: string): Promise<Array<GetUserSchoolsDto>> {
        try {
            return await this.service.getUserSchools(id);
        } catch (err) {
            throw new HttpException('User not found', HttpStatus.NOT_FOUND);
        }
    }
}
