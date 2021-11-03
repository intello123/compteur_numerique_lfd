input.onButtonPressed(Button.A, function () {
    nb_de_personnes += 1
})
input.onButtonPressed(Button.AB, function () {
    nb_de_personnes += 0
})
input.onButtonPressed(Button.B, function () {
    nb_de_personnes += -1
})
let nb_de_personnes = 0
basic.forever(function () {
    basic.showNumber(nb_de_personnes)
})
basic.forever(function () {
    if (nb_de_personnes == 20 || nb_de_personnes > 20) {
        if (input.buttonIsPressed(Button.A)) {
            nb_de_personnes = 20
        }
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
    } else {
        basic.showNumber(nb_de_personnes)
    }
})
