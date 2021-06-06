input.onButtonPressed(Button.A, function () {
    x = x + 1
    basic.showNumber(x)
})
input.onGesture(Gesture.Shake, function () {
    x = 0
    basic.showNumber(x)
})
input.onButtonPressed(Button.AB, function () {
    while (x != 0) {
        basic.pause(1000)
        x = x - 1
        basic.showNumber(x)
    }
    basic.pause(500)
    basic.showString("finish counting!!!")
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(247, music.beat(BeatFraction.Whole))
    music.playTone(220, music.beat(BeatFraction.Whole))
    music.playTone(196, music.beat(BeatFraction.Whole))
    music.playTone(175, music.beat(BeatFraction.Whole))
    music.playTone(165, music.beat(BeatFraction.Whole))
    music.playTone(147, music.beat(BeatFraction.Whole))
    music.playTone(131, music.beat(BeatFraction.Double))
})
input.onButtonPressed(Button.B, function () {
    x = x - 1
    basic.showNumber(x)
})
let x = 0
basic.showString("DaSu rugger's club!")
basic.showIcon(IconNames.Happy)
basic.clearScreen()
