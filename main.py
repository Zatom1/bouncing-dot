x = 2
y = 3
x_speed = 1
y_speed = 1.5

led.plot(x, y)

def on_forever():
    global x, y, x_speed, y_speed
    
    led.unplot(x, y)

    if x>=4 or x <=0:
        x_speed *= -1

    if y>= 4 or y <=0:
        y_speed *= -1

    x = x + x_speed
    y = y + y_speed

    led.plot(x, y)

    basic.pause(200)
    
basic.forever(on_forever)
