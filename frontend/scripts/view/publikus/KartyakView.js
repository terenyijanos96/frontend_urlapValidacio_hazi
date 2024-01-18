import KartyaView from "./KartyaView.js";

export default class KartyakView {
    #lista
    #szuloElem
    constructor(lista, szuloElem) {
      this.#lista = lista
      this.#szuloElem = szuloElem

      this.htmlLetrehozo()
      this.kartyaMegjelenito()
    }

    htmlLetrehozo(){
        this.#szuloElem.append(`
            <div class="kartyak row">
            </div>
        `)
    }

    kartyaMegjelenito() {
        this.#lista.forEach(obj => {
            new KartyaView($(".kartyak"), obj)
        });
    }
  }