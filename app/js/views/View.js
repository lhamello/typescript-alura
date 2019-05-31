System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var View;
    return {
        setters: [],
        execute: function () {
            View = class View {
                constructor(seletor, escapar = false) {
                    this._elemento = $(seletor);
                    this._escapar = escapar;
                }
                update(model) {
                    const t1 = performance.now();
                    let template = this.template(model);
                    if (this._escapar) {
                        template = template.replace(/<script>[\s\S]*?<\/script>/g, '');
                    }
                    this._elemento.html(template);
                    const t2 = performance.now();
                    console.log(`O tempo de execução de update é de ${t2 - t1} ms`);
                }
            };
            exports_1("View", View);
        }
    };
});
