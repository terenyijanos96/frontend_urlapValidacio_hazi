export default class SubmitUrlapView {
  #inputElem
  constructor(szuloElem, obj, key) {
    this.szuloElem = szuloElem;
    this.obj = obj;
    this.key = key;

    this.submitUrlapElem();
    this.setInputElem()
  }

  setInputElem(){
    this.#inputElem = $("#" + this.key)
  }

  getInputElem(){
    return this.#inputElem
  }

  submitUrlapElem() {
    let txt = `<div class="mb-3 mt-5 ">
      <input class="btn btn-outline-success" 
        type="${this.obj.tipus}"  
        id="${this.key}" 
        value="${this.obj.value}">
    </div>`;

    this.szuloElem.append(txt);
  }
}
