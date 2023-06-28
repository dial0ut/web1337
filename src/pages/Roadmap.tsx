import React from 'react';

const Roadmap: React.FC = () => {
  const roadmapContent = `
    <div style="paddingBottom: 45rem; paddingTop: 17rem;">
      <h1 color="white">𝚁𝚘𝚊𝚍𝚖𝚊𝚙</h1>
      <h3 color="white">
        ## Month 1:<br/>
        1. Research and understand the requirements and specifications of the WiFi AP, including the integration of the NYM mixnet.<br/>
        2. Develop a comprehensive design plan for the hardware and software components of the AP.<br/>
        3. Begin the development of the NYM gateway software and its integration with the router.<br/><br/>

        ## Month 2:<br/>
        1. Continue the development of the NYM gateway software and ensure its compatibility with different router models.<br/>
        2. Implement the routing of sensitive traffic through the NYM mixnet for transactions, messengers, emails, and other identified data types.<br/>
        3. Conduct thorough testing and debugging of the NYM gateway software.<br/><br/>

        ## Month 3:<br/>
        1. Focus on optimizing the performance and efficiency of the NYM gateway software.<br/>
        2. Develop a separate network segment for handling anonymized traffic, ensuring network segregation.<br/>
        3. Enhance the security features of the router and the NYM gateway to minimize potential attack surfaces.<br/><br/>

        ## Month 4:<br/>
        1. Integrate the NYM gateway software into the router's firmware, ensuring seamless operation.<br/>
        2. Conduct extensive testing and quality assurance to verify the functionality and security of the integrated solution.<br/>
        3. Start working on the implementation of the battery-saving feature, allowing the nym-client to run independently of the phone.<br/><br/>

        ## Month 5:<br/>
        1. Finalize the development of the battery-saving feature, ensuring it operates efficiently without impacting performance.<br/>
        2. Perform rigorous testing to validate the battery-saving functionality and address any potential issues.<br/>
        3. Conduct comprehensive security audits to identify and mitigate vulnerabilities.<br/><br/>

        ## Month 6:<br/>
        1. Conduct a thorough review of the entire solution, addressing any remaining bugs or performance issues.<br/>
        2. Prepare documentation and user guides for the WiFi AP, including instructions on setting up the NYM gateway and utilizing its features.<br/>
        3. Release the product v1 to a limited audience for beta testing and gather user feedback for further improvements.<br/><br/>
      </h3>
      <h2># NYMXMAS - DAY OF PRODUCT RELEASE!</h2>
    </div>
  `;

  return <div dangerouslySetInnerHTML={{ __html: roadmapContent }} />;
};

export default Roadmap;
