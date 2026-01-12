import "./App.css";
import Counter from "./components/Counter/Counter";
import GenderReveal from "./components/GenderReveal/GenderReveal";
import Goodbye from "./components/Goodbye/Goodbye";
import IdealWeightCalculator from "./components/IdealWeightCalculator/IdealWeightCalculator";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import RandomDog from "./components/RandomDog/RandomDog";
import SpaceMissionForm from "./components/SpaceMissionForm/SpaceMissionForm";
import Tool from "./components/Tool/Tool";

function App() {
  const johnDawson = {
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7x7RFFT8-4WY26mVJxhk5lvmoTIhb_0NzAQ&s",
    name: "John Dawson",
    description: "Full Stack Dev",
  };

  return (
    <>
      <p className="heading">Hello, World!</p>
      {/* props */}
      {/* <Greetings name="Alisher" />
      <Greetings name="Vadim" /> */}

      <Goodbye familyName="Khamidov" score={90} />
      <Goodbye familyName="Khamidov" />

      <GenderReveal />
      <RandomDog />
      <Counter />
      <Counter />
      <SpaceMissionForm />
      <Tool />
      <IdealWeightCalculator />
      <ProfileCard {...johnDawson} />
    </>
  );
}

export default App;

// Задание
// Создайте компонент Goodbye
// компонент должен возвращать параграф с текстом Goodbye, <family_name>

// соответственно у компонента должен быть пропс familyName
// Создайте два элемента с разными фамилиями

// дополнительно добавьте score - числовой пропс
// Goodbye, John, your score is 97