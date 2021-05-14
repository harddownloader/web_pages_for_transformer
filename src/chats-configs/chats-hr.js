// red phone
//- расчетный лист
const hrDialog1 = [
  {
    'from': 'app',
    'text': 'Приветствую. Опиши суть вопроса.',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '20 апреля 2021 12:41',
    'delay': 1000
  },
  {
    'from': 'user',
    'text': 'дай мою табулограмму',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '20 апреля 2021 12:41', 
    'delay': 3300
  },
  {
    'from': 'app',
    'text': 'Отобразить расчетный лист (табулограмму)?',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': true,
    'time': '20 апреля 2021 12:41', 
    'delay': 5000
  },
  {
    'from': 'user',
    'text': 'Да',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '20 апреля 2021 12:41', 
    'delay': 3300
  },
  {
    'from': 'app',
    'text': 'Иванов Петр Иванович',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': 'table',
    'time': '20 апреля 2021 12:42', 
    'delay': 3300
  },
  {
    'from': 'app',
    'text': 'Иванов Петр Иванович',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': 'table2',
    'time': '20 апреля 2021 12:42', 
    'delay': 3300
  },
  {
    'from': 'app',
    'text': 'Есть еще вопросы?',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': true,
    'time': '20 апреля 2021 12:42', 
    'delay': 3300
  },
  {
    'from': 'user',
    'text': 'Нет',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '20 апреля 2021 12:42', 
    'delay': 3300
  },
  {
    'from': 'app',
    'text': 'Благодарю за обращение',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '20 апреля 2021 12:42', 
    'delay': 3300
  }
]

const hrRedPhoneArgs1 = {
  idElement: 'hrRPtriggerElement1',
  idWebAnimToCreateTransformer: 'hrRedWebTriggerElement1',
  type: 0,
  dateChatingInHeader: '20 апреля 2021',
  headingChat: 'bot',
  dateTime: '20 апреля 2021 12:41',
  clock: '12:41',
  dialogs: hrDialog1
}


//- какой у него остаток отпуска
const hrDialog2 = [
  {
    'from': 'app',
    'text': 'Приветствую. Опиши суть вопроса.',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '22 апреля 2021 13:54', 
    'delay': 1000
  },
  {
    'from': 'user',
    'text': 'какой у меня остаток отпуска',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '22 апреля 2021 13:54', 
    'delay': 3300
  },
  {
    'from': 'app',
    'text': 'Нужна информация по начислениям?',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': true,
    'time': '22 апреля 2021 13:54', 
    'delay': 5000
  },
  {
    'from': 'user',
    'text': 'Да',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '22 апреля 2021 13:54', 
    'delay': 5000
  },
  {
    'from': 'app',
    'text': 'Показать инфо по отпуску?',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': true,
    'time': '22 апреля 2021 13:54', 
    'delay': 5000
  },
  {
    'from': 'user',
    'text': 'Да',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '22 апреля 2021 13:54', 
    'delay': 5000
  },
  {
    'from': 'app',
    'text': 'Таблица',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': 'table3',
    'time': '22 апреля 2021 13:54', 
    'delay': 3300
  },
  {
    'from': 'app',
    'text': 'Есть еще вопросы?',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': true,
    'time': '22 апреля 2021 13:54', 
    'delay': 3300
  },
  {
    'from': 'user',
    'text': 'Нет',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '22 апреля 2021 13:54', 
    'delay': 3300
  },
  {
    'from': 'app',
    'text': 'Благодарю за обращение<br>Завершаем сессию',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '22 апреля 2021 13:54', 
    'delay': 3300
  }
]

const hrRedPhoneArgs2 = {
  idElement: 'hrRPtriggerElement2',
  idWebAnimToCreateTransformer: 'hrRedWebTriggerElement2',
  type: 0,
  dateChatingInHeader: '22 апреля 2021',
  headingChat: 'bot',
  dateTime: '22 апреля 2021 13:54',
  clock: '13:54',
  dialogs: hrDialog2
}


// web
//- расчетный лист
const hrRedWebArgs1 = {
  idElement: 'hrRedWebTriggerElement1',
  idWebAnimToCreateTransformer: 'hrRPtriggerElement1',
  type: 0,
  dateChatingInHeader: '20 апреля 2021',
  headingChat: 'расчетный лист',
  dateTime: '20 апреля 2021 12:41',
  clock: '12:41',
  dialogs: hrDialog1
}

//- какой у него остаток отпуска
const hrRedWebArgs2 = {
  idElement: 'hrRedWebTriggerElement2',
  idWebAnimToCreateTransformer: 'hrRPtriggerElement2',
  type: 0,
  dateChatingInHeader: '22 апреля 2021',
  headingChat: 'остаток отпуска',
  dateTime: '22 апреля 2021 13:54',
  clock: '13:54',
  dialogs: hrDialog2
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
  new RedPhoneAnimation(hrRedPhoneArgs1)
  new RedPhoneAnimation(hrRedPhoneArgs2)
  // web
  new RedWebAnimation(hrRedWebArgs1)
  new RedWebAnimation(hrRedWebArgs2)
})