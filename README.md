# Amazon Dash to IFTTT

A very simple script to catch events from an Amazon Dash button, relaying them to IFTTT as a Maker Event.

Maker Events in IFTTT can be used as part of a trigger, linked to an action service such as Send an SMS.

This very simple package uses Alex Hortin's [node-dash-button](https://github.com/hortinstein/node-dash-button) project to capture events from the dash button.

## Configuration

### Setup your Dash button

- Follow the setup provided within the Amazon app to connect the Dash button to your local network - **EXIT THE APP BEFORE PICKING A PRODUCT**.

- Locate the MAC addresss of your dash button using the `find_button` script provided by [node-dash-button](https://github.com/hortinstein/node-dash-button) 

### Configure Dash to IFTTT

- Add your Dash MAC address (`dash_mac_address`) to the config and setup an event name (`dash_event_name`) to be passed to IFTTT. The event name can be anything e.g. "pop_tarts_dash_press"

- Run the project on your machine / server etc. (something like `pm2` on a pi will do the trick)

### Configure IFTTT

- Login to IFTTT.com
- Hit My Applets -> New Applet
- Search for the "Maker" service and hit "Recieve a web request"
- Enter your event name as you did in the config, e.g. "pop_tarts_dash_press"
- Select an action service e.g. SMS
- Run the application and WIN!
