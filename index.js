// index.js
require('dotenv').config()
const { App } = require('@slack/bolt')

// Commands
const askCommand = require('./commands/ask')

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN,
})

// Register commands
askCommand(app)

app.start().then(() => {
  console.log('⚡ RushBot is running in socket mode!')
})