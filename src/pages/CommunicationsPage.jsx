import React from 'react';
import './CRMSolution.css';
// NOTE: Ensure your hero image for this page is named 'communications-banner.png' 
// and is located in the src/assets/images/ folder.
//import heroBannerImage from "../assets/img/communications_main.png";

// Utility function (from your previous files) to render text with bold parts
const renderListItem = (htmlString, index) => {
    // This function assumes **bold** syntax and splits on the colon :
    const parts = htmlString.split(":");
    return (
        <li className="list-item" key={index}>
            <span className="bold-part">{parts[0]}:</span>
            {parts[1]}
        </li>
    );
};

// Data specific to the Communications Page
const COMMUNICATION_FEATURES = [
    { title: 'Collaboration Tools', desc: 'Secure internal chats, comments, likes, and mentions for seamless team coordination.' },
    { title: 'Video Conferencing', desc: 'Host HD video calls and meetings with internal and external participants directly within the platform.' },
    { title: 'Employee Directory', desc: 'Quickly find team members, view contact info, roles, and organizational structure.' },
    { title: 'HD Video Conferencing', desc: 'Launch quick team meetings right from any chat or task.' },
    { title: 'Internal/External Chat', desc: 'One-on-one chats, group chats, and public channels for all discussion types.' },
    { title: 'Interactive Feed', desc: 'Get updates on tasks, projects, and comments in a familiar social network style.' },
];

const VALUE_PROPOSITION_LIST = [
    "Instant Collaboration: Stop relying on external messaging apps and consolidate all internal communication in one place.",
    "Remote Work Ready: Essential tools for remote and hybrid teams, including video conferencing and status updates.",
    "Organizational Clarity: Easily navigate the company structure with a comprehensive employee directory and profiles.",
    "Contextual Communication: Discuss tasks, documents, and deals directly where they live, reducing information loss.",
];

const CommunicationsPage = () => {
    return (
        <div className="crm-solution-container">
            
            {/* 1. Hero Section (Image and Title) */}
            <header className="hero-section">
              <div className="hero-banner">
  <img src="/UDC_Test/assets/img/communications_main.png
" alt="Communications"/>
</div>


                
                <div className="hero-text-content">
                    <h1 className="page-title">
                        Efficient Internal <br />Communications & Collaboration
                    </h1>
                    <p className="intro-text">
                        A unified internal communication system is vital for modern teams. With Bitrix24 Communications, you get secure internal chats, video meetings, and a centralized hub to keep your team connected and aligned, whether they're in the office or remote.
                    </p>
                </div>
            </header>
            
            <hr className="divider" />

            {/* 2. Core Features Table/Section (Using the List for a cleaner page) */}
            <section className="features-section">
                <h2 className="section-title">Essential Communication Tools</h2>
                
                {/* Reusing the List structure for a quick, readable feature list */}
                <ul className="automation-list-section">
                    {COMMUNICATION_FEATURES.map((feature, index) => (
                        <li className="list-item" key={index}>
                            <span className="bold-part">{feature.title}:</span>
                            {feature.desc}
                        </li>
                    ))}
                </ul>
                
                {/* Placeholder for a detailed diagram if needed */}
                <div className="detailed-diagram-container">
                    {/* You can add an image of a communication flow here */}
                </div>
            </section>
            
            <hr className="divider" />

            {/* 3. Value Proposition / Why Choose Us? (Using the Icon Grid for a professional look) */}
           <section className="value-proposition-section">
    <h2 className="section-title">Why Choose Bitrix24 for Communications?</h2>

    <div className="features-interactive-grid">

        <div className="feature-card">
            <h4>Integrated Internal Messenger & Chat</h4>
            <p>Connect instantly with teams using real-time chats and threads.</p>
        </div>

        <div className="feature-card">
            <h4>HD Video Conferencing & Screen Sharing</h4>
            <p>Host unlimited online meetings without third-party tools.</p>
        </div>

        <div className="feature-card">
            <h4>Company Feed & Activity Stream</h4>
            <p>Post updates, run polls, and boost team engagement.</p>
        </div>

        <div className="feature-card">
            <h4>Employee Directory</h4>
            <p>View structure, roles & contact details quickly.</p>
        </div>

        <div className="feature-card">
            <h4>Free for First 5 Users</h4>
            <p>Perfect for startups & small teams.</p>
        </div>

        <div className="feature-card">
            <h4>Secure & Private Platform</h4>
            <p>Encrypted communication remains internal only.</p>
        </div>

        <div className="feature-card">
            <h4>Extranet Users</h4>
            <p>Unified results. Unique Solutions. Better Business.</p>
        </div>

        <div className="feature-card">
            <h4>Calendar</h4>
            <p>Schedule smarter — unified results, better business.</p>
        </div>

    </div>
</section>

        </div>
    );
};

export default CommunicationsPage;