// red phone
// данные на вход для создания анимации
//- кадровое делопроизводство
const faqDialog1 = [
  {
    'from': 'app',
    'text': 'Привет, Матвей! Я твой виртуальный ассистент. Кофе со мной не выпить — это, безусловно, минус, зато я знаю ответы на твои вопросы. Если тебя интересует что-то о жизни сотрудника в компании: отпусках, обучении, больничных, вакансиях, мероприятиях и других HR вопросах, а также о работе офиса — смело задавай их мне. Я отвечу! А если не смогу дать информацию сразу, то запишу твой вопрос, всё разузнаю и подключу коллег для решения. Дерзай!',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '12 марта 2021 12:41',
    'delay': 1000
  },
  {
    'from': 'user',
    'text': 'Я женился! Будут ли какие-то выплаты?',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '12 марта 2021 12:41', 
    'delay': 3300
  },
  {
    'from': 'app',
    'text': 'Специальных выплат при регистрации брака не предусмотрено. По согласованию с руководителем и при наличии неиспользованных дней ежегодного отпуска, ты можешь оформить оплачиваемый отпуск. Для этого зайди в свой личный кабинет Home.my.com с компьютера (раздел Отпуска – Заявка на отпуск) или через мобильный интранет (Меню – Отпуска) и оформи заявку на нужные даты. Обрати внимание, что заявку на отпуск можно подать не позднее чем за 7 дней до его начала, чтобы мы успели произвести все необходимые процедуры и выплатить отпускные. Обрати внимание, что заявку на отпуск можно подать не позднее чем за 7 дней до его начала, чтобы мы успели произвести все необходимые процедуры и выплатить отпускные. Также по законодательству тебе положено предоставление отпуска без сохранения заработной платы до 5 дней. Его можно оформить без ограничений по сроку подачи заявки.',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '12 марта 2021 12:41', 
    'delay': 5000
  },
  {
    'from': 'app',
    'text': 'Если что, я тут. Обращайся!',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '12 марта 2021 12:41', 
    'delay': 3300
  },
  {
    'from': 'user',
    'text': 'Как оформить отпуск?',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '12 марта 2021 12:42', 
    'delay': 3300
  },
  {
    'from': 'app',
    'text': 'Расскажу все самое главное про оформление отпуска :)<br>Чтобы пойти в отпуск, тебе необходимо оформить заявку. Для этого зайди в свой личный кабинет Home.my.com с компьютера (раздел Отпуска – Заявка на отпуск) или через мобильный интранет (Меню – Отпуска) и оформи заявку на нужные даты. <br>Обрати внимание, что если ты хочешь взять оплачиваемый отпуск (при наличии нужного количества неиспользованных дней), заявку можно подать не позднее чем за 7 дней до его начала, чтобы мы успели произвести все необходимые процедуры и выплатить отпускные за 3 дня до его начала. <br>Если у тебя на текущий момент не хватает доступных дней оплачиваемого отпуска или его нужно срочно оформить (до начала остается менее 7 дней), ты можешь оформить отпуск без сохранения заработной платы там же в личном кабинете или через мобильный интранет. <br>После согласования заявки руководителем тебе придет уведомление на почту. <br><br>Во время удаленной работы отпуска оформляют в отделе кадров без твоего присутствия (по онлайн заявкам). <br>После возвращения в офис нужно будет зайти в отдел кадров, расписаться в заявлении и приказе. <br>Если ты работаешь в офисе, то зайди в удобное время в отдел кадров для подписания документов. <br><br>Если остались вопросы, то тебе поможет Виктория Галицына, или ты можешь написать на почту отдела кадров kadry@corp.mail.ru.',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '12 марта 2021 12:42', 
    'delay': 7000
  },
  {
    'from': 'app',
    'text': 'Если что, я тут. Обращайся!',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '12 марта 2021 12:42', 
    'delay': 3300
  }
]

