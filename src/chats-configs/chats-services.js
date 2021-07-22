// timing
const shortTiming = 1000;
const mediumTiming = 3300;
const longTiming = 5000;

// Изменение тарифа
const date1 = "7 мая 2021";
const timeFirst1 = "16:28";
// const timeSecond1 = '11:27'
const servicesDialog1 = [
  {
    from: "app",
    text: "Здравствуйте. Я – Цифровой ассистент. Вы можете задать мне любой вопрос о наших сервисах. Если я не найду ответ, переведу диалог на специалиста поддержки. Для разговора со специалистом напишите «специалист»",
    second_text: "",
    descr: "",
    icon: "",
    options: false,
    time: `${date1} ${timeFirst1}`,
    delay: shortTiming,
  },
  {
    from: "user",
    text: "продлите интернет на сутки",
    second_text: "",
    descr: "",
    icon: "",
    options: false,
    time: `${date1} ${timeFirst1}`,
    delay: mediumTiming,
  },
  {
    from: "app",
    text: "Подскажите, ваш текущий тариф с пакетом гигабайтов?",
    second_text: "",
    descr: "",
    icon: "",
    options: true,
    time: `${date1} ${timeFirst1}`,
    delay: mediumTiming,
  },
  {
    from: "user",
    text: "Да",
    second_text: "",
    descr: "",
    icon: "",
    options: false,
    time: `${date1} ${timeFirst1}`,
    delay: mediumTiming,
  },
  {
    from: "app",
    text: "Изменить тариф Вы можете с помощью USSD-команды *106#. Также изменить количество минут и гигабайт можно в приложении, нажав на <span class='blueText'>ссылку</span> или на «Изменить условия» в разделе «Связь». Там же есть информация о подключенных условиях, сроке действия пакета и балансе.",
    second_text: "",
    descr: "",
    icon: "",
    options: false,
    time: `${date1} ${timeFirst1}`,
    delay: mediumTiming,
  },
  {
    from: "user",
    text: "до свидания",
    second_text: "",
    descr: "",
    icon: "",
    options: false,
    time: `${date1} ${timeFirst1}`,
    delay: mediumTiming,
  },
  {
    from: "app",
    text: "Надеюсь, что сумел Вам помочь. Спасибо за обращение.",
    second_text: "",
    descr: "",
    icon: "",
    options: false,
    time: `${date1} ${timeFirst1}`,
    delay: mediumTiming,
  }
];

const servicesRedPhoneArgs1 = {
  idElement: "servicesRPtriggerElement1",
  idWebAnimToCreateTransformer: "servicesRedWebTriggerElement1",
  type: 0,
  dateChatingInHeader: date1,
  headingChat: "bot",
  dateTime: `${date1} ${timeFirst1}`,
  clock: timeFirst1,
  dialogs: servicesDialog1,
};
const servicesRedWebArgs1 = {
  idElement: servicesRedPhoneArgs1.idWebAnimToCreateTransformer,
  idWebAnimToCreateTransformer: servicesRedPhoneArgs1.idElement,
  type: servicesRedPhoneArgs1.type,
  dateChatingInHeader: servicesRedPhoneArgs1.dateChatingInHeader,
  headingChat: servicesRedPhoneArgs1.headingChat,
  dateTime: servicesRedPhoneArgs1.dateTime,
  clock: servicesRedPhoneArgs1.clock,
  dialogs: servicesRedPhoneArgs1.dialogs,
};

