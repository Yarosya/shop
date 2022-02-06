class Header {
  handlerOpenShoppingPage() {
    shopPage.render();
  }
  render(count) {
    const headerHtml = `
      <div class="header__counter" onclick ='headerPage.handlerOpenShoppingPage()' >
        <i class="fas fa-shopping-cart"></i>${count}
      </div>
      `;
    header.innerHTML = headerHtml;
  }
}
const headerPage = new Header();