const faqRedPhoneArgs1 = {
  idElement: 'faqRPtriggerElement1',
  idWebAnimToCreateTransformer: 'faqRedWebTriggerElement1',
  type: 0,
  dateChatingInHeader: '12 марта 2021',
  headingChat: 'bot',
  dateTime: '12 марта 2021 12:41',
  clock: '12:41',
  dialogs: faqDialog1
}

//- Подбор персонала
const faqDialog2 = [
  {
    'from': 'app',
    'text': 'Привет, буду рад ответить на твои вопросы',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '12 марта 2021 12:55', 
    'delay': 1000
  },
  {
    'from': 'user',
    'text': 'Как стать бадди?',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '12 марта 2021 12:55', 
    'delay': 3300
  },
  {
    'from': 'app',
    'text': 'У нас в компании к новому сотруднику "прикрепляется" Бадди - опытный сотрудник, который помогает вводить новичка в должность и быстро адаптировать к корпоративной культуре компании, правилам взаимодействия, традициям в команде и т.д. Всю информацию по тому, как организовать работу ты найдешь в Гайде (https://hr.mail.ru/guidenew/buddy).<br><br> Бадди может стать любой сотрудник компании, но только в рамках своей команды.<br>Если ты хочешь стать бадди, то сообщи об этом своему руководителю!<br>За помощь в адаптации новичка бадди получает особый бейдж (значок в SYS) и 30 коинов.<br><br>Если остались вопросы, то тебе поможет Елена Брусянина.',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '12 марта 2021 12:55', 
    'delay': 5000
  },
  {
    'from': 'app',
    'text': 'Если что, я тут. Задавай вопросы!',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '12 марта 2021 12:55', 
    'delay': 3300
  },
  {
    'from': 'user',
    'text': 'Как адаптировать нового сотрудника?',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '12 марта 2021 12:56', 
    'delay': 3300
  },
  {
    'from': 'app',
    'text': 'Адаптация в дистанционном формате - это непросто. Для каждого участника адаптации мы подготовили гайды — это пошаговое руководство, которое поможет подробнее познакомиться со своей ролью: изучить основные инструменты, посмотреть лучшие практики, применить наши лайфхаки и чек-листы.<br><br>Гайд для руководителя нового сотрудника https://hr.mail.ru/manager/startguide.<br>Гайд для бадди по адаптации нового сотрудника https://hr.mail.ru/guidenew/buddy.<br>Гайд для нового сотрудника компании https://hr.mail.ru/newemployee/start.<br>Обрати внимание: доступ в файлам доступен только под vpn, при первом входе на сайт система попросит тебя авторизоваться. После авторизации все ссылки будут работать корректно.<br><br> Если у тебя остались вопросы, обратись к своему рекрутеру или Елена Брусянина.',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '12 марта 2021 12:56', 
    'delay': 7000
  },
  {
    'from': 'app',
    'text': 'Есть еще вопросы?',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '12 марта 2021 12:56', 
    'delay': 3300
  }
]

const faqRedPhoneArgs2 = {
  idElement: 'faqRPtriggerElement2',
  idWebAnimToCreateTransformer: 'faqRedWebTriggerElement2',
  type: 0,
  dateChatingInHeader: '12 марта 2021',
  headingChat: 'bot',
  dateTime: '12 марта 2021 12:55',
  clock: '12:55',
  dialogs: faqDialog2
}

