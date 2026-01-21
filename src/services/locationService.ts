import { apiGet } from './http';
import { API_ENDPOINTS } from '../constants/apiEndpoints';

export interface StateItem {
    id?: number | string;
    name: string;
    state_name?: string;
    title?: string;
    plate_code?: number | string;
    fips_code?: number | string;
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
    const response = await apiGet<StatesResponse>(`${API_ENDPOINTS.LOGISTICS_STATES}${query}`);

    const rawList = response.states || response.data || response.results || response.items || [];

    const normalized = (Array.isArray(rawList) ? rawList : [])
        .map((item) => ({
            id: item.id,
            plate_code: item.plate_code,
            fips_code: item.fips_code,
            iso2: item.iso2,
            name: (item.name || item.state_name || item.title || '').trim(),
        }))
        .filter((item) => item.name.length > 0);

    return normalized.sort((a, b) => {
        if (a.iso2 && b.iso2) {
            const numA = parseInt(a.iso2, 10);
            const numB = parseInt(b.iso2, 10);

            if (!Number.isNaN(numA) && !Number.isNaN(numB)) {
                return numA - numB;
            }

            return a.iso2.localeCompare(b.iso2, 'tr', { sensitivity: 'base' });
        }

        return a.name.localeCompare(b.name, 'tr');
    });
}

