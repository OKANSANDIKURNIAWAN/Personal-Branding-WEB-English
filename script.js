/* ─── CURSOR ─── */
const curEl = document.getElementById("cur"),
  cufEl = document.getElementById("cuf");
let mx = 0,
  my = 0,
  fx = 0,
  fy = 0;
document.addEventListener("mousemove", (e) => {
  mx = e.clientX;
  my = e.clientY;
  curEl.style.left = mx + "px";
  curEl.style.top = my + "px";
});
(function anim() {
  fx += (mx - fx) * 0.1;
  fy += (my - fy) * 0.1;
  cufEl.style.left = fx + "px";
  cufEl.style.top = fy + "px";
  requestAnimationFrame(anim);
})();
document
  .querySelectorAll("a,button,.pf-card,.skill-card,.k-card,.hacc-hd")
  .forEach((el) => {
    el.addEventListener("mouseenter", () => {
      curEl.style.width = "18px";
      curEl.style.height = "18px";
      cufEl.style.width = "56px";
      cufEl.style.height = "56px";
    });
    el.addEventListener("mouseleave", () => {
      curEl.style.width = "10px";
      curEl.style.height = "10px";
      cufEl.style.width = "36px";
      cufEl.style.height = "36px";
    });
  });

/* ─── THEME TOGGLE ─── */
const themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
  themeBtn.textContent = document.body.classList.contains("light") ? "◐" : "◑";
});

/* ─── NAVBAR ACTIVE ─── */
const allSecs = document.querySelectorAll("section[id]");
window.addEventListener("scroll", () => {
  let cur = "";
  allSecs.forEach((s) => {
    if (window.scrollY >= s.offsetTop - 120) cur = s.id;
  });
  document.querySelectorAll(".tn-link").forEach((a) => {
    a.classList.remove("active");
    if (a.dataset.sec === cur) a.classList.add("active");
  });
});

/* ─── ABOUT PANELS ─── */
function switchPanel(id, btn) {
  document
    .querySelectorAll(".acc-panel")
    .forEach((p) => p.classList.remove("active"));
  document
    .querySelectorAll(".acc-tab")
    .forEach((b) => b.classList.remove("active"));
  document.getElementById("panel-" + id).classList.add("active");
  btn.classList.add("active");
  document.querySelectorAll("#panel-" + id + " .reveal").forEach((el, i) => {
    el.classList.remove("vis");
    setTimeout(() => el.classList.add("vis"), i * 80 + 50);
  });
}

/* ─── HOBI ACCORDION ─── */
function toggleHobi(hd) {
  const item = hd.closest(".hacc-item");
  const body = item.querySelector(".hacc-body");
  const open = item.classList.contains("open");
  item.classList.toggle("open", !open);
  body.style.maxHeight = open ? "0" : body.scrollHeight + 20 + "px";
}

/* ─── SCROLL REVEAL ─── */
const ro = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("vis");
    });
  },
  { threshold: 0.1 },
);
document.querySelectorAll(".reveal").forEach((el) => ro.observe(el));

/* ─── SKILL PILL FILL ─── */
const pillObs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.querySelectorAll(".sk-pill-fill").forEach((fill) => {
          const pct = fill.dataset.height;
          fill.style.height = pct + "%";
          fill.closest(".skill-card").classList.add("filled");
        });
        e.target
          .querySelectorAll(".sk-fill")
          .forEach((b) => (b.style.width = b.dataset.width + "%"));
        pillObs.unobserve(e.target);
      }
    });
  },
  { threshold: 0.2 },
);
document.querySelectorAll("#skills").forEach((s) => pillObs.observe(s));

/* CV BARS */
const cvObs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target
          .querySelectorAll(".cv-sb-fl")
          .forEach((b) => (b.style.width = b.dataset.width + "%"));
        cvObs.unobserve(e.target);
      }
    });
  },
  { threshold: 0.3 },
);
document.querySelectorAll("#cv").forEach((s) => cvObs.observe(s));

