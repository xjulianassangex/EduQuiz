'use strict';

// ============================================================
// TRANSLATIONS
// ============================================================
const translations = {
  en: {
    home: 'Home', quizzes: 'Quizzes', missions: 'Missions', shop: 'Shop',
    achievements: 'Achievements', leaderboard: 'Leaderboard', analytics: 'Analytics',
    multiplayer: 'Multiplayer', ai_gen: 'AI Gen', profile: 'Profile',
    login: 'Login', register: 'Register', logout: 'Logout',
    auth_subtitle: 'The ultimate quiz platform',
    email: 'Email', password: 'Password', username: 'Username',
    confirm_password: 'Confirm Password', remember_me: 'Remember Me',
    email_placeholder: 'you@example.com', password_placeholder: 'Your password',
    username_placeholder: 'CoolLearner', confirm_placeholder: 'Repeat password',
    create_account: 'Create Account', no_account: 'No account?', have_account: 'Have an account?',
    welcome_back: 'Welcome back,', ready_learn: 'Ready to learn something new today?',
    browse_quizzes: 'Browse Quizzes', games_played: 'Games Played', wins: 'Wins',
    accuracy: 'Accuracy', best_streak: 'Best Streak',
    daily_missions: 'Daily Missions', view_all: 'View All',
    recent_quizzes: 'Recent Quizzes', see_all: 'See All',
    my_quizzes: 'My Quizzes', create_quiz: '+ Create Quiz', search_quizzes: 'Search quizzes...',
    repeat_mistakes: '🔄 Repeat Mistakes',
    quiz_title: 'Quiz Title', description: 'Description', category: 'Category',
    time_per_question: 'Time / Question (sec)',
    quiz_title_ph: 'Enter quiz title...', quiz_desc_ph: 'What is this quiz about?',
    category_ph: 'e.g. Science',
    add_question: '+ Add Question', save_quiz: 'Save Quiz', cancel: 'Cancel',
    question_type: 'Question Type', question_text: 'Question Text',
    multiple_choice: 'Multiple Choice', true_false: 'True / False',
    fill_blank: 'Fill in the Blank', matching: 'Matching', image_q: 'Image Question',
    correct_answer: 'Correct Answer', explanation: 'Explanation',
    explanation_ph: 'Explain why this answer is correct...',
    next_question: 'Next Question →', go_home: 'Go Home', play_again: 'Play Again',
    start_quiz: 'Start Quiz', choose_boosters: 'Choose Boosters',
    boosters_desc: 'Select up to 2 boosters to use in this quiz.',
    booster_5050: '50/50', booster_5050_desc: 'Remove 2 wrong answers',
    booster_time: '+10 Seconds', booster_time_desc: 'Add 10 extra seconds',
    booster_skip: 'Skip Question', booster_skip_desc: 'Skip without penalty',
    booster_double: 'Double Points', booster_double_desc: 'Double your score this round',
    delete_quiz: 'Delete Quiz', delete_confirm: 'Are you sure you want to delete this quiz? This cannot be undone.',
    delete: 'Delete',
    data_management: 'Data Management', export_data: 'Export Data', import_data: 'Import Data',
    export_desc: 'Download all your quizzes, progress and settings.',
    import_desc: 'Restore from a previously exported file.',
    export: '📤 Export', import: '📥 Import',
    missions_reset: 'Resets in', missions_xp: 'XP Earned Today',
    claim: 'Claim', claimed: 'Claimed ✓', in_progress: 'In Progress',
    mission_1: 'Play 3 Quizzes', mission_1d: 'Complete 3 quiz games today',
    mission_2: 'Answer 20 Questions', mission_2d: 'Answer 20 questions in total',
    mission_3: 'Get a 5-Streak', mission_3d: 'Answer 5 questions in a row correctly',
    mission_4: 'Create a Quiz', mission_4d: 'Create a new quiz today',
    mission_5: 'Perfect Score', mission_5d: 'Complete a quiz without any mistakes',
    mission_6: 'Play 2 Different Categories', mission_6d: 'Try quizzes from 2 different categories',
    avatars: 'Avatars', frames: 'Frames', themes: 'Themes', badges: 'Badges',
    owned: 'Owned', equip: 'Equip', buy: 'Buy', equipped: 'Equipped ✓',
    not_enough_xp: 'Not enough XP!', purchased: 'Purchased!', equipped_msg: 'Equipped!',
    all: 'All', common: 'Common', rare: 'Rare', epic: 'Epic', legendary: 'Legendary',
    global: 'Global', weekly: 'Weekly', monthly: 'Monthly', friends: 'Friends',
    achievement_unlocked: 'Achievement Unlocked!',
    xp_over_time: 'XP Over Time', accuracy_over_time: 'Accuracy Over Time',
    category_performance: 'Category Performance',
    strong_topics: '💪 Strong Topics', weak_topics: '⚠️ Weak Topics',
    overview: 'Overview', edit_profile: 'Edit Profile', security: 'Security',
    choose_avatar: 'Choose Avatar', save_changes: 'Save Changes',
    current_password: 'Current Password', new_password: 'New Password',
    confirm_new_password: 'Confirm New Password', change_password: 'Change Password',
    create_room: 'Create Room', join_room: 'Join Room', lobby: 'Lobby', leave: 'Leave',
    create_room_desc: 'Start a new multiplayer session',
    join_room_desc: 'Enter a room code to join',
    room_code: 'Room Code', room_code_ph: 'ABCD12', copy_code: '📋 Copy Code',
    start_game: 'Start Game', players: 'Players', waiting: 'Waiting for players...',
    ai_gen: 'AI Quiz Generator', generate_from_topic: 'Generate from Topic',
    generate_from_text: 'Generate from Text',
    topic: 'Topic', difficulty: 'Difficulty', question_count: 'Question Count',
    topic_ph: 'e.g. World War II', paste_text: 'Paste Text',
    text_ph: 'Paste any text and we\'ll generate questions from it...',
    generate_quiz: '✨ Generate Quiz', preview: 'Preview', clear: 'Clear',
    easy: 'Easy', medium: 'Medium', hard: 'Hard',
    awesome: 'Awesome!', continue: 'Continue',
    correct: 'Correct!', wrong: 'Wrong!', times_up: 'Time\'s Up!',
    score: 'Score', streak: 'Streak', combo: 'COMBO',
    results_perfect: 'Perfect!', results_great: 'Great!', results_good: 'Good', results_ok: 'Keep Trying',
    questions_answered: 'Questions Answered', correct_answers: 'Correct Answers',
    xp_earned: 'XP Earned', time_taken: 'Time Taken',
    no_quizzes: 'No quizzes yet', no_quizzes_sub: 'Create your first quiz to get started!',
    no_mistakes: 'No mistakes yet!', no_mistakes_sub: 'Play some quizzes first.',
    created: 'Created', questions: 'questions', play: 'Play', edit: 'Edit',
    rank_bronze: 'Bronze', rank_silver: 'Silver', rank_gold: 'Gold',
    rank_platinum: 'Platinum', rank_diamond: 'Diamond', rank_master: 'Master',
    level: 'Level', xp: 'XP', rank: 'Rank', created_quizzes: 'Created Quizzes',
    add_pair: '+ Add Pair', option: 'Option', answer: 'Answer',
    image_url: 'Image URL', image_url_ph: 'https://...jpg',
    generating: 'Generating...', generated_ok: 'Quiz generated!',
    saved: 'Saved!', deleted: 'Deleted!', error: 'Error',
    fill_all_fields: 'Please fill all required fields.',
    passwords_not_match: 'Passwords do not match.',
    user_exists: 'User with this email already exists.',
    wrong_credentials: 'Wrong email or password.',
    profile_saved: 'Profile saved!', password_changed: 'Password changed!',
    wrong_old_password: 'Wrong current password.',
    room_created: 'Room created!', room_joined: 'Room joined!',
    room_not_found: 'Room not found.', code_copied: 'Code copied!',
    exported: 'Data exported!', imported: 'Data imported!',
    import_error: 'Import failed. Invalid file.',
    no_mistakes_quiz: 'No mistakes to repeat!', quiz_saved: 'Quiz saved!',
    min_questions: 'Add at least 1 question.',
    explanation_label: 'Explanation',
    correct_label: 'Correct Answer',
    add_matching_pair: '+ Add Pair',
    matching_left: 'Left side', matching_right: 'Right side',
    true_text: 'True', false_text: 'False',
    sec: 'sec', mins: 'min',
  },
  ru: {
    home: 'Главная', quizzes: 'Викторины', missions: 'Задания', shop: 'Магазин',
    achievements: 'Достижения', leaderboard: 'Рейтинг', analytics: 'Аналитика',
    multiplayer: 'Мультиплеер', ai_gen: 'ИИ Генератор', profile: 'Профиль',
    login: 'Войти', register: 'Регистрация', logout: 'Выйти',
    auth_subtitle: 'Лучшая платформа для викторин',
    email: 'Email', password: 'Пароль', username: 'Имя пользователя',
    confirm_password: 'Подтвердите пароль', remember_me: 'Запомнить меня',
    email_placeholder: 'вы@пример.com', password_placeholder: 'Ваш пароль',
    username_placeholder: 'КрутойУченик', confirm_placeholder: 'Повторите пароль',
    create_account: 'Создать аккаунт', no_account: 'Нет аккаунта?', have_account: 'Уже есть аккаунт?',
    welcome_back: 'Добро пожаловать,', ready_learn: 'Готовы к новым знаниям?',
    browse_quizzes: 'Смотреть викторины', games_played: 'Игр сыграно', wins: 'Побед',
    accuracy: 'Точность', best_streak: 'Лучшая серия',
    daily_missions: 'Ежедневные задания', view_all: 'Все',
    recent_quizzes: 'Последние викторины', see_all: 'Смотреть все',
    my_quizzes: 'Мои викторины', create_quiz: '+ Создать викторину', search_quizzes: 'Поиск...',
    repeat_mistakes: '🔄 Повторить ошибки',
    quiz_title: 'Название', description: 'Описание', category: 'Категория',
    time_per_question: 'Время на вопрос (сек)',
    quiz_title_ph: 'Введите название...', quiz_desc_ph: 'О чём эта викторина?',
    category_ph: 'например, Наука',
    add_question: '+ Добавить вопрос', save_quiz: 'Сохранить', cancel: 'Отмена',
    question_type: 'Тип вопроса', question_text: 'Текст вопроса',
    multiple_choice: 'Выбор ответа', true_false: 'Правда/Ложь',
    fill_blank: 'Заполнить пропуск', matching: 'Сопоставление', image_q: 'Вопрос с изображением',
    correct_answer: 'Правильный ответ', explanation: 'Объяснение',
    explanation_ph: 'Объясните почему этот ответ верный...',
    next_question: 'Следующий вопрос →', go_home: 'Главная', play_again: 'Играть снова',
    start_quiz: 'Начать викторину', choose_boosters: 'Выбор бустеров',
    boosters_desc: 'Выберите до 2 бустеров для этой викторины.',
    booster_5050: '50/50', booster_5050_desc: 'Убрать 2 неверных ответа',
    booster_time: '+10 секунд', booster_time_desc: 'Добавить 10 секунд',
    booster_skip: 'Пропустить вопрос', booster_skip_desc: 'Пропустить без штрафа',
    booster_double: 'Двойные очки', booster_double_desc: 'Удвоить очки в этом раунде',
    delete_quiz: 'Удалить викторину', delete_confirm: 'Вы уверены? Это действие нельзя отменить.',
    delete: 'Удалить',
    data_management: 'Управление данными', export_data: 'Экспорт', import_data: 'Импорт',
    export_desc: 'Скачать все викторины и прогресс.',
    import_desc: 'Восстановить из файла.',
    export: '📤 Экспорт', import: '📥 Импорт',
    missions_reset: 'Сброс через', missions_xp: 'XP сегодня',
    claim: 'Получить', claimed: 'Получено ✓', in_progress: 'В процессе',
    mission_1: 'Пройти 3 викторины', mission_1d: 'Завершите 3 игры сегодня',
    mission_2: 'Ответить на 20 вопросов', mission_2d: 'Дайте 20 ответов суммарно',
    mission_3: 'Серия из 5', mission_3d: 'Ответьте правильно 5 раз подряд',
    mission_4: 'Создать викторину', mission_4d: 'Создайте новую викторину сегодня',
    mission_5: 'Идеальный результат', mission_5d: 'Завершите викторину без ошибок',
    mission_6: 'Две категории', mission_6d: 'Пройдите викторины из 2 разных категорий',
    avatars: 'Аватары', frames: 'Рамки', themes: 'Темы', badges: 'Значки',
    owned: 'Куплено', equip: 'Надеть', buy: 'Купить', equipped: 'Надето ✓',
    not_enough_xp: 'Недостаточно XP!', purchased: 'Куплено!', equipped_msg: 'Надето!',
    all: 'Все', common: 'Обычное', rare: 'Редкое', epic: 'Эпическое', legendary: 'Легендарное',
    global: 'Глобальный', weekly: 'Недельный', monthly: 'Месячный', friends: 'Друзья',
    achievement_unlocked: 'Достижение разблокировано!',
    xp_over_time: 'XP по времени', accuracy_over_time: 'Точность по времени',
    category_performance: 'Результаты по категориям',
    strong_topics: '💪 Сильные темы', weak_topics: '⚠️ Слабые темы',
    overview: 'Обзор', edit_profile: 'Редактировать', security: 'Безопасность',
    choose_avatar: 'Выбрать аватар', save_changes: 'Сохранить',
    current_password: 'Текущий пароль', new_password: 'Новый пароль',
    confirm_new_password: 'Подтвердите пароль', change_password: 'Изменить пароль',
    create_room: 'Создать комнату', join_room: 'Войти в комнату', lobby: 'Лобби', leave: 'Выйти',
    create_room_desc: 'Начать новую мультиплеер-сессию',
    join_room_desc: 'Введите код комнаты',
    room_code: 'Код комнаты', room_code_ph: 'ABCD12', copy_code: '📋 Копировать',
    start_game: 'Начать игру', players: 'Игроки', waiting: 'Ожидание игроков...',
    ai_gen: 'ИИ Генератор', generate_from_topic: 'Генерация по теме',
    generate_from_text: 'Генерация из текста',
    topic: 'Тема', difficulty: 'Сложность', question_count: 'Количество вопросов',
    topic_ph: 'например, Вторая мировая война', paste_text: 'Вставьте текст',
    text_ph: 'Вставьте текст и мы создадим вопросы...',
    generate_quiz: '✨ Создать викторину', preview: 'Предпросмотр', clear: 'Очистить',
    easy: 'Лёгкий', medium: 'Средний', hard: 'Сложный',
    awesome: 'Отлично!', continue: 'Продолжить',
    correct: 'Правильно!', wrong: 'Неверно!', times_up: 'Время вышло!',
    score: 'Очки', streak: 'Серия', combo: 'КОМБО',
    results_perfect: 'Идеально!', results_great: 'Отлично!', results_good: 'Хорошо', results_ok: 'Продолжайте',
    questions_answered: 'Вопросов отвечено', correct_answers: 'Правильных ответов',
    xp_earned: 'XP заработано', time_taken: 'Время',
    no_quizzes: 'Нет викторин', no_quizzes_sub: 'Создайте первую викторину!',
    no_mistakes: 'Ошибок пока нет!', no_mistakes_sub: 'Сначала поиграйте.',
    created: 'Создано', questions: 'вопросов', play: 'Играть', edit: 'Изменить',
    rank_bronze: 'Бронза', rank_silver: 'Серебро', rank_gold: 'Золото',
    rank_platinum: 'Платина', rank_diamond: 'Алмаз', rank_master: 'Мастер',
    level: 'Уровень', xp: 'XP', rank: 'Ранг', created_quizzes: 'Викторин создано',
    add_pair: '+ Добавить пару', option: 'Вариант', answer: 'Ответ',
    image_url: 'URL изображения', image_url_ph: 'https://...jpg',
    generating: 'Генерация...', generated_ok: 'Викторина создана!',
    saved: 'Сохранено!', deleted: 'Удалено!', error: 'Ошибка',
    fill_all_fields: 'Заполните все обязательные поля.',
    passwords_not_match: 'Пароли не совпадают.',
    user_exists: 'Пользователь с таким email уже существует.',
    wrong_credentials: 'Неверный email или пароль.',
    profile_saved: 'Профиль сохранён!', password_changed: 'Пароль изменён!',
    wrong_old_password: 'Неверный текущий пароль.',
    room_created: 'Комната создана!', room_joined: 'Вы вошли в комнату!',
    room_not_found: 'Комната не найдена.', code_copied: 'Код скопирован!',
    exported: 'Данные экспортированы!', imported: 'Данные импортированы!',
    import_error: 'Ошибка импорта. Неверный файл.',
    no_mistakes_quiz: 'Нет ошибок для повторения!', quiz_saved: 'Викторина сохранена!',
    min_questions: 'Добавьте хотя бы 1 вопрос.',
    explanation_label: 'Объяснение',
    correct_label: 'Правильный ответ',
    add_matching_pair: '+ Добавить пару',
    matching_left: 'Левая сторона', matching_right: 'Правая сторона',
    true_text: 'Правда', false_text: 'Ложь',
    sec: 'сек', mins: 'мин',
  },
  kz: {
    home: 'Басты', quizzes: 'Викториналар', missions: 'Тапсырмалар', shop: 'Дүкен',
    achievements: 'Жетістіктер', leaderboard: 'Рейтинг', analytics: 'Аналитика',
    multiplayer: 'Мультиплеер', ai_gen: 'ИИ Генератор', profile: 'Профиль',
    login: 'Кіру', register: 'Тіркелу', logout: 'Шығу',
    auth_subtitle: 'Ең жақсы викторина платформасы',
    email: 'Email', password: 'Құпия сөз', username: 'Пайдаланушы аты',
    confirm_password: 'Құпия сөзді растау', remember_me: 'Мені есте сақта',
    email_placeholder: 'сіз@мысал.com', password_placeholder: 'Құпия сөзіңіз',
    username_placeholder: 'КеремтОқушы', confirm_placeholder: 'Қайталаңыз',
    create_account: 'Аккаунт жасау', no_account: 'Аккаунт жоқ па?', have_account: 'Аккаунт бар ма?',
    welcome_back: 'Қайта қош келдіңіз,', ready_learn: 'Жаңа білімге дайынсыз ба?',
    browse_quizzes: 'Викториналар', games_played: 'Ойындар', wins: 'Жеңістер',
    accuracy: 'Дәлдік', best_streak: 'Ең жақсы серия',
    daily_missions: 'Күнделікті тапсырмалар', view_all: 'Барлығы',
    recent_quizzes: 'Соңғы викториналар', see_all: 'Барлығын көру',
    my_quizzes: 'Менің викториналарым', create_quiz: '+ Викторина жасау', search_quizzes: 'Іздеу...',
    repeat_mistakes: '🔄 Қателерді қайталау',
    quiz_title: 'Атауы', description: 'Сипаттама', category: 'Санат',
    time_per_question: 'Уақыт (сек)',
    quiz_title_ph: 'Атауды енгізіңіз...', quiz_desc_ph: 'Бұл викторина туралы...',
    category_ph: 'мысалы, Ғылым',
    add_question: '+ Сұрақ қосу', save_quiz: 'Сақтау', cancel: 'Бас тарту',
    question_type: 'Сұрақ түрі', question_text: 'Сұрақ мәтіні',
    multiple_choice: 'Бірнеше таңдау', true_false: 'Рас/Жалған',
    fill_blank: 'Бос орын толтыру', matching: 'Сәйкестендіру', image_q: 'Суретті сұрақ',
    correct_answer: 'Дұрыс жауап', explanation: 'Түсіндірме',
    explanation_ph: 'Неліктен бұл жауап дұрыс...',
    next_question: 'Келесі сұрақ →', go_home: 'Басты бет', play_again: 'Қайта ойнау',
    start_quiz: 'Бастау', choose_boosters: 'Бустерлерді таңдаңыз',
    boosters_desc: 'Осы викторина үшін 2 бустерге дейін таңдаңыз.',
    booster_5050: '50/50', booster_5050_desc: '2 қате жауапты алып тастау',
    booster_time: '+10 секунд', booster_time_desc: '10 секунд қосу',
    booster_skip: 'Өткізу', booster_skip_desc: 'Жазасыз өткізу',
    booster_double: 'Қос ұпай', booster_double_desc: 'Ұпайды екі еселеу',
    delete_quiz: 'Викторинаны жою', delete_confirm: 'Жоюды растайсыз ба?',
    delete: 'Жою',
    data_management: 'Деректерді басқару', export_data: 'Экспорт', import_data: 'Импорт',
    export_desc: 'Барлық деректерді жүктеу.',
    import_desc: 'Файлдан қалпына келтіру.',
    export: '📤 Экспорт', import: '📥 Импорт',
    missions_reset: 'Жаңарту', missions_xp: 'Бүгінгі XP',
    claim: 'Алу', claimed: 'Алынды ✓', in_progress: 'Орындалуда',
    mission_1: '3 викторина өту', mission_1d: 'Бүгін 3 ойын аяқтаңыз',
    mission_2: '20 сұраққа жауап беру', mission_2d: 'Барлығы 20 жауап беріңіз',
    mission_3: '5 серия', mission_3d: 'Қатарынан 5 дұрыс жауап',
    mission_4: 'Викторина жасау', mission_4d: 'Бүгін жаңа викторина жасаңыз',
    mission_5: 'Мінсіз нәтиже', mission_5d: 'Қатесіз аяқтаңыз',
    mission_6: '2 санат', mission_6d: '2 санаттан викторина өтіңіз',
    avatars: 'Аватарлар', frames: 'Жақтаулар', themes: 'Тақырыптар', badges: 'Белгілер',
    owned: 'Сатып алынды', equip: 'Кию', buy: 'Сатып алу', equipped: 'Кийілген ✓',
    not_enough_xp: 'XP жетіспейді!', purchased: 'Сатып алынды!', equipped_msg: 'Кийілді!',
    all: 'Барлығы', common: 'Кәдімгі', rare: 'Сирек', epic: 'Эпикалық', legendary: 'Аңыздық',
    global: 'Жаһандық', weekly: 'Апталық', monthly: 'Айлық', friends: 'Достар',
    achievement_unlocked: 'Жетістік ашылды!',
    xp_over_time: 'XP уақыт бойынша', accuracy_over_time: 'Дәлдік уақыт бойынша',
    category_performance: 'Санат бойынша нәтижелер',
    strong_topics: '💪 Күшті тақырыптар', weak_topics: '⚠️ Әлсіз тақырыптар',
    overview: 'Шолу', edit_profile: 'Өңдеу', security: 'Қауіпсіздік',
    choose_avatar: 'Аватарды таңдаңыз', save_changes: 'Сақтау',
    current_password: 'Қазіргі пароль', new_password: 'Жаңа пароль',
    confirm_new_password: 'Растаңыз', change_password: 'Парольді өзгерту',
    create_room: 'Бөлме жасау', join_room: 'Бөлмеге кіру', lobby: 'Лобби', leave: 'Шығу',
    create_room_desc: 'Жаңа мультиплеер сессиясын бастау',
    join_room_desc: 'Бөлме кодын енгізіңіз',
    room_code: 'Бөлме коды', room_code_ph: 'ABCD12', copy_code: '📋 Копиялау',
    start_game: 'Ойынды бастау', players: 'Ойыншылар', waiting: 'Ойыншыларды күту...',
    ai_gen: 'ИИ Генератор', generate_from_topic: 'Тақырып бойынша',
    generate_from_text: 'Мәтіннен',
    topic: 'Тақырып', difficulty: 'Қиындық', question_count: 'Сұрақтар саны',
    topic_ph: 'мысалы, Екінші дүниежүзілік соғыс', paste_text: 'Мәтін қойыңыз',
    text_ph: 'Кез келген мәтінді қойыңыз...',
    generate_quiz: '✨ Жасау', preview: 'Алдын ала қарау', clear: 'Тазалау',
    easy: 'Жеңіл', medium: 'Орташа', hard: 'Қиын',
    awesome: 'Тамаша!', continue: 'Жалғастыру',
    correct: 'Дұрыс!', wrong: 'Қате!', times_up: 'Уақыт аяқталды!',
    score: 'Ұпай', streak: 'Серия', combo: 'КОМБО',
    results_perfect: 'Мінсіз!', results_great: 'Тамаша!', results_good: 'Жақсы', results_ok: 'Жалғастырыңыз',
    questions_answered: 'Жауапталған сұрақтар', correct_answers: 'Дұрыс жауаптар',
    xp_earned: 'XP алынды', time_taken: 'Уақыт',
    no_quizzes: 'Викториналар жоқ', no_quizzes_sub: 'Бірінші викторинаны жасаңыз!',
    no_mistakes: 'Қате жоқ!', no_mistakes_sub: 'Алдымен ойнаңыз.',
    created: 'Жасалды', questions: 'сұрақ', play: 'Ойнау', edit: 'Өңдеу',
    rank_bronze: 'Қола', rank_silver: 'Күміс', rank_gold: 'Алтын',
    rank_platinum: 'Платина', rank_diamond: 'Алмас', rank_master: 'Шебер',
    level: 'Деңгей', xp: 'XP', rank: 'Дәреже', created_quizzes: 'Жасалған викториналар',
    add_pair: '+ Жұп қосу', option: 'Нұсқа', answer: 'Жауап',
    image_url: 'Сурет URL', image_url_ph: 'https://...jpg',
    generating: 'Жасалуда...', generated_ok: 'Викторина жасалды!',
    saved: 'Сақталды!', deleted: 'Жойылды!', error: 'Қате',
    fill_all_fields: 'Барлық өрістерді толтырыңыз.',
    passwords_not_match: 'Парольдер сәйкес келмейді.',
    user_exists: 'Бұл email-мен пайдаланушы бар.',
    wrong_credentials: 'Қате email немесе пароль.',
    profile_saved: 'Профиль сақталды!', password_changed: 'Пароль өзгертілді!',
    wrong_old_password: 'Қазіргі пароль қате.',
    room_created: 'Бөлме жасалды!', room_joined: 'Бөлмеге кірдіңіз!',
    room_not_found: 'Бөлме табылмады.', code_copied: 'Код көшірілді!',
    exported: 'Деректер экспортталды!', imported: 'Деректер импортталды!',
    import_error: 'Импорт қатесі. Жарамсыз файл.',
    no_mistakes_quiz: 'Қайталайтын қате жоқ!', quiz_saved: 'Викторина сақталды!',
    min_questions: 'Кемінде 1 сұрақ қосыңыз.',
    explanation_label: 'Түсіндірме',
    correct_label: 'Дұрыс жауап',
    add_matching_pair: '+ Жұп қосу',
    matching_left: 'Сол жақ', matching_right: 'Оң жақ',
    true_text: 'Рас', false_text: 'Жалған',
    sec: 'сек', mins: 'мин',
  }
};

