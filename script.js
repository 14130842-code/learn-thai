// 44 個子音資料(多加 mnTh 助記詞、mnRom 助記詞拼音、mnCh 助記詞意思)
// 44 個子音資料
var consonants = [
  { th: "ก", rom: "g", cls: "mid", mnTh: "ไก่", mnRom: "gai", mnCh: "雞" },
  { th: "ข", rom: "kh", cls: "high", mnTh: "ไข่", mnRom: "khai", mnCh: "蛋" },
  {
    th: "ฃ",
    rom: "kh",
    cls: "high",
    mnTh: "ขวด",
    mnRom: "khuat",
    mnCh: "瓶子",
    obsolete: true,
  },
  {
    th: "ค",
    rom: "kh",
    cls: "low",
    mnTh: "ควาย",
    mnRom: "khwaai",
    mnCh: "水牛",
  },
  {
    th: "ฅ",
    rom: "kh",
    cls: "low",
    mnTh: "คน",
    mnRom: "khon",
    mnCh: "人",
    obsolete: true,
  },
  {
    th: "ฆ",
    rom: "kh",
    cls: "low",
    mnTh: "ระฆัง",
    mnRom: "rakhang",
    mnCh: "鐘",
  },
  { th: "ง", rom: "ng", cls: "low", mnTh: "งู", mnRom: "ngu", mnCh: "蛇" },
  { th: "จ", rom: "j", cls: "mid", mnTh: "จาน", mnRom: "jaan", mnCh: "盤子" },
  { th: "ฉ", rom: "ch", cls: "high", mnTh: "ฉิ่ง", mnRom: "ching", mnCh: "鈸" },
  {
    th: "ช",
    rom: "ch",
    cls: "low",
    mnTh: "ช้าง",
    mnRom: "chaang",
    mnCh: "大象",
  },
  { th: "ซ", rom: "s", cls: "low", mnTh: "โซ่", mnRom: "so", mnCh: "鏈子" },
  { th: "ฌ", rom: "ch", cls: "low", mnTh: "เฌอ", mnRom: "choe", mnCh: "樹" },
  { th: "ญ", rom: "y", cls: "low", mnTh: "หญิง", mnRom: "ying", mnCh: "女人" },
  { th: "ฎ", rom: "d", cls: "mid", mnTh: "ชฎา", mnRom: "chadaa", mnCh: "頭飾" },
  {
    th: "ฏ",
    rom: "t",
    cls: "mid",
    mnTh: "ปฏัก",
    mnRom: "patak",
    mnCh: "趕象棒",
  },
  {
    th: "ฐ",
    rom: "th",
    cls: "high",
    mnTh: "ฐาน",
    mnRom: "thaan",
    mnCh: "底座",
  },
  {
    th: "ฑ",
    rom: "th",
    cls: "low",
    mnTh: "มณโฑ",
    mnRom: "monto",
    mnCh: "孟陀(人名)",
  },
  {
    th: "ฒ",
    rom: "th",
    cls: "low",
    mnTh: "ผู้เฒ่า",
    mnRom: "phuthao",
    mnCh: "老人",
  },
  { th: "ณ", rom: "n", cls: "low", mnTh: "เณร", mnRom: "nen", mnCh: "沙彌" },
  { th: "ด", rom: "d", cls: "mid", mnTh: "เด็ก", mnRom: "dek", mnCh: "小孩" },
  { th: "ต", rom: "t", cls: "mid", mnTh: "เต่า", mnRom: "tao", mnCh: "烏龜" },
  {
    th: "ถ",
    rom: "th",
    cls: "high",
    mnTh: "ถุง",
    mnRom: "thung",
    mnCh: "袋子",
  },
  {
    th: "ท",
    rom: "th",
    cls: "low",
    mnTh: "ทหาร",
    mnRom: "thahaan",
    mnCh: "士兵",
  },
  { th: "ธ", rom: "th", cls: "low", mnTh: "ธง", mnRom: "thong", mnCh: "旗子" },
  { th: "น", rom: "n", cls: "low", mnTh: "หนู", mnRom: "nu", mnCh: "老鼠" },
  {
    th: "บ",
    rom: "b",
    cls: "mid",
    mnTh: "ใบไม้",
    mnRom: "baimai",
    mnCh: "葉子",
  },
  { th: "ป", rom: "p", cls: "mid", mnTh: "ปลา", mnRom: "plaa", mnCh: "魚" },
  {
    th: "ผ",
    rom: "ph",
    cls: "high",
    mnTh: "ผึ้ง",
    mnRom: "phueng",
    mnCh: "蜜蜂",
  },
  { th: "ฝ", rom: "f", cls: "high", mnTh: "ฝา", mnRom: "faa", mnCh: "蓋子" },
  {
    th: "พ",
    rom: "ph",
    cls: "low",
    mnTh: "พาน",
    mnRom: "phaan",
    mnCh: "高腳盤",
  },
  { th: "ฟ", rom: "f", cls: "low", mnTh: "ฟัน", mnRom: "fan", mnCh: "牙齒" },
  {
    th: "ภ",
    rom: "ph",
    cls: "low",
    mnTh: "สำเภา",
    mnRom: "samphao",
    mnCh: "帆船",
  },
  { th: "ม", rom: "m", cls: "low", mnTh: "ม้า", mnRom: "maa", mnCh: "馬" },
  { th: "ย", rom: "y", cls: "low", mnTh: "ยักษ์", mnRom: "yak", mnCh: "巨人" },
  { th: "ร", rom: "r", cls: "low", mnTh: "เรือ", mnRom: "ruea", mnCh: "船" },
  { th: "ล", rom: "l", cls: "low", mnTh: "ลิง", mnRom: "ling", mnCh: "猴子" },
  { th: "ว", rom: "w", cls: "low", mnTh: "แหวน", mnRom: "waen", mnCh: "戒指" },
  {
    th: "ศ",
    rom: "s",
    cls: "high",
    mnTh: "ศาลา",
    mnRom: "saalaa",
    mnCh: "涼亭",
  },
  {
    th: "ษ",
    rom: "s",
    cls: "high",
    mnTh: "ฤๅษี",
    mnRom: "ruesii",
    mnCh: "隱士",
  },
  { th: "ส", rom: "s", cls: "high", mnTh: "เสือ", mnRom: "suea", mnCh: "老虎" },
  { th: "ห", rom: "h", cls: "high", mnTh: "หีบ", mnRom: "hiip", mnCh: "箱子" },
  { th: "ฬ", rom: "l", cls: "low", mnTh: "จุฬา", mnRom: "julaa", mnCh: "風箏" },
  { th: "อ", rom: "-", cls: "mid", mnTh: "อ่าง", mnRom: "aang", mnCh: "盆子" },
  {
    th: "ฮ",
    rom: "h",
    cls: "low",
    mnTh: "นกฮูก",
    mnRom: "nokhuuk",
    mnCh: "貓頭鷹",
  },
];

