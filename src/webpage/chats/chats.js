// готова ли страница
var ready = (callback) => {
    if (document.readyState != 'loading') callback()
    else document.addEventListener('DOMContentLoaded', callback)
  }

  const redWebArgs1 = {
    idElement: 'redWebTriggerElement1',
    type: 0,
    dateChatingInHeader: '1 июля 2021',
    headingChat: 'статус заявки',
    dateTime: '23 июня 2021 18:13',
    clock: '18:13',
    dialogs: [{
        'from': 'app',
        'text': 'Приветствую! Опишите суть вопроса',
        'second_text': '',
        'descr': '',
        'icon': '',
        'options': false,
        'time': '23 июня 2021 18:13',
        'delay': 1000
      },
      {
        'from': 'user',
        'text': 'статус  заявки',
        'second_text': '',
        'descr': '',
        'icon': '',
        'options': false,
        'time': '23 июня 2021 18:13',
        'delay': 3300
      },
      {
        'from': 'app',
        'text': 'Укажите интересующую Вас тему:',
        'second_text': '',
        'descr': '',
        'icon': '',
        'options': ['Статус выполнения потребности на закупку',
          'Проверить статус заявки на создание ОЗМ'
        ],
        'time': '23 июня 2021 18:13',
        'delay': 3300
      },
      {
        'from': 'user',
        'text': [1],
        'second_text': '',
        'descr': '',
        'icon': '',
        'options': false,
        'time': '23 июня 2021 18:13',
        'delay': 3300
      },
      {
        'from': 'app',
        'text': 'Введите номер заявки на создание ОЗМ',
        'second_text': '',
        'descr': '',
        'icon': '',
        'options': false,
        'time': '23 июня 2021 18:13',
        'delay': 3300
      },
      {
        'from': 'user',
        'text': '678250',
        'second_text': '',
        'descr': '',
        'icon': '',
        'options': false,
        'time': '23 июня 2021 18:13',
        'delay': 3300
      },
      {
        'from': 'app',
        'text': 'Статус заявки: Материал создан<br>Текущий обработчик заявки: Михайлов Станислав<br>Контактные данные обработчика заявки:<br>тел. +7(495) 131-13-13, <br>эл.адрес mihaylov_stas@kub.ru',
        'second_text': '',
        'descr': '',
        'icon': '',
        'options': false,
        'time': '23 июня 2021 18:13',
        'delay': 3300
      },
      {
        'from': 'app',
        'text': 'Есть ли у Вас ещё вопросы по заявке № 678250?',
        'second_text': '',
        'descr': '',
        'icon': '',
        'options': false,
        'time': '23 июня 2021 18:13',
        'delay': 3300
      },
      {
        'from': 'user',
        'text': 'Да',
        'second_text': '',
        'descr': '',
        'icon': '',
        'options': false,
        'time': '23 июня 2021 18:13',
        'delay': 3300
      },
      {
        'from': 'app',
        'text': 'Укажите интересующий Вас вопрос по заявке № 678250',
        'second_text': '',
        'descr': '',
        'icon': '',
        'options': ['Как скорректировать заявку?',
          'Как ускорить создание ОЗМ?',
          'Когда будет создана ОЗМ?',
          'Нет вопросов по данной заявке'
        ],
        'time': '23 июня 2021 18:13',
        'delay': 3300
      },
      {
        'from': 'user',
        'text': [0],
        'second_text': '',
        'descr': '',
        'icon': '',
        'options': false,
        'time': '23 июня 2021 18:13',
        'delay': 3300
      },
      {
        'from': 'app',
        'text': 'Запрашиваемая заявка выполнена без возможности корректировки. При необходимости создайте новую заявку.',
        'second_text': '',
        'descr': '',
        'icon': '',
        'options': false,
        'time': '23 июня 2021 18:13',
        'delay': 3300
      },
      {
        'from': 'app',
        'text': 'Еще вопросы по заявке № 678250?',
        'second_text': '',
        'descr': '',
        'icon': '',
        'options': true,
        'time': '23 июня 2021 18:13',
        'delay': 3300
      },
      {
        'from': 'user',
        'text': 'Нет',
        'second_text': '',
        'descr': '',
        'icon': '',
        'options': false,
        'time': '23 июня 2021 18:13',
        'delay': 3300
      },
      {
        'from': 'app',
        'text': 'Благодарю за обращение',
        'second_text': '',
        'descr': '',
        'icon': '',
        'options': false,
        'time': '23 июня 2021 18:13',
        'delay': 3300
      },
      {
        'from': 'app',
        'text': 'Завершаем сессию',
        'second_text': '',
        'descr': '',
        'icon': '',
        'options': false,
        'time': '23 июня 2021 18:13',
        'delay': 3300
      },
    ]
  }


  // если страница прогрузилась, то начинаем
  ready(() => {
    new RedWebAnimation(redWebArgs1)
  })