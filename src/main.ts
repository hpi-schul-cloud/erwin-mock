import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap(): Promise<void> {
    const app = await NestFactory.create(AppModule);
    const config = new DocumentBuilder()
        .setTitle('ErWin ISLE - Länder API')
        .setDescription(
            'A (partial) decription of the Länder-API for prototyping purposes. See https://github.com/hpi-schul-cloud/idm_doc',
        )
        .setVersion('0.1')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('swagger', app, document);
    await app.listen(3060);
}
// eslint-disable-next-line @typescript-eslint/no-floating-promises
bootstrap();
