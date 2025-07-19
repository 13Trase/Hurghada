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
                let excursionName = 'Батискаф'; // значение по умолчанию
                
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
        title: "Погружение на батискафе в Хургаде - Экскурсии и туры",
        mainText: "Отдых Хургада",
        flag: "https://flagcdn.com/w20/ru.png",
        code: "RUS",
        menuItems: ["Экскурсии", "О нас", "Отзывы", "Контакты"],
        bookBtn: "Забронировать",
        highlights: "Основные моменты:",
        itinerary: "Программа:",
        description: "Отправьтесь в уникальное подводное путешествие на батискафе и исследуйте красоты Красного моря без необходимости погружения с аквалангом!",
        excursionHeader: "Погружение на батискафе",
        price: "$80",
        formLabels: {
            name: "Ваше имя",
            phone: "Ваш телефон",
            date: "Желаемая дата",
            people: "Количество человек",
            submit: "Подтвердить бронирование",
            whatsapp: "Написать в WhatsApp"
        },
        highlightsList: [
            "Комфортабельный подводный аппарат с большими иллюминаторами",
            "Погружение на глубину до 22 метров",
            "Наблюдение за богатым подводным миром Красного моря",
            "Профессиональный гид-океанолог",
            "Возможность увидеть коралловые рифы и экзотических рыб",
            "Безопасность и комфорт для всех возрастов"
        ],
        itineraryList: [
            "08:00 - 08:30 - Встреча в отеле, трансфер к причалу",
            "08:30 - 09:00 - Инструктаж и подготовка к погружению",
            "09:00 - 10:30 - Погружение на батискафе (около 1.5 часов)",
            "10:30 - 11:00 - Возвращение на поверхность, отдых",
            "11:00 - 11:30 - Трансфер обратно в отель"
        ],
        videoText: "Ваш браузер не поддерживает видео тег."
    },
    en: {
        title: "Submarine Tour in Hurghada - Excursions and Tours",
        mainText: "Hurghada Vacation",
        flag: "https://flagcdn.com/w20/gb.png",
        code: "ENG",
        menuItems: ["Excursions", "About us", "Reviews", "Contacts"],
        bookBtn: "Book now",
        highlights: "Highlights:",
        itinerary: "Itinerary:",
        description: "Embark on a unique underwater journey in a submarine and explore the beauties of the Red Sea without scuba diving!",
        excursionHeader: "Submarine Tour",
        price: "$80",
        formLabels: {
            name: "Your name",
            phone: "Your phone",
            date: "Desired date",
            people: "Number of people",
            submit: "Confirm booking",
            whatsapp: "Message on WhatsApp"
        },
        highlightsList: [
            "Comfortable submarine with large viewing windows",
            "Dive to depths of up to 22 meters",
            "Observation of the rich underwater world of the Red Sea",
            "Professional marine biologist guide",
            "Opportunity to see coral reefs and exotic fish",
            "Safety and comfort for all ages"
        ],
        itineraryList: [
            "08:00 - 08:30 - Hotel pickup, transfer to the pier",
            "08:30 - 09:00 - Briefing and preparation for diving",
            "09:00 - 10:30 - Submarine dive (about 1.5 hours)",
            "10:30 - 11:00 - Return to surface, rest",
            "11:00 - 11:30 - Transfer back to hotel"
        ],
        videoText: "Your browser does not support the video tag."
    },
    de: {
        title: "U-Boot-Tour in Hurghada - Ausflüge und Touren",
        mainText: "Hurghada Urlaub",
        flag: "https://flagcdn.com/w20/de.png",
        code: "DE",
        menuItems: ["Ausflüge", "Über uns", "Bewertungen", "Kontakte"],
        bookBtn: "Buchen",
        highlights: "Höhepunkte:",
        itinerary: "Reiseverlauf:",
        description: "Begeben Sie sich auf eine einzigartige Unterwasserreise in einem U-Boot und erkunden Sie die Schönheiten des Roten Meeres ohne Tauchausrüstung!",
        excursionHeader: "U-Boot-Tour",
        price: "$80",
        formLabels: {
            name: "Ihr Name",
            phone: "Ihr Telefon",
            date: "Gewünschtes Datum",
            people: "Anzahl der Personen",
            submit: "Buchung bestätigen",
            whatsapp: "Auf WhatsApp schreiben"
        },
        highlightsList: [
            "Komfortables U-Boot mit großen Aussichtsfenstern",
            "Tauchgang bis zu 22 Metern Tiefe",
            "Beobachtung der reichen Unterwasserwelt des Roten Meeres",
            "Professioneller Meeresbiologe als Führer",
            "Möglichkeit, Korallenriffe und exotische Fische zu sehen",
            "Sicherheit und Komfort für alle Altersgruppen"
        ],
        itineraryList: [
            "08:00 - 08:30 - Hotelabholung, Transfer zum Pier",
            "08:30 - 09:00 - Einweisung und Vorbereitung auf den Tauchgang",
            "09:00 - 10:30 - U-Boot-Tauchgang (ca. 1,5 Stunden)",
            "10:30 - 11:00 - Rückkehr an die Oberfläche, Ruhepause",
            "11:00 - 11:30 - Rücktransfer zum Hotel"
        ],
        videoText: "Ihr Browser unterstützt das Video-Tag nicht."
    },
    ar: {
        title: "جولة الغواصة في الغردقة - جولات ورحلات",
        mainText: "عطلة الغردقة",
        flag: "https://flagcdn.com/w20/eg.png",
        code: "AR",
        menuItems: ["جولات", "معلومات عنا", "المراجعات", "اتصل بنا"],
        bookBtn: "احجز الآن",
        highlights: "أبرز النقاط:",
        itinerary: "برنامج الرحلة:",
        description: "انطلق في رحلة تحت الماء الفريدة في غواصة واستكشف جمال البحر الأحمر دون الحاجة إلى الغوص!",
        excursionHeader: "جولة الغواصة",
        price: "$80",
        formLabels: {
            name: "اسمك",
            phone: "هاتفك",
            date: "التاريخ المطلوب",
            people: "عدد الأشخاص",
            submit: "تأكيد الحجز",
            whatsapp: "مراسلة على واتساب"
        },
        highlightsList: [
            "غواصة مريحة مع نوافذ كبيرة للمشاهدة",
            "الغوص حتى عمق 22 مترًا",
            "مراقبة الحياة البحرية الغنية في البحر الأحمر",
            "مرشد متخصص في علم الأحياء البحرية",
            "فرصة لرؤية الشعاب المرجانية والأسماك الغريبة",
            "السلامة والراحة لجميع الأعمار"
        ],
        itineraryList: [
            "08:00 - 08:30 - الاستلام من الفندق، الانتقال إلى الرصيف",
            "08:30 - 09:00 - الإحاطة والتحضير للغوص",
            "09:00 - 10:30 - الغوص بالغواصة (حوالي 1.5 ساعة)",
            "10:30 - 11:00 - العودة إلى السطح، الراحة",
            "11:00 - 11:30 - العودة إلى الفندق"
        ],
        videoText: "متصفحك لا يدعم علامة الفيديو."
    }
};

