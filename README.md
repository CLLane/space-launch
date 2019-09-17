# Launch Log

Launch Log, was built over the course of  six days utilizing an agile workflow, and allows users to search the Launch Library API for upcoming space launches around the world as well as do research into companies, specific rockets, and missions. The application is bootstrapped with Create React App utilizes React Router for page navigation, Redux to assist in data management, PropTypes to ensure the correct data types are passed within the program, and a testing suite utilizing Enzyme and Jest. Tests cover UI changes, event simulation, async fetch calls, React state changes, and Redux store updates. 


## Technologies Utilized
 - React
 - React Router
 - Redux
 - iTunes API
 - postgresSQL
 - Fetch (GET/POST/DELETE) local server network requests
 - PropTypes
 - CSS

## Set Up

### Clone and Install UI

Clone down the UI repository.

Install the application's dependencies from within the cloned directory:
```bash
npm install
```

Then launch the application within the browser:
```bash
npm start
```

### Launch UI

open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

## Testing

Application components and routes have been tested using various unit testing techniques including snapshots, class method and functional testing. 
```bash
npm test
```

## Developers

 - Christopher Lane [@CLLane](https://github.com/CLLane)

## Screenshots
![](Images/Home.png)
![](Images/launches.png)
![](Images/rockets.png)
