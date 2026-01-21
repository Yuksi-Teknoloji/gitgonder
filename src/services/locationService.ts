import { apiGet } from './http';
import { API_ENDPOINTS } from '../constants/apiEndpoints';

export interface StateItem {
    id?: number | string;
    name: string;
    state_name?: string;
    title?: string;
    iso2?: string;
}

interface StatesResponse {
    data?: StateItem[];
    states?: StateItem[];
    results?: StateItem[];
    items?: StateItem[];
}

export async function fetchStates(
    countryId: number = 225,
    limit: number = 100,
    offset: number = 0
): Promise<StateItem[]> {
    const query = `?country_id=${countryId}&limit=${limit}&offset=${offset}`;
    const response = await apiGet<StatesResponse | StateItem[]>(`${API_ENDPOINTS.LOGISTICS_STATES}${query}`);

    const rawList = Array.isArray(response)
        ? response
        : response.states || response.data || response.results || response.items || [];

    const normalized = (Array.isArray(rawList) ? rawList : [])
        .map((item) => ({
            id: item.id,
            iso2: item.iso2,
            name: (item.name || item.state_name || item.title || '').trim(),
        }))
        .filter((item) => item.name.length > 0);

    return normalized.sort((a, b) => {
        const numA = a.iso2 ? parseInt(a.iso2, 10) : Number.NaN;
        const numB = b.iso2 ? parseInt(b.iso2, 10) : Number.NaN;

        if (!Number.isNaN(numA) && !Number.isNaN(numB)) {
            return numA - numB;
        }

        if (a.iso2 && b.iso2) {
            return a.iso2.localeCompare(b.iso2, 'tr', { sensitivity: 'base' });
        }

        return a.name.localeCompare(b.name, 'tr');
    });
}

