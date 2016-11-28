'use strict';

var DashIftttEvent = require('./lib/dash_ifttt_event.js')
var config = require('./config/ifttt.json')


if (!config || !config.dash_config.actions || config.dash_config.actions.length == 0)
{
	console.error('Dash config missing or invalid! Please populate config/ifttt.json');
	process.exit(1);
}

if (!config || !config.ifttt_config)
{
	console.error('IFTTT config missing or invalid! Please populate config/ifttt.json');
	process.exit(1);
}

config.dash_config.actions.forEach(function(action){
	new DashIftttEvent(action, config.ifttt_config);
});

console.log("Listening for dash events...")
