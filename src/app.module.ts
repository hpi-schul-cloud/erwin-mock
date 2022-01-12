import { Module } from '@nestjs/common';
import { FederalApiModule } from './federal-api';

@Module({
    imports: [FederalApiModule],
    controllers: [],
    providers: [],
})
export class AppModule {}