// ============================================================
// STATE
// ============================================================
let currentLang = 'en';
let currentTheme = 'dark';
let currentScreen = 'home';
let currentUser = null;

// Quiz play state
let currentQuiz = null;
let currentQuestionIndex = 0;
let score = 0;
let streak = 0;
let bestStreak = 0;
let comboMultiplier = 1;
let timerInterval = null;
let timeLeft = 30;
let startTime = null;
let totalTime = 0;
let correctCount = 0;
let selectedAnswers = [];
let answered = false;
let boosters = { fifty: false, time: false, skip: false, double: false };
let activeBoosters = [];
let pendingQuizId = null;
let doublePointsActive = false;
let quizHistory = [];
let matchingSelected = null;
let matchingPairs = [];
let generatedQuizData = null;
let currentDifficulty = 'easy';
let deleteTargetId = null;
let editingQuizId = null;
let lbTab = 'global';
let shopTab = 'avatars';
let achTab = 'all';
let mpRoom = null;
let mpInterval = null;

// ============================================================
// STORAGE HELPERS
// ============================================================
function ls(key, def = null) {
  try { const v = localStorage.getItem(key); return v !== null ? JSON.parse(v) : def; } catch { return def; }
}
function lsSet(key, val) { try { localStorage.setItem(key, JSON.stringify(val)); } catch {} }

function getUsers() { return ls('eq_users', []); }
function setUsers(u) { lsSet('eq_users', u); }
function getQuizzes() { return ls('eq_quizzes', []); }
function setQuizzes(q) { lsSet('eq_quizzes', q); }
function getMistakes() { return ls(`eq_mistakes_${currentUser?.id}`, []); }
function setMistakes(m) { lsSet(`eq_mistakes_${currentUser?.id}`, m); }
function getGameHistory() { return ls(`eq_history_${currentUser?.id}`, []); }
function addGameHistory(h) { const a = getGameHistory(); a.unshift(h); lsSet(`eq_history_${currentUser?.id}`, a.slice(0, 100)); }

// ============================================================
// TRANSLATION HELPERS
// ============================================================
function t(key) { return (translations[currentLang] || translations.en)[key] || key; }

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') el.value = t(key);
    else el.textContent = t(key);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
  });
  // Lang buttons
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.textContent.trim().toLowerCase() === currentLang);
  });
}

function setLang(lang) {
  currentLang = lang;
  lsSet('eq_lang', lang);
  document.documentElement.lang = lang;
  applyTranslations();
  renderUI();
}

// ============================================================
// THEME
// ============================================================
function toggleTheme() {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', currentTheme);
  lsSet('eq_theme', currentTheme);
  document.getElementById('theme-toggle-btn').textContent = currentTheme === 'dark' ? '🌙' : '☀️';
}

// ============================================================
// PARTICLES / CANVAS
// ============================================================
function initCanvas() {
  const canvas = document.getElementById('bg-canvas');
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];
  function resize() { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; }
  resize();
  window.addEventListener('resize', resize);
  for (let i = 0; i < 60; i++) particles.push({
    x: Math.random() * W, y: Math.random() * H,
    r: Math.random() * 2 + 0.5,
    vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3,
    o: Math.random() * 0.4 + 0.1
  });
  function draw() {
    ctx.clearRect(0, 0, W, H);
    const isDark = currentTheme === 'dark';
    particles.forEach(p => {
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = isDark ? `rgba(255,255,255,${p.o})` : `rgba(0,0,0,${p.o * 0.5})`;
      ctx.fill();
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
    });
    requestAnimationFrame(draw);
  }
  draw();
}

