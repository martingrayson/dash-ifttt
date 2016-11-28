'use strict';

var dashButton = require('node-dash-button');
var request = require('request')


function DashIftttEvent(config, ifttt_config) {

  if (!config.dash_mac_address){
    console.error("Missing mac adddress for Dash!");
  }
  this.mac = config.dash_mac_address;

  if (!config.dash_event_name){
    console.error("Missing IFTTT event name for Dash!");
  }
  this.event_name = config.dash_event_name;

  if (!config.event_description){
    console.warn("Missing event description for Dash!")
  }
  this.event_description = config.event_description;

  if (!ifttt_config.ifttt_maker_key){
    console.warn("IFTT maker key!")
  }
  this.iftt_api_key = ifttt_config.ifttt_maker_key;

  // TODO: Actually exit if the config isnt correct.
  this.button = dashButton(this.mac, null, null, 'all')

  var ref = this;
  this.button.on("detected", function() {
    console.log('%s dash button pressed.', ref.event_name);
    ref.triggerEvent();
  });
}

DashIftttEvent.prototype.triggerEvent = function() {
  var ref = this;

  request('https://maker.ifttt.com/trigger/'+this.event_name+'/with/key/'+this.iftt_api_key,
   function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log('Successfully fired %s event.', ref.event_name);
    }
    else {
      console.error("Error hitting IFTTT!");
      console.error(response);
    }
  });
};

module.exports = DashIftttEvent;
