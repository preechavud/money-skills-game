
let salary = 18000;
let month = 1;
let players = [];

document.getElementById('startBtn').addEventListener('click', () => {
  const name1 = document.getElementById('name1').value || "ผู้เล่น 1";
  const name2 = document.getElementById('name2').value || "ผู้เล่น 2";
  players = [
    { name: name1, money: 5000, debt: 60000, historyEl: document.getElementById('history1'), paymentEl: document.getElementById('debtPayment1'), statsEl: document.getElementById('stats1') },
    { name: name2, money: 5000, debt: 60000, historyEl: document.getElementById('history2'), paymentEl: document.getElementById('debtPayment2'), statsEl: document.getElementById('stats2') }
  ];
  document.getElementById('player1Name').textContent = name1;
  document.getElementById('player2Name').textContent = name2;
  document.getElementById('startScreen').classList.add('hidden');
  document.getElementById('gameContainer').classList.remove('hidden');
  document.getElementById('gameTitle').classList.remove('hidden');
  document.getElementById('nextMonthBtn').classList.remove('hidden');
  document.getElementById('nextMonthBtn').disabled = false;
  players.forEach(p => p.paymentEl.disabled = false);
  players.forEach(p => updateStats(p));
});

function updateStats(player) {
  player.statsEl.textContent = `เดือน ${month} | เงินเดือน: ${salary} | เงินเก็บ: ${player.money} | หนี้: ${player.debt}`;
}

document.getElementById('nextMonthBtn').addEventListener('click', nextMonth);

function nextMonth() {
  let monthSummaries = [];
  let winners = [];
  let losers = [];

  players.forEach(player => {
    let thisSalary = salary;
    const randomEvent = events[Math.floor(Math.random() * events.length)];
    let eventText = randomEvent.text;
    if (randomEvent.noSalary) {
      thisSalary = 0;
      eventText += " (ไม่มีเงินเดือน!)";
    }
    player.money += thisSalary;

    let livingCost = Math.floor(thisSalary * (0.6 + Math.random() * 0.2));
    if (thisSalary === 0) {
      livingCost = Math.floor(18000 * (0.6 + Math.random() * 0.2));
    }
    if (player.money >= livingCost) {
      player.money -= livingCost;
    } else {
      let deficit = livingCost - player.money;
      player.money = 0;
      player.debt += deficit;
      eventText += ` | ใช้จ่ายชีวิตไม่พอ! เป็นหนี้เพิ่ม ${deficit}`;
    }
    eventText += ` | ใช้จ่ายชีวิต -${livingCost}`;

    if (randomEvent.cost < 0) {
      player.money += (-randomEvent.cost);
    } else {
      player.money -= randomEvent.cost;
    }

    // ✅ จ่ายเท่าที่มี ไม่เกินเงินเก็บ
    const pay = parseInt(player.paymentEl.value) || 0;
    const realPay = Math.min(pay, player.money);
    player.money -= realPay;
    player.debt -= realPay;
    if (player.debt < 0) player.debt = 0;

    // ✅ ถ้าจ่ายน้อยกว่า 2000 ➜ ดอกเบี้ยเพิ่มที่หนี้
    if (realPay < 2000) {
      const interest = Math.floor(player.debt * 0.1);
      player.debt += interest;
      eventText += ` | ไม่ได้จ่ายขั้นต่ำ! ดอกเบี้ย +${interest}`;
    }

    monthSummaries.push({ player, summary: `<div>เดือน ${month}: ${eventText} | จ่ายหนี้ ${realPay} | เหลือเงินเก็บ: ${player.money} | ยังมีหนี้อีก: ${player.debt}</div>` });

    if (player.debt <= 0) {
      winners.push(player);
    } else if (player.money < 0) {
      player.statsEl.textContent = "แพ้แล้ว!";
      losers.push(player);
    }
  });

  monthSummaries.forEach(s => {
    s.player.historyEl.innerHTML += s.summary;
    s.player.historyEl.scrollTop = s.player.historyEl.scrollHeight;
  });
  players.forEach(p => updateStats(p));

  if (winners.length === 2) {
    alert("เสมอ! ทั้งสองคนปลดหนี้พร้อมกันแล้ว!");
    disableGame();
  } else if (winners.length === 1) {
    endGame(winners[0], "ชนะ");
  } else if (losers.length >= 1) {
    endGame(losers[0], "แพ้");
  } else {
    month++;
  }
}

function endGame(winner, result) {
  document.getElementById('nextMonthBtn').disabled = true;
  players.forEach(p => p.paymentEl.disabled = true);

  let loser = players.find(p => p !== winner);

  let lastEntry = loser.historyEl.lastChild ? loser.historyEl.lastChild.textContent : "";

  let loseReason;
  if (loser.money < 0) {
    loseReason = "แพ้เพราะเงินติดลบ!";
  } else if (winner.debt <= 0) {
    loseReason = "แพ้เพราะอีกฝ่ายปลดหนี้หมดแล้ว!";
  } else {
    loseReason = "แพ้เพราะอีกฝ่ายชนะ!";
  }

  let header = `${loser.name} ${loseReason}`;
  let winMsg = winner.debt <= 0 ?
    `${winner.name} ชนะ! ตอนนี้คุณปลอดหนี้แล้ว ต่อไปเพื่อชีวิตที่มั่นคง ต้องเก็บเงินสำรองไว้ใช้จ่ายให้ได้ 3-6 เดือนนะ!` :
    `${winner.name} ชนะเพราะอีกฝ่ายแพ้! แต่คุณก็ยังมีหนี้เหลืออยู่นะ รีบเคลียร์ให้หมด!`;
  let loseMsg = `${loser.name} ${loseReason} ชีวิตจริงขอให้คุณไม่เป็นหนี้ และบริหารจัดการเงินได้อย่างมีความสุขนะ.`;

  alert(header + "\n\n" + winMsg + "\n\n" + loseMsg);
}

function disableGame() {
  document.getElementById('nextMonthBtn').disabled = true;
  players.forEach(p => p.paymentEl.disabled = true);
}

const events = [
  { text: "ค่ารักษาพยาบาลแม่ -4,000", cost: 4000 },
  { text: "เพื่อนลากไปปาร์ตี้ -5,000", cost: 5000 },
  { text: "ถูกหวย +5,000", cost: -5000 },
  { text: "ซ่อมรถ -3,000", cost: 3000 },
  { text: "โบนัสพิเศษ +3,000", cost: -3000 },
  { text: "ลืมจ่ายบิลค่าไฟ -2,000", cost: 2000 },
  { text: "โดนปรับค่าที่จอดรถ -1,000", cost: 1000 },
  { text: "นายจ้างหักเงินเดือน! -9,000", cost: 9000 },
  { text: "ไม่มีเหตุการณ์พิเศษ", cost: 0 }
];
