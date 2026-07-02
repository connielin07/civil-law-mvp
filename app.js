const STORAGE_KEY = "civilLawMvpProgress";

const knowledgeCards = [
  {
    id: 1,
    title: "18歲成年是什麼意思？",
    tag: "成年制度",
    summary: "滿18歲後，法律上會把你當成可以自己做決定的大人。你可以自己簽很多契約、處理財產，也更需要替自己的選擇負責。",
    example: "像是自己辦手機門號、買機車、租房子，很多事情不再一定要父母先同意。",
    takeaway: "自由變多，責任也變多；簽名前要先看懂內容。",
    source: "法務部《民法成年指南》：成年年齡下修與成年制度主題"
  },
  {
    id: 2,
    title: "簽契約不是只是簽名",
    tag: "契約",
    summary: "契約不一定要很正式才算。你按下同意、口頭答應、線上勾選條款，都可能形成法律上的約定。",
    example: "手機分期、健身房會員、網購付款、租屋合約，都可能讓你必須付錢或履行承諾。",
    takeaway: "不要把『我沒看清楚』當成萬用退場券。",
    source: "法務部《民法成年指南》：契約與法律行為主題"
  },
  {
    id: 3,
    title: "父母還能不能幫我決定？",
    tag: "法定代理",
    summary: "未成年時，很多重要法律行為需要父母或法定代理人同意。成年後，你通常可以自己決定，但也不能每次出事都說要父母負責。",
    example: "17歲買高價商品可能涉及法定代理人同意；18歲後自己簽約，原則上要自己面對後果。",
    takeaway: "成年不是跟家人切斷關係，而是法律上更像自己的負責人。",
    source: "法務部《民法成年指南》：未成年人保護與法定代理主題"
  },
  {
    id: 4,
    title: "打工與金錢責任",
    tag: "債務責任",
    summary: "打工賺錢很棒，但借錢、分期、賠償、押金這些都跟民法有關。你答應要付的錢，可能會變成債務。",
    example: "跟朋友借錢、分期買筆電、打工時造成店裡損失，都可能需要釐清誰該負責。",
    takeaway: "錢的約定最好留下紀錄，別只靠『我們很熟』。",
    source: "法務部《民法成年指南》：財產管理與債務責任主題"
  },
  {
    id: 5,
    title: "租屋、分期、網購要注意什麼？",
    tag: "生活消費",
    summary: "生活中的小決定也可能有法律效果。租屋要看押金、修繕、退租；分期要看總價與違約；網購要看退換貨規則。",
    example: "你看到『每月只要999』就簽下去，可能後面還有綁約、手續費或提前解約費。",
    takeaway: "先問清楚總共要付多少、不能繼續時怎麼辦。",
    source: "法務部《民法成年指南》：契約生活應用與消費情境主題"
  },
  {
    id: 6,
    title: "做錯事可能要賠償",
    tag: "損害賠償",
    summary: "不是只有犯罪才會有法律責任。如果因為故意或不小心讓別人受損，民法上可能要賠錢或恢復原狀。",
    example: "弄壞同學相機、騎車擦撞別人的車、在社群亂傳造成別人損害，都可能引發賠償問題。",
    takeaway: "覺得『我不是故意的』不代表一定不用負責。",
    source: "法務部《民法成年指南》：侵權行為與損害賠償主題"
  }
];

