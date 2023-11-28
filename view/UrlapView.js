import TextUrlapView from "./TextUrlapVIew.js";
import NumberUrlapView from "./NumberUrlapView.js";
import { adatLeiras } from "./adat.js";

export default class UrlapView {
  #formAdat = {};
  #inputElemObjektumokLista = [];
  constructor(szuloElem) {
    szuloElem.append("<form>");
    this.formElem = szuloElem.find("form");

    this.htmlOsszeallit();
    this.submitElem = this.formElem.find("#submit");

    this.submitElem.on("click", (event) => {
      event.preventDefault();
      this.#inputElemObjektumokLista.forEach((elem) => {
        this.#formAdat[elem.key] = elem.getValue();
      });

      this.trigger("ujAdatHozzaadasa");
    });
  }

  htmlOsszeallit() {
    let txt = "";
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
      }
    }
    txt += `<div class="mb-3 mt-3">
        <input type="submit"  
        id="submit" 
        value="Küld">
    </div>`;

    this.formElem.append(txt);
  }

  trigger(esemenynev) {
    const esemenyem = new CustomEvent(esemenynev, { detail: this.#formAdat });
    window.dispatchEvent(esemenyem);
  }
}
