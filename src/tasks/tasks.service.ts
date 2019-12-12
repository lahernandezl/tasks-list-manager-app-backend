import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from './interface/task.interface';
import { TaskDto } from './dto/task.dto';

@Injectable()
export class TasksService {
    constructor(@InjectModel('Task') private readonly taskModel: Model<Task>) { }
    // fetch all tasks
    async getAllTasks(): Promise<Task[]> {
        const task = await this.taskModel.find().exec();
        return task;
    }
    // Get a single task
    async getTask(taskID: string): Promise<Task> {
        const task = await this.taskModel.findById(taskID).exec();
        return task;
    }
    // post a single task
    async addTask(taskDto: TaskDto): Promise<Task> {
        const newTask = await new this.taskModel(taskDto);
        return newTask.save();
    }
    // Edit task details
    async updateTask(taskID: string, taskDto: TaskDto): Promise<Task> {
        const updatedTask = await this.taskModel
            .findByIdAndUpdate(taskID, taskDto, { new: true });
        return updatedTask;
    }
    // Delete a task
    async deleteTask(taskID: string): Promise<Task> {
        const deletedTask = await this.taskModel.findByIdAndRemove(taskID);
        return deletedTask;
    }
}
