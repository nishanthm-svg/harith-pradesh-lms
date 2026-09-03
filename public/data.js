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
              "आइए शुरुआत से शुरू करें — अनुभव की ज़रूरत नहीं है। इस पाठ के अंत तक, आप जान जाएँगे कि दूध आपके जैसे परिवारों के लिए क्यों ज़रूरी है।"
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
                  "<b>डेयरी</b> का मतलब है दूध से बनने वाली हर चीज़ — दूध, दही, छाछ, मक्खन, घी, पनीर और चीज़। एक <b>डेयरी किसान</b> वह व्यक्ति है जो गाय या भैंस पालता है और उनका दूध बेचने के लिए इकट्ठा करता है।"
                ),
              },
              {
                type: "text",
                heading: L("Why Do We Drink Milk?", "हम दूध क्यों पीते हैं?"),
                html: L(
                  "Milk is not just a drink — it is food. It has things our body needs every single day to grow and stay strong.",
                  "दूध सिर्फ पीने की चीज़ नहीं है — यह एक भोजन है। इसमें वे चीज़ें होती हैं जो हमारे शरीर को हर दिन बढ़ने और मज़बूत रहने के लिए चाहिए।"
                ),
              },
              {
                type: "stat-grid",
                items: [
                  {
                    label: L("Protein — for strong muscles", "प्रोटीन — मज़बूत मांसपेशियों के लिए"),
                    text: L(
                      "Milk has protein. Protein helps build and repair muscles — like bricks build a house.",
                      "दूध में प्रोटीन होता है। जैसे ईंटों से घर बनता है, वैसे ही प्रोटीन मांसपेशियों को बनाने और ठीक करने में मदद करता है।"
                    ),
                  },
                  {
                    label: L("Calcium — for strong bones", "कैल्शियम — मज़बूत हड्डियों के लिए"),
                    text: L(
                      "Milk has calcium. Calcium makes bones and teeth strong — very important for growing children.",
                      "दूध में कैल्शियम होता है। कैल्शियम हड्डियों और दांतों को मज़बूत बनाता है — बढ़ते बच्चों के लिए यह बहुत ज़रूरी है।"
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
                  "भोजन में मौजूद अच्छी चीज़ें, जो हमारे शरीर को बढ़ने, स्वस्थ रहने और ऊर्जा पाने में मदद करती हैं।"
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
                  "दूध का कौन-सा हिस्सा हमारी हड्डियों को मज़बूत बनाने में मदद करता है?"
                ),
                options: [L("Water", "पानी"), L("Calcium", "कैल्शियम"), L("Its colour", "इसका रंग"), L("Its smell", "इसकी गंध")],
                answer: 1,
                explain: L("Calcium in milk builds strong bones and teeth.", "दूध में मौजूद कैल्शियम मज़बूत हड्डियाँ और दांत बनाता है।"),
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
                    label: L("8 crore farmers", "8 करोड़ किसान"),
                    text: L(
                      "More than 8 crore (80 million) families across India earn a living from dairy.",
                      "पूरे भारत में 8 करोड़ से ज़्यादा परिवार डेयरी से अपनी आजीविका कमाते हैं।"
                    ),
                  },
                  {
                    label: L("Dairy earns the most", "डेयरी सबसे ज़्यादा कमाती है"),
                    text: L(
                      "Milk is India's single largest farm product — worth more than wheat, rice or sugarcane.",
                      "दूध भारत की सबसे बड़ी कृषि उपज है — यह गेहूँ, चावल या गन्ने से भी ज़्यादा मूल्यवान है।"
                    ),
                  },
                  {
                    label: L("7 out of 10 workers are women", "10 में से 7 कामगार महिलाएँ हैं"),
                    text: L(
                      "About 70% of the people who do daily dairy work — feeding, milking, cleaning — are women.",
                      "चारा देना, दूध दुहना, सफाई करना जैसे रोज़ के डेयरी काम करने वालों में लगभग 70% महिलाएँ हैं।"
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
                options: [L("8 lakh", "8 लाख"), L("80 lakh", "80 लाख"), L("8 crore", "8 करोड़"), L("8 thousand", "8 हज़ार")],
                answer: 2,
                explain: L(
                  "More than 8 crore (80 million) families across India depend on dairy for their livelihood.",
                  "पूरे भारत में 8 करोड़ से ज़्यादा परिवार अपनी आजीविका के लिए डेयरी पर निर्भर हैं।"
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
                explain: L("About 70% (7 out of 10) of dairy farm workers are women.", "डेयरी कामगारों में लगभग 70% (10 में से 7) महिलाएँ हैं।"),
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
                "इनमें से क्या दूध में पाया जाता है और मज़बूत मांसपेशियाँ बनाने में मदद करता है?"
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
                "डेयरी हर दिन, दिन में दो बार आय देती है, क्योंकि पशुओं का दूध रोज़ दुहा जाता है।"
              ),
            },
          ],
        },
      },
      // ==================================================================
      // LESSON 2
      // ==================================================================
      {
        id: "m1-l2",
        title: L("The World's Biggest Milk Bowl", "दुनिया का सबसे बड़ा दूध का कटोरा"),
        estMinutes: 7,
        hook: [
          {
            type: "hero",
            heading: L("The World's Biggest Milk Bowl", "दुनिया का सबसे बड़ा दूध का कटोरा"),
            text: L(
              "Which countries make the most milk? Let's find out — and see where India stands.",
              "कौन-से देश सबसे ज़्यादा दूध बनाते हैं? आइए जानें — और देखें कि भारत कहाँ खड़ा है।"
            ),
          },
        ],
        topics: [
          {
            id: "t-world-chart",
            title: L("Which Countries Make the Most Milk?", "कौन-से देश सबसे ज़्यादा दूध बनाते हैं?"),
            teach: [
              {
                type: "text",
                heading: L("Milk Around the World", "दुनियाभर में दूध"),
                html: L(
                  "Milk is made in almost every country. But a few countries make much more than others. Let's look at the top 10.",
                  "दूध लगभग हर देश में बनता है। लेकिन कुछ देश बाकियों से कहीं ज़्यादा बनाते हैं। आइए टॉप 10 देशों को देखें।"
                ),
              },
              {
                type: "poll",
                heading: L("Guess Before You Look", "देखने से पहले अंदाज़ा लगाइए"),
                questions: [
                  {
                    q: L(
                      "Which country do YOU think makes the most milk in the world?",
                      "आपको क्या लगता है, दुनिया में सबसे ज़्यादा दूध कौन-सा देश बनाता है?"
                    ),
                    options: [L("USA", "अमेरिका"), L("China", "चीन"), L("India", "भारत"), L("Pakistan", "पाकिस्तान")],
                    answer: 2,
                    reveal: L(
                      "Let's check the real numbers below and see if you guessed right!",
                      "नीचे असली आँकड़े देखते हैं और देखते हैं कि आपका अंदाज़ा सही था या नहीं!"
                    ),
                  },
                ],
              },
              {
                type: "glossary",
                term: L("Million Tonnes", "मिलियन टन"),
                meaning: L(
                  "A HUGE amount. 1 tonne = 1,000 kg. 1 million tonnes = 1,000,000 tonnes. If you filled milk tankers that each carry 10 tonnes, 1 million tonnes would need 1,00,000 tankers, one after another.",
                  "एक बहुत बड़ी मात्रा। 1 टन = 1,000 किलो। 1 मिलियन टन = 10,00,000 टन। अगर हर टैंकर 10 टन दूध ले जाए, तो 1 मिलियन टन के लिए 1,00,000 टैंकरों की एक के बाद एक कतार चाहिए होगी।"
                ),
              },
              {
                type: "barchart",
                heading: L(
                  "Top 10 Milk-Making Countries (Million Tonnes per year)",
                  "टॉप 10 दूध बनाने वाले देश (प्रति वर्ष मिलियन टन)"
                ),
                source: L("Source: FAOSTAT 2025", "स्रोत: FAOSTAT 2025"),
                unit: L("million tonnes", "मिलियन टन"),
                data: [
                  { label: L("India", "भारत"), value: 241, flag: "🇮🇳" },
                  { label: L("USA", "अमेरिका"), value: 102, flag: "🇺🇸" },
                  { label: L("Pakistan", "पाकिस्तान"), value: 65, flag: "🇵🇰" },
                  { label: L("China", "चीन"), value: 44, flag: "🇨🇳" },
                  { label: L("Brazil", "ब्राज़ील"), value: 37, flag: "🇧🇷" },
                  { label: L("Germany", "जर्मनी"), value: 34, flag: "🇩🇪" },
                  { label: L("Russia", "रूस"), value: 33, flag: "🇷🇺" },
                  { label: L("France", "फ्रांस"), value: 24, flag: "🇫🇷" },
                  { label: L("New Zealand", "न्यूज़ीलैंड"), value: 22, flag: "🇳🇿" },
                  { label: L("Türkiye", "तुर्किये"), value: 21, flag: "🇹🇷" },
                ],
              },
              {
                type: "example",
                heading: L("Let's Compare", "आइए तुलना करें"),
                text: L(
                  "India makes 241 million tonnes of milk a year. The USA, in 2nd place, makes 102 million tonnes. That means India makes more than DOUBLE what the USA makes.",
                  "भारत साल में 241 मिलियन टन दूध बनाता है। दूसरे स्थान पर अमेरिका 102 मिलियन टन बनाता है। यानी भारत अमेरिका से दोगुने से भी ज़्यादा दूध बनाता है।"
                ),
              },
            ],
            check: [
              {
                type: "mcq",
                q: L("Which country makes the most milk in the world?", "दुनिया में सबसे ज़्यादा दूध कौन-सा देश बनाता है?"),
                options: [L("USA", "अमेरिका"), L("China", "चीन"), L("India", "भारत"), L("Pakistan", "पाकिस्तान")],
                answer: 2,
                explain: L("India is the world's largest milk producer.", "भारत दुनिया का सबसे बड़ा दूध उत्पादक देश है।"),
              },
              {
                type: "mcq",
                q: L("Which country is in 2nd place for milk production?", "दूध उत्पादन में दूसरे स्थान पर कौन-सा देश है?"),
                options: [L("Pakistan", "पाकिस्तान"), L("China", "चीन"), L("USA", "अमेरिका"), L("Germany", "जर्मनी")],
                answer: 2,
                explain: L("The USA is 2nd, making 102 million tonnes a year.", "अमेरिका दूसरे स्थान पर है, जो साल में 102 मिलियन टन दूध बनाता है।"),
              },
            ],
          },
          {
            id: "t-world-why",
            title: L("Why is India Number One?", "भारत नंबर एक क्यों है?"),
            teach: [
              {
                type: "text",
                heading: L("How Did This Happen?", "यह कैसे हुआ?"),
                html: L(
                  "India did not become the world's top milk maker with a few giant farms. It happened because MILLIONS of small farmers — people like you, and the farmers you work with — each keep a few animals and sell milk every day.",
                  "भारत कुछ बड़े-बड़े फार्मों की वजह से दुनिया का सबसे बड़ा दूध बनाने वाला देश नहीं बना। यह इसलिए हुआ क्योंकि लाखों छोटे किसान — आपकी तरह, और आपके साथ काम करने वाले किसान — हर कोई कुछ पशु पालकर हर दिन दूध बेचता है।"
                ),
              },
              {
                type: "callout",
                style: "tip",
                heading: L("Small Farmers, Big Result", "छोटे किसान, बड़ा नतीजा"),
                text: L(
                  "Most milk in India comes from farmers who own just 1 to 4 animals — not big companies. Every small farmer's milk adds up to the world's largest supply.",
                  "भारत में ज़्यादातर दूध उन किसानों से आता है जिनके पास सिर्फ 1 से 4 पशु हैं — बड़ी कंपनियों से नहीं। हर छोटे किसान का दूध मिलकर दुनिया की सबसे बड़ी आपूर्ति बनाता है।"
                ),
              },
              {
                type: "stat-grid",
                items: [
                  {
                    label: L("Nutrition for millions", "लाखों लोगों के लिए पोषण"),
                    text: L(
                      "This much milk helps feed families and children across India and the world.",
                      "इतना दूध भारत और दुनियाभर के परिवारों और बच्चों को खिलाने में मदद करता है।"
                    ),
                  },
                  {
                    label: L("Income for villages", "गाँवों के लिए आय"),
                    text: L(
                      "Every litre sold puts money directly into a village family's hands.",
                      "बिका हुआ हर लीटर दूध सीधे एक गाँव के परिवार के हाथों में पैसा पहुँचाता है।"
                    ),
                  },
                ],
              },
            ],
            check: [
              {
                type: "truefalse",
                q: L(
                  "India became the top milk producer mainly because of a few very large dairy companies.",
                  "भारत मुख्य रूप से कुछ बहुत बड़ी डेयरी कंपनियों की वजह से सबसे बड़ा दूध उत्पादक बना।"
                ),
                answer: false,
                explain: L(
                  "It happened because of millions of small farmers, each keeping a few animals.",
                  "यह लाखों छोटे किसानों की वजह से हुआ, जिनमें से हर एक ने कुछ पशु पाले।"
                ),
              },
              {
                type: "mcq",
                q: L("What is the main reason India makes so much milk?", "भारत इतना ज़्यादा दूध बनाने का मुख्य कारण क्या है?"),
                options: [
                  L("A few huge factories", "कुछ बड़े-बड़े कारखाने"),
                  L("Millions of small farmers", "लाखों छोटे किसान"),
                  L("Milk imported from abroad", "विदेश से आयात किया गया दूध"),
                  L("Only cows, no buffaloes", "सिर्फ गाय, भैंस नहीं"),
                ],
                answer: 1,
                explain: L(
                  "Millions of small farmers, each with a few animals, together produce the most milk in the world.",
                  "कुछ-कुछ पशु रखने वाले लाखों छोटे किसान मिलकर दुनिया में सबसे ज़्यादा दूध बनाते हैं।"
                ),
              },
            ],
          },
        ],
        finalQuiz: {
          passScore: 70,
          questions: [
            {
              topicId: "t-world-chart",
              type: "mcq",
              q: L(
                "About how many times more milk does India make compared to the USA?",
                "अमेरिका की तुलना में भारत लगभग कितना गुना ज़्यादा दूध बनाता है?"
              ),
              options: [
                L("Same amount", "उतनी ही मात्रा"),
                L("Half as much", "आधी मात्रा"),
                L("About 2 times more", "लगभग 2 गुना ज़्यादा"),
                L("10 times more", "10 गुना ज़्यादा"),
              ],
              answer: 2,
              explain: L(
                "India (241) makes a little more than double the USA's (102) milk.",
                "भारत (241) अमेरिका (102) से थोड़ा ज़्यादा दोगुना दूध बनाता है।"
              ),
            },
            {
              topicId: "t-world-why",
              type: "mcq",
              q: L("India is the world's top milk maker mainly because of:", "भारत मुख्य रूप से दुनिया का सबसे बड़ा दूध बनाने वाला देश किस वजह से है:"),
              options: [
                L("A few big companies", "कुछ बड़ी कंपनियाँ"),
                L("Millions of small farmers", "लाखों छोटे किसान"),
                L("Milk imported from abroad", "विदेश से आयात किया गया दूध"),
                L("Only cows, no buffaloes", "सिर्फ गाय, भैंस नहीं"),
              ],
              answer: 1,
              explain: L("Millions of small farmers together make India number one.", "लाखों छोटे किसान मिलकर भारत को नंबर एक बनाते हैं।"),
            },
          ],
        },
      },
      // ==================================================================
      // LESSON 3
      // ==================================================================
      {
        id: "m1-l3",
        title: L("India's Milk Map", "भारत का दूध मानचित्र"),
        estMinutes: 7,
        hook: [
          {
            type: "hero",
            heading: L("India's Milk Map", "भारत का दूध मानचित्र"),
            text: L(
              "Now let's zoom into India. Which states make the most milk?",
              "अब आइए भारत के अंदर देखें। कौन-से राज्य सबसे ज़्यादा दूध बनाते हैं?"
            ),
          },
        ],
        topics: [
          {
            id: "t-state-chart",
            title: L("Top Milk-Making States", "सबसे ज़्यादा दूध बनाने वाले राज्य"),
            teach: [
              {
                type: "text",
                heading: L("Every State Contributes", "हर राज्य का योगदान है"),
                html: L(
                  "Milk is made in every state of India. But some states make much more than others.",
                  "भारत के हर राज्य में दूध बनता है। लेकिन कुछ राज्य बाकियों से कहीं ज़्यादा बनाते हैं।"
                ),
              },
              {
                type: "poll",
                heading: L("Guess Before You Look", "देखने से पहले अंदाज़ा लगाइए"),
                questions: [
                  {
                    q: L(
                      "Which state do YOU think makes the most milk in India?",
                      "आपको क्या लगता है, भारत में सबसे ज़्यादा दूध कौन-सा राज्य बनाता है?"
                    ),
                    options: [L("Punjab", "पंजाब"), L("Uttar Pradesh", "उत्तर प्रदेश"), L("Kerala", "केरल"), L("Bihar", "बिहार")],
                    answer: 1,
                    reveal: L(
                      "Let's check the chart below and see if you guessed right!",
                      "नीचे दिया चार्ट देखते हैं और देखते हैं कि आपका अंदाज़ा सही था या नहीं!"
                    ),
                  },
                ],
              },
              {
                type: "barchart",
                heading: L("Milk Production by State", "राज्यवार दूध उत्पादन"),
                source: L("Source: BAHS 2025", "स्रोत: BAHS 2025"),
                unit: L("'000 tonnes", "हज़ार टन"),
                data: [
                  { label: L("Uttar Pradesh", "उत्तर प्रदेश"), value: 39 },
                  { label: L("Rajasthan", "राजस्थान"), value: 36 },
                  { label: L("Madhya Pradesh", "मध्य प्रदेश"), value: 22 },
                  { label: L("Gujarat", "गुजरात"), value: 19 },
                  { label: L("Maharashtra", "महाराष्ट्र"), value: 16 },
                  { label: L("Punjab", "पंजाब"), value: 15 },
                  { label: L("Andhra Pradesh", "आंध्र प्रदेश"), value: 14 },
                  { label: L("Karnataka", "कर्नाटक"), value: 14 },
                  { label: L("Bihar", "बिहार"), value: 14 },
                  { label: L("Haryana", "हरियाणा"), value: 13 },
                  { label: L("Tamil Nadu", "तमिलनाडु"), value: 11 },
                  { label: L("West Bengal", "पश्चिम बंगाल"), value: 8 },
                  { label: L("Telangana", "तेलंगाना"), value: 6 },
                  { label: L("Jharkhand", "झारखंड"), value: 3 },
                  { label: L("Jammu & Kashmir", "जम्मू और कश्मीर"), value: 3 },
                ],
              },
              {
                type: "example",
                heading: L("Let's Compare", "आइए तुलना करें"),
                text: L(
                  "Uttar Pradesh makes the most milk. That is more than 10 times what Jharkhand or Jammu & Kashmir make.",
                  "उत्तर प्रदेश सबसे ज़्यादा दूध बनाता है। यह झारखंड या जम्मू-कश्मीर से 10 गुने से भी ज़्यादा है।"
                ),
              },
            ],
            check: [
              {
                type: "mcq",
                q: L("Which state makes the most milk in India?", "भारत में सबसे ज़्यादा दूध कौन-सा राज्य बनाता है?"),
                options: [L("Punjab", "पंजाब"), L("Uttar Pradesh", "उत्तर प्रदेश"), L("Gujarat", "गुजरात"), L("Bihar", "बिहार")],
                answer: 1,
                explain: L("Uttar Pradesh leads all Indian states in milk production.", "दूध उत्पादन में उत्तर प्रदेश सभी भारतीय राज्यों में आगे है।"),
              },
              {
                type: "truefalse",
                q: L("All Indian states make about the same amount of milk.", "सभी भारतीय राज्य लगभग बराबर मात्रा में दूध बनाते हैं।"),
                answer: false,
                explain: L(
                  "Some states, like Uttar Pradesh and Rajasthan, make much more milk than others.",
                  "उत्तर प्रदेश और राजस्थान जैसे कुछ राज्य बाकियों से कहीं ज़्यादा दूध बनाते हैं।"
                ),
              },
            ],
          },
          {
            id: "t-state-meaning",
            title: L("What This Means for You", "इसका आपके लिए क्या मतलब है"),
            teach: [
              {
                type: "text",
                heading: L("The Top 5 States", "टॉप 5 राज्य"),
                html: L(
                  "Uttar Pradesh, Rajasthan, Madhya Pradesh, Gujarat and Maharashtra are the top 5 milk-making states. Together, just these 5 states make more than 65 out of every 100 litres of milk in India.",
                  "उत्तर प्रदेश, राजस्थान, मध्य प्रदेश, गुजरात और महाराष्ट्र टॉप 5 दूध बनाने वाले राज्य हैं। मिलाकर, सिर्फ ये 5 राज्य भारत के हर 100 लीटर दूध में से 65 से ज़्यादा बनाते हैं।"
                ),
              },
              {
                type: "callout",
                style: "info",
                heading: L("Did you know?", "क्या आप जानते हैं?"),
                text: L(
                  "Even in states that make less milk overall, dairy is still a vital income source for the families there. Every village's contribution matters.",
                  "जिन राज्यों में कुल मिलाकर कम दूध बनता है, वहाँ भी डेयरी परिवारों के लिए एक ज़रूरी आय का साधन है। हर गाँव का योगदान मायने रखता है।"
                ),
              },
            ],
            check: [
              {
                type: "mcq",
                q: L(
                  "Roughly what share of India's milk comes from the top 5 states?",
                  "भारत के दूध का लगभग कितना हिस्सा टॉप 5 राज्यों से आता है?"
                ),
                options: [L("Under 20%", "20% से कम"), L("About 40%", "लगभग 40%"), L("Over 65%", "65% से ज़्यादा"), L("100%", "100%")],
                answer: 2,
                explain: L(
                  "The top 5 states together contribute over 65% of India's total milk.",
                  "टॉप 5 राज्य मिलकर भारत के कुल दूध का 65% से ज़्यादा योगदान देते हैं।"
                ),
              },
              {
                type: "mcq",
                q: L("Which of these is one of the top 5 milk-making states?", "इनमें से कौन-सा टॉप 5 दूध बनाने वाले राज्यों में से एक है?"),
                options: [L("Kerala", "केरल"), L("Gujarat", "गुजरात"), L("Goa", "गोवा"), L("Assam", "असम")],
                answer: 1,
                explain: L(
                  "Gujarat is one of the top 5 states, along with UP, Rajasthan, MP and Maharashtra.",
                  "उत्तर प्रदेश, राजस्थान, मध्य प्रदेश और महाराष्ट्र के साथ गुजरात भी टॉप 5 राज्यों में से एक है।"
                ),
              },
            ],
          },
        ],
        finalQuiz: {
          passScore: 70,
          questions: [
            {
              topicId: "t-state-chart",
              type: "mcq",
              q: L("Which state produces more milk — Bihar or Haryana?", "कौन-सा राज्य ज़्यादा दूध बनाता है — बिहार या हरियाणा?"),
              options: [L("Bihar", "बिहार"), L("Haryana", "हरियाणा"), L("Exactly equal", "बिल्कुल बराबर"), L("Cannot say", "कहा नहीं जा सकता")],
              answer: 0,
              explain: L(
                "Bihar (14 units) produces slightly more than Haryana (13 units).",
                "बिहार (14 इकाई) हरियाणा (13 इकाई) से थोड़ा ज़्यादा उत्पादन करता है।"
              ),
            },
            {
              topicId: "t-state-meaning",
              type: "truefalse",
              q: L(
                "The top 5 states alone make more than half of all of India's milk.",
                "सिर्फ टॉप 5 राज्य ही भारत के आधे से ज़्यादा दूध बनाते हैं।"
              ),
              answer: true,
              explain: L(
                "Yes — the top 5 states make over 65% of India's total milk.",
                "हाँ — टॉप 5 राज्य भारत के कुल दूध का 65% से ज़्यादा बनाते हैं।"
              ),
            },
          ],
        },
      },
    ],
  },
];
