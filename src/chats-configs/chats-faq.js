// red phone

// timing
const shortTiming = 1000
const mediumTiming = 3300
const longTiming = 5000
const lognPlusTiming = 7000


//- кадровое делопроизводство
const date1 = '12 марта 2021'
const timeFirst1 = '12:41'
const timeSecond1 = '12:42'
const faqDialog1 = [
  {
    'from': 'app',
    'text': 'Привет, Матвей! Я твой виртуальный ассистент. Кофе со мной не выпить — это, безусловно, минус, зато я знаю ответы на твои вопросы. Если тебя интересует что-то о жизни сотрудника в компании: отпусках, обучении, больничных, вакансиях, мероприятиях и других HR вопросах, а также о работе офиса — смело задавай их мне. Я отвечу! А если не смогу дать информацию сразу, то запишу твой вопрос, всё разузнаю и подключу коллег для решения. Дерзай!',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date1} ${timeFirst1}`,
    'delay': shortTiming
  },
  {
    'from': 'user',
    'text': 'Как оформить отпуск?',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date1} ${timeFirst1}`, 
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'Чтобы пойти в отпуск, тебе необходимо оформить заявку. Для этого зайди в свой личный кабинет на портале и оформи заявку на нужные даты.',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date1} ${timeFirst1}`, 
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'Если что, я тут. Обращайся!',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date1} ${timeFirst1}`, 
    'delay': lognPlusTiming
  },
  {
    'from': 'user',
    'text': 'Я заболел, что делать?',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date1} ${timeSecond1}`, 
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'Если ты заболел, то доведи информацию о своем самочувствии до твоего непосредственного руководителя, сообщив причину и предполагаемое время твоего отсутствия на работе.<br>Обязательно вызывай врача для назначения лечения и оформления больничного листа. ',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date1} ${timeSecond1}`, 
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'Если что, я тут. Обращайся!',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date1} ${timeSecond1}`, 
    'delay': lognPlusTiming
  }
]

const faqRedPhoneArgs1 = {
  idElement: 'faqRPtriggerElement1',
  idWebAnimToCreateTransformer: 'faqRedWebTriggerElement1',
  type: 0,
  dateChatingInHeader: date1,
  headingChat: 'bot',
  dateTime: `${date1} ${timeFirst1}`,
  clock: timeFirst1,
  dialogs: faqDialog1
}

//- Подбор персонала
const date2 = '12 марта 2021'
const timeFirst2 = '12:55'
const timeSecond2 = '12:56'
const faqDialog2 = [
  {
    'from': 'app',
    'text': 'Привет, буду рад ответить на твои вопросы',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date2} ${timeFirst2}`, 
    'delay': shortTiming
  },
  {
    'from': 'user',
    'text': 'Как запустить подбор в мою команду?',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date2} ${timeFirst2}`, 
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'Вся подробная информация по процессу подбора приведена тут.<br>Если коротко, то чтобы запустить подбор, необходимо создать задачу в системе, указать тип «Новая вакансия», заполнить все обязательные поля и отправить на согласование руководителям.<br>Как только все этапы согласования будут завершены, задача перейдет на исполнение ответственному рекрутеру, который свяжется с тобой для обсуждения деталей по подбору.',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date2} ${timeFirst2}`, 
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'Если что, я тут. Задавай вопросы!',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date2} ${timeFirst2}`, 
    'delay': longTiming
  },
  {
    'from': 'user',
    'text': 'Мне нужен стажер, как его найти?',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date2} ${timeSecond2}`, 
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'Для того чтобы начать поиск стажера, необходимо получить согласование от своего руководителя и убедиться, что в бюджете есть свободная вакансия стажера.<br>Далее поставь задачу в системе на новую вакансию с описанием требований.<br>После согласования задачи будет назначен ответственный рекрутер, он свяжется с тобой для уточнения деталей. ',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date2} ${timeSecond2}`, 
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'Есть еще вопросы?',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date2} ${timeSecond2}`, 
    'delay': lognPlusTiming
  }
]

