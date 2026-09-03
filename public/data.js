// ============================================================================
// Harith Pradesh LMS — Content data
// Written for learners with no formal education and no prior dairy
// knowledge (about a Class 7 reading level). Every lesson is broken into
// small TOPICS, taught fully first (with examples, animation and light
// interactivity), then checked with ONE combined quiz at the end. Wrong
// answers send the learner back to re-learn that exact topic.
//
// Every learner-facing string is written with the L() helper:
//   L("English", "Hindi")
// so the whole app can render in the language the learner picked. English
// is always the fallback if a translation is thin.
// ============================================================================

import { L } from "./i18n.js";

export const MODULES = [
  {
    id: "m1",
    number: 1,
    title: L("Introduction to Dairy", "डेयरी से परिचय"),
    subtitle: L(
      "Learn step by step — no experience needed. Every topic is taught first, then checked with a few simple questions.",
      "चरण दर चरण सीखें — अनुभव की ज़रूरत नहीं है। हर विषय पहले सिखाया जाता है, फिर कुछ आसान सवालों से जाँचा जाता है।"
    ),
    icon: "milk",
    available: true,
    lessons: [
      // ==================================================================
      // LESSON 1
      // ==================================================================
      {
        id: "m1-l1",
        title: L("What is Dairy, and Why Does It Matter?", "डेयरी क्या है, और यह क्यों ज़रूरी है?"),
        estMinutes: 6,
        hook: [
          {
            type: "hero",
            heading: L("What is Dairy?", "डेयरी क्या है?"),
            text: L(
              "Let's start from zero — no experience needed. By the end of this lesson, you'll know why milk matters to families like yours.",
              "आइए शुरुआत से शुरू करें — अनुभव की ज़रूरत नहीं है। इस पाठ के अंत तक, आप जान जाएंगे कि दूध आपके जैसे परिवारों के लिए क्यों ज़रूरी है।"
            ),
          },
        ],
        topics: [
          {
            id: "t-milk-body",
            title: L("Milk and Your Body", "दूध और आपका शरीर"),
            teach: [
              {
                type: "text",
                heading: L("What Does 'Dairy' Mean?", "'डेयरी' का मतलब क्या है?"),
                html: L(
                  "<b>Dairy</b> means anything made from milk — milk, curd (dahi), buttermilk (chaas), butter, ghee, paneer and cheese. A <b>dairy farmer</b> is a person who keeps cows or buffaloes and collects their milk to sell.",
                  "<b>डेयरी</b> का मतलब है दूध से बनने वाली हर चीज़ — दूध, दही, छाछ, मख्खन, घी, पनीर और चीज़। एक <b>डेयरी किसान</b> वह व्यक्ति है जो गाय या भैंस पालता है और उनका दूध बेचने के लिए इकट्ठा करता है।"
                ),
              },
              {
                type: "text",
                heading: L("Why Do We Drink Milk?", "हम दूध क्यों पीते हैं?"),
                html: L(
                  "Milk is not just a drink — it is food. It has things our body needs every single day to grow and stay strong.",
                  "दूध सिर्फ पीने की चीज़ नहीं है — यह एक भोजन है। इसमें वे चीज़ें होती हैं जो हमारे शरीर को हर दिन बढ़ने और मड़़बूत रहने के लिए चाहिए।"
                ),
              },
              {
                type: "stat-grid",
                items: [
                  {
                    label: L("Protein — for strong muscles", "प्रोटीन — मड़़बूत मांसपेशियों के लिए"),
                    text: L(
                      "Milk has protein. Protein helps build and repair muscles — like bricks build a house.",
                      "दूध में प्रोटीन होता है। जैसे ईंटों से घर बनता है, वैसे ही प्रोटीन मांसपेशियों को बनाने और ठीक करने में मदद करता है।"
                    ),
                  },
                  {
                    label: L("Calcium — for strong bones", "कैल्शियम — मड़़बूत हड्डियों के लिए"),
                    text: L(
                      "Milk has calcium. Calcium makes bones and teeth strong — very important for growing children.",
                      "दूध में कैल्शियम होता है। कैल्शियम हड्डियों और दांतों को मड़़बूत बनाता है — बड़़ते बच्चों के लिए यह बहुत ज़रूरी है।"
                    ),
                  },
                  {
                    label: L("Vitamins — for energy", "विटामिन — ऊर्जा के लिए"),
                    text: L(
                      "Milk has Vitamin A and Vitamin B12. These help our eyes, our skin, and give us energy for the day's work.",
                      "दूध में विटामिन A और विटामिन B12 होते हैं। ये हमारी आँखों और त्वचा के लिए फायदेमंद हैं, और दिनभर के काम के लिए ऊर्जा देते हैं।"
                    ),
                  },
                ],
              },
              {
                type: "glossary",
                term: L("Nutrition", "पोषण"),
                meaning: L(
                  "The good things in food that help our body grow, stay healthy, and have energy.",
                  "भोजन में मौजूद अच्छी चीज़ें, जो हमारे शरीर को बढ़ने, स्वस्थ रहने और ऊर्जा पाने में मदद करती हैं।"
                ),
              },
              {
                type: "example",
                heading: L("Think About It", "इस पर सोचिए"),
                text: L(
                  "A glass of milk in the morning gives a child protein and calcium for the whole day. That is why many schools and anganwadis give milk to children.",
                  "सुबह एक गिलास दूध एक बच्चे को पूरे दिन के लिए प्रोटीन और कैल्शियम देता है। इसीलिए कई स्कूल और आँगनवाड़ी बच्चों को दूध देते हैं।"
                ),
              },
            ],
            check: [
              {
                type: "mcq",
                q: L(
                  "Which part of milk helps make our bones strong?",
                  "दूध का कौन-सा हिस्सा हमारी हड्डियों को मड़़बूत बनाने में मदद करता है?"
                ),
                options: [L("Water", "पानी"), L("Calcium", "कैल्शियम"), L("Its colour", "इसका रंग"), L("Its smell", "इसकी गंध")],
                answer: 1,
                explain: L("Calcium in milk builds strong bones and teeth.", "दूध में मौजूद कैल्शियम मड़़बूत हड्डियाँ और दांत बनाता है।"),
              },
              {
                type: "truefalse",
                q: L(
                  "Milk only tastes good — it does not really help the body.",
                  "दूध का स्वाद ही अच्छा होता है — यह शरीर के लिए असल में कुछ नहीं करता।"
                ),
                answer: false,
                explain: L(
                  "Milk is real food. It gives protein, calcium and vitamins that the body needs every day.",
                  "दूध असली भोजन है। यह वह प्रोटीन, कैल्शियम और विटामिन देता है जो शरीर को हर दिन चाहिए।"
                ),
              },
            ],
          },
          {
            id: "t-dairy-livelihood",
            title: L("Dairy as a Livelihood", "आजीविका के रूप में डेयरी"),
            teach: [
              {
                type: "text",
                heading: L("More Than Just Food", "सिर्फ भोजन से कहीं ज़्यादा"),
                html: L(
                  "For millions of families in India, milk is not only food — it is also their main way of earning money. Keeping even 1, 2 or 4 milk animals and selling milk every day can support a whole family.",
                  "भारत में लाखों परिवारों के लिए, दूध सिर्फ भोजन नहीं है — यह उनकी कमाई का मुख्य ज़रिया भी है। सिर्फ 1, 2 या 4 दुधारू पशु पालकर और हर दिन दूध बेचकर पूरा परिवार चल सकता है।"
                ),
              },
              {
                type: "stat-grid",
                items: [
                  {
                    label: L("8 crore farmers", "8 करोड़़ किसान"),
                    text: L(
                      "More than 8 crore (80 million) families across India earn a living from dairy.",
                      "पूरे भारत में 8 करोड़़ से ज़्यादा परिवार डेयरी से अपनी आजीविका कमाते हैं।"
                    ),
                  },
                  {
                    label: L("Dairy earns the most", "डेयरी सबसे ज़्यादा कमाती है"),
                    text: L(
                      "Milk is India's single largest farm product — worth more than wheat, rice or sugarcane.",
                      "दूध भारत की सबसे बड़़ी कृषि उपज है — यह गेहूं, चावल या गन्ने से भी ज़्यादा मूल्यवान है।"
                    ),
                  },
                  {
                    label: L("7 out of 10 workers are women", "10 में से 7 कामगार महिलाएं हैं"),
                    text: L(
                      "About 70% of the people who do daily dairy work — feeding, milking, cleaning — are women.",
                      "चारा देना, दूध दुहना, सफाई करना जैसे रोज़ के डेयरी काम करने वालों में लगभग 70% महिलाएं हैं।"
                    ),
                  },
                ],
              },
              {
                type: "callout",
                style: "info",
                heading: L("Did you know?", "क्या आप जानते हैं?"),
                text: L(
                  "Dairy work happens every single day, twice a day — morning and evening. That is why it gives families a steady income, not income that comes only once or twice a year like some crops.",
                  "डेयरी का काम हर दिन, दिन में दो बार — सुबह और शाम होता है। इसीलिए यह परिवारों को स्थिर आय देता है, न कि कुछ फसलों की तरह साल में एक-दो बार मिलने वाली आय।"
                ),
              },
            ],
            check: [
              {
                type: "mcq",
                q: L(
                  "About how many families in India earn a living from dairy?",
                  "भारत में लगभग कितने परिवार डेयरी से अपनी आजीविका कमाते हैं?"
                ),
                options: [L("8 lakh", "8 लाख"), L("80 lakh", "80 लाख"), L("8 crore", "8 करोड़़"), L("8 thousand", "8 हड़़ार")],
                answer: 2,
                explain: L(
                  "More than 8 crore (80 million) families across India depend on dairy for their livelihood.",
                  "पूरे भारत में 8 करोड़़ से ज़्यादा परिवार अपनी आजीविका के लिए डेयरी पर निर्भर हैं।"
                ),
              },
              {
                type: "mcq",
                q: L(
                  "Roughly what share of dairy farm workers are women?",
                  "डेयरी में काम करने वालों में लगभग कितना हिस्सा महिलाओं का है?"
                ),
                options: [L("1 in 10", "10 में से 1"), L("3 in 10", "10 में से 3"), L("5 in 10", "10 में से 5"), L("7 in 10", "10 में से 7")],
                answer: 3,
                explain: L("About 70% (7 out of 10) of dairy farm workers are women.", "डेयरी कामगारों में लगभग 70% (10 में से 7) महिलाएं हैं।"),
              },
            ],
          },
        ],
        finalQuiz: {
          passScore: 70,
          questions: [
            {
              topicId: "t-milk-body",
              type: "mcq",
              q: L(
                "Which of these is found in milk and helps build strong muscles?",
                "इनमें से क्या दूध में पाया जाता है और मड़़बूत मांसपेशियाँ बनाने में मदद करता है?"
              ),
              options: [L("Protein", "प्रोटीन"), L("Sugar", "चीनी"), L("Salt", "नमक"), L("Oil", "तेल")],
              answer: 0,
              explain: L("Protein in milk helps build and repair muscles.", "दूध में मौजूद प्रोटीन मांसपेशियों को बनाने और ठीक करने में मदद करता है।"),
            },
            {
              topicId: "t-dairy-livelihood",
              type: "truefalse",
              q: L(
                "Dairy farming gives income only once a year, like some crops.",
                "कुछ फसलों की तरह, डेयरी पालन साल में सिर्फ एक बार आय देता है।"
              ),
              answer: false,
              explain: L(
                "Dairy gives income every day, twice a day, because animals are milked daily.",
                "डेयरी हर दिन, दिन में दो बार आय देती है, क्योंकि पशुओं का दूध रोड़़ दुहा जाता है।"
              ),
            },
          ],
        },
      },
    ],
  },
];
