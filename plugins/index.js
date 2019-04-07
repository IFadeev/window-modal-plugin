const myModal = $.modal({
    title: 'Подпишитесь на наши новости!',
    content: `<h5>Вы будете рады!</h5> <p>Публикуем только лучшее</p>`,
    width: '450px' 
});

window.addEventListener('load', function() {

  const div = document.querySelector('#cart');
  const closeButton = document.querySelector('.m-close')

  const closeMyModal = (evt, options) => {
    console.log(evt.target)
      switch(evt.target.className) {
        case 'm-close': myModal.close();
        case 'overlay': myModal.close();
      }
  } 

  const closeHeandl = (evt, options) => {
    if (evt.code == 'Escape') {
        myModal.close();
    }
  }
  const openMyModal = (evt, options) => {
    if (evt.target.tagName == 'BUTTON') {
        myModal.open()
    }
  }

  div.addEventListener('click', openMyModal, true);
  document.body.addEventListener('click', closeMyModal)
  document.body.addEventListener('keydown', closeHeandl)
}); 