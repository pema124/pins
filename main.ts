input.onPinTouchEvent(TouchPin.P0, input.buttonEventValue(ButtonEvent.Click), function () {
    let GangMax = 0
    if (Gang >= GangMax) {
        Gang = 0
    } else {
        Gang = Gang + 1
    }
    basic.showNumber(Gang)
})
let Gang = 0
Gang = 0