//- Компенсации и льготы
const faqDialog3 = [
  {
    'from': 'app',
    'text': 'Привет, Антон! Я твой виртуальный ассистент. Кофе со мной не выпить — это, безусловно, минус, зато я знаю ответы на твои вопросы. Если тебя интересует что-то о жизни сотрудника в компании: отпусках, обучении, больничных, вакансиях, мероприятиях и других HR вопросах, а также о работе офиса — смело задавай их мне. Я отвечу! А если не смогу дать информацию сразу, то запишу твой вопрос, всё разузнаю и подключу коллег для решения. Дерзай!',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '12 марта 2021 12:55',
    'delay': 1000
  },
  {
    'from': 'user',
    'text': 'Как записаться к психологу?',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '12 марта 2021 12:55', 
    'delay': 3300
  },
  {
    'from': 'app',
    'text': 'До окончания режима дистанционной работы психологи проводят консультации онлайн. У нас работает сразу несколько психологов. Информацию об их терапевтической практике, графиках работы, контакты, а также запись на прием можно найти тут: https://sys.mail.ru/blog/health/psychologist/.<br><br>Также нам доступен Сервис Понимаю.ру (https://ponimau.com/) - это платформа корпоративного благополучия, которая позволяет получать индивидуальные консультации по психологическим, юридическим, финансовым вопросам и по здоровому образу жизни.<br>Программа поможет в решении жизненных вопросов. Нам доступны дистанционные консультации бесплатно, и их количество не ограничено.<br>Подробнее о сервисе и правилах пользования можно прочитать тут: https://sys.mail.ru/blog/entry/programma-psihologicheskoj-i-n/ и тут: https://ponimau.com/mailgroup.<br><br>Если остались вопросы, то тебе поможет Татьяна Кузнецова.',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '12 марта 2021 12:55', 
    'delay': 5000
  },
  {
    'from': 'app',
    'text': 'Если что, я тут. Задавай вопросы!',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '12 марта 2021 12:55', 
    'delay': 3300
  },
  {
    'from': 'user',
    'text': 'Где сдать тест на COVID, чтоб попасть в офис?',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '12 марта 2021 12:56', 
    'delay': 3300
  },
  {
    'from': 'app',
    'text': 'Всю актуальную информацию о сдаче тестов в офисе Скайлайт ты можешь найти в этом блоге: https://sys.mail.ru/blog/testirovanie2020/. Там мы публикуем все новости про график сдачи тестов, локации и прочее.<br><br>Для начала проверь, заведена ли у тебя заявка на работу в офисе Скайлайт на нужный день (кнопка на портале под твоей аватаркой или через мобильный интранет, раздел Офис - Посещение офиса). В определенные периоды мы вводим в работу этот функционал для контроля посещаемости.<br>Если у тебя возникли сложности с подачей заявки, проверь, указано ли у тебя рабочее место в профиле. Если все ок с рабочим местом, но заявка не создается, возможно превышен лимит посещений на этот день. Тогда нужно выбрать другую дату.<br><br>Если у тебя истек срок действия прошлого теста, или ты сдаешь тест в первый раз, то результат приходит примерно через 2 часа в виде смс сообщения на твой телефон и письмом на почту (пропуск разблокируется автоматически). Если же ты сдаешь тест повторно, а срок прошлого еще не истек, то результат может прийти в течение 5-6 часов. Если прошло уже больше времени, а результата все еще нет, то тебе поможет Ксения Шагиева и Александра Копкина.<br><br>Тест в Атриуме Скайлайт можно сдать с 8:00 до 19:00 (ежедневно).<br><br>Обрати внимание, что сдача тестов на антитела в офисе не предусмотрена, это тестирование может произвести любая внешняя лаборатория.<br><br>Ответы на частые вопросы про удаленку и работу офиса можно найти тут: https://sys.mail.ru/blog/entry/ofisyi-zakryityi-dlya-posescheniya-o/.<br><br>Если твой вопрос связан с тестированием в другом офисе или не нашел ответа, обратись, пожалуйста, к своему HR бизнес-партнеру или к коллегам из АХО: +7 495 725-63-57, доб. 0700.',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '12 марта 2021 12:56', 
    'delay': 7000
  },
  {
    'from': 'app',
    'text': 'Есть еще вопросы?',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '12 марта 2021 12:56', 
    'delay': 3300
  }
]

const faqRedPhoneArgs3 = {
  idElement: 'faqRPtriggerElement3',
  idWebAnimToCreateTransformer: 'faqRedWebTriggerElement3',
  type: 0,
  dateChatingInHeader: '12 марта 2021',
  headingChat: 'bot',
  dateTime: '12 марта 2021 12:55',
  clock: '12:55',
  dialogs: faqDialog3
}

