Set remote in git repo in VS Code:
=======================================

git remote add origin https://github.com/ghanlohar/ReactJS-Remote.git

git remote add origin https://github.com/ghanlohar/ReactJS-Daily.git

Deploy app on Git Pages
=========================================

1. git init in local app folder

2. git remote add origin https://github.com/ghanlohar/ReactJS-Remote.git

3. npm run deploy


Debugging react app:
----------------------------------
1. install chrome debugger ext.
2. CTRL+SHIFT+d - -- debugger tab
3. gear btn - launch.json
4. npm start - Ensure that your development server is running. 
5. Press F5 or the green arrow --- to launch the debugger and open a new browser instance.

https://code.visualstudio.com/docs/nodejs/reactjs-tutorial \n
Section: Configure the Chrome debugger

Managing states
------------------------
1. Props & state
2. Context API
3. React-redux

Linting
=======================
Linters analyze your source code and can warn you about potential problems before you run your application.
Linters can provide more sophisticated analysis, enforcing coding conventions and detecting anti-patterns.
Once the ESLint extension is installed and VS Code reloaded, you'll want to create an ESLint configuration file .eslintrc.json. You can create one using the extension's ESLint: Create ESLint configuration command from the Command Palette (Ctrl+Shift+P).

ES6 Features
=================================

Destructuring
------------------------------
Object destructuring ==> const {PI, E, SQRT2} = Math;
Array destructuring ==> const [a,b,,d] = [10, 20, 30, 40]

1. Named arguments in the functions

Rest operator
------------------------
Array Rest operator ==> const [a, ...newArray] = [10, 20, 30, 40];
a = 10, newArray = [20, 30 ,40]

Object Rest operator ==> const {a, ...person} = { a : 10, name: 'John', surname: 'doe'}
a = 10, person = {name: 'John', surname: 'doe'};

Copy object and array using rest operator ==>>
let copiedPerson = {...person};
let copiedArray = [...newArray];

Copy is going to be shallow copy: nested objects will point to same objects/arrays in the copied obj/arrays.

Spread operator
--------------------------------


For every behavior we are trying to implement, there are two aspects of it, 
1. Actual logic to change the state in code.
2. UI logic to describe the state.










