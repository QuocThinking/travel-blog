import { GoogleGenAI } from "@google/genai";

// Ensure API key is available
const apiKey = process.env.API_KEY || '';

const ai = new GoogleGenAI({ apiKey });

export const getTravelAdvice = async (query: string): Promise<string> => {
  if (!apiKey) {
    return "Vui lòng cấu hình API Key để sử dụng tính năng này.";
  }

  try {
    const model = 'gemini-2.5-flash';
    const systemInstruction = `Bạn là một chuyên gia tư vấn du lịch nhiệt tình và am hiểu của Voyage Adventures. 
    Hãy trả lời bằng tiếng Việt. Câu trả lời ngắn gọn, súc tích (dưới 150 từ), tập trung vào gợi ý điểm đến và trải nghiệm thú vị. 
    Giọng văn thân thiện, chuyên nghiệp, khuyến khích khách hàng đặt tour.`;

    const response = await ai.models.generateContent({
      model: model,
      contents: query,
      config: {
        systemInstruction: systemInstruction,
      }
    });

    return response.text || "Xin lỗi, tôi không thể đưa ra gợi ý lúc này.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Đã có lỗi xảy ra khi kết nối với trợ lý AI. Vui lòng thử lại sau.";
  }
};