//- ВК и орг мероприятий
const faqDialog4 = [
  {
    'from': 'app',
    'text': 'Здравствуй! Задавай вопросы!',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '12 марта 2021 12:55',
    'delay': 1000
  },
  {
    'from': 'user',
    'text': 'спорт в компании',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '12 марта 2021 12:55', 
    'delay': 3300
  },
  {
    'from': 'app',
    'text': 'В нашей компании ведется активная спортивная жизнь, все тренировки проводятся бесплатно, узнать актуальное расписание можно по ссылке: https://sys.mail.ru/blog/sportmrg/.<br>Также советуем подписаться на канал в Myteam<br>https://u.internal.myteam.mail.ru/profile/sport.<br><br>Если остались вопросы, то тебе поможет Алексей Королёв.',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '12 марта 2021 12:55', 
    'delay': 5000
  },
  {
    'from': 'user',
    'text': 'У нас есть корпоративные скидки для сотрудников?',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '12 марта 2021 12:56', 
    'delay': 3300
  },
  {
    'from': 'app',
    'text': 'Все корпоративные скидки собраны в Интранете по ссылке: https://sys.mail.ru/discounts/.<br>Скидки на наши продукты собраны здесь: https://sys.mail.ru/discounts/#mailru-group.<br><br>Если остались вопросы по программе скидок, то тебе поможет Дарья Бобко.',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '12 марта 2021 12:56', 
    'delay': 7000
  },
  {
    'from': 'user',
    'text': 'Что такое коины?',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '12 марта 2021 12:56', 
    'delay': 3300
  },
  {
    'from': 'app',
    'text': 'Коины — это внутренняя валюта Mail.ru Group, которая генерируется твоей активностью. С их помощью можно приобрести различные товары и услуги в нашем магазине коинов.<br>Узнать больше о том, как их получить и на что потратить, можно тут: https://sys.mail.ru/store/.<br><br>Свой баланс коинов можно узнать на личной странице в Интранете под фотографией профиля.<br><br>Если у тебя остались вопросы по программе coin, то тебе поможет Дарья Балашова.',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '12 марта 2021 12:56', 
    'delay': 3300
  },
  {
    'from': 'app',
    'text': 'Если что, я тут. Обращайся!',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '12 марта 2021 12:56', 
    'delay': 3300
  }
]

const faqRedPhoneArgs4 = {
  idElement: 'faqRPtriggerElement4',
  idWebAnimToCreateTransformer: 'faqRedWebTriggerElement4',
  type: 0,
  dateChatingInHeader: '12 марта 2021',
  headingChat: 'bot',
  dateTime: '12 марта 2021 12:55',
  clock: '12:55',
  dialogs: faqDialog4
}

