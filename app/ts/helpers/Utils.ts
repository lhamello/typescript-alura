import { Negociacao } from "../models/index";

export function imprimir(...objetos: any[]) {
    objetos.forEach(objeto =>objeto.toString());
}