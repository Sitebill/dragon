export const settings = {
    "state": "success",
    "message": "config loaded",
    "data": [
        {
            "title": "Общее",
            "key": "Общее",
            "data": {
                "system_email": {
                    "name": "system_email",
                    "hint": "system_email От чьего email будут отправляться письма с сайта. Подробнее о настройке <a href=\"http://wiki.sitebill.ru/index.php?title=Mail\" target=\"_blank\">тут</a>",
                    "title": "От чьего email будут отправляться письма с сайта. Подробнее о настройке <a href=\"http://wiki.sitebill.ru/index.php?title=Mail\" target=\"_blank\">тут</a>",
                    "value": "info@bitrix24.sitebill.net",
                    "type": "safe_string",
                    "sort_order": "1"
                },
                "system_email_robot": {
                    "name": "system_email_robot",
                    "hint": "system_email_robot",
                    "title": "Имя робота отправщика для писем",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "2"
                },
                "site_title": {
                    "name": "site_title",
                    "title": "Заголовок сайта",
                    "value": "Агентство недвижимости",
                    "type": "safe_string",
                    "hint": "site_title",
                    "sort_order": "3"
                },
                "theme": {
                    "name": "theme",
                    "title": "Тема оформления",
                    "value": "realia",
                    "type": "select_box",
                    "select_data": {
                        "agency": "agency",
                        "brick": "brick",
                        "domikus": "domikus",
                        "estetico": "estetico",
                        "ipotekus": "ipotekus",
                        "lp": "lp",
                        "novosel": "novosel",
                        "pure": "pure",
                        "real-spaces": "real-spaces",
                        "realia": "realia",
                        "realto": "realto",
                        "realty": "realty"
                    },
                    "select_data_indexed": [
                        {
                            "id": "agency",
                            "value": "agency"
                        },
                        {
                            "id": "brick",
                            "value": "brick"
                        },
                        {
                            "id": "domikus",
                            "value": "domikus"
                        },
                        {
                            "id": "estetico",
                            "value": "estetico"
                        },
                        {
                            "id": "ipotekus",
                            "value": "ipotekus"
                        },
                        {
                            "id": "lp",
                            "value": "lp"
                        },
                        {
                            "id": "novosel",
                            "value": "novosel"
                        },
                        {
                            "id": "pure",
                            "value": "pure"
                        },
                        {
                            "id": "real-spaces",
                            "value": "real-spaces"
                        },
                        {
                            "id": "realia",
                            "value": "realia"
                        },
                        {
                            "id": "realto",
                            "value": "realto"
                        },
                        {
                            "id": "realty",
                            "value": "realty"
                        }
                    ],
                    "hint": "theme",
                    "sort_order": "4"
                },
                "order_email_acceptor": {
                    "name": "order_email_acceptor",
                    "title": "Email на который будут приходить заявки с сайта",
                    "value": "report@etown.ru",
                    "type": "safe_string",
                    "hint": "order_email_acceptor",
                    "sort_order": "5"
                },
                "per_page": {
                    "name": "per_page",
                    "title": "Количество объявлений на одну страницу на сайте",
                    "value": "20",
                    "type": "safe_string",
                    "hint": "per_page",
                    "sort_order": "6"
                },
                "common_per_page": {
                    "name": "common_per_page",
                    "title": "Количество позиций на страницу (для списков справочников в админке)",
                    "value": "10",
                    "type": "safe_string",
                    "hint": "common_per_page",
                    "sort_order": "7"
                },
                "per_page_account": {
                    "name": "per_page_account",
                    "hint": "per_page_account",
                    "title": "Количество позиций на страницу (для списков в ЛК)",
                    "value": "10",
                    "type": "safe_string",
                    "sort_order": "8"
                },
                "currency_enable": {
                    "name": "currency_enable",
                    "hint": "currency_enable",
                    "title": "Включить поддержку выбора валют в объявлении",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "15"
                },
                "allow_register_account": {
                    "name": "allow_register_account",
                    "hint": "allow_register_account",
                    "title": "Разрешить регистрацию на сайте",
                    "value": "1",
                    "type": "checkbox",
                    "sort_order": "16"
                },
                "allow_remind_password": {
                    "name": "allow_remind_password",
                    "hint": "allow_remind_password",
                    "title": "Разрешить напоминание пароля",
                    "value": "1",
                    "type": "checkbox",
                    "sort_order": "17"
                },
                "bootstrap_version": {
                    "name": "bootstrap_version",
                    "hint": "bootstrap_version",
                    "title": "Версия Bootstrap",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "18"
                },
                "use_google_map": {
                    "name": "use_google_map",
                    "hint": "use_google_map",
                    "title": "Использовать карту Google",
                    "value": "0",
                    "type": "select_box",
                    "select_data": [
                        "Yаndex",
                        "Google",
                        "Leaflet OSM"
                    ],
                    "select_data_indexed": [
                        {
                            "id": 0,
                            "value": "Yаndex"
                        },
                        {
                            "id": 1,
                            "value": "Google"
                        },
                        {
                            "id": 2,
                            "value": "Leaflet OSM"
                        }
                    ],
                    "sort_order": "19"
                },
                "google_api_key": {
                    "name": "google_api_key",
                    "hint": "google_api_key",
                    "title": "Ключ API Google",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "20"
                },
                "google_api_key_server": {
                    "name": "google_api_key_server",
                    "hint": "google_api_key_server",
                    "title": "Ключ API Google для серверных запросов",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "21"
                },
                "google_recaptcha_key": {
                    "name": "google_recaptcha_key",
                    "hint": "google_recaptcha_key",
                    "title": "Ключ Google ReCaptcha",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "22"
                },
                "use_captcha_admin_entry": {
                    "name": "use_captcha_admin_entry",
                    "hint": "use_captcha_admin_entry",
                    "title": "Использовать капчу на входе в админку",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "23"
                },
                "work_on_https": {
                    "name": "work_on_https",
                    "hint": "work_on_https",
                    "title": "Работать через https",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "24"
                },
                "moderate_first": {
                    "name": "moderate_first",
                    "hint": "moderate_first",
                    "title": "Не публиковать объявления из ЛК без премодерации",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "25"
                },
                "hide_contact_input_user_data": {
                    "name": "hide_contact_input_user_data",
                    "hint": "hide_contact_input_user_data",
                    "title": "Убрать поля ввода контактов из формы добавления объявления в личном кабинете",
                    "value": "1",
                    "type": "checkbox",
                    "sort_order": "26"
                },
                "use_realty_view_counter": {
                    "name": "use_realty_view_counter",
                    "hint": "use_realty_view_counter",
                    "title": "Использовать встроенный счетчик просмотров",
                    "value": "1",
                    "type": "checkbox",
                    "sort_order": "27"
                },
                "date_format": {
                    "name": "date_format",
                    "hint": "date_format",
                    "title": "Формат даты",
                    "value": "standart",
                    "type": "select_box",
                    "select_data": {
                        "standart": "standart",
                        "eu": "EU",
                        "us": "US"
                    },
                    "select_data_indexed": [
                        {
                            "id": "standart",
                            "value": "standart"
                        },
                        {
                            "id": "eu",
                            "value": "EU"
                        },
                        {
                            "id": "us",
                            "value": "US"
                        }
                    ],
                    "sort_order": "28"
                },
                "ue_name": {
                    "name": "ue_name",
                    "hint": "ue_name",
                    "title": "Название валюты в личном кабинете",
                    "value": "руб.",
                    "type": "safe_string",
                    "sort_order": "29"
                },
                "enable_special_in_account": {
                    "name": "enable_special_in_account",
                    "hint": "enable_special_in_account",
                    "title": "В личном кабинете доступна галочка спец.размещений",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "30"
                },
                "enable_curator_mode": {
                    "name": "enable_curator_mode",
                    "hint": "enable_curator_mode",
                    "title": "Активировать режим куратора",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "31"
                },
                "use_new_realty_grid": {
                    "name": "use_new_realty_grid",
                    "hint": "use_new_realty_grid",
                    "title": "Использовать настраиваемую сетку в выводе в админке",
                    "value": "1",
                    "type": "checkbox",
                    "sort_order": "32"
                },
                "notify_admin_about_register": {
                    "name": "notify_admin_about_register",
                    "hint": "notify_admin_about_register",
                    "title": "Уведомлять администратора о новой регистрации пользователя",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "33"
                },
                "notify_about_added_realty": {
                    "name": "notify_about_added_realty",
                    "hint": "notify_about_added_realty",
                    "title": "Уведомлять пользователя о добавленных объявлениях",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "34"
                },
                "filter_double_data": {
                    "name": "filter_double_data",
                    "hint": "filter_double_data",
                    "title": "Не допускать добавления дубликатов данных",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "35"
                },
                "check_permissions": {
                    "name": "check_permissions",
                    "hint": "check_permissions",
                    "title": "Разделение прав доступа для групп. Группа администраторов (admin) имеет доступ ко всем функциям без учета прав доступа.",
                    "value": "1",
                    "type": "checkbox",
                    "sort_order": "36"
                },
                "allow_user_email_change": {
                    "name": "allow_user_email_change",
                    "hint": "allow_user_email_change",
                    "title": "Разрешить пользователям изменять email",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "37"
                },
                "use_registration_email_confirm": {
                    "name": "use_registration_email_confirm",
                    "hint": "use_registration_email_confirm",
                    "title": "Использовать активацию аккаунта по email при регистрации",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "38"
                },
                "use_registration_sms_confirm": {
                    "name": "use_registration_sms_confirm",
                    "hint": "use_registration_sms_confirm",
                    "title": "Использовать активацию аккаунта с помщью SMS при регистрации. <a href=\"http://wiki.sitebill.ru/index.php?title=%D0%A0%D0%B5%D0%B3%D0%B8%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D1%8F_%D1%81_SMS_%D0%BF%D0%BE%D0%B4%D1%82%D0%B2%D0%B5%D1%80%D0%B6%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5%D0%BC\" target=\"_blank\">Подробнее</a>",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "39"
                },
                "email_signature": {
                    "name": "email_signature",
                    "hint": "email_signature",
                    "title": "Подпись в письмах",
                    "value": "С уважением, команда sitebillcms.com",
                    "type": "safe_string",
                    "sort_order": "40"
                },
                "registration_notice": {
                    "name": "registration_notice",
                    "hint": "registration_notice",
                    "title": "Уведомлять пользователя о регистрации",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "41"
                },
                "meta_title_main": {
                    "name": "meta_title_main",
                    "hint": "meta_title_main",
                    "title": "Заголовок главной",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "42"
                },
                "meta_keywords_main": {
                    "name": "meta_keywords_main",
                    "hint": "meta_keywords_main",
                    "title": "Ключевые слова главной",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "43"
                },
                "meta_description_main": {
                    "name": "meta_description_main",
                    "hint": "meta_description_main",
                    "title": "Мета-описание главной",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "44"
                },
                "default_tab_name": {
                    "name": "default_tab_name",
                    "title": "Название закладки формы по-умолчанию",
                    "value": "Основное",
                    "type": "safe_string",
                    "hint": "default_tab_name",
                    "sort_order": "45"
                },
                "photo_per_data": {
                    "name": "photo_per_data",
                    "title": "Количество изображений для одного объекта (0 или ничего - без ограничений)",
                    "value": "0",
                    "type": "safe_string",
                    "hint": "photo_per_data",
                    "sort_order": "46"
                },
                "add_notification_email": {
                    "name": "add_notification_email",
                    "title": "E-mail для получения уведомлений о новых объявлениях (при отсутствии изпользуется order_email_acceptor)",
                    "value": "",
                    "type": "safe_string",
                    "hint": "add_notification_email",
                    "sort_order": "47"
                },
                "notify_about_publishing": {
                    "name": "notify_about_publishing",
                    "hint": "notify_about_publishing",
                    "title": "Уведомлять пользователя о публикации его объявления после модерации.",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "48"
                },
                "post_form_agreement_enable": {
                    "name": "post_form_agreement_enable",
                    "hint": "post_form_agreement_enable",
                    "title": "Активировать выдачу соглашения после формы",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "49"
                },
                "post_form_agreement_text_add": {
                    "name": "post_form_agreement_text_add",
                    "title": "Текст соглашения после формы добавления объявления",
                    "value": "Я,  ознакомлен(а) с Пользовательским соглашением",
                    "type": "safe_string",
                    "hint": "post_form_agreement_text_add",
                    "sort_order": "50"
                },
                "post_form_agreement_enable_note": {
                    "name": "post_form_agreement_enable_note",
                    "hint": "post_form_agreement_enable_note",
                    "title": "Выводить соглашение с формой в виде текстового уведомления",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "51"
                },
                "register_form_agreement_enable": {
                    "name": "register_form_agreement_enable",
                    "hint": "register_form_agreement_enable",
                    "title": "Добавлять элемент согласия с Правилами к форме регистрации",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "52"
                },
                "register_form_agreement_enable_ch": {
                    "name": "register_form_agreement_enable_ch",
                    "hint": "register_form_agreement_enable_ch",
                    "title": "Элемент согласия с Правилами к форме регистрации изначально выбран",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "53"
                },
                "is_watermark": {
                    "name": "is_watermark",
                    "hint": "is_watermark",
                    "title": "Использовать watermark на фотографиях<br> (по-умолчанию картинка лежит тут /img/watermark/watermark.gif)",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "54"
                },
                "hide_empty_catalog": {
                    "name": "hide_empty_catalog",
                    "hint": "hide_empty_catalog",
                    "title": "Прятать каталоги без содержимого",
                    "value": "1",
                    "type": "checkbox",
                    "sort_order": "55"
                },
                "user_account_enable": {
                    "name": "user_account_enable",
                    "hint": "user_account_enable",
                    "title": "Редактировать лицевой счет пользователя в админке",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "56"
                },
                "seo_photo_name_enable": {
                    "name": "seo_photo_name_enable",
                    "hint": "seo_photo_name_enable",
                    "title": "Включить SEO-оптимизацию названий изображений",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "57"
                },
                "advert_cost": {
                    "name": "advert_cost",
                    "title": "Стоимость размещения одного простого объявления. <a href=\"http://www.sitebill.ru/stoimost-obyavleniya.html\" target=\"_blank\">Что это такое?</a>",
                    "value": "0",
                    "type": "safe_string",
                    "hint": "advert_cost Стоимость размещения одного простого объявления. <a href=\"http://www.sitebill.ru/stoimost-obyavleniya.html\" target=\"_blank\">Что это такое?</a>",
                    "sort_order": "58"
                },
                "special_advert_cost": {
                    "name": "special_advert_cost",
                    "title": "Стоимость размещения одного специального предложения",
                    "value": "0",
                    "type": "safe_string",
                    "hint": "special_advert_cost",
                    "sort_order": "59"
                },
                "editor": {
                    "name": "editor",
                    "hint": "editor",
                    "title": "Тип WYSIWYG-редактора",
                    "value": "ckeditor",
                    "type": "select_box",
                    "select_data": {
                        "cleditor": "cleditor",
                        "ckeditor": "ckeditor",
                        "codemirror": "codemirror"
                    },
                    "select_data_indexed": [
                        {
                            "id": "cleditor",
                            "value": "cleditor"
                        },
                        {
                            "id": "ckeditor",
                            "value": "ckeditor"
                        },
                        {
                            "id": "codemirror",
                            "value": "codemirror"
                        }
                    ],
                    "sort_order": "60"
                },
                "autocomplete_distinct": {
                    "name": "autocomplete_distinct",
                    "hint": "autocomplete_distinct",
                    "title": "Фильтровать данные autocomplete-выдачи на уникальность названий",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "61"
                },
                "login_user_data_ad": {
                    "name": "login_user_data_ad",
                    "hint": "login_user_data_ad",
                    "title": "Список дополнительных полей данных авторизированного пользователя",
                    "value": "",
                    "type": "textarea",
                    "sort_order": "62"
                },
                "set_cookie_subdomenal": {
                    "name": "set_cookie_subdomenal",
                    "hint": "set_cookie_subdomenal",
                    "title": "Устанавливать COOKIE для всех субдоменов",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "63"
                },
                "user_pic_smart": {
                    "name": "user_pic_smart",
                    "hint": "user_pic_smart",
                    "title": "Выдерживать точный размер для аватар пользователей",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "65"
                },
                "default_timezone": {
                    "name": "default_timezone",
                    "hint": "default_timezone",
                    "title": "Временная зона",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "66"
                },
                "classic_local_grid": {
                    "name": "classic_local_grid",
                    "hint": "classic_local_grid",
                    "title": "Использовать классический локальный конструктор списков",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "67"
                },
                "classic_local_view": {
                    "name": "classic_local_view",
                    "hint": "classic_local_view",
                    "title": "Использовать классический локальный конструктор карточки",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "68"
                },
                "user_anonimouse_group_id": {
                    "name": "user_anonimouse_group_id",
                    "hint": "user_anonimouse_group_id",
                    "title": "ID группы гостей",
                    "value": "0",
                    "type": "safe_string",
                    "sort_order": "69"
                },
                "login_block_time": {
                    "name": "login_block_time",
                    "hint": "login_block_time",
                    "title": "Время блокироваки авторизаций аккаунта в минутах",
                    "value": "5",
                    "type": "safe_string",
                    "sort_order": "70"
                },
                "max_login_try_count": {
                    "name": "max_login_try_count",
                    "hint": "max_login_try_count",
                    "title": "Количество ошибочных попыток авторизации",
                    "value": "5",
                    "type": "safe_string",
                    "sort_order": "71"
                },
                "core_domain": {
                    "name": "core_domain",
                    "hint": "core_domain",
                    "title": "Базовый домен (без протокола)",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "72"
                },
                "robokassa_pay_enable": {
                    "name": "robokassa_pay_enable",
                    "hint": "robokassa_pay_enable",
                    "title": "Включить модуль ROBOKASSA",
                    "value": "1",
                    "type": "checkbox",
                    "sort_order": "73"
                },
                "robokassa_by_frekassa": {
                    "name": "robokassa_by_frekassa",
                    "hint": "robokassa_by_frekassa",
                    "title": "Работа модуля ROBOKASSA через интерфейс FREEKASSA",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "74"
                },
                "core_level_symbol": {
                    "name": "core_level_symbol",
                    "hint": "core_level_symbol",
                    "title": "Символ отбивки для корневых разделов в элементе structure",
                    "value": "#.#",
                    "type": "safe_string",
                    "sort_order": "75"
                },
                "level_symbol": {
                    "name": "level_symbol",
                    "hint": "level_symbol",
                    "title": "Символ отбивки для вложенных разделов в элементе structure",
                    "value": "#.#",
                    "type": "safe_string",
                    "sort_order": "76"
                },
                "dontclean_uploadify_table": {
                    "name": "dontclean_uploadify_table",
                    "hint": "dontclean_uploadify_table",
                    "title": "Не очищать таблицу загрузок автоматически",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "77"
                },
                "disable_guest_add": {
                    "name": "disable_guest_add",
                    "hint": "disable_guest_add",
                    "title": "Запретить гостевое добавление",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "80"
                },
                "admin_grid_leftbuttons": {
                    "name": "admin_grid_leftbuttons",
                    "hint": "admin_grid_leftbuttons",
                    "title": "Размещать кнопки управления слева",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "87"
                },
                "data_adv_share_access": {
                    "name": "data_adv_share_access",
                    "hint": "data_adv_share_access",
                    "title": "Разделять доступ к объявлениям в админке",
                    "value": "1",
                    "type": "checkbox",
                    "sort_order": "89"
                },
                "data_adv_share_access_user_list_strict": {
                    "name": "data_adv_share_access_user_list_strict",
                    "hint": "data_adv_share_access_user_list_strict",
                    "title": "Пользователь при добавлении объявления в админке при включенной опции data_adv_share_access может видеть только себя в списке пользователей",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "90"
                },
                "data_adv_share_access_can_view_all": {
                    "name": "data_adv_share_access_can_view_all",
                    "hint": "data_adv_share_access_can_view_all",
                    "title": "Разрешить просмотр всех записей (без редактирования и удаления) при включенной опции data_adv_share_access",
                    "value": "1",
                    "type": "checkbox",
                    "sort_order": "91"
                },
                "data_adv_share_access_extended": {
                    "name": "data_adv_share_access_extended",
                    "hint": "data_adv_share_access_extended",
                    "title": "Список идентификаторов пользователей через запятую, которые видны в списке при редактировании объявления в режиме share_access",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "92"
                },
                "register_passstregth": {
                    "name": "register_passstregth",
                    "hint": "register_passstregth",
                    "title": "Регистрация: сила пароля (0|1|2|3)",
                    "value": "0",
                    "type": "safe_string",
                    "sort_order": "93"
                },
                "register_maxpasslength": {
                    "name": "register_maxpasslength",
                    "hint": "register_maxpasslength",
                    "title": "Регистрация: максимальная длина пароля",
                    "value": "32",
                    "type": "safe_string",
                    "sort_order": "94"
                },
                "register_minpasslength": {
                    "name": "register_minpasslength",
                    "hint": "register_minpasslength",
                    "title": "Регистрация: минимальная длина пароля",
                    "value": "5",
                    "type": "safe_string",
                    "sort_order": "95"
                },
                "add_pagenumber_title_place": {
                    "name": "add_pagenumber_title_place",
                    "hint": "add_pagenumber_title_place",
                    "title": "Куда добавлять количество страниц в заголовке",
                    "value": "0",
                    "type": "select_box",
                    "select_data": [
                        "заголовок на странице",
                        "МЕТА-заголовок",
                        "во все заголовки"
                    ],
                    "select_data_indexed": [
                        {
                            "id": 0,
                            "value": "заголовок на странице"
                        },
                        {
                            "id": 1,
                            "value": "МЕТА-заголовок"
                        },
                        {
                            "id": 2,
                            "value": "во все заголовки"
                        }
                    ],
                    "sort_order": "96"
                },
                "jpeg_quality": {
                    "name": "jpeg_quality",
                    "hint": "jpeg_quality",
                    "title": "Коэффициент качества для JPEG/JPG (от 0 до 100)",
                    "value": "80",
                    "type": "safe_string",
                    "sort_order": "99"
                },
                "png_quality": {
                    "name": "png_quality",
                    "hint": "png_quality",
                    "title": "Степень сжатия для PNG: от 0 (нет сжатия) до 9",
                    "value": "0",
                    "type": "safe_string",
                    "sort_order": "100"
                },
                "robokassa_koef": {
                    "name": "robokassa_koef",
                    "hint": "robokassa_koef",
                    "title": "Коэффициент перевода валюты сайта в RUR",
                    "value": "1",
                    "type": "safe_string",
                    "sort_order": "101"
                },
                "newuser_registration_shared_groupid": {
                    "name": "newuser_registration_shared_groupid",
                    "hint": "newuser_registration_shared_groupid",
                    "title": "ID групп, допустимых к выбору пользователем",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "102"
                },
                "newuser_autoregistration_groupid": {
                    "name": "newuser_autoregistration_groupid",
                    "hint": "newuser_autoregistration_groupid",
                    "title": "ID группы присваиваемой новым автозарегистрированным пользователям",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "103"
                },
                "newuser_registration_groupid": {
                    "name": "newuser_registration_groupid",
                    "hint": "newuser_registration_groupid",
                    "title": "ID группы присваиваемой новым зарегистрировавшимся пользователям",
                    "value": "5",
                    "type": "safe_string",
                    "sort_order": "104"
                },
                "add_pagenumber_title": {
                    "name": "add_pagenumber_title",
                    "hint": "add_pagenumber_title",
                    "title": "Добавлять к заголовку страницы номер текущей страницы",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "106"
                },
                "is_underconstruction": {
                    "name": "is_underconstruction",
                    "hint": "is_underconstruction",
                    "title": "Закрыть сайт",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "107"
                },
                "is_underconstruction_allowed_ip": {
                    "name": "is_underconstruction_allowed_ip",
                    "hint": "is_underconstruction_allowed_ip",
                    "title": "IP разрешенный для доступа в закрытом режиме",
                    "value": "127.0.0.1",
                    "type": "safe_string",
                    "sort_order": "108"
                },
                "notify_about_payment": {
                    "name": "notify_about_payment",
                    "hint": "notify_about_payment",
                    "title": "Уведомлять администратора о платежах по email",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "109"
                },
                "disable_mail_additionals": {
                    "name": "disable_mail_additionals",
                    "hint": "disable_mail_additionals",
                    "title": "Mailer: Отключить передачу дополнительных флагов в заголовках письма",
                    "value": "",
                    "type": "checkbox",
                    "sort_order": "112"
                },
                "save_without_watermark": {
                    "name": "save_without_watermark",
                    "hint": "save_without_watermark",
                    "title": "Сохранять копию изображений без водяного знака",
                    "value": "",
                    "type": "checkbox",
                    "sort_order": "113"
                },
                "similar_items_count": {
                    "name": "similar_items_count",
                    "hint": "similar_items_count",
                    "title": "Количество похожих объявлений в просмотре объявления",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "119"
                },
                "block_user_search_forms": {
                    "name": "block_user_search_forms",
                    "hint": "block_user_search_forms",
                    "title": "Блокировать формы поиска пользователя",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "120"
                },
                "block_user_front_grids": {
                    "name": "block_user_front_grids",
                    "hint": "block_user_front_grids",
                    "title": "Блокировать фронтальные сетки пользователя",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "121"
                },
                "show_up_icon": {
                    "name": "show_up_icon",
                    "hint": "show_up_icon",
                    "title": "Админ может поднимать объявления",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "122"
                },
                "captcha_type": {
                    "name": "captcha_type",
                    "hint": "captcha_type",
                    "title": "Тип капчи",
                    "value": "0",
                    "type": "select_box",
                    "select_data": {
                        "0": "стандартная",
                        "2": "игнорировать капчу",
                        "3": "KCaptcha",
                        "4": "reCaptcha"
                    },
                    "select_data_indexed": [
                        {
                            "id": 0,
                            "value": "стандартная"
                        },
                        {
                            "id": 2,
                            "value": "игнорировать капчу"
                        },
                        {
                            "id": 3,
                            "value": "KCaptcha"
                        },
                        {
                            "id": 4,
                            "value": "reCaptcha"
                        }
                    ],
                    "sort_order": "123"
                },
                "show_cattree_left": {
                    "name": "show_cattree_left",
                    "hint": "show_cattree_left",
                    "title": "Выводить дерево каталогов слева в списке объявлений",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "124"
                },
                "ignore_free_from_parameter": {
                    "name": "ignore_free_from_parameter",
                    "hint": "ignore_free_from_parameter",
                    "title": "Игнорировать свободно с",
                    "value": "1",
                    "type": "checkbox",
                    "sort_order": "125"
                },
                "disable_root_structure_select": {
                    "name": "disable_root_structure_select",
                    "hint": "disable_root_structure_select",
                    "title": "Блокировать корневые элементы в селектбоксах структуры",
                    "value": "0",
                    "type": "select_box",
                    "select_data": [
                        "не блокировать",
                        "только верхний уровень",
                        "все не крайние разделы"
                    ],
                    "select_data_indexed": [
                        {
                            "id": 0,
                            "value": "не блокировать"
                        },
                        {
                            "id": 1,
                            "value": "только верхний уровень"
                        },
                        {
                            "id": 2,
                            "value": "все не крайние разделы"
                        }
                    ],
                    "sort_order": "126"
                },
                "use_combobox": {
                    "name": "use_combobox",
                    "hint": "use_combobox",
                    "title": "Использовать combobox в элементах select",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "127"
                },
                "country_in_form": {
                    "name": "country_in_form",
                    "hint": "country_in_form",
                    "title": "Выбор страны в форме объявления",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "210"
                },
                "region_in_form": {
                    "name": "region_in_form",
                    "hint": "region_in_form",
                    "title": "Выбор региона в форме объявления",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "211"
                },
                "city_in_form": {
                    "name": "city_in_form",
                    "hint": "city_in_form",
                    "title": "Выбор города в форме объявления",
                    "value": "1",
                    "type": "checkbox",
                    "sort_order": "212"
                },
                "metro_in_form": {
                    "name": "metro_in_form",
                    "hint": "metro_in_form",
                    "title": "Выбор метро в форме объявления",
                    "value": "1",
                    "type": "checkbox",
                    "sort_order": "213"
                },
                "district_in_form": {
                    "name": "district_in_form",
                    "hint": "district_in_form",
                    "title": "Выбор района в форме объявления",
                    "value": "1",
                    "type": "checkbox",
                    "sort_order": "214"
                },
                "street_in_form": {
                    "name": "street_in_form",
                    "hint": "street_in_form",
                    "title": "Выбор улицы в форме объявления",
                    "value": "1",
                    "type": "checkbox",
                    "sort_order": "215"
                },
                "optype_in_form": {
                    "name": "optype_in_form",
                    "hint": "optype_in_form",
                    "title": "Выбор контракта в форме поиска",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "216"
                },
                "uploader_type": {
                    "name": "uploader_type",
                    "hint": "uploader_type Тип апплоадера для загрузки картинок. При неуказанном значении по умолчанию используется Uploadify. <a href=\"http://www.sitebill.ru/uploader-type.html\" target=\"_blank\">Что это?</a>",
                    "title": "Тип апплоадера для загрузки картинок. При неуказанном значении по умолчанию используется Uploadify. <a href=\"http://www.sitebill.ru/uploader-type.html\" target=\"_blank\">Что это?</a>",
                    "value": "",
                    "type": "select_box",
                    "select_data": {
                        "uploadify": "uploadify",
                        "pluploader": "pluploader"
                    },
                    "select_data_indexed": [
                        {
                            "id": "uploadify",
                            "value": "uploadify"
                        },
                        {
                            "id": "pluploader",
                            "value": "pluploader"
                        }
                    ],
                    "sort_order": "217"
                },
                "link_street_to_city": {
                    "name": "link_street_to_city",
                    "hint": "link_street_to_city",
                    "title": "Включить привязку улиц к городу",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "218"
                },
                "user_add_street_enable": {
                    "name": "user_add_street_enable",
                    "hint": "user_add_street_enable",
                    "title": "Пользователи могут добавлять улицы",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "219"
                },
                "allow_callme_timelimits": {
                    "name": "allow_callme_timelimits",
                    "hint": "allow_callme_timelimits",
                    "title": "Добавить возможность указания допустимого для звонка времени",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "220"
                },
                "allow_additional_stationary_number": {
                    "name": "allow_additional_stationary_number",
                    "hint": "allow_additional_stationary_number",
                    "title": "Добавить дополнительный номер городского телефона",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "221"
                },
                "allow_additional_mobile_number": {
                    "name": "allow_additional_mobile_number",
                    "hint": "allow_additional_mobile_number",
                    "title": "Добавить дополнительный номер мобильного телефона",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "222"
                },
                "post_form_agreement_text": {
                    "name": "post_form_agreement_text",
                    "title": "Текст соглашения после формы",
                    "value": "Я, ознакомлен(а), что данная заявка будет доставлена по всем Агентствам недвижимости которые зарегистрированы на сайте.",
                    "type": "safe_string",
                    "hint": "post_form_agreement_text",
                    "sort_order": "223"
                },
                "ajax_form_in_admin": {
                    "name": "ajax_form_in_admin",
                    "hint": "ajax_form_in_admin",
                    "title": "Режим ajax в формах администратора",
                    "value": "1",
                    "type": "checkbox",
                    "sort_order": "224"
                },
                "ajax_form_in_user": {
                    "name": "ajax_form_in_user",
                    "hint": "ajax_form_in_user",
                    "title": "Режим ajax в формах личного кабинета",
                    "value": "1",
                    "type": "checkbox",
                    "sort_order": "225"
                },
                "menu_type": {
                    "name": "menu_type",
                    "hint": "menu_type",
                    "title": "Тип верхнего меню (purecss/slidemenu)",
                    "value": "purecss",
                    "type": "select_box",
                    "select_data": {
                        "purecss": "purecss",
                        "slidemenu": "slidemenu",
                        "megamenu": "megamenu"
                    },
                    "select_data_indexed": [
                        {
                            "id": "purecss",
                            "value": "purecss"
                        },
                        {
                            "id": "slidemenu",
                            "value": "slidemenu"
                        },
                        {
                            "id": "megamenu",
                            "value": "megamenu"
                        }
                    ],
                    "sort_order": "226"
                },
                "allow_tags_search_frontend": {
                    "name": "allow_tags_search_frontend",
                    "hint": "allow_tags_search_frontend",
                    "title": "Разрешить поиск по тэгам во фронтенде",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "227"
                },
                "news_image_big_width": {
                    "name": "news_image_big_width",
                    "hint": "news_image_big_width",
                    "title": "Новости - ширина большой картинки",
                    "value": "800",
                    "type": "safe_string",
                    "sort_order": "228"
                },
                "news_image_big_height": {
                    "name": "news_image_big_height",
                    "hint": "news_image_big_height",
                    "title": "Новости - высота большой картинки",
                    "value": "600",
                    "type": "safe_string",
                    "sort_order": "229"
                },
                "news_image_preview_width": {
                    "name": "news_image_preview_width",
                    "hint": "news_image_preview_width",
                    "title": "Новости - ширина превью картинки",
                    "value": "300",
                    "type": "safe_string",
                    "sort_order": "230"
                },
                "news_image_preview_height": {
                    "name": "news_image_preview_height",
                    "hint": "news_image_preview_height",
                    "title": "Новости - высота превью картинки",
                    "value": "300",
                    "type": "safe_string",
                    "sort_order": "231"
                },
                "gallery_image_big_width": {
                    "name": "gallery_image_big_width",
                    "hint": "gallery_image_big_width",
                    "title": "Галерея - ширина большой картинки",
                    "value": "800",
                    "type": "safe_string",
                    "sort_order": "232"
                },
                "gallery_image_big_height": {
                    "name": "gallery_image_big_height",
                    "hint": "gallery_image_big_height",
                    "title": "Галерея - высота большой картинки",
                    "value": "600",
                    "type": "safe_string",
                    "sort_order": "233"
                },
                "gallery_image_preview_width": {
                    "name": "gallery_image_preview_width",
                    "hint": "gallery_image_preview_width",
                    "title": "Галерея - ширина превью картинки",
                    "value": "300",
                    "type": "safe_string",
                    "sort_order": "234"
                },
                "gallery_image_preview_height": {
                    "name": "gallery_image_preview_height",
                    "hint": "gallery_image_preview_height",
                    "title": "Галерея - высота превью картинки",
                    "value": "300",
                    "type": "safe_string",
                    "sort_order": "235"
                },
                "robokassa_server": {
                    "name": "robokassa_server",
                    "title": "Адрес службы приема платежей robokassa.ru",
                    "value": "https://auth.robokassa.ru/Merchant/Index.aspx",
                    "type": "safe_string",
                    "hint": "robokassa_server",
                    "sort_order": "236"
                },
                "robokassa_login": {
                    "name": "robokassa_login",
                    "title": "Логин для robokassa.ru",
                    "value": "robokassa_login",
                    "type": "safe_string",
                    "hint": "robokassa_login",
                    "sort_order": "237"
                },
                "robokassa_password1": {
                    "name": "robokassa_password1",
                    "title": "Пароль 1 для robokassa.ru",
                    "value": "robokassa_password1",
                    "type": "safe_string",
                    "hint": "robokassa_password1",
                    "sort_order": "238"
                },
                "robokassa_password2": {
                    "name": "robokassa_password2",
                    "title": "Пароль 2 для robokassa.ru",
                    "value": "robokassa_password2",
                    "type": "safe_string",
                    "hint": "robokassa_password2",
                    "sort_order": "239"
                },
                "robokassa_testmode": {
                    "name": "robokassa_testmode",
                    "hint": "robokassa_testmode",
                    "title": "Тестовый режим модуля робокассы",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "240"
                },
                "robokassa_testpassword1": {
                    "name": "robokassa_testpassword1",
                    "hint": "robokassa_testpassword1",
                    "title": "Тестовый пароль 1 для robokassa.ru",
                    "value": "robokassa_testpassword1",
                    "type": "safe_string",
                    "sort_order": "241"
                },
                "robokassa_testpassword2": {
                    "name": "robokassa_testpassword2",
                    "hint": "robokassa_testpassword2",
                    "title": "Тестовый пароль 2 для robokassa.ru",
                    "value": "robokassa_testpassword2",
                    "type": "safe_string",
                    "sort_order": "242"
                },
                "use_smtp": {
                    "name": "use_smtp",
                    "hint": "use_smtp",
                    "title": "Отправка почты через smtp. <a href=\"http://www.sitebill.ru/smtp.html\" target=\"_blank\">Что это такое?</a>",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "243"
                },
                "use_smtp_ssl": {
                    "name": "use_smtp_ssl",
                    "hint": "use_smtp_ssl",
                    "title": "Использовать SSL при подключении к SMTP",
                    "value": "1",
                    "type": "checkbox",
                    "sort_order": "244"
                },
                "smtp1_server": {
                    "name": "smtp1_server",
                    "title": "SMTP-сервер для отправки заявок",
                    "value": "",
                    "type": "safe_string",
                    "hint": "smtp1_server",
                    "sort_order": "245"
                },
                "smtp1_login": {
                    "name": "smtp1_login",
                    "title": "SMTP-login",
                    "value": "",
                    "type": "safe_string",
                    "hint": "smtp1_login",
                    "sort_order": "246"
                },
                "smtp1_password": {
                    "name": "smtp1_password",
                    "title": "SMTP-password",
                    "value": "",
                    "type": "safe_string",
                    "hint": "smtp1_password",
                    "sort_order": "247"
                },
                "smtp1_port": {
                    "name": "smtp1_port",
                    "title": "SMTP-port",
                    "value": "587",
                    "type": "safe_string",
                    "hint": "smtp1_port",
                    "sort_order": "248"
                },
                "smtp1_from": {
                    "name": "smtp1_from",
                    "title": "SMTP-от кого <br>(это поле должно соответствовать имени и адресу домена)",
                    "value": "",
                    "type": "safe_string",
                    "hint": "smtp1_from SMTP-от кого <br>(это поле должно соответствовать имени и адресу домена)",
                    "sort_order": "249"
                },
                "editor1": {
                    "name": "editor1",
                    "title": "WYSIWYG-редактор1",
                    "value": "bbeditor",
                    "type": "safe_string",
                    "hint": "editor1",
                    "sort_order": "250"
                },
                "show_demo_banners": {
                    "name": "show_demo_banners",
                    "hint": "show_demo_banners",
                    "title": "Показывать рекламные баннеры sitebill.ru",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "251"
                },
                "use_topic_publish_status": {
                    "name": "use_topic_publish_status",
                    "hint": "use_topic_publish_status",
                    "title": "Использовать переключатель активности для категорий",
                    "value": "1",
                    "type": "checkbox",
                    "sort_order": "252"
                },
                "use_topic_linker": {
                    "name": "use_topic_linker",
                    "hint": "use_topic_linker",
                    "title": "Включить переадресацию категорий <a href=\"http://wiki.sitebill.ru/index.php?title=Use_topic_linker\" target=\"_blank\">?</a>",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "253"
                },
                "email_as_login": {
                    "name": "email_as_login",
                    "hint": "email_as_login",
                    "title": "Использовать email в качестве логина <a href=\"http://wiki.sitebill.ru/index.php?title=email_as_login\" target=\"_blank\">?</a>",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "254"
                },
                "min_payment_sum": {
                    "name": "min_payment_sum",
                    "hint": "min_payment_sum",
                    "title": "Минимальная сумма для пополнения счета",
                    "value": "0",
                    "type": "safe_string",
                    "sort_order": "255"
                },
                "query_cache_enable": {
                    "name": "query_cache_enable",
                    "hint": "query_cache_enable",
                    "title": "Включить кэширование SQL-запросов",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "256"
                },
                "query_cache_time": {
                    "name": "query_cache_time",
                    "hint": "query_cache_time",
                    "title": "Длительность хранения кэша SQL-запросов в секундах",
                    "value": "60",
                    "type": "safe_string",
                    "sort_order": "257"
                },
                "use_native_file_name_on_uploadify": {
                    "name": "use_native_file_name_on_uploadify",
                    "hint": "use_native_file_name_on_uploadify",
                    "title": "Сохранять физические названия загруженных файлов",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "262"
                },
                "ups_price": {
                    "name": "ups_price",
                    "hint": "ups_price",
                    "title": "Цена одного поднятия",
                    "value": "0",
                    "type": "safe_string",
                    "sort_order": "263"
                },
                "vip_cost": {
                    "name": "vip_cost",
                    "hint": "vip_cost",
                    "title": "Цена VIP-объявления за 1 день",
                    "value": "0",
                    "type": "safe_string",
                    "sort_order": "264"
                },
                "premium_cost": {
                    "name": "premium_cost",
                    "hint": "premium_cost",
                    "title": "Цена Премиум-объявления за 1 день",
                    "value": "0",
                    "type": "safe_string",
                    "sort_order": "265"
                },
                "bold_cost": {
                    "name": "bold_cost",
                    "hint": "bold_cost",
                    "title": "Цена выделения объявления за 1 день",
                    "value": "0",
                    "type": "safe_string",
                    "sort_order": "266"
                },
                "vip_rotator_number": {
                    "name": "vip_rotator_number",
                    "hint": "vip_rotator_number",
                    "title": "Количество VIP-объявлений в колонке",
                    "value": "5",
                    "type": "safe_string",
                    "sort_order": "267"
                },
                "apps_cache_disable": {
                    "name": "apps_cache_disable",
                    "hint": "apps_cache_disable",
                    "title": "Выключить кэш приложений",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "268"
                },
                "allow_login_account": {
                    "name": "allow_login_account",
                    "hint": "allow_login_account",
                    "title": "Разрешить вход в личный кабинет",
                    "value": "1",
                    "type": "checkbox",
                    "sort_order": "515"
                },
                "enable_coworker_mode": {
                    "name": "enable_coworker_mode",
                    "hint": "enable_coworker_mode",
                    "title": "Активировать режим совместной работы над записями",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "516"
                },
                "curator_mode_fullaccess": {
                    "name": "curator_mode_fullaccess",
                    "hint": "curator_mode_fullaccess",
                    "title": "Полный доступ куратора к объектам стажера",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "517"
                },
                "curator_mode_chainsallow": {
                    "name": "curator_mode_chainsallow",
                    "hint": "curator_mode_chainsallow",
                    "title": "Разрешить цепочки кураторства",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "518"
                },
                "csrf_salt": {
                    "name": "csrf_salt",
                    "hint": "csrf_salt",
                    "title": "Соль для создания CSRF-токена",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "519"
                },
                "sql_paranoid_mode": {
                    "name": "sql_paranoid_mode",
                    "hint": "sql_paranoid_mode",
                    "title": "Режим максимальной безопасности для входных параметров",
                    "value": "1",
                    "type": "checkbox",
                    "sort_order": "527"
                },
                "dadata_autocomplete_force": {
                    "name": "dadata_autocomplete_force",
                    "hint": "dadata_autocomplete_force",
                    "title": "Принудительно добавить параметр autocomplete для гео-параметров, если в форме есть опция dadata=1. <a href=http://wiki.sitebill.ru/index.php?title=%D0%A0%D0%B0%D1%81%D0%BF%D0%BE%D0%B7%D0%BD%D0%B0%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5_%D0%B0%D0%B4%D1%80%D0%B5%D1%81%D0%BE%D0%B2_%D1%87%D0%B5%D1%80%D0%B5%D0%B7_dadata.ru>?</a>",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "528"
                },
                "use_vue": {
                    "name": "use_vue",
                    "hint": "use_vue",
                    "title": "Использовать VUE",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "540"
                },
                "grid_type": {
                    "name": "grid_type",
                    "hint": "grid_type",
                    "title": "Тип списка объявлений (list - обычная таблица, thumbs - div-блоки",
                    "value": "list",
                    "type": "safe_string",
                    "sort_order": "670"
                },
                "user_pic_width": {
                    "name": "user_pic_width",
                    "hint": "user_pic_width",
                    "title": "Ширина картинки пользователя",
                    "value": "470",
                    "type": "safe_string",
                    "sort_order": "674"
                },
                "user_pic_height": {
                    "name": "user_pic_height",
                    "hint": "user_pic_height",
                    "title": "Высота картинки пользователя",
                    "value": "470",
                    "type": "safe_string",
                    "sort_order": "675"
                }
            }
        },
        {
            "title": "Admin3",
            "key": "apps.admin3",
            "data": {
                "apps.admin3.enable": {
                    "name": "apps.admin3.enable",
                    "hint": "apps.admin3.enable",
                    "title": "Включить приложение Admin3",
                    "value": "1",
                    "type": "checkbox",
                    "sort_order": "319"
                },
                "apps.admin3.alias": {
                    "name": "apps.admin3.alias",
                    "hint": "apps.admin3.alias",
                    "title": "Алиас приложения Admin3",
                    "value": "admin3",
                    "type": "safe_string",
                    "sort_order": "320"
                },
                "apps.admin3.redirect_from_old_admin": {
                    "name": "apps.admin3.redirect_from_old_admin",
                    "hint": "apps.admin3.redirect_from_old_admin",
                    "title": "Включить принудительную переадресацию со старой админки в новую",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "321"
                },
                "apps.admin3.default_app": {
                    "name": "apps.admin3.default_app",
                    "hint": "apps.admin3.default_app",
                    "title": "Запуск приложения по-умолчанию",
                    "value": "data",
                    "type": "safe_string",
                    "sort_order": "322"
                }
            }
        },
        {
            "title": "Akismet-антиспам",
            "key": "apps.akismet",
            "data": {
                "apps.akismet.enable": {
                    "name": "apps.akismet.enable",
                    "hint": "apps.akismet.enable",
                    "title": "Включить антиспам Akismet",
                    "value": "1",
                    "type": "checkbox",
                    "sort_order": "512"
                },
                "apps.akismet.key": {
                    "name": "apps.akismet.key",
                    "hint": "apps.akismet.key Ключ akismet. <a href=\"https://akismet.com/\" target=\"_blank\">Получить ключ</a>",
                    "title": "Ключ akismet. <a href=\"https://akismet.com/\" target=\"_blank\">Получить ключ</a>",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "513"
                },
                "apps.akismet.auth_disable": {
                    "name": "apps.akismet.auth_disable",
                    "hint": "apps.akismet.auth_disable",
                    "title": "Не проверять антиспамом для авторизованных",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "514"
                }
            }
        },
        {
            "title": "CMS Sitebill API",
            "key": "apps.api",
            "data": {
                "apps.api.post_enable": {
                    "name": "apps.api.post_enable",
                    "hint": "apps.api.post_enable",
                    "title": "Включить apps.api.post_enable (добавление записей через простую POST-форму)",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "317"
                },
                "apps.api.post_key": {
                    "name": "apps.api.post_key",
                    "hint": "apps.api.post_key",
                    "title": "Ключ доступа к POST-форме",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "318"
                }
            }
        },
        {
            "title": "Data",
            "key": "apps.data",
            "data": {
                "apps.data.notify_admin_added": {
                    "name": "apps.data.notify_admin_added",
                    "hint": "apps.data.notify_admin_added",
                    "title": "Уведомлять администратора о новых объявлениях из ЛК",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "545"
                },
                "apps.data.disable_excel_import": {
                    "name": "apps.data.disable_excel_import",
                    "hint": "apps.data.disable_excel_import",
                    "title": "Выключить функцию импорта из excel в ЛК",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "546"
                },
                "apps.data.disable_excel_export": {
                    "name": "apps.data.disable_excel_export",
                    "hint": "apps.data.disable_excel_export",
                    "title": "Выключить функцию экспорта в excel в ЛК",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "547"
                },
                "apps.data.disable_format_grid": {
                    "name": "apps.data.disable_format_grid",
                    "hint": "apps.data.disable_format_grid",
                    "title": "Выключить функцию выбора колонок в таблице в ЛК",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "548"
                },
                "apps.data.predefined_grid_items": {
                    "name": "apps.data.predefined_grid_items",
                    "hint": "apps.data.predefined_grid_items Список колонок по-умолчанию Пример: <strong>id, topic_id, city_id, district_id, street_id, price, image</strong>",
                    "title": "Список колонок по-умолчанию Пример: <strong>id, topic_id, city_id, district_id, street_id, price, image</strong>",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "549"
                },
                "apps.data.disable_pdf": {
                    "name": "apps.data.disable_pdf",
                    "hint": "apps.data.disable_pdf",
                    "title": "Выключить функцию экспорта в PDF в ЛК",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "550"
                },
                "apps.data.disable_add_button": {
                    "name": "apps.data.disable_add_button",
                    "hint": "apps.data.disable_add_button",
                    "title": "Выключить кнопку добавления объявлений в ЛК",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "551"
                },
                "apps.data.allow_add_button_group_list": {
                    "name": "apps.data.allow_add_button_group_list",
                    "hint": "apps.data.allow_add_button_group_list Список групп, которым разрешено добавлять объявления. Пример <strong>1,2,3,4</strong>",
                    "title": "Список групп, которым разрешено добавлять объявления. Пример <strong>1,2,3,4</strong>",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "552"
                },
                "apps.data.allow_user_id_change_group_list": {
                    "name": "apps.data.allow_user_id_change_group_list",
                    "hint": "apps.data.allow_user_id_change_group_list Список групп, которым разрешено редактировать user_id. Пример <strong>1,2,3,4</strong>",
                    "title": "Список групп, которым разрешено редактировать user_id. Пример <strong>1,2,3,4</strong>",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "553"
                },
                "apps.data.enable_city_coworker": {
                    "name": "apps.data.enable_city_coworker",
                    "hint": "apps.data.enable_city_coworker",
                    "title": "Включить режим коворкеров по городам (назначение доступа к объявлениям по целому городу)",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "554"
                },
                "apps.data.disable_all_button": {
                    "name": "apps.data.disable_all_button",
                    "hint": "apps.data.disable_all_button",
                    "title": "Выключить кнопку ВСЕ в ЛК",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "555"
                },
                "apps.data.remove_only_all_button": {
                    "name": "apps.data.remove_only_all_button",
                    "hint": "apps.data.remove_only_all_button",
                    "title": "Скрыть кнопку Все, но остановить функцию вывода Всех (для режима куратора полезно)",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "556"
                },
                "apps.data.disable_memory_button": {
                    "name": "apps.data.disable_memory_button",
                    "hint": "apps.data.disable_memory_button",
                    "title": "Выключить кнопку Сохраненные списки в ЛК",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "557"
                },
                "apps.data.disable_delete_button": {
                    "name": "apps.data.disable_delete_button",
                    "hint": "apps.data.disable_delete_button",
                    "title": "Выключить кнопку Удаления в ЛК",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "558"
                },
                "apps.data.disable_edit_button": {
                    "name": "apps.data.disable_edit_button",
                    "hint": "apps.data.disable_edit_button",
                    "title": "Выключить кнопку Редактирования в ЛК",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "559"
                },
                "apps.data.excel_limit": {
                    "name": "apps.data.excel_limit",
                    "hint": "apps.data.excel_limit",
                    "title": "Максимальное количество записей выгружаемых через Excel",
                    "value": "500",
                    "type": "safe_string",
                    "sort_order": "560"
                },
                "apps.data.check_unique_enable": {
                    "name": "apps.data.check_unique_enable",
                    "hint": "apps.data.check_unique_enable",
                    "title": "Включить проверку уникальности текста",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "561"
                },
                "apps.data.check_unique_percent": {
                    "name": "apps.data.check_unique_percent",
                    "hint": "apps.data.check_unique_percent",
                    "title": "Минимальное значение уникальности текста %",
                    "value": "10",
                    "type": "safe_string",
                    "sort_order": "562"
                },
                "apps.data.unique_text_required": {
                    "name": "apps.data.unique_text_required",
                    "hint": "apps.data.unique_text_required",
                    "title": "Сообщение об ошибке при проверке уникальности",
                    "value": "Текст объявления не уникален",
                    "type": "safe_string",
                    "sort_order": "563"
                },
                "apps.data.default_sort": {
                    "name": "apps.data.default_sort",
                    "hint": "apps.data.default_sort",
                    "title": "Сортировка по-умолчанию. Указывается в виде системное имя поля|направление сортировки",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "564"
                },
                "apps.data.use_in_admin": {
                    "name": "apps.data.use_in_admin",
                    "hint": "apps.data.use_in_admin",
                    "title": "Использовать интерфейс apps.data в админке",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "565"
                },
                "apps.data.allow_postponded": {
                    "name": "apps.data.allow_postponded",
                    "hint": "apps.data.allow_postponded",
                    "title": "Включить отложенные объявления",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "566"
                }
            }
        },
        {
            "title": "GeoData",
            "key": "apps.geodata",
            "data": {
                "apps.geodata.enable": {
                    "name": "apps.geodata.enable",
                    "hint": "apps.geodata.enable",
                    "title": "Включить приложение GeoData",
                    "value": "1",
                    "type": "checkbox",
                    "sort_order": "283"
                },
                "apps.geodata.query_count": {
                    "name": "apps.geodata.query_count",
                    "hint": "apps.geodata.query_count",
                    "title": "Количество запросов на геокодирование",
                    "value": "2500",
                    "type": "safe_string",
                    "sort_order": "284"
                },
                "apps.geodata.per_step": {
                    "name": "apps.geodata.per_step",
                    "hint": "apps.geodata.per_step",
                    "title": "Количество записей за проход",
                    "value": "100",
                    "type": "safe_string",
                    "sort_order": "285"
                },
                "apps.geodata.geocode_partial": {
                    "name": "apps.geodata.geocode_partial",
                    "hint": "apps.geodata.geocode_partial",
                    "title": "Геокодировать неполные данные",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "286"
                },
                "apps.geodata.geocode_element_name": {
                    "name": "apps.geodata.geocode_element_name",
                    "hint": "apps.geodata.geocode_element_name",
                    "title": "Имя элемента геоданных",
                    "value": "geo",
                    "type": "safe_string",
                    "sort_order": "287"
                },
                "apps.geodata.new_map_center": {
                    "name": "apps.geodata.new_map_center",
                    "hint": "apps.geodata.new_map_center",
                    "title": "Широта и долгота центра карты для указания положения недвижимости в формате ХХ.XXXXXX,XX.XXXXXX",
                    "value": "55.751667,37.617778",
                    "type": "safe_string",
                    "sort_order": "288"
                },
                "apps.geodata.map_cache_time": {
                    "name": "apps.geodata.map_cache_time",
                    "hint": "apps.geodata.map_cache_time",
                    "title": "Время жизни кэша для карты в секундах (0 - кэш выклюен)",
                    "value": "0",
                    "type": "safe_string",
                    "sort_order": "290"
                },
                "apps.geodata.show_grid_map": {
                    "name": "apps.geodata.show_grid_map",
                    "hint": "apps.geodata.show_grid_map",
                    "title": "Выводить карту вместе со списком объявлений",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "291"
                },
                "apps.geodata.map_zoom_default": {
                    "name": "apps.geodata.map_zoom_default",
                    "hint": "apps.geodata.map_zoom_default",
                    "title": "Масштаб карты",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "292"
                },
                "apps.geodata.allow_view_coding": {
                    "name": "apps.geodata.allow_view_coding",
                    "hint": "apps.geodata.allow_view_coding",
                    "title": "Разрешить геокодирование при просмотре объявления",
                    "value": "0",
                    "type": "safe_string",
                    "sort_order": "293"
                },
                "apps.geodata.try_encode": {
                    "name": "apps.geodata.try_encode",
                    "hint": "apps.geodata.try_encode",
                    "title": "Включить попытку геокодировать положение при сохранении\\изменении объявления",
                    "value": "1",
                    "type": "safe_string",
                    "sort_order": "294"
                },
                "apps.geodata.try_encode_fields": {
                    "name": "apps.geodata.try_encode_fields",
                    "hint": "apps.geodata.try_encode_fields",
                    "title": "Список системных имен полей для геокодирования при сохранении\\изменении объявления(разделитель - запятая)",
                    "value": "city_id,street_id,number",
                    "type": "safe_string",
                    "sort_order": "295"
                },
                "apps.geodata.try_encode_anycase": {
                    "name": "apps.geodata.try_encode_anycase",
                    "hint": "apps.geodata.try_encode_anycase",
                    "title": "Проводить геокодирование даже если координаты указаны",
                    "value": "0",
                    "type": "safe_string",
                    "sort_order": "296"
                },
                "apps.geodata.save_geocoder": {
                    "name": "apps.geodata.save_geocoder",
                    "hint": "apps.geodata.save_geocoder",
                    "title": "Геокодер используемый при сохранении\\изменении (g - Google, y - Yandex)",
                    "value": "g",
                    "type": "safe_string",
                    "sort_order": "297"
                },
                "apps.geodata.prevtext": {
                    "name": "apps.geodata.prevtext",
                    "hint": "apps.geodata.prevtext",
                    "title": "Предварительный текст для геокодирования на форме",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "298"
                },
                "apps.geodata.no_scroll_zoom": {
                    "name": "apps.geodata.no_scroll_zoom",
                    "hint": "apps.geodata.no_scroll_zoom",
                    "title": "Выключить зуммирование карты скроллом",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "299"
                },
                "apps.geodata.iframe_map_limit": {
                    "name": "apps.geodata.iframe_map_limit",
                    "hint": "apps.geodata.iframe_map_limit",
                    "title": "Количество объектов выводимых на iframe-карте. 0 - выводить все",
                    "value": "0",
                    "type": "safe_string",
                    "sort_order": "300"
                },
                "apps.geodata.yandex_api_key_server": {
                    "name": "apps.geodata.yandex_api_key_server",
                    "hint": "apps.geodata.yandex_api_key_server",
                    "title": "Ключь API Yandex",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "567"
                },
                "apps.geodata.iframe_scroll_zoom": {
                    "name": "apps.geodata.iframe_scroll_zoom",
                    "hint": "apps.geodata.iframe_scroll_zoom",
                    "title": "Зумировать карту iframe колесиком мыши",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "568"
                },
                "apps.geodata.use_google_places_api": {
                    "name": "apps.geodata.use_google_places_api",
                    "hint": "apps.geodata.use_google_places_api",
                    "title": "Использовать поиск по адресу на карте Google (Places API)",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "569"
                },
                "apps.geodata.enable_mobile_map_drag": {
                    "name": "apps.geodata.enable_mobile_map_drag",
                    "hint": "apps.geodata.enable_mobile_map_drag",
                    "title": "Разрешить двигать карту на мобильных устройствах",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "570"
                }
            }
        },
        {
            "title": "Mailbox",
            "key": "apps.mailbox",
            "data": {
                "apps.mailbox.enable": {
                    "name": "apps.mailbox.enable",
                    "hint": "apps.mailbox.enable",
                    "title": "Включить приложение Mailbox",
                    "value": "1",
                    "type": "checkbox",
                    "sort_order": "301"
                },
                "apps.mailbox.claim_address": {
                    "name": "apps.mailbox.claim_address",
                    "hint": "apps.mailbox.claim_address",
                    "title": "Адрес электронной почты для отправки жалоб",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "302"
                },
                "apps.mailbox.show_claim_button": {
                    "name": "apps.mailbox.show_claim_button",
                    "hint": "apps.mailbox.show_claim_button",
                    "title": "Показывать кнопку добавления жалобы",
                    "value": "0",
                    "type": "safe_string",
                    "sort_order": "303"
                },
                "apps.mailbox.use_complaint_mode": {
                    "name": "apps.mailbox.use_complaint_mode",
                    "hint": "apps.mailbox.use_complaint_mode",
                    "title": "Включить режим Жалоба",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "304"
                },
                "apps.mailbox.complaint_mode_variants": {
                    "name": "apps.mailbox.complaint_mode_variants",
                    "hint": "apps.mailbox.complaint_mode_variants",
                    "title": "Перечень жалоб",
                    "value": "{1~~Агент/Мошенник}{2~~Продано/Сдано}{3~~Неверная цена}{4~~Неверный адрес}{5~~Недозвониться}",
                    "type": "textarea",
                    "sort_order": "305"
                },
                "apps.mailbox.complaint_black_auto": {
                    "name": "apps.mailbox.complaint_black_auto",
                    "hint": "apps.mailbox.complaint_black_auto",
                    "title": "Автоматически добавлять в черный список",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "306"
                },
                "apps.mailbox.complaint_black_auto_phone_field_name": {
                    "name": "apps.mailbox.complaint_black_auto_phone_field_name",
                    "hint": "apps.mailbox.complaint_black_auto_phone_field_name",
                    "title": "Название поля в таблице data с телефоном, который нужно блокировать",
                    "value": "phone",
                    "type": "safe_string",
                    "sort_order": "571"
                }
            }
        },
        {
            "title": "RSS новостей сайта",
            "key": "apps.rss",
            "data": {
                "apps.rss.enable": {
                    "name": "apps.rss.enable",
                    "hint": "apps.rss.enable",
                    "title": "Включить экспорт RSS",
                    "value": "1",
                    "type": "checkbox",
                    "sort_order": "327"
                },
                "apps.rss.title": {
                    "name": "apps.rss.title",
                    "hint": "apps.rss.title",
                    "title": "Название RSS канала",
                    "value": "Название RSS канала",
                    "type": "safe_string",
                    "sort_order": "328"
                },
                "apps.rss.length": {
                    "name": "apps.rss.length",
                    "hint": "apps.rss.length",
                    "title": "Длинна RSS канала",
                    "value": "50",
                    "type": "safe_string",
                    "sort_order": "329"
                },
                "apps.rss.description": {
                    "name": "apps.rss.description",
                    "hint": "apps.rss.description",
                    "title": "Описание RSS канала",
                    "value": "Описание RSS канала",
                    "type": "safe_string",
                    "sort_order": "330"
                },
                "apps.rss.language": {
                    "name": "apps.rss.language",
                    "hint": "apps.rss.language Код языка канала согласно <a target=\"_blank\" href=\"http://cyber.law.harvard.edu/rss/languages.html\">http://cyber.law.harvard.edu/rss/languages.html</a>",
                    "title": "Код языка канала согласно <a target=\"_blank\" href=\"http://cyber.law.harvard.edu/rss/languages.html\">http://cyber.law.harvard.edu/rss/languages.html</a>",
                    "value": "ru-RU",
                    "type": "safe_string",
                    "sort_order": "331"
                },
                "apps.rss.generator": {
                    "name": "apps.rss.generator",
                    "hint": "apps.rss.generator",
                    "title": "Название генератора RSS канала",
                    "value": "CMS Sitebill Application RSS",
                    "type": "safe_string",
                    "sort_order": "332"
                },
                "apps.rss.editor_email": {
                    "name": "apps.rss.editor_email",
                    "hint": "apps.rss.editor_email",
                    "title": "Адрес электронной почты лица, ответственного за редакционное содержание",
                    "value": "editor_email@somemail.ru",
                    "type": "safe_string",
                    "sort_order": "333"
                },
                "apps.rss.webmaster_email": {
                    "name": "apps.rss.webmaster_email",
                    "hint": "apps.rss.webmaster_email",
                    "title": "Адрес электронной почты лица, ответственного за технические вопросы, касающиеся канала",
                    "value": "webmaster_email@somemail.ru",
                    "type": "safe_string",
                    "sort_order": "334"
                },
                "apps.rss.enable_realty": {
                    "name": "apps.rss.enable_realty",
                    "hint": "apps.rss.enable_realty",
                    "title": "Разрешить RSS для объявлений",
                    "value": "0",
                    "type": "safe_string",
                    "sort_order": "335"
                },
                "apps.rss.data_image": {
                    "name": "apps.rss.data_image",
                    "hint": "apps.rss.data_image",
                    "title": "Системное имя поля фото объекта",
                    "value": "image",
                    "type": "safe_string",
                    "sort_order": "336"
                },
                "apps.rss.news_text": {
                    "name": "apps.rss.news_text",
                    "hint": "apps.rss.news_text",
                    "title": "Системное имя поля с текстом для новости",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "337"
                },
                "apps.rss.news_image": {
                    "name": "apps.rss.news_image",
                    "hint": "apps.rss.news_image",
                    "title": "Системное имя поля фото новости",
                    "value": "image",
                    "type": "safe_string",
                    "sort_order": "338"
                },
                "apps.rss.news_title": {
                    "name": "apps.rss.news_title",
                    "hint": "apps.rss.news_title",
                    "title": "Системное имя поля заголовка новости",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "339"
                },
                "apps.rss.data_title": {
                    "name": "apps.rss.data_title",
                    "hint": "apps.rss.data_title",
                    "title": "Системное имя поля заголовка объекта",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "340"
                },
                "apps.rss.data_description": {
                    "name": "apps.rss.data_description",
                    "hint": "apps.rss.data_description",
                    "title": "Системное имя поля описания объекта",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "341"
                },
                "apps.rss.data_description_max": {
                    "name": "apps.rss.data_description_max",
                    "hint": "apps.rss.data_description_max",
                    "title": "Максимальная длинна описания",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "342"
                },
                "apps.rss.data_descriptionfields": {
                    "name": "apps.rss.data_descriptionfields",
                    "hint": "apps.rss.data_descriptionfields",
                    "title": "Список системных имен полей для описания объекта",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "343"
                },
                "apps.rss.data_date": {
                    "name": "apps.rss.data_date",
                    "hint": "apps.rss.data_date",
                    "title": "Системное имя поля даты размещения объекта",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "344"
                },
                "apps.rss.data_mode": {
                    "name": "apps.rss.data_mode",
                    "hint": "apps.rss.data_mode",
                    "title": "Тип формирования фида объявлений (0-стандартный, 1-расширенный)",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "345"
                },
                "apps.rss.data_length": {
                    "name": "apps.rss.data_length",
                    "hint": "apps.rss.data_length",
                    "title": "Длинна RSS канала объявлений",
                    "value": "50",
                    "type": "safe_string",
                    "sort_order": "346"
                },
                "apps.rss.articles_length": {
                    "name": "apps.rss.articles_length",
                    "hint": "apps.rss.articles_length",
                    "title": "Длинна RSS канала статей",
                    "value": "50",
                    "type": "safe_string",
                    "sort_order": "347"
                },
                "apps.rss.articles_text": {
                    "name": "apps.rss.articles_text",
                    "hint": "apps.rss.articles_text",
                    "title": "Системное имя поля описания статьи",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "348"
                },
                "apps.rss.articles_image": {
                    "name": "apps.rss.articles_image",
                    "hint": "apps.rss.articles_image",
                    "title": "Системное имя поля изображения статьи",
                    "value": "image",
                    "type": "safe_string",
                    "sort_order": "349"
                },
                "apps.rss.articles_title": {
                    "name": "apps.rss.articles_title",
                    "hint": "apps.rss.articles_title",
                    "title": "Системное имя поля заголовка статьи",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "350"
                },
                "apps.rss.articles_cachediff": {
                    "name": "apps.rss.articles_cachediff",
                    "hint": "apps.rss.articles_cachediff",
                    "title": "Время кеширование в секундах для фида статей",
                    "value": "0",
                    "type": "safe_string",
                    "sort_order": "351"
                },
                "apps.rss.data_cachediff": {
                    "name": "apps.rss.data_cachediff",
                    "hint": "apps.rss.data_cachediff",
                    "title": "Время кеширование в секундах для фида объявлений",
                    "value": "0",
                    "type": "safe_string",
                    "sort_order": "352"
                },
                "apps.rss.news_cachediff": {
                    "name": "apps.rss.news_cachediff",
                    "hint": "apps.rss.news_cachediff",
                    "title": "Время кеширование в секундах для фида новостей",
                    "value": "0",
                    "type": "safe_string",
                    "sort_order": "353"
                },
                "apps.rss.data_chanel_title": {
                    "name": "apps.rss.data_chanel_title",
                    "hint": "apps.rss.data_chanel_title",
                    "title": "Название RSS канала объектов",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "572"
                },
                "apps.rss.articles_chanel_title": {
                    "name": "apps.rss.articles_chanel_title",
                    "hint": "apps.rss.articles_chanel_title",
                    "title": "Название RSS канала статей",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "573"
                },
                "apps.rss.data_chanel_description": {
                    "name": "apps.rss.data_chanel_description",
                    "hint": "apps.rss.data_chanel_description",
                    "title": "Описание RSS канала объектов",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "574"
                },
                "apps.rss.articles_chanel_description": {
                    "name": "apps.rss.articles_chanel_description",
                    "hint": "apps.rss.articles_chanel_description",
                    "title": "Описание RSS канала статей",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "575"
                },
                "apps.rss.data_imgcount": {
                    "name": "apps.rss.data_imgcount",
                    "hint": "apps.rss.data_imgcount",
                    "title": "Количество фото прикрепляемых к объекту (по-умолчанию - 1)",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "576"
                },
                "apps.rss.data_user_info": {
                    "name": "apps.rss.data_user_info",
                    "hint": "apps.rss.data_user_info",
                    "title": "Добавлять информацию об агенте в фид",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "577"
                }
            }
        },
        {
            "title": "Realty Logger v2",
            "key": "apps.realtylogv2",
            "data": {
                "apps.realtylogv2.enable": {
                    "name": "apps.realtylogv2.enable",
                    "hint": "apps.realtylogv2.enable",
                    "title": "Включить приложение Realty Logger v2",
                    "value": "0",
                    "type": "safe_string",
                    "sort_order": "354"
                },
                "apps.realtylogv2.namespace": {
                    "name": "apps.realtylogv2.namespace",
                    "hint": "apps.realtylogv2.namespace",
                    "title": "Пространство адресов",
                    "value": "realtylogs",
                    "type": "safe_string",
                    "sort_order": "355"
                },
                "apps.realtylogv2.per_page": {
                    "name": "apps.realtylogv2.per_page",
                    "hint": "apps.realtylogv2.per_page",
                    "title": "Кол-во записей на страницу",
                    "value": "10",
                    "type": "safe_string",
                    "sort_order": "356"
                },
                "apps.realtylogv2.restore_notactive": {
                    "name": "apps.realtylogv2.restore_notactive",
                    "hint": "apps.realtylogv2.restore_notactive",
                    "title": "Восстанавливать в неактивном состоянии",
                    "value": "0",
                    "type": "safe_string",
                    "sort_order": "357"
                },
                "apps.realtylogv2.refresh_adddate": {
                    "name": "apps.realtylogv2.refresh_adddate",
                    "hint": "apps.realtylogv2.refresh_adddate",
                    "title": "Обновлять дату добавления на текущую",
                    "value": "0",
                    "type": "safe_string",
                    "sort_order": "358"
                },
                "apps.realtylogv2.classic_view": {
                    "name": "apps.realtylogv2.classic_view",
                    "hint": "apps.realtylogv2.classic_view",
                    "title": "Классический вид",
                    "value": "0",
                    "type": "safe_string",
                    "sort_order": "359"
                },
                "apps.realtylogv2.search_key": {
                    "name": "apps.realtylogv2.search_key",
                    "hint": "apps.realtylogv2.search_key",
                    "title": "Название переменной из REQUEST по которой будет выполняться поиск",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "360"
                },
                "apps.realtylogv2.search_columns": {
                    "name": "apps.realtylogv2.search_columns",
                    "hint": "apps.realtylogv2.search_columns Список названий колонок из модели data среди которых будет выполняться поиск по ключу search_key. Например, <strong>phone, owner_phone, text</strong>",
                    "title": "Список названий колонок из модели data среди которых будет выполняться поиск по ключу search_key. Например, <strong>phone, owner_phone, text</strong>",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "361"
                }
            }
        },
        {
            "title": "RealtyView",
            "key": "apps.realtyview",
            "data": {
                "apps.realtyview.enable": {
                    "name": "apps.realtyview.enable",
                    "hint": "apps.realtyview.enable",
                    "title": "Включить приложение RealtyView",
                    "value": "0",
                    "type": "safe_string",
                    "sort_order": "362"
                }
            }
        },
        {
            "title": "SEO-Оптимизация",
            "key": "apps.seo",
            "data": {
                "apps.seo.html_prefix_enable": {
                    "name": "apps.seo.html_prefix_enable",
                    "hint": "apps.seo.html_prefix_enable",
                    "title": "Включить .html постфиксы в конце URL объявлений",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "269"
                },
                "apps.seo.level_enable": {
                    "name": "apps.seo.level_enable",
                    "hint": "apps.seo.level_enable",
                    "title": "Включить SEO-режим с многоуровневым URL для каталогов. Прежде чем включить этот режим, внимательно ознакомьтесь с <a href=\"http://www.sitebill.ru/seo-level.html\" target=\"_blank\">инструкцией</a>",
                    "value": "1",
                    "type": "checkbox",
                    "sort_order": "270"
                },
                "apps.seo.data_alias_enable": {
                    "name": "apps.seo.data_alias_enable",
                    "hint": "apps.seo.data_alias_enable",
                    "title": "Включить SEO-режим с расширенными ссылками объявлений.",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "271"
                },
                "apps.seo.allow_custom_realty_aliases": {
                    "name": "apps.seo.allow_custom_realty_aliases",
                    "hint": "apps.seo.allow_custom_realty_aliases",
                    "title": "Разрешить установку нестандартных алиасов",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "272"
                },
                "apps.seo.allow_custom_realty_aliase_fields": {
                    "name": "apps.seo.allow_custom_realty_aliase_fields",
                    "hint": "apps.seo.allow_custom_realty_aliase_fields",
                    "title": "Набор полей нестандартных алиасов",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "273"
                },
                "apps.seo.country_info_in_realty_view": {
                    "name": "apps.seo.country_info_in_realty_view",
                    "hint": "apps.seo.country_info_in_realty_view",
                    "title": "Добавить информацию о стране в карточку объекта",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "274"
                },
                "apps.seo.region_info_in_realty_view": {
                    "name": "apps.seo.region_info_in_realty_view",
                    "hint": "apps.seo.region_info_in_realty_view",
                    "title": "Добавить информацию о регионе в карточку объекта",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "275"
                },
                "apps.seo.city_info_in_realty_view": {
                    "name": "apps.seo.city_info_in_realty_view",
                    "hint": "apps.seo.city_info_in_realty_view",
                    "title": "Добавить информацию о городе в карточку объекта",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "276"
                },
                "apps.seo.no_country_url": {
                    "name": "apps.seo.no_country_url",
                    "hint": "apps.seo.no_country_url",
                    "title": "Не перехватывать алиасы стран",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "277"
                },
                "apps.seo.no_region_url": {
                    "name": "apps.seo.no_region_url",
                    "hint": "apps.seo.no_region_url",
                    "title": "Не перехватывать алиасы регионов",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "278"
                },
                "apps.seo.no_city_url": {
                    "name": "apps.seo.no_city_url",
                    "hint": "apps.seo.no_city_url",
                    "title": "Не перехватывать алиасы городов",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "279"
                },
                "apps.seo.no_metro_url": {
                    "name": "apps.seo.no_metro_url",
                    "hint": "apps.seo.no_metro_url",
                    "title": "Не перехватывать алиасы станций метро",
                    "value": "1",
                    "type": "checkbox",
                    "sort_order": "280"
                },
                "apps.seo.no_trailing_slashes": {
                    "name": "apps.seo.no_trailing_slashes",
                    "hint": "apps.seo.no_trailing_slashes",
                    "title": "Не использовать концевые слеши",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "281"
                },
                "apps.seo.realty_alias": {
                    "name": "apps.seo.realty_alias",
                    "hint": "apps.seo.realty_alias",
                    "title": "Подстановочная часть стандартного алиаса объявления",
                    "value": "realty",
                    "type": "safe_string",
                    "sort_order": "282"
                }
            }
        },
        {
            "title": "SiteMap",
            "key": "apps.sitemap",
            "data": {
                "apps.sitemap.priority.news": {
                    "name": "apps.sitemap.priority.news",
                    "title": "Приоритетность URL <b>раздела новостей</b> относительно других URL на Вашем сайте. Диапазон от 0.0 до 1.0",
                    "value": "0.5",
                    "type": "safe_string",
                    "hint": "apps.sitemap.priority.news Приоритетность URL <b>раздела новостей</b> относительно других URL на Вашем сайте. Диапазон от 0.0 до 1.0",
                    "sort_order": "363"
                },
                "apps.sitemap.priority.topic": {
                    "name": "apps.sitemap.priority.topic",
                    "title": "Приоритетность URL <b>категорий</b> относительно других URL на Вашем сайте. Диапазон от 0.0 до 1.0",
                    "value": "0.5",
                    "type": "safe_string",
                    "hint": "apps.sitemap.priority.topic Приоритетность URL <b>категорий</b> относительно других URL на Вашем сайте. Диапазон от 0.0 до 1.0",
                    "sort_order": "364"
                },
                "apps.sitemap.priority.page": {
                    "name": "apps.sitemap.priority.page",
                    "title": "Приоритетность URL <b>статических страниц</b> относительно других URL на Вашем сайте. Диапазон от 0.0 до 1.0",
                    "value": "0.5",
                    "type": "safe_string",
                    "hint": "apps.sitemap.priority.page Приоритетность URL <b>статических страниц</b> относительно других URL на Вашем сайте. Диапазон от 0.0 до 1.0",
                    "sort_order": "365"
                },
                "apps.sitemap.priority.menu": {
                    "name": "apps.sitemap.priority.menu",
                    "title": "Приоритетность URL <b>дополнительных меню</b> относительно других URL на Вашем сайте. Диапазон от 0.0 до 1.0",
                    "value": "0.5",
                    "type": "safe_string",
                    "hint": "apps.sitemap.priority.menu Приоритетность URL <b>дополнительных меню</b> относительно других URL на Вашем сайте. Диапазон от 0.0 до 1.0",
                    "sort_order": "366"
                },
                "apps.sitemap.priority.data": {
                    "name": "apps.sitemap.priority.data",
                    "title": "Приоритетность URL <b>объявлений</b> относительно других URL на Вашем сайте. Диапазон от 0.0 до 1.0",
                    "value": "0.5",
                    "type": "safe_string",
                    "hint": "apps.sitemap.priority.data Приоритетность URL <b>объявлений</b> относительно других URL на Вашем сайте. Диапазон от 0.0 до 1.0",
                    "sort_order": "367"
                },
                "apps.sitemap.priority.country": {
                    "name": "apps.sitemap.priority.country",
                    "hint": "apps.sitemap.priority.country Приоритетность URL <b>Стран</b> относительно других URL на Вашем сайте. Диапазон от 0.0 до 1.0",
                    "title": "Приоритетность URL <b>Стран</b> относительно других URL на Вашем сайте. Диапазон от 0.0 до 1.0",
                    "value": "0.5",
                    "type": "safe_string",
                    "sort_order": "368"
                },
                "apps.sitemap.priority.city": {
                    "name": "apps.sitemap.priority.city",
                    "hint": "apps.sitemap.priority.city Приоритетность URL <b>Городов</b> относительно других URL на Вашем сайте. Диапазон от 0.0 до 1.0",
                    "title": "Приоритетность URL <b>Городов</b> относительно других URL на Вашем сайте. Диапазон от 0.0 до 1.0",
                    "value": "0.5",
                    "type": "safe_string",
                    "sort_order": "369"
                },
                "apps.sitemap.priority.company": {
                    "name": "apps.sitemap.priority.company",
                    "title": "Приоритетность URL <b>компании</b> относительно других URL на Вашем сайте. Диапазон от 0.0 до 1.0",
                    "value": "0.5",
                    "type": "safe_string",
                    "hint": "apps.sitemap.priority.company Приоритетность URL <b>компании</b> относительно других URL на Вашем сайте. Диапазон от 0.0 до 1.0",
                    "sort_order": "370"
                },
                "apps.sitemap.priority.company_topic": {
                    "name": "apps.sitemap.priority.company_topic",
                    "hint": "apps.sitemap.priority.company_topic Приоритетность URL <b>разделов компаний</b> относительно других URL на Вашем сайте. Диапазон от 0.0 до 1.0",
                    "title": "Приоритетность URL <b>разделов компаний</b> относительно других URL на Вашем сайте. Диапазон от 0.0 до 1.0",
                    "value": "0.5",
                    "type": "safe_string",
                    "sort_order": "371"
                },
                "apps.sitemap.changefreq.news": {
                    "name": "apps.sitemap.changefreq.news",
                    "hint": "apps.sitemap.changefreq.news Вероятная частота изменения <b>страницы раздела новостей</b>. Одно из числовых значений (1-всегда, 2-ежечасно, 3-ежедневно, 4-еженедельно, 5-ежемесячно, 6-ежегодно, 7-никогда)",
                    "title": "Вероятная частота изменения <b>страницы раздела новостей</b>. Одно из числовых значений (1-всегда, 2-ежечасно, 3-ежедневно, 4-еженедельно, 5-ежемесячно, 6-ежегодно, 7-никогда)",
                    "value": "3",
                    "type": "select_box",
                    "select_data": {
                        "1": "всегда",
                        "2": "ежечасно",
                        "3": "ежедневно",
                        "4": "еженедельно",
                        "5": "ежемесячно",
                        "6": "ежегодно",
                        "7": "никогда"
                    },
                    "select_data_indexed": [
                        {
                            "id": 1,
                            "value": "всегда"
                        },
                        {
                            "id": 2,
                            "value": "ежечасно"
                        },
                        {
                            "id": 3,
                            "value": "ежедневно"
                        },
                        {
                            "id": 4,
                            "value": "еженедельно"
                        },
                        {
                            "id": 5,
                            "value": "ежемесячно"
                        },
                        {
                            "id": 6,
                            "value": "ежегодно"
                        },
                        {
                            "id": 7,
                            "value": "никогда"
                        }
                    ],
                    "sort_order": "372"
                },
                "apps.sitemap.changefreq.country": {
                    "name": "apps.sitemap.changefreq.country",
                    "hint": "apps.sitemap.changefreq.country Вероятная частота изменения <b>страницы Страны</b>. Одно из числовых значений (1-всегда, 2-ежечасно, 3-ежедневно, 4-еженедельно, 5-ежемесячно, 6-ежегодно, 7-никогда)",
                    "title": "Вероятная частота изменения <b>страницы Страны</b>. Одно из числовых значений (1-всегда, 2-ежечасно, 3-ежедневно, 4-еженедельно, 5-ежемесячно, 6-ежегодно, 7-никогда)",
                    "value": "3",
                    "type": "safe_string",
                    "sort_order": "373"
                },
                "apps.sitemap.changefreq.city": {
                    "name": "apps.sitemap.changefreq.city",
                    "hint": "apps.sitemap.changefreq.city Вероятная частота изменения <b>страницы Города</b>. Одно из числовых значений (1-всегда, 2-ежечасно, 3-ежедневно, 4-еженедельно, 5-ежемесячно, 6-ежегодно, 7-никогда)",
                    "title": "Вероятная частота изменения <b>страницы Города</b>. Одно из числовых значений (1-всегда, 2-ежечасно, 3-ежедневно, 4-еженедельно, 5-ежемесячно, 6-ежегодно, 7-никогда)",
                    "value": "3",
                    "type": "safe_string",
                    "sort_order": "374"
                },
                "apps.sitemap.changefreq.topic": {
                    "name": "apps.sitemap.changefreq.topic",
                    "hint": "apps.sitemap.changefreq.topic Вероятная частота изменения <b>страницы категории</b>. Одно из числовых значений (1-всегда, 2-ежечасно, 3-ежедневно, 4-еженедельно, 5-ежемесячно, 6-ежегодно, 7-никогда)",
                    "title": "Вероятная частота изменения <b>страницы категории</b>. Одно из числовых значений (1-всегда, 2-ежечасно, 3-ежедневно, 4-еженедельно, 5-ежемесячно, 6-ежегодно, 7-никогда)",
                    "value": "3",
                    "type": "select_box",
                    "select_data": {
                        "1": "всегда",
                        "2": "ежечасно",
                        "3": "ежедневно",
                        "4": "еженедельно",
                        "5": "ежемесячно",
                        "6": "ежегодно",
                        "7": "никогда"
                    },
                    "select_data_indexed": [
                        {
                            "id": 1,
                            "value": "всегда"
                        },
                        {
                            "id": 2,
                            "value": "ежечасно"
                        },
                        {
                            "id": 3,
                            "value": "ежедневно"
                        },
                        {
                            "id": 4,
                            "value": "еженедельно"
                        },
                        {
                            "id": 5,
                            "value": "ежемесячно"
                        },
                        {
                            "id": 6,
                            "value": "ежегодно"
                        },
                        {
                            "id": 7,
                            "value": "никогда"
                        }
                    ],
                    "sort_order": "375"
                },
                "apps.sitemap.changefreq.page": {
                    "name": "apps.sitemap.changefreq.page",
                    "hint": "apps.sitemap.changefreq.page Вероятная частота изменения <b>статической страницы</b>. Одно из числовых значений (1-всегда, 2-ежечасно, 3-ежедневно, 4-еженедельно, 5-ежемесячно, 6-ежегодно, 7-никогда)",
                    "title": "Вероятная частота изменения <b>статической страницы</b>. Одно из числовых значений (1-всегда, 2-ежечасно, 3-ежедневно, 4-еженедельно, 5-ежемесячно, 6-ежегодно, 7-никогда)",
                    "value": "5",
                    "type": "select_box",
                    "select_data": {
                        "1": "всегда",
                        "2": "ежечасно",
                        "3": "ежедневно",
                        "4": "еженедельно",
                        "5": "ежемесячно",
                        "6": "ежегодно",
                        "7": "никогда"
                    },
                    "select_data_indexed": [
                        {
                            "id": 1,
                            "value": "всегда"
                        },
                        {
                            "id": 2,
                            "value": "ежечасно"
                        },
                        {
                            "id": 3,
                            "value": "ежедневно"
                        },
                        {
                            "id": 4,
                            "value": "еженедельно"
                        },
                        {
                            "id": 5,
                            "value": "ежемесячно"
                        },
                        {
                            "id": 6,
                            "value": "ежегодно"
                        },
                        {
                            "id": 7,
                            "value": "никогда"
                        }
                    ],
                    "sort_order": "376"
                },
                "apps.sitemap.changefreq.menu": {
                    "name": "apps.sitemap.changefreq.menu",
                    "hint": "apps.sitemap.changefreq.menu Вероятная частота изменения <b>вспомогательных меню</b>. Одно из числовых значений (1-всегда, 2-ежечасно, 3-ежедневно, 4-еженедельно, 5-ежемесячно, 6-ежегодно, 7-никогда)",
                    "title": "Вероятная частота изменения <b>вспомогательных меню</b>. Одно из числовых значений (1-всегда, 2-ежечасно, 3-ежедневно, 4-еженедельно, 5-ежемесячно, 6-ежегодно, 7-никогда)",
                    "value": "5",
                    "type": "select_box",
                    "select_data": {
                        "1": "всегда",
                        "2": "ежечасно",
                        "3": "ежедневно",
                        "4": "еженедельно",
                        "5": "ежемесячно",
                        "6": "ежегодно",
                        "7": "никогда"
                    },
                    "select_data_indexed": [
                        {
                            "id": 1,
                            "value": "всегда"
                        },
                        {
                            "id": 2,
                            "value": "ежечасно"
                        },
                        {
                            "id": 3,
                            "value": "ежедневно"
                        },
                        {
                            "id": 4,
                            "value": "еженедельно"
                        },
                        {
                            "id": 5,
                            "value": "ежемесячно"
                        },
                        {
                            "id": 6,
                            "value": "ежегодно"
                        },
                        {
                            "id": 7,
                            "value": "никогда"
                        }
                    ],
                    "sort_order": "377"
                },
                "apps.sitemap.changefreq.data": {
                    "name": "apps.sitemap.changefreq.data",
                    "hint": "apps.sitemap.changefreq.data Вероятная частота изменения <b>объявления</b>. Одно из числовых значений (1-всегда, 2-ежечасно, 3-ежедневно, 4-еженедельно, 5-ежемесячно, 6-ежегодно, 7-никогда)",
                    "title": "Вероятная частота изменения <b>объявления</b>. Одно из числовых значений (1-всегда, 2-ежечасно, 3-ежедневно, 4-еженедельно, 5-ежемесячно, 6-ежегодно, 7-никогда)",
                    "value": "4",
                    "type": "select_box",
                    "select_data": {
                        "1": "всегда",
                        "2": "ежечасно",
                        "3": "ежедневно",
                        "4": "еженедельно",
                        "5": "ежемесячно",
                        "6": "ежегодно",
                        "7": "никогда"
                    },
                    "select_data_indexed": [
                        {
                            "id": 1,
                            "value": "всегда"
                        },
                        {
                            "id": 2,
                            "value": "ежечасно"
                        },
                        {
                            "id": 3,
                            "value": "ежедневно"
                        },
                        {
                            "id": 4,
                            "value": "еженедельно"
                        },
                        {
                            "id": 5,
                            "value": "ежемесячно"
                        },
                        {
                            "id": 6,
                            "value": "ежегодно"
                        },
                        {
                            "id": 7,
                            "value": "никогда"
                        }
                    ],
                    "sort_order": "378"
                },
                "apps.sitemap.changefreq.company": {
                    "name": "apps.sitemap.changefreq.company",
                    "hint": "apps.sitemap.changefreq.company Вероятная частота изменения информации о <b>компании</b>. Одно из числовых значений (1-всегда, 2-ежечасно, 3-ежедневно, 4-еженедельно, 5-ежемесячно, 6-ежегодно, 7-никогда)",
                    "title": "Вероятная частота изменения информации о <b>компании</b>. Одно из числовых значений (1-всегда, 2-ежечасно, 3-ежедневно, 4-еженедельно, 5-ежемесячно, 6-ежегодно, 7-никогда)",
                    "value": "5",
                    "type": "select_box",
                    "select_data": {
                        "1": "всегда",
                        "2": "ежечасно",
                        "3": "ежедневно",
                        "4": "еженедельно",
                        "5": "ежемесячно",
                        "6": "ежегодно",
                        "7": "никогда"
                    },
                    "select_data_indexed": [
                        {
                            "id": 1,
                            "value": "всегда"
                        },
                        {
                            "id": 2,
                            "value": "ежечасно"
                        },
                        {
                            "id": 3,
                            "value": "ежедневно"
                        },
                        {
                            "id": 4,
                            "value": "еженедельно"
                        },
                        {
                            "id": 5,
                            "value": "ежемесячно"
                        },
                        {
                            "id": 6,
                            "value": "ежегодно"
                        },
                        {
                            "id": 7,
                            "value": "никогда"
                        }
                    ],
                    "sort_order": "379"
                },
                "apps.sitemap.changefreq.company_topic": {
                    "name": "apps.sitemap.changefreq.company_topic",
                    "hint": "apps.sitemap.changefreq.company_topic Вероятная частота изменения информации о <b>разделах компаний</b>. Одно из числовых значений (1-всегда, 2-ежечасно, 3-ежедневно, 4-еженедельно, 5-ежемесячно, 6-ежегодно, 7-никогда)",
                    "title": "Вероятная частота изменения информации о <b>разделах компаний</b>. Одно из числовых значений (1-всегда, 2-ежечасно, 3-ежедневно, 4-еженедельно, 5-ежемесячно, 6-ежегодно, 7-никогда)",
                    "value": "5",
                    "type": "safe_string",
                    "sort_order": "380"
                },
                "apps.sitemap.data_enable": {
                    "name": "apps.sitemap.data_enable",
                    "hint": "apps.sitemap.data_enable",
                    "title": "Выводить объявления в sitemap",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "381"
                },
                "apps.sitemap.company_enable": {
                    "name": "apps.sitemap.company_enable",
                    "hint": "apps.sitemap.company_enable",
                    "title": "Выводить компании в sitemap",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "382"
                },
                "apps.sitemap.topics_enable": {
                    "name": "apps.sitemap.topics_enable",
                    "hint": "apps.sitemap.topics_enable",
                    "title": "Выводить категории в sitemap",
                    "value": "1",
                    "type": "safe_string",
                    "sort_order": "383"
                },
                "apps.sitemap.country_enable": {
                    "name": "apps.sitemap.country_enable",
                    "hint": "apps.sitemap.country_enable",
                    "title": "Выводить страны в sitemap",
                    "value": "0",
                    "type": "safe_string",
                    "sort_order": "384"
                },
                "apps.sitemap.city_enable": {
                    "name": "apps.sitemap.city_enable",
                    "hint": "apps.sitemap.city_enable",
                    "title": "Выводить города в sitemap",
                    "value": "0",
                    "type": "safe_string",
                    "sort_order": "385"
                },
                "apps.sitemap.sitemaplivetime": {
                    "name": "apps.sitemap.sitemaplivetime",
                    "hint": "apps.sitemap.sitemaplivetime",
                    "title": "Срок жизни файла карты сайта в секундах",
                    "value": "86400",
                    "type": "safe_string",
                    "sort_order": "386"
                },
                "apps.sitemap.use_lock_file": {
                    "name": "apps.sitemap.use_lock_file",
                    "hint": "apps.sitemap.use_lock_file",
                    "title": "Использовать lock-файл на момент генерации sitemap (если база очень большая)",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "586"
                }
            }
        },
        {
            "title": "System logger",
            "key": "apps.logger",
            "data": {
                "apps.logger.enable": {
                    "name": "apps.logger.enable",
                    "hint": "apps.logger.enable",
                    "title": "Включить приложение Logger",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "314"
                },
                "apps.logger.limit": {
                    "name": "apps.logger.limit",
                    "hint": "apps.logger.limit",
                    "title": "Максимальное количество записей в таблице лога",
                    "value": "1000",
                    "type": "safe_string",
                    "sort_order": "315"
                },
                "apps.logger.per_page": {
                    "name": "apps.logger.per_page",
                    "hint": "apps.logger.per_page",
                    "title": "Количество сообщений на страницу",
                    "value": "50",
                    "type": "safe_string",
                    "sort_order": "316"
                }
            }
        },
        {
            "title": "core.listing",
            "key": "core.listing",
            "data": {
                "core.listing.pager_draw_all": {
                    "name": "core.listing.pager_draw_all",
                    "hint": "core.listing.pager_draw_all",
                    "title": "Отрисовывать все страницы в постраничной навигации",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "9"
                },
                "core.listing.pager_page_offset": {
                    "name": "core.listing.pager_page_offset",
                    "hint": "core.listing.pager_page_offset",
                    "title": "Количество страниц показываемых в обе стороны от активной",
                    "value": "7",
                    "type": "safe_string",
                    "sort_order": "10"
                },
                "core.listing.pager_draw_all_max": {
                    "name": "core.listing.pager_draw_all_max",
                    "hint": "core.listing.pager_draw_all_max",
                    "title": "Максимальное число страниц, до которого в пейджере будут отображаться все страницы",
                    "value": "0",
                    "type": "safe_string",
                    "sort_order": "11"
                },
                "core.listing.pager_end_buttons": {
                    "name": "core.listing.pager_end_buttons",
                    "hint": "core.listing.pager_end_buttons",
                    "title": "Отображать кнопки Первая-Последняя",
                    "value": "1",
                    "type": "checkbox",
                    "sort_order": "12"
                },
                "core.listing.pager_prev_buttons": {
                    "name": "core.listing.pager_prev_buttons",
                    "hint": "core.listing.pager_prev_buttons",
                    "title": "Отображать кнопки Предыдущая-Следующая",
                    "value": "1",
                    "type": "checkbox",
                    "sort_order": "13"
                },
                "core.listing.pager_show_prefixes": {
                    "name": "core.listing.pager_show_prefixes",
                    "hint": "core.listing.pager_show_prefixes",
                    "title": "Отображать префиксы для пропущенных страниц",
                    "value": "1",
                    "type": "checkbox",
                    "sort_order": "14"
                },
                "core.listing.add_user_info": {
                    "name": "core.listing.add_user_info",
                    "hint": "core.listing.add_user_info",
                    "title": "Выбирать данные пользователя",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "83"
                },
                "core.listing.add_user_info_fields": {
                    "name": "core.listing.add_user_info_fields",
                    "hint": "core.listing.add_user_info_fields",
                    "title": "Список выбираемых данных пользователя",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "84"
                },
                "core.listing.select_query_fields": {
                    "name": "core.listing.select_query_fields",
                    "hint": "core.listing.select_query_fields",
                    "title": "Список select_by_query-полей необходимых для подбора",
                    "value": "",
                    "type": "textarea",
                    "sort_order": "85"
                }
            }
        },
        {
            "title": "template.agency",
            "key": "template.agency",
            "data": {
                "template.agency.logo": {
                    "name": "template.agency.logo",
                    "title": "Шаблон Agency. Файл логотипа.",
                    "value": "logo.gif",
                    "type": "safe_string",
                    "hint": "template.agency.logo",
                    "sort_order": "134"
                }
            }
        },
        {
            "title": "template.realia",
            "key": "template.realia",
            "data": {
                "template.realia.homepagetype": {
                    "name": "template.realia.homepagetype",
                    "hint": "template.realia.homepagetype",
                    "title": "Тип главной страницы (classic|slider|carousel|search)",
                    "value": "classic",
                    "type": "safe_string",
                    "sort_order": "671"
                },
                "template.realia.show_mortgage_calculator": {
                    "name": "template.realia.show_mortgage_calculator",
                    "hint": "template.realia.show_mortgage_calculator",
                    "title": "Показывать калькулятор ипотеки",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "672"
                }
            }
        },
        {
            "title": "Авторизация через соц.сети",
            "key": "apps.socialauth",
            "data": {
                "apps.socialauth.vk.enable": {
                    "name": "apps.socialauth.vk.enable",
                    "hint": "apps.socialauth.vk.enable",
                    "title": "Включить авторизацию через Вконтакте",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "128"
                },
                "apps.socialauth.vk.api_key": {
                    "name": "apps.socialauth.vk.api_key",
                    "hint": "apps.socialauth.vk.api_key",
                    "title": "VK API_KEY",
                    "value": "vk api_key",
                    "type": "safe_string",
                    "sort_order": "129"
                },
                "apps.socialauth.vk.secret": {
                    "name": "apps.socialauth.vk.secret",
                    "hint": "apps.socialauth.vk.secret",
                    "title": "VK SECRET",
                    "value": "vk secret",
                    "type": "safe_string",
                    "sort_order": "130"
                },
                "apps.socialauth.vk.redirect_url": {
                    "name": "apps.socialauth.vk.redirect_url",
                    "hint": "apps.socialauth.vk.redirect_url",
                    "title": "vk redirect_url",
                    "value": "vk redirect_url",
                    "type": "safe_string",
                    "sort_order": "131"
                },
                "apps.socialauth.fb.enable": {
                    "name": "apps.socialauth.fb.enable",
                    "hint": "apps.socialauth.fb.enable",
                    "title": "Включить авторизацию через Facebook",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "132"
                },
                "apps.socialauth.salt": {
                    "name": "apps.socialauth.salt",
                    "hint": "apps.socialauth.salt",
                    "title": "Соль для автоматических паролей регистраций через соцсети",
                    "value": "2824fa",
                    "type": "safe_string",
                    "sort_order": "387"
                },
                "apps.socialauth.default_group_id": {
                    "name": "apps.socialauth.default_group_id",
                    "hint": "apps.socialauth.default_group_id",
                    "title": "ID группы устанавливаемой новой регистрации",
                    "value": "3",
                    "type": "safe_string",
                    "sort_order": "388"
                },
                "apps.socialauth.tw.enable": {
                    "name": "apps.socialauth.tw.enable",
                    "hint": "apps.socialauth.tw.enable",
                    "title": "Включить авторизацию через Twitter",
                    "value": "0",
                    "type": "safe_string",
                    "sort_order": "389"
                },
                "apps.socialauth.gl.enable": {
                    "name": "apps.socialauth.gl.enable",
                    "hint": "apps.socialauth.gl.enable",
                    "title": "Включить авторизацию через Google",
                    "value": "0",
                    "type": "safe_string",
                    "sort_order": "390"
                },
                "apps.socialauth.ok.enable": {
                    "name": "apps.socialauth.ok.enable",
                    "hint": "apps.socialauth.ok.enable",
                    "title": "Включить авторизацию через Одноклассники",
                    "value": "0",
                    "type": "safe_string",
                    "sort_order": "391"
                },
                "apps.socialauth.fb.client_id": {
                    "name": "apps.socialauth.fb.client_id",
                    "hint": "apps.socialauth.fb.client_id",
                    "title": "FB CLIENT_ID",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "392"
                },
                "apps.socialauth.fb.client_secret": {
                    "name": "apps.socialauth.fb.client_secret",
                    "hint": "apps.socialauth.fb.client_secret",
                    "title": "FB CLIENT_SECRET",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "393"
                },
                "apps.socialauth.fb.redirect_url": {
                    "name": "apps.socialauth.fb.redirect_url",
                    "hint": "apps.socialauth.fb.redirect_url",
                    "title": "FB REDIRECT_URI",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "394"
                },
                "apps.socialauth.ok.client_id": {
                    "name": "apps.socialauth.ok.client_id",
                    "hint": "apps.socialauth.ok.client_id",
                    "title": "ODNOKLASSNIKI CLIENT_ID",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "395"
                },
                "apps.socialauth.ok.public_key": {
                    "name": "apps.socialauth.ok.public_key",
                    "hint": "apps.socialauth.ok.public_key",
                    "title": "ODNOKLASSNIKI PUBLIC_KEY",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "396"
                },
                "apps.socialauth.ok.client_secret": {
                    "name": "apps.socialauth.ok.client_secret",
                    "hint": "apps.socialauth.ok.client_secret",
                    "title": "ODNOKLASSNIKI CLIENT_SECRET",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "397"
                },
                "apps.socialauth.ok.redirect_url": {
                    "name": "apps.socialauth.ok.redirect_url",
                    "hint": "apps.socialauth.ok.redirect_url",
                    "title": "ODNOKLASSNIKI REDIRECT_URI",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "398"
                },
                "apps.socialauth.gl.client_id": {
                    "name": "apps.socialauth.gl.client_id",
                    "hint": "apps.socialauth.gl.client_id",
                    "title": "GOOGLE CLIENT_ID",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "399"
                },
                "apps.socialauth.gl.client_secret": {
                    "name": "apps.socialauth.gl.client_secret",
                    "hint": "apps.socialauth.gl.client_secret",
                    "title": "GOOGLE CLIENT_SECRET",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "400"
                },
                "apps.socialauth.gl.redirect_url": {
                    "name": "apps.socialauth.gl.redirect_url",
                    "hint": "apps.socialauth.gl.redirect_url",
                    "title": "GOOGLE REDIRECT_URI",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "401"
                },
                "apps.socialauth.tw.api_key": {
                    "name": "apps.socialauth.tw.api_key",
                    "hint": "apps.socialauth.tw.api_key",
                    "title": "TWITTER API_KEY",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "402"
                },
                "apps.socialauth.tw.client_secret": {
                    "name": "apps.socialauth.tw.client_secret",
                    "hint": "apps.socialauth.tw.client_secret",
                    "title": "TWITTER CLIENT_SECRET",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "403"
                },
                "apps.socialauth.tw.redirect_url": {
                    "name": "apps.socialauth.tw.redirect_url",
                    "hint": "apps.socialauth.tw.redirect_url",
                    "title": "TWITTER REDIRECT_URI",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "404"
                },
                "apps.socialauth.tg.enable": {
                    "name": "apps.socialauth.tg.enable",
                    "hint": "apps.socialauth.tg.enable",
                    "title": "Включить авторизацию через Telegram",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "591"
                },
                "apps.socialauth.tg.bot_token": {
                    "name": "apps.socialauth.tg.bot_token",
                    "hint": "apps.socialauth.tg.bot_token",
                    "title": "Токен Telegram-Бота",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "592"
                },
                "apps.socialauth.tg.bot_name": {
                    "name": "apps.socialauth.tg.bot_name",
                    "hint": "apps.socialauth.tg.bot_name",
                    "title": "Имя Telegram-Бота",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "593"
                }
            }
        },
        {
            "title": "Выгрузка Яндекс.Недвижимость",
            "key": "apps.yandexrealty",
            "data": {
                "apps.yandexrealty.sell": {
                    "name": "apps.yandexrealty.sell",
                    "hint": "apps.yandexrealty.sell",
                    "title": "Поле:Значение отвечающие за признак продажи",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "405"
                },
                "apps.yandexrealty.rent": {
                    "name": "apps.yandexrealty.rent",
                    "hint": "apps.yandexrealty.rent",
                    "title": "Поле:Значение отвечающие за признак аренды",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "406"
                },
                "apps.yandexrealty.tofile": {
                    "name": "apps.yandexrealty.tofile",
                    "hint": "apps.yandexrealty.tofile",
                    "title": "Выгружать в файл",
                    "value": "0",
                    "type": "safe_string",
                    "sort_order": "407"
                },
                "apps.yandexrealty.filetime": {
                    "name": "apps.yandexrealty.filetime",
                    "hint": "apps.yandexrealty.filetime",
                    "title": "Время жизни файла кеша (в секундах)",
                    "value": "86400",
                    "type": "safe_string",
                    "sort_order": "408"
                },
                "apps.yandexrealty.images_field": {
                    "name": "apps.yandexrealty.images_field",
                    "hint": "apps.yandexrealty.images_field",
                    "title": "Системное имя поля, содержащего изображения",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "409"
                },
                "apps.yandexrealty.days_interval": {
                    "name": "apps.yandexrealty.days_interval",
                    "hint": "apps.yandexrealty.days_interval",
                    "title": "Количество дней за которое будут выбраны объявления для выгрузки",
                    "value": "180",
                    "type": "safe_string",
                    "sort_order": "410"
                },
                "apps.yandexrealty.alias": {
                    "name": "apps.yandexrealty.alias",
                    "hint": "apps.yandexrealty.alias",
                    "title": "Алиас приложения",
                    "value": "yandexrealty",
                    "type": "safe_string",
                    "sort_order": "411"
                },
                "apps.yandexrealty.country_from": {
                    "name": "apps.yandexrealty.country_from",
                    "hint": "apps.yandexrealty.country_from",
                    "title": "Системное имя поля с именем страны",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "412"
                },
                "apps.yandexrealty.country_global": {
                    "name": "apps.yandexrealty.country_global",
                    "hint": "apps.yandexrealty.country_global",
                    "title": "Единое название страны",
                    "value": "Россия",
                    "type": "safe_string",
                    "sort_order": "413"
                },
                "apps.yandexrealty.region_from": {
                    "name": "apps.yandexrealty.region_from",
                    "hint": "apps.yandexrealty.region_from",
                    "title": "Системное имя поля с именем региона",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "414"
                },
                "apps.yandexrealty.district_from": {
                    "name": "apps.yandexrealty.district_from",
                    "hint": "apps.yandexrealty.district_from",
                    "title": "Системное имя поля с именем района",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "415"
                },
                "apps.yandexrealty.region_global": {
                    "name": "apps.yandexrealty.region_global",
                    "hint": "apps.yandexrealty.region_global",
                    "title": "Единое название региона",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "416"
                },
                "apps.yandexrealty.street_from": {
                    "name": "apps.yandexrealty.street_from",
                    "hint": "apps.yandexrealty.street_from",
                    "title": "Системное имя поля с именем улицы",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "417"
                },
                "apps.yandexrealty.city_from": {
                    "name": "apps.yandexrealty.city_from",
                    "hint": "apps.yandexrealty.city_from",
                    "title": "Системное имя поля с именем города",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "418"
                },
                "apps.yandexrealty.city_global": {
                    "name": "apps.yandexrealty.city_global",
                    "hint": "apps.yandexrealty.city_global",
                    "title": "Единое название города",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "419"
                },
                "apps.yandexrealty.per_page": {
                    "name": "apps.yandexrealty.per_page",
                    "hint": "apps.yandexrealty.per_page",
                    "title": "Количество выгружаемых записей при постраничной выгрузке",
                    "value": "100",
                    "type": "safe_string",
                    "sort_order": "420"
                },
                "apps.yandexrealty.nowatermark_export": {
                    "name": "apps.yandexrealty.nowatermark_export",
                    "hint": "apps.yandexrealty.nowatermark_export",
                    "title": "Выгружать фотографии без водяного знака",
                    "value": "0",
                    "type": "safe_string",
                    "sort_order": "421"
                },
                "apps.yandexrealty.disable_standart_entrypoint": {
                    "name": "apps.yandexrealty.disable_standart_entrypoint",
                    "hint": "apps.yandexrealty.disable_standart_entrypoint",
                    "title": "Отключить стандартную точку входа",
                    "value": "0",
                    "type": "safe_string",
                    "sort_order": "422"
                },
                "apps.yandexrealty.standart_entry_alias": {
                    "name": "apps.yandexrealty.standart_entry_alias",
                    "hint": "apps.yandexrealty.standart_entry_alias",
                    "title": "Алиас стандартной выдачи",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "423"
                },
                "apps.yandexrealty.filtering_checkbox_name": {
                    "name": "apps.yandexrealty.filtering_checkbox_name",
                    "hint": "apps.yandexrealty.filtering_checkbox_name",
                    "title": "Системное имя поля типа checkbox фильтрующего записи для выгрузки",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "424"
                },
                "apps.yandexrealty.contacts_export_mode": {
                    "name": "apps.yandexrealty.contacts_export_mode",
                    "hint": "apps.yandexrealty.contacts_export_mode",
                    "title": "Режим тонкой настройки контактов и групп",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "425"
                },
                "apps.yandexrealty.contacts_assoc_str": {
                    "name": "apps.yandexrealty.contacts_assoc_str",
                    "hint": "apps.yandexrealty.contacts_assoc_str",
                    "title": "Строка ассоциирования выгрузки контактов",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "426"
                },
                "apps.yandexrealty.groups_assoc_str": {
                    "name": "apps.yandexrealty.groups_assoc_str",
                    "hint": "apps.yandexrealty.groups_assoc_str",
                    "title": "Строка ассоциирования назначения группы",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "427"
                },
                "apps.yandexrealty.complex_enable": {
                    "name": "apps.yandexrealty.complex_enable",
                    "hint": "apps.yandexrealty.complex_enable",
                    "title": "Выгружать информацию о ЖК из приложения Жилые комплексы (по-умолчанию все записи)",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "428"
                },
                "apps.yandexrealty.complex_yandexrealty_export": {
                    "name": "apps.yandexrealty.complex_yandexrealty_export",
                    "hint": "apps.yandexrealty.complex_yandexrealty_export",
                    "title": "Выгружать только выбранные ЖК (только при активной опции apps.yandexrealty.complex_enable). Поле должно называться complex.yandexrealty_export",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "429"
                },
                "apps.yandexrealty.lot_area": {
                    "name": "apps.yandexrealty.lot_area",
                    "hint": "apps.yandexrealty.lot_area",
                    "title": "Системное имя поля с площадью участка",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "430"
                },
                "apps.yandexrealty.lot_area_dim": {
                    "name": "apps.yandexrealty.lot_area_dim",
                    "hint": "apps.yandexrealty.lot_area_dim",
                    "title": "Размерность значения системного поля с площадью участка (sqm|ha|acr)",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "431"
                },
                "apps.yandexrealty.add_lot_area": {
                    "name": "apps.yandexrealty.add_lot_area",
                    "hint": "apps.yandexrealty.add_lot_area",
                    "title": "Системное имя поля с площадью дополнительного участка",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "432"
                },
                "apps.yandexrealty.add_lot_area_dim": {
                    "name": "apps.yandexrealty.add_lot_area_dim",
                    "hint": "apps.yandexrealty.add_lot_area_dim",
                    "title": "Размерность значения системного поля с площадью дополнительного участка (sqm|ha|acr)",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "433"
                },
                "apps.yandexrealty.export_image_cache": {
                    "name": "apps.yandexrealty.export_image_cache",
                    "hint": "apps.yandexrealty.export_image_cache",
                    "title": "Выгружать картинки из поля image_cache",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "434"
                },
                "apps.yandexrealty.direction_from": {
                    "name": "apps.yandexrealty.direction_from",
                    "hint": "apps.yandexrealty.direction_from",
                    "title": "Системное имя поля с названием направления\\шоссе",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "435"
                },
                "apps.yandexrealty.comission_from": {
                    "name": "apps.yandexrealty.comission_from",
                    "hint": "apps.yandexrealty.comission_from",
                    "title": "Системное имя поля с указанием размера комиссии в %",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "436"
                },
                "apps.yandexrealty.cbt_bc": {
                    "name": "apps.yandexrealty.cbt_bc",
                    "hint": "apps.yandexrealty.cbt_bc",
                    "title": "Сопоставление типа здания (бизнес-центр)",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "437"
                },
                "apps.yandexrealty.cbt_db": {
                    "name": "apps.yandexrealty.cbt_db",
                    "hint": "apps.yandexrealty.cbt_db",
                    "title": "Сопоставление типа здания (отдельно стоящее здание)",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "438"
                },
                "apps.yandexrealty.cbt_rb": {
                    "name": "apps.yandexrealty.cbt_rb",
                    "hint": "apps.yandexrealty.cbt_rb",
                    "title": "Сопоставление типа здания (встроенное помещение)",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "439"
                },
                "apps.yandexrealty.cbt_sc": {
                    "name": "apps.yandexrealty.cbt_sc",
                    "hint": "apps.yandexrealty.cbt_sc",
                    "title": "Сопоставление типа здания (торговый центр)",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "440"
                },
                "apps.yandexrealty.cbt_wh": {
                    "name": "apps.yandexrealty.cbt_wh",
                    "hint": "apps.yandexrealty.cbt_wh",
                    "title": "Сопоставление типа здания (складской комплекс)",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "441"
                },
                "apps.yandexrealty.profile_name": {
                    "name": "apps.yandexrealty.profile_name",
                    "hint": "apps.yandexrealty.profile_name",
                    "title": "Системное имя поля с именем в профиле",
                    "value": "fio",
                    "type": "safe_string",
                    "sort_order": "442"
                },
                "apps.yandexrealty.profile_email": {
                    "name": "apps.yandexrealty.profile_email",
                    "hint": "apps.yandexrealty.profile_email",
                    "title": "Системное имя поля с email в профиле",
                    "value": "email",
                    "type": "safe_string",
                    "sort_order": "443"
                },
                "apps.yandexrealty.profile_phone": {
                    "name": "apps.yandexrealty.profile_phone",
                    "hint": "apps.yandexrealty.profile_phone",
                    "title": "Системное имя поля с телефоном в профиле",
                    "value": "phone",
                    "type": "safe_string",
                    "sort_order": "444"
                },
                "apps.yandexrealty.data_name": {
                    "name": "apps.yandexrealty.data_name",
                    "hint": "apps.yandexrealty.data_name",
                    "title": "Системное имя поля с именем в данных объекта",
                    "value": "fio",
                    "type": "safe_string",
                    "sort_order": "445"
                },
                "apps.yandexrealty.data_email": {
                    "name": "apps.yandexrealty.data_email",
                    "hint": "apps.yandexrealty.data_email",
                    "title": "Системное имя поля с email в данных объекта",
                    "value": "email",
                    "type": "safe_string",
                    "sort_order": "446"
                },
                "apps.yandexrealty.data_phone": {
                    "name": "apps.yandexrealty.data_phone",
                    "hint": "apps.yandexrealty.data_phone",
                    "title": "Системное имя поля с телефоном в данных объекта",
                    "value": "phone",
                    "type": "safe_string",
                    "sort_order": "447"
                },
                "apps.yandexrealty.yandex_building_id": {
                    "name": "apps.yandexrealty.yandex_building_id",
                    "hint": "apps.yandexrealty.yandex_building_id",
                    "title": "Системное имя поля для yandex-building-id. Если брать данные из таблицы complex, тогда нужно прописать complex.yandex_building_id",
                    "value": "yandex_building_id",
                    "type": "safe_string",
                    "sort_order": "448"
                },
                "apps.yandexrealty.comm_office_cond": {
                    "name": "apps.yandexrealty.comm_office_cond",
                    "hint": "apps.yandexrealty.comm_office_cond",
                    "title": "Условия соответствия коммерческому типу \"офисные помещения\"",
                    "value": "",
                    "type": "textarea",
                    "sort_order": "449"
                },
                "apps.yandexrealty.comm_retail_cond": {
                    "name": "apps.yandexrealty.comm_retail_cond",
                    "hint": "apps.yandexrealty.comm_retail_cond",
                    "title": "Условия соответствия коммерческому типу \"торговые помещения\"",
                    "value": "",
                    "type": "textarea",
                    "sort_order": "450"
                },
                "apps.yandexrealty.comm_warehouse_cond": {
                    "name": "apps.yandexrealty.comm_warehouse_cond",
                    "hint": "apps.yandexrealty.comm_warehouse_cond",
                    "title": "Условия соответствия коммерческому типу \"склад\"",
                    "value": "",
                    "type": "textarea",
                    "sort_order": "451"
                },
                "apps.yandexrealty.comm_freepurpose_cond": {
                    "name": "apps.yandexrealty.comm_freepurpose_cond",
                    "hint": "apps.yandexrealty.comm_freepurpose_cond",
                    "title": "Условия соответствия коммерческому типу \"помещения свободного назначения\"",
                    "value": "",
                    "type": "textarea",
                    "sort_order": "452"
                },
                "apps.yandexrealty.comm_land_cond": {
                    "name": "apps.yandexrealty.comm_land_cond",
                    "hint": "apps.yandexrealty.comm_land_cond",
                    "title": "Условия соответствия коммерческому типу \"земли коммерческого назначения\"",
                    "value": "",
                    "type": "textarea",
                    "sort_order": "453"
                },
                "apps.yandexrealty.comm_manufacturing_cond": {
                    "name": "apps.yandexrealty.comm_manufacturing_cond",
                    "hint": "apps.yandexrealty.comm_manufacturing_cond",
                    "title": "Условия соответствия коммерческому типу \"производственное помещение\"",
                    "value": "",
                    "type": "textarea",
                    "sort_order": "454"
                },
                "apps.yandexrealty.comm_autorepair_cond": {
                    "name": "apps.yandexrealty.comm_autorepair_cond",
                    "hint": "apps.yandexrealty.comm_autorepair_cond",
                    "title": "Условия соответствия коммерческому типу \"автосервис\"",
                    "value": "",
                    "type": "textarea",
                    "sort_order": "455"
                },
                "apps.yandexrealty.comm_business_cond": {
                    "name": "apps.yandexrealty.comm_business_cond",
                    "hint": "apps.yandexrealty.comm_business_cond",
                    "title": "Условия соответствия коммерческому типу \"готовый бизнес\"",
                    "value": "",
                    "type": "textarea",
                    "sort_order": "456"
                },
                "apps.yandexrealty.comm_legaladdress_cond": {
                    "name": "apps.yandexrealty.comm_legaladdress_cond",
                    "hint": "apps.yandexrealty.comm_legaladdress_cond",
                    "title": "Условия соответствия коммерческому типу \"юридический адрес\"",
                    "value": "",
                    "type": "textarea",
                    "sort_order": "457"
                },
                "apps.yandexrealty.comm_publiccatering_cond": {
                    "name": "apps.yandexrealty.comm_publiccatering_cond",
                    "hint": "apps.yandexrealty.comm_publiccatering_cond",
                    "title": "Условия соответствия коммерческому типу \"общепит\"",
                    "value": "",
                    "type": "textarea",
                    "sort_order": "458"
                },
                "apps.yandexrealty.comm_hotel_cond": {
                    "name": "apps.yandexrealty.comm_hotel_cond",
                    "hint": "apps.yandexrealty.comm_hotel_cond",
                    "title": "Условия соответствия коммерческому типу \"гостиница\"",
                    "value": "",
                    "type": "textarea",
                    "sort_order": "459"
                },
                "apps.yandexrealty.renovation_design_cond": {
                    "name": "apps.yandexrealty.renovation_design_cond",
                    "hint": "apps.yandexrealty.renovation_design_cond",
                    "title": "Условия соответствия ремонту \"дизайнерский\"",
                    "value": "",
                    "type": "textarea",
                    "sort_order": "460"
                },
                "apps.yandexrealty.renovation_euro_cond": {
                    "name": "apps.yandexrealty.renovation_euro_cond",
                    "hint": "apps.yandexrealty.renovation_euro_cond",
                    "title": "Условия соответствия ремонту \"евро\"",
                    "value": "",
                    "type": "textarea",
                    "sort_order": "461"
                },
                "apps.yandexrealty.renovation_withdecor_cond": {
                    "name": "apps.yandexrealty.renovation_withdecor_cond",
                    "hint": "apps.yandexrealty.renovation_withdecor_cond",
                    "title": "Условия соответствия ремонту \"с отделкой\"",
                    "value": "",
                    "type": "textarea",
                    "sort_order": "462"
                },
                "apps.yandexrealty.renovation_reqrepair_cond": {
                    "name": "apps.yandexrealty.renovation_reqrepair_cond",
                    "hint": "apps.yandexrealty.renovation_reqrepair_cond",
                    "title": "Условия соответствия ремонту \"требует ремонта\"",
                    "value": "",
                    "type": "textarea",
                    "sort_order": "463"
                },
                "apps.yandexrealty.renovation_good_cond": {
                    "name": "apps.yandexrealty.renovation_good_cond",
                    "hint": "apps.yandexrealty.renovation_good_cond",
                    "title": "Условия соответствия ремонту \"хороший\"",
                    "value": "",
                    "type": "textarea",
                    "sort_order": "464"
                },
                "apps.yandexrealty.renovation_patialrep_cond": {
                    "name": "apps.yandexrealty.renovation_patialrep_cond",
                    "hint": "apps.yandexrealty.renovation_patialrep_cond",
                    "title": "Условия соответствия ремонту \"частичный ремонт\"",
                    "value": "",
                    "type": "textarea",
                    "sort_order": "465"
                },
                "apps.yandexrealty.renovation_roughing_cond": {
                    "name": "apps.yandexrealty.renovation_roughing_cond",
                    "hint": "apps.yandexrealty.renovation_roughing_cond",
                    "title": "Условия соответствия ремонту \"черновая отделка\"",
                    "value": "",
                    "type": "textarea",
                    "sort_order": "466"
                },
                "apps.yandexrealty.quality_best_cond": {
                    "name": "apps.yandexrealty.quality_best_cond",
                    "hint": "apps.yandexrealty.quality_best_cond",
                    "title": "Условия соответствия состоянию \"отличное\"",
                    "value": "",
                    "type": "textarea",
                    "sort_order": "467"
                },
                "apps.yandexrealty.quality_good_cond": {
                    "name": "apps.yandexrealty.quality_good_cond",
                    "hint": "apps.yandexrealty.quality_good_cond",
                    "title": "Условия соответствия состоянию \"хорошее\"",
                    "value": "",
                    "type": "textarea",
                    "sort_order": "468"
                },
                "apps.yandexrealty.quality_norm_cond": {
                    "name": "apps.yandexrealty.quality_norm_cond",
                    "hint": "apps.yandexrealty.quality_norm_cond",
                    "title": "Условия соответствия состоянию \"нормальное\"",
                    "value": "",
                    "type": "textarea",
                    "sort_order": "469"
                },
                "apps.yandexrealty.quality_bad_cond": {
                    "name": "apps.yandexrealty.quality_bad_cond",
                    "hint": "apps.yandexrealty.quality_bad_cond",
                    "title": "Условия соответствия состоянию \"плохое\"",
                    "value": "",
                    "type": "textarea",
                    "sort_order": "470"
                },
                "apps.yandexrealty.studio_cond": {
                    "name": "apps.yandexrealty.studio_cond",
                    "hint": "apps.yandexrealty.studio_cond",
                    "title": "Условия соответствия \"студия\"",
                    "value": "",
                    "type": "textarea",
                    "sort_order": "471"
                },
                "apps.yandexrealty.apartment_cond": {
                    "name": "apps.yandexrealty.apartment_cond",
                    "hint": "apps.yandexrealty.apartment_cond",
                    "title": "Условия соответствия \"апартаменты\"",
                    "value": "",
                    "type": "textarea",
                    "sort_order": "472"
                },
                "apps.yandexrealty.organisation_global_name": {
                    "name": "apps.yandexrealty.organisation_global_name",
                    "hint": "apps.yandexrealty.organisation_global_name",
                    "title": "Общее для всех агентов название организации",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "473"
                },
                "apps.yandexrealty.organisation_src": {
                    "name": "apps.yandexrealty.organisation_src",
                    "hint": "apps.yandexrealty.organisation_src",
                    "title": "Системное имя поля в модели профиля хранящее название организации",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "474"
                },
                "apps.yandexrealty.agentfee_from": {
                    "name": "apps.yandexrealty.agentfee_from",
                    "hint": "apps.yandexrealty.agentfee_from",
                    "title": "Системное имя поля с указанием размера комиссии агента в %",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "594"
                },
                "apps.yandexrealty.yandex_house_id": {
                    "name": "apps.yandexrealty.yandex_house_id",
                    "hint": "apps.yandexrealty.yandex_house_id",
                    "title": "Системное имя поля для yandex-house-id. Если брать данные из таблицы complex, тогда нужно прописать complex.yandex_house_id. Если брать данные из таблицы complex_building, тогда нужно прописать complex_building.имя_свойства",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "595"
                },
                "apps.yandexrealty.openplan_cond": {
                    "name": "apps.yandexrealty.openplan_cond",
                    "hint": "apps.yandexrealty.openplan_cond",
                    "title": "Условия соответствия \"свободная планировка\"",
                    "value": "",
                    "type": "textarea",
                    "sort_order": "596"
                },
                "apps.yandexrealty.aptnr_from": {
                    "name": "apps.yandexrealty.aptnr_from",
                    "hint": "apps.yandexrealty.aptnr_from",
                    "title": "Системное имя поля в модели объекта хранящее номер квартиры",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "597"
                },
                "apps.yandexrealty.cadastralnr_from": {
                    "name": "apps.yandexrealty.cadastralnr_from",
                    "hint": "apps.yandexrealty.cadastralnr_from",
                    "title": "Системное имя поля в модели объекта хранящее кадастровый номер",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "598"
                },
                "apps.yandexrealty.renovation_est_needcosm_cond": {
                    "name": "apps.yandexrealty.renovation_est_needcosm_cond",
                    "hint": "apps.yandexrealty.renovation_est_needcosm_cond",
                    "title": "EST: Условия соответствия ремонту \"требуется косметический ремонт\"",
                    "value": "",
                    "type": "textarea",
                    "sort_order": "599"
                },
                "apps.yandexrealty.renovation_est_notfinished_cond": {
                    "name": "apps.yandexrealty.renovation_est_notfinished_cond",
                    "hint": "apps.yandexrealty.renovation_est_notfinished_cond",
                    "title": "EST: Условия соответствия ремонту \"неоконченный ремонт\"",
                    "value": "",
                    "type": "textarea",
                    "sort_order": "600"
                },
                "apps.yandexrealty.renovation_est_notbuild_cond": {
                    "name": "apps.yandexrealty.renovation_est_notbuild_cond",
                    "hint": "apps.yandexrealty.renovation_est_notbuild_cond",
                    "title": "EST: Условия соответствия ремонту \"незавершённое строительство\"",
                    "value": "",
                    "type": "textarea",
                    "sort_order": "601"
                },
                "apps.yandexrealty.renovation_est_without_cond": {
                    "name": "apps.yandexrealty.renovation_est_without_cond",
                    "hint": "apps.yandexrealty.renovation_est_without_cond",
                    "title": "EST: Условия соответствия ремонту \"без ремонта\"",
                    "value": "",
                    "type": "textarea",
                    "sort_order": "602"
                },
                "apps.yandexrealty.renovation_est_forfinishing_cond": {
                    "name": "apps.yandexrealty.renovation_est_forfinishing_cond",
                    "hint": "apps.yandexrealty.renovation_est_forfinishing_cond",
                    "title": "EST: Условия соответствия ремонту \"под чистовую отделку\"",
                    "value": "",
                    "type": "textarea",
                    "sort_order": "603"
                },
                "apps.yandexrealty.renovation_est_needcapital_cond": {
                    "name": "apps.yandexrealty.renovation_est_needcapital_cond",
                    "hint": "apps.yandexrealty.renovation_est_needcapital_cond",
                    "title": "EST: Условия соответствия ремонту \"требуется капитальный ремонт\"",
                    "value": "",
                    "type": "textarea",
                    "sort_order": "604"
                },
                "apps.yandexrealty.renovation_est_design_cond": {
                    "name": "apps.yandexrealty.renovation_est_design_cond",
                    "hint": "apps.yandexrealty.renovation_est_design_cond",
                    "title": "EST: Условия соответствия ремонту \"дизайнерский ремонт\"",
                    "value": "",
                    "type": "textarea",
                    "sort_order": "605"
                },
                "apps.yandexrealty.renovation_est_euro_cond": {
                    "name": "apps.yandexrealty.renovation_est_euro_cond",
                    "hint": "apps.yandexrealty.renovation_est_euro_cond",
                    "title": "EST: Условия соответствия ремонту \"евроремонт\"",
                    "value": "",
                    "type": "textarea",
                    "sort_order": "606"
                },
                "apps.yandexrealty.renovation_est_cosmetical_cond": {
                    "name": "apps.yandexrealty.renovation_est_cosmetical_cond",
                    "hint": "apps.yandexrealty.renovation_est_cosmetical_cond",
                    "title": "EST: Условия соответствия ремонту \"косметический ремонт\"",
                    "value": "",
                    "type": "textarea",
                    "sort_order": "607"
                },
                "apps.yandexrealty.renovation_est_capital_cond": {
                    "name": "apps.yandexrealty.renovation_est_capital_cond",
                    "hint": "apps.yandexrealty.renovation_est_capital_cond",
                    "title": "EST: Условия соответствия ремонту \"капитальный ремонт\"",
                    "value": "",
                    "type": "textarea",
                    "sort_order": "608"
                },
                "apps.yandexrealty.renovation_est_afterreconstr_cond": {
                    "name": "apps.yandexrealty.renovation_est_afterreconstr_cond",
                    "hint": "apps.yandexrealty.renovation_est_afterreconstr_cond",
                    "title": "EST: Условия соответствия ремонту \"после реконструкции\"",
                    "value": "",
                    "type": "textarea",
                    "sort_order": "609"
                },
                "apps.yandexrealty.renovation_est_soviet_cond": {
                    "name": "apps.yandexrealty.renovation_est_soviet_cond",
                    "hint": "apps.yandexrealty.renovation_est_soviet_cond",
                    "title": "EST: Условия соответствия ремонту \"жилое/советское\"",
                    "value": "",
                    "type": "textarea",
                    "sort_order": "610"
                },
                "apps.yandexrealty.garage_ga": {
                    "name": "apps.yandexrealty.garage_ga",
                    "hint": "apps.yandexrealty.garage_ga",
                    "title": "Сопоставление типа гаража (гараж)",
                    "value": "",
                    "type": "textarea",
                    "sort_order": "611"
                },
                "apps.yandexrealty.garage_pp": {
                    "name": "apps.yandexrealty.garage_pp",
                    "hint": "apps.yandexrealty.garage_pp",
                    "title": "Сопоставление типа гаража (машиноместо)",
                    "value": "",
                    "type": "textarea",
                    "sort_order": "612"
                },
                "apps.yandexrealty.garage_bx": {
                    "name": "apps.yandexrealty.garage_bx",
                    "hint": "apps.yandexrealty.garage_bx",
                    "title": "Сопоставление типа гаража (бокс)",
                    "value": "",
                    "type": "textarea",
                    "sort_order": "613"
                },
                "apps.yandexrealty.newflat": {
                    "name": "apps.yandexrealty.newflat",
                    "hint": "apps.yandexrealty.newflat",
                    "title": "Определять принадлежность к новостройкам по",
                    "value": "0",
                    "type": "select_box",
                    "select_data": [
                        "полю new_flat",
                        "из приложения ЖК",
                        "другому полю"
                    ],
                    "select_data_indexed": [
                        {
                            "id": 0,
                            "value": "полю new_flat"
                        },
                        {
                            "id": 1,
                            "value": "из приложения ЖК"
                        },
                        {
                            "id": 2,
                            "value": "другому полю"
                        }
                    ],
                    "sort_order": "614"
                },
                "apps.yandexrealty.newflat_cond": {
                    "name": "apps.yandexrealty.newflat_cond",
                    "hint": "apps.yandexrealty.newflat_cond",
                    "title": "Условия соответствия новостройке",
                    "value": "",
                    "type": "textarea",
                    "sort_order": "615"
                },
                "apps.yandexrealty.global_currency_code": {
                    "name": "apps.yandexrealty.global_currency_code",
                    "hint": "apps.yandexrealty.global_currency_code",
                    "title": "Все цены указаны в валюте",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "616"
                },
                "apps.yandexrealty.taxation_nds": {
                    "name": "apps.yandexrealty.taxation_nds",
                    "hint": "apps.yandexrealty.taxation_nds",
                    "title": "Условия форме налогообложения арендодателя \"НДС\"",
                    "value": "",
                    "type": "textarea",
                    "sort_order": "617"
                },
                "apps.yandexrealty.taxation_usn": {
                    "name": "apps.yandexrealty.taxation_usn",
                    "hint": "apps.yandexrealty.taxation_usn",
                    "title": "Условия форме налогообложения арендодателя \"УСН\"",
                    "value": "",
                    "type": "textarea",
                    "sort_order": "618"
                },
                "apps.yandexrealty.rent_cleaning_yes": {
                    "name": "apps.yandexrealty.rent_cleaning_yes",
                    "hint": "apps.yandexrealty.rent_cleaning_yes",
                    "title": "Условия \"Клининг входит в договор аренды\"",
                    "value": "",
                    "type": "textarea",
                    "sort_order": "619"
                },
                "apps.yandexrealty.rent_utilities_yes": {
                    "name": "apps.yandexrealty.rent_utilities_yes",
                    "hint": "apps.yandexrealty.rent_utilities_yes",
                    "title": "Условия \"Коммунальные услуги включены в стоимость в договоре\"",
                    "value": "",
                    "type": "textarea",
                    "sort_order": "620"
                },
                "apps.yandexrealty.rent_electricity_yes": {
                    "name": "apps.yandexrealty.rent_electricity_yes",
                    "hint": "apps.yandexrealty.rent_electricity_yes",
                    "title": "Условия \"Электроэнергия включена в стоимость в договоре\"",
                    "value": "",
                    "type": "textarea",
                    "sort_order": "621"
                },
                "apps.yandexrealty.allow_personal_feeds": {
                    "name": "apps.yandexrealty.allow_personal_feeds",
                    "hint": "apps.yandexrealty.allow_personal_feeds",
                    "title": "Разрешить персональные фиды пользователей",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "622"
                },
                "apps.yandexrealty.allow_personal_feeds_token": {
                    "name": "apps.yandexrealty.allow_personal_feeds_token",
                    "hint": "apps.yandexrealty.allow_personal_feeds_token",
                    "title": "Токен доступа к персональным фидам пользователей",
                    "value": "a45c7d3dc27700f8ab12a89e49065355",
                    "type": "safe_string",
                    "sort_order": "623"
                },
                "apps.yandexrealty.rooms_offered_field": {
                    "name": "apps.yandexrealty.rooms_offered_field",
                    "hint": "apps.yandexrealty.rooms_offered_field",
                    "title": "Системное имя поля со значением комнат, которые участвуют в сделке",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "624"
                },
                "apps.yandexrealty.rooms_area_field": {
                    "name": "apps.yandexrealty.rooms_area_field",
                    "hint": "apps.yandexrealty.rooms_area_field",
                    "title": "Системное имя поля со значением площади комнат, которые участвуют в сделке",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "625"
                },
                "apps.yandexrealty.rooms_area_field_divider": {
                    "name": "apps.yandexrealty.rooms_area_field_divider",
                    "hint": "apps.yandexrealty.rooms_area_field_divider",
                    "title": "Разделитель площадей комнат (1 - тире, 2 - плюс, 3 - точка с запятой, по-умолчанию - пробел)",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "626"
                },
                "apps.yandexrealty.bathroomunitfields": {
                    "name": "apps.yandexrealty.bathroomunitfields",
                    "hint": "apps.yandexrealty.bathroomunitfields",
                    "title": "Есть раздельные поля для количеств санузлов",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "627"
                },
                "apps.yandexrealty.bathroomunitfields_sep": {
                    "name": "apps.yandexrealty.bathroomunitfields_sep",
                    "hint": "apps.yandexrealty.bathroomunitfields_sep",
                    "title": "Системное имя поля для кол-ва раздельных",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "628"
                },
                "apps.yandexrealty.bathroomunitfields_comb": {
                    "name": "apps.yandexrealty.bathroomunitfields_comb",
                    "hint": "apps.yandexrealty.bathroomunitfields_comb",
                    "title": "Системное имя поля для кол-ва совмещенных",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "629"
                },
                "apps.yandexrealty.hasbalconyfields": {
                    "name": "apps.yandexrealty.hasbalconyfields",
                    "hint": "apps.yandexrealty.hasbalconyfields",
                    "title": "Есть раздельные поля для количеств типов балконов",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "630"
                },
                "apps.yandexrealty.hasbalconyfields_balkons": {
                    "name": "apps.yandexrealty.hasbalconyfields_balkons",
                    "hint": "apps.yandexrealty.hasbalconyfields_balkons",
                    "title": "Системное имя поля для кол-ва балконов",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "631"
                },
                "apps.yandexrealty.hasbalconyfields_logias": {
                    "name": "apps.yandexrealty.hasbalconyfields_logias",
                    "hint": "apps.yandexrealty.hasbalconyfields_logias",
                    "title": "Системное имя поля для кол-ва лоджий",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "632"
                },
                "apps.yandexrealty.lot_type_field": {
                    "name": "apps.yandexrealty.lot_type_field",
                    "hint": "apps.yandexrealty.lot_type_field",
                    "title": "Системное имя поля содержащее тип участка (если не указано, используется lot_type)",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "633"
                },
                "apps.yandexrealty.lottype_izhs": {
                    "name": "apps.yandexrealty.lottype_izhs",
                    "hint": "apps.yandexrealty.lottype_izhs",
                    "title": "Условия соотвествующие типу участка ИЖС",
                    "value": "",
                    "type": "textarea",
                    "sort_order": "634"
                },
                "apps.yandexrealty.lottype_farm": {
                    "name": "apps.yandexrealty.lottype_farm",
                    "hint": "apps.yandexrealty.lottype_farm",
                    "title": "Условия соотвествующие типу участка садоводство",
                    "value": "",
                    "type": "textarea",
                    "sort_order": "635"
                },
                "apps.yandexrealty.dealstatus_sale": {
                    "name": "apps.yandexrealty.dealstatus_sale",
                    "hint": "apps.yandexrealty.dealstatus_sale",
                    "title": "Вторичка. Тип сделки - для всех объектов (1 - прямая продажа, 2 - первичная продажа вторички, 3 - встречная продажа)",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "636"
                },
                "apps.yandexrealty.dealstatus_s_sale": {
                    "name": "apps.yandexrealty.dealstatus_s_sale",
                    "hint": "apps.yandexrealty.dealstatus_s_sale",
                    "title": "Вторичка. Тип сделки - прямая продажа. Условия.",
                    "value": "",
                    "type": "textarea",
                    "sort_order": "637"
                },
                "apps.yandexrealty.dealstatus_s_primarysaleofsecondary": {
                    "name": "apps.yandexrealty.dealstatus_s_primarysaleofsecondary",
                    "hint": "apps.yandexrealty.dealstatus_s_primarysaleofsecondary",
                    "title": "Вторичка. Тип сделки - первичная продажа вторички. Условия.",
                    "value": "",
                    "type": "textarea",
                    "sort_order": "638"
                },
                "apps.yandexrealty.dealstatus_s_countersale": {
                    "name": "apps.yandexrealty.dealstatus_s_countersale",
                    "hint": "apps.yandexrealty.dealstatus_s_countersale",
                    "title": "Вторичка. Тип сделки - встречная продажа. Условия.",
                    "value": "",
                    "type": "textarea",
                    "sort_order": "639"
                },
                "apps.yandexrealty.dealstatus_salenewdefault": {
                    "name": "apps.yandexrealty.dealstatus_salenewdefault",
                    "hint": "apps.yandexrealty.dealstatus_salenewdefault",
                    "title": "Новостройка. Тип сделки - для всех объектов (1 - первичная продажа, 2 - прямая продажа, 3 - переуступка)",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "640"
                },
                "apps.yandexrealty.dealstatus_n_primarysale": {
                    "name": "apps.yandexrealty.dealstatus_n_primarysale",
                    "hint": "apps.yandexrealty.dealstatus_n_primarysale",
                    "title": "Новостройка. Тип сделки - первичная продажа. Условия.",
                    "value": "",
                    "type": "textarea",
                    "sort_order": "641"
                },
                "apps.yandexrealty.dealstatus_n_sale": {
                    "name": "apps.yandexrealty.dealstatus_n_sale",
                    "hint": "apps.yandexrealty.dealstatus_n_sale",
                    "title": "Новостройка. Тип сделки - прямая продажа. Условия.",
                    "value": "",
                    "type": "textarea",
                    "sort_order": "642"
                },
                "apps.yandexrealty.dealstatus_n_reassignment": {
                    "name": "apps.yandexrealty.dealstatus_n_reassignment",
                    "hint": "apps.yandexrealty.dealstatus_n_reassignment",
                    "title": "Новостройка. Тип сделки - переуступка. Условия.",
                    "value": "",
                    "type": "textarea",
                    "sort_order": "643"
                },
                "apps.yandexrealty.dealstatus_comrentdefault": {
                    "name": "apps.yandexrealty.dealstatus_comrentdefault",
                    "hint": "apps.yandexrealty.dealstatus_comrentdefault",
                    "title": "Аренда коммерческой. Тип сделки - для всех объектов (1 - прямая аренда, 2 - субаренда, 3 - продажа права аренды)",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "644"
                },
                "apps.yandexrealty.dealstatus_directrent": {
                    "name": "apps.yandexrealty.dealstatus_directrent",
                    "hint": "apps.yandexrealty.dealstatus_directrent",
                    "title": "Аренда коммерческой. Тип сделки - прямая аренда. Условия.",
                    "value": "",
                    "type": "textarea",
                    "sort_order": "645"
                },
                "apps.yandexrealty.dealstatus_subrent": {
                    "name": "apps.yandexrealty.dealstatus_subrent",
                    "hint": "apps.yandexrealty.dealstatus_subrent",
                    "title": "Аренда коммерческой. Тип сделки - субаренда. Условия.",
                    "value": "",
                    "type": "textarea",
                    "sort_order": "646"
                },
                "apps.yandexrealty.dealstatus_saleofleaserights": {
                    "name": "apps.yandexrealty.dealstatus_saleofleaserights",
                    "hint": "apps.yandexrealty.dealstatus_saleofleaserights",
                    "title": "Аренда коммерческой. Тип сделки - продажа права аренды. Условия.",
                    "value": "",
                    "type": "textarea",
                    "sort_order": "647"
                },
                "apps.yandexrealty.planning_images": {
                    "name": "apps.yandexrealty.planning_images",
                    "hint": "apps.yandexrealty.planning_images",
                    "title": "Системное имя поля с фотографиями планировок",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "648"
                },
                "apps.yandexrealty.last_upd_field": {
                    "name": "apps.yandexrealty.last_upd_field",
                    "hint": "apps.yandexrealty.last_upd_field",
                    "title": "Системное имя поля с датой обновления",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "649"
                },
                "apps.yandexrealty.video_field": {
                    "name": "apps.yandexrealty.video_field",
                    "hint": "apps.yandexrealty.video_field",
                    "title": "Системное имя поля с кодом видео YouTube",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "650"
                },
                "apps.yandexrealty.descriptionfrom": {
                    "name": "apps.yandexrealty.descriptionfrom",
                    "hint": "apps.yandexrealty.descriptionfrom",
                    "title": "Системное имя поля с описанием объекта",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "651"
                },
                "apps.yandexrealty.pricefrom": {
                    "name": "apps.yandexrealty.pricefrom",
                    "hint": "apps.yandexrealty.pricefrom",
                    "title": "Системное имя поля с ценой объекта",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "652"
                },
                "apps.yandexrealty.area_field": {
                    "name": "apps.yandexrealty.area_field",
                    "hint": "apps.yandexrealty.area_field",
                    "title": "Системное имя поля с общей площадью объекта",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "653"
                },
                "apps.yandexrealty.arealive_field": {
                    "name": "apps.yandexrealty.arealive_field",
                    "hint": "apps.yandexrealty.arealive_field",
                    "title": "Системное имя поля с жилой площадью объекта",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "654"
                },
                "apps.yandexrealty.areakitchen_field": {
                    "name": "apps.yandexrealty.areakitchen_field",
                    "hint": "apps.yandexrealty.areakitchen_field",
                    "title": "Системное имя поля с площадью кухни объекта",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "655"
                },
                "apps.yandexrealty.area_field_houses": {
                    "name": "apps.yandexrealty.area_field_houses",
                    "hint": "apps.yandexrealty.area_field_houses",
                    "title": "Системное имя поля с площадью дома",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "656"
                },
                "apps.yandexrealty.area_field_garage": {
                    "name": "apps.yandexrealty.area_field_garage",
                    "hint": "apps.yandexrealty.area_field_garage",
                    "title": "Системное имя поля с площадью гаража",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "657"
                },
                "apps.yandexrealty.area_field_comm": {
                    "name": "apps.yandexrealty.area_field_comm",
                    "hint": "apps.yandexrealty.area_field_comm",
                    "title": "Системное имя поля с площадью коммерческого объекта",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "658"
                },
                "apps.yandexrealty.objphotolimit": {
                    "name": "apps.yandexrealty.objphotolimit",
                    "hint": "apps.yandexrealty.objphotolimit",
                    "title": "Кол-во выгружаемых фото",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "659"
                },
                "apps.yandexrealty.force_pass": {
                    "name": "apps.yandexrealty.force_pass",
                    "hint": "apps.yandexrealty.force_pass",
                    "title": "Пароль для режима выгрузки всего подряд (можно составлять условия через checkbox-значения в запросе)",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "660"
                }
            }
        },
        {
            "title": "Дополнительно",
            "key": "apps.realty",
            "data": {
                "apps.realty.allow_notactive_direct": {
                    "name": "apps.realty.allow_notactive_direct",
                    "hint": "apps.realty.allow_notactive_direct",
                    "title": "Открыть доступ к неактивным объектам по прямой ссылке",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "64"
                },
                "apps.realty.update_date_added": {
                    "name": "apps.realty.update_date_added",
                    "hint": "apps.realty.update_date_added",
                    "title": "Обновлять дату добавления на текущую при редактировании объявления в ЛК",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "78"
                },
                "apps.realty.uniq_params": {
                    "name": "apps.realty.uniq_params",
                    "hint": "apps.realty.uniq_params",
                    "title": "Параметры сравнения дублирующихся объявлений",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "79"
                },
                "apps.realty.similar_preg": {
                    "name": "apps.realty.similar_preg",
                    "hint": "apps.realty.similar_preg",
                    "title": "Параметры похожих",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "81"
                },
                "apps.realty.similar_grid": {
                    "name": "apps.realty.similar_grid",
                    "hint": "apps.realty.similar_grid",
                    "title": "Формировать массив \"Похожие\" как стандартный список",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "82"
                },
                "apps.realty.admin_fast_view": {
                    "name": "apps.realty.admin_fast_view",
                    "hint": "apps.realty.admin_fast_view",
                    "title": "Набор полей быстрого просмотра",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "86"
                },
                "apps.realty.title_preg": {
                    "name": "apps.realty.title_preg",
                    "hint": "apps.realty.title_preg",
                    "title": "Формат строки заголовка",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "88"
                },
                "apps.realty.use_predeleting": {
                    "name": "apps.realty.use_predeleting",
                    "hint": "apps.realty.use_predeleting",
                    "title": "Использовать архивирование при удалении для объявлений",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "97"
                },
                "apps.realty.archived_notactive": {
                    "name": "apps.realty.archived_notactive",
                    "hint": "apps.realty.archived_notactive",
                    "title": "Архивированные объявления полностью не доступны",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "98"
                },
                "apps.realty.sorts": {
                    "name": "apps.realty.sorts",
                    "hint": "apps.realty.sorts",
                    "title": "Сортировка в сетке объявлений по умолчанию",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "105"
                },
                "apps.realty.off_system_ajax": {
                    "name": "apps.realty.off_system_ajax",
                    "hint": "apps.realty.off_system_ajax",
                    "title": "Off system Ajax",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "111"
                },
                "apps.realty.preview_smart_resizing": {
                    "name": "apps.realty.preview_smart_resizing",
                    "hint": "apps.realty.preview_smart_resizing",
                    "title": "Использовать умную подгонку превьюшек",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "114"
                },
                "apps.realty.data_image_big_height": {
                    "name": "apps.realty.data_image_big_height",
                    "hint": "apps.realty.data_image_big_height",
                    "title": "Высота изображения объявления",
                    "value": "600",
                    "type": "safe_string",
                    "sort_order": "115"
                },
                "apps.realty.data_image_big_width": {
                    "name": "apps.realty.data_image_big_width",
                    "hint": "apps.realty.data_image_big_width",
                    "title": "Ширина изображения объявления",
                    "value": "800",
                    "type": "safe_string",
                    "sort_order": "116"
                },
                "apps.realty.data_image_preview_height": {
                    "name": "apps.realty.data_image_preview_height",
                    "hint": "apps.realty.data_image_preview_height",
                    "title": "Высота превью изображения объявления",
                    "value": "200",
                    "type": "safe_string",
                    "sort_order": "117"
                },
                "apps.realty.data_image_preview_width": {
                    "name": "apps.realty.data_image_preview_width",
                    "hint": "apps.realty.data_image_preview_width",
                    "title": "Ширина превью изображения объявления",
                    "value": "270",
                    "type": "safe_string",
                    "sort_order": "118"
                },
                "apps.realty.ajax_region_refresh": {
                    "name": "apps.realty.ajax_region_refresh",
                    "hint": "apps.realty.ajax_region_refresh",
                    "title": "Ajax - обновление региона",
                    "value": "1",
                    "type": "checkbox",
                    "sort_order": "201"
                },
                "apps.realty.ajax_city_refresh": {
                    "name": "apps.realty.ajax_city_refresh",
                    "hint": "apps.realty.ajax_city_refresh",
                    "title": "Ajax - обновление города",
                    "value": "1",
                    "type": "checkbox",
                    "sort_order": "202"
                },
                "apps.realty.ajax_district_refresh": {
                    "name": "apps.realty.ajax_district_refresh",
                    "hint": "apps.realty.ajax_district_refresh",
                    "title": "Ajax - обновление района",
                    "value": "1",
                    "type": "checkbox",
                    "sort_order": "203"
                },
                "apps.realty.ajax_metro_refresh": {
                    "name": "apps.realty.ajax_metro_refresh",
                    "hint": "apps.realty.ajax_metro_refresh",
                    "title": "Ajax - обновление метро",
                    "value": "1",
                    "type": "checkbox",
                    "sort_order": "204"
                },
                "apps.realty.ajax_street_refresh": {
                    "name": "apps.realty.ajax_street_refresh",
                    "hint": "apps.realty.ajax_street_refresh",
                    "title": "Ajax - обновление улицы",
                    "value": "1",
                    "type": "checkbox",
                    "sort_order": "205"
                },
                "apps.realty.default_frontend_route": {
                    "name": "apps.realty.default_frontend_route",
                    "hint": "apps.realty.default_frontend_route",
                    "title": "Маршрут по-умолчанию для angular-фронтенда",
                    "value": "/grid/data",
                    "type": "safe_string",
                    "sort_order": "529"
                },
                "apps.realty.enable_guest_mode": {
                    "name": "apps.realty.enable_guest_mode",
                    "hint": "apps.realty.enable_guest_mode",
                    "title": "Включить guest-mode для angular-фронтенда",
                    "value": "1",
                    "type": "checkbox",
                    "sort_order": "530"
                },
                "apps.realty.enable_toolbar": {
                    "name": "apps.realty.enable_toolbar",
                    "hint": "apps.realty.enable_toolbar",
                    "title": "Включить toolbar для angular-фронтенда",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "531"
                },
                "apps.realty.enable_navbar": {
                    "name": "apps.realty.enable_navbar",
                    "hint": "apps.realty.enable_navbar",
                    "title": "Включить navbar для angular-фронтенда",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "532"
                },
                "apps.realty.show_home_icon": {
                    "name": "apps.realty.show_home_icon",
                    "hint": "apps.realty.show_home_icon",
                    "title": "Выводить иконку Home для angular-фронтенда",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "533"
                },
                "apps.realty.search_string_parser.enable": {
                    "name": "apps.realty.search_string_parser.enable",
                    "hint": "apps.realty.search_string_parser.enable",
                    "title": "Включить разбор поисковой строки",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "534"
                },
                "apps.realty.min_filter_reset_count": {
                    "name": "apps.realty.min_filter_reset_count",
                    "hint": "apps.realty.min_filter_reset_count",
                    "title": "Ограничить минимальное значение фильтров для сброса",
                    "value": "0",
                    "type": "safe_string",
                    "sort_order": "535"
                },
                "apps.realty.grid.enable_grouping": {
                    "name": "apps.realty.grid.enable_grouping",
                    "hint": "apps.realty.grid.enable_grouping",
                    "title": "Включить группировку в таблицах",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "536"
                },
                "apps.realty.data.disable_edit": {
                    "name": "apps.realty.data.disable_edit",
                    "hint": "apps.realty.data.disable_edit",
                    "title": "Запретить обычным пользователям (не админам) редактировать свои объявления",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "537"
                },
                "apps.realty.data.global_freeze_default_columns_list": {
                    "name": "apps.realty.data.global_freeze_default_columns_list",
                    "hint": "apps.realty.data.global_freeze_default_columns_list",
                    "title": "Запретить на фронте менять настройки всех таблиц",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "538"
                },
                "apps.realty.data.global_disable_refresh_button": {
                    "name": "apps.realty.data.global_disable_refresh_button",
                    "hint": "apps.realty.data.global_disable_refresh_button",
                    "title": "Запретить на фронте кнопку Обновить таблицу",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "539"
                },
                "apps.realty.logo": {
                    "name": "apps.realty.logo",
                    "hint": "apps.realty.logo",
                    "title": "Логотип (основной)",
                    "value": false,
                    "type": "uploads",
                    "sort_order": "541"
                },
                "apps.realty.logo-white": {
                    "name": "apps.realty.logo-white",
                    "hint": "apps.realty.logo-white",
                    "title": "Логотип (светлая версия)",
                    "value": false,
                    "type": "uploads",
                    "sort_order": "542"
                },
                "apps.realty.additional_dropzone_button": {
                    "name": "apps.realty.additional_dropzone_button",
                    "hint": "apps.realty.additional_dropzone_button",
                    "title": "Дополнительная кнопка загрузки dropzone",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "543"
                },
                "apps.realty.mobilephone_old_mask": {
                    "name": "apps.realty.mobilephone_old_mask",
                    "hint": "apps.realty.mobilephone_old_mask",
                    "title": "Использовать старую маску ввода для mobilephone",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "544"
                }
            }
        },
        {
            "title": "Заявки на аренду",
            "key": "apps.getrent",
            "data": {
                "apps.getrent.enable": {
                    "name": "apps.getrent.enable",
                    "hint": "apps.getrent.enable",
                    "title": "Включить приложение Заявки на аренду",
                    "value": "1",
                    "type": "checkbox",
                    "sort_order": "307"
                },
                "apps.getrent.title": {
                    "name": "apps.getrent.title",
                    "hint": "apps.getrent.title",
                    "title": "Название приложения",
                    "value": "Заявки на аренду",
                    "type": "safe_string",
                    "sort_order": "308"
                },
                "apps.getrent.description": {
                    "name": "apps.getrent.description",
                    "hint": "apps.getrent.description",
                    "title": "Текст описания",
                    "value": "Пожалуйста, заполните форму",
                    "type": "safe_string",
                    "sort_order": "309"
                },
                "apps.getrent.folder_title": {
                    "name": "apps.getrent.folder_title",
                    "hint": "apps.getrent.folder_title",
                    "title": "Заголовок приложения со стороны сайта",
                    "value": "Заявки на аренду",
                    "type": "safe_string",
                    "sort_order": "310"
                },
                "apps.getrent.meta_title": {
                    "name": "apps.getrent.meta_title",
                    "hint": "apps.getrent.meta_title",
                    "title": "META-заголовок",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "311"
                },
                "apps.getrent.meta_keywords": {
                    "name": "apps.getrent.meta_keywords",
                    "hint": "apps.getrent.meta_keywords",
                    "title": "META-ключевые слова",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "312"
                },
                "apps.getrent.meta_description": {
                    "name": "apps.getrent.meta_description",
                    "hint": "apps.getrent.meta_description",
                    "title": "META-описание",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "313"
                }
            }
        },
        {
            "title": "Клиенты",
            "key": "apps.client",
            "data": {
                "apps.client.enable": {
                    "name": "apps.client.enable",
                    "hint": "apps.client.enable",
                    "title": "Включить приложение",
                    "value": "1",
                    "type": "checkbox",
                    "sort_order": "475"
                },
                "apps.client.namespace": {
                    "name": "apps.client.namespace",
                    "hint": "apps.client.namespace",
                    "title": "Пространство имен приложения",
                    "value": "client",
                    "type": "safe_string",
                    "sort_order": "476"
                },
                "apps.client.folder_title": {
                    "name": "apps.client.folder_title",
                    "hint": "apps.client.folder_title",
                    "title": "Заголовок приложения в хлебных крошках",
                    "value": "Заявки",
                    "type": "safe_string",
                    "sort_order": "477"
                },
                "apps.client.allow-redirect_url_for_orders": {
                    "name": "apps.client.allow-redirect_url_for_orders",
                    "hint": "apps.client.allow-redirect_url_for_orders",
                    "title": "Разрешить редирект на другую страницу при удачном завершении подачи заявки",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "478"
                },
                "apps.client.orders_email": {
                    "name": "apps.client.orders_email",
                    "hint": "apps.client.orders_email",
                    "title": "Email для уведомления о заявках (если несколько, то указать через запятую)",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "479"
                },
                "apps.client.notify_admin": {
                    "name": "apps.client.notify_admin",
                    "hint": "apps.client.notify_admin",
                    "title": "Уведомлять администраторов о заявках",
                    "value": "0",
                    "type": "safe_string",
                    "sort_order": "480"
                },
                "apps.client.order_mode": {
                    "name": "apps.client.order_mode",
                    "hint": "apps.client.order_mode",
                    "title": "Режим заявок",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "481"
                },
                "apps.client.frontend_enable": {
                    "name": "apps.client.frontend_enable",
                    "hint": "apps.client.frontend_enable",
                    "title": "Открыть доступ к выбору клиентов в ЛК",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "482"
                },
                "apps.client.create_client_on_user_register": {
                    "name": "apps.client.create_client_on_user_register",
                    "hint": "apps.client.create_client_on_user_register",
                    "title": "Создавать запись в таблице client с данными пользователя при регистрации",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "483"
                },
                "apps.client.antispam_disable": {
                    "name": "apps.client.antispam_disable",
                    "hint": "apps.client.antispam_disable",
                    "title": "Отключить проверку на спам-сообщения в заявках (не рекомендуется)",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "661"
                },
                "apps.client.hide_user_id_on_frontend": {
                    "name": "apps.client.hide_user_id_on_frontend",
                    "hint": "apps.client.hide_user_id_on_frontend",
                    "title": "apps.client.hide_user_id_on_frontend (dev param)",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "662"
                },
                "apps.client.front_manager_alias": {
                    "name": "apps.client.front_manager_alias",
                    "hint": "apps.client.front_manager_alias",
                    "title": "Алиас для менеджера клиентов на фронте",
                    "value": "clientmanager",
                    "type": "safe_string",
                    "sort_order": "663"
                },
                "apps.client.front_manager.event.enable": {
                    "name": "apps.client.front_manager.event.enable",
                    "hint": "apps.client.front_manager.event.enable",
                    "title": "Уведомлять админа о событии VISIT",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "664"
                },
                "apps.client.thankyou_url": {
                    "name": "apps.client.thankyou_url",
                    "hint": "apps.client.thankyou_url",
                    "title": "Адрес страницы, куда отправлять пользователя после успешной заявки (например, thankyou). Если пусто, то редиректа не будет.",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "665"
                },
                "apps.client.default_grid_item": {
                    "name": "apps.client.default_grid_item",
                    "hint": "apps.client.default_grid_item",
                    "title": "Список колонок в таблице клиентов по-умолчанию (для личного кабинета)",
                    "value": "client_id,fio,phone,user_id",
                    "type": "safe_string",
                    "sort_order": "666"
                }
            }
        },
        {
            "title": "Комментарии",
            "key": "apps.comment",
            "data": {
                "apps.comment.enable": {
                    "name": "apps.comment.enable",
                    "hint": "apps.comment.enable",
                    "title": "Включить приложение Комментарии",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "484"
                },
                "apps.comment.premoderation_enabled": {
                    "name": "apps.comment.premoderation_enabled",
                    "hint": "apps.comment.premoderation_enabled",
                    "title": "Не публиковать комментарии без модерации",
                    "value": "0",
                    "type": "safe_string",
                    "sort_order": "485"
                },
                "apps.comment.delta_time": {
                    "name": "apps.comment.delta_time",
                    "hint": "apps.comment.delta_time",
                    "title": "Время в секундах между комментариями одного пользователя",
                    "value": "30",
                    "type": "safe_string",
                    "sort_order": "486"
                },
                "apps.comment.simple_auth": {
                    "name": "apps.comment.simple_auth",
                    "hint": "apps.comment.simple_auth",
                    "title": "Авторизация на странице /login/",
                    "value": "0",
                    "type": "safe_string",
                    "sort_order": "487"
                }
            }
        },
        {
            "title": "Контакты",
            "key": "apps.contact",
            "data": {
                "apps.contact.phone": {
                    "name": "apps.contact.phone",
                    "hint": "apps.contact.phone",
                    "title": "Телефон на сайте",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "258"
                },
                "apps.contact.email": {
                    "name": "apps.contact.email",
                    "hint": "apps.contact.email",
                    "title": "Email на сайте",
                    "value": "report@etown.ru",
                    "type": "safe_string",
                    "sort_order": "259"
                },
                "apps.contact.address": {
                    "name": "apps.contact.address",
                    "hint": "apps.contact.address",
                    "title": "Адрес на сайте",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "260"
                },
                "apps.contact.skype": {
                    "name": "apps.contact.skype",
                    "hint": "apps.contact.skype",
                    "title": "Skype на сайте",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "261"
                },
                "apps.contact.phone2": {
                    "name": "apps.contact.phone2",
                    "hint": "apps.contact.phone2",
                    "title": "Телефон на сайте (2)",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "521"
                },
                "apps.contact.phone3": {
                    "name": "apps.contact.phone3",
                    "hint": "apps.contact.phone3",
                    "title": "Телефон на сайте (3)",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "522"
                },
                "apps.contact.whatsapp": {
                    "name": "apps.contact.whatsapp",
                    "hint": "apps.contact.whatsapp",
                    "title": "Whatsapp на сайте",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "523"
                },
                "apps.contact.whatsapp.text": {
                    "name": "apps.contact.whatsapp.text",
                    "hint": "apps.contact.whatsapp.text",
                    "title": "Текст в сообщении WhatsApp по-умолчанию",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "524"
                },
                "apps.contact.address0": {
                    "name": "apps.contact.address0",
                    "hint": "apps.contact.address0",
                    "title": "Адрес на сайте (верх, не обязательно)",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "525"
                },
                "apps.contact.ampm": {
                    "name": "apps.contact.ampm",
                    "hint": "apps.contact.ampm",
                    "title": "Режим работы",
                    "value": "пн-пт: 10:00-19:00",
                    "type": "safe_string",
                    "sort_order": "526"
                }
            }
        },
        {
            "title": "Менеджер валют",
            "key": "apps.currency",
            "data": {
                "apps.currency.cron_pass": {
                    "name": "apps.currency.cron_pass",
                    "hint": "apps.currency.cron_pass",
                    "title": "Пароль запуска Cron-задач",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "676"
                },
                "apps.currency.default_grid_currency_id": {
                    "name": "apps.currency.default_grid_currency_id",
                    "hint": "apps.currency.default_grid_currency_id",
                    "title": "ID валюты используемой при рассчете цен в списке",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "677"
                }
            }
        },
        {
            "title": "Новости",
            "key": "apps.news",
            "data": {
                "apps.news.news_line.per_page": {
                    "name": "apps.news.news_line.per_page",
                    "hint": "apps.news.news_line.per_page",
                    "title": "Количество новостей в новостном блоке на главной странице",
                    "value": "3",
                    "type": "safe_string",
                    "sort_order": "169"
                },
                "apps.news.enable": {
                    "name": "apps.news.enable",
                    "hint": "apps.news.enable",
                    "title": "Включить News.Apps",
                    "value": "1",
                    "type": "checkbox",
                    "sort_order": "189"
                },
                "apps.news.front.per_page": {
                    "name": "apps.news.front.per_page",
                    "hint": "apps.news.front.per_page",
                    "title": "Количество новостей на страницу",
                    "value": "5",
                    "type": "safe_string",
                    "sort_order": "190"
                },
                "apps.news.use_news_topics": {
                    "name": "apps.news.use_news_topics",
                    "hint": "apps.news.use_news_topics",
                    "title": "Использовать категории для новостей",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "488"
                },
                "apps.news.alias": {
                    "name": "apps.news.alias",
                    "hint": "apps.news.alias",
                    "title": "Алиас адресов приложения",
                    "value": "news",
                    "type": "safe_string",
                    "sort_order": "489"
                },
                "apps.news.item_alias": {
                    "name": "apps.news.item_alias",
                    "hint": "apps.news.item_alias",
                    "title": "Подстановочный алиас",
                    "value": "news",
                    "type": "safe_string",
                    "sort_order": "490"
                },
                "apps.news.app_title": {
                    "name": "apps.news.app_title",
                    "hint": "apps.news.app_title",
                    "title": "Заголовок приложения",
                    "value": "Архив новостей",
                    "type": "safe_string",
                    "sort_order": "491"
                },
                "apps.news.folder_title": {
                    "name": "apps.news.folder_title",
                    "hint": "apps.news.folder_title",
                    "title": "Заголовок приложения в хлебных крошках",
                    "value": "Новости",
                    "type": "safe_string",
                    "sort_order": "492"
                },
                "apps.news.append_more_news_view": {
                    "name": "apps.news.append_more_news_view",
                    "hint": "apps.news.append_more_news_view",
                    "title": "Выводить дополнительные новости в просмотре новости",
                    "value": "1",
                    "type": "safe_string",
                    "sort_order": "493"
                },
                "apps.news.append_more_news_view_count": {
                    "name": "apps.news.append_more_news_view_count",
                    "hint": "apps.news.append_more_news_view_count",
                    "title": "Количество дополнительных новостей в просмотре новости",
                    "value": "2",
                    "type": "safe_string",
                    "sort_order": "494"
                },
                "apps.news.meta_title": {
                    "name": "apps.news.meta_title",
                    "hint": "apps.news.meta_title",
                    "title": "META заголовок",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "495"
                },
                "apps.news.meta_desription": {
                    "name": "apps.news.meta_desription",
                    "hint": "apps.news.meta_desription",
                    "title": "META описание",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "496"
                },
                "apps.news.meta_keywords": {
                    "name": "apps.news.meta_keywords",
                    "hint": "apps.news.meta_keywords",
                    "title": "META ключевые слова",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "497"
                },
                "apps.news.preload_column": {
                    "name": "apps.news.preload_column",
                    "hint": "apps.news.preload_column",
                    "title": "Формировать колонку новостей для главной",
                    "value": "1",
                    "type": "safe_string",
                    "sort_order": "498"
                },
                "apps.news.share_access": {
                    "name": "apps.news.share_access",
                    "hint": "apps.news.share_access",
                    "title": "Разделять доступ к записям в админке",
                    "value": "0",
                    "type": "safe_string",
                    "sort_order": "499"
                },
                "apps.news.sitemaproot": {
                    "name": "apps.news.sitemaproot",
                    "hint": "apps.news.sitemaproot",
                    "title": "Выдавать ссылку на раздел в карту сайта",
                    "value": "1",
                    "type": "checkbox",
                    "sort_order": "500"
                },
                "apps.news.sitemaptopics": {
                    "name": "apps.news.sitemaptopics",
                    "hint": "apps.news.sitemaptopics",
                    "title": "Выдавать ссылки на разделы новостей в карту сайта",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "501"
                },
                "apps.news.sitemapitems": {
                    "name": "apps.news.sitemapitems",
                    "hint": "apps.news.sitemapitems",
                    "title": "Выдавать ссылки на отдельные новости в карту сайта",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "502"
                },
                "apps.news.sitemaproot_changefreq": {
                    "name": "apps.news.sitemaproot_changefreq",
                    "hint": "apps.news.sitemaproot_changefreq Вероятная частота изменения <b>страницы раздела новостей</b>. Одно из числовых значений (1-всегда, 2-ежечасно, 3-ежедневно, 4-еженедельно, 5-ежемесячно, 6-ежегодно, 7-никогда)",
                    "title": "Вероятная частота изменения <b>страницы раздела новостей</b>. Одно из числовых значений (1-всегда, 2-ежечасно, 3-ежедневно, 4-еженедельно, 5-ежемесячно, 6-ежегодно, 7-никогда)",
                    "value": "4",
                    "type": "safe_string",
                    "sort_order": "503"
                },
                "apps.news.sitemapitems_changefreq": {
                    "name": "apps.news.sitemapitems_changefreq",
                    "hint": "apps.news.sitemapitems_changefreq Вероятная частота изменения <b>страницы новости</b>. Одно из числовых значений (1-всегда, 2-ежечасно, 3-ежедневно, 4-еженедельно, 5-ежемесячно, 6-ежегодно, 7-никогда)",
                    "title": "Вероятная частота изменения <b>страницы новости</b>. Одно из числовых значений (1-всегда, 2-ежечасно, 3-ежедневно, 4-еженедельно, 5-ежемесячно, 6-ежегодно, 7-никогда)",
                    "value": "7",
                    "type": "safe_string",
                    "sort_order": "504"
                },
                "apps.news.sitemaptopics_changefreq": {
                    "name": "apps.news.sitemaptopics_changefreq",
                    "hint": "apps.news.sitemaptopics_changefreq Вероятная частота изменения <b>страницы подразделов новостей</b>. Одно из числовых значений (1-всегда, 2-ежечасно, 3-ежедневно, 4-еженедельно, 5-ежемесячно, 6-ежегодно, 7-никогда)",
                    "title": "Вероятная частота изменения <b>страницы подразделов новостей</b>. Одно из числовых значений (1-всегда, 2-ежечасно, 3-ежедневно, 4-еженедельно, 5-ежемесячно, 6-ежегодно, 7-никогда)",
                    "value": "4",
                    "type": "safe_string",
                    "sort_order": "505"
                },
                "apps.news.sitemaproot_priority": {
                    "name": "apps.news.sitemaproot_priority",
                    "hint": "apps.news.sitemaproot_priority Приоритетность URL <b>страницы раздела</b> относительно других URL на Вашем сайте. Диапазон от 0.0 до 1.0",
                    "title": "Приоритетность URL <b>страницы раздела</b> относительно других URL на Вашем сайте. Диапазон от 0.0 до 1.0",
                    "value": "0.5",
                    "type": "safe_string",
                    "sort_order": "506"
                },
                "apps.news.sitemapitems_priority": {
                    "name": "apps.news.sitemapitems_priority",
                    "hint": "apps.news.sitemapitems_priority Приоритетность URL <b>страницы новости</b> относительно других URL на Вашем сайте. Диапазон от 0.0 до 1.0",
                    "title": "Приоритетность URL <b>страницы новости</b> относительно других URL на Вашем сайте. Диапазон от 0.0 до 1.0",
                    "value": "0.5",
                    "type": "safe_string",
                    "sort_order": "507"
                },
                "apps.news.sitemaptopics_priority": {
                    "name": "apps.news.sitemaptopics_priority",
                    "hint": "apps.news.sitemaptopics_priority Приоритетность URL <b>страницы подраздела новостей</b> относительно других URL на Вашем сайте. Диапазон от 0.0 до 1.0",
                    "title": "Приоритетность URL <b>страницы подраздела новостей</b> относительно других URL на Вашем сайте. Диапазон от 0.0 до 1.0",
                    "value": "0.5",
                    "type": "safe_string",
                    "sort_order": "508"
                },
                "apps.news.use_active_status": {
                    "name": "apps.news.use_active_status",
                    "hint": "apps.news.use_active_status",
                    "title": "Выводить на фронте только активные новости (необходимо поле news.active)",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "667"
                }
            }
        },
        {
            "title": "Подборки",
            "key": "apps.memorylist",
            "data": {
                "apps.memorylist.public_access_enable": {
                    "name": "apps.memorylist.public_access_enable",
                    "hint": "apps.memorylist.public_access_enable",
                    "title": "Все подборки общие",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "587"
                },
                "apps.memorylist.admingridenable": {
                    "name": "apps.memorylist.admingridenable",
                    "hint": "apps.memorylist.admingridenable",
                    "title": "Доступ в списке объектов в админке",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "588"
                },
                "apps.memorylist.link_access": {
                    "name": "apps.memorylist.link_access",
                    "hint": "apps.memorylist.link_access",
                    "title": "Доступ к сохраненным спискам по ссылке (для всех) /memorylist/grid/[MEMORYLIST_ID]",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "589"
                },
                "apps.memorylist.sharelist.enable": {
                    "name": "apps.memorylist.sharelist.enable",
                    "hint": "apps.memorylist.sharelist.enable",
                    "title": "Разрешить sharelist на фронтенте",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "590"
                }
            }
        },
        {
            "title": "Помощник",
            "key": "apps.dashboard",
            "data": {
                "apps.dashboard.enable": {
                    "name": "apps.dashboard.enable",
                    "hint": "apps.dashboard.enable",
                    "title": "Включить приложение Помощник",
                    "value": "1",
                    "type": "checkbox",
                    "sort_order": "509"
                }
            }
        },
        {
            "title": "Редактор переводов (старая версия)",
            "key": "apps.language",
            "data": {
                "apps.language.use_langs": {
                    "name": "apps.language.use_langs",
                    "hint": "apps.language.use_langs",
                    "title": "Использовать мультиязычность",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "323"
                },
                "apps.language.languages": {
                    "name": "apps.language.languages",
                    "hint": "apps.language.languages",
                    "title": "Список языков (Пример: ru=Русский|en=English)",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "324"
                },
                "apps.language.default_lang_code": {
                    "name": "apps.language.default_lang_code",
                    "hint": "apps.language.default_lang_code",
                    "title": "Код языка по умолчанию",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "325"
                },
                "apps.language.use_default_as_ru": {
                    "name": "apps.language.use_default_as_ru",
                    "hint": "apps.language.use_default_as_ru",
                    "title": "Использовать технические значения как RU",
                    "value": "1",
                    "type": "checkbox",
                    "sort_order": "326"
                },
                "apps.language.google_translate_api_key": {
                    "name": "apps.language.google_translate_api_key",
                    "hint": "apps.language.google_translate_api_key Google Translate API key <a href=https://cloud.google.com/translate/docs/getting-started target=_blank>получить</a>",
                    "title": "Google Translate API key <a href=https://cloud.google.com/translate/docs/getting-started target=_blank>получить</a>",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "578"
                },
                "apps.language.autotrans_enable": {
                    "name": "apps.language.autotrans_enable",
                    "hint": "apps.language.autotrans_enable",
                    "title": "Активировать автоперевод",
                    "value": "1",
                    "type": "checkbox",
                    "sort_order": "579"
                },
                "apps.language.autotrans_api": {
                    "name": "apps.language.autotrans_api",
                    "hint": "apps.language.autotrans_api",
                    "title": "API переводов",
                    "value": "0",
                    "type": "select_box",
                    "select_data": [
                        "Google",
                        "Yandex"
                    ],
                    "select_data_indexed": [
                        {
                            "id": 0,
                            "value": "Google"
                        },
                        {
                            "id": 1,
                            "value": "Yandex"
                        }
                    ],
                    "sort_order": "580"
                },
                "apps.language.yandex_translate_api_key": {
                    "name": "apps.language.yandex_translate_api_key",
                    "hint": "apps.language.yandex_translate_api_key Yandex Translate API key <a href=https://translate.yandex.ru/developers/keys target=_blank>получить</a>",
                    "title": "Yandex Translate API key <a href=https://translate.yandex.ru/developers/keys target=_blank>получить</a>",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "581"
                },
                "apps.language.prefixmode": {
                    "name": "apps.language.prefixmode",
                    "hint": "apps.language.prefixmode",
                    "title": "Префиксный режим",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "582"
                },
                "apps.language.use_as_default": {
                    "name": "apps.language.use_as_default",
                    "hint": "apps.language.use_as_default",
                    "title": "Код локали технических значений",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "583"
                },
                "apps.language.language_prefix_list": {
                    "name": "apps.language.language_prefix_list",
                    "hint": "apps.language.language_prefix_list",
                    "title": "Список префиксов языков (=ru|ukr=ua|eng=en)",
                    "value": "",
                    "type": "safe_string",
                    "sort_order": "584"
                },
                "apps.language.fulltransmode": {
                    "name": "apps.language.fulltransmode",
                    "hint": "apps.language.fulltransmode",
                    "title": "Полный перевод",
                    "value": "0",
                    "type": "checkbox",
                    "sort_order": "585"
                }
            }
        },
        {
            "title": "Статичные страницы",
            "key": "apps.page",
            "data": {
                "apps.page.enable": {
                    "name": "apps.page.enable",
                    "hint": "apps.page.enable",
                    "title": "Включить Apps.Page",
                    "value": "1",
                    "type": "checkbox",
                    "sort_order": "181"
                },
                "apps.page.per_page": {
                    "name": "apps.page.per_page",
                    "hint": "apps.page.per_page",
                    "title": "Количество объектов на страницу",
                    "value": "3",
                    "type": "safe_string",
                    "sort_order": "510"
                },
                "apps.page.count_on_main": {
                    "name": "apps.page.count_on_main",
                    "hint": "apps.page.count_on_main",
                    "title": "Количество объектов на главной",
                    "value": "3",
                    "type": "safe_string",
                    "sort_order": "511"
                },
                "apps.page.blog_enable": {
                    "name": "apps.page.blog_enable",
                    "hint": "apps.page.blog_enable",
                    "title": "Включить вывод /blog/",
                    "value": "1",
                    "type": "checkbox",
                    "sort_order": "668"
                },
                "apps.page.recommendations_enable": {
                    "name": "apps.page.recommendations_enable",
                    "hint": "apps.page.recommendations_enable",
                    "title": "Включить вывод /recommendations/",
                    "value": "1",
                    "type": "checkbox",
                    "sort_order": "669"
                }
            }
        }
    ]
};
