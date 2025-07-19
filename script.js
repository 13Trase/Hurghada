document.addEventListener('DOMContentLoaded', function() {
    // Language data
    const languageData = {
        ru: {
            // Общие элементы
            title: "Отдых в Хургаде - Экскурсии и туры",
            mainText: "Отдых Хургада",
            flag: "https://flagcdn.com/w20/ru.png",
            code: "RUS",
            menuItems: ["Экскурсии", "О нас", "Отзывы", "Контакты"],
            
            // Герой-секция
            heroTitle: "Лучшие экскурсии в Хургаде",
            heroSubtitle: "Откройте для себя красоты Египта с нашими увлекательными турами",
            heroButton: "Выбрать экскурсию",
            
            // Секция экскурсий
            excursionsTitle: "Экскурсии",
            filters: ["Все экскурсии", "Исторические", "Сафари", "Морские"],
            bookBtn: "Забронировать",
            moreBtn: "Узнать больше",
            
            // Карточки экскурсий
            orangeBay: {
                title: "Оранжевые острова",
                description: "Поездка к знаменитому и красивому месту с возможностью снорклинга."
            },
            cairo: {
                title: "Каир и пирамиды",
                description: "Экскурсия в столицу Египта с посещением пирамид Гизы и Египетского музея."
            },
            luxor: {
                title: "Луксор",
                description: "Путешествие в древние Фивы с осмотром Карнакского храма и Долины царей."
            },
            parasailing: {
                title: "Парашютинг",
                description: "Незабываемый полет над Красным морем с парашютом, привязанным к катеру."
            },
            quadSafari: {
                title: "Поездка по пустыне на квадроциклах",
                description: "Адреналиновое приключение по пустыне."
            },
            bathyscaphe: {
                title: "Батискаф",
                description: "Погружение на батискафе к коралловым рифам без необходимости плавать."
            },
            
            // Секция "О нас"
            aboutTitle: "О нашей компании",
            aboutText1: "Мы работаем в сфере туризма в Хургаде более 10 лет, предлагая нашим клиентам только лучшие экскурсии по доступным ценам.",
            aboutText2: "Наши гиды - профессионалы с многолетним опытом, говорящие на русском языке. Мы гарантируем безопасность и комфорт во время всех наших туров.",
            advantages: ["Лицензированные гиды", "Комфортабельный транспорт", "Без скрытых платежей", "Группы до 15 человек"],
            
            // Секция отзывов
            reviewsTitle: "Отзывы наших клиентов",
            reviews: [
                "Отличная экскурсия в Луксор! Гид очень знающий, все было организовано на высшем уровне. Обязательно порекомендую вас друзьям.",
                "Морская прогулка превзошла все ожидания! Красивые кораллы, много рыбок, вкусный обед. Спасибо за прекрасный день!",
                "Пирамиды - это что-то невероятное! Особенно понравилось, что группа была небольшая и гид уделил внимание каждому."
            ],
            reviewAuthors: ["Анна, Москва", "Иван, Санкт-Петербург", "Елена, Киев"],
            
            // Секция контактов
            contactsTitle: "Контакты",
            contactUs: "Свяжитесь с нами",
            address: "Хургада, ул. Шератон, 123",
            phone: "+20 123 456 7890",
            email: "info@hurghada-tours.com",
            
            // Футер
            footerMenuTitle: "Меню",
            footerContactsTitle: "Контакты",
            copyright: "© 2025 Отдых Хургада. Все права защищены.",
            
            // Модальное окно
            modalTitle: "Забронировать экскурсию",
            namePlaceholder: "Ваше имя",
            phonePlaceholder: "Ваш телефон WhatsApp",
            dateLabel: "Желаемая дата экскурсии",
            peoplePlaceholder: "Количество человек",
            confirmBtn: "Подтвердить бронирование",
            whatsappBtn: "Написать в WhatsApp"
        },
        en: {
            // Общие элементы
            title: "Hurghada Vacation - Tours and Excursions",
            mainText: "Hurghada Vacation",
            flag: "https://flagcdn.com/w20/gb.png",
            code: "ENG",
            menuItems: ["Excursions", "About us", "Reviews", "Contacts"],
            
            // Герой-секция
            heroTitle: "Best Excursions in Hurghada",
            heroSubtitle: "Discover the beauty of Egypt with our exciting tours",
            heroButton: "Choose excursion",
            
            // Секция экскурсий
            excursionsTitle: "Excursions",
            filters: ["All excursions", "Historical", "Safari", "Sea"],
            bookBtn: "Book now",
            moreBtn: "Learn more",
            
            // Карточки экскурсий
            orangeBay: {
                title: "Orange Bay",
                description: "Trip to the famous and beautiful place with snorkeling opportunity."
            },
            cairo: {
                title: "Cairo and pyramids",
                description: "Excursion to Egypt's capital with visit to Giza pyramids and Egyptian Museum."
            },
            luxor: {
                title: "Luxor",
                description: "Journey to ancient Thebes with visit to Karnak Temple and Valley of the Kings."
            },
            parasailing: {
                title: "Parasailing",
                description: "Unforgettable flight over the Red Sea with a parachute tied to a boat."
            },
            quadSafari: {
                title: "Desert quad biking",
                description: "Adrenaline adventure in the desert."
            },
            bathyscaphe: {
                title: "Bathyscaphe",
                description: "Diving to coral reefs in a bathyscaphe without the need to swim."
            },
            
            // Секция "О нас"
            aboutTitle: "About our company",
            aboutText1: "We have been working in tourism in Hurghada for more than 10 years, offering our customers only the best excursions at affordable prices.",
            aboutText2: "Our guides are professionals with many years of experience, speaking Russian. We guarantee safety and comfort during all our tours.",
            advantages: ["Licensed guides", "Comfortable transport", "No hidden fees", "Groups up to 15 people"],
            
            // Секция отзывов
            reviewsTitle: "Customer reviews",
            reviews: [
                "Excellent excursion to Luxor! The guide is very knowledgeable, everything was organized at the highest level. I will definitely recommend you to friends.",
                "The boat trip exceeded all expectations! Beautiful corals, lots of fish, delicious lunch. Thank you for a wonderful day!",
                "The pyramids are something incredible! I especially liked that the group was small and the guide paid attention to everyone."
            ],
            reviewAuthors: ["Anna, Moscow", "Ivan, St. Petersburg", "Elena, Kiev"],
            
            // Секция контактов
            contactsTitle: "Contacts",
            contactUs: "Contact us",
            address: "Hurghada, Sheraton st., 123",
            phone: "+20 123 456 7890",
            email: "info@hurghada-tours.com",
            
            // Футер
            footerMenuTitle: "Menu",
            footerContactsTitle: "Contacts",
            copyright: "© 2025 Hurghada Vacation. All rights reserved.",
            
            // Модальное окно
            modalTitle: "Book excursion",
            namePlaceholder: "Your name",
            phonePlaceholder: "Your WhatsApp phone",
            dateLabel: "Desired excursion date",
            peoplePlaceholder: "Number of people",
            confirmBtn: "Confirm booking",
            whatsappBtn: "Write to WhatsApp"
        },
        de: {
            // Общие элементы
            title: "Hurghada Urlaub - Touren und Ausflüge",
            mainText: "Hurghada Urlaub",
            flag: "https://flagcdn.com/w20/de.png",
            code: "DE",
            menuItems: ["Ausflüge", "Über uns", "Bewertungen", "Kontakte"],
            
            // Герой-секция
            heroTitle: "Beste Ausflüge in Hurghada",
            heroSubtitle: "Entdecken Sie die Schönheit Ägyptens mit unseren spannenden Touren",
            heroButton: "Ausflug wählen",
            
            // Секция экскурсий
            excursionsTitle: "Ausflüge",
            filters: ["Alle Ausflüge", "Historisch", "Safari", "Meer"],
            bookBtn: "Buchen",
            moreBtn: "Mehr erfahren",
            
            // Карточки экскурсий
            orangeBay: {
                title: "Orange Bay",
                description: "Ausflug zu einem berühmten und schönen Ort mit Schnorchelmöglichkeit."
            },
            cairo: {
                title: "Kairo und Pyramiden",
                description: "Ausflug nach Ägyptens Hauptstadt mit Besuch der Pyramiden von Gizeh und des Ägyptischen Museums."
            },
            luxor: {
                title: "Luxor",
                description: "Reise ins antike Theben mit Besuch des Karnak-Tempels und des Tals der Könige."
            },
            parasailing: {
                title: "Parasailing",
                description: "Unvergesslicher Flug über das Rote Meer mit einem Fallschirm, der an ein Boot gebunden ist."
            },
            quadSafari: {
                title: "Wüsten-Quad-Tour",
                description: "Adrenalin-Abenteuer in der Wüste."
            },
            bathyscaphe: {
                title: "Bathyscaphe",
                description: "Tauchgang zu Korallenriffen in einem Bathyscaphe ohne Schwimmen zu müssen."
            },
            
            // Секция "О нас"
            aboutTitle: "Über uns",
            aboutText1: "Wir arbeiten seit mehr als 10 Jahren im Tourismus in Hurghada und bieten unseren Kunden nur die besten Ausflüge zu erschwinglichen Preisen.",
            aboutText2: "Unsere Reiseleiter sind Profis mit langjähriger Erfahrung, die Russisch sprechen. Wir garantieren Sicherheit und Komfort während aller unserer Touren.",
            advantages: ["Lizenzierte Reiseleiter", "Komfortabler Transport", "Keine versteckten Gebühren", "Gruppen bis zu 15 Personen"],
            
            // Секция отзывов
            reviewsTitle: "Kundenbewertungen",
            reviews: [
                "Ausgezeichneter Ausflug nach Luxor! Der Reiseleiter ist sehr kompetent, alles war perfekt organisiert. Ich werde Sie auf jeden Fall weiterempfehlen.",
                "Die Bootstour hat alle Erwartungen übertroffen! Schöne Korallen, viele Fische, leckeres Mittagessen. Vielen Dank für einen wunderbaren Tag!",
                "Die Pyramiden sind etwas Unglaubliches! Besonders gut hat mir gefallen, dass die Gruppe klein war und der Reiseleiter sich um jeden gekümmert hat."
            ],
            reviewAuthors: ["Anna, Moskau", "Iwan, St. Petersburg", "Elena, Kiew"],
            
            // Секция контактов
            contactsTitle: "Kontakte",
            contactUs: "Kontaktieren Sie uns",
            address: "Hurghada, Sheraton Str. 123",
            phone: "+20 123 456 7890",
            email: "info@hurghada-tours.com",
            
            // Футер
            footerMenuTitle: "Menü",
            footerContactsTitle: "Kontakte",
            copyright: "© 2025 Hurghada Urlaub. Alle Rechte vorbehalten.",
            
            // Модальное окно
            modalTitle: "Ausflug buchen",
            namePlaceholder: "Ihr Name",
            phonePlaceholder: "Ihre WhatsApp-Nummer",
            dateLabel: "Gewünschtes Ausflugsdatum",
            peoplePlaceholder: "Anzahl der Personen",
            confirmBtn: "Buchung bestätigen",
            whatsappBtn: "Bei WhatsApp schreiben"
        },
        ar: {
            // Общие элементы
            title: "عطلة الغردقة - جولات ورحلات",
            mainText: "عطلة الغردقة",
            flag: "https://flagcdn.com/w20/eg.png",
            code: "AR",
            menuItems: ["جولات", "معلومات عنا", "المراجعات", "اتصل بنا"],
            
            // Герой-секция
            heroTitle: "أفضل الجولات في الغردقة",
            heroSubtitle: "اكتشف جمال مصر مع جولاتنا المثيرة",
            heroButton: "اختر الجولة",
            
            // Секция экскурсий
            excursionsTitle: "الجولات",
            filters: ["كل الجولات", "تاريخية", "سفاري", "بحرية"],
            bookBtn: "احجز الآن",
            moreBtn: "المزيد",
            
            // Карточки экскурсий
            orangeBay: {
                title: "جزيرة أورانج باي",
                description: "رحلة إلى مكان مشهور وجميل مع إمكانية الغطس."
            },
            cairo: {
                title: "القاهرة والأهرامات",
                description: "جولة إلى عاصمة مصر مع زيارة أهرامات الجيزة والمتحف المصري."
            },
            luxor: {
                title: "الأقصر",
                description: "رحلة إلى طيبة القديمة مع زيارة معبد الكرنك ووادي الملوك."
            },
            parasailing: {
                title: "الباراسيلينج",
                description: "رحلة جوية لا تنسى فوق البحر الأحمر بمظلة مربوطة بقارب."
            },
            quadSafari: {
                title: "جولة صحراوية بالدراجات الرباعية",
                description: "مغامرة مليئة بالأدرينالين في الصحراء."
            },
            bathyscaphe: {
                title: "الغواصة",
                description: "الغوص إلى الشعاب المرجانية في غواصة دون الحاجة إلى السباحة."
            },
            
            // Секция "О нас"
            aboutTitle: "معلومات عنا",
            aboutText1: "نحن نعمل في مجال السياحة في الغردقة منذ أكثر من 10 سنوات، ونقدم لعملائنا أفضل الجولات بأسعار معقولة.",
            aboutText2: "مرشدوننا محترفون ذوو خبرة طويلة، ويتحدثون الروسية. نضمن الأمان والراحة خلال جميع جولاتنا.",
            advantages: ["مرشدون مرخصون", "مواصلات مريحة", "بدون رسوم خفية", "مجموعات حتى 15 شخصًا"],
            
            // Секция отзывов
            reviewsTitle: "آراء العملاء",
            reviews: [
                "جولة رائعة إلى الأقصر! المرشد على معرفة كبيرة، كل شيء كان منظمًا على أعلى مستوى. سأوصي بكم بالتأكيد للأصدقاء.",
                "تجاوزت الرحلة البحرية كل التوقعات! شعاب مرجانية جميلة، الكثير من الأسماك، غداء لذيذ. شكرًا لكم على يوم رائع!",
                "الأهرامات شيء لا يصدق! أعجبني بشكل خاص أن المجموعة كانت صغيرة وأن المرشد أعطى اهتمامًا لكل شخص."
            ],
            reviewAuthors: ["آنا، موسكو", "إيفان، سانت بطرسبرغ", "إيلينا، كييف"],
            
            // Секция контактов
            contactsTitle: "اتصل بنا",
            contactUs: "تواصل معنا",
            address: "الغردقة، شارع شيراتون، 123",
            phone: "+20 123 456 7890",
            email: "info@hurghada-tours.com",
            
            // Футер
            footerMenuTitle: "القائمة",
            footerContactsTitle: "اتصل بنا",
            copyright: "© 2025 عطلة الغردقة. جميع الحقوق محفوظة.",
            
            // Модальное окно
            modalTitle: "حجز الجولة",
            namePlaceholder: "اسمك",
            phonePlaceholder: "رقم واتسابك",
            dateLabel: "تاريخ الجولة المطلوب",
            peoplePlaceholder: "عدد الأشخاص",
            confirmBtn: "تأكيد الحجز",
            whatsappBtn: "كتابة على واتساب"
        }
    };

    // ==================== Мобильное меню ====================
    const mobileMenuBtn = document.querySelector('.mobile_menu_btn');
    const headerNav = document.querySelector('.header_nav');
    
    if (mobileMenuBtn && headerNav) {
        mobileMenuBtn.addEventListener('click', function() {
            headerNav.classList.toggle('active');
        });
    }

    // ==================== Слайдер отзывов ====================
    const reviewCards = document.querySelectorAll('.review_card');
    const prevBtn = document.querySelector('.slider_prev');
    const nextBtn = document.querySelector('.slider_next');
    let currentSlide = 0;
    
    function showSlide(index) {
        reviewCards.forEach(card => card.classList.remove('active'));
        if (reviewCards[index]) {
            reviewCards[index].classList.add('active');
        }
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % reviewCards.length;
        showSlide(currentSlide);
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + reviewCards.length) % reviewCards.length;
        showSlide(currentSlide);
    }
    
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    
    if (reviewCards.length > 1) {
        setInterval(nextSlide, 5000);
    }

    // ==================== Модальное окно бронирования ====================
    const bookBtns = document.querySelectorAll('.book_btn');
    const modal = document.getElementById('bookingModal');
    const modalClose = document.querySelector('.modal_close');
    
    // Обработчик для кнопок "Забронировать"
    bookBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const card = this.closest('.excursion_card');
            if (card) {
                const title = card.querySelector('h3')?.textContent || '';
                const price = card.querySelector('.price')?.textContent || '';
                
                document.getElementById('excursionNameInput').value = title;
                
                if (modal) {
                    modal.style.display = 'flex';
                    document.body.style.overflow = 'hidden';
                }
            }
        });
    });
    
    // Закрытие модального окна
    if (modalClose) {
        modalClose.addEventListener('click', function() {
            if (modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }
    
    // Закрытие при клике вне модального окна
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // ==================== Плавная прокрутка ====================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const header = document.querySelector('.header');
                const headerHeight = header ? header.offsetHeight : 0;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                if (headerNav) {
                    headerNav.classList.remove('active');
                }
            }
        });
    });

    // ==================== Фильтрация экскурсий ====================
    const filterBtns = document.querySelectorAll('.filter-btn');
    const excursionGrid = document.querySelector('.excursions_grid');
    const excursionCards = Array.from(document.querySelectorAll('.excursion_card'));
    
    function rearrangeGrid() {
        if (!excursionGrid) return;
        
        const visibleCards = excursionCards.filter(card => 
            !card.classList.contains('hidden')
        );
        
        excursionGrid.innerHTML = '';
        visibleCards.forEach(card => {
            excursionGrid.appendChild(card);
        });
    }
    
    if (filterBtns.length && excursionGrid) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                filterBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                
                const filter = this.dataset.filter;
                
                excursionCards.forEach(card => {
                    card.classList.add('hidden');
                    if (filter === 'all' || card.dataset.category === filter) {
                        card.classList.remove('hidden');
                    }
                });
                
                rearrangeGrid();
            });
        });
        
        // Инициализация
        const allBtn = document.querySelector('.filter-btn[data-filter="all"]');
        if (allBtn) allBtn.click();
    }

    // ==================== Language Switching ====================
    const dropdown = document.querySelector('.language-dropdown');
    const selectedLanguage = document.querySelector('.selected-language');
    const languageOptions = document.querySelectorAll('.language-option');

    // Function to update excursion cards
    function updateExcursionCards(langData) {
        const excursions = {
            orangeBay: document.querySelector('.excursion_card[data-category="sea"]:nth-child(1)'),
            cairo: document.querySelector('.excursion_card[data-category="historical"]:nth-child(1)'),
            luxor: document.querySelector('.excursion_card[data-category="historical"]:nth-child(2)'),
            parasailing: document.querySelector('.excursion_card[data-category="sea"]:nth-child(2)'),
            quadSafari: document.querySelector('.excursion_card[data-category="safari"]'),
            bathyscaphe: document.querySelector('.excursion_card[data-category="sea"]:nth-child(3)')
        };

        if (excursions.orangeBay) {
            const h3 = excursions.orangeBay.querySelector('h3');
            const p = excursions.orangeBay.querySelector('p');
            if (h3) h3.textContent = langData.orangeBay.title;
            if (p) p.textContent = langData.orangeBay.description;
        }

        if (excursions.cairo) {
            const h3 = excursions.cairo.querySelector('h3');
            const p = excursions.cairo.querySelector('p');
            if (h3) h3.textContent = langData.cairo.title;
            if (p) p.textContent = langData.cairo.description;
        }

        if (excursions.luxor) {
            const h3 = excursions.luxor.querySelector('h3');
            const p = excursions.luxor.querySelector('p');
            if (h3) h3.textContent = langData.luxor.title;
            if (p) p.textContent = langData.luxor.description;
        }

        if (excursions.parasailing) {
            const h3 = excursions.parasailing.querySelector('h3');
            const p = excursions.parasailing.querySelector('p');
            if (h3) h3.textContent = langData.parasailing.title;
            if (p) p.textContent = langData.parasailing.description;
        }

        if (excursions.quadSafari) {
            const h3 = excursions.quadSafari.querySelector('h3');
            const p = excursions.quadSafari.querySelector('p');
            if (h3) h3.textContent = langData.quadSafari.title;
            if (p) p.textContent = langData.quadSafari.description;
        }

        if (excursions.bathyscaphe) {
            const h3 = excursions.bathyscaphe.querySelector('h3');
            const p = excursions.bathyscaphe.querySelector('p');
            if (h3) h3.textContent = langData.bathyscaphe.title;
            if (p) p.textContent = langData.bathyscaphe.description;
        }
    }

    // Function to set language
    function setLanguage(lang) {
        const langData = languageData[lang];
        if (!langData) return;

        // Update language switcher
        const flagImg = selectedLanguage.querySelector('img');
        const codeSpan = selectedLanguage.querySelector('span');
        if (flagImg) flagImg.src = langData.flag;
        if (codeSpan) codeSpan.textContent = langData.code;

        // Update page elements
        document.title = langData.title;
        
        // Navigation menu
        const navLinks = document.querySelectorAll('.header_nav a');
        navLinks.forEach((link, index) => {
            if (langData.menuItems[index]) {
                link.textContent = langData.menuItems[index];
            }
        });

        // Main elements
        const headerText = document.querySelector('.header_main_text');
        if (headerText) headerText.textContent = langData.mainText;

        // Hero section
        const heroTitle = document.querySelector('.hero h1');
        if (heroTitle) heroTitle.textContent = langData.heroTitle;
        
        const heroSubtitle = document.querySelector('.hero p');
        if (heroSubtitle) heroSubtitle.textContent = langData.heroSubtitle;
        
        const heroButton = document.querySelector('.hero .btnChoose');
        if (heroButton) heroButton.textContent = langData.heroButton;

        // Excursions section
        const excursionsTitle = document.querySelector('.excursions h2');
        if (excursionsTitle) excursionsTitle.textContent = langData.excursionsTitle;
        
        // Filters
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach((btn, index) => {
            if (langData.filters[index]) {
                btn.textContent = langData.filters[index];
            }
        });

        // Update excursion cards
        updateExcursionCards(langData);

        // Buttons
        const bookButtons = document.querySelectorAll('.book_btn');
        bookButtons.forEach(btn => {
            btn.textContent = langData.bookBtn;
        });
        
        const moreButtons = document.querySelectorAll('.more_btn');
        moreButtons.forEach(btn => {
            btn.textContent = langData.moreBtn;
        });
        
        // About section
        const aboutTitle = document.querySelector('.about h2');
        if (aboutTitle) aboutTitle.textContent = langData.aboutTitle;
        
        const aboutTexts = document.querySelectorAll('.about_text p');
        if (aboutTexts.length >= 2) {
            aboutTexts[0].textContent = langData.aboutText1;
            aboutTexts[1].textContent = langData.aboutText2;
        }
        
        const advantages = document.querySelectorAll('.advantages li');
        advantages.forEach((item, index) => {
            if (langData.advantages[index]) {
                item.textContent = langData.advantages[index];
            }
        });

        // Reviews section
        const reviewsTitle = document.querySelector('.reviews h2');
        if (reviewsTitle) reviewsTitle.textContent = langData.reviewsTitle;
        
        const reviewCards = document.querySelectorAll('.review_card');
        reviewCards.forEach((card, index) => {
            const text = card.querySelector('.review_text');
            const author = card.querySelector('.review_author');
            
            if (text && langData.reviews[index]) {
                text.textContent = `"${langData.reviews[index]}"`;
            }
            
            if (author && langData.reviewAuthors[index]) {
                author.textContent = `- ${langData.reviewAuthors[index]}`;
            }
        });

        // Contacts section
        const contactsTitle = document.querySelector('.contacts h2');
        if (contactsTitle) contactsTitle.textContent = langData.contactsTitle;
        
        const contactUs = document.querySelector('.contacts_info h3');
        if (contactUs) contactUs.textContent = langData.contactUs;
        
        const contactItems = document.querySelectorAll('.contacts_info p');
        if (contactItems.length >= 3) {
            contactItems[0].innerHTML = `<i class="fas fa-map-marker-alt"></i> ${langData.address}`;
            contactItems[1].innerHTML = `<i class="fas fa-phone"></i> ${langData.phone}`;
            contactItems[2].innerHTML = `<i class="fas fa-envelope"></i> ${langData.email}`;
        }

        // Footer
        const footerMenuTitle = document.querySelector('.footer_links h4');
        if (footerMenuTitle) footerMenuTitle.textContent = langData.footerMenuTitle;
        
        const footerContactsTitle = document.querySelector('.footer_contacts h4');
        if (footerContactsTitle) footerContactsTitle.textContent = langData.footerContactsTitle;
        
        const copyright = document.querySelector('.footer_bottom p');
        if (copyright) copyright.textContent = langData.copyright;

        // Modal
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

        // Save selected language
        localStorage.setItem('selectedLanguage', lang);
    }

    // Initialize language switcher
    function initLanguageSwitcher() {
        // Click handler for selected language
        if (selectedLanguage) {
            selectedLanguage.addEventListener('click', function(e) {
                e.stopPropagation();
                dropdown.classList.toggle('active');
            });
        }

        // Language selection handler
        languageOptions.forEach(option => {
            option.addEventListener('click', function() {
                const lang = this.dataset.lang;
                setLanguage(lang);
                dropdown.classList.remove('active');
            });
        });

        // Close when clicking outside
        document.addEventListener('click', function() {
            dropdown.classList.remove('active');
        });

        // Set default language
        const savedLanguage = localStorage.getItem('selectedLanguage') || 'ru';
        setLanguage(savedLanguage);
    }

    // Initialize language switcher
    initLanguageSwitcher();

    // ==================== Form Submission ====================
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Your real field IDs from Google Forms (REPLACE THESE EXAMPLES)
            const FIELD_IDS = {
                name: 'entry.526800128',      // Name
                phone: 'entry.521779763',     // Phone
                date: 'entry.487369593',      // Date
                people: 'entry.1479108569',   // Number of people
                excursion: 'entry.1454424678' // Excursion name
            };
            
            // Your form URL (REPLACE WITH YOURS)
            const FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfSPRE5K7yOqbl26nHV9hlo4z47bY1hPIRbMa7C3taKVoeoJQ/formResponse';
            
            // Prepare data
            const formData = new URLSearchParams();
            const formElements = this.elements;
            
            // Add all visible fields
            formData.append(FIELD_IDS.name, formElements['entry.526800128'].value);
            formData.append(FIELD_IDS.phone, formElements['entry.521779763'].value);
            formData.append(FIELD_IDS.date, formElements['entry.487369593'].value);
            formData.append(FIELD_IDS.people, formElements['entry.1479108569'].value);
            
            // Add hidden fields
            formData.append(FIELD_IDS.excursion, document.getElementById('excursionNameInput').value);

            // Show loading
            const submitBtn = this.querySelector('button[type="submit"]');
            submitBtn.disabled = true;
            submitBtn.textContent = 'Отправка...';

            // Create invisible iframe for submission
            const iframe = document.createElement('iframe');
            iframe.name = 'hidden-iframe';
            iframe.style.display = 'none';
            document.body.appendChild(iframe);

            // Create temporary form for submission
            const tempForm = document.createElement('form');
            tempForm.action = FORM_URL;
            tempForm.method = 'POST';
            tempForm.target = 'hidden-iframe';
            tempForm.style.display = 'none';
            
            // Add data to temporary form
            formData.forEach((value, key) => {
                const input = document.createElement('input');
                input.type = 'hidden';
                input.name = key;
                input.value = value;
                tempForm.appendChild(input);
            });
            
            document.body.appendChild(tempForm);
            tempForm.submit();

            // Success notification
            setTimeout(() => {
                alert('Бронирование успешно отправлено!');
                submitBtn.disabled = false;
                submitBtn.textContent = 'Подтвердить бронирование';
                document.getElementById('bookingModal').style.display = 'none';
                document.body.style.overflow = 'auto';
                
                // Clean up DOM
                document.body.removeChild(iframe);
                document.body.removeChild(tempForm);
                
                // Reset form
                bookingForm.reset();
            }, 1500);
        });
    }

    // WhatsApp button handler
    const whatsappBtn = document.querySelector('.btnWA');
    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Phone number (replace with yours)
            const phoneNumber = '20123456789'; // Example number
            
            // Get form data
            const name = document.querySelector('input[name="entry.526800128"]').value || 'клиент';
            const phone = document.querySelector('input[name="entry.521779763"]').value || '(не указан)';
            const date = document.querySelector('input[name="entry.487369593"]').value || '(не указана)';
            const people = document.querySelector('input[name="entry.1479108569"]').value || '(не указано)';
            const excursion = document.getElementById('excursionNameInput').value || 'экскурсию';
            
            // Create message text
            const message = `Здравствуйте! Я ${name} (тел: ${phone}), хочу забронировать ${excursion} на ${date} для ${people} человек. Пожалуйста, предоставьте больше информации.`;
            
            // Create WhatsApp URL
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            
            // Open chat in new tab
            window.open(whatsappUrl, '_blank');
        });
    }
});