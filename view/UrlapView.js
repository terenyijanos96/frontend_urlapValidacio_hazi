import { adatLeiras } from "./adat.js";

export default class UrlapView {
  #formAdat = {};
  constructor(szuloElem) {
    szuloElem.append("<form>");
    this.formElem = szuloElem.find("form");

    this.htmlOsszeallit();
    /** Submit gomb kezelése
     * 1. létrehozom a gombhoz a "kapaszkodót"
     * 2. hozzárendelem az eseményt
     * 3. ebben az eseményben  összegyűjtö9m a form adatait
     * 4. elküldöm a controllernek
     */

    this.submitElem = this.formElem.find("#submit");

    this.nevElem = this.formElem.find("#nev");
    this.SzulEvElem = this.formElem.find("#szul_ev");
    this.submitElem.on("click", (event) => {
      event.preventDefault();
      this.#formAdat.nev = this.nevElem.val();
      this.#formAdat.szul = this.SzulEvElem.val();

      this.trigger("ujAdatHozzaadasa");
    });
  }

  textUrlapElem(obj, key) {
    let txt = `
    <div class="mb-3 mt-3">
        <label for="${key}" class="form-label">${obj.megjelenes}:</label>
        <input type="${obj.tipus}" 
            class="form-control" 
            id="${key}" 
            placeholder="${obj.placeholder}" 
            pattern="${obj.pattern}" 
            value="${obj.value}" 
            name="${key}">
    </div>`;

    return txt;
  }

  numberUrlapElem(obj, key) {
    let txt = `
    <div class="mb-3 mt-3">
        <label for="${key}" class="form-label">${obj.megjelenes}:</label>
        <input type="${obj.tipus}" 
            class="form-control" 
            id="${key}" 
            placeholder="${obj.placeholder}" 
            min="${obj.pattern.min}" 
            max="${obj.pattern.max}" 
            value="${obj.value}" 
            name="${key}">
    </div>`;

    return txt;
  }

  htmlOsszeallit() {
    let txt = "";
    for (const key in adatLeiras) {
      switch (adatLeiras[key].tipus) {
        case "text":
            txt += this.textUrlapElem(adatLeiras[key], key);
            break;
      
        case "number":
            txt += this.numberUrlapElem(adatLeiras[key], key);
            break;
      }
    }

    this.formElem.append(txt);
  }

  trigger(esemenynev) {
    const esemenyem = new CustomEvent(esemenynev, { detail: this.#formAdat });
    window.dispatchEvent(esemenyem);
  }
}