// 母音資料(len: short 短音 / long 長音 / special 特殊)
var vowels = [
  { th: "อะ", rom: "a", len: "short" },
  { th: "อา", rom: "aa", len: "long" },
  { th: "อิ", rom: "i", len: "short" },
  { th: "อี", rom: "ii", len: "long" },
  { th: "อึ", rom: "ue", len: "short" },
  { th: "อื", rom: "uue", len: "long" },
  { th: "อุ", rom: "u", len: "short" },
  { th: "อู", rom: "uu", len: "long" },
  { th: "เอะ", rom: "e", len: "short" },
  { th: "เอ", rom: "ee", len: "long" },
  { th: "แอะ", rom: "ae", len: "short" },
  { th: "แอ", rom: "aae", len: "long" },
  { th: "โอะ", rom: "o", len: "short" },
  { th: "โอ", rom: "oo", len: "long" },
  { th: "เอาะ", rom: "or", len: "short" },
  { th: "ออ", rom: "oor", len: "long" },
  { th: "เอียะ", rom: "ia", len: "short" },
  { th: "เอีย", rom: "iia", len: "long" },
  { th: "เอือะ", rom: "uea", len: "short" },
  { th: "เอือ", rom: "uuea", len: "long" },
  { th: "อัวะ", rom: "ua", len: "short" },
  { th: "อัว", rom: "uua", len: "long" },
  { th: "อำ", rom: "am", len: "special" },
  { th: "ไอ", rom: "ai", len: "special" },
  { th: "ใอ", rom: "ai", len: "special" },
  { th: "เอา", rom: "ao", len: "special" },
];

var lenLabel = {
  short: "short 短音",
  long: "long 長音",
  special: "special 特殊",
};

var vowelGrid = document.getElementById("vowelGrid");

vowels.forEach(function (v) {
  var card = document.createElement("div");
  card.className = "vowel-card";
  card.innerHTML =
    "<div>" +
    '<span class="th">' +
    v.th +
    "</span>" +
    '<span class="meta">' +
    '<span class="len-tag">' +
    lenLabel[v.len] +
    "</span> /" +
    v.rom +
    "/" +
    "</span>" +
    "</div>" +
    '<button class="speak-btn">🔊</button>';

  card.querySelector(".speak-btn").addEventListener("click", function () {
    speak(v.th);
  });

  vowelGrid.appendChild(card);
});

// 聲調資料(curve 是 SVG 音高曲線的路徑)
var tones = [
  {
    th: "อา",
    name: "สามัญ",
    nameZh: "平聲",
    mark: "不加符號",
    rom: "aa",
    curve: "M8,32 L92,32",
  },
  {
    th: "อ่า",
    name: "เอก",
    nameZh: "低聲",
    mark: "ไม้เอก ่",
    rom: "àa",
    curve: "M8,46 C30,46 60,46 92,44",
  },
  {
    th: "อ้า",
    name: "โท",
    nameZh: "降聲",
    mark: "ไม้โท ้",
    rom: "âa",
    curve: "M8,14 C40,16 60,48 92,50",
  },
  {
    th: "อ๊า",
    name: "ตรี",
    nameZh: "高聲",
    mark: "ไม้ตรี ๊",
    rom: "áa",
    curve: "M8,36 C34,10 60,8 92,8",
  },
  {
    th: "อ๋า",
    name: "จัตวา",
    nameZh: "升聲",
    mark: "ไม้จัตวา ๋",
    rom: "ǎa",
    curve: "M8,34 C26,54 46,54 60,30 C72,12 82,8 92,8",
  },
];

var toneGrid = document.getElementById("toneGrid");

tones.forEach(function (t) {
  var card = document.createElement("div");
  card.className = "tone-card";
  card.innerHTML =
    '<div class="th">' +
    t.th +
    "</div>" +
    '<svg viewBox="0 0 100 56" width="100" height="56">' +
    '<path d="' +
    t.curve +
    '" fill="none" stroke="#d4a73d" stroke-width="3" stroke-linecap="round"/>' +
    "</svg>" +
    '<div class="name">' +
    t.nameZh +
    "</div>" +
    '<div class="rom">/' +
    t.rom +
    "/ · " +
    t.name +
    "</div>" +
    '<div class="mark">' +
    t.mark +
    "</div>" +
    '<button class="speak-btn">🔊</button>';

  card.querySelector(".speak-btn").addEventListener("click", function () {
    speak(t.th);
  });

  toneGrid.appendChild(card);
});

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
    '<div class="mn-ch">' +
    c.mnRom +
    " · " +
    c.mnCh +
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
