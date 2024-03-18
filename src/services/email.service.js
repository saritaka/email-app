import { storageService } from "../services/async-storage.service";
import { utilService } from "../services/util.service";

export const emailService = {
  query,
  save,
  remove,
  getById,
  createEmail,
  getDefaultFilter,
  setEmailSort,
  nextPage,
};

const STORAGE_KEY = "emails";
const PAGE_SIZE = 50;
var getSortBy = {};
var getPageIdx = 0;

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
    let { status, txt, isRead, from, to, subject, hasTheWords, doesntHave } =
      filterBy;
    if (txt != null) {
      emails = emails.filter(
        (email) =>
          email.body.toLowerCase().includes(txt.toLowerCase()) ||
          email.subject.toLowerCase().includes(txt.toLowerCase())
      );
    }

    if (subject != null) {
      emails = emails.filter((email) =>
        email.subject.toLowerCase().includes(subject.toLowerCase())
      );
    }

    if (to != null) {
      emails = emails.filter((email) =>
        email.to.toLowerCase().includes(to.toLowerCase())
      );
    }

    if (from != null) {
      emails = emails.filter((email) =>
        email.from.toLowerCase().includes(from.toLowerCase())
      );
    }
    if (hasTheWords != null) {
      emails = emails.filter(
        (email) =>
          email.from.toLowerCase().includes(hasTheWords.toLowerCase()) ||
          email.to.toLowerCase().includes(hasTheWords.toLowerCase()) ||
          email.subject.toLowerCase().includes(subject.toLowerCase())
      );
    }
    if (doesntHave != null) {
      emails = emails.filter(
        (email) =>
          !email.from.toLowerCase().includes(doesntHave.toLowerCase()) ||
          !email.to.toLowerCase().includes(doesntHave.toLowerCase()) ||
          !email.subject.toLowerCase().includes(doesntHave.toLowerCase())
      );
    }

    // // Sort
    // if (getSortBy.isRead !== undefined) {
    //   cars.sort((c1, c2) => (c1.maxSpeed - c2.maxSpeed) * gSortBy.maxSpeed);
    // } else if (gSortBy.vendor !== undefined) {
    //   cars.sort(
    //     (c1, c2) => c1.vendor.localeCompare(c2.vendor) * gSortBy.vendor
    //   );
    // }

    // Pagination
    const startIdx = getPageIdx * PAGE_SIZE; //1 * 4
    emails = emails.slice(startIdx, startIdx + PAGE_SIZE); //4 - 8
    // console.log("emailsssssssss", emails);

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

function setEmailSort(sortBy = {}) {
  getSortBy = sortBy;
}

async function nextPage() {
  const emails = await storageService.query(STORAGE_KEY);
  getPageIdx++;
  if (getPageIdx * PAGE_SIZE >= emails.length) {
    getPageIdx = 0;
  }
}

function getDefaultFilter() {
  return {
    status: null,
    txt: null, //has the words
    isRead: null,
    from: null,
    to: null,
    subject: null,
    hasTheWords: null,
    doesntHave: null,
  };
}

function createEmail(
  subject = utilService.makeLorem(5),
  body = utilService.makeLorem(20),
  from = "momo@momo.com",
  to = "user@appsus.com"
) {
  return {
    id: utilService.makeId(),
    subject: subject,
    body: body,
    isRead: false,
    isStarred: null,
    sentAt: utilService.randomDate(1584336424000, 1710566824000),
    // sentAt: 1551133930594,
    removedAt: null, //for later use
    from: from,
    to: to,
  };
}

function _createEmails() {
  let emails = utilService.loadFromStorage(STORAGE_KEY);
  // let emails = [];
  if (!emails || !emails.length) {
    emails = [];
    for (let i = 0; i < 55; i++) {
      emails.push(createEmail());
    }
  }
  utilService.saveToStorage(STORAGE_KEY, emails);
}

// function _createCar(vendor) {
//   return {
//     id: utilService.makeId(),
//     vendor,
//     maxSpeed: utilService.getRandomIntInclusive(50, 250),
//     desc: utilService.makeLorem(),
//   };
// }

// function _createCars() {
//   let cars = utilService.loadFromStorage(STORAGE_KEY);
//   // Nothing in storage - generate demo data
//   if (!cars || !cars.length) {
//     cars = [];
//     for (let i = 0; i < 21; i++) {
//       var vendor =
//         gVendors[utilService.getRandomIntInclusive(0, gVendors.length - 1)];
//       cars.push(_createCar(vendor));
//     }
//   }
//   utilService.saveToStorage(STORAGE_KEY, cars);
// }

//       {
//         id: "e101",
//         subject: "Miss you!",
//         body: "Would love to catch up sometimes",
//         isRead: false,
//         isStarred: false,
//         sentAt: 1551133930594,
//         removedAt: null, //for later use
//         from: "momo@momo.com",
//         to: "user@appsus.com",
//       },
//       {
//         id: "e201",
//         subject: "Miss you! Miss you!",
//         body: "Would love to catch up sometimes Would love to catch up sometimes Would love to catch up sometimes",
//         isRead: true,
//         isStarred: true,
//         sentAt: 1541133930594,
//         removedAt: null, //for later use
//         from: "user@appsus.com",
//         to: "user@appsus.com",
//       },
//       {
//         id: "e301",
//         subject: "test!",
//         body: "testtesttesttesttesttesttesttesttesttesttesttesttesttest testtesttesttesttest testtesttest ",
//         isRead: true,
//         isStarred: false,
//         sentAt: 1531133930594,
//         removedAt: null, //for later use
//         from: "user@appsus.com",
//         to: "user@appsus.com",
//       },
//       {
//         id: "e401",
//         subject: "Miss you!",
//         body: "Would love to catch up sometimes",
//         isRead: false,
//         isStarred: false,
//         sentAt: 1521133930594,
//         removedAt: null, //for later use
//         from: "momo@momo.com",
//         to: "user@appsus.com",
//       },
//       {
//         id: "e501",
//         subject: "Miss you! Miss you!",
//         body: "Would love to catch up sometimes Would love to catch up sometimes Would love to catch up sometimes",
//         isRead: false,
//         isStarred: true,
//         sentAt: 1511133930594,
//         removedAt: null, //for later use
//         from: "user@appsus.com",
//         to: "user@appsus.com",
//       },
//       {
//         id: "e601",
//         subject: "test!",
//         body: "testtesttesttesttesttesttesttesttesttesttesttesttesttest testtesttesttesttest testtesttest ",
//         isRead: false,
//         isStarred: true,
//         sentAt: 1501133930594,
//         removedAt: null, //for later use
//         from: "user@appsus.com",
//         to: "user@appsus.com",
//       },
//     ];
//     utilService.saveToStorage(STORAGE_KEY, emails);
//   }
// }
