class Shopping {
  handlerCloseModalWindow() {
    shopping.innerHTML = ``;
  }
  render() {
    const productsStore = local.getProducts();
    let productsCatalog = ``;
    let sumCatalog = 0;
    catalog.forEach(({ id, name, price }) => {
      if (productsStore.indexOf(id) !== -1) {
        productsCatalog += `
        <tr>
            <td class = 'shopping__item-name'>${name}</td>
            <td class = 'shopping__item-price'>${price.toLocaleString()} USD</td>
        </tr>
        `;
        sumCatalog += price;
      }
    });
    const html = `
        <div class = 'shopping__elements'>
          <div class="shopping__close" onclick = 'shopPage.handlerCloseModalWindow()
          '></div>
            <table>
            ${productsCatalog}
            <tr>
              <td class = 'shopping__item-name'>Amount:</td>
              <td class = 'shopping__item-price'>${sumCatalog.toLocaleString()} USD</td>
            </tr>
            </table>
        </div> 
    
    `;
    shopping.innerHTML = html;
  }
}
const shopPage = new Shopping();
