import { GoogleGenerativeAI } from '@google/genai';

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY || '');
const model = genAI.getGenerativeModel({ model: 'gemini-3.1-flash-lite' });

export async function generateAvatarPrompt(imageDescription: string) {
  const result = await model.generateContent(`Generate a prompt for a 3D avatar generation model based on this description: ${imageDescription}`);
  return result.response.text();
}
