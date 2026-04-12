import { useState, useEffect } from "react";
import LandingPage from "./pages/LandingPage";
import MissionsPage from "./pages/MissionsPage";
import DayPage from "./pages/DayPage";

export default function App() {
  const [page, setPage] = useState("landing");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  const goToLanding  = () => setPage("landing");
  const goToMissions = () => setPage("missions");
  const goToDay      = (dayNum) => setPage(`day-${dayNum}`);

  const handleDayComplete = () => {
    setTimeout(goToMissions, 1500);
  };

  if (page === "landing") {
    return <LandingPage onStart={goToMissions} />;
  }

  if (page === "missions") {
    return <MissionsPage onDaySelect={goToDay} onBack={goToLanding} />;
  }

  if (page.startsWith("day-")) {
    const dayNum = parseInt(page.replace("day-", ""), 10);
    return (
      <DayPage
        day={dayNum}
        onBack={goToMissions}
        onComplete={handleDayComplete}
      />
    );
  }

  return <LandingPage onStart={goToMissions} />;
}
