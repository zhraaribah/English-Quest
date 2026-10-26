function startQuest() {
    window.location.href = "quest.html";
}

function scrollToFeatures() {
    document.getElementById("features").scrollIntoView({
        behavior: "smooth"
    });
}

function startMission(mission) {
    alert("🚀 Mission: " + mission + " akan segera dimulai!");
}


const vocabularyQuestions = [
    {
        question: "What is the meaning of 'Beautiful'?",
        answers: ["Cantik", "Cepat", "Marah", "Kecil"],
        correct: "Cantik"
    },
    {
        question: "What is the meaning of 'Brave'?",
        answers: ["Takut", "Berani", "Sedih", "Lapar"],
        correct: "Berani"
    },
    {
        question: "What is the meaning of 'Hungry'?",
        answers: ["Haus", "Mengantuk", "Lapar", "Senang"],
        correct: "Lapar"
    },
    {
        question: "What is the meaning of 'Clever'?",
        answers: ["Pintar", "Lemah", "Tinggi", "Lambat"],
        correct: "Pintar"
    },
    {
        question: "What is the meaning of 'Journey'?",
        answers: ["Perjalanan", "Rumah", "Sekolah", "Makanan"],
        correct: "Perjalanan"
    },
    {
        question: "What is the meaning of 'Happy'?",
        answers: ["Sedih", "Bahagia", "Marah", "Takut"],
        correct: "Bahagia"
    },
    {
        question: "What is the meaning of 'Angry'?",
        answers: ["Senang", "Marah", "Tenang", "Lapar"],
        correct: "Marah"
    },
    {
        question: "What is the meaning of 'Small'?",
        answers: ["Besar", "Panjang", "Kecil", "Tinggi"],
        correct: "Kecil"
    },
    {
        question: "What is the meaning of 'Large'?",
        answers: ["Kecil", "Besar", "Pendek", "Tipis"],
        correct: "Besar"
    },
    {
        question: "What is the meaning of 'Fast'?",
        answers: ["Cepat", "Lambat", "Berat", "Ringan"],
        correct: "Cepat"
    },
    {
        question: "What is the meaning of 'Slow'?",
        answers: ["Cepat", "Lambat", "Kuat", "Rajin"],
        correct: "Lambat"
    },
    {
        question: "What is the meaning of 'Strong'?",
        answers: ["Lemah", "Kuat", "Kecil", "Takut"],
        correct: "Kuat"
    },
    {
        question: "What is the meaning of 'Weak'?",
        answers: ["Kuat", "Lemah", "Berani", "Pintar"],
        correct: "Lemah"
    },
    {
        question: "What is the meaning of 'Beautiful'?",
        answers: ["Jelek", "Cantik", "Kotor", "Lama"],
        correct: "Cantik"
    },
    {
        question: "What is the meaning of 'Difficult'?",
        answers: ["Mudah", "Sulit", "Cepat", "Senang"],
        correct: "Sulit"
    },
    {
        question: "What is the meaning of 'Easy'?",
        answers: ["Sulit", "Mudah", "Lambat", "Berat"],
        correct: "Mudah"
    },
    {
        question: "What is the meaning of 'Clean'?",
        answers: ["Kotor", "Bersih", "Basah", "Penuh"],
        correct: "Bersih"
    },
    {
        question: "What is the meaning of 'Dirty'?",
        answers: ["Bersih", "Kotor", "Indah", "Kering"],
        correct: "Kotor"
    },
    {
        question: "What is the meaning of 'Kind'?",
        answers: ["Jahat", "Baik hati", "Marah", "Takut"],
        correct: "Baik hati"
    },
    {
        question: "What is the meaning of 'Friendly'?",
        answers: ["Ramah", "Pemalu", "Marah", "Sedih"],
        correct: "Ramah"
    },
    {
        question: "What is the meaning of 'Difficult'?",
        answers: ["Sulit", "Mudah", "Pendek", "Kecil"],
        correct: "Sulit"
    },
    {
        question: "What is the meaning of 'Important'?",
        answers: ["Tidak penting", "Penting", "Lambat", "Kecil"],
        correct: "Penting"
    },
    {
        question: "What is the meaning of 'Healthy'?",
        answers: ["Sakit", "Sehat", "Lapar", "Lelah"],
        correct: "Sehat"
    },
    {
        question: "What is the meaning of 'Tired'?",
        answers: ["Segar", "Lelah", "Bahagia", "Kuat"],
        correct: "Lelah"
    },
    {
        question: "What is the meaning of 'Sleepy'?",
        answers: ["Mengantuk", "Lapar", "Marah", "Berani"],
        correct: "Mengantuk"
    },
    {
        question: "What is the meaning of 'Thirsty'?",
        answers: ["Lapar", "Haus", "Lelah", "Sedih"],
        correct: "Haus"
    },
    {
        question: "What is the meaning of 'Early'?",
        answers: ["Terlambat", "Awal", "Cepat", "Lama"],
        correct: "Awal"
    },
    {
        question: "What is the meaning of 'Late'?",
        answers: ["Awal", "Terlambat", "Cepat", "Pagi"],
        correct: "Terlambat"
    },
    {
        question: "What is the meaning of 'Always'?",
        answers: ["Tidak pernah", "Selalu", "Kadang-kadang", "Jarang"],
        correct: "Selalu"
    },
    {
        question: "What is the meaning of 'Never'?",
        answers: ["Selalu", "Sering", "Tidak pernah", "Kadang-kadang"],
        correct: "Tidak pernah"
    },
    {
        question: "What is the meaning of 'Usually'?",
        answers: ["Biasanya", "Tidak pernah", "Jarang", "Sekarang"],
        correct: "Biasanya"
    },
    {
        question: "What is the meaning of 'Sometimes'?",
        answers: ["Selalu", "Kadang-kadang", "Tidak pernah", "Biasanya"],
        correct: "Kadang-kadang"
    },
    {
        question: "What is the meaning of 'School'?",
        answers: ["Rumah", "Sekolah", "Pasar", "Taman"],
        correct: "Sekolah"
    },
    {
        question: "What is the meaning of 'Teacher'?",
        answers: ["Murid", "Guru", "Dokter", "Polisi"],
        correct: "Guru"
    },
    {
        question: "What is the meaning of 'Student'?",
        answers: ["Guru", "Siswa", "Dokter", "Petani"],
        correct: "Siswa"
    },
    {
        question: "What is the meaning of 'Library'?",
        answers: ["Perpustakaan", "Kantin", "Kelas", "Lapangan"],
        correct: "Perpustakaan"
    },
    {
        question: "What is the meaning of 'Hospital'?",
        answers: ["Sekolah", "Rumah sakit", "Pasar", "Toko"],
        correct: "Rumah sakit"
    },
    {
        question: "What is the meaning of 'Market'?",
        answers: ["Pasar", "Sekolah", "Rumah", "Taman"],
        correct: "Pasar"
    },
    {
        question: "What is the meaning of 'Garden'?",
        answers: ["Kebun", "Dapur", "Kamar", "Sekolah"],
        correct: "Kebun"
    },
    {
        question: "What is the meaning of 'Breakfast'?",
        answers: ["Makan malam", "Sarapan", "Makan siang", "Camilan"],
        correct: "Sarapan"
    },
    {
        question: "What is the meaning of 'Dinner'?",
        answers: ["Sarapan", "Makan siang", "Makan malam", "Minuman"],
        correct: "Makan malam"
    },
    {
        question: "What is the meaning of 'Water'?",
        answers: ["Air", "Susu", "Jus", "Kopi"],
        correct: "Air"
    },
    {
        question: "What is the meaning of 'Food'?",
        answers: ["Minuman", "Makanan", "Buah", "Sayuran"],
        correct: "Makanan"
    },
    {
        question: "What is the meaning of 'Book'?",
        answers: ["Buku", "Pensil", "Meja", "Tas"],
        correct: "Buku"
    },
    {
        question: "What is the meaning of 'Pencil'?",
        answers: ["Buku", "Pensil", "Penghapus", "Penggaris"],
        correct: "Pensil"
    },
    {
        question: "What is the meaning of 'Chair'?",
        answers: ["Meja", "Kursi", "Pintu", "Jendela"],
        correct: "Kursi"
    },
    {
        question: "What is the meaning of 'Window'?",
        answers: ["Pintu", "Jendela", "Lantai", "Atap"],
        correct: "Jendela"
    },
    {
        question: "What is the meaning of 'Morning'?",
        answers: ["Malam", "Pagi", "Siang", "Sore"],
        correct: "Pagi"
    },
    {
        question: "What is the meaning of 'Night'?",
        answers: ["Pagi", "Siang", "Sore", "Malam"],
        correct: "Malam"
    },
    {
        question: "What is the meaning of 'Friend'?",
        answers: ["Teman", "Guru", "Saudara", "Tetangga"],
        correct: "Teman"
    },
    {
        question: "What is the meaning of 'Family'?",
        answers: ["Teman", "Keluarga", "Guru", "Tetangga"],
        correct: "Keluarga"
    }
];


