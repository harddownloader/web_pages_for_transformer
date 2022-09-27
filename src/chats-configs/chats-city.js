// red phone
//- Поиск и отображение данных по проектам городского бюджета
const cityDialog1 = [
  {
    'from': 'app',
    'text': 'Добрый день!<br>Готов предоставить информацию по направлениям:<br>1. Cтатус проблемы ЖКХ (водоснабжение, работа лифтов, отопление, электроснабжение)<br>2. Поиск и отображение статуса проектв городского бюджета',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '21 августа 2021 12:09',
    'delay': 1000
  },
  {
    'from': 'app',
    'text': 'Опишите проблему или вопрос в произвольной форме',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '21 августа 2021 12:09', 
    'delay': 5000
  },
  {
    'from': 'user',
    'text': 'проекты горбюджета',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '21 августа 2021 12:09', 
    'delay': 3300
  },
  {
    'from': 'app',
    'text': 'Вы в разделе "Проекты городского бюджета"<br>1. Выберите метод поиска проекта<br>2. Ответьте на уточняющие вопросы<br>3. Получите статус и информацию об искомом проекте',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '21 августа 2021 12:09', 
    'delay': 5000
  },
  {
    'from': 'app',
    'text': 'Поиск проектов по годам, уточните год:',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': ['2021', '2020', '2019', '2018', '2017'],
    'time': '21 августа 2021 12:09', 
    'delay': 3300
  },
  {
    'from': 'user',
    'text': [0],
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '21 августа 2021 12:09', 
    'delay': 3300
  },
  {
    'from': 'app',
    'text': 'Выберите метод поиска проекта',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': ['по номеру проекта', 'по карте', 'по категориям и статусам'],
    'time': '21 августа 2021 12:09', 
    'delay': 3300
  },
  {
    'from': 'user',
    'text': [0],
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '21 августа 2021 12:09', 
    'delay': 3300
  },
  {
    'from': 'app',
    'text': 'Введите номер проекта',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '21 августа 2021 12:09', 
    'delay': 3300
  },
  {
    'from': 'user',
    'text': '650',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '21 августа 2021 12:09', 
    'delay': 3300
  },
  {
    'from': 'app',
    'text': 'Данные по проекту: 650 <br>Название: Тротуары при выставочном центре "Гвоздика". Проектом предусмотрено обустройство тротуаров по улице Октябрьской ограничителями парковки. К сожалению, посетители выставочного центра, владельцы автомобилей, не придерживаются правил парковки и оставляют машины на тротуарах, пешеходной зоне и газонах, создают препятствия пешеходному движению, особенно пешеходам с детскими колясками, пожилым людям и инвалидам. <br>Проект Статус: На голосовании. <br>Категория: Дороги, транспорт <br>Бюджет: 200 000 руб. <br>Количество голосов: 24 <br>Руководитель проекта: Петрова Наталья Сергеевна.',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '21 августа 2021 12:09', 
    'delay': 3300
  },
  {
    'from': 'app',
    'text': 'Нужна информация по другому проекту?',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': true,
    'time': '21 августа 2021 12:09', 
    'delay': 5000
  },
  {
    'from': 'user',
    'text': 'Нет',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '21 августа 2021 12:09', 
    'delay': 3300
  },
  // {
  //   'from': 'app',
  //   'text': 'Есть еще вопросы?',
  //   'second_text': '',
  //   'descr': '',
  //   'icon': '',
  //   'options': true,
  //   'time': '21 августа 2021 12:09', 
  //   'delay': 3300
  // },
  // {
  //   'from': 'user',
  //   'text': 'Нет',
  //   'second_text': '',
  //   'descr': '',
  //   'icon': '',
  //   'options': false,
  //   'time': '21 августа 2021 12:09', 
  //   'delay': 3300
  // },
  // {
  //   'from': 'app',
  //   'text': 'Благодарим за обращение<br>Завершаем сессию',
  //   'second_text': '',
  //   'descr': '',
  //   'icon': '',
  //   'options': false,
  //   'time': '21 августа 2021 12:09', 
  //   'delay': 3300
  // }
]
const cityRedPhoneArgs1 = {
  idElement: 'cityRPtriggerElement1',
  idWebAnimToCreateTransformer: 'cityRedWebTriggerElement1',
  type: 0,
  dateChatingInHeader: '21 августа 2021',
  headingChat: 'bot',
  dateTime: '21 августа 2021 12:09',
  clock: '12:09',
  dialogs: cityDialog1
}

