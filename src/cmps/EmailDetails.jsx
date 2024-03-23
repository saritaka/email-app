import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link, useOutletContext } from "react-router-dom";

import { emailService } from "../services/email.service";

// export function EmailDetails({ email }) {
export function EmailDetails() {
  const [email, setEmail] = useState(null);

  const params = useParams();
  console.log("params in email details", params);
  console.log("params in email details", params.emailId);
  console.log("params in email details", params.emailFolder);
  const navigate = useNavigate();

  const context = useOutletContext();
  console.log("in context", context);

  useEffect(() => {}, []);

  useEffect(() => {
    loadEmail();
  }, [params.emailId]);

  async function loadEmail() {
    try {
      const email = await emailService.getById(params.emailId);
      console.log("email", email);
      console.log("params", params.emailId);
      setEmail(email);
      context.changeState(email, "isRead", false);
    } catch (err) {
      navigate(-1);
      console.log("Error in loadEmail for display", err);
    }
  }
  console.log("component is up", email);
  // context.changeState(email, email.isRead);

  // console.log("params", params.emailId);
  if (!email) return <div>Loading..</div>;
  return (
    <section className="email-container">
      {/* <Link to="/email">Go back</Link> */}
      <Link to={"/" + params.emailFolder}>Go back</Link>
      {/* <section> */}
      <h2>{email.subject}</h2>
      <h2>{email.from}</h2>
      <h2>{email.body}</h2>
    </section>
  );
}
