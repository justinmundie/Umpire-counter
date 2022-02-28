input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # # # .
        # . . . .
        # # # # .
        . . . # .
        # # # . .
        `)
    basic.pause(500)
    Strikes += 1
    basic.showNumber(Strikes)
    if (Strikes == 3) {
        basic.pause(500)
        basic.showString("Strike out")
        Strikes = 0
        Balls = 0
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Reset")
    Strikes = 0
    Balls = 0
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # # . .
        # . . # .
        # . # . .
        # . . # .
        # # # . .
        `)
    basic.pause(500)
    Balls += 1
    basic.showNumber(Balls)
    if (Balls == 4) {
        basic.pause(500)
        basic.showString("Walk")
        Strikes = 0
        Balls = 0
    }
})
let Balls = 0
let Strikes = 0
basic.showString("GAME!")
basic.clearScreen()
Strikes = 0
Balls = 0
