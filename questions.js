
const questions = [
  {
    question: "1/20 : ถ้าเศรษฐกิจแย่ลง ร้านค้าอาจทำอย่างไรกับราคาสินค้า?",
    answers: ["ลดราคา", "ขึ้นราคา", "แจกฟรี", "ไม่เปลี่ยนแปลง"],
    correct: 1,
    explanation: "เมื่อยอดขายน้อยลงและค่าใช้จ่ายในการดำเนินการเท่าเดิมหรือสูงขึ้น ร้านค้าต้องขึ้นราคาสินค้าเพื่อรักษากำไร"
  },
  {
    question: "2/20 : ทำไมเวลาน้ำมันแพง ถึงทำให้ของใช้ในชีวิตประจำวันแพงขึ้นตาม?",
    answers: ["เพราะต้องซื้อน้ำมันเอง", "เพราะการขนส่งต้องใช้น้ำมัน", "เพราะคนเดินทางเยอะ", "เพราะทุกคนรวยขึ้น"],
    correct: 1,
    explanation: "เมื่อราคาน้ำมันขึ้น ต้นทุนการขนส่งก็สูงขึ้น ทำให้ราคาสินค้าต่าง ๆ แพงขึ้นตาม"
  },
  {
    question: "3/20 : ถ้าค่าแรงขึ้น (สินค้า-บริการก็แพงขึ้น) คุณคิดว่าเราจะเหลือเงินมากขึ้นมั้ย?",
    answers: ["แค่ไม่ใช้เงินก็เหลือเงินเยอะขึ้นแล้ว", "ไม่แน่ เพราะของจำเป็นก็แพงขึ้น", "ไม่มีผล", "เรารวยขึ้นแน่นอน"],
    correct: 1,
    explanation: "เมื่อรายได้เพิ่มให้ลองคำนวนเป็นร้อยละ สินค้าและบริการส่วนใหญ่จะแพงขึ้นกว่ารายได้ที่เพิ่ม เงินเหลืออาจไม่พอใช้"
  },
  {
    question: "4/20 : ถ้าเพื่อน ๆ รอบตัวเริ่มเก็บเงินมากขึ้นในภาวะเงินเฟ้อ แปลว่าอะไร?",
    answers: ["สินค้าดีๆ ไม่มีขาย เลยไม่ซื้อ", "เขาไม่ว่างใช้เงิน", "เขากังวลว่าเงินจะด้อยค่า", "เขาแค่อยากรวย"],
    correct: 2,
    explanation: "คนเก็บเงินสำรองมากขึ้นเพราะกลัวเงินจะด้อยค่าหรือของจะแพงขึ้น"
  },
  {
    question: "5/20 : ถ้าเศรษฐกิจดีขึ้น เราควรวางแผนใช้จ่ายแบบไหน?",
    answers: ["ลงทุนให้หมดหน้าตัก เราจะรวย!", "วางแผนเก็บออมเผื่ออนาคตด้วย", "ก็ดีแล้ว ไม่ต้องทำอะไร", "ใช้เงินตามใจชอบเลยทีนี้"],
    correct: 1,
    explanation: "ถึงเศรษฐกิจดี ควรเก็บออมเผื่ออนาคตเพื่อความมั่นคง"
  },
  {
    question: "6/20 : ทำไมการทำบัญชีรายรับรายจ่ายถึงช่วยให้ประหยัดเงินได้?",
    answers: ["เพราะเห็นรายจ่ายแล้วกลัวการใช้เงิน", "เพราะเห็นภาพรวมของการใช้เงิน", "เพราะเห็นโอกาสที่จะรวย", "เพราะทำให้รู้ว่ารายรับไหนที่คุ้มค่า"],
    correct: 1,
    explanation: "การทำบัญชีช่วยให้รู้ว่าเงินเข้ามา-ออกไปยังไง จะได้วางแผนได้อย่างรัดกุม"
  },
  {
    question: "7/20 : ถ้าต้องซื้อของชิ้นใหญ่ คุณจะทำยังไงให้คุ้มค่า?",
    answers: ["ถูกใจก็ซื้อทันที", "เปรียบเทียบคุณภาพก่อน", "ซื้อตามเพื่อน", "ซื้อของที่แพงที่สุด"],
    correct: 1,
    explanation: "เปรียบเทียบคุณภาพก่อนซื้อ ช่วยให้ได้ของถูกใจ คุ้มค่า ประหยัดกว่าในระยะยาว"
  },
  {
    question: "8/20 : ถ้าอยากได้สมาร์ทโฟนเรือธง แต่เงินไม่พอ คุณจะทำยังไง?",
    answers: ["ขอยืมเพื่อน", "อดออมก่อน", "ขอพ่อแม่", "แอบขโมยเงินในบ้าน"],
    correct: 1,
    explanation: "การอดออมก่อน ช่วยให้ได้ของที่อยากได้โดยไม่ต้องก่อหนี้หรือทำเรื่องแย่ๆ"
  },
  {
    question: "9/20 : ถ้าอยากไปท่องเที่ยวไกลๆ คุณควรทำอะไรบ้าง?",
    answers: ["ไปเลย! ใช้เงินเก็บให้หมด", "อดออมและตั้งเป้าหมาย", "ขอยืมเพื่อน", "ไปทวงหนี้เพื่อน"],
    correct: 1,
    explanation: "ตั้งเป้าหมายและออมเงินล่วงหน้าช่วยให้ไปเที่ยวได้อย่างสบายใจ"
  },
  {
    question: "10/20 : ถ้าอยากมีรายได้เพิ่ม คุณจะเริ่มจากอะไร?",
    answers: ["ขอพ่อแม่เพิ่มเงิน", "ลองหางานพิเศษที่ทำได้", "ใช้เงินเก็บไปก่อน หมดแล้วค่อยคิด", "ยืมเงินเพื่อนคนนั้นนิด คนนี้หน่อย"],
    correct: 1,
    explanation: "การหารายได้เองจะช่วยให้รู้จักคุณค่าของเงินและจัดการเงินได้ดี"
  },
  {
    question: "11/20 : ถ้าคุณใช้จ่ายเยอะจนเงินไม่พอออม คุณจะทำยังไง?",
    answers: ["เงินทองของนอกกาย เดี๋ยวหาใหม่", "หาว่าอะไรที่ฟุ่มเฟือยแล้วเลิกใช้จ่ายสิ่งนั้น", "ยืมเพื่อนไง ยืมเพื่อนดีกว่าให้เพื่อนยืมเรา", "อดมื้อกินมื้อไปก่อน ก็ของมันต้องมีนี่"],
    correct: 1,
    explanation: "ลดค่าใช้จ่ายที่ไม่จำเป็นเพื่อเหลือเงินออม"
  },
  {
    question: "12/20 : ถ้าจะซื้อของกับเพื่อน คุณจะเปรียบเทียบราคายังไง?",
    answers: ["เช็กราคาจากหลายร้าน", "ซื้อของที่แพงที่สุด", "ตามใจเพื่อน", "ซื้อของลดราคาเท่านั้น"],
    correct: 0,
    explanation: "การเช็กราคาก่อนซื้อช่วยให้ได้ของคุณภาพดีในราคาเหมาะสม"
  },
  {
    question: "13/20 : ถ้าพ่อแม่ให้ pocket money มา คุณจะใช้ยังไงให้เกิดประโยชน์?",
    answers: ["ใช้หมดทันที", "วางแผนและเก็บออมบางส่วน", "ให้เพื่อนยืมหมด", "ซื้อของเล่นทั้งหมด"],
    correct: 1,
    explanation: "การไม่วางแผนการใช้จ่ายและเก็บออม ทำให้การเงินรุงรัง ชีวิตล้มเหลว"
  },
  {
    question: "14/20 : ทำไมการออมก่อนใช้ถึงสำคัญ?",
    answers: ["ตอนใช้เงินที่เหลือจากออม จะได้ไม่ต้องคิด", "เพื่อสร้างวินัยและป้องกันการใช้เงินเกินตัว", "ออมไว้มากๆ ก็ซื้อของเล่นได้มาก", "ออมไว้ซื้อของฟุ่มเฟือย"],
    correct: 1,
    explanation: "การมีวินัยทางการเงินช่วยให้เราควบคุมการใช้จ่าย รู้จักออม และจัดการเงินได้อย่างมั่นคง"
  },
  {
    question: "15/20 : ถ้าต้องซ่อมมือถือด่วน แต่ไม่มีเงินสำรอง จะเกิดอะไรขึ้น?",
    answers: ["ไม่เป็นไร ไม่มีก็ไม่ใช้", "ลำบาก เพราะติดต่อเรื่องงานหรือค้าขายอะไรไม่ได้", "โซเชียลดีท็อกซ์สักพัก ", "บัตรเครดิตหรือซื้อใหม่แบบผ่อนก็ได้"],
    correct: 1,
    explanation: "ไม่มีเงินสำรองจะทำให้ลำบากในการซ่อมมือถือหรือจ่ายค่าใช้จ่ายฉุกเฉิน"
  },
  {
    question: "16/20 : ถ้าเพื่อนป่วยกะทันหัน แต่ไม่มีเงินออม คุณคิดว่าเขาจะลำบากแค่ไหน?",
    answers: ["ไม่ลำบาก", "ลำบากมาก เพราะไม่มีค่าใช้จ่าย", "ป่วยได้เดี๋ยวก็หายเองได้", "เดี๋ยวเขาก็หายืมคนอื่น"],
    correct: 1,
    explanation: "ถ้าไม่มีเงินออม จะรับมือค่าใช้จ่ายได้ยากมาก"
  },
  {
    question: "17/20 : ถ้ามีเงินเก็บฉุกเฉินไว้ จะช่วยให้เราอุ่นใจยังไง?",
    answers: ["ไม่ช่วยอะไร", "ทำให้มั่นใจ ลดปัญหาเมื่อมีเหตุฉุกเฉิน", "เก็บทำไมขอพ่อแม่อุ่นใจกว่า", "ถ้ารวยจะมีเพื่อนเยอะ"],
    correct: 1,
    explanation: "เงินสำรองช่วยให้เราไม่ต้องกังวลเรื่องเหตุการณ์ฉุกเฉิน"
  },
  {
    question: "18/20 : ถ้าเศรษฐกิจไม่ดี เราควรมีเงินสำรองกี่เดือน?",
    answers: ["1 เดือน", "3-6 เดือน", "10 เดือน", "ไม่ต้องมีก็ได้"],
    correct: 1,
    explanation: "ผู้เชี่ยวชาญด้านการเงิน แนะนำให้มีเงินสำรอง 3-6 เดือนเพื่อความมั่นคง"
  },
  {
    question: "19/20 : ถ้าเพื่อนใช้เงินหมดเร็ว แต่เราเก็บออมไว้ คุณคิดว่าใครจะสบายใจกว่ากัน?",
    answers: ["เพื่อน", "เรา", "สบายใจเหมือนๆ กัน", "พ่อแม่ของเพื่อน"],
    correct: 1,
    explanation: "การมีเงินออมทำให้เราไม่ต้องเครียดเรื่องการเงิน"
  },
  {
    question: "20/20 : ถ้าต้องให้คำแนะนำเพื่อนเรื่องเงินสำรองฉุกเฉิน คุณจะบอกอะไร?",
    answers: ["ไม่ต้องมีหรอกไม่สำคัญ", "เก็บเถอะ เผื่อเหตุการณ์ไม่คาดคิด", "ใช้เงินให้หมดเพื่อความสุข", "จำเป็นก็ยืมเพื่อนสิ"],
    correct: 1,
    explanation: "เงินสำรองช่วยรองรับเหตุการณ์ฉุกเฉินได้ทุกเมื่อ"
  }
];

