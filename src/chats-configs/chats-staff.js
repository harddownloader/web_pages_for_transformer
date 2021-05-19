// timing
const shortTiming = 1000
const mediumTiming = 3300
const longTiming = 5000

// найти инструкцию, долкумент
const date1 = '5 апреля 2021'
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
  dateTime: `${date1} ${timeFirst1}`,
  clock: timeFirst1,
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

// узнать статус заявки ОЗМ
const date2 = '8 апреля 2021'
const timeFirst2 = '11:41'
const timeSecond2 = '11:42'
const staffDialog2 = [
  {
    'from': 'app',
    'text': 'Приветствую! Опишите суть вопроса',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date2} ${timeFirst2}`,
    'delay': shortTiming
  },
  {
    'from': 'user',
    'text': 'статус  заявки',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date2} ${timeFirst2}`,
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'Укажите интересующую Вас тему:',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': [
      'Статус выполнения потребности на закупку',
      'Проверить статус заявки на создание ОЗМ'
    ],
    'time': `${date2} ${timeFirst2}`,
    'delay': mediumTiming
  },
  {
    'from': 'user',
    'text': [1],
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date2} ${timeFirst2}`,
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'Введите номер заявки на создание ОЗМ',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date2} ${timeFirst2}`,
    'delay': mediumTiming
  },
  {
    'from': 'user',
    'text': '678250',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date2} ${timeFirst2}`,
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'Статус заявки: Материал создан<br>Текущий обработчик заявки: Михайлов Станислав<br>Контактные данные обработчика заявки: тел. +7(495) 131-13-13, эл.адрес mihaylov_stas@kub.ru',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date2} ${timeFirst2}`,
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'Есть ли у Вас ещё вопросы по заявке № 678250?',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': true,
    'time': `${date2} ${timeFirst2}`,
    'delay': mediumTiming
  },
  {
    'from': 'user',
    'text': 'Да',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date2} ${timeSecond2}`,
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'Укажите интересующий Вас вопрос по заявке № 678906',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': [
      'Как скорректировать заявку?',
      'Как ускорить создание ОЗМ?',
      'Когда будет создана ОЗМ?',
      'Нет вопросов по данной заявке'
    ],
    'time': `${date2} ${timeSecond2}`,
    'delay': mediumTiming
  },
  {
    'from': 'user',
    'text': [0],
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date2} ${timeSecond2}`,
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'Запрашиваемая заявка выполнена без возможности корректировки. При необходимости создайте новую заявку.<br><span class="blueText">Регламент ведения основной записи материала и инструкция по созданию заявки</span>',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date2} ${timeSecond2}`,
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'Еще вопросы по заявке № 678250?',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': true,
    'time': `${date2} ${timeSecond2}`,
    'delay': mediumTiming
  },
  {
    'from': 'user',
    'text': 'Нет',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date2} ${timeSecond2}`,
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'Благодарим за обращение',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date2} ${timeSecond2}`,
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'Завершаем сессию',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date2} ${timeSecond2}`,
    'delay': mediumTiming
  },
]

