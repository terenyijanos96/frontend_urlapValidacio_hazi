export default class TextUrlapView {
  #value = "";
  #valid = false;
  constructor(szuloElem, obj, key) {
    this.szuloElem = szuloElem;
    this.obj = obj;
    this.key = key;

    this.textUrlapElem();

    this.inputElem = this.szuloElem.find("#" + this.key);
    this.inputElem.on("keyup", () => {
      this.#value = this.inputElem.val();
      
      let patternString = this.obj.pattern; 
      let pattern = new RegExp(patternString);
      
      this.#valid = pattern.test(this.#value)
      console.log(this.#value)
      console.log(this.#valid)
      
    });
  }

  getValue() {
    return this.inputElem.val();
  }

  textUrlapElem() {
    let txt = `
        <div class="mb-3 mt-3">
            <label for="${this.key}" class="form-label">${this.obj.megjelenes}:</label>
            <input type="${this.obj.tipus}" 
                class="form-control" 
                id="${this.key}" 
                placeholder="${this.obj.placeholder}" 
                pattern="${this.obj.pattern}" 
                value="${this.obj.value}" 
                name="${this.key}">
        </div>`;

    this.szuloElem.append(txt);
  }
}
