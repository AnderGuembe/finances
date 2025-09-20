import { Category } from "./category.model";

export interface Movement {
    id: number,
    amount: number,
    date: Date,
    description: string,
    isIncome: boolean,
    category: Category
}