// Управление картой
const date2 = "7 мая 2021";
const timeFirst2 = "16:31";
const servicesDialog2 = [
  {
    from: "app",
    text: "Я весь во внимании, задайте Ваш вопрос",
    second_text: "",
    descr: "",
    icon: "",
    options: false,
    time: `${date2} ${timeFirst2}`,
    delay: shortTiming,
  },
  {
    from: "user",
    text: "как подключить автоплатеж",
    second_text: "",
    descr: "",
    icon: "",
    options: false,
    time: `${date2} ${timeFirst2}`,
    delay: mediumTiming,
  },
  {
    from: "app",
    text: "Привязать банковскую карту можно по <span class='blueText'>ссылке</span>.<br><br> Управлять привязанной банковской картой можно в <span class='blueText'>мобильном приложении</span> – достаточно нажать на последние 4 цифры карты в разделе «Деньги».<br><br> Например, чтобы включить/выключить автопополнение, нужно нажать на карту в разделе «Мои карты» и передвинуть тумблер «автоматически пополнять с карты» в нужное положение.",
    second_text: "",
    descr: "",
    icon: "",
    options: false,
    time: `${date2} ${timeFirst2}`,
    delay: mediumTiming,
  },
  {
    from: "app",
    text: "Если я правильно вас понял, или в моем ответе недостаточно информации и вам нужен специалист, напишите в ответ слово «специалист»",
    second_text: "",
    descr: "",
    icon: "",
    options: false,
    time: `${date2} ${timeFirst2}`,
    delay: mediumTiming,
  },
  {
    from: "user",
    text: "специалист",
    second_text: "",
    descr: "",
    icon: "",
    options: false,
    time: `${date2} ${timeFirst2}`,
    delay: mediumTiming,
  },
  {
    from: "app",
    text: "Переключаю чат на специалиста поддержки",
    second_text: "",
    descr: "",
    icon: "",
    options: false,
    time: `${date2} ${timeFirst2}`,
    delay: mediumTiming,
  }
];

const servicesRedPhoneArgs2 = {
  idElement: "servicesRPtriggerElement2",
  idWebAnimToCreateTransformer: "servicesRedWebTriggerElement2",
  type: 0,
  dateChatingInHeader: date2,
  headingChat: "bot",
  dateTime: `${date2} ${timeFirst2}`,
  clock: timeFirst2,
  dialogs: servicesDialog2,
};
const servicesRedWebArgs2 = {
  idElement: servicesRedPhoneArgs2.idWebAnimToCreateTransformer,
  idWebAnimToCreateTransformer: servicesRedPhoneArgs2.idElement,
  type: servicesRedPhoneArgs2.type,
  dateChatingInHeader: servicesRedPhoneArgs2.dateChatingInHeader,
  headingChat: servicesRedPhoneArgs2.headingChat,
  dateTime: servicesRedPhoneArgs2.dateTime,
  clock: servicesRedPhoneArgs2.clock,
  dialogs: servicesRedPhoneArgs2.dialogs,
};

// Как узнать номер
const date3 = "7 мая 2021";
const timeFirst3 = "17:12";
const servicesDialog3 = [
  {
    from: "app",
    text: "Здравствуйте. Я – Цифровой ассистент. Вы можете задать мне любой вопрос о Yota. Если я не найду ответ, переведу диалог на специалиста поддержки. Для разговора со специалистом напишите «специалист»",
    second_text: "",
    descr: "",
    icon: "",
    options: false,
    time: `${date3} ${timeFirst3}`,
    delay: shortTiming,
  },
  {
    from: "user",
    text: "как узнать номер лицевого счета",
    second_text: "",
    descr: "",
    icon: "",
    options: false,
    time: `${date3} ${timeFirst3}`,
    delay: mediumTiming,
  },
  {
    from: "app",
    text: "Номер телефона можно посмотреть в <span class='blueText'>приложении</span>. Ещё можно воспользоваться командой *103#.",
    second_text: "",
    descr: "",
    icon: "",
    options: false,
    time: `${date3} ${timeFirst3}`,
    delay: mediumTiming,
  },
  {
    from: "user",
    text: "спасибо",
    second_text: "",
    descr: "",
    icon: "",
    options: false,
    time: `${date3} ${timeFirst3}`,
    delay: mediumTiming,
  },
  {
    from: "app",
    text: "Надеюсь, что сумел Вам помочь. Благодарю за обращение.",
    second_text: "",
    descr: "",
    icon: "",
    options: false,
    time: `${date3} ${timeFirst3}`,
    delay: mediumTiming,
  }
];

