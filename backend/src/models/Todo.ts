import mongoose, { Document, Schema } from 'mongoose';

export interface ITodo extends Document {
    title: string;
    completed: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const TodoSchema: Schema = new Schema({
    title: { type: String, required: true },
    completed: { type: Boolean, default: false },
}, {
    timestamps: true,
});

export const Todo = mongoose.model<ITodo>('Todo', TodoSchema);