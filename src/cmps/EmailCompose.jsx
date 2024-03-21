export function EmailCompose() {
  console.log("inCompose");
  return (
    <section className="email-compose compose-full-size">
      <div className="flex row space-between p10 compose-header">
        <div>New Message</div>
        <div>x button</div>
      </div>
      <form className="compose-form ">
        <input type="text" placeholder="Recipients"></input>
        <input type="text" placeholder="Subject"></input>
        {/* <textarea> */}

        {/* <input type="text"></input> */}
        <textarea></textarea>

        {/* </textarea> */}

        <button>Send</button>
      </form>
    </section>
  );
}
