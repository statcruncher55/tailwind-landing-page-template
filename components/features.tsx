import React from "react";

const Features = () => {
  const styles = {
    container: {
      backgroundColor: "#9E71B2",
      display: "flex",
      justifyContent: "space-between",
      padding: "50px",
    },
    box: {
      backgroundColor: "#C47EB5",
      color: "white",
      padding: "20px",
      width: "45%",
      textAlign: "center",
      borderRadius: "8px",
    },
    label: {
      fontSize: "14px",
      fontWeight: "bold",
      marginBottom: "5px",
    },
    header: {
      fontSize: "24px",
      fontWeight: "bold",
      marginBottom: "10px",
    },
    subheading: {
      fontSize: "16px",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h2 style={styles.header}>Tokenomics</h2>
        <p style={styles.subheading}>10% Team</p>
        <p style={styles.subheading}>90% Community</p>
      </div>
      <div style={styles.box}>
        <h2 style={styles.header}>Founder</h2>
        {/* <p style={styles.subheading}>Single Mint</p> */}
        <p style={styles.subheading}>Contract Renounced</p>
      </div>
    </div>
  );
};

export default Features;
