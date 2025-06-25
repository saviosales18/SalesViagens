import { cafeSVG, wifiSVG, petSVG } from './icons.js';

class CardPacote extends HTMLElement {
    constructor() {
        super();
        const template = this.template();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    static get observedAttributes() {
        return ['expandido'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.updateCardClass();
    }

    connectedCallback() {
        this.updateCardClass();
    }

    updateCardClass() {
        const card = this.shadowRoot.querySelector('.card');
        if (!card) return;
        if (this.hasAttribute('expandido')) {
            card.classList.add('large-card');
        } else {
            card.classList.remove('large-card');
        }
    }

    template() {
        const template = document.createElement('template');
        template.innerHTML = `
        <style>
            .card {
                display: flex;
                position: relative;
                width: 250px;
                height: 400px;
                margin: 15px;
                flex-direction: column;
                align-items: center;
                background-color: white;
                border-radius: 20px;
                transition: all .3s;
                box-shadow: 0 3px 5px hsla(0, 0%, 0%, 0.1);
            }
            .card.large-card {
                width: 500px !important;
                height: 400px !important;
                border-radius: 20px;
                flex-direction: row;
                align-items: stretch;
            }
            .card.large-card .card-image {
                width: 250px !important;
                height: 100% !important;
                border-radius: 20px 0 0 20px;
            }
            .card.large-card .card-content {
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-start;
                padding: 30px;
                text-align: left;
            }
            .card:hover {
                transform: scale(1.05);
                box-shadow: 0 3px 5px hsla(0, 0%, 0%, 0.4);
            }
            .card-image {
                height: 200px;
                width: 250px;
                border-radius: 20px 20px 0 0;
                object-fit: cover;
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
            .card-content {
                padding: 0 15px;
            }
            .card-content ul {
                display: flex;
                flex-direction: column;
                list-style: none;
                padding: 0;
            }
            .card-content ul li{
                font-size: 0.6em;
                font-weight: 600;
                display: flex;
                align-items: center;
                margin: 3px 0;
                color: gray; 
            }
            .card-content li svg {
                height: 16px;
                width: 18px;
                margin-right: 10px;
            }
            .card-content h2 {
                font-size: 1em;
                margin-bottom: 0;
            }
            .card p {
                font-size: .8em;
                text-align: justify;
                color: rgb(0, 0, 0);
            }

            /* Responsividade */
            @media (max-width: 600px) {
                .card, .card.large-card {
                    width: 98vw !important;
                    min-width: unset;
                    max-width: 100vw;
                    height: auto !important;
                    flex-direction: column !important;
                    align-items: center !important;
                    border-radius: 16px;
                }
                .card-image, .card.large-card .card-image {
                    width: 100% !important;
                    height: 180px !important;
                    border-radius: 16px 16px 0 0 !important;
                }
                .card-content, .card.large-card .card-content {
                    padding: 16px !important;
                    text-align: left;
                    align-items: flex-start;
                }
                .card-tag {
                    font-size: 0.85em;
                    padding: 3px 7px;
                    border-radius: 0 0 8px 0;
                }
                .card-content h2 {
                    font-size: 1.1em;
                }
                .card-content ul li {
                    font-size: 0.8em;
                }
                .card p {
                    font-size: 0.95em;
                }
            }
        </style>
        <div class="card">
            <div class="card-tag">${this.getAttribute('tag') || ''}</div>
            <img class="card-image" src="${this.getAttribute('img')}" alt="${this.getAttribute('alt') || ''}">
            <div class="card-content">
                <h2>${this.getAttribute('titulo')}</h2>
                <ul>
                    <li>
                        ${cafeSVG} ${this.getAttribute('beneficio1') || ''}
                    </li>
                    <li>
                        ${wifiSVG} ${this.getAttribute('beneficio2') || ''}
                    </li>
                    <li>
                        ${petSVG} ${this.getAttribute('beneficio3') || ''}
                    </li>
                </ul>
                <p>${this.getAttribute('preco')}</p>
            </div>
        </div>
        `;
        return template;
    }
}

customElements.define('card-pacote', CardPacote);