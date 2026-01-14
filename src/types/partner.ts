export interface Partner {
    id?: number;
    title: string;
    date: string;
    image?: string;
    [key: string]: unknown;
}

export interface PartnersResponse {
    partners?: Partner[];
    data?: Partner[];
    results?: Partner[];
    [key: string]: unknown;
}