const faqRedPhoneArgs2 = {
  idElement: 'faqRPtriggerElement2',
  idWebAnimToCreateTransformer: 'faqRedWebTriggerElement2',
  type: 0,
  dateChatingInHeader: date2,
  headingChat: 'bot',
  dateTime: `${date2} ${timeFirst2}`,
  clock: timeFirst2,
  dialogs: faqDialog2
}

//- Компенсации и льготы
const date3 = '12 марта 2021'
const timeFirst3 = '12:55'
const timeSecond3 = '12:56'
const faqDialog3 = [
  {
    'from': 'app',
    'text': 'Привет, Антон! Я твой виртуальный ассистент. Кофе со мной не выпить — это, безусловно, минус, зато я знаю ответы на твои вопросы. Если тебя интересует что-то о жизни сотрудника в компании: отпусках, обучении, больничных, вакансиях, мероприятиях и других HR вопросах, а также о работе офиса — смело задавай их мне. Я отвечу! А если не смогу дать информацию сразу, то запишу твой вопрос, всё разузнаю и подключу коллег для решения. Дерзай!',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '12 марта 2021 12:55',
    'delay': shortTiming
  },
  {
    'from': 'user',
    'text': 'Где найти мой полис ДМС?',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '12 марта 2021 12:55', 
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'Полис ДМС приходит на корпоративную почту.<br>Также найти свой полис и его id можно в личном кабинете на портале в разделе ДМС. <br><br>Подробное описание программы ДМС можно найти <span class="blueText">тут</span>.',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '12 марта 2021 12:55', 
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'Если что, я тут. Задавай вопросы!',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '12 марта 2021 12:55', 
    'delay': mediumTiming
  },
  {
    'from': 'user',
    'text': 'Как записаться на прием к психологу?',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '12 марта 2021 12:56', 
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'У нас работает сразу несколько психологов. Информацию об их терапевтической практике, графиках работы, контактах, а также запись на прием можно найти тут.',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '12 марта 2021 12:56', 
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'Есть еще вопросы?',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '12 марта 2021 12:56', 
    'delay': lognPlusTiming
  }
]

const faqRedPhoneArgs3 = {
  idElement: 'faqRPtriggerElement3',
  idWebAnimToCreateTransformer: 'faqRedWebTriggerElement3',
  type: 0,
  dateChatingInHeader: date3,
  headingChat: 'bot',
  dateTime: `${date3} ${timeFirst3}`,
  clock: timeFirst3,
  dialogs: faqDialog3
}

//- ВК и орг мероприятий
const date4 = '12 марта 2021'
const timeFirst4 = '12:55'
const timeSecond4 = '12:56'
const faqDialog4 = [
  {
    'from': 'app',
    'text': 'Здравствуй! Задавай вопросы!',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '12 марта 2021 12:55',
    'delay': shortTiming
  },
  {
    'from': 'user',
    'text': 'Хочу заниматься спортом',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '12 марта 2021 12:55', 
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'В нашей компании ведется активная спортивная жизнь, все тренировки проводятся бесплатно, узнать актуальное расписание можно <span class="blueText">тут</span>.',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '12 марта 2021 12:55', 
    'delay': longTiming
  },
  {
    'from': 'user',
    'text': 'У нас есть корпоративные скидки для сотрудников?',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '12 марта 2021 12:56', 
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'Все корпоративные скидки и акции собраны <span class="blueText">тут</span>.',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '12 марта 2021 12:56', 
    'delay': lognPlusTiming
  },
  {
    'from': 'app',
    'text': 'Если что, я тут. Обращайся!',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '12 марта 2021 12:56', 
    'delay': mediumTiming
  }
]

const faqRedPhoneArgs4 = {
  idElement: 'faqRPtriggerElement4',
  idWebAnimToCreateTransformer: 'faqRedWebTriggerElement4',
  type: 0,
  dateChatingInHeader: date4,
  headingChat: 'bot',
  dateTime: `${date4} ${timeFirst4}`,
  clock: timeFirst4,
  dialogs: faqDialog4
}

