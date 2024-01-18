import { adatLeiras } from "../../adat.js";

export default class TablazatSorView {
  #szuloElem;
  #obj;
  #id;
  #sor;
  #elsoGomb;
  #masodikGomb;
  #modosithato_e;
  constructor(szuloElem, obj) {
    this.#szuloElem = szuloElem;
    this.#obj = obj;

    this.#id = obj["id"];

    this.#htmlLetrehozo();

    this.#sor = $("tbody tr:last");
    this.#elsoGomb = $(".elso-gomb:last");
    this.#masodikGomb = $(".masodik-gomb:last");

    this.#modosithato_e = false;

    this.#elsoGomb.click(() => {
      if (!this.#modosithato_e) {
        this.#trigger("sorTorlese");
      } else {
        this.modosithatosagAllitasa();
      }
    });

    this.#masodikGomb.click(() => {
      if (this.#modosithato_e) {
        this.#trigger("sorModositasa");
      }

      this.modosithatosagAllitasa();
    });
  }

  #htmlLetrehozo() {
    let txt = ``;

    for (const key in this.#obj) {
      if (key === "id") {
        txt += `<td>
        ${this.#obj[key]}
      </td>`;
      }

      if (key in adatLeiras) {
        txt += `<td>
          <input type="text" class="adat adat-${key}" value="${
          this.#obj[key]
        }" disabled>
        </td>`;
      }
    }

    txt += `<td>
            <button class="btn btn-outline-danger elso-gomb torles-gomb"><i class="bi bi-trash-fill"></i>Törlés</button>
        </td>`;

    txt += `<td>
        <button class="btn btn-outline-success masodik-gomb modositas-gomb"><i class="bi bi-pencil-fill"></i> Módosítás</button>
    </td>`;
    this.#szuloElem.append(`<tr>${txt}</tr>`);
  }

  getId() {
    return this.#id;
  }

  adatLekeres() {
    const adatObj = {};

    for (const key in this.#obj) {
      if (key in adatLeiras && key !== "id") {
        const osztalyNev = `.adat-${key}`;
        const cella = $(this.#sor).find(osztalyNev);
        adatObj[key] = cella.val();
      }
    }
    console.log(adatObj);
    return adatObj;
  }

  modosithatosagAllitasa() {
    this.gombokValtasa();
    for (const key in this.#obj) {
      if (key in adatLeiras && key !== "id") {
        const osztalyNev = `.adat-${key}`;
        const cella = $(this.#sor).find(osztalyNev);
        cella.prop("disabled", this.#modosithato_e);
      }
    }
    this.#modosithato_e = !this.#modosithato_e;
  }

  gombokValtasa() {
    this.#elsoGomb.toggleClass("torles-gomb", this.#modosithato_e);
    this.#elsoGomb.toggleClass("megse-gomb", !this.#modosithato_e);
    let elsoGombObj = this.#modosithato_e ? {ikon: "bi-trash-fill", szoveg: "Törlés"} : {ikon: "bi-x-lg", szoveg: "Mégse"}
    this.#elsoGomb.html(
      `<i class="bi ${elsoGombObj.ikon}"></i> ${elsoGombObj.szoveg}`
    )

    this.#masodikGomb.toggleClass("modositas-gomb", this.#modosithato_e);
    this.#masodikGomb.toggleClass("kuldes-gomb", !this.#modosithato_e);
    let masodikGombObj = this.#modosithato_e ? {ikon: "bi-pencil-fill", szoveg: "Módosítás"} : {ikon: "bi bi-send", szoveg: "Küldés"}
    this.#masodikGomb.html(
      `<i class="bi ${masodikGombObj.ikon}"></i> ${masodikGombObj.szoveg}`
    )
  }

  #trigger(esemenyNev) {
    const esemenyem = new CustomEvent(esemenyNev, {
      detail: { id: this.getId(), adat: this.adatLekeres() },
    });
    window.dispatchEvent(esemenyem);
  }
}