const servicesRedPhoneArgs3 = {
  idElement: "servicesRPtriggerElement3",
  idWebAnimToCreateTransformer: "servicesRedWebTriggerElement3",
  type: 0,
  dateChatingInHeader: date3,
  headingChat: "bot",
  dateTime: `${date3} ${timeFirst3}`,
  clock: timeFirst3,
  dialogs: servicesDialog3,
};
const servicesRedWebArgs3 = {
  idElement: servicesRedPhoneArgs3.idWebAnimToCreateTransformer,
  idWebAnimToCreateTransformer: servicesRedPhoneArgs3.idElement,
  type: servicesRedPhoneArgs3.type,
  dateChatingInHeader: servicesRedPhoneArgs3.dateChatingInHeader,
  headingChat: servicesRedPhoneArgs3.headingChat,
  dateTime: servicesRedPhoneArgs3.dateTime,
  clock: servicesRedPhoneArgs3.clock,
  dialogs: servicesRedPhoneArgs3.dialogs,
};

// Позвони мне
const date4 = "7 мая 2021";
const timeFirst4 = "17:17";
// const timeSecond4 = "17:18";
const servicesDialog4 = [
  {
    from: "app",
    text: "Готов отвечать на твои вопросы 😊",
    second_text: "",
    descr: "",
    icon: "",
    options: false,
    time: `${date4} ${timeFirst4}`,
    delay: shortTiming,
  },
  {
    from: "user",
    text: "как отправить смс чтобы мне перезвонили",
    second_text: "",
    descr: "",
    icon: "",
    options: false,
    time: `${date4} ${timeFirst4}`,
    delay: mediumTiming,
  },
  {
    from: "app",
    text: "Для отправки уведомления «Позвони мне» набери в телефоне команду:<br> *144*7XXXXXXXXXX# , где Х - номер абонента. В этом случае он получит SMS с просьбой перезвонить тебе. Команда работает только для российских номеров.",
    second_text: "",
    descr: "",
    icon: "",
    options: false,
    time: `${date4} ${timeFirst4}`,
    delay: mediumTiming,
  },
  {
    from: "app",
    text: "Если вдруг что-то не получилось, или я неправильно понял вопрос, напишите в ответ «специалист» и я переведу тебя в режим живого общения.",
    second_text: "",
    descr: "",
    icon: "",
    options: false,
    time: `${date4} ${timeFirst4}`,
    delay: mediumTiming,
  },
  {
    from: "user",
    text: "специалист",
    second_text: "",
    descr: "",
    icon: "",
    options: false,
    time: `${date4} ${timeFirst4}`,
    delay: mediumTiming,
  },
  {
    from: "app",
    text: "Переключаю чат на специалиста поддержки",
    second_text: "",
    descr: "",
    icon: "",
    options: false,
    time: `${date4} ${timeFirst4}`,
    delay: mediumTiming,
  }
];

const servicesRedPhoneArgs4 = {
  idElement: "servicesRPtriggerElement4",
  idWebAnimToCreateTransformer: "servicesRedWebTriggerElement4",
  type: 0,
  dateChatingInHeader: date4,
  headingChat: "bot",
  dateTime: `${date4} ${timeFirst4}`,
  clock: timeFirst4,
  dialogs: servicesDialog4,
};
const servicesRedWebArgs4 = {
  idElement: servicesRedPhoneArgs4.idWebAnimToCreateTransformer,
  idWebAnimToCreateTransformer: servicesRedPhoneArgs4.idElement,
  type: servicesRedPhoneArgs4.type,
  dateChatingInHeader: servicesRedPhoneArgs4.dateChatingInHeader,
  headingChat: servicesRedPhoneArgs4.headingChat,
  dateTime: servicesRedPhoneArgs4.dateTime,
  clock: servicesRedPhoneArgs4.clock,
  dialogs: servicesRedPhoneArgs4.dialogs,
};

