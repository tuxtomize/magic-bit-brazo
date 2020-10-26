IrRemote.onPressEvent(RemoteButton.NUM9, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.White))
})
IrRemote.onPressEvent(RemoteButton.Ok, function () {
    magicbit.Servo(magicbit.Servos.S7, 105)
    tecla = 0
})
IrRemote.onPressEvent(RemoteButton.NUM0, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
})
IrRemote.onPressEvent(RemoteButton.NUM7, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Violet))
})
IrRemote.onPressEvent(RemoteButton.NUM8, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Purple))
})
IrRemote.onPressEvent(RemoteButton.NUM3, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
})
IrRemote.onPressEvent(RemoteButton.NUM1, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
})
IrRemote.onPressEvent(RemoteButton.UP, function () {
    tecla = 1
})
IrRemote.onPressEvent(RemoteButton.A, function () {
    magicbit.Servo(magicbit.Servos.S8, 45)
    basic.pause(1000)
    magicbit.Servo(magicbit.Servos.S8, 108)
})
IrRemote.onPressEvent(RemoteButton.NUM6, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Indigo))
})
IrRemote.onPressEvent(RemoteButton.Right, function () {
    tecla = 0
    magicbit.Servo(magicbit.Servos.S7, 45)
    magicbit.StepperDegree(magicbit.Steppers.STPM1, 80)
    magicbit.Servo(magicbit.Servos.S7, 105)
})
IrRemote.onPressEvent(RemoteButton.NUM5, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Blue))
})
IrRemote.onPressEvent(RemoteButton.NUM2, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Orange))
})
IrRemote.onPressEvent(RemoteButton.Left, function () {
    tecla = 0
    magicbit.Servo(magicbit.Servos.S7, 165)
    magicbit.StepperDegree(magicbit.Steppers.STPM2, 80)
    magicbit.Servo(magicbit.Servos.S7, 105)
})
IrRemote.onPressEvent(RemoteButton.B, function () {
    for (let index = 0; index < 2; index++) {
        magicbit.Servo(magicbit.Servos.S8, 160)
        basic.pause(1000)
        magicbit.Servo(magicbit.Servos.S8, 60)
        basic.pause(1000)
    }
    magicbit.Servo(magicbit.Servos.S8, 108)
})
IrRemote.onPressEvent(RemoteButton.NUM4, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
})
IrRemote.onPressEvent(RemoteButton.C, function () {
    magicbit.Servo(magicbit.Servos.S8, 160)
    basic.pause(1000)
    magicbit.Servo(magicbit.Servos.S8, 108)
})
let tecla = 0
let strip: neopixel.Strip = null
IrRemote.init(Pins.P1)
strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
tecla = 0
basic.showIcon(IconNames.Yes)
basic.pause(2000)
basic.clearScreen()
basic.forever(function () {
    if (tecla == 1) {
        magicbit.Servo(magicbit.Servos.S7, 105)
        magicbit.StpCarMove(1, 30)
    }
})
