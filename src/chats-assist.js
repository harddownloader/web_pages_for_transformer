// timing
const shortTiming = 1000
const mediumTiming = 3300
const longTiming = 5000

// участие в закупочных процедурах
const date1 = '5 апреля 2021'
const timeFirst1 = '11:26'
// const timeSecond1 = '11:27'
const assistDialog1 = [
  {
    'from': 'app',
    'text': 'Приветствую! Есть вопросы по статусу квалификации или статусу платежа?<br>Опишите суть вопроса',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date1} ${timeFirst1}`,
    'delay': shortTiming
  },
  {
    'from': 'user',
    'text': 'хочу участвовать в закупочных процедурах',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date1} ${timeFirst1}`,
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'Участие в закупочных процедурах возможно только после прохождения процедуры квалификации и подачи заявки на участие. Приглашение принять участие будет отправлено Вам нашим специалистом службы снабжения за несколько дней до проведения закупок.',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date1} ${timeFirst1}`,
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'Просьба  обратить внимание на соблюдение сроков подачи коммерческого предложения и заяки на участие в закупках. Подача заявки на участие и коммерческого предложения вне указанных сроков невозможна. <span class="blueText">План закупочных процедур</span> на текущий год доступенна корпоративном сайте в разделе "Закупки".',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date1} ${timeFirst1}`,
    'delay': 3000
  },
  {
    'from': 'app',
    'text': 'Возможность участия или сроки проведения ближайших конкурсов по категориям товаров и услуг можно уточнить при помощи <span class="blueText">формы обратной связи</span>.',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date1} ${timeFirst1}`,
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'Ответ на Ваше обращение поступит в течение 5 рабочих дней.',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date1} ${timeFirst1}`,
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'Узнать подробнее о процедуре квалификации поставщиков?',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': true,
    'time': `${date1} ${timeFirst1}`,
    'delay': mediumTiming
  },
  {
    'from': 'user',
    'text': 'Нет',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date1} ${timeFirst1}`,
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'Спросить что-нибудь еще?',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': true,
    'time': `${date1} ${timeFirst1}`,
    'delay': mediumTiming
  },
  {
    'from': 'user',
    'text': 'Нет',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': true,
    'time': `${date1} ${timeFirst1}`,
    'delay': mediumTiming
  },
]



const assistRedPhoneArgs1 = {
  idElement: 'assistRPtriggerElement1',
  idWebAnimToCreateTransformer: 'assistRedWebTriggerElement1',
  type: 0,
  dateChatingInHeader: date1,
  headingChat: 'bot',
  dateTime: `${date1} ${timeFirst1}`,
  clock: timeFirst1,
  dialogs: assistDialog1
}
const assistRedWebArgs1 = {
  idElement: assistRedPhoneArgs1.idWebAnimToCreateTransformer,
  idWebAnimToCreateTransformer: assistRedPhoneArgs1.idElement,
  type: assistRedPhoneArgs1.type,
  dateChatingInHeader: assistRedPhoneArgs1.dateChatingInHeader,
  headingChat: assistRedPhoneArgs1.headingChat,
  dateTime: assistRedPhoneArgs1.dateTime,
  clock: assistRedPhoneArgs1.clock,
  dialogs: assistRedPhoneArgs1.dialogs
}

// квалификационные анкеты, причины отклонения
const date2 = '8 апреля 2021'
const timeFirst2 = '16:37'
const assistDialog2 = [
  {
    'from': 'app',
    'text': 'Приветствую! Вопросы по статусу квалификации или статусу платежа?<br>Опишите суть вопроса',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date2} ${timeFirst2}`,
    'delay': shortTiming
  },
  {
    'from': 'user',
    'text': 'как заполнять квалификационную анкету?',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date2} ${timeFirst2}`,
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'Квалификационная анкета проверяется в два этапа: службой безопасности о возможности сотрудничества и службой снабжения на правильность заполнения анкеты.',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date2} ${timeFirst2}`,
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'Сотрудничество с нами возможно только после одобрения анкеты службами безопасности и снабжения. Полная проверка кандидата по заявленым категориям занимает до 10 рабочих дней.',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date2} ${timeFirst2}`,
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'На каждом из этапов поставщик получает на адрес электронной почты уведомление о результатах проверки.',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date2} ${timeFirst2}`,
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'Отказ в квалификации на любом из этапов проверки не означет полного отказа от сотрудничества с Вашим предприятием. Повторная процедура квалификации возможна через 6 месяцев после устранения факторов риска.',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date2} ${timeFirst2}`,
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'Для уточнения текущего статуса квалификации задайте мне вопрос, либо воспользуйтесь <span class="blueText">формой обратной связи</span>.',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date2} ${timeFirst2}`,
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'Еще вопросы?',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': true,
    'time': `${date2} ${timeFirst2}`,
    'delay': mediumTiming
  },
  {
    'from': 'user',
    'text': 'Нет',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date2} ${timeFirst2}`,
    'delay': mediumTiming
  },
]

const assistRedPhoneArgs2 = {
  idElement: 'assistRPtriggerElement2',
  idWebAnimToCreateTransformer: 'assistRedWebTriggerElement2',
  type: 0,
  dateChatingInHeader: date2,
  headingChat: 'bot',
  dateTime: `${date2} ${timeFirst2}`,
  clock: timeFirst2,
  dialogs: assistDialog2
}
const assistRedWebArgs2 = {
  idElement: assistRedPhoneArgs2.idWebAnimToCreateTransformer,
  idWebAnimToCreateTransformer: assistRedPhoneArgs2.idElement,
  type: assistRedPhoneArgs2.type,
  dateChatingInHeader: assistRedPhoneArgs2.dateChatingInHeader,
  headingChat: assistRedPhoneArgs2.headingChat,
  dateTime: assistRedPhoneArgs2.dateTime,
  clock: assistRedPhoneArgs2.clock,
  dialogs: assistRedPhoneArgs2.dialogs
}

// работа в личном кабинете поставщика
const date3 = '13 апреля 2021'
const timeFirst3 = '16:26'
const assistDialog3 = [
  {
    'from': 'app',
    'text': 'Приветствую! Я - цифровой помощник КУБ. Есть вопросы по статусу квалификации или статусу платежа?<br>В чем вопрос?',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date3} ${timeFirst3}`,
    'delay': shortTiming
  },
  {
    'from': 'user',
    'text': 'как добавить категории в личном кабинете',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date3} ${timeFirst3}`,
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'Направленные анкеты квалификации можно просмотреть в личном кабинете SRM: на вкладке "Управление" Поиск в разделе Квалификация по всем категориям (новое, в обработке, отправлено, для выяснения) и выбор нужной квалификационной анкеты кликом по ссылке с именем.',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date3} ${timeFirst3}`,
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'Если не удалось найти анкеты, обратитесь в службу поддержки тел. +7(495) 999-99-99 или отправьте сообщение на <span class="blueText">электронную почту</span>.',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date3} ${timeFirst3}`,
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'Еще вопросы?',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': true,
    'time': `${date3} ${timeFirst3}`,
    'delay': mediumTiming
  },
  {
    'from': 'user',
    'text': 'Нет',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date3} ${timeFirst3}`,
    'delay': mediumTiming
  },
]

