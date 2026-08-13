// 44 個子音資料(多加 mnTh 助記詞、mnRom 助記詞拼音、mnEn 助記詞意思)
var consonants = [
  { th: "ก", rom: "g", cls: "mid", mnTh: "ไก่", mnRom: "gai", mnEn: "chicken" },
  { th: "ข", rom: "kh", cls: "high", mnTh: "ไข่", mnRom: "khai", mnEn: "egg" },
  {
    th: "ฃ",
    rom: "kh",
    cls: "high",
    mnTh: "ขวด",
    mnRom: "khuat",
    mnEn: "bottle",
    obsolete: true,
  },
  {
    th: "ค",
    rom: "kh",
    cls: "low",
    mnTh: "ควาย",
    mnRom: "khwaai",
    mnEn: "buffalo",
  },
  {
    th: "ฅ",
    rom: "kh",
    cls: "low",
    mnTh: "คน",
    mnRom: "khon",
    mnEn: "person",
    obsolete: true,
  },
  {
    th: "ฆ",
    rom: "kh",
    cls: "low",
    mnTh: "ระฆัง",
    mnRom: "rakhang",
    mnEn: "bell",
  },
  { th: "ง", rom: "ng", cls: "low", mnTh: "งู", mnRom: "ngu", mnEn: "snake" },
  { th: "จ", rom: "j", cls: "mid", mnTh: "จาน", mnRom: "jaan", mnEn: "plate" },
  {
    th: "ฉ",
    rom: "ch",
    cls: "high",
    mnTh: "ฉิ่ง",
    mnRom: "ching",
    mnEn: "cymbals",
  },
  {
    th: "ช",
    rom: "ch",
    cls: "low",
    mnTh: "ช้าง",
    mnRom: "chaang",
    mnEn: "elephant",
  },
  { th: "ซ", rom: "s", cls: "low", mnTh: "โซ่", mnRom: "so", mnEn: "chain" },
  { th: "ฌ", rom: "ch", cls: "low", mnTh: "เฌอ", mnRom: "choe", mnEn: "tree" },
  { th: "ญ", rom: "y", cls: "low", mnTh: "หญิง", mnRom: "ying", mnEn: "woman" },
  {
    th: "ฎ",
    rom: "d",
    cls: "mid",
    mnTh: "ชฎา",
    mnRom: "chadaa",
    mnEn: "headdress",
  },
  { th: "ฏ", rom: "t", cls: "mid", mnTh: "ปฏัก", mnRom: "patak", mnEn: "goad" },
  {
    th: "ฐ",
    rom: "th",
    cls: "high",
    mnTh: "ฐาน",
    mnRom: "thaan",
    mnEn: "pedestal",
  },
  {
    th: "ฑ",
    rom: "th",
    cls: "low",
    mnTh: "มณโฑ",
    mnRom: "monto",
    mnEn: "Montho",
  },
  {
    th: "ฒ",
    rom: "th",
    cls: "low",
    mnTh: "ผู้เฒ่า",
    mnRom: "phuthao",
    mnEn: "elder",
  },
  {
    th: "ณ",
    rom: "n",
    cls: "low",
    mnTh: "เณร",
    mnRom: "nen",
    mnEn: "novice monk",
  },
  { th: "ด", rom: "d", cls: "mid", mnTh: "เด็ก", mnRom: "dek", mnEn: "child" },
  { th: "ต", rom: "t", cls: "mid", mnTh: "เต่า", mnRom: "tao", mnEn: "turtle" },
  {
    th: "ถ",
    rom: "th",
    cls: "high",
    mnTh: "ถุง",
    mnRom: "thung",
    mnEn: "sack",
  },
  {
    th: "ท",
    rom: "th",
    cls: "low",
    mnTh: "ทหาร",
    mnRom: "thahaan",
    mnEn: "soldier",
  },
  { th: "ธ", rom: "th", cls: "low", mnTh: "ธง", mnRom: "thong", mnEn: "flag" },
  { th: "น", rom: "n", cls: "low", mnTh: "หนู", mnRom: "nu", mnEn: "mouse" },
  {
    th: "บ",
    rom: "b",
    cls: "mid",
    mnTh: "ใบไม้",
    mnRom: "baimai",
    mnEn: "leaf",
  },
  { th: "ป", rom: "p", cls: "mid", mnTh: "ปลา", mnRom: "plaa", mnEn: "fish" },
  {
    th: "ผ",
    rom: "ph",
    cls: "high",
    mnTh: "ผึ้ง",
    mnRom: "phueng",
    mnEn: "bee",
  },
  { th: "ฝ", rom: "f", cls: "high", mnTh: "ฝา", mnRom: "faa", mnEn: "lid" },
  { th: "พ", rom: "ph", cls: "low", mnTh: "พาน", mnRom: "phaan", mnEn: "tray" },
  { th: "ฟ", rom: "f", cls: "low", mnTh: "ฟัน", mnRom: "fan", mnEn: "tooth" },
  {
    th: "ภ",
    rom: "ph",
    cls: "low",
    mnTh: "สำเภา",
    mnRom: "samphao",
    mnEn: "junk boat",
  },
  { th: "ม", rom: "m", cls: "low", mnTh: "ม้า", mnRom: "maa", mnEn: "horse" },
  { th: "ย", rom: "y", cls: "low", mnTh: "ยักษ์", mnRom: "yak", mnEn: "giant" },
  { th: "ร", rom: "r", cls: "low", mnTh: "เรือ", mnRom: "ruea", mnEn: "boat" },
  { th: "ล", rom: "l", cls: "low", mnTh: "ลิง", mnRom: "ling", mnEn: "monkey" },
  { th: "ว", rom: "w", cls: "low", mnTh: "แหวน", mnRom: "waen", mnEn: "ring" },
  {
    th: "ศ",
    rom: "s",
    cls: "high",
    mnTh: "ศาลา",
    mnRom: "saalaa",
    mnEn: "pavilion",
  },
  {
    th: "ษ",
    rom: "s",
    cls: "high",
    mnTh: "ฤๅษี",
    mnRom: "ruesii",
    mnEn: "hermit",
  },
  {
    th: "ส",
    rom: "s",
    cls: "high",
    mnTh: "เสือ",
    mnRom: "suea",
    mnEn: "tiger",
  },
  { th: "ห", rom: "h", cls: "high", mnTh: "หีบ", mnRom: "hiip", mnEn: "chest" },
  { th: "ฬ", rom: "l", cls: "low", mnTh: "จุฬา", mnRom: "julaa", mnEn: "kite" },
  { th: "อ", rom: "-", cls: "mid", mnTh: "อ่าง", mnRom: "aang", mnEn: "basin" },
  {
    th: "ฮ",
    rom: "h",
    cls: "low",
    mnTh: "นกฮูก",
    mnRom: "nokhuuk",
    mnEn: "owl",
  },
];

