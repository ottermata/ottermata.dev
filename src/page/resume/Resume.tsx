import React from "react";
import {ResumeSection} from "./ResumeSection";

export function Resume() {
    return (
        <>
            <div className="resume flex flex-col max-w-3xl">
                <div className="flex justify-between items-end mb-3">
                    <h1 className="text-4xl">Christopher Krause</h1>
                    <div className="contact">
                        <div>
                            <p className="label">Email</p>
                            <a href="mailto:ottermata@pm.me">ottermata@pm.me</a>
                        </div>
                    </div>
                </div>
                <ResumeSection
                    title="Professional experience"
                    items={[
                        {
                            title: "Software Developer",
                            subtitle: "q.beyond AG, Germany",
                            description: <ul>
                                <li>
                                    Backend (& frontend) for a website
                                    <ul className="pl-4">
                                        <li>Python, FastAPI, async</li>
                                        <li>TypeScript, React</li>
                                        <li>MongoDB, Redis</li>
                                        <li>Kubernetes, Docker</li>
                                    </ul>
                                </li>
                                <li>
                                    Custom API around an ITSM/CMDB tool
                                    <ul className="pl-4">
                                        <li>Python, Litestar, async</li>
                                        <li>Redis</li>
                                        <li>Kubernetes, Docker</li>
                                    </ul>
                                </li>
                                <li>Automation of company wide processes</li>
                                <li>
                                    Big Data, Business Analytics
                                    <ul className="pl-4">
                                        <li>AWS Lambda, S3, Athena, DynamoDB</li>
                                        <li>Python</li>
                                        <li>Kubernetes, Docker</li>
                                    </ul>
                                </li>
                                <li>
                                    Creating internal software/tools
                                    <ul className="pl-4">
                                        <li>Python</li>
                                        <li>Rust</li>
                                    </ul>
                                </li>
                            </ul>,
                            timeframe: "February 2019 - Present",
                        },
                        {
                            title: "Apprenticeship",
                            subtitle: "q.beyond AG, Germany",
                            description: <>
                                <h4>Used Languages & Software</h4>
                                <ul>
                                    <li>Python</li>
                                    <li>PowerShell</li>
                                    <li>C#</li>
                                    <li>Icinga2</li>
                                    <li>Confluence</li>
                                    <li>MongoDB</li>
                                    <li>Unix</li>
                                    <li>MS SQl Server</li>
                                    <li>Oracle</li>
                                </ul>
                                <h4>Projects by department</h4>
                                <h5>Monitoring Systems</h5>
                                <ul>
                                    <li>Development of monitoring scripts for Databases, SCCM, PKI, etc. (PowerShell, Bash, Perl)</li>
                                    <li>Automatic Confluence documentation of monitoring configuration (Python)</li>
                                    <li>Monitoring of deviations in received data quantity for Data Lake (Python)</li>
                                </ul>
                                <h5>Automation & Information Systems</h5>
                                <ul>
                                    <li>Wrapper API around Confluence to mitigate page updates (Python)</li>
                                </ul>
                                <h5>Application Management Advanced</h5>
                                <ul>
                                    <li>App for tracking rented items, with SQL DB (C#)</li>
                                </ul>
                                <h5>Datacenter & Network Security</h5>
                                <ul>
                                    <li>Configure routers in a lab environment</li>
                                    <li>Script for reading/updating router configuration via SSH (Python)</li>
                                </ul>
                                <h5>Microsoft Services</h5>
                                <ul>
                                    <li>Script to migrate old wiki pages to Confluence (Python)</li>
                                </ul>
                            </>,
                            timeframe: "September 2016 - January 2019",
                        },
                        {
                            title: "Internship",
                            subtitle: "Konzept Energietechnik GmbH, Germany",
                            description: <>
                                <p>
                                    The company specializes in the production of non-interruptable power supplies.
                                    During my 6 month internship I was able to work in almost all departments.
                                </p>
                                <h4>Tasks:</h4>
                                <ul>
                                    <li>Developing the software side of a semi automatic board tester</li>
                                    <li>UI for visualizing measurement data</li>
                                    <li>Assembly of parts including hand soldering & SMD</li>
                                    <li>Testing and fixing of boards</li>
                                    <li>Quality control of finished product</li>
                                    <li>Warehouse, checking deliveries and sorting stock</li>
                                </ul>
                            </>,
                            timeframe: "February 2016 - July 2019",
                        },
                    ]}
                />
                <ResumeSection
                    title="Education"
                    items={[
                        {
                            title: "Advanced technical college entrance qualification / Fachhochschulreife",
                            subtitle: "Berufliche Schule des Kreises Ostholstein in Eutin, Germany",
                            description: "Focus on electronics",
                            timeframe: "2013 - 2015",
                        },
                        {
                            title: "General Certificate of Secondary Education / Mittlere Reife",
                            subtitle: "Berufliche Schule des Kreises Ostholstein in Eutin, Germany",
                            description: "Focus on technology (electronics & metalwork)",
                            timeframe: "2011 - 2013",
                        },
                        {
                            title: "Certificate of Secondary Education / Hauptschulabschluss",
                            subtitle: "Wilhelm Wisser Schule, Eutin, Germany",
                            timeframe: "2006 - 2011",
                        },
                    ]}
                />
                <ResumeSection
                    title="Skills"
                    items={[
                        {
                            title: "Languages",
                            subtitle: "German (native), English (fluent, CEFR C2)",
                        },
                        {
                            title: "Programming Languages etc.",
                            subtitle: "Python, Rust, TypeScript, SQL, ...",
                            description: <>
                                <h4>Recently</h4>
                                <ul>
                                    <li>Python</li>
                                    <li>Rust</li>
                                    <li>TypeScript (React)</li>
                                    <li>SQL (Athena, Oracle, MS SQL)</li>
                                    <li>HTML</li>
                                </ul>
                                <h4>Been a while</h4>
                                <ul>
                                    <li>C#</li>
                                    <li>C++ (Arduino)</li>
                                    <li>C</li>
                                    <li>Java</li>
                                    <li>Shell/Bash</li>
                                    <li>PowerShell</li>
                                    <li>Perl</li>
                                </ul>
                            </>,
                        },
                        {
                            title: "Databases",
                            subtitle: "MongoDB, AWS Athena, Oracle, MS SQL",
                        },
                        {
                            title: "Tools",
                            subtitle: "Jenkins, Kubernetes, Docker",
                        },
                        {
                            title: "Operating Systems",
                            subtitle: "Linux (Debian, Arch), Windows",
                            description: <>
                                <h4>Linux</h4>
                                <ul>
                                    <li>Set up VMs/containers with it at work and home</li>
                                    <li>Using it on my personal computer since 2015</li>
                                </ul>
                            </>
                        },
                    ]}
                />
            </div>
        </>
    );
}