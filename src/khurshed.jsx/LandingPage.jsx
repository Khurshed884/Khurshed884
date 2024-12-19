import React from "react";

const LandingPage = () => {
     return (
       <div
         style={{
           display: "flex",
           alignItems: "center",
           justifyContent: "center",
           padding: "20px",
           gap: "20px",
           flexWrap: "wrap",
         }}
       >
         {/* Text Section */}
         <div style={{ maxWidth: "40%", textAlign: "left" }}>
           <h2 style={{ color: "#ffffff", marginBottom: "10px" }}>Taste the KababJees Magic!</h2>
           <p style={{ fontSize: "11px", lineHeight: "1.6", margin: 0, color: "#ffffff" }}>
             Crispy, delicious chicken that keeps you coming back!
           </p>
         </div>
   
         {/* Image Section */}
         <img
           src="https://images.deliveryhero.io/image/fd-pk/LH/qcve-listing.jpg"
           alt="Landing Page"
           style={{
             width: "50%",
             maxWidth: "400px",
             borderRadius: "500px",
             objectFit: "cover",
             boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
           }}
         />
       </div>
     );
   };
   
   export default LandingPage;
   