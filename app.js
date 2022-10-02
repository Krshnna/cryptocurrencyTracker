const form = document.querySelector("form");
const name1 = document.querySelector(".name");
const price1 = document.querySelector(".price");
const volume = document.querySelector(".vol");
const change = document.querySelector(".change");
const update = document.querySelector(".update");
const container = document.querySelector(".table-container");

// let upd;

form.addEventListener("submit", (e) => {
  e.preventDefault();

//   if (upd) {
//     clearTimeout(upd);
//   }

  const cType = form.elements.coinType.value;
  container.classList.add(".active");
  document.querySelector(".active").style.visibility = "visible";
  //   setInterval(() => {
  //   }, 10000);
  fetchPrice(cType);
});

const fetchPrice = async (cType) => {
  const r = await axios.get(
    `https://api.coinstats.app/public/v1/coins/${cType}`
  );
//   upd = setTimeout(() => fetchPrice(cType), 10000);
  showPrices(r.data.coin);
};

const showPrices = (coinData) => {
  let namee = coinData.name;
  const price = coinData.price;
  const price_change = coinData.priceChange1d;
  const vol = coinData.volume;
  //   const up = coinData.
  if (price_change < 0) {
    change.style.color = "red";
  }

  name1.innerHTML = namee;
  price1.innerHTML = "$" + price;
  volume.innerHTML = vol;
  change.innerHTML = price_change;
};
