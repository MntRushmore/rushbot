// index.js
require('dotenv').config()
// Debug environment variables
console.log("DEBUG - SLACK_BOT_TOKEN:", process.env.SLACK_BOT_TOKEN ? "[OK]" : "Missing")
console.log("DEBUG - SLACK_APP_TOKEN:", process.env.SLACK_APP_TOKEN ? "[OK]" : "Missing")
console.log("DEBUG - SLACK_SIGNING_SECRET:", process.env.SLACK_SIGNING_SECRET ? "[OK]" : "Missing")
const { App } = require('@slack/bolt')

// Commands
console.log("RushBot is starting...")
const askCommand = require('./commands/ask')
const mydayCommand = require('./commands/myday')

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN,
})

// Register commands
askCommand(app)
mydayCommand(app)

app.start().then(() => {
  console.log('⚡ RushBot is running in socket mode!')
})