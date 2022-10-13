const dynamoose = require('dynamoose');

const peopleSchema = new dynamoose.Schema({
  id: Number,
  name: String,
  breakfast: String,
});

const peopleModel = dynamoose.model('people', peopleSchema);

exports.handler = async (event) => {

  let parsedBody = JSON.parse(event.body);
  let {id, name, breakfast} = parsedBody;

  // let {id, name, breakfast} = event.queryStringParameters;

  let person = {id, name, breakfast};

  const response = {statusCode: null, body: null};

  try {
    let newPerson = await peopleModel.update(person);
    response.statusCode = 200;
    response.body = JSON.stringify(newPerson);

  } catch(e) {
    console.log(e);
    response.statusCode = 500;
    response.body = JSON.stringify(e.message);
  }

  console.log('new person --------->');

  return response;

};