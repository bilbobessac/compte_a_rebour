input.onButtonPressed(Button.A, function () {
    while (nbre_depart > 0) {
        basic.showNumber(nbre_depart)
        nbre_depart += -1
        basic.pause(1000)
    }
    basic.showNumber(nbre_depart)
    basic.pause(1000)
    basic.clearScreen()
    nbre_depart = 10
})
let nbre_depart = 0
basic.clearScreen()
nbre_depart = 10
