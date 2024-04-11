export async function fetchData() {
    try {
      const response = await fetch('https://worthy-refined-gobbler.ngrok-free.app/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({
          model: 'llama2',
          messages: [
            { role: 'user', content: 'why is the sky blue?' }
          ]
        })
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const jsonData = await response.json(); // Parse response as JSON
      if (jsonData.message && jsonData.message.content) {
        return jsonData.message.content;
      }
  
      return null; // Return null if no valid content found
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  }