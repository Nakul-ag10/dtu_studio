/**
 * Centralized API utility for all fetch requests
 * Uses environment variable VITE_API_URL for the backend URL
 */

declare global {
  interface ImportMeta {
    env: Record<string, string>;
  }
}

const API_URL = (import.meta.env.VITE_API_URL as string) || 'http://localhost:5000/api';

interface FetchOptions extends RequestInit {
  includeAuth?: boolean;
}

/**
 * Get authorization headers with JWT token if available
 */
const getAuthHeaders = (): Record<string, string> => {
  const token = localStorage.getItem('auth_token');
  return token ? { Authorization: `Bearer ${token}` } : {};
};

/**
 * Centralized fetch wrapper with auth headers and error handling
 */
export const apiCall = async (
  endpoint: string,
  options: FetchOptions = {}
): Promise<Response> => {
  const { includeAuth = true, ...fetchOptions } = options;

  const url = `${API_URL}${endpoint}`;
  
  // Don't add Content-Type header for FormData (browser will set it with boundary)
  const isFormData = fetchOptions.body instanceof FormData;
  const headerRecord = typeof fetchOptions.headers === 'object' && fetchOptions.headers !== null
    ? (fetchOptions.headers as Record<string, string>)
    : {};
  const headers: Record<string, string> = {
    ...(includeAuth ? getAuthHeaders() : {}),
    ...headerRecord,
  };

  // Only add Content-Type if not FormData and not already set
  if (!isFormData && !headers['Content-Type']) {
    headers['Content-Type'] = 'application/json';
  }

  const response = await fetch(url, {
    ...fetchOptions,
    headers,
  });

  return response;
};

/**
 * GET request helper
 */
export const apiGet = (endpoint: string, includeAuth = true) => {
  return apiCall(endpoint, { method: 'GET', includeAuth });
};

/**
 * POST request helper
 */
export const apiPost = (
  endpoint: string,
  data?: unknown,
  includeAuth = true
) => {
  const fetchOptions: Omit<FetchOptions, 'includeAuth'> = {
    method: 'POST',
  };

  // Handle FormData (don't stringify it)
  if (data instanceof FormData) {
    return apiCall(endpoint, {
      ...fetchOptions,
      body: data,
      includeAuth,
    });
  }

  // Handle regular JSON data
  return apiCall(endpoint, {
    ...fetchOptions,
    body: data ? JSON.stringify(data) : undefined,
    includeAuth,
  });
};

/**
 * PUT request helper
 */
export const apiPut = (
  endpoint: string,
  data?: unknown,
  includeAuth = true
) => {
  return apiCall(endpoint, {
    method: 'PUT',
    body: data ? JSON.stringify(data) : undefined,
    includeAuth,
  });
};

/**
 * DELETE request helper
 */
export const apiDelete = (endpoint: string, includeAuth = true) => {
  return apiCall(endpoint, { method: 'DELETE', includeAuth });
};