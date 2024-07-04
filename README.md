# Calculator App Assessment

Overall this was a fun exercise to work on! It is surprising how much functionality is implemented in a simple tool that we use every day.

## Things that were implemented

- AC, operators and number keys
- An error banner (currently shows when trying to divide by 0)
- Some logic to start with undefined to be able to show the 0 input when users press 0
- Button hover interaction

## Things that were not implemented

- The . button, currently throws a NaN error because of the default case in the switch
- Make AC a slightly darker gray
- onPress styling for buttons (maybe a slight grow or a slight color change)

## Known bugs

I didn't have much time to test but I became aware of the following bug when implementing:

- Since we start with undefined, if users do an operation just after loading the app it will not work

## Things I would've liked to do if I had more time

- I would've liked to add an extra line with the previous operation so that users have more context but we would have to manage more state
- It would've been great if when users pressed +,-,x or / without pressing = it would automatically calculate the result and save the operation (like the iphone app)
- Allow users to enter a number using the keyboard, right now it's a readonly input
- More comments explaining what is going on in some logic
- Fix overall formatting (alphabetical order variables, better code organization)
- Fix styling amd make it look nicer
- Add icons for operators instead of just using the keyboard