let currentQuestion = 0;
let score = 0;
let player = "";
let allScores = [];

if (localStorage.getItem('allScores')) {
  allScores = JSON.parse(localStorage.getItem('allScores'));
}

function initScores() {
  const allScoresDiv = document.getElementById('allScores');
  allScoresDiv.classList.remove('hidden');

  if (allScores.length === 0) {
    allScoresDiv.innerHTML = '<h3>🏆 คะแนนของผู้เล่นในกลุ่ม</h3><p>ไม่มีข้อมูลคะแนน</p>';
  } else {
    let html = '<h3>🏆 คะแนนของผู้เล่นในกลุ่ม</h3><ul style="padding-left: 1rem;">';
    allScores.forEach((entry) => {
      html += `<li>${entry.name} — ${entry.score}/${questions.length} คะแนน (${entry.date})</li>`;
    });
    html += '</ul>';
    allScoresDiv.innerHTML = html;
  }
}
initScores();

function startGame() {
  player = document.getElementById('playerName').value.trim();
  if (!player) {
    alert('กรุณากรอกชื่อก่อนเริ่มเกม');
    return;
  }

  document.getElementById('playerInput').classList.add('hidden');

  score = 0;
  currentQuestion = 0;

  document.getElementById('quiz').classList.remove('hidden');
  document.getElementById('score').textContent = `คะแนน: ${score}`;
  document.getElementById('feedback').textContent = '';
  document.getElementById('nextBtn').classList.add('hidden');
  document.getElementById('summary').textContent = '';

  showQuestion();
}

