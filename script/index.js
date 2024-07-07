const url = "https://api.adviceslip.com/advice";
const BTN = document.getElementById("dice-btn");
const ADVICE = document.getElementById("quote");
const QUOTEID = document.getElementById("quote-id");

const get_advice = async () => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

const renderQuote = async () => {
  const { slip } = await get_advice();
  const { id, advice } = slip;
  ADVICE.textContent = `"${advice}"`;
  QUOTEID.textContent = `#${id}`;
};


window.onload = renderQuote
BTN.onclick = renderQuote;