// ============================================================
// TOAST
// ============================================================
function showToast(msg, type = 'info') {
  const icons = { success: '✅', error: '❌', info: 'ℹ️', warning: '⚠️' };
  const el = document.createElement('div');
  el.className = `toast toast-${type}`;
  el.innerHTML = `<span class="toast-icon">${icons[type]}</span><span class="toast-text">${msg}</span>`;
  document.getElementById('toast-container').appendChild(el);
  setTimeout(() => { el.classList.add('hide'); setTimeout(() => el.remove(), 400); }, 3200);
}

// ============================================================
// XP FLOAT ANIMATION
// ============================================================
function showXPFloat(xp, x, y) {
  const el = document.createElement('div');
  el.className = 'xp-float';
  el.textContent = `+${xp} XP`;
  el.style.left = (x || window.innerWidth / 2) + 'px';
  el.style.top = (y || window.innerHeight / 2) + 'px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 1600);
}

// ============================================================
// AUDIO
// ============================================================
let audioCtx = null;
function getAudio() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  return audioCtx;
}
function playSound(type) {
  try {
    const ctx = getAudio();
    const o = ctx.createOscillator(); const g = ctx.createGain();
    o.connect(g); g.connect(ctx.destination);
    const sounds = {
      correct: [{ f: 523, d: 0.08 }, { f: 659, d: 0.08 }, { f: 784, d: 0.15 }],
      wrong: [{ f: 220, d: 0.2 }],
      combo: [{ f: 600, d: 0.05 }, { f: 800, d: 0.05 }, { f: 1000, d: 0.1 }],
      levelup: [{ f: 400, d: 0.08 }, { f: 600, d: 0.08 }, { f: 800, d: 0.08 }, { f: 1000, d: 0.2 }],
      click: [{ f: 440, d: 0.05 }],
      achievement: [{ f: 700, d: 0.08 }, { f: 900, d: 0.08 }, { f: 1100, d: 0.15 }]
    };
    let delay = 0;
    (sounds[type] || sounds.click).forEach(n => {
      const o2 = ctx.createOscillator(); const g2 = ctx.createGain();
      o2.connect(g2); g2.connect(ctx.destination);
      o2.frequency.value = n.f; o2.type = 'sine';
      g2.gain.setValueAtTime(0.15, ctx.currentTime + delay);
      g2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + delay + n.d);
      o2.start(ctx.currentTime + delay); o2.stop(ctx.currentTime + delay + n.d);
      delay += n.d;
    });
    o.start(); o.stop();
  } catch {}
}

// ============================================================
// LEVEL / XP / RANK
// ============================================================
function xpForLevel(lvl) { return lvl * lvl * 100; }
function getLevel(xp) {
  let lvl = 1;
  while (xp >= xpForLevel(lvl + 1)) lvl++;
  return lvl;
}
function getRank(user) {
  const score = (user.wins || 0) * 3 + (user.gamesPlayed || 0) + Math.floor((user.xp || 0) / 100);
  if (score >= 500) return 'master';
  if (score >= 200) return 'diamond';
  if (score >= 100) return 'platinum';
  if (score >= 50) return 'gold';
  if (score >= 20) return 'silver';
  return 'bronze';
}
function getRankLabel(rank) {
  const map = { bronze: 'rank_bronze', silver: 'rank_silver', gold: 'rank_gold', platinum: 'rank_platinum', diamond: 'rank_diamond', master: 'rank_master' };
  return t(map[rank] || 'rank_bronze');
}
function getRankIcon(rank) {
  const map = { bronze: '🥉', silver: '🥈', gold: '🥇', platinum: '💠', diamond: '💎', master: '👑' };
  return map[rank] || '🥉';
}

function addXP(amount, x, y) {
  if (!currentUser) return;
  const prevLevel = getLevel(currentUser.xp || 0);
  currentUser.xp = (currentUser.xp || 0) + amount;
  const newLevel = getLevel(currentUser.xp);
  saveCurrentUser();
  showXPFloat(amount, x, y);
  if (newLevel > prevLevel) {
    setTimeout(() => showLevelUp(newLevel), 800);
  }
  updateHomeXP();
}

function showLevelUp(lvl) {
  document.getElementById('level-up-title').textContent = 'LEVEL UP!';
  document.getElementById('level-up-sub').textContent = `${t('level')} ${lvl}!`;
  document.getElementById('level-up-overlay').classList.remove('hidden');
  playSound('levelup');
}
function hideLevelUp() { document.getElementById('level-up-overlay').classList.add('hidden'); }

// ============================================================
// AUTH SERVICE
// ============================================================
function saveCurrentUser() {
  if (!currentUser) return;
  const users = getUsers();
  const idx = users.findIndex(u => u.id === currentUser.id);
  if (idx >= 0) users[idx] = { ...users[idx], ...currentUser };
  else users.push(currentUser);
  setUsers(users);
  lsSet('eq_current_user', currentUser);
}

function handleLogin() {
  const email = document.getElementById('login-email').value.trim();
  const pass = document.getElementById('login-password').value;
  const remember = document.getElementById('remember-me').checked;
  if (!email || !pass) { showToast(t('fill_all_fields'), 'error'); return; }
  const users = getUsers();
  const user = users.find(u => u.email === email && u.password === btoa(pass));
  if (!user) { showToast(t('wrong_credentials'), 'error'); return; }
  currentUser = { ...user };
  lsSet('eq_current_user', currentUser);
  if (remember) lsSet('eq_remember', email);
  else localStorage.removeItem('eq_remember');
  initApp();
}

function handleRegister() {
  const username = document.getElementById('reg-username').value.trim();
  const email = document.getElementById('reg-email').value.trim();
  const pass = document.getElementById('reg-password').value;
  const confirm = document.getElementById('reg-confirm').value;
  if (!username || !email || !pass || !confirm) { showToast(t('fill_all_fields'), 'error'); return; }
  if (pass !== confirm) { showToast(t('passwords_not_match'), 'error'); return; }
  if (pass.length < 6) { showToast('Password must be at least 6 characters.', 'error'); return; }
  const users = getUsers();
  if (users.find(u => u.email === email)) { showToast(t('user_exists'), 'error'); return; }
  const newUser = {
    id: Date.now().toString(),
    username, email, password: btoa(pass),
    avatar: '🧑', frame: 'none', theme: 'dark',
    xp: 0, gamesPlayed: 0, wins: 0, accuracy: 0,
    bestStreak: 0, createdQuizzes: 0,
    achievements: [], inventory: [], equippedBadge: '',
    joinDate: new Date().toISOString()
  };
  users.push(newUser);
  setUsers(users);
  currentUser = newUser;
  lsSet('eq_current_user', newUser);
  initApp();
}

function handleLogout() {
  currentUser = null;
  localStorage.removeItem('eq_current_user');
  localStorage.removeItem('eq_remember');
  document.getElementById('main-app').classList.add('hidden');
  document.getElementById('auth-screen').style.display = 'flex';
  applyTranslations();
}

function checkAutoLogin() {
  const saved = ls('eq_current_user');
  if (saved) { currentUser = saved; return true; }
  return false;
}

// ============================================================
// USER SERVICE
// ============================================================
function saveProfile() {
  const username = document.getElementById('edit-username').value.trim();
  const email = document.getElementById('edit-email').value.trim();
  if (!username || !email) { showToast(t('fill_all_fields'), 'error'); return; }
  currentUser.username = username;
  currentUser.email = email;
  saveCurrentUser();
  renderProfile();
  showToast(t('profile_saved'), 'success');
}

function changePassword() {
  const oldP = document.getElementById('old-password').value;
  const newP = document.getElementById('new-password').value;
  const confP = document.getElementById('confirm-new-password').value;
  if (!oldP || !newP || !confP) { showToast(t('fill_all_fields'), 'error'); return; }
  if (btoa(oldP) !== currentUser.password) { showToast(t('wrong_old_password'), 'error'); return; }
  if (newP !== confP) { showToast(t('passwords_not_match'), 'error'); return; }
  currentUser.password = btoa(newP);
  saveCurrentUser();
  document.getElementById('old-password').value = '';
  document.getElementById('new-password').value = '';
  document.getElementById('confirm-new-password').value = '';
  showToast(t('password_changed'), 'success');
}

// ============================================================
// NAVIGATION
// ============================================================
function navigate(screen) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.mobile-nav-btn').forEach(b => b.classList.remove('active'));
  const el = document.getElementById(`screen-${screen}`);
  if (el) el.classList.add('active');
  currentScreen = screen;
  document.querySelectorAll(`[onclick="navigate('${screen}')"]`).forEach(b => b.classList.add('active'));
  window.scrollTo(0, 0);
  renderScreenContent(screen);
}

function renderScreenContent(screen) {
  switch (screen) {
    case 'home': renderHome(); break;
    case 'quizzes': renderQuizList(); break;
    case 'missions': renderMissions(); break;
    case 'shop': renderShop(); break;
    case 'achievements': renderAchievements(); break;
    case 'leaderboard': renderLeaderboard(); break;
    case 'analytics': renderAnalytics(); break;
    case 'profile': renderProfile(); break;
    case 'multiplayer': renderMultiplayer(); break;
    case 'ai-gen': /* static */ break;
  }
}

// ============================================================
// HOME RENDER
// ============================================================
function renderHome() {
  if (!currentUser) return;
  document.getElementById('home-welcome').textContent = `${t('welcome_back')} ${currentUser.username}!`;
  document.getElementById('home-sub').textContent = t('ready_learn');
  document.getElementById('home-avatar').textContent = currentUser.avatar || '👤';
  document.getElementById('home-username').textContent = currentUser.username;
  updateHomeXP();
  document.getElementById('home-stat-games').textContent = currentUser.gamesPlayed || 0;
  document.getElementById('home-stat-wins').textContent = currentUser.wins || 0;
  document.getElementById('home-stat-accuracy').textContent = (currentUser.accuracy || 0).toFixed(0) + '%';
  document.getElementById('home-stat-streak').textContent = currentUser.bestStreak || 0;
  renderHomeMissions();
  renderHomeRecentQuizzes();
}

function updateHomeXP() {
  if (!currentUser) return;
  const xp = currentUser.xp || 0;
  const lvl = getLevel(xp);
  const rank = getRank(currentUser);
  const cur = xp - xpForLevel(lvl);
  const need = xpForLevel(lvl + 1) - xpForLevel(lvl);
  const pct = Math.min(100, (cur / need) * 100);
  document.getElementById('home-level-label').textContent = `LV ${lvl}`;
  document.getElementById('home-xp-bar').style.width = pct + '%';
  document.getElementById('home-xp-next').textContent = `${cur}/${need} XP`;
  document.getElementById('home-xp-badge').textContent = `${xp} XP`;
  document.getElementById('home-rank-label').textContent = `${getRankIcon(rank)} ${getRankLabel(rank)} • ${t('level')} ${lvl}`;
  document.getElementById('header-avatar').textContent = currentUser.avatar || '👤';
}

function renderHomeMissions() {
  const missions = getMissions();
  const el = document.getElementById('home-missions');
  el.innerHTML = missions.slice(0, 3).map(m => renderMissionCard(m, true)).join('');
}

function renderHomeRecentQuizzes() {
  const quizzes = getQuizzes().slice(0, 6);
  const el = document.getElementById('home-recent-quizzes');
  if (!quizzes.length) {
    el.innerHTML = `<div class="empty-state" style="grid-column:1/-1"><div class="empty-state-icon">📭</div><div class="empty-state-title">${t('no_quizzes')}</div><div class="empty-state-sub">${t('no_quizzes_sub')}</div></div>`;
    return;
  }
  el.innerHTML = quizzes.map(q => renderQuizCard(q)).join('');
}

// ============================================================
// QUIZ LIST
// ============================================================
function renderQuizList() {
  const search = (document.getElementById('quiz-search')?.value || '').toLowerCase();
  const quizzes = getQuizzes().filter(q =>
    q.title.toLowerCase().includes(search) ||
    (q.category || '').toLowerCase().includes(search)
  );
  const el = document.getElementById('quiz-list');
  if (!quizzes.length) {
    el.innerHTML = `<div class="empty-state" style="grid-column:1/-1"><div class="empty-state-icon">📭</div><div class="empty-state-title">${t('no_quizzes')}</div><div class="empty-state-sub">${t('no_quizzes_sub')}</div></div>`;
    return;
  }
  el.innerHTML = quizzes.map(q => renderQuizCard(q)).join('');
}

function renderQuizCard(q) {
  return `<div class="card quiz-card">
    <div class="quiz-card-title">${escHtml(q.title)}</div>
    <div class="quiz-card-meta">
      <span>📁 ${escHtml(q.category || 'General')}</span>
      <span>❓ ${q.questions.length} ${t('questions')}</span>
      <span>⏱ ${q.timePerQuestion || 30}${t('sec')}</span>
    </div>
    ${q.description ? `<div style="font-size:12px;color:var(--text-secondary)">${escHtml(q.description)}</div>` : ''}
    <div class="quiz-card-actions">
      <button class="btn btn-primary btn-sm" onclick="openBoosterSelect('${q.id}')">${t('play')}</button>
      <button class="btn btn-ghost btn-sm" onclick="openEditQuiz('${q.id}')">${t('edit')}</button>
      <button class="btn btn-danger btn-sm" onclick="openDeleteModal('${q.id}')">${t('delete')}</button>
    </div>
  </div>`;
}

// ============================================================
// CREATE / EDIT QUIZ
// ============================================================
let questionBuilders = [];

function openCreateQuiz() {
  editingQuizId = null;
  questionBuilders = [];
  document.getElementById('create-title').textContent = t('create_quiz');
  document.getElementById('quiz-title-input').value = '';
  document.getElementById('quiz-desc-input').value = '';
  document.getElementById('quiz-cat-input').value = '';
  document.getElementById('quiz-time-input').value = '30';
  document.getElementById('questions-list').innerHTML = '';
  navigate('create');
  addQuestion();
}

function openEditQuiz(id) {
  const q = getQuizzes().find(x => x.id === id);
  if (!q) return;
  editingQuizId = id;
  questionBuilders = JSON.parse(JSON.stringify(q.questions));
  document.getElementById('create-title').textContent = 'Edit Quiz';
  document.getElementById('quiz-title-input').value = q.title;
  document.getElementById('quiz-desc-input').value = q.description || '';
  document.getElementById('quiz-cat-input').value = q.category || '';
  document.getElementById('quiz-time-input').value = q.timePerQuestion || 30;
  renderQuestionBuilders();
  navigate('create');
}

