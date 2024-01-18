export default class KartyaView {
  #obj;
  #szuloElem;
  constructor(szuloElem, obj) {
    this.#szuloElem = szuloElem;
    this.#obj = obj;

    this.htmlLetrehozo();
  }

  htmlLetrehozo() {
    console.log(this.#obj);
    this.#szuloElem.append(`
      <div class="card col-9 col-sm-5 col-lg-3 col-xl-2 m-1 p-0">
        <div class="card-body p-0">
          <img 
              src="${this.#obj.productPhoto}" alt="${this.#obj.producer} - ${this.#obj.productName}" 
          />
          <div class="card-body-details p-3">
          <h5 class="card-title">
            ${this.#obj.productName}
          </h5>
          <ul>
            <li>Gyártó: ${this.#obj.producer}</li>
            <li>Készleten: ${this.#obj.stock} db</li>
          </ul>
          </div>
        </div>
        <div class="card-footer row">
          <div class="col-5 price text-danger fw-bold d-flex align-items-center">
            ${this.#obj.productPrice} Ft
          </div>
          <button type="button" class="col-7 btn btn-primary">
            <i class="bi bi-cart4"></i>
            Kosárba
          </button>
        </div>
      </div>
      `);
  }
}
