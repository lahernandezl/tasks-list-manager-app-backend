import * as mongoose from 'mongoose';

export const TaskSchema = new mongoose.Schema ({
    id: String,
    title: String,
    state: String,
    created_at: {type: Date, default: Date.now},
})