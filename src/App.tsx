import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import StudentDetailsPage from "./components/StudentDetailsPage";
import routes from "tempo-routes";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>} className="from-[#fff0fb]">
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/student-details" element={<StudentDetailsPage />} />
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;
