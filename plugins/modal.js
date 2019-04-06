function _createModal(options) {
    const modal = document.createElement('div');
    modal.classList.add('winmodal');
    modal.insertAdjacentHTML('afterbegin', `
    <div class="overlay">
            <div class="w-modal">
                <div class="m-header">
                    <span class="m-title">Title</span>
                    <span class="m-close">&times;</span>
                </div>
                <div class="m-body">
                    <p class="m-body__text">Body text 1</p>
                    <p class="m-body__text">Body text 2</p>
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