//- Обучение
const faqDialog5 = [
  {
    'from': 'app',
    'text': 'Привет, Мария! Я твой виртуальный ассистент. Кофе со мной не выпить — это, безусловно, минус, зато я знаю ответы на твои вопросы. Если тебя интересует что-то о жизни сотрудника в компании: отпусках, обучении, больничных, вакансиях, мероприятиях и других HR вопросах, а также о работе офиса — смело задавай их мне. Я отвечу! А если не смогу дать информацию сразу, то запишу твой вопрос, всё разузнаю и подключу коллег для решения. Дерзай!',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '12 марта 2021 12:55',
    'delay': 1000
  },
  {
    'from': 'user',
    'text': 'У нас есть библиотека?',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '12 марта 2021 12:55', 
    'delay': 3300
  },
  {
    'from': 'app',
    'text': 'Ты можешь бесплатно читать книги в электронной библиотеке MyBook. В коллекции более 177 000 книг!<br>Доступ открыт при регистрации с корпоративных доменов: corp.mail.ru, corp.vk.com, corp.my.com, pixonic.com, pixonic.ru, cyber-loft.ru, cybersport.ru, epicevents.gg, esforce.com, esforce.org, resf.ru, ruhub.tv, virtus.pro.<br><br>Инструкция по подключению доступна по ссылке https://confluence.mail.ru/display/TNG/MyBook.<br>Если остались вопросы, то тебе поможет Дарья Молчанова.',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '12 марта 2021 12:55', 
    'delay': 5000
  },
  {
    'from': 'user',
    'text': 'Как попасть на Welcome-тренинг?',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '12 марта 2021 12:56', 
    'delay': 3300
  },
  {
    'from': 'app',
    'text': 'Каждые 3 недели мы проводим общекорпоративный welcome-тренинг для новых сотрудников.<br>На тренинге ты узнаешь о стратегии развития компании Mail.ru Group, наших сервисах, услугах и социальных проектах. Мы расскажем о правилах коммуникации вовне и защите информации внутри, а также познакомим тебя с возможностями и бенефитами, которые компания предоставляет для сотрудников.<br><br>Приглашение на welcome-тренинг должно прийти тебе на почту, если этого не произошло, ты можешь записаться самостоятельно тут: https://sys.mail.ru/blog/entry/welcome/. Ссылка для подключения приходит отдельным письмо накануне тренинга. Если остались вопросы, то тебе поможет Елена Брусянина.<br><br>Если твой вопрос связан с welcome-тренингом отдельного бизнес-юнита (в ряде подразделений проводятся свои внутренние), то обратись с вопросом к своему HR бизнес-партнеру (его контакт ты можешь найти в своем профиле на портале).',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '12 марта 2021 12:56', 
    'delay': 7000
  },
  {
    'from': 'app',
    'text': 'Если что, я тут. Обращайся!',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '12 марта 2021 12:56', 
    'delay': 3300
  }
]

const faqRedPhoneArgs5 = {
  idElement: 'faqRPtriggerElement5',
  idWebAnimToCreateTransformer: 'faqRedWebTriggerElement5',
  type: 0,
  dateChatingInHeader: '12 марта 2021',
  headingChat: 'bot',
  dateTime: '12 марта 2021 12:55',
  clock: '12:55',
  dialogs: faqDialog5
}

//- Оценка
const faqDialo6 = [
  {
    'from': 'app',
    'text': 'Привет! Что интересует?',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '12 марта 2021 12:55',
    'delay': 1000
  },
  {
    'from': 'user',
    'text': 'Хочу провести оценку в своей команде',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '12 марта 2021 12:56', 
    'delay': 3300
  },
  {
    'from': 'app',
    'text': 'Если ты хочешь провести оценку в своей команде, то сначала необходимо определить что именно нужно оценить.<br>На каждый вид оценки есть свои инструменты, разобраться с ними поможет твой HR BP (его контакт ты можешь найти в своем профиле на портале).<br><br>Ниже перечислены основные категории для оценки, если захочешь узнать о них подробнее, то напиши мне название категории, и я помогу тебе.<br><br>Оценка результативности - как сотрудник достигает целей.<br>Оценка компетенций - на каком уровне у сотрудника развиты soft и hard skills.<br>Оценка потенциала - какой вектор развития выбрать для сотрудника и сможет ли он успешно расти вертикальноОценка мотивации - что движет сотрудником и что его мотивирует.<br>Оценка вовлеченности - что помогает и мешает эффективной работе твоей команды.',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '12 марта 2021 12:56', 
    'delay': 3300
  },
  {
    'from': 'user',
    'text': 'Как провести оценку вовлеченности работников?',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '12 марта 2021 12:56', 
    'delay': 3300
  },
  {
    'from': 'app',
    'text': 'Для оценки вовлеченности мы проводим опросы с внешним провайдером Happy Job (https://happy-job.ru/) в командах от 40 человек.<br>После проведения опроса можно получить анонимные результаты по команде по 50 метрикам и понять, что помогает и мешает сотрудникам эффективно выполнять свою работу, что им нравится, а что хотелось бы поменять в первую очередь. <br><br>Для проведения опроса обратись к своему HR BP (его контакт ты можешь найти в своем профиле на портале).',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '12 марта 2021 12:56', 
    'delay': 5000
  },
  {
    'from': 'app',
    'text': 'Если что, я тут. Обращайся!',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '12 марта 2021 12:56', 
    'delay': 3300
  }
]

