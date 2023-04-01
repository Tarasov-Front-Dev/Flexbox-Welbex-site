// Вставить перенос строки в слоган
const targetSpan = document.querySelector('.main__prime-slogan span')

if (document.documentElement.clientWidth < 768) {
  targetSpan.insertAdjacentHTML("beforebegin", '<br>')
}

// Заменить длинную ссылку в меню футера
const targetLi = document.querySelector('.footer__menu ul li:nth-child(7) a')

if (document.documentElement.clientWidth < 1024) {
  targetLi.innerHTML = 'Благодарности'
}


// Заменить innerHTML в промо
const targetH2First = document.querySelector('.aside__promo div:first-of-type h2')

if (document.documentElement.clientWidth < 768) {
  targetH2First.innerHTML = '30 ВИДЖЕТОВ'
}


const targetH2Last = document.querySelector('.aside__promo div:last-of-type h2')

if (document.documentElement.clientWidth < 768) {
  targetH2Last.innerHTML = 'МЕСЯЦ AMOCRM'
}

const vw = document.documentElement.offsetWidth * 0.01
document.documentElement.style.setProperty('--vw', `${vw}px`)