import { Category } from "./category.model";

export interface Movement {
    id: number,
    amount: number,
    date: Date,
    description: string,
    is_deposit: boolean,
    category: Category
}