const assistRedPhoneArgs3 = {
  idElement: 'assistRPtriggerElement3',
  idWebAnimToCreateTransformer: 'assistRedWebTriggerElement3',
  type: 0,
  dateChatingInHeader: date3,
  headingChat: 'bot',
  dateTime: `${date3} ${timeFirst3}`,
  clock: timeFirst3,
  dialogs: assistDialog3
}
const assistRedWebArgs3 = {
  idElement: assistRedPhoneArgs3.idWebAnimToCreateTransformer,
  idWebAnimToCreateTransformer: assistRedPhoneArgs3.idElement,
  type: assistRedPhoneArgs3.type,
  dateChatingInHeader: assistRedPhoneArgs3.dateChatingInHeader,
  headingChat: assistRedPhoneArgs3.headingChat,
  dateTime: assistRedPhoneArgs3.dateTime,
  clock: assistRedPhoneArgs3.clock,
  dialogs: assistRedPhoneArgs3.dialogs
}

// технические проблемы
const date4 = '21 апреля 2021'
const timeFirst4 = '16:35'
const timeSecond4 = '16:36'
const assistDialog4 = [
  {
    'from': 'app',
    'text': 'Приветствую!.Готов консультировать по вопросам получения статуса квалификации или статуса платежей.<br>Опишите суть вопроса',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date4} ${timeFirst4}`,
    'delay': shortTiming
  },
  {
    'from': 'user',
    'text': 'у меня возникла ошибка при регистрации',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date4} ${timeFirst4}`,
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'Убедитесь, что поля анкеты заполнены корректно. Все поля со звездочкой обязательны к заполнению, с приложением файла. При отрицательном ответе на вопрос анкеты и отсутствии запрашиваемого документа, следует приложить пустой файл. По всем техническим вопросам обращайтесь в службу поддержки по тел. +7(495) 999-99-99 или по <span class="blueText">электронной почте</span>.',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date4} ${timeFirst4}`,
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'Хотели бы спросить что-нибудь еще?',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': true,
    'time': `${date4} ${timeFirst4}`,
    'delay': mediumTiming
  },
  {
    'from': 'user',
    'text': 'Нет',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date4} ${timeSecond4}`,
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'Благодарим за обращение',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date4} ${timeSecond4}`,
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'Завершаем сессию',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date4} ${timeSecond4}`,
    'delay': mediumTiming
  },
]

