class Spinner {
  clear() {
    spinnerBlock.innerHTML = ``;
  }
  render() {
    const html = `
    <div class = "loader__container">
        <img class = "loader__img" src="components/Spinner/img/loader.svg" alt="">
    </div>
    `;

    spinnerBlock.innerHTML = html;
  }
}

const spinnerPage = new Spinner();
