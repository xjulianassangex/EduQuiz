/* ============================================
   EDUCATIONAL GAME - SCRIPT.JS
   ============================================ */
'use strict';
// ============================================
// TRANSLATIONS
// ============================================
const translations = {
  en: {
    // App
    appName: 'EduQuiz',
    tagline: 'Learn. Play. Win.',
    
    // Nav / Header
    back: 'Back',
    close: 'Close',
    save: 'Save',
    cancel: 'Cancel',
    delete: 'Delete',
    edit: 'Edit',
    play: 'Play',
    create: 'Create',
    confirm: 'Confirm',
    yes: 'Yes',
    no: 'No',
    
    // Home
    homeWelcome: 'Welcome back',
    homeSubtitle: 'Ready for today\'s challenge?',
    heroSubtitle: 'Create quizzes, challenge yourself, climb the leaderboard.',
    statGames: 'Games',
    statWins: 'Wins',
    statAccuracy: 'Accuracy',
    
    // Home Cards
    createQuizTitle: 'Create Quiz',
    createQuizDesc: 'Build your own quiz with multiple question types',
    playQuizTitle: 'Play Quiz',
    playQuizDesc: 'Take on existing quizzes and earn points',
    leaderboardTitle: 'Leaderboard',
    leaderboardDesc: 'See who\'s at the top of the rankings',
    statsTitle: 'Statistics',
    statsDesc: 'Track your progress with detailed analytics',
    settingsTitle: 'Settings',
    settingsDesc: 'Customize your experience',
    
    // Quiz List
    playQuiz: 'Play Quiz',
    myQuizzes: 'My Quizzes',
    allQuizzes: 'All Quizzes',
    searchPlaceholder: 'Search quizzes...',
    noQuizzesFound: 'No quizzes found',
    noQuizzesDesc: 'Create your first quiz to get started!',
    createFirstQuiz: 'Create First Quiz',
    questions: 'questions',
    question: 'question',
    byAuthor: 'by',
    plays: 'plays',
    
    // Categories
    catAll: 'All',
    catScience: 'Science',
    catMath: 'Math',
    catHistory: 'History',
    catLanguage: 'Language',
    catGeography: 'Geography',
    catSports: 'Sports',
    catMusic: 'Music',
    catGeneral: 'General',
    catCustom: 'Custom',
    
    // Create Quiz
    createQuiz: 'Create Quiz',
    editQuiz: 'Edit Quiz',
    quizTitle: 'Quiz Title',
    quizTitlePlaceholder: 'Enter quiz title...',
    quizDesc: 'Description',
    quizDescPlaceholder: 'Describe your quiz...',
    category: 'Category',
    timeLimitPerQ: 'Time Limit (per question)',
    seconds: 'seconds',
    quizIcon: 'Quiz Icon',
    
    // Questions
    addQuestion: 'Add Question',
    noQuestionsYet: 'No questions yet',
    addFirstQuestion: 'Add your first question',
    questionText: 'Question',
    questionPlaceholder: 'Enter your question...',
    questionType: 'Question Type',
    timeLimit: 'Time Limit',
    points: 'Points',
    
    // Question Types
    multipleChoice: 'Multiple Choice',
    trueFalse: 'True / False',
    fillBlank: 'Fill in the Blank',
    matching: 'Matching',
    imageQuestion: 'Image Question',
    
    // Options
    optionA: 'Option A',
    optionB: 'Option B',
    optionC: 'Option C',
    optionD: 'Option D',
    correctAnswer: 'Correct Answer',
    correctAnswerLabel: 'Mark Correct Answer',
    imageUrl: 'Image URL',
    imageUrlPlaceholder: 'https://example.com/image.jpg',
    answerPlaceholder: 'Enter correct answer...',
    matchLeft: 'Left Column',
    matchRight: 'Right Column',
    matchItemLeft: 'Item',
    matchItemRight: 'Match',
    addPair: 'Add Pair',
    
    // True/False
    true: 'True',
    false: 'False',
    
    // Play
    getReady: 'Get Ready!',
    quizStartsIn: 'Quiz starts in...',
    question: 'Question',
    of: 'of',
    score: 'Score',
    streak: 'Streak',
    timeLeft: 'Time Left',
    skip: 'Skip',
    submitAnswer: 'Submit',
    nextQuestion: 'Next Question',
    correct: 'Correct!',
    incorrect: 'Incorrect!',
    timeUp: 'Time\'s Up!',
    streakBonus: '🔥 Streak Bonus',
    speedBonus: '⚡ Speed Bonus',
    
    // Results
    resultsTitle: 'Quiz Complete!',
    greatJob: 'Great Job!',
    wellDone: 'Well Done!',
    keepPracticing: 'Keep Practicing!',
    perfect: 'Perfect Score!',
    yourScore: 'Your Score',
    correctAnswers: 'Correct',
    wrongAnswers: 'Wrong',
    accuracy: 'Accuracy',
    timeTaken: 'Time Taken',
    bestStreak: 'Best Streak',
    playAgain: 'Play Again',
    backHome: 'Home',
    reviewAnswers: 'Review Answers',
    newRecord: '🏆 New Record!',
    xpEarned: 'XP Earned',
    
    // Leaderboard
    leaderboard: 'Leaderboard',
    rank: 'Rank',
    player: 'Player',
    wins: 'Wins',
    gamesPlayed: 'Games',
    winRate: 'Win Rate',
    noPlayersYet: 'No players yet',
    beFirst: 'Be the first to play!',
    
    // Stats
    statistics: 'Statistics',
    overview: 'Overview',
    totalGames: 'Total Games',
    totalWins: 'Total Wins',
    totalXP: 'Total XP',
    avgAccuracy: 'Avg Accuracy',
    quizzesCreated: 'Quizzes Created',
    answeredQuestions: 'Answered',
    gamesChart: 'Games per Day',
    accuracyChart: 'Accuracy Trend',
    achievementsTitle: 'Achievements',
    recentGames: 'Recent Games',
    noGamesYet: 'No games played yet',
    
    // Achievements
    achFirstStep: 'First Step',
    achFirstStepDesc: 'Complete your first quiz',
    achTenWins: 'Ten Wins',
    achTenWinsDesc: 'Win 10 quizzes',
    achHundredAnswers: 'Century',
    achHundredAnswersDesc: 'Answer 100 questions',
    achStreak10: 'On Fire',
    achStreak10Desc: 'Get a 10-answer streak',
    achFirstQuiz: 'Quiz Creator',
    achFirstQuizDesc: 'Create your first quiz',
    achPerfect: 'Perfectionist',
    achPerfectDesc: 'Get 100% accuracy in a quiz',
    achSpeedster: 'Speedster',
    achSpeedsterDesc: 'Answer in under 3 seconds',
    achUnlocked: 'UNLOCKED',
    
    // Settings
    settings: 'Settings',
    profile: 'Profile',
    username: 'Username',
    usernamePlaceholder: 'Enter your name...',
    avatar: 'Avatar',
    
    appearance: 'Appearance',
    theme: 'Theme',
    darkMode: 'Dark Mode',
    darkModeDesc: 'Switch between dark and light theme',
    language: 'Language',
    languageDesc: 'Choose your preferred language',
    
    sound: 'Sound',
    soundEffects: 'Sound Effects',
    soundEffectsDesc: 'Play sounds during gameplay',
    music: 'Background Music',
    musicDesc: 'Play ambient background music',
    volume: 'Volume',
    
    gameplay: 'Gameplay',
    showTimer: 'Show Timer',
    showTimerDesc: 'Display countdown timer during questions',
    animations: 'Animations',
    animationsDesc: 'Enable UI animations',
    autoNext: 'Auto Next',
    autoNextDesc: 'Automatically move to next question',
    
    data: 'Data',
    exportData: 'Export Data',
    exportDataDesc: 'Download your data as JSON',
    importData: 'Import Data',
    importDataDesc: 'Restore from a backup file',
    clearData: 'Clear All Data',
    clearDataDesc: 'Remove all data permanently',
    clearDataConfirm: 'Are you sure? This cannot be undone.',
    
    // Modals
    deleteQuizTitle: 'Delete Quiz',
    deleteQuizConfirm: 'Are you sure you want to delete this quiz?',
    addQuestionTitle: 'Add Question',
    editQuestionTitle: 'Edit Question',
    
    // Toasts
    quizSaved: 'Quiz saved successfully!',
    quizDeleted: 'Quiz deleted',
    settingsSaved: 'Settings saved',
    achievementUnlocked: 'Achievement Unlocked!',
    copiedToClipboard: 'Copied to clipboard!',
    dataExported: 'Data exported!',
    dataImported: 'Data imported!',
    invalidFile: 'Invalid file format',
    fillAllFields: 'Please fill all required fields',
    minOneQuestion: 'Add at least one question',
    
    // Misc
    loading: 'Loading...',
    level: 'Level',
    xp: 'XP',
    pointsLabel: 'pts',
    min2Options: 'At least 2 options required',
    selectCorrect: 'Select the correct answer',
    enterQuestion: 'Question text is required',
    sec: 's',
  },
  ru: {
    appName: 'EduQuiz',
    tagline: 'Учись. Играй. Побеждай.',
    
    back: 'Назад',
    close: 'Закрыть',
    save: 'Сохранить',
    cancel: 'Отмена',
    delete: 'Удалить',
    edit: 'Редактировать',
    play: 'Играть',
    create: 'Создать',
    confirm: 'Подтвердить',
    yes: 'Да',
    no: 'Нет',
    
    homeWelcome: 'С возвращением',
    homeSubtitle: 'Готов к испытанию?',
    heroSubtitle: 'Создавай викторины, соревнуйся и поднимайся в рейтинге.',
    statGames: 'Игры',
    statWins: 'Победы',
    statAccuracy: 'Точность',
    
    createQuizTitle: 'Создать викторину',
    createQuizDesc: 'Создай свою викторину с разными типами вопросов',
    playQuizTitle: 'Пройти викторину',
    playQuizDesc: 'Проходи викторины и зарабатывай очки',
    leaderboardTitle: 'Рейтинг',
    leaderboardDesc: 'Кто на вершине рейтинга?',
    statsTitle: 'Статистика',
    statsDesc: 'Отслеживай свой прогресс',
    settingsTitle: 'Настройки',
    settingsDesc: 'Настрой под себя',
    
    playQuiz: 'Играть',
    myQuizzes: 'Мои викторины',
    allQuizzes: 'Все викторины',
    searchPlaceholder: 'Поиск викторин...',
    noQuizzesFound: 'Викторины не найдены',
    noQuizzesDesc: 'Создай свою первую викторину!',
    createFirstQuiz: 'Создать первую',
    questions: 'вопросов',
    question: 'вопрос',
    byAuthor: 'автор:',
    plays: 'игр',
    
    catAll: 'Все',
    catScience: 'Наука',
    catMath: 'Математика',
    catHistory: 'История',
    catLanguage: 'Язык',
    catGeography: 'География',
    catSports: 'Спорт',
    catMusic: 'Музыка',
    catGeneral: 'Общие',
    catCustom: 'Свои',
    
    createQuiz: 'Создать викторину',
    editQuiz: 'Редактировать',
    quizTitle: 'Название',
    quizTitlePlaceholder: 'Введите название...',
    quizDesc: 'Описание',
    quizDescPlaceholder: 'Опишите вашу викторину...',
    category: 'Категория',
    timeLimitPerQ: 'Лимит времени (на вопрос)',
    seconds: 'секунд',
    quizIcon: 'Иконка',
    
    addQuestion: 'Добавить вопрос',
    noQuestionsYet: 'Вопросов пока нет',
    addFirstQuestion: 'Добавьте первый вопрос',
    questionText: 'Вопрос',
    questionPlaceholder: 'Введите вопрос...',
    questionType: 'Тип вопроса',
    timeLimit: 'Лимит времени',
    points: 'Очки',
    
    multipleChoice: 'Выбор ответа',
    trueFalse: 'Верно / Неверно',
    fillBlank: 'Заполни пропуск',
    matching: 'Соответствие',
    imageQuestion: 'Вопрос с изображением',
    
    optionA: 'Вариант А',
    optionB: 'Вариант Б',
    optionC: 'Вариант В',
    optionD: 'Вариант Г',
    correctAnswer: 'Правильный ответ',
    correctAnswerLabel: 'Отметить правильный',
    imageUrl: 'URL изображения',
    imageUrlPlaceholder: 'https://example.com/image.jpg',
    answerPlaceholder: 'Введите правильный ответ...',
    matchLeft: 'Левый столбец',
    matchRight: 'Правый столбец',
    matchItemLeft: 'Элемент',
    matchItemRight: 'Соответствие',
    addPair: 'Добавить пару',
    
    true: 'Верно',
    false: 'Неверно',
    
    getReady: 'Приготовься!',
    quizStartsIn: 'Викторина начнётся...',
    question: 'Вопрос',
    of: 'из',
    score: 'Очки',
    streak: 'Серия',
    timeLeft: 'Время',
    skip: 'Пропустить',
    submitAnswer: 'Ответить',
    nextQuestion: 'Далее',
    correct: 'Правильно!',
    incorrect: 'Неверно!',
    timeUp: 'Время вышло!',
    streakBonus: '🔥 Бонус серии',
    speedBonus: '⚡ Бонус скорости',
    
    resultsTitle: 'Викторина завершена!',
    greatJob: 'Отлично!',
    wellDone: 'Хорошая работа!',
    keepPracticing: 'Продолжай тренироваться!',
    perfect: 'Идеальный результат!',
    yourScore: 'Ваши очки',
    correctAnswers: 'Правильно',
    wrongAnswers: 'Неверно',
    accuracy: 'Точность',
    timeTaken: 'Время',
    bestStreak: 'Лучшая серия',
    playAgain: 'Ещё раз',
    backHome: 'Главная',
    reviewAnswers: 'Просмотр ответов',
    newRecord: '🏆 Новый рекорд!',
    xpEarned: 'Получено XP',
    
    leaderboard: 'Рейтинг',
    rank: 'Место',
    player: 'Игрок',
    wins: 'Победы',
    gamesPlayed: 'Игры',
    winRate: 'Успех',
    noPlayersYet: 'Нет игроков',
    beFirst: 'Будь первым!',
    
    statistics: 'Статистика',
    overview: 'Обзор',
    totalGames: 'Всего игр',
    totalWins: 'Побед',
    totalXP: 'Всего XP',
    avgAccuracy: 'Средняя точность',
    quizzesCreated: 'Создано викторин',
    answeredQuestions: 'Ответов дано',
    gamesChart: 'Игры за дни',
    accuracyChart: 'Динамика точности',
    achievementsTitle: 'Достижения',
    recentGames: 'Недавние игры',
    noGamesYet: 'Игр пока нет',
    
    achFirstStep: 'Первый шаг',
    achFirstStepDesc: 'Пройди первую викторину',
    achTenWins: 'Десять побед',
    achTenWinsDesc: 'Выиграй 10 викторин',
    achHundredAnswers: 'Сотня',
    achHundredAnswersDesc: 'Ответь на 100 вопросов',
    achStreak10: 'В огне',
    achStreak10Desc: 'Получи серию из 10 ответов',
    achFirstQuiz: 'Создатель',
    achFirstQuizDesc: 'Создай первую викторину',
    achPerfect: 'Перфекционист',
    achPerfectDesc: '100% точность в викторине',
    achSpeedster: 'Молния',
    achSpeedsterDesc: 'Ответь за 3 секунды',
    achUnlocked: 'ОТКРЫТО',
    
    settings: 'Настройки',
    profile: 'Профиль',
    username: 'Имя пользователя',
    usernamePlaceholder: 'Введите имя...',
    avatar: 'Аватар',
    
    appearance: 'Внешний вид',
    theme: 'Тема',
    darkMode: 'Тёмная тема',
    darkModeDesc: 'Переключить тёмную/светлую тему',
    language: 'Язык',
    languageDesc: 'Выбрать язык интерфейса',
    
    sound: 'Звук',
    soundEffects: 'Звуковые эффекты',
    soundEffectsDesc: 'Воспроизводить звуки в игре',
    music: 'Фоновая музыка',
    musicDesc: 'Фоновая музыка во время игры',
    volume: 'Громкость',
    
    gameplay: 'Игровой процесс',
    showTimer: 'Таймер',
    showTimerDesc: 'Показывать таймер на вопросах',
    animations: 'Анимации',
    animationsDesc: 'Включить анимации интерфейса',
    autoNext: 'Авто-переход',
    autoNextDesc: 'Автоматически переходить к следующему',
    
    data: 'Данные',
    exportData: 'Экспорт данных',
    exportDataDesc: 'Скачать данные в формате JSON',
    importData: 'Импорт данных',
    importDataDesc: 'Восстановить из резервной копии',
    clearData: 'Очистить данные',
    clearDataDesc: 'Удалить все данные навсегда',
    clearDataConfirm: 'Вы уверены? Это нельзя отменить.',
    
    deleteQuizTitle: 'Удалить викторину',
    deleteQuizConfirm: 'Вы уверены, что хотите удалить эту викторину?',
    addQuestionTitle: 'Добавить вопрос',
    editQuestionTitle: 'Редактировать вопрос',
    
    quizSaved: 'Викторина сохранена!',
    quizDeleted: 'Викторина удалена',
    settingsSaved: 'Настройки сохранены',
    achievementUnlocked: 'Достижение разблокировано!',
    copiedToClipboard: 'Скопировано!',
    dataExported: 'Данные экспортированы!',
    dataImported: 'Данные импортированы!',
    invalidFile: 'Неверный формат файла',
    fillAllFields: 'Заполните все поля',
    minOneQuestion: 'Добавьте хотя бы один вопрос',
    
    loading: 'Загрузка...',
    level: 'Уровень',
    xp: 'XP',
    pointsLabel: 'очков',
    min2Options: 'Нужно минимум 2 варианта',
    selectCorrect: 'Выберите правильный ответ',
    enterQuestion: 'Введите текст вопроса',
    sec: 'с',
  },
  kz: {
    appName: 'EduQuiz',
    tagline: 'Үйрен. Ойна. Жең.',
    
    back: 'Артқа',
    close: 'Жабу',
    save: 'Сақтау',
    cancel: 'Болдырмау',
    delete: 'Жою',
    edit: 'Өңдеу',
    play: 'Ойнау',
    create: 'Жасау',
    confirm: 'Растау',
    yes: 'Иә',
    no: 'Жоқ',
    
    homeWelcome: 'Қош келдіңіз',
    homeSubtitle: 'Бүгінгі сынауға дайынсыз ба?',
    heroSubtitle: 'Викториналар жасаңыз, жарысыңыз, рейтингте өсіңіз.',
    statGames: 'Ойындар',
    statWins: 'Жеңістер',
    statAccuracy: 'Дәлдік',
    
    createQuizTitle: 'Викторина жасау',
    createQuizDesc: 'Өз викторинаңызды жасаңыз',
    playQuizTitle: 'Ойнау',
    playQuizDesc: 'Викториналарды өтіп, ұпай жинаңыз',
    leaderboardTitle: 'Рейтинг',
    leaderboardDesc: 'Кім бірінші орында?',
    statsTitle: 'Статистика',
    statsDesc: 'Прогрессіңізді қадағалаңыз',
    settingsTitle: 'Баптаулар',
    settingsDesc: 'Интерфейсті реттеңіз',
    
    playQuiz: 'Ойнау',
    myQuizzes: 'Менің викториналарым',
    allQuizzes: 'Барлық викториналар',
    searchPlaceholder: 'Викторина іздеу...',
    noQuizzesFound: 'Викториналар табылмады',
    noQuizzesDesc: 'Бірінші викторинаңызды жасаңыз!',
    createFirstQuiz: 'Бірінші жасау',
    questions: 'сұрақ',
    question: 'сұрақ',
    byAuthor: 'автор:',
    plays: 'ойын',
    
    catAll: 'Барлығы',
    catScience: 'Ғылым',
    catMath: 'Математика',
    catHistory: 'Тарих',
    catLanguage: 'Тіл',
    catGeography: 'География',
    catSports: 'Спорт',
    catMusic: 'Музыка',
    catGeneral: 'Жалпы',
    catCustom: 'Өз',
    
    createQuiz: 'Викторина жасау',
    editQuiz: 'Өңдеу',
    quizTitle: 'Атауы',
    quizTitlePlaceholder: 'Атауын енгізіңіз...',
    quizDesc: 'Сипаттама',
    quizDescPlaceholder: 'Сипаттаңыз...',
    category: 'Санат',
    timeLimitPerQ: 'Уақыт шегі (сұрақ үшін)',
    seconds: 'секунд',
    quizIcon: 'Белгіше',
    
    addQuestion: 'Сұрақ қосу',
    noQuestionsYet: 'Сұрақтар жоқ',
    addFirstQuestion: 'Бірінші сұрақты қосыңыз',
    questionText: 'Сұрақ',
    questionPlaceholder: 'Сұрақты енгізіңіз...',
    questionType: 'Сұрақ түрі',
    timeLimit: 'Уақыт шегі',
    points: 'Ұпайлар',
    
    multipleChoice: 'Бір жауап таңдау',
    trueFalse: 'Дұрыс / Бұрыс',
    fillBlank: 'Бос орынды толтыру',
    matching: 'Сәйкестендіру',
    imageQuestion: 'Суретті сұрақ',
    
    optionA: 'А нұсқасы',
    optionB: 'Б нұсқасы',
    optionC: 'В нұсқасы',
    optionD: 'Г нұсқасы',
    correctAnswer: 'Дұрыс жауап',
    correctAnswerLabel: 'Дұрысын белгілеу',
    imageUrl: 'Сурет URL',
    imageUrlPlaceholder: 'https://example.com/image.jpg',
    answerPlaceholder: 'Дұрыс жауапты енгізіңіз...',
    matchLeft: 'Сол жақ баған',
    matchRight: 'Оң жақ баған',
    matchItemLeft: 'Элемент',
    matchItemRight: 'Сәйкестік',
    addPair: 'Жұп қосу',
    
    true: 'Дұрыс',
    false: 'Бұрыс',
    
    getReady: 'Дайын бол!',
    quizStartsIn: 'Викторина басталады...',
    question: 'Сұрақ',
    of: '/',
    score: 'Ұпай',
    streak: 'Сериясы',
    timeLeft: 'Уақыт',
    skip: 'Өткізіп жіберу',
    submitAnswer: 'Жауап беру',
    nextQuestion: 'Келесі',
    correct: 'Дұрыс!',
    incorrect: 'Бұрыс!',
    timeUp: 'Уақыт аяқталды!',
    streakBonus: '🔥 Серия бонусы',
    speedBonus: '⚡ Жылдамдық бонусы',
    
    resultsTitle: 'Викторина аяқталды!',
    greatJob: 'Керемет!',
    wellDone: 'Жақсы!',
    keepPracticing: 'Жаттықтыруды жалғастыр!',
    perfect: 'Тамаша нәтиже!',
    yourScore: 'Сіздің ұпайыңыз',
    correctAnswers: 'Дұрыс',
    wrongAnswers: 'Бұрыс',
    accuracy: 'Дәлдік',
    timeTaken: 'Уақыт',
    bestStreak: 'Ең жақсы серия',
    playAgain: 'Қайта ойнау',
    backHome: 'Басты бет',
    reviewAnswers: 'Жауаптарды қарау',
    newRecord: '🏆 Жаңа рекорд!',
    xpEarned: 'XP алынды',
    
    leaderboard: 'Рейтинг',
    rank: 'Орын',
    player: 'Ойыншы',
    wins: 'Жеңістер',
    gamesPlayed: 'Ойындар',
    winRate: 'Жеңу %',
    noPlayersYet: 'Ойыншылар жоқ',
    beFirst: 'Бірінші болыңыз!',
    
    statistics: 'Статистика',
    overview: 'Шолу',
    totalGames: 'Барлық ойындар',
    totalWins: 'Жеңістер',
    totalXP: 'Барлық XP',
    avgAccuracy: 'Орт. дәлдік',
    quizzesCreated: 'Жасалған викториналар',
    answeredQuestions: 'Берілген жауаптар',
    gamesChart: 'Күн бойынша ойындар',
    accuracyChart: 'Дәлдік динамикасы',
    achievementsTitle: 'Жетістіктер',
    recentGames: 'Соңғы ойындар',
    noGamesYet: 'Ойындар жоқ',
    
    achFirstStep: 'Бірінші қадам',
    achFirstStepDesc: 'Бірінші викторинаны өтеңіз',
    achTenWins: 'Он жеңіс',
    achTenWinsDesc: '10 викторина жеңіңіз',
    achHundredAnswers: 'Жүздік',
    achHundredAnswersDesc: '100 сұраққа жауап беріңіз',
    achStreak10: 'Оттай жанасың',
    achStreak10Desc: '10 жауаптан тұратын серия',
    achFirstQuiz: 'Жасаушы',
    achFirstQuizDesc: 'Бірінші викторинаны жасаңыз',
    achPerfect: 'Перфекционист',
    achPerfectDesc: 'Викторинада 100% дәлдік',
    achSpeedster: 'Найзағай',
    achSpeedsterDesc: '3 секундта жауап беру',
    achUnlocked: 'АШЫЛДЫ',
    
    settings: 'Баптаулар',
    profile: 'Профиль',
    username: 'Пайдаланушы аты',
    usernamePlaceholder: 'Атыңызды енгізіңіз...',
    avatar: 'Аватар',
    
    appearance: 'Сыртқы көрініс',
    theme: 'Тақырып',
    darkMode: 'Қараңғы режим',
    darkModeDesc: 'Қараңғы/жарық тақырыпты ауыстыру',
    language: 'Тіл',
    languageDesc: 'Интерфейс тілін таңдаңыз',
    
    sound: 'Дыбыс',
    soundEffects: 'Дыбыстық эффектілер',
    soundEffectsDesc: 'Ойын кезінде дыбыс ойнату',
    music: 'Фондық музыка',
    musicDesc: 'Фондық музыка',
    volume: 'Дауыс деңгейі',
    
    gameplay: 'Ойын процесі',
    showTimer: 'Таймер',
    showTimerDesc: 'Сұрақтарда таймерді көрсету',
    animations: 'Анимациялар',
    animationsDesc: 'UI анимацияларын қосу',
    autoNext: 'Авто-өту',
    autoNextDesc: 'Автоматты түрде келесіге өту',
    
    data: 'Деректер',
    exportData: 'Деректерді экспорттау',
    exportDataDesc: 'JSON ретінде жүктеп алу',
    importData: 'Деректерді импорттау',
    importDataDesc: 'Сақтық көшірмеден қалпына келтіру',
    clearData: 'Деректерді тазалау',
    clearDataDesc: 'Барлық деректерді жою',
    clearDataConfirm: 'Сенімдісіз бе? Бұл болдырылмайды.',
    
    deleteQuizTitle: 'Викторинаны жою',
    deleteQuizConfirm: 'Бұл викторинаны жойғыңыз келе ме?',
    addQuestionTitle: 'Сұрақ қосу',
    editQuestionTitle: 'Сұрақты өңдеу',
    
    quizSaved: 'Викторина сақталды!',
    quizDeleted: 'Викторина жойылды',
    settingsSaved: 'Баптаулар сақталды',
    achievementUnlocked: 'Жетістік ашылды!',
    copiedToClipboard: 'Көшірілді!',
    dataExported: 'Деректер экспортталды!',
    dataImported: 'Деректер импортталды!',
    invalidFile: 'Жарамсыз файл форматы',
    fillAllFields: 'Барлық өрістерді толтырыңыз',
    minOneQuestion: 'Кем дегенде бір сұрақ қосыңыз',
    
    loading: 'Жүктелуде...',
    level: 'Деңгей',
    xp: 'XP',
    pointsLabel: 'ұпай',
    min2Options: 'Кем дегенде 2 нұсқа қажет',
    selectCorrect: 'Дұрыс жауапты таңдаңыз',
    enterQuestion: 'Сұрақ мәтінін енгізіңіз',
    sec: 'с',
  }
};
// ============================================
// APP STATE
// ============================================
const App = {
  currentScreen: 'home',
  settings: {
    lang: 'en',
    theme: 'dark',
    sound: true,
    music: false,
    volume: 0.5,
    showTimer: true,
    animations: true,
    autoNext: false,
    username: 'Player',
    avatar: '🎮',
  },
  user: {
    xp: 0,
    level: 1,
    totalGames: 0,
    totalWins: 0,
    totalAnswered: 0,
    accuracyHistory: [],
    gameHistory: [],
    achievements: {},
    bestScores: {},
    bestStreaks: {},
  },
  quizzes: [],
  editingQuizId: null,
  currentQuiz: null,
  currentQuestions: [],
  currentQuestionIndex: 0,
  currentScore: 0,
  currentStreak: 0,
  bestStreak: 0,
  timerInterval: null,
  timeLeft: 30,
  answerStartTime: null,
  answeredQuestions: [],
  matchState: { left: null, pairs: [] },
  activeCategory: 'all',
  searchQuery: '',
  t(key) {
    const lang = this.settings.lang || 'en';
    return (translations[lang] && translations[lang][key]) || translations['en'][key] || key;
  }
};
// ============================================
// LOCAL STORAGE
// ============================================
const Storage = {
  save() {
    try {
      localStorage.setItem('eduquiz_settings', JSON.stringify(App.settings));
      localStorage.setItem('eduquiz_user', JSON.stringify(App.user));
      localStorage.setItem('eduquiz_quizzes', JSON.stringify(App.quizzes));
    } catch(e) { console.warn('Storage error:', e); }
  },
  load() {
    try {
      const s = localStorage.getItem('eduquiz_settings');
      const u = localStorage.getItem('eduquiz_user');
      const q = localStorage.getItem('eduquiz_quizzes');
      if (s) App.settings = { ...App.settings, ...JSON.parse(s) };
      if (u) App.user = { ...App.user, ...JSON.parse(u) };
      if (q) App.quizzes = JSON.parse(q);
    } catch(e) { console.warn('Load error:', e); }
  },
  exportData() {
    const data = {
      version: '1.0',
      exportDate: new Date().toISOString(),
      settings: App.settings,
      user: App.user,
      quizzes: App.quizzes
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `eduquiz_backup_${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
    Toast.show(App.t('dataExported'), 'success');
  },
  importData(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target.result);
        if (!data.version) throw new Error('Invalid');
        if (data.settings) App.settings = { ...App.settings, ...data.settings };
        if (data.user) App.user = { ...App.user, ...data.user };
        if (data.quizzes) App.quizzes = data.quizzes;
        Storage.save();
        Toast.show(App.t('dataImported'), 'success');
        renderUI();
      } catch(e) {
        Toast.show(App.t('invalidFile'), 'error');
      }
    };
    reader.readAsText(file);
  }
};
// ============================================
// AUDIO SYSTEM
// ============================================
const Audio = {
  ctx: null,
  getCtx() {
    if (!this.ctx) {
      try { this.ctx = new (window.AudioContext || window.webkitAudioContext)(); } catch(e) {}
    }
    return this.ctx;
  },
  play(type) {
    if (!App.settings.sound) return;
    const ctx = this.getCtx();
    if (!ctx) return;
    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      gain.gain.setValueAtTime(App.settings.volume * 0.3, ctx.currentTime);
      const configs = {
        correct: { freq: [523, 659, 784], dur: 0.15, wave: 'sine' },
        wrong:   { freq: [300, 200], dur: 0.2, wave: 'sawtooth' },
        win:     { freq: [523, 659, 784, 1047], dur: 0.12, wave: 'sine' },
        achievement: { freq: [784, 880, 1047, 1175], dur: 0.1, wave: 'sine' },
        click:   { freq: [440], dur: 0.05, wave: 'sine' },
        tick:    { freq: [880], dur: 0.04, wave: 'square' },
        start:   { freq: [440, 550, 660], dur: 0.15, wave: 'sine' },
      };
      const cfg = configs[type] || configs.click;
      let time = ctx.currentTime;
      cfg.freq.forEach(f => {
        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.connect(g); g.connect(ctx.destination);
        o.type = cfg.wave;
        o.frequency.setValueAtTime(f, time);
        g.gain.setValueAtTime(App.settings.volume * 0.25, time);
        g.gain.exponentialRampToValueAtTime(0.001, time + cfg.dur);
        o.start(time);
        o.stop(time + cfg.dur);
        time += cfg.dur * 0.5;
      });
    } catch(e) {}
  }
};
// ============================================
// TOAST NOTIFICATIONS
// ============================================
const Toast = {
  container: null,
  init() { this.container = document.getElementById('toast-container'); },
  show(msg, type = 'info', duration = 3000) {
    const icons = { success: '✅', error: '❌', warning: '⚠️', achievement: '🏆', info: 'ℹ️' };
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `<span class="toast-icon">${icons[type]||'ℹ️'}</span><span>${msg}</span>`;
    this.container.appendChild(toast);
    setTimeout(() => {
      toast.classList.add('removing');
      setTimeout(() => toast.remove(), 300);
    }, duration);
  }
};
// ============================================
// PARTICLES / BACKGROUND
// ============================================
const Particles = {
  canvas: null, ctx: null, particles: [], animFrame: null,
  init() {
    this.canvas = document.getElementById('bg-canvas');
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.resize();
    window.addEventListener('resize', () => this.resize());
    this.createParticles();
    this.animate();
  },
  resize() {
    if (!this.canvas) return;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  },
  createParticles() {
    this.particles = [];
    const count = Math.min(60, Math.floor(window.innerWidth / 20));
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: Math.random() * 2 + 0.5,
        dx: (Math.random() - 0.5) * 0.4,
        dy: (Math.random() - 0.5) * 0.4,
        opacity: Math.random() * 0.4 + 0.05,
      });
    }
  },
  animate() {
    if (!this.ctx) return;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    const color = isLight ? '0,0,0' : '255,255,255';
    this.particles.forEach(p => {
      p.x += p.dx; p.y += p.dy;
      if (p.x < 0) p.x = this.canvas.width;
      if (p.x > this.canvas.width) p.x = 0;
      if (p.y < 0) p.y = this.canvas.height;
      if (p.y > this.canvas.height) p.y = 0;
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(${color},${p.opacity})`;
      this.ctx.fill();
    });
    // Draw connections
    for (let i = 0; i < this.particles.length; i++) {
      for (let j = i + 1; j < this.particles.length; j++) {
        const dx = this.particles[i].x - this.particles[j].x;
        const dy = this.particles[i].y - this.particles[j].y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if (dist < 120) {
          this.ctx.beginPath();
          this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
          this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
          this.ctx.strokeStyle = `rgba(${color},${0.06 * (1 - dist/120)})`;
          this.ctx.lineWidth = 0.5;
          this.ctx.stroke();
        }
      }
    }
    this.animFrame = requestAnimationFrame(() => this.animate());
  }
};
// ============================================
// CONFETTI
// ============================================
function launchConfetti(count = 60) {
  const colors = ['#ffffff', '#cccccc', '#888888', '#444444', '#fbbf24', '#4ade80', '#60a5fa'];
  for (let i = 0; i < count; i++) {
    setTimeout(() => {
      const el = document.createElement('div');
      el.className = 'confetti-piece';
      el.style.cssText = `
        left: ${Math.random() * 100}vw;
        top: -10px;
        background: ${colors[Math.floor(Math.random() * colors.length)]};
        width: ${Math.random() * 10 + 6}px;
        height: ${Math.random() * 10 + 6}px;
        animation-duration: ${Math.random() * 2 + 2}s;
        animation-delay: ${Math.random() * 0.5}s;
        border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
      `;
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 4000);
    }, Math.random() * 500);
  }
}
// ============================================
// XP & LEVELING SYSTEM
// ============================================
const XP = {
  getNextLevel(level) { return level * 100 + 50; },
  add(amount) {
    App.user.xp += amount;
    let leveled = false;
    while (App.user.xp >= this.getNextLevel(App.user.level)) {
      App.user.xp -= this.getNextLevel(App.user.level);
      App.user.level++;
      leveled = true;
    }
    if (leveled) {
      Toast.show(`🎉 Level Up! Now level ${App.user.level}`, 'achievement', 4000);
      Audio.play('achievement');
    }
    Storage.save();
  },
  getProgress() {
    const needed = this.getNextLevel(App.user.level);
    return (App.user.xp / needed) * 100;
  }
};
// ============================================
// ACHIEVEMENTS SYSTEM
// ============================================
const ACHIEVEMENTS = [
  { id: 'firstStep', icon: '🏃', nameKey: 'achFirstStep', descKey: 'achFirstStepDesc',
    check: () => App.user.totalGames >= 1 },
  { id: 'tenWins', icon: '🏆', nameKey: 'achTenWins', descKey: 'achTenWinsDesc',
    check: () => App.user.totalWins >= 10 },
  { id: 'hundredAnswers', icon: '💯', nameKey: 'achHundredAnswers', descKey: 'achHundredAnswersDesc',
    check: () => App.user.totalAnswered >= 100 },
  { id: 'streak10', icon: '🔥', nameKey: 'achStreak10', descKey: 'achStreak10Desc',
    check: () => Object.values(App.user.bestStreaks || {}).some(s => s >= 10) },
  { id: 'firstQuiz', icon: '✏️', nameKey: 'achFirstQuiz', descKey: 'achFirstQuizDesc',
    check: () => App.quizzes.filter(q => q.createdBy === App.settings.username).length >= 1 },
  { id: 'perfect', icon: '⭐', nameKey: 'achPerfect', descKey: 'achPerfectDesc',
    check: () => (App.user.accuracyHistory || []).some(a => a === 100) },
  { id: 'speedster', icon: '⚡', nameKey: 'achSpeedster', descKey: 'achSpeedsterDesc',
    check: () => App.user.hadSpeedBonus === true },
];
function checkAchievements() {
  ACHIEVEMENTS.forEach(ach => {
    if (!App.user.achievements[ach.id] && ach.check()) {
      App.user.achievements[ach.id] = Date.now();
      Toast.show(`${ach.icon} ${App.t('achievementUnlocked')} ${App.t(ach.nameKey)}`, 'achievement', 5000);
      Audio.play('achievement');
      Storage.save();
    }
  });
}
// ============================================
// NAVIGATION
// ============================================
function showScreen(screenId, data = {}) {
  document.querySelectorAll('.screen').forEach(s => {
    s.classList.remove('active');
  });
  const screen = document.getElementById(`screen-${screenId}`);
  if (!screen) {
    console.warn('Screen not found:', screenId);
    return;
  }
  screen.classList.add('active');
  App.currentScreen = screenId;
  // Render content based on screen
  switch(screenId) {
    case 'home': renderHome(); break;
    case 'quiz-list': renderQuizList(); break;
    case 'create': renderCreate(data.quizId || null); break;
    case 'play-select': renderPlaySelect(); break;
    case 'play': renderPlay(data.quiz); break;
    case 'result': renderResult(); break;
    case 'leaderboard': renderLeaderboard(); break;
    case 'stats': renderStats(); break;
    case 'settings': renderSettings(); break;
  }
  window.scrollTo(0, 0);
}
// ============================================
// RENDER UI (Master Function)
// ============================================
function renderUI() {
  applyTheme();
  applyTranslations();
  updateHeaderXP();
  const screenRenders = {
    'home': renderHome,
    'quiz-list': renderQuizList,
    'create': () => renderCreate(App.editingQuizId),
    'play-select': renderPlaySelect,
    'leaderboard': renderLeaderboard,
    'stats': renderStats,
    'settings': renderSettings,
    'result': renderResult,
  };
  if (screenRenders[App.currentScreen]) {
    screenRenders[App.currentScreen]();
  }
}
function applyTheme() {
  document.documentElement.setAttribute('data-theme', App.settings.theme);
}
function applyTranslations() {
  // Apply data-i18n attributes
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = App.t(key);
  });
  // Apply placeholder translations
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    el.placeholder = App.t(key);
  });
}
function updateHeaderXP() {
  const badge = document.getElementById('header-xp-badge');
  if (badge) {
    badge.innerHTML = `
      <span>⚡</span>
      <span>${App.t('level')} ${App.user.level}</span>
      <span style="color:var(--text-muted)">|</span>
      <span>${App.user.xp} ${App.t('xp')}</span>
    `;
  }
}
// ============================================
// HOME SCREEN
// ============================================
function renderHome() {
  const el = document.getElementById('home-content');
  if (!el) return;
  const username = App.settings.username || 'Player';
  const acc = App.user.totalGames > 0
    ? Math.round((App.user.totalWins / App.user.totalGames) * 100)
    : 0;
  el.innerHTML = `
    <div class="home-hero">
      <div class="hero-title">${App.t('appName')}</div>
      <p class="hero-subtitle">${App.t('heroSubtitle')}</p>
      <div class="hero-stats">
        <div class="hero-stat">
          <div class="hero-stat-value">${App.user.totalGames}</div>
          <div class="hero-stat-label">${App.t('statGames')}</div>
        </div>
        <div class="hero-stat">
          <div class="hero-stat-value">${App.user.totalWins}</div>
          <div class="hero-stat-label">${App.t('statWins')}</div>
        </div>
        <div class="hero-stat">
          <div class="hero-stat-value">${acc}%</div>
          <div class="hero-stat-label">${App.t('statAccuracy')}</div>
        </div>
      </div>
    </div>
    <div class="home-grid">
      <div class="glass-card home-card" onclick="showScreen('play-select')">
        <div class="card-icon">🎮</div>
        <div class="card-title">${App.t('playQuizTitle')}</div>
        <div class="card-desc">${App.t('playQuizDesc')}</div>
        <div class="card-arrow">→</div>
      </div>
      <div class="glass-card home-card" onclick="showScreen('create')">
        <div class="card-icon">✏️</div>
        <div class="card-title">${App.t('createQuizTitle')}</div>
        <div class="card-desc">${App.t('createQuizDesc')}</div>
        <div class="card-arrow">→</div>
      </div>
      <div class="glass-card home-card" onclick="showScreen('leaderboard')">
        <div class="card-icon">🏆</div>
        <div class="card-title">${App.t('leaderboardTitle')}</div>
        <div class="card-desc">${App.t('leaderboardDesc')}</div>
        <div class="card-arrow">→</div>
      </div>
      <div class="glass-card home-card" onclick="showScreen('stats')">
        <div class="card-icon">📊</div>
        <div class="card-title">${App.t('statsTitle')}</div>
        <div class="card-desc">${App.t('statsDesc')}</div>
        <div class="card-arrow">→</div>
      </div>
      <div class="glass-card home-card" onclick="showScreen('quiz-list')">
        <div class="card-icon">📚</div>
        <div class="card-title">${App.t('myQuizzes')}</div>
        <div class="card-desc">${App.t('quizzesCreated')}: ${App.quizzes.length}</div>
        <div class="card-arrow">→</div>
      </div>
      <div class="glass-card home-card" onclick="showScreen('settings')">
        <div class="card-icon">⚙️</div>
        <div class="card-title">${App.t('settingsTitle')}</div>
        <div class="card-desc">${App.t('settingsDesc')}</div>
        <div class="card-arrow">→</div>
      </div>
    </div>
  `;
}
// ============================================
// QUIZ LIST SCREEN
// ============================================
function renderQuizList() {
  const el = document.getElementById('quiz-list-content');
  if (!el) return;
  const categories = ['all', 'science', 'math', 'history', 'language', 'geography', 'sports', 'music', 'general', 'custom'];
  const catKeys = { all:'catAll', science:'catScience', math:'catMath', history:'catHistory', language:'catLanguage', geography:'catGeography', sports:'catSports', music:'catMusic', general:'catGeneral', custom:'catCustom' };
  let filtered = App.quizzes.filter(q => {
    const matchCat = App.activeCategory === 'all' || q.category === App.activeCategory;
    const matchSearch = !App.searchQuery || q.title.toLowerCase().includes(App.searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });
  el.innerHTML = `
    <div class="screen-header">
      <button class="btn btn-ghost btn-icon" onclick="showScreen('home')">←</button>
      <h1 class="screen-title">${App.t('myQuizzes')}</h1>
      <button class="btn btn-primary btn-sm" onclick="showScreen('create')">+ ${App.t('create')}</button>
    </div>
    <div class="quiz-list-container">
      <div class="quiz-search">
        <span class="search-icon">🔍</span>
        <input class="input" type="text" placeholder="${App.t('searchPlaceholder')}"
          value="${App.searchQuery}"
          oninput="App.searchQuery=this.value;renderQuizList()" />
      </div>
      <div class="quiz-filters">
        ${categories.map(cat => `
          <button class="filter-btn ${App.activeCategory===cat?'active':''}"
            onclick="App.activeCategory='${cat}';renderQuizList()">
            ${App.t(catKeys[cat])}
          </button>
        `).join('')}
      </div>
      <div class="quiz-cards">
        ${filtered.length === 0 ? `
          <div class="empty-state">
            <div class="empty-state-icon">📭</div>
            <div class="empty-state-text">${App.t('noQuizzesFound')}</div>
            <div class="empty-state-sub">${App.t('noQuizzesDesc')}</div>
            <button class="btn btn-primary" onclick="showScreen('create')">${App.t('createFirstQuiz')}</button>
          </div>
        ` : filtered.map(quiz => `
          <div class="glass-card quiz-card">
            <div class="quiz-card-icon">${quiz.icon || '📝'}</div>
            <div class="quiz-card-info">
              <div class="quiz-card-title">${quiz.title}</div>
              <div class="quiz-card-meta">
                <span>📋 ${quiz.questions.length} ${App.t('questions')}</span>
                <span>👤 ${App.t('byAuthor')} ${quiz.createdBy || 'Unknown'}</span>
                <span>🎮 ${quiz.plays || 0} ${App.t('plays')}</span>
                <span>📁 ${App.t('cat'+quiz.category.charAt(0).toUpperCase()+quiz.category.slice(1)) || quiz.category}</span>
              </div>
            </div>
            <div class="quiz-card-actions">
              <button class="btn btn-success btn-sm" onclick="startQuizById('${quiz.id}')">▶ ${App.t('play')}</button>
              <button class="btn btn-secondary btn-sm" onclick="showScreen('create',{quizId:'${quiz.id}'})">✏️</button>
              <button class="btn btn-danger btn-sm" onclick="confirmDeleteQuiz('${quiz.id}')">🗑️</button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}
function confirmDeleteQuiz(id) {
  const quiz = App.quizzes.find(q => q.id === id);
  if (!quiz) return;
  showModal({
    title: App.t('deleteQuizTitle'),
    body: `<p>${App.t('deleteQuizConfirm')}</p><p style="font-weight:700;margin-top:8px">"${quiz.title}"</p>`,
    actions: [
      { label: App.t('cancel'), cls: 'btn-secondary', fn: closeModal },
      { label: App.t('delete'), cls: 'btn-danger', fn: () => { deleteQuiz(id); closeModal(); } }
    ]
  });
}
function deleteQuiz(id) {
  App.quizzes = App.quizzes.filter(q => q.id !== id);
  Storage.save();
  Toast.show(App.t('quizDeleted'), 'warning');
  renderQuizList();
}
// ============================================
// CREATE QUIZ SCREEN
// ============================================
let editQuizData = null;
let editQuestions = [];
function renderCreate(quizId = null) {
  const el = document.getElementById('create-content');
  if (!el) return;
  App.editingQuizId = quizId;
  if (quizId) {
    editQuizData = App.quizzes.find(q => q.id === quizId);
    editQuestions = editQuizData ? JSON.parse(JSON.stringify(editQuizData.questions)) : [];
  } else {
    editQuizData = null;
    editQuestions = [];
  }
  const data = editQuizData || { title: '', description: '', category: 'general', timeLimit: 30, icon: '📝' };
  const categories = ['general', 'science', 'math', 'history', 'language', 'geography', 'sports', 'music', 'custom'];
  const catKeys = { general:'catGeneral', science:'catScience', math:'catMath', history:'catHistory', language:'catLanguage', geography:'catGeography', sports:'catSports', music:'catMusic', custom:'catCustom' };
  const icons = ['📝','🔬','📐','📜','💬','🌍','⚽','🎵','🎯','💡','🧩','🌟','🎭','🚀','🦁'];
  el.innerHTML = `
    <div class="screen-header">
      <button class="btn btn-ghost btn-icon" onclick="showScreen('quiz-list')">←</button>
      <h1 class="screen-title">${quizId ? App.t('editQuiz') : App.t('createQuiz')}</h1>
      <button class="btn btn-primary" onclick="saveQuiz()">💾 ${App.t('save')}</button>
    </div>
    <div class="create-container">
      <div class="create-section">
        <div class="section-title">📋 ${App.t('quizTitle')}</div>
        <div class="input-group">
          <input class="input" id="quiz-title-input" type="text"
            placeholder="${App.t('quizTitlePlaceholder')}"
            value="${escHtml(data.title)}" />
        </div>
        <div class="input-group">
          <textarea class="input" id="quiz-desc-input"
            placeholder="${App.t('quizDescPlaceholder')}"
            rows="2">${escHtml(data.description || '')}</textarea>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px">
          <div class="input-group">
            <label class="input-label">${App.t('category')}</label>
            <select class="input" id="quiz-cat-input">
              ${categories.map(c => `<option value="${c}" ${data.category===c?'selected':''}>${App.t(catKeys[c])}</option>`).join('')}
            </select>
          </div>
          <div class="input-group">
            <label class="input-label">${App.t('timeLimitPerQ')} (${App.t('seconds')})</label>
            <input class="input" id="quiz-time-input" type="number" min="5" max="120" value="${data.timeLimit || 30}" />
          </div>
        </div>
        <div class="input-group">
          <label class="input-label">${App.t('quizIcon')}</label>
          <div style="display:flex;gap:8px;flex-wrap:wrap">
            ${icons.map(ic => `
              <button class="btn btn-secondary" style="padding:8px;font-size:1.3rem;${data.icon===ic?'border-color:var(--border-hover);background:var(--accent-dim)':''}"
                onclick="selectIcon('${ic}',this)">${ic}</button>
            `).join('')}
          </div>
          <input type="hidden" id="quiz-icon-input" value="${data.icon || '📝'}" />
        </div>
      </div>
      <div class="create-section">
        <div class="section-title">❓ ${App.t('addQuestion')} (${editQuestions.length})</div>
        <div id="questions-list" class="questions-list">
          ${renderQuestionsListHTML()}
        </div>
        <button class="btn btn-secondary" style="width:100%" onclick="openAddQuestionModal()">
          + ${App.t('addQuestion')}
        </button>
      </div>
    </div>
  `;
}
function selectIcon(icon, btn) {
  document.getElementById('quiz-icon-input').value = icon;
  btn.closest('.input-group').querySelectorAll('.btn').forEach(b => {
    b.style.borderColor = '';
    b.style.background = '';
  });
  btn.style.borderColor = 'var(--border-hover)';
  btn.style.background = 'var(--accent-dim)';
}
function renderQuestionsListHTML() {
  if (editQuestions.length === 0) {
    return `<div class="empty-state" style="padding:40px 0">
      <div class="empty-state-icon">❓</div>
      <div class="empty-state-text">${App.t('noQuestionsYet')}</div>
      <div class="empty-state-sub">${App.t('addFirstQuestion')}</div>
    </div>`;
  }
  const typeLabels = {
    'multiple': App.t('multipleChoice'),
    'truefalse': App.t('trueFalse'),
    'fill': App.t('fillBlank'),
    'match': App.t('matching'),
    'image': App.t('imageQuestion'),
  };
  return editQuestions.map((q, i) => `
    <div class="question-item">
      <div class="question-item-header">
        <div class="question-number">${i+1}</div>
        <span class="question-type-badge">${typeLabels[q.type] || q.type}</span>
        <div class="question-text-preview">${escHtml(q.text)}</div>
        <div class="question-item-actions">
          <button class="btn btn-secondary btn-sm" onclick="openEditQuestionModal(${i})">✏️</button>
          <button class="btn btn-danger btn-sm" onclick="removeQuestion(${i})">🗑️</button>
        </div>
      </div>
    </div>
  `).join('');
}
function refreshQuestionsList() {
  const el = document.getElementById('questions-list');
  if (el) el.innerHTML = renderQuestionsListHTML();
  const sec = document.querySelector('#create-content .section-title:last-of-type');
  if (sec) sec.textContent = `❓ ${App.t('addQuestion')} (${editQuestions.length})`;
}
function removeQuestion(index) {
  editQuestions.splice(index, 1);
  refreshQuestionsList();
}
function saveQuiz() {
  const title = document.getElementById('quiz-title-input')?.value?.trim();
  const desc = document.getElementById('quiz-desc-input')?.value?.trim();
  const cat = document.getElementById('quiz-cat-input')?.value;
  const time = parseInt(document.getElementById('quiz-time-input')?.value) || 30;
  const icon = document.getElementById('quiz-icon-input')?.value || '📝';
  if (!title) { Toast.show(App.t('fillAllFields'), 'error'); return; }
  if (editQuestions.length === 0) { Toast.show(App.t('minOneQuestion'), 'error'); return; }
  const quiz = {
    id: App.editingQuizId || generateId(),
    title,
    description: desc,
    category: cat,
    timeLimit: time,
    icon,
    questions: editQuestions,
    createdBy: App.settings.username || 'Player',
    createdAt: App.editingQuizId ? (editQuizData?.createdAt || Date.now()) : Date.now(),
    plays: App.editingQuizId ? (editQuizData?.plays || 0) : 0,
  };
  if (App.editingQuizId) {
    const idx = App.quizzes.findIndex(q => q.id === App.editingQuizId);
    if (idx !== -1) App.quizzes[idx] = quiz;
  } else {
    App.quizzes.push(quiz);
  }
  checkAchievements();
  Storage.save();
  Toast.show(App.t('quizSaved'), 'success');
  Audio.play('win');
  showScreen('quiz-list');
}
// ============================================
// QUESTION MODAL
// ============================================
let currentQuestionEdit = null;
let currentQuestionIndex = -1;
const QUESTION_TYPES = ['multiple', 'truefalse', 'fill', 'match', 'image'];
function openAddQuestionModal() {
  currentQuestionIndex = -1;
  currentQuestionEdit = {
    type: 'multiple',
    text: '',
    options: ['', '', '', ''],
    correct: 0,
    timeLimit: 30,
    points: 100,
    imageUrl: '',
    pairs: [{ left: '', right: '' }],
    fillAnswer: '',
  };
  showQuestionModal();
}
function openEditQuestionModal(index) {
  currentQuestionIndex = index;
  currentQuestionEdit = JSON.parse(JSON.stringify(editQuestions[index]));
  showQuestionModal();
}
function showQuestionModal() {
  const q = currentQuestionEdit;
  const typeLabels = {
    'multiple': App.t('multipleChoice'),
    'truefalse': App.t('trueFalse'),
    'fill': App.t('fillBlank'),
    'match': App.t('matching'),
    'image': App.t('imageQuestion'),
  };
  const body = `
    <div class="q-form">
      <div class="input-group">
        <label class="input-label">${App.t('questionType')}</label>
        <select class="input" id="q-type" onchange="changeQType(this.value)">
          ${QUESTION_TYPES.map(t => `<option value="${t}" ${q.type===t?'selected':''}>${typeLabels[t]}</option>`).join('')}
        </select>
      </div>
      <div class="input-group">
        <label class="input-label">${App.t('questionText')}</label>
        <textarea class="input" id="q-text" rows="2" placeholder="${App.t('questionPlaceholder')}">${escHtml(q.text)}</textarea>
      </div>
      <div id="q-type-fields">${renderQTypeFields()}</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
        <div class="input-group" style="margin:0">
          <label class="input-label">${App.t('timeLimit')} (${App.t('seconds')})</label>
          <input class="input" id="q-time" type="number" min="5" max="120" value="${q.timeLimit||30}" />
        </div>
        <div class="input-group" style="margin:0">
          <label class="input-label">${App.t('points')}</label>
          <input class="input" id="q-points" type="number" min="50" max="500" step="50" value="${q.points||100}" />
        </div>
      </div>
    </div>
  `;
  showModal({
    title: currentQuestionIndex === -1 ? App.t('addQuestionTitle') : App.t('editQuestionTitle'),
    body,
    wide: true,
    actions: [
      { label: App.t('cancel'), cls: 'btn-secondary', fn: closeModal },
      { label: App.t('save'), cls: 'btn-primary', fn: saveQuestion }
    ]
  });
}
function renderQTypeFields() {
  const q = currentQuestionEdit;
  switch(q.type) {
    case 'multiple':
    case 'image':
      const optLabels = ['A','B','C','D'];
      let html = '';
      if (q.type === 'image') {
        html += `<div class="input-group">
          <label class="input-label">${App.t('imageUrl')}</label>
          <input class="input" id="q-img" type="text" value="${escHtml(q.imageUrl||'')}" placeholder="${App.t('imageUrlPlaceholder')}" />
        </div>`;
      }
      html += `<div class="input-group">
        <label class="input-label">${App.t('optionA')} - ${App.t('optionD')}</label>
        <div class="options-grid">
          ${(q.options || ['','','','']).map((opt, i) => `
            <div class="option-input-wrap ${q.correct===i?'correct-option':''}">
              <span class="option-label">${optLabels[i]}</span>
              <input class="input" id="q-opt-${i}" type="text" value="${escHtml(opt)}"
                placeholder="${App.t('option'+optLabels[i])}" />
            </div>
          `).join('')}
        </div>
      </div>
      <div class="input-group">
        <label class="input-label">${App.t('correctAnswerLabel')}</label>
        <div class="correct-answers-group">
          ${optLabels.map((l, i) => `
            <div class="correct-answer-chip ${q.correct===i?'selected':''}"
              onclick="selectCorrectAnswer(${i})">
              ${l}
            </div>
          `).join('')}
        </div>
      </div>`;
      return html;
    case 'truefalse':
      return `<div class="input-group">
        <label class="input-label">${App.t('correctAnswer')}</label>
        <div class="correct-answers-group">
          <div class="correct-answer-chip ${q.correct===true?'selected':''}" onclick="selectTF(true)">${App.t('true')}</div>
          <div class="correct-answer-chip ${q.correct===false?'selected':''}" onclick="selectTF(false)">${App.t('false')}</div>
        </div>
      </div>`;
    case 'fill':
      return `<div class="input-group">
        <label class="input-label">${App.t('correctAnswer')}</label>
        <input class="input" id="q-fill" type="text" value="${escHtml(q.fillAnswer||'')}"
          placeholder="${App.t('answerPlaceholder')}" />
      </div>`;
    case 'match':
      const pairs = q.pairs || [{ left:'', right:'' }];
      return `<div class="input-group">
        <label class="input-label">${App.t('matchLeft')} / ${App.t('matchRight')}</label>
        <div id="match-pairs">
          ${pairs.map((p, i) => `
            <div style="display:grid;grid-template-columns:1fr 1fr auto;gap:8px;margin-bottom:8px" data-pair="${i}">
              <input class="input" type="text" value="${escHtml(p.left)}" placeholder="${App.t('matchItemLeft')} ${i+1}" id="pair-left-${i}" />
              <input class="input" type="text" value="${escHtml(p.right)}" placeholder="${App.t('matchItemRight')} ${i+1}" id="pair-right-${i}" />
              <button class="btn btn-danger btn-icon btn-sm" onclick="removePair(${i})" style="width:38px;height:38px">✕</button>
            </div>
          `).join('')}
        </div>
        <button class="btn btn-secondary btn-sm" onclick="addPair()" style="width:100%;margin-top:8px">+ ${App.t('addPair')}</button>
      </div>`;
    default: return '';
  }
}
function changeQType(type) {
  currentQuestionEdit.type = type;
  if (type === 'multiple' || type === 'image') {
    if (!currentQuestionEdit.options) currentQuestionEdit.options = ['','','',''];
    if (currentQuestionEdit.correct === undefined || typeof currentQuestionEdit.correct === 'boolean') currentQuestionEdit.correct = 0;
  }
  if (type === 'truefalse') {
    if (currentQuestionEdit.correct === undefined || typeof currentQuestionEdit.correct !== 'boolean') currentQuestionEdit.correct = true;
  }
  document.getElementById('q-type-fields').innerHTML = renderQTypeFields();
}
function selectCorrectAnswer(index) {
  currentQuestionEdit.correct = index;
  document.querySelectorAll('.correct-answer-chip').forEach((el, i) => {
    el.classList.toggle('selected', i === index);
  });
  document.querySelectorAll('.option-input-wrap').forEach((el, i) => {
    el.classList.toggle('correct-option', i === index);
  });
}
function selectTF(val) {
  currentQuestionEdit.correct = val;
  document.querySelectorAll('.correct-answer-chip').forEach(el => el.classList.remove('selected'));
  const chips = document.querySelectorAll('.correct-answer-chip');
  if (val === true && chips[0]) chips[0].classList.add('selected');
  if (val === false && chips[1]) chips[1].classList.add('selected');
}
function addPair() {
  // Read current values first
  readPairsFromDOM();
  currentQuestionEdit.pairs.push({ left: '', right: '' });
  document.getElementById('q-type-fields').innerHTML = renderQTypeFields();
}
function removePair(index) {
  readPairsFromDOM();
  currentQuestionEdit.pairs.splice(index, 1);
  if (currentQuestionEdit.pairs.length === 0) currentQuestionEdit.pairs = [{ left:'', right:'' }];
  document.getElementById('q-type-fields').innerHTML = renderQTypeFields();
}
function readPairsFromDOM() {
  const pairs = [];
  let i = 0;
  while (true) {
    const l = document.getElementById(`pair-left-${i}`);
    const r = document.getElementById(`pair-right-${i}`);
    if (!l || !r) break;
    pairs.push({ left: l.value, right: r.value });
    i++;
  }
  if (pairs.length > 0) currentQuestionEdit.pairs = pairs;
}
function saveQuestion() {
  const text = document.getElementById('q-text')?.value?.trim();
  if (!text) { Toast.show(App.t('enterQuestion'), 'error'); return; }
  const q = currentQuestionEdit;
  q.text = text;
  q.timeLimit = parseInt(document.getElementById('q-time')?.value) || 30;
  q.points = parseInt(document.getElementById('q-points')?.value) || 100;
  if (q.type === 'multiple' || q.type === 'image') {
    q.options = [0,1,2,3].map(i => document.getElementById(`q-opt-${i}`)?.value?.trim() || '');
    if (q.type === 'image') q.imageUrl = document.getElementById('q-img')?.value?.trim() || '';
    const filled = q.options.filter(o => o).length;
    if (filled < 2) { Toast.show(App.t('min2Options'), 'error'); return; }
  }
  if (q.type === 'fill') {
    q.fillAnswer = document.getElementById('q-fill')?.value?.trim() || '';
    if (!q.fillAnswer) { Toast.show(App.t('selectCorrect'), 'error'); return; }
  }
  if (q.type === 'match') {
    readPairsFromDOM();
    if (!q.pairs || q.pairs.filter(p => p.left && p.right).length < 1) {
      Toast.show(App.t('min2Options'), 'error'); return;
    }
  }
  if (currentQuestionIndex === -1) {
    editQuestions.push({ ...q });
  } else {
    editQuestions[currentQuestionIndex] = { ...q };
  }
  closeModal();
  refreshQuestionsList();
  Audio.play('click');
}
// ============================================
// PLAY SELECT SCREEN
// ============================================
function renderPlaySelect() {
  const el = document.getElementById('play-select-content');
  if (!el) return;
  const categories = ['all', 'science', 'math', 'history', 'language', 'geography', 'sports', 'music', 'general', 'custom'];
  const catKeys = { all:'catAll', science:'catScience', math:'catMath', history:'catHistory', language:'catLanguage', geography:'catGeography', sports:'catSports', music:'catMusic', general:'catGeneral', custom:'catCustom' };
  let filtered = App.quizzes.filter(q => {
    const matchCat = App.activeCategory === 'all' || q.category === App.activeCategory;
    const matchSearch = !App.searchQuery || q.title.toLowerCase().includes(App.searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });
  el.innerHTML = `
    <div class="screen-header">
      <button class="btn btn-ghost btn-icon" onclick="showScreen('home')">←</button>
      <h1 class="screen-title">${App.t('playQuizTitle')}</h1>
    </div>
    <div class="quiz-list-container">
      <div class="quiz-search">
        <span class="search-icon">🔍</span>
        <input class="input" type="text" placeholder="${App.t('searchPlaceholder')}"
          value="${App.searchQuery}"
          oninput="App.searchQuery=this.value;renderPlaySelect()" />
      </div>
      <div class="quiz-filters">
        ${categories.map(cat => `
          <button class="filter-btn ${App.activeCategory===cat?'active':''}"
            onclick="App.activeCategory='${cat}';renderPlaySelect()">
            ${App.t(catKeys[cat])}
          </button>
        `).join('')}
      </div>
      ${filtered.length === 0 ? `
        <div class="empty-state">
          <div class="empty-state-icon">🎮</div>
          <div class="empty-state-text">${App.t('noQuizzesFound')}</div>
          <div class="empty-state-sub">${App.t('noQuizzesDesc')}</div>
          <button class="btn btn-primary" onclick="showScreen('create')">${App.t('createFirstQuiz')}</button>
        </div>
      ` : `
        <div class="quiz-cards">
          ${filtered.map(quiz => `
            <div class="glass-card quiz-card" onclick="startQuizById('${quiz.id}')" style="cursor:pointer">
              <div class="quiz-card-icon" style="font-size:2rem">${quiz.icon||'📝'}</div>
              <div class="quiz-card-info">
                <div class="quiz-card-title">${escHtml(quiz.title)}</div>
                <div class="quiz-card-meta">
                  <span>📋 ${quiz.questions.length} ${App.t('questions')}</span>
                  <span>⏱️ ${quiz.timeLimit}${App.t('sec')}</span>
                  <span>🎮 ${quiz.plays||0} ${App.t('plays')}</span>
                  ${App.user.bestScores?.[quiz.id] ? `<span>🏆 ${App.t('score')}: ${App.user.bestScores[quiz.id]}</span>` : ''}
                </div>
              </div>
              <div class="quiz-card-actions">
                <button class="btn btn-primary" onclick="event.stopPropagation();startQuizById('${quiz.id}')">▶ ${App.t('play')}</button>
              </div>
            </div>
          `).join('')}
        </div>
      `}
    </div>
  `;
}
function startQuizById(id) {
  const quiz = App.quizzes.find(q => q.id === id);
  if (!quiz) { Toast.show('Quiz not found', 'error'); return; }
  showScreen('play', { quiz });
}
// ============================================
// PLAY SCREEN
// ============================================
function renderPlay(quiz) {
  if (!quiz) { showScreen('home'); return; }
  App.currentQuiz = quiz;
  App.currentQuestions = shuffle([...quiz.questions]);
  App.currentQuestionIndex = 0;
  App.currentScore = 0;
  App.currentStreak = 0;
  App.bestStreak = 0;
  App.answeredQuestions = [];
  App.matchState = { left: null, pairs: [] };
  // Increment play count
  const qIdx = App.quizzes.findIndex(q => q.id === quiz.id);
  if (qIdx !== -1) {
    App.quizzes[qIdx].plays = (App.quizzes[qIdx].plays || 0) + 1;
    Storage.save();
  }
  const el = document.getElementById('play-content');
  el.innerHTML = `
    <div id="countdown-overlay" class="countdown-overlay">
      <div id="countdown-number" class="countdown-number">3</div>
      <div class="countdown-text">${App.t('getReady')}</div>
    </div>
    <div class="play-container" id="play-main" style="opacity:0">
      <div class="play-header">
        <div class="progress-info">
          <div class="question-counter" id="q-counter">
            ${App.t('question')} 1 ${App.t('of')} ${App.currentQuestions.length}
          </div>
          <div class="score-display">⭐ <span id="score-val">0</span></div>
          ${App.currentStreak >= 3 ? `<div class="streak-badge">🔥 ${App.currentStreak}</div>` : ''}
        </div>
        <div class="timer-ring" id="timer-ring">
          <svg viewBox="0 0 80 80">
            <circle class="timer-bg" cx="40" cy="40" r="35"/>
            <circle class="timer-fg" id="timer-circle" cx="40" cy="40" r="35"/>
          </svg>
          <div class="timer-text" id="timer-val">30</div>
        </div>
      </div>
      <div class="progress-bar-wrap">
        <div class="progress-bar-fill" id="q-progress" style="width:0%"></div>
      </div>
      <div id="question-area"></div>
    </div>
  `;
  startCountdown(() => {
    document.getElementById('play-main').style.opacity = '1';
    document.getElementById('play-main').style.transition = 'opacity 0.5s ease';
    loadQuestion();
  });
}
function startCountdown(cb) {
  const overlay = document.getElementById('countdown-overlay');
  const numEl = document.getElementById('countdown-number');
  let count = 3;
  Audio.play('start');
  const interval = setInterval(() => {
    count--;
    if (count <= 0) {
      clearInterval(interval);
      overlay.style.display = 'none';
      cb();
    } else {
      numEl.textContent = count;
      numEl.style.animation = 'none';
      numEl.offsetHeight; // reflow
      numEl.style.animation = 'countPop 1s ease';
      Audio.play('tick');
    }
  }, 1000);
}
function loadQuestion() {
  const q = App.currentQuestions[App.currentQuestionIndex];
  if (!q) { endQuiz(); return; }
  // Update header
  const counter = document.getElementById('q-counter');
  if (counter) counter.textContent = `${App.t('question')} ${App.currentQuestionIndex+1} ${App.t('of')} ${App.currentQuestions.length}`;
  const progress = document.getElementById('q-progress');
  if (progress) progress.style.width = `${(App.currentQuestionIndex / App.currentQuestions.length) * 100}%`;
  App.timeLeft = q.timeLimit || App.currentQuiz.timeLimit || 30;
  App.answerStartTime = Date.now();
  startTimer(q);
  renderQuestion(q);
}
function renderQuestion(q) {
  const area = document.getElementById('question-area');
  if (!area) return;
  const typeLabel = {
    'multiple': App.t('multipleChoice'),
    'truefalse': App.t('trueFalse'),
    'fill': App.t('fillBlank'),
    'match': App.t('matching'),
    'image': App.t('imageQuestion'),
  }[q.type] || q.type;
  let answerHTML = '';
  switch(q.type) {
    case 'multiple':
    case 'image':
      const optLetters = ['A','B','C','D'];
      const filledOpts = (q.options || []).filter(o => o);
      answerHTML = `<div class="answers-grid">
        ${filledOpts.map((opt, i) => `
          <button class="answer-btn" data-index="${i}" onclick="submitMultipleAnswer(${i}, this)">
            <span class="answer-letter">${optLetters[i]}</span>
            <span>${escHtml(opt)}</span>
          </button>
        `).join('')}
      </div>`;
      break;
    case 'truefalse':
      answerHTML = `<div class="tf-grid">
        <button class="answer-btn tf-btn" onclick="submitTFAnswer(true, this)">
          <span style="font-size:2rem">✅</span> ${App.t('true')}
        </button>
        <button class="answer-btn tf-btn" onclick="submitTFAnswer(false, this)">
          <span style="font-size:2rem">❌</span> ${App.t('false')}
        </button>
      </div>`;
      break;
    case 'fill':
      answerHTML = `<div class="fill-blank-container">
        <input class="input" id="fill-input" type="text"
          placeholder="${App.t('answerPlaceholder')}"
          style="font-size:1.1rem;text-align:center"
          onkeydown="if(event.key==='Enter')submitFillAnswer()" />
        <button class="btn btn-primary" onclick="submitFillAnswer()">${App.t('submitAnswer')}</button>
      </div>`;
      break;
    case 'match':
      App.matchState = { left: null, pairs: [], matched: [], errors: [] };
      const shuffledRight = shuffle([...(q.pairs || []).map(p => p.right)]);
      answerHTML = `<div class="match-container">
        <div class="match-col">
          ${(q.pairs || []).map((p, i) => `
            <div class="match-item" data-left="${i}" onclick="selectMatchLeft(${i}, this)">
              ${escHtml(p.left)}
            </div>
          `).join('')}
        </div>
        <div class="match-col">
          ${shuffledRight.map((r, i) => `
            <div class="match-item" data-right="${escHtml(r)}" onclick="selectMatchRight('${escHtml(r)}', this)">
              ${escHtml(r)}
            </div>
          `).join('')}
        </div>
      </div>
      <div style="margin-top:16px;display:flex;justify-content:center">
        <button class="btn btn-primary" onclick="submitMatchAnswer()">
          ${App.t('submitAnswer')}
        </button>
      </div>`;
      break;
  }
  area.innerHTML = `
    <div class="glass-card question-card">
      <div class="question-type-label">${typeLabel}</div>
      <div class="question-text">${escHtml(q.text)}</div>
      ${q.type === 'image' && q.imageUrl ? `<img class="question-image" src="${q.imageUrl}" alt="question image" onerror="this.style.display='none'" />` : ''}
      ${App.currentStreak >= 3 ? `<div class="streak-badge">🔥 ${App.t('streak')}: ${App.currentStreak}</div>` : ''}
    </div>
    ${answerHTML}
  `;
  if (q.type === 'fill') {
    setTimeout(() => document.getElementById('fill-input')?.focus(), 100);
  }
}
function startTimer(q) {
  clearInterval(App.timerInterval);
  const timeLimit = q.timeLimit || App.currentQuiz.timeLimit || 30;
  App.timeLeft = timeLimit;
  const timerVal = document.getElementById('timer-val');
  const timerCircle = document.getElementById('timer-circle');
  const circumference = 2 * Math.PI * 35; // r=35
  if (timerCircle) {
    timerCircle.style.strokeDasharray = circumference;
    timerCircle.style.strokeDashoffset = 0;
  }
  App.timerInterval = setInterval(() => {
    App.timeLeft--;
    if (timerVal) timerVal.textContent = App.timeLeft;
    const progress = App.timeLeft / timeLimit;
    if (timerCircle) {
      timerCircle.style.strokeDashoffset = circumference * (1 - progress);
      if (progress < 0.3) timerCircle.style.stroke = 'var(--error)';
      else if (progress < 0.6) timerCircle.style.stroke = 'var(--warning)';
      else timerCircle.style.stroke = 'var(--text-primary)';
    }
    if (App.timeLeft <= 3 && App.timeLeft > 0) Audio.play('tick');
    if (App.timeLeft <= 0) {
      clearInterval(App.timerInterval);
      timeOut();
    }
  }, 1000);
}
function stopTimer() {
  clearInterval(App.timerInterval);
}
function timeOut() {
  const q = App.currentQuestions[App.currentQuestionIndex];
  Toast.show(App.t('timeUp'), 'warning', 1500);
  // Reveal correct answer
  revealCorrectAnswer(q);
  App.answeredQuestions.push({ q, userAnswer: null, correct: false, timeSpent: q.timeLimit });
  App.currentStreak = 0;
  setTimeout(() => nextQuestion(), 2000);
}
function revealCorrectAnswer(q) {
  if (q.type === 'multiple' || q.type === 'image') {
    document.querySelectorAll('.answer-btn').forEach(btn => {
      btn.disabled = true;
      if (parseInt(btn.dataset.index) === q.correct) btn.classList.add('reveal');
    });
  }
  if (q.type === 'truefalse') {
    document.querySelectorAll('.answer-btn').forEach(btn => btn.disabled = true);
  }
}
function submitMultipleAnswer(index, btn) {
  stopTimer();
  const q = App.currentQuestions[App.currentQuestionIndex];
  const isCorrect = index === q.correct;
  const timeSpent = (Date.now() - App.answerStartTime) / 1000;
  document.querySelectorAll('.answer-btn').forEach(b => b.disabled = true);
  if (isCorrect) {
    btn.classList.add('correct');
    processCorrect(q, timeSpent);
  } else {
    btn.classList.add('wrong');
    document.querySelectorAll('.answer-btn').forEach(b => {
      if (parseInt(b.dataset.index) === q.correct) b.classList.add('reveal');
    });
    processWrong(q, timeSpent);
  }
  App.answeredQuestions.push({ q, userAnswer: index, correct: isCorrect, timeSpent });
  scheduleNext();
}
function submitTFAnswer(answer, btn) {
  stopTimer();
  const q = App.currentQuestions[App.currentQuestionIndex];
  const isCorrect = answer === q.correct;
  const timeSpent = (Date.now() - App.answerStartTime) / 1000;
  document.querySelectorAll('.answer-btn').forEach(b => b.disabled = true);
  if (isCorrect) {
    btn.classList.add('correct');
    processCorrect(q, timeSpent);
  } else {
    btn.classList.add('wrong');
    processWrong(q, timeSpent);
  }
  App.answeredQuestions.push({ q, userAnswer: answer, correct: isCorrect, timeSpent });
  scheduleNext();
}
function submitFillAnswer() {
  const input = document.getElementById('fill-input');
  if (!input) return;
  const userAnswer = input.value.trim().toLowerCase();
  stopTimer();
  const q = App.currentQuestions[App.currentQuestionIndex];
  const correct = (q.fillAnswer || '').trim().toLowerCase();
  const isCorrect = userAnswer === correct || userAnswer.includes(correct) || correct.includes(userAnswer);
  const timeSpent = (Date.now() - App.answerStartTime) / 1000;
  if (isCorrect) {
    input.style.borderColor = 'var(--success)';
    processCorrect(q, timeSpent);
  } else {
    input.style.borderColor = 'var(--error)';
    input.value = q.fillAnswer;
    processWrong(q, timeSpent);
  }
  input.disabled = true;
  App.answeredQuestions.push({ q, userAnswer, correct: isCorrect, timeSpent });
  scheduleNext();
}
function selectMatchLeft(index, el) {
  document.querySelectorAll('[data-left]').forEach(e => e.classList.remove('selected'));
  App.matchState.left = { index, el };
  el.classList.add('selected');
}
function selectMatchRight(value, el) {
  if (App.matchState.left === null) return;
  const q = App.currentQuestions[App.currentQuestionIndex];
  const leftIndex = App.matchState.left.index;
  const expectedRight = q.pairs[leftIndex].right;
  const isMatch = value === expectedRight;
  if (isMatch) {
    App.matchState.left.el.classList.add('matched');
    el.classList.add('matched');
    App.matchState.pairs.push({ left: leftIndex, right: value });
    el.style.pointerEvents = 'none';
    App.matchState.left.el.style.pointerEvents = 'none';
    Audio.play('correct');
  } else {
    App.matchState.left.el.classList.add('error');
    el.classList.add('error');
    setTimeout(() => {
      App.matchState.left.el.classList.remove('error', 'selected');
      el.classList.remove('error');
    }, 500);
  }
  App.matchState.left = null;
  document.querySelectorAll('[data-left]').forEach(e => e.classList.remove('selected'));
}
function submitMatchAnswer() {
  stopTimer();
  const q = App.currentQuestions[App.currentQuestionIndex];
  const total = q.pairs.length;
  const matched = App.matchState.pairs.length;
  const isCorrect = matched === total;
  const timeSpent = (Date.now() - App.answerStartTime) / 1000;
  if (isCorrect) {
    processCorrect(q, timeSpent);
  } else {
    processWrong(q, timeSpent);
  }
  App.answeredQuestions.push({ q, userAnswer: matched + '/' + total, correct: isCorrect, timeSpent });
  scheduleNext();
}
function processCorrect(q, timeSpent) {
  App.currentStreak++;
  if (App.currentStreak > App.bestStreak) App.bestStreak = App.currentStreak;
  const timeLimit = q.timeLimit || App.currentQuiz.timeLimit || 30;
  const speedRatio = Math.max(0, (timeLimit - timeSpent) / timeLimit);
  const speedBonus = Math.round(speedRatio * (q.points || 100) * 0.5);
  const streakBonus = App.currentStreak >= 3 ? Math.round((q.points || 100) * 0.2) : 0;
  const basePoints = q.points || 100;
  const totalPoints = basePoints + speedBonus + streakBonus;
  App.currentScore += totalPoints;
  if (timeSpent < 3) App.user.hadSpeedBonus = true;
  showScorePopup(`+${totalPoints} ✨`, true);
  Audio.play('correct');
  if (speedBonus > 0) Toast.show(`${App.t('speedBonus')}: +${speedBonus}`, 'success', 1500);
  if (streakBonus > 0) Toast.show(`${App.t('streakBonus')}: +${streakBonus}`, 'success', 1500);
  const scoreEl = document.getElementById('score-val');
  if (scoreEl) scoreEl.textContent = App.currentScore;
  updateStreakDisplay();
}
function processWrong(q, timeSpent) {
  App.currentStreak = 0;
  showScorePopup('✗', false);
  Audio.play('wrong');
  updateStreakDisplay();
}
function updateStreakDisplay() {
  const badge = document.querySelector('.streak-badge');
  if (App.currentStreak >= 3) {
    if (badge) badge.textContent = `🔥 ${App.t('streak')}: ${App.currentStreak}`;
    else {
      const qCard = document.querySelector('.question-card');
      if (qCard) {
        const b = document.createElement('div');
        b.className = 'streak-badge';
        b.textContent = `🔥 ${App.t('streak')}: ${App.currentStreak}`;
        qCard.appendChild(b);
      }
    }
  } else if (badge) {
    badge.remove();
  }
}
function showScorePopup(text, correct) {
  const popup = document.createElement('div');
  popup.className = 'score-popup';
  popup.textContent = text;
  popup.style.color = correct ? 'var(--success)' : 'var(--error)';
  document.body.appendChild(popup);
  setTimeout(() => popup.remove(), 1200);
}
function scheduleNext() {
  if (App.settings.autoNext) {
    setTimeout(() => nextQuestion(), 1500);
  } else {
    const area = document.getElementById('question-area');
    if (area) {
      const nextBtn = document.createElement('div');
      nextBtn.style.cssText = 'display:flex;justify-content:center;margin-top:20px';
      nextBtn.innerHTML = `<button class="btn btn-primary btn-lg" onclick="nextQuestion()">
        ${App.t('nextQuestion')} →
      </button>`;
      area.appendChild(nextBtn);
    }
  }
}
function nextQuestion() {
  App.currentQuestionIndex++;
  if (App.currentQuestionIndex >= App.currentQuestions.length) {
    endQuiz();
  } else {
    loadQuestion();
  }
}
function endQuiz() {
  stopTimer();
  const total = App.currentQuestions.length;
  const correctCount = App.answeredQuestions.filter(a => a.correct).length;
  const accuracy = total > 0 ? Math.round((correctCount / total) * 100) : 0;
  const isWin = accuracy >= 50;
  // Update stats
  App.user.totalGames++;
  App.user.totalAnswered += total;
  if (isWin) App.user.totalWins++;
  App.user.accuracyHistory = App.user.accuracyHistory || [];
  App.user.accuracyHistory.push(accuracy);
  if (App.user.accuracyHistory.length > 30) App.user.accuracyHistory.shift();
  App.user.gameHistory = App.user.gameHistory || [];
  App.user.gameHistory.push({
    quizId: App.currentQuiz.id,
    quizTitle: App.currentQuiz.title,
    score: App.currentScore,
    accuracy,
    date: Date.now(),
    correct: correctCount,
    total,
  });
  if (App.user.gameHistory.length > 50) App.user.gameHistory.shift();
  // Best scores
  App.user.bestScores = App.user.bestScores || {};
  if (!App.user.bestScores[App.currentQuiz.id] || App.currentScore > App.user.bestScores[App.currentQuiz.id]) {
    App.user.bestScores[App.currentQuiz.id] = App.currentScore;
    if (App.user.totalGames > 1) Toast.show(App.t('newRecord'), 'achievement', 3000);
  }
  App.user.bestStreaks = App.user.bestStreaks || {};
  if (!App.user.bestStreaks[App.currentQuiz.id] || App.bestStreak > App.user.bestStreaks[App.currentQuiz.id]) {
    App.user.bestStreaks[App.currentQuiz.id] = App.bestStreak;
  }
  // XP
  const xpGained = Math.round(App.currentScore * 0.1) + (isWin ? 50 : 10);
  XP.add(xpGained);
  checkAchievements();
  Storage.save();
  // Update leaderboard
  updateLeaderboard();
  if (isWin) {
    Audio.play('win');
    launchConfetti();
  }
  showScreen('result');
}
function updateLeaderboard() {
  const lb = JSON.parse(localStorage.getItem('eduquiz_leaderboard') || '[]');
  const username = App.settings.username || 'Player';
  const idx = lb.findIndex(e => e.username === username);
  const entry = {
    username,
    avatar: App.settings.avatar || '🎮',
    score: App.currentScore,
    totalScore: (idx !== -1 ? lb[idx].totalScore : 0) + App.currentScore,
    games: (idx !== -1 ? lb[idx].games : 0) + 1,
    wins: (idx !== -1 ? lb[idx].wins : 0) + (App.currentScore >= (App.currentQuestions.length * 50) ? 1 : 0),
    lastPlayed: Date.now(),
  };
  if (idx !== -1) {
    lb[idx] = { ...lb[idx], ...entry };
  } else {
    lb.push(entry);
  }
  lb.sort((a, b) => b.totalScore - a.totalScore);
  localStorage.setItem('eduquiz_leaderboard', JSON.stringify(lb.slice(0, 50)));
}
// ============================================
// RESULT SCREEN
// ============================================
function renderResult() {
  const el = document.getElementById('result-content');
  if (!el) return;
  const total = App.currentQuestions.length;
  const correctCount = App.answeredQuestions.filter(a => a.correct).length;
  const wrongCount = total - correctCount;
  const accuracy = total > 0 ? Math.round((correctCount / total) * 100) : 0;
  const totalTime = App.answeredQuestions.reduce((s, a) => s + (a.timeSpent || 0), 0);
  const xpGained = Math.round(App.currentScore * 0.1) + (accuracy >= 50 ? 50 : 10);
  let resultTitle = App.t('keepPracticing');
  let trophy = '🎯';
  if (accuracy === 100) { resultTitle = App.t('perfect'); trophy = '🏆'; }
  else if (accuracy >= 80) { resultTitle = App.t('greatJob'); trophy = '🥇'; }
  else if (accuracy >= 60) { resultTitle = App.t('wellDone'); trophy = '🥈'; }
  else if (accuracy >= 40) { resultTitle = App.t('wellDone'); trophy = '🥉'; }
  el.innerHTML = `
    <div class="screen-header">
      <h1 class="screen-title">${App.t('resultsTitle')}</h1>
    </div>
    <div class="result-container">
      <div class="result-trophy">${trophy}</div>
      <div class="result-title">${resultTitle}</div>
      <div class="result-score-big">${App.currentScore}</div>
      <div style="font-size:0.9rem;color:var(--text-muted)">${App.t('yourScore')}</div>
      <div class="result-stats-grid" style="width:100%">
        <div class="glass-card result-stat-card">
          <div class="result-stat-value" style="color:var(--success)">${correctCount}</div>
          <div class="result-stat-label">${App.t('correctAnswers')}</div>
        </div>
        <div class="glass-card result-stat-card">
          <div class="result-stat-value" style="color:var(--error)">${wrongCount}</div>
          <div class="result-stat-label">${App.t('wrongAnswers')}</div>
        </div>
        <div class="glass-card result-stat-card">
          <div class="result-stat-value">${accuracy}%</div>
          <div class="result-stat-label">${App.t('accuracy')}</div>
        </div>
        <div class="glass-card result-stat-card">
          <div class="result-stat-value">${Math.round(totalTime)}${App.t('sec')}</div>
          <div class="result-stat-label">${App.t('timeTaken')}</div>
        </div>
        <div class="glass-card result-stat-card">
          <div class="result-stat-value">🔥${App.bestStreak}</div>
          <div class="result-stat-label">${App.t('bestStreak')}</div>
        </div>
        <div class="glass-card result-stat-card">
          <div class="result-stat-value">⚡+${xpGained}</div>
          <div class="result-stat-label">${App.t('xpEarned')}</div>
        </div>
      </div>
      <div class="answers-review glass-card" style="padding:24px;width:100%">
        <div class="section-title">📋 ${App.t('reviewAnswers')}</div>
        ${App.answeredQuestions.map((a, i) => {
          let userAns = a.userAnswer;
          let correctAns = '';
          if (a.q.type === 'multiple' || a.q.type === 'image') {
            userAns = a.userAnswer !== null ? (a.q.options[a.userAnswer] || '-') : '-';
            correctAns = a.q.options[a.q.correct] || '';
          } else if (a.q.type === 'truefalse') {
            userAns = a.userAnswer !== null ? (a.userAnswer ? App.t('true') : App.t('false')) : '-';
            correctAns = a.q.correct ? App.t('true') : App.t('false');
          } else if (a.q.type === 'fill') {
            correctAns = a.q.fillAnswer;
          } else if (a.q.type === 'match') {
            userAns = a.userAnswer;
            correctAns = a.q.pairs.length + '/' + a.q.pairs.length;
          }
          return `
            <div class="review-item">
              <div class="review-icon ${a.correct?'correct':'wrong'}">${a.correct?'✓':'✗'}</div>
              <div>
                <div class="review-q">${i+1}. ${escHtml(a.q.text)}</div>
                <div class="review-a">
                  ${!a.correct && correctAns ? `<span style="color:var(--success)">${App.t('correct')}: ${escHtml(correctAns)}</span> · ` : ''}
                  ${App.t('yourScore')}: ${a.correct ? '✓' : escHtml(String(userAns||'-'))}
                </div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
      <div style="display:flex;gap:12px;flex-wrap:wrap;justify-content:center">
        <button class="btn btn-primary btn-lg" onclick="startQuizById('${App.currentQuiz?.id}')">
          🔄 ${App.t('playAgain')}
        </button>
        <button class="btn btn-secondary btn-lg" onclick="showScreen('home')">
          🏠 ${App.t('backHome')}
        </button>
        <button class="btn btn-secondary btn-lg" onclick="showScreen('leaderboard')">
          🏆 ${App.t('leaderboard')}
        </button>
      </div>
    </div>
  `;
}
// ============================================
// LEADERBOARD SCREEN
// ============================================
function renderLeaderboard() {
  const el = document.getElementById('leaderboard-content');
  if (!el) return;
  const lb = JSON.parse(localStorage.getItem('eduquiz_leaderboard') || '[]');
  const podiumPlaces = [lb[1], lb[0], lb[2]].filter(Boolean);
  el.innerHTML = `
    <div class="screen-header">
      <button class="btn btn-ghost btn-icon" onclick="showScreen('home')">←</button>
      <h1 class="screen-title">${App.t('leaderboard')}</h1>
    </div>
    <div class="leaderboard-container">
      ${lb.length === 0 ? `
        <div class="empty-state">
          <div class="empty-state-icon">🏆</div>
          <div class="empty-state-text">${App.t('noPlayersYet')}</div>
          <div class="empty-state-sub">${App.t('beFirst')}</div>
          <button class="btn btn-primary" onclick="showScreen('play-select')">${App.t('playQuiz')}</button>
        </div>
      ` : `
        ${lb.length >= 2 ? `
          <div class="podium">
            ${lb[1] ? `
              <div class="podium-place">
                <div class="podium-avatar">${lb[1].avatar || lb[1].username.charAt(0)}</div>
                <div class="podium-name">${escHtml(lb[1].username)}</div>
                <div class="podium-score">${lb[1].totalScore}</div>
                <div class="podium-bar" style="height:75px"></div>
                <div class="rank-label">🥈</div>
              </div>
            ` : ''}
            ${lb[0] ? `
              <div class="podium-place">
                <div class="podium-avatar" style="width:80px;height:80px;font-size:1.6rem;border-color:#fbbf24;box-shadow:0 0 30px rgba(251,191,36,0.3)">${lb[0].avatar || lb[0].username.charAt(0)}</div>
                <div class="podium-name">${escHtml(lb[0].username)}</div>
                <div class="podium-score">${lb[0].totalScore}</div>
                <div class="podium-bar" style="height:100px;background:rgba(251,191,36,0.15);border-color:rgba(251,191,36,0.3)"></div>
                <div class="rank-label">🥇</div>
              </div>
            ` : ''}
            ${lb[2] ? `
              <div class="podium-place">
                <div class="podium-avatar">${lb[2].avatar || lb[2].username.charAt(0)}</div>
                <div class="podium-name">${escHtml(lb[2].username)}</div>
                <div class="podium-score">${lb[2].totalScore}</div>
                <div class="podium-bar" style="height:55px"></div>
                <div class="rank-label">🥉</div>
              </div>
            ` : ''}
          </div>
        ` : ''}
        <div class="lb-list">
          ${lb.map((entry, i) => {
            const rankCls = i === 0 ? 'gold' : i === 1 ? 'silver' : i === 2 ? 'bronze' : '';
            const winRate = entry.games > 0 ? Math.round((entry.wins / entry.games) * 100) : 0;
            const isMe = entry.username === App.settings.username;
            return `
              <div class="glass-card lb-item" style="${isMe?'border-color:var(--border-hover);':''}" >
                <div class="lb-rank ${rankCls}">${i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : i+1}</div>
                <div class="lb-avatar">${entry.avatar || entry.username.charAt(0).toUpperCase()}</div>
                <div class="lb-info">
                  <div class="lb-name">${escHtml(entry.username)}${isMe ? ' 👈' : ''}</div>
                  <div class="lb-details">
                    <span>🎮 ${entry.games} ${App.t('gamesPlayed')}</span>
                    <span>🏆 ${entry.wins} ${App.t('wins')}</span>
                    <span>📈 ${winRate}%</span>
                  </div>
                </div>
                <div class="lb-score">${entry.totalScore}</div>
              </div>
            `;
          }).join('')}
        </div>
      `}
    </div>
  `;
}
// ============================================
// STATS SCREEN
// ============================================
function renderStats() {
  const el = document.getElementById('stats-content');
  if (!el) return;
  const history = App.user.gameHistory || [];
  const accuracy = App.user.accuracyHistory || [];
  const avgAcc = accuracy.length > 0 ? Math.round(accuracy.reduce((a,b)=>a+b,0)/accuracy.length) : 0;
  const quizzesCreated = App.quizzes.filter(q => q.createdBy === App.settings.username).length;
  el.innerHTML = `
    <div class="screen-header">
      <button class="btn btn-ghost btn-icon" onclick="showScreen('home')">←</button>
      <h1 class="screen-title">${App.t('statistics')}</h1>
    </div>
    <div class="stats-container">
      <div class="stats-overview">
        <div class="glass-card stat-card">
          <div class="stat-value">${App.user.totalGames}</div>
          <div class="stat-label">${App.t('totalGames')}</div>
        </div>
        <div class="glass-card stat-card">
          <div class="stat-value">${App.user.totalWins}</div>
          <div class="stat-label">${App.t('totalWins')}</div>
        </div>
        <div class="glass-card stat-card">
          <div class="stat-value">${avgAcc}%</div>
          <div class="stat-label">${App.t('avgAccuracy')}</div>
        </div>
        <div class="glass-card stat-card">
          <div class="stat-value">${App.user.xp + (App.user.level-1)*150}</div>
          <div class="stat-label">${App.t('totalXP')}</div>
        </div>
        <div class="glass-card stat-card">
          <div class="stat-value">${quizzesCreated}</div>
          <div class="stat-label">${App.t('quizzesCreated')}</div>
        </div>
        <div class="glass-card stat-card">
          <div class="stat-value">${App.user.totalAnswered}</div>
          <div class="stat-label">${App.t('answeredQuestions')}</div>
        </div>
      </div>
      <div class="chart-section">
        <div class="chart-title">📈 ${App.t('accuracyChart')}</div>
        <div class="chart-canvas-wrap">
          <canvas class="chart" id="accuracy-chart" height="220"></canvas>
        </div>
      </div>
      <div class="chart-section">
        <div class="chart-title">🎮 ${App.t('gamesChart')}</div>
        <div class="chart-canvas-wrap">
          <canvas class="chart" id="games-chart" height="180"></canvas>
        </div>
      </div>
      <div class="chart-section">
        <div class="chart-title">🏅 ${App.t('achievementsTitle')}</div>
        <div class="achievements-grid">
          ${ACHIEVEMENTS.map(ach => {
            const unlocked = !!App.user.achievements[ach.id];
            return `
              <div class="glass-card achievement-card ${unlocked?'unlocked':'locked'}">
                ${unlocked ? `<div class="achievement-badge">${App.t('achUnlocked')}</div>` : ''}
                <span class="achievement-icon">${ach.icon}</span>
                <div class="achievement-name">${App.t(ach.nameKey)}</div>
                <div class="achievement-desc">${App.t(ach.descKey)}</div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
      ${history.length > 0 ? `
        <div class="chart-section">
          <div class="chart-title">🕐 ${App.t('recentGames')}</div>
          <div class="glass-card" style="padding:0;overflow:hidden">
            ${[...history].reverse().slice(0, 10).map(g => `
              <div style="display:flex;align-items:center;gap:16px;padding:16px 20px;border-bottom:1px solid var(--border-color)">
                <div style="flex:1">
                  <div style="font-weight:700">${escHtml(g.quizTitle || 'Quiz')}</div>
                  <div style="font-size:0.8rem;color:var(--text-muted)">${new Date(g.date).toLocaleDateString()}</div>
                </div>
                <div style="text-align:right">
                  <div style="font-weight:800">${g.score} ${App.t('pointsLabel')}</div>
                  <div style="font-size:0.82rem;color:${g.accuracy>=50?'var(--success)':'var(--error)'}">${g.accuracy}%</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      ` : `
        <div class="empty-state">
          <div class="empty-state-icon">📊</div>
          <div class="empty-state-text">${App.t('noGamesYet')}</div>
          <button class="btn btn-primary" onclick="showScreen('play-select')">${App.t('playQuiz')}</button>
        </div>
      `}
    </div>
  `;
  // Draw charts
  requestAnimationFrame(() => {
    drawAccuracyChart();
    drawGamesChart();
  });
}
function drawAccuracyChart() {
  const canvas = document.getElementById('accuracy-chart');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const data = App.user.accuracyHistory || [];
  canvas.width = canvas.offsetWidth;
  canvas.height = 220;
  const w = canvas.width, h = canvas.height;
  const padding = 40;
  const isLight = document.documentElement.getAttribute('data-theme') === 'light';
  const textColor = isLight ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.4)';
  const lineColor = isLight ? 'rgba(0,0,0,0.8)' : 'rgba(255,255,255,0.8)';
  ctx.clearRect(0, 0, w, h);
  if (data.length === 0) {
    ctx.fillStyle = textColor;
    ctx.font = '14px system-ui';
    ctx.textAlign = 'center';
    ctx.fillText(App.t('noGamesYet'), w/2, h/2);
    return;
  }
  const display = data.slice(-20);
  const maxVal = 100;
  const minVal = 0;
  const range = maxVal - minVal;
  const chartW = w - padding * 2;
  const chartH = h - padding * 2;
  // Grid lines
  ctx.strokeStyle = isLight ? 'rgba(0,0,0,0.07)' : 'rgba(255,255,255,0.07)';
  ctx.lineWidth = 1;
  for (let i = 0; i <= 4; i++) {
    const y = padding + chartH - (chartH * i / 4);
    ctx.beginPath();
    ctx.moveTo(padding, y);
    ctx.lineTo(w - padding, y);
    ctx.stroke();
    ctx.fillStyle = textColor;
    ctx.font = '11px system-ui';
    ctx.textAlign = 'right';
    ctx.fillText(`${i * 25}%`, padding - 6, y + 4);
  }
  if (display.length < 2) {
    // Single point
    const x = padding + chartW / 2;
    const y = padding + chartH - (display[0] / maxVal) * chartH;
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, Math.PI*2);
    ctx.fillStyle = lineColor;
    ctx.fill();
    return;
  }
  // Gradient fill
  const grad = ctx.createLinearGradient(0, padding, 0, h - padding);
  grad.addColorStop(0, isLight ? 'rgba(0,0,0,0.12)' : 'rgba(255,255,255,0.12)');
  grad.addColorStop(1, isLight ? 'rgba(0,0,0,0)' : 'rgba(255,255,255,0)');
  ctx.beginPath();
  display.forEach((val, i) => {
    const x = padding + (i / (display.length - 1)) * chartW;
    const y = padding + chartH - ((val - minVal) / range) * chartH;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.lineTo(padding + chartW, h - padding);
  ctx.lineTo(padding, h - padding);
  ctx.closePath();
  ctx.fillStyle = grad;
  ctx.fill();
  // Line
  ctx.beginPath();
  ctx.strokeStyle = lineColor;
  ctx.lineWidth = 2.5;
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  display.forEach((val, i) => {
    const x = padding + (i / (display.length - 1)) * chartW;
    const y = padding + chartH - ((val - minVal) / range) * chartH;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.stroke();
  // Dots
  display.forEach((val, i) => {
    const x = padding + (i / (display.length - 1)) * chartW;
    const y = padding + chartH - ((val - minVal) / range) * chartH;
    ctx.beginPath();
    ctx.arc(x, y, 3.5, 0, Math.PI*2);
    ctx.fillStyle = lineColor;
    ctx.fill();
  });
}
function drawGamesChart() {
  const canvas = document.getElementById('games-chart');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const history = App.user.gameHistory || [];
  canvas.width = canvas.offsetWidth;
  canvas.height = 180;
  const w = canvas.width, h = canvas.height;
  const padding = 40;
  const isLight = document.documentElement.getAttribute('data-theme') === 'light';
  const textColor = isLight ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.4)';
  const barColor = isLight ? 'rgba(0,0,0,0.7)' : 'rgba(255,255,255,0.7)';
  ctx.clearRect(0, 0, w, h);
  if (history.length === 0) {
    ctx.fillStyle = textColor;
    ctx.font = '14px system-ui';
    ctx.textAlign = 'center';
    ctx.fillText(App.t('noGamesYet'), w/2, h/2);
    return;
  }
  // Group by last 7 days
  const days = 7;
  const now = Date.now();
  const dayMs = 86400000;
  const dayData = [];
  for (let d = days - 1; d >= 0; d--) {
    const dayStart = now - (d + 1) * dayMs;
    const dayEnd = now - d * dayMs;
    const count = history.filter(g => g.date >= dayStart && g.date < dayEnd).length;
    const dayDate = new Date(dayEnd);
    dayData.push({ label: `${dayDate.getMonth()+1}/${dayDate.getDate()}`, count });
  }
  const maxVal = Math.max(...dayData.map(d => d.count), 1);
  const chartW = w - padding * 2;
  const chartH = h - padding * 2;
  const barW = (chartW / days) * 0.6;
  // Grid
  ctx.strokeStyle = isLight ? 'rgba(0,0,0,0.07)' : 'rgba(255,255,255,0.07)';
  ctx.lineWidth = 1;
  for (let i = 0; i <= 4; i++) {
    const y = padding + chartH - (chartH * i / 4);
    ctx.beginPath();
    ctx.moveTo(padding, y);
    ctx.lineTo(w - padding, y);
    ctx.stroke();
  }
  dayData.forEach((day, i) => {
    const x = padding + (i / days) * chartW + (chartW / days - barW) / 2;
    const barH = (day.count / maxVal) * chartH;
    const y = padding + chartH - barH;
    const grad = ctx.createLinearGradient(x, y, x, y + barH);
    grad.addColorStop(0, barColor);
    grad.addColorStop(1, isLight ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.15)');
    ctx.beginPath();
    const r = 4;
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + barW - r, y);
    ctx.arcTo(x + barW, y, x + barW, y + r, r);
    ctx.lineTo(x + barW, y + barH);
    ctx.lineTo(x, y + barH);
    ctx.lineTo(x, y + r);
    ctx.arcTo(x, y, x + r, y, r);
    ctx.closePath();
    ctx.fillStyle = grad;
    ctx.fill();
    if (day.count > 0) {
      ctx.fillStyle = textColor;
      ctx.font = '10px system-ui';
      ctx.textAlign = 'center';
      ctx.fillText(day.count, x + barW/2, y - 4);
    }
    ctx.fillStyle = textColor;
    ctx.font = '10px system-ui';
    ctx.textAlign = 'center';
    ctx.fillText(day.label, x + barW/2, h - 8);
  });
}
// ============================================
// SETTINGS SCREEN
// ============================================
function renderSettings() {
  const el = document.getElementById('settings-content');
  if (!el) return;
  const avatars = ['🎮','😀','🦁','🐯','🦊','🐼','🤖','👾','🦄','🐉','🌟','⚡','🔥','💎','🎯'];
  el.innerHTML = `
    <div class="screen-header">
      <button class="btn btn-ghost btn-icon" onclick="showScreen('home')">←</button>
      <h1 class="screen-title">${App.t('settings')}</h1>
    </div>
    <div class="settings-container">
      <div class="profile-section">
        <div class="profile-avatar" id="avatar-display" onclick="openAvatarPicker()"
          title="${App.t('avatar')}">${App.settings.avatar || '🎮'}</div>
        <div class="profile-info">
          <div class="profile-name" id="profile-name-display">${escHtml(App.settings.username||'Player')}</div>
          <div class="profile-level">${App.t('level')} ${App.user.level} · ${App.user.xp} ${App.t('xp')} / ${XP.getNextLevel(App.user.level)} ${App.t('xp')}</div>
          <div class="xp-bar-wrap">
            <div class="xp-bar-fill" style="width:${XP.getProgress()}%"></div>
          </div>
          <div class="xp-label">${App.t('totalGames')}: ${App.user.totalGames} · ${App.t('totalWins')}: ${App.user.totalWins}</div>
        </div>
      </div>
      <div class="settings-section">
        <div class="settings-section-title">👤 ${App.t('profile')}</div>
        <div class="settings-group">
          <div class="settings-item">
            <div class="settings-item-info">
              <div class="settings-item-title">${App.t('username')}</div>
            </div>
            <input class="input" type="text" id="username-input"
              value="${escHtml(App.settings.username||'')}"
              placeholder="${App.t('usernamePlaceholder')}"
              style="max-width:200px"
              onchange="updateUsername(this.value)" />
          </div>
        </div>
      </div>
      <div class="settings-section">
        <div class="settings-section-title">🎨 ${App.t('appearance')}</div>
        <div class="settings-group">
          <div class="settings-item">
            <div class="settings-item-info">
              <div class="settings-item-title">${App.t('darkMode')}</div>
              <div class="settings-item-desc">${App.t('darkModeDesc')}</div>
            </div>
            <label class="toggle-wrap">
              <input type="checkbox" class="toggle-input" id="theme-toggle"
                ${App.settings.theme==='dark'?'checked':''}
                onchange="toggleTheme(this.checked)" />
              <span class="toggle-slider"></span>
            </label>
          </div>
          <div class="settings-item">
            <div class="settings-item-info">
              <div class="settings-item-title">${App.t('language')}</div>
              <div class="settings-item-desc">${App.t('languageDesc')}</div>
            </div>
            <div class="lang-pills">
              <button class="lang-pill ${App.settings.lang==='en'?'active':''}" onclick="setLang('en')">EN</button>
              <button class="lang-pill ${App.settings.lang==='ru'?'active':''}" onclick="setLang('ru')">RU</button>
              <button class="lang-pill ${App.settings.lang==='kz'?'active':''}" onclick="setLang('kz')">KZ</button>
            </div>
          </div>
        </div>
      </div>
      <div class="settings-section">
        <div class="settings-section-title">🔊 ${App.t('sound')}</div>
        <div class="settings-group">
          <div class="settings-item">
            <div class="settings-item-info">
              <div class="settings-item-title">${App.t('soundEffects')}</div>
              <div class="settings-item-desc">${App.t('soundEffectsDesc')}</div>
            </div>
            <label class="toggle-wrap">
              <input type="checkbox" class="toggle-input" ${App.settings.sound?'checked':''}
                onchange="App.settings.sound=this.checked;Storage.save()" />
              <span class="toggle-slider"></span>
            </label>
          </div>
          <div class="settings-item">
            <div class="settings-item-info">
              <div class="settings-item-title">${App.t('volume')}</div>
            </div>
            <input type="range" min="0" max="1" step="0.1"
              value="${App.settings.volume}"
              style="width:120px;accent-color:var(--text-primary)"
              onchange="App.settings.volume=parseFloat(this.value);Storage.save()" />
          </div>
        </div>
      </div>
      <div class="settings-section">
        <div class="settings-section-title">⚙️ ${App.t('gameplay')}</div>
        <div class="settings-group">
          <div class="settings-item">
            <div class="settings-item-info">
              <div class="settings-item-title">${App.t('showTimer')}</div>
              <div class="settings-item-desc">${App.t('showTimerDesc')}</div>
            </div>
            <label class="toggle-wrap">
              <input type="checkbox" class="toggle-input" ${App.settings.showTimer?'checked':''}
                onchange="App.settings.showTimer=this.checked;Storage.save()" />
              <span class="toggle-slider"></span>
            </label>
          </div>
          <div class="settings-item">
            <div class="settings-item-info">
              <div class="settings-item-title">${App.t('animations')}</div>
              <div class="settings-item-desc">${App.t('animationsDesc')}</div>
            </div>
            <label class="toggle-wrap">
              <input type="checkbox" class="toggle-input" ${App.settings.animations?'checked':''}
                onchange="App.settings.animations=this.checked;Storage.save()" />
              <span class="toggle-slider"></span>
            </label>
          </div>
          <div class="settings-item">
            <div class="settings-item-info">
              <div class="settings-item-title">${App.t('autoNext')}</div>
              <div class="settings-item-desc">${App.t('autoNextDesc')}</div>
            </div>
            <label class="toggle-wrap">
              <input type="checkbox" class="toggle-input" ${App.settings.autoNext?'checked':''}
                onchange="App.settings.autoNext=this.checked;Storage.save()" />
              <span class="toggle-slider"></span>
            </label>
          </div>
        </div>
      </div>
      <div class="settings-section">
        <div class="settings-section-title">💾 ${App.t('data')}</div>
        <div class="settings-group">
          <div class="settings-item">
            <div class="settings-item-info">
              <div class="settings-item-title">${App.t('exportData')}</div>
              <div class="settings-item-desc">${App.t('exportDataDesc')}</div>
            </div>
            <button class="btn btn-secondary btn-sm" onclick="Storage.exportData()">⬇️ ${App.t('exportData')}</button>
          </div>
          <div class="settings-item">
            <div class="settings-item-info">
              <div class="settings-item-title">${App.t('importData')}</div>
              <div class="settings-item-desc">${App.t('importDataDesc')}</div>
            </div>
            <button class="btn btn-secondary btn-sm" onclick="document.getElementById('import-file').click()">⬆️ ${App.t('importData')}</button>
            <input type="file" id="import-file" accept=".json" style="display:none"
              onchange="Storage.importData(this.files[0]);this.value=''" />
          </div>
          <div class="settings-item">
            <div class="settings-item-info">
              <div class="settings-item-title" style="color:var(--error)">${App.t('clearData')}</div>
              <div class="settings-item-desc">${App.t('clearDataDesc')}</div>
            </div>
            <button class="btn btn-danger btn-sm" onclick="confirmClearData()">🗑️ ${App.t('clearData')}</button>
          </div>
        </div>
      </div>
    </div>
  `;
}
function openAvatarPicker() {
  const avatars = ['🎮','😀','🦁','🐯','🦊','🐼','🤖','👾','🦄','🐉','🌟','⚡','🔥','💎','🎯','🚀','🌈','🎵','🎨','🏆'];
  showModal({
    title: App.t('avatar'),
    body: `<div style="display:flex;flex-wrap:wrap;gap:10px;justify-content:center">
      ${avatars.map(a => `
        <button class="btn btn-secondary" style="font-size:1.8rem;padding:12px;${App.settings.avatar===a?'border-color:var(--border-hover);background:var(--accent-dim)':''}"
          onclick="setAvatar('${a}')">${a}</button>
      `).join('')}
    </div>`,
    actions: [{ label: App.t('close'), cls: 'btn-secondary', fn: closeModal }]
  });
}
function setAvatar(av) {
  App.settings.avatar = av;
  Storage.save();
  closeModal();
  renderSettings();
}
function updateUsername(val) {
  App.settings.username = val.trim() || 'Player';
  Storage.save();
  document.getElementById('profile-name-display').textContent = App.settings.username;
  updateHeaderXP();
}
function toggleTheme(isDark) {
  App.settings.theme = isDark ? 'dark' : 'light';
  Storage.save();
  applyTheme();
}
function setLang(lang) {
  App.settings.lang = lang;
  Storage.save();
  renderUI();
}
function confirmClearData() {
  showModal({
    title: App.t('clearData'),
    body: `<p style="color:var(--error)">${App.t('clearDataConfirm')}</p>`,
    actions: [
      { label: App.t('cancel'), cls: 'btn-secondary', fn: closeModal },
      { label: App.t('clearData'), cls: 'btn-danger', fn: () => {
        localStorage.clear();
        location.reload();
      }}
    ]
  });
}
// ============================================
// MODAL SYSTEM
// ============================================
function showModal({ title, body, actions = [], wide = false }) {
  const overlay = document.getElementById('modal-overlay');
  const modal = document.getElementById('modal');
  modal.style.maxWidth = wide ? '700px' : '520px';
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-body').innerHTML = body;
  const actionsEl = document.getElementById('modal-actions');
  actionsEl.innerHTML = actions.map(a => `
    <button class="btn ${a.cls}" data-action="${encodeURIComponent(a.label)}">${a.label}</button>
  `).join('');
  actions.forEach((a, i) => {
    actionsEl.querySelectorAll('.btn')[i].addEventListener('click', a.fn);
  });
  overlay.classList.remove('hidden');
}
function closeModal() {
  document.getElementById('modal-overlay').classList.add('hidden');
  document.getElementById('modal-body').innerHTML = '';
}
// ============================================
// UTILITIES
// ============================================
function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
}
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function escHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
// ============================================
// SAMPLE DATA
// ============================================
function loadSampleData() {
  if (App.quizzes.length > 0) return;
  const samples = [
    {
      id: generateId(),
      title: 'General Knowledge',
      description: 'Test your general knowledge!',
      category: 'general',
      timeLimit: 20,
      icon: '🌍',
      createdBy: 'EduQuiz',
      plays: 42,
      createdAt: Date.now() - 86400000,
      questions: [
        { type: 'multiple', text: 'What is the capital of France?', options: ['London', 'Paris', 'Berlin', 'Madrid'], correct: 1, timeLimit: 20, points: 100 },
        { type: 'truefalse', text: 'The Earth is the third planet from the Sun.', correct: true, timeLimit: 15, points: 100 },
        { type: 'multiple', text: 'Which is the largest ocean on Earth?', options: ['Atlantic', 'Indian', 'Arctic', 'Pacific'], correct: 3, timeLimit: 20, points: 100 },
        { type: 'fill', text: 'Complete: "To be or not to be, that is the ___"', fillAnswer: 'question', timeLimit: 25, points: 150 },
        { type: 'multiple', text: 'How many sides does a hexagon have?', options: ['5', '6', '7', '8'], correct: 1, timeLimit: 15, points: 100 },
        { type: 'truefalse', text: 'A group of flamingos is called a flamboyance.', correct: true, timeLimit: 15, points: 100 },
        { type: 'multiple', text: 'Who painted the Mona Lisa?', options: ['Van Gogh', 'Picasso', 'Da Vinci', 'Monet'], correct: 2, timeLimit: 20, points: 100 },
        { type: 'multiple', text: 'What is the chemical symbol for Gold?', options: ['Go', 'Gd', 'Au', 'Ag'], correct: 2, timeLimit: 20, points: 100 },
      ]
    },
    {
      id: generateId(),
      title: 'Math Challenge',
      description: 'Test your math skills!',
      category: 'math',
      timeLimit: 30,
      icon: '📐',
      createdBy: 'EduQuiz',
      plays: 28,
      createdAt: Date.now() - 172800000,
      questions: [
        { type: 'multiple', text: 'What is 15 × 8?', options: ['110', '120', '130', '125'], correct: 1, timeLimit: 20, points: 100 },
        { type: 'truefalse', text: 'Pi (π) is exactly equal to 3.14', correct: false, timeLimit: 15, points: 100 },
        { type: 'fill', text: 'What is the square root of 144?', fillAnswer: '12', timeLimit: 20, points: 150 },
        { type: 'multiple', text: 'What is 2³ × 3?', options: ['18', '24', '48', '12'], correct: 1, timeLimit: 25, points: 100 },
        { type: 'multiple', text: 'If x + 7 = 15, what is x?', options: ['7', '8', '9', '22'], correct: 1, timeLimit: 20, points: 100 },
      ]
    },
    {
      id: generateId(),
      title: 'Science Quiz',
      description: 'Explore the wonders of science!',
      category: 'science',
      timeLimit: 25,
      icon: '🔬',
      createdBy: 'EduQuiz',
      plays: 35,
      createdAt: Date.now() - 259200000,
      questions: [
        { type: 'multiple', text: 'What is the powerhouse of the cell?', options: ['Nucleus', 'Ribosome', 'Mitochondria', 'Golgi Apparatus'], correct: 2, timeLimit: 20, points: 100 },
        { type: 'truefalse', text: 'Light travels faster than sound.', correct: true, timeLimit: 15, points: 100 },
        { type: 'multiple', text: 'What is H₂O commonly known as?', options: ['Salt', 'Water', 'Oxygen', 'Hydrogen'], correct: 1, timeLimit: 15, points: 100 },
        { type: 'multiple', text: 'Which planet is known as the Red Planet?', options: ['Venus', 'Jupiter', 'Mars', 'Saturn'], correct: 2, timeLimit: 20, points: 100 },
        { type: 'match', text: 'Match the element with its symbol', pairs: [
          { left: 'Oxygen', right: 'O' },
          { left: 'Carbon', right: 'C' },
          { left: 'Nitrogen', right: 'N' },
          { left: 'Hydrogen', right: 'H' },
        ], timeLimit: 60, points: 200 },
      ]
    },
  ];
  App.quizzes = samples;
  Storage.save();
}
// ============================================
// INITIALIZATION
// ============================================
function init() {
  Storage.load();
  Toast.init();
  loadSampleData();
  applyTheme();
  applyTranslations();
  Particles.init();
  // Show home
  showScreen('home');
  updateHeaderXP();
  // Modal close on overlay click
  document.getElementById('modal-overlay').addEventListener('click', (e) => {
    if (e.target === document.getElementById('modal-overlay')) closeModal();
  });
  // Keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
  console.log('🎮 EduQuiz initialized successfully!');
}
// Start
document.addEventListener('DOMContentLoaded', init);
