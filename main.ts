function ansikt_mellom () {
    led.plot(1, 1)
    led.plot(3, 1)
    led.plot(0, 3)
    led.plot(1, 3)
    led.plot(2, 3)
    led.plot(3, 3)
    led.plot(4, 3)
    led.plot(0, 1)
    led.plot(1, 0)
    led.plot(0, 0)
    led.plot(4, 1)
    led.plot(4, 0)
    led.plot(3, 0)
}
function ansikt_lei () {
    led.plot(1, 1)
    led.plot(3, 1)
    led.plot(0, 4)
    led.plot(1, 3)
    led.plot(2, 3)
    led.plot(3, 3)
    led.plot(4, 4)
    led.plot(0, 1)
    led.plot(1, 0)
    led.plot(0, 0)
    led.plot(4, 1)
    led.plot(4, 0)
    led.plot(3, 0)
}
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 999999; index++) {
        ansikt_lei()
        basic.pause(slag)
        basic.clearScreen()
        ansikt_mellom()
        basic.pause(slag)
        basic.clearScreen()
        ansikt_glad()
        basic.pause(slag)
        basic.clearScreen()
        for (let index = 0; index < 2; index++) {
            ansikt_blunk()
            basic.pause(slag / 2)
            basic.clearScreen()
            ansikt_glad()
            basic.pause(slag / 2)
            basic.clearScreen()
        }
    }
})
function ansikt_glad () {
    led.plot(1, 1)
    led.plot(3, 1)
    led.plot(0, 3)
    led.plot(1, 4)
    led.plot(2, 4)
    led.plot(3, 4)
    led.plot(4, 3)
    led.plot(0, 1)
    led.plot(1, 0)
    led.plot(0, 0)
    led.plot(4, 1)
    led.plot(4, 0)
    led.plot(3, 0)
}
function ansikt_blunk () {
    led.plot(1, 1)
    led.plot(3, 1)
    led.plot(0, 3)
    led.plot(1, 4)
    led.plot(2, 4)
    led.plot(3, 4)
    led.plot(4, 3)
    led.plot(0, 1)
    led.plot(4, 1)
    led.plot(1, 0)
    led.plot(0, 0)
}
let slag = 0
slag = 467.75
basic.forever(function () {
	
})
