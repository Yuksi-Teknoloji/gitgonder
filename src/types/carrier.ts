export interface CarrierApplicationPayload {
    first_name: string;
    last_name: string;
    city: string;
    email: string;
    phone_number: string;
    vehicle_type: string;
    vehicle_registration_year: number;
    terms_accepted: boolean;
    vehicle_documents: File;
    carrier_documents: File;
}

