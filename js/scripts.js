//document.querySelector('#earth').setAttribute('src', 'https://github.com/GilbertoASJ/Loopstudios/blob/main/images/mobile/image-deep-earth.jpg?raw=true')

let cardMobile = function() {
    let firstCardSection = document.querySelector('.first-card-section').style.padding
    console.log(firstCardSection)

    if(firstCardSection == "") {
        console.log(firstCardSection)

    } else {
        document.querySelector('#earth').setAttribute('src', 'https://github.com/GilbertoASJ/Loopstudios/blob/main/images/mobile/image-deep-earth.jpg?raw=true')
    }
}

cardMobile()