const staffRedPhoneArgs2 = {
  idElement: 'staffRPtriggerElement2',
  idWebAnimToCreateTransformer: 'staffRedWebTriggerElement2',
  type: 0,
  dateChatingInHeader: date2,
  headingChat: 'bot',
  dateTime: `${date2} ${timeFirst2}`,
  clock: timeFirst2,
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

// узнать статус заявки на потребность
const date3 = '13 апреля 2021'
const timeFirst3 = '12:05'
const timeSecond3 = '12:06'
const staffDialog3 = [
  {
    'from': 'app',
    'text': 'Приветствую. Опишите суть вопроса',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date3} ${timeFirst3}`,
    'delay': shortTiming
  },
  {
    'from': 'user',
    'text': 'статус потребности',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date3} ${timeFirst3}`,
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'Вам известен номер резервирования?',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': true,
    'time': `${date3} ${timeFirst3}`,
    'delay': mediumTiming
  },
  {
    'from': 'user',
    'text': 'Да',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date3} ${timeFirst3}`,
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'Укажите номер резервирования',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date3} ${timeFirst3}`,
    'delay': mediumTiming
  },
  {
    'from': 'user',
    'text': '29405644',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date3} ${timeFirst3}`,
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'Укажите интересующее Вас действие:',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': [
      'Получить статус по всем позициям в exel',
      'Получить статус по номеру позиции'
    ],
    'time': `${date3} ${timeFirst3}`,
    'delay': mediumTiming
  },
  {
    'from': 'user',
    'text': 'Получить статус по номеру позиции',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date3} ${timeFirst3}`,
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'укажите  позицию документа(ов) резервирования',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': [
      '820005 Электродвигатель ELMASH 239',
      '9004 Кабель КГ 4х1.5',
      '9007 Кабель КГ 4х16'
    ],
    'time': `${date3} ${timeFirst3}`,
    'delay': mediumTiming
  },
  {
    'from': 'user',
    'text': [0],
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date3} ${timeFirst3}`,
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'Укажите источник информации:',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': [
      'Настоящий статус потребности (время запроса до 3 мин)',
      'Статус потребности на 8.00 текущего дня (время запроса до 30 сек)'
    ],
    'time': `${date3} ${timeFirst3}`,
    'delay': mediumTiming
  },
  {
    'from': 'user',
    'text': [1],
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date3} ${timeFirst3}`,
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 
      'По резервированию 29400044<br>' +
      'Материал 820005' +
      'Создан заказ на поставку 4500000060. ' +
      'К сожалению, на текущий момент поставщик срывает поставку, запланированную на 15.04.2021. ' +
      'Для уточнения актуальной информации по ожидаемым срокам поставки Вам необходимо обратиться к создателю заказа Юлия Симонова',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date3} ${timeFirst3}`,
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'Выберите нужное действие:',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': [
      'Еще вопрос по данному резервированию',
      'Информация по другому номеру резервирования',
      'Завершение диалога'
    ],
    'time': `${date3} ${timeSecond3}`,
    'delay': mediumTiming
  },
  {
    'from': 'user',
    'text': [2],
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date3} ${timeSecond3}`,
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'Благодарим за обращение',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date3} ${timeSecond3}`,
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'Завершаем сессию',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date3} ${timeSecond3}`,
    'delay': mediumTiming
  },
]

