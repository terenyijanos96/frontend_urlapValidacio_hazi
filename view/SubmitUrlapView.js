export default class SumitUrlapView {
  constructor(szuloElem, obj, key) {
    this.szuloElem = szuloElem;
    this.obj = obj;
    this.key = key;

    this.submitUrlapElem();
  }

  submitUrlapElem() {
    let txt = `<div class="mb-3 mt-3">
      <input type="${this.obj.tipus}"  
      id="${this.key}" 
      value="${this.obj.value}">
    </div>`;

    this.szuloElem.append(txt);
  }
}
