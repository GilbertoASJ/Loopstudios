let width = window.screen.availWidth
let height = window.screen.availHeight

if(width <= 576) {
    document.querySelector('.earth').setAttribute('src', './images/mobile/image-deep-earth.jpg')
    document.querySelector('.arcade').setAttribute('src', './images/mobile/image-night-arcade.jpg')
    document.querySelector('.soccer').setAttribute('src', './images/mobile/image-soccer-team.jpg')
    document.querySelector('.grid').setAttribute('src', './images/mobile/image-grid.jpg')
    document.querySelector('.above').setAttribute('src', './images/mobile/image-from-above.jpg')
    document.querySelector('.borealis').setAttribute('src', './images/mobile/image-pocket-borealis.jpg')
    document.querySelector('.curiosity').setAttribute('src', './images/mobile/image-curiosity.jpg')
    document.querySelector('.fisheye').setAttribute('src', './images/mobile/image-fisheye.jpg')

} else if(width > 576) {
    document.querySelector('.earth').setAttribute('src', './images/desktop/image-deep-earth.jpg')
    document.querySelector('.arcade').setAttribute('src', './images/desktop/image-night-arcade.jpg')
    document.querySelector('.soccer').setAttribute('src', './images/desktop/image-soccer-team.jpg')
    document.querySelector('.grid').setAttribute('src', './images/desktop/image-grid.jpg')
    document.querySelector('.above').setAttribute('src', './images/desktop/image-from-above.jpg')
    document.querySelector('.borealis').setAttribute('src', './images/desktop/image-pocket-borealis.jpg')
    document.querySelector('.curiosity').setAttribute('src', './images/desktop/image-curiosity.jpg')
    document.querySelector('.fisheye').setAttribute('src', './images/desktop/image-fisheye.jpg')
}

