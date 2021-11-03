input.onButtonPressed(Button.A, function () {
    nb_de_personnes += 1
})
input.onButtonPressed(Button.AB, function () {
    nb_de_personnes = 0
})
input.onButtonPressed(Button.B, function () {
    nb_de_personnes += -1
})
let nb_de_personnes = 0
nb_de_personnes = 0
basic.forever(function () {
    if (nb_de_personnes >= 10) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            . . # . .
            `)
        basic.showLeds(`
            # # . # #
            # # . # #
            # # . # #
            # # # # #
            # # . # #
            `)
        basic.showNumber(nb_de_personnes)
    } else {
        basic.showNumber(nb_de_personnes)
    }
})
