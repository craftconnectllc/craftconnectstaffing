// Craft Connect Staffing - Main JavaScript
// Production-ready with AI screening, form handling, analytics

// ============================================
// CONFIGURATION
// ============================================

const CONFIG = {
    formspreeClientInquiry: 'mlgreoqk', // Client Inquiry - Hire Talent
    formspreeJobApplication: 'meejqvjj', // Job Application - Find Work
    formspreeTestimonials: 'xojaqyaq', // Testimonial Submission
    gaTrackingId: 'G-XXXXXXXXXX', // Replace with actual GA4 ID when ready
    anthropicApiEndpoint: 'https://api.anthropic.com/v1/messages'
};

// Construction trades for job application
const CONSTRUCTION_TRADES = [
    'Carpenter',
    'Electrician',
    'Plumber',
    'HVAC Technician',
    'General Laborer',
    'Heavy Equipment Operator',
    'Welder',
    'Mason/Bricklayer',
    'Roofer',
    'Concrete Finisher',
    'Painter',
    'Drywaller',
    'Pipefitter',
    'Ironworker',
    'Glazier',
    'Insulation Worker',
    'Site Supervisor',
    'Foreman',
    'Project Manager',
    'Safety Manager',
    'Estimator',
    'Superintendent'
];

// ============================================
// AI SCREENING QUESTIONS
// ============================================

const AI_SCREENING_PROMPTS = {
    'Carpenter': {
        systemPrompt: `You are screening carpenters for construction jobs. Generate 3 intermediate-level technical questions that test real knowledge. Questions should be specific, practical, and not easily Googled. Focus on jobsite scenarios, measurements, materials, and techniques.`,
        exampleTopics: ['framing techniques', 'reading blueprints', 'material selection', 'tool usage', 'safety procedures']
    },
    'Electrician': {
        systemPrompt: `You are screening electricians for construction jobs. Generate 3 intermediate-level technical questions about electrical work on construction sites. Questions should test practical knowledge of codes, wiring, troubleshooting, and safety.`,
        exampleTopics: ['NEC codes', 'circuit design', 'wire sizing', 'panel installation', 'troubleshooting']
    },
    'Plumber': {
        systemPrompt: `You are screening plumbers for construction jobs. Generate 3 intermediate-level technical questions about plumbing installation and codes. Test practical knowledge of pipes, fixtures, venting, and drainage systems.`,
        exampleTopics: ['pipe sizing', 'venting requirements', 'fixture installation', 'water pressure', 'code compliance']
    },
    'HVAC Technician': {
        systemPrompt: `You are screening HVAC technicians for construction jobs. Generate 3 intermediate-level technical questions about HVAC systems, installation, and troubleshooting.`,
        exampleTopics: ['ductwork sizing', 'refrigerant handling', 'system balancing', 'load calculations', 'equipment selection']
    },
    'Heavy Equipment Operator': {
        systemPrompt: `You are screening heavy equipment operators. Generate 3 intermediate-level questions about equipment operation, safety, and maintenance on construction sites.`,
        exampleTopics: ['equipment inspection', 'load capacity', 'site safety', 'operation techniques', 'preventive maintenance']
    },
    'Welder': {
        systemPrompt: `You are screening welders for construction work. Generate 3 intermediate-level technical questions about welding processes, techniques, and quality standards.`,
        exampleTopics: ['weld types', 'metal preparation', 'filler selection', 'defect identification', 'welding positions']
    },
    'Project Manager': {
        systemPrompt: `You are screening construction project managers. Generate 3 intermediate-level questions about project management, scheduling, budgeting, and team coordination on construction sites.`,
        exampleTopics: ['critical path method', 'cost control', 'subcontractor management', 'change orders', 'safety compliance']
    },
    'default': {
        systemPrompt: `You are screening construction workers. Generate 3 intermediate-level questions about construction site work, safety, and basic trade knowledge.`,
        exampleTopics: ['safety procedures', 'tool usage', 'material handling', 'site protocols', 'quality standards']
    }
};

// ============================================
// AI SCREENING FUNCTION
// ============================================

async function generateScreeningQuestions(trade) {
    const prompt = AI_SCREENING_PROMPTS[trade] || AI_SCREENING_PROMPTS['default'];
    
    // For GitHub Pages compatibility, we'll use a fallback question set
    // In production with a backend, this would call the Anthropic API
    
    const fallbackQuestions = generateFallbackQuestions(trade);
    
    try {
        // Note: This would require a backend proxy for API calls from GitHub Pages
        // For now, using intelligent fallback questions
        return fallbackQuestions;
    } catch (error) {
        console.error('AI screening error:', error);
        return fallbackQuestions;
    }
}

