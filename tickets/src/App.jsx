import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./layout/Layout";
import { LoginPage } from "./pages/login/LoginPage";
import { BookingPage } from "./pages/bookings/Bookings";
import { OverviewPage } from "./pages/overview/OverviewPage";
import { RegisterPage } from "./pages/register/RegisterPage";
import { WelcomePage } from "./pages/welcome/WelcomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LoginPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/overview" element={<OverviewPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
