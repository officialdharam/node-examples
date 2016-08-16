<strong>Introduction</strong>

This project is a sample application which hosts REST API for person management.

<strong>Prerequisites</strong>
You need MongoDB running for all the functionalities to run. Use https://docs.mongodb.com/manual/administration/install-community/ to install MongoDB and start the database server

<strong>How to run the project</strong>

clone the repository using
git clone https://github.com/officialdharam/node-examples.git
cd person_mgmt_rest_api_nodejs
npm install
npm start

Once the application is running, it can be accessed at <a href="http://localhost:3002/">http://localhost:3002/</a>

Follow the guidelines:
1) Populate database with seed data - <a href="http://localhost:3002/import">http://localhost:3002/import</a>
2) Fetch all persons - <a href="http://localhost:3002/persons">http://localhost:3002/persons</a>
3) Fetch person by id - <a href="http://localhost:3002/persons/3">http://localhost:3002/persons/3</a>

For Add, Update and Delete - use curl or POSTMAN on chrome


<strong>License Information</strong>
Use it as you want, no need to take permissions.

