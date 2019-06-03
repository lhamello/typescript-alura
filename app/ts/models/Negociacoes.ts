import { Imprimivel } from './Imprimivel';
import { Negociacao } from './Negociacao';
import { Igualavel } from './Igualavel';

export class Negociacoes implements Igualavel<Negociacoes>, Imprimivel {

    private _negociacoes: Negociacao[] = [];

    adicionar(negociacao: Negociacao): void {
        this._negociacoes.push(negociacao);
    }

    paraArray(): Negociacao[] {
        return ([] as Negociacao[]).concat(this._negociacoes);
    }

    toString(): void {
        console.log('Impressão');
        console.log(JSON.stringify(this._negociacoes));
    }

    ehIgual(negociacoes: Negociacoes): boolean {
        return JSON.stringify(this._negociacoes) == JSON.stringify(negociacoes.toString());
    }
}