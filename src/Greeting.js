function Greeting({ prenom }) {
  return (
    <div style={{
      background: "#2563eb",
      color: "white",
      padding: "10px 15px",
      borderRadius: "10px",
      marginBottom: "10px",
      fontWeight: "bold"
    }}>
      Bienvenue {prenom} !
    </div>
  );
}

export default Greeting;