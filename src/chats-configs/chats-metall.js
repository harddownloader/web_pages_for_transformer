// red phone
// Продажа металлопродукции - Продажи_1_смарт
const metallDialogs1 = [
  {
    'from': 'app',
    'text': 'Здравствуйте, я цифровой помощник.<br>Могу предоставить информацию о нашей продукции, наличии, ценах, условиях поставки.<br>Что Вас интересует?',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '22 сентября 2021 8:20', 
    'delay': 1000
  },
  {
    'from': 'user',
    'text': 'Арматуру в прутках производите? Какая цена?',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '22 сентября 2021 8:20', 
    'delay': 3300
  },
  {
    'from': 'app',
    'text': 'Я так понял Вам необходима позиция Арматура в прутках.<br>Я могу помочь искать по свойствам:<br>Номер профиля, Длина, Стандарт.<br>Уточните, пожалуйста, что-нибудь из указанных свойств продукции.',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '22 сентября 2021 8:20', 
    'delay': 5000
  },
  {
    'from': 'user',
    'text': 'Мне бы профиль 12',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '22 сентября 2021 8:21',
    'delay': 5000
  },
  {
    'from': 'app',
    'text': 'Арматура в прутках / профиль 12.<br>У нас в каталоге есть 18 подходящих позиций.<br>Уточните ещё свойства или выберите Отобразить все',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': [
      'Класс A500C',
      'Класс A800',
      'Отобразить все'
    ],
    'time': '22 сентября 2021 8:21',
    'delay': 5000
  },
  {
    'from': 'user',
    'text': [0],
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '22 сентября 2021 8:21', 
    'delay': 5000
  },
  {
    'from': 'app',
    'text': 'Арматура в прутках / профиль 12 / класс А500С.<br>Выберите продукцию из списка найденных:',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': [
      'Арматура в прутках / профиль 12 / класс A500C / ГОСТ 34028-2016',
      'Ни одна из найденных позиций',
      'Начать поиск продукции заново'
    ],
    'time': '22 сентября 2021 8:21', 
    'delay': 3300
  },
  {
    'from': 'user',
    'text': [0],
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '22 сентября 2021 8:21',
    'delay': 3300
  },
  {
    'from': 'app',
    'text': 'Итак, выбрана позиция каталога –<br>Арматура в прутках / профиль 12 / класс A500C / ГОСТ 34028-2016<br>Мы производим такую продукцию, отгрузка может быть осуществлена в нескольких регионах.<br>Выберите подходящий склад:',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': [
      'НЛМК-Одинцово',
      'НЛМК-Калуга',
      'НЛМК-Екатеринбург',
      'Металлобаза-Липецк',
    ],
    'time': '22 сентября 2021 8:21', 
    'delay': 3300
  },
  {
    'from': 'user',
    'text': [2],
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '22 сентября 2021 8:21', 
    'delay': 3300
  },
  {
    'from': 'app',
    'text': 'Благодарю, я готов ответить на Ваши вопросы относительно выбранной продукции.<br>Ваш вопрос был о стоимости.<br>При условии самовывоза со склада НЛМК-Екатеринбург стоимость продукции Арматура в прутках / профиль 12 / класс A500C / ГОСТ 34028-2016 составляет 37200 руб/т.<br>Запас на выбранном складе – достаточный.<br>Остались ли у Вас вопросы по данной продукции?',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': true,
    'time': '22 сентября 2021 8:21', 
    'delay': 3300
  },
  {
    'from': 'user',
    'text': 'Да',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '22 сентября 2021 8:21', 
    'delay': 3300
  },
  {
    'from': 'app',
    'text': 'Что Вас ещё интересует по продукции Арматура в прутках / профиль 12 / класс A500C / ГОСТ 34028-2016?',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '22 сентября 2021 8:21', 
    'delay': 3300
  },
  {
    'from': 'user',
    'text': 'Скидки бывают?',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '22 сентября 2021 8:21', 
    'delay': 3300
  },
  {
    'from': 'app',
    'text': 'Да, скидка может быть предоставлена на определенных условиях _______ (объём, т.п.).<br>Подробнее смотрите на странице нашего сайта <span class="blueText">nlmk.shop/rebate</span>.<br>Остались ли у Вас вопросы по данной продукции?',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': true,
    'time': '22 сентября 2021 8:21', 
    'delay': 3300
  },
  {
    'from': 'user',
    'text': 'Да',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '22 сентября 2021 8:21', 
    'delay': 3300
  },
  {
    'from': 'app',
    'text': 'Что я могу ещё Вам подсказать по продукции Арматура в прутках / профиль 12 / класс A500C / ГОСТ 34028-2016?',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '22 сентября 2021 8:21', 
    'delay': 3300
  },
  {
    'from': 'user',
    'text': 'Что с упаковкой?',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '22 сентября 2021 8:21', 
    'delay': 3300
  },
  {
    'from': 'app',
    'text': 'Упаковка и маркировка продукции Арматура в прутках<br>- обвязка катанкой;<br>- транспортировочный хомут из катанки;<br>- бирка.<br><br>Подробнее об упаковке см. здесь:<br>Упаковка проката арматурного №2.pdf<br>Остались ли у Вас вопросы по данной продукции (Арматура в прутках / профиль 12 / класс A500C / ГОСТ 34028-2016)?',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': true,
    'time': '22 сентября 2021 8:21', 
    'delay': 3300
  },
  {
    'from': 'user',
    'text': 'Нет',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '22 сентября 2021 8:21', 
    'delay': 3300
  },
  {
    'from': 'app',
    'text': 'Могу ли ещё чем-то быть Вам полезен?',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': [
      'Да, по другой продукции',
      'Да, прочие вопросы (чат с оператором)',
      'Нет, спасибо'
    ],
    'time': '22 сентября 2021 8:21', 
    'delay': 3300
  },
  {
    'from': 'user',
    'text': [2],
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '22 сентября 2021 8:21', 
    'delay': 3300
  },
  {
    'from': 'app',
    'text': 'Благодарю за обращение!<br>Оформить заказ онлайн можно на нашем <span class="blueText">сайте</span>.',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '22 сентября 2021 8:21', 
    'delay': 3300
  },
]

