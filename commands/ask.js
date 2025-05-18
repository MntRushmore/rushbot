// commands/ask.js
const askAI = require('../utils/hackclubAI')

module.exports = (app) => {
  app.command('/ask', async ({ command, ack, say }) => {
    await ack()
    const question = command.text
    try {
      const response = await askAI(question)
      await say(`🤖 ${response}`)
    } catch (err) {
      console.error('🔥 AI error:', err)
      await say('⚠️ Something went wrong with AI!')
    }
  })
}