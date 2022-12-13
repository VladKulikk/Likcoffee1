document.getElementById("btnRight").onclick = () => slide(1)
document.getElementById("btnLeft").onclick = () => slide(-1)

const sliderItems = ["Contacts<br/>LikCoffee", "Address", "Phone:<br>+375250000001<br>+375330000015", "<a href='#footer' class='fa-brands fa-telegram'></a><a href='#footer' class='fa-brands fa-instagram'></a><a href='#footer' class='fa-brands fa-vk'></a>","E-mail<br>LikcoffeeProducts@gmail.com<br>LikcoffeeWork@gmail.com"]
let selectedItemIndex = 0

slide(0)

function slide(on) {
    selectedItemIndex += on
    if (selectedItemIndex >= sliderItems.length) selectedItemIndex = selectedItemIndex % sliderItems.length
    if (selectedItemIndex < 0) selectedItemIndex = sliderItems.length + selectedItemIndex % sliderItems.length

    let item = sliderItems[selectedItemIndex]
    updateSliderItem(item)
}

function updateSliderItem(item) {
    document.getElementById('footer-text').innerHTML = item
}



