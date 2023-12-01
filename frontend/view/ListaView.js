import {adatLeiras} from "./adat.js"

export default class ListaView {
  constructor(lista, szuloElem) {
    this.lista = lista;
    this.szuloElem = szuloElem;

    this.#htmlLetrehozasa();
  }

  #htmlLetrehozasa() {
    let txt = ""

    this.lista.forEach((elem) => {
        txt +=`{`
        for (const key in elem) {
            
            if (key in adatLeiras || key === "id"){
                txt += `
                    ${elem[key]},  
                `
            }
        }
        txt += "},<br>"
    });
    this.szuloElem.html(txt);
  }
}
