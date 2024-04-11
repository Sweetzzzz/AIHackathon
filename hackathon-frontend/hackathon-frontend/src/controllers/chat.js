/* eslint-disable no-constant-condition */
async function chat(noteName, messages, setState) {
    try {
      const response = await fetch(`https://worthy-refined-gobbler.ngrok-free.app/chat?model=${noteName}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({
          model: noteName,
          messages: messages
        })
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const reader = response.body.getReader()
      let decoder = new TextDecoder()
      let partialData = ''
      let fullData = []

      while (true) {
        const { done, value } = await reader.read()

        if (done) break

        partialData += decoder.decode(value, {stream : true})

        try {
            const parsedData = JSON.parse(partialData)
            fullData.push(parsedData)

            if (parsedData.message && parsedData.message.content) {
                const content = parsedData.message.content
                setState(prevData => prevData + content)
            }
            
            partialData = ''
        } catch (error) {
            continue
        }
        
      }
      return fullData
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  }

export { chat }