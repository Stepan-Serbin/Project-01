import { Routes, Route } from "react-router-dom";
import Counter from "../components/Counter/Counter";
import GenderReveal from "../components/GenderReveal/GenderReveal";
import IdealWeightCalculator from "../components/IdealWeightCalculator/IdealWeightCalculator";
import { NationalityReveal } from "../components/NationalityReveal/NationalityReveal";
import SpaceMissionForm from "../components/SpaceMissionForm/SpaceMissionForm";
import Layout from "../layouts/Layout";
import ProfileLayout from "../layouts/ProfileLayout";
import About from "../pages/About/About";
import CarPage from "../pages/CarPage/CarPage";
import Contacts from "../pages/Contacts/Contacts";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import ProductPage from "../pages/ProductPage/ProductPage";
import Profile from "../pages/Profile/Profile";
import ProfileData from "../pages/ProfileData/ProfileData";
import Settings from "../pages/Settings/Settings";
import UsersPage from "../pages/UsersPage/UsersPage";
import {ROUTES as R} from "../shared/routes";
import UserPage from "../pages/UserPage/UserPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={R.GENDER_REVEAL} element={<GenderReveal />} />
        <Route path={R.NATIONALITY_REVEAL} element={<NationalityReveal />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/space-mission" element={<SpaceMissionForm />} />
        <Route path="/ideal-weight" element={<IdealWeightCalculator />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path={R.ABOUT} element={<About />} />
        <Route path="/profile" element={<ProfileLayout />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/data" element={<ProfileData />} />
          <Route path="/profile/settings" element={<Settings />} />
        </Route>
        <Route path="/products/:id" element={<ProductPage />}></Route>
        <Route path="/cars/:model" element={<CarPage />}></Route>
        <Route path={R.USERS} element={<UsersPage />}></Route>
        <Route path={R.USER(":id")} element={<UserPage />}></Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
// export const ROUTES = {
//   HOME: "/",
//   GENDER_REVEAL: "/gender-reveal",
//   NATIONALIZE: "/nationalize",
//   COUNTER: "/counter",
//   SPACE_MISSION: "/space-mission",
//   IDEAL_WEIGHT: "/ideal-weight",
//   CONTACTS: "/contacts",
//   ABOUT: "/about",
//   PROFILE: "/profile",
// };

// PROFILE: "/profile",
//   PROFILE_DATA: "/profile/data",
//   PROFILE_SETTINGS: "/profile/settings",
