import { useEffect, useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router";
import { useLocation, useSearchParams } from "react-router-dom";
import { emailService } from "../services/email.service";
import {
  eventBusService,
  showErrorMsg,
  showSuccessMsg,
} from "../services/event-bus.service";

import { Header } from "../cmps/Header";
import { SideMenu } from "../cmps/SideMenu";
// import { EmailList } from "../cmps/EmailList";
// import { EmailDetails } from "../cmps/EmailDetails";
import { MainEmail } from "../cmps/MainEmail";
import { EmailCompose } from "../cmps/EmailCompose";

export function EmailIndex() {
  const [emails, setEmails] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterBy, setFilterBy] = useState(
    emailService.getFilterByParams(searchParams)
  );
  // const [sortBy, setSortBy] = useState(emailService.getSortedList())
  // const [filterByFolder, setFolder] = useState();

  const [menuOpen, setMenu] = useState(true);

  // const location = useLocation();
  const params = useParams();
  // console.log("Location", location);
  // console.log("parmams", params);
  // console.log("filter in index", filterBy);

  // console.log("search params", searchParams);

  // const params = useParams();
  // const navigate = useNavigate();

  useEffect(() => {
    let activeFilterBy = {};
    for (const field in filterBy) {
      if (filterBy[field] != null) {
        activeFilterBy[field] = filterBy[field];
      }
    }
    setSearchParams(activeFilterBy);
    loadEmails();
  }, [filterBy]);

  useEffect(() => {
    // console.log("I changed the folder ", params.emailFolder);
    onSetFilter({ folder: params.emailFolder });
  }, [params.emailFolder]);

  function onSetFilter(fieldsToUpdate) {
    setFilterBy((prevFilter) => ({ ...prevFilter, ...fieldsToUpdate }));
  }

  async function loadEmails() {
    try {
      const emails = await emailService.query(filterBy);

      setEmails(emails);
      // console.log("emails after setEmail", emails);
    } catch (err) {
      console.log("Error in loadEmails", err);
    }
  }

  async function onRemoveEmail(emailId) {
    console.log("onRemove", emailId);
    try {
      await emailService.remove(emailId);

      setEmails((prevEmails) => {
        return prevEmails.filter((email) => email.id !== emailId);
      });
      showSuccessMsg("Email removed successfully");
    } catch (err) {
      console.log("Error in onRemoveEmail", err);
    }
  }

  async function onUpdateEmail(email) {
    try {
      const updatedEmail = await emailService.save(email);
      setEmails((prevEmails) =>
        prevEmails.map((currEmail) =>
          currEmail.id === updatedEmail.id ? updatedEmail : currEmail
        )
      );
      loadEmails();
    } catch (err) {
      console.log("Error in onUpdateEmail", err);
    }
  }

  async function onAddEmail(email) {
    try {
      const addEmail = await emailService.save(email);
      setEmails((prevEmails) => [...prevEmails, addEmail]);
      // console.log("just updated the emails", emails);
    } catch (err) {
      console.log("Error in onUpdateEmail", err);
    }
  }

  function onOpenMenu() {
    setMenu(!menuOpen);
  }

  const { folder, txt, isRead, from, to, subject, hasTheWords, doesntHave } =
    filterBy;

  // console.log("search params after pressing compose", searchParams.toString());

  if (!emails) return <div>Loading..</div>;

  return (
    <section className="main-prev">
      <div className="top">
        <Header
          // filterBy={filterBy}
          filterBy={{ txt, from, to, subject, hasTheWords, doesntHave }}
          onSetFilter={onSetFilter}
          setMenu={setMenu}
          onOpenMenu={onOpenMenu}
        />
      </div>
      <div className="menu">
        {/* <SideMenu setMenu={setMenu} /> */}
        <SideMenu
          // filterBy={filterBy}
          filterBy={folder}
          onSetFilter={onSetFilter}
          setSearchParams={setSearchParams}
        />
      </div>
      <div className="email-container">
        <MainEmail
          // currentFolder={params}
          emails={emails}
          onRemoveEmail={onRemoveEmail}
          onUpdateEmail={onUpdateEmail}
        />
        {searchParams.toString().includes("compose=new") ? (
          <EmailCompose onAddEmail={onAddEmail} />
        ) : (
          ""
        )}
      </div>
      {/* <EmailCompose onAddEmail={onAddEmail} /> */}
      {/* <Outlet context={{ title: "Compose", onAddEmail }} /> */}
    </section>
  );
}