// 發音功能:用瀏覽器內建的語音合成念出泰文字
function speak(text) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  var utter = new SpeechSynthesisUtterance(text);
  utter.lang = "th-TH";
  utter.rate = 0.85;
  window.speechSynthesis.speak(utter);
}

var consGrid = document.getElementById("consGrid");

consonants.forEach(function (c) {
  var card = document.createElement("div");
  card.className = "cons-card " + c.cls;

  card.innerHTML =
    '<div class="card-inner">' +
    '<div class="face face-front">' +
    (c.obsolete ? '<span class="obsolete-badge">古字</span>' : "") +
    '<div class="letter">' +
    c.th +
    "</div>" +
    '<div class="rom">' +
    c.rom +
    "-</div>" +
    '<button class="speak-btn">🔊</button>' +
    "</div>" +
    '<div class="face face-back">' +
    '<div class="mn-th">' +
    c.mnTh +
    "</div>" +
    '<div class="mn-en">' +
    c.mnRom +
    " · " +
    c.mnEn +
    "</div>" +
    "</div>" +
    "</div>";

  // 點卡片本身 → 翻面
  card.addEventListener("click", function () {
    card.classList.toggle("flipped");
  });

  // 點喇叭按鈕 → 發音,但不要讓翻面事件也跟著觸發
  var speakBtn = card.querySelector(".speak-btn");
  speakBtn.addEventListener("click", function (event) {
    event.stopPropagation();
    speak(c.th);
  });

  consGrid.appendChild(card);
});