const faqRedPhoneArgs6 = {
  idElement: 'faqRPtriggerElement6',
  idWebAnimToCreateTransformer: 'faqRedWebTriggerElement6',
  type: 0,
  dateChatingInHeader: '12 марта 2021',
  headingChat: 'bot',
  dateTime: '12 марта 2021 12:55',
  clock: '12:55',
  dialogs: faqDialo6
}

//- АХО
const faqDialo7 = [
  {
    'from': 'app',
    'text': 'Привет, чем могу помочь?',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '12 марта 2021 12:55',
    'delay': 1000
  },
  {
    'from': 'user',
    'text': 'Что делать, если потерял пропуск в офис?',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '12 марта 2021 12:56', 
    'delay': 3300
  },
  {
    'from': 'app',
    'text': 'Все пропуска новых сотрудников в Скайлайт передают на ресепшен 1 этажа Башни А. Обратись к администратору с паспортом.<br>Если ты забыл пропуск дома, то обратись на ресепшен Башни А, тебе выдадут временный пропуск.<br><br>Если ты потерял пропуск или он перестал работать, то необходимо поставить таск в Jira - 0700 - Административный департамент (AHO) - пропуск, описать ситуацию и запросить перевыпуск пропуска. После изготовления он будет тебя ждать на ресепшен 1 этажа Башни А. Срок изготовления - 1 рабочий день.<br><br>Если твой вопрос связан с пропуском в другой офис или ты не нашел ответа на свой вопрос, пожалуйста, звони коллегам в АХО: +7 495 725-63-57, доб. 0700.',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '12 марта 2021 12:56', 
    'delay': 3300
  },
  {
    'from': 'user',
    'text': 'Как забронировать переговорную?',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '12 марта 2021 12:56', 
    'delay': 3300
  },
  {
    'from': 'app',
    'text': 'Переговорные в офисах можно бронировать через SYS:  https://sys.mail.ru/confroom/group/13/.<br>Или в мобильном интранете - раздел "Переговорные". Если он у тебя еще не установлен, это можно сделать по инструкции https://sys.mail.ru/blog/mobile-intranet/.<br><br>В офисе Скайлайт есть переговорные, которые бронируются только через календарь мероприятий (1-ая, 17-ая, Кинозал и Атриум): https://sys.mail.ru/events/calendar/.<br><br>Если твой вопрос связан с оснащением переговорных комнат, перестановкой мебели, организацией большой встречи и т.д., можно обратиться к коллегам из АХО: +7 495 725-63-57, доб. 0700.<br><br>Если у тебя возникла какая-либо техническая проблема с бронированием переговорной, можно обратиться в тех поддержку:<br>• Телефон внешний: +7 (495) 725-63-57 и 001 добавочный<br>• Телефон внутренний: 001<br>• Email: sos@corp.mail.ru<br>• JIRA: проект 001 - Техническая поддержка сотрудников (ОА)<br>Ещё таск можно поставить через @MRGJiraBot или по кнопке "Написать в поддержку".',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '12 марта 2021 12:56', 
    'delay': 5000
  },
  {
    'from': 'app',
    'text': 'Если что, я тут. Обращайся!',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '12 марта 2021 12:56', 
    'delay': 3300
  }
]

const faqRedPhoneArgs7 = {
  idElement: 'faqRPtriggerElement7',
  idWebAnimToCreateTransformer: 'faqRedWebTriggerElement7',
  type: 0,
  dateChatingInHeader: '12 марта 2021',
  headingChat: 'bot',
  dateTime: '12 марта 2021 12:55',
  clock: '12:55',
  dialogs: faqDialo7
}

