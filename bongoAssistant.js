// See https://github.com/dialogflow/dialogflow-fulfillment-nodejs
// for Dialogflow fulfillment library docs, samples, and to report issues
'use strict';

exports.handler = (event, context, callback) => {
  const done = (err, res) =>
    callback(null, {
      statusCode: err ? '400' : '200',
      body: err ? err.message : JSON.stringify(returnJSON),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  // Uncomment and edit to make your own intent handler
  // uncomment `intentMap.set('your intent name here', yourFunctionHandler);`
  // below to get this function to be run when a Dialogflow intent is matched
  function busStopHandler(agent) {
    returnJSON.payload = {
      google : {
        expectUserResponse: true,
        richResponse: {
          items: [
            { simpleResponse: { textToSpeech: 'this is a simple response' } }
          ]
        }
      }
  }
  }

  // Uncomment and edit to make your own Google Assistant intent handler
  // uncomment `intentMap.set('your intent name here', googleAssistantHandler);`
  // below to get this function to be run when a Dialogflow intent is matched
  function googleBusStopHandler(agent) {}
  // See https://github.com/dialogflow/dialogflow-fulfillment-nodejs/tree/master/samples/actions-on-google
  // for a complete Dialogflow fulfillment library Actions on Google client library v2 integration sample
  let returnJSON = new Object();
  switch (event.body.queryResult.intent.displayName) {
    case 'Bus Stop Prediction': {
      busStopHandler(event.body.queryResult);
    }
  }
  // Run the proper function handler based on the matched Dialogflow intent name
};
