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
                let excursionName = 'Каир'; // значение по умолчанию
                
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
            title: "Каир и пирамиды Гизы - Экскурсия из Хургады",
            mainText: "Отдых Хургада",
            flag: "https://flagcdn.com/w20/ru.png",
            code: "RUS",
            menuItems: ["Экскурсии", "О нас", "Отзывы", "Контакты"],
            
            // Заголовок экскурсии
            excursionTitle: "Каир и пирамиды Гизы",

            
            // Описание
            description: "Отправьтесь в незабываемое путешествие в столицу Египта - Каир, где вас ждут величественные пирамиды Гизы, загадочный Сфинкс и сокровища Египетского музея. Наша экскурсия - это идеальный способ познакомиться с древней историей Египта в комфортных условиях с профессиональным русскоязычным гидом.",
            
            // Основные моменты
            highlightsTitle: "Основные моменты экскурсии:",
            highlights: [
                "Посещение комплекса пирамид в Гизе",
                "Встреча с Великим Сфинксом",
                "Экскурсия по Египетскому музею",
                "Обед в традиционном ресторане",
                "Свободное время для шоппинга",
                "Комфортабельный транспорт из Хургады"
            ],
            
            // Программа
            itineraryTitle: "Программа экскурсии:",
            itinerary: [
                {
                    time: "05:00 - 09:00",
                    description: "Выезд из отелей Хургады. Переезд в Каир на комфортабельном автобусе (около 5 часов). По пути - остановка на завтрак (включен в стоимость)."
                },
                {
                    time: "10:00 - 12:30",
                    description: "Посещение комплекса пирамид в Гизе: пирамиды Хеопса, Хефрена и Микерина, Сфинкс, храм Сфинкса. Фотосессия на фоне древних чудес света."
                },
                {
                    time: "12:30 - 13:30",
                    description: "Обед в ресторане с панорамным видом на пирамиды (включен в стоимость)."
                },
                {
                    time: "14:00 - 16:00",
                    description: "Экскурсия по Египетскому музею, где собрано более 120 тысяч артефактов, включая сокровища Тутанхамона."
                },
                {
                    time: "16:00 - 17:00",
                    description: "Свободное время для шоппинга в парфюмерной фабрике или папирусной мастерской (по желанию)."
                },
                {
                    time: "17:00 - 22:00",
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
            title: "Cairo and Giza Pyramids - Excursion from Hurghada",
            mainText: "Hurghada Vacation",
            flag: "https://flagcdn.com/w20/gb.png",
            code: "ENG",
            menuItems: ["Excursions", "About us", "Reviews", "Contacts"],
            
            // Заголовок экскурсии
            excursionTitle: "Cairo and Giza Pyramids",

            
            // Описание
            description: "Embark on an unforgettable journey to Egypt's capital - Cairo, where you will see the majestic Giza Pyramids, the mysterious Sphinx and the treasures of the Egyptian Museum. Our tour is the perfect way to explore ancient Egyptian history in comfort with a professional Russian-speaking guide.",
            
            // Основные моменты
            highlightsTitle: "Tour highlights:",
            highlights: [
                "Visit to the Giza Pyramids complex",
                "Meeting with the Great Sphinx",
                "Tour of the Egyptian Museum",
                "Lunch at a traditional restaurant",
                "Free time for shopping",
                "Comfortable transport from Hurghada"
            ],
            
            // Программа
            itineraryTitle: "Tour itinerary:",
            itinerary: [
                {
                    time: "05:00 - 09:00",
                    description: "Departure from Hurghada hotels. Transfer to Cairo by comfortable bus (about 5 hours). Stop for breakfast on the way (included in the price)."
                },
                {
                    time: "10:00 - 12:30",
                    description: "Visit to the Giza Pyramids complex: Pyramids of Cheops, Khafre and Mykerinus, Sphinx, Sphinx Temple. Photo session in front of the ancient wonders of the world."
                },
                {
                    time: "12:30 - 13:30",
                    description: "Lunch at a restaurant with panoramic views of the pyramids (included in the price)."
                },
                {
                    time: "14:00 - 16:00",
                    description: "Tour of the Egyptian Museum, which houses over 120,000 artifacts, including the treasures of Tutankhamun."
                },
                {
                    time: "16:00 - 17:00",
                    description: "Free time for shopping at a perfume factory or papyrus workshop (optional)."
                },
                {
                    time: "17:00 - 22:00",
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
            title: "Kairo und Pyramiden von Gizeh - Ausflug ab Hurghada",
            mainText: "Hurghada Urlaub",
            flag: "https://flagcdn.com/w20/de.png",
            code: "DE",
            menuItems: ["Ausflüge", "Über uns", "Bewertungen", "Kontakte"],
            
            // Заголовок экскурсии
            excursionTitle: "Kairo und Pyramiden von Gizeh",
            
            // Описание
            description: "Begeben Sie sich auf eine unvergessliche Reise nach Kairo, wo Sie die majestätischen Pyramiden von Gizeh, die geheimnisvolle Sphinx und die Schätze des Ägyptischen Museums erwarten. Unsere Tour ist der perfekte Weg, um die alte ägyptische Geschichte in komfortabler Atmosphäre mit einem professionellen russischsprachigen Reiseleiter kennenzulernen.",
            
            // Основные моменты
            highlightsTitle: "Höhepunkte der Tour:",
            highlights: [
                "Besuch des Pyramidenkomplexes in Gizeh",
                "Begegnung mit der Großen Sphinx",
                "Führung durch das Ägyptische Museum",
                "Mittagessen in einem traditionellen Restaurant",
                "Freizeit zum Einkaufen",
                "Komfortabler Transport von Hurghada"
            ],
            
            // Программа
            itineraryTitle: "Reiseverlauf:",
            itinerary: [
                {
                    time: "05:00 - 09:00",
                    description: "Abfahrt von den Hotels in Hurghada. Fahrt nach Kairo mit einem komfortablen Bus (ca. 5 Stunden). Unterwegs Halt zum Frühstück (im Preis inbegriffen)."
                },
                {
                    time: "10:00 - 12:30",
                    description: "Besuch des Pyramidenkomplexes in Gizeh: Cheops-, Chephren- und Mykerinos-Pyramide, Sphinx, Sphinxtempel. Fotosession vor den antiken Weltwundern."
                },
                {
                    time: "12:30 - 13:30",
                    description: "Mittagessen in einem Restaurant mit Panoramablick auf die Pyramiden (im Preis inbegriffen)."
                },
                {
                    time: "14:00 - 16:00",
                    description: "Führung durch das Ägyptische Museum, das über 120.000 Artefakte beherbergt, darunter die Schätze von Tutanchamun."
                },
                {
                    time: "16:00 - 17:00",
                    description: "Freizeit zum Einkaufen in einer Parfümerie oder Papyruswerkstatt (optional)."
                },
                {
                    time: "17:00 - 22:00",
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
            title: "القاهرة وأهرامات الجيزة - رحلة من الغردقة",
            mainText: "عطلة الغردقة",
            flag: "https://flagcdn.com/w20/eg.png",
            code: "AR",
            menuItems: ["جولات", "معلومات عنا", "المراجعات", "اتصل بنا"],
            
            // Заголовок экскурсии
            excursionTitle: "القاهرة وأهرامات الجيزة",
            
            // Описание
            description: "انطلق في رحلة لا تنسى إلى عاصمة مصر - القاهرة، حيث تنتظرك أهرامات الجيزة الشامخة، أبو الهول الغامض وكنوز المتحف المصري. جولتنا هي الطريقة المثالية للتعرف على التاريخ المصري القديم برفقة مرشد روسي محترف.",
            
            // Основные моменты
            highlightsTitle: "أبرز معالم الجولة:",
            highlights: [
                "زيارة مجمع أهرامات الجيزة",
                "لقاء مع أبو الهول العظيم",
                "جولة في المتحف المصري",
                "غداء في مطعم تقليدي",
                "وقت حر للتسوق",
                "مواصلات مريحة من الغردقة"
            ],
            
            // Программа
            itineraryTitle: "برنامج الرحلة:",
            itinerary: [
                {
                    time: "05:00 - 09:00",
                    description: "المغادرة من فنادق الغردقة. الانتقال إلى القاهرة بواسطة حافلة مريحة (حوالي 5 ساعات). توقف لتناول الإفطار في الطريق (مدرج في السعر)."
                },
                {
                    time: "10:00 - 12:30",
                    description: "زيارة مجمع أهرامات الجيزة: أهرامات خوفو، خفرع ومنكاورع، أبو الهول، معبد أبو الهول. جلسة تصوير أمام عجائب الدنيا القديمة."
                },
                {
                    time: "12:30 - 13:30",
                    description: "غداء في مطعم بإطلالة بانورامية على الأهرامات (مدرج في السعر)."
                },
                {
                    time: "14:00 - 16:00",
                    description: "جولة في المتحف المصري الذي يضم أكثر من 120 ألف قطعة أثرية، بما في ذلك كنوز توت عنخ آمون."
                },
                {
                    time: "16:00 - 17:00",
                    description: "وقت حر للتسوق في مصنع عطور أو ورشة ورق البردي (اختياري)."
                },
                {
                    time: "17:00 - 22:00",
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