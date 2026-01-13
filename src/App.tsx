
import Counter from "./components/Counter/Counter";
import GenderReveal from "./components/GenderReveal/GenderReveal";
import IdealWeightCalculator from "./components/IdealWeightCalculator/IdealWeightCalculator";
import SpaceMissionForm from "./components/SpaceMissionForm/SpaceMissionForm";
import { NationalityReveal } from "./components/NationalityReveal/NationalityReveal";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Layout from "./layouts/Layout";



function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/gender-reveal" element={<GenderReveal />} />
            <Route path="/nationality-reveal" element={<NationalityReveal />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/space-mision" element={<SpaceMissionForm />} />
            <Route path="/ideal-weight" element={<IdealWeightCalculator />} />   
          </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

// wildcard