let quizQuestions = [];

function shuffleArray(array) {
    const shuffled = [...array];

    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled;
}

quizQuestions = shuffleArray(vocabularyQuestions).slice(0, 5);


let currentQuestion = 0;
let score = 0;
let xp = Number(localStorage.getItem("englishQuestXP")) || 0;


function loadQuestion() {
    const question = quizQuestions[currentQuestion];

    document.getElementById("question").textContent =
        question.question;

    document.getElementById("question-number").textContent =
        "Question " + (currentQuestion + 1) + " / " + quizQuestions.length;

    document.getElementById("score").textContent =
        "Score: " + score;

    document.getElementById("progress").style.width =
        ((currentQuestion + 1) / quizQuestions.length) * 100 + "%";

    const answersContainer = document.getElementById("answers");
    answersContainer.innerHTML = "";

    question.answers.forEach(answer => {
        const button = document.createElement("button");

        button.textContent = answer;
        button.className = "answer-button";

        button.onclick = function() {
            checkAnswer(button, answer);
        };

        answersContainer.appendChild(button);
    });

    document.getElementById("feedback").textContent = "";
    document.getElementById("next-button").style.display = "none";
}


function checkAnswer(button, answer) {

    const question = quizQuestions[currentQuestion];

    const buttons = document.querySelectorAll(".answer-button");

    buttons.forEach(btn => {
        btn.disabled = true;
    });


    if (answer === question.correct) {

        button.classList.add("correct");

        document.getElementById("feedback").textContent =
            "🎉 Correct! +20 XP";

       score += 20;
       xp += 20;

       localStorage.setItem("englishQuestXP", xp);

    } else {

        button.classList.add("wrong");

        document.getElementById("feedback").textContent =
            "❌ Wrong! The correct answer is " + question.correct;

    }


    document.getElementById("score").textContent =
        "Score: " + score;

    document.getElementById("xp").textContent =
        xp;

    document.getElementById("next-button").style.display =
        "block";
}


function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < quizQuestions.length) {
        loadQuestion();
    } else {
        finishQuiz();
    }
}


function finishQuiz() {

    document.getElementById("question").textContent =
        "🎉 Quest Complete!";

    document.getElementById("answers").innerHTML =
        "<h3>You earned " + xp + " XP!</h3>";

    document.getElementById("feedback").textContent =
        "🌟 Great job, Explorer!";

    document.getElementById("next-button").textContent =
        "Back to Quest Map →";

    document.getElementById("next-button").onclick = function() {
        window.location.href = "quest.html";
    };

}


function updateMapXP() {
    const mapXP = document.getElementById("map-xp");

    if (mapXP) {
        mapXP.textContent =
            Number(localStorage.getItem("englishQuestXP")) || 0;
    }
}

updateMapXP();


function updateAchievements() {

    const currentXP =
        Number(localStorage.getItem("englishQuestXP")) || 0;


    const beginnerStatus =
        document.getElementById("beginner-status");

    const vocabularyStatus =
        document.getElementById("vocabulary-status");

    const explorerStatus =
        document.getElementById("explorer-status");

    const grammarStatus =
        document.getElementById("grammar-status");

    const listeningStatus =
        document.getElementById("listening-status");

    const detectiveStatus =
        document.getElementById("detective-status");

    const masterStatus =
        document.getElementById("master-status");


    if (beginnerStatus) {
        beginnerStatus.textContent =
            currentXP >= 1
            ? "🏆 Unlocked!"
            : "🔒 Not unlocked";
    }


    if (vocabularyStatus) {
        vocabularyStatus.textContent =
            currentXP >= 40
            ? "🏆 Unlocked!"
            : "🔒 Not unlocked";
    }


    if (explorerStatus) {
        explorerStatus.textContent =
            currentXP >= 100
            ? "🏆 Unlocked!"
            : "🔒 Not unlocked";
    }


    if (grammarStatus) {
        grammarStatus.textContent =
            currentXP >= 200
            ? "🏆 Unlocked!"
            : "🔒 Not unlocked";
    }


    if (listeningStatus) {
        listeningStatus.textContent =
            currentXP >= 300
            ? "🏆 Unlocked!"
            : "🔒 Not unlocked";
    }


    if (detectiveStatus) {
        detectiveStatus.textContent =
            currentXP >= 400
            ? "🏆 Unlocked!"
            : "🔒 Not unlocked";
    }


    if (masterStatus) {
        masterStatus.textContent =
            currentXP >= 550
            ? "🏆 Unlocked!"
            : "🔒 Not unlocked";
    }
}


updateAchievements();


function updateAchievementXP() {

    const currentXP =
        Number(localStorage.getItem("englishQuestXP")) || 0;

    const achievementXP =
        document.getElementById("achievement-xp");

    const totalXP =
        document.getElementById("total-xp");

    if (achievementXP) {
        achievementXP.textContent = currentXP;
    }

    if (totalXP) {
        totalXP.textContent = currentXP;
    }
}

updateAchievementXP();


function updateAchievementStyles() {

    const achievements = [
        {
            id: "beginner-status",
            xp: 1
        },
        {
            id: "vocabulary-status",
            xp: 40
        },
        {
            id: "explorer-status",
            xp: 100
        },
        {
            id: "grammar-status",
            xp: 200
        },
        {
            id: "listening-status",
            xp: 300
        },
        {
            id: "detective-status",
            xp: 400
        },
        {
            id: "master-status",
            xp: 550
        }
    ];

    const currentXP =
        Number(localStorage.getItem("englishQuestXP")) || 0;

    achievements.forEach(function (achievement) {

        const status =
            document.getElementById(achievement.id);

        if (!status) return;

        const card =
            status.closest(".achievement-card");

        if (!card) return;

        if (currentXP >= achievement.xp) {
            card.classList.remove("locked");
            card.classList.add("unlocked");
        } else {
            card.classList.remove("unlocked");
            card.classList.add("locked");
        }
    });
}

updateAchievementStyles();


if (document.getElementById("question")) {
    loadQuestion();
}


