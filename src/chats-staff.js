// timing
const shortTiming = 1000
const mediumTiming = 3300
const longTiming = 5000

// участие в закупочных процедурах
const date1 = '3 апреля 2021'
const timeFirst1 = '12:00'
const timeSecond1 = '12:01'
const timeThird1 = '12:02'
const staffDialog1 = [
  {
    'from': 'app',
    'text': 'Приветствую. Опишите суть вопроса.',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date1} ${timeFirst1}`,
    'delay': shortTiming
  },
  {
    'from': 'user',
    'text': 'нужна инструкция по знп',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date1} ${timeSecond1}`,
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'Вот список найденных по данному запросу документов',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date1} ${timeSecond1}`,
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'Любой из документов доступен по ссылке:',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': [
      'Инструкция по согласованию ЗНП',
      'Инструкция по формированию ЗНП',
      'Формирование исходящих платёжных документов',
      'Регистрация заявки на платёж',
      '[+] Просмотреть раздел',
      '[=] Просмотреть все найденные',
      '[_] Начать поиск'
    ],
    'time': `${date1} ${timeSecond1}`,
    'delay': mediumTiming
  },
  {
    'from': 'user',
    'text': [0],
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date1} ${timeSecond1}`,
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'Сделайте клик на ссылке для получения документа',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date1} ${timeSecond1}`,
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': '<span class="blueText">Инструкция по согласованию ЗНП</span>',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date1} ${timeSecond1}`,
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'Продолжить поиск?',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': [
      'Да, ввод нового поискового запроса',
      'Нет, завершаем диалог',
      '[^] Возврат к предыдущему списку '
    ],
    'time': `${date1} ${timeSecond1}`,
    'delay': mediumTiming
  },
  {
    'from': 'user',
    'text': [1],
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date1} ${timeThird1}`,
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'Благодарим за обращение',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date1} ${timeThird1}`,
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'Завершаем сессию',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date1} ${timeThird1}`,
    'delay': mediumTiming
  },
]



const staffRedPhoneArgs1 = {
  idElement: 'staffRPtriggerElement1',
  idWebAnimToCreateTransformer: 'staffRedWebTriggerElement1',
  type: 0,
  dateChatingInHeader: date1,
  headingChat: 'bot',
  dateTime: `${date1} ${time1}`,
  clock: time1,
  dialogs: staffDialog1
}
const staffRedWebArgs1 = {
  idElement: staffRedPhoneArgs1.idWebAnimToCreateTransformer,
  idWebAnimToCreateTransformer: staffRedPhoneArgs1.idElement,
  type: staffRedPhoneArgs1.type,
  dateChatingInHeader: staffRedPhoneArgs1.dateChatingInHeader,
  headingChat: staffRedPhoneArgs1.headingChat,
  dateTime: staffRedPhoneArgs1.dateTime,
  clock: staffRedPhoneArgs1.clock,
  dialogs: staffRedPhoneArgs1.dialogs
}

// квалификационные анкеты, причины отклонения
const date2 = '8 апреля 2021'
const timeFirst2 = '16:37'
const staffDialog2 = [
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
]

const staffRedPhoneArgs2 = {
  idElement: 'staffRPtriggerElement2',
  idWebAnimToCreateTransformer: 'staffRedWebTriggerElement2',
  type: 0,
  dateChatingInHeader: date2,
  headingChat: 'bot',
  dateTime: `${date2} ${time2}`,
  clock: time2,
  dialogs: staffDialog2
}
const staffRedWebArgs2 = {
  idElement: staffRedPhoneArgs2.idWebAnimToCreateTransformer,
  idWebAnimToCreateTransformer: staffRedPhoneArgs2.idElement,
  type: staffRedPhoneArgs2.type,
  dateChatingInHeader: staffRedPhoneArgs2.dateChatingInHeader,
  headingChat: staffRedPhoneArgs2.headingChat,
  dateTime: staffRedPhoneArgs2.dateTime,
  clock: staffRedPhoneArgs2.clock,
  dialogs: staffRedPhoneArgs2.dialogs
}

// работа в личном кабинете поставщика
const date3 = '13 апреля 2021'
const timeFirst3 = '16:26'
const staffDialog3 = [
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
]

const staffRedPhoneArgs3 = {
  idElement: 'staffRPtriggerElement3',
  idWebAnimToCreateTransformer: 'staffRedWebTriggerElement3',
  type: 0,
  dateChatingInHeader: date3,
  headingChat: 'bot',
  dateTime: `${date3} ${time3}`,
  clock: time3,
  dialogs: staffDialog3
}
const staffRedWebArgs3 = {
  idElement: staffRedPhoneArgs3.idWebAnimToCreateTransformer,
  idWebAnimToCreateTransformer: staffRedPhoneArgs3.idElement,
  type: staffRedPhoneArgs3.type,
  dateChatingInHeader: staffRedPhoneArgs3.dateChatingInHeader,
  headingChat: staffRedPhoneArgs3.headingChat,
  dateTime: staffRedPhoneArgs3.dateTime,
  clock: staffRedPhoneArgs3.clock,
  dialogs: staffRedPhoneArgs3.dialogs
}

// технические проблемы
const date4 = '21 апреля 2021'
const timeFirst4 = '16:35'
const timeSecond4 = '16:36'
const staffDialog4 = [
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
]

const staffRedPhoneArgs4 = {
  idElement: 'staffRPtriggerElement4',
  idWebAnimToCreateTransformer: 'staffRedWebTriggerElement4',
  type: 0,
  dateChatingInHeader: date4,
  headingChat: 'bot',
  dateTime: `${date4} ${time4}`,
  clock: time4,
  dialogs: staffDialog4
}
const staffRedWebArgs4 = {
  idElement: staffRedPhoneArgs4.idWebAnimToCreateTransformer,
  idWebAnimToCreateTransformer: staffRedPhoneArgs4.idElement,
  type: staffRedPhoneArgs4.type,
  dateChatingInHeader: staffRedPhoneArgs4.dateChatingInHeader,
  headingChat: staffRedPhoneArgs4.headingChat,
  dateTime: staffRedPhoneArgs4.dateTime,
  clock: staffRedPhoneArgs4.clock,
  dialogs: staffRedPhoneArgs4.dialogs
}

// статус квалификации
const date5 = '23 апреля 2021'
const timeFirst5 = '8:59'
const staffDialog5 = [
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
]

const staffRedPhoneArgs5 = {
  idElement: 'staffRPtriggerElement5',
  idWebAnimToCreateTransformer: 'staffRedWebTriggerElement5',
  type: 0,
  dateChatingInHeader: date5,
  headingChat: 'bot',
  dateTime: `${date5} ${time5}`,
  clock: time5,
  dialogs: staffDialog5
}
const staffRedWebArgs5 = {
  idElement: staffRedPhoneArgs5.idWebAnimToCreateTransformer,
  idWebAnimToCreateTransformer: staffRedPhoneArgs5.idElement,
  type: staffRedPhoneArgs5.type,
  dateChatingInHeader: staffRedPhoneArgs5.dateChatingInHeader,
  headingChat: staffRedPhoneArgs5.headingChat,
  dateTime: staffRedPhoneArgs5.dateTime,
  clock: staffRedPhoneArgs5.clock,
  dialogs: staffRedPhoneArgs5.dialogs
}

// статус платежа
const date6 = '29 апреля 2021'
const timeFirst6 = '6:50'
const staffDialog6 = [
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
]

const staffRedPhoneArgs6 = {
  idElement: 'staffRPtriggerElement6',
  idWebAnimToCreateTransformer: 'staffRedWebTriggerElement6',
  type: 0,
  dateChatingInHeader: date6,
  headingChat: 'bot',
  dateTime: `${date6} ${time6}`,
  clock: time6,
  dialogs: staffDialog6
}
const staffRedWebArgs6 = {
  idElement: staffRedPhoneArgs6.idWebAnimToCreateTransformer,
  idWebAnimToCreateTransformer: staffRedPhoneArgs6.idElement,
  type: staffRedPhoneArgs6.type,
  dateChatingInHeader: staffRedPhoneArgs6.dateChatingInHeader,
  headingChat: staffRedPhoneArgs6.headingChat,
  dateTime: staffRedPhoneArgs6.dateTime,
  clock: staffRedPhoneArgs6.clock,
  dialogs: staffRedPhoneArgs6.dialogs
}


ready(() => {
  // mob
  new RedPhoneAnimation(staffRedPhoneArgs1)
  new RedPhoneAnimation(staffRedPhoneArgs2)
  new RedPhoneAnimation(staffRedPhoneArgs3)
  new RedPhoneAnimation(staffRedPhoneArgs4)
  new RedPhoneAnimation(staffRedPhoneArgs5)
  new RedPhoneAnimation(staffRedPhoneArgs6)
  new RedPhoneAnimation(staffRedPhoneArgs7)
  // web
  new RedWebAnimation(staffRedWebArgs1)
  new RedWebAnimation(staffRedWebArgs2)
  new RedWebAnimation(staffRedWebArgs3)
  new RedWebAnimation(staffRedWebArgs4)
  new RedWebAnimation(staffRedWebArgs5)
  new RedWebAnimation(staffRedWebArgs6)
  new RedWebAnimation(staffRedWebArgs7)
})