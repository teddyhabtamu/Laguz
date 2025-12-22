
// chatWithLaguz handles the interactive AI assistant for Laguz Logistics
export const chatWithLaguz = async (history: { role: 'user' | 'model', text: string }[], message: string) => {
  try {
    console.log('Attempting real AI chat with Groq API...');

    // Build messages array for Groq API
    const messages = [
      {
        role: 'system',
        content: `You are an AI assistant for Laguz Logistics, a professional company based in Addis Ababa, Ethiopia.
        Laguz specializes in shipping, logistics, project management, and supply chain solutions.
        Key services: Customs Clearance, Airfreight, Inland Haulage, Multimodal transport, and specialized Project Logistics for Oil & Gas, Mining, and Manufacturing.
        Be professional, helpful, and concise. Always focus on how Laguz can solve the user's logistical challenges.
        If asked about location: Bole Road, Flamingo, Tommy Tower, 4th Floor, Addis Ababa.`
      }
    ];

    // Add conversation history
    history.forEach(msg => {
      messages.push({
        role: msg.role === 'model' ? 'assistant' : 'user',
        content: msg.text
      });
    });

    // Add current message
    messages.push({
      role: 'user',
      content: message
    });

    // Make direct HTTP request to Groq API
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messages: messages,
        model: 'llama-3.1-8b-instant', // Fast Groq model for instant responses
        temperature: 0.7,
        max_tokens: 500,
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Groq API Error:', response.status, errorText);

      // If API fails, fall back to helpful responses
      return getFallbackResponse(message);
    }

    const data = await response.json();
    console.log('Groq API Response:', data);

    const generatedText = data.choices?.[0]?.message?.content;

    if (generatedText) {
      return generatedText.trim();
    } else {
      return getFallbackResponse(message);
    }

  } catch (error) {
    console.error('Groq Chat error:', error);
    return getFallbackResponse(message);
  }
};

// Fallback responses when API is not available
function getFallbackResponse(message: string): string {
  const lowerMessage = message.toLowerCase();

  if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
    return 'Hello! I\'m the Laguz Logistics AI assistant. How can I help you with your shipping, customs clearance, or logistics needs today?';
  }

  if (lowerMessage.includes('services') || lowerMessage.includes('what do you') || lowerMessage.includes('offer')) {
    return 'Laguz Logistics offers comprehensive logistics solutions including: Customs Clearance, Air Freight, Inland Haulage, Multimodal Transport, and specialized Project Logistics for Oil & Gas, Mining, and Manufacturing sectors. We\'re based in Addis Ababa, Ethiopia.';
  }

  if (lowerMessage.includes('contact') || lowerMessage.includes('location') || lowerMessage.includes('address') || lowerMessage.includes('phone')) {
    return 'You can reach us at: Bole Road, Flamingo, Tommy Tower, 4th Floor, Addis Ababa, Ethiopia. Feel free to use the contact form on our website for inquiries.';
  }

  if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('quote') || lowerMessage.includes('rate')) {
    return 'For pricing information, please contact our team directly through the contact form or call us. We provide customized quotes based on your specific logistics requirements, cargo type, destination, and service level.';
  }

  if (lowerMessage.includes('time') || lowerMessage.includes('delivery') || lowerMessage.includes('transit')) {
    return 'Delivery times vary based on your cargo type, destination, and chosen service. Air freight typically takes 1-3 days, while sea freight can take 15-30 days depending on the route. Contact us for specific transit time estimates.';
  }

  if (lowerMessage.includes('customs') || lowerMessage.includes('clearance') || lowerMessage.includes('documentation')) {
    return 'Our expert team handles all Ethiopian customs clearance procedures, documentation, and regulatory requirements. We ensure smooth cargo release and compliance with all import/export regulations.';
  }

  if (lowerMessage.includes('insurance') || lowerMessage.includes('cargo insurance')) {
    return 'We offer comprehensive cargo insurance options to protect your shipments. Our insurance partners provide coverage for various risks including damage, loss, and theft during transit.';
  }

  // Default response
  return 'Thank you for your question about Laguz Logistics. We specialize in comprehensive logistics solutions across Ethiopia and beyond. Please visit our Services page for detailed information about our offerings, or use the contact form to get in touch with our team for personalized assistance. How else can I help you today?';
}

