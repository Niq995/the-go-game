# Welcome to the simple Go game with React
<br>This project is a remix of tic tac toe game template in this link: https://glitch.com/~pitt-infsci-2560-tic-tac-toe
<br>This template is based on the default app generated by [Create React App](https://github.com/facebookincubator/create-react-app).
<br>Learned from the react tutorial about Tic-Tac-Toe game: https://zh-hans.reactjs.org/tutorial/tutorial.html

## What I did:
  <br>Implement the game but not the game rule in a 9x9 grid board.
  <br>Players can trace back into history, back to the beginning of the game or pass his/her turn.
  <br>Players can remove stones when click on the existing stone on the board.
### Working on other features about the rule when I got time

## How to run this project:
Way 1: Simply click on this link and "show": https://glitch.com/~niq5-webassignment-2

Way 2: Find your favorate IDE that has React installed and run this program.

## Below are some questions that I answered specifically for the assignment but may help you understand how those files & functions work.
--------------------
## Question to answer in the document:
**1. What are the various components you need to manage the application? What are all the various user interface elements?**<br><br>
All the components I need to manage is the square, board and game components. 
The user interface elements are: click on the cross of the board and get stone placed white and black in turn, click on existing stone to remove the specific stone, click on the steps to go back into history or restart the game.<br><br>

-------------------
**2. What information is needed by which components? Does the information change? How does information flow between components? Will you manage this using props or state?**<br><br>
I manage user's interaction (place stones on the intersaction of the board) with the game using state, while using props.value to display the stone since its symbol (stone) did not change.<br>
Information flow: (components) square->board->game->App->index<br>
**Components:**<br>
* `square.js`: <br>Only handle generating one grid and set it into a button, onclick it will display its parent.prop.value(setted in board.js)<br>
* 'board.js': <br>Render the whole 9x9 board using *<div>* tag, with each small one square rendered by square.js render() method.<br>
* `game.js`:(This is the main component of the game)<br>
  It contains states & methods:<br>
  * `history` (array[array[9x9]]): Every time put a stone on board, history will copy the whole array[81](from board component) state and append the new array into its original one, therefore prepare it to jump back if the user wants to.
  * `xIsNext` (boolean): Flip everytime in turn to determine next player who need to place the stone.
  * `stepNumber` (integer): Track the step number when the player wants to fly back in history.<br>
  * `handleClick(stepNumber)`: Change text on whick player is the next and the xIsNext, append current board state in history
  * `handleClick2()`: Enable player to pass their turn without puting a stone on the board.
  * `jumpTo()`: copy history array from step 1 to user specific step into a new array called newHistory, determine which user's turn is using module by 2, and replace history with newHistory.
  * `render()`: Eveytime game.js state changes, render method get recalled. <br><br>
--------------------
**3. What are the interactions between the user and the interface? What are the interactions between components?**<br><br>
The interaction between the user and interface is:
  * User could click on the cross of the board and place different color of stones in turn to the board.
  * Fly back to any step in the history and continue playing the game.
The interaction between the components:
  Everytime states change in `game.js`, the render method get re-called, tag `<Board/>` recalled render method in `board.js`, and tag `<Square/>` re-called render method in `square.js` to refresh the display according to the state changes.
---------------------


## Code

For the project to build, these files must exist with exact filenames:
* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.
You can delete or rename the other files.

`watch.json` - The [watch.json](https://glitch.com/help/restart/) file in this project configures Glitch to use optimal install and restart rules for developing React apps. 

## Available Scripts

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

Made by [Glitch](https://glitch.com/)
-------------------

\ ゜o゜)ノ
