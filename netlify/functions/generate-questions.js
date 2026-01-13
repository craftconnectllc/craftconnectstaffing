// Netlify Serverless Function - AI Question Generator
// Generates trade-specific technical screening questions using Anthropic Claude API

const fetch = require('node-fetch');

// CORS headers for browser requests
const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Content-Type': 'application/json'
};

// Trade-specific prompts for question generation
const TRADE_PROMPTS = {
  'Electrician': {
    systemPrompt: `You are a master electrician with 20+ years of experience screening job candidates. Generate exactly 3 intermediate-difficulty technical questions that test real electrical knowledge for construction work. Questions must:

1. Include at least ONE calculation (voltage drop, wire sizing, load calculations, etc.)
2. Reference NEC code requirements where relevant
3. Present realistic jobsite scenarios (not textbook definitions)
4. Require practical problem-solving (not just memorization)
5. Be impossible to answer correctly by simply Googling
6. Test understanding of electrical theory, safety, and troubleshooting

Format as a JSON array with exactly 3 objects, each containing:
- "question": the technical question (detailed scenario)
- "type": category (calculation/troubleshooting/code/safety)
- "difficulty": "intermediate"

Make questions specific, detailed, and realistic. A qualified electrician with 3-5 years experience should be able to answer them.`,
    context: 'residential and commercial electrical work, NEC 2023, common tools and materials'
  },
  
  'Carpenter': {
    systemPrompt: `You are a master carpenter with 20+ years of experience screening job candidates. Generate exactly 3 intermediate-difficulty technical questions that test real carpentry knowledge for construction work. Questions must:

1. Include at least ONE calculation (rise/run, material quantities, load calculations, span tables, etc.)
2. Reference IRC building code where relevant
3. Present realistic jobsite scenarios (framing, finish work, problem-solving)
4. Require practical woodworking knowledge
5. Test understanding of structural principles, measurements, and techniques
6. Be impossible to answer by simply Googling

Format as a JSON array with exactly 3 objects, each containing:
- "question": the technical question (detailed scenario)
- "type": category (calculation/structural/techniques/code)
- "difficulty": "intermediate"

Make questions specific and practical. A qualified carpenter with 3-5 years experience should be able to answer them.`,
    context: 'residential framing, finish carpentry, deck building, rough carpentry, trim work'
  },

  'Plumber': {
    systemPrompt: `You are a master plumber with 20+ years of experience screening job candidates. Generate exactly 3 intermediate-difficulty technical questions that test real plumbing knowledge for construction work. Questions must:

1. Include at least ONE calculation (pipe sizing, drainage slopes, fixture units, venting, etc.)
2. Reference IPC/UPC plumbing code where relevant
3. Present realistic jobsite scenarios (installations, troubleshooting, problem-solving)
4. Require practical plumbing knowledge
5. Test understanding of water flow, drainage, venting, and code compliance
6. Be impossible to answer by simply Googling

Format as a JSON array with exactly 3 objects, each containing:
- "question": the technical question (detailed scenario)
- "type": category (calculation/code/troubleshooting/installation)
- "difficulty": "intermediate"

Make questions specific and practical. A qualified plumber with 3-5 years experience should be able to answer them.`,
    context: 'residential and commercial plumbing, water supply, drainage, venting, fixtures'
  },

  'HVAC Technician': {
    systemPrompt: `You are a master HVAC technician with 20+ years of experience screening job candidates. Generate exactly 3 intermediate-difficulty technical questions that test real HVAC knowledge for construction work. Questions must:

1. Include at least ONE calculation (BTU load, CFM, static pressure, refrigerant pressures, etc.)
2. Reference relevant codes and safety practices
3. Present realistic service/installation scenarios
4. Require understanding of psychrometrics, refrigeration cycle, airflow, and system design
5. Test diagnostic and troubleshooting skills
6. Be impossible to answer by simply Googling

Format as a JSON array with exactly 3 objects, each containing:
- "question": the technical question (detailed scenario)
- "type": category (calculation/diagnosis/installation/code)
- "difficulty": "intermediate"

Make questions specific and practical. A qualified HVAC tech with 3-5 years experience should be able to answer them.`,
    context: 'residential and light commercial HVAC, heat pumps, air conditioning, furnaces, ductwork'
  },

  'Heavy Equipment Operator': {
    systemPrompt: `You are a heavy equipment supervisor with 20+ years of experience screening operators. Generate exactly 3 intermediate-difficulty questions that test real equipment operation knowledge. Questions must:

1. Include at least ONE calculation (load capacity, slope grades, fuel consumption, lifting capacity, etc.)
2. Focus on safety protocols and OSHA requirements
3. Present realistic jobsite scenarios
4. Test understanding of equipment capabilities, limitations, and maintenance
5. Require practical operator knowledge
6. Be impossible to answer by simply Googling

Format as a JSON array with exactly 3 objects, each containing:
- "question": the technical question (detailed scenario)
- "type": category (safety/calculation/operation/maintenance)
- "difficulty": "intermediate"

Make questions specific to excavators, loaders, backhoes, bulldozers, and similar construction equipment.`,
    context: 'excavators, loaders, backhoes, bulldozers, grading, trenching, safety'
  },

  'Welder': {
    systemPrompt: `You are a certified welding inspector with 20+ years of experience screening welders. Generate exactly 3 intermediate-difficulty questions that test real welding knowledge. Questions must:

1. Include specific welding process parameters (amperage, wire speed, filler selection, etc.)
2. Reference AWS welding codes where relevant
3. Present realistic fabrication/repair scenarios
4. Test understanding of metallurgy, weld quality, and defect identification
5. Require practical welding knowledge across processes (SMAW, GMAW, FCAW, GTAW)
6. Be impossible to answer by simply Googling

Format as a JSON array with exactly 3 objects, each containing:
- "question": the technical question (detailed scenario)
- "type": category (process/quality/safety/metallurgy)
- "difficulty": "intermediate"

Make questions specific to structural steel and pipe welding in construction.`,
    context: 'stick welding, MIG, flux-core, TIG, structural steel, pipe welding, weld inspection'
  },

  'Project Manager': {
    systemPrompt: `You are a senior construction executive screening project manager candidates. Generate exactly 3 intermediate-difficulty questions that test real project management knowledge. Questions must:

1. Include at least ONE calculation (CPM, earned value, schedule analysis, cost control, etc.)
2. Present realistic construction project scenarios
3. Test understanding of scheduling, budgeting, contract management, and coordination
4. Require practical PM knowledge and decision-making
5. Focus on construction-specific challenges
6. Be impossible to answer by simply Googling

Format as a JSON array with exactly 3 objects, each containing:
- "question": the technical question (detailed scenario)
- "type": category (scheduling/budgeting/contract/coordination)
- "difficulty": "intermediate"

Make questions realistic to commercial and residential construction project management.`,
    context: 'CPM scheduling, budget control, subcontractor management, RFIs, change orders, safety compliance'
  }
};

