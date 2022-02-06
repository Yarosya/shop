class Error {
  renderError() {
    const html = `
        <div class = "error__container">
            <img class = "error__img" src="components/Error/img/computer.png" alt="">
            <p>Please, try again later</p>
        </div>
        `;
    errorBlock.innerHTML = html;
  }
}

const errorMessage = new Error();
