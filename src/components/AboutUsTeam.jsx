// import React from "react";

// const teamMembersTop = [
//   {
//     name: "Niruta Kadel",
//     role: "ML Engineer",
//     description:
//       "Machine Learning specialist focused on AI algorithms and model development",
//     imgSrc: "/niruta-kadel.png",
//     gradient: "bg-gradient-to-b from-[#F0FDFA] to-[#CCFBF1]",
//   },
//   {
//     name: "Roshani Shrestha",
//     role: "Frontend Developer",
//     description:
//       "Frontend specialist creating intuitive and responsive user interfaces",
//     imgSrc: "/roshani-shrestha.png",
//     gradient: "bg-gradient-to-b from-[#EFF6FF] to-[#DBEAFE]",
//   },
//   {
//     name: "Lina Maharjan",
//     role: "Backend Developer",
//     description:
//       "Backend engineer building scalable systems and API architecture",
//     imgSrc: "/lina-maharjan.png",
//     gradient: "bg-gradient-to-b from-[#FFEBFA] to-[#F5D9EE]",
//   },
// ];

// const teamMembersBottom = [
//   {
//     name: "Niruta Karki",
//     role: "QA Engineer",
//     description:
//       "Quality Assurance expert ensuring robust testing and product reliability",
//     imgSrc: "/niruta-karki.png",
//     gradient: "bg-gradient-to-b from-[#DBF4FF] to-[#E0F2FE]",
//   },
//   {
//     name: "Presha Shrestha",
//     role: "UI/UX Designer",
//     description:
//       "Design expert crafting user-centered experiences and visual interfaces",
//     imgSrc: "/presha-shrestha.png",
//     gradient: "bg-gradient-to-b from-[#FEFCE8] to-[#FEF9C3]",
//   },
// ];

// const AboutUsTeam = () => {
//   return (
//     <div
//       className="min-h-screen flex items-center justify-center px-6 py-16"
//       style={{
//         background:
//           "linear-gradient(90deg, #F0FDFA 0%, #E6FFFA 50%, #CCFBF1 100%)",
//       }}
//     >
//       <div className="max-w-6xl w-full flex flex-col items-center gap-12">
//         {/* Header */}
//         <div className="text-center">
//           <h2 className="text-4xl md:text-5xl font-extrabold text-teal-700 mb-4">
//             Meet Our Team
//           </h2>
//           <p className="text-gray-700 text-lg max-w-3xl">
//             Our diverse team of AI researchers, engineers, and product experts
//             are passionate about building technology that promotes trust and
//             transparency.
//           </p>
//         </div>

//         {/* Top Row: 3 Cards */}
//         <div className="flex flex-wrap justify-center gap-8 w-full">
//           {teamMembersTop.map((member, index) => (
//             <div
//               key={index}
//               className={`${member.gradient} w-[250px] rounded-2xl p-6 shadow-[0_6px_24px_rgba(0,0,0,0.08)] 
//                 transform transition-all duration-300 ease-in-out 
//                 hover:scale-105 hover:shadow-[0_12px_32px_rgba(13,148,136,0.3)] 
//                 flex flex-col items-center text-center min-h-[280px]`}
//             >
//               <img
//                 src={member.imgSrc}
//                 alt={member.name}
//                 className="w-20 h-20 object-cover rounded-full mb-4"
//               />
//               <h3 className="font-bold text-lg text-gray-900 mb-1">
//                 {member.name}
//               </h3>
//               <p className="text-teal-600 font-semibold mb-2">{member.role}</p>
//               <p className="text-gray-800 text-sm">{member.description}</p>
//             </div>
//           ))}
//         </div>

//         {/* Bottom Row: 2 Cards */}
//         <div className="flex justify-center gap-8 w-full">
//           {teamMembersBottom.map((member, index) => (
//             <div
//               key={index}
//               className={`${member.gradient} w-[250px] rounded-2xl p-6 shadow-[0_6px_24px_rgba(0,0,0,0.08)] 
//                 transform transition-all duration-300 ease-in-out 
//                 hover:scale-105 hover:shadow-[0_12px_32px_rgba(13,148,136,0.3)] 
//                 flex flex-col items-center text-center min-h-[280px]`}
//             >
//               <img
//                 src={member.imgSrc}
//                 alt={member.name}
//                 className="w-20 h-20 object-cover rounded-full mb-4"
//               />
//               <h3 className="font-bold text-lg text-gray-900 mb-1">
//                 {member.name}
//               </h3>
//               <p className="text-teal-600 font-semibold mb-2">{member.role}</p>
//               <p className="text-gray-800 text-sm">{member.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutUsTeam;
import React from "react";

const CTASection = () => {
  return (
    <section
      className="cta"
      style={{
        backgroundImage: "url('rr.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "350px",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "overlay",
        color: "#fff",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="container mx-auto px-6">
        <h2
          className="text-2xl md:text-3xl font-bold"
          style={{ textAlign: "left", marginLeft: "90px", marginBottom: "10px" }}
        >
          Are You Ready To Build Magic With Us?
        </h2>
        <p
          className="text-base md:text-lg"
          style={{ textAlign: "left", marginLeft: "90px", maxWidth: "600px" }}
        >
          Let’s connect and create a winning experience with powerful, AI-enhanced football analytics tools.
        </p>
        
        <button
        
          className="mt-4 ml-[190px] px-6 py-6 rounded-md font-semibold transition duration-300"
          style={{
            backgroundColor: "#fff",
            color: "#f12711",
            border: "none",
            fontWeight: "bold",
            cursor: "pointer",
          }}
          
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "#fff";
            e.target.style.color = "#f12711";
          }}
        >
          Get Started Today
        </button>
      </div>
    </section>
  );
};

export default CTASection;