function generateFallbackQuestions(trade) {
    // Randomized question bank by trade
    const questionBanks = {
        'Carpenter': [
            {
                question: 'You\'re framing a wall that needs to support a heavy roof load. What spacing would you use for the studs, and why would you choose that spacing over standard 16" o.c.?',
                type: 'Practical application'
            },
            {
                question: 'A blueprint calls for a 3/8" reveal on trim work. Explain what this means and how you would achieve it consistently across a large project.',
                type: 'Blueprint reading'
            },
            {
                question: 'You notice your circular saw is binding and burning the wood when making rip cuts. What are three possible causes and how would you fix each one?',
                type: 'Troubleshooting'
            }
        ],
        'Electrician': [
            {
                question: 'You\'re running a 60-amp circuit for a hot tub that will be 80 feet from the panel. Walk through your process for determining the correct wire size, considering voltage drop and code requirements.',
                type: 'Code & calculation'
            },
            {
                question: 'A homeowner reports flickering lights only when their HVAC system kicks on. What would you check first, and what does this symptom typically indicate?',
                type: 'Troubleshooting'
            },
            {
                question: 'Explain the difference between a GFCI and AFCI breaker, and give an example of where each is required by code.',
                type: 'Safety & code'
            }
        ],
        'Plumber': [
            {
                question: 'You\'re installing a toilet on a new construction site and the flange is 1/2" below the finished floor level. What are your options to fix this, and which would you recommend?',
                type: 'Problem solving'
            },
            {
                question: 'A drain line for a kitchen sink keeps backing up slowly. Describe your diagnostic process to determine if it\'s a venting issue or a blockage.',
                type: 'Troubleshooting'
            },
            {
                question: 'What\'s the proper slope for drain pipes, and why does it matter? What happens if the slope is too steep or too shallow?',
                type: 'Code & technique'
            }
        ],
        'HVAC Technician': [
            {
                question: 'You measure a 15-degree temperature split on an AC system. What does this tell you, and what would you check next?',
                type: 'Diagnosis'
            },
            {
                question: 'Explain static pressure in ductwork and why it matters for system performance. What causes high static pressure?',
                type: 'System knowledge'
            },
            {
                question: 'A homeowner wants to add a return vent in their bedroom. What factors would you consider before doing this, and what could go wrong if done incorrectly?',
                type: 'Design & safety'
            }
        ],
        'Heavy Equipment Operator': [
            {
                question: 'You\'re operating an excavator near a suspected underground utility. What\'s your step-by-step safety protocol before digging?',
                type: 'Safety procedure'
            },
            {
                question: 'Describe how you would safely load a dump truck with an excavator on uneven ground. What are the key safety considerations?',
                type: 'Operation technique'
            },
            {
                question: 'Your excavator is experiencing slow hydraulic response. What are three possible causes, and how would you diagnose which one it is?',
                type: 'Troubleshooting'
            }
        ],
        'Welder': [
            {
                question: 'You\'re welding 1/4" structural steel with a MIG welder. What wire speed and voltage range would you start with, and how would you adjust if you see excessive spatter?',
                type: 'Technique'
            },
            {
                question: 'Explain what undercut is in welding, what causes it, and how you would prevent it.',
                type: 'Quality control'
            },
            {
                question: 'You need to weld galvanized steel. What additional safety precautions must you take, and why?',
                type: 'Safety'
            }
        ],
        'Project Manager': [
            {
                question: 'Your project is 2 weeks behind schedule due to weather delays. Walk through your approach to getting back on track while maintaining quality and budget.',
                type: 'Problem solving'
            },
            {
                question: 'A subcontractor submits a change order for $15,000 claiming unforeseen conditions. How do you evaluate whether this is legitimate and how would you handle it?',
                type: 'Contract management'
            },
            {
                question: 'Describe how you would handle a situation where two subcontractors need the same workspace at the same time according to the current schedule.',
                type: 'Coordination'
            }
        ]
    };
    
    const questions = questionBanks[trade] || [
        {
            question: 'Describe a time when you identified a safety hazard on a job site. What was it and how did you handle it?',
            type: 'Safety awareness'
        },
        {
            question: 'Explain your process for ensuring quality work when you\'re under time pressure to meet a deadline.',
            type: 'Quality & time management'
        },
        {
            question: 'What tools or equipment do you have the most experience with, and what safety checks do you perform before using them?',
            type: 'Experience & safety'
        }
    ];
    
    // Randomize and return 3 questions
    return shuffleArray(questions).slice(0, 3);
}

