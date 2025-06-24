class CardPacote extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(this.template());
    }

    template() {
        const template = document.createElement('div');
        template.innerHTML = `
        <style>
            .card {
                height: 350px;
                width: 250px;
                margin: 15px;
                border-radius: 20px 0px;
                background-color: white;
                position: relative;
                box-shadow: 0 3px 5px hsla(0, 0%, 0%, 0.1);
                transition: all .5s;
            }
            .card:hover {
                transform: scale(1.05);
                box-shadow: 0 3px 5px hsla(0, 0%, 0%, 0.4);
            }
            .card-image {
                width: 100%;
                height: 150px;
                object-fit: cover;
            }
            .card-content {
                padding: 16px;
            }
            .card-tag {
                background: #f27f3d;
                color: #fff;
                padding: 4px 8px;
                border-radius: 0 0 8px 0;
                font-size: 0.9em;
                position: absolute;
                top: 0;
                left: 0;
            }
        </style>
        
        <div class="card">
          <div class="card-tag">${this.getAttribute('tag') || ''}</div>
          <img class="card-image" src="${this.getAttribute('img')}" alt="${this.getAttribute('alt') || ''}">
          <div class="card-content">
            <h2>${this.getAttribute('titulo')}</h2>
            <ul>
              <li>${this.getAttribute('beneficio1') || ''}</li>
              <li>${this.getAttribute('beneficio2') || ''}</li>
              <li>${this.getAttribute('beneficio3') || ''}</li>
            </ul>
            <p>${this.getAttribute('preco')}</p>
          </div>
        </div>
      `;
        return template;
    }
}

customElements.define('card-pacote', CardPacote);