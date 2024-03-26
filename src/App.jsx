import { Routes, HashRouter as Router, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { EmailIndex } from "./pages/EmailIndex";
import { AboutUs } from "./pages/AboutUs";
import { EmailDetails } from "./cmps/EmailDetails";
import { EmailCompose } from "./cmps/EmailCompose";
import { UserMsg } from "./cmps/UserMsg";

export function App() {
  return (
    <Router>
      <section>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:emailFolder" element={<EmailIndex />}>
              <Route path="/:emailFolder/:emailId" element={<EmailDetails />} />
              {/* <Route
                path="/:emailFolder?compose=new"
                element={<EmailCompose />}
              /> */}
              {/* <Route path="/email/:emailId" element={<EmailIndex />} /> */}
            </Route>
            <Route path="/about" element={<AboutUs />} />
          </Routes>
        </main>
        <UserMsg />
      </section>
    </Router>
  );
}
