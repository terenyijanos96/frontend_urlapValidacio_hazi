export default class NumberUrlapView {
  #value;
  #valid = false;
  #inputElem;
  constructor(szuloElem, obj, key) {
    this.szuloElem = szuloElem;
    this.obj = obj;
    this.key = key;

    this.numberUrlapElem();
    this.setInputElem();
    this.setValue();
    this.setValid();

    this.#inputElem.on("input", () => {
      this.setValue();
      this.setValid();
    });
  }

  setValue() {
    this.#value = parseInt(this.#inputElem.val());
  }

  getValue() {
    return this.#value;
  }

  setValid() {
    const min = this.obj.pattern.min;
    const max = this.obj.pattern.max;
    const ertek = this.#value;

    this.#valid = min <= ertek && ertek <= max;
  }

  getValid() {
    return this.#valid;
  }

  setInputElem() {
    this.#inputElem = this.szuloElem.find("#" + this.key);
  }

  getInputElem() {
    return this.#inputElem;
  }

  validalasFormazas() {
    this.#inputElem.toggleClass("is-valid", this.#valid)
    this.#inputElem.toggleClass("is-invalid", !this.#valid)
  }

  numberUrlapElem() {
    let txt = `
    <div class="mb-3 mt-3">
        <label for="${this.key}" class="form-label">${this.obj.megjelenes}:</label>
        <input type="${this.obj.tipus}" 
            class="form-control" 
            id="${this.key}" 
            min="${this.obj.pattern.min}" 
            max="${this.obj.pattern.max}" 
            value="${this.obj.value}" 
            name="${this.key}">
    </div>`;

    this.szuloElem.append(txt);
  }
}