const staffRedPhoneArgs3 = {
  idElement: 'staffRPtriggerElement3',
  idWebAnimToCreateTransformer: 'staffRedWebTriggerElement3',
  type: 0,
  dateChatingInHeader: date3,
  headingChat: 'bot',
  dateTime: `${date3} ${timeFirst3}`,
  clock: timeFirst3,
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

// скорректировать лимиты платежей
const date4 = '21 апреля 2021'
const timeFirst4 = '12:33'
const timeSecond4 = '12:34'
const staffDialog4 = [
  {
    'from': 'app',
    'text': 'Приветствую. Опишите суть вопроса.',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date4} ${timeFirst4}`,
    'delay': shortTiming
  },
  {
    'from': 'user',
    'text': 'лимиты в проектах',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date4} ${timeFirst4}`,
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'Укажите номер проекта (СПП-элемент верхнего уровня)',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date4} ${timeFirst4}`,
    'delay': mediumTiming
  },
  {
    'from': 'user',
    'text': '12-1036',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date4} ${timeFirst4}`,
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'Укажите тему возможного запроса',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': [
      'Ошибка при операции ввода лимита',
      'Установить лимиты версии 80, 85 для проектов',
      'Отключить лимиты Р1, Р2, G1, G2.',
      'Загрузка лимитов'
    ],
    'time': `${date4} ${timeFirst4}`,
    'delay': mediumTiming
  },
  {
    'from': 'user',
    'text': [0],
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date4} ${timeFirst4}`,
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'Уточните, пожалуйста, запрос',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': [
      'Превышение лимита ( Р1, Р2, G1, G2) при деблокировании СГ',
      'Консультации по вводу лимитов на СПП',
      'Отключить лимиты Р1, Р2, G1, G2'
    ],
    'time': `${date4} ${timeFirst4}`,
    'delay': mediumTiming
  },
  {
    'from': 'user',
    'text': [0],
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date4} ${timeFirst4}`,
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'Уточните, пожалуйста, запрос',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': [
      'Превышение лимита ( Р1, Р2, G1, G2) при деблокировании СГ',
      'Консультации по вводу лимитов на СПП',
      'Отключить лимиты Р1, Р2, G1, G2'
    ],
    'time': `${date4} ${timeFirst4}`,
    'delay': mediumTiming
  },
  {
    'from': 'user',
    'text': [0],
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date4} ${timeFirst4}`,
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'По данному запросу найден документ: "Памятка по вводу и просмотру лимитов инвестиционной деятельности"  Для корректировки лимитов обратитесь к ответственным, уполномоченным выполнять такие операции: Иванова Мария, Петрова Авдотья',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date4} ${timeFirst4}`,
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'Обращение в службу ИТ поддержки под номером 7100001629 со статусом Предложение по решению создано автоматически.',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date4} ${timeFirst4}`,
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'Нужна информация по другому номеру проекта?',
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
    'text': 'Благодарим за обращение ',
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

const staffRedPhoneArgs4 = {
  idElement: 'staffRPtriggerElement4',
  idWebAnimToCreateTransformer: 'staffRedWebTriggerElement4',
  type: 0,
  dateChatingInHeader: date4,
  headingChat: 'bot',
  dateTime: `${date4} ${timeFirst4}`,
  clock: timeFirst4,
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

// исправить ошибки при вводе заявки на платеж или счет-фактуры
const date5 = '23 апреля 2021'
const timeFirst5 = '13:25'
const timeSecond5 = '13:26'
const staffDialog5 = [
  {
    'from': 'app',
    'text': 'Приветствую. Опишите суть вопроса',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date5} ${timeFirst5}`,
    'delay': shortTiming
  },
  {
    'from': 'user',
    'text': 'заявка на платеж',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date5} ${timeFirst5}`,
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'Укажите номер заказа на поставку',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date5} ${timeFirst5}`,
    'delay': mediumTiming
  },
  {
    'from': 'user',
    'text': '4500359308',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date5} ${timeFirst5}`,
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'Сумма резервирования средств меньше суммы, указанной в заказе на поставку',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date5} ${timeFirst5}`,
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'Обновляем резервирование средств из заказа на поставку?',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': true,
    'time': `${date5} ${timeFirst5}`,
    'delay': mediumTiming
  },
  {
    'from': 'user',
    'text': 'Да',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date5} ${timeFirst5}`,
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'Проблема решена, сумма обновлена автоматически. Приступайте к формированию заявки на платеж',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date5} ${timeFirst5}`,
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'Обращение в службу ИТ поддержки под номером 7100001642 со статусом Предложение по решению создано автоматически.',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date5} ${timeFirst5}`,
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'Смотрим по другому заказу на поставку?',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': true,
    'time': `${date5} ${timeFirst5}`,
    'delay': mediumTiming
  },
  {
    'from': 'user',
    'text': 'Нет',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date5} ${timeSecond5}`,
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'Благодарим за обращение',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date5} ${timeSecond5}`,
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'Завершаем сессию',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date5} ${timeSecond5}`,
    'delay': mediumTiming
  },
]

const staffRedPhoneArgs5 = {
  idElement: 'staffRPtriggerElement5',
  idWebAnimToCreateTransformer: 'staffRedWebTriggerElement5',
  type: 0,
  dateChatingInHeader: date5,
  headingChat: 'bot',
  dateTime: `${date5} ${timeFirst5}`,
  clock: timeFirst5,
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

// разобраться с проблемой входа в SAP системы
const date6 = '29 апреля 2021'
const timeFirst6 = '15:00'
const staffDialog6 = [
  {
    'from': 'app',
    'text': 'Приветствую. Опишите суть вопроса',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date6} ${timeFirst6}`,
    'delay': shortTiming
  },
  {
    'from': 'user',
    'text': 'не помню пароль',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date6} ${timeFirst6}`,
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'Выберите платформу:',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': [
      'SAP ERP',
      'SAP SRM',
      'SAP Solman'
    ],
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
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'Хотите сбросить пароль?',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': true,
    'time': `${date6} ${timeFirst6}`,
    'delay': mediumTiming
  },
  {
    'from': 'user',
    'text': 'Да',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date6} ${timeFirst6}`,
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'Ваш логин: LP-A-wesd3<br>Ваш новый пароль: S(X9{lVbVr',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date6} ${timeFirst6}`,
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'Завершаем сессию',
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
  dateTime: `${date6} ${timeFirst6}`,
  clock: timeFirst6,
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