function setLanguage(lang) {
    const langData = languageData[lang];
    if (!langData) return;

    // Обновляем элементы шапки
    const flagImg = selectedLanguage.querySelector('img');
    const codeSpan = selectedLanguage.querySelector('span');
    if (flagImg) flagImg.src = langData.flag;
    if (codeSpan) codeSpan.textContent = langData.code;

    document.title = langData.title;
    
    // Обновляем навигационное меню
    const navLinks = document.querySelectorAll('.header_nav a');
    navLinks.forEach((link, index) => {
        if (langData.menuItems[index]) {
            link.textContent = langData.menuItems[index];
        }
    });

    // Обновляем основной текст в шапке
    const headerText = document.querySelector('.header_main_text');
    if (headerText) headerText.textContent = langData.mainText;

    // Обновляем кнопки бронирования
    document.querySelectorAll('.book_btn').forEach(btn => {
        btn.textContent = langData.bookBtn;
    });

    // Обновляем заголовок экскурсии
    const excursionHeader = document.querySelector('.excursion-header h1');
    if (excursionHeader) excursionHeader.textContent = langData.excursionHeader;


    // Обновляем описание экскурсии
    const excursionDesc = document.querySelector('.excursion-description p');
    if (excursionDesc) excursionDesc.textContent = langData.description;

    // Обновляем заголовки разделов
    const highlightsTitle = document.querySelector('.excursion-highlights h3');
    if (highlightsTitle) highlightsTitle.textContent = langData.highlights;

    const itineraryTitle = document.querySelector('.excursion-itinerary h3');
    if (itineraryTitle) itineraryTitle.textContent = langData.itinerary;

    // Обновляем список преимуществ
    const highlightItems = document.querySelectorAll('.highlight-list li');
    highlightItems.forEach((item, index) => {
        if (langData.highlightsList[index]) {
            item.textContent = langData.highlightsList[index];
        }
    });

    // Обновляем программу экскурсии
    const itineraryItems = document.querySelectorAll('.itinerary-description');
    itineraryItems.forEach((item, index) => {
        if (langData.itineraryList[index]) {
            item.textContent = langData.itineraryList[index];
        }
    });

    // Обновляем текст в форме бронирования
    const formInputs = document.querySelectorAll('#bookingForm input[placeholder]');
    formInputs.forEach(input => {
        const placeholderKey = input.name.split('.')[1];
        if (langData.formLabels[placeholderKey]) {
            input.placeholder = langData.formLabels[placeholderKey];
        }
    });

    const dateLabel = document.querySelector('.JDate');
    if (dateLabel) dateLabel.textContent = langData.formLabels.date;

    const submitBtn = document.querySelector('#bookingForm button[type="submit"]');
    if (submitBtn) submitBtn.textContent = langData.formLabels.submit;

    const whatsappBtn = document.querySelector('.btnWA');
    if (whatsappBtn) whatsappBtn.textContent = langData.formLabels.whatsapp;

    // Обновляем заголовок модального окна
    const modalTitle = document.querySelector('.modal_content h2');
    if (modalTitle) modalTitle.textContent = langData.formLabels.submit;

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