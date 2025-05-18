const askAI = require('../utils/hackclubAI')
const { getTodos } = require('../data/todoStore.js')

module.exports = (app) => {
  app.command('/myday', async ({ ack, say, command }) => {
    await ack()

    let quote = 'No quote today!'
    try {
      quote = await askAI("Give me a short motivational quote for a student.")
    } catch (err) {
      console.error('Failed to fetch quote:', err)
    }

    const todos = getTodos()
    const tasks = todos.length
      ? todos.map(t => `• ${t}`).join('\n')
      : 'No tasks for today!'

    await say(`📅 Good day, ${command.user_name}! Here's your day so far:

✅ Tasks:
${tasks}

💬 Motivation:
"${quote}"

✨ Let’s get it!`)
  })
}