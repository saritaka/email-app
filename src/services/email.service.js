import { storageService } from "../services/async-storage.service";
import { utilService } from "../services/util.service";

export const emailService = {
  query,
  save,
  remove,
  getById,
  createEmail,
  getDefaultFilter,
};

const STORAGE_KEY = "emails";

const loggedinUser = {
  email: "user@appsus.com",
  fullname: "Mahatma Appsus",
};

_createEmails();

async function query(filterBy) {
  // async function query() {
  let emails = await storageService.query(STORAGE_KEY);
  console.log("emails", { emails });
  if (filterBy) {
    let { status, txt, isRead } = filterBy;
    emails = emails.filter((email) =>
      email.body.toLowerCase().includes(txt.toLowerCase())
    );
    return emails;
  }
}

function getById(id) {
  return storageService.get(STORAGE_KEY, id);
}

function remove(id) {
  return storageService.remove(STORAGE_KEY, id);
}

function save(emailToSave) {
  if (emailToSave.id) {
    return storageService.put(STORAGE_KEY, emailToSave);
  } else {
    emailToSave.isOn = false;
    return storageService.post(STORAGE_KEY, emailToSave);
  }
}

function createEmail() {
  return {};
}

function getDefaultFilter() {
  return {
    status: "",
    txt: "",
    isRead: null,
  };
}

function _createEmails() {
  let emails = utilService.loadFromStorage(STORAGE_KEY);
  // let emails = [];
  if (!emails || !emails.length) {
    emails = [
      {
        id: "e101",
        subject: "Miss you!",
        body: "Would love to catch up sometimes",
        isRead: false,
        isStarred: false,
        sentAt: 1551133930594,
        removedAt: null, //for later use
        from: "momo@momo.com",
        to: "user@appsus.com",
      },
      {
        id: "e201",
        subject: "Miss you! Miss you!",
        body: "Would love to catch up sometimes Would love to catch up sometimes Would love to catch up sometimes",
        isRead: true,
        isStarred: true,
        sentAt: 1541133930594,
        removedAt: null, //for later use
        from: "user@appsus.com",
        to: "user@appsus.com",
      },
      {
        id: "e301",
        subject: "test!",
        body: "testtesttesttesttesttesttesttesttesttesttesttesttesttest testtesttesttesttest testtesttest ",
        isRead: true,
        isStarred: false,
        sentAt: 1531133930594,
        removedAt: null, //for later use
        from: "user@appsus.com",
        to: "user@appsus.com",
      },
      {
        id: "e401",
        subject: "Miss you!",
        body: "Would love to catch up sometimes",
        isRead: false,
        isStarred: false,
        sentAt: 1521133930594,
        removedAt: null, //for later use
        from: "momo@momo.com",
        to: "user@appsus.com",
      },
      {
        id: "e501",
        subject: "Miss you! Miss you!",
        body: "Would love to catch up sometimes Would love to catch up sometimes Would love to catch up sometimes",
        isRead: false,
        isStarred: true,
        sentAt: 1511133930594,
        removedAt: null, //for later use
        from: "user@appsus.com",
        to: "user@appsus.com",
      },
      {
        id: "e601",
        subject: "test!",
        body: "testtesttesttesttesttesttesttesttesttesttesttesttesttest testtesttesttesttest testtesttest ",
        isRead: false,
        isStarred: true,
        sentAt: 1501133930594,
        removedAt: null, //for later use
        from: "user@appsus.com",
        to: "user@appsus.com",
      },
    ];
    utilService.saveToStorage(STORAGE_KEY, emails);
  }
}
