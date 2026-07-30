'use client';

import { useRef, useState } from 'react';

const tg = 'https://t.me/dr_eislamov';
const feedback = 'https://t.me/feedback_elman';

const subjects = [
  'Анатомия',
  'Топографическая анатомия',
  'Физиология',
  'Патологическая физиология',
  'Патологическая анатомия',
  'Фармакология',
  'Оперативная хирургия',
  'Биохимия',
  'Микробиология',
  'Терапия',
  'Неврология',
  'Инфекционные болезни'
];

const reviews = [1, 2, 3, 4, 5, 6].map((n) => `/reviews/review-${n}.jpg`);

function TelegramButton({ children = 'Написать в Telegram', className = '' }) {
  return (
    <a className={`btn ${className}`} href={tg} target="_blank" rel="noreferrer">
      {children}<span aria-hidden="true">↗</span>
    </a>
  );
}

export default function Home() {
  const [review, setReview] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const touchStartX = useRef(null);
  const diplomaModal = useRef(null);
  const reviewModal = useRef(null);

  const prev = () => setReview((current) => (current - 1 + reviews.length) % reviews.length);
  const next = () => setReview((current) => (current + 1) % reviews.length);
  const closeMenu = () => setMenuOpen(false);

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return;
    const endX = event.changedTouches[0]?.clientX ?? touchStartX.current;
    const distance = endX - touchStartX.current;
    touchStartX.current = null;

    if (Math.abs(distance) < 45) return;
    if (distance > 0) prev();
    else next();
  };

  return (
    <main>
      <header className="header container">
        <a className="brand" href="#top" onClick={closeMenu}>
          <span className="brandMark" aria-hidden="true">✚</span>
          <span><b>МедТьютор</b><small>репетитор для медиков</small></span>
        </a>

        <nav className="desktopNav" aria-label="Основная навигация">
          <a href="#subjects">Предметы</a>
          <a href="#process">Как проходит обучение</a>
          <a href="#about">Обо мне</a>
          <a href="#reviews">Отзывы</a>
          <a href="#faq">FAQ</a>
        </nav>

        <TelegramButton className="headerTelegram">Связаться</TelegramButton>

        <button
          className={`menuToggle ${menuOpen ? 'open' : ''}`}
          type="button"
          aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span></span><span></span><span></span>
        </button>
      </header>

      <button
        className={`menuBackdrop ${menuOpen ? 'open' : ''}`}
        type="button"
        aria-label="Закрыть меню"
        tabIndex={menuOpen ? 0 : -1}
        onClick={closeMenu}
      />

      <aside className={`mobileMenu ${menuOpen ? 'open' : ''}`} aria-hidden={!menuOpen}>
        <nav aria-label="Мобильная навигация">
          <a href="#subjects" onClick={closeMenu}>Предметы</a>
          <a href="#process" onClick={closeMenu}>Как проходит обучение</a>
          <a href="#prices" onClick={closeMenu}>Пакеты и пробный урок</a>
          <a href="#about" onClick={closeMenu}>Обо мне</a>
          <a href="#reviews" onClick={closeMenu}>Отзывы</a>
          <a href="#faq" onClick={closeMenu}>FAQ</a>
        </nav>
        <TelegramButton>Написать в Telegram</TelegramButton>
      </aside>

      <section className="hero" id="top">
        <div className="container heroGrid">
          <div className="heroCopy">
            <p className="eyebrow">ОНЛАЙН-ЗАНЯТИЯ ДЛЯ СТУДЕНТОВ-МЕДИКОВ</p>
            <h1>Помогаю понять медицинские дисциплины и подготовиться к экзаменам <em>без бессмысленного заучивания</em></h1>
            <p className="lead">Объясняю сложные темы простым языком, выстраиваю систему знаний и сопровождаю до успешной сдачи экзамена.</p>
            <div className="heroPoints">
              <span>Индивидуальная программа</span>
              <span>Конспекты и записи</span>
              <span>Домашние задания с проверкой</span>
              <span>24/7 на связи</span>
            </div>
            <TelegramButton>Обсудить обучение</TelegramButton>
          </div>

          <div className="heroPhoto">
            <div className="photoHalo"></div>
            <img src="/elman.jpg" alt="Эльман Исламов" />
            <div className="identityCard">
              <b>Эльман Исламов</b>
              <span>Врач-хирург</span>
              <span>6 лет преподавания</span>
              <span>700+ студентов</span>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits container" aria-label="Преимущества обучения">
        <article><i>01</i><b>Понятные объяснения</b><span>Без воды и лишней теории</span></article>
        <article><i>02</i><b>Практические примеры</b><span>Связываем теорию с клиникой</span></article>
        <article><i>03</i><b>Полное сопровождение</b><span>На связи до результата</span></article>
      </section>

      <section className="section soft">
        <div className="container">
          <h2>С какими проблемами приходят студенты</h2>
          <div className="cards four">
            <article><strong>Трудно понять материал</strong><p>Сложный язык учебников и большой объём информации мешают увидеть главное.</p></article>
            <article><strong>Нет системы знаний</strong><p>Темы запоминаются отдельно и не складываются в общую картину.</p></article>
            <article><strong>Близко экзамен</strong><p>Нужен чёткий план, приоритеты и подготовка без хаоса.</p></article>
            <article><strong>Нет уверенности</strong><p>Знания есть, но сложно отвечать на вопросы и решать задачи.</p></article>
          </div>
        </div>
      </section>

      <section className="section container" id="subjects">
        <div className="sectionHead">
          <div><p className="eyebrow">НАПРАВЛЕНИЯ</p><h2>С какими дисциплинами я работаю</h2></div>
          <TelegramButton>Не нашли предмет?</TelegramButton>
        </div>
        <div className="subjects">
          {subjects.map((subject, index) => (
            <article key={subject}><span>{String(index + 1).padStart(2, '0')}</span><b>{subject}</b></article>
          ))}
        </div>
      </section>

      <section className="section soft" id="process">
        <div className="container">
          <p className="eyebrow">ФОРМАТ</p>
          <h2>Как проходит обучение</h2>
          <div className="timeline">
            <article><i>1</i><div><b>Знакомство</b><p>Определяем цель, текущий уровень и сроки подготовки.</p></div></article>
            <article><i>2</i><div><b>План обучения</b><p>Составляю индивидуальную программу под вашу задачу.</p></div></article>
            <article><i>3</i><div><b>Занятия</b><p>Разбираем темы, вопросы, задания и сложные моменты.</p></div></article>
            <article><i>4</i><div><b>Закрепление</b><p>К каждой теме — домашнее задание с проверкой.</p></div></article>
            <article><i>5</i><div><b>Результат</b><p>Веду вас до уверенного ответа и успешной сдачи.</p></div></article>
          </div>
        </div>
      </section>

      <section className="section container" id="prices">
        <p className="eyebrow">ПАКЕТЫ</p>
        <h2>Выберите глубину подготовки</h2>
        <div className="pricing">
          <article>
            <h3>Пакет 22 занятия</h3>
            <ul><li>Индивидуальная программа</li><li>Домашние задания с проверкой</li><li>Конспекты и записи занятий</li><li>Поддержка 24/7</li><li>Сопровождение до результата</li></ul>
            <div className="price">от 3 600 ₽ <small>в месяц</small></div>
            <TelegramButton>Обсудить пакет</TelegramButton>
          </article>
          <article className="featured">
            <span className="badge">ГЛУБОКАЯ ПОДГОТОВКА</span>
            <h3>Пакет 36 занятий</h3>
            <ul><li>Расширенная программа</li><li>Домашние задания с проверкой</li><li>Конспекты и записи занятий</li><li>Поддержка 24/7</li><li>Сопровождение до результата</li></ul>
            <div className="price">от 5 000 ₽ <small>в месяц</small></div>
            <TelegramButton>Обсудить пакет</TelegramButton>
          </article>
          <article className="trial">
            <span className="badge">БЕСПЛАТНО</span>
            <h3>Пробный урок</h3>
            <ul><li>Короткое знакомство</li><li>Разбор мини-темы</li><li>Оценка текущего уровня</li><li>План дальнейших занятий</li><li>Ответы на ваши вопросы</li></ul>
            <div className="price">0 ₽</div>
            <TelegramButton>Записаться</TelegramButton>
          </article>
        </div>
      </section>

      <section className="section about" id="about">
        <div className="container aboutGrid">
          <div className="aboutPhoto"><img src="/elman.jpg" alt="Эльман Исламов, врач-хирург" /></div>
          <div>
            <p className="eyebrow">ОБО МНЕ</p>
            <h2>Эльман Исламов</h2>
            <h3>Врач-хирург и преподаватель медицинских дисциплин</h3>
            <p>Окончил Сеченовский университет по специальности «Лечебное дело» и ординатуру по хирургии в МОНИКИ. Уже 6 лет помогаю студентам разобраться в сложных темах, систематизировать знания и уверенно сдавать экзамены.</p>
            <div className="stats"><b><strong>6 лет</strong> опыта преподавания</b><b><strong>700+</strong> подготовленных студентов</b><b><strong>100%</strong> сдали экзамен</b></div>
            <TelegramButton>Написать Эльману</TelegramButton>
          </div>
          <div className="diploma">
            <p className="eyebrow">ОБРАЗОВАНИЕ</p>
            <h3>Диплом Сеченовского университета</h3>
            <button type="button" onClick={() => diplomaModal.current?.showModal()} aria-label="Увеличить диплом">
              <img src="/diploma-redacted.jpg" alt="Диплом специалиста" />
            </button>
            <small>Часть регистрационных данных скрыта.</small>
          </div>
        </div>
      </section>

      <section className="section container" id="reviews">
        <div className="sectionHead">
          <div><p className="eyebrow">РЕЗУЛЬТАТЫ</p><h2>Отзывы студентов</h2></div>
          <a className="outlineBtn" href={feedback} target="_blank" rel="noreferrer">Все отзывы в Telegram ↗</a>
        </div>

        <div className="reviewCarousel" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
          <button className="reviewArrow prev" type="button" aria-label="Предыдущий отзыв" onClick={prev}>‹</button>
          <button className="reviewFrame" type="button" onClick={() => reviewModal.current?.showModal()} aria-label={`Увеличить отзыв ${review + 1}`}>
            <img src={reviews[review]} alt={`Оригинальный отзыв студента ${review + 1}`} />
            <span className="zoomHint">Нажмите, чтобы увеличить</span>
          </button>
          <button className="reviewArrow next" type="button" aria-label="Следующий отзыв" onClick={next}>›</button>
        </div>

        <p className="swipeHint">Листайте отзывы пальцем влево или вправо</p>
        <div className="dots">
          {reviews.map((_, index) => (
            <button aria-label={`Показать отзыв ${index + 1}`} className={index === review ? 'active' : ''} onClick={() => setReview(index)} key={index}></button>
          ))}
        </div>
        <div className="reviewActions">
          <button className="outlineBtn" type="button" onClick={next}>Следующий отзыв</button>
          <a className="btn" href={feedback} target="_blank" rel="noreferrer">Больше отзывов <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <section className="section soft" id="faq">
        <div className="container">
          <p className="eyebrow">FAQ</p>
          <h2>Часто задаваемые вопросы</h2>
          <div className="faq">
            <details><summary>Можно ли заниматься с нулевого уровня?</summary><p>Да. Программа строится от вашего текущего уровня и постепенно закрывает основные пробелы.</p></details>
            <details><summary>Что входит в пакет занятий?</summary><p>Индивидуальный план, занятия, домашние задания с проверкой, конспекты, записи и постоянная поддержка.</p></details>
            <details><summary>Сколько длится занятие?</summary><p>Я не привязываю работу к жёсткому таймеру: мы заканчиваем тогда, когда разобрали запланированный материал.</p></details>
            <details><summary>Как проходит бесплатный пробный урок?</summary><p>Разбираем небольшую тему, оцениваем текущий уровень и составляем план дальнейшей подготовки.</p></details>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <div><p className="eyebrow">ГОТОВЫ НАЧАТЬ?</p><h2>Расскажите, какой предмет вам необходимо подготовить</h2><p>Напишите мне в Telegram — обсудим цель и подберём подходящий формат.</p></div>
          <TelegramButton>Написать @dr_eislamov</TelegramButton>
        </div>
      </section>

      <footer className="container">
        <span>© 2026 МедТьютор — Эльман Исламов</span>
        <a href={feedback} target="_blank" rel="noreferrer">Канал с отзывами</a>
        <a href={tg} target="_blank" rel="noreferrer">Telegram</a>
      </footer>

      <dialog ref={diplomaModal} className="mediaModal" onClick={(event) => { if (event.target === event.currentTarget) event.currentTarget.close(); }}>
        <button className="close" type="button" aria-label="Закрыть" onClick={() => diplomaModal.current?.close()}>×</button>
        <img src="/diploma-redacted.jpg" alt="Диплом специалиста крупно" />
      </dialog>

      <dialog ref={reviewModal} className="mediaModal reviewModal" onClick={(event) => { if (event.target === event.currentTarget) event.currentTarget.close(); }}>
        <button className="close" type="button" aria-label="Закрыть" onClick={() => reviewModal.current?.close()}>×</button>
        <img src={reviews[review]} alt={`Оригинальный отзыв студента ${review + 1} крупно`} />
      </dialog>

      <a className="mobileStickyCta" href={tg} target="_blank" rel="noreferrer">
        <span aria-hidden="true">✈</span> Написать в Telegram
      </a>
    </main>
  );
}