function addQuestion() {
  questionBuilders.push({
    id: Date.now().toString() + Math.random(),
    type: 'multiple',
    text: '', options: ['', '', '', ''], correct: 0,
    explanation: '', imageUrl: '',
    matchPairs: [{ left: '', right: '' }, { left: '', right: '' }]
  });
  renderQuestionBuilders();
  setTimeout(() => {
    const list = document.getElementById('questions-list');
    list.lastElementChild?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 100);
}

function removeQuestion(idx) {
  questionBuilders.splice(idx, 1);
  renderQuestionBuilders();
}

function renderQuestionBuilders() {
  const el = document.getElementById('questions-list');
  el.innerHTML = questionBuilders.map((q, i) => buildQuestionHTML(q, i)).join('');
}

function buildQuestionHTML(q, i) {
  const types = [
    { val: 'multiple', label: t('multiple_choice') },
    { val: 'truefalse', label: t('true_false') },
    { val: 'fillblank', label: t('fill_blank') },
    { val: 'matching', label: t('matching') },
    { val: 'image', label: t('image_q') }
  ];
  let bodyHTML = '';
  if (q.type === 'multiple' || q.type === 'image') {
    const opts = q.options || ['', '', '', ''];
    bodyHTML = `
      ${q.type === 'image' ? `<div class="input-group"><label class="input-label">${t('image_url')}</label><input class="input" value="${escAttr(q.imageUrl || '')}" oninput="questionBuilders[${i}].imageUrl=this.value" placeholder="${t('image_url_ph')}" /></div>` : ''}
      ${opts.map((opt, oi) => `
        <div class="answer-option">
          <input type="radio" name="correct_${i}" ${q.correct === oi ? 'checked' : ''} onchange="questionBuilders[${i}].correct=${oi}" />
          <input class="input" style="flex:1" value="${escAttr(opt)}" oninput="questionBuilders[${i}].options[${oi}]=this.value" placeholder="${t('option')} ${oi + 1}" />
          ${opts.length > 2 ? `<button style="background:none;border:none;color:var(--text-muted);font-size:16px;cursor:pointer" onclick="removeOption(${i},${oi})">✕</button>` : ''}
        </div>`).join('')}
      <button class="btn btn-ghost btn-sm mt-8" style="margin-top:8px" onclick="addOption(${i})">+ ${t('option')}</button>
    `;
  } else if (q.type === 'truefalse') {
    bodyHTML = `<div class="flex gap-8" style="gap:8px">
      <label style="display:flex;align-items:center;gap:8px;cursor:pointer"><input type="radio" name="tf_${i}" ${q.correct === true ? 'checked' : ''} onchange="questionBuilders[${i}].correct=true" /> ${t('true_text')}</label>
      <label style="display:flex;align-items:center;gap:8px;cursor:pointer"><input type="radio" name="tf_${i}" ${q.correct === false ? 'checked' : ''} onchange="questionBuilders[${i}].correct=false" /> ${t('false_text')}</label>
    </div>`;
  } else if (q.type === 'fillblank') {
    bodyHTML = `<div class="input-group"><label class="input-label">${t('correct_answer')}</label><input class="input" value="${escAttr(q.correctText || '')}" oninput="questionBuilders[${i}].correctText=this.value" /></div>`;
  } else if (q.type === 'matching') {
    const pairs = q.matchPairs || [];
    bodyHTML = `${pairs.map((p, pi) => `
      <div style="display:grid;grid-template-columns:1fr 1fr auto;gap:8px;margin-bottom:8px">
        <input class="input" value="${escAttr(p.left)}" oninput="questionBuilders[${i}].matchPairs[${pi}].left=this.value" placeholder="${t('matching_left')}" />
        <input class="input" value="${escAttr(p.right)}" oninput="questionBuilders[${i}].matchPairs[${pi}].right=this.value" placeholder="${t('matching_right')}" />
        ${pairs.length > 2 ? `<button style="background:none;border:none;color:var(--text-muted);font-size:16px;cursor:pointer" onclick="removePair(${i},${pi})">✕</button>` : '<span></span>'}
      </div>`).join('')}
      <button class="btn btn-ghost btn-sm" onclick="addPair(${i})">+ ${t('add_matching_pair')}</button>`;
  }

  return `<div class="question-builder">
    <div class="question-builder-header">
      <span style="font-size:13px;font-weight:700">Q${i + 1}</span>
      <div class="flex gap-8" style="gap:8px">
        <select class="input" style="padding:4px 8px;font-size:12px" onchange="changeQType(${i},this.value)">
          ${types.map(tp => `<option value="${tp.val}" ${q.type === tp.val ? 'selected' : ''}>${tp.label}</option>`).join('')}
        </select>
        <button class="btn btn-danger btn-sm" onclick="removeQuestion(${i})">✕</button>
      </div>
    </div>
    <div class="input-group">
      <label class="input-label">${t('question_text')}</label>
      <textarea class="input" oninput="questionBuilders[${i}].text=this.value" placeholder="${t('question_text')}...">${escHtml(q.text)}</textarea>
    </div>
    ${bodyHTML}
    <div class="input-group mt-8" style="margin-top:8px">
      <label class="input-label">${t('explanation')}</label>
      <input class="input" value="${escAttr(q.explanation || '')}" oninput="questionBuilders[${i}].explanation=this.value" placeholder="${t('explanation_ph')}" />
    </div>
  </div>`;
}

function changeQType(i, type) {
  questionBuilders[i].type = type;
  if (type === 'truefalse') questionBuilders[i].correct = true;
  if (type === 'multiple' || type === 'image') {
    if (!questionBuilders[i].options) questionBuilders[i].options = ['', '', '', ''];
    if (typeof questionBuilders[i].correct !== 'number') questionBuilders[i].correct = 0;
  }
  renderQuestionBuilders();
}

function addOption(qi) {
  questionBuilders[qi].options = questionBuilders[qi].options || [];
  questionBuilders[qi].options.push('');
  renderQuestionBuilders();
}
function removeOption(qi, oi) {
  questionBuilders[qi].options.splice(oi, 1);
  if (questionBuilders[qi].correct >= questionBuilders[qi].options.length) questionBuilders[qi].correct = 0;
  renderQuestionBuilders();
}
function addPair(qi) { questionBuilders[qi].matchPairs.push({ left: '', right: '' }); renderQuestionBuilders(); }
function removePair(qi, pi) { questionBuilders[qi].matchPairs.splice(pi, 1); renderQuestionBuilders(); }

function saveQuiz() {
  const title = document.getElementById('quiz-title-input').value.trim();
  if (!title) { showToast(t('fill_all_fields'), 'error'); return; }
  if (!questionBuilders.length) { showToast(t('min_questions'), 'error'); return; }
  const quiz = {
    id: editingQuizId || Date.now().toString(),
    title, description: document.getElementById('quiz-desc-input').value.trim(),
    category: document.getElementById('quiz-cat-input').value.trim() || 'General',
    timePerQuestion: parseInt(document.getElementById('quiz-time-input').value) || 30,
    questions: questionBuilders.map(q => ({ ...q })),
    createdAt: new Date().toISOString(),
    createdBy: currentUser.id
  };
  const quizzes = getQuizzes();
  if (editingQuizId) {
    const idx = quizzes.findIndex(x => x.id === editingQuizId);
    if (idx >= 0) quizzes[idx] = quiz;
    else quizzes.push(quiz);
  } else {
    quizzes.push(quiz);
    currentUser.createdQuizzes = (currentUser.createdQuizzes || 0) + 1;
    saveCurrentUser();
    updateMissionProgress('create_quiz', 1);
    addXP(50);
  }
  setQuizzes(quizzes);
  checkAchievements();
  showToast(t('quiz_saved'), 'success');
  navigate('quizzes');
}

// ============================================================
// DELETE QUIZ
// ============================================================
function openDeleteModal(id) { deleteTargetId = id; document.getElementById('delete-modal').classList.remove('hidden'); }
function closeDeleteModal() { document.getElementById('delete-modal').classList.add('hidden'); deleteTargetId = null; }
function confirmDelete() {
  if (!deleteTargetId) return;
  const quizzes = getQuizzes().filter(q => q.id !== deleteTargetId);
  setQuizzes(quizzes);
  closeDeleteModal();
  showToast(t('deleted'), 'success');
  renderQuizList();
}

// ============================================================
// BOOSTER SELECT
// ============================================================
const BOOSTER_LIST = [
  { id: 'fifty', icon: '🎭', nameKey: 'booster_5050', descKey: 'booster_5050_desc' },
  { id: 'time', icon: '⏰', nameKey: 'booster_time', descKey: 'booster_time_desc' },
  { id: 'skip', icon: '⏭', nameKey: 'booster_skip', descKey: 'booster_skip_desc' },
  { id: 'double', icon: '✖️', nameKey: 'booster_double', descKey: 'booster_double_desc' }
];
let selectedBoosters = [];

function openBoosterSelect(quizId) {
  pendingQuizId = quizId;
  selectedBoosters = [];
  const el = document.getElementById('booster-select-list');
  el.innerHTML = BOOSTER_LIST.map(b => `
    <div class="card" style="cursor:pointer;text-align:center;padding:16px" id="bsel_${b.id}" onclick="toggleBoosterSelect('${b.id}')">
      <div style="font-size:28px;margin-bottom:6px">${b.icon}</div>
      <div style="font-size:13px;font-weight:700">${t(b.nameKey)}</div>
      <div style="font-size:11px;color:var(--text-secondary);margin-top:4px">${t(b.descKey)}</div>
    </div>`).join('');
  document.getElementById('booster-select-modal').classList.remove('hidden');
}

function toggleBoosterSelect(id) {
  const idx = selectedBoosters.indexOf(id);
  if (idx >= 0) {
    selectedBoosters.splice(idx, 1);
    document.getElementById(`bsel_${id}`).style.borderColor = '';
    document.getElementById(`bsel_${id}`).style.background = '';
  } else {
    if (selectedBoosters.length >= 2) { showToast('Max 2 boosters!', 'warning'); return; }
    selectedBoosters.push(id);
    document.getElementById(`bsel_${id}`).style.borderColor = 'var(--border-hover)';
    document.getElementById(`bsel_${id}`).style.background = 'var(--glass-strong)';
  }
}

function closeBoosters() { document.getElementById('booster-select-modal').classList.add('hidden'); pendingQuizId = null; }

function startQuizWithBoosters() {
  document.getElementById('booster-select-modal').classList.add('hidden');
  activeBoosters = [...selectedBoosters];
  startQuiz(pendingQuizId);
}

// ============================================================
// QUIZ PLAY ENGINE
// ============================================================
function startQuiz(quizId) {
  const quizzes = getQuizzes();
  currentQuiz = quizzes.find(q => q.id === quizId);
  if (!currentQuiz) return;
  currentQuestionIndex = 0;
  score = 0; streak = 0; bestStreak = 0; comboMultiplier = 1;
  correctCount = 0; answered = false; quizHistory = [];
  startTime = Date.now();
  boosters = { fifty: activeBoosters.includes('fifty'), time: activeBoosters.includes('time'), skip: activeBoosters.includes('skip'), double: activeBoosters.includes('double') };
  doublePointsActive = false;
  renderBoostersBar();
  navigate('play');
  showQuestion();
}

function renderBoostersBar() {
  const el = document.getElementById('boosters-bar');
  el.innerHTML = BOOSTER_LIST.filter(b => activeBoosters.includes(b.id)).map(b => `
    <button class="booster-btn" id="bbar_${b.id}" onclick="useBooster('${b.id}')">${b.icon} ${t(b.nameKey)}</button>`).join('');
}

function useBooster(id) {
  const btn = document.getElementById(`bbar_${id}`);
  if (!btn || btn.disabled) return;
  btn.disabled = true; btn.classList.add('used');
  if (id === 'fifty') {
    if (currentQuiz.questions[currentQuestionIndex].type === 'multiple') {
      const q = currentQuiz.questions[currentQuestionIndex];
      const correct = q.correct;
      const wrong = q.options.map((_, i) => i).filter(i => i !== correct);
      const toHide = wrong.sort(() => Math.random() - 0.5).slice(0, 2);
      document.querySelectorAll('.answer-btn').forEach((b, i) => {
        if (toHide.includes(i)) { b.style.opacity = '0.2'; b.disabled = true; }
      });
    }
  } else if (id === 'time') {
    timeLeft += 10;
    document.getElementById('play-timer').textContent = timeLeft;
    showToast('+10 seconds!', 'info');
  } else if (id === 'skip') {
    clearInterval(timerInterval);
    quizHistory.push({ question: currentQuiz.questions[currentQuestionIndex], userAnswer: null, correct: false, skipped: true });
    nextQuestion();
  } else if (id === 'double') {
    doublePointsActive = true;
    showToast('Double points activated!', 'info');
  }
}

function showQuestion() {
  if (currentQuestionIndex >= currentQuiz.questions.length) { endQuiz(); return; }
  answered = false;
  doublePointsActive = activeBoosters.includes('double') && !document.getElementById('bbar_double')?.disabled ? false : doublePointsActive;
  const q = currentQuiz.questions[currentQuestionIndex];
  const total = currentQuiz.questions.length;
  document.getElementById('play-quiz-name').textContent = currentQuiz.title;
  document.getElementById('play-question-counter').textContent = `Q ${currentQuestionIndex + 1} / ${total}`;
  document.getElementById('play-score').textContent = `${t('score')}: ${score}`;
  document.getElementById('play-streak-label').textContent = `${t('streak')}: ${streak}`;
  document.getElementById('play-progress').style.width = ((currentQuestionIndex / total) * 100) + '%';
  document.getElementById('explanation-area').innerHTML = '';
  document.getElementById('next-btn').classList.add('hidden');
  renderQuestion(q);
  startTimer(currentQuiz.timePerQuestion || 30);
}

function renderQuestion(q) {
  let html = '';
  if (q.imageUrl || q.type === 'image') {
    html += q.imageUrl ? `<img src="${escAttr(q.imageUrl)}" class="question-image" alt="Question image" onerror="this.style.display='none'" />` : '';
  }
  html += `<div class="question-text">${escHtml(q.text)}</div>`;
  if (q.type === 'multiple' || q.type === 'image') {
    const labels = ['A', 'B', 'C', 'D', 'E', 'F'];
    html += `<div class="answers-grid">${(q.options || []).map((opt, i) =>
      `<button class="answer-btn" onclick="submitAnswer(${i})"><span class="answer-label">${labels[i]}</span>${escHtml(opt)}</button>`).join('')}</div>`;
  } else if (q.type === 'truefalse') {
    html += `<div class="answers-grid">
      <button class="answer-btn" onclick="submitAnswer(true)"><span class="answer-label">T</span>${t('true_text')}</button>
      <button class="answer-btn" onclick="submitAnswer(false)"><span class="answer-label">F</span>${t('false_text')}</button>
    </div>`;
  } else if (q.type === 'fillblank') {
    html += `<input class="fill-blank-input" id="fill-input" placeholder="${t('fill_blank')}..." onkeydown="if(event.key==='Enter')submitFillBlank()" />
    <button class="btn btn-primary" onclick="submitFillBlank()">${t('correct_answer')}</button>`;
  } else if (q.type === 'matching') {
    matchingSelected = null; matchingPairs = [];
    const pairs = q.matchPairs || [];
    const leftItems = pairs.map((p, i) => ({ id: i, text: p.left, side: 'left' }));
    const rightItems = pairs.map((p, i) => ({ id: i, text: p.right, side: 'right' })).sort(() => Math.random() - 0.5);
    html += `<div class="matching-container">
      <div>${leftItems.map(it => `<div class="matching-item" id="left_${it.id}" onclick="selectMatchItem('left',${it.id})">${escHtml(it.text)}</div>`).join('')}</div>
      <div>${rightItems.map(it => `<div class="matching-item" id="right_${it.id}" onclick="selectMatchItem('right',${it.id})">${escHtml(it.text)}</div>`).join('')}</div>
    </div>
    <button class="btn btn-primary mt-16" style="margin-top:16px" onclick="submitMatching()">${t('correct_answer')}</button>`;
  }
  document.getElementById('question-area').innerHTML = `<div class="question-card">${html}</div>`;
}

function selectMatchItem(side, id) {
  if (matchingSelected && matchingSelected.side !== side) {
    matchingPairs.push({ left: matchingSelected.side === 'left' ? matchingSelected.id : id, right: matchingSelected.side === 'right' ? matchingSelected.id : id });
    document.getElementById(`${matchingSelected.side}_${matchingSelected.id}`).classList.add('matched-correct');
    document.getElementById(`${side}_${id}`).classList.add('matched-correct');
    document.getElementById(`${matchingSelected.side}_${matchingSelected.id}`).onclick = null;
    document.getElementById(`${side}_${id}`).onclick = null;
    matchingSelected = null;
  } else {
    if (matchingSelected) document.getElementById(`${matchingSelected.side}_${matchingSelected.id}`).classList.remove('selected');
    matchingSelected = { side, id };
    document.getElementById(`${side}_${id}`).classList.add('selected');
  }
}

function submitMatching() {
  clearInterval(timerInterval);
  if (answered) return;
  answered = true;
  const q = currentQuiz.questions[currentQuestionIndex];
  const pairs = q.matchPairs || [];
  let allCorrect = true;
  matchingPairs.forEach(mp => {
    const correct = pairs[mp.left] && pairs[mp.left].right === (pairs[mp.right]?.right || '');
    const expected = pairs.find((_, i) => i === mp.left);
    const rightExpected = pairs.findIndex(p => p.right === pairs[mp.left]?.right);
    if (mp.right !== mp.left) allCorrect = false;
  });
  const correct = matchingPairs.length === pairs.length && matchingPairs.every(mp => mp.left === mp.right);
  processAnswer(correct, null, q);
}

function submitFillBlank() {
  clearInterval(timerInterval);
  if (answered) return;
  answered = true;
  const input = document.getElementById('fill-input');
  const val = input?.value?.trim().toLowerCase() || '';
  const q = currentQuiz.questions[currentQuestionIndex];
  const correct = val === (q.correctText || '').toLowerCase();
  processAnswer(correct, val, q);
}

function submitAnswer(answer) {
  if (answered) return;
  clearInterval(timerInterval);
  answered = true;
  const q = currentQuiz.questions[currentQuestionIndex];
  let correct = false;
  if (q.type === 'multiple' || q.type === 'image') correct = answer === q.correct;
  else if (q.type === 'truefalse') correct = answer === q.correct;
  // Highlight
  const btns = document.querySelectorAll('.answer-btn');
  btns.forEach((b, i) => {
    b.disabled = true;
    if (q.type === 'truefalse') {
      if ((i === 0 && q.correct === true) || (i === 1 && q.correct === false)) b.classList.add('correct');
      if ((i === 0 && answer === true && !correct) || (i === 1 && answer === false && !correct)) b.classList.add('wrong');
      if ((i === 0 && answer === true && correct) || (i === 1 && answer === false && correct)) b.classList.add('correct');
    } else {
      if (i === q.correct) b.classList.add('correct');
      else if (i === answer && !correct) b.classList.add('wrong');
    }
  });
  processAnswer(correct, answer, q);
}

function processAnswer(correct, answer, q) {
  const baseScore = correct ? 100 : 0;
  let pts = baseScore;
  if (correct) {
    streak++;
    if (streak > bestStreak) bestStreak = streak;
    correctCount++;
    // Combo
    if (streak >= 10) comboMultiplier = 2;
    else if (streak >= 5) comboMultiplier = 1.5;
    else if (streak >= 3) comboMultiplier = 1.2;
    else comboMultiplier = 1;
    pts = Math.round(baseScore * comboMultiplier * (doublePointsActive ? 2 : 1));
    score += pts;
    playSound('correct');
    if (streak >= 3) showCombo(streak);
    updateMissionProgress('answer', 1);
    updateMissionProgress('streak', streak);
  } else {
    streak = 0; comboMultiplier = 1;
    playSound('wrong');
    hideCombo();
    // Save mistake
    const mistakes = getMistakes();
    mistakes.push({ ...q, timestamp: Date.now() });
    setMistakes(mistakes.slice(-50));
  }
  document.getElementById('play-score').textContent = `${t('score')}: ${score}`;
  document.getElementById('play-streak-label').textContent = `${t('streak')}: ${streak}`;
  quizHistory.push({ question: q, userAnswer: answer, correct, pts });
  showExplanation(q, correct);
  doublePointsActive = false;
  document.getElementById('next-btn').classList.remove('hidden');
}

function showExplanation(q, correct) {
  const area = document.getElementById('explanation-area');
  let correctText = '';
  if (q.type === 'multiple' || q.type === 'image') correctText = q.options?.[q.correct] || '';
  else if (q.type === 'truefalse') correctText = q.correct ? t('true_text') : t('false_text');
  else if (q.type === 'fillblank') correctText = q.correctText || '';
  area.innerHTML = `<div class="explanation-box">
    <div class="explanation-title">${correct ? t('correct') : t('wrong')}</div>
    ${correctText ? `<div style="margin-bottom:6px"><strong>${t('correct_label')}:</strong> ${escHtml(correctText)}</div>` : ''}
    ${q.explanation ? `<div><strong>${t('explanation_label')}:</strong> ${escHtml(q.explanation)}</div>` : ''}
  </div>`;
}

function showCombo(n) {
  const el = document.getElementById('combo-display');
  const badge = document.getElementById('combo-badge');
  el.classList.remove('hidden');
  badge.textContent = `🔥 ${n}x ${t('combo')}!`;
  playSound('combo');
  clearTimeout(window._comboTimeout);
  window._comboTimeout = setTimeout(hideCombo, 2000);
}
function hideCombo() { document.getElementById('combo-display').classList.add('hidden'); }

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex >= currentQuiz.questions.length) endQuiz();
  else showQuestion();
}

