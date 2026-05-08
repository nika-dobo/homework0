const accounts = [
  {
    name: "Giorgi",
    surname: "Berishvili",
    password: "5as1535qae",
  },
  {
    name: "Ana",
    surname: "Berishvili",
    password: "634gsdebgy2w54",
  },
  {
    name: "David",
    surname: "Berishvili",
    password: "5rhr53yts4g5",
  },
  {
    name: "David",
    surname: "Berishvili",
    password: "5rhr53yts4g5",
  },
  {
    name: "David",
    surname: "Berishvili",
    password: "5rhr53yts4g5",
  },
];

localStorage.setItem("accounts", JSON.stringify(accounts));

const get = localStorage.getItem("accounts");
console.log(get);

const parse = JSON.parse(get);
console.log(parse);
