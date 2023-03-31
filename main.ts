function curve_turn (duration: number, spd_l: number, spd_r: number) {
    Tinybit.CarCtrlSpeed2(Tinybit.CarState.Car_Run, spd_l, spd_r)
    basic.pause(duration)
    Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    for (let index = 0; index < 4; index++) {
        curve_turn(dur, 1, 1)
        curve_turn(dur, 1, 1)
        curve_turn(dur, 1, 1)
        curve_turn(dur, 1, 1)
    }
})
let dur = 0
dur = 0
basic.forever(function () {
	
})
