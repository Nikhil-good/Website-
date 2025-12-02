import React from 'react';
import './CRMSolution.css';
//import heroBannerImage from '../assets/img/hero banner-2.png';

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

const PipelineManagementPage = () => {
    
    // --- Data ---
    const featuresData = [
        { name: 'Customizable Pipeline Stages', description: 'Define stages like Lead Capture, Qualification, Proposal, Negotiation, and Closing to precisely match your business’s unique sales journey.' },
        { name: 'Visual Pipeline Management', description: 'Offers a clear, visual representation (Kanban view) of the sales pipeline, allowing your team to easily track deals, identify bottlenecks, and focus on high-priority opportunities.' },
        { name: 'Seamless CRM Integration', description: 'The pipeline is fully integrated with the CRM, ensuring all customer information and interactions are linked to the respective deal stages for a comprehensive 360° view.' },
        { name: 'Automated Workflows', description: 'Configure custom automation rules, including automatic follow-ups, task assignments, and notifications, to streamline the sales process and guarantee timely action.' },
        { name: 'Access Permissions Control', description: 'Set specific access permissions for team members to ensure sensitive deal information is only accessible to authorized personnel, maintaining data security and integrity.' },
    ];

    const automationList = [
        'Automating Lead Entry: Capture leads from various channels and ensure their immediate, seamless entry into the sales pipeline for quick action.',
        'Custom Distribution Rules: Create rules for lead assignment based on criteria like geographic location, lead source, or product interest.',
        'Proactive Notifications: Configure automated alerts to sales reps for overdue deals, status changes, or missed follow-ups to keep the pipeline moving.',
        'Marketing Integration: Segment leads automatically based on pipeline stage and integrate with marketing tools for targeted, personalized communication.',
    ];

    const valueProps = [
        '[Your Partner Status]: Offering expert setup and ongoing support for complex sales funnels.',
        '[Your Experience]: Years of experience in optimizing sales pipelines across various industries for maximum conversion.',
        'Automation-First Approach: Focused on eliminating manual data entry and routine tasks, allowing your team to focus on selling.',
        'Custom Reporting & Analytics: Building specialized reports that combine pipeline stage data with other key metrics to drive informed business decisions.',
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
        <div className="crm-solution-container pipeline-management-page">
            
            {/* 1. Header Section (Same Layout) */}
            <header className="hero-section">
                
                {/* 💥 IMAGE PLACEMENT FOR EXACT LAYOUT 💥 */}
              <div className="hero-banner">
                    {/* 

[Image of Bitrix24 Project Management dashboard]
 */}
                    <img src="assets/img/analytics.png" alt="Project Management" className="hero-image" />
                </div>
                
                <div className="hero-text-content">
                    <h1 className="page-title">Efficient Sales Pipeline Management with Bitrix24</h1>
                    <p className="intro-text">
                        A well-defined sales pipeline is the backbone of predictable revenue. With **Bitrix24 Pipeline Management**, we help you organize your sales efforts, gain crystal-clear visibility into deal flow, and drive growth with efficient automation.
                    </p>
                </div>
            </header>
            
            <hr className="divider" />

            {/* 2. Key Features Section (Same Layout) */}
            <section className="features-section">
                <h2 className="section-title">Core Features for Pipeline Control</h2>
                <FeatureTable />
                
                {/* 💥 PLACE DETAILED DIAGRAMS/IMAGES HERE 💥 */}
                <div className="detailed-diagram-container">
                    {/* Add specific pipeline management diagrams here */}
                </div>
            </section>

            <hr className="divider" />

            {/* 3. Automation Section (Same Layout) */}
            <section className="automation-section">
                <h2 className="section-title">Automation: Accelerating Deals</h2>
                <p className="section-subtitle">
                    From lead capture to deal closing, leverage automation to eliminate manual tasks and ensure speed and consistency:
                </p>
                <ul className="automation-list-section">
                    {automationList.map(renderListItem)}
                </ul>
            </section>

            <hr className="divider" />

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

export default PipelineManagementPage;