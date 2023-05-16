import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle('Redocly  example')
  .setDescription('The Redocly  API description')
  .setVersion('1.0')
  .addTag('Redocly ')
  .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  // const outputPath = path.resolve(process.cwd(), 'swagger.json');
  // writeFileSync(outputPath, JSON.stringify(document), { encoding: 'utf8'});

  await app.listen(3000);
}
bootstrap();
