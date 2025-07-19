document.addEventListener('DOMContentLoaded', function() {
    // ==================== Мобильное меню ====================
    const mobileMenuBtn = document.querySelector('.mobile_menu_btn');
    const headerNav = document.querySelector('.header_nav');
    
    if (mobileMenuBtn && headerNav) {
        mobileMenuBtn.addEventListener('click', function() {
            headerNav.classList.toggle('active');
        });
    }

    // ==================== Слайдер фотографий ====================
    const mainImage = document.getElementById('mainImage');
    const thumbnails = document.querySelectorAll('.thumbnail');
    const thumbnailContainer = document.querySelector('.thumbnail-container');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    function changeImage(thumbnail) {
        const newSrc = thumbnail.getAttribute('data-fullsize') || thumbnail.src;
        mainImage.src = newSrc;
        mainImage.alt = thumbnail.alt;
        
        thumbnails.forEach(thumb => {
            thumb.classList.remove('active-thumbnail');
        });
        
        thumbnail.classList.add('active-thumbnail');
        
        mainImage.style.opacity = 0;
        setTimeout(() => {
            mainImage.style.opacity = 1;
        }, 100);
    }
    
    function initSlider() {
        thumbnails.forEach((thumb) => {
            thumb.addEventListener('click', function() {
                changeImage(thumb);
            });
        });
        
        if (prevBtn && nextBtn) {
            const scrollAmount = 120;
            
            prevBtn.addEventListener('click', () => {
                thumbnailContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            });
            
            nextBtn.addEventListener('click', () => {
                thumbnailContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            });
        }
        
        if (thumbnails.length > 0) {
            thumbnails[0].classList.add('active-thumbnail');
            const firstImageSrc = thumbnails[0].getAttribute('data-fullsize') || thumbnails[0].src;
            mainImage.src = firstImageSrc;
            mainImage.alt = thumbnails[0].alt;
        }
    }
    
    initSlider();

    // ==================== Модальное окно бронирования ====================
    const bookBtns = document.querySelectorAll('.book_btn, .book-excursion-btn');
    const modal = document.getElementById('bookingModal');
    const modalClose = document.querySelector('.modal_close');
    const excursionNameInput = document.getElementById('excursionNameInput');
    
    // Обработчик для кнопок "Забронировать"
    if (bookBtns.length && modal && excursionNameInput) {
        bookBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const card = this.closest('.excursion_card');
                let excursionName = 'Люксор'; // значение по умолчанию
                
                if (card) {
                    const title = card.querySelector('h3')?.textContent || '';
                    if (title) excursionName = title;
                }
                
                excursionNameInput.value = excursionName;
                modal.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            });
        });
    }
    
    // Закрытие модального окна
    if (modalClose && modal) {
        modalClose.addEventListener('click', function() {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
        
        window.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }

    // ==================== Переключатель языков ====================
    const dropdown = document.querySelector('.language-dropdown');
    const selectedLanguage = document.querySelector('.selected-language');
    const languageOptions = document.querySelectorAll('.language-option');

    const languageData = {
        ru: {
            // Общие элементы
            title: "Луксор - Экскурсия из Хургады",
            mainText: "Отдых Хургада",
            flag: "https://flagcdn.com/w20/ru.png",
            code: "RUS",
            menuItems: ["Экскурсии", "О нас", "Отзывы", "Контакты"],
            
            // Заголовок экскурсии
            excursionTitle: "Луксор",
            price: "$35",
            
            // Описание
            description: "Отправьтесь в незабываемое путешествие в древние Фивы - современный Луксор, где вас ждут величественные храмы, гробницы фараонов и богатая история Древнего Египта. Наша экскурсия - это идеальный способ познакомиться с наследием фараонов в комфортных условиях с профессиональным русскоязычным гидом.",
            
            // Основные моменты
            highlightsTitle: "Основные моменты экскурсии:",
            highlights: [
                "Посещение Карнакского храма - крупнейшего храмового комплекса Древнего Египта",
                "Экскурсия по Долине царей - некрополю фараонов",
                "Осмотр храма царицы Хатшепсут",
                "Обед в традиционном ресторане",
                "Свободное время для шоппинга",
                "Комфортабельный транспорт из Хургады"
            ],
            
            // Программа
            itineraryTitle: "Программа экскурсии:",
            itinerary: [
                {
                    time: "04:00 - 08:00",
                    description: "Выезд из отелей Хургады. Переезд в Луксор на комфортабельном автобусе (около 4 часов). По пути - остановка на завтрак (включен в стоимость)."
                },
                {
                    time: "08:00 - 10:30",
                    description: "Посещение Карнакского храма - крупнейшего храмового комплекса Древнего Египта. Осмотр гипостильного зала, священного озера и обелисков."
                },
                {
                    time: "10:30 - 12:30",
                    description: "Экскурсия по Долине царей - некрополю фараонов (посещение 3 гробниц по выбору гида)."
                },
                {
                    time: "12:30 - 13:30",
                    description: "Обед в ресторане с видом на Нил (включен в стоимость)."
                },
                {
                    time: "13:30 - 15:00",
                    description: "Посещение храма царицы Хатшепсут - уникального погребального храма у подножия скал."
                },
                {
                    time: "15:00 - 16:00",
                    description: "Свободное время для шоппинга в папирусной мастерской или алебастровой фабрике (по желанию)."
                },
                {
                    time: "16:00 - 20:00",
                    description: "Возвращение в Хургаду. Трансфер в отели."
                }
            ],
            
            // Модальное окно
            modalTitle: "Забронировать экскурсию",
            namePlaceholder: "Ваше имя",
            phonePlaceholder: "Ваш телефон WhatsApp",
            dateLabel: "Желаемая дата экскурсии",
            peoplePlaceholder: "Количество человек",
            confirmBtn: "Подтвердить бронирование",
            whatsappBtn: "Написать в WhatsApp",
            bookBtn: "Забронировать",
            
            // Футер
            footerMenuTitle: "Меню",
            footerContactsTitle: "Контакты",
            copyright: "© 2025 Отдых Хургада. Все права защищены."
        },
        en: {
            // Общие элементы
            title: "Luxor - Excursion from Hurghada",
            mainText: "Hurghada Vacation",
            flag: "https://flagcdn.com/w20/gb.png",
            code: "ENG",
            menuItems: ["Excursions", "About us", "Reviews", "Contacts"],
            
            // Заголовок экскурсии
            excursionTitle: "Luxor",
            price: "$35",
            
            // Описание
            description: "Embark on an unforgettable journey to ancient Thebes - modern Luxor, where you will see majestic temples, pharaohs' tombs and the rich history of Ancient Egypt. Our tour is the perfect way to explore the legacy of the pharaohs in comfort with a professional Russian-speaking guide.",
            
            // Основные моменты
            highlightsTitle: "Tour highlights:",
            highlights: [
                "Visit to Karnak Temple - the largest temple complex of Ancient Egypt",
                "Tour of the Valley of the Kings - pharaohs' necropolis",
                "Visit to the Temple of Hatshepsut",
                "Lunch at a traditional restaurant",
                "Free time for shopping",
                "Comfortable transport from Hurghada"
            ],
            
            // Программа
            itineraryTitle: "Tour itinerary:",
            itinerary: [
                {
                    time: "04:00 - 08:00",
                    description: "Departure from Hurghada hotels. Transfer to Luxor by comfortable bus (about 4 hours). Stop for breakfast on the way (included in the price)."
                },
                {
                    time: "08:00 - 10:30",
                    description: "Visit to Karnak Temple - the largest temple complex of Ancient Egypt. Viewing the Hypostyle Hall, Sacred Lake and obelisks."
                },
                {
                    time: "10:30 - 12:30",
                    description: "Tour of the Valley of the Kings - pharaohs' necropolis (visit to 3 tombs selected by the guide)."
                },
                {
                    time: "12:30 - 13:30",
                    description: "Lunch at a restaurant with views of the Nile (included in the price)."
                },
                {
                    time: "13:30 - 15:00",
                    description: "Visit to the Temple of Hatshepsut - a unique mortuary temple at the foot of the cliffs."
                },
                {
                    time: "15:00 - 16:00",
                    description: "Free time for shopping at a papyrus workshop or alabaster factory (optional)."
                },
                {
                    time: "16:00 - 20:00",
                    description: "Return to Hurghada. Transfer to hotels."
                }
            ],
            
            // Модальное окно
            modalTitle: "Book excursion",
            namePlaceholder: "Your name",
            phonePlaceholder: "Your WhatsApp phone",
            dateLabel: "Desired excursion date",
            peoplePlaceholder: "Number of people",
            confirmBtn: "Confirm booking",
            whatsappBtn: "Write to WhatsApp",
            bookBtn: "Book now",
            
            // Футер
            footerMenuTitle: "Menu",
            footerContactsTitle: "Contacts",
            copyright: "© 2025 Hurghada Vacation. All rights reserved."
        },
        de: {
            // Общие элементы
            title: "Luxor - Ausflug ab Hurghada",
            mainText: "Hurghada Urlaub",
            flag: "https://flagcdn.com/w20/de.png",
            code: "DE",
            menuItems: ["Ausflüge", "Über uns", "Bewertungen", "Kontakte"],
            
            // Заголовок экскурсии
            excursionTitle: "Luxor",
            price: "$35",
            
            // Описание
            description: "Begeben Sie sich auf eine unvergessliche Reise ins antike Theben - das moderne Luxor, wo Sie majestätische Tempel, Pharaonengräber und die reiche Geschichte des alten Ägypten erwarten. Unsere Tour ist der perfekte Weg, um das Erbe der Pharaonen in komfortabler Atmosphäre mit einem professionellen russischsprachigen Reiseleiter kennenzulernen.",
            
            // Основные моменты
            highlightsTitle: "Höhepunkte der Tour:",
            highlights: [
                "Besuch des Karnak-Tempels - des größten Tempelkomplexes des alten Ägypten",
                "Führung durch das Tal der Könige - Nekropole der Pharaonen",
                "Besichtigung des Tempels der Hatschepsut",
                "Mittagessen in einem traditionellen Restaurant",
                "Freizeit zum Einkaufen",
                "Komfortabler Transport von Hurghada"
            ],
            
            // Программа
            itineraryTitle: "Reiseverlauf:",
            itinerary: [
                {
                    time: "04:00 - 08:00",
                    description: "Abfahrt von den Hotels in Hurghada. Fahrt nach Luxor mit einem komfortablen Bus (ca. 4 Stunden). Unterwegs Halt zum Frühstück (im Preis inbegriffen)."
                },
                {
                    time: "08:00 - 10:30",
                    description: "Besuch des Karnak-Tempels - des größten Tempelkomplexes des alten Ägypten. Besichtigung der Säulenhalle, des Heiligen Sees und der Obelisken."
                },
                {
                    time: "10:30 - 12:30",
                    description: "Führung durch das Tal der Könige - Nekropole der Pharaonen (Besuch von 3 vom Reiseleiter ausgewählten Gräbern)."
                },
                {
                    time: "12:30 - 13:30",
                    description: "Mittagessen in einem Restaurant mit Blick auf den Nil (im Preis inbegriffen)."
                },
                {
                    time: "13:30 - 15:00",
                    description: "Besichtigung des Tempels der Hatschepsut - ein einzigartiger Totentempel am Fuße der Klippen."
                },
                {
                    time: "15:00 - 16:00",
                    description: "Freizeit zum Einkaufen in einer Papyruswerkstatt oder Alabasterfabrik (optional)."
                },
                {
                    time: "16:00 - 20:00",
                    description: "Rückkehr nach Hurghada. Transfer zu den Hotels."
                }
            ],
            
            // Модальное окно
            modalTitle: "Ausflug buchen",
            namePlaceholder: "Ihr Name",
            phonePlaceholder: "Ihre WhatsApp-Nummer",
            dateLabel: "Gewünschtes Ausflugsdatum",
            peoplePlaceholder: "Anzahl der Personen",
            confirmBtn: "Buchung bestätigen",
            whatsappBtn: "Bei WhatsApp schreiben",
            bookBtn: "Buchen",
            
            // Футер
            footerMenuTitle: "Menü",
            footerContactsTitle: "Kontakte",
            copyright: "© 2025 Hurghada Urlaub. Alle Rechte vorbehalten."
        },
        ar: {
            // Общие элементы
            title: "الأقصر - رحلة من الغردقة",
            mainText: "عطلة الغردقة",
            flag: "https://flagcdn.com/w20/eg.png",
            code: "AR",
            menuItems: ["جولات", "معلومات عنا", "المراجعات", "اتصل بنا"],
            
            // Заголовок экскурсии
            excursionTitle: "الأقصر",
            price: "$35",
            
            // Описание
            description: "انطلق في رحلة لا تنسى إلى طيبة القديمة - الأقصر الحديثة، حيث تنتظرك المعابد الشامخة، مقابر الفراعنة والتاريخ الغني لمصر القديمة. جولتنا هي الطريقة المثالية للتعرف على إرث الفراعنة برفقة مرشد روسي محترف.",
            
            // Основные моменты
            highlightsTitle: "أبرز معالم الجولة:",
            highlights: [
                "زيارة معبد الكرنك - أكبر مجمع معابد في مصر القديمة",
                "جولة في وادي الملوك - مقبرة الفراعنة",
                "زيارة معبد حتشبسوت",
                "غداء في مطعم تقليدي",
                "وقت حر للتسوق",
                "مواصلات مريحة من الغردقة"
            ],
            
            // Программа
            itineraryTitle: "برنامج الرحلة:",
            itinerary: [
                {
                    time: "04:00 - 08:00",
                    description: "المغادرة من فنادق الغردقة. الانتقال إلى الأقصر بواسطة حافلة مريحة (حوالي 4 ساعات). توقف لتناول الإفطار في الطريق (مدرج في السعر)."
                },
                {
                    time: "08:00 - 10:30",
                    description: "زيارة معبد الكرنك - أكبر مجمع معابد في مصر القديمة. مشاهدة قاعة الأعمدة، البحيرة المقدسة والمسلات."
                },
                {
                    time: "10:30 - 12:30",
                    description: "جولة في وادي الملوك - مقبرة الفراعنة (زيارة 3 مقابر يختارها المرشد)."
                },
                {
                    time: "12:30 - 13:30",
                    description: "غداء في مطعم بإطلالة على النيل (مدرج في السعر)."
                },
                {
                    time: "13:30 - 15:00",
                    description: "زيارة معبد حتشبسوت - معبد جنائزي فريد عند سفح المنحدرات."
                },
                {
                    time: "15:00 - 16:00",
                    description: "وقت حر للتسوق في ورشة ورق البردي أو مصنع الألباستر (اختياري)."
                },
                {
                    time: "16:00 - 20:00",
                    description: "العودة إلى الغردقة. النقل إلى الفنادق."
                }
            ],
            
            // Модальное окно
            modalTitle: "حجز الجولة",
            namePlaceholder: "اسمك",
            phonePlaceholder: "رقم واتسابك",
            dateLabel: "تاريخ الجولة المطلوب",
            peoplePlaceholder: "عدد الأشخاص",
            confirmBtn: "تأكيد الحجز",
            whatsappBtn: "كتابة على واتساب",
            bookBtn: "احجز الآن",
            
            // Футер
            footerMenuTitle: "القائمة",
            footerContactsTitle: "اتصل بنا",
            copyright: "© 2025 عطلة الغردقة. جميع الحقوق محفوظة."
        }
    };

    function setLanguage(lang) {
        const langData = languageData[lang];
        if (!langData) return;

        // Обновляем переключатель языков
        const flagImg = selectedLanguage.querySelector('img');
        const codeSpan = selectedLanguage.querySelector('span');
        if (flagImg) flagImg.src = langData.flag;
        if (codeSpan) codeSpan.textContent = langData.code;

        // Обновляем элементы страницы
        document.title = langData.title;
        
        // Меню навигации
        const navLinks = document.querySelectorAll('.header_nav a');
        navLinks.forEach((link, index) => {
            if (langData.menuItems[index]) {
                link.textContent = langData.menuItems[index];
            }
        });

        // Основные элементы страницы
        const headerText = document.querySelector('.header_main_text');
        if (headerText) headerText.textContent = langData.mainText;

        // Заголовок экскурсии
        const excursionTitle = document.querySelector('.excursion-header h1');
        if (excursionTitle) excursionTitle.textContent = langData.excursionTitle;



        // Описание экскурсии
        const excursionDesc = document.querySelector('.excursion-description p');
        if (excursionDesc) excursionDesc.textContent = langData.description;

        // Основные моменты
        const highlightsTitle = document.querySelector('.excursion-highlights h3');
        if (highlightsTitle) highlightsTitle.textContent = langData.highlightsTitle;

        const highlightsList = document.querySelectorAll('.highlight-list li');
        highlightsList.forEach((item, index) => {
            if (langData.highlights[index]) {
                item.textContent = langData.highlights[index];
            }
        });

        // Программа экскурсии
        const itineraryTitle = document.querySelector('.excursion-itinerary h3');
        if (itineraryTitle) itineraryTitle.textContent = langData.itineraryTitle;

        const itineraryItems = document.querySelectorAll('.itinerary-item');
        itineraryItems.forEach((item, index) => {
            const time = item.querySelector('.itinerary-time');
            const desc = item.querySelector('.itinerary-description');
            
            if (time && langData.itinerary[index]) {
                time.textContent = langData.itinerary[index].time;
            }
            
            if (desc && langData.itinerary[index]) {
                desc.textContent = langData.itinerary[index].description;
            }
        });

        // Кнопки
        document.querySelectorAll('.book_btn').forEach(btn => {
            btn.textContent = langData.bookBtn;
        });

        // Модальное окно
        const modalTitle = document.querySelector('.modal h2');
        if (modalTitle) modalTitle.textContent = langData.modalTitle;
        
        const nameInput = document.querySelector('input[name="entry.526800128"]');
        if (nameInput) nameInput.placeholder = langData.namePlaceholder;
        
        const phoneInput = document.querySelector('input[name="entry.521779763"]');
        if (phoneInput) phoneInput.placeholder = langData.phonePlaceholder;
        
        const dateLabel = document.querySelector('.JDate');
        if (dateLabel) dateLabel.textContent = langData.dateLabel;
        
        const peopleInput = document.querySelector('input[name="entry.1479108569"]');
        if (peopleInput) peopleInput.placeholder = langData.peoplePlaceholder;
        
        const confirmBtn = document.querySelector('#bookingForm button[type="submit"]');
        if (confirmBtn) confirmBtn.textContent = langData.confirmBtn;
        
        const whatsappBtn = document.querySelector('.btnWA');
        if (whatsappBtn) whatsappBtn.textContent = langData.whatsappBtn;

        // Футер
        const footerMenuTitle = document.querySelector('.footer_links h4');
        if (footerMenuTitle) footerMenuTitle.textContent = langData.footerMenuTitle;
        
        const footerContactsTitle = document.querySelector('.footer_contacts h4');
        if (footerContactsTitle) footerContactsTitle.textContent = langData.footerContactsTitle;
        
        const copyright = document.querySelector('.footer_bottom p');
        if (copyright) copyright.textContent = langData.copyright;

        // Сохраняем выбранный язык
        localStorage.setItem('selectedLanguage', lang);
    }

    function initLanguageSwitcher() {
        if (selectedLanguage) {
            selectedLanguage.addEventListener('click', function(e) {
                e.stopPropagation();
                dropdown.classList.toggle('active');
            });
        }

        languageOptions.forEach(option => {
            option.addEventListener('click', function() {
                const lang = this.dataset.lang;
                setLanguage(lang);
                dropdown.classList.remove('active');
            });
        });

        document.addEventListener('click', function() {
            dropdown.classList.remove('active');
        });

        const savedLanguage = localStorage.getItem('selectedLanguage') || 'ru';
        setLanguage(savedLanguage);
    }

    initLanguageSwitcher();

    // ==================== Отправка формы бронирования ====================
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Ваши реальные ID полей из Google Forms (ЗАМЕНИТЕ ЭТИ ПРИМЕРЫ)
            const FIELD_IDS = {
                name: 'entry.526800128',      // Имя
                phone: 'entry.521779763',     // Телефон
                date: 'entry.487369593',      // Дата
                people: 'entry.1479108569',   // Количество человек
                excursion: 'entry.1454424678' // Название экскурсии
            };
            
            // URL вашей формы (ЗАМЕНИТЕ НА СВОЙ)
            const FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfSPRE5K7yOqbl26nHV9hlo4z47bY1hPIRbMa7C3taKVoeoJQ/formResponse';
            
            // Подготовка данных
            const formData = new URLSearchParams();
            const formElements = this.elements;
            
            // Добавляем все видимые поля
            formData.append(FIELD_IDS.name, formElements['entry.526800128'].value);
            formData.append(FIELD_IDS.phone, formElements['entry.521779763'].value);
            formData.append(FIELD_IDS.date, formElements['entry.487369593'].value);
            formData.append(FIELD_IDS.people, formElements['entry.1479108569'].value);
            
            // Добавляем скрытые поля
            formData.append(FIELD_IDS.excursion, document.getElementById('excursionNameInput').value);

            // Показываем загрузку
            const submitBtn = this.querySelector('button[type="submit"]');
            submitBtn.disabled = true;
            submitBtn.textContent = 'Отправка...';

            // Создаем невидимый iframe для отправки
            const iframe = document.createElement('iframe');
            iframe.name = 'hidden-iframe';
            iframe.style.display = 'none';
            document.body.appendChild(iframe);

            // Создаем временную форму для отправки
            const tempForm = document.createElement('form');
            tempForm.action = FORM_URL;
            tempForm.method = 'POST';
            tempForm.target = 'hidden-iframe';
            tempForm.style.display = 'none';
            
            // Добавляем данные во временную форму
            formData.forEach((value, key) => {
                const input = document.createElement('input');
                input.type = 'hidden';
                input.name = key;
                input.value = value;
                tempForm.appendChild(input);
            });
            
            document.body.appendChild(tempForm);
            tempForm.submit();

            // Уведомление об успехе
            setTimeout(() => {
                alert('Бронирование успешно отправлено!');
                submitBtn.disabled = false;
                submitBtn.textContent = 'Подтвердить бронирование';
                document.getElementById('bookingModal').style.display = 'none';
                document.body.style.overflow = 'auto';
                
                // Очищаем DOM
                document.body.removeChild(iframe);
                document.body.removeChild(tempForm);
                
                // Очищаем форму
                bookingForm.reset();
            }, 1500);
        });
    }


        // Обработчик для кнопки WhatsApp
    const whatsappBtn = document.querySelector('.btnWA');

    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Номер телефона (замените на ваш)
            const phoneNumber = '20123456789'; // Пример номера
            
            // Получаем данные из формы
            const name = document.querySelector('input[name="entry.526800128"]').value || 'клиент';
            const phone = document.querySelector('input[name="entry.521779763"]').value || 'не указан';
            const date = document.querySelector('input[name="entry.487369593"]').value || 'не указана';
            const people = document.querySelector('input[name="entry.1479108569"]').value || 'не указано';
            const excursion = document.getElementById('excursionNameInput').value || 'экскурсию';
            
            // Формируем текст сообщения
            const message = `Здравствуйте! Я ${name} (тел: ${phone}), хочу забронировать ${excursion} на ${date} для ${people} человек. Пожалуйста, предоставьте больше информации.`;
            
            // Формируем URL для WhatsApp
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            
            // Открываем чат в новой вкладке
            window.open(whatsappUrl, '_blank');
        });
    }
    // ==================== Прокрутка миниатюр ====================
    const thumbPrevBtn = document.querySelector('.thumbnail-slider-btn.prev-btn');
    const thumbNextBtn = document.querySelector('.thumbnail-slider-btn.next-btn');
    const thumbContainer = document.querySelector('.thumbnail-container');
    const scrollLine = document.querySelector('.scroll-line');

    if (thumbPrevBtn && thumbNextBtn && thumbContainer) {
        thumbPrevBtn.addEventListener('click', function() {
            thumbContainer.scrollBy({left: -100, behavior: 'smooth'});
        });

        thumbNextBtn.addEventListener('click', function() {
            thumbContainer.scrollBy({left: 100, behavior: 'smooth'});
        });
    }

    if (thumbContainer && scrollLine) {
        thumbContainer.addEventListener('scroll', () => {
            const scrollWidth = thumbContainer.scrollWidth;
            const clientWidth = thumbContainer.clientWidth;
            const scrollLeft = thumbContainer.scrollLeft;
            const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
            
            scrollLine.style.width = `${progress}%`;
        });
    }

    // ==================== Предотвращение растягивания страницы ====================
    // Обработчик для предотвращения "растягивания" страницы на мобильных
    document.addEventListener('touchmove', function(e) {
        if (window.innerWidth <= 768) {
            // Разрешаем прокрутку только внутри excursion-details
            const target = e.target;
            const isScrollable = target.closest('.excursion-details') || 
                               target.closest('.modal_content');
            
            if (!isScrollable) {
                e.preventDefault();
            }
        }
    }, { passive: false });
});