/* ─── PORTFOLIO SLIDER ─── */
const pfData = [
  {
    cat: "IoT Project",
    title: "Smart Building & Parking System",
    emoji: "🌐",
    desc: "I built an IoT smart-building model that simulates parking monitoring and automated device control with an ESP32 and sensors.",
    tags: ["ESP 32", "Arduino Ide", "DHT 22", "RFID"],
    year: "2025",
    type: "IoT",
    image: "foto/Smart Building & Smart Parking.jpg",
    liveLink:
      "https://drive.google.com/file/d/19zzqwoYsCZTmLTWEJPtUQeTdeHymok2_/view?usp=sharing",
    githubLink: null,
  },
  {
    cat: "Web UI/UX Design",
    title: "Web Film & Series",
    emoji: "🎨",
    desc: "I designed a modern, responsive platform featuring Indonesian films and series from 2025–2026.",
    tags: ["Figma", "CSS", "VS Code", "HTML"],
    year: "2025",
    type: "Web Design",
    image: "foto/web.png",
    liveLink: "https://webfilm-gules.vercel.app/index.html",
    githubLink: "https://github.com/OKANSANDIKURNIAWAN/okn-webpp.git",
  },
  {
    cat: "Cisco Certified Course",
    title: "IT Essential (Cisco)",
    emoji: "📱",
    desc: "I completed Cisco Networking Academy training in IT fundamentals, computer hardware assembly, and networking basics.",
    tags: ["Cisco", "Networking"],
    year: "2023",
    type: "Networking",
    image: "foto/Screenshot 2026-05-16 195636.png",
    liveLink:
      "https://drive.google.com/file/d/1xaFpqre-_V5UHETEpS8jbRDcPdun259v/view?usp=sharing",
    githubLink: null,
  },
  {
    cat: "Math Competition",
    title: "Math City Map (MCM)",
    emoji: "🛒",
    desc: "I competed in a location-based mathematics challenge that combined analytical problem-solving with field exploration. The event took place at Taman Raden Saleh to celebrate National Education Day.",
    tags: [
      "MCM App",
      "Problem Solving",
      "Team Strategy",
      "Scientific Calculator",
    ],
    year: "2024",
    type: "Certificate",
    image: "foto/sertifikat mcm.jpeg",
    liveLink: null,
    githubLink: null,
  },
  {
    cat: "Education Program",
    title: "Solve Education",
    emoji: "📊",
    desc: "I used a digital, game-based learning platform to improve my English. I earned recognition as one of Semarang's most consistent learners and won first place in the Grade 8 category.",
    tags: [
      "Learning Participation",
      "Skill Development",
      "Solve Education Platform",
    ],
    year: "2024",
    type: "Certificate",
    image: "foto/solve education.jpeg",
    liveLink: null,
    githubLink: null,
  },
  {
    cat: "Coding Workshop",
    title: "Hour of Code Minecraft",
    emoji: "🏫",
    desc: "I completed the Hour of Code Minecraft programming workshop and practiced building algorithms through interactive coding activities.",
    tags: ["Programming", "Algorithms"],
    year: "2026",
    type: "Certificate",
    image: "foto/minecraft.jpg",
    liveLink: null,
    githubLink: null,
  },
  {
    cat: "Coding Workshop",
    title: "Hour of Code Music",
    emoji: "🏫",
    desc: "I completed the Hour of Code Music programming workshop and explored coding through interactive music activities.",
    tags: ["Programming", "Music"],
    year: "2026",
    type: "Certificate",
    image: "foto/music.jpg",
    liveLink: null,
    githubLink: null,
  },

  {
    cat: "CTI Group x GENed",
    title: "Hackathon DIGIForward",
    emoji: "🏫",
    desc: "I designed an innovative solution to a real-world problem using Design Thinking during the online qualifier. I also built an interactive web prototype using an AI-assisted development workflow.",
    tags: ["Antigravity", "Canva", "Opencode"],
    year: "2024",
    type: "Photo",
    image: "foto/Hackathon.JPG",
    CanvaLink: "https://canva.link/j2bqzrpxll007wt",
    githubLink: null,
  },
];
const total = pfData.length;
let pfCur = 0;
const pfTrack = document.getElementById("pfTrack");
const pfDots = document.getElementById("pfDots");
const pfCtrEl = document.getElementById("pfCtr");
pfData.forEach((_, i) => {
  const d = document.createElement("div");
  d.className = "pfdot" + (i === 0 ? " active" : "");
  d.onclick = () => goTo(i);
  pfDots.appendChild(d);
});
function goTo(i) {
  pfCur = Math.max(0, Math.min(i, total - 1));
  const w = pfTrack.children[0].offsetWidth + 20;
  pfTrack.style.transform = `translateX(-${pfCur * w}px)`;
  document
    .querySelectorAll(".pfdot")
    .forEach((d, j) => d.classList.toggle("active", j === pfCur));
  pfCtrEl.textContent =
    String(pfCur + 1).padStart(2, "0") + " / " + String(total).padStart(2, "0");
  document.getElementById("pfPrev").disabled = pfCur === 0;
  document.getElementById("pfNext").disabled = pfCur >= total - 1;
}
function slidePf(d) {
  goTo(pfCur + d);
}
// Drag
let sx = 0,
  st = 0,
  drag = false;