//- Обучение
const date5 = '12 марта 2021'
const timeFirst5 = '12:55'
const timeSecond5 = '12:56'
const faqDialog5 = [
  {
    'from': 'app',
    'text': 'Привет, Мария! Я твой виртуальный ассистент. Кофе со мной не выпить — это, безусловно, минус, зато я знаю ответы на твои вопросы. Если тебя интересует что-то о жизни сотрудника в компании: отпусках, обучении, больничных, вакансиях, мероприятиях и других HR вопросах, а также о работе офиса — смело задавай их мне. Я отвечу! А если не смогу дать информацию сразу, то запишу твой вопрос, всё разузнаю и подключу коллег для решения. Дерзай!',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '12 марта 2021 12:55',
    'delay': shortTiming
  },
  {
    'from': 'user',
    'text': 'У нас есть библиотека?',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '12 марта 2021 12:55', 
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'Ты можешь бесплатно читать книги в нашей электронной библиотеке.<br>Также у нас есть библиотека в офисе на 9 этаже.',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '12 марта 2021 12:55', 
    'delay': longTiming
  },
  {
    'from': 'user',
    'text': 'Как организовать тренинг для своей команды?',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '12 марта 2021 12:56', 
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'Если хочешь организовать тренинг для своей команды - согласуй его со своим руководителем и поставь задачу в систему.<br>В задаче подробно опиши свой запрос, укажи сроки обучения и участников.<br>Далее с тобой свяжется менеджер по обучению для уточнения деталей.',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '12 марта 2021 12:56', 
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'Если что, я тут. Обращайся!',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '12 марта 2021 12:56', 
    'delay': lognPlusTiming
  }
]

const faqRedPhoneArgs5 = {
  idElement: 'faqRPtriggerElement5',
  idWebAnimToCreateTransformer: 'faqRedWebTriggerElement5',
  type: 0,
  dateChatingInHeader: date5,
  headingChat: 'bot',
  dateTime: `${date5} ${timeFirst5}`,
  clock: timeFirst5,
  dialogs: faqDialog5
}

//- Оценка
const date6 = '12 марта 2021'
const timeFirst6 = '12:55'
const timeSecond6 = '12:56'
const faqDialog6 = [
  {
    'from': 'app',
    'text': 'Привет! Что интересует?',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '12 марта 2021 12:55',
    'delay': shortTiming
  },
  {
    'from': 'user',
    'text': 'Хочу провести оценку в своей команде',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '12 марта 2021 12:56', 
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'Если ты хочешь провести оценку в своей команде, то сначала необходимо определить что именно нужно оценить.<br>На каждый вид оценки есть свои инструменты, разобраться с ними поможет твой HR BP.',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '12 марта 2021 12:56', 
    'delay': mediumTiming
  },
  {
    'from': 'user',
    'text': 'Как провести оценку вовлеченности работников?',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '12 марта 2021 12:56', 
    'delay': lognPlusTiming
  },
  {
    'from': 'app',
    'text': 'Для оценки вовлеченности мы проводим опросы с внешним провайдером.<br>После проведения опроса можно получить анонимные результаты по команде и понять, что помогает и мешает сотрудникам эффективно выполнять свою работу, что им нравится, а что хотелось бы поменять в первую очередь.<br><br>Для проведения опроса обратись к своему HR BP.',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '12 марта 2021 12:56', 
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'Если что, я тут. Обращайся!',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '12 марта 2021 12:56', 
    'delay': lognPlusTiming
  }
]

const faqRedPhoneArgs6 = {
  idElement: 'faqRPtriggerElement6',
  idWebAnimToCreateTransformer: 'faqRedWebTriggerElement6',
  type: 0,
  dateChatingInHeader: date6,
  headingChat: 'bot',
  dateTime: `${date6} ${timeFirst6}`,
  clock: timeFirst6,
  dialogs: faqDialog6
}

