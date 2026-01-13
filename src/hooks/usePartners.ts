import { useState, useEffect } from 'react';
import { fetchPartners, type Partner } from '../services/api';

interface UsePartnersReturn {
    partners: Partner[];
    loading: boolean;
    error: Error | null;
    refetch: () => void;
}

export function usePartners(limit: number = 100, offset: number = 0): UsePartnersReturn {
    const [partners, setPartners] = useState<Partner[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    const loadPartners = async () => {
        setLoading(true);
        setError(null);
        try {
            const data = await fetchPartners(limit, offset);
            setPartners(data);
        } catch (err) {
            setError(err instanceof Error ? err : new Error('Failed to fetch partners'));
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadPartners();
    }, [limit, offset]);

    return {
        partners,
        loading,
        error,
        refetch: loadPartners,
    };
}