function showQuestion() {
  const questionObj = questions[currentQuestion];
  document.getElementById('question').textContent = questionObj.question;

  const answersDiv = document.getElementById('answers');
  answersDiv.innerHTML = '';

  questionObj.answers.forEach((answer, index) => {
    const btn = document.createElement('button');
    btn.textContent = answer;
    btn.onclick = () => checkAnswer(index);
    answersDiv.appendChild(btn);
  });
}

// โหลดไฟล์เสียง
const correctSound = new Audio('correct.mp3');
const wrongSound = new Audio('wrong.mp3');
const clickSound = new Audio('click.mp3');

function playSound(sound) {
  sound.currentTime = 0;
  sound.play();
}

function checkAnswer(selected) {
  const questionObj = questions[currentQuestion];
  const feedback = document.getElementById('feedback');

  if (selected === questionObj.correct) {
    score++;
    feedback.textContent = '✅ ถูกต้อง!';
    playSound(correctSound);
  } else {
    feedback.textContent = `❌ ผิด! คำตอบที่ถูกต้อง: ${questionObj.answers[questionObj.correct]}`;
    playSound(wrongSound);
  }

  const explanationDiv = document.createElement('div');
  explanationDiv.style.marginTop = '0.5rem';
  explanationDiv.style.color = '#6c757d';
  explanationDiv.textContent = `💡 ${questionObj.explanation}`;
  feedback.appendChild(explanationDiv);

  document.getElementById('score').textContent = `คะแนน: ${score}`;

  const answerButtons = document.querySelectorAll('#answers button');
  answerButtons.forEach(btn => btn.disabled = true);

  document.getElementById('nextBtn').classList.remove('hidden');
}