//- техподдержка
const faqDialog8 = [
  {
    'from': 'app',
    'text': 'Привет, чем могу помочь?',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '12 марта 2021 12:55',
    'delay': 1000
  },
  {
    'from': 'user',
    'text': 'как обратиться в техническую поддержку?',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '12 марта 2021 12:56', 
    'delay': 3300
  },
  {
    'from': 'app',
    'text': 'Обратиться в техническую поддержку можно несколькими способами:<br>• Телефон внутренний: 001<br>• Телефон внешний: +7 (495) 725-63-57 и 001 добавочный<br>• Email: sos@corp.mail.ru<br>• JIRA: проект 001 - Техническая поддержка сотрудников (ОА)<br>• Бот в Myteam: @MRGJiraBot<br>• Чат технической поддержки в Myteam: https://u.internal.myteam.mail.ru/profile/Aqt2kkDCDWRVwg8',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '12 марта 2021 12:56', 
    'delay': 3300
  },
  {
    'from': 'user',
    'text': 'у меня сломался компьютер, что делать?',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '12 марта 2021 12:56', 
    'delay': 3300
  },
  {
    'from': 'app',
    'text': 'Если с твоей рабочей техникой что-то случилось, незамедлительно обращайся в техническую поддержку.<br><br>Сделать это можно несколькими способами:<br>• Телефон внутренний: 001<br>• Телефон внешний: +7 (495) 725-63-57 и 001 добавочный<br>• Email: sos@corp.mail.ru<br>• JIRA: проект 001 - Техническая поддержка сотрудников (ОА)<br>• Бот в Myteam: @MRGJiraBot<br>• Чат технической поддержки в Myteam: https://u.internal.myteam.mail.ru/profile/Aqt2kkDCDWRVwg8',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '12 марта 2021 12:56', 
    'delay': 5000
  },
  {
    'from': 'user',
    'text': 'Как изменить пароль почты?',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '12 марта 2021 12:56', 
    'delay': 3300
  },
  {
    'from': 'app',
    'text': 'Если ты забыл пароль от своей почты или у тебя возникли другие проблемы, обратись в техническую поддержку.<br><br>Сделать это можно несколькими способами:<br>• Телефон внутренний: 001<br>• Телефон внешний: +7 (495) 725-63-57 и 001 добавочный<br>• Email: sos@corp.mail.ru<br>• JIRA: проект 001 - Техническая поддержка сотрудников (ОА)<br>• Бот в Myteam: @MRGJiraBot<br>• Чат технической поддержки в Myteam: https://u.internal.myteam.mail.ru/profile/Aqt2kkDCDWRVwg8',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '12 марта 2021 12:56', 
    'delay': 3300
  },
  {
    'from': 'app',
    'text': 'Если что, я тут. Обращайся!',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '12 марта 2021 12:56', 
    'delay': 3300
  }
]

const faqRedPhoneArgs8 = {
  idElement: 'faqRPtriggerElement8',
  idWebAnimToCreateTransformer: 'faqRedWebTriggerElement8',
  type: 0,
  dateChatingInHeader: '12 марта 2021',
  headingChat: 'bot',
  dateTime: '12 марта 2021 12:55',
  clock: '12:55',
  dialogs: faqDialog8
}


// если страница прогрузилась
ready(() => {
  // то инициализируем анимацию
  new RedPhoneAnimation(faqRedPhoneArgs1)
  new RedPhoneAnimation(faqRedPhoneArgs2)
  new RedPhoneAnimation(faqRedPhoneArgs3)
  new RedPhoneAnimation(faqRedPhoneArgs4)
  new RedPhoneAnimation(faqRedPhoneArgs5)
  new RedPhoneAnimation(faqRedPhoneArgs6)
  new RedPhoneAnimation(faqRedPhoneArgs7)
  new RedPhoneAnimation(faqRedPhoneArgs8)
})


