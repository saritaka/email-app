import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";

import { emailService } from "../services/email.service";

export function EmailDetails({ email }) {
  // const [email, setEmail] = useState(null);

  // const params = useParams();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   loadEmail();
  // }, [params.emailId]);

  // async function loadEmail() {
  //   try {
  //     const email = await emailService.getById(params.emailId);
  //     console.log("email", email);
  //     console.log("params", params.emailId);
  //     setEmail(email);
  //   } catch (err) {
  //     navigate("/email");
  //     console.log("Error in loadEmail for display", err);
  //   }
  // }

  // console.log("params", params.emailId);
  if (!email) return <div>Loading..</div>;
  return (
    // <section className="email-container">
    <section>
      <h2>{email.subject}</h2>
      <h2>{email.from}</h2>
      <h2>{email.body}</h2>
      <Link to="/email">Go back</Link>
    </section>
  );
}
