# serverless-api

## Author

Stephanie Hill

## Functionality

- Using DynamoDB we first created a database, with a specified ID as the partitiion key
- We then added an item to the database as a means of establishing structure.
- From here, we established a REST API in API Gateway, establishing /people as the endpoint, and effectively creating a routing system
- In order to establish functionality, permissions were established in Lambda, and functions for standard CRUD operations were written
- In order to access our code, it was necessary to write it out in our editor, zip the files and upload them onto our Lambda code base
- We were able to test the linked routes and functions in API Gateway console
- Each method has its own console to insert the necessary JSON data in order to test the specific function. (Structured as below with our established schema)

```JSON
{
    "id": 3,
    "name": "Stephanie",
    "breakfast": "burrito"
}
```

- we were also able to test via query string as below

`id=3&name=Stephanie&breakfast=burrito`

## Credits and Collaborators

Demo code, Brandon Pitts, Keelen Fisher, Tyler main, Luis Rosales