// Fallback to default if trade not found
const DEFAULT_PROMPT = {
  systemPrompt: `You are an experienced construction supervisor screening candidates. Generate exactly 3 intermediate-difficulty questions about construction site work, safety, and general trade knowledge. Questions must:

1. Focus on construction safety and OSHA requirements
2. Present realistic jobsite scenarios
3. Test practical construction knowledge
4. Require understanding of tools, materials, and procedures
5. Be answerable by someone with 3-5 years construction experience

Format as a JSON array with exactly 3 objects, each containing:
- "question": the technical question
- "type": category (safety/tools/procedures/materials)
- "difficulty": "intermediate"`,
  context: 'general construction, safety, tools, materials, jobsite procedures'
};

exports.handler = async (event, context) => {
  // Handle CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const { trade, experience } = JSON.parse(event.body);

    if (!trade) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Trade is required' })
      };
    }

    // Get trade-specific prompt or use default
    const promptConfig = TRADE_PROMPTS[trade] || DEFAULT_PROMPT;

    // Call Anthropic API
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-3-5-haiku-20241022',
        max_tokens: 2000,
        messages: [
          {
            role: 'user',
            content: `${promptConfig.systemPrompt}\n\nContext: ${promptConfig.context}\n\nCandidate experience level: ${experience || '3-5 years'}\n\nGenerate the 3 questions now in valid JSON format.`
          }
        ]
      })
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Anthropic API error:', errorData);
      throw new Error(`API request failed: ${response.status}`);
    }

    const data = await response.json();
    
    // Extract the JSON from Claude's response
    let questionsText = data.content[0].text;
    
    // Remove markdown code blocks if present
    questionsText = questionsText.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    
    // Parse the questions
    const questions = JSON.parse(questionsText);

    // Validate we got exactly 3 questions
    if (!Array.isArray(questions) || questions.length !== 3) {
      throw new Error('Invalid response format from AI');
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        questions: questions,
        trade: trade,
        generatedAt: new Date().toISOString()
      })
    };

  } catch (error) {
    console.error('Error generating questions:', error);
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: 'Failed to generate questions',
        message: error.message
      })
    };
  }
};
