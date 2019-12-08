import { Document } from 'mongoose';

export interface Task extends Document {
    readonly id: string;
    readonly title: string;
    readonly state: string;
    readonly created_at: Date;
}