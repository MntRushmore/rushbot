

module.exports = async function askAI(query) {
  const res = await fetch('https://ai.hackclub.com/chat/completions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      messages: [{ role: 'user', content: query }]
    })
  })

  const data = await res.json()
  return data.choices?.[0]?.message?.content || "No response from AI."
}