const assistRedPhoneArgs4 = {
  idElement: 'assistRPtriggerElement4',
  idWebAnimToCreateTransformer: 'assistRedWebTriggerElement4',
  type: 0,
  dateChatingInHeader: date4,
  headingChat: 'bot',
  dateTime: `${date4} ${timeFirst4}`,
  clock: timeFirst4,
  dialogs: assistDialog4
}
const assistRedWebArgs4 = {
  idElement: assistRedPhoneArgs4.idWebAnimToCreateTransformer,
  idWebAnimToCreateTransformer: assistRedPhoneArgs4.idElement,
  type: assistRedPhoneArgs4.type,
  dateChatingInHeader: assistRedPhoneArgs4.dateChatingInHeader,
  headingChat: assistRedPhoneArgs4.headingChat,
  dateTime: assistRedPhoneArgs4.dateTime,
  clock: assistRedPhoneArgs4.clock,
  dialogs: assistRedPhoneArgs4.dialogs
}

// статус квалификации
const date5 = '23 апреля 2021'
const timeFirst5 = '8:59'
const assistDialog5 = [
  {
    'from': 'app',
    'text': 'Приветствую! Я - цифровой помощник КУБ. Есть вопросы по статусу квалификации или статусу платежей.<br>Опишите суть вопроса.',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date5} ${timeFirst5}`,
    'delay': shortTiming
  },
  {
    'from': 'user',
    'text': 'нужен статус квалификации',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date5} ${timeFirst5}`,
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'Общий статус квалификации "Квалифицирован"',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date5} ${timeFirst5}`,
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'Вам присвоена квалификация по категориям ТМЦ',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date5} ${timeFirst5}`,
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'Категория закупки IT-оборудование, ПО, оборудование связи<br>Завод для категории закупки Группа Х<br>Статус категорийной анкеты Анкета утверждена',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date5} ${timeFirst5}`,
    'delay': mediumTiming
  },
  {
    'from': 'user',
    'text': 'Квалификация по категориям Услуг',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date5} ${timeFirst5}`,
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'Ваша кандидатура утверждена по категории Платформы SAP',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date5} ${timeFirst5}`,
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'Конечный срок квалификации 29.03.2022',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date5} ${timeFirst5}`,
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'Если остались вопросы у Вас есть возможность обратиться к нам через <span class="blueText">форму обратной связи</span>',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date5} ${timeFirst5}`,
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'Хотели бы спросить что-нибудь еще?',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': true,
    'time': `${date5} ${timeFirst5}`,
    'delay': mediumTiming
  },
]

const assistRedPhoneArgs5 = {
  idElement: 'assistRPtriggerElement5',
  idWebAnimToCreateTransformer: 'assistRedWebTriggerElement5',
  type: 0,
  dateChatingInHeader: date5,
  headingChat: 'bot',
  dateTime: `${date5} ${timeFirst5}`,
  clock: timeFirst5,
  dialogs: assistDialog5
}
const assistRedWebArgs5 = {
  idElement: assistRedPhoneArgs5.idWebAnimToCreateTransformer,
  idWebAnimToCreateTransformer: assistRedPhoneArgs5.idElement,
  type: assistRedPhoneArgs5.type,
  dateChatingInHeader: assistRedPhoneArgs5.dateChatingInHeader,
  headingChat: assistRedPhoneArgs5.headingChat,
  dateTime: assistRedPhoneArgs5.dateTime,
  clock: assistRedPhoneArgs5.clock,
  dialogs: assistRedPhoneArgs5.dialogs
}

// статус платежа
const date6 = '29 апреля 2021'
const timeFirst6 = '6:50'
const assistDialog6 = [
  {
    'from': 'app',
    'text': 'Приветствую! Я — Цифровой помощник КУБ. Готов консультировать по статусу квалификации или статусу платежей.<br>Опишите суть вопроса',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date6} ${timeFirst6}`,
    'delay': shortTiming
  },
  {
    'from': 'user',
    'text': 'оплата',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date6} ${timeFirst6}`,
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'Укажите год регистрации договора на предприятии ( (формат ГГГГ, например 2021)',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date6} ${timeFirst6}`,
    'delay': mediumTiming
  },
  {
    'from': 'user',
    'text': '2018',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date6} ${timeFirst6}`,
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'Выберите контрагента',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': [
      'ООО Кармен',
      'ООО Сезар',
      'ПАО Царский'
    ],
    'time': `${date6} ${timeFirst6}`,
    'delay': mediumTiming
  },
  {
    'from': 'user',
    'text': [2],
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date6} ${timeFirst6}`,
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'Укажите интересующий Вас договор',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': ['100099'],
    'time': `${date6} ${timeFirst6}`,
    'delay': mediumTiming
  },
  {
    'from': 'user',
    'text': [0],
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date6} ${timeFirst6}`,
    'delay': (mediumTiming + 1000)
  },
  {
    'from': 'app',
    'text': 'Для предоставления информации о платежах за период, укажите даты начала и окончания периода в формате ДД.ММ.ГГГГ (например, 01.01.2021)<br>Укажите дату начала периода',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date6} ${timeFirst6}`,
    'delay': mediumTiming
  },
  {
    'from': 'user',
    'text': '16.04.2021',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date6} ${timeFirst6}`,
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'Укажите дату окончания периода',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date6} ${timeFirst6}`,
    'delay': mediumTiming
  },
  {
    'from': 'user',
    'text': '30.04.2021',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date6} ${timeFirst6}`,
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'По результатам анализа периода с 16.04.2021 по 30.04.2021 по Договору 100099',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': 'table4',
    'time': `${date6} ${timeFirst6}`,
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'Проверить по другим параметрам?',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': true,
    'time': `${date6} ${timeFirst6}`,
    'delay': mediumTiming
  },
  {
    'from': 'user',
    'text': 'Нет',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date6} ${timeFirst6}`,
    'delay': mediumTiming
  },
]

