// Craft Connect Staffing - Main JavaScript File

// Service data for modals
const serviceData = {
    'direct-hire': {
        icon: '👔',
        title: 'Direct Hire',
        intro: 'Build your dream team with permanent placements that drive long-term success',
        overview: `
            <p>Direct hire placements are the cornerstone of building a strong, stable workforce. We specialize in identifying and placing professionals who are not just qualified, but who will thrive in your unique company culture and contribute to your long-term vision.</p>
            <p>Our comprehensive approach combines advanced sourcing techniques, thorough candidate evaluation, and strategic matching to ensure every placement is a win-win for both employer and employee. With our direct hire service, you're investing in talent that will grow with your organization.</p>
        `,
        benefits: [
            { icon: '🎯', title: 'Perfect Cultural Fit', text: 'We assess beyond skills to ensure alignment with your values and team dynamics' },
            { icon: '⚡', title: 'Reduced Turnover', text: 'Our thorough vetting process leads to 95% placement retention after one year' },
            { icon: '💰', title: 'Cost-Effective', text: 'Eliminate the costs of repeated hiring cycles and onboarding' },
            { icon: '🚀', title: 'Quick Integration', text: 'Pre-vetted candidates hit the ground running from day one' },
            { icon: '🔒', title: 'Guaranteed Results', text: 'We stand behind our placements with comprehensive guarantees' },
            { icon: '📊', title: 'Market Insights', text: 'Benefit from our deep knowledge of salary trends and talent availability' }
        ],
        process: [
            { title: 'Needs Assessment', text: 'In-depth consultation to understand your role requirements, team culture, and organizational goals' },
            { title: 'Targeted Sourcing', text: 'Leverage our extensive network and proprietary databases to identify ideal candidates' },
            { title: 'Rigorous Screening', text: 'Comprehensive interviews, skills assessments, and background checks' },
            { title: 'Candidate Presentation', text: 'Detailed profiles of top-tier candidates with our recommendations' },
            { title: 'Interview Coordination', text: 'Seamless scheduling and feedback management throughout the interview process' },
            { title: 'Offer Negotiation', text: 'Expert guidance on compensation and benefits to secure top talent' },
            { title: 'Onboarding Support', text: 'Continued support to ensure successful integration and long-term success' }
        ]
    },
    'temporary': {
        icon: '⏱️',
        title: 'Temporary Staffing',
        intro: 'Flexible workforce solutions that adapt to your changing business needs',
        overview: `
            <p>In today's dynamic business environment, flexibility is key. Our temporary staffing solutions provide you with skilled professionals exactly when you need them, whether it's for seasonal peaks, special projects, parental leave coverage, or unexpected absences.</p>
            <p>We maintain a ready pool of pre-screened, qualified candidates across various industries and skill levels, ensuring you can scale your workforce up or down quickly without compromising on quality or productivity.</p>
        `,
        benefits: [
            { icon: '🔄', title: 'Ultimate Flexibility', text: 'Scale your workforce based on real-time business demands' },
            { icon: '💵', title: 'Cost Control', text: 'Pay only for the hours you need without long-term commitments' },
            { icon: '⚡', title: 'Rapid Deployment', text: 'Fill positions in as little as 24-48 hours' },
            { icon: '🎯', title: 'Pre-Screened Talent', text: 'All candidates are vetted and ready to work' },
            { icon: '📋', title: 'Reduced Admin', text: 'We handle payroll, benefits, and compliance' },
            { icon: '🔍', title: 'Try Before You Hire', text: 'Evaluate potential permanent employees in real work situations' }
        ],
        process: [
            { title: 'Immediate Response', text: 'Contact us with your staffing need and we respond within hours' },
            { title: 'Requirement Clarification', text: 'Quick consultation to understand the role, duration, and skill requirements' },
            { title: 'Candidate Matching', text: 'Draw from our pre-vetted talent pool to find the perfect fit' },
            { title: 'Fast Placement', text: 'Present qualified candidates within 24-48 hours' },
            { title: 'Ongoing Management', text: 'Regular check-ins to ensure satisfaction and performance' },
            { title: 'Extension or Transition', text: 'Easy options to extend assignments or convert to permanent' }
        ]
    },
    'contract': {
        icon: '🔄',
        title: 'Contract-to-Hire',
        intro: 'Minimize hiring risk with our proven contract-to-hire model',
        overview: `
            <p>Contract-to-hire arrangements offer the best of both worlds: the flexibility to evaluate a candidate's performance in real work scenarios before making a permanent commitment, combined with the efficiency of a streamlined path to full-time employment.</p>
            <p>This approach significantly reduces hiring risk, allows for extended evaluation periods, and gives both parties time to ensure the fit is perfect before committing to a permanent relationship.</p>
        `,
        benefits: [
            { icon: '✅', title: 'Risk Mitigation', text: 'Thoroughly evaluate skills and cultural fit before permanent hire' },
            { icon: '🎯', title: 'Real-World Assessment', text: 'See candidates perform actual job duties in your environment' },
            { icon: '💼', title: 'Budget Flexibility', text: 'Start with contract budget, convert when ready for permanent headcount' },
            { icon: '⚡', title: 'Faster Hiring', text: 'Begin work immediately while finalizing permanent arrangements' },
            { icon: '🤝', title: 'Mutual Evaluation', text: 'Both parties can assess the fit before long-term commitment' },
            { icon: '📊', title: 'Performance Data', text: 'Make informed hiring decisions based on actual work performance' }
        ],
        process: [
            { title: 'Position Definition', text: 'Define both contract and permanent role expectations upfront' },
            { title: 'Candidate Sourcing', text: 'Find professionals seeking permanent opportunities' },
            { title: 'Contract Start', text: 'Begin engagement with clear conversion timeline and criteria' },
            { title: 'Performance Monitoring', text: 'Regular evaluations during the contract period' },
            { title: 'Conversion Decision', text: 'Assess performance and make permanent offer decision' },
            { title: 'Seamless Transition', text: 'Smooth conversion to permanent employee status' }
        ]
    },
    'executive': {
        icon: '💼',
        title: 'Executive Search',
        intro: 'Find transformational leaders who will drive your organization forward',
        overview: `
            <p>Executive placements require a different approach—one that goes beyond skills and experience to evaluate leadership philosophy, strategic vision, and cultural alignment. Our executive search practice specializes in identifying and attracting C-suite and senior leadership talent.</p>
            <p>We employ sophisticated research methodologies, maintain relationships with top-tier executives, and conduct comprehensive assessments to ensure we present only the most qualified candidates who can deliver transformational results for your organization.</p>
        `,
        benefits: [
            { icon: '🎯', title: 'Targeted Approach', text: 'Direct outreach to passive candidates not actively job searching' },
            { icon: '🔍', title: 'Confidential Search', text: 'Discreet process protecting both company and candidate privacy' },
            { icon: '💎', title: 'Quality Over Quantity', text: 'Present only the most qualified, thoroughly vetted candidates' },
            { icon: '📈', title: 'Market Intelligence', text: 'Deep insights into executive compensation and availability' },
            { icon: '🤝', title: 'Relationship Network', text: 'Access to our extensive network of top-tier executives' },
            { icon: '⚖️', title: 'Comprehensive Assessment', text: 'In-depth evaluation of leadership capabilities and cultural fit' }
        ],
        process: [
            { title: 'Strategic Consultation', text: 'Understand organizational objectives and leadership requirements' },
            { title: 'Position Profiling', text: 'Develop detailed executive profile and success criteria' },
            { title: 'Market Research', text: 'Identify target companies and potential candidates' },
            { title: 'Confidential Outreach', text: 'Direct approach to qualified executives' },
            { title: 'Executive Assessment', text: 'Rigorous evaluation including leadership assessments' },
            { title: 'Finalist Presentation', text: 'Present top candidates with comprehensive evaluation reports' },
            { title: 'Negotiation Support', text: 'Expert guidance on executive compensation packages' },
            { title: 'Onboarding Advisory', text: 'Support for successful executive transition and integration' }
        ]
    },
    'industry': {
        icon: '🎯',
        title: 'Industry Specialists',
        intro: 'Deep expertise across sectors ensures we speak your language and understand your needs',
        overview: `
            <p>Every industry has unique challenges, technical requirements, and cultural nuances. Our industry specialist teams possess deep domain expertise in key sectors, allowing us to understand your specific needs and identify candidates with the right combination of skills and industry knowledge.</p>
            <p>We don't just match resumes to job descriptions—we understand the technical competencies, certifications, and industry experience that make candidates truly qualified for specialized roles in your field.</p>
        `,
        benefits: [
            { icon: '🏥', title: 'Healthcare', text: 'Clinicians, administrators, and healthcare IT professionals' },
            { icon: '💻', title: 'Technology', text: 'Developers, engineers, data scientists, and IT infrastructure experts' },
            { icon: '🏭', title: 'Manufacturing', text: 'Production, quality, supply chain, and engineering talent' },
            { icon: '💰', title: 'Finance', text: 'Accounting, financial analysis, compliance, and banking professionals' },
            { icon: '🔬', title: 'Life Sciences', text: 'Research, clinical, regulatory, and biotech specialists' },
            { icon: '🏗️', title: 'Engineering', text: 'Civil, mechanical, electrical, and industrial engineers' }
        ],
        process: [
            { title: 'Industry Analysis', text: 'Assess current trends, challenges, and talent availability in your sector' },
            { title: 'Technical Screening', text: 'Evaluate candidates using industry-specific technical assessments' },
            { title: 'Certification Verification', text: 'Confirm required licenses, certifications, and credentials' },
            { title: 'Sector Experience', text: 'Match candidates with relevant industry background and knowledge' },
            { title: 'Compliance Check', text: 'Ensure adherence to industry-specific regulations and requirements' },
            { title: 'Specialized Placement', text: 'Successfully place candidates in technical and specialized roles' }
        ]
    },
    'consulting': {
        icon: '🤝',
        title: 'Consulting Services',
        intro: 'Strategic workforce planning and HR consulting to optimize your talent strategy',
        overview: `
            <p>Beyond individual placements, we offer comprehensive workforce consulting services designed to help you build a sustainable competitive advantage through people. Our consultants work with you to develop strategic workforce plans, optimize hiring processes, and create talent management frameworks.</p>
            <p>Whether you're scaling rapidly, restructuring, or looking to improve your overall talent acquisition strategy, our consulting services provide the expertise and guidance you need to succeed.</p>
        `,
        benefits: [
            { icon: '📊', title: 'Workforce Planning', text: 'Strategic planning aligned with business objectives and growth plans' },
            { icon: '🔍', title: 'Process Optimization', text: 'Streamline hiring processes for efficiency and better outcomes' },
            { icon: '💡', title: 'Market Insights', text: 'Competitive intelligence on talent markets and compensation' },
            { icon: '🎯', title: 'Employer Branding', text: 'Enhance your reputation and attractiveness to top talent' },
            { icon: '📈', title: 'Metrics & Analytics', text: 'Data-driven insights to improve hiring effectiveness' },
            { icon: '⚙️', title: 'Technology Solutions', text: 'Implement ATS and recruitment technology' }
        ],
        process: [
            { title: 'Discovery & Assessment', text: 'Comprehensive review of current talent acquisition practices' },
            { title: 'Gap Analysis', text: 'Identify opportunities for improvement and optimization' },
            { title: 'Strategy Development', text: 'Create customized workforce planning and talent strategies' },
            { title: 'Implementation Support', text: 'Guide execution of new processes and systems' },
            { title: 'Training & Enablement', text: 'Equip your team with skills and knowledge for success' },
            { title: 'Ongoing Advisory', text: 'Continued partnership and strategic guidance as needed' }
        ]
    }
};

