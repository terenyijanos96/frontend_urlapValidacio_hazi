import { adatLeiras } from "../adat.js";

export default class TablazatSorView {
  #szuloElem;
  #obj;
  #id;
  constructor(szuloElem, obj) {
    this.#szuloElem = szuloElem;
    this.#obj = obj;

    this.#id = obj["id"]

    this.#htmlLetrehozo();

    $(".torles-gomb:last").click(()=>{
        this.#trigger("sorTorlese")
    })

    $(".modositas-gomb:last").click(()=>{
        this.#trigger("sorModositasa")
    })
  }

  #htmlLetrehozo() {
    let txt = ``;

    for (const key in this.#obj) {
      if (key in adatLeiras || key === 'id') txt += `<td>${this.#obj[key]}</td>`;
    }

    txt += `<td>
            <button class="btn btn-outline-danger torles-gomb"><i class="bi bi-trash-fill"></i>Törlés</button>
        </td>`;

    txt += `<td>
        <button class="btn btn-outline-success modositas-gomb"><i class="bi bi-pencil-fill"></i> Módosítás</button>
    </td>`;
    this.#szuloElem.append(`<tr>${txt}</tr>`);
  }

  getId(){
    return this.#id
  }

  #trigger(esemenyNev) {
    const esemenyem = new CustomEvent(esemenyNev, { detail: { id : this.getId()} });
    window.dispatchEvent(esemenyem);
  }
}