const pfOuter = document.getElementById("pfOuter");
pfOuter.addEventListener("mousedown", (e) => {
  drag = true;
  sx = e.clientX;
  const m = new DOMMatrix(getComputedStyle(pfTrack).transform);
  st = m.m41;
});
document.addEventListener("mousemove", (e) => {
  if (!drag) return;
  pfTrack.style.transition = "none";
  pfTrack.style.transform = `translateX(${st + (e.clientX - sx)}px)`;
});
document.addEventListener("mouseup", (e) => {
  if (!drag) return;
  drag = false;
  pfTrack.style.transition = "";
  const dx = e.clientX - sx;
  const w = pfTrack.children[0].offsetWidth + 20;
  if (Math.abs(dx) > w * 0.2) goTo(dx < 0 ? pfCur + 1 : pfCur - 1);
  else goTo(pfCur);
});

/* ─── MODAL ─── */
function openModal(idx) {
  const d = pfData[idx];
  document.getElementById("mThumb").innerHTML =
    `<img src="${d.image}" alt="${d.title}" style="width: 100%; height: 100%; object-fit: cover;">`;
  document.getElementById("mCat").textContent = d.cat;
  document.getElementById("mTitle").textContent = d.title;
  document.getElementById("mDesc").textContent = d.desc;
  document.getElementById("mInfo").innerHTML =
    `<div><p class="mi-lbl">Year</p><p class="mi-val">${d.year}</p></div><div><p class="mi-lbl">Type</p><p class="mi-val">${d.type}</p></div><div><p class="mi-lbl">Status</p><p class="mi-val">Completed</p></div><div><p class="mi-lbl">Platform</p><p class="mi-val">Web / Desktop</p></div>`;
  document.getElementById("mTags").innerHTML = d.tags
    .map((t) => `<span class="ptag">${t}</span>`)
    .join("");

  let linksHTML = "";
  if (d.liveLink) {
    linksHTML += `<a href="${d.liveLink}" class="ml pri" target="_blank" rel="noopener noreferrer">🔗 View Project</a>`;
  }
  if (d.githubLink) {
    linksHTML += `<a href="${d.githubLink}" class="ml sec" target="_blank">⊞ GitHub</a>`;
  }
  if (d.CanvaLink) {
    linksHTML += `<a href="${d.CanvaLink}" class="ml sec" target="_blank" rel="noopener noreferrer">🎨 Canva</a>`;
  }
  document.getElementById("mLinks").innerHTML = linksHTML;

  document.getElementById("modal").classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeModal() {
  document.getElementById("modal").classList.remove("open");
  document.body.style.overflow = "";
}
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

/* ─── ANIMATED SKILLS CARDS ─── */
const skillsData = [
  { label: "HTML", pct: 80 },
  { label: "CSS", pct: 60 },
  { label: "IoT", pct: 88 },
  { label: "Networking", pct: 58 },
  { label: "UI/UX", pct: 69 },
];

const grid = document.getElementById("cardsGrid");
if (grid) {
  skillsData.forEach((s, i) => {
    const card = document.createElement("div");
    card.className = "skill-card";

    const fill = document.createElement("div");
    fill.className = "card-fill";

    const iconWrap = document.createElement("div");
    iconWrap.className = "icon-circle";
    iconWrap.textContent = "●";

    const pctEl = document.createElement("div");
    pctEl.className = "card-pct";
    pctEl.textContent = "0%";

    const labelEl = document.createElement("div");
    labelEl.className = "card-label";
    labelEl.textContent = s.label;

    card.appendChild(fill);
    card.appendChild(iconWrap);
    card.appendChild(pctEl);
    card.appendChild(labelEl);
    grid.appendChild(card);

    setTimeout(
      () => {
        fill.style.height = s.pct + "%";
        pctEl.classList.add("visible");
        labelEl.classList.add("visible");

        let start = null;
        const duration = 1400;
        function animNum(ts) {
          if (!start) start = ts;
          const progress = Math.min((ts - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          pctEl.textContent = Math.round(eased * s.pct) + "%";
          if (progress < 1) requestAnimationFrame(animNum);
        }
        requestAnimationFrame(animNum);
      },
      200 + i * 150,
    );
  });
}

/* ─── ORBIT SKILLS ─── */
const orbitSkills = [
  {
    name: "UI/UX Design",
    pct: 65,
    cat: "Hard Skill",
    r: 80,
    angle: 0,
    desc: "I design modern, easy-to-use interfaces through wireframing, layout planning, and visual exploration.",
  },
  {
    name: "Web Development",
    pct: 72,
    cat: "Hard Skill",
    r: 80,
    angle: 144,
    desc: "I build responsive websites with HTML, CSS, and JavaScript, focusing on modern visuals, functionality, and user interaction.",
  },
  {
    name: "Internet of Things (IoT)",
    pct: 80,
    cat: "Hard Skill",
    r: 80,
    angle: 288,
    desc: "I develop simple IoT systems with sensors and monitoring devices for automation, data collection, and real-time control.",
  },
  {
    name: "Teamwork",
    pct: 88,
    cat: "Soft Skill",
    r: 140,
    angle: 30,
    desc: "I collaborate effectively with teammates through clear communication and thoughtful task sharing.",
  },
  {
    name: "Team Discussion",
    pct: 90,
    cat: "Soft Skill",
    r: 140,
    angle: 102,
    desc: "I communicate ideas clearly and contribute constructively to discussions and group projects.",
  },
  {
    name: "Git & GitHub",
    pct: 65,
    cat: "Hard Skill",
    r: 140,
    angle: 174,
    desc: "I use version control, branching, and shared repositories to collaborate on projects.",
  },
];

const orbitGroup = document.getElementById("orbitGroup");
const orbitSpeeds = [0, 0, 0, 0.28, 0.28, 0.28, 0.28, 0.28, 0.18, 0.18, 0.18];
let orbitAngles = orbitSkills.map((s) => s.angle);
let orbitPaused = false;
let orbitActiveIdx = null;
let orbitLastTime = null;
let orbitAnimId;

if (orbitGroup) {
  orbitSkills.forEach((s, i) => {
    const el = document.createElement("div");
    el.className = "orbit-tag";
    el.textContent = s.name;
    el.id = "tag" + i;
    el.addEventListener("click", () => selectOrbitSkill(i, el));
    orbitGroup.appendChild(el);
  });

  function selectOrbitSkill(i, el) {
    orbitActiveIdx = i;
    document
      .querySelectorAll(".orbit-tag")
      .forEach((t) => t.classList.remove("active"));
    el.classList.add("active");
    const s = orbitSkills[i];
    document.getElementById("iCat").textContent = s.cat;
    document.getElementById("iTitle").textContent = s.name;
    document.getElementById("iPct").textContent = s.pct + "%";
    document.getElementById("iBar").style.width = s.pct + "%";
    document.getElementById("iDesc").textContent = s.desc;
  }

  function renderOrbit(ts) {
    if (!orbitLastTime) orbitLastTime = ts;
    const dt = (ts - orbitLastTime) / 1000;
    orbitLastTime = ts;
    if (!orbitPaused) {
      orbitAngles = orbitAngles.map((a, i) => a + orbitSpeeds[i] * dt * 30);
    }
    orbitSkills.forEach((s, i) => {
      const rad = (orbitAngles[i] * Math.PI) / 180;
      const x = Math.cos(rad) * s.r;
      const y = Math.sin(rad) * s.r;
      const el = document.getElementById("tag" + i);
      el.style.left = x + "px";
      el.style.top = y + "px";
    });
    orbitAnimId = requestAnimationFrame(renderOrbit);
  }

  document.getElementById("pauseBtn").addEventListener("click", function () {
    orbitPaused = !orbitPaused;
    this.textContent = orbitPaused ? "▶ Resume" : "⏸ Pause";
  });

  orbitAnimId = requestAnimationFrame(renderOrbit);
}
