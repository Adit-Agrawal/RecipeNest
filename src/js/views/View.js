import icons from '../../img/icons.svg';

export default class View {
    _data;

    render(data, render = true){
        // Checking if data exists or not
        if(!data || (Array.isArray(data) && data.length === 0))
            return this.renderError();

        this._data = data;
        // adding the html markup in the document
        const markup = this._generateMarkup();

        if(!render) return markup;
        
        this._clear()
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }

    update(data){
        this._data = data;
        // adding the html markup in the document
        const newMarkup = this._generateMarkup();

        // We will compare 'newMarkup' with old markup and then update only the changed parts
        // But since the markup is a string, we can't do the comparison easily, so we will convert 
        // it into a DOM object and then use that to compare with the actual DOM object on the page.
        const newDOM = document.createRange().createContextualFragment(newMarkup);
        const newElements = Array.from(newDOM.querySelectorAll('*'));

        // Getting the current DOM for comparison
        const curElements = Array.from(this._parentElement.querySelectorAll('*'));

        // Doing the comparison
        newElements.forEach((newEl, index) => {
            const curEl = curElements[index];

            // UPDATES changed text
            if(!newEl.isEqualNode(curEl) && newEl.firstChild?.nodeValue.trim() !== '') {
                curEl.textContent = newEl.textContent;
            }

            // UPDATES changed attributes
            if(!newEl.isEqualNode(curEl)) {
                Array.from(newEl.attributes).forEach(attr => curEl.setAttribute(attr.name, attr.value));
            }
        })
    }

    _clear(){
        this._parentElement.innerHTML = '';
    }

    renderSpinner() {
        const markup = `
          <div class="spinner">
            <svg>
              <use href="${icons}#icon-loader"></use>
            </svg>
          </div>
        `;
        this._clear()
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    };

    renderError(message = this._errorMessage) {
        const markup = `
            <div class="error">
                <div>
                    <svg>
                        <use href="${icons}#icon-alert-triangle"></use>
                    </svg>
                </div>
                <p>${message}</p>
            </div>
        `;

        this._clear()
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }

    renderMessage(message = this._message) {
        const markup = `
            <div class="message">
                <div>
                    <svg>
                        <use href="${icons}#icon-smile"></use>
                    </svg>
                </div>
                <p>${message}</p>
            </div>
        `;

        this._clear()
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
}