const grammarQuestions = [
    { 
        question: "She ___ to school every day.", 
      answers: ["go", "goes", "going", "gone"], 
      correct: "goes" 
    },
    { 
        question: "They ___ playing football now.", 
      answers: ["is", "am", "are", "be"], 
      correct: "are" 
    },
    { 
        question: "I ___ a student.", 
      answers: ["is", "are", "am", "be"], 
      correct: "am" 
    },
    { 
        question: "He ___ breakfast every morning.", 
      answers: ["eat", "eats", "eating", "eaten"], 
      correct: "eats" 
    },
    { 
        question: "We ___ English yesterday.", 
      answers: ["study", "studies", "studied", "studying"], 
      correct: "studied" 
    },
    { 
        question: "My mother ___ cooking now.", 
      answers: ["is", "are", "am", "be"], 
      correct: "is" 
    },
    { 
        question: "The boys ___ in the park every Sunday.", 
      answers: ["plays", "play", "playing", "played"], 
      correct: "play" 
    },
    { 
        question: "Rina ___ a new bag last week.", 
      answers: ["buy", "buys", "bought", "buying"], 
      correct: "bought" 
    },
    { 
        question: "I ___ watching TV when you called.", 
      answers: ["was", "were", "am", "is"], 
      correct: "was" 
    },
    { 
        question: "They ___ at home yesterday.", 
      answers: ["was", "were", "is", "be"], 
      correct: "were" 
    },
    { 
        question: "He ___ not like coffee.", 
        answers: ["do", "does", "is", "are"], 
        correct: "does" 
    },
    { 
        question: "___ you speak English?", 
        answers: ["Does", "Are", "Do", "Is"], 
        correct: "Do" 
    },
    { 
        question: "She has ___ apple.", 
        answers: ["a", "an", "the", "some"], 
        correct: "an" 
    },
    { 
        question: "I saw ___ cat in the garden.", 
        answers: ["a", "an", "are", "am"], 
        correct: "a" 
    },
    { 
        question: "There ___ five books on the table.", 
        answers: ["is", "am", "are", "was"], 
        correct: "are" 
    },
    { 
        question: "There ___ a bird in the tree.", 
        answers: ["are", "were", "is", "be"], 
        correct: "is" 
    },
    { 
        question: "My friends ___ very kind.", 
        answers: ["is", "am", "are", "was"], 
        correct: "are" 
    },
    { 
        question: "The sun ___ in the east.", 
        answers: ["rise", "rises", "rising", "rose"], 
        correct: "rises" 
    },
    { 
        question: "Water ___ at 100 degrees Celsius.", 
        answers: ["boil", "boils", "boiling", "boiled"], 
        correct: "boils" 
    },
    { 
        question: "We ___ to the beach last Sunday.", 
        answers: ["go", "goes", "went", "going"], 
        correct: "went" 
    },
    { 
        question: "She ___ her homework every evening.", 
        answers: ["do", "does", "did", "doing"], 
        correct: "does" 
    },
    { 
        question: "I ___ my room yesterday.", 
        answers: ["clean", "cleans", "cleaned", "cleaning"], 
        correct: "cleaned" 
    },
    { 
        question: "Look! The baby ___.", 
        answers: ["sleep", "sleeps", "is sleeping", "slept"], 
        correct: "is sleeping" 
    },
    { 
        question: "Listen! Someone ___ at the door.", 
        answers: ["knock", "knocks", "is knocking", "knocked"], 
        correct: "is knocking" 
    },
    { 
        question: "My father ___ a car.", 
        answers: ["have", "has", "having", "had"], 
        correct: "has" 
    },
    { 
        question: "We ___ two cats at home.", 
        answers: ["has", "have", "having", "is"], 
        correct: "have" 
    },
    { 
        question: "This book is ___ than that one.", 
        answers: ["interesting", "more interesting", "most interesting", "interest"], 
        correct: "more interesting" 
    },
    { 
        question: "An elephant is ___ than a goat.", 
        answers: ["big", "bigger", "biggest", "more big"], 
        correct: "bigger" 
    },
    { 
        question: "Mount Everest is the ___ mountain in the world.", 
        answers: ["high", "higher", "highest", "more high"], 
        correct: "highest" 
    },
    { 
        question: "You ___ wear a helmet when riding a motorcycle.", 
        answers: ["should", "should to", "are", "does"], 
        correct: "should" 
    },
    { 
        question: "I can ___ very well.", 
        answers: ["swims", "swimming", "swim", "swam"], 
        correct: "swim" 
    },
    { 
        question: "She ___ swim when she was five.", 
        answers: ["can", "could", "is", "does"], 
        correct: "could" 
    },
    { 
        question: "They will ___ us tomorrow.", 
        answers: ["visited", "visits", "visit", "visiting"], 
        correct: "visit" 
    },
    { 
        question: "I am going ___ study tonight.", 
        answers: ["at", "to", "for", "by"], 
        correct: "to" 
    },
    { 
        question: "The cat is ___ the table.", 
        answers: ["under", "quickly", "beautiful", "run"], 
        correct: "under" 
    },
    { 
        question: "The meeting starts ___ seven o'clock.", 
        answers: ["in", "on", "at", "by"], 
        correct: "at" 
    },
    { 
        question: "My birthday is ___ July.",
        answers: ["at", "in", "on", "by"], 
        correct: "in" 
    },
    { 
        question: "We have a flag ceremony ___ Monday.", 
        answers: ["in", "at", "on", "by"], 
        correct: "on" 
    },
    { 
        question: "She is interested ___ music.", 
        answers: ["on", "at", "in", "for"], 
        correct: "in" 
    },
    { 
        question: "This is ___ book.", 
        answers: ["my", "me", "I", "mine"], 
        correct: "my" 
    },
    { 
        question: "That pencil is ___.", 
        answers: ["my", "me", "mine", "I"], 
        correct: "mine" 
    },
    { 
        question: "Ahmad and I are friends. ___ study together.", 
        answers: ["They", "We", "He", "She"], 
        correct: "We" 
    },
    { 
        question: "Mira is my sister. ___ is kind.", 
        answers: ["He", "They", "She", "We"], 
        correct: "She" 
    },
    { 
        question: "The students ___ finished their homework.", 
        answers: ["has", "have", "is", "was"], 
        correct: "have" 
    },
    { 
        question: "I have lived here ___ 2020.", 
        answers: ["for", "since", "at", "during"],
        correct: "since" 
    },
    { 
        question: "She has studied English ___ three years.", 
        answers: ["since", "at", "for", "on"], 
        correct: "for" 
    },
    { 
        question: "If it rains, we ___ at home.", 
        answers: ["stay", "stayed", "will stay", "staying"], 
        correct: "will stay" 
    },
    { 
        question: "The letter ___ by my teacher yesterday.", 
        answers: ["write", "wrote", "was written", "writing"],
        correct: "was written" 
    },
    { 
        question: "English ___ in many countries.", 
        answers: ["speak", "speaks", "is spoken", "speaking"], 
        correct: "is spoken" 
    },
    { 
        question: "She asked me where I ___.", 
        answers: ["live", "lived", "living", "lives"], 
        correct: "lived" 
    }

];


let grammarQuizQuestions = [];
let currentGrammarQuestion = 0;
let grammarScore = 0;


function startGrammarQuiz() {
    const shuffled = [...grammarQuestions];

    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    grammarQuizQuestions = shuffled.slice(0, 5);
    currentGrammarQuestion = 0;
    grammarScore = 0;

    loadGrammarQuestion();
}

if (document.getElementById("grammar-question")) {
    startGrammarQuiz();
}

function loadGrammarQuestion() {

    const question = grammarQuizQuestions[currentGrammarQuestion];

    document.getElementById("grammar-question").textContent =
        question.question;

    document.getElementById("grammar-question-number").textContent =
        "Question " +
        (currentGrammarQuestion + 1) +
        " / " +
        grammarQuizQuestions.length;

    document.getElementById("grammar-score").textContent =
        "Score: " + grammarScore;

    document.getElementById("grammar-progress").style.width =
        ((currentGrammarQuestion + 1) / grammarQuizQuestions.length) * 100 + "%";


    const answersContainer =
        document.getElementById("grammar-answers");

    answersContainer.innerHTML = "";


    question.answers.forEach(answer => {

        const button = document.createElement("button");

        button.textContent = answer;
        button.className = "answer-button";

        button.onclick = function() {
            checkGrammarAnswer(button, answer);
        };

        answersContainer.appendChild(button);

    });


    document.getElementById("grammar-feedback").textContent = "";

    document.getElementById("grammar-next-button").style.display =
        "none";
}


function checkGrammarAnswer(button, answer) {

    const question = grammarQuizQuestions[currentGrammarQuestion];

    const buttons =
        document.querySelectorAll("#grammar-answers .answer-button");

    buttons.forEach(btn => {
        btn.disabled = true;
    });


    if (answer === question.correct) {

        button.classList.add("correct");

        document.getElementById("grammar-feedback").textContent =
            "🎉 Correct! +20 XP";

        grammarScore += 20;

        xp += 20;

        localStorage.setItem("englishQuestXP", xp);

    } else {

        button.classList.add("wrong");

        document.getElementById("grammar-feedback").textContent =
            "❌ Wrong! The correct answer is " +
            question.correct;
    }


    document.getElementById("grammar-score").textContent =
        "Score: " + grammarScore;

    document.getElementById("grammar-xp").textContent =
        xp;

    document.getElementById("grammar-next-button").style.display =
        "block";
}


function nextGrammarQuestion() {
    currentGrammarQuestion++;

    if (currentGrammarQuestion < grammarQuizQuestions.length) {
        loadGrammarQuestion();
    } else {
        finishGrammarQuiz();
    }
}


function finishGrammarQuiz() {

    document.getElementById("grammar-question").textContent =
        "🎉 Quest Complete!";

    document.getElementById("grammar-answers").innerHTML =
        "<h3>You earned " + grammarScore + " XP!</h3>";

    document.getElementById("grammar-feedback").textContent =
        "🏰 Amazing! You conquered Grammar Castle!";

    document.getElementById("grammar-next-button").textContent =
        "Back to Quest Map →";

    document.getElementById("grammar-next-button").onclick =
        function() {
            window.location.href = "quest.html";
        };
}


if (document.getElementById("grammar-question")) {
    document.getElementById("grammar-xp").textContent = xp;
    loadGrammarQuestion();
}


