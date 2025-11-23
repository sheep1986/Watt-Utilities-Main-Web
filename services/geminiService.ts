import { GoogleGenAI, Type } from "@google/genai";

// Initialize the client with the API key from environment variables
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Generates a short, SEO-optimized blog post snippet about the UK energy market.
 * This helps the website keep fresh content to rank higher on Google.
 */
export const generateSEOContent = async (topic: string): Promise<string> => {
  try {
    const modelId = "gemini-2.5-flash"; 
    const response = await ai.models.generateContent({
      model: modelId,
      contents: `Write a professional, SEO-optimized HTML article snippet (approx 150 words) for a UK Utility Broker website. 
      The topic is: "${topic}". 
      Include specific keywords like "business energy rates", "compare utility prices", and "Watt Utilities".
      Format with <h3> for the title and <p> for paragraphs. Do not include markdown code blocks, just raw HTML strings.`,
      config: {
        temperature: 0.7,
      }
    });

    return response.text || "<p>Market analysis currently unavailable. Please contact our experts.</p>";
  } catch (error) {
    console.error("Failed to generate SEO content:", error);
    return "<p>Unable to load latest market insights. Our team is ready to assist you directly.</p>";
  }
};

/**
 * Analyzes a customer's query to suggest the best utility service.
 */
export const analyzeUtilityQuery = async (query: string): Promise<string> => {
    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: `You are a senior energy consultant for Watt Utilities. 
            Answer the customer's question briefly and professionally: "${query}".
            End with a call to action to call us at 01234 567 890.`
        });
        return response.text || "Please contact our support team for a detailed quote.";
    } catch (error) {
        console.error("Error analyzing query", error);
        return "We are experiencing high traffic. Please call us directly for a quote.";
    }
}
