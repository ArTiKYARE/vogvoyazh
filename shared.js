/* ============================================================
   ВОГВОЯЖ — общие данные и утилиты для отдельных страниц
   (interactive.html, board.html). Дублируют логику index.html,
   чтобы страницы работали без сборки и роутера.
   ============================================================ */
"use strict";

const ICONS = {
  plane:`<svg class="ic ic-fill" viewBox="0 0 24 24" aria-hidden="true"><path d="M21.5 15.6 14 9.5V4.8a1.3 1.3 0 0 0-2.6 0v4.7l-7.5 6.1-.9 2.9 7-2.1v3.9l-2 1.4v1.3l3.3-.9 3.3.9v-1.3l-2-1.4v-3.9l7 2.1z"/></svg>`,
  sparkle:`<svg class="ic ic-fill" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2c1 5.5 4.5 9 10 10-5.5 1-9 4.5-10 10-1-5.5-4.5-9-10-10 5.5-1 9-4.5 10-10z"/></svg>`,
  star:`<svg class="ic ic-fill" viewBox="0 0 24 24" aria-hidden="true"><path d="m12 2.6 2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.4l-5.8 3.1 1.1-6.5-4.7-4.6 6.5-.9z"/></svg>`,
  heart:`<svg class="ic ic-fill" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0 1 12 6.5 5.5 5.5 0 0 1 21.5 12C19 16.5 12 21 12 21z"/></svg>`,
  crown:`<svg class="ic ic-fill" viewBox="0 0 24 24" aria-hidden="true"><path d="m3 7 4.5 3L12 4l4.5 6L21 7l-1.8 11H4.8z"/></svg>`,
  moon:`<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 13.5A8 8 0 0 1 10.5 4 8 8 0 1 0 20 13.5z"/></svg>`,
  mask:`<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h16v6a8 8 0 0 1-16 0z"/><path d="M8.5 10.5h.01M15.5 10.5h.01M9.5 14.5c1.5 1.3 3.5 1.3 5 0"/></svg>`,
  glass:`<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 2h8l-1 7a3.2 3.2 0 0 1-3 3 3.2 3.2 0 0 1-3-3z"/><path d="M12 12v7M8 21h8M6.5 5.5 5 4M17.5 5.5 19 4"/></svg>`,
  run:`<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><circle cx="14.5" cy="4.5" r="2"/><path d="M15 8.5 11 11l2.5 3-1.5 6"/><path d="M11 11 6.5 12 4 16"/><path d="m13.5 14 4 2 .5 4"/></svg>`,
  nail:`<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M9.5 3h5l1 7.5a3.5 3.5 0 0 1-3.5 3.5A3.5 3.5 0 0 1 8.5 10.5z"/><path d="M12 14v7M9 21h6"/></svg>`,
  soundOn:`<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9z"/><path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12"/></svg>`,
  soundOff:`<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9z"/><path d="m17 9.5 4 5m0-5-4 5"/></svg>`
};

const MOODS = {
  "Расслабиться": {
    icon:ICONS.moon,
    destinations:["Пудровый терминал","Остров без дедлайнов","Бухта «потом»","Спа-спутник","Плацкарт в хорошее настроение"]
  },
  "Хочу драмы": {
    icon:ICONS.mask,
    destinations:["Театр заката","Вулкан эмоций","Причал красивых слез","Променад недосказанности","Терминал «я же говорила»"]
  },
  "Девичник": {
    icon:ICONS.glass,
    destinations:["Девичник в невесомости","Лагуна лайков","Бар «без объяснений»","Остров блеска для губ","Курорт «только для своих»"]
  },
  "Сбежать от понедельника": {
    icon:ICONS.run,
    destinations:["Терминал «сбежать»","Полюс понедельника","Поезд в нормальную жизнь","Аэропорт «не беспокоить»","Улица свободных пятниц"]
  },
  "Быть недоступной": {
    icon:ICONS.nail,
    destinations:["Резиденция «не звоните»","Башня игнора","Люкс «я занята собой»","Терминал offline","Вилла «прочитаю позже»"]
  }
};

