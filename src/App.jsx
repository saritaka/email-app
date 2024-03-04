import { Routes, HashRouter as Router, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { EmailIndex } from "./pages/EmailIndex";
import { AboutUs } from "./pages/AboutUs";
// import { EmailDetails } from "./cmps/EmailDetails";

export function App() {
  return (
    <Router>
      <section>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/email" element={<EmailIndex />} />
            {/* <Route path="/email/:emailId" element={<EmailDetails />} /> */}
            <Route path="/email/:emailId" element={<EmailIndex />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
        </main>
      </section>
    </Router>
  );
}
