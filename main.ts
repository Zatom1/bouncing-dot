let x = 2
let y = 3
let x_speed = 1
let y_speed = 1.5
led.plot(x, y)
basic.forever(function on_forever() {
    
    led.unplot(x, y)
    if (x >= 4 || x <= 0) {
        x_speed *= -1
    }
    
    if (y >= 4 || y <= 0) {
        y_speed *= -1
    }
    
    x = x + x_speed
    y = y + y_speed
    led.plot(x, y)
    basic.pause(200)
})