//- АХО
const date7 = '12 марта 2021'
const timeFirst7 = '12:55'
const timeSecond7 = '12:56'
const faqDialog7 = [
  {
    'from': 'app',
    'text': 'Привет, чем могу помочь?',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '12 марта 2021 12:55',
    'delay': shortTiming
  },
  {
    'from': 'user',
    'text': 'Как оформить командировку?',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '12 марта 2021 12:56', 
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'Заявку на командировку необходимо заводить через портал.<br>После создания и согласования на всех этапах заявки на командировку, с тобой свяжутся коллеги из отдела организации деловых поездок, которые сориентируют по дальнейшим шагам.<br><br>После возвращения из поездки не забудь подготовить и сдать необходимые документы.',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '12 марта 2021 12:56', 
    'delay': mediumTiming
  },
  {
    'from': 'user',
    'text': 'Как работает врач в офисе?',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '12 марта 2021 12:56', 
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'В офисе работает кабинет терапевта, к которому можно обратиться, если чувствуешь недомогание.<br>График работы врача-терапевта: каждый день с 10.00 до 19.00.<br>Технические перерывы: с 13:00 до 13:30, с 16:30 до 17:00.<br>Место приема: 3 этаж, кабинет 306.',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '12 марта 2021 12:56', 
    'delay': mediumTiming
  },
  {
    'from': 'user',
    'text': 'Как забронировать переговорную?',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '12 марта 2021 12:56', 
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'Переговорные в офисах можно бронировать <span class="blueText">тут</span>.<br>Если у тебя возникла какая-либо техническая проблема с бронированием переговорной, можно обратиться в тех поддержку.',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '12 марта 2021 12:56', 
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'Если что, я тут. Обращайся!',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '12 марта 2021 12:56', 
    'delay': longTiming
  }
]

const faqRedPhoneArgs7 = {
  idElement: 'faqRPtriggerElement7',
  idWebAnimToCreateTransformer: 'faqRedWebTriggerElement7',
  type: 0,
  dateChatingInHeader: date7,
  headingChat: 'bot',
  dateTime: `${date7} ${timeFirst7}`,
  clock: timeFirst7,
  dialogs: faqDialog7
}

//- техподдержка
const date8 = '12 марта 2021'
const timeFirst8 = '12:55'
const timeSecond8 = '12:56'
const faqDialog8 = [
  {
    'from': 'app',
    'text': 'Привет, чем могу помочь?',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '12 марта 2021 12:55',
    'delay': shortTiming
  },
  {
    'from': 'user',
    'text': 'как обратиться в техническую поддержку?',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '12 марта 2021 12:56', 
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'Обратиться в техническую поддержку можно несколькими способами:<br>• Телефон внутренний<br>• Телефон внешний<br>• Email<br>• <span class="blueText">Чат</span> технической поддержки.',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '12 марта 2021 12:56', 
    'delay': mediumTiming
  },
  {
    'from': 'user',
    'text': 'у меня сломался компьютер, что делать?',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '12 марта 2021 12:56', 
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'Если с твоей рабочей техникой что-то случилось, незамедлительно обращайся в техническую поддержку.<br><br>Сделать это можно несколькими способами:<br>• Телефон внутренний<br>• Телефон внешний<br>• Email<br>• <span class="blueText">Чат</span> технической поддержки в Myteam',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '12 марта 2021 12:56', 
    'delay': longTiming
  },
  {
    'from': 'app',
    'text': 'Если что, я тут. Обращайся!',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '12 марта 2021 12:56', 
    'delay': mediumTiming
  }
]

const faqRedPhoneArgs8 = {
  idElement: 'faqRPtriggerElement8',
  idWebAnimToCreateTransformer: 'faqRedWebTriggerElement8',
  type: 0,
  dateChatingInHeader: date8,
  headingChat: 'bot',
  dateTime: `${date8} ${timeFirst8}`,
  clock: timeFirst8,
  dialogs: faqDialog8
}


// web
//- кадровое делопроизводство
const faqRedWebArgs1 = {
  idElement: 'faqRedWebTriggerElement1',
  idWebAnimToCreateTransformer: 'faqRPtriggerElement1',
  type: 0,
  dateChatingInHeader: date1,
  headingChat: 'кадровое делопроизводство',
  dateTime: `${date1} ${timeFirst1}`,
  clock: timeFirst1,
  dialogs: faqDialog1
}

//- Подбор персонала
const faqRedWebArgs2 = {
  idElement: 'faqRedWebTriggerElement2',
  idWebAnimToCreateTransformer: 'faqRPtriggerElement2',
  type: 0,
  dateChatingInHeader: date2,
  headingChat: 'Подбор персонала',
  dateTime: `${date2} ${timeFirst2}`,
  clock: timeFirst2,
  dialogs: faqDialog2
}

