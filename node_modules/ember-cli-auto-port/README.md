# Ember-cli-auto-port

Sometimes it becomes annoying to keep in sync and remember `port` setting for each of ember project I'm working on.

Probably you have seen already this error message when you tried to serve project while another one is already running on the same port:
```
Could not serve on http://localhost:4200. It is either in use or you do not have permission.
```

ember-cli-auto-port is a tiny addon which aims to get rid of such messages in your development workflow.

It uses `portfinder` package in the same way as ember-cli uses it for a live-reload ability.
If default/preconfigured port is busy then portfiner tries to find the nearest available port and then it's beeing passed to the ember express server. That's it.

## Usage

You don't need to do anything special to make it work except of installing emper-cli-auto-port.

## Installation

```
npm install ember-cli-auto-port --save-dev
```

## Running Tests

Currently there are no any tests here O_o

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