function startTimer(sec) {
  timeLeft = sec;
  clearInterval(timerInterval);
  const el = document.getElementById('play-timer');
  el.textContent = timeLeft;
  el.classList.remove('urgent');
  timerInterval = setInterval(() => {
    timeLeft--;
    el.textContent = timeLeft;
    if (timeLeft <= 5) el.classList.add('urgent');
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      if (!answered) {
        answered = true;
        const q = currentQuiz.questions[currentQuestionIndex];
        showToast(t('times_up'), 'warning');
        const btns = document.querySelectorAll('.answer-btn');
        btns.forEach((b, i) => { b.disabled = true; if (i === q.correct) b.classList.add('correct'); });
        quizHistory.push({ question: q, userAnswer: null, correct: false, pts: 0 });
        document.getElementById('next-btn').classList.remove('hidden');
        streak = 0; comboMultiplier = 1;
      }
    }
  }, 1000);
}

function endQuiz() {
  clearInterval(timerInterval);
  hideCombo();
  totalTime = Math.round((Date.now() - startTime) / 1000);
  const total = currentQuiz.questions.length;
  const pct = total > 0 ? Math.round((correctCount / total) * 100) : 0;
  const isWin = pct >= 70;
  // Update user stats
  currentUser.gamesPlayed = (currentUser.gamesPlayed || 0) + 1;
  if (isWin) currentUser.wins = (currentUser.wins || 0) + 1;
  const prevAccGames = (currentUser.gamesPlayed - 1) || 0;
  currentUser.accuracy = prevAccGames > 0 ? ((currentUser.accuracy * prevAccGames + pct) / currentUser.gamesPlayed) : pct;
  if (bestStreak > (currentUser.bestStreak || 0)) currentUser.bestStreak = bestStreak;
  saveCurrentUser();
  const xpEarned = Math.round(score / 10) + (isWin ? 50 : 10) + (pct === 100 ? 100 : 0);
  addXP(xpEarned);
  updateMissionProgress('play_quiz', 1);
  updateMissionProgress('category', currentQuiz.category);
  if (pct === 100) updateMissionProgress('perfect', 1);
  addGameHistory({ quizId: currentQuiz.id, quizTitle: currentQuiz.title, score, pct, xpEarned, correct: correctCount, total, time: totalTime, date: new Date().toISOString(), category: currentQuiz.category });
  checkAchievements();
  renderResults(pct, xpEarned);
  navigate('results');
}

function renderResults(pct, xpEarned) {
  let grade = t('results_ok');
  if (pct === 100) grade = t('results_perfect');
  else if (pct >= 80) grade = t('results_great');
  else if (pct >= 60) grade = t('results_good');
  const emoji = pct === 100 ? '🏆' : pct >= 80 ? '⭐' : pct >= 60 ? '👍' : '💪';
  document.getElementById('results-summary').innerHTML = `
    <div style="font-size:56px;margin-bottom:12px">${emoji}</div>
    <div class="results-score">${pct}%</div>
    <div class="results-grade">${grade}</div>
    <div class="stat-grid mt-24" style="margin-top:24px">
      <div class="stat-card"><div class="stat-value">${correctCount}/${currentQuiz.questions.length}</div><div class="stat-label">${t('correct_answers')}</div></div>
      <div class="stat-card"><div class="stat-value">${score}</div><div class="stat-label">${t('score')}</div></div>
      <div class="stat-card"><div class="stat-value">+${xpEarned}</div><div class="stat-label">${t('xp_earned')}</div></div>
      <div class="stat-card"><div class="stat-value">${totalTime}${t('sec')}</div><div class="stat-label">${t('time_taken')}</div></div>
    </div>`;
  const details = quizHistory.map((h, i) => `
    <div style="display:flex;align-items:center;gap:12px;padding:12px 16px;background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius);margin-bottom:8px">
      <span style="font-size:18px">${h.correct ? '✅' : h.skipped ? '⏭' : '❌'}</span>
      <div style="flex:1"><div style="font-size:13px;font-weight:500">${escHtml(h.question.text)}</div>
      ${h.question.explanation ? `<div style="font-size:11px;color:var(--text-secondary);margin-top:3px">${escHtml(h.question.explanation)}</div>` : ''}</div>
      <div style="font-size:13px;font-weight:700">${h.pts || 0} pts</div>
    </div>`).join('');
  document.getElementById('results-details').innerHTML = details;
}

function playAgainCurrentQuiz() {
  if (!currentQuiz) return;
  activeBoosters = [];
  startQuiz(currentQuiz.id);
}

// ============================================================
// REPEAT MISTAKES
// ============================================================
function openRepeatMistakes() {
  const mistakes = getMistakes();
  if (!mistakes.length) { showToast(t('no_mistakes_quiz'), 'warning'); return; }
  const unique = [];
  const seen = new Set();
  mistakes.forEach(m => { if (!seen.has(m.text)) { seen.add(m.text); unique.push(m); } });
  const syntheticQuiz = {
    id: 'mistakes_' + Date.now(),
    title: t('repeat_mistakes'),
    category: 'Mistakes',
    timePerQuestion: 30,
    questions: unique.slice(0, 20)
  };
  const quizzes = getQuizzes();
  quizzes.push(syntheticQuiz);
  setQuizzes(quizzes);
  activeBoosters = [];
  startQuiz(syntheticQuiz.id);
  // Remove synthetic after
  setTimeout(() => {
    const qs = getQuizzes().filter(q => !q.id.startsWith('mistakes_'));
    setQuizzes(qs);
  }, 500);
}

// ============================================================
// MISSIONS
// ============================================================
const MISSION_DEFS = [
  { id: 'play_quiz', nameKey: 'mission_1', descKey: 'mission_1d', icon: '🎮', target: 3, xp: 100 },
  { id: 'answer', nameKey: 'mission_2', descKey: 'mission_2d', icon: '💬', target: 20, xp: 75 },
  { id: 'streak', nameKey: 'mission_3', descKey: 'mission_3d', icon: '🔥', target: 5, xp: 150 },
  { id: 'create_quiz', nameKey: 'mission_4', descKey: 'mission_4d', icon: '✏️', target: 1, xp: 200 },
  { id: 'perfect', nameKey: 'mission_5', descKey: 'mission_5d', icon: '⭐', target: 1, xp: 300 },
  { id: 'category', nameKey: 'mission_6', descKey: 'mission_6d', icon: '🗂', target: 2, xp: 125 }
];

function getMissions() {
  const today = new Date().toDateString();
  let stored = ls(`eq_missions_${currentUser?.id}`, null);
  if (!stored || stored.date !== today) {
    stored = { date: today, missions: MISSION_DEFS.map(d => ({ id: d.id, progress: 0, completed: false, claimed: false, categories: [] })) };
    lsSet(`eq_missions_${currentUser?.id}`, stored);
  }
  return MISSION_DEFS.map((def, i) => ({ ...def, ...stored.missions[i] }));
}

function saveMissions(missions) {
  const today = new Date().toDateString();
  lsSet(`eq_missions_${currentUser?.id}`, { date: today, missions: missions.map(m => ({ id: m.id, progress: m.progress, completed: m.completed, claimed: m.claimed, categories: m.categories || [] })) });
}

function updateMissionProgress(type, value) {
  const missions = getMissions();
  let changed = false;
  missions.forEach(m => {
    if (m.completed) return;
    if (m.id === type) {
      if (type === 'category') {
        if (!m.categories) m.categories = [];
        if (!m.categories.includes(value)) { m.categories.push(value); m.progress = m.categories.length; }
      } else if (type === 'streak') {
        if (value > m.progress) m.progress = value;
      } else {
        m.progress += value;
      }
      if (m.progress >= m.target) { m.progress = m.target; m.completed = true; }
      changed = true;
    }
  });
  if (changed) saveMissions(missions);
}

function claimMission(id) {
  const missions = getMissions();
  const m = missions.find(x => x.id === id);
  if (!m || !m.completed || m.claimed) return;
  m.claimed = true;
  saveMissions(missions);
  addXP(m.xp);
  showToast(`+${m.xp} XP! ${t('claimed')}`, 'success');
  renderMissions();
  if (currentScreen === 'home') renderHomeMissions();
}

function renderMissionCard(m, mini = false) {
  const pct = Math.min(100, (m.progress / m.target) * 100);
  const status = m.claimed ? `<button class="btn btn-sm" style="opacity:0.5" disabled>${t('claimed')}</button>` :
    m.completed ? `<button class="btn btn-success btn-sm" onclick="claimMission('${m.id}')">${t('claim')} +${m.xp} XP</button>` :
    mini ? `<span style="font-size:11px;color:var(--text-muted)">${m.progress}/${m.target}</span>` :
    `<span style="font-size:11px;color:var(--text-muted)">${t('in_progress')}</span>`;
  return `<div class="mission-card" style="margin-bottom:10px">
    <div class="mission-icon">${m.icon}</div>
    <div class="mission-info">
      <div class="mission-title">${t(m.nameKey)}</div>
      ${!mini ? `<div class="mission-desc">${t(m.descKey)}</div>` : ''}
      <div class="progress-bar mt-8" style="margin-top:8px"><div class="progress-fill" style="width:${pct}%"></div></div>
      <div class="mission-reward">${m.progress}/${m.target} • ${m.xp} XP</div>
    </div>
    <div>${status}</div>
  </div>`;
}

function renderMissions() {
  const missions = getMissions();
  const totalXP = missions.filter(m => m.claimed).reduce((sum, m) => sum + m.xp, 0);
  document.getElementById('missions-xp-earned').textContent = `+${totalXP} XP`;
  const midnight = new Date(); midnight.setHours(24, 0, 0, 0);
  const hoursLeft = Math.floor((midnight - Date.now()) / 3600000);
  document.getElementById('missions-reset-time').textContent = `${t('missions_reset')} ${hoursLeft}h`;
  document.getElementById('missions-list').innerHTML = missions.map(m => renderMissionCard(m)).join('');
}