//- Компенсации и льготы
const faqRedWebArgs3 = {
  idElement: 'faqRedWebTriggerElement3',
  idWebAnimToCreateTransformer: 'faqRPtriggerElement3',
  type: 0,
  dateChatingInHeader: date3,
  headingChat: 'Компенсации и льготы',
  dateTime: `${date3} ${timeFirst3}`,
  clock: timeFirst3,
  dialogs: faqDialog3
}

//- ВК и орг мероприятий
const faqRedWebArgs4 = {
  idElement: 'faqRedWebTriggerElement4',
  idWebAnimToCreateTransformer: 'faqRPtriggerElement4',
  type: 0,
  dateChatingInHeader: date4,
  headingChat: 'ВК и орг мероприятий',
  dateTime: `${date4} ${timeFirst4}`,
  clock: timeFirst4,
  dialogs: faqDialog4
}

//- Обучение
const faqRedWebArgs5 = {
  idElement: 'faqRedWebTriggerElement5',
  idWebAnimToCreateTransformer: 'faqRPtriggerElement5',
  type: 0,
  dateChatingInHeader: date5,
  headingChat: 'Обучение',
  dateTime: `${date5} ${timeFirst5}`,
  clock: timeFirst5,
  dialogs: faqDialog5
}

//- Оценка
const faqRedWebArgs6 = {
  idElement: 'faqRedWebTriggerElement6',
  idWebAnimToCreateTransformer: 'faqRPtriggerElement6',
  type: 0,
  dateChatingInHeader: date6,
  headingChat: 'Оценка',
  dateTime: `${date6} ${timeFirst6}`,
  clock: timeFirst6,
  dialogs: faqDialog6
}

//- АХО
const faqRedWebArgs7 = {
  idElement: 'faqRedWebTriggerElement7',
  idWebAnimToCreateTransformer: 'faqRPtriggerElement7',
  type: 0,
  dateChatingInHeader: date7,
  headingChat: 'АХО',
  dateTime: `${date7} ${timeFirst7}`,
  clock: timeFirst7,
  dialogs: faqDialog7
}

//- техподдержка
const faqRedWebArgs8 = {
  idElement: 'faqRedWebTriggerElement8',
  idWebAnimToCreateTransformer: 'faqRPtriggerElement8',
  type: 0,
  dateChatingInHeader: date8,
  headingChat: 'Техподдержка',
  dateTime: `${date8} ${timeFirst8}`,
  clock: timeFirst8,
  dialogs: faqDialog8
}

// чистим ls от сигналов трансформации анимации
if (localStorage.getItem('currentAnimationDialog')) {
  localStorage.removeItem('currentAnimationDialog');
}
if (localStorage.getItem('mob_first_part_user_msg')) {
  localStorage.removeItem('mob_first_part_user_msg')
}
if (localStorage.getItem('mob_first_part_app_msg')) {
  localStorage.removeItem('mob_first_part_app_msg')
}
if (localStorage.getItem('web_first_part_user_msg')) {
  localStorage.removeItem('web_first_part_user_msg')
}
if (localStorage.getItem('web_first_part_app_msg')) {
  localStorage.removeItem('web_first_part_app_msg')
}

ready(() => {
  // mob
  new RedPhoneAnimation(faqRedPhoneArgs1)
  new RedPhoneAnimation(faqRedPhoneArgs2)
  new RedPhoneAnimation(faqRedPhoneArgs3)
  new RedPhoneAnimation(faqRedPhoneArgs4)
  new RedPhoneAnimation(faqRedPhoneArgs5)
  new RedPhoneAnimation(faqRedPhoneArgs6)
  new RedPhoneAnimation(faqRedPhoneArgs7)
  new RedPhoneAnimation(faqRedPhoneArgs8)
  // web
  new RedWebAnimation(faqRedWebArgs1)
  new RedWebAnimation(faqRedWebArgs2)
  new RedWebAnimation(faqRedWebArgs3)
  new RedWebAnimation(faqRedWebArgs4)
  new RedWebAnimation(faqRedWebArgs5)
  new RedWebAnimation(faqRedWebArgs6)
  new RedWebAnimation(faqRedWebArgs7)
  new RedWebAnimation(faqRedWebArgs8)
})