document.getElementById('nextBtn').onclick = () => {
  playSound(clickSound);
  currentQuestion++;
  if (currentQuestion < questions.length) {
    document.getElementById('feedback').textContent = '';
    document.getElementById('nextBtn').classList.add('hidden');
    showQuestion();
  } else {
    endGame();
  }
};

function endGame() {
  document.getElementById('quiz').classList.add('hidden');
  document.getElementById('playerInput').classList.remove('hidden');

  // ✅ กำหนด comment ก่อน
  let comment = '';
  if (score <= 5) {
    comment = 'คุณมีเงินใช้ แต่ใช้เงินไม่เป็นนะ!';
  } else if (score <= 10) {
    comment = 'ต้องฝึกอีกสักนิด คุณจะรวยได้!';
  } else if (score <= 16) {
    comment = 'ดีมาก! เข้าใกล้ความเป็นคนรวยแล้ว!';
  } else {
    comment = 'สุดยอดเลย ท่านมหาเศรษฐี!';
  }

  // ✅ จากนั้นค่อยบันทึก playerResult พร้อม comment
  const playerResult = {
    name: player,
    score: score,
    comment: comment
  };
  allScores.push(playerResult);
  localStorage.setItem('allScores', JSON.stringify(allScores));

  showAllScores();

  // ✅ สรุปคะแนนล่าสุด
  document.getElementById('summary').textContent = `🎉 คุณได้ ${score}/${questions.length} คะแนน — ${comment}`;
}



function showAllScores() {
  const allScoresDiv = document.getElementById('allScores');
  allScoresDiv.classList.remove('hidden');

  if (allScores.length === 0) {
    allScoresDiv.innerHTML = '<h3>🏆 คะแนนของผู้เล่นในกลุ่ม</h3><p>ไม่มีข้อมูลคะแนน</p>';
  } else {
    let html = '<h3>🏆 คะแนนของผู้เล่นในกลุ่ม</h3><ul style="padding-left: 1rem;">';
    allScores.forEach((entry) => {
      html += `<li>${entry.name} — ${entry.score}/${questions.length} คะแนน — ${entry.comment}</li>`;
    });
    html += '</ul>';
    allScoresDiv.innerHTML = html;
  }
}

document.getElementById('clearScoresBtn').onclick = () => {
  if (confirm('คุณแน่ใจหรือไม่ว่าต้องการลบคะแนนทั้งหมด?')) {
    localStorage.removeItem('allScores');
    allScores = [];
    document.getElementById('allScores').innerHTML = '<h3>🏆 คะแนนของผู้เล่นในกลุ่ม</h3><p>ไม่มีข้อมูลคะแนน</p>';
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // ✅ กด Spacebar → ถัดไป
  document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
      const nextBtn = document.getElementById('nextBtn');
      if (!nextBtn.classList.contains('hidden')) {
        nextBtn.click();
      }
      event.preventDefault();
    }
  });

  // ✅ กด Enter (ทุกแบบ) → เริ่มเกม
  document.getElementById('playerName').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') { // ใช้ key แทน code
      event.preventDefault();
      startGame();
    }
  });
});




