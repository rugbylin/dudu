input.onButtonPressed(Button.A, function () {
    music.playMelody("C5 B A G F E D C ", 120)
})
input.onGesture(Gesture.Shake, function () {
    soundExpression.slide.playUntilDone()
})
input.onButtonPressed(Button.B, function () {
    music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
})
basic.showString("DaSu rugger's club!")
basic.showIcon(IconNames.Happy)
basic.showLeds(`
    . . # . .
    # # # # #
    . . # . .
    . # . # .
    # . . . #
    `)
