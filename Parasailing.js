document.addEventListener('DOMContentLoaded', function() {
    // ==================== Мобильное меню ====================
    const mobileMenuBtn = document.querySelector('.mobile_menu_btn');
    const headerNav = document.querySelector('.header_nav');
    
    if (mobileMenuBtn && headerNav) {
        mobileMenuBtn.addEventListener('click', function() {
            headerNav.classList.toggle('active');
        });
    }

    // ==================== Слайдер фотографий и видео ====================
    const mainImage = document.getElementById('mainImage');
    const thumbnails = document.querySelectorAll('.thumbnail');
    const thumbnailContainer = document.querySelector('.thumbnail-container');

    // Создаем контейнер для основного видео
    const videoContainer = document.createElement('div');
    videoContainer.className = 'main-video-container';
    videoContainer.style.display = 'none';
    mainImage.parentNode.insertBefore(videoContainer, mainImage.nextSibling);

    // Создаем видео элемент
    const mainVideo = document.createElement('video');
    mainVideo.controls = true;
    mainVideo.className = 'main-video';
    videoContainer.appendChild(mainVideo);

    function changeMedia(thumbnail) {
        // Скрываем видео и показываем изображение по умолчанию
        videoContainer.style.display = 'none';
        mainImage.style.display = 'block';
        mainVideo.pause();
        
        if (thumbnail.tagName === 'VIDEO') {
            // Если кликнули на видео
            const videoSource = thumbnail.querySelector('source').src;
            mainVideo.innerHTML = `<source src="${videoSource}" type="video/mp4">`;
            videoContainer.style.display = 'block';
            mainImage.style.display = 'none';
            mainVideo.load();
            mainVideo.play();
        } else {
            // Если кликнули на изображение
            const newSrc = thumbnail.getAttribute('data-fullsize') || thumbnail.src;
            mainImage.src = newSrc;
            mainImage.alt = thumbnail.alt;
        }
        
        // Обновляем активную миниатюру
        thumbnails.forEach(thumb => thumb.classList.remove('active-thumbnail'));
        thumbnail.classList.add('active-thumbnail');
        
        // Анимация перехода
        const activeMedia = thumbnail.tagName === 'VIDEO' ? videoContainer : mainImage;
        activeMedia.style.opacity = 0;
        setTimeout(() => {
            activeMedia.style.opacity = 1;
        }, 100);
    }

    function initSlider() {
        thumbnails.forEach((thumb) => {
            // Ограничиваем размер видео в миниатюрах
            if (thumb.tagName === 'VIDEO') {
                thumb.style.width = '90px'; // такой же размер как у фото
                thumb.style.height = '70px';
                thumb.style.objectFit = 'cover';
                thumb.muted = true;
                thumb.controls = false;
                
                // Добавляем иконку play
                const playIcon = document.createElement('div');
                playIcon.className = 'thumbnail-play-icon';
                playIcon.innerHTML = '<i class="fas fa-play"></i>';
                thumb.parentNode.insertBefore(playIcon, thumb);
            }
            
            thumb.addEventListener('click', function() {
                changeMedia(this);
            });
        });
        
        // Активируем первую миниатюру
        if (thumbnails.length > 0) {
            thumbnails[0].classList.add('active-thumbnail');
            if (thumbnails[0].tagName === 'VIDEO') {
                const videoSource = thumbnails[0].querySelector('source').src;
                mainVideo.innerHTML = `<source src="${videoSource}" type="video/mp4">`;
                videoContainer.style.display = 'block';
                mainImage.style.display = 'none';
            } else {
                const firstImageSrc = thumbnails[0].getAttribute('data-fullsize') || thumbnails[0].src;
                mainImage.src = firstImageSrc;
            }
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
                let excursionName = 'Парасейлинг'; // значение по умолчанию
                
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
        title: "Парасейлинг в Хургаде - Экскурсии и туры",
        mainText: "Отдых Хургада",
        flag: "https://flagcdn.com/w20/ru.png",
        code: "RUS",
        menuItems: ["Экскурсии", "О нас", "Отзывы", "Контакты"],
        bookBtn: "Забронировать",
        highlights: "Основные моменты:",
        itinerary: "Программа:",
        description: "Испытайте незабываемые ощущения от полета над морем с парашютом!",
        excursionHeader: "Парасейлинг",
        formLabels: {
            name: "Ваше имя",
            phone: "Ваш телефон",
            date: "Желаемая дата",
            people: "Количество человек",
            submit: "Подтвердить бронирование",
            whatsapp: "Написать в WhatsApp"
        },
        highlightsList: [
            "Полеты на высоте до 100 метров",
            "Потрясающие виды на Красное море",
            "Безопасное оборудование",
            "Инструктаж перед полетом",
            "Фото и видео услуги (опционально)",
            "Групповые или индивидуальные полеты"
        ],
        itineraryList: [
            "10:00 - 10:30 - Встреча в отеле, трансфер к месту полетов",
            "10:30 - 11:00 - Инструктаж и подготовка",
            "11:00 - 12:30 - Полеты (10-15 минут на человека)",
            "12:30 - 13:00 - Свободное время для фото",
            "13:00 - 13:30 - Возвращение в отель"
        ],
        videoText: "Ваш браузер не поддерживает видео тег."
    },
    en: {
        title: "Parasailing in Hurghada - Tours and Excursions",
        mainText: "Hurghada Vacation",
        flag: "https://flagcdn.com/w20/gb.png",
        code: "ENG",
        menuItems: ["Excursions", "About us", "Reviews", "Contacts"],
        bookBtn: "Book now",
        highlights: "Highlights:",
        itinerary: "Itinerary:",
        description: "Experience unforgettable sensations flying over the sea with a parachute!",
        excursionHeader: "Parasailing",
        formLabels: {
            name: "Your name",
            phone: "Your phone",
            date: "Desired date",
            people: "Number of people",
            submit: "Confirm booking",
            whatsapp: "Message on WhatsApp"
        },
        highlightsList: [
            "Flights up to 100 meters high",
            "Stunning views of the Red Sea",
            "Safe equipment",
            "Pre-flight briefing",
            "Photo and video services (optional)",
            "Group or individual flights"
        ],
        itineraryList: [
            "10:00 - 10:30 - Hotel pickup, transfer to flight location",
            "10:30 - 11:00 - Briefing and preparation",
            "11:00 - 12:30 - Flights (10-15 minutes per person)",
            "12:30 - 13:00 - Free time for photos",
            "13:00 - 13:30 - Return to hotel"
        ],
        videoText: "Your browser does not support the video tag."
    },
    de: {
        title: "Parasailing in Hurghada - Touren und Ausflüge",
        mainText: "Hurghada Urlaub",
        flag: "https://flagcdn.com/w20/de.png",
        code: "DE",
        menuItems: ["Ausflüge", "Über uns", "Bewertungen", "Kontakte"],
        bookBtn: "Buchen",
        highlights: "Höhepunkte:",
        itinerary: "Reiseverlauf:",
        description: "Erleben Sie unvergessliche Gefühle beim Fliegen über dem Meer mit einem Fallschirm!",
        excursionHeader: "Parasailing",
        formLabels: {
            name: "Ihr Name",
            phone: "Ihr Telefon",
            date: "Gewünschtes Datum",
            people: "Anzahl der Personen",
            submit: "Buchung bestätigen",
            whatsapp: "Auf WhatsApp schreiben"
        },
        highlightsList: [
            "Flüge bis zu 100 Metern Höhe",
            "Atemberaubende Aussicht auf das Rote Meer",
            "Sichere Ausrüstung",
            "Einweisung vor dem Flug",
            "Foto- und Video-Service (optional)",
            "Gruppen- oder Einzelflüge"
        ],
        itineraryList: [
            "10:00 - 10:30 - Abholung im Hotel, Transfer zum Flugplatz",
            "10:30 - 11:00 - Einweisung und Vorbereitung",
            "11:00 - 12:30 - Flüge (10-15 Minuten pro Person)",
            "12:30 - 13:00 - Freizeit für Fotos",
            "13:00 - 13:30 - Rückkehr zum Hotel"
        ],
        videoText: "Ihr Browser unterstützt das Video-Tag nicht."
    },
    ar: {
        title: "الطيران المظلي في الغردقة - جولات ورحلات",
        mainText: "عطلة الغردقة",
        flag: "https://flagcdn.com/w20/eg.png",
        code: "AR",
        menuItems: ["جولات", "معلومات عنا", "المراجعات", "اتصل بنا"],
        bookBtn: "احجز الآن",
        highlights: "أبرز النقاط:",
        itinerary: "برنامج الرحلة:",
        description: "جرب أحاسيس لا تنسى أثناء الطيران فوق البحر بالمظلة!",
        excursionHeader: "الطيران المظلي",
        formLabels: {
            name: "اسمك",
            phone: "هاتفك",
            date: "التاريخ المطلوب",
            people: "عدد الأشخاص",
            submit: "تأكيد الحجز",
            whatsapp: "مراسلة على واتساب"
        },
        highlightsList: [
            "رحلات جوية حتى ارتفاع 100 متر",
            "مناظر خلابة للبحر الأحمر",
            "معدات آمنة",
            "إحاطة ما قبل الرحلة",
            "خدمات التصوير والفيديو (اختياري)",
            "رحلات جماعية أو فردية"
        ],
        itineraryList: [
            "10:00 - 10:30 - الاستلام من الفندق، الانتقال إلى موقع الطيران",
            "10:30 - 11:00 - الإحاطة والتحضير",
            "11:00 - 12:30 - الرحلات الجوية (10-15 دقيقة للشخص)",
            "12:30 - 13:00 - وقت حر للتصوير",
            "13:00 - 13:30 - العودة إلى الفندق"
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

    // Обновляем текст для видео
    const videoFallback = document.querySelector('video thumbnail');
    if (videoFallback) {
        const source = videoFallback.querySelector('source');
        if (source) {
            source.nextSibling.textContent = langData.videoText;
        }
    }

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