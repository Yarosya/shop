class LocalStorage {
  constructor() {
    this.key = "products";
  }
  getProducts() {
    const productsLocalStorage = localStorage.getItem(this.key);
    if (productsLocalStorage == null) {
      return [];
    }
    return JSON.parse(productsLocalStorage);
  }

  setProducts(id) {
    let arrProducts = this.getProducts(),
      arrIndex = arrProducts.indexOf(id),
      pushProduct = false;
    if (arrIndex === -1) {
      arrProducts.push(id);
      pushProduct = true;
    } else {
      arrProducts.splice(arrIndex, 1);
    }

    localStorage.setItem(this.key, JSON.stringify(arrProducts));

    return { pushProduct, arrProducts };
  }
}

const local = new LocalStorage();