const BAGGAGE = ["1 сердце","3 секрета","настроение оверсайз","одна невысказанная обида","полярный снимок будущего","два плана и ноль обязательств","чемодан ожиданий","мини-флакон самоуверенности"];
const GATES = ["Закат-1","Фламинго-4","Облако-2","Розовый-7","Терминал мечты","Выход «не ищи»","Gate unavailable"];
const NOTES = [
  "Ваш рейс выполняется настроением.",
  "Опоздание на собственную жизнь не принимается.",
  "Питание: комплименты от судьбы.",
  "Wi-Fi ловит только в моментах счастья.",
  "Разрешено плакать в иллюминатор.",
  "Если стало слишком красиво — это нормально.",
  "Дети до 18 лет допускаются только в душе.",
  "Внутренний ребенок застрахован."
];

const rand = arr => arr[Math.floor(Math.random()*arr.length)];
const $ = sel => document.querySelector(sel);
function esc(s){ return String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c])); }

/* ---------- Реальная статистика нажатий (localStorage, общий ключ с index.html) ---------- */
const STATS_KEY = "vogvoyazh_stats_v1";
const Stats = {
  data:{clicks:0, byTarget:{}, tickets:0, books:0, ts:Date.now()},
  load(){
    try{ const raw = localStorage.getItem(STATS_KEY); if (raw) this.data = Object.assign(this.data, JSON.parse(raw)); }catch(e){}
    return this.data;
  },
  save(){ try{ localStorage.setItem(STATS_KEY, JSON.stringify(this.data)); }catch(e){} },
  click(target){
    this.data.clicks++;
    this.data.byTarget[target] = (this.data.byTarget[target]||0)+1;
    this.data.ts = Date.now();
    this.save(); renderStats();
  },
  inc(field){ this.data[field] = (this.data[field]||0)+1; this.save(); renderStats(); }
};
Stats.load();

/* Любой клик по интерактивному элементу — в статистику */
document.addEventListener("click", e => {
  const el = e.target.closest("button, a.btn, .mood-btn, [data-track], [data-book]");
  if (!el) return;
  const target = el.dataset.track
    || (el.id ? "#"+el.id : "")
    || (el.dataset.book !== undefined ? "book:"+(el.dataset.tour||"тур") : "")
    || (el.textContent||"").trim().slice(0,32)
    || "unknown";
  Stats.click(target);
}, true);

function animateNumber(el, to){
  const from = parseInt(el.textContent,10) || 0;
  if (from === to){ el.textContent = to; return; }
  const t0 = performance.now(), dur = 450;
  (function tick(t){
    const p = Math.min(1,(t-t0)/dur), eased = 1-Math.pow(1-p,3);
    el.textContent = Math.round(from + (to-from)*eased);
    if (p<1) requestAnimationFrame(tick);
  })(t0);
}
function renderStats(){
  const d = Stats.data;
  [["#statClicks",d.clicks],["#statTickets",d.tickets||0],["#statBooks",d.books||0],["#clickCounter",d.clicks]]
    .forEach(([sel,val])=>{ const el=$(sel); if (el) animateNumber(el, val||0); });
}

/* ---------- Тост ---------- */
let toastTimer;
function showToast(text){
  const toast = $("#toast"), tt = $("#toastText");
  if (!toast) return;
  tt.textContent = text;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 6000);
}

/* ---------- Ripple-волна (shadcn/ui-паттерн) ---------- */
document.addEventListener("pointerdown", e => {
  const host = e.target.closest(".ripple-host");
  if (!host) return;
  const r = document.createElement("span");
  const rect = host.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height) * 1.15;
  r.className = "ripple" + (host.classList.contains("btn-ghost") || host.classList.contains("btn-outline") ? " ripple-dark" : "");
  r.style.width = r.style.height = size + "px";
  r.style.left = (e.clientX - rect.left - size/2) + "px";
  r.style.top  = (e.clientY - rect.top  - size/2) + "px";
  host.appendChild(r);
  r.addEventListener("animationend", () => r.remove());
});

/* ---------- Появление секций ---------- */
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches && "IntersectionObserver" in window){
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => { if (en.isIntersecting){ en.target.classList.add("visible"); io.unobserve(en.target); } });
  }, {threshold:.12});
  document.querySelectorAll(".reveal").forEach(el => io.observe(el));
} else {
  document.querySelectorAll(".reveal").forEach(el => el.classList.add("visible"));
}

/* ---------- Посадочный талон: генерация и рендер ---------- */
let currentTicket = null;

