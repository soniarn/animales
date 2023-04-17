input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            # # . . .
            . # . . .
            . # . . .
            . # # # .
            . # . # .
            `)
        basic.pause(1000)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.pause(1000)
        basic.showLeds(`
            # # . . .
            # # . # #
            . # . # .
            . # # # .
            . . . . .
            `)
        basic.pause(1000)
    }
})
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(100)
    basic.showIcon(IconNames.SmallHeart)
})