const metallRedPhoneArgs1 = {
  idElement: 'metallRPtriggerElement1',
  idWebAnimToCreateTransformer: 'metallRedWebTriggerElement1',
  type: 0,
  dateChatingInHeader: '22 сентября 2021',
  headingChat: 'bot',
  dateTime: '22 сентября 2021 8:20',
  clock: '8:20',
  dialogs: metallDialogs1
}

// Продажа металлопродукции - Продажи_2_смарт
const metallDialogs2 = [
  {
    'from': 'app',
    'text': 'Здравствуйте, я цифровой помощник. Могу предоставить информацию о наших товарах, наличии, ценах, условиях поставки.<br>Что именно интересует?',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '21 сентября 2021 8:20', 
    'delay': 1000
  },
  {
    'from': 'user',
    'text': 'Арматуру в бунтах производите? Какая цена?',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '21 сентября 2021 8:20', 
    'delay': 3300
  },
  {
    'from': 'app',
    'text': 'Я так понял Вам необходим товар Арматура в бунтах.<br>Я могу помочь искать по свойствам: Вид профиля, Номер профиля, Стандарт.<br>Какая именно Арматура нужна?',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '21 сентября 2021 8:20', 
    'delay': 5000
  },
  {
    'from': 'user',
    'text': 'Мне бы профиль 10',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '21 сентября 2021 8:20', 
    'delay': 5000
  },
  {
    'from': 'app',
    'text': 'У нас в каталоге есть 13 позиций похожих товаров.<br>Уточните ещё свойства или напишите «покажи» для отображения списка найденных',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '21 сентября 2021 8:20', 
    'delay': 5000
  },
  {
    'from': 'user',
    'text': 'Нужен класс A240',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '21 сентября 2021 8:20', 
    'delay': 5000
  },
  {
    'from': 'app',
    'text': 'В каталоге найдено 4 позиции таких товаров. <br>Уточните ещё свойства или напишите «покажи» для отображения списка найденных',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '21 сентября 2021 8:20', 
    'delay': 3300
  },
  {
    'from': 'user',
    'text': 'покажи',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '21 сентября 2021 8:20', 
    'delay': 3300
  },
  {
    'from': 'app',
    'text': 'Выберите интересующий товар из списка найденных в каталоге позиций:',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': [
      'Арматура в бунтах / профиль 10 / Класс A240 / ГОСТ 1',
      'Арматура в бунтах / профиль 10 / Класс A240 / ГОСТ 2',
      'Арматура в бунтах / профиль 10 / Класс A240 / ГОСТ 3',
      'Ни одна из найденных позиций',
      'Начать поиск товара заново'
    ],
    'time': '21 сентября 2021 8:20', 
    'delay': 3300
  },
  {
    'from': 'user',
    'text': [1],
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '21 сентября 2021 8:20', 
    'delay': 3300
  },
  {
    'from': 'app',
    'text': 'Итак, выбрана позиция каталога Арматура в бунтах / профиль 10 / Класс A240 / ГОСТ 2<br>Мы производим такую продукцию, отгрузка может быть осуществлена в нескольких регионах. Выберите ближайший склад:',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': [
      'Киев',
      'Львов',
      'Ивано-Франковск'
    ],
    'time': '21 сентября 2021 8:20', 
    'delay': 3300
  },
  {
    'from': 'user',
    'text': [2],
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '21 сентября 2021 8:20', 
    'delay': 3300
  },
  {
    'from': 'app',
    'text': 'Благодарю, я готов ответить на Ваши вопросы относительно выбранного товара.<br>Ваш вопрос был о стоимости данного товара.<br>На складе в Ивано-Франковске стоимость товара Арматура в бунтах / профиль 10 / Класс A240 / ГОСТ 2 при условии самовывоза составляет 30 000 руб.<br>Остались ли у Вас вопросы по данному товару?',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': true,
    'time': '21 сентября 2021 8:20', 
    'delay': 3300
  },
  {
    'from': 'user',
    'text': 'Да',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '21 сентября 2021 8:20', 
    'delay': 3300
  },
  {
    'from': 'app',
    'text': 'Что Вас ещё интересует по товару Арматура в бунтах / профиль 10 / Класс A240 / ГОСТ 2?',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '21 сентября 2021 8:20', 
    'delay': 3300
  },
  {
    'from': 'user',
    'text': 'Скидки бывают?',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '21 сентября 2021 8:20', 
    'delay': 3300
  },
  {
    'from': 'app',
    'text': 'Да, скидка может быть предоставлена при следующих условиях от 9 тонн (объём, т.п.).<br>Подробнее смотрите на странице нашего <span class="blueText">сайта</span>.Остались ли у Вас вопросы по данному товару?',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': true,
    'time': '21 сентября 2021 8:20', 
    'delay': 3300
  },
  {
    'from': 'user',
    'text': 'Нет',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '21 сентября 2021 8:20', 
    'delay': 3300
  },
  {
    'from': 'app',
    'text': 'Могу ли ещё чем-то быть Вам полезен?',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': ['Да, есть ещё вопросы', 'Нет, благодарю'],
    'time': '21 сентября 2021 8:20', 
    'delay': 3300
  },
  {
    'from': 'user',
    'text': [1],
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '21 сентября 2021 8:20', 
    'delay': 3300
  },
  {
    'from': 'app',
    'text': 'Спасибо за обращение!<br>Всегда рад помочь. Заказ можно оформить онлайн на нашем <span class="blueText">сайте</span>.',
    'second_text': '',
    'descr': '',
    'icon': '',
    'options': false,
    'time': '21 сентября 2021 8:20', 
    'delay': 3300
  },
]

