input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # # # # #
        # . . . .
        # # # # #
        . . . . #
        # # # # #
        `)
    basic.pause(500)
    basic.showNumber(Strikes)
    Strikes += 1
    if (Strikes == 3) {
        Strikes = 0
        Balls = 0
    }
})
input.onButtonPressed(Button.B, function () {
    if (Balls == 4) {
        Strikes = 0
        Balls = 0
    }
    basic.showNumber(Balls)
    Balls += 1
})
let Balls = 0
let Strikes = 0
basic.showLeds(`
    . # # # .
    # . # . #
    # # # # #
    # . # . #
    . # # # .
    `)
basic.clearScreen()
Strikes = 0
Balls = 0
