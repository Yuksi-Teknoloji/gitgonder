import { apiGet } from './http';
import { API_ENDPOINTS } from '../constants/apiEndpoints';
import type { Partner, PartnersResponse } from '../types/partner';

export async function fetchPartners(limit: number = 100, offset: number = 0): Promise<Partner[]> {
    const query = `?limit=${limit}&offset=${offset}`;
    const data = await apiGet<PartnersResponse>(`${API_ENDPOINTS.PARTNERS}${query}`, {
        asJson: true,
    });

    const partners = data.partners || data.data || data.results || [];
    return Array.isArray(partners) ? partners : [];
}

