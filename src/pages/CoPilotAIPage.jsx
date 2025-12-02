import React from 'react';
import './CRMSolution.css';

const COPILOT_FEATURES = [
    { title: 'AI-Powered Tasks', desc: 'Automatically generate task descriptions, checklists, and acceptance criteria from simple prompts.' },
    { title: 'Content Generation', desc: 'Draft emails, marketing copy, social media posts, and meeting summaries instantly.' },
    { title: 'CRM Assistance', desc: 'Summarize client communication history, generate sales scripts, and prepare reports on-demand.' },
    { title: 'Chatbot Integration', desc: 'Embed AI-driven chatbots for immediate customer support and lead qualification on your website.' },
    { title: 'Code Refactoring (for devs)', desc: 'Assist development teams by analyzing code snippets, identifying errors, and suggesting improvements.' },
    { title: 'Data Analysis', desc: 'Process large datasets to extract actionable insights and visualize key business metrics.' },
];

const COPILOT_BENEFITS = [
  { icon: '🤖', text: 'Unmatched Productivity Gains' }, 
  { icon: '⚙️', text: 'Automated Content Drafting' },
  { icon: '📊', text: 'Instant Data Summarization' },
  { icon: '🧠', text: 'Smart Task Management' },
  { icon: '💻', text: 'Development Assistance' },
  { icon: '☁️', text: 'Secure Cloud-Based Processing' },
];

const CoPilotAIPage = () => {
    const heroImagePath = "/UDC_Test/assets/img/copilot.jpg"; 

    return (
        <div className="crm-solution-container">
            <header className="hero-section">
                <div className="hero-banner">
                    <img src={heroImagePath} alt="Bitrix24 CoPilot AI Assistant" className="hero-image" />
                </div>
                <div className="hero-text-content">
                    <h1 className="page-title">
                        CoPilot AI: Your Intelligent <br />Business Assistant
                    </h1>
                    <p className="intro-text">
                        Bitrix24 CoPilot AI is integrated across all your core modules from CRM and Tasks to Chats to automate routine work, generate high-quality content, and provide instant data insights, making your team instantly more efficient.
                    </p>
                </div>
            </header>

            <hr className="divider" />

            <section className="features-section">
                <h2 className="section-title">CoPilot Capabilities</h2>
                <ul className="automation-list-section">
                    {COPILOT_FEATURES.map((feature, index) => (
                        <li className="list-item" key={index}>
                            <span className="bold-part">{feature.title}:</span> {feature.desc}
                        </li>
                    ))}
                </ul>
            </section>

            <hr className="divider" />

            <section className="value-proposition-section">
                <h2 className="section-title">The CoPilot Advantage</h2>
                
                <div className="icon-grid-container">
                    {COPILOT_BENEFITS.map((item, index) => (
                        <div className="icon-grid-item" key={index}>
                            <div className="icon-placeholder">
                                <span className="emoji">{item.icon}</span>
                            </div>
                            <p className="icon-grid-text">{item.text}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default CoPilotAIPage;
