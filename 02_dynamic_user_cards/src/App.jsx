import "./App.css";
import UsersContainer from "./components/UsersContainer";
import img1 from "./assets/images/1.png";
import img2 from "./assets/images/2.png";
import img3 from "./assets/images/3.png";

function App() {
  const usersData = [
    {
      name: "Nancy",
      city: "San Francisco",
      description: "Senior Software Developer",
      skills: [
        "C",
        "C++",
        "Java Programming",
        "Python",
        "C#. Net",
        "MySQL",
        "MongoDB",
      ],
      online: true,
      profile: img3,
    },
    {
      name: "Murugan",
      city: "New York",
      description: "Full Stack Developer",
      skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],
      online: false,
      profile: img2,
    },
    {
      name: "Sophia",
      city: "London",
      description: "UI/UX Designer",
      skills: ["Figma", "Adobe XD", "HTML", "CSS", "JavaScript"],
      online: true,
      profile: img3,
    },
    {
      name: "David",
      city: "Toronto",
      description: "Backend Developer",
      skills: ["Java", "Spring Boot", "MySQL", "Docker", "React"],
      online: false,
      profile: img1, // reused image
    },
  ];
  return (
    <>
      <UsersContainer usersData={usersData} />
    </>
  );
}

export default App;
