import Experience from "./Experience";

const Experiences = () => {
  return (
    <div className=" w-3/6 flex-auto p-5">
      <Experience
        title="Intern | NEC Telecom Software Philippines, Inc."
        shortDesc="Information Technology Intern"
        desc1=" Collaborated in the development of projects through technical research, creating reports, designing user
        interface, and testing applications"
        desc2="Acquired valuable knowledge and hands-on experience in a professional work environment. Participated
        actively in daily scrum meetings, sprint planning sessions, and project reviews."
      />
      <Experience
        title="HISTORYa: A Philippine History Teaching and Learning App"
        shortDesc="1st place in Best Capstone Project, IT Research Colloquium | Web Development"
        desc1="Developed system designs, activity diagrams, use case diagrams for the flow and structure of the application, enabling a clear and organized development process for the application."
        desc2="Designed engaging and visually appealing monster characters, to enhance the interactive learning experience of the user."
        desc3="Created a user manual providing clear and user-friendly instructions to enhance the overall user experience and enable seamless navigation within the application."
      />

      <Experience
        title="Word on the Street: An Online Information System for Streets to Schools"
        shortDesc="Software Engineering | Business Analyst"
        desc1="Gathered and documented the business requirements of the client for features of the application."
        desc2="Collaborated closely with system analyst to ensure successful implementation of the desired features to meet the client's specific needs and objectives."
        desc3="Performed functional and non-functional testing in the application to ensure the reliability and performance of the system."
      />

      <Experience
        title="Space Apps Challenge 2020 | NASA"
        desc1=" Acquired expertise in crafting game scenes utilizing built-in assets
        within the Unity game engine."
        desc2="Developed a terrain setting for an educational simulation game,
        enhancing its appeal and interactivity."
      />

      <Experience
        title="Hackreality 2020 | VR Philippines"
        desc1=" Collaborated as part of a team to conceive and develop a virtual
        reality game during a hackathon event."
        desc2="Designed and refined a pivotal game component, significantly
        enhancing the overall user experience."
      />
    </div>
  );
};
export default Experiences;