// Как настроить интернет
const date5 = "7 мая 2021";
const timeFirst5 = "17:21";
const servicesDialog5 = [
  {
    from: "user",
    text: "Добрый день",
    second_text: "",
    descr: "",
    icon: "",
    options: false,
    time: `${date5} ${timeFirst5}`,
    delay: shortTiming,
  },
  {
    from: "app",
    text: "Здравствуйте. Я – Цифровой ассистент. Вы можете задать мне любой вопрос о наших сервисах. Если я не найду ответ, переведу диалог на специалиста поддержки. Для разговора со специалистом напишите «специалист»",
    second_text: "",
    descr: "",
    icon: "",
    options: false,
    time: `${date5} ${timeFirst5}`,
    delay: mediumTiming,
  },
  {
    from: "user",
    text: "как правильно прописать настройки для интернет",
    second_text: "",
    descr: "",
    icon: "",
    options: false,
    time: `${date5} ${timeFirst5}`,
    delay: mediumTiming,
  },
  {
    from: "app",
    text: "Какая ОС установлена на Вашем устройстве?",
    second_text: "",
    descr: "",
    icon: "",
    options: ['Android', 'iOS'],
    time: `${date5} ${timeFirst5}`,
    delay: mediumTiming,
  },
  {
    from: "user",
    text: [0],
    second_text: "",
    descr: "",
    icon: "",
    options: false,
    time: `${date5} ${timeFirst5}`,
    delay: mediumTiming,
  },
  {
    from: "app",
    text: "Включите передачу данных (Настройки → Передача данных → включить мобильные данные).<br> Затем убедитесь, что точка доступа (APN) прописана верно (Настройки → Еще → Мобильная сеть → Точки доступа (APN) → Изменить/создать точку доступа):<br> Имя: yota<br> APN: internet.yota<br> Тип APN: default,supl<br> MCC: 250<br> MNC: 11<br> Остальные поля оставьте пустыми и сохраните настройки.<br> После этого включите режим полёта на 10 секунд или перезагрузите устройство.",
    second_text: "",
    descr: "",
    icon: "",
    options: false,
    time: `${date5} ${timeFirst5}`,
    delay: mediumTiming,
  },
  {
    from: "user",
    text: "благодарю",
    second_text: "",
    descr: "",
    icon: "",
    options: false,
    time: `${date5} ${timeFirst5}`,
    delay: mediumTiming,
  },
  {
    from: "app",
    text: "Надеюсь, моя информация пригодилась. Спасибо за обращение.",
    second_text: "",
    descr: "",
    icon: "",
    options: false,
    time: `${date5} ${timeFirst5}`,
    delay: mediumTiming,
  }
];

const servicesRedPhoneArgs5 = {
  idElement: "servicesRPtriggerElement5",
  idWebAnimToCreateTransformer: "servicesRedWebTriggerElement5",
  type: 0,
  dateChatingInHeader: date5,
  headingChat: "bot",
  dateTime: `${date5} ${timeFirst5}`,
  clock: timeFirst5,
  dialogs: servicesDialog5,
};
const servicesRedWebArgs5 = {
  idElement: servicesRedPhoneArgs5.idWebAnimToCreateTransformer,
  idWebAnimToCreateTransformer: servicesRedPhoneArgs5.idElement,
  type: servicesRedPhoneArgs5.type,
  dateChatingInHeader: servicesRedPhoneArgs5.dateChatingInHeader,
  headingChat: servicesRedPhoneArgs5.headingChat,
  dateTime: servicesRedPhoneArgs5.dateTime,
  clock: servicesRedPhoneArgs5.clock,
  dialogs: servicesRedPhoneArgs5.dialogs,
};

// чистим ls от сигналов трансформации анимации
if (localStorage.getItem("currentAnimationDialog")) {
  localStorage.removeItem("currentAnimationDialog");
}
if (localStorage.getItem("mob_first_part_user_msg")) {
  localStorage.removeItem("mob_first_part_user_msg");
}
if (localStorage.getItem("mob_first_part_app_msg")) {
  localStorage.removeItem("mob_first_part_app_msg");
}
if (localStorage.getItem("web_first_part_user_msg")) {
  localStorage.removeItem("web_first_part_user_msg");
}
if (localStorage.getItem("web_first_part_app_msg")) {
  localStorage.removeItem("web_first_part_app_msg");
}

ready(() => {
  // mob
  new RedPhoneAnimation(servicesRedPhoneArgs1);
  new RedPhoneAnimation(servicesRedPhoneArgs2);
  new RedPhoneAnimation(servicesRedPhoneArgs3);
  new RedPhoneAnimation(servicesRedPhoneArgs4);
  new RedPhoneAnimation(servicesRedPhoneArgs5);
  // web
  new RedWebAnimation(servicesRedWebArgs1);
  new RedWebAnimation(servicesRedWebArgs2);
  new RedWebAnimation(servicesRedWebArgs3);
  new RedWebAnimation(servicesRedWebArgs4);
  new RedWebAnimation(servicesRedWebArgs5);
});
