/**
 * VIDEOGRAPHER PORTFOLIO CONFIGURATION
 * Ushbu fayldan o'zingizning ma'lumotlaringizni (ism, telefon, telegram, loyihalar va narxlarni)
 * osongina o'zgartirishingiz mumkin.
 */

const CONFIG = {
  // Shaxsiy ma'lumotlar
  profile: {
    name: "Kamron Aliyev",
    brandTitle: "CINE.ALIEV",
    role: "Cinematic Videographer & Colorist",
    experience: "2+ yil tajriba",
    city: "Toshkent, O'zbekiston",
    phone: "+998 90 123 45 67",
    phoneClean: "998901234567",
    telegram: "videographer_uz",
    instagram: "kamron.visuals",
    youtube: "@kamronfilmmaker",
    email: "contact@kamronfilmmaker.uz",
    aboutBio: "Salom! Men Kamron — videograf va rang ustasiman (Colorist). Men shunchaki video olmayman, balki brendingiz, maxsus kuningiz yoki mahsulotingiz uchun kino darajasidagi unutilmas vizual hikoyalar yarataman. Zamonaviy Sony FX cinema uskunasi, 4K 10-bit format va professional saund-dizayn yordamida tomoshabinlar e'tiborini birinchi soniyalardanoq jalb qiluvchi natija taqdim etaman.",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    behindTheScenesUrl: "https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?auto=format&fit=crop&w=1200&q=80"
  },

  // Statistik ko'rsatkichlar
  stats: [
    { number: "45+", label: "Muvaffaqiyatli loyiha", icon: "fa-film" },
    { number: "250K+", label: "Reels ko'rishlar", icon: "fa-chart-line" },
    { number: "4K 10-bit", label: "Kino sifati (Cinema)", icon: "fa-video" },
    { number: "48 Soat", label: "Tezkor montaj", icon: "fa-bolt" }
  ],

  // Uskunalar (Equipment)
  gear: [
    {
      category: "Kameralar",
      title: "Sony FX3 & A7 IV Cinema Line",
      desc: "4K 120fps sekinlashtirish (Slow-mo), 10-bit 4:2:2 rang chuqurligi, kino sensor.",
      icon: "fa-camera"
    },
    {
      category: "Optika (Linzalar)",
      title: "Sigma 24-70mm f/2.8 Art & Sony 85mm f/1.4 GM",
      desc: "Maftunkor boke (orqa fon xiralashishi) va kristaldek tiniq kadrlar.",
      icon: "fa-circle-dot"
    },
    {
      category: "Stabilizatsiya & Harakat",
      title: "DJI RS 3 Pro Gimbal",
      desc: "Kinolardagidek tebranmas, ravon va dinamik harakatlanuvchi kadrlar.",
      icon: "fa-wand-magic-sparkles"
    },
    {
      category: "Aero Tasvir",
      title: "DJI Mini 4 Pro Drone",
      desc: "Qush parvozi balandligidan 4K 60fps epik landshaftlar va keng kadrlar.",
      icon: "fa-helicopter"
    },
    {
      category: "Professional Ovoz",
      title: "Rode Wireless PRO (32-bit Float)",
      desc: "Hech qanday shovqinsiz, toza va professional suhbat ovozi.",
      icon: "fa-microphone"
    },
    {
      category: "Yorug'lik Tizimi",
      title: "Amaran 200x Bi-Color & Dome Softbox",
      desc: "Kino studiyasidagidek yumshoq va tabiiy yuz ranglarini beruvchi chiroqlar.",
      icon: "fa-lightbulb"
    }
  ],

  // Portfolio ishlari
  projects: [
    {
      id: "bmw-velocity",
      title: "Velocity: BMW M4 Night Run",
      category: "auto",
      categoryName: "Avto & Dinamika",
      duration: "0:45",
      views: "48.5K",
      badge: "Cinematic 4K",
      thumbnail: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1000&q=80",
      videoUrl: "https://www.youtube.com/embed/ScMzIvxBSi4?autoplay=1",
      description: "Tungi Toshkent ko'chalarida sportkarning kuchi va dinamikasini aks ettiruvchi qisqa metrajli rolik. Ronin RS3 stabilizatori va Sony FX3 yordamida 120fps tezlikda suratga olingan.",
      gearUsed: "Sony FX3 + Sigma 24-70mm f/2.8 | DJI RS 3 Pro",
      software: "DaVinci Resolve Studio (Teal & Orange grading)",
      client: "AutoClub Tashkent"
    },
    {
      id: "artisan-coffee",
      title: "Artisan Coffee Roasters Promo",
      category: "commercial",
      categoryName: "Reklama & Brend",
      duration: "0:30",
      views: "34.2K",
      badge: "Commercial",
      thumbnail: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1000&q=80",
      videoUrl: "https://www.youtube.com/embed/2Gg6Seob5Mg?autoplay=1",
      description: "Qahva donalarining qovurilishidan to xushbo'y chashkagacha bo'lgan estetik jarayon. B-roll, yaqin makro kadrlar va maxsus saund-dizayn bilan ishlangan.",
      gearUsed: "Sony A7 IV + 90mm Macro f/2.8 | Amaran 200x",
      software: "Premiere Pro + DaVinci Resolve",
      client: "Artisan Coffee House"
    },
    {
      id: "mountain-love-story",
      title: "Amirsoy: Farrux & Shahlo Love Story",
      category: "wedding",
      categoryName: "To'y & Love Story",
      duration: "2:15",
      views: "62.1K",
      badge: "Romantik Kino",
      thumbnail: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80",
      videoUrl: "https://www.youtube.com/embed/JGwWNGJdvx8?autoplay=1",
      description: "Qorli tog'lar bag'rida samimiy his-tuyg'ular. Dron yordamida olingan keng panoramalar va qahramonlarning haqiqiy kulgusi aks etgan mini-film.",
      gearUsed: "DJI Mini 4 Pro Drone + Sony FX3 85mm GM",
      software: "DaVinci Resolve Studio (Film Print Emulation)",
      client: "Farrux & Shahlo"
    },
    {
      id: "cyber-fashion-reels",
      title: "Urban Streetwear 2026 Season Drop",
      category: "reels",
      categoryName: "Reels & TikTok",
      duration: "0:25",
      views: "115.4K",
      badge: "Viral Trend",
      thumbnail: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=80",
      videoUrl: "https://www.youtube.com/embed/9No-FiEInLA?autoplay=1",
      description: "Instagram va TikTok algoritmlari uchun mo'ljallangan, 9:16 vertikal formatdagi yuqori dinamikali liboslar ko'rgazmasi. Speed ramping va ritmik kesishlar.",
      gearUsed: "Sony FX3 (Vertical Rig) + 35mm f/1.4",
      software: "CapCut Pro & Premiere Pro",
      client: "URBAN CLOTHING UZ"
    },
    {
      id: "drone-landscapes",
      title: "Zomin Milliy Bog'i: Epik Qush Parvozi",
      category: "commercial",
      categoryName: "Reklama & Brend",
      duration: "1:10",
      views: "89.0K",
      badge: "4K HDR Dron",
      thumbnail: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1000&q=80",
      videoUrl: "https://www.youtube.com/embed/Bey4XXJAqS8?autoplay=1",
      description: "Zominning purviqor qoyalari va archazorlari bo'ylab havodan sayohat. Sayyohlik kompaniyasi uchun 4K 10-bit formatdagi reprezentativ promo-rolik.",
      gearUsed: "DJI Mini 4 Pro Drone (D-Log M)",
      software: "DaVinci Resolve Studio",
      client: "Travel Uzbekistan"
    },
    {
      id: "music-backstage",
      title: "Night Concert & Backstage Atmosphere",
      category: "events",
      categoryName: "Tadbirlar & Musiqa",
      duration: "1:45",
      views: "41.7K",
      badge: "Live Concert",
      thumbnail: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1000&q=80",
      videoUrl: "https://www.youtube.com/embed/9No-FiEInLA?autoplay=1",
      description: "Sahna orti tayyorgarliklari, jonli his-tuyg'ular va zalning energiyasi. Kam yorug'likda (Low-light) shovqinsiz va kino ranglari bilan tasvirga tushirilgan.",
      gearUsed: "Sony FX3 Dual Native ISO 12800 + Rode Mic",
      software: "Premiere Pro",
      client: "Live Music Fest"
    },
    {
      id: "food-gourmet-reels",
      title: "Chef's Flame: Steakhouse Gastro Reels",
      category: "reels",
      categoryName: "Reels & TikTok",
      duration: "0:20",
      views: "78.3K",
      badge: "Food Porn",
      thumbnail: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80",
      videoUrl: "https://www.youtube.com/embed/2Gg6Seob5Mg?autoplay=1",
      description: "Olov, go'shtning qarsillashi va sharbatli souslar. Tomoshabin ishtahasini qo'zg'atuvchi qisqa, ta'sirli Instagram Reels.",
      gearUsed: "Sony A7 IV + 50mm f/1.4 GM | Godox Tube Lights",
      software: "Premiere Pro + ASMR Sound FX",
      client: "Flame Steakhouse"
    },
    {
      id: "tech-business-summit",
      title: "Tashkent Digital Forum 2026 Aftermovie",
      category: "events",
      categoryName: "Tadbirlar & Musiqa",
      duration: "2:00",
      views: "29.4K",
      badge: "Corporate",
      thumbnail: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1000&q=80",
      videoUrl: "https://www.youtube.com/embed/Bey4XXJAqS8?autoplay=1",
      description: "Spikerlar chiqishi, networking va innovatsion muhit. Kompaniya brendi nufuzini oshirish uchun tayyorlangan rasmiy hisobot roligi.",
      gearUsed: "2x Sony kameralar + Gimbal + Rode simsiz mikrofoni",
      software: "DaVinci Resolve Studio",
      client: "IT Park Tashkent"
    }
  ],

  // Tarif paketlari
  packages: [
    {
      id: "starter",
      name: "START (Reels & SMM)",
      badge: "Kichik biznes & Blog",
      priceUSD: 150,
      priceUZS: "1 900 000",
      duration: "3-5 ta Reels / Shorts",
      features: [
        "1 kunlik tasvirga olish (2-3 soat)",
        "3 ta tayyor montaj qilingan Reels (9:16)",
        "Trenddagi audio va saund-dizayn",
        "Chiroyli animatsion subtitrlar",
        "Rang berish (Color grading)",
        "24-48 soatda tayyor bo'lishi"
      ],
      recommended: false
    },
    {
      id: "pro",
      name: "PRO (Reklama & Promo)",
      badge: "Eng ko'p tanlanadi ★",
      priceUSD: 350,
      priceUZS: "4 500 000",
      duration: "1-2 daqiqali kino rolik",
      features: [
        "To'liq suratga olish kuni (6 soatgacha)",
        "G'oya va kadrlar rejasini (brif) tuzish",
        "Professional yorug'lik va ovoz yozish",
        "DJI Dron bilan aero-tasvirlar",
        "Kinematik rang berish (DaVinci Resolve)",
        "2 xil format (16:9 YouTube + 9:16 Reels)",
        "2 ta bepul tahrirlash (korreksiya)"
      ],
      recommended: true
    },
    {
      id: "cinema",
      name: "CINEMA (To'y & Katta Tadbir)",
      badge: "Premium Sifat",
      priceUSD: 700,
      priceUZS: "9 000 000",
      duration: "To'liq film + Teaser",
      features: [
        "Ertalabdan kechgacha suratga olish",
        "2 ta professional kamera bilan ishlash",
        "4K 10-bit formatdagi eng yuqori sifat",
        "To'liq dron tasvirlari (Amirsoy / shahar)",
        "1 daqiqali Instagram teaser (24 soatda)",
        "10-15 daqiqali asosiy kino-film",
        "Maxsus fleshka yoki xavfsiz bulutda topshirish"
      ],
      recommended: false
    }
  ],

  // Ish jarayoni
  process: [
    {
      step: "01",
      title: "G'oya va Brifing",
      desc: "Sizning maqsadlaringiz, auditoriyangiz va istaklaringizni muhokama qilamiz. Ssenariy va kadrlar rejasini kelishib olamiz."
    },
    {
      step: "02",
      title: "Tasvirga Olish (Shooting)",
      desc: "Belgilangan kuni yuqori darajadagi kamera, yorug'lik va stabilizatorlar bilan kino sifatidagi kadrlarni suratga olamiz."
    },
    {
      step: "03",
      title: "Post-Prodakshn",
      desc: "Dinamik montaj, filmlarga xos rang berish (Color Grading), saund-dizayn va maxsus effektlar ustida ishlaymiz."
    },
    {
      step: "04",
      title: "Topshirish va Natija",
      desc: "Loyihani ko'rib chiqasiz, kerakli o'zgartirishlar kiritiladi va yakuniy 4K video ijtimoiy tarmoqlar uchun topshiriladi."
    }
  ],

  // Tez-tez beriladigan savollar (FAQ)
  faq: [
    {
      q: "Video tayyor bo'lishi qancha vaqt oladi?",
      a: "Reels va qisqa roliklar odatda tasvirga olingandan so'ng 24-48 soat ichida topshiriladi. Murakkab reklama roliklari va tadbirlar montaji 3 dan 7 kungacha vaqt oladi."
    },
    {
      q: "Xom (ishlanmagan) materiallar beriladimi?",
      a: "Ha, agar oldindan kelishilgan bo'lsa, barcha xom kadrlar (Raw footage) sizga topshiriladi yoki bulutli xotiraga yuklab beriladi."
    },
    {
      q: "Toshkentdan tashqarida (viloyatlarda) ham suratga olasizmi?",
      a: "Albatta! O'zbekistonning barcha viloyatlarida (Samarqand, Buxoro, Zomin, Farg'ona vodiysi va boshqa) hamda xorijiy safarlarda tasvirga olish imkoniyati mavjud."
    },
    {
      q: "Mualliflik huquqi (Copyright) bo'yicha muammo bo'lmaydimi?",
      a: "Yo'q, men har doim rasmiy litsenziyaga ega yoki Instagram/YouTube qoidalariga to'liq mos keladigan trend treklardan foydalanaman. Videongiz bloklanmaydi."
    },
    {
      q: "To'lov tartibi qanday?",
      a: "Loyiha boshlanishida 30-50% oldindan to'lov (avans) qilinadi, qolgan qismi esa loyiha to'liq sizga ma'qul bo'lib topshirilgach to'lanadi. Naqd yoki Click/Payme orqali."
    }
  ],

  // Mijozlar fikrlari
  reviews: [
    {
      name: "Jasur Bekmirzayev",
      company: "Coffee House Tashkent asoschisi",
      text: "Kamron bilan qahvaxonamiz uchun promo rolik oldik. Kadrlar, ranglar va saund-dizayn kutilganidan ham a'lo chiqdi! Instagramda birinchi haftaning o'zidayoq yangi mijozlar oqimi sezildi.",
      stars: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Madina Alimova",
      company: "Fashion Brand Marketing Lead",
      text: "Reelslarimiz uchun dinamik montaj qiladigan mutaxassis qidirayotgan edik. Kamron 5 ta videoni atigi 2 kunda tayyorlab berdi. Ayniqsa rang berish uslubi juda estetik!",
      stars: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Bobur & Diyora",
      company: "Amirsoy Love Story mijozlari",
      text: "To'yimiz oldidan Love Story tasvirga oldirdik. Dron kadrlari xuddi Gollivud kinosidek! Bizga juda qulay bo'ldi, o'zimizni erkin his qildik. Rahmat katta!",
      stars: 5,
      avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80"
    }
  ]
};
