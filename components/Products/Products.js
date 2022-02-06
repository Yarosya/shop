class Products {
  constructor() {
    this.classActive = "products__button-active";
    this.add = "Add to the cart";
    this.remove = "Remove from the cart";
  }
  setLocalStorage(el, id) {
    const { pushProduct, arrProducts } = local.setProducts(id);

    if (pushProduct) {
      el.classList.add(this.classActive);
      el.innerHTML = this.remove;
    } else {
      el.classList.remove(this.classActive);
      el.innerHTML = this.add;
    }
    headerPage.render(arrProducts.length);
  }
  render() {
    const productsStore = local.getProducts();
    let productsCatalog = ``;

    catalog.forEach(({ id, name, img, price }) => {
      let classNew = ``,
        textActive = ``;

      if (productsStore.indexOf(id) == -1) {
        textActive = this.add;
      } else {
        textActive = this.remove;
        classNew = " " + this.classActive;
      }

      productsCatalog += `
    <li class = "products__element">
        <span class = "products__name"> ${name}</span>
        <img class = "products__image" src="${img}" alt="Phone">
        <span class = "products__price">💸${price.toLocaleString()} USD</span>
        <button class = "products__button${classNew}" onclick="prodPage.setLocalStorage(this, '${id}')">${textActive}</button>
    </li>
        `;
    });
    const allProducts = `
    <ul class = "products__wrapper">${productsCatalog}</ul>
    `;
    products.innerHTML = allProducts;
  }
}

const prodPage = new Products();


