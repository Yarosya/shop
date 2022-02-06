function render() {
  const prodStore = local.getProducts();

  headerPage.render(prodStore.length);
  prodPage.render();
}

spinnerPage.render();
let catalog = [];
//http://myjson.dit.upm.es/api/bins/6znh
//server/catalog.json
fetch("https://myjson.dit.upm.es/api/bins/6znh")
  .then((resolve) => resolve.json())
  .then((body) => {
    catalog = body;
    setTimeout(() => {
      spinnerPage.clear();
      render();
    }, 2000);
  })
  .catch((error) => {
    spinnerPage.clear();
    errorMessage.renderError();
  });
