import { useNavigate } from "react-router";

export function AboutUs() {
  const navigate = useNavigate();

  // function goBack() {
  //   navigate("/email");
  // }

  return (
    <section className="container">
      <h2>About Us</h2>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. A officiis harum
      aspernatur tempora doloremque eum quo odio! Rerum, explicabo vel est,
      praesentium tempore velit sed a hic omnis, nesciunt dolorem.
      <button
        onClick={() => navigate(-1)}
        className="simple-button center-block"
      >
        Back
      </button>
    </section>
  );
}
