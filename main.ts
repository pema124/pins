input.onPinTouchEvent(TouchPin.P3, input.buttonEventValue(ButtonEvent.Down), function () {
    if (Gang >= GangMax) {
        Gang = 0
    } else {
        Gang = Gang + 1
    }
    if (Gang == 0) {
        basic.showLeds(`
            # # # . .
            # . . # .
            # # # . .
            # . # . .
            # . . # .
            `)
    } else {
        basic.showNumber(Gang)
    }
})
let GangMax = 0
let Gang = 0
Gang = 1
GangMax = 3
basic.showNumber(Gang)
