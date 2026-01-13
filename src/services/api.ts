const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://www.yuksi.dev/public';

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

export async function fetchPartners(limit: number = 100, offset: number = 0): Promise<Partner[]> {
    try {
        const response = await fetch(
            `${API_BASE_URL}/partners/?limit=${limit}&offset=${offset}`,
            {
                method: 'GET',
                headers: {
                    'accept': 'application/json',
                },
            }
        );

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: PartnersResponse = await response.json();
        
        // API response format'ına göre veriyi çıkar
        const partners = data.partners || data.data || data.results || [];
        
        return Array.isArray(partners) ? partners : [];
    } catch (error) {
        console.error('Error fetching partners:', error);
        return [];
    }
}
