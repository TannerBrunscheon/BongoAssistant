// See https://github.com/dialogflow/dialogflow-fulfillment-nodejs
// for Dialogflow fulfillment library docs, samples, and to report issues
'use strict';
const { WebhookClient } = require('dialogflow-fulfillment');
const { Card, Suggestion } = require('dialogflow-fulfillment');

exports.handler = (event, context, callback) => {
  switch(event.body.intent.displayName){
    
    case ('Bus Stop Prediction'):{
      
    }




  }
  const done = (err, res) => callback(null, {
    statusCode: err ? '400' : '200',
    body: err ? err.message : JSON.stringify(res),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  function welcome(agent) {
    agent.add(`Welcome to my agent!`);
  }

  function fallback(agent) {
    agent.add(`I didn't understand`);
    agent.add(`I'm sorry, can you try again?`);
  }

  // Uncomment and edit to make your own intent handler
  // uncomment `intentMap.set('your intent name here', yourFunctionHandler);`
  // below to get this function to be run when a Dialogflow intent is matched
  function busStopHandler(agent) {
    const stop = agent.parameters['bus-stop'][0];
    agent.add('Hey you asked for a bus stop!');

  }

  // Uncomment and edit to make your own Google Assistant intent handler
  // uncomment `intentMap.set('your intent name here', googleAssistantHandler);`
  // below to get this function to be run when a Dialogflow intent is matched
  function googleBusStopHandler(agent) {
    const stop = agent.parameters['bus-stop'][0];
    let conv = agent.conv();
    // Get Actions on Google library conv instance
    conv.ask('Hey you asked for a bus stop!'); // Use Actions on Google library
    agent.add(conv); // Add Actions on Google library responses to your agent's response
  }
  // See https://github.com/dialogflow/dialogflow-fulfillment-nodejs/tree/master/samples/actions-on-google
  // for a complete Dialogflow fulfillment library Actions on Google client library v2 integration sample
  
  // Run the proper function handler based on the matched Dialogflow intent name
  let returnJSON = new Object();
  returnJSON
  let intentMap = new Map();
  intentMap.set('Default Welcome Intent', welcome);
  intentMap.set('Default Fallback Intent', fallback);
  intentMap.set('Bus Stop Prediction', googleBusStopHandler);
  intentMap.set('Bus Stop Prediction', busStopHandler);
  agent.handleRequest(intentMap);
};
