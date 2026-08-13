// 44 個子音資料
var consonants = [
  { th: "ก", rom: "g", cls: "mid" },
  { th: "ข", rom: "kh", cls: "high" },
  { th: "ฃ", rom: "kh", cls: "high" },
  { th: "ค", rom: "kh", cls: "low" },
  { th: "ฅ", rom: "kh", cls: "low" },
  { th: "ฆ", rom: "kh", cls: "low" },
  { th: "ง", rom: "ng", cls: "low" },
  { th: "จ", rom: "j", cls: "mid" },
  { th: "ฉ", rom: "ch", cls: "high" },
  { th: "ช", rom: "ch", cls: "low" },
  { th: "ซ", rom: "s", cls: "low" },
  { th: "ฌ", rom: "ch", cls: "low" },
  { th: "ญ", rom: "y", cls: "low" },
  { th: "ฎ", rom: "d", cls: "mid" },
  { th: "ฏ", rom: "t", cls: "mid" },
  { th: "ฐ", rom: "th", cls: "high" },
  { th: "ฑ", rom: "th", cls: "low" },
  { th: "ฒ", rom: "th", cls: "low" },
  { th: "ณ", rom: "n", cls: "low" },
  { th: "ด", rom: "d", cls: "mid" },
  { th: "ต", rom: "t", cls: "mid" },
  { th: "ถ", rom: "th", cls: "high" },
  { th: "ท", rom: "th", cls: "low" },
  { th: "ธ", rom: "th", cls: "low" },
  { th: "น", rom: "n", cls: "low" },
  { th: "บ", rom: "b", cls: "mid" },
  { th: "ป", rom: "p", cls: "mid" },
  { th: "ผ", rom: "ph", cls: "high" },
  { th: "ฝ", rom: "f", cls: "high" },
  { th: "พ", rom: "ph", cls: "low" },
  { th: "ฟ", rom: "f", cls: "low" },
  { th: "ภ", rom: "ph", cls: "low" },
  { th: "ม", rom: "m", cls: "low" },
  { th: "ย", rom: "y", cls: "low" },
  { th: "ร", rom: "r", cls: "low" },
  { th: "ล", rom: "l", cls: "low" },
  { th: "ว", rom: "w", cls: "low" },
  { th: "ศ", rom: "s", cls: "high" },
  { th: "ษ", rom: "s", cls: "high" },
  { th: "ส", rom: "s", cls: "high" },
  { th: "ห", rom: "h", cls: "high" },
  { th: "ฬ", rom: "l", cls: "low" },
  { th: "อ", rom: "-", cls: "mid" },
  { th: "ฮ", rom: "h", cls: "low" },
];

// 找到子音要放進去的容器
var consGrid = document.getElementById("consGrid");

// 用迴圈把每一個子音變成一張卡片,加進容器裡
consonants.forEach(function (c) {
  var card = document.createElement("div");
  card.className = "cons-card " + c.cls;
  card.innerHTML =
    '<div class="letter">' +
    c.th +
    "</div>" +
    '<div class="rom">' +
    c.rom +
    "-</div>";
  consGrid.appendChild(card);
});
