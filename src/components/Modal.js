import pokeball from "../images/pokeball.jpeg";
import bg from "../images/bg.jpg";

function Modal({
  onClick,id,name,image,type,height,weight,stats,statsName,
}) {
  return (
    <div
      style={{
        zIndex: "10",
        position: "fixed",
        display: "flex",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div
        onClick={onClick}
        style={{
          position: "absolute",
          top: "50px",
          right: "50px",
          borderRadius: "50%",
          padding: "5px 10px",
          background: "black",
          color: "white",
          fontWeight: "900",
          cursor: "pointer",
        }}
      >
        X
      </div>
      <div>
        <img
          src={image}
          alt={name}
          style={{ filter: "drop-shadow(2px 4px 12px black)" }}
        />
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          flexDirection: "column",
          width: "450px",
          height: "500px",
        }}
      >
        <div className="stat-container-title" style={{ marginLeft: "0" }}>
          <p style={{ width: "180px", color: "black" }}>No. {id}</p>
          <p>{name}</p>
          <img src={pokeball} alt="pokeball" className="pokeball-title" />
        </div>

        <div style={{ display: "flex", width: "100%" }}>
          <div
            className="stats-left"
            style={{ background: "#dbdbd9", textAlign: "center", lineHeight:"40px" }}
          >
            <p>Type</p>
            <p>Height</p>
            <p>Weight</p>
          </div>
          <div className="stats-right" style={{ background: "#ffffff", lineHeight:"40px" }}>
            <p>{type}</p>
            <p>{height}0 cm</p>
            <p>{weight} lbs</p>
          </div>
        </div>
        <div className="base-stats" >
          <div>
            {statsName.map((stats) => (
              <p className="stats" style={{ lineHeight:"60px" }}>{stats}</p>
            ))}
          </div>
          <div>
            {stats.map((stats) => (
              <p className="stats" style={{ lineHeight:"60px" }}>{stats}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
