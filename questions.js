const questions = [
  {
    question: "สถานการณ์เศรษฐกิจแบบใดที่อาจทำให้ค่าใช้จ่ายของเราสูงขึ้นอย่างรวดเร็ว?",
    answers: [
      "ภาวะเงินฝืด",
      "ภาวะเงินเฟ้อ",
      "เศรษฐกิจถดถอย",
      "ค่าเงินบาทแข็งค่า"
    ],
    correct: 1,
    explanation: "ภาวะเงินเฟ้อทำให้ราคาสินค้าและบริการโดยรวมเพิ่มขึ้นอย่างต่อเนื่อง ส่งผลให้ค่าใช้จ่ายในชีวิตประจำวันสูงขึ้น"
  },
  {
    question: "ข้อใดคือวิธีที่เหมาะสมในการรับมือกับรายได้ที่ลดลงในช่วงเศรษฐกิจไม่แน่นอน?",
    answers: [
      "ยืมเงินเพิ่ม",
      "ลดค่าใช้จ่ายฟุ่มเฟือย",
      "ใช้บัตรเครดิตให้มากขึ้น",
      "ลงทุนเพิ่ม"
    ],
    correct: 1,
    explanation: "การลดค่าใช้จ่ายที่ไม่จำเป็นเป็นวิธีที่ดีในการปรับตัวต่อรายได้ที่ลดลง"
  },
  {
    question: "การออมเงินสำรองฉุกเฉินควรมีจำนวนเท่าใดจึงจะเหมาะสม?",
    answers: [
      "เท่ากับรายได้ 1 เดือน",
      "อย่างน้อย 3-6 เท่าของรายจ่ายต่อเดือน",
      "เท่ากับหนี้ทั้งหมด",
      "มากที่สุดเท่าที่จะทำได้"
    ],
    correct: 1,
    explanation: "เงินออมสำรองฉุกเฉินควรมีอย่างน้อย 3-6 เท่าของค่าใช้จ่ายรายเดือน เพื่อรองรับเหตุการณ์ไม่คาดคิด"
  },
  {
    question: "ข้อใดไม่ใช่เป้าหมายของการวางแผนการเงิน?",
    answers: [
      "ซื้อของออนไลน์อย่างรวดเร็ว",
      "เตรียมเงินไว้ใช้ยามเกษียณ",
      "ตั้งเป้าหมายการออม",
      "บริหารหนี้ให้เหมาะสม"
    ],
    correct: 0,
    explanation: "เป้าหมายของการวางแผนการเงินควรเน้นที่ความมั่นคงและอนาคต ไม่ใช่เพื่อใช้จ่ายแบบฉับพลัน"
  },
  {
    question: "ข้อใดคือตัวอย่างของรายจ่ายคงที่?",
    answers: [
      "ค่าอาหาร",
      "ค่าน้ำค่าไฟ",
      "ค่างวดรถ",
      "ค่าเดินทาง"
    ],
    correct: 2,
    explanation: "ค่างวดรถเป็นรายจ่ายคงที่ เพราะมีจำนวนที่แน่นอนและต้องจ่ายทุกเดือน"
  },
  {
    question: "การเปรียบเทียบราคาก่อนซื้อสินค้าช่วยให้เราได้ประโยชน์อย่างไร?",
    answers: [
      "ได้ของราคาสูง",
      "เสียเวลา",
      "ประหยัดเงิน",
      "ไม่จำเป็นต้องทำ"
    ],
    correct: 2,
    explanation: "การเปรียบเทียบราคาทำให้เราสามารถเลือกสินค้าที่คุ้มค่าที่สุด ช่วยประหยัดเงิน"
  },
  {
    question: "ถ้าเราไม่สามารถผ่อนชำระหนี้ได้ทัน ควรทำอย่างไร?",
    answers: [
      "หลีกเลี่ยงไม่จ่าย",
      "กู้ยืมเพิ่มเติม",
      "ติดต่อเจ้าหนี้เพื่อเจรจา",
      "หยุดใช้จ่ายทั้งหมด"
    ],
    correct: 2,
    explanation: "การติดต่อเจ้าหนี้เพื่อเจรจาปรับแผนการชำระหนี้เป็นวิธีที่สร้างสรรค์และมีประสิทธิภาพ"
  },
  {
    question: "ทำไมการวางงบประมาณจึงสำคัญ?",
    answers: [
      "เพื่อซื้อของที่ชอบ",
      "เพื่อใช้จ่ายได้หมดในแต่ละเดือน",
      "เพื่อควบคุมรายจ่ายและมีเงินเหลือออม",
      "เพื่อรู้ยอดบัตรเครดิต"
    ],
    correct: 2,
    explanation: "งบประมาณช่วยให้เราควบคุมรายจ่าย วางแผนการออม และไม่ใช้เงินเกินตัว"
  },
  {
    question: "ข้อใดคือประโยชน์ของการมีเป้าหมายทางการเงินที่ชัดเจน?",
    answers: [
      "ใช้จ่ายได้อย่างสนุกสนาน",
      "รู้ว่าควรหาเงินเพิ่มเท่าไหร่",
      "วางแผนและติดตามความคืบหน้าได้ง่าย",
      "ทำให้มีหนี้น้อยลงทันที"
    ],
    correct: 2,
    explanation: "การตั้งเป้าหมายทางการเงินทำให้เรามีทิศทางและสามารถประเมินความก้าวหน้าได้"
  },
  {
    question: "การมีเงินออมสำรองช่วยให้เรารับมือกับอะไรได้บ้าง?",
    answers: [
      "ค่าปรับสายไฟ",
      "ค่าเดินทางวันหยุด",
      "เหตุการณ์ฉุกเฉิน เช่น เจ็บป่วย ว่างงาน",
      "การซื้อของลดราคา"
    ],
    correct: 2,
    explanation: "เงินออมสำรองช่วยรองรับเหตุการณ์ไม่คาดคิด เช่น การเจ็บป่วย ตกงาน หรือเหตุฉุกเฉินอื่น ๆ"
  },
  {
    question: "คุณควรทำอย่างไรหากถูกชักชวนให้ลงทุนที่ให้ผลตอบแทนสูงผิดปกติ?",
    answers: [
      "รีบลงทุนทันที",
      "ขอข้อมูลเพิ่มเติมและตรวจสอบแหล่งที่มา",
      "ชวนเพื่อนมาร่วมลงทุน",
      "ขายทรัพย์สินมาลงทุน"
    ],
    correct: 1,
    explanation: "หากมีข้อเสนอผลตอบแทนสูงเกินจริง ควรตรวจสอบและตั้งข้อสงสัย เพื่อป้องกันการถูกหลอกลวง"
  },
  {
    question: "อะไรคือข้อดีของการออมก่อนใช้?",
    answers: [
      "ทำให้มีเงินพอทุกเดือน",
      "ช่วยสร้างวินัยและลดความเสี่ยงจากการใช้เงินเกิน",
      "ได้ดอกเบี้ยสูง",
      "ไม่ต้องกังวลเรื่องรายได้"
    ],
    correct: 1,
    explanation: "การออมก่อนใช้ช่วยสร้างวินัยการเงิน ทำให้เราไม่ใช้เงินเกินตัว และมีเงินเก็บแน่นอน"
  },
  {
    question: "ข้อใดคือสิ่งแรกที่ควรทำเมื่อเริ่มวางแผนการเงินส่วนบุคคล?",
    answers: [
      "เลือกธนาคาร",
      "จดบันทึกรายรับรายจ่าย",
      "ขอสินเชื่อ",
      "ลงทุนในหุ้น"
    ],
    correct: 1,
    explanation: "การบันทึกรายรับรายจ่ายเป็นพื้นฐานสำคัญในการวางแผนการเงิน ช่วยให้เห็นภาพรวมการใช้เงินของตน"
  },
  {
    question: "การใช้บัตรเครดิตอย่างรับผิดชอบควรทำอย่างไร?",
    answers: [
      "ใช้เต็มวงเงินทุกเดือน",
      "ชำระขั้นต่ำเท่านั้น",
      "ใช้เฉพาะเมื่อจำเป็น และจ่ายเต็มจำนวนตรงเวลา",
      "ใช้เพื่อสะสมแต้มเท่านั้น"
    ],
    correct: 2,
    explanation: "ควรใช้บัตรเครดิตเฉพาะเมื่อจำเป็น และจ่ายคืนเต็มจำนวนภายในกำหนดเวลาเพื่อหลีกเลี่ยงดอกเบี้ย"
  },
  {
    question: "ทำไมต้องมีประกันสุขภาพแม้จะยังไม่เจ็บป่วย?",
    answers: [
      "เพราะรัฐบาลบังคับ",
      "เพื่อขอสินเชื่อ",
      "เพื่อความอุ่นใจในการรองรับค่ารักษาพยาบาล",
      "ใช้ลดหย่อนภาษีเท่านั้น"
    ],
    correct: 2,
    explanation: "ประกันสุขภาพช่วยคุ้มครองค่าใช้จ่ายเมื่อเกิดเจ็บป่วย ช่วยลดภาระทางการเงินอย่างมาก"
  },
  {
    question: "ข้อใดเป็นทักษะทางการเงินที่ควรปลูกฝังตั้งแต่วัยเรียน?",
    answers: [
      "การลงทุนในอสังหาริมทรัพย์",
      "การบริหารภาษี",
      "การออมเงินและรู้จักคุณค่าของเงิน",
      "การขอสินเชื่อ"
    ],
    correct: 2,
    explanation: "การออมและเข้าใจคุณค่าของเงินเป็นพื้นฐานสำคัญในการเสริมสร้างพฤติกรรมทางการเงินที่ดี"
  },
  {
    question: "เหตุผลใดที่ควรตรวจสอบเครดิตบูโรของตนเองเป็นประจำ?",
    answers: [
      "เพื่อดูคะแนนสะสม",
      "เพื่อขอเพิ่มวงเงิน",
      "เพื่อดูว่าเคยมีหนี้อะไรบ้าง",
      "เพื่อป้องกันข้อมูลผิดพลาดและรักษาเครดิต"
    ],
    correct: 3,
    explanation: "การตรวจสอบเครดิตบูโรช่วยป้องกันข้อมูลผิดพลาด รักษาประวัติเครดิต และป้องกันการถูกแอบอ้าง"
  },
  {
    question: "เงินเฟ้อส่งผลต่อชีวิตประจำวันอย่างไร?",
    answers: [
      "ทำให้รายได้เพิ่มขึ้น",
      "ทำให้ราคาสินค้าและค่าครองชีพสูงขึ้น",
      "ทำให้หนี้ลดลง",
      "ทำให้ประหยัดมากขึ้น"
    ],
    correct: 1,
    explanation: "เงินเฟ้อทำให้ราคาสินค้าและบริการเพิ่มขึ้น ส่งผลให้ค่าครองชีพแพงขึ้นและการออมด้อยค่าลง"
  },
  {
    question: "สิ่งใดช่วยป้องกันผลกระทบทางเศรษฐกิจในอนาคตได้ดีที่สุด?",
    answers: [
      "มีบัตรเครดิตหลายใบ",
      "ลงทุนในสินทรัพย์เสี่ยง",
      "วางแผนการเงินและมีเงินสำรอง",
      "ซื้อของเก็บไว้เยอะ ๆ"
    ],
    correct: 2,
    explanation: "การวางแผนการเงินและมีเงินสำรองช่วยให้เรารับมือกับเหตุการณ์ไม่คาดคิดและลดผลกระทบทางเศรษฐกิจได้"
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

