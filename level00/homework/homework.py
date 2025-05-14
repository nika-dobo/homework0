from turtle import *


#we wont paint house

#ster 1 drew a squere


width(5)
color("red")
begin_fill()

forward(200)
left(90)
forward(200)
left(90)
forward(200)
left(90)
forward(200)
left(90)
end_fill()


#door

forward(75)
color("blue")
begin_fill()
left(90)
forward(100)
right(90)
forward(50)
right(90)
forward(100)
left(90)
end_fill()


#saxuravi
penup()
goto(200, 200)
pendown()

color("yellow")
begin_fill()
left(140)
forward(130)
left(80)
forward(130)
end_fill()


#windows

penup()
goto(25, 125)
pendown()
color("green")
begin_fill()

right(130)
forward(50)
right(90)
forward(50)
right(90)
forward(50)
right(90)
forward(50)


penup()
goto(125, 125)
pendown()


right(90)
forward(50)
right(90)
forward(50)
right(90)
forward(50)
right(90)
forward(50)
end_fill()


#grass

penup()
goto(0, -1)
pendown()
forward(400)
forward(-800)



exitonclick()
