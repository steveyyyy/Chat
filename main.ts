input.onButtonPressed(Button.A, function () {
    radio.sendString("hallo")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.setGroup(1)
    basic.showNumber(1)
})
radio.setGroup(1)
basic.forever(function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
