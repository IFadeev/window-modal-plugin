function _createModal(options) {
    const modal = document.createElement('div');
    const DEFAULT_WIDTH = '450px';
    modal.classList.add('winmodal');
    modal.insertAdjacentHTML('afterbegin', `
    <div class="overlay">
            <div class="w-modal" style = "width:${options.width || DEFAULT_WIDTH}">
                <div class="m-header">
                    <span class="m-title">${options.title}</span>
                    <span class="m-close">&times;</span>
                </div>
                <div class="m-body">
                    ${options.content || ''}
                </div>
                <div class="m-footer">
                    <button>Close</button>
                    <button>Ok</button>

                </div>
            </div>
        </div>
    `)
    document.body.appendChild(modal);

    return modal
}

const options = {
    title: "Отправка данных",
    closoble: true,
    content: "<div class='m-body'>",
    width: "s"
}

/*
* Методо destroy() 
*/
$.modal = function(options) {
    const $modal = _createModal(options)

    return {
        open() {
            $modal.classList.add('open')
        },
        close() {
            $modal.classList.remove('open');

        },
        destroy() {}
    }
}



