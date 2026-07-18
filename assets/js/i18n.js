/* ByteMate Studio — i18n
   Supports: zh-TW (繁中), zh-CN (简中), en (EN)
   Each language is a flat key→value map to avoid key collisions.
   All translatable strings carry [data-i18n="key"] in index.html.
   Language preference persists in localStorage under "bytemate-lang". */

(function () {
  "use strict";

  /* ── Translations (flat per language) ── */
  var T = {

    "zh-TW": {
      /* meta */
      "meta.title":       "ByteMate — 獨立遊戲工作室",
      "meta.description": "ByteMate — 來自北京大學的獨立遊戲工作室",
      /* banner */
      "banner.mono":      "Indie Game Studio &nbsp;|&nbsp; Peking University",
      /* nav */
      "nav.about":    "工作室簡介",
      "nav.works":    "作品集",
      "nav.partners": "合作夥伴",
      "nav.team":     "工作室成員",
      "nav.contact":  "聯絡我們",
      /* about */
      "about.title":        "關於我們",
      "about.who.title":    "我們是誰",
      "about.who.p1":       "ByteMate 目前是一支來自<strong>北京大學</strong>的獨立遊戲工作室。一次電子遊戲相關的選課讓我們結緣於遊戲開發的世界。",
      "about.who.p2":       "目前工作室成員均參與過<strong>未名造夢大賽</strong>，銳意參與「問劍」、騰訊游戲創作大賽、開拓芯等。我們亦有意參與 GMTK、GGJ、LD 等活動。",
      "about.do.title":     "我們做什麼",
      "about.do.p1":        "我們目前專注於<strong>神秘學</strong>主題的、<strong>幻想</strong>類型的<strong>2D</strong>獨立遊戲。我們相信好的故事與獨特的玩法同樣重要。",
      "about.do.bullet1":   "原創 IP 和世界設定",
      "about.do.bullet2":   "原創玩法設計",
      "about.do.bullet3":   "敘事驅動的單機體驗",
      /* works */
      "works.title":    "作品集",
      "game.title":     "北大最強塔羅師",
      "game.subtitle":  "Magician is all you need",
      "game.tag1":      "卡牌",
      "game.tag2":      "重敘事",
      "game.tag3":      "視覺小說",
      "game.tag4":      "解謎",
      "game.desc":      "北大神秘學社長離奇失蹤！主角意外繼承了社長一職。玩家將扮演一名初出茅廬的通靈師，在燕園的日常裡，透過占卜、解讀與抉擇，串聯起一段奇幻敘事——所有相遇，所有告別，是否早已被星辰寫好？",
      "game.platform":  "Windows",
      "game.lang":      "簡體中文",
      "game.status":    "MVP",
      "game.download":  "下載遊戲",
      "works.coming":   "更多作品敬請期待⋯⋯",
      /* team */
      "team.title":    "工作室成員",
      "team.a.name":   "白面具黑手",
      "team.a.role":   "策劃，程序，運營",
      "team.a.hobby":  "Godot程序 / 桌遊玩家 / 東玄研究中",
      "team.a.bio":    "負責玩法框架與世界設計，喜歡把奇思妙想變成可玩的内容。",
      "team.b.name":   "Essi",
      "team.b.role":   "策劃，程序，文案",
      "team.b.hobby":  "西幻迷 / TRPG狂熱 / 電子游戲",
      "team.b.bio":    "負責奇思妙想和統籌兼顧，也會打工寫程序",
      "team.c.name":   "青蒸",
      "team.c.role":   "策劃，程序，文案",
      "team.c.hobby":  "國畫 / 配音 / 民俗學",
      "team.c.bio":    "負責國風人設和故事寫作，以及寫點 UI 什麽的",
      "team.note":     "團隊性別結構：100% 女",
      /* partners */
      "partners.title": "合作夥伴",
      /* join */
      "join.title":   "加入我們",
      "join.intro":   "歡迎加入 ByteMate！我們目前正在尋找以下志同道合的夥伴：",
      "join.art.title": "2D 遊戲美術",
      "join.art.desc":  "負責遊戲角色、場景、道具的視覺呈現。我們希望你有一定的個人風格、良好的色彩感與構圖能力，能一定程度上根據遊戲風格進行 UI 設計，最好有入門的動畫製作知識或經驗。",
      "join.audio.title": "遊戲音樂 / 音效",
      "join.audio.desc":   "為遊戲創作原創 BGM 與音效。我們希望你熟悉 DAW 工具（FL Studio、Logic、Cubase 等）或有音效合成經驗。能提供 芯片音樂、電子音樂、Lo-Fi 以外的，例如是暗黑敘事與奇幻風格的音樂（不一定要作曲）。",
      "join.writing.title": "文案創作",
      "join.writing.desc":  "撰寫遊戲內對話、場景描述、世界觀文案。我們希望你熱愛閱讀與寫作，對文字節奏敏感，能駕馭不同的語氣與風格。對於輕鬆的日常對白還是沉重的情感高潮，都能找到較準確的表達方式。",
      "join.btn":  "填寫報名表 →",
      "join.note": "英文表單：<a href=\"https://my.feishu.cn/share/base/form/shrcn1BrPQtHOZUHwWVuRhoOXZc\" target=\"_blank\">English Form</a>",
      /* contact */
      "contact.title":       "聯絡我們",
      "contact.email.label": "電郵",
      "contact.email.hint":   "商務合作 / 採訪 / 玩家反饋",
      "contact.xhs.label":   "小紅書官號",
      "contact.xhs.hint":     "搜尋關鍵詞：ByteMate / 北大最强塔罗师",
      "contact.qr.label":     "小紅書玩家交流群",
      "contact.qr.hint":      "掃碼加入玩家交流群",
      "contact.discord.hint": "點擊加入 Discord 玩家社區",
      /* footer */
      "footer.sub": "由來自北京大學的學生組成"
    },

    "zh-CN": {
      /* meta */
      "meta.title":       "ByteMate — 独立游戏工作室",
      "meta.description": "ByteMate — 来自北京大学的独立游戏工作室",
      /* banner */
      "banner.mono":      "Indie Game Studio &nbsp;|&nbsp; Peking University",
      /* nav */
      "nav.about":    "工作室简介",
      "nav.works":    "作品集",
      "nav.partners": "合作伙伴",
      "nav.team":     "工作室成员",
      "nav.contact":  "联系我们",
      /* about */
      "about.title":        "关于我们",
      "about.who.title":    "我们是谁",
      "about.who.p1":       "ByteMate 目前是一支来自<strong>北京大学</strong>的独立游戏工作室。一次电子游戏相关的选课让我们结缘于游戏开发的世界。",
      "about.who.p2":       "目前工作室成员均参与过<strong>未名造梦大赛</strong>，锐意参与“问剑”、腾讯游戏创作大赛、开拓芯等。我们亦有意参与 GMTK、GGJ、LD 等活动。",
      "about.do.title":     "我们做什么",
      "about.do.p1":        "我们目前专注于<strong>神秘学</strong>主题的、<strong>幻想</strong>类型的<strong>2D</strong>独立游戏。我们相信好的故事与独特的玩法同样重要。",
      "about.do.bullet1":   "原创 IP 和世界设定",
      "about.do.bullet2":   "原创玩法设计",
      "about.do.bullet3":   "叙事驱动的单机体验",
      /* works */
      "works.title":    "作品集",
      "game.title":     "北大最强塔罗师",
      "game.subtitle":  "Magician is all you need",
      "game.tag1":      "卡牌",
      "game.tag2":      "重叙事",
      "game.tag3":      "视觉小说",
      "game.tag4":      "解谜",
      "game.desc":      "北大神秘学社长离奇失踪！主角意外继承了社长一职。玩家将扮演一名初出茅庐的通灵师，在燕园的日常里，透过占卜、解读与抉择，串联起一段奇幻叙事——所有相遇，所有告别，是否早已被星辰写好？",
      "game.platform":  "Windows",
      "game.lang":      "简体中文",
      "game.status":    "MVP",
      "game.download":  "下载游戏",
      "works.coming":   "更多作品敬请期待⋯⋯",
      /* team */
      "team.title":    "工作室成员",
      "team.a.name":   "白面具黑手",
      "team.a.role":   "策划，程序，运营",
      "team.a.hobby":  "Godot程序 / 桌游玩家 / 东玄研究中",
      "team.a.bio":    "负责玩法框架与世界设计，喜欢把奇思妙想变成可玩的内容。",
      "team.b.name":   "Essi",
      "team.b.role":   "策划，程序，文案",
      "team.b.hobby":  "西幻迷 / TRPG狂热 / 电子游戏",
      "team.b.bio":    "负责奇思妙想和统筹兼顾，也会打工写程序",
      "team.c.name":   "青蒸",
      "team.c.role":   "策划，程序，文案",
      "team.c.hobby":  "国画 / 配音 / 民俗学",
      "team.c.bio":    "负责国风人设和故事写作，以及写点 UI 什么的",
      "team.note":     "团队性别结构：100% 女",
      /* partners */
      "partners.title": "合作伙伴",
      /* join */
      "join.title":   "加入我们",
      "join.intro":   "欢迎加入 ByteMate！我们目前正在寻找以下志同道合的伙伴：",
      "join.art.title": "2D 游戏美术",
      "join.art.desc":  "负责游戏角色、场景、道具的视觉呈现。我们希望你有一定的个人风格、良好的色彩感与构图能力，能一定程度上根据游戏风格进行 UI 设计，最好有入门的动画制作知识或经验。",
      "join.audio.title": "游戏音乐 / 音效",
      "join.audio.desc":   "为游戏创作原创 BGM 与音效。我们希望你熟悉 DAW 工具（FL Studio、Logic、Cubase 等）或有音效合成经验。能提供 芯片音乐、电子音乐、Lo-Fi 以外的，例如是暗黑叙事与奇幻风格的音乐（不一定要作曲）。",
      "join.writing.title": "文案创作",
      "join.writing.desc":  "撰写游戏内对话、场景描述、世界观文案。我们希望你热爱阅读与写作，对文字节奏敏感，能驾驭不同的语气与风格。对于轻松的日常对白还是沉重的情感高潮，都能找到较准确的表达方式。",
      "join.btn":  "填写报名表 →",
      "join.note": "英文表单：<a href=\"https://my.feishu.cn/share/base/form/shrcn1BrPQtHOZUHwWVuRhoOXZc\" target=\"_blank\">English Form</a>",
      /* contact */
      "contact.title":       "联系我们",
      "contact.email.label": "邮箱",
      "contact.email.hint":   "商务合作 / 采访 / 玩家反馈",
      "contact.xhs.label":   "小红书官号",
      "contact.xhs.hint":     "搜索关键词：ByteMate / 北大最强塔罗师",
      "contact.qr.label":     "小红书玩家交流群",
      "contact.qr.hint":      "扫码加入玩家交流群",
      "contact.discord.hint": "点击加入 Discord 玩家社区",
      /* footer */
      "footer.sub": "由来自北京大学的学生组成"
    },

    "en": {
      /* meta */
      "meta.title":       "ByteMate — Indie Game Studio",
      "meta.description": "ByteMate — An indie game studio from Peking University",
      /* banner */
      "banner.mono":      "Indie Game Studio &nbsp;|&nbsp; Peking University",
      /* nav */
      "nav.about":    "About",
      "nav.works":    "Works",
      "nav.partners": "Partners",
      "nav.team":     "Team",
      "nav.contact":  "Contact",
      /* about */
      "about.title":        "About Us",
      "about.who.title":    "Who We Are",
      "about.who.p1":       "ByteMate is currently an <strong>indie game studio from Peking University</strong>. A shared elective course introduced us to game development, and we've been hooked ever since.",
      "about.who.p2":       "All members have participated in the <strong>Weiming Dream-Making Competition</strong>, and are eager to join competitions like Wenjian, Tencent Game Creation Contest, Kaituo Chip, and more. We're also interested in events like GMTK, GGJ, and LD.",
      "about.do.title":     "What We Do",
      "about.do.p1":        "We currently focus on <strong>occult-themed</strong>, <strong>fantasy</strong>-genre <strong>2D</strong> indie games. We believe great stories and unique mechanics are equally important.",
      "about.do.bullet1":   "Original IP & worldbuilding",
      "about.do.bullet2":   "Original mechanics design",
      "about.do.bullet3":   "Narrative-driven single-player experiences",
      /* works */
      "works.title":    "Works",
      "game.title":     "Peking University's Top Tarot Master",
      "game.subtitle":  "Magician is all you need",
      "game.tag1":      "Card",
      "game.tag2":      "Narrative",
      "game.tag3":      "Visual Novel",
      "game.tag4":      "Puzzle",
      "game.desc":      "The president of Peking University's occult society has mysteriously disappeared! The protagonist unexpectedly inherits the presidency. Play as a fledgling psychic, connecting a fantastical narrative through divination, interpretation, and choice in the daily life of Yanyuan — were all encounters and farewells already written in the stars?",
      "game.platform":  "Windows",
      "game.lang":      "Simplified Chinese",
      "game.status":    "MVP",
      "game.download":  "Download Game",
      "works.coming":   "More coming soon...",
      /* team */
      "team.title":    "Team",
      "team.a.name":   "Shadow-Handed White Mask (白面具黑手)",
      "team.a.role":   "Game Designer, Programmer, Ops",
      "team.a.hobby":  "Godot Dev / Board Games / Chinese Occult",
      "team.a.bio":    "Responsible for gameplay mechanics and world design. Turns wild ideas into playable content.",
      "team.b.name":   "Essi",
      "team.b.role":   "Game Designer, Programmer, Writer",
      "team.b.hobby":  "Western Fantasy Fan / TRPG Enthusiast / Video Games",
      "team.b.bio":    "Comes up with the wild ideas and keeps the project organized — occasionally writes code on the side.",
      "team.c.name":   "Qing Zheng (青蒸)",
      "team.c.role":   "Game Designer, Programmer, Writer",
      "team.c.hobby":  "Chinese Painting / Voice Acting / Folklore Studies",
      "team.c.bio":    "Responsible for Chinese-style character design and story writing, plus a bit of UI work.",
      "team.note":     "Team gender composition: 100% female",
      /* partners */
      "partners.title": "Partners",
      /* join */
      "join.title":   "Join Us",
      "join.intro":   "Welcome to join ByteMate! We're currently looking for the following teammates:",
      "join.art.title": "2D Game Artist",
      "join.art.desc":  "Responsible for the visual presentation of characters, scenes, and props. We expect familiarity with pixel art or anime-style illustration, strong color sense and composition skills, and the ability to design UI/interaction feedback to match the game's aesthetic. Some animation knowledge or experience is a plus.",
      "join.audio.title": "Music / SFX",
      "join.audio.desc":   "Create original BGM and sound effects. We expect familiarity with DAW tools (FL Studio, Logic, Cubase, etc.) or sound synthesis experience. Bonus if you can provide music in styles beyond chiptune, electronic, and lo-fi — like dark narrative or fantasy styles (you don't have to compose).",
      "join.writing.title": "Localization Writer",
      "join.writing.desc":  "Translate our narrative-driven game into multiple languages, ensuring the tone, humor, and emotional resonance of the original Chinese text is faithfully adapted. We expect native or near-native fluency in at least one language, a love of wordplay, and the ability to capture the subtleties of dialogue and prose across cultural contexts.",
      "join.btn":  "Fill in the Application →",
      "join.note": "中文表单：<a href=\"https://my.feishu.cn/share/base/form/shrcn1BrPQtHOZUHwWVuRhoOXZc\" target=\"_blank\">中文表格</a>",
      /* contact */
      "contact.title":       "Contact",
      "contact.email.label": "Email",
      "contact.email.hint":   "Business enquiries / Interviews / Player feedback",
      "contact.xhs.label":   "RedNote",
      "contact.xhs.hint":     "Search: ByteMate / 北大最强塔罗师",
      "contact.qr.label":     "RedNote Player Community",
      "contact.qr.hint":      "Scan to join the player community",
      "contact.discord.hint": "Click to Join the Discord community",
      /* footer */
      "footer.sub": "A studio of students from Peking University"
    }
  };

  /* ── Apply a language ── */
  function setLang(lang) {
    var dict = T[lang];
    if (!dict) return;

    /* Update every [data-i18n] element */
    var els = document.querySelectorAll("[data-i18n]");
    els.forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) {
        /* innerHTML supports <strong> etc. */
        el.innerHTML = dict[key];
      }
    });

    /* Update <title> */
    if (dict["meta.title"]) document.title = dict["meta.title"];

    /* Update meta description */
    var desc = document.querySelector("meta[name=description]");
    if (desc && dict["meta.description"]) desc.setAttribute("content", dict["meta.description"]);

    /* Persist preference */
    try { localStorage.setItem("bytemate-lang", lang); } catch (_) {}

    /* Update active button */
    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.classList.toggle("active", btn.dataset.lang === lang);
    });

    /* Update <html lang> */
    document.documentElement.lang = lang;

    /* Update join button link by language */
    var btnJoin = document.querySelector(".btn-join");
    if (btnJoin) {
      if (lang === "en") {
        btnJoin.href = "https://my.feishu.cn/share/base/form/shrcn1BrPQtHOZUHwWVuRhoOXZc";
      } else {
        btnJoin.href = "https://my.feishu.cn/share/base/form/shrcnfjhhxg9oaw1O0RC3HDv1Jh";
      }
    }
  }

  /* ── Boot: restore saved language or default to zh-CN ── */
  var saved = null;
  try { saved = localStorage.getItem("bytemate-lang"); } catch (_) {}
  setLang(saved || "zh-CN");

  /* Wire up buttons */
  document.querySelectorAll(".lang-btn").forEach(function (btn) {
    btn.addEventListener("click", function () { setLang(btn.dataset.lang); });
  });

  /* Expose globally */
  window.setLang = setLang;
})();
