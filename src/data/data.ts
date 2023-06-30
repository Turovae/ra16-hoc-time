import moment from "moment";

const video = [
  {
    id: 1,
    url: "https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0",
    // date: "2017-07-31 13:24:00",
    date: moment().subtract(10, "m").format("YYYY-MM-DD HH:mm:ss"),
  },
  {
    id: 2,
    url: "https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0",
    // date: "2018-03-03 12:10:00",
    date: moment().subtract(5, "h").format("YYYY-MM-DD HH:mm:ss"),
  },
  {
    id: 3,
    url: "https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0",
    // date: "2018-02-03 23:16:00",
    date: moment().subtract(6, "d").format("YYYY-MM-DD HH:mm:ss"),
  },
  {
    id: 4,
    url: "https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0",
    date: "2018-01-03 12:10:00",
  },
  {
    id: 5,
    url: "https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0",
    date: "2018-01-01 16:17:00",
  },
  {
    id: 6,
    url: "https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0",
    date: "2017-12-02 05:24:00",
  },
];

export default video;
