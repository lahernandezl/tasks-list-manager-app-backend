import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskController } from './task.controller';
import { TaskSchema } from './schema/task.schema';
import { TasksService } from './tasks.service';

@Module({
  imports: [
      MongooseModule.forFeature([{name: 'Task', schema: TaskSchema}]),
  ],
  providers: [
      TasksService,
  ],
  controllers: [
    TaskController,
  ],
})
export class TasksModule {}
