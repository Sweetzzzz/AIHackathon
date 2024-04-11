import ollama from 'ollama'

async function chat(noteName, messages, setState) {
    const response = await ollama.chat(
        {
            model: noteName,
            messages: messages,
            stream: true,
        }
    )
    let text
    for await (const part of response) {
        newMessages.push(part)
        setState(text += part.message.content)
    }
    return text
}

export { chat }