//- когда дадут горячую воду
const cityDialog2 = [
  {
    'from': 'app',
    'text': 'Добрый день!<br>Готов консультировать по вопросам:<br>1. Определение статуса проблемы ЖКХ (водоснабжение, работа лифтов, отопление, поставка электроэнергии)<br>2. Поиск и отображение статуса проекта Городского бюджета.',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '21 апреля 2021 11:25', 
    'delay': 1000
  },
  {
    'from': 'app',
    'text': 'Опиши проблему в произвольной форме',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '21 апреля 2021 11:25', 
    'delay': 3300
  },
  {
    'from': 'user',
    'text': 'когда дадут горячую воду?',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '21 апреля 2021 11:25',
    'delay': 3300
  },
  {
    'from': 'app',
    'text': 'Раздел ЖКХ:<br>1. Вопросы в произвольной форме.<br>2. Ответы на уточняющие вопросы.<br>3. Статус и плановые сроки решения проблемы.',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '21 апреля 2021 11:25', 
    'delay': 5000
  },
  {
    'from': 'app',
    'text': 'Название улицы',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '21 апреля 2021 11:25', 
    'delay': 3300
  },
  {
    'from': 'user',
    'text': 'Правды',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '21 апреля 2021 11:25', 
    'delay': 3300
  },
  {
    'from': 'app',
    'text': 'Указанная улица:<br>• проспект Правды',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '21 апреля 2021 11:25', 
    'delay': 3300
  },
  {
    'from': 'app',
    'text': 'Номер строения, дома?',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '21 апреля 2021 11:25', 
    'delay': 3300
  },
  {
    'from': 'user',
    'text': '68',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '21 апреля 2021 11:25', 
    'delay': 3300
  },
  {
    'from': 'app',
    'text': 'Какой из вариантов  по номеру "68"?',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': [
      '68', '68-A', '68-Б', '68-В'
    ],
    'time': '21 апреля 2021 11:25', 
    'delay': 3300
  },
  {
    'from': 'user',
    'text': [0],
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '21 апреля 2021 11:25', 
    'delay': 3300
  },
  {
    'from': 'app',
    'text': 'Номер заявки: 5619168<br>Тип проблемы: Отсутсвие водоснабжения (гор. вода) - Плановые работы на трубопроводе<br>Статус: просрочено <br>Объект: Трубопровод <br>На территории: Участок №4 <br>Исполнитель: КП Мостеплоэнерго <br>Плановое завшерение работ: 16.05.2021. <br>Описание проблемы: Отсутствует водосносабжение горячей воды в связи с плановыми работами на теплосети. ',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '21 апреля 2021 11:25', 
    'delay': 3300
  },
  {
    'from': 'app',
    'text': 'Проверить другой тип проблемы?',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': true,
    'time': '21 апреля 2021 11:25', 
    'delay': 5000
  },
  {
    'from': 'user',
    'text': 'Нет',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '21 апреля 2021 11:25', 
    'delay': 3300
  }
]
const cityRedPhoneArgs2 = {
  idElement: 'cityRPtriggerElement2',
  idWebAnimToCreateTransformer: 'cityRedWebTriggerElement2',
  type: 0,
  dateChatingInHeader: '21 апреля 2021',
  headingChat: 'bot',
  dateTime: '21 апреля 2021 11:25',
  clock: '11:25',
  dialogs: cityDialog2
}


// web
//- Поиск и отображение данных по проектам городского бюджета
const cityRedWebArgs1 = {
  idElement: 'cityRedWebTriggerElement1',
  idWebAnimToCreateTransformer: 'cityRPtriggerElement1',
  type: 0,
  dateChatingInHeader: '21 августа 2021',
  headingChat: 'проекты городского бюджета',
  dateTime: '21 августа 2021 12:09',
  clock: '12:09',
  dialogs: cityDialog1
}

//- когда дадут горячую воду
const cityRedWebArgs2 = {
  idElement: 'cityRedWebTriggerElement2',
  idWebAnimToCreateTransformer: 'cityRPtriggerElement2',
  type: 0,
  dateChatingInHeader: '21 апреля 2021',
  headingChat: 'подача воды',
  dateTime: '21 апреля 2021 11:25',
  clock: '11:25',
  dialogs: cityDialog2
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
  new RedPhoneAnimation(cityRedPhoneArgs1)
  new RedPhoneAnimation(cityRedPhoneArgs2)
  // web
  new RedWebAnimation(cityRedWebArgs1)
  new RedWebAnimation(cityRedWebArgs2)
})