// ============================================================
// SHOP
// ============================================================
const SHOP_ITEMS = {
  avatars: [
    { id: 'av_wizard', icon: '🧙', name: 'Wizard', price: 100 },
    { id: 'av_robot', icon: '🤖', name: 'Robot', price: 150 },
    { id: 'av_ninja', icon: '🥷', name: 'Ninja', price: 200 },
    { id: 'av_alien', icon: '👽', name: 'Alien', price: 250 },
    { id: 'av_cat', icon: '🐱', name: 'Cat', price: 120 },
    { id: 'av_fox', icon: '🦊', name: 'Fox', price: 180 },
    { id: 'av_dragon', icon: '🐲', name: 'Dragon', price: 400 },
    { id: 'av_ghost', icon: '👻', name: 'Ghost', price: 300 }
  ],
  frames: [
    { id: 'fr_gold', icon: '🟡', name: 'Gold Frame', price: 300 },
    { id: 'fr_diamond', icon: '💠', name: 'Diamond Frame', price: 500 },
    { id: 'fr_fire', icon: '🔴', name: 'Fire Frame', price: 400 },
    { id: 'fr_ice', icon: '🔵', name: 'Ice Frame', price: 400 }
  ],
  themes: [
    { id: 'th_matrix', icon: '🟩', name: 'Matrix Theme', price: 500 },
    { id: 'th_ocean', icon: '🌊', name: 'Ocean Theme', price: 500 },
    { id: 'th_sunset', icon: '🌅', name: 'Sunset Theme', price: 500 },
    { id: 'th_space', icon: '🌌', name: 'Space Theme', price: 600 }
  ],
  badges_shop: [
    { id: 'bd_star', icon: '⭐', name: 'Star Badge', price: 200 },
    { id: 'bd_fire', icon: '🔥', name: 'Fire Badge', price: 250 },
    { id: 'bd_crown', icon: '👑', name: 'Crown Badge', price: 500 },
    { id: 'bd_lightning', icon: '⚡', name: 'Lightning Badge', price: 300 }
  ]
};

function switchShopTab(tab) {
  shopTab = tab;
  document.querySelectorAll('#screen-shop .tab-btn').forEach((b, i) => {
    const tabs = ['avatars', 'frames', 'themes', 'badges_shop'];
    b.classList.toggle('active', tabs[i] === tab);
  });
  renderShop();
}

function renderShop() {
  const xp = currentUser.xp || 0;
  document.getElementById('shop-balance').textContent = `${xp} XP`;
  const items = SHOP_ITEMS[shopTab] || [];
  const inv = currentUser.inventory || [];
  const equipped = currentUser.equippedAvatar || currentUser.equippedFrame || currentUser.equippedBadge;
  document.getElementById('shop-content').innerHTML = `<div class="shop-grid">${items.map(item => {
    const owned = inv.includes(item.id);
    const eq = (currentUser.equippedAvatar === item.id) || (currentUser.equippedFrame === item.id) || (currentUser.equippedBadge === item.id);
    return `<div class="shop-item ${owned ? 'owned' : ''} ${eq ? 'equipped' : ''}">
      <div class="shop-item-icon">${item.icon}</div>
      <div class="shop-item-name">${item.name}</div>
      <div class="shop-item-price">${owned ? '' : `${item.price} XP`}</div>
      <div style="margin-top:10px">
        ${eq ? `<span class="badge badge-white">${t('equipped')}</span>` :
          owned ? `<button class="btn btn-ghost btn-sm" onclick="equipShopItem('${item.id}','${shopTab}')">${t('equip')}</button>` :
          `<button class="btn btn-primary btn-sm" onclick="buyShopItem('${item.id}','${shopTab}')">${t('buy')} ${item.price} XP</button>`}
      </div>
    </div>`;
  }).join('')}</div>`;
}

function buyShopItem(id, tab) {
  const items = SHOP_ITEMS[tab] || [];
  const item = items.find(i => i.id === id);
  if (!item) return;
  if ((currentUser.xp || 0) < item.price) { showToast(t('not_enough_xp'), 'error'); return; }
  currentUser.xp -= item.price;
  currentUser.inventory = currentUser.inventory || [];
  currentUser.inventory.push(id);
  saveCurrentUser();
  showToast(t('purchased'), 'success');
  renderShop();
  updateHomeXP();
}

function equipShopItem(id, tab) {
  if (tab === 'avatars') {
    const item = SHOP_ITEMS.avatars.find(i => i.id === id);
    if (item) { currentUser.avatar = item.icon; currentUser.equippedAvatar = id; }
  } else if (tab === 'frames') {
    currentUser.equippedFrame = id;
  } else if (tab === 'badges_shop') {
    const item = SHOP_ITEMS.badges_shop.find(i => i.id === id);
    if (item) { currentUser.equippedBadge = item.icon; }
  }
  saveCurrentUser();
  showToast(t('equipped_msg'), 'success');
  renderShop();
  updateHomeXP();
}

// ============================================================
// ACHIEVEMENTS
// ============================================================
const ACHIEVEMENT_DEFS = [
  // Common
  { id: 'first_quiz', icon: '🎯', nameKey: 'First Steps', descKey: 'Complete your first quiz', rarity: 'common', check: u => (u.gamesPlayed || 0) >= 1 },
  { id: 'five_quizzes', icon: '5️⃣', nameKey: 'Five Done', descKey: 'Play 5 quizzes', rarity: 'common', check: u => (u.gamesPlayed || 0) >= 5 },
  { id: 'creator', icon: '✏️', nameKey: 'Quiz Creator', descKey: 'Create your first quiz', rarity: 'common', check: u => (u.createdQuizzes || 0) >= 1 },
  { id: 'streak3', icon: '🔥', nameKey: 'On Fire', descKey: 'Get a 3-answer streak', rarity: 'common', check: u => (u.bestStreak || 0) >= 3 },
  { id: 'earn100', icon: '💰', nameKey: 'Earner', descKey: 'Earn 100 XP', rarity: 'common', check: u => (u.xp || 0) >= 100 },
  { id: 'level5', icon: '⬆️', nameKey: 'Rising', descKey: 'Reach Level 5', rarity: 'common', check: u => getLevel(u.xp || 0) >= 5 },
  { id: 'win1', icon: '🏆', nameKey: 'Winner', descKey: 'Win your first quiz (70%+)', rarity: 'common', check: u => (u.wins || 0) >= 1 },
  { id: 'ten_quizzes', icon: '🔟', nameKey: 'Dedicated', descKey: 'Play 10 quizzes', rarity: 'common', check: u => (u.gamesPlayed || 0) >= 10 },
  // Rare
  { id: 'perfect1', icon: '⭐', nameKey: 'Perfectionist', descKey: 'Get 100% on any quiz', rarity: 'rare', check: (u, h) => (h || []).some(g => g.pct === 100) },
  { id: 'streak10', icon: '⚡', nameKey: 'Electric', descKey: 'Get a 10-answer streak', rarity: 'rare', check: u => (u.bestStreak || 0) >= 10 },
  { id: 'earn500', icon: '💎', nameKey: 'Rich', descKey: 'Earn 500 XP total', rarity: 'rare', check: u => (u.xp || 0) >= 500 },
  { id: 'level10', icon: '🚀', nameKey: 'Level 10', descKey: 'Reach Level 10', rarity: 'rare', check: u => getLevel(u.xp || 0) >= 10 },
  { id: 'win10', icon: '🏅', nameKey: '10 Wins', descKey: 'Win 10 quizzes', rarity: 'rare', check: u => (u.wins || 0) >= 10 },
  { id: 'create5', icon: '📚', nameKey: 'Author', descKey: 'Create 5 quizzes', rarity: 'rare', check: u => (u.createdQuizzes || 0) >= 5 },
  { id: 'accuracy90', icon: '🎯', nameKey: 'Sharpshooter', descKey: 'Maintain 90%+ accuracy (5+ games)', rarity: 'rare', check: u => (u.gamesPlayed || 0) >= 5 && (u.accuracy || 0) >= 90 },
  { id: 'silver_rank', icon: '🥈', nameKey: 'Silver', descKey: 'Reach Silver rank', rarity: 'rare', check: u => ['silver','gold','platinum','diamond','master'].includes(getRank(u)) },
  // Epic
  { id: 'perfect5', icon: '🌟', nameKey: 'Flawless x5', descKey: 'Get 100% on 5 quizzes', rarity: 'epic', check: (u, h) => (h || []).filter(g => g.pct === 100).length >= 5 },
  { id: 'streak20', icon: '🌊', nameKey: 'Unstoppable', descKey: 'Get a 20-answer streak', rarity: 'epic', check: u => (u.bestStreak || 0) >= 20 },
  { id: 'earn2000', icon: '💰', nameKey: 'Millionaire', descKey: 'Earn 2000 XP total', rarity: 'epic', check: u => (u.xp || 0) >= 2000 },
  { id: 'level20', icon: '👾', nameKey: 'Level 20', descKey: 'Reach Level 20', rarity: 'epic', check: u => getLevel(u.xp || 0) >= 20 },
  { id: 'win25', icon: '🥇', nameKey: '25 Wins', descKey: 'Win 25 quizzes', rarity: 'epic', check: u => (u.wins || 0) >= 25 },
  { id: 'gold_rank', icon: '🥇', nameKey: 'Gold Ranked', descKey: 'Reach Gold rank', rarity: 'epic', check: u => ['gold','platinum','diamond','master'].includes(getRank(u)) },
  { id: 'create10', icon: '🎓', nameKey: 'Educator', descKey: 'Create 10 quizzes', rarity: 'epic', check: u => (u.createdQuizzes || 0) >= 10 },
  { id: 'fifty_quizzes', icon: '🔱', nameKey: 'Veteran', descKey: 'Play 50 quizzes', rarity: 'epic', check: u => (u.gamesPlayed || 0) >= 50 },
  // Legendary
  { id: 'master_rank', icon: '👑', nameKey: 'Master', descKey: 'Reach Master rank', rarity: 'legendary', check: u => getRank(u) === 'master' },
  { id: 'earn10000', icon: '🌈', nameKey: 'XP God', descKey: 'Earn 10,000 XP', rarity: 'legendary', check: u => (u.xp || 0) >= 10000 },
  { id: 'perfect20', icon: '💫', nameKey: 'Absolute Perfection', descKey: 'Get 100% on 20 quizzes', rarity: 'legendary', check: (u, h) => (h || []).filter(g => g.pct === 100).length >= 20 },
  { id: 'win100', icon: '🏰', nameKey: 'Champion', descKey: 'Win 100 quizzes', rarity: 'legendary', check: u => (u.wins || 0) >= 100 },
  { id: 'level50', icon: '🌠', nameKey: 'Transcendent', descKey: 'Reach Level 50', rarity: 'legendary', check: u => getLevel(u.xp || 0) >= 50 },
  { id: 'streak50', icon: '🔮', nameKey: 'Oracle', descKey: 'Get a 50-answer streak', rarity: 'legendary', check: u => (u.bestStreak || 0) >= 50 },
  { id: 'create25', icon: '📖', nameKey: 'Grand Author', descKey: 'Create 25 quizzes', rarity: 'legendary', check: u => (u.createdQuizzes || 0) >= 25 }
];

function checkAchievements() {
  if (!currentUser) return;
  const history = getGameHistory();
  const unlocked = currentUser.achievements || [];
  ACHIEVEMENT_DEFS.forEach(def => {
    if (!unlocked.includes(def.id) && def.check(currentUser, history)) {
      unlocked.push(def.id);
      currentUser.achievements = unlocked;
      saveCurrentUser();
      showAchievementPopup(def);
      addXP(def.rarity === 'legendary' ? 500 : def.rarity === 'epic' ? 200 : def.rarity === 'rare' ? 100 : 50);
    }
  });
}

function showAchievementPopup(def) {
  document.getElementById('ach-popup-icon').textContent = def.icon;
  document.getElementById('ach-popup-name').textContent = def.nameKey;
  document.getElementById('ach-popup-desc').textContent = def.descKey;
  const el = document.getElementById('achievement-popup');
  el.classList.remove('hidden');
  playSound('achievement');
  setTimeout(() => el.classList.add('hidden'), 4000);
}

function switchAchTab(tab) {
  achTab = tab;
  document.querySelectorAll('#screen-achievements .tab-btn').forEach((b, i) => {
    const tabs = ['all', 'common', 'rare', 'epic', 'legendary'];
    b.classList.toggle('active', tabs[i] === tab);
  });
  renderAchievements();
}

function renderAchievements() {
  const unlocked = currentUser.achievements || [];
  let defs = ACHIEVEMENT_DEFS;
  if (achTab !== 'all') defs = defs.filter(d => d.rarity === achTab);
  document.getElementById('ach-count').textContent = `${unlocked.length} / ${ACHIEVEMENT_DEFS.length} unlocked`;
  document.getElementById('achievements-list').innerHTML = defs.map(def => {
    const isUnlocked = unlocked.includes(def.id);
    return `<div class="achievement-card ${isUnlocked ? 'unlocked' : 'locked'}">
      <div class="achievement-icon">${isUnlocked ? def.icon : '🔒'}</div>
      <div class="achievement-info">
        <div class="achievement-name">${def.nameKey}</div>
        <div class="achievement-desc">${def.descKey}</div>
        <div style="margin-top:6px"><span class="badge badge-${def.rarity}">${t(def.rarity)}</span></div>
      </div>
    </div>`;
  }).join('');
}

// ============================================================
// LEADERBOARD
// ============================================================
const MOCK_PLAYERS = [
  { username: 'QuizMaster99', avatar: '🧙', xp: 9800, wins: 145, gamesPlayed: 200, accuracy: 92 },
  { username: 'BrainStorm', avatar: '🧠', xp: 8500, wins: 122, gamesPlayed: 180, accuracy: 88 },
  { username: 'LightningLearner', avatar: '⚡', xp: 7200, wins: 98, gamesPlayed: 155, accuracy: 85 },
  { username: 'Nebula', avatar: '🌌', xp: 6100, wins: 76, gamesPlayed: 120, accuracy: 82 },
  { username: 'AcePlayer', avatar: '🎯', xp: 5400, wins: 65, gamesPlayed: 100, accuracy: 79 },
  { username: 'SwiftThinker', avatar: '🦊', xp: 4800, wins: 55, gamesPlayed: 90, accuracy: 77 },
  { username: 'RocketScience', avatar: '🚀', xp: 4200, wins: 47, gamesPlayed: 80, accuracy: 75 },
  { username: 'Wiseguy', avatar: '🤓', xp: 3600, wins: 40, gamesPlayed: 70, accuracy: 73 },
  { username: 'CoolCoder', avatar: '💻', xp: 3100, wins: 33, gamesPlayed: 60, accuracy: 71 },
  { username: 'QuizNinja', avatar: '🥷', xp: 2700, wins: 27, gamesPlayed: 50, accuracy: 68 }
];

function switchLbTab(tab) {
  lbTab = tab;
  document.querySelectorAll('#screen-leaderboard .tab-btn').forEach((b, i) => {
    const tabs = ['global', 'weekly', 'monthly', 'friends'];
    b.classList.toggle('active', tabs[i] === tab);
  });
  renderLeaderboard();
}