const listeningQuestions = [
    {
        text: "I like reading books.",
        answers: [
            "Saya suka membaca buku.",
            "Saya suka bermain bola.",
            "Saya sedang makan.",
            "Saya pergi ke sekolah."
        ],
        correct: "Saya suka membaca buku."
    },
    {
        text: "She is going to school.",
        answers: [
            "Dia sedang tidur.",
            "Dia pergi ke sekolah.",
            "Dia sedang memasak.",
            "Dia bermain di taman."
        ],
        correct: "Dia pergi ke sekolah."
    },
    {
        text: "They are playing football.",
        answers: [
            "Mereka sedang bermain sepak bola.",
            "Mereka sedang belajar.",
            "Mereka sedang berenang.",
            "Mereka sedang membaca."
        ],
        correct: "Mereka sedang bermain sepak bola."
    },
    {
        text: "My mother is cooking dinner.",
        answers: [
            "Ibuku sedang memasak makan malam.",
            "Ibuku sedang membaca buku.",
            "Ibuku sedang pergi.",
            "Ibuku sedang tidur."
        ],
        correct: "Ibuku sedang memasak makan malam."
    },
    {
        text: "We went to the beach yesterday.",
        answers: [
            "Kami pergi ke pantai kemarin.",
            "Kami pergi ke sekolah hari ini.",
            "Kami sedang bermain di rumah.",
            "Kami membeli makanan."
        ],
        correct: "Kami pergi ke pantai kemarin."
    },
    {
        text: "I am drinking water.",
        answers: ["Saya sedang minum air.", "Saya sedang makan.", "Saya membeli air.", "Saya sedang tidur."],
        correct: "Saya sedang minum air."
    },
    {
        text: "The sun is very bright.",
        answers: ["Matahari sangat terang.", "Bulan sangat terang.", "Langit sangat gelap.", "Hujan sangat deras."],
        correct: "Matahari sangat terang."
    },
    {
        text: "My father works in a hospital.",
        answers: ["Ayah saya bekerja di rumah sakit.", "Ayah saya pergi ke pasar.", "Ayah saya belajar di sekolah.", "Ayah saya memasak."],
        correct: "Ayah saya bekerja di rumah sakit."
    },
    {
        text: "She has two cats.",
        answers: ["Dia memiliki dua kucing.", "Dia memiliki dua anjing.", "Dia membeli dua buku.", "Dia melihat dua burung."],
        correct: "Dia memiliki dua kucing."
    },
    {
        text: "We study English every day.",
        answers: ["Kami belajar bahasa Inggris setiap hari.", "Kami bermain setiap hari.", "Kami tidur setiap hari.", "Kami memasak setiap hari."],
        correct: "Kami belajar bahasa Inggris setiap hari."
    },
    {
        text: "The baby is sleeping.",
        answers: ["Bayi itu sedang tidur.", "Bayi itu sedang menangis.", "Bayi itu sedang makan.", "Bayi itu sedang bermain."],
        correct: "Bayi itu sedang tidur."
    },
    {
        text: "I go to school by bicycle.",
        answers: ["Saya pergi ke sekolah naik sepeda.", "Saya pergi naik bus.", "Saya berjalan ke pasar.", "Saya naik pesawat."],
        correct: "Saya pergi ke sekolah naik sepeda."
    },
    {
        text: "It is raining outside.",
        answers: ["Di luar sedang hujan.", "Di luar sangat panas.", "Di luar bersalju.", "Di luar sangat berangin."],
        correct: "Di luar sedang hujan."
    },
    {
        text: "My sister likes chocolate.",
        answers: ["Saudara perempuan saya suka cokelat.", "Saudara perempuan saya suka sayur.", "Ibu saya suka cokelat.", "Adik saya membeli susu."],
        correct: "Saudara perempuan saya suka cokelat."
    },
    {
        text: "The classroom is clean.",
        answers: ["Ruang kelas itu bersih.", "Ruang kelas itu kotor.", "Ruang kelas itu gelap.", "Ruang kelas itu kosong."],
        correct: "Ruang kelas itu bersih."
    },
    {
        text: "He is washing his hands.",
        answers: ["Dia sedang mencuci tangannya.", "Dia sedang menyisir rambut.", "Dia sedang mencuci baju.", "Dia sedang menyapu."],
        correct: "Dia sedang mencuci tangannya."
    },
    {
        text: "They are watching television.",
        answers: ["Mereka sedang menonton televisi.", "Mereka sedang membaca koran.", "Mereka sedang memasak.", "Mereka sedang tidur."],
        correct: "Mereka sedang menonton televisi."
    },
    {
        text: "The bird can fly.",
        answers: ["Burung itu bisa terbang.", "Burung itu bisa berenang.", "Burung itu sedang tidur.", "Burung itu sedang makan."],
        correct: "Burung itu bisa terbang."
    },
    {
        text: "I forgot my umbrella.",
        answers: ["Saya lupa membawa payung.", "Saya membeli sepatu.", "Saya kehilangan buku.", "Saya membawa tas."],
        correct: "Saya lupa membawa payung."
    },
    {
        text: "The market is crowded.",
        answers: ["Pasar itu ramai.", "Pasar itu sepi.", "Pasar itu tutup.", "Pasar itu bersih."],
        correct: "Pasar itu ramai."
    },
    {
        text: "She is reading a novel.",
        answers: ["Dia sedang membaca novel.", "Dia sedang menulis surat.", "Dia sedang menggambar.", "Dia sedang menyanyi."],
        correct: "Dia sedang membaca novel."
    },
    {
        text: "We visited our grandmother.",
        answers: ["Kami mengunjungi nenek kami.", "Kami mengunjungi guru kami.", "Kami pergi ke pantai.", "Kami pergi ke sekolah."],
        correct: "Kami mengunjungi nenek kami."
    },
    {
        text: "The train arrives at seven.",
        answers: ["Kereta tiba pukul tujuh.", "Bus berangkat pukul delapan.", "Pesawat tiba pukul enam.", "Kereta berangkat pukul sembilan."],
        correct: "Kereta tiba pukul tujuh."
    },
    {
        text: "Please open the window.",
        answers: ["Tolong buka jendelanya.", "Tolong tutup pintunya.", "Tolong bersihkan meja.", "Tolong nyalakan lampu."],
        correct: "Tolong buka jendelanya."
    },
    {
        text: "My brother is taller than me.",
        answers: ["Kakak atau adik laki-laki saya lebih tinggi daripada saya.", "Saya lebih tinggi darinya.", "Kami sama-sama pendek.", "Dia lebih muda dari saya."],
        correct: "Kakak atau adik laki-laki saya lebih tinggi daripada saya."
    },
    {
        text: "The food smells delicious.",
        answers: ["Makanan itu berbau lezat.", "Makanan itu terasa pahit.", "Makanan itu sudah dingin.", "Makanan itu sudah habis."],
        correct: "Makanan itu berbau lezat."
    },
    {
        text: "I usually wake up at five.",
        answers: ["Saya biasanya bangun pukul lima.", "Saya tidur pukul lima.", "Saya makan pukul lima.", "Saya pulang pukul lima."],
        correct: "Saya biasanya bangun pukul lima."
    },
    {
        text: "The library is next to the mosque.",
        answers: ["Perpustakaan berada di sebelah masjid.", "Perpustakaan berada di belakang pasar.", "Masjid berada di dalam kelas.", "Perpustakaan jauh dari sekolah."],
        correct: "Perpustakaan berada di sebelah masjid."
    },
    {
        text: "He forgot to bring his homework.",
        answers: ["Dia lupa membawa PR-nya.", "Dia selesai mengerjakan PR.", "Dia membawa buku baru.", "Dia membantu temannya."],
        correct: "Dia lupa membawa PR-nya."
    },
    {
        text: "The children are playing in the garden.",
        answers: ["Anak-anak sedang bermain di taman.", "Anak-anak sedang belajar di kelas.", "Anak-anak sedang tidur.", "Anak-anak sedang makan di dapur."],
        correct: "Anak-anak sedang bermain di taman."
    },
    {
        text: "I need a glass of milk.",
        answers: ["Saya membutuhkan segelas susu.", "Saya membutuhkan segelas air.", "Saya membeli roti.", "Saya ingin secangkir teh."],
        correct: "Saya membutuhkan segelas susu."
    },
    {
        text: "The weather is cloudy today.",
        answers: ["Cuaca hari ini berawan.", "Cuaca hari ini cerah.", "Hari ini sangat panas.", "Hari ini turun salju."],
        correct: "Cuaca hari ini berawan."
    },
    {
        text: "She speaks English fluently.",
        answers: ["Dia berbicara bahasa Inggris dengan lancar.", "Dia menulis bahasa Inggris dengan lambat.", "Dia belajar bahasa Arab.", "Dia tidak suka bahasa Inggris."],
        correct: "Dia berbicara bahasa Inggris dengan lancar."
    },
    {
        text: "My mother bought fresh vegetables.",
        answers: ["Ibu saya membeli sayuran segar.", "Ibu saya memasak ikan.", "Ibu saya membeli sepatu.", "Ibu saya menanam bunga."],
        correct: "Ibu saya membeli sayuran segar."
    },
    {
        text: "The museum closes at four.",
        answers: ["Museum tutup pukul empat.", "Museum buka pukul lima.", "Sekolah tutup pukul empat.", "Museum buka sepanjang malam."],
        correct: "Museum tutup pukul empat."
    },
    {
        text: "I have never been to Bali.",
        answers: ["Saya belum pernah ke Bali.", "Saya tinggal di Bali.", "Saya akan pergi ke Bali besok.", "Saya baru pulang dari Bali."],
        correct: "Saya belum pernah ke Bali."
    },
    {
        text: "Please speak more slowly.",
        answers: ["Tolong berbicaralah lebih pelan.", "Tolong berlari lebih cepat.", "Tolong menulis lebih rapi.", "Tolong bernyanyi lebih keras."],
        correct: "Tolong berbicaralah lebih pelan."
    },
    {
        text: "The students are taking an exam.",
        answers: ["Para siswa sedang mengikuti ujian.", "Para siswa sedang bermain bola.", "Para siswa sedang makan siang.", "Para siswa sedang membersihkan kelas."],
        correct: "Para siswa sedang mengikuti ujian."
    },
    {
        text: "He bought a pair of shoes.",
        answers: ["Dia membeli sepasang sepatu.", "Dia membeli sebuah topi.", "Dia membeli dua buku.", "Dia meminjam tas."],
        correct: "Dia membeli sepasang sepatu."
    },
    {
        text: "The river flows through the village.",
        answers: ["Sungai mengalir melewati desa.", "Jalan melewati sekolah.", "Gunung berada di kota.", "Hutan berada di tepi pantai."],
        correct: "Sungai mengalir melewati desa."
    },
    {
        text: "I am looking for my keys.",
        answers: ["Saya sedang mencari kunci saya.", "Saya sedang mencari sepatu.", "Saya sedang membuka jendela.", "Saya sedang menutup pintu."],
        correct: "Saya sedang mencari kunci saya."
    },
    {
        text: "She was absent yesterday.",
        answers: ["Dia tidak hadir kemarin.", "Dia hadir lebih awal.", "Dia datang besok.", "Dia pulang sekarang."],
        correct: "Dia tidak hadir kemarin."
    },
    {
        text: "Our team won the match.",
        answers: ["Tim kami memenangkan pertandingan.", "Tim kami kalah dalam pertandingan.", "Tim kami membatalkan latihan.", "Tim kami menonton film."],
        correct: "Tim kami memenangkan pertandingan."
    },
    {
        text: "Please turn off the lights.",
        answers: ["Tolong matikan lampunya.", "Tolong buka pintunya.", "Tolong nyalakan televisi.", "Tolong tutup jendelanya."],
        correct: "Tolong matikan lampunya."
    },
    {
        text: "The doctor advised me to rest.",
        answers: ["Dokter menyarankan saya untuk beristirahat.", "Dokter menyuruh saya berlari.", "Dokter memberi saya buku.", "Dokter mengajak saya berjalan."],
        correct: "Dokter menyarankan saya untuk beristirahat."
    },
    {
        text: "We are planning a school trip.",
        answers: ["Kami sedang merencanakan wisata sekolah.", "Kami sedang mengerjakan ujian.", "Kami sedang membersihkan halaman.", "Kami sedang menonton televisi."],
        correct: "Kami sedang merencanakan wisata sekolah."
    },
    {
        text: "The cake was made by my aunt.",
        answers: ["Kue itu dibuat oleh bibi saya.", "Kue itu dibeli oleh ibu saya.", "Kue itu dimakan oleh adik saya.", "Kue itu dijual oleh guru saya."],
        correct: "Kue itu dibuat oleh bibi saya."
    },
    {
        text: "I will call you tomorrow.",
        answers: ["Saya akan meneleponmu besok.", "Saya meneleponmu kemarin.", "Saya bertemu denganmu hari ini.", "Saya mengirim surat minggu lalu."],
        correct: "Saya akan meneleponmu besok."
    },
    {
        text: "The students must wear uniforms.",
        answers: ["Para siswa harus memakai seragam.", "Para siswa boleh memakai piyama.", "Para siswa harus membawa makanan.", "Para siswa sedang membeli seragam."],
        correct: "Para siswa harus memakai seragam."
    },
    {
        text: "Although it was late, she kept studying.",
        answers: ["Meskipun sudah larut, dia terus belajar.", "Dia berhenti belajar karena masih pagi.", "Dia tidur sebelum belajar.", "Dia bermain sepanjang malam."],
        correct: "Meskipun sudah larut, dia terus belajar."
    }
];


