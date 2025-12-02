import React, { useEffect } from 'react';
import "./CRMSolution.css";
import heroBannerImage from '../assets/img/crm.png';

// Utility function → renders list items with bold title
const renderListItem = (text, index) => {
    const parts = text.split(':');
    return (
        <li key={index} className="list-item">
            <span className="bold-part">{parts[0]}:</span>
            {parts.slice(1).join(':')}
        </li>
    );
};

const LeadManagementPage = () => {

    /* ------------------------------------
       🔹 Auto Convert <img> → animated <svg>
    --------------------------------------*/
    useEffect(() => {
        document.querySelectorAll('.why-item img').forEach(img => {
            fetch(img.src)
                .then(res => res.text())
                .then(svg => {
                    const wrap = document.createElement("div");
                    wrap.innerHTML = svg;
                    const svgTag = wrap.querySelector("svg");

                    if (!svgTag) return;

                    svgTag.classList.add("icon-stroke");
                    svgTag.setAttribute("width", img.width || "60");
                    svgTag.setAttribute("height", img.height || "60");

                    img.replaceWith(svgTag);
                });
        });
    }, []);

    // ---------- Page Data ----------
    const featuresData = [
        { name: 'Lead Capture (Multichannel)', description: 'Automatically generate leads from website forms, social media, email, calls, & live chat.' },
        { name: 'Lead Tracking', description: 'Track all interactions & movements of a lead with full CRM history.' },
        { name: 'Lead Segmentation', description: 'Group leads based on filters such as source, region, interest, and score.' },
        { name: 'Lead Scoring', description: 'Identify high potential leads using automated score rules.' },
        { name: 'Custom Workflows', description: 'Design automation, funnels & CRM process stages your way.' }
    ];

    const integrationList = [
        'Communication Tools: Emails, calls, chats auto-logged inside CRM.',
        'Marketing Campaigns: Run email/SMS nurturing workflows.',
        'AI (CoPilot): Auto-generate content from call transcripts.',
        'CRM Funnel: See conversion % and drop-off points.',
        'Lead Analytics: Deep reporting on source, agents & productivity.'
    ];

    const valueProps = [
        'Certified Partner: Official Bitrix24 CRM Implementation.',
        'Experience: 10+ years building CRM workflows.',
        'Automation First: Reduce manual work & boost revenue.',
        'Lifecycle Support: Setup → onboard → training → support.'
    ];


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
                    {featuresData.map((feature, i) => (
                        <tr key={i} className="table-row">
                            <td className="feature-name-cell"><span className="bold-feature-name">{feature.name}</span></td>
                            <td className="feature-desc-cell">{feature.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );


    return (
        <div className="crm-solution-container lead-management-page">

            {/* HERO SECTION */}
            <header className="hero-section">
                <div className="hero-banner">
                    <img src={heroBannerImage} alt="Lead Management" className="hero-image" />
                </div>

                <div className="hero-text-content">
                    <h1 className="page-title">Bitrix24 Lead Management Solutions</h1>
                    <p className="intro-text">
                        Lead management helps capture, track & nurture potential clients to build a predictable revenue funnel.
                        With <b>Bitrix24 CRM automation</b>, nothing slips through the cracks.
                    </p>
                </div>
            </header>

            <hr className="divider" />


            {/* FEATURES */}
            <section className="features-section">
                <h2 className="section-title">Key Features for Effective Lead Management</h2>
                <FeatureTable />
            </section>

            <hr className="divider" />


            {/* AUTOMATION */}
            <section className="automation-section">
                <h2 className="section-title">Integration & Analytics</h2>
                <p className="section-subtitle">
                    Connect sales + marketing + support in one ecosystem.
                </p>
                <ul className="automation-list-section">
                    {integrationList.map(renderListItem)}
                </ul>
            </section>

            <hr className="divider" />


            {/* WHY CHOOSE US — with animated SVG icons */}
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

export default LeadManagementPage;
