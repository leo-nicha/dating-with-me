import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  th: {
    translation: {
      step1: {
        title: "ไปเดทกับผมไหมครับ?",
        btnYes: "ไปสิ 💖",
        btnNo: "ไม่ไป"
      },
      step2: {
        title: "บ้าน่า ไม่จริงใช่ไหมเนี่ย! 😳",
        subtitle: "อุตส่าห์เตรียมคำพูดซึ้งๆ ไว้เพียบเผื่อโดนปฏิเสธเลยนะ",
        btnNext: "โอเคๆ ไปต่อ! →"
      },
      step3: {
        title: "แล้ว... ว่างวันไหนบ้างครับ?",
        pickDay: "เลือกวันมาเลย ✨",
        whatTime: "กี่โมงดี? 😅",
        selectTime: "เลือกเวลา...",
        time5: "17:00 — กินข้าวเย็นพร้อมแก๊งวัยเกษียณ",
        time6: "18:00 — เวลานี้แหละเพอร์เฟกต์ที่สุด",
        time7: "19:00 — แค่คิดก็หิวแล้วเนี่ย",
        time8: "20:00 — นี่กินข้าวเย็นหรือข้าวเช้ากันแน่?",
        time9: "21:00 — สายดึกปาร์ตี้มันส์ๆ 🌙",
        btnContinue: "ไปต่อ →"
      },
      step4: {
        title: "อยากกินอะไรดี? 🍽️✨",
        subtitle: "(จริงๆ เลือกได้หลายอย่างนะ... ล้อเล่น เลือกได้แค่อย่างเดียวแหละ)",
        foodPizza: "พิซซ่า",
        foodSushi: "ซูชิ",
        foodBurgers: "เบอร์เกอร์",
        foodPasta: "พาสต้า",
        foodTacos: "ทาโก้",
        foodRamen: "ราเมน",
        btnThisOne: "เอาอันนี้แหละ! →"
      },
      step5: {
        title: "ตกลงตามนี้นะ! 💌",
        summarySubtitle: "รับทราบ! เดี๋ยวเตรียมขนมไปเผื่อด้วย 🍿",
        summaryPS: "ปล. คนทั่วไปเขาคงแค่ส่งข้อความชวนธรรมดาๆ แต่ผมแอบเขียนเว็บนี้ตอนพักเที่ยงมาให้คุณเลยนะ... ไม่ใช่เรื่องใหญ่อะไรหรอก",
        labelWhen: "WHEN",
        labelAt: "เวลา",
        labelFood: "FOOD",
        btnCopied: "ก๊อปปี้แล้ว! 🎉",
        btnCopy: "📄 ก๊อปปี้แพลนแล้วส่งมาให้ผมเลย"
      }
    }
  },
  en: {
    translation: {
      step1: {
        title: "Will you go on a date with me?",
        btnYes: "Yes 💖",
        btnNo: "No"
      },
      step2: {
        title: "no way. NO WAY. 😳",
        subtitle: "i had a whole speech prepared for if you said no",
        btnNext: "okay okay! →"
      },
      step3: {
        title: "So... when are you free?",
        pickDay: "Pick a Day ✨",
        whatTime: "What Time? 😅",
        selectTime: "Select a time...",
        time5: "5:00 PM — we eating with the retirees",
        time6: "6:00 PM — this is the right answer tbh",
        time7: "7:00 PM — you're making me hungry already",
        time8: "8:00 PM — we eating dinner or breakfast?",
        time9: "9:00 PM — late night fun fun 🌙",
        btnContinue: "continue →"
      },
      step4: {
        title: "What are we feeling? 🍽️✨",
        subtitle: "(you can pick more than one btw, jk just one)",
        foodPizza: "Pizza",
        foodSushi: "Sushi",
        foodBurgers: "Burgers",
        foodPasta: "Pasta",
        foodTacos: "Tacos",
        foodRamen: "Ramen",
        btnThisOne: "this one! →"
      },
      step5: {
        title: "It's a date! 💌",
        summarySubtitle: "got it. bringing snacks just in case 🍿",
        summaryPS: "p.s. normal people text. i made a website on a lunch break, for you. no big deal.",
        labelWhen: "WHEN",
        labelAt: "at",
        labelFood: "FOOD",
        btnCopied: "Copied! 🎉",
        btnCopy: "📄 Copy plan & text me"
      }
    }
  },
  zh: {
    translation: {
      step1: {
        title: "你愿意和我约会吗？",
        btnYes: "愿意 💖",
        btnNo: "不要"
      },
      step2: {
        title: "不是吧！真的假的！😳",
        subtitle: "我连你拒绝后的台词都准备好了",
        btnNext: "好吧好吧！ →"
      },
      step3: {
        title: "那么...你什么时候有空？",
        pickDay: "选个日子 ✨",
        whatTime: "几点呢？ 😅",
        selectTime: "选择时间...",
        time5: "下午 5:00 — 我们和退休大爷大妈一起吃饭",
        time6: "下午 6:00 — 这才是正确答案",
        time7: "晚上 7:00 — 你已经让我饿了",
        time8: "晚上 8:00 — 我们是吃晚饭还是早饭？",
        time9: "晚上 9:00 — 深夜狂欢 🌙",
        btnContinue: "继续 →"
      },
      step4: {
        title: "想吃什么？ 🍽️✨",
        subtitle: "(顺便说一句，你可以多选，开玩笑的只能选一个)",
        foodPizza: "披萨",
        foodSushi: "寿司",
        foodBurgers: "汉堡",
        foodPasta: "意大利面",
        foodTacos: "墨西哥卷饼",
        foodRamen: "拉面",
        btnThisOne: "就这个！ →"
      },
      step5: {
        title: "约会定啦！ 💌",
        summarySubtitle: "收到。我会带点零食以防万一 🍿",
        summaryPS: "附言：普通人才发短信。我在午休时为你做了一个网站，没什么大不了的。",
        labelWhen: "WHEN",
        labelAt: "时间",
        labelFood: "FOOD",
        btnCopied: "已复制！ 🎉",
        btnCopy: "📄 复制计划并发给我"
      }
    }
  },
  ja: {
    translation: {
      step1: {
        title: "私とデートしてくれませんか？",
        btnYes: "はい 💖",
        btnNo: "いいえ"
      },
      step2: {
        title: "うそ！マジで！ 😳",
        subtitle: "断られた時のためのスピーチまで用意してたのに",
        btnNext: "わかったわかった！ →"
      },
      step3: {
        title: "じゃあ... いつ空いてる？",
        pickDay: "日にちを選んで ✨",
        whatTime: "何時にする？ 😅",
        selectTime: "時間を選択...",
        time5: "午後 5:00 — お年寄りと一緒に夕食",
        time6: "午後 6:00 — これが正解だね",
        time7: "午後 7:00 — もうお腹空いてきた",
        time8: "午後 8:00 — これ夕食？それとも朝食？",
        time9: "午後 9:00 — 深夜のお楽しみ 🌙",
        btnContinue: "次へ →"
      },
      step4: {
        title: "何が食べたい？ 🍽️✨",
        subtitle: "(複数選べるよ、嘘だけど一個だけ)",
        foodPizza: "ピザ",
        foodSushi: "寿司",
        foodBurgers: "ハンバーガー",
        foodPasta: "パスタ",
        foodTacos: "タコス",
        foodRamen: "ラーメン",
        btnThisOne: "これにする！ →"
      },
      step5: {
        title: "デート決定！ 💌",
        summarySubtitle: "了解。念のためお菓子も持っていくね 🍿",
        summaryPS: "追伸: 普通の人はLINEするだけだよね。昼休みに君のためにこのサイトを作ったんだ。大したことないけど。",
        labelWhen: "WHEN",
        labelAt: "時間",
        labelFood: "FOOD",
        btnCopied: "コピーしたよ！ 🎉",
        btnCopy: "📄 プランをコピーしてLINEしてね"
      }
    }
  },
  ko: {
    translation: {
      step1: {
        title: "저랑 데이트 하실래요?",
        btnYes: "좋아요 💖",
        btnNo: "싫어요"
      },
      step2: {
        title: "말도 안돼. 진짜로요? 😳",
        subtitle: "거절당할까봐 할 말 다 연습했는데",
        btnNext: "알았어요! →"
      },
      step3: {
        title: "그럼... 언제가 좋으세요?",
        pickDay: "날짜 선택 ✨",
        whatTime: "몇 시가 좋아요? 😅",
        selectTime: "시간 선택...",
        time5: "오후 5:00 — 어르신들과 함께하는 저녁 식사",
        time6: "오후 6:00 — 이게 정답이죠",
        time7: "오후 7:00 — 벌써 배고파지네요",
        time8: "오후 8:00 — 이거 저녁인가요 아침인가요?",
        time9: "오후 9:00 — 심야의 즐거움 🌙",
        btnContinue: "계속 →"
      },
      step4: {
        title: "뭐 먹을까요? 🍽️✨",
        subtitle: "(여러 개 골라도 돼요, 장난이고 하나만)",
        foodPizza: "피자",
        foodSushi: "초밥",
        foodBurgers: "햄버거",
        foodPasta: "파스타",
        foodTacos: "타코",
        foodRamen: "라멘",
        btnThisOne: "이거요! →"
      },
      step5: {
        title: "데이트 확정! 💌",
        summarySubtitle: "알겠어요. 혹시 모르니 간식도 챙길게요 🍿",
        summaryPS: "추신: 보통 사람들은 그냥 문자하겠죠. 전 점심시간에 당신을 위해 이 웹사이트를 만들었어요. 별건 아니지만요.",
        labelWhen: "WHEN",
        labelAt: "시간",
        labelFood: "FOOD",
        btnCopied: "복사 완료! 🎉",
        btnCopy: "📄 계획 복사해서 문자 보내기"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "th", // default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
