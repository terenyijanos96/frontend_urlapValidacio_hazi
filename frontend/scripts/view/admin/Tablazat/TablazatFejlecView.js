import { fejlec } from "../../adat.js";

export default class TablazatFejlecView {
  #szuloElem;
  constructor(szuloElem) {
    this.#szuloElem = szuloElem;

    this.htmlMegjelenito();
  }

  htmlMegjelenito() {
    let txt = ``;

    for (const key in fejlec) {
      txt += `<th>${fejlec[key]}</th>`;
    }

    this.#szuloElem.append(`<tr>${txt}</tr>`);
  }
}
