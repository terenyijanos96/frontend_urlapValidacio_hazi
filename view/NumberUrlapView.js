export default class NumberUrlapView {
  #value
  #valid = false;
  constructor(szuloElem, obj, key) {
    this.szuloElem = szuloElem;
    this.obj = obj;
    this.key = key;

    this.numberUrlapElem();

    this.inputElem = this.szuloElem.find("#" + this.key);

    this.setValue()

    this.inputElem.on("input", () => {
      this.setValue()

      const min = this.obj.pattern.min;
      const max = this.obj.pattern.max;
      const ertek = this.getValue()

      this.#valid = min <= ertek && ertek <= max;
      
      console.log(this.getValid())
    });
  }

  setValue(){
    this.#value = parseInt(this.inputElem.val());
  }

  getValue() {
    return this.#value
  }

  getValid() {
    return this.#valid
  }

  numberUrlapElem() {
    let txt = `
    <div class="mb-3 mt-3">
        <label for="${this.key}" class="form-label">${this.obj.megjelenes}:</label>
        <input type="${this.obj.tipus}" 
            class="form-control" 
            id="${this.key}" 
            placeholder="${this.obj.placeholder}" 
            min="${this.obj.pattern.min}" 
            max="${this.obj.pattern.max}" 
            value="${this.obj.value}" 
            name="${this.key}">
    </div>`;

    this.szuloElem.append(txt);
  }
}
