const quotes = [
  {
    quote: "석양이 진다.",
    author: "맥크리",
  },
  {
    quote: "목표를 포착했다",
    author: "솔져",
  },
  {
    quote: "넌 강해졌다. 돌격해",
    author: "아나",
  },
  {
    quote: "죽음의 꽃이 준비됐다.",
    author: "리퍼",
  },
  {
    quote: "영웅은 죽지 않아요",
    author: "메르시",
  },
  {
    quote: "망치 나가신다",
    author: "라인하르트",
  },
  {
    quote: "초고열 용광로.",
    author: "토르비욘",
  },
  {
    quote: "제대로 놀아보자",
    author: "루시우",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)]

quote.innerText = todaysQuote.quote;
author.innerText = `-${todaysQuote.author}-`;