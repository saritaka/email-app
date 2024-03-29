import { useNavigate, useParams } from "react-router";
import { EmailList } from "./EmailList";
import { Outlet } from "react-router-dom";

export function MainEmail({
  // currentFolder,
  emails,
  onRemoveEmail,
  onUpdateEmail,
}) {
  const params = useParams();
  //   const navigate = useNavigate();

  console.log("in mainEmail, the params is: ", params, params.emailId);

  //updateAnyway was set in order to change the isRead status only
  //on the first click on the email line
  function changeState(email, field, updateAnyway = true) {
    // console.log("Im on changeState", email);
    // console.log("Im on changeState", field);
    console.log("Im on changeState", email[field]);

    //   if (field === "isRead") {
    //     var updatefield = email.isRead;
    //   }
    if (email[field] === false || updateAnyway) {
      // if (updateAnyway) {
      const newStatus = { ...email, [field]: !email[field] };
      console.log("newstatus", newStatus);
      onUpdateEmail(newStatus);
    }
  }

  return (
    <section className="main-container">
      {/* {!params.emailId && ( */}
      {/* <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, ipsam.
        Adipisci odit, animi debitis accusamus mollitia similique quasi dolores
        asperiores suscipit consequatur voluptatem aliquid vitae deserunt harum
        molestias delectus repellendus.
      </div> */}
      {!params.emailId && (
        <EmailList
          // currentFolder={currentFolder}
          emails={emails}
          onRemoveEmail={onRemoveEmail}
          onUpdateEmail={onUpdateEmail}
          changeState={changeState}
        />
      )}
      {/* )} */}
      <Outlet context={{ title: "state", changeState }} />
    </section>
  );
}