function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// ============================================
// FORM HANDLERS
// ============================================

// Client Inquiry Form (Hire Talent page)
function initializeClientInquiryForm() {
    const form = document.getElementById('clientInquiryForm');
    if (!form) return;
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitBtn = form.querySelector('.form-submit');
        const originalText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="loading"></span> Sending...';
        
        const formData = new FormData(form);
        
        try {
            const response = await fetch(`https://formspree.io/f/${CONFIG.formspreeClientInquiry}`, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            const data = await response.json();
            
            if (response.ok) {
                // Track conversion
                trackEvent('form_submission', {
                    form_type: 'client_inquiry',
                    form_name: 'Hire Talent'
                });
                
                // Show success
                form.innerHTML = `
                    <div class="success-message">
                        <h3>Thank You!</h3>
                        <p>We received your inquiry and will contact you within 24 hours to discuss your staffing needs.</p>
                    </div>
                `;
            } else {
                console.error('Formspree error:', data);
                throw new Error(data.error || 'Form submission failed');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
            
            // Show more helpful error message
            const errorDiv = document.createElement('div');
            errorDiv.className = 'error-message';
            errorDiv.innerHTML = `<p>Unable to submit form. Please email us directly at info@craftconnectstaffing.com or call (401) 555-0100.</p>`;
            form.insertBefore(errorDiv, form.firstChild);
            
            setTimeout(() => errorDiv.remove(), 5000);
        }
    });
}

// Job Application Form with AI Screening
function initializeJobApplicationForm() {
    const form = document.getElementById('jobApplicationForm');
    if (!form) return;
    
    const tradeSelect = document.getElementById('trade');
    const experienceSelect = document.getElementById('experience');
    const screeningSection = document.getElementById('screeningSection');
    const screeningQuestions = document.getElementById('screeningQuestions');
    
    let currentQuestions = [];
    
    // When trade is selected, generate screening questions
    tradeSelect.addEventListener('change', async () => {
        const selectedTrade = tradeSelect.value;
        const selectedExperience = experienceSelect.value;
        
        if (!selectedTrade) {
            screeningSection.style.display = 'none';
            return;
        }
        
        // Show loading
        screeningSection.style.display = 'block';
        screeningQuestions.innerHTML = `
            <div style="text-align: center; padding: 2rem;">
                <div class="loading" style="margin: 0 auto 1rem;"></div>
                <p>Generating trade-specific technical questions...</p>
                <p style="font-size: 0.9rem; color: var(--mid-gray);">This may take a few seconds.</p>
            </div>
        `;
        
        try {
            // Try AI generation first
            const questions = await generateAIQuestions(selectedTrade, selectedExperience);
            currentQuestions = questions;
            renderQuestions(questions);
        } catch (error) {
            console.error('AI generation failed, using fallback:', error);
            // Fallback to static questions
            const questions = await generateScreeningQuestions(selectedTrade);
            currentQuestions = questions;
            renderQuestions(questions);
        }
    });
    
    // Render questions to the page
    function renderQuestions(questions) {
        screeningQuestions.innerHTML = questions.map((q, index) => `
            <div class="screening-question">
                <label for="screening_${index}">
                    <strong>Question ${index + 1}:</strong> ${q.question}
                    <span style="display: block; font-size: 0.9rem; color: var(--mid-gray); font-weight: normal; margin-top: 0.5rem;">
                        Type: ${q.type || 'Technical'} | Difficulty: ${q.difficulty || 'Intermediate'}
                    </span>
                </label>
                <textarea 
                    id="screening_${index}" 
                    name="screening_${index}" 
                    required
                    placeholder="Provide a detailed answer. Show your work for calculations."
                    rows="5"
                ></textarea>
            </div>
        `).join('');
    }
    
    // AI Question Generation (calls Netlify function)
    async function generateAIQuestions(trade, experience) {
        const response = await fetch('/.netlify/functions/generate-questions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                trade: trade,
                experience: experience || '3-5 years'
            })
        });
        
        if (!response.ok) {
            throw new Error('AI generation failed');
        }
        
        const data = await response.json();
        
        if (!data.success || !data.questions) {
            throw new Error('Invalid AI response');
        }
        
        return data.questions;
    }
    
    // Form submission
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitBtn = form.querySelector('.form-submit');
        const originalText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="loading"></span> Submitting Application...';
        
        const formData = new FormData(form);
        
        // Add screening answers with questions to form data
        const screeningData = currentQuestions.map((q, index) => {
            const answer = document.getElementById(`screening_${index}`).value;
            return {
                question: q.question,
                type: q.type,
                answer: answer
            };
        });
        
        formData.append('ai_screening_questions', JSON.stringify(screeningData));
        formData.append('screening_type', 'AI-Generated');
        
        try {
            const response = await fetch(`https://formspree.io/f/${CONFIG.formspreeJobApplication}`, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            const data = await response.json();
            
            if (response.ok) {
                // Track conversion
                trackEvent('form_submission', {
                    form_type: 'job_application',
                    trade: formData.get('trade'),
                    screening_type: 'AI'
                });
                
                // Show success
                form.innerHTML = `
                    <div class="success-message">
                        <h3>Application Submitted!</h3>
                        <p>Thank you for applying. Our team will review your application and contact you within 2-3 business days if your skills match our current opportunities.</p>
                        <p style="margin-top: 1rem; font-size: 0.9rem;">Your responses to the technical questions will help us match you with the right positions.</p>
                    </div>
                `;
            } else {
                console.error('Formspree error:', data);
                throw new Error(data.error || 'Form submission failed');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
            
            const errorDiv = document.createElement('div');
            errorDiv.className = 'error-message';
            errorDiv.innerHTML = `<p>Unable to submit application. Please email your resume to jobs@craftconnectstaffing.com</p>`;
            form.insertBefore(errorDiv, form.firstChild);
            
            setTimeout(() => errorDiv.remove(), 5000);
        }
    });
}

