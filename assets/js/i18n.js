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
      "nav.team":     "工作室成員",
      "nav.contact":  "聯絡我們",
      /* about */
      "about.title":        "關於 ByteMate",
      "about.who.title":    "我們是誰",
      "about.who.p1":       "ByteMate 是一支來自<strong>北京大學</strong>的獨立遊戲工作室，由大學室友與隔壁寢室的朋友組成。一次選課讓我們接觸到與電子遊戲相關的課程，自此結緣於遊戲開發的世界。",
      "about.who.p2":       "目前工作室成員均參與過<strong>未名造夢大賽</strong>，正在持續打磨我們的第一款敘事向作品。",
      "about.do.title":     "我們做什麼",
      "about.do.p1":        "我們專注於<strong>重敘事、卡牌、解謎</strong>類型的獨立遊戲。我們相信好的故事與獨特的玩法同樣重要，每一次出牌、每一次選擇，都應讓玩家記住。",
      "about.do.bullet1":   "原創 IP 與原創玩法設計",
      "about.do.bullet2":   "敘事驅動的單機體驗",
      "about.do.bullet3":   "從原型到發佈的全流程實踐",
      /* works */
      "works.title":    "作品集",
      "game.title":     "北大最強塔羅師",
      "game.subtitle":  "Magician is all you need",
      "game.tag1":      "卡牌",
      "game.tag2":      "重敘事",
      "game.tag3":      "視覺小說",
      "game.tag4":      "解謎",
      "game.desc":      "在燕園的日常裡，每一副塔羅牌的翻開都是一次命運的提問。玩家將扮演一名初出茅廬的塔羅師，透過占卜、解讀與抉擇，串聯起一段跨越北大的奇幻敘事——所有相遇，所有告別，是否早已被星辰寫好？",
      "game.platform":  "Windows",
      "game.lang":      "簡體中文",
      "game.status":    "已發佈",
      "game.download":  "下載遊戲",
      "works.coming":   "更多作品敬請期待⋯⋯",
      /* team */
      "team.title":    "工作室成員",
      "team.a.name":   "成員 A",
      "team.a.role":   "策劃",
      "team.a.hobby":  "愛好：桌遊 / 影視 / 寫作",
      "team.a.bio":    "負責玩法框架與敘事設計，喜歡把奇思妙想變成可玩的關卡。",
      "team.b.name":   "成員 B",
      "team.b.role":   "程序",
      "team.b.hobby":  "愛好：電子音樂 / 程式競賽 / 貓",
      "team.b.bio":    "負責引擎與工具鏈搭建，把策劃的腦洞變成實際運行起來的程式碼。",
      "team.c.name":   "成員 C",
      "team.c.role":   "美術",
      "team.c.hobby":  "愛好：插畫 / 動畫 / 膠片攝影",
      "team.c.bio":    "負責角色、UI 與視覺風格，把世界觀凝結成每一幀畫面。",
      "team.note":     "（成員姓名、头像、介紹可後續替換為真實信息）",
      /* join */
      "join.title":   "加入我們",
      "join.intro":   "如果你對獨立遊戲開發充滿熱情，歡迎加入 ByteMate！我們目前正在尋找以下志同道合的夥伴：",
      "join.art.title": "2D 遊戲美術",
      "join.art.desc":  "負責遊戲角色、場景、道具的視覺呈現。我們希望你熟悉像素風格或日系插畫，有良好的色彩感與構圖能力，並能根據遊戲風格定制 UI / 交互反饋。無論是手繪、矢量還是像素，我們更看重的是創意與對遊戲視覺傳達的熱情。",
      "join.audio.title": "遊戲音樂 / 音效",
      "join.audio.desc":   "為遊戲創作原創 BGM 與環境音效，配合敘事節奏調製情緒。我們希望你熟悉 DAW 工具（FL Studio、Logic、Cubase 等）或有音效合成經驗，能駕馭暗黑敘事與奇幻風格的音樂。無需專業設備，有想法、有作品就夠。",
      "join.writing.title": "文案創作",
      "join.writing.desc":  "撰寫遊戲內對話、場景描述、世界觀文案，把策劃的框架填充成有溫度的文字。我們希望你熱愛閱讀與寫作，對文字節奏敏感，能駕馭不同的語氣與風格。無論是輕鬆的日常對白還是沉重的情感高潮，你都能找到最準確的表達方式。",
      "join.btn":  "填寫報名表 →",
      "join.note": "報名表為外部表單連結，請替換為真實表單 URL",
      /* contact */
      "contact.title":       "聯絡我們",
      "contact.email.label": "電郵",
      "contact.email.hint":   "商務合作 / 採訪 / 玩家反饋",
      "contact.xhs.label":   "小紅書",
      "contact.xhs.hint":     "搜尋關鍵詞：ByteMate / 北大最強塔羅師",
      "contact.qr.label":     "小紅書玩家交流群",
      "contact.qr.hint":      "掃碼加入玩家交流群（占位圖，請替換為真實二維碼）",
      /* footer */
      "footer.sub": "由來自北京大學的學生組成"
    },

    "zh-CN": {
      /* meta */
      "meta.title":       "ByteMate — 独立游戏工作室",
      "meta.description": "ByteMate — 来自北京大学的独立游戏工作室",
      /* banner */
      "banner.mono":      "Indie Game Studio &nbsp;|&nbsp; 北京大学",
      /* nav */
      "nav.about":    "工作室简介",
      "nav.works":    "作品集",
      "nav.team":     "工作室成员",
      "nav.contact":  "联系我们",
      /* about */
      "about.title":        "关于 ByteMate",
      "about.who.title":    "我们是谁",
      "about.who.p1":       "ByteMate 是一支来自<strong>北京大学</strong>的独立游戏工作室，由大学室友与隔壁寝室的朋友组成。一次选课让我们接触到与电子游戏相关的课程，自此结缘于游戏开发的世界。",
      "about.who.p2":       "目前工作室成员均参与过<strong>未名造梦大赛</strong>，正在持续打磨我们的第一款叙事向作品。",
      "about.do.title":     "我们做什么",
      "about.do.p1":        "我们专注于<strong>重叙事、卡牌、解谜</strong>类型的独立游戏。我们相信好的故事与独特的玩法同样重要，每一次出牌、每一次选择，都应让玩家记住。",
      "about.do.bullet1":   "原创 IP 与原创玩法设计",
      "about.do.bullet2":   "叙事驱动的单机体验",
      "about.do.bullet3":   "从原型到发布的全流程实践",
      /* works */
      "works.title":    "作品集",
      "game.title":     "北大最强塔罗师",
      "game.subtitle":  "Magician is all you need",
      "game.tag1":      "卡牌",
      "game.tag2":      "重叙事",
      "game.tag3":      "视觉小说",
      "game.tag4":      "解谜",
      "game.desc":      "在燕园的日常里，每一副塔罗牌的翻开都是一次命运的提问。玩家将扮演一名初出茅庐的塔罗师，透过占卜、解读与抉择，串联起一段跨越北大的奇幻叙事——所有相遇，所有告别，是否早已被星辰写好？",
      "game.platform":  "Windows",
      "game.lang":      "简体中文",
      "game.status":    "已发布",
      "game.download":  "下载游戏",
      "works.coming":   "更多作品敬请期待⋯⋯",
      /* team */
      "team.title":    "工作室成员",
      "team.a.name":   "成员 A",
      "team.a.role":   "策划",
      "team.a.hobby":  "爱好：桌游 / 影视 / 写作",
      "team.a.bio":    "负责玩法框架与叙事设计，喜欢把奇思妙想变成可玩的关卡。",
      "team.b.name":   "成员 B",
      "team.b.role":   "程序",
      "team.b.hobby":  "爱好：电子音乐 / 程序竞赛 / 猫",
      "team.b.bio":    "负责引擎与工具链搭建，把策划的脑洞变成实际运行起来的代码。",
      "team.c.name":   "成员 C",
      "team.c.role":   "美术",
      "team.c.hobby":  "爱好：插画 / 动画 / 胶片摄影",
      "team.c.bio":    "负责角色、UI 与视觉风格，把世界观凝结成每一帧画面。",
      "team.note":     "（成员姓名、头像、介绍可后续替换为真实信息）",
      /* join */
      "join.title":   "加入我们",
      "join.intro":   "如果你对独立游戏开发充满热情，欢迎加入 ByteMate！我们目前正在寻找以下志同道合的伙伴：",
      "join.art.title": "2D 游戏美术",
      "join.art.desc":  "负责游戏角色、场景、道具的视觉呈现。我们希望你熟悉像素风格或日系插画，有良好的色彩感与构图能力，并能根据游戏风格定制 UI / 交互反馈。无论是手绘、矢量还是像素，我们更看重的是创意与对游戏视觉传达的热情。",
      "join.audio.title": "游戏音乐 / 音效",
      "join.audio.desc":   "为游戏创作原创 BGM 与环境音效，配合叙事节奏调制情绪。我们希望你熟悉 DAW 工具（FL Studio、Logic、Cubase 等）或有音效合成经验，能驾驭暗黑叙事与奇幻风格的音乐。无需专业设备，有想法、有作品就够了。",
      "join.writing.title": "文案创作",
      "join.writing.desc":  "撰写游戏内对话、场景描述、世界观文案，把策划的框架填充成有温度的文字。我们希望你热爱阅读与写作，对文字节奏敏感，能驾驭不同的语气与风格。无论是轻松的日常对白还是沉重的情感高潮，你都能找到最准确的表达方式。",
      "join.btn":  "填写报名表 →",
      "join.note": "报名表为外部表单链接，请替换为真实表单 URL",
      /* contact */
      "contact.title":       "联系我们",
      "contact.email.label": "邮箱",
      "contact.email.hint":   "商务合作 / 采访 / 玩家反馈",
      "contact.xhs.label":   "小红书",
      "contact.xhs.hint":     "搜索关键词：ByteMate / 北大最强塔罗师",
      "contact.qr.label":     "小红书玩家交流群",
      "contact.qr.hint":      "扫码加入玩家交流群（占位图，请替换为真实二维码）",
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
      "nav.team":     "Team",
      "nav.contact":  "Contact",
      /* about */
      "about.title":        "About ByteMate",
      "about.who.title":    "Who We Are",
      "about.who.p1":       "ByteMate is an <strong>indie game studio from Peking University</strong>, founded by college roommates and friends from neighboring dorms. A shared elective course introduced us to game development, and we've been hooked ever since.",
      "about.who.p2":       "All members have participated in the <strong>Weiming Dream-Making Competition</strong> and are currently polishing our first narrative-driven game.",
      "about.do.title":     "What We Do",
      "about.do.p1":        "We focus on <strong>narrative-heavy, card-based, and puzzle</strong> indie games. We believe great stories and unique mechanics are equally important — every card flip, every choice, should stay with the player.",
      "about.do.bullet1":   "Original IP & mechanics design",
      "about.do.bullet2":   "Narrative-driven single-player experiences",
      "about.do.bullet3":   "Full-cycle development from prototype to release",
      /* works */
      "works.title":    "Works",
      "game.title":     "Magician is all you need",
      "game.subtitle":  "",
      "game.tag1":      "Card",
      "game.tag2":      "Narrative",
      "game.tag3":      "Visual Novel",
      "game.tag4":      "Puzzle",
      "game.desc":      "In the daily life of Yanyuan Campus, every tarot card flip is a question of fate. Play as a fledgling tarot reader, connecting a fantastical narrative spanning Peking University through divination, interpretation, and choice — were all encounters and farewells already written in the stars?",
      "game.platform":  "Windows",
      "game.lang":      "Simplified Chinese",
      "game.status":    "Released",
      "game.download":  "Download Game",
      "works.coming":   "More coming soon...",
      /* team */
      "team.title":    "Team",
      "team.a.name":   "Member A",
      "team.a.role":   "Game Designer",
      "team.a.hobby":  "Hobbies: Board Games / Film & TV / Writing",
      "team.a.bio":    "Responsible for gameplay systems and narrative design. Turns wild ideas into playable levels.",
      "team.b.name":   "Member B",
      "team.b.role":   "Programmer",
      "team.b.hobby":  "Hobbies: Electronic Music / Coding Contests / Cats",
      "team.b.bio":    "Responsible for engine setup and tooling. Turns the designer's brainstorms into working code.",
      "team.c.name":   "Member C",
      "team.c.role":   "Artist",
      "team.c.hobby":  "Hobbies: Illustration / Animation / Film Photography",
      "team.c.bio":    "Responsible for characters, UI, and visual style. Brings the game world to life one frame at a time.",
      "team.note":     "(Names, avatars, and bios to be updated with real information)",
      /* join */
      "join.title":   "Join Us",
      "join.intro":   "If you're passionate about indie game development, we'd love to have you on board! ByteMate is currently looking for the following teammates:",
      "join.art.title": "2D Game Artist",
      "join.art.desc":  "Responsible for the visual presentation of characters, scenes, and props. We expect familiarity with pixel art or anime-style illustration, strong color sense and composition skills, and the ability to design UI/interaction feedback to match the game's aesthetic. Whether it's hand-drawn, vector, or pixel — we care most about creativity and a passion for visual storytelling in games.",
      "join.audio.title": "Music / SFX Composer",
      "join.audio.desc":   "Create original BGM and ambient sound effects that match the narrative's emotional rhythm. We expect familiarity with DAW tools (FL Studio, Logic, Cubase, etc.) or sound synthesis experience, and the ability to compose dark narrative and fantasy-style music. No professional equipment required — an ear for music and a portfolio are what matter.",
      "join.writing.title": "Localization Writer",
      "join.writing.desc":  "Translate our narrative-driven game into multiple languages, ensuring the tone, humor, and emotional resonance of the original Chinese text is faithfully adapted. We expect native or near-native fluency in at least one language, a love of wordplay, and the ability to capture the subtleties of dialogue and prose across cultural contexts.",
      "join.btn":  "Fill in the Application →",
      "join.note": "The application form is an external link — replace with the actual form URL",
      /* contact */
      "contact.title":       "Contact",
      "contact.email.label": "Email",
      "contact.email.hint":   "Business enquiries / Interviews / Player feedback",
      "contact.xhs.label":   "Xiaohongshu",
      "contact.xhs.hint":     "Search: ByteMate / 北大最强塔罗师",
      "contact.qr.label":     "Xiaohongshu Player Community",
      "contact.qr.hint":      "Scan to join the player community (placeholder — replace with the actual QR code)",
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
  }

  /* ── Boot: restore saved language or default to zh-TW ── */
  var saved = null;
  try { saved = localStorage.getItem("bytemate-lang"); } catch (_) {}
  setLang(saved || "zh-TW");

  /* Wire up buttons */
  document.querySelectorAll(".lang-btn").forEach(function (btn) {
    btn.addEventListener("click", function () { setLang(btn.dataset.lang); });
  });

  /* Expose globally */
  window.setLang = setLang;
})();
