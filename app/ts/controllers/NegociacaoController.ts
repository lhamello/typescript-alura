import { domInject, throttle } from '../helpers/decorators/index';
import { Negociacao, NegociacaoParcial, Negociacoes } from '../models/index';
import { NegociacaoService } from '../services/index';
import { MensagemView, NegociacoesView } from '../views/index';

export class NegociacaoController {
    
    @domInject('#data')
    private _inputData: JQuery;
    @domInject('#quantidade')
    private _inputQuantidade: JQuery;
    @domInject('#valor')
    private _inputValor: JQuery;
    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView('#negociacoesView');
    private _mensagemView = new MensagemView('#mensagemView', true);
    private _service = new NegociacaoService();

    constructor() {
        this._negociacoesView.update(this._negociacoes);
    }

    @throttle()
    adicionar(event: Event) {                
        let data = new Date(this._inputData.val().replace(/-/g, ','));

        if (!this.ehDiaUtil(data)) {
            this._mensagemView.update('Negociações só podem ser realizadas em dias úteis.');
            return;
        }

        const negociacao = new Negociacao(
            data, 
            parseInt(this._inputQuantidade.val()), 
            parseFloat(this._inputValor.val()));

        this._negociacoes.adicionar(negociacao);

        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update('Negociação adicionada com sucesso!');
    }

    private ehDiaUtil(data: Date): boolean {
        return (data.getDay() != DiaDaSemana.SABADO && data.getDay() != DiaDaSemana.DOMINGO);                    
    }

    @throttle()
    importarDados() {
         
        function isOk(res: Response) {
            
            if (res.ok) {
                return res;
            } else {
                throw new Error(res.statusText);
            }
        }

        this._service
            .obterNegociacoes(isOk)
            .then(negociacoes => {
                
                negociacoes.forEach(Negociacao => 
                    this._negociacoes.adicionar(Negociacao))
                
                this._negociacoesView.update(this._negociacoes);
            });
    }
}

enum DiaDaSemana {
    DOMINGO,
    SEGUNDA,
    TERCA,
    QUARTA,
    QUINTA,
    SEXTA,
    SABADO
}