// Testimonial Submission Form
function initializeTestimonialForm() {
    const form = document.getElementById('testimonialForm');
    if (!form) return;
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitBtn = form.querySelector('.form-submit');
        const originalText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="loading"></span> Submitting...';
        
        const formData = new FormData(form);
        
        try {
            const response = await fetch(`https://formspree.io/f/${CONFIG.formspreeTestimonials}`, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                form.innerHTML = `
                    <div class="success-message">
                        <h3>Thank You!</h3>
                        <p>Your testimonial has been submitted and will be reviewed by our team.</p>
                    </div>
                `;
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
            alert('There was an error submitting your testimonial. Please try again.');
        }
    });
}

// ============================================
// ANALYTICS TRACKING
// ============================================

function initializeAnalytics() {
    // Google Analytics GA4
    if (CONFIG.gaTrackingId && CONFIG.gaTrackingId !== 'G-XXXXXXXXXX') {
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${CONFIG.gaTrackingId}`;
        document.head.appendChild(script);
        
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', CONFIG.gaTrackingId);
        
        window.gtag = gtag;
    }
}

function trackEvent(eventName, parameters = {}) {
    if (window.gtag) {
        window.gtag('event', eventName, parameters);
    }
    console.log('Event tracked:', eventName, parameters);
}

// Track CTA clicks
function trackCTAClicks() {
    document.querySelectorAll('.cta-primary, .cta-secondary').forEach(button => {
        button.addEventListener('click', (e) => {
            trackEvent('cta_click', {
                cta_text: e.target.textContent.trim(),
                cta_location: e.target.closest('section')?.className || 'navigation'
            });
        });
    });
}

// ============================================
// UI ENHANCEMENTS
// ============================================

// Smooth scrolling for anchor links
function initializeSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Navbar scroll effect
function initializeNavbar() {
    const navbar = document.querySelector('nav');
    if (!navbar) return;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Populate trade dropdown
function populateTradeDropdown() {
    const tradeSelect = document.getElementById('trade');
    if (!tradeSelect) return;
    
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = 'Select your trade...';
    tradeSelect.appendChild(defaultOption);
    
    CONSTRUCTION_TRADES.forEach(trade => {
        const option = document.createElement('option');
        option.value = trade;
        option.textContent = trade;
        tradeSelect.appendChild(option);
    });
}

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize analytics
    initializeAnalytics();
    
    // Initialize forms
    initializeClientInquiryForm();
    initializeJobApplicationForm();
    initializeTestimonialForm();
    
    // Initialize UI
    initializeSmoothScroll();
    initializeNavbar();
    populateTradeDropdown();
    trackCTAClicks();
    
    console.log('Craft Connect Staffing - All systems initialized');
});
