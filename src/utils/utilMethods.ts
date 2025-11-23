//utilMethods.ts

export function formatDateTime(date: string | Date): string {
    return new Date(date).toLocaleString("tr-TR", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    });
};