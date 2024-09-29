import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#fff",
        padding: "10px 40px",
        color: "#000",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.9)", // Softer background shadow
        borderRadius: "5px",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
        <h3 style={{ fontSize: "18px", marginBottom: "8px", textShadow: "0px 1px 1px rgba(0, 0, 0, 0.1)" }}><strong>Job<span className="text-[#F83002]">Vista</span></strong></h3>
        <p style={{ fontSize: "12px", textShadow: "0px 1px 1px rgba(0, 0, 0, 0.1)" }}>
          Support:<a href="mailto:prashantpal3030@gmail.com" style={{ color: "#000", textDecoration: "none", textShadow: "0px 1px 1px rgba(0, 0, 0, 0.1)" }}>prashantpal3030@gmail.com</a>
        </p>
      </div>
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "#000" }}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" style={{ width: "24px", height: "24px", cursor: "pointer", boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.1)" }} />
        </a>
        <a href="https://x.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "#000" }}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/X_logo.jpg/1200px-X_logo.jpg" alt="Twitter" style={{ width: "24px", height: "24px", cursor: "pointer", boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.1)" }} />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "#000" }}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" style={{ width: "24px", height: "24px", cursor: "pointer", boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.1)" }} />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "#000" }}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="GitHub" style={{ width: "24px", height: "24px", cursor: "pointer", boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.1)" }} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
