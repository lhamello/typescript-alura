System.register(["../helpers/index", "../helpers/decorators/index", "../models/index", "../services/index", "../views/index"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, index_3, index_4, index_5, NegociacaoController, DiaDaSemana;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            },
            function (index_3_1) {
                index_3 = index_3_1;
            },
            function (index_4_1) {
                index_4 = index_4_1;
            },
            function (index_5_1) {
                index_5 = index_5_1;
            }
        ],
        execute: function () {
            NegociacaoController = class NegociacaoController {
                constructor() {
                    this._negociacoes = new index_3.Negociacoes();
                    this._negociacoesView = new index_5.NegociacoesView('#negociacoesView');
                    this._mensagemView = new index_5.MensagemView('#mensagemView', true);
                    this._service = new index_4.NegociacaoService();
                    this._negociacoesView.update(this._negociacoes);
                }
                adicionar(event) {
                    let data = new Date(this._inputData.val().replace(/-/g, ','));
                    if (!this.ehDiaUtil(data)) {
                        this._mensagemView.update('Negociações só podem ser realizadas em dias úteis.');
                        return;
                    }
                    const negociacao = new index_3.Negociacao(data, parseInt(this._inputQuantidade.val()), parseFloat(this._inputValor.val()));
                    this._negociacoes.adicionar(negociacao);
                    index_1.imprimir(negociacao, this._negociacoes);
                    this._negociacoesView.update(this._negociacoes);
                    this._mensagemView.update('Negociação adicionada com sucesso!');
                }
                ehDiaUtil(data) {
                    return (data.getDay() != DiaDaSemana.SABADO && data.getDay() != DiaDaSemana.DOMINGO);
                }
                importarDados() {
                    this._service
                        .obterNegociacoes(res => {
                        if (res.ok) {
                            return res;
                        }
                        else {
                            throw new Error(res.statusText);
                        }
                    })
                        .then(negociacoesParaImportar => {
                        const negociacoesJaImportadas = this._negociacoes.paraArray();
                        negociacoesParaImportar
                            .filter(negociacao => !negociacoesJaImportadas.some(jaImportada => negociacao.ehIgual(jaImportada)))
                            .forEach(Negociacao => this._negociacoes.adicionar(Negociacao));
                        this._negociacoesView.update(this._negociacoes);
                    })
                        .catch(erro => {
                        this._mensagemView.update(erro.message);
                    });
                }
            };
            __decorate([
                index_2.domInject('#data')
            ], NegociacaoController.prototype, "_inputData", void 0);
            __decorate([
                index_2.domInject('#quantidade')
            ], NegociacaoController.prototype, "_inputQuantidade", void 0);
            __decorate([
                index_2.domInject('#valor')
            ], NegociacaoController.prototype, "_inputValor", void 0);
            __decorate([
                index_2.throttle()
            ], NegociacaoController.prototype, "adicionar", null);
            __decorate([
                index_2.throttle()
            ], NegociacaoController.prototype, "importarDados", null);
            exports_1("NegociacaoController", NegociacaoController);
            (function (DiaDaSemana) {
                DiaDaSemana[DiaDaSemana["DOMINGO"] = 0] = "DOMINGO";
                DiaDaSemana[DiaDaSemana["SEGUNDA"] = 1] = "SEGUNDA";
                DiaDaSemana[DiaDaSemana["TERCA"] = 2] = "TERCA";
                DiaDaSemana[DiaDaSemana["QUARTA"] = 3] = "QUARTA";
                DiaDaSemana[DiaDaSemana["QUINTA"] = 4] = "QUINTA";
                DiaDaSemana[DiaDaSemana["SEXTA"] = 5] = "SEXTA";
                DiaDaSemana[DiaDaSemana["SABADO"] = 6] = "SABADO";
            })(DiaDaSemana || (DiaDaSemana = {}));
        }
    };
});
