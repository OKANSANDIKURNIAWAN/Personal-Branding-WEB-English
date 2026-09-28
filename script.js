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
    desc: "Project miniatur smart building berbasis IoT yang digunakan untuk simulasi monitoring parkir dan kontrol perangkat otomatis menggunakan ESP32 dan sensor.",
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
    desc: "Platform informasi film dan series Indonesia 2025-2026 dengan desain modern dan responsif",
    tags: ["Figma", "CSS", "VS Code", "HTML"],
    year: "2025",
    type: "Design Web",
    image: "foto/web.png",
    liveLink: "https://webfilm-gules.vercel.app/index.html",
    githubLink: "https://github.com/OKANSANDIKURNIAWAN/okn-webpp.git",
  },
  {
    cat: "Cisco Certified Course",
    title: "IT Essential (Cisco)",
    emoji: "📱",
    desc: "Sertifikasi dan pelatihan mendalam mengenai fondasi IT, perakitan hardware, dan dasar-dasar jaringan komputer dari Cisco Networking Academy.",
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
    desc: "Kompetisi matematika berbasis lokasi yang menggabungkan kemampuan analisis matematika dengan penjelajahan lapangan. Lomba ini diadakan di Taman Raden Saleh, sekaligus merayakan hari Pendidikan Nasional.",
    tags: [
      "MCM App",
      "Probllem Solver",
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
    cat: "Educaation Program",
    title: "Solve Education",
    emoji: "📊",
    desc: "Program pendidikan digital yang fokus pada pengembangan skill Bahasa Inggrismelalui platform game-based learning. Saya mendapatkan penghargaan sebagai siswa yang aktif belajar secara konsisten se-Kota Semarang. Selain itu saya juga pernah mendapatkan Juara 1 kategori kelas 8 SMP",
    tags: [
      "Learning Participation",
      "Skill Development",
      "Solve Education Platform",
    ],
    year: "2024",
    type: "Certficate",
    image: "foto/solve education.jpeg",
    liveLink: null,
    githubLink: null,
  },
  {
    cat: "Coding Workshop",
    title: "Hour of Code Minecraft",
    emoji: "🏫",
    desc: "Program pendidikan digital yang fokus pada pengembangan skill Pemograman melalui platform Hour of Code. ",
    tags: ["Algoritma"],
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
    desc: "Program pendidikan digital yang fokus pada pengembangan skill Pemograman melalui platform Hour of Code. ",
    tags: ["Algoritma"],
    year: "2026",
    type: "Certificate",
    image: "foto/music.jpg",
    liveLink: null,
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
    `<div><p class="mi-lbl">Tahun</p><p class="mi-val">${d.year}</p></div><div><p class="mi-lbl">Tipe</p><p class="mi-val">${d.type}</p></div><div><p class="mi-lbl">Status</p><p class="mi-val">Selesai</p></div><div><p class="mi-lbl">Platform</p><p class="mi-val">Web / Desktop</p></div>`;
  document.getElementById("mTags").innerHTML = d.tags
    .map((t) => `<span class="ptag">${t}</span>`)
    .join("");

  let linksHTML = "";
  if (d.liveLink) {
    linksHTML += `<a href="${d.liveLink}" class="ml pri" target="_blank">🔗 Lihat Live</a>`;
  }
  if (d.githubLink) {
    linksHTML += `<a href="${d.githubLink}" class="ml sec" target="_blank">⊞ GitHub</a>`;
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
  { label: "Jaringan", pct: 58 },
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
    desc: "Merancang tampilan antarmuka yang modern dan mudah digunakan melalui proses wireframing, perencanaan layout, dan eksplorasi desain visual.",
  },
  {
    name: "Web Development",
    pct: 72,
    cat: "Hard Skill",
    r: 80,
    angle: 144,
    desc: "Membangun website responsif menggunakan HTML, CSS, dan JavaScript dengan fokus pada tampilan modern, fungsionalitas, dan interaksi pengguna.",
  },
  {
    name: "Internet of Things (IoT)",
    pct: 80,
    cat: "Hard Skill",
    r: 80,
    angle: 288,
    desc: "Mengembangkan sistem IoT sederhana menggunakan sensor dan perangkat monitoring untuk otomatisasi, pengumpulan data, dan kontrol sistem secara real-time.",
  },
  {
    name: "Teamwork",
    pct: 88,
    cat: "Soft Skill",
    r: 140,
    angle: 30,
    desc: "Mampu bekerja sama dengan baik dalam tim melalui komunikasi, kolaborasi, dan pembagian tugas yang efektif.",
  },
  {
    name: "Team Discussion",
    pct: 90,
    cat: "Soft Skill",
    r: 140,
    angle: 102,
    desc: " Mampu menyampaikan ide dan informasi dengan jelas serta menjaga komunikasi yang baik dalam diskusi maupun kerja kelompok.",
  },
  {
    name: "Git & GitHub",
    pct: 65,
    cat: "Hard Skill",
    r: 140,
    angle: 174,
    desc: "Version control, branching, dan kolaborasi tim via repository.",
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