//- кадровое делопроизводство
const faqRedWebArgs1 = {
  idElement: 'faqRedWebTriggerElement1',
  idWebAnimToCreateTransformer: 'faqRPtriggerElement1',
  type: 0,
  dateChatingInHeader: '12 марта 2021',
  headingChat: 'кадровое делопроизводство',
  dateTime: '12 марта 2021 12:41',
  clock: '12:41',
  dialogs: faqDialog1
}

//- Подбор персонала
const faqRedWebArgs2 = {
  idElement: 'faqRedWebTriggerElement2',
  idWebAnimToCreateTransformer: 'faqRPtriggerElement2',
  type: 0,
  dateChatingInHeader: '12 марта 2021',
  headingChat: 'Подбор персонала',
  dateTime: '12 марта 2021 12:55',
  clock: '12:55',
  dialogs: faqDialog2
}

//- Компенсации и льготы
const faqRedWebArgs3 = {
  idElement: 'faqRedWebTriggerElement3',
  idWebAnimToCreateTransformer: 'faqRPtriggerElement3',
  type: 0,
  dateChatingInHeader: '12 марта 2021',
  headingChat: 'Компенсации и льготы',
  dateTime: '12 марта 2021 12:55',
  clock: '12:55',
  dialogs: faqDialog3
}

//- ВК и орг мероприятий
const faqRedWebArgs4 = {
  idElement: 'faqRedWebTriggerElement4',
  idWebAnimToCreateTransformer: 'faqRPtriggerElement4',
  type: 0,
  dateChatingInHeader: '12 марта 2021',
  headingChat: 'ВК и орг мероприятий',
  dateTime: '12 марта 2021 12:55',
  clock: '12:55',
  dialogs: faqDialog4
}

//- Обучение
const faqRedWebArgs5 = {
  idElement: 'faqRedWebTriggerElement5',
  idWebAnimToCreateTransformer: 'faqRPtriggerElement5',
  type: 0,
  dateChatingInHeader: '12 марта 2021',
  headingChat: 'Обучение',
  dateTime: '12 марта 2021 12:55',
  clock: '12:55',
  dialogs: faqDialog5
}

//- Оценка
const faqRedWebArgs6 = {
  idElement: 'faqRedWebTriggerElement6',
  idWebAnimToCreateTransformer: 'faqRPtriggerElement6',
  type: 0,
  dateChatingInHeader: '12 марта 2021',
  headingChat: 'Оценка',
  dateTime: '12 марта 2021 12:55',
  clock: '12:55',
  dialogs: faqDialog6
}

//- АХО
const faqRedWebArgs7 = {
  idElement: 'faqRedWebTriggerElement7',
  idWebAnimToCreateTransformer: 'faqRPtriggerElement7',
  type: 0,
  dateChatingInHeader: '12 марта 2021',
  headingChat: 'АХО',
  dateTime: '12 марта 2021 12:55',
  clock: '12:55',
  dialogs: faqDialog7
}

//- техподдержка
const faqRedWebArgs8 = {
  idElement: 'faqRedWebTriggerElement8',
  idWebAnimToCreateTransformer: 'faqRPtriggerElement8',
  type: 0,
  dateChatingInHeader: '12 марта 2021',
  headingChat: 'Техподдержка',
  dateTime: '12 марта 2021 12:55',
  clock: '12:55',
  dialogs: faqDialog8
}


ready(() => {
  new RedWebAnimation(faqRedWebArgs1)
  new RedWebAnimation(faqRedWebArgs2)
  new RedWebAnimation(faqRedWebArgs3)
  new RedWebAnimation(faqRedWebArgs4)
  new RedWebAnimation(faqRedWebArgs5)
  new RedWebAnimation(faqRedWebArgs6)
  new RedWebAnimation(faqRedWebArgs7)
  new RedWebAnimation(faqRedWebArgs8)
})