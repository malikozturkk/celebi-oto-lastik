const baseURL = process.env.NEXT_PUBLIC_BASE_STRAPI_API_URL || 'http://127.0.0.1:1337/api'

export const getRequest = async <T>(
    url: string,
    baseUrl: string = baseURL,
): Promise<T | any> => {
    const headers: Record<string, string> = {
        'Content-Type': 'application/json',
    }
    const response = await fetch(`${baseUrl}${url}`, {
        method: 'GET',
        headers,
    })

    const res = await response.json()

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${res.message}`)
    }

    return res?.data
}