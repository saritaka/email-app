import { useEffect, useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router";
import { useLocation, useSearchParams } from "react-router-dom";
import { emailService } from "../services/email.service";

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
    // console.log(
    //   "I am on filter by on index - recieved new filter and supposed to render",
    //   filterBy
    // );
    // console.log(emails);
    // filterByFolder(location.pathname, emails);
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
      // setEmailFolder(location.pathname);
      // setFilterBy((prevFilter) => ({
      //   ...prevFilter,
      //   status: params.emailFolder,
      // }));
      // const emails = await emailService.query(filterBy, folder=params.emailFolder);
      const emails = await emailService.query(filterBy);

      // const emails = await emailService.query();
      // filterByFolder(location.path, emails) != {}
      //   ? setEmails(filterByFolder(location.path, emails))
      //   : setEmails(emails);
      setEmails(emails);
      // console.log("emails after setEmail", emails);
    } catch (err) {
      console.log("Error in loadEmails", err);
    }
  }

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

  async function onRemoveEmail(emailId) {
    console.log("onRemove", emailId);
    try {
      await emailService.remove(emailId);

      setEmails((prevEmails) => {
        return prevEmails.filter((email) => email.id !== emailId);
      });
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

  // function filterByFolder(path, emails) {
  //   let updatedEmails = emailService.setEmailFolder(path, emails);
  //   return updatedEmails;
  // }
  // function setEmailFolder(folder) {
  //   console.log("folder", folder);
  //   // if (folder) {
  //   switch (folder) {
  //     case "/inbox":
  //       return setFilterBy((prevFilter) => ({
  //         ...prevFilter,
  //         toMe: true,
  //       }));
  //     case "/sent":
  //       return setFilterBy((prevFilter) => ({
  //         ...prevFilter,
  //         fromMe: true,
  //       }));
  //     case "/starred":
  //       return setFilterBy((prevFilter) => ({
  //         ...prevFilter,
  //         isStarred: true,
  //       }));
  //   }
  //   // }
  // }
  // function setEmailFolder(folder, emails) {
  //   const user = emailService.loggedinUser;
  //   console.log(user);
  //   console.log("folder", folder);
  //   // if (folder) {
  //   switch (folder) {
  //     case "/inbox":
  //       return emails.filter((email) => email.to === user.email);
  //     case "/sent":
  //       return emails.filter((email) => email.from === user.email);
  //     case "/starred":
  //       return emails.filter((email) => email.isStarred === true);
  //   }
  //   // }
  // }

  function onOpenMenu() {
    setMenu(!menuOpen);
  }

  console.log("search params after pressing compose", searchParams.toString());

  if (!emails) return <div>Loading..</div>;

  return (
    <section className="main-prev">
      <div className="top">
        <Header
          filterBy={filterBy}
          onSetFilter={onSetFilter}
          setMenu={setMenu}
          onOpenMenu={onOpenMenu}
        />
      </div>
      <div className="menu">
        {/* <SideMenu setMenu={setMenu} /> */}
        <SideMenu
          filterBy={filterBy}
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