// узнайте статус образения в ServiceDesk
const date7 = '12 апреля 2021'
const timeFirst7 = '15:36'
const staffDialog7 = [
  {
    'from': 'app',
    'text': 'Приветствую! Опишите проблему или вопрос',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date7} ${timeFirst7}`,
    'delay': shortTiming
  },
  {
    'from': 'user',
    'text': 'как с моим инцидентом',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date7} ${timeFirst7}`,
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'Введите номер обращения',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date7} ${timeFirst7}`,
    'delay': mediumTiming
  },
  {
    'from': 'user',
    'text': '1300000655',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date7} ${timeFirst7}`,
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'По Вашему обращению <b>1300000655</b><br>' + 
      'Статус <b>Новое</b><br>' +
      'Ответственный <b>Парамонова Лариса</b><br>' +
      'Плановая/фактическая дата решения <b>13.03.2021</b><br>' +
      '<br>' +
      'Создан ЗНИ <b>1800000045</b><br>' +
      'Статус ЗНИ <b>Отклонено</b><br>' + 
      'Ответственный за ЗНИ<br>' + 
      'Плановая/фактическая дата решения ЗНИ <b>14.03.2021</b><br>' +
      '<br>' +
      'Создан ЗНИ <b>2200000130</b><br>' +
      'Статус ЗНИ <b>Новое</b><br>' +
      'Ответственный за ЗНИ <b>Петров Дмитрий</b><br>' +
      'Плановая/фактическая дата решения ЗНИ <b>15.03.2021</b><br>' +
      '<br>' +
      'Создана проблема <b>2300000005</b><br>'+
      'Статус проблемы <b>Подтверждено</b><br>' +
      'Ответственный за решение проблемы<br>' +
      'Статус связанного обращения <b>Предложение по решению</b><br>' +
      'Ответственный<br>' +
      'Плановая/фактическая дата решения <b>17.03.2021</b><br>',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date7} ${timeFirst7}`,
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'Проверим по другому номеру обращения?',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': true,
    'time': `${date7} ${timeFirst7}`,
    'delay': longTiming
  },
  {
    'from': 'user',
    'text': 'Нет',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date7} ${timeFirst7}`,
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'Благодарим за обращение',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date7} ${timeFirst7}`,
    'delay': mediumTiming
  },
  {
    'from': 'app',
    'text': 'Завершаем сессию',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': `${date7} ${timeFirst7}`,
    'delay': mediumTiming
  },
]

const staffRedPhoneArgs7 = {
  idElement: 'staffRPtriggerElement7',
  idWebAnimToCreateTransformer: 'staffRedWebTriggerElement7',
  type: 0,
  dateChatingInHeader: date7,
  headingChat: 'bot',
  dateTime: `${date7} ${timeFirst7}`,
  clock: timeFirst7,
  dialogs: staffDialog7
}
const staffRedWebArgs7 = {
  idElement: staffRedPhoneArgs7.idWebAnimToCreateTransformer,
  idWebAnimToCreateTransformer: staffRedPhoneArgs7.idElement,
  type: staffRedPhoneArgs7.type,
  dateChatingInHeader: staffRedPhoneArgs7.dateChatingInHeader,
  headingChat: staffRedPhoneArgs7.headingChat,
  dateTime: staffRedPhoneArgs7.dateTime,
  clock: staffRedPhoneArgs7.clock,
  dialogs: staffRedPhoneArgs7.dialogs
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