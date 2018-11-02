'use strict';

const log = require('./log');
const discovery = require('./discovery');
const control = require('./control');

/**
 * Main entry point.
 * Incoming events from Alexa Lighting APIs are processed via this method.
 */
exports.handler = function(event, context) {

  log('Input3', JSON.stringify(event));

  let header = event.directive.header;

  if (event.directive) {
    switch (header.namespace) {

      /**
       * The namespace of "Discovery" indicates a request is being made to the lambda for
       * discovering all appliances associated with the customer's appliance cloud account.
       * can use the accessToken that is made available as part of the payload to determine
       * the customer.
       */
      case 'Alexa.Discovery':
        discovery.handle(event, context);
        break;

      /**
      * The namespace of "Control" indicates a request is being made to us to turn a
      * given device on, off or brighten. This message comes with the "appliance"
      * parameter which indicates the appliance that needs to be acted on.
      */
      case 'Alexa.PowerController':
        control.handle(event, context);
        break;

      /**
       * We received an unexpected message
       */
      default:
        log('Err', 'No supported namespace in directive: ' + JSON.stringify(header));
        context.fail('Something went wrong');
        break;
    }
  }
};

