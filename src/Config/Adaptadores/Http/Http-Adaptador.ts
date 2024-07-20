export abstract  class HttpAdaptador {
    abstract Buscar<T>(url: string,opciones?: Record<string,unknown>): Promise<T>;
}