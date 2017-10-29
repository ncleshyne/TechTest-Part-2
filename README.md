# Tech Test Part 2: Back-end

## Tasks:
- Write server-side JavaScript in Node.js and persist to a PostgreSQL or MongoDB database. 
- The data will need to be set up in its own database
- Build a basic set of RESTful API’s for a merchant’s API endpoint, i.e. /api/merchants

RESTful API’s must be able to perform the following operations:
- Create (POST). Add a new merchant.
- Read (GET). Return all merchants, return merchant by id, return active merchants only
- Update (PUT). Update merchant details - commonly used to update status
- Delete (DELETE). Delete a merchant

## How to Run:
1. Make sure Mongodb and node are installed by running `npm -v` and `mongo --version`
2. Clone or download this repository
3. Run mongodb in the background
4. Run the app by typing 
   `cd TechTest-Part-2
    npm install
    npm start
   `
## Tools
Postman was used to test the API

![Imgur](https://i.imgur.com/7dlf2e0.png)
![Imgur](https://i.imgur.com/ylDGu0l.png)
