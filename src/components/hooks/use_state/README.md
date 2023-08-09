# useState

Components need to “remember” things: the current input value, the current image, the shopping cart etc. In React, this kind of component-specific memory is called "state".

👉 Make yourself familiar with the files in the `hooks/use_state` folder.

## The Mission

In the `CountCats.tsx` file there is a component called `CountCats`.

This component is supposed to:

-   Render a button on the screen

-   When a user clicks the button, an extra cat should appear! 🐈

-   The button should also display the number of cats

You mission is to implement this functionality... using `useState`

## Have I solved this challenge correctly?

If you have implemented `useState` correctly, you should:

-   See an extra cat on the screen every time you click the button

-   The button should display how many cats there are

- You should have a function called (something like) `incrementCats`

- You should be using the `setState` function to add more cats to state (Note: You should never mutate state, you should always use the setState method https://react.dev/learn/updating-arrays-in-state)

- You shouldn't be "duplicating state". Meaning, you only need one piece of state here.

Use the React documentation to help you: https://react.dev/reference/react/useState

## Food For Thought

-   What is the useState hook for?

-   What does does useState return?

-   Should you call useState inside loops or if/else statements?

-   How many times will React call your initializer function in Strict Mode?