function renderLeaderboard() {
  const users = [...MOCK_PLAYERS];
  if (currentUser) {
    users.push({ username: currentUser.username + ' (You)', avatar: currentUser.avatar || '👤', xp: currentUser.xp || 0, wins: currentUser.wins || 0, gamesPlayed: currentUser.gamesPlayed || 0, accuracy: Math.round(currentUser.accuracy || 0), isYou: true });
  }
  let sorted = [...users].sort((a, b) => b.xp - a.xp);
  if (lbTab === 'weekly') sorted = sorted.map(u => ({ ...u, xp: Math.round(u.xp * (0.05 + Math.random() * 0.1)) })).sort((a, b) => b.xp - a.xp);
  if (lbTab === 'monthly') sorted = sorted.map(u => ({ ...u, xp: Math.round(u.xp * (0.2 + Math.random() * 0.3)) })).sort((a, b) => b.xp - a.xp);
  if (lbTab === 'friends') {
    sorted = sorted.filter(u => u.isYou || Math.random() > 0.5).slice(0, 6);
  }
  const rankClass = i => i === 0 ? 'gold' : i === 1 ? 'silver' : i === 2 ? 'bronze' : '';
  const rankText = i => i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : `#${i + 1}`;
  document.getElementById('leaderboard-list').innerHTML = sorted.map((u, i) => {
    const rank = getRank({ xp: u.xp, wins: u.wins, gamesPlayed: u.gamesPlayed });
    return `<div class="lb-row ${u.isYou ? 'card' : ''}" style="${u.isYou ? 'border-color:var(--border-hover)' : ''}">
      <div class="lb-rank ${rankClass(i)}">${rankText(i)}</div>
      <div class="lb-avatar">${u.avatar}</div>
      <div class="lb-info">
        <div class="lb-name">${escHtml(u.username)}</div>
        <div class="lb-sub">${getRankIcon(rank)} ${getRankLabel(rank)} • ${u.wins} wins</div>
      </div>
      <div class="lb-score">${u.xp.toLocaleString()} XP</div>
    </div>`;
  }).join('');
}

// ============================================================
// ANALYTICS
// ============================================================
function renderAnalytics() {
  const history = getGameHistory();
  const total = history.length;
  const totalCorrect = history.reduce((s, h) => s + (h.correct || 0), 0);
  const totalQ = history.reduce((s, h) => s + (h.total || 0), 0);
  const avgAcc = total > 0 ? Math.round(history.reduce((s, h) => s + h.pct, 0) / total) : 0;
  const totalXP = currentUser.xp || 0;
  document.getElementById('analytics-stats').innerHTML = `
    <div class="stat-card"><div class="stat-value">${total}</div><div class="stat-label">${t('games_played')}</div></div>
    <div class="stat-card"><div class="stat-value">${currentUser.wins || 0}</div><div class="stat-label">${t('wins')}</div></div>
    <div class="stat-card"><div class="stat-value">${avgAcc}%</div><div class="stat-label">${t('accuracy')}</div></div>
    <div class="stat-card"><div class="stat-value">${totalXP}</div><div class="stat-label">Total XP</div></div>`;
  drawXPChart(history);
  drawAccChart(history);
  renderCategoryBars(history);
}

function drawXPChart(history) {
  const canvas = document.getElementById('chart-xp');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const data = history.slice(-10).reverse().map(h => h.xpEarned || 0);
  if (!data.length) { ctx.clearRect(0, 0, canvas.width, canvas.height); return; }
  drawLineChart(ctx, canvas, data, 'rgba(255,255,255,0.8)');
}

function drawAccChart(history) {
  const canvas = document.getElementById('chart-accuracy');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const data = history.slice(-10).reverse().map(h => h.pct || 0);
  if (!data.length) { ctx.clearRect(0, 0, canvas.width, canvas.height); return; }
  drawLineChart(ctx, canvas, data, 'rgba(111,207,151,0.8)');
}

function drawLineChart(ctx, canvas, data, color) {
  const W = canvas.offsetWidth || 300;
  const H = 160;
  canvas.width = W; canvas.height = H;
  ctx.clearRect(0, 0, W, H);
  const max = Math.max(...data, 1);
  const step = W / (data.length - 1 || 1);
  const pad = 20;
  // Grid
  ctx.strokeStyle = 'rgba(255,255,255,0.06)';
  for (let i = 0; i <= 4; i++) {
    const y = pad + ((H - pad * 2) / 4) * i;
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
  }
  // Line
  ctx.beginPath();
  data.forEach((v, i) => {
    const x = i * step;
    const y = H - pad - ((v / max) * (H - pad * 2));
    if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  });
  ctx.strokeStyle = color; ctx.lineWidth = 2.5; ctx.stroke();
  // Dots
  data.forEach((v, i) => {
    const x = i * step;
    const y = H - pad - ((v / max) * (H - pad * 2));
    ctx.beginPath(); ctx.arc(x, y, 4, 0, Math.PI * 2);
    ctx.fillStyle = color; ctx.fill();
  });
}

function renderCategoryBars(history) {
  const cats = {};
  history.forEach(h => {
    if (!h.category) return;
    if (!cats[h.category]) cats[h.category] = { total: 0, correct: 0, games: 0 };
    cats[h.category].games++;
    cats[h.category].total += h.total || 0;
    cats[h.category].correct += h.correct || 0;
  });
  const el = document.getElementById('category-bars');
  if (!Object.keys(cats).length) { el.innerHTML = '<div style="color:var(--text-muted);font-size:13px">No data yet</div>'; return; }
  el.innerHTML = Object.entries(cats).map(([cat, d]) => {
    const pct = d.total > 0 ? Math.round((d.correct / d.total) * 100) : 0;
    return `<div style="margin-bottom:12px">
      <div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:4px">
        <span>${escHtml(cat)}</span><span>${pct}%</span>
      </div>
      <div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div>
    </div>`;
  }).join('');
  const catArr = Object.entries(cats).map(([c, d]) => ({ cat: c, pct: d.total > 0 ? Math.round((d.correct / d.total) * 100) : 0 }));
  catArr.sort((a, b) => b.pct - a.pct);
  document.getElementById('strong-topics').innerHTML = catArr.slice(0, 3).map(c => `<div style="padding:8px 0;border-bottom:1px solid var(--border);font-size:13px">📁 ${escHtml(c.cat)} <span style="float:right;font-weight:700">${c.pct}%</span></div>`).join('') || '<div style="color:var(--text-muted);font-size:13px">N/A</div>';
  document.getElementById('weak-topics').innerHTML = [...catArr].reverse().slice(0, 3).map(c => `<div style="padding:8px 0;border-bottom:1px solid var(--border);font-size:13px">📁 ${escHtml(c.cat)} <span style="float:right;font-weight:700;color:#ff6b6b">${c.pct}%</span></div>`).join('') || '<div style="color:var(--text-muted);font-size:13px">N/A</div>';
}

// ============================================================
// PROFILE
// ============================================================
const AVATARS_DEFAULT = ['👤', '🧑', '👩', '👨', '🧙', '🤖', '🥷', '👽', '🐱', '🦊', '🐲', '👻'];

function switchProfileTab(tab) {
  document.querySelectorAll('#screen-profile .tab-content').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('#screen-profile .tab-btn').forEach((b, i) => {
    const tabs = ['overview', 'edit', 'security'];
    b.classList.toggle('active', tabs[i] === tab);
  });
  document.getElementById(`profile-${tab}`)?.classList.add('active');
  if (tab === 'edit') {
    document.getElementById('edit-username').value = currentUser.username || '';
    document.getElementById('edit-email').value = currentUser.email || '';
    const picker = document.getElementById('avatar-picker');
    const allAv = [...AVATARS_DEFAULT, ...SHOP_ITEMS.avatars.filter(i => (currentUser.inventory || []).includes(i.id)).map(i => i.icon)];
    picker.innerHTML = allAv.map(av => `<button onclick="currentUser.avatar='${av}';document.querySelectorAll('#avatar-picker button').forEach(b=>b.style.borderColor='');this.style.borderColor='var(--text-primary)'" style="font-size:24px;background:var(--glass);border:2px solid ${currentUser.avatar === av ? 'var(--text-primary)' : 'transparent'};border-radius:10px;padding:6px;cursor:pointer;transition:all 0.2s">${av}</button>`).join('');
  }
}

function renderProfile() {
  if (!currentUser) return;
  const xp = currentUser.xp || 0;
  const lvl = getLevel(xp);
  const rank = getRank(currentUser);
  const cur = xp - xpForLevel(lvl);
  const need = xpForLevel(lvl + 1) - xpForLevel(lvl);
  const pct = Math.min(100, (cur / need) * 100);
  document.getElementById('profile-header').innerHTML = `
    <div class="profile-avatar-big">
      ${currentUser.avatar || '👤'}
      <div class="profile-avatar-ring ring-${rank}"></div>
    </div>
    <div class="profile-info">
      <div class="profile-username">${escHtml(currentUser.username)}</div>
      <div class="profile-email">${escHtml(currentUser.email)}</div>
      <div class="profile-badges">
        <span class="badge badge-${rank}">${getRankIcon(rank)} ${getRankLabel(rank)}</span>
        <span class="badge badge-white">LV ${lvl}</span>
        ${currentUser.equippedBadge ? `<span class="badge badge-white">${currentUser.equippedBadge}</span>` : ''}
      </div>
      <div class="xp-bar-wrapper mt-8" style="margin-top:8px">
        <div class="xp-bar-track"><div class="xp-bar-fill" style="width:${pct}%"></div></div>
        <span style="font-size:11px;color:var(--text-muted)">${cur}/${need} XP</span>
      </div>
    </div>
    <div style="display:flex;flex-direction:column;gap:8px;text-align:center">
      <button class="btn btn-ghost btn-sm" onclick="openIOModal()">📤 Data</button>
    </div>`;
  document.getElementById('profile-overview').innerHTML = `
    <div class="stat-grid" style="margin-bottom:20px">
      <div class="stat-card"><div class="stat-value">${currentUser.gamesPlayed || 0}</div><div class="stat-label">${t('games_played')}</div></div>
      <div class="stat-card"><div class="stat-value">${currentUser.wins || 0}</div><div class="stat-label">${t('wins')}</div></div>
      <div class="stat-card"><div class="stat-value">${Math.round(currentUser.accuracy || 0)}%</div><div class="stat-label">${t('accuracy')}</div></div>
      <div class="stat-card"><div class="stat-value">${currentUser.bestStreak || 0}</div><div class="stat-label">${t('best_streak')}</div></div>
      <div class="stat-card"><div class="stat-value">${currentUser.createdQuizzes || 0}</div><div class="stat-label">${t('created_quizzes')}</div></div>
      <div class="stat-card"><div class="stat-value">${xp}</div><div class="stat-label">${t('xp')}</div></div>
    </div>
    <div style="font-size:14px;font-weight:700;margin-bottom:12px">Recent Games</div>
    ${getGameHistory().slice(0, 5).map(h => `
      <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 14px;background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius-sm);margin-bottom:6px">
        <div><div style="font-size:13px;font-weight:600">${escHtml(h.quizTitle)}</div><div style="font-size:11px;color:var(--text-secondary)">${new Date(h.date).toLocaleDateString()}</div></div>
        <div style="text-align:right"><div style="font-size:14px;font-weight:700">${h.pct}%</div><div style="font-size:11px;color:var(--text-secondary)">+${h.xpEarned} XP</div></div>
      </div>`).join('') || '<div style="color:var(--text-muted);font-size:13px">No games yet</div>'}`;
}

// ============================================================
// MULTIPLAYER (Architecture)
// ============================================================
const RoomManager = {
  rooms: {},
  create(quizId, hostId) {
    const code = Math.random().toString(36).substring(2, 8).toUpperCase();
    this.rooms[code] = { code, quizId, host: hostId, players: [{ id: hostId, name: currentUser.username, avatar: currentUser.avatar || '👤', ready: false }], status: 'waiting', created: Date.now() };
    lsSet('eq_mp_rooms', this.rooms);
    return code;
  },
  join(code, userId) {
    this.rooms = ls('eq_mp_rooms', {});
    const room = this.rooms[code];
    if (!room) return null;
    const exists = room.players.find(p => p.id === userId);
    if (!exists) room.players.push({ id: userId, name: currentUser.username, avatar: currentUser.avatar || '👤', ready: false });
    lsSet('eq_mp_rooms', this.rooms);
    return room;
  },
  get(code) { this.rooms = ls('eq_mp_rooms', {}); return this.rooms[code] || null; },
  leave(code, userId) {
    this.rooms = ls('eq_mp_rooms', {});
    if (this.rooms[code]) { this.rooms[code].players = this.rooms[code].players.filter(p => p.id !== userId); lsSet('eq_mp_rooms', this.rooms); }
  },
  addMock(code) {
    this.rooms = ls('eq_mp_rooms', {});
    if (!this.rooms[code]) return;
    const mocks = [{ id: 'bot1', name: 'QuizBot', avatar: '🤖', ready: true }, { id: 'bot2', name: 'AcePlayer', avatar: '🎯', ready: true }];
    mocks.forEach(m => { if (!this.rooms[code].players.find(p => p.id === m.id)) this.rooms[code].players.push(m); });
    lsSet('eq_mp_rooms', this.rooms);
  }
};

function createRoom() {
  const quizzes = getQuizzes();
  const quizId = quizzes[0]?.id || 'none';
  const code = RoomManager.create(quizId, currentUser.id);
  mpRoom = { code };
  document.getElementById('mp-main-grid').classList.add('hidden');
  document.getElementById('mp-lobby').classList.remove('hidden');
  document.getElementById('room-code-display').textContent = code;
  showToast(t('room_created'), 'success');
  setTimeout(() => { RoomManager.addMock(code); renderLobbyPlayers(code); }, 1500);
  renderLobbyPlayers(code);
  mpInterval = setInterval(() => renderLobbyPlayers(code), 2000);
}

function joinRoom() {
  const code = document.getElementById('join-code-input').value.trim().toUpperCase();
  if (!code || code.length < 4) { showToast('Enter a valid room code.', 'error'); return; }
  const room = RoomManager.join(code, currentUser.id);
  if (!room) { showToast(t('room_not_found'), 'error'); return; }
  mpRoom = { code };
  document.getElementById('mp-main-grid').classList.add('hidden');
  document.getElementById('mp-lobby').classList.remove('hidden');
  document.getElementById('room-code-display').textContent = code;
  showToast(t('room_joined'), 'success');
  renderLobbyPlayers(code);
  mpInterval = setInterval(() => renderLobbyPlayers(code), 2000);
}

function renderLobbyPlayers(code) {
  const room = RoomManager.get(code);
  if (!room) return;
  document.getElementById('players-list').innerHTML = `
    <div style="font-size:13px;font-weight:700;margin-bottom:10px">${t('players')} (${room.players.length})</div>
    ${room.players.map(p => `<div class="player-slot"><span style="font-size:20px">${p.avatar}</span><span style="font-size:13px;font-weight:600">${escHtml(p.name)}</span>${p.ready ? '<span class="badge badge-white" style="margin-left:auto">Ready</span>' : ''}</div>`).join('')}
    <div class="player-slot empty"><span>⬜</span><span style="font-size:13px">${t('waiting')}</span></div>`;
}

function leaveRoom() {
  if (mpRoom) { RoomManager.leave(mpRoom.code, currentUser.id); mpRoom = null; }
  clearInterval(mpInterval);
  document.getElementById('mp-main-grid').classList.remove('hidden');
  document.getElementById('mp-lobby').classList.add('hidden');
}

function copyRoomCode() {
  if (!mpRoom) return;
  navigator.clipboard?.writeText(mpRoom.code).catch(() => {});
  showToast(t('code_copied'), 'success');
}

