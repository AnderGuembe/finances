export const SORT_DATE_ASC = 'date,asc';
export const SORT_DATE_DESC = 'date,desc';

export interface Pageable {
    sort?: string;
    offset?: number;
    page?: number;
    size?: number;
    unpaged?: boolean;
    paged?: boolean;
}

export interface Page<T> {
    content: T[];
    page: {
        size: number;
        totalElements: number;
        totalPages: number;
        number: number;
    }
}