function generateTicket(moodName){
  const nameEl = $("#guestName");
  const rawName = nameEl ? nameEl.value.trim() : "";
  const name = (rawName || "ГОСТЬ ЗАКАТА").toUpperCase();
  const dest = rand(MOODS[moodName].destinations);
  currentTicket = {
    name, mood: moodName, dest,
    flight: "VOY-" + (Math.floor(Math.random()*900) + 100),
    seat: (Math.floor(Math.random()*28)+1) + rand(["A","B","C","D","E","F"]),
    gate: rand(GATES),
    baggage: rand(BAGGAGE),
    promo: "PINK-ZAL-" + Math.random().toString(36).slice(2,6).toUpperCase(),
    note: rand(NOTES),
    date: new Date().toLocaleDateString("ru-RU")
  };
  renderTicket(currentTicket);
  return currentTicket;
}

function renderTicket(t){
  $("#boardingPassBox").innerHTML = `
  <div class="boarding-pass" id="bpCard">
    <span class="bp-sparkle" style="top:10px;right:16px">${ICONS.sparkle}</span>
    <span class="bp-sparkle s2" style="bottom:64px;left:12px">${ICONS.star}</span>
    <div class="bp-top">
      <div class="bp-brand">
        <span class="airline">${ICONS.plane} ВОГВОЯЖ</span>
        <span style="font-size:.7rem;letter-spacing:.14em;text-transform:uppercase;color:var(--crimson)">Boarding Mood Pass</span>
      </div>
      <div class="bp-row" style="margin-top:.9rem">
        <span>Рейс<strong>${esc(t.flight)}</strong></span>
        <span>Дата<strong style="text-transform:none">${esc(t.date)}</strong></span>
        <span>Место<strong>${esc(t.seat)}</strong></span>
        <span>Выход<strong>${esc(t.gate)}</strong></span>
      </div>
    </div>
    <div class="bp-main">
      <div class="bp-name"><small>Пассажир · Настроение: ${esc(t.mood)}</small>${esc(t.name)}</div>
      <div class="bp-route">
        <div class="pt bp-row" style="flex:1"><span>Откуда</span><strong>Зал ожидания реальности</strong></div>
        <div class="arrow" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M21.5 15.6 14 9.5V4.8a1.3 1.3 0 0 0-2.6 0v4.7l-7.5 6.1-.9 2.9 7-2.1v3.9l-2 1.4v1.3l3.3-.9 3.3.9v-1.3l-2-1.4v-3.9l7 2.1z"/></svg></div>
        <div class="pt bp-row" style="flex:1;text-align:right"><span>Куда</span><strong>${esc(t.dest)}</strong></div>
      </div>
      <div class="bp-grid-3">
        <div class="bp-row"><span>Багаж</span><strong>${esc(t.baggage)}</strong></div>
        <div class="bp-row"><span>Промокод</span><strong>${esc(t.promo)}</strong></div>
        <div class="bp-row"><span>Класс</span><strong>Розовый</strong></div>
      </div>
    </div>
    <hr class="bp-perf">
    <div class="bp-stub">
      <div class="bp-barcode" aria-hidden="true"></div>
      <div class="bp-promo">${esc(t.promo)}</div>
    </div>
    <p class="bp-note">Примечание: «${esc(t.note)}»</p>
  </div>`;
}

/* ---------- Общее табло (localStorage; real-time путь — Supabase, см. index.html) ---------- */
const LS_KEY = "vogvoyazh_flights";

function loadFeed(){
  try { return JSON.parse(localStorage.getItem(LS_KEY) || "[]"); } catch(e){ return []; }
}
function saveFlight(entry){
  entry.ts = Date.now();
  try {
    const saved = JSON.parse(localStorage.getItem(LS_KEY) || "[]");
    saved.unshift(entry);
    localStorage.setItem(LS_KEY, JSON.stringify(saved.slice(0, 50)));
  } catch(e){ /* приватный режим */ }
}
function agoText(ts){
  if (!ts) return "недавно";
  const m = Math.floor((Date.now()-ts)/60000);
  if (m < 1) return "только что";
  if (m < 60) return m + " мин назад";
  const h = Math.floor(m/60);
  if (h < 24) return h + " ч назад";
  return Math.floor(h/24) + " дн назад";
}
function feedLine(f){
  const verbs = ["улетела в","улетел в","выбрала","выбрал","летит в","исчезла в"];
  const v = f.verb || (/[а-яА-ЯёЁ]$/.test(f.name) ? verbs[0] : rand(verbs));
  return `${esc(f.name)} ${v} ${esc(f.dest)}${f.ts ? ` <time>${agoText(f.ts)}</time>` : ""}`;
}
