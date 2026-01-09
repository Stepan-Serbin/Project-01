import "./App.css";
import Counter from "./components/Counter/Counter";
import Goodbye from "./components/Goodbye/Goodbye"
// import Greetings from "./components/Greetings/Greetings";
import Tool from "./components/Tool/Tool";
import ProfileCard from "./components/ProfileCard/ProfileCard";


function App() {
  return (
    <>
      <p>Hello, World!</p>
      {/* props */}
      {/* <Greetings name="Alisher" />
      <Greetings name="Vadim" /> */}

      <Tool />

      <Goodbye familyName="Khamidov" score={90}/>
      <Goodbye familyName="Khamidov"/>

      <Counter />

      <ProfileCard
        avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7x7RFFT8-4WY26mVJxhk5lvmoTIhb_0NzAQ&s"
        name="John Doe"
        description="Frontend developer"
      />

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