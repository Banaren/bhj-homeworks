const closePopup = document.querySelectorAll('.modal__close');
const modalMain = document.getElementById('modal_main');

const modalSuccess = document.getElementById('modal_success');
const showSuccess = document.querySelector('.show-success');

for (let i = 0; closePopup.length > i; i++) {
    closePopup[i].onclick = function () {
        modalMain.className = 'modal';
        modalSuccess.className = 'modal';
    }
}

showSuccess.onclick = function () {
    modalSuccess.className = 'modal modal_active';
    modalMain.className = 'modal';
}