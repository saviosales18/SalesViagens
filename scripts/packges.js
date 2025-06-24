class MeuComponent extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(this.build());
    shadow.appendChild(this.style());

  }

  build() {
    const container = document.createElement('div');
    container.classList.add('container');

    const title = document.createElement('h1');
    title.textContent = 'Packages';

    const description = document.createElement('p');
    description.textContent = 'This is a list of packages.';

    container.appendChild(title);
    container.appendChild(description);

    return container;
  }

  style() {
    const style = document.createElement('style');
    style.textContent = `
      .container {
        padding: 20px;
        background-color: #f9f9f9;
        border-radius: 5px;
      }
      h1 {
        color: #333;
      }
      p {
        color: #666;
      }
    `;
    return style;
  }

}
