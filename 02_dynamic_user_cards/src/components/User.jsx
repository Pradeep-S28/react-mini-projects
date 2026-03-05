const User = ({ user }) => {
  const { name, city, description, skills, online, profile } = user;
  return (
    <div className="user-card">
      <span className={online ? "online" : "offline"}>
        {online ? "ONLINE" : "OFFLINE"}
      </span>
      <div>
        <img src={profile} alt="" />
      </div>
      <h2>{name}</h2>
      <h2>{city}</h2>
      <p>{description}</p>
      <div className="buttons">
        <button className="primary">Message</button>
        <button>Following</button>
      </div>

      <div>
        <h6>SKILLS</h6>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default User;
