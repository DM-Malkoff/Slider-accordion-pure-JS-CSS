const spoiler = document.getElementsByClassName('spoiler-block__item')
let textBlock = document.querySelectorAll(".spoiler-block__item .text");
for (let i = 0; i < spoiler.length; i++) {
    spoiler[i].addEventListener('click', function () {
        spoiler[i].classList.toggle('active')
        textBlock[i].style.height = spoiler[i].classList.contains('active') ? textBlock[i].scrollHeight + "px" : 0
    })
}
for (let i = 0; i < spoiler.length; i++) {
    textBlock[i].style.height = spoiler[i].classList.contains('active') ? textBlock[i].scrollHeight + "px" : 0
}