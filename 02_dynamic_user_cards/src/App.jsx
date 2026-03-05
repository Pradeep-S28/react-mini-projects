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
    // {
    //   name: "Murugan",
    //   city: "Malasia",
    //   description: "Senior Analyst",
    //   skills: [
    //     "C",
    //     "C++",
    //     "Java Programming",
    //     "Python",
    //     "C#. Net",
    //     "MySQL",
    //     "MongoDB",
    //   ],
    //   online: true,
    //   profile: "images/3.png",
    // },
  ];
  return (
    <>
      <UsersContainer usersData={usersData} />
    </>
  );
}

export default App;
