import { BrowserRouter, Route, Routes } from "react-router-dom";
import Counter from "./components/Counter/Counter";
import GenderReveal from "./components/GenderReveal/GenderReveal";
import IdealWeightCalculator from "./components/IdealWeightCalculator/IdealWeightCalculator";
import { NationalityReveal } from "./components/NationalityReveal/NationalityReveal";
import SpaceMissionForm from "./components/SpaceMissionForm/SpaceMissionForm";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Layout from "./layouts/Layout";
import Contacts from "./pages/Contacts/Contacts";
import About from "./pages/About/About";
import ProfileLayout from "./layouts/ProfileLayout";
import ProfileData from "./pages/ProfileData/ProfileData";
import Settings from "./pages/Settings/Settings";
import Profile from "./pages/Profile/Profile";
import ProductPage from "./pages/ProductPage/ProductPage";
import CarPage from "./pages/CarPage/CarPage";


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
            <Route path="/space-mission" element={<SpaceMissionForm />} />
            <Route path="/ideal-weight" element={<IdealWeightCalculator />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<ProfileLayout />}>
              <Route path="/profile" element={<Profile />} />
              <Route path="/profile/data" element={<ProfileData />} />
              <Route path="/profile/settings" element={<Settings />} />
            </Route>
            <Route path="/products/:id" element={<ProductPage />}></Route>
            <Route path="/cars/:model" element={<CarPage />}></Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

// wildcard