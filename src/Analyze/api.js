import axios from 'axios';

export default async function detectFoodAndCalories(base64Image) {
    const apiKey = process.env.REACT_APP_GOOGLE_AI_API_KEY;
    const model = 'gemini-2.0-flash';
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

    const match = base64Image.match(/^data:(image\/\w+);base64,(.*)$/);
    if (!match) {
        throw new Error('Invalid image data format.');
    }

    const mimeType = match[1];
    const base64Data = match[2];

    const requestBody = {
        contents: [
            {
                parts: [
                    {
                        text: 'Identify the food in this picture and estimate the calories. Please make sure to return the content in this structure as JSON. {"items": ["ice", "apple"], "total_calories": xx} Just return JSON, do not include other content.',
                    },
                    {
                        inline_data: {
                            mime_type: mimeType,
                            data: base64Data,
                        },
                    },
                ],
            },
        ],
    };

    try {
        const response = await axios.post(apiUrl, requestBody, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data = response.data;
        const text = data.candidates[0].content.parts[0].text;
        const regex = /\{.*?\}/s;
        const match = text.match(regex);

        if (!match) {
            throw new Error('No valid JSON found in the response.');
        }

        const jsonStr = match[0];
        const parsedData = JSON.parse(jsonStr);

        return {
            items: parsedData.items,
            count: parsedData.total_calories,
        };
    } catch (error) {
        console.error('API call failed:', error);
        throw new Error(`Failed to detect food and calories: ${error.message}`);
    }
}