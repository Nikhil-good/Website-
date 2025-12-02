import React from 'react';
import './CRMSolution.css';

// Utility function to render list items with bolded titles
const renderListItem = (htmlString, index) => {
    const parts = htmlString.split(':');
    return (
        <li key={index} className="list-item">
            <span className="bold-part">{parts[0]}:</span>
            {parts.slice(1).join(':')}
        </li>
    );
};

const SalesAutomationPage = () => {
    
    // --- Data ---
    const featuresData = [
        { name: 'Workflow Automation Designer', description: 'Visually design and implement complex sales workflows using a simple drag-and-drop interface, eliminating manual steps and ensuring consistency across the entire pipeline.' },
        { name: 'Lead Assignment Automation', description: 'Automatically distribute new leads among sales managers based on defined criteria for immediate follow-up.' },
        { name: 'AI-Powered Sales (CoPilot)', description: 'Utilize AI to assist with generating sales pitches, summarizing customer communications, auto-filling CRM fields, and suggesting next actions for managers.' },
        { name: 'Automated Status Changes', description: 'Set up rules to automatically move deals between pipeline stages based on customer actions or internal actions.' },
        { name: 'Integrated Communication Triggers', description: 'Automatically send personalized follow-up emails, SMS messages, or push notifications to prospects based on their engagement behavior or deal stage.' },
    ];

    const automationList = [
        'Task and Activity Scheduling: Automatically create follow-up tasks, meetings, and call reminders when a deal hits a specific stage or remains idle for too long.',
        'Document Generation: Configure triggers to automatically generate personalized quotes, invoices, and contracts using pre-defined templates.',
        'Duplicate Management: Automatically detect, flag, and merge duplicate customer entries to maintain a clean and reliable CRM database.',
        'Notifications and Approvals: Automate internal notifications for high-value deals and route discount or custom deal requests through a multi-step approval workflow.',
    ];

    const valueProps = [
        '[Your Partner Status]: Ensuring your automation setup is robust, scalable, and fully compliant with business rules.',
        '[Your Experience]: Years of expertise transforming slow, manual sales processes into high-speed, efficient automation engines.',
        'KPI-Driven Automation: Designing workflows specifically to improve key metrics like conversion rate, sales velocity, and manager productivity.',
        'Custom Integrations: Offering bespoke integration services to connect Bitrix24 automation with your ERP, accounting software, and other critical business systems.',
    ];

    // --- Component for rendering the Feature Table ---
    const FeatureTable = () => (
        <div className="feature-table-wrapper">
            <table className="feature-table">
                <thead>
                    <tr>
                        <th className="table-header">Feature</th>
                        <th className="table-header">Description</th>
                    </tr>
                </thead>
                <tbody>
                    {featuresData.map((feature, index) => (
                        <tr key={index} className="table-row">
                            <td className="feature-name-cell">
                                <span className="bold-feature-name">{feature.name}</span>
                            </td>
                            <td className="feature-desc-cell">{feature.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

    return (
        <div className="crm-solution-container sales-automation-page">
            
            {/* 1. Header Section (Same Layout) */}
            <header className="hero-section">
                
                {/* 💥 IMAGE PLACEMENT FOR EXACT LAYOUT 💥 */}
                <div className="hero-banner">
                    {/*  */}
                    <img src="assets/img/Automations.jpg" alt="Sales Automation" className="hero-image" />
                </div>
                
                <div className="hero-text-content">
                    <h1 className="page-title">Maximize Efficiency with Sales Automation</h1>
                    <p className="intro-text">
                        Stop wasting time on repetitive tasks. **Bitrix24 Sales Automation** allows you to configure powerful workflows that handle routine administration, lead nurturing, and internal communication, enabling your sales team to focus 100% on closing deals.
                    </p>
                </div>
            </header>
            
            <hr className="divider" />

            {/* 2. Key Features Section (Same Layout) */}
            <section className="features-section">
                <h2 className="section-title">Core Automation Features</h2>
                <FeatureTable />
                
                {/* 💥 PLACE DETAILED DIAGRAMS/IMAGES HERE 💥 */}
                <div className="detailed-diagram-container">
                    {/* Add specific sales automation diagrams here */}
                </div>
            </section>

            <hr className="divider" />

            {/* 3. Automation Section (Same Layout) */}
            <section className="automation-section">
                <h2 className="section-title">Workflow Automation in Action</h2>
                <p className="section-subtitle">
                    See how automation handles the complexity behind the scenes to keep your sales process moving smoothly:
                </p>
                <ul className="automation-list-section">
                    {automationList.map(renderListItem)}
                </ul>
            </section>
 <section className="why-choose-wrapper">
                <h2>Why Choose Us for CRM Solutions?</h2>

                <div className="why-choose-box">

                    <div className="why-item">
                        <img src="assets/icons/certified.svg" alt="Certified" />
                        <p>Bitrix24 Certified Partner</p>
                    </div>

                    <div className="why-item">
                        <img src="assets/icons/experience.svg" alt="Experience" />
                        <p>10+ Years CRM Expertise</p>
                    </div>

                    <div className="why-item">
                        <img src="assets/icons/industries.svg" alt="Industries" />
                        <p>Cross-Industry Implementations</p>
                    </div>

                    <div className="why-item">
                        <img src="assets/icons/automation.svg" alt="Automation" />
                        <p>Automation-First CRM Strategy</p>
                    </div>

                    <div className="why-item">
                        <img src="assets/icons/support.svg" alt="Support" />
                        <p>Full Implementation + Support</p>
                    </div>

                    <div className="why-item">
                        <img src="assets/icons/training.svg" alt="Training" />
                        <p>Training + Documentation Included</p>
                    </div>

                </div>
            </section>
            
        </div>
    );
};

export default SalesAutomationPage;