const quizQuestions = [
  {
    question: "小安滿18歲後自己簽了手機分期合約，後來覺得太貴。她可以只說『我爸媽沒有同意，所以不算』就不付嗎？",
    options: ["通常不行，成年後自己簽的契約原則上要自己負責", "一定可以，父母沒同意就都無效", "只要把手機退回去就完全沒事"],
    answerIndex: 0,
    explanation: "成年後原則上可以自己做法律行為，也要自己承擔契約後果。",
    source: "來源：成年制度／契約與法律行為主題"
  },
  {
    question: "你想租套房，房東拿出合約說『大家都這樣簽，不用看』。比較好的做法是？",
    options: ["直接簽，反正大家都一樣", "先看押金、租期、修繕、退租規定，不懂就問", "只看租金金額就好"],
    answerIndex: 1,
    explanation: "租屋合約會影響押金、修繕和退租責任，簽名前要確認重點條款。",
    source: "來源：契約生活應用主題"
  },
  {
    question: "打工時不小心弄壞店裡設備，老闆說要你賠。下列哪個觀念比較正確？",
    options: ["不是故意就一定不用賠", "要看事情怎麼發生、損害多少、雙方責任如何", "老闆說多少就一定要全賠"],
    answerIndex: 1,
    explanation: "民事責任常要看過失、損害和因果關係，不是單靠一句話決定。",
    source: "來源：債務責任／損害賠償主題"
  },
  {
    question: "朋友跟你借3000元，說下個月還。你最適合怎麼做？",
    options: ["留下訊息紀錄或簡單借據，寫清楚金額與還款時間", "完全不用記，朋友之間講義氣", "一定要請律師才可以借"],
    answerIndex: 0,
    explanation: "金錢約定留下紀錄，日後比較容易釐清雙方說好的內容。",
    source: "來源：財產管理與債務責任主題"
  },
  {
    question: "你在社群開玩笑亂傳同學照片，造成對方被嘲笑。這只是不成熟，跟民法無關嗎？",
    options: ["可能有關，如果造成他人權益受損，可能涉及賠償", "完全無關，網路不是現實", "只要刪文就一定沒有責任"],
    answerIndex: 0,
    explanation: "侵害他人權益造成損害時，可能產生民事賠償責任。",
    source: "來源：侵權行為與損害賠償主題"
  }
];

const defaultProgress = {
  completedCards: [],
  quizCompleted: false,
  quizScore: null,
  lastCompletedAt: null
};

let progress = loadProgress();
let currentQuestion = 0;
let score = 0;
let answered = false;

function loadProgress() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? { ...defaultProgress, ...JSON.parse(saved) } : { ...defaultProgress };
  } catch (error) {
    console.warn("Progress parse failed", error);
    return { ...defaultProgress };
  }
}

function saveProgress() {
  progress.lastCompletedAt = new Date().toISOString();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  renderProgress();
  renderResult();
}

function renderProgress() {
  const count = progress.completedCards.length;
  document.getElementById("progressTitle").textContent = `${count} / ${knowledgeCards.length} 張卡完成`;
  document.getElementById("progressFill").style.width = `${(count / knowledgeCards.length) * 100}%`;
  document.getElementById("quizStatus").textContent = progress.quizCompleted
    ? `測驗已完成，最近分數 ${progress.quizScore} / ${quizQuestions.length}`
    : "尚未完成測驗";
}

function renderCards() {
  const grid = document.getElementById("cardsGrid");
  grid.innerHTML = knowledgeCards.map(card => {
    const done = progress.completedCards.includes(card.id);
    return `
      <article class="knowledge-card ${done ? "done" : ""}">
        <div class="card-top">
          <div>
            <span class="tag">${card.tag}</span>
            <h3>${card.title}</h3>
          </div>
          <span class="done-badge">${done ? "已完成" : ""}</span>
        </div>
        <div class="card-body">
          <p>${card.summary}</p>
          <p><strong>生活例子：</strong>${card.example}</p>
          <p><strong>一句記住：</strong>${card.takeaway}</p>
          <div class="source">${card.source}</div>
        </div>
        <button class="btn ${done ? "ghost" : "primary"} full" data-card-id="${card.id}">${done ? "已懂，複習一下" : "我懂了"}</button>
      </article>
    `;
  }).join("");

  grid.querySelectorAll("button[data-card-id]").forEach(button => {
    button.addEventListener("click", () => {
      const cardId = Number(button.dataset.cardId);
      if (!progress.completedCards.includes(cardId)) {
        progress.completedCards.push(cardId);
        saveProgress();
        renderCards();
      }
    });
  });
}

function renderQuestion() {
  answered = false;
  const question = quizQuestions[currentQuestion];
  document.getElementById("questionCounter").textContent = `第 ${currentQuestion + 1} 題 / 共 ${quizQuestions.length} 題`;
  document.getElementById("scorePreview").textContent = `目前答對 ${score} 題`;
  document.getElementById("questionText").textContent = question.question;
  document.getElementById("feedback").hidden = true;
  document.getElementById("feedback").innerHTML = "";
  document.getElementById("nextBtn").disabled = true;
  document.getElementById("nextBtn").textContent = currentQuestion === quizQuestions.length - 1 ? "看結果" : "下一題";

  const options = document.getElementById("options");
  options.innerHTML = question.options.map((option, index) => `
    <button class="option-btn" data-option-index="${index}">${String.fromCharCode(65 + index)}. ${option}</button>
  `).join("");

  options.querySelectorAll(".option-btn").forEach(button => {
    button.addEventListener("click", () => chooseAnswer(Number(button.dataset.optionIndex)));
  });
}

function chooseAnswer(index) {
  if (answered) return;
  answered = true;
  const question = quizQuestions[currentQuestion];
  const isCorrect = index === question.answerIndex;
  if (isCorrect) score += 1;

  document.querySelectorAll(".option-btn").forEach((button, buttonIndex) => {
    button.disabled = true;
    if (buttonIndex === question.answerIndex) button.classList.add("correct");
    if (buttonIndex === index && !isCorrect) button.classList.add("wrong");
  });

  const feedback = document.getElementById("feedback");
  feedback.hidden = false;
  feedback.innerHTML = `<strong>${isCorrect ? "答對了！" : "差一點！"}</strong><br>${question.explanation}<br><small>${question.source}</small>`;
  document.getElementById("scorePreview").textContent = `目前答對 ${score} 題`;
  document.getElementById("nextBtn").disabled = false;
}

function nextQuestion() {
  if (currentQuestion < quizQuestions.length - 1) {
    currentQuestion += 1;
    renderQuestion();
  } else {
    progress.quizCompleted = true;
    progress.quizScore = score;
    saveProgress();
    location.hash = "result";
  }
}

function resetQuiz() {
  currentQuestion = 0;
  score = 0;
  renderQuestion();
  location.hash = "quiz";
}

function renderResult() {
  const title = document.getElementById("resultTitle");
  const text = document.getElementById("resultText");
  const scoreBox = document.getElementById("resultScore");
  const cardsBox = document.getElementById("resultCards");

  cardsBox.textContent = `${progress.completedCards.length} / ${knowledgeCards.length}`;
  if (!progress.quizCompleted) {
    title.textContent = "完成測驗後會顯示結果";
    text.textContent = "先看知識卡或直接挑戰情境測驗都可以。";
    scoreBox.textContent = "—";
    return;
  }

  scoreBox.textContent = `${progress.quizScore} / ${quizQuestions.length}`;
  if (progress.quizScore <= 2) {
    title.textContent = "先別緊張，你已經開始有概念了";
    text.textContent = "建議回到知識卡，把契約、金錢責任與損害賠償再看一次。";
  } else if (progress.quizScore <= 4) {
    title.textContent = "不錯！你有基本生活法律敏感度";
    text.textContent = "遇到簽約、分期、租屋時，記得先看懂再答應。";
  } else {
    title.textContent = "太強了，你很適合當朋友的防踩坑提醒員";
    text.textContent = "你已掌握 MVP 的重點，下一步可以學更完整的成年後權利義務。";
  }
}

function clearProgress() {
  if (!confirm("確定要清除所有學習進度與測驗分數嗎？")) return;
  localStorage.removeItem(STORAGE_KEY);
  progress = { ...defaultProgress };
  resetQuiz();
  renderCards();
  renderProgress();
  renderResult();
}

function init() {
  renderProgress();
  renderCards();
  renderQuestion();
  renderResult();
  document.getElementById("nextBtn").addEventListener("click", nextQuestion);
  document.getElementById("retryBtn").addEventListener("click", resetQuiz);
  document.getElementById("clearBtn").addEventListener("click", clearProgress);
}

document.addEventListener("DOMContentLoaded", init);
