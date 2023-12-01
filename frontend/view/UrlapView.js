import TextUrlapView from "./TextUrlapView.js";
import NumberUrlapView from "./NumberUrlapView.js";
import SumitUrlapView from "./SubmitUrlapView.js";
import { adatLeiras } from "./adat.js";

export default class UrlapView {
  #formAdat = {};
  #inputElemObjektumokLista = [];
  #validInputLista = [];
  constructor(szuloElem) {
    szuloElem.append("<form>");
    this.formElem = szuloElem.find("form");

    this.htmlOsszeallit();
    this.submitElem = this.formElem.find("#submit");

    this.submitElem.on("click", (event) => {
      event.preventDefault();
      this.#validInputLista = [];

      this.#inputElemObjektumokLista.forEach((elem) => {
        this.#formAdat[elem.key] = elem.getValue();
        if (elem.getValid()) {
          this.#validInputLista.push(elem);
        }

        elem.validalasFormazas()
      });

      if (
        this.#validInputLista.length === this.#inputElemObjektumokLista.length
      ) {
        this.trigger("ujAdatHozzaadasa");
      }
    });
  }

  htmlOsszeallit() {
    for (const key in adatLeiras) {
      switch (adatLeiras[key].tipus) {
        case "text":
          this.#inputElemObjektumokLista.push(
            new TextUrlapView(this.formElem, adatLeiras[key], key)
          );
          break;

        case "number":
          this.#inputElemObjektumokLista.push(
            new NumberUrlapView(this.formElem, adatLeiras[key], key)
          );
          break;

        case "submit":
          new SumitUrlapView(this.formElem, adatLeiras[key], key);
          break;
      }
    }
  }

  trigger(esemenynev) {
    const esemenyem = new CustomEvent(esemenynev, { detail: this.#formAdat });
    window.dispatchEvent(esemenyem);
  }
}
