import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import { StandModule } from './stand/stand.module';

async function bootstrap() {
  //Creates a new instance of a nest js application
  const app = await NestFactory.create(StandModule);
  app.enableCors({ origin: '*' });
  app.connectMicroservice({
    transport: Transport.TCP,
  });
  await app.startAllMicroservices();

  const port = process.env.PORT || 5001;
  await app.listen(port, () => console.log(`Listening on port ${port}`));
}
bootstrap();