const metallRedPhoneArgs2 = {
  idElement: 'metallRPtriggerElement2',
  idWebAnimToCreateTransformer: 'metallRedWebTriggerElement2',
  type: 0,
  dateChatingInHeader: '21 сентября 2021',
  headingChat: 'bot',
  dateTime: '21 сентября 2021 8:20',
  clock: '8:20',
  dialogs: metallDialogs2
}


// Продажа металлопродукции - Продажи_1_смарт
const metallRedWebArgs1 = {
  idElement: 'metallRedWebTriggerElement1',
  idWebAnimToCreateTransformer: 'metallRPtriggerElement1',
  type: 0,
  dateChatingInHeader: '22 сентября 2021',
  headingChat: 'металлопродукция',
  dateTime: '22 сентября 2021 8:20',
  clock: '8:20',
  dialogs: metallDialogs1
}

// Продажа металлопродукции - Продажи_2_смарт
const metallRedWebArgs2 = {
  idElement: 'metallRedWebTriggerElement2',
  idWebAnimToCreateTransformer: 'metallRPtriggerElement2',
  type: 0,
  dateChatingInHeader: '21 сентября 2021',
  headingChat: 'металлопродукция',
  dateTime: '21 сентября 2021 8:20',
  clock: '8:20',
  dialogs: metallDialogs2
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
  new RedPhoneAnimation(metallRedPhoneArgs1)
  new RedPhoneAnimation(metallRedPhoneArgs2)
  // web
  new RedWebAnimation(metallRedWebArgs1)
  new RedWebAnimation(metallRedWebArgs2)
})