// Modal functions
function openModal(serviceName) {
    const modal = document.getElementById('serviceModal');
    const data = serviceData[serviceName];
    
    if (!data) return;

    // Update modal content
    document.getElementById('modalIcon').textContent = data.icon;
    document.getElementById('modalTitle').textContent = data.title;
    document.getElementById('modalIntro').textContent = data.intro;
    document.getElementById('modalOverview').innerHTML = data.overview;

    // Update benefits
    const benefitsContainer = document.getElementById('modalBenefits');
    benefitsContainer.innerHTML = data.benefits.map(benefit => `
        <div class="benefit-item">
            <div class="benefit-icon">${benefit.icon}</div>
            <div class="benefit-text">
                <h4>${benefit.title}</h4>
                <p>${benefit.text}</p>
            </div>
        </div>
    `).join('');

    // Update process
    const processContainer = document.getElementById('modalProcess');
    processContainer.innerHTML = data.process.map((step, index) => `
        <div class="process-step">
            <div class="process-number">${index + 1}</div>
            <div class="process-step-content">
                <h4>${step.title}</h4>
                <p>${step.text}</p>
            </div>
        </div>
    `).join('');

    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('serviceModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Service card clicks
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('click', function() {
            const serviceName = this.getAttribute('data-service');
            openModal(serviceName);
        });
    });

    // Close modal button
    const closeBtn = document.querySelector('.close-modal');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    // Close on background click
    const serviceModal = document.getElementById('serviceModal');
    if (serviceModal) {
        serviceModal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });
    }

    // Close on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navbar');
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    });

    // Smooth scrolling for anchor links
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

    // Form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We\'ll get back to you within 24 hours.');
            this.reset();
        });
    }

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe service cards and steps
    document.querySelectorAll('.service-card, .step').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
});
