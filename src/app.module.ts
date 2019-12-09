import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/tasks', { useNewUrlParser: true, useFindAndModify: false }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
