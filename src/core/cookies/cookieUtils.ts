export const setCookie = (
    name: string,
    value: string,
    days: number = 7
) => {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
};

export const getCookie = (name: string): string | null => {
    const cookies = document.cookie.split("; ");

    for (const cookie of cookies) {
        const [key, val] = cookie.split("=");

        if (key === name) {
            return decodeURIComponent(val);
        }
    }
    return null;
};

export const deleteCookie = (name: string) => {
    document.cookie = `${name}=; Max-Age=0; path=/`;
};