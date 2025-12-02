import React from 'react';

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

const ProjectManagementPage = () => {
    
    // --- Data ---
    const featuresData = [
        { name: 'Flexible Project Structures', description: 'Supports various project methodologies (Kanban, Gantt, Scrum, List) allowing teams to choose the best view for their workflow and project complexity.' },
        { name: 'Detailed Task Breakdown', description: 'Create unlimited subtasks, checklists, and dependencies within a project to ensure every small action is tracked and organized.' },
        { name: 'Resource Allocation & Scheduling', description: 'Visually plan and allocate team members to tasks, set deadlines, and track workload distribution to prevent burnout and ensure timely delivery.' },
        { name: 'External Collaboration', description: 'Invite clients, partners, or external contractors to project workgroups with restricted access, enabling seamless collaboration without compromising internal data security.' },
        { name: 'Project Templates', description: 'Save successful project structures, task lists, and timelines as templates to quickly launch new, repeatable projects with standardized processes.' },
    ];

    const automationList = [
        'Automated Task Creation: Set up automatic tasks triggered by events (e.g., when a lead converts, a new "Onboarding Project" is automatically created).',
        'Status and Deadline Alerts: Configure automated reminders and notifications for approaching deadlines or when a task status is changed by a team member.',
        'Dependency Management: Utilize automation to shift subsequent task deadlines whenever a preceding dependent task is delayed.',
        'Project Reporting Automation: Automatically generate and deliver weekly or monthly reports on project status, budget tracking, and team efficiency to management.',
    ];

    const valueProps = [
        '[Your Partner Status]: Providing expert guidance on integrating project management into your CRM and internal processes.',
        '[Your Experience]: Proven track record of setting up complex project management systems for engineering, marketing, and IT teams.',
        'Custom Reporting Dashboards: Building specialized analytical views tailored to monitor project ROI and team performance metrics.',
        'Comprehensive Training: Offering hands-on training for project managers and team members to ensure maximum adoption.',
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
        <div className="crm-solution-container project-management-page">
            
            {/* 1. Header Section (Same Layout) */}
            <header className="hero-section">
                
                {/* 💥 IMAGE PLACEMENT FOR EXACT LAYOUT 💥 */}
                <div className="hero-banner">
                    {/* 

[Image of Bitrix24 Project Management dashboard]
 */}
                    <img src="assets/img/project.jpg" alt="Project Management" className="hero-image" />
                </div>
                
                <div className="hero-text-content">
                    <h1 className="page-title">Dynamic Project Management with Bitrix24</h1>
                    <p className="intro-text">
                        Deliver projects on time and under budget. **Bitrix24 Project Management** provides the tools you need to organize work, manage team capacity, track deadlines, and ensure clear communication across every stage of your project lifecycle.
                    </p>
                </div>
            </header>
            
            <hr className="divider" />

            {/* 2. Key Features Section (Same Layout) */}
            <section className="features-section">
                <h2 className="section-title">Core Features for Successful Delivery</h2>
                <FeatureTable />
                
                {/* 💥 PLACE DETAILED DIAGRAMS/IMAGES HERE 💥 */}
                <div className="detailed-diagram-container">
                    {/* Add specific project management diagrams here */}
                </div>
            </section>

            <hr className="divider" />

            {/* 3. Automation Section (Same Layout) */}
            <section className="automation-section">
                <h2 className="section-title">Project Automation & Efficiency</h2>
                <p className="section-subtitle">
                    Save countless hours by automating administrative routines and focusing on strategic execution:
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

export default ProjectManagementPage;