function startMultiplayerGame() {
  clearInterval(mpInterval);
  showToast('Starting multiplayer game! (Simulated)', 'info');
  const quizzes = getQuizzes();
  if (quizzes.length) { activeBoosters = []; startQuiz(quizzes[0].id); }
  else showToast(t('no_quizzes'), 'warning');
}

function renderMultiplayer() { /* static, handled in HTML */ }

// ============================================================
// AI QUIZ GENERATOR
// ============================================================
const QuizGenerator = {
  templates: {
    easy: [
      { text: 'What is the capital of France?', options: ['London', 'Berlin', 'Paris', 'Madrid'], correct: 2, explanation: 'Paris has been the capital of France since the 10th century.' },
      { text: 'How many continents are there on Earth?', options: ['5', '6', '7', '8'], correct: 2, explanation: 'Earth has 7 continents: Africa, Antarctica, Asia, Australia, Europe, North America, South America.' },
      { text: 'What is 2 + 2?', options: ['3', '4', '5', '6'], correct: 1, explanation: 'Basic arithmetic: 2 + 2 = 4.' },
      { text: 'Which planet is closest to the Sun?', options: ['Venus', 'Earth', 'Mars', 'Mercury'], correct: 3, explanation: 'Mercury is the closest planet to the Sun in our solar system.' },
      { text: 'What color is the sky on a clear day?', options: ['Green', 'Blue', 'Red', 'Yellow'], correct: 1, explanation: 'The sky appears blue due to Rayleigh scattering of sunlight.' }
    ],
    medium: [
      { text: 'What year did World War II end?', options: ['1943', '1944', '1945', '1946'], correct: 2, explanation: 'World War II ended in 1945 with the surrender of Germany in May and Japan in September.' },
      { text: 'Which element has the symbol "Au"?', options: ['Silver', 'Copper', 'Aluminum', 'Gold'], correct: 3, explanation: 'Au comes from the Latin word "aurum" meaning gold.' },
      { text: 'How many bones are in the adult human body?', options: ['196', '206', '216', '226'], correct: 1, explanation: 'An adult human body has 206 bones.' },
      { text: 'What is the largest ocean on Earth?', options: ['Atlantic', 'Indian', 'Arctic', 'Pacific'], correct: 3, explanation: 'The Pacific Ocean is the largest, covering more than 30% of Earth\'s surface.' },
      { text: 'Who wrote Romeo and Juliet?', options: ['Charles Dickens', 'William Shakespeare', 'Jane Austen', 'Mark Twain'], correct: 1, explanation: 'Romeo and Juliet was written by William Shakespeare around 1594-1596.' }
    ],
    hard: [
      { text: 'What is the Planck constant?', options: ['6.626×10⁻³⁴ J·s', '3.14×10⁻²⁸ J·s', '9.109×10⁻³¹ kg', '1.6×10⁻¹⁹ C'], correct: 0, explanation: 'The Planck constant h ≈ 6.626×10⁻³⁴ J·s, fundamental in quantum mechanics.' },
      { text: 'Which philosopher wrote "Critique of Pure Reason"?', options: ['Hegel', 'Nietzsche', 'Kant', 'Schopenhauer'], correct: 2, explanation: 'Immanuel Kant wrote "Critique of Pure Reason" (Kritik der reinen Vernunft) in 1781.' },
      { text: 'What is the Fibonacci sequence formula?', options: ['F(n) = F(n-1) × F(n-2)', 'F(n) = F(n-1) + F(n-2)', 'F(n) = F(n-1) - F(n-2)', 'F(n) = 2F(n-1)'], correct: 1, explanation: 'Each Fibonacci number is the sum of the two preceding ones: F(n) = F(n-1) + F(n-2).' },
      { text: 'What is the half-life of Carbon-14?', options: ['1,430 years', '5,730 years', '12,460 years', '14,300 years'], correct: 1, explanation: 'Carbon-14 has a half-life of approximately 5,730 years, used in radiocarbon dating.' },
      { text: 'Which country invented the printing press?', options: ['China', 'Germany', 'Italy', 'France'], correct: 1, explanation: 'Johannes Gutenberg invented the movable-type printing press in Germany around 1440.' }
    ]
  },
  fromTopic(topic, difficulty, count) {
    const base = this.templates[difficulty] || this.templates.easy;
    const questions = [];
    for (let i = 0; i < count; i++) {
      const template = base[i % base.length];
      questions.push({
        id: Date.now().toString() + i,
        type: 'multiple',
        text: i < base.length ? template.text : `[${topic}] Question ${i + 1}: ${template.text}`,
        options: [...template.options],
        correct: template.correct,
        explanation: template.explanation
      });
    }
    return questions;
  },
  fromText(text, count) {
    const sentences = text.split(/[.!?]+/).map(s => s.trim()).filter(s => s.length > 20);
    const questions = [];
    for (let i = 0; i < Math.min(count, sentences.length); i++) {
      const sent = sentences[i];
      const words = sent.split(' ').filter(w => w.length > 3);
      if (!words.length) continue;
      const blankWord = words[Math.floor(words.length / 2)];
      const questionText = sent.replace(blankWord, '___');
      questions.push({
        id: Date.now().toString() + i,
        type: 'fillblank',
        text: questionText,
        correctText: blankWord.replace(/[^a-zA-Z0-9\s]/g, '').toLowerCase(),
        explanation: `Original: "${sent}"`
      });
    }
    if (!questions.length) {
      questions.push({ id: Date.now().toString(), type: 'truefalse', text: 'The provided text contains information.', correct: true, explanation: 'Based on the provided text.' });
    }
    return questions;
  }
};

function setDifficulty(d) {
  currentDifficulty = d;
  document.querySelectorAll('.difficulty-btn').forEach(b => b.classList.toggle('active', b.getAttribute('data-diff') === d));
}

function generateFromTopic() {
  const topic = document.getElementById('ai-topic').value.trim();
  const count = parseInt(document.getElementById('ai-count').value) || 10;
  if (!topic) { showToast(t('fill_all_fields'), 'error'); return; }
  const btn = event.target;
  btn.textContent = t('generating'); btn.disabled = true;
  setTimeout(() => {
    const questions = QuizGenerator.fromTopic(topic, currentDifficulty, count);
    generatedQuizData = { title: `${topic} Quiz`, description: `AI-generated quiz about ${topic}`, category: topic, difficulty: currentDifficulty, questions };
    renderAIPreview(generatedQuizData);
    btn.textContent = t('generate_quiz'); btn.disabled = false;
    showToast(t('generated_ok'), 'success');
  }, 1000);
}

function generateFromText() {
  const text = document.getElementById('ai-text-input').value.trim();
  const count = parseInt(document.getElementById('ai-text-count').value) || 5;
  if (!text) { showToast(t('fill_all_fields'), 'error'); return; }
  const btn = event.target;
  btn.textContent = t('generating'); btn.disabled = true;
  setTimeout(() => {
    const questions = QuizGenerator.fromText(text, count);
    generatedQuizData = { title: 'Text-Generated Quiz', description: 'Generated from your text', category: 'Custom', questions };
    renderAIPreview(generatedQuizData);
    btn.textContent = t('generate_quiz'); btn.disabled = false;
    showToast(t('generated_ok'), 'success');
  }, 800);
}

function renderAIPreview(data) {
  const el = document.getElementById('ai-preview');
  el.classList.remove('hidden');
  document.getElementById('ai-preview-content').innerHTML = `
    <div class="card mb-16" style="margin-bottom:16px">
      <div style="font-size:16px;font-weight:700">${escHtml(data.title)}</div>
      <div style="font-size:13px;color:var(--text-secondary);margin-top:4px">${data.questions.length} questions • ${escHtml(data.category)}</div>
    </div>
    ${data.questions.map((q, i) => `<div style="padding:12px 16px;background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius);margin-bottom:8px">
      <div style="font-size:13px;font-weight:600;margin-bottom:6px">Q${i + 1}: ${escHtml(q.text)}</div>
      ${q.type === 'multiple' ? `<div style="font-size:12px;color:var(--text-secondary)">${(q.options || []).map((o, oi) => `<span style="${oi === q.correct ? 'color:#6fcf97;font-weight:700' : ''}">${['A','B','C','D'][oi]}. ${escHtml(o)}</span>`).join(' | ')}</div>` : ''}
      ${q.type === 'fillblank' ? `<div style="font-size:12px;color:var(--text-secondary)">Answer: <strong style="color:#6fcf97">${escHtml(q.correctText || '')}</strong></div>` : ''}
      ${q.type === 'truefalse' ? `<div style="font-size:12px;color:var(--text-secondary)">Answer: <strong style="color:#6fcf97">${q.correct ? t('true_text') : t('false_text')}</strong></div>` : ''}
    </div>`).join('')}`;
  el.scrollIntoView({ behavior: 'smooth' });
}

function clearAIPreview() {
  generatedQuizData = null;
  document.getElementById('ai-preview').classList.add('hidden');
  document.getElementById('ai-preview-content').innerHTML = '';
}

function saveGeneratedQuiz() {
  if (!generatedQuizData) return;
  const quiz = {
    id: Date.now().toString(),
    ...generatedQuizData,
    timePerQuestion: 30,
    createdAt: new Date().toISOString(),
    createdBy: currentUser.id
  };
  const quizzes = getQuizzes();
  quizzes.push(quiz);
  setQuizzes(quizzes);
  currentUser.createdQuizzes = (currentUser.createdQuizzes || 0) + 1;
  saveCurrentUser();
  clearAIPreview();
  showToast(t('quiz_saved'), 'success');
  navigate('quizzes');
}

// ============================================================
// EXPORT / IMPORT
// ============================================================
function openIOModal() { document.getElementById('io-modal').classList.remove('hidden'); }
function closeIOModal() { document.getElementById('io-modal').classList.add('hidden'); }

function exportData() {
  const data = {
    version: 2,
    user: currentUser,
    quizzes: getQuizzes(),
    history: getGameHistory(),
    mistakes: getMistakes(),
    exportDate: new Date().toISOString()
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a'); a.href = url; a.download = `eduquiz_backup_${Date.now()}.json`; a.click();
  URL.revokeObjectURL(url);
  showToast(t('exported'), 'success');
}

function importData(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    try {
      const data = JSON.parse(e.target.result);
      if (data.quizzes) setQuizzes(data.quizzes);
      if (data.user && data.user.id === currentUser.id) {
        currentUser = { ...currentUser, ...data.user };
        saveCurrentUser();
      }
      if (data.history) lsSet(`eq_history_${currentUser.id}`, data.history);
      if (data.mistakes) lsSet(`eq_mistakes_${currentUser.id}`, data.mistakes);
      closeIOModal();
      showToast(t('imported'), 'success');
      renderUI();
    } catch { showToast(t('import_error'), 'error'); }
  };
  reader.readAsText(file);
  event.target.value = '';
}

// ============================================================
// AUTH TABS
// ============================================================
function switchAuthTab(tab) {
  document.querySelectorAll('.auth-tabs .tab-btn').forEach((b, i) => b.classList.toggle('active', ['login','register'][i] === tab));
  document.getElementById('auth-login').classList.toggle('active', tab === 'login');
  document.getElementById('auth-register').classList.toggle('active', tab === 'register');
}

// ============================================================
// RENDER UI (master re-render)
// ============================================================
function renderUI() {
  applyTranslations();
  if (!currentUser) return;
  updateHomeXP();
  if (currentScreen) renderScreenContent(currentScreen);
}

// ============================================================
// UTILITIES
// ============================================================
function escHtml(str) {
  if (str === null || str === undefined) return '';
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}
function escAttr(str) { return escHtml(str); }

// ============================================================
// INIT
// ============================================================
function initApp() {
  document.getElementById('auth-screen').style.display = 'none';
  document.getElementById('main-app').classList.remove('hidden');
  navigate('home');
  applyTranslations();
  updateHomeXP();
  checkAchievements();
  // Seed demo quizzes if none exist
  if (!getQuizzes().length) {
    setQuizzes([
      {
        id: 'demo1', title: 'Science Basics', description: 'Test your science knowledge!',
        category: 'Science', timePerQuestion: 30,
        questions: [
          { id: '1', type: 'multiple', text: 'What is H₂O?', options: ['Oxygen', 'Hydrogen', 'Water', 'Salt'], correct: 2, explanation: 'H₂O is the chemical formula for water.' },
          { id: '2', type: 'truefalse', text: 'The Earth orbits the Sun.', correct: true, explanation: 'Earth revolves around the Sun once every ~365.25 days.' },
          { id: '3', type: 'multiple', text: 'What gas do plants absorb?', options: ['Oxygen', 'Nitrogen', 'CO₂', 'Helium'], correct: 2, explanation: 'Plants absorb carbon dioxide (CO₂) during photosynthesis.' },
          { id: '4', type: 'fillblank', text: 'The speed of light is approximately ___ km/s.', correctText: '300000', explanation: 'Light travels approximately 299,792 km/s in a vacuum.' },
          { id: '5', type: 'multiple', text: 'How many planets are in our solar system?', options: ['7', '8', '9', '10'], correct: 1, explanation: 'Our solar system has 8 planets (Pluto was reclassified in 2006).' }
        ],
        createdAt: new Date().toISOString(), createdBy: currentUser.id
      },
      {
        id: 'demo2', title: 'World Geography', description: 'Countries and capitals!',
        category: 'Geography', timePerQuestion: 25,
        questions: [
          { id: '6', type: 'multiple', text: 'What is the capital of Japan?', options: ['Seoul', 'Beijing', 'Tokyo', 'Bangkok'], correct: 2, explanation: 'Tokyo is the capital and largest city of Japan.' },
          { id: '7', type: 'multiple', text: 'Which is the largest country by area?', options: ['USA', 'China', 'Canada', 'Russia'], correct: 3, explanation: 'Russia is the largest country, covering ~17.1 million km².' },
          { id: '8', type: 'truefalse', text: 'Australia is both a country and a continent.', correct: true, explanation: 'Australia is unique in being both its own continent and a country.' },
          { id: '9', type: 'multiple', text: 'Which river is the longest in the world?', options: ['Amazon', 'Nile', 'Yangtze', 'Mississippi'], correct: 1, explanation: 'The Nile is generally considered the world\'s longest river at ~6,650 km.' },
          { id: '10', type: 'multiple', text: 'How many countries are in Africa?', options: ['44', '54', '64', '74'], correct: 1, explanation: 'Africa has 54 recognized countries.' }
        ],
        createdAt: new Date().toISOString(), createdBy: currentUser.id
      }
    ]);
  }
}

function main() {
  // Load settings
  currentLang = ls('eq_lang', 'en');
  currentTheme = ls('eq_theme', 'dark');
  document.documentElement.setAttribute('data-theme', currentTheme);
  document.getElementById('theme-toggle-btn') && (document.getElementById('theme-toggle-btn').textContent = currentTheme === 'dark' ? '🌙' : '☀️');
  initCanvas();
  applyTranslations();
  // Check auto-login
  if (checkAutoLogin()) {
    initApp();
  } else {
    document.getElementById('auth-screen').style.display = 'flex';
    document.getElementById('main-app').classList.add('hidden');
  }
  // Keyboard shortcuts
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-overlay:not(.hidden)').forEach(m => m.classList.add('hidden'));
      document.getElementById('level-up-overlay').classList.add('hidden');
    }
  });
}

// ============================================================
// START
// ============================================================
document.addEventListener('DOMContentLoaded', main);