const assistRedPhoneArgs6 = {
  idElement: 'assistRPtriggerElement6',
  idWebAnimToCreateTransformer: 'assistRedWebTriggerElement6',
  type: 0,
  dateChatingInHeader: date6,
  headingChat: 'bot',
  dateTime: `${date6} ${timeFirst6}`,
  clock: timeFirst6,
  dialogs: assistDialog6
}
const assistRedWebArgs6 = {
  idElement: assistRedPhoneArgs6.idWebAnimToCreateTransformer,
  idWebAnimToCreateTransformer: assistRedPhoneArgs6.idElement,
  type: assistRedPhoneArgs6.type,
  dateChatingInHeader: assistRedPhoneArgs6.dateChatingInHeader,
  headingChat: assistRedPhoneArgs6.headingChat,
  dateTime: assistRedPhoneArgs6.dateTime,
  clock: assistRedPhoneArgs6.clock,
  dialogs: assistRedPhoneArgs6.dialogs
}


ready(() => {
  // mob
  new RedPhoneAnimation(assistRedPhoneArgs1)
  new RedPhoneAnimation(assistRedPhoneArgs2)
  new RedPhoneAnimation(assistRedPhoneArgs3)
  new RedPhoneAnimation(assistRedPhoneArgs4)
  new RedPhoneAnimation(assistRedPhoneArgs5)
  new RedPhoneAnimation(assistRedPhoneArgs6)
  // web
  new RedWebAnimation(assistRedWebArgs1)
  new RedWebAnimation(assistRedWebArgs2)
  new RedWebAnimation(assistRedWebArgs3)
  new RedWebAnimation(assistRedWebArgs4)
  new RedWebAnimation(assistRedWebArgs5)
  new RedWebAnimation(assistRedWebArgs6)
})