let listeningQuizQuestions = [];
let currentListeningQuestion = 0;
let listeningScore = 0;

function startListeningQuiz() {
    const shuffled = [...listeningQuestions];

    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    listeningQuizQuestions = shuffled.slice(0, 5);
    currentListeningQuestion = 0;
    listeningScore = 0;

    loadListeningQuestion();
}


function loadListeningQuestion() {

    const question =
        listeningQuizQuestions[currentListeningQuestion];

    document.getElementById("listening-question-number").textContent =
        "Question " +
        (currentListeningQuestion + 1) +
        " / " +
        listeningQuizQuestions.length;

    document.getElementById("listening-score").textContent =
        "Score: " + listeningScore;

    document.getElementById("listening-progress").style.width =
        ((currentListeningQuestion + 1) /
        listeningQuizQuestions.length) * 100 + "%";


    const answers =
        document.getElementById("listening-answers");

    answers.innerHTML = "";


    
const shuffledAnswers = [...question.answers];

for (let i = shuffledAnswers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledAnswers[i], shuffledAnswers[j]] =
        [shuffledAnswers[j], shuffledAnswers[i]];
}

shuffledAnswers.forEach(answer => {
    const button = document.createElement("button");
    button.textContent = answer;
    button.className = "answer-button";

    button.onclick = function () {
        checkListeningAnswer(button, answer);
    };

    answers.appendChild(button);
});


    document.getElementById("listening-feedback").textContent = "";

    document.getElementById("listening-next-button").style.display =
        "none";
}


function playListeningAudio() {

    const question =
        listeningQuizQuestions[currentListeningQuestion];

    const speech =
        new SpeechSynthesisUtterance(question.text);

    speech.lang = "en-US";
    speech.rate = 0.85;

    window.speechSynthesis.cancel();

    window.speechSynthesis.speak(speech);
}


function checkListeningAnswer(button, answer) {

    const question =
        listeningQuizQuestions[currentListeningQuestion];

    const buttons =
        document.querySelectorAll(
            "#listening-answers .answer-button"
        );

    buttons.forEach(btn => {
        btn.disabled = true;
    });


    if (answer === question.correct) {

        button.classList.add("correct");

        document.getElementById("listening-feedback").textContent =
            "🎉 Correct! +20 XP";

        listeningScore += 20;

        xp += 20;

        localStorage.setItem(
            "englishQuestXP",
            xp
        );

    } else {

        button.classList.add("wrong");

        document.getElementById("listening-feedback").textContent =
            "❌ Wrong! The correct answer is " +
            question.correct;
    }


    document.getElementById("listening-score").textContent =
        "Score: " + listeningScore;

    document.getElementById("listening-xp").textContent =
        xp;

    const nextButton = document.getElementById("listening-next-button");

nextButton.style.display = "block";
nextButton.disabled = false;
nextButton.style.position = "relative";
nextButton.style.zIndex = "10";
}


function nextListeningQuestion() {
    if (currentListeningQuestion < listeningQuizQuestions.length - 1) {
        currentListeningQuestion++;
        loadListeningQuestion();
    } else {
        finishListeningQuiz();
    }
}


function finishListeningQuiz() {
    const questionTitle = document.getElementById("listening-question");
    const playButton = document.getElementById("listening-play-button");
    const hint = document.getElementById("listening-hint");
    const answers = document.getElementById("listening-answers");
    const feedback = document.getElementById("listening-feedback");
    const nextButton = document.getElementById("listening-next-button");

    if (questionTitle) {
        questionTitle.textContent = "🏆 Listening Lake Completed!";
    }

    if (playButton) {
        playButton.style.display = "none";
    }

    if (hint) {
        hint.style.display = "none";
    }

    if (answers) {
        answers.innerHTML = `
            <h3>You earned ${listeningScore} XP!</h3>
            <p>You completed all 5 listening questions!</p>
        `;
    }

    if (feedback) {
        feedback.textContent = "⭐ Great job! Keep practicing your English!";
    }

    if (nextButton) {
        nextButton.textContent = "Back to Quest Map 🗺️";
        nextButton.style.display = "block";
        nextButton.disabled = false;
        nextButton.onclick = function () {
            window.location.href = "quest.html";
        };
    }
}


if (document.getElementById("listening-answers")) {

    document.getElementById("listening-xp").textContent = xp;

    loadListeningQuestion();
}


const detectiveQuestions = [

{
    question: "My father ___ coffee every morning.",
    answers: ["drink", "drinks", "drinking", "drank"],
    correct: "drinks",
    explanation: "Use 'drinks' with 'my father' in the simple present."
},
{
    question: "We ___ to the zoo last Sunday.",
    answers: ["go", "goes", "went", "going"],
    correct: "went",
    explanation: "Use 'went' for a past action."
},
{
    question: "The plural form of 'child' is ___.",
    answers: ["childs", "children", "childes", "childrens"],
    correct: "children",
    explanation: "The plural form of child is children."
},
{
    question: "I ___ watching TV now.",
    answers: ["am", "is", "are", "be"],
    correct: "am",
    explanation: "Use 'am' with 'I'."
},
{
    question: "The opposite of 'early' is ___.",
    answers: ["fast", "late", "quick", "soon"],
    correct: "late",
    explanation: "Late is the opposite of early."
},
{
    question: "She has ___ apple.",
    answers: ["a", "an", "the", "some"],
    correct: "an",
    explanation: "Use 'an' before a vowel sound."
},
{
    question: "They ___ football every afternoon.",
    answers: ["plays", "playing", "play", "played"],
    correct: "play",
    explanation: "Use the base verb with 'they' in the simple present."
},
{
    question: "What is the past tense of 'eat'?",
    answers: ["eated", "eaten", "ate", "eats"],
    correct: "ate",
    explanation: "The simple past form of eat is ate."
},
{
    question: "There ___ a cat under the table.",
    answers: ["are", "is", "am", "were"],
    correct: "is",
    explanation: "Use 'is' for one singular noun."
},
{
    question: "Which word is an adjective?",
    answers: ["beautiful", "run", "slowly", "teacher"],
    correct: "beautiful",
    explanation: "Beautiful describes a noun."
},
{
    question: "He can ___ very well.",
    answers: ["swims", "swimming", "swim", "swam"],
    correct: "swim",
    explanation: "Use the base verb after 'can'."
},
{
    question: "We ___ happy yesterday.",
    answers: ["are", "is", "was", "were"],
    correct: "were",
    explanation: "Use 'were' with 'we' in the past tense."
},
{
    question: "The opposite of 'strong' is ___.",
    answers: ["weak", "brave", "tall", "heavy"],
    correct: "weak",
    explanation: "Weak is the opposite of strong."
},
{
    question: "My sister ___ a book every week.",
    answers: ["read", "reads", "reading", "readed"],
    correct: "reads",
    explanation: "Use 'reads' with 'my sister'."
},
{
    question: "I have two ___.",
    answers: ["foot", "foots", "feet", "feets"],
    correct: "feet",
    explanation: "The plural form of foot is feet."
},
{
    question: "The sun ___ in the east.",
    answers: ["rise", "rises", "rising", "rose"],
    correct: "rises",
    explanation: "Use 'rises' for this general fact."
},
{
    question: "She is interested ___ music.",
    answers: ["on", "at", "in", "to"],
    correct: "in",
    explanation: "The correct expression is 'interested in'."
},
{
    question: "What is the opposite of 'noisy'?",
    answers: ["loud", "quiet", "busy", "crowded"],
    correct: "quiet",
    explanation: "Quiet means making little or no noise."
},
{
    question: "I ___ my homework before dinner yesterday.",
    answers: ["finish", "finishes", "finished", "finishing"],
    correct: "finished",
    explanation: "Use the past tense for a completed past action."
},
{
    question: "Which sentence is correct?",
    answers: [
        "They is my friends.",
        "They am my friends.",
        "They are my friends.",
        "They be my friends."
    ],
    correct: "They are my friends.",
    explanation: "Use 'are' with 'they'."
},
{
    question: "The past tense of 'buy' is ___.",
    answers: ["buyed", "bought", "buys", "buying"],
    correct: "bought",
    explanation: "The simple past form of buy is bought."
},
{
    question: "There are ___ students in the classroom.",
    answers: ["much", "any", "many", "a"],
    correct: "many",
    explanation: "Use 'many' with countable plural nouns."
},
{
    question: "My brother is taller ___ me.",
    answers: ["then", "than", "that", "from"],
    correct: "than",
    explanation: "Use 'than' when comparing things."
},
{
    question: "Please ___ the door.",
    answers: ["opens", "opening", "opened", "open"],
    correct: "open",
    explanation: "Use the base verb for a command."
},
{
    question: "What is the meaning of 'honest'?",
    answers: ["Jujur", "Malas", "Marah", "Takut"],
    correct: "Jujur",
    explanation: "Honest means telling the truth."
},
{
    question: "He ___ sleeping when I arrived.",
    answers: ["is", "are", "was", "were"],
    correct: "was",
    explanation: "Use 'was' with 'he' for a past ongoing action."
},
{
    question: "Which word is a noun?",
    answers: ["quickly", "happiness", "beautiful", "run"],
    correct: "happiness",
    explanation: "Happiness is a noun naming a feeling."
},
{
    question: "I usually ___ breakfast at seven.",
    answers: ["has", "having", "have", "had"],
    correct: "have",
    explanation: "Use 'have' with 'I' in the simple present."
},
{
    question: "The opposite of 'dangerous' is ___.",
    answers: ["safe", "risky", "scary", "difficult"],
    correct: "safe",
    explanation: "Safe is the opposite of dangerous."
},
{
    question: "She ___ her room every Saturday.",
    answers: ["clean", "cleans", "cleaning", "cleaned"],
    correct: "cleans",
    explanation: "Use 'cleans' with 'she'."
},
{
    question: "What is the past tense of 'see'?",
    answers: ["seed", "seen", "saw", "seeing"],
    correct: "saw",
    explanation: "The simple past form of see is saw."
},
{
    question: "We are going ___ school.",
    answers: ["at", "on", "to", "in"],
    correct: "to",
    explanation: "Use 'to' to indicate movement toward school."
},
{
    question: "Which sentence uses the present continuous?",
    answers: [
        "She reads every day.",
        "She is reading now.",
        "She read yesterday.",
        "She will read tomorrow."
    ],
    correct: "She is reading now.",
    explanation: "Present continuous uses am/is/are + verb-ing."
},
{
    question: "The comparative form of 'big' is ___.",
    answers: ["biger", "biggest", "more big", "bigger"],
    correct: "bigger",
    explanation: "The comparative form of big is bigger."
},
{
    question: "You ___ wear a seat belt in a car.",
    answers: ["should", "couldn't", "is", "are"],
    correct: "should",
    explanation: "'Should' expresses advice or what is recommended."
},
{
    question: "My mother ___ cooking now.",
    answers: ["am", "is", "are", "be"],
    correct: "is",
    explanation: "Use 'is' with 'my mother'."
},
{
    question: "The opposite of 'expensive' is ___.",
    answers: ["cheap", "large", "beautiful", "strong"],
    correct: "cheap",
    explanation: "'Cheap' means not expensive."
},
{
    question: "There ___ two books on the table.",
    answers: ["is", "am", "are", "was"],
    correct: "are",
    explanation: "Use 'are' for plural nouns."
},
{
    question: "She ___ her homework last night.",
    answers: ["do", "does", "did", "doing"],
    correct: "did",
    explanation: "Use 'did' for past actions."
},
{
    question: "Which sentence is correct?",
    answers: [
        "He go to school.",
        "He goes to school.",
        "He going to school.",
        "He gone to school."
    ],
    correct: "He goes to school.",
    explanation: "Use 'goes' with 'he' in the simple present."
},
{
    question: "She ___ English every day.",
    answers: ["study", "studies", "studying", "studied"],
    correct: "study",
    explanation: "The correct sentence is 'She studies English every day.'"
},
{
    question: "They ___ at home yesterday.",
    answers: ["was", "were", "is", "be"],
    correct: "were",
    explanation: "Use 'were' with 'they' in the past tense."
},
{
    question: "He doesn't ___ coffee.",
    answers: ["likes", "liked", "like", "liking"],
    correct: "like",
    explanation: "After 'doesn't', use the base verb 'like'."
},
{
    question: "I ___ a student.",
    answers: ["am", "is", "are", "be"],
    correct: "am",
    explanation: "Use 'am' with 'I'."
},
{
    question: "We ___ dinner right now.",
    answers: ["eat", "eats", "are eating", "ate"],
    correct: "are eating",
    explanation: "Use present continuous for an action happening now."
},
{
        question: "She go to school every day.",
        answers: ["She", "go", "school", "every day"],
        correct: "go",
        explanation: "It should be 'She goes to school every day.'"
    },

    {
        question: "They is playing football.",
        answers: ["They", "is", "playing", "football"],
        correct: "is",
        explanation: "It should be 'They are playing football.'"
    },

    {
        question: "He have a new bicycle.",
        answers: ["He", "have", "new", "bicycle"],
        correct: "have",
        explanation: "It should be 'He has a new bicycle.'"
    },

    {
        question: "I am go to the library.",
        answers: ["I", "am", "go", "library"],
        correct: "go",
        explanation: "It should be 'I am going to the library.'"
    },

    {
        question: "We was very happy yesterday.",
        answers: ["We", "was", "happy", "yesterday"],
        correct: "was",
        explanation: "It should be 'We were very happy yesterday.'"
    }

];


let currentDetectiveQuestion = 0;
let detectiveScore = 0;
let detectiveQuizQuestions = [];


function startDetectiveQuiz() {
    const shuffled = [...detectiveQuestions];

    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    detectiveQuizQuestions = shuffled.slice(0, 5);
    currentDetectiveQuestion = 0;
    detectiveScore = 0;

    loadDetectiveQuestion();
}


function loadDetectiveQuestion() {
    const question = detectiveQuizQuestions[currentDetectiveQuestion];

    document.getElementById("detective-question").textContent =
        question.question;

    document.getElementById("detective-question-number").textContent =
        "Case " + (currentDetectiveQuestion + 1) +
        " / " + detectiveQuizQuestions.length;

    document.getElementById("detective-score").textContent =
        "Score: " + detectiveScore;

    document.getElementById("detective-progress").style.width =
        ((currentDetectiveQuestion + 1) /
        detectiveQuizQuestions.length) * 100 + "%";

    
const hint = document.querySelector(".detective-hint");

if (hint) {
    const q = question.question.toLowerCase();

    if (
        q.includes("incorrect") ||
        q.includes("wrong") ||
        q.includes("error") ||
        q.includes("they is playing football") ||
        q.includes("he have a new bicycle") ||
        q.includes("i am go to the library") ||
        q.includes("we was very happy") ||
        q.includes("she go to school")
    ) {
        hint.textContent = "Find the incorrect word!";
    } else if (q.includes("which sentence is correct")) {
        hint.textContent = "Choose the correct sentence!";
    } else {
        hint.textContent = "Choose the correct answer!";
    }
}


    const answers = document.getElementById("detective-answers");
    answers.innerHTML = "";

    question.answers.forEach(answer => {
        const button = document.createElement("button");
        button.textContent = answer;
        button.className = "answer-button";

        button.onclick = function () {
            checkDetectiveAnswer(button, answer);
        };

        answers.appendChild(button);
    });

    document.getElementById("detective-feedback").textContent = "";

    document.getElementById("detective-next-button").style.display =
        "none";
}


function checkDetectiveAnswer(button, answer) {

    const question =
        detectiveQuizQuestions[currentDetectiveQuestion];


    const buttons =
        document.querySelectorAll(
            "#detective-answers .answer-button"
        );


    buttons.forEach(btn => {
        btn.disabled = true;
    });


    if (answer === question.correct) {

        button.classList.add("correct");

        document.getElementById("detective-feedback").textContent =
            "🕵️ Case solved! +20 XP";

        detectiveScore += 20;

        xp += 20;

        localStorage.setItem(
            "englishQuestXP",
            xp
        );

    } else {

        button.classList.add("wrong");

        document.getElementById("detective-feedback").textContent =
            "❌ Not quite. " +
            question.explanation;
    }


    document.getElementById("detective-score").textContent =
        "Score: " + detectiveScore;


    document.getElementById("detective-xp").textContent =
        xp;


    document.getElementById("detective-next-button").style.display =
        "block";
}


function nextDetectiveQuestion() {

    currentDetectiveQuestion++;


    if (
        currentDetectiveQuestion <
        detectiveQuizQuestions.length
    ) {

        loadDetectiveQuestion();

    } else {

        finishDetectiveQuiz();

    }
}


function finishDetectiveQuiz() {

    document.getElementById("detective-question").textContent =
        "🎉 All Cases Solved!";


    document.getElementById("detective-answers").innerHTML =
        "<h3>You earned " +
        detectiveScore +
        " XP!</h3>";


    document.getElementById("detective-feedback").textContent =
        "🕵️ Amazing Detective!";


    document.getElementById("detective-next-button").textContent =
        "Back to Quest Map →";


    document.getElementById("detective-next-button").onclick =
        function() {

            window.location.href = "quest.html";

        };
}


if (document.getElementById("detective-answers")) {

    document.getElementById("detective-xp").textContent = xp;

    startDetectiveQuiz();

}


const arenaQuestions = [

    {
        question: "What is the meaning of 'Brave'?",
        answers: ["Berani", "Takut", "Sedih", "Marah"],
        correct: "Berani"
    },

    {
        question: "She ___ English every day.",
        answers: ["study", "studies", "studying", "studied"],
        correct: "studies"
    },

    {
        question: "What is the opposite of 'Difficult'?",
        answers: ["Easy", "Hard", "Big", "Slow"],
        correct: "Easy"
    },

    {
        question: "They ___ watching a movie now.",
        answers: ["is", "am", "are", "be"],
        correct: "are"
    },

    {
        question: "Which sentence is correct?",
        answers: [
            "He go to school.",
            "He goes to school.",
            "He going to school.",
            "He gone to school."
        ],
        correct: "He goes to school."
    },
{
    question: "What is the meaning of 'Happy'?",
    answers: ["Sedih", "Bahagia", "Marah", "Takut"],
    correct: "Bahagia"
},
{
    question: "What is the opposite of 'Big'?",
    answers: ["Tall", "Small", "Long", "Wide"],
    correct: "Small"
},
{
    question: "She ___ a student.",
    answers: ["am", "are", "is", "be"],
    correct: "is"
},
{
    question: "What is the meaning of 'Book'?",
    answers: ["Buku", "Meja", "Pintu", "Kursi"],
    correct: "Buku"
},
{
    question: "They ___ football every Sunday.",
    answers: ["plays", "playing", "play", "played"],
    correct: "play"
},
{
    question: "What is the opposite of 'Hot'?",
    answers: ["Warm", "Cold", "Dry", "Big"],
    correct: "Cold"
},
{
    question: "I ___ breakfast every morning.",
    answers: ["eat", "eats", "eating", "ate"],
    correct: "eat"
},
{
    question: "What is the meaning of 'Beautiful'?",
    answers: ["Cantik", "Kotor", "Lambat", "Kecil"],
    correct: "Cantik"
},
{
    question: "He ___ playing basketball now.",
    answers: ["am", "is", "are", "be"],
    correct: "is"
},
{
    question: "What is the plural of 'Child'?",
    answers: ["Childs", "Childes", "Children", "Childrens"],
    correct: "Children"
},
{
    question: "We ___ students.",
    answers: ["am", "is", "are", "be"],
    correct: "are"
},
{
    question: "What is the meaning of 'Quickly'?",
    answers: ["Dengan lambat", "Dengan cepat", "Dengan sedih", "Dengan marah"],
    correct: "Dengan cepat"
},
{
    question: "My mother ___ delicious food.",
    answers: ["cook", "cooks", "cooking", "cooked"],
    correct: "cooks"
},
{
    question: "What is the opposite of 'Early'?",
    answers: ["Fast", "Late", "Soon", "Quick"],
    correct: "Late"
},
{
    question: "Yesterday, I ___ to the market.",
    answers: ["go", "goes", "went", "going"],
    correct: "went"
},
{
    question: "What is the meaning of 'Brave'?",
    answers: ["Penakut", "Berani", "Malas", "Lelah"],
    correct: "Berani"
},
{
    question: "There ___ two cats in the garden.",
    answers: ["is", "am", "are", "be"],
    correct: "are"
},
{
    question: "What is the past tense of 'Eat'?",
    answers: ["Eated", "Ate", "Eating", "Eats"],
    correct: "Ate"
},
{
    question: "She ___ her homework every evening.",
    answers: ["do", "does", "doing", "done"],
    correct: "does"
},
{
    question: "What is the opposite of 'Clean'?",
    answers: ["Neat", "Dirty", "Fresh", "Clear"],
    correct: "Dirty"
},
{
    question: "I am interested ___ music.",
    answers: ["on", "at", "in", "by"],
    correct: "in"
},
{
    question: "What is the meaning of 'Library'?",
    answers: ["Laboratorium", "Perpustakaan", "Kantin", "Lapangan"],
    correct: "Perpustakaan"
},
{
    question: "They ___ watching TV now.",
    answers: ["is", "am", "are", "was"],
    correct: "are"
},
{
    question: "What is the comparative form of 'Tall'?",
    answers: ["Tallest", "More tall", "Taller", "Talling"],
    correct: "Taller"
},
{
    question: "The sun ___ in the east.",
    answers: ["rise", "rises", "rising", "rose"],
    correct: "rises"
},
{
    question: "What is the meaning of 'Hungry'?",
    answers: ["Haus", "Lapar", "Kenyang", "Mengantuk"],
    correct: "Lapar"
},
{
    question: "We ___ at home yesterday.",
    answers: ["are", "was", "were", "is"],
    correct: "were"
},
{
    question: "What is the opposite of 'Expensive'?",
    answers: ["Cheap", "Rich", "Costly", "Large"],
    correct: "Cheap"
},
{
    question: "She has ___ apple.",
    answers: ["a", "an", "the", "are"],
    correct: "an"
},
{
    question: "What is the meaning of 'Teacher'?",
    answers: ["Dokter", "Petani", "Guru", "Polisi"],
    correct: "Guru"
},
{
    question: "I ___ English right now.",
    answers: ["study", "studies", "am studying", "studied"],
    correct: "am studying"
},
{
    question: "What is the past tense of 'Go'?",
    answers: ["Goed", "Gone", "Went", "Going"],
    correct: "Went"
},
{
    question: "There is ___ water in the bottle.",
    answers: ["some", "many", "few", "anyone"],
    correct: "some"
},
{
    question: "What is the meaning of 'Friendly'?",
    answers: ["Ramah", "Galak", "Pemalu", "Sombong"],
    correct: "Ramah"
},
{
    question: "My father ___ coffee every morning.",
    answers: ["drink", "drinks", "drinking", "drank"],
    correct: "drinks"
},
{
    question: "What is the opposite of 'Strong'?",
    answers: ["Powerful", "Weak", "Healthy", "Brave"],
    correct: "Weak"
},
{
    question: "___ you like English?",
    answers: ["Does", "Is", "Do", "Are"],
    correct: "Do"
},
{
    question: "What is the meaning of 'Journey'?",
    answers: ["Perjalanan", "Pelajaran", "Permainan", "Pekerjaan"],
    correct: "Perjalanan"
},
{
    question: "The book is ___ the table.",
    answers: ["on", "at", "from", "with"],
    correct: "on"
},
{
    question: "What is the superlative form of 'Good'?",
    answers: ["Gooder", "More good", "Best", "Better"],
    correct: "Best"
},
{
    question: "He ___ not like spicy food.",
    answers: ["do", "does", "is", "are"],
    correct: "does"
},
{
    question: "What is the meaning of 'Careful'?",
    answers: ["Ceroboh", "Berhati-hati", "Malas", "Lelah"],
    correct: "Berhati-hati"
},
{
    question: "If it rains, I ___ at home.",
    answers: ["stay", "stays", "stayed", "staying"],
    correct: "stay"
},
{
    question: "What is the opposite of 'Noisy'?",
    answers: ["Loud", "Quiet", "Busy", "Crowded"],
    correct: "Quiet"
},
{
    question: "They have ___ their lunch.",
    answers: ["eat", "ate", "eaten", "eating"],
    correct: "eaten"
}


];


let currentArenaQuestion = 0;
let arenaScore = 0;
let arenaQuizQuestions = [];

function startArenaQuiz() {
    const shuffled = [...arenaQuestions];

    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    arenaQuizQuestions = shuffled.slice(0, 5);
    currentArenaQuestion = 0;
    arenaScore = 0;
    loadArenaQuestion();
}


function loadArenaQuestion() {
    if (
        !Array.isArray(arenaQuizQuestions) ||
        currentArenaQuestion < 0 ||
        currentArenaQuestion >= arenaQuizQuestions.length
    ) {
        console.error("Soal Arena tidak tersedia atau indeks soal tidak valid.");
        return;
    }

    
if (
    !Array.isArray(arenaQuizQuestions) ||
    currentArenaQuestion < 0 ||
    currentArenaQuestion >= arenaQuizQuestions.length
) {
    console.error("Indeks soal Arena tidak valid:", {
        currentArenaQuestion,
        totalSoal: arenaQuizQuestions?.length
    });
    return;
}

const question = arenaQuizQuestions[currentArenaQuestion];

if (!question || !question.question || !Array.isArray(question.answers)) {
    console.error("Format data soal Arena salah:", question);
    return;
}


    document.getElementById("arena-question").textContent =
        question.question;


    document.getElementById("arena-question-number").textContent =
        "Battle " +
        (currentArenaQuestion + 1) +
        " / " +
        arenaQuizQuestions.length;


    document.getElementById("arena-score").textContent =
        "Score: " + arenaScore;


    document.getElementById("arena-progress").style.width =
    ((currentArenaQuestion + 1) /
    arenaQuizQuestions.length * 100) + "%";


    const answers =
        document.getElementById("arena-answers");

    answers.innerHTML = "";


    question.answers.forEach(answer => {

        const button = document.createElement("button");

        button.textContent = answer;

        button.className = "answer-button";

        button.onclick = function() {

            checkArenaAnswer(button, answer);

        };

        answers.appendChild(button);

    });


    document.getElementById("arena-feedback").textContent = "";

    document.getElementById("arena-next-button").style.display =
        "none";
}

if (document.getElementById("arena-question")) {
    startArenaQuiz();
}

function checkArenaAnswer(button, answer) {

    const question =
        arenaQuizQuestions[currentArenaQuestion];


    const buttons =
        document.querySelectorAll(
            "#arena-answers .answer-button"
        );


    buttons.forEach(btn => {
        btn.disabled = true;
    });


    if (answer === question.correct) {

        button.classList.add("correct");

        document.getElementById("arena-feedback").textContent =
            "⚔️ Boss Hit! +30 XP";

        arenaScore += 30;

        xp += 30;

        localStorage.setItem(
            "englishQuestXP",
            xp
        );

    } else {

        button.classList.add("wrong");

        document.getElementById("arena-feedback").textContent =
            "💥 Missed! The correct answer is " +
            question.correct;
    }


    document.getElementById("arena-score").textContent =
        "Score: " + arenaScore;


    document.getElementById("arena-xp").textContent =
        xp;


    document.getElementById("arena-next-button").style.display =
        "block";
}


function nextArenaQuestion() {
    currentArenaQuestion++;

    if (
        currentArenaQuestion <
        arenaQuizQuestions.length
    ) {
        loadArenaQuestion();
    } else {
        finishArena();
    }
}


function finishArena() {

    document.getElementById("arena-question").textContent =
        "👑 FINAL BOSS DEFEATED!";


    document.getElementById("arena-answers").innerHTML =
        "<h3>🏆 You earned " +
        arenaScore +
        " XP!</h3>";


    document.getElementById("arena-feedback").textContent =
        "🌟 Congratulations! You are an English Master!";


    document.getElementById("arena-next-button").textContent =
        "View Achievements 🏆";


    document.getElementById("arena-next-button").onclick =
        function() {

            window.location.href = "achievements.html";

        };
}


if (document.getElementById("arena-answers")) {

    document.getElementById("arena-xp").textContent = xp;

    loadArenaQuestion();

}


function updateQuestProgress() {

    const currentXP =
        Number(localStorage.getItem("englishQuestXP")) || 0;

    const xpText =
        document.getElementById("quest-xp");

    const xpFill =
        document.getElementById("quest-xp-fill");


    if (xpText) {
        xpText.textContent = currentXP;
    }


    if (xpFill) {

        let percentage =
            (currentXP / 550) * 100;

        if (percentage > 100) {
            percentage = 100;
        }

        xpFill.style.width =
            percentage + "%";
    }
}


updateQuestProgress();


function updateQuestLocks() {

    const currentXP =
        Number(localStorage.getItem("englishQuestXP")) || 0;

    const quests = [
        {
            button: "grammar-button",
            requiredXP: 20
        },
        {
            button: "listening-button",
            requiredXP: 40
        },
        {
            button: "detective-button",
            requiredXP: 60
        },
        {
            button: "arena-button",
            requiredXP: 80
        }
    ];

    quests.forEach(function (quest) {

        const button =
            document.getElementById(quest.button);

        if (!button) return;

        if (currentXP < quest.requiredXP) {

            button.disabled = true;
            button.textContent =
                "🔒 Need " + quest.requiredXP + " XP";

        } else {

            button.disabled = false;
            button.textContent =
                "Enter Quest";
        }
    });
}

updateQuestLocks();


function updateHomeXP() {

    const currentXP =
        Number(localStorage.getItem("englishQuestXP")) || 0;

    const homeXP =
        document.getElementById("home-xp");

    if (homeXP) {
        homeXP.textContent = currentXP;
    }
}

updateHomeXP();


function updateHomeXPBar() {

    const currentXP =
        Number(localStorage.getItem("englishQuestXP")) || 0;

    const xpFill =
        document.getElementById("home-xp-fill");

    if (xpFill) {

        let percentage =
            (currentXP / 550) * 100;

        if (percentage > 100) {
            percentage = 100;
        }

        xpFill.style.width =
            percentage + "%";
    }
}

updateHomeXPBar();


function updateHomeXP() {

    const currentXP =
        Number(localStorage.getItem("englishQuestXP")) || 0;

    const xpText =
        document.getElementById("home-xp");

    if (xpText) {
        xpText.textContent = currentXP;
    }
}

updateHomeXP();


function updateVocabularyXP() {
    const savedXP = Number(localStorage.getItem("englishQuestXP")) || 0;
    const xpDisplay = document.getElementById("xp");

    if (xpDisplay) {
        xpDisplay.textContent = savedXP;
    }
}

updateVocabularyXP();