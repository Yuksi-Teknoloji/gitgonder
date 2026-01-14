import { apiPost } from './http';
import { API_ENDPOINTS } from '../constants/apiEndpoints';
import type { CarrierApplicationPayload } from '../types/carrier';

export async function submitCarrierApplication(payload: CarrierApplicationPayload): Promise<string> {
    const formData = new FormData();

    formData.append('first_name', payload.first_name);
    formData.append('last_name', payload.last_name);
    formData.append('city', payload.city);
    formData.append('email', payload.email);
    formData.append('phone_number', payload.phone_number);
    formData.append('vehicle_type', payload.vehicle_type);
    formData.append('vehicle_registration_year', String(payload.vehicle_registration_year));
    formData.append('terms_accepted', String(payload.terms_accepted));
    formData.append('vehicle_documents', payload.vehicle_documents);
    formData.append('carrier_documents', payload.carrier_documents);

    return apiPost<string>(API_ENDPOINTS.CARRIER_APPLICATIONS, formData, {
        // FormData kullanıldığı için Content-Type elle vermiyoruz
        asJson: false,
    });
}