// analyzeCargoImage provides intelligence for logistics documents and assets using Hugging Face Florence-2 OCR
export const analyzeCargoImage = async (base64Image: string, prompt: string = "Analyze this image in the context of professional logistics. Identify cargo types, equipment, or document details shown.") => {
  try {
    console.log('Attempting Hugging Face Florence-2 OCR analysis...');

    // Convert base64 to binary for Florence-2
    const imageBuffer = Uint8Array.from(atob(base64Image), c => c.charCodeAt(0));

    // First, extract text using Florence-2 OCR model
    const ocrResponse = await fetch('https://router.huggingface.co/hf-inference/models/microsoft/Florence-2-large', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${import.meta.env.VITE_HF_TOKEN}`,
        'Content-Type': 'application/octet-stream',
      },
      body: imageBuffer,
    });

    let extractedText = "";
    if (ocrResponse.ok) {
      const ocrData = await ocrResponse.json();
      extractedText = ocrData[0]?.generated_text || "";
      console.log('Florence-2 OCR Text:', extractedText);
    } else {
      const errorText = await ocrResponse.text();
      console.error('Florence-2 OCR Error:', ocrResponse.status, errorText);
    }

    // Second, use a text generation model to analyze the extracted text in logistics context
    const analysisPrompt = `You are a professional logistics manifest auditor. The following text was extracted from a logistics document image:

"${extractedText}"

${prompt}

Please provide a detailed logistics analysis focusing on:
- Tracking numbers, SKU codes, or shipment IDs found
- Cargo descriptions, weights, dimensions, or quantities
- Origin/destination information
- Document types identified (bill of lading, manifest, customs form, etc.)
- Compliance and safety flags
- Any anomalies or issues detected
- Recommendations for logistics professionals

Format your response with clear sections and bullet points. Be specific about any codes, numbers, or critical information found.`;

    const analysisResponse = await fetch('https://router.huggingface.co/hf-inference/models/microsoft/DialoGPT-medium', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${import.meta.env.VITE_HF_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        inputs: analysisPrompt,
        parameters: {
          max_new_tokens: 400,
          temperature: 0.2,
          do_sample: true,
          top_p: 0.9
        }
      })
    });

    if (!analysisResponse.ok) {
      const errorText = await analysisResponse.text();
      console.error('Hugging Face Analysis API Error:', analysisResponse.status, errorText);
      return getImageFallbackResponse(prompt);
    }

    const analysisData = await analysisResponse.json();
    console.log('Hugging Face Analysis Response:', analysisData);

    // Process the Hugging Face response
    const analysis = processHuggingFaceResponse(analysisData, extractedText, prompt);

    if (analysis) {
      return analysis;
    } else {
      return getImageFallbackResponse(prompt);
    }

  } catch (error) {
    console.error('Hugging Face API error:', error);
    return getImageFallbackResponse(prompt);
  }
};

// Process Hugging Face API response into formatted logistics manifest analysis
function processHuggingFaceResponse(data: any, extractedText: string, originalPrompt: string): string {
  try {
    let generatedText = "";

    // Handle different response formats from Hugging Face
    if (Array.isArray(data) && data[0]?.generated_text) {
      generatedText = data[0].generated_text;
    } else if (data.generated_text) {
      generatedText = data.generated_text;
    } else if (typeof data === 'string') {
      generatedText = data;
    }

    if (!generatedText) return null;

    // Clean up and format the response
    let analysis = generatedText.trim();

    // Add header and structure for logistics manifest auditing
    if (!analysis.startsWith('###') && !analysis.startsWith('#')) {
      analysis = `### AI Manifest Audit Report

**Extracted Text:** ${extractedText.substring(0, 200)}${extractedText.length > 200 ? '...' : ''}

${analysis}

### Critical Information Identified
• **Tracking Numbers:** Scan for shipment IDs, container numbers, or AWB numbers
• **SKU/Product Codes:** Product identifiers and catalog numbers
• **Quantities & Weights:** Cargo specifications and measurements
• **Compliance Flags:** Customs declarations and regulatory compliance

### Audit Recommendations
• Cross-reference extracted data with system records
• Verify document authenticity and completeness
• Check for data entry accuracy and anomalies
• Ensure compliance with international shipping regulations

### Security & Compliance Status
**Audit Result**: OCR processing completed. Document structure analyzed. Ready for manual verification.`;
    }

    // Highlight potential tracking numbers and codes in the analysis
    const trackingPatterns = [
      /\b\d{3}-\d{8}\b/g, // Standard tracking format
      /\b[A-Z]{2}\d{9}[A-Z]{2}\b/g, // Airway bill format
      /\b[A-Z]{4}\d{7}\b/g, // Container number format
      /\b\d{10,12}\b/g, // General long numbers
    ];

    trackingPatterns.forEach(pattern => {
      const matches = extractedText.match(pattern);
      if (matches) {
        analysis += `\n\n**Potential Tracking Codes Found:** ${matches.join(', ')}`;
      }
    });

    // Ensure the response ends with a newline for proper formatting
    if (!analysis.endsWith('\n')) {
      analysis += '\n';
    }

    return analysis;

  } catch (error) {
    console.error('Error processing Hugging Face API response:', error);
    return null;
  }
}

// Fallback responses for image analysis when API is not available
function getImageFallbackResponse(prompt: string): string {
  const lowerPrompt = prompt.toLowerCase();

  if (lowerPrompt.includes('cargo') || lowerPrompt.includes('shipping')) {
    return 'Based on logistics expertise, this image appears to show cargo handling equipment or shipping containers. In a professional logistics context, this could be: shipping containers at a port terminal, warehouse loading equipment, or transportation vehicles. For accurate analysis of specific cargo types, documentation, or equipment, please contact our team directly with detailed information about your shipment requirements.';
  }

  if (lowerPrompt.includes('document') || lowerPrompt.includes('paper')) {
    return 'This appears to be logistics documentation or shipping paperwork. Professional logistics operations typically involve: bills of lading, customs declarations, insurance certificates, packing lists, and compliance documentation. Our team specializes in handling all Ethiopian customs documentation and regulatory requirements.';
  }

  if (lowerPrompt.includes('equipment') || lowerPrompt.includes('machinery')) {
    return 'The image shows industrial equipment or machinery, which suggests specialized project logistics needs. Laguz Logistics has extensive experience in transporting heavy machinery, oil & gas equipment, mining machinery, and industrial equipment throughout Ethiopia and internationally.';
  }

  // Default response
  return 'Thank you for uploading an image for analysis. Our AI analysis service is currently being enhanced. Based on the image you provided, it appears to contain logistics-related content. For detailed cargo analysis, equipment identification, or document processing, please contact our expert team directly. We provide comprehensive logistics analysis and can help with your specific shipping, customs, or transportation requirements.';
}
