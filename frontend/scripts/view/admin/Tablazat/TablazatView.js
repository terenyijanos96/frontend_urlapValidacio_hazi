import TablazatFejlecView from "./TablazatFejlecView.js";
import TablazatSorView from "./TablazatSorView.js";

export default class TablazatView {
  #szuloElem;
  #lista;
  #tbody;
  #thead;
  constructor(lista, szuloElem) {
    this.#szuloElem = szuloElem;
    this.#lista = lista;

    this.#htmlLetrehozo();

    this.#tbody = $("tbody")
    this.#thead = $("thead")

    this.sorMegjelenito();
  }

  #htmlLetrehozo() {
    this.#szuloElem.append(`
    <div class="table-responsive">
      <table class="table table-striped">
            <tbody></tbody>
            <thead></thead>
      </table>
    </div>`
       );
  }

  sorMegjelenito() {
    new TablazatFejlecView(this.#thead)

    this.#lista.forEach((obj) => {
      new TablazatSorView(this.#tbody, obj);
    });
  }
}
