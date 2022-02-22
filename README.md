# deinbett
The tests are using

  Cypress:        9.5.0                                                           
  Browser:        Electron 94 (headless)
  Node Version:   v14.19.0 
  
There are 2 options to run the tests:

1. Without Docker container

Node.js and Cypress need to be installed on host machine. Clone the project and run command from the root directory:

	npm run cypress:qa
	
The env variables will be fetched from qa.json config file

2. With Docker container

run the command: docker-compose up