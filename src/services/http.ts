const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;


type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

interface RequestOptions extends RequestInit {
    asJson?: boolean;
}

async function request<T>(path: string, method: HttpMethod, options: RequestOptions = {}): Promise<T> {
    

    const { asJson = true, headers, body, ...rest } = options;

    const finalHeaders: HeadersInit = {
        ...(asJson && !(body instanceof FormData) ? { 'Content-Type': 'application/json' } : {}),
        ...headers,
    };

    const response = await fetch(`${API_BASE_URL}${path}`, {
        method,
        headers: finalHeaders,
        body,
        ...rest,
    });

    if (!response.ok) {
        const errorText = await response.text().catch(() => '');
        throw new Error(`HTTP error ${response.status}: ${errorText}`);
    }

    const contentType = response.headers.get('Content-Type') || '';
    if (contentType.includes('application/json')) {
        return response.json() as Promise<T>;
    }

    return response.text() as unknown as T;
}

export function apiGet<T>(path: string, options?: RequestOptions) {
    return request<T>(path, 'GET', { ...options, method: 'GET' });
}

export function apiPost<T>(path: string, body?: unknown, options?: RequestOptions) {
    const payload =
        body instanceof FormData
            ? body
            : body != null
            ? JSON.stringify(body)
            : undefined;

    return request<T>(path, 'POST', { ...options, body: payload });
}

export function apiPut<T>(path: string, body?: unknown, options?: RequestOptions) {
    const payload =
        body instanceof FormData
            ? body
            : body != null
            ? JSON.stringify(body)
            : undefined;

    return request<T>(path, 'PUT', { ...options, body: payload });
}

export function apiDelete<T>(path: string, options?: RequestOptions) {
    return request<T>(path, 'DELETE', options);
}

