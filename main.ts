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
})
input.onButtonPressed(Button.B, function () {
    x = x - 1
    basic.showNumber(x)
})
let x = 0
basic.showString("DaSu rugger's club!")
basic.showIcon(IconNames.Happy)
basic.clearScreen()
