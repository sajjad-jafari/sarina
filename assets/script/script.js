let toggler = document.querySelector('.day')

let body = document.querySelector("body");





toggler.addEventListener('click', function(e) {
    console.log(e);

    let attribute = toggler.getAttribute('src');

    if(attribute == "assets/img/sun-switch.png" )
    {toggler.setAttribute('src',"assets/img/moon-switch.png")
    body.className="night-mode"

}
    else {
        toggler.setAttribute('src',"assets/img/sun-switch.png")
        body.className="day-mode"
    }
})