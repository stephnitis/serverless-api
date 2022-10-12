const dynamoose = require('dynamoose')

exports.handler = async (event) => {

    console.log('---------->', event.queryStringParameters)
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};