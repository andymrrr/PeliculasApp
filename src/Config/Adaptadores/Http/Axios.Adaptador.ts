import axios, { AxiosInstance } from "axios";
import { HttpAdaptador } from "./Http-Adaptador";

interface Opciones{
    baseUrl: string;
    parametros: Record<string,string>
}
export class AxiosAdaptador implements HttpAdaptador {
    private InstanciaAxios: AxiosInstance;
    constructor (Opciones: Opciones){
        this.InstanciaAxios = axios.create({
            baseURL: Opciones.baseUrl,
            params: Opciones.parametros
        })
    }
  async  Buscar<T>(url: string, opciones?: Record<string, unknown>): Promise<T> {
        try {
            const {data} = await this.InstanciaAxios.get<T>(url,opciones)

            return data;
        } catch (error) {
            console.log(error)
            throw new Error(`Error al solicitar informacion de ${url}`)
        }
    }
    
}