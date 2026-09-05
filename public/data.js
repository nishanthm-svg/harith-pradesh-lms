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
      // ==================================================================
      // LESSON 4
      // ==================================================================
      {
        id: "m1-l4",
        title: L("The White Revolution — India's Dairy Story", "श्वेत क्रांति — भारत की डेयरी कहानी"),
        estMinutes: 9,
        hook: [
          {
            type: "hero",
            heading: L("The White Revolution", "श्वेत क्रांति"),
            text: L(
              "How did India go from not having enough milk to being the world's biggest milk maker? It's a story about ordinary farmers.",
              "भारत, दूध की कमी से दुनिया का सबसे बड़ा दूध बनाने वाला देश कैसे बना? यह साधारण किसानों की कहानी है।"
            ),
          },
        ],
        topics: [
          {
            id: "t-problem",
            title: L("The Problem: Farmers Were Cheated", "समस्या: किसानों को ठगा जाता था"),
            teach: [
              {
                type: "text",
                heading: L("Before 1946", "1946 से पहले"),
                html: L(
                  "Long ago, in Kaira district in Gujarat, farmers sold their milk to a private trader. The trader paid very little and decided the price all by himself. Farmers had no other place to sell milk, so they had no choice but to accept it.",
                  "बहुत साल पहले, गुजरात के कैरा ज़िले में किसान अपना दूध एक निजी व्यापारी को बेचते थे। व्यापारी बहुत कम पैसे देता था और कीमत खुद ही तय करता था। किसानों के पास दूध बेचने की और कोई जगह नहीं थी, इसलिए उन्हें यह मानना ही पड़ता था।"
                ),
              },
              {
                type: "callout",
                style: "warning",
                heading: L("The Unfair Deal", "अन्यायपूर्ण सौदा"),
                text: L(
                  "The trader made a big profit, but the farmers who did all the hard work stayed poor. This is called exploitation — when someone with power takes unfair advantage of people who have no other choice.",
                  "व्यापारी ने बड़ा मुनाफ़ा कमाया, लेकिन कड़ी मेहनत करने वाले किसान गरीब ही रह गए। इसे शोषण कहते हैं — जब ताकत रखने वाला कोई व्यक्ति उन लोगों का नाजायज़ फायदा उठाए जिनके पास और कोई विकल्प न हो।"
                ),
              },
              {
                type: "poll",
                heading: L("What Do You Think?", "आपको क्या लगता है?"),
                questions: [
                  {
                    q: L(
                      "If only one trader buys your milk and he alone sets the price, is that fair to farmers?",
                      "अगर सिर्फ एक ही व्यापारी आपका दूध खरीदे और सिर्फ वही कीमत तय करे, तो क्या यह किसानों के लिए न्यायपूर्ण है?"
                    ),
                    options: [L("Yes, that's fair", "हाँ, यह न्यायपूर्ण है"), L("No, that's not fair", "नहीं, यह न्यायपूर्ण नहीं है")],
                    answer: 1,
                    reveal: L(
                      "Right — when farmers have no other buyer to go to, the trader can pay whatever he wants. That's not a fair deal.",
                      "सही — जब किसानों के पास जाने के लिए कोई और खरीदार नहीं होता, तो व्यापारी जो चाहे दे सकता है। यह एक न्यायपूर्ण सौदा नहीं है।"
                    ),
                  },
                ],
              },
            ],
            check: [
              {
                type: "mcq",
                q: L(
                  "Before 1946, why did farmers in Kaira accept a low price for their milk?",
                  "1946 से पहले, कैरा के किसानों ने अपने दूध की कम कीमत क्यों मान ली?"
                ),
                options: [
                  L("The trader paid a fair price", "व्यापारी न्यायपूर्ण कीमत देता था"),
                  L("They had no other place to sell milk", "उनके पास दूध बेचने की और कोई जगह नहीं थी"),
                  L("They didn't need money", "उन्हें पैसों की ज़रूरत नहीं थी"),
                  L("Milk was not valuable then", "तब दूध की कोई कीमत नहीं थी"),
                ],
                answer: 1,
                explain: L(
                  "With only one trader to sell to, farmers had no choice but to accept the low price he offered.",
                  "बेचने के लिए सिर्फ एक व्यापारी होने से, किसानों के पास उसकी दी गई कम कीमत मानने के अलावा कोई चारा नहीं था।"
                ),
              },
              {
                type: "truefalse",
                q: L(
                  "Before 1946, farmers in Kaira were getting a fair price for their milk.",
                  "1946 से पहले, कैरा के किसानों को उनके दूध की न्यायपूर्ण कीमत मिलती थी।"
                ),
                answer: false,
                explain: L(
                  "A single private trader controlled the price and paid farmers very little.",
                  "एक अकेला निजी व्यापारी कीमत तय करता था और किसानों को बहुत कम पैसे देता था।"
                ),
              },
            ],
          },
          {
            id: "t-amul",
            title: L("1946: Farmers Build Their Own Dairy", "1946: किसानों ने अपनी खुद की डेयरी बनाई"),
            teach: [
              {
                type: "text",
                heading: L("A New Idea: Owning It Together", "एक नया विचार: मिलकर मालिक बनना"),
                html: L(
                  "In 1946, the farmers of Kaira stopped selling to the unfair trader. With support from leaders like Sardar Patel, they formed their own dairy — owned by the farmers themselves. This dairy became AMUL.",
                  "1946 में, कैरा के किसानों ने उस अन्यायी व्यापारी को दूध बेचना बंद कर दिया। सरदार पटेल जैसे नेताओं के समर्थन से, उन्होंने अपनी खुद की डेयरी बनाई — जिसके मालिक किसान खुद थे। यही डेयरी अमूल बनी।"
                ),
              },
              {
                type: "glossary",
                term: L("Cooperative", "सहकारी समिति"),
                meaning: L(
                  "A business owned and run TOGETHER by the people who use it — here, by the farmers themselves. No single trader controls the price.",
                  "एक ऐसा व्यापार जिसे उपयोग करने वाले लोग — यहाँ किसान खुद — मिलकर चलाते और उसके मालिक होते हैं। कोई एक व्यापारी कीमत तय नहीं करता।"
                ),
              },
              {
                type: "text",
                heading: L("How It Was Different", "यह कैसे अलग था"),
                html: L(
                  "In a cooperative, there is no middleman taking a big cut. Farmers bring their milk, it gets tested and sold, and the profit goes back to the farmers who own it. Today, Amul is owned by 3.6 million farmer families.",
                  "एक सहकारी समिति में कोई बिचौलिया बड़ा हिस्सा नहीं लेता। किसान अपना दूध लाते हैं, उसकी जाँच होती है और बेचा जाता है, और मुनाफ़ा उन्हीं किसानों को वापस मिलता है जो उसके मालिक हैं। आज, अमूल 36 लाख किसान परिवारों के स्वामित्व में है।"
                ),
              },
              {
                type: "example",
                heading: L("Think About It", "इस पर सोचिए"),
                text: L(
                  "Imagine 100 farmers each owning a small part of one big dairy business, instead of 100 farmers each depending on one trader's mood. That is the power of a cooperative.",
                  "ज़रा सोचिए — 100 किसान एक व्यापारी की मर्जी पर निर्भर रहने के बजाय, एक बड़े डेयरी व्यापार के छोटे-छोटे हिस्से के मालिक हों। यही एक सहकारी समिति की ताकत है।"
                ),
              },
            ],
            check: [
              {
                type: "mcq",
                q: L("What is a 'cooperative'?", "'सहकारी समिति' क्या होती है?"),
                options: [
                  L("A business owned by one rich trader", "एक अमीर व्यापारी के स्वामित्व वाला व्यापार"),
                  L("A business owned together by the farmers who use it", "उपयोग करने वाले किसानों के मिले-जुले स्वामित्व वाला व्यापार"),
                  L("A government office", "एक सरकारी दफ्तर"),
                  L("A bank loan", "एक बैंक ऋण"),
                ],
                answer: 1,
                explain: L(
                  "A cooperative is owned and run together by its members — the farmers themselves.",
                  "एक सहकारी समिति का स्वामित्व और संचालन उसके सदस्य — यानी किसान खुद — मिलकर करते हैं।"
                ),
              },
              {
                type: "mcq",
                q: L("In which year was Amul formed?", "अमूल की स्थापना किस साल हुई थी?"),
                options: [L("1946", "1946"), L("1965", "1965"), L("1991", "1991"), L("1998", "1998")],
                answer: 0,
                explain: L("Amul was formed in 1946 by the farmers of Kaira district.", "अमूल की स्थापना 1946 में कैरा ज़िले के किसानों ने की थी।"),
              },
            ],
          },
          {
            id: "t-operation-flood",
            title: L("Spreading the Idea Across India", "इस विचार को पूरे भारत में फैलाना"),
            teach: [
              {
                type: "text",
                heading: L("One Success Becomes a Movement", "एक सफलता एक आंदोलन बन गई"),
                html: L(
                  "Amul worked so well that the government wanted every state to have the same kind of farmer-owned dairy. In 1965, NDDB (National Dairy Development Board) was formed to make this happen, led by Dr. Verghese Kurien.",
                  "अमूल इतनी अच्छी तरह काम करने लगी कि सरकार चाहती थी हर राज्य में इसी तरह की किसान-स्वामित्व वाली डेयरी हो। इसे संभव बनाने के लिए 1965 में डॉ. वर्गीस कुरियन के नेतृत्व में NDDB (राष्ट्रीय डेयरी विकास बोर्ड) बनाया गया।"
                ),
              },
              {
                type: "timeline",
                heading: L("India's Dairy Journey", "भारत की डेयरी यात्रा"),
                items: [
                  { year: "1946", text: L("Formation of Amul.", "अमूल की स्थापना।") },
                  { year: "1965", text: L("Establishment of NDDB, led by Dr. V. Kurien.", "डॉ. वी. कुरियन के नेतृत्व में NDDB की स्थापना।") },
                  { year: "1970–80", text: L("Operation Flood Phase I begins.", "ऑपरेशन फ्लड चरण I शुरू।") },
                  { year: "1974", text: L("Formation of Mother Dairy in Delhi.", "दिल्ली में मदर डेयरी की स्थापना।") },
                  { year: "1981–85", text: L("Operation Flood Phase II.", "ऑपरेशन फ्लड चरण II।") },
                  { year: "1985–96", text: L("Operation Flood Phase III.", "ऑपरेशन फ्लड चरण III।") },
                  {
                    year: "1991",
                    text: L(
                      "Private and multi-national dairy companies allowed to enter India.",
                      "निजी और बहुराष्ट्रीय डेयरी कंपनियों को भारत में आने की अनुमति दी गई।"
                    ),
                  },
                  {
                    year: "1998",
                    text: L("India becomes the world's largest milk producer.", "भारत दुनिया का सबसे बड़ा दूध उत्पादक देश बना।"),
                  },
                  {
                    year: "1999",
                    text: L(
                      "Dr. Alagh recommends setting up Producer Companies.",
                      "डॉ. अलघ ने उत्पादक कंपनियाँ बनाने की सिफारिश की।"
                    ),
                  },
                  {
                    year: "2002–03",
                    text: L(
                      "Companies Act amended to include Producer Companies.",
                      "उत्पादक कंपनियों को शामिल करने के लिए कंपनी अधिनियम में संशोधन।"
                    ),
                  },
                  { year: "2009", text: L("NDDB Dairy Services is formed.", "NDDB डेयरी सेवाओं की स्थापना।") },
                  { year: "2011–19", text: L("National Dairy Plan (NDP-1).", "राष्ट्रीय डेयरी योजना (NDP-1)।") },
                  {
                    year: "2014",
                    text: L("National Programme for Dairy Development (NPDD).", "राष्ट्रीय डेयरी विकास कार्यक्रम (NPDD)।"),
                  },
                  { year: "2021", text: L("NPDD is restructured.", "NPDD का पुनर्गठन किया गया।") },
                ],
                result: L("India: Milk Surplus Nation", "भारत: दूध अधिशेष वाला देश"),
              },
              {
                type: "callout",
                style: "tip",
                heading: L("From Deficit to Surplus", "कमी से अधिशेष तक"),
                text: L(
                  "Deficit means not having enough — India used to import milk powder from other countries. Surplus means having more than enough. By 1998, India made more milk than any other country in the world.",
                  "कमी का मतलब है पर्याप्त न होना — भारत पहले दूसरे देशों से दूध पाउडर आयात करता था। अधिशेष का मतलब है ज़रूरत से ज़्यादा होना। 1998 तक, भारत दुनिया के किसी भी और देश से ज़्यादा दूध बनाने लगा था।"
                ),
              },
            ],
            check: [
              {
                type: "mcq",
                q: L("What does NDDB stand for?", "NDDB का पूरा नाम क्या है?"),
                options: [
                  L("National Dairy Development Board", "राष्ट्रीय डेयरी विकास बोर्ड"),
                  L("New Delhi Dairy Board", "न्यू दिल्ली डेयरी बोर्ड"),
                  L("National Development Bank", "राष्ट्रीय विकास बैंक"),
                  L("North Dairy District Board", "नॉर्थ डेयरी डिस्ट्रिक्ट बोर्ड"),
                ],
                answer: 0,
                explain: L("NDDB = National Dairy Development Board, formed in 1965.", "NDDB = राष्ट्रीय डेयरी विकास बोर्ड, जिसकी स्थापना 1965 में हुई।"),
              },
              {
                type: "mcq",
                q: L(
                  "In which year did India become the world's largest milk producer?",
                  "भारत किस साल दुनिया का सबसे बड़ा दूध उत्पादक देश बना?"
                ),
                options: [L("1965", "1965"), L("1985", "1985"), L("1998", "1998"), L("2014", "2014")],
                answer: 2,
                explain: L("India reached the top spot in 1998.", "भारत 1998 में शीर्ष स्थान पर पहुँचा।"),
              },
            ],
          },
        ],
        finalQuiz: {
          passScore: 70,
          questions: [
            {
              topicId: "t-problem",
              type: "truefalse",
              q: L(
                "Before Amul, one private trader alone decided the price farmers got for milk.",
                "अमूल से पहले, एक अकेला निजी व्यापारी ही तय करता था कि किसानों को दूध की कितनी कीमत मिलेगी।"
              ),
              answer: true,
              explain: L(
                "Yes — a single trader controlled the price, which was unfair to farmers.",
                "हाँ — एक अकेला व्यापारी कीमत तय करता था, जो किसानों के लिए अन्यायपूर्ण था।"
              ),
            },
            {
              topicId: "t-amul",
              type: "mcq",
              q: L("The biggest benefit of a cooperative like Amul is that:", "अमूल जैसी सहकारी समिति का सबसे बड़ा फायदा यह है कि:"),
              options: [
                L("A trader still controls the price", "एक व्यापारी अभी भी कीमत तय करता है"),
                L("Farmers own the business and share the profit", "किसान व्यापार के मालिक होते हैं और मुनाफ़ा बाँटते हैं"),
                L("Only the government profits", "सिर्फ सरकार को फायदा होता है"),
                L("Milk becomes free", "दूध मुफ्त हो जाता है"),
              ],
              answer: 1,
              explain: L(
                "In a cooperative, the farmers themselves are the owners and share the profit.",
                "एक सहकारी समिति में, किसान खुद मालिक होते हैं और मुनाफ़ा बाँटते हैं।"
              ),
            },
            {
              topicId: "t-operation-flood",
              type: "mcq",
              q: L(
                "Who led NDDB and is known as the 'Father of the White Revolution'?",
                "NDDB का नेतृत्व किसने किया और उन्हें 'श्वेत क्रांति के जनक' के रूप में जाना जाता है?"
              ),
              options: [
                L("Sardar Patel", "सरदार पटेल"),
                L("Dr. Verghese Kurien", "डॉ. वर्गीस कुरियन"),
                L("Dr. Y.K. Alagh", "डॉ. वाई.के. अलघ"),
                L("Mahatma Gandhi", "महात्मा गांधी"),
              ],
              answer: 1,
              explain: L(
                "Dr. Verghese Kurien led NDDB and is called the Father of the White Revolution.",
                "डॉ. वर्गीस कुरियन ने NDDB का नेतृत्व किया और उन्हें श्वेत क्रांति का जनक कहा जाता है।"
              ),
            },
          ],
        },
      },
      // ==================================================================
      // LESSON 5
      // ==================================================================
      {
        id: "m1-l5",
        title: L("NDDB and How a Cooperative Works", "NDDB और एक सहकारी समिति कैसे काम करती है"),
        estMinutes: 7,
        hook: [
          {
            type: "hero",
            heading: L("How the Cooperative Family Works", "सहकारी परिवार कैसे काम करता है"),
            text: L(
              "You've heard about NDDB and Amul. Now let's see exactly how a cooperative is organised, from your village up to the whole state.",
              "आपने NDDB और अमूल के बारे में सुना है। अब देखते हैं कि आपके गाँव से लेकर पूरे राज्य तक एक सहकारी समिति ठीक कैसे संगठित होती है।"
            ),
          },
        ],
        topics: [
          {
            id: "t-nddb",
            title: L("What is NDDB?", "NDDB क्या है?"),
            teach: [
              {
                type: "text",
                heading: L("NDDB — The Organisation Behind the Movement", "NDDB — इस आंदोलन के पीछे की संस्था"),
                html: L(
                  "NDDB (National Dairy Development Board) was started in 1965 to help farmers all over India build cooperatives like Amul. It is based in Anand, Gujarat — the same town where Amul began.",
                  "NDDB (राष्ट्रीय डेयरी विकास बोर्ड) की शुरुआत 1965 में पूरे भारत के किसानों को अमूल जैसी सहकारी समितियाँ बनाने में मदद करने के लिए हुई थी। इसका मुख्यालय गुजरात के आणंद में है — वही शहर जहाँ अमूल की शुरुआत हुई थी।"
                ),
              },
              {
                type: "text",
                heading: L("Dr. Verghese Kurien", "डॉ. वर्गीस कुरियन"),
                html: L(
                  "Dr. Kurien led NDDB for many years. People call him the <b>'Milkman of India'</b> because of everything he did to help farmers earn a fair, steady income from milk.",
                  "डॉ. कुरियन ने कई सालों तक NDDB का नेतृत्व किया। किसानों को दूध से न्यायपूर्ण, स्थिर आय दिलाने के लिए उन्होंने जो कुछ किया, उसी वजह से लोग उन्हें <b>'भारत के मिल्कमैन'</b> कहते हैं।"
                ),
              },
            ],
            check: [
              {
                type: "mcq",
                q: L("Where is NDDB based?", "NDDB का मुख्यालय कहाँ है?"),
                options: [L("New Delhi", "नई दिल्ली"), L("Mumbai", "मुंबई"), L("Anand, Gujarat", "आणंद, गुजरात"), L("Chennai", "चेन्नई")],
                answer: 2,
                explain: L("NDDB is headquartered in Anand, Gujarat.", "NDDB का मुख्यालय गुजरात के आणंद में है।"),
              },
              {
                type: "mcq",
                q: L("Dr. Verghese Kurien is known as:", "डॉ. वर्गीस कुरियन को इस नाम से जाना जाता है:"),
                options: [
                  L("The Milkman of India", "भारत के मिल्कमैन"),
                  L("The first Prime Minister", "पहले प्रधानमंत्री"),
                  L("A private milk trader", "एक निजी दूध व्यापारी"),
                  L("A bank manager", "एक बैंक मैनेजर"),
                ],
                answer: 0,
                explain: L("Dr. Kurien is known as the 'Milkman of India'.", "डॉ. कुरियन को 'भारत के मिल्कमैन' के रूप में जाना जाता है।"),
              },
            ],
          },
          {
            id: "t-structure",
            title: L("The Three Steps of a Cooperative", "एक सहकारी समिति के तीन चरण"),
            teach: [
              {
                type: "text",
                heading: L("From Your Village to the Whole State", "आपके गाँव से पूरे राज्य तक"),
                html: L(
                  "A dairy cooperative works in 3 simple steps — like 3 floors of a building.",
                  "एक डेयरी सहकारी समिति 3 आसान चरणों में काम करती है — किसी इमारत की 3 मंज़िलों की तरह।"
                ),
              },
              {
                type: "stat-grid",
                items: [
                  {
                    label: L("1. Village Society", "1. ग्राम समिति"),
                    text: L(
                      "Farmers in one village bring their milk here every day. The ground floor — closest to the farmer.",
                      "एक गाँव के किसान हर दिन अपना दूध यहाँ लाते हैं। यह ज़मीनी मंज़िल है — किसान के सबसे करीब।"
                    ),
                  },
                  {
                    label: L("2. District Union", "2. ज़िला संघ"),
                    text: L(
                      "Many Village Societies in a district join together here. Milk from many villages is collected and processed.",
                      "एक ज़िले की कई ग्राम समितियाँ यहाँ आकर जुड़ती हैं। कई गाँवों का दूध यहाँ इकट्ठा होकर प्रोसेस किया जाता है।"
                    ),
                  },
                  {
                    label: L("3. State Federation", "3. राज्य महासंघ"),
                    text: L(
                      "All the District Unions in a state join together here, and sell milk and milk products (like Amul does) to customers everywhere.",
                      "एक राज्य के सभी ज़िला संघ यहाँ आकर जुड़ते हैं, और दूध व दूध उत्पाद (जैसे अमूल करता है) हर जगह के ग्राहकों को बेचते हैं।"
                    ),
                  },
                ],
              },
              {
                type: "callout",
                style: "info",
                heading: L("Why This Matters to You", "यह आपके लिए क्यों ज़रूरी है"),
                text: L(
                  "This is the same three-step model behind the MPPs (Milk Pooling Points) you will help form and run in later training. You are joining a system that has worked for over 75 years.",
                  "यही तीन-चरण मॉडल MPP (मिल्क पूलिंग पॉइंट) के पीछे भी है, जिन्हें बनाने और चलाने में आप आगे की ट्रेनिंग में मदद करेंगे। आप एक ऐसी व्यवस्था से जुड़ रहे हैं जो 75 सालों से ज़्यादा समय से काम कर रही है।"
                ),
              },
            ],
            check: [
              {
                type: "mcq",
                q: L(
                  "What is the first, ground-floor step of a dairy cooperative?",
                  "एक डेयरी सहकारी समिति का पहला, ज़मीनी मंज़िल वाला चरण क्या है?"
                ),
                options: [L("State Federation", "राज्य महासंघ"), L("District Union", "ज़िला संघ"), L("Village Society", "ग्राम समिति"), L("NDDB", "NDDB")],
                answer: 2,
                explain: L("The Village Society is the first step, closest to the farmer.", "ग्राम समिति पहला चरण है, जो किसान के सबसे करीब है।"),
              },
              {
                type: "mcq",
                q: L(
                  "Which comes right after the Village Society in the cooperative structure?",
                  "सहकारी समिति की संरचना में ग्राम समिति के ठीक बाद क्या आता है?"
                ),
                options: [
                  L("State Federation", "राज्य महासंघ"),
                  L("District Union", "ज़िला संघ"),
                  L("NDDB office", "NDDB कार्यालय"),
                  L("Nothing, it ends there", "कुछ नहीं, यहीं खत्म हो जाता है"),
                ],
                answer: 1,
                explain: L("District Union comes next, joining many village societies.", "इसके बाद ज़िला संघ आता है, जो कई ग्राम समितियों को जोड़ता है।"),
              },
            ],
          },
        ],
        finalQuiz: {
          passScore: 70,
          questions: [
            {
              topicId: "t-nddb",
              type: "mcq",
              q: L("NDDB was formed in which year?", "NDDB की स्थापना किस साल हुई थी?"),
              options: [L("1946", "1946"), L("1965", "1965"), L("1991", "1991"), L("2009", "2009")],
              answer: 1,
              explain: L("NDDB was formed in 1965.", "NDDB की स्थापना 1965 में हुई थी।"),
            },
            {
              topicId: "t-structure",
              type: "mcq",
              q: L(
                "Which comes right after the Village Society in the cooperative structure?",
                "सहकारी समिति की संरचना में ग्राम समिति के ठीक बाद क्या आता है?"
              ),
              options: [
                L("State Federation", "राज्य महासंघ"),
                L("District Union", "ज़िला संघ"),
                L("NDDB office", "NDDB कार्यालय"),
                L("Nothing, it ends there", "कुछ नहीं, यहीं खत्म हो जाता है"),
              ],
              answer: 1,
              explain: L("District Union comes next, joining many village societies.", "इसके बाद ज़िला संघ आता है, जो कई ग्राम समितियों को जोड़ता है।"),
            },
          ],
        },
      },
      // ==================================================================
      // LESSON 6 — CASE STUDY (module capstone)
      // ==================================================================
      {
        id: "m1-l6",
        title: L("Real Story: Ramesh and Sita's Dairy Journey", "सच्ची कहानी: रमेश और सीता की डेयरी यात्रा"),
        estMinutes: 12,
        hook: [
          {
            type: "hero",
            heading: L("Real Story: Ramesh & Sita", "सच्ची कहानी: रमेश और सीता"),
            text: L(
              "Everything you've learned so far comes to life in this real story of one family. Let's follow their journey step by step.",
              "अब तक आपने जो कुछ सीखा है, वह इस एक परिवार की सच्ची कहानी में जीवंत हो उठता है। आइए उनकी यात्रा को चरण दर चरण देखें।"
            ),
          },
        ],
        topics: [
          {
            id: "t-city-struggle",
            title: L("Life in the City", "शहर में ज़िंदगी"),
            teach: [
              {
                type: "text",
                heading: L("Meet Ramesh and Sita", "रमेश और सीता से मिलिए"),
                html: L(
                  "Ramesh and Sita lived in a small village called Rampur in Uttar Pradesh. About five years ago, they moved to a big city looking for better work. Ramesh worked as a daily-wage labourer on construction sites. Sita worked cleaning houses. They lived in one small rented room with their 2-year-old son, Chintu.",
                  "रमेश और सीता उत्तर प्रदेश के रामपुर नाम के एक छोटे गाँव में रहते थे। लगभग पाँच साल पहले, बेहतर काम की तलाश में वे एक बड़े शहर में चले गए। रमेश निर्माण स्थलों पर दिहाड़ी मज़दूर के रूप में काम करता था। सीता घरों की सफाई का काम करती थी। वे अपने 2 साल के बेटे चिंटू के साथ एक छोटे किराए के कमरे में रहते थे।"
                ),
              },
              {
                type: "poll",
                heading: L("What Do You Think?", "आपको क्या लगता है?"),
                questions: [
                  {
                    q: L(
                      "Do you think Ramesh and Sita found it easy to save money in the city?",
                      "क्या आपको लगता है कि रमेश और सीता के लिए शहर में पैसे बचाना आसान था?"
                    ),
                    options: [L("Yes, easily", "हाँ, आसानी से"), L("No, it was hard", "नहीं, मुश्किल था")],
                    answer: 1,
                    reveal: L("Let's find out exactly why, in the numbers below.", "नीचे दिए आँकड़ों में देखते हैं कि ऐसा ठीक क्यों था।"),
                  },
                ],
              },
              {
                type: "stat-grid",
                items: [
                  {
                    label: L("Their income", "उनकी आय"),
                    text: L(
                      "Together they earned about ₹18,000 to ₹22,000 a month — but only on days they found work.",
                      "मिलाकर वे महीने में लगभग ₹18,000 से ₹22,000 कमाते थे — लेकिन सिर्फ उन दिनों में जब उन्हें काम मिलता था।"
                    ),
                  },
                  {
                    label: L("Their expenses", "उनके खर्च"),
                    text: L(
                      "Most of that money went to room rent, electricity, travel and doctor visits — leaving almost nothing to save.",
                      "उस पैसे का ज़्यादातर हिस्सा कमरे के किराए, बिजली, यात्रा और डॉक्टर के पास जाने में चला जाता था — बचाने के लिए लगभग कुछ नहीं बचता था।"
                    ),
                  },
                  {
                    label: L("Their struggle", "उनका संघर्ष"),
                    text: L(
                      "Little Chintu often fell sick because of the crowded, polluted place they lived in.",
                      "जिस भीड़भाड़ और प्रदूषण वाली जगह में वे रहते थे, उसकी वजह से छोटा चिंटू अक्सर बीमार पड़ जाता था।"
                    ),
                  },
                ],
              },
              {
                type: "callout",
                style: "warning",
                heading: L("A Hard Truth", "एक कठोर सच्चाई"),
                text: L(
                  "Even though Ramesh and Sita worked hard every single day, they could not save money or improve their life. This is a common story for many families who leave their villages for city work.",
                  "रमेश और सीता हर दिन कड़ी मेहनत करते थे, फिर भी वे न तो पैसे बचा पाते थे और न अपनी ज़िंदगी बेहतर बना पाते थे। शहर में काम के लिए अपने गाँव छोड़ने वाले कई परिवारों की यह एक आम कहानी है।"
                ),
              },
            ],
            check: [
              {
                type: "mcq",
                q: L("Why couldn't Ramesh and Sita save money in the city?", "रमेश और सीता शहर में पैसे क्यों नहीं बचा पाए?"),
                options: [
                  L("They didn't want to save", "वे बचाना नहीं चाहते थे"),
                  L("Most of their income went to rent, bills and daily costs", "उनकी ज़्यादातर आय किराए, बिलों और रोज़ के खर्च में चली जाती थी"),
                  L("They earned too much money", "वे बहुत ज़्यादा पैसे कमाते थे"),
                  L("They didn't work hard", "उन्होंने मेहनत नहीं की"),
                ],
                answer: 1,
                explain: L(
                  "Rent, bills, travel and healthcare costs used up almost all of their income, leaving little to save.",
                  "किराए, बिलों, यात्रा और स्वास्थ्य के खर्च ने उनकी लगभग सारी आय खत्म कर दी, बचाने के लिए बहुत कम बचा।"
                ),
              },
              {
                type: "truefalse",
                q: L(
                  "Ramesh and Sita were financially comfortable and stress-free in the city.",
                  "रमेश और सीता शहर में आर्थिक रूप से सुखी और तनाव-मुक्त थे।"
                ),
                answer: false,
                explain: L(
                  "They were always under money stress, and their son was often sick.",
                  "वे हमेशा पैसों के तनाव में रहते थे, और उनका बेटा अक्सर बीमार रहता था।"
                ),
              },
            ],
          },
          {
            id: "t-coming-home",
            title: L("A New Chance Back Home", "घर वापसी में एक नया मौका"),
            teach: [
              {
                type: "text",
                heading: L("A Visit That Changed Everything", "एक मुलाक़ात जिसने सब कुछ बदल दिया"),
                html: L(
                  "In 2026, Ramesh and Sita went back to Rampur for a family wedding. They noticed something new — their village now had a Milk Pooling Point (MPP), run by a Milk Producer Organisation (MPO).",
                  "2026 में, रमेश और सीता एक पारिवारिक शादी के लिए रामपुर वापस गए। उन्होंने कुछ नया देखा — उनके गाँव में अब एक मिल्क प्रोड्यूसर ऑर्गेनाइज़ेशन (MPO) द्वारा चलाया जाने वाला मिल्क पूलिंग पॉइंट (MPP) था।"
                ),
              },
              {
                type: "glossary",
                term: L("MPP (Milk Pooling Point)", "MPP (मिल्क पूलिंग पॉइंट)"),
                meaning: L(
                  "A place in the village where farmers bring their milk every day. It is checked for quality and farmers get paid a fair price, on time.",
                  "गाँव में वह जगह जहाँ किसान हर दिन अपना दूध लाते हैं। इसकी गुणवत्ता जाँची जाती है और किसानों को समय पर न्यायपूर्ण कीमत मिलती है।"
                ),
              },
              {
                type: "text",
                heading: L("What the MPP Offered", "MPP ने क्या दिया"),
                html: L(
                  "The MPP collected milk twice a day. It tested milk quality fairly, in front of the farmer. And most importantly — it paid farmers on time, every time. Several farmers told Ramesh that dairy had become their most reliable source of income.",
                  "MPP दिन में दो बार दूध इकट्ठा करता था। यह किसान के सामने ही निष्पक्ष रूप से दूध की गुणवत्ता जाँचता था। और सबसे ज़रूरी बात — यह किसानों को हर बार समय पर पैसे देता था। कई किसानों ने रमेश को बताया कि डेयरी उनकी सबसे भरोसेमंद आय का ज़रिया बन गई है।"
                ),
              },
              {
                type: "text",
                heading: L("Getting Expert Advice", "विशेषज्ञ की सलाह लेना"),
                html: L(
                  "Ramesh and Sita owned 1.5 acres of land. Before jumping in, they visited the local Krishi Vigyan Kendra (KVK) — a government farm-advice centre — and met dairy expert Dr. Anil Sharma.",
                  "रमेश और सीता के पास 1.5 एकड़ ज़मीन थी। इसमें उतरने से पहले, वे स्थानीय कृषि विज्ञान केंद्र (KVK) — एक सरकारी कृषि सलाह केंद्र — गए और डेयरी विशेषज्ञ डॉ. अनिल शर्मा से मिले।"
                ),
              },
              {
                type: "glossary",
                term: L("KVK (Krishi Vigyan Kendra)", "KVK (कृषि विज्ञान केंद्र)"),
                meaning: L(
                  "A government centre in most districts where farmers can get free expert advice on farming and animal care.",
                  "ज़्यादातर ज़िलों में एक सरकारी केंद्र, जहाँ किसान खेती और पशु देखभाल पर मुफ्त विशेषज्ञ सलाह ले सकते हैं।"
                ),
              },
              {
                type: "stat-grid",
                items: [
                  {
                    label: L("Treat it as a business", "इसे एक व्यापार की तरह देखें"),
                    text: L(
                      "Dr. Sharma's first advice: don't treat dairy as just a household chore — treat it like a real business, with planning.",
                      "डॉ. शर्मा की पहली सलाह: डेयरी को सिर्फ घर के काम की तरह न देखें — इसे योजना के साथ एक असली व्यापार की तरह चलाएँ।"
                    ),
                  },
                  {
                    label: L("Choose the right animal", "सही पशु चुनें"),
                    text: L(
                      "He suggested local breeds like Gir or Sahiwal cows — they handle local weather well and resist disease better.",
                      "उन्होंने गिर या साहीवाल जैसी स्थानीय नस्लों की गायें सुझाईं — ये स्थानीय मौसम को अच्छी तरह झेलती हैं और बीमारियों से बेहतर बचती हैं।"
                    ),
                  },
                  {
                    label: L("Balanced feed = more milk", "संतुलित आहार = ज़्यादा दूध"),
                    text: L(
                      "He explained that giving animals a mix of feed, green fodder, dry fodder, minerals and calcium every day is the single biggest key to good milk production.",
                      "उन्होंने समझाया कि पशुओं को हर दिन दाना, हरा चारा, सूखा चारा, खनिज और कैल्शियम का मिश्रण देना अच्छे दूध उत्पादन की सबसे बड़ी कुंजी है।"
                    ),
                  },
                ],
              },
            ],
            check: [
              {
                type: "mcq",
                q: L("What is an MPP?", "MPP क्या है?"),
                options: [
                  L("A bank", "एक बैंक"),
                  L(
                    "A place in the village where farmers sell milk daily at a fair price",
                    "गाँव में वह जगह जहाँ किसान रोज़ न्यायपूर्ण कीमत पर दूध बेचते हैं"
                  ),
                  L("A type of cow", "एक प्रकार की गाय"),
                  L("A government tax", "एक सरकारी कर"),
                ],
                answer: 1,
                explain: L(
                  "An MPP (Milk Pooling Point) is where farmers bring milk daily and get paid fairly and on time.",
                  "MPP (मिल्क पूलिंग पॉइंट) वह जगह है जहाँ किसान रोज़ दूध लाते हैं और न्यायपूर्ण, समय पर भुगतान पाते हैं।"
                ),
              },
              {
                type: "mcq",
                q: L(
                  "According to Dr. Sharma, what is the biggest key to more milk production?",
                  "डॉ. शर्मा के अनुसार, ज़्यादा दूध उत्पादन की सबसे बड़ी कुंजी क्या है?"
                ),
                options: [
                  L("Buying the most expensive cow", "सबसे महंगी गाय खरीदना"),
                  L("Balanced, regular feed", "संतुलित, नियमित आहार"),
                  L("Never visiting the vet", "पशु चिकित्सक के पास कभी न जाना"),
                  L("Keeping animals hungry", "पशुओं को भूखा रखना"),
                ],
                answer: 1,
                explain: L(
                  "A balanced diet — feed, fodder, minerals and calcium — is the biggest key to good milk production.",
                  "संतुलित आहार — दाना, चारा, खनिज और कैल्शियम — अच्छे दूध उत्पादन की सबसे बड़ी कुंजी है।"
                ),
              },
            ],
          },
          {
            id: "t-money-story",
            title: L("The Money Story — Year 1", "पैसों की कहानी — वर्ष 1"),
            teach: [
              {
                type: "text",
                heading: L("Starting the Business", "व्यापार शुरू करना"),
                html: L(
                  "Ramesh and Sita had saved ₹1,50,000 from their years of city work. They decided to use it to start their dairy business.",
                  "रमेश और सीता ने अपने शहर के काम के सालों से ₹1,50,000 बचाए थे। उन्होंने इसे अपना डेयरी व्यापार शुरू करने में लगाने का फैसला किया।"
                ),
              },
              {
                type: "ledger",
                heading: L("What It Cost to Start (Capital Expenditure)", "शुरू करने में कितना खर्च आया (पूंजीगत व्यय)"),
                rows: [
                  { label: L("One milking cow", "एक दुधारू गाय"), amount: "₹60,000" },
                  { label: L("Shed for the animal", "पशु के लिए शेड"), amount: "₹40,000" },
                  { label: L("Buckets, cans & equipment", "बाल्टी, केन और उपकरण"), amount: "₹20,000" },
                  { label: L("Starting working capital", "शुरुआती कार्यशील पूंजी"), amount: "₹20,000" },
                ],
                total: { label: L("Total needed", "कुल ज़रूरत"), amount: "₹1,40,000" },
              },
              {
                type: "callout",
                style: "tip",
                heading: L("The Plan", "योजना"),
                text: L(
                  "They had ₹1,50,000 saved and needed ₹1,40,000 — leaving ₹10,000 spare. They decided to buy just ONE cow first, and buy a second cow later using the money the first cow earns.",
                  "उनके पास ₹1,50,000 की बचत थी और ₹1,40,000 चाहिए थे — ₹10,000 बचा रह गए। उन्होंने पहले सिर्फ एक गाय खरीदने का फैसला किया, और पहली गाय की कमाई से बाद में दूसरी गाय खरीदने का।"
                ),
              },
              {
                type: "text",
                heading: L("Let's Do the Maths Together", "आइए साथ में गणित करें"),
                html: L(
                  "Their cow gave 11 litres of milk a day. The MPP paid ₹42 for every litre. For the first 180 days: 11 litres × 180 days = 1,980 litres. Then, 1,980 litres × ₹42 = ₹83,160 earned!",
                  "उनकी गाय एक दिन में 11 लीटर दूध देती थी। MPP हर लीटर के ₹42 देता था। पहले 180 दिनों के लिए: 11 लीटर × 180 दिन = 1,980 लीटर। फिर, 1,980 लीटर × ₹42 = ₹83,160 की कमाई!"
                ),
              },
              {
                type: "example",
                heading: L("Try It Yourself", "खुद कोशिश कीजिए"),
                text: L(
                  "If the same cow gives milk for another 120 days at the same rate (11 litres/day), that's 11 × 120 = 1,320 litres, worth 1,320 × ₹42 = ₹55,440 more. Adding it up: ₹83,160 + ₹55,440 = ₹1,38,600 from ONE cow in a year!",
                  "अगर वही गाय उसी दर (11 लीटर/दिन) से 120 दिन और दूध दे, तो यह 11 × 120 = 1,320 लीटर होता है, जिसकी कीमत 1,320 × ₹42 = ₹55,440 ज़्यादा है। जोड़ने पर: ₹83,160 + ₹55,440 = ₹1,38,600 — सिर्फ एक गाय से एक साल में!"
                ),
              },
              {
                type: "ledger",
                heading: L("Year 1: Full Result", "वर्ष 1: पूरा नतीजा"),
                rows: [
                  { label: L("Total income from milk sales", "दूध बिक्री से कुल आय"), amount: "₹2,21,760" },
                  { label: L("Total yearly running costs (feed, health, etc.)", "कुल वार्षिक चालू खर्च (आहार, स्वास्थ्य आदि)"), amount: "₹96,000" },
                ],
                total: { label: L("Net profit (savings)", "शुद्ध लाभ (बचत)"), amount: "₹1,25,760" },
              },
              {
                type: "callout",
                style: "info",
                heading: L("That's More Than Half!", "यह आधे से भी ज़्यादा है!"),
                text: L(
                  "Ramesh and Sita kept more than 56 out of every 100 rupees they earned as pure profit — because they did the daily care themselves and grew some of their own green fodder on their land.",
                  "रमेश और सीता ने अपनी कमाई के हर 100 रुपयों में से 56 से ज़्यादा को शुद्ध लाभ के रूप में रखा — क्योंकि वे रोज़ की देखभाल खुद करते थे और अपनी ज़मीन पर कुछ हरा चारा खुद उगाते थे।"
                ),
              },
            ],
            check: [
              {
                type: "mcq",
                q: L(
                  "If a cow gives 10 litres of milk a day for 10 days, and each litre sells for ₹42, how much money is that in total?",
                  "अगर एक गाय 10 दिनों तक रोज़ 10 लीटर दूध देती है, और हर लीटर ₹42 में बिकता है, तो कुल कितना पैसा हुआ?"
                ),
                options: ["₹420", "₹4,200", "₹42,000", "₹840"].map((s) => L(s, s)),
                answer: 1,
                explain: L("10 litres × 10 days = 100 litres. 100 litres × ₹42 = ₹4,200.", "10 लीटर × 10 दिन = 100 लीटर। 100 लीटर × ₹42 = ₹4,200।"),
              },
              {
                type: "mcq",
                q: L(
                  "In Year 1, what share of Ramesh and Sita's milk income was kept as net profit?",
                  "वर्ष 1 में, रमेश और सीता की दूध आय का कितना हिस्सा शुद्ध लाभ के रूप में रखा गया?"
                ),
                options: [L("About 10%", "लगभग 10%"), L("About 25%", "लगभग 25%"), L("More than 56%", "56% से ज़्यादा"), L("100%", "100%")],
                answer: 2,
                explain: L(
                  "They kept more than 56% of their income as profit — ₹1,25,760 out of ₹2,21,760.",
                  "उन्होंने अपनी आय का 56% से ज़्यादा लाभ के रूप में रखा — ₹2,21,760 में से ₹1,25,760।"
                ),
              },
            ],
          },
          {
            id: "t-expansion",
            title: L("A Big Decision — Should They Grow?", "एक बड़ा फैसला — क्या उन्हें बढ़ना चाहिए?"),
            teach: [
              {
                type: "text",
                heading: L("Year 2: Thinking Bigger", "वर्ष 2: बड़ा सोचना"),
                html: L(
                  "After a successful first year, Ramesh and Sita considered buying 2 more cows — growing from 2 to 4 animals. Since they already had the shed and equipment, they would only need to spend on 2 new cows and some extra working capital: about ₹1,40,000 in total, paid fully from their Year 1 savings — no loan needed.",
                  "पहले सफल साल के बाद, रमेश और सीता ने 2 और गायें खरीदने पर विचार किया — 2 से 4 पशुओं तक बढ़ना। चूँकि उनके पास पहले से शेड और उपकरण थे, इसलिए उन्हें सिर्फ 2 नई गायों और कुछ अतिरिक्त कार्यशील पूंजी पर खर्च करना था: कुल मिलाकर लगभग ₹1,40,000, जो पूरी तरह उनके वर्ष 1 की बचत से चुकाया गया — किसी ऋण की ज़रूरत नहीं पड़ी।"
                ),
              },
              {
                type: "ledger",
                heading: L("Year 2: The Projected Numbers", "वर्ष 2: अनुमानित आँकड़े"),
                rows: [
                  { label: L("Projected income (4 cows)", "अनुमानित आय (4 गायें)"), amount: "₹5,54,400" },
                  { label: L("Projected yearly running costs", "अनुमानित वार्षिक चालू खर्च"), amount: "₹2,25,000" },
                ],
                total: { label: L("Projected net profit", "अनुमानित शुद्ध लाभ"), amount: "₹3,29,400" },
              },
              {
                type: "callout",
                style: "tip",
                heading: L("That's About ₹27,450 Every Month", "यह लगभग हर महीने ₹27,450 है"),
                text: L(
                  "If things go as planned, this is more than the total combined income Ramesh and Sita earned doing daily-wage work in the city — and this time, they are their own boss, living at home with their family.",
                  "अगर सब योजना के अनुसार हुआ, तो यह रमेश और सीता की शहर में दिहाड़ी मज़दूरी से मिलने वाली कुल मिली-जुली आय से भी ज़्यादा है — और इस बार, वे खुद अपने मालिक हैं, अपने परिवार के साथ घर पर रह रहे हैं।"
                ),
              },
              {
                type: "text",
                heading: L("But Is It Risk-Free?", "लेकिन क्या यह जोखिम-मुक्त है?"),
                html: L(
                  "Before deciding, Ramesh and Sita thought about what could go wrong: What if the milk price drops? What if feed becomes more costly? What if an animal falls sick? More animals also means more daily work and care.",
                  "फैसला करने से पहले, रमेश और सीता ने सोचा कि क्या गलत हो सकता है: अगर दूध की कीमत गिर जाए तो? अगर आहार महंगा हो जाए तो? अगर कोई पशु बीमार पड़ जाए तो? ज़्यादा पशुओं का मतलब है ज़्यादा रोज़ का काम और देखभाल भी।"
                ),
              },
              {
                type: "callout",
                style: "warning",
                heading: L("Growing a Business Always Has Risk", "व्यापार बढ़ाने में हमेशा जोखिम होता है"),
                text: L(
                  "More cows can mean more profit — but only if feed costs stay reasonable, milk prices hold steady, and all animals stay healthy. A good farmer plans for these risks instead of ignoring them.",
                  "ज़्यादा गायों का मतलब ज़्यादा मुनाफ़ा हो सकता है — लेकिन तभी जब आहार की कीमत उचित रहे, दूध की कीमतें स्थिर रहें, और सभी पशु स्वस्थ रहें। एक अच्छा किसान इन जोखिमों को नज़रअंदाज़ करने के बजाय इनके लिए योजना बनाता है।"
                ),
              },
            ],
            check: [
              {
                type: "mcq",
                q: L(
                  "What is a real risk Ramesh and Sita should think about before adding 2 more cows?",
                  "2 और गायें जोड़ने से पहले रमेश और सीता को किस असली जोखिम के बारे में सोचना चाहिए?"
                ),
                options: [
                  L("Milk price and feed costs could change unfavourably", "दूध की कीमत और आहार खर्च प्रतिकूल रूप से बदल सकते हैं"),
                  L("There are absolutely no risks at all", "कोई भी जोखिम बिल्कुल नहीं है"),
                  L("Cows never get sick", "गायें कभी बीमार नहीं पड़तीं"),
                  L("More cows always cost less to keep", "ज़्यादा गायें पालने में हमेशा कम खर्च आता है"),
                ],
                answer: 0,
                explain: L(
                  "Milk prices could fall or feed costs could rise — real risks that could reduce the expected profit.",
                  "दूध की कीमतें गिर सकती हैं या आहार की कीमतें बढ़ सकती हैं — यह असली जोखिम हैं जो अनुमानित मुनाफ़े को कम कर सकते हैं।"
                ),
              },
              {
                type: "truefalse",
                q: L(
                  "Because Year 1 went well, expanding in Year 2 is completely guaranteed to succeed with no risk.",
                  "क्योंकि वर्ष 1 अच्छा गया, इसलिए वर्ष 2 में विस्तार बिना किसी जोखिम के पूरी तरह सफल होने की गारंटी है।"
                ),
                answer: false,
                explain: L(
                  "Even a successful business has risks — prices, costs and animal health can all change. Good planning matters.",
                  "सफल व्यापार में भी जोखिम होते हैं — कीमतें, खर्च और पशुओं का स्वास्थ्य सब बदल सकते हैं। अच्छी योजना ज़रूरी है।"
                ),
              },
            ],
          },
        ],
        finalQuiz: {
          passScore: 70,
          isFinal: true,
          questions: [
            {
              topicId: "t-city-struggle",
              type: "mcq",
              q: L(
                "What was the biggest problem with Ramesh and Sita's life in the city?",
                "शहर में रमेश और सीता की ज़िंदगी की सबसे बड़ी समस्या क्या थी?"
              ),
              options: [
                L("They earned too much money", "वे बहुत ज़्यादा पैसे कमाते थे"),
                L("Little to no savings despite hard work every day", "हर दिन कड़ी मेहनत के बावजूद बचत न के बराबर"),
                L("They had too much free time", "उनके पास बहुत ज़्यादा खाली समय था"),
                L("They didn't like their son", "उन्हें अपना बेटा पसंद नहीं था"),
              ],
              answer: 1,
              explain: L(
                "Despite working every day, they could barely save anything after rent, bills and other costs.",
                "हर दिन काम करने के बावजूद, किराए, बिलों और अन्य खर्चों के बाद वे शायद ही कुछ बचा पाते थे।"
              ),
            },
            {
              topicId: "t-coming-home",
              type: "mcq",
              q: L("What made the MPP valuable to village farmers?", "MPP गाँव के किसानों के लिए किस वजह से मूल्यवान था?"),
              options: [
                L("It gave loans only", "यह सिर्फ ऋण देता था"),
                L("It offered fair testing and reliable, on-time payment for milk", "यह दूध की निष्पक्ष जाँच और भरोसेमंद, समय पर भुगतान देता था"),
                L("It sold cows", "यह गायें बेचता था"),
                L("It replaced the KVK", "इसने KVK की जगह ले ली"),
              ],
              answer: 1,
              explain: L(
                "The MPP tested milk fairly and paid farmers reliably and on time — a dependable market.",
                "MPP दूध की निष्पक्ष जाँच करता था और किसानों को भरोसे के साथ, समय पर भुगतान करता था — एक भरोसेमंद बाज़ार।"
              ),
            },
            {
              topicId: "t-money-story",
              type: "mcq",
              q: L(
                "In Year 1, what was Ramesh and Sita's net profit from their dairy business?",
                "वर्ष 1 में, रमेश और सीता का उनके डेयरी व्यापार से शुद्ध लाभ कितना था?"
              ),
              options: ["₹10,000", "₹96,000", "₹1,25,760", "₹2,21,760"].map((s) => L(s, s)),
              answer: 2,
              explain: L("Net profit = ₹2,21,760 income − ₹96,000 costs = ₹1,25,760.", "शुद्ध लाभ = ₹2,21,760 आय − ₹96,000 खर्च = ₹1,25,760।"),
            },
            {
              topicId: "t-expansion",
              type: "mcq",
              q: L(
                "Before expanding to 4 cows, what should Ramesh and Sita carefully plan for?",
                "4 गायों तक विस्तार करने से पहले, रमेश और सीता को किस चीज़ के लिए सावधानी से योजना बनानी चाहिए?"
              ),
              options: [
                L("Nothing, expansion has no downside", "कुछ नहीं, विस्तार में कोई नुकसान नहीं है"),
                L("Possible changes in milk price and feed cost", "दूध की कीमत और आहार खर्च में संभावित बदलाव"),
                L("Selling their existing cow", "अपनी मौजूदा गाय को बेचना"),
                L("Moving back to the city", "वापस शहर जाना"),
              ],
              answer: 1,
              explain: L(
                "Smart expansion means planning for risks like changing milk prices and feed costs.",
                "समझदारी भरे विस्तार का मतलब है दूध की कीमतों और आहार खर्च में बदलाव जैसे जोखिमों के लिए योजना बनाना।"
              ),
            },
          ],
        },
      },
    ],
  },
  {
    "id": "m2",
    "number": 2,
    "title": L("Rationale of MPO", "MPO का औचित्य"),
    "subtitle": L(
      "Understand why the MPO model exists, how it is different from the old cooperative system, and how it is organised — from the farmer with a milk can all the way to the Board of Directors.",
      "जानिए MPO मॉडल क्यों बना है, यह पुरानी सहकारी व्यवस्था से कैसे अलग है, और यह कैसे संगठित है — दूध के कैन वाले किसान से लेकर निदेशक मंडल तक।"
    ),
    "icon": "milk",
    "available": true,
    "lessons": [
      {
        "id": "m2-l1",
        "title": L("Why the MPO Model Was Born", "MPO मॉडल क्यों बना"),
        "estMinutes": 8,
        "hook": [
          {
            "type": "hero",
            "heading": L("Why the MPO Model Was Born", "MPO मॉडल क्यों बना"),
            "text": L(
              "You already know about Amul and cooperatives. Now let's learn about a newer idea — the MPO — and why it came about.",
              "आप अमूल और सहकारी समितियों के बारे में जानते ही हैं। अब आइए एक नए विचार — MPO — के बारे में सीखें और जानें कि यह क्यों बना।"
            )
          }
        ],
        "topics": [
          {
            "id": "t-what-is-mpo",
            "title": L("What Is an MPO?", "MPO क्या है?"),
            "teach": [
              {
                "type": "text",
                "heading": L("A New Word: MPO", "एक नया शब्द: MPO"),
                "html": L(
                  "<b>MPO</b> stands for <b>Milk Producer Organisation</b>. It is a company that is formed and owned by dairy farmers themselves — built to collect their milk, pay them fairly, and grow their business together.",
                  "<b>MPO</b> का मतलब है <b>मिल्क प्रोड्यूसर ऑर्गेनाइज़ेशन</b>। यह एक ऐसी कंपनी है जिसे डेयरी किसान खुद बनाते और उसके मालिक होते हैं — जो उनका दूध इकट्ठा करने, उन्हें न्यायपूर्ण भुगतान देने और मिलकर अपना व्यापार बढ़ाने के लिए बनी है।"
                )
              },
              {
                "type": "glossary",
                "term": L("MPO (Milk Producer Organisation)", "MPO (मिल्क प्रोड्यूसर ऑर्गेनाइज़ेशन)"),
                "meaning": L(
                  "A company formed and owned by dairy farmers themselves, to collect, test and sell their milk together.",
                  "डेयरी किसानों द्वारा खुद बनाई और उनके स्वामित्व वाली एक कंपनी, जो उनके दूध को मिलकर इकट्ठा करने, जाँचने और बेचने के लिए होती है।"
                )
              },
              {
                "type": "glossary",
                "term": L("Producer Company", "उत्पादक कंपनी (Producer Company)"),
                "meaning": L(
                  "The legal type of company under Indian law that lets farmers own and run a business together, with special rules that protect them.",
                  "भारतीय कानून के तहत कंपनी का वह कानूनी प्रकार, जो किसानों को मिलकर एक व्यापार का मालिक बनने और उसे चलाने देता है, साथ ही उनकी रक्षा करने वाले विशेष नियमों के साथ।"
                )
              },
              {
                "type": "text",
                "heading": L("Built on What Already Worked", "जो पहले से काम कर रहा था उस पर आधारित"),
                "html": L(
                  "In Module 1, you learned about the Anand Pattern cooperative — Village Society, District Union, State Federation. An MPO uses the same core idea, farmers owning the business together, but is organised as a newer, more flexible kind of company.",
                  "मॉड्यूल 1 में, आपने आणंद पैटर्न सहकारी समिति के बारे में सीखा — ग्राम समिति, ज़िला संघ, राज्य महासंघ। MPO भी उसी मूल विचार का उपयोग करता है, यानी किसान मिलकर व्यापार के मालिक हों, लेकिन यह एक नए, ज़्यादा लचीले प्रकार की कंपनी के रूप में संगठित है।"
                )
              },
              {
                "type": "callout",
                "style": "info",
                "heading": L("MPO or MPC?", "MPO या MPC?"),
                "text": L(
                  "You may also hear the word MPC (Milk Producer Company). In dairy work, MPO and MPC usually mean the same thing — a Producer Company that deals in milk.",
                  "आप MPC (मिल्क प्रोड्यूसर कंपनी) शब्द भी सुन सकते हैं। डेयरी के काम में, MPO और MPC का आमतौर पर एक ही मतलब होता है — एक उत्पादक कंपनी जो दूध का काम करती है।"
                )
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": L("What does MPO stand for?", "MPO का पूरा नाम क्या है?"),
                "options": [
                  L("Milk Producer Organisation", "मिल्क प्रोड्यूसर ऑर्गेनाइज़ेशन"),
                  L("Milk Purchase Office", "मिल्क परचेज़ ऑफिस"),
                  L("Milk Processing Outlet", "मिल्क प्रोसेसिंग आउटलेट"),
                  L("Ministry of Public Operations", "मिनिस्ट्री ऑफ पब्लिक ऑपरेशंस")
                ],
                "answer": 0,
                "explain": L(
                  "MPO stands for Milk Producer Organisation — a company owned by the milk farmers themselves.",
                  "MPO का मतलब है मिल्क प्रोड्यूसर ऑर्गेनाइज़ेशन — एक ऐसी कंपनी जिसके मालिक दूध किसान खुद होते हैं।"
                )
              },
              {
                "type": "truefalse",
                "q": L(
                  "An MPO is a company owned and run by the milk farmers themselves.",
                  "एक MPO वह कंपनी है जिसके मालिक और संचालक दूध किसान खुद होते हैं।"
                ),
                "answer": true,
                "explain": L(
                  "Yes — an MPO is a farmer-owned company, just like a cooperative, but organised differently.",
                  "हाँ — एक MPO किसानों के स्वामित्व वाली कंपनी है, बिल्कुल सहकारी समिति की तरह, लेकिन अलग तरीके से संगठित।"
                )
              }
            ]
          },
          {
            "id": "t-why-change",
            "title": L("Why Farmers Needed Something New", "किसानों को कुछ नया क्यों चाहिए था"),
            "teach": [
              {
                "type": "text",
                "heading": L("The World Was Changing", "दुनिया बदल रही थी"),
                "html": L(
                  "From the 1990s, India opened its markets to the world. This is called <b>globalisation</b> — when countries trade and do business freely with each other. Big companies, including foreign ones, started selling milk products in India too.",
                  "1990 के दशक से, भारत ने अपने बाज़ार दुनिया के लिए खोल दिए। इसे <b>वैश्वीकरण (globalisation)</b> कहते हैं — जब देश आपस में स्वतंत्र रूप से व्यापार करते हैं। बड़ी कंपनियाँ, जिनमें विदेशी कंपनियाँ भी शामिल थीं, भारत में भी दूध उत्पाद बेचने लगीं।"
                )
              },
              {
                "type": "glossary",
                "term": L("Globalisation", "वैश्वीकरण (Globalisation)"),
                "meaning": L(
                  "When countries trade and do business freely with each other, so companies from other countries can also sell in India.",
                  "जब देश आपस में स्वतंत्र रूप से व्यापार करते हैं, जिससे दूसरे देशों की कंपनियाँ भी भारत में बेच सकती हैं।"
                )
              },
              {
                "type": "text",
                "heading": L("The Old Cooperative Structure Had Limits", "पुरानी सहकारी संरचना की सीमाएँ थीं"),
                "html": L(
                  "The Village Society → District Union → State Federation model worked very well for decades. But it was built under an old law meant mainly for village societies. It could not always move fast, raise money easily, or make quick business decisions, because many steps needed government approval.",
                  "ग्राम समिति → ज़िला संघ → राज्य महासंघ मॉडल दशकों तक बहुत अच्छी तरह काम करता रहा। लेकिन यह एक पुराने कानून के तहत बना था, जो मुख्य रूप से ग्राम समितियों के लिए था। यह हमेशा तेज़ी से नहीं चल पाता था, आसानी से पैसा नहीं जुटा पाता था, या जल्दी व्यापारिक फैसले नहीं ले पाता था, क्योंकि कई चरणों के लिए सरकारी मंज़ूरी चाहिए होती थी।"
                )
              },
              {
                "type": "callout",
                "style": "warning",
                "heading": L("A Real Problem", "एक असली समस्या"),
                "text": L(
                  "In many states, the government had a strong say in how cooperatives were run — sometimes even in choosing board members or delaying elections. This made it harder for farmer-members to feel it was truly \"their own\" business.",
                  "कई राज्यों में, सरकार का सहकारी समितियों के संचालन में बड़ा दखल था — कभी-कभी तो बोर्ड सदस्यों को चुनने या चुनाव टालने में भी। इससे किसान-सदस्यों को यह महसूस करना मुश्किल हो जाता था कि यह सचमुच \"उनका अपना\" व्यापार है।"
                )
              },
              {
                "type": "text",
                "heading": L("Connecting Farmers to Bigger Markets", "किसानों को बड़े बाज़ारों से जोड़ना"),
                "html": L(
                  "Milk producers needed a way to reach not just their district, but national and even global markets, and to compete with private and multi-national dairy companies — while still keeping farmers as the owners.",
                  "दूध उत्पादकों को सिर्फ अपने ज़िले तक ही नहीं, बल्कि राष्ट्रीय और यहाँ तक कि वैश्विक बाज़ारों तक पहुँचने का एक तरीका चाहिए था, और निजी व बहुराष्ट्रीय डेयरी कंपनियों से मुकाबला करने का भी — जबकि किसान ही मालिक बने रहें।"
                )
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": L("What is 'globalisation'?", "'वैश्वीकरण' क्या है?"),
                "options": [
                  L("When one village trades only with itself", "जब एक गाँव सिर्फ खुद से व्यापार करता है"),
                  L("When countries trade and do business freely with each other", "जब देश आपस में स्वतंत्र रूप से व्यापार करते हैं"),
                  L("A new kind of cow breed", "गाय की एक नई नस्ल"),
                  L("A government rule against private companies", "निजी कंपनियों के खिलाफ एक सरकारी नियम")
                ],
                "answer": 1,
                "explain": L(
                  "Globalisation means countries trade and do business freely with each other, opening up bigger markets and more competition.",
                  "वैश्वीकरण का मतलब है देशों का आपस में स्वतंत्र रूप से व्यापार करना, जिससे बड़े बाज़ार और ज़्यादा प्रतिस्पर्धा खुलती है।"
                )
              },
              {
                "type": "truefalse",
                "q": L(
                  "The old cooperative structure had no limits and never needed any reform.",
                  "पुरानी सहकारी संरचना में कोई सीमा नहीं थी और उसे कभी सुधार की ज़रूरत नहीं पड़ी।"
                ),
                "answer": false,
                "explain": L(
                  "The old cooperative structure worked well for years, but it moved slowly and needed too much government approval — so a reform was needed.",
                  "पुरानी सहकारी संरचना सालों तक अच्छी तरह काम करती रही, लेकिन यह धीमी थी और इसे बहुत ज़्यादा सरकारी मंज़ूरी चाहिए होती थी — इसलिए सुधार की ज़रूरत थी।"
                )
              }
            ]
          },
          {
            "id": "t-alagh-act",
            "title": L("The Law That Made It Possible", "वह कानून जिसने इसे संभव बनाया"),
            "teach": [
              {
                "type": "text",
                "heading": L("A Committee Looks for a Solution", "एक समिति ने समाधान की तलाश की"),
                "html": L(
                  "The Government of India set up a committee led by economist <b>Dr. Y. K. Alagh</b> to study the problem, and to recommend a new legal way for farmers to form modern, farmer-owned businesses.",
                  "भारत सरकार ने अर्थशास्त्री <b>डॉ. वाई.के. अलघ</b> के नेतृत्व में एक समिति बनाई, ताकि समस्या का अध्ययन किया जा सके और किसानों के लिए आधुनिक, किसान-स्वामित्व वाले व्यापार बनाने का एक नया कानूनी तरीका सुझाया जा सके।"
                )
              },
              {
                "type": "glossary",
                "term": L("Committee", "समिति (Committee)"),
                "meaning": L(
                  "A small group of experts asked by the government to study a problem and suggest solutions.",
                  "विशेषज्ञों का एक छोटा समूह, जिसे सरकार किसी समस्या का अध्ययन करने और समाधान सुझाने के लिए कहती है।"
                )
              },
              {
                "type": "timeline",
                "heading": L("From Idea to Law", "विचार से कानून तक"),
                "items": [
                  {
                    "year": "1990s",
                    "text": L(
                      "Government sees the need for a new farmer-owned business model.",
                      "सरकार को किसान-स्वामित्व वाले नए व्यापार मॉडल की ज़रूरत महसूस होती है।"
                    )
                  },
                  {
                    "year": L("Y. K. Alagh Committee", "वाई.के. अलघ समिति"),
                    "text": L(
                      "Studies the problem and recommends a new legal framework for producer-owned companies.",
                      "समस्या का अध्ययन करती है और उत्पादक-स्वामित्व वाली कंपनियों के लिए एक नया कानूनी ढाँचा सुझाती है।"
                    )
                  },
                  {
                    "year": "2002",
                    "text": L(
                      "Companies (Amendment) Act, 2002 is passed — it creates the legal idea of a 'Producer Company' for the first time.",
                      "कंपनी (संशोधन) अधिनियम, 2002 पारित होता है — यह पहली बार 'उत्पादक कंपनी' का कानूनी विचार बनाता है।"
                    )
                  },
                  {
                    "year": L("Today", "आज"),
                    "text": L(
                      "Thousands of Producer Companies, including many MPOs, now operate across India using this law.",
                      "हज़ारों उत्पादक कंपनियाँ, जिनमें कई MPO शामिल हैं, अब इसी कानून के तहत पूरे भारत में काम कर रही हैं।"
                    )
                  }
                ]
              },
              {
                "type": "text",
                "heading": L("What the Act Achieved", "इस अधिनियम ने क्या हासिल किया"),
                "html": L(
                  "The new law combined the best of both worlds: the fairness and shared-ownership values of a cooperative, with the flexibility and professional efficiency of a modern company. This is exactly what MPOs use today.",
                  "नए कानून ने दोनों दुनियाओं की सबसे अच्छी बातें जोड़ दीं: एक सहकारी समिति की निष्पक्षता और साझा-स्वामित्व की भावना, और एक आधुनिक कंपनी की लचीलापन व पेशेवर दक्षता। आज MPO ठीक यही उपयोग करते हैं।"
                )
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": L(
                  "Which law first created the legal idea of a 'Producer Company' in India?",
                  "किस कानून ने भारत में पहली बार 'उत्पादक कंपनी' का कानूनी विचार बनाया?"
                ),
                "options": [
                  L("Companies (Amendment) Act, 2002", "कंपनी (संशोधन) अधिनियम, 2002"),
                  L("Right to Information Act", "सूचना का अधिकार अधिनियम"),
                  L("Panchayati Raj Act", "पंचायती राज अधिनियम"),
                  L("Cooperative Societies Act", "सहकारी समिति अधिनियम")
                ],
                "answer": 0,
                "explain": L(
                  "The Companies (Amendment) Act, 2002 introduced the concept of Producer Companies in Indian law.",
                  "कंपनी (संशोधन) अधिनियम, 2002 ने भारतीय कानून में उत्पादक कंपनियों की अवधारणा शुरू की।"
                )
              },
              {
                "type": "mcq",
                "q": L(
                  "Who led the committee that recommended this new legal framework?",
                  "इस नए कानूनी ढाँचे की सिफारिश करने वाली समिति का नेतृत्व किसने किया?"
                ),
                "options": [
                  L("Dr. Y. K. Alagh", "डॉ. वाई.के. अलघ"),
                  L("Dr. Verghese Kurien", "डॉ. वर्गीस कुरियन"),
                  L("Dr. Anil Sharma", "डॉ. अनिल शर्मा"),
                  L("M. S. Swaminathan", "एम.एस. स्वामीनाथन")
                ],
                "answer": 0,
                "explain": L(
                  "Dr. Y. K. Alagh led the committee. (Dr. Verghese Kurien, from Module 1, led NDDB and Amul — a different, earlier chapter of the story.)",
                  "डॉ. वाई.के. अलघ ने समिति का नेतृत्व किया। (मॉड्यूल 1 वाले डॉ. वर्गीस कुरियन ने NDDB और अमूल का नेतृत्व किया था — यह कहानी का एक अलग, पहले का अध्याय है।)"
                )
              }
            ]
          }
        ],
        "finalQuiz": {
          "passScore": 70,
          "questions": [
            {
              "topicId": "t-what-is-mpo",
              "type": "mcq",
              "q": L("An MPO is best described as:", "एक MPO को सबसे अच्छे तरीके से इस तरह बताया जा सकता है:"),
              "options": [
                L("A government department", "एक सरकारी विभाग"),
                L("A company formed and owned by dairy farmers themselves", "डेयरी किसानों द्वारा बनाई और उनके स्वामित्व वाली एक कंपनी"),
                L("A private trader who buys milk cheaply", "एक निजी व्यापारी जो सस्ते में दूध खरीदता है"),
                L("A bank that only lends to farmers", "एक बैंक जो सिर्फ किसानों को ऋण देता है")
              ],
              "answer": 1,
              "explain": L(
                "An MPO (Milk Producer Organisation) is a company that dairy farmers form and own together.",
                "एक MPO (मिल्क प्रोड्यूसर ऑर्गेनाइज़ेशन) एक ऐसी कंपनी है जिसे डेयरी किसान मिलकर बनाते और उसके मालिक होते हैं।"
              )
            },
            {
              "topicId": "t-why-change",
              "type": "truefalse",
              "q": L(
                "One reason MPOs were needed was that old cooperatives needed a lot of government approval to make decisions.",
                "MPO की ज़रूरत का एक कारण यह था कि पुरानी सहकारी समितियों को फैसले लेने के लिए बहुत सारी सरकारी मंज़ूरी चाहिए होती थी।"
              ),
              "answer": true,
              "explain": L(
                "Yes — old cooperatives often needed government approval, which slowed things down and reduced farmers' sense of ownership.",
                "हाँ — पुरानी सहकारी समितियों को अक्सर सरकारी मंज़ूरी चाहिए होती थी, जिससे काम धीमा होता था और किसानों में स्वामित्व की भावना कम होती थी।"
              )
            },
            {
              "topicId": "t-alagh-act",
              "type": "mcq",
              "q": L(
                "In what year was the law passed that created 'Producer Companies'?",
                "'उत्पादक कंपनियाँ' बनाने वाला कानून किस साल पारित हुआ था?"
              ),
              "options": ["1965", "1991", "2002", "2020"].map((s) => L(s, s)),
              "answer": 2,
              "explain": L(
                "The Companies (Amendment) Act was passed in 2002.",
                "कंपनी (संशोधन) अधिनियम 2002 में पारित हुआ था।"
              )
            }
          ]
        }
      },
      {
        "id": "m2-l2",
        "title": L("How an MPO Is Different — and Better", "MPO कैसे अलग है — और बेहतर"),
        "estMinutes": 9,
        "hook": [
          {
            "type": "hero",
            "heading": L("How an MPO Is Different — and Better", "MPO कैसे अलग है — और बेहतर"),
            "text": L(
              "Now that you know why MPOs began, let's see exactly what makes them different from the old system — and what that means for the farmers you'll work with.",
              "अब जब आप जानते हैं कि MPO क्यों शुरू हुए, आइए ठीक-ठीक देखें कि वे पुरानी व्यवस्था से कैसे अलग हैं — और इसका उन किसानों के लिए क्या मतलब है जिनके साथ आप काम करेंगे।"
            )
          }
        ],
        "topics": [
          {
            "id": "t-old-vs-new",
            "title": L("Cooperative vs Producer Company: What Changed?", "सहकारी समिति बनाम उत्पादक कंपनी: क्या बदला?"),
            "teach": [
              {
                "type": "text",
                "heading": L("Same Goal, Different Tools", "एक ही लक्ष्य, अलग-अलग औज़ार"),
                "html": L(
                  "Both the old cooperative and the new MPO (Producer Company) want the same thing: farmers owning their own dairy business together. But they are built differently.",
                  "पुरानी सहकारी समिति और नई MPO (उत्पादक कंपनी) दोनों एक ही चीज़ चाहते हैं: किसानों का मिलकर अपने डेयरी व्यापार का मालिक होना। लेकिन दोनों अलग तरीके से बनी हैं।"
                )
              },
              {
                "type": "stat-grid",
                "items": [
                  {
                    "label": L("Government's role", "सरकार की भूमिका"),
                    "text": L(
                      "Old cooperatives needed government approval for many decisions. An MPO is registered under the Companies Act and is run independently by its farmer-members.",
                      "पुरानी सहकारी समितियों को कई फैसलों के लिए सरकारी मंज़ूरी चाहिए होती थी। एक MPO कंपनी अधिनियम के तहत पंजीकृत होती है और इसे इसके किसान-सदस्य स्वतंत्र रूप से चलाते हैं।"
                    )
                  },
                  {
                    "label": L("Raising money", "पैसा जुटाना"),
                    "text": L(
                      "It was harder for old cooperatives to raise extra capital. An MPO, like any company, can raise funds more easily while keeping farmers as the owners.",
                      "पुरानी सहकारी समितियों के लिए अतिरिक्त पूंजी जुटाना मुश्किल था। एक MPO, किसी भी कंपनी की तरह, किसानों को मालिक बनाए रखते हुए ज़्यादा आसानी से पैसा जुटा सकती है।"
                    )
                  },
                  {
                    "label": L("Running the business", "व्यापार चलाना"),
                    "text": L(
                      "Old cooperatives sometimes mixed daily business decisions with village politics. An MPO separates ownership (farmers) from day-to-day management (trained staff).",
                      "पुरानी सहकारी समितियों में कभी-कभी रोज़ के व्यापारिक फैसले गाँव की राजनीति से मिल जाते थे। एक MPO स्वामित्व (किसान) को रोज़मर्रा के प्रबंधन (प्रशिक्षित कर्मचारी) से अलग रखती है।"
                    )
                  },
                  {
                    "label": L("Protection from takeover", "अधिग्रहण से सुरक्षा"),
                    "text": L(
                      "An MPO's shares cannot be bought or sold on the stock market, so outside companies cannot buy control of it — farmers stay in charge.",
                      "एक MPO के शेयर शेयर बाज़ार में खरीदे या बेचे नहीं जा सकते, इसलिए बाहरी कंपनियाँ इसका नियंत्रण नहीं खरीद सकतीं — किसान ही इसके प्रभारी बने रहते हैं।"
                    )
                  }
                ]
              },
              {
                "type": "glossary",
                "term": L("Stock Exchange", "शेयर बाज़ार (Stock Exchange)"),
                "meaning": L(
                  "A marketplace where shares of big companies are bought and sold by anyone. MPO shares can never be sold there.",
                  "एक बाज़ार जहाँ बड़ी कंपनियों के शेयर कोई भी खरीद-बेच सकता है। MPO के शेयर वहाँ कभी नहीं बेचे जा सकते।"
                )
              },
              {
                "type": "example",
                "heading": L("Think of It This Way", "इस तरह से सोचिए"),
                "text": L(
                  "Old cooperative: a village committee that needed the government's permission for many things. MPO: an independent company that farmers themselves fully own and control, using modern business rules.",
                  "पुरानी सहकारी समिति: एक गाँव समिति जिसे कई चीज़ों के लिए सरकार की अनुमति चाहिए होती थी। MPO: एक स्वतंत्र कंपनी जिसके किसान खुद पूरी तरह मालिक और नियंत्रक हैं, जो आधुनिक व्यापारिक नियमों का उपयोग करती है।"
                )
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": L(
                  "What is one key difference between an old cooperative and an MPO?",
                  "पुरानी सहकारी समिति और MPO के बीच एक मुख्य अंतर क्या है?"
                ),
                "options": [
                  L("MPOs are owned by the government", "MPO सरकार के स्वामित्व में होते हैं"),
                  L(
                    "MPO shares cannot be traded on the stock exchange, which keeps farmer control safe",
                    "MPO के शेयर शेयर बाज़ार में नहीं बेचे जा सकते, जिससे किसानों का नियंत्रण सुरक्षित रहता है"
                  ),
                  L("MPOs are not allowed to sell milk", "MPO को दूध बेचने की अनुमति नहीं है"),
                  L("Old cooperatives had no members at all", "पुरानी सहकारी समितियों में बिल्कुल कोई सदस्य नहीं थे")
                ],
                "answer": 1,
                "explain": L(
                  "Because MPO shares can't be traded on the stock exchange, outside companies can't buy their way into control — farmers stay the owners.",
                  "क्योंकि MPO के शेयर शेयर बाज़ार में नहीं बेचे जा सकते, बाहरी कंपनियाँ पैसे देकर नियंत्रण नहीं खरीद सकतीं — किसान ही मालिक बने रहते हैं।"
                )
              },
              {
                "type": "truefalse",
                "q": L(
                  "In an MPO, outside investors can easily buy shares on the stock market and take control.",
                  "एक MPO में, बाहरी निवेशक आसानी से शेयर बाज़ार में शेयर खरीदकर नियंत्रण ले सकते हैं।"
                ),
                "answer": false,
                "explain": L(
                  "MPO (Producer Company) shares cannot be traded on the stock exchange, so this kind of takeover cannot happen.",
                  "MPO (उत्पादक कंपनी) के शेयर शेयर बाज़ार में नहीं बेचे जा सकते, इसलिए इस तरह का अधिग्रहण नहीं हो सकता।"
                )
              }
            ]
          },
          {
            "id": "t-legal-features",
            "title": L("The Rules That Protect Farmers", "किसानों की रक्षा करने वाले नियम"),
            "teach": [
              {
                "type": "text",
                "heading": L("Who Can Start an MPO?", "MPO कौन शुरू कर सकता है?"),
                "html": L(
                  "The law says an MPO (Producer Company) can be formed by: at least <b>10 individual farmers</b>, OR at least <b>2 farmer institutions</b> (like existing societies), OR a mix of both.",
                  "कानून कहता है कि एक MPO (उत्पादक कंपनी) इनके द्वारा बनाई जा सकती है: कम से कम <b>10 व्यक्तिगत किसान</b>, या कम से कम <b>2 किसान संस्थान</b> (जैसे मौजूदा समितियाँ), या दोनों का मिश्रण।"
                )
              },
              {
                "type": "stat-grid",
                "items": [
                  {
                    "label": L("10 or more farmers", "10 या ज़्यादा किसान"),
                    "text": L(
                      "Any 10 or more individual milk producers can come together to form a Producer Company.",
                      "कोई भी 10 या ज़्यादा व्यक्तिगत दूध उत्पादक मिलकर एक उत्पादक कंपनी बना सकते हैं।"
                    )
                  },
                  {
                    "label": L("2 or more institutions", "2 या ज़्यादा संस्थान"),
                    "text": L(
                      "Two or more existing farmer institutions can also join together to form one.",
                      "दो या ज़्यादा मौजूदा किसान संस्थान भी मिलकर एक कंपनी बना सकते हैं।"
                    )
                  },
                  {
                    "label": L("One member, one vote", "एक सदस्य, एक वोट"),
                    "text": L(
                      "No matter how much milk a member supplies or how many shares they hold, every member gets exactly one vote. This keeps the company fair and democratic.",
                      "एक सदस्य चाहे कितना भी दूध दे या कितने भी शेयर रखे, हर सदस्य को ठीक एक वोट मिलता है। इससे कंपनी न्यायपूर्ण और लोकतांत्रिक बनी रहती है।"
                    )
                  }
                ]
              },
              {
                "type": "glossary",
                "term": L("One Member, One Vote", "एक सदस्य, एक वोट"),
                "meaning": L(
                  "A rule where every member has equal voting power, whether they are a big supplier or a small one.",
                  "एक नियम जिसमें हर सदस्य को बराबर वोटिंग शक्ति मिलती है, चाहे वह बड़ा आपूर्तिकर्ता हो या छोटा।"
                )
              },
              {
                "type": "callout",
                "style": "tip",
                "heading": L("Why This Matters to You", "यह आपके लिए क्यों ज़रूरी है"),
                "text": L(
                  "As a Sahayak, this is important to explain to farmers: joining an MPO means they get a real, equal voice — not just a service they buy.",
                  "एक सहायक के तौर पर, यह किसानों को समझाना ज़रूरी है: MPO से जुड़ने का मतलब है कि उन्हें एक असली, बराबर आवाज़ मिलती है — सिर्फ खरीदी जाने वाली सेवा नहीं।"
                )
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": L(
                  "How many individual producers are needed, at minimum, to form a Producer Company?",
                  "एक उत्पादक कंपनी बनाने के लिए, कम से कम कितने व्यक्तिगत उत्पादक चाहिए?"
                ),
                "options": ["2", "5", "10", "50"].map((s) => L(s, s)),
                "answer": 2,
                "explain": L(
                  "At least 10 individual producers (or 2 or more producer institutions) can form a Producer Company.",
                  "कम से कम 10 व्यक्तिगत उत्पादक (या 2 या ज़्यादा उत्पादक संस्थान) एक उत्पादक कंपनी बना सकते हैं।"
                )
              },
              {
                "type": "mcq",
                "q": L(
                  "Under 'one member, one vote', a farmer who supplies more milk gets:",
                  "'एक सदस्य, एक वोट' के तहत, ज़्यादा दूध देने वाले किसान को क्या मिलता है:"
                ),
                "options": [
                  L("More votes than others", "दूसरों से ज़्यादा वोट"),
                  L("Exactly one vote, the same as everyone else", "बाकी सभी की तरह ठीक एक वोट"),
                  L("No vote at all", "कोई वोट नहीं"),
                  L("Extra free shares automatically", "अपने आप अतिरिक्त मुफ्त शेयर")
                ],
                "answer": 1,
                "explain": L(
                  "Every member gets exactly one vote, no matter how much milk they supply — this keeps the MPO democratic.",
                  "हर सदस्य को ठीक एक वोट मिलता है, चाहे वह कितना भी दूध दे — इससे MPO लोकतांत्रिक बनी रहती है।"
                )
              }
            ]
          },
          {
            "id": "t-farmer-benefits",
            "title": L("What's In It For the Farmer?", "किसान के लिए इसमें क्या है?"),
            "teach": [
              {
                "type": "text",
                "heading": L("Five Reasons Farmers Join an MPO", "किसानों के MPO से जुड़ने के पाँच कारण"),
                "html": L(
                  "An MPO is built around five simple ideas. Together, they explain why farmers choose to join and stay.",
                  "एक MPO पाँच सरल विचारों पर बनी होती है। मिलकर, ये बताते हैं कि किसान क्यों जुड़ना और बने रहना चुनते हैं।"
                )
              },
              {
                "type": "stat-grid",
                "items": [
                  {
                    "label": L("Empowering Milk Producers", "दूध उत्पादकों को सशक्त बनाना"),
                    "text": L(
                      "Farmers get training, support and a real say in decisions — not just a place to sell milk.",
                      "किसानों को प्रशिक्षण, सहयोग और फैसलों में असली आवाज़ मिलती है — सिर्फ दूध बेचने की जगह नहीं।"
                    )
                  },
                  {
                    "label": L("Democratic & Producer Owned", "लोकतांत्रिक और उत्पादक-स्वामित्व वाली"),
                    "text": L(
                      "The company belongs to its farmer-members, who elect their own representatives.",
                      "कंपनी उसके किसान-सदस्यों की होती है, जो अपने प्रतिनिधि खुद चुनते हैं।"
                    )
                  },
                  {
                    "label": L("Better Returns & Sustainability", "बेहतर लाभ और स्थिरता"),
                    "text": L(
                      "Profits go back to farmer-members, and fair pricing means a more reliable, lasting income.",
                      "मुनाफ़ा किसान-सदस्यों को वापस मिलता है, और न्यायपूर्ण मूल्य निर्धारण का मतलब है ज़्यादा भरोसेमंद, टिकाऊ आय।"
                    )
                  },
                  {
                    "label": L("Professional Governance", "पेशेवर प्रशासन"),
                    "text": L(
                      "Trained managers run daily operations, so the business runs efficiently — while farmers still own and guide it.",
                      "प्रशिक्षित प्रबंधक रोज़ का काम चलाते हैं, जिससे व्यापार कुशलता से चलता है — जबकि किसान ही इसके मालिक और मार्गदर्शक बने रहते हैं।"
                    )
                  }
                ]
              },
              {
                "type": "callout",
                "style": "info",
                "heading": L("Stronger Together", "साथ मिलकर मज़बूत"),
                "text": L(
                  "When many MPOs and cooperatives work well, the whole dairy sector gets stronger — better prices, better quality, and better lives for farming families across India.",
                  "जब कई MPO और सहकारी समितियाँ अच्छी तरह काम करती हैं, तो पूरा डेयरी क्षेत्र मज़बूत होता है — बेहतर कीमतें, बेहतर गुणवत्ता, और पूरे भारत में किसान परिवारों के लिए बेहतर जीवन।"
                )
              },
              {
                "type": "example",
                "heading": L("Remember Ramesh and Sita?", "रमेश और सीता याद हैं?"),
                "text": L(
                  "Their village's Milk Pooling Point, run by an MPO, tested milk fairly and paid on time, every time. That is these benefits working in real life.",
                  "उनके गाँव का मिल्क पूलिंग पॉइंट, जो एक MPO द्वारा चलाया जाता था, निष्पक्ष रूप से दूध जाँचता था और हर बार समय पर भुगतान करता था। यही हैं ये फ़ायदे असल ज़िंदगी में काम करते हुए।"
                )
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": L("Which of these is a real benefit of joining an MPO?", "MPO से जुड़ने का एक असली फ़ायदा इनमें से कौन-सा है?"),
                "options": [
                  L("Fair pricing, with profits shared with farmer-members", "न्यायपूर्ण मूल्य, किसान-सदस्यों के साथ बँटा हुआ मुनाफ़ा"),
                  L("Only the biggest farmers get paid", "सिर्फ सबसे बड़े किसानों को भुगतान मिलता है"),
                  L("No say in how the business is run", "व्यापार कैसे चले, इसमें कोई आवाज़ नहीं"),
                  L("Milk is tested in secret with no farmer present", "किसान की मौजूदगी के बिना गुप्त रूप से दूध जाँचा जाता है")
                ],
                "answer": 0,
                "explain": L(
                  "MPOs are built to share profits fairly with member-farmers and to test milk openly and honestly.",
                  "MPO सदस्य-किसानों के साथ न्यायपूर्ण ढंग से मुनाफ़ा बाँटने और खुले, ईमानदार तरीके से दूध जाँचने के लिए बनी होती हैं।"
                )
              },
              {
                "type": "truefalse",
                "q": L(
                  "In an MPO, trained professional staff manage daily business while farmers remain the owners.",
                  "एक MPO में, प्रशिक्षित पेशेवर कर्मचारी रोज़ का व्यापार संभालते हैं जबकि किसान ही मालिक बने रहते हैं।"
                ),
                "answer": true,
                "explain": L(
                  "That's the idea of 'Professional Governance' — professionals run daily work, but farmers own and guide the company.",
                  "यही 'पेशेवर प्रशासन' का विचार है — पेशेवर लोग रोज़ का काम चलाते हैं, लेकिन किसान ही कंपनी के मालिक और मार्गदर्शक होते हैं।"
                )
              }
            ]
          }
        ],
        "finalQuiz": {
          "passScore": 70,
          "questions": [
            {
              "topicId": "t-old-vs-new",
              "type": "mcq",
              "q": L(
                "Why can't an outside company easily take control of an MPO?",
                "एक बाहरी कंपनी आसानी से MPO का नियंत्रण क्यों नहीं ले सकती?"
              ),
              "options": [
                L("MPO shares cannot be traded on the stock exchange", "MPO के शेयर शेयर बाज़ार में नहीं बेचे जा सकते"),
                L("MPOs are too small to be interesting", "MPO इतनी छोटी हैं कि दिलचस्प नहीं लगतीं"),
                L("The government owns all MPOs", "सरकार सभी MPO की मालिक है"),
                L("MPOs are not allowed to have a Board", "MPO को बोर्ड रखने की अनुमति नहीं है")
              ],
              "answer": 0,
              "explain": L(
                "MPO shares can't be bought and sold on the stock exchange, which protects farmer ownership from outside takeover.",
                "MPO के शेयर शेयर बाज़ार में खरीदे-बेचे नहीं जा सकते, जो किसान स्वामित्व को बाहरी अधिग्रहण से बचाता है।"
              )
            },
            {
              "topicId": "t-legal-features",
              "type": "truefalse",
              "q": L(
                "In an MPO, a member with more shares gets more votes than a member with fewer shares.",
                "एक MPO में, ज़्यादा शेयर रखने वाले सदस्य को कम शेयर वाले सदस्य से ज़्यादा वोट मिलते हैं।"
              ),
              "answer": false,
              "explain": L(
                "Every member gets exactly one vote under the 'one member, one vote' rule, regardless of shares held.",
                "'एक सदस्य, एक वोट' नियम के तहत हर सदस्य को ठीक एक वोट मिलता है, चाहे उसके पास कितने भी शेयर हों।"
              )
            },
            {
              "topicId": "t-farmer-benefits",
              "type": "mcq",
              "q": L(
                "Which pillar of an MPO means daily operations are run by trained managers, not just elected farmers?",
                "MPO का कौन-सा स्तंभ इसका मतलब है कि रोज़ का काम सिर्फ चुने गए किसानों से नहीं, बल्कि प्रशिक्षित प्रबंधकों से चलता है?"
              ),
              "options": [
                L("Professional Governance", "पेशेवर प्रशासन"),
                L("Stronger Cooperatives", "मज़बूत सहकारी समितियाँ"),
                L("Democratic & Producer Owned", "लोकतांत्रिक और उत्पादक-स्वामित्व वाली"),
                L("Empowering Milk Producers", "दूध उत्पादकों को सशक्त बनाना")
              ],
              "answer": 0,
              "explain": L(
                "Professional Governance means trained staff handle daily operations, while farmer-members still own and guide the company.",
                "पेशेवर प्रशासन का मतलब है प्रशिक्षित कर्मचारी रोज़ का काम संभालते हैं, जबकि किसान-सदस्य ही कंपनी के मालिक और मार्गदर्शक बने रहते हैं।"
              )
            }
          ]
        }
      },
      {
        "id": "m2-l3",
        "title": L("The Structure of an MPO", "MPO की संरचना"),
        "estMinutes": 8,
        "hook": [
          {
            "type": "hero",
            "heading": L("The Structure of an MPO", "MPO की संरचना"),
            "text": L(
              "How is an MPO actually organised, from a single farmer's milk can all the way up to the company's board? Let's map it out.",
              "एक MPO असल में कैसे संगठित होती है, एक किसान के दूध के कैन से लेकर कंपनी के बोर्ड तक? आइए इसे समझें।"
            )
          }
        ],
        "topics": [
          {
            "id": "t-operational-governance",
            "title": L("From Farmer to Board", "किसान से बोर्ड तक"),
            "teach": [
              {
                "type": "text",
                "heading": L("Two Layers Where Farmers Have a Voice", "दो स्तर जहाँ किसानों की आवाज़ होती है"),
                "html": L(
                  "An MPO's structure starts with the farmer and builds upward through two layers: the <b>Operational</b> layer (local village groups) and the <b>Governance</b> layer (company-wide decisions).",
                  "एक MPO की संरचना किसान से शुरू होती है और दो स्तरों से होते हुए ऊपर बनती है: <b>परिचालन (Operational)</b> स्तर (स्थानीय गाँव समूह) और <b>प्रशासन (Governance)</b> स्तर (पूरी कंपनी के फैसले)।"
                )
              },
              {
                "type": "text",
                "heading": L("Operational: MPP and MPC", "परिचालन: MPP और MPC"),
                "html": L(
                  "Every producer member pours milk at their local <b>MPP</b> (Milk Pooling Point). Members at each MPP elect a small committee, sometimes called the <b>MPC</b> (Milk Producer Committee), to represent them. Several MPCs join together into bigger village-cluster groups, so that even a farmer in the smallest village has a representative all the way up.",
                  "हर उत्पादक सदस्य अपने स्थानीय <b>MPP</b> (मिल्क पूलिंग पॉइंट) पर दूध डालता है। हर MPP के सदस्य एक छोटी समिति चुनते हैं, जिसे कभी-कभी <b>MPC</b> (मिल्क प्रोड्यूसर कमेटी) कहा जाता है, जो उनका प्रतिनिधित्व करती है। कई MPC मिलकर बड़े गाँव-समूह बनाते हैं, ताकि सबसे छोटे गाँव के किसान का भी ऊपर तक एक प्रतिनिधि हो।"
                )
              },
              {
                "type": "glossary",
                "term": L("MPP (Milk Pooling Point)", "MPP (मिल्क पूलिंग पॉइंट)"),
                "meaning": L(
                  "The village-level place where farmers bring their milk to be measured, tested and collected by the MPO.",
                  "गाँव स्तर की वह जगह जहाँ किसान अपना दूध लाते हैं, जिसे MPO मापता, जाँचता और इकट्ठा करता है।"
                )
              },
              {
                "type": "text",
                "heading": L("Governance: General Body and Board", "प्रशासन: साधारण सभा और बोर्ड"),
                "html": L(
                  "All members of the MPO together form the <b>General Body</b> — its highest decision-making group. The General Body elects a <b>Board of Directors</b>, who set policy and watch over the company on behalf of every member.",
                  "MPO के सभी सदस्य मिलकर <b>साधारण सभा (General Body)</b> बनाते हैं — इसका सबसे बड़ा फैसला लेने वाला समूह। साधारण सभा एक <b>निदेशक मंडल (Board of Directors)</b> चुनती है, जो नीति तय करता है और हर सदस्य की ओर से कंपनी की निगरानी करता है।"
                )
              },
              {
                "type": "glossary",
                "term": L("Board of Directors", "निदेशक मंडल (Board of Directors)"),
                "meaning": L(
                  "A group of members elected to guide and watch over the company's business on behalf of all members.",
                  "सभी सदस्यों की ओर से कंपनी के व्यापार का मार्गदर्शन और निगरानी करने के लिए चुने गए सदस्यों का एक समूह।"
                )
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": L("What is an MPP?", "MPP क्या है?"),
                "options": [
                  L(
                    "The village-level place where farmers bring milk to be measured, tested and collected",
                    "गाँव स्तर की वह जगह जहाँ किसान दूध मापने, जाँचने और इकट्ठा करने के लिए लाते हैं"
                  ),
                  L("A bank that lends money to farmers", "एक बैंक जो किसानों को पैसे उधार देता है"),
                  L("The head office of the state government", "राज्य सरकार का मुख्य कार्यालय"),
                  L("A type of milk animal", "एक प्रकार का दुधारू पशु")
                ],
                "answer": 0,
                "explain": L(
                  "MPP stands for Milk Pooling Point — the village-level milk collection place.",
                  "MPP का मतलब है मिल्क पूलिंग पॉइंट — गाँव स्तर की दूध संग्रह की जगह।"
                )
              },
              {
                "type": "mcq",
                "q": L("Who elects the Board of Directors of an MPO?", "MPO के निदेशक मंडल को कौन चुनता है?"),
                "options": [
                  L("The state government", "राज्य सरकार"),
                  L("The General Body of all members", "सभी सदस्यों की साधारण सभा"),
                  L("Only the Sahayaks", "सिर्फ सहायक"),
                  L("The largest dairy company nearby", "पास की सबसे बड़ी डेयरी कंपनी")
                ],
                "answer": 1,
                "explain": L(
                  "The General Body — made up of all the MPO's members — elects the Board of Directors.",
                  "साधारण सभा — जो MPO के सभी सदस्यों से बनी होती है — निदेशक मंडल चुनती है।"
                )
              }
            ]
          },
          {
            "id": "t-management-structure",
            "title": L("Who Runs the Business Every Day", "व्यापार को हर दिन कौन चलाता है"),
            "teach": [
              {
                "type": "text",
                "heading": L("Professionals Run the Daily Work", "पेशेवर लोग रोज़ का काम चलाते हैं"),
                "html": L(
                  "The Board appoints a <b>Chief Executive (CEO)</b> to manage daily operations. Below the CEO are functional heads — for example, staff in charge of procurement, quality testing, or finance — and field staff, like the Sahayaks, who work directly with farmers every single day.",
                  "बोर्ड रोज़ का काम संभालने के लिए एक <b>मुख्य कार्यकारी (CEO)</b> नियुक्त करता है। CEO के नीचे कार्यात्मक प्रमुख होते हैं — जैसे खरीद, गुणवत्ता जाँच या वित्त संभालने वाले कर्मचारी — और फील्ड स्टाफ, जैसे सहायक, जो हर दिन सीधे किसानों के साथ काम करते हैं।"
                )
              },
              {
                "type": "glossary",
                "term": L("Chief Executive (CEO)", "मुख्य कार्यकारी (CEO)"),
                "meaning": L(
                  "The senior professional manager appointed by the Board to run the company's day-to-day business.",
                  "बोर्ड द्वारा नियुक्त वरिष्ठ पेशेवर प्रबंधक, जो कंपनी का रोज़मर्रा का व्यापार चलाता है।"
                )
              },
              {
                "type": "callout",
                "style": "tip",
                "heading": L("Why Separate Governance from Management?", "प्रशासन को प्रबंधन से अलग क्यों रखें?"),
                "text": L(
                  "Farmers, through the General Body and Board, decide WHAT the company should do. Trained professional staff decide HOW to do it well, every day. This separation is a big reason MPOs run more smoothly than some older cooperatives, where daily business and village politics sometimes got mixed up.",
                  "किसान, साधारण सभा और बोर्ड के ज़रिए, तय करते हैं कि कंपनी को क्या करना चाहिए। प्रशिक्षित पेशेवर कर्मचारी तय करते हैं कि इसे हर दिन अच्छी तरह कैसे किया जाए। यही अलगाव एक बड़ा कारण है कि MPO कुछ पुरानी सहकारी समितियों से ज़्यादा सुचारू रूप से चलती हैं, जहाँ रोज़ का काम और गाँव की राजनीति कभी-कभी आपस में मिल जाते थे।"
                )
              },
              {
                "type": "example",
                "heading": L("Where You Fit In", "आप कहाँ फिट होते हैं"),
                "text": L(
                  "As a Sahayak, you are part of the Management Structure — the field staff who connect the company's decisions to real farmers, every single day.",
                  "एक सहायक के तौर पर, आप प्रबंधन संरचना का हिस्सा हैं — वह फील्ड स्टाफ जो कंपनी के फैसलों को हर दिन असली किसानों से जोड़ता है।"
                )
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": L(
                  "Who does the Board appoint to run the MPO's daily operations?",
                  "बोर्ड MPO का रोज़ का काम चलाने के लिए किसे नियुक्त करता है?"
                ),
                "options": [
                  L("The Chief Executive (CEO)", "मुख्य कार्यकारी (CEO)"),
                  L("The state Registrar", "राज्य रजिस्ट्रार"),
                  L("Any random member", "कोई भी बेतरतीब सदस्य"),
                  L("A private trader", "एक निजी व्यापारी")
                ],
                "answer": 0,
                "explain": L(
                  "The Board appoints a Chief Executive (CEO) to manage day-to-day business.",
                  "बोर्ड रोज़मर्रा का व्यापार संभालने के लिए एक मुख्य कार्यकारी (CEO) नियुक्त करता है।"
                )
              },
              {
                "type": "truefalse",
                "q": L("Sahayaks are members of the Board of Directors.", "सहायक निदेशक मंडल के सदस्य होते हैं।"),
                "answer": false,
                "explain": L(
                  "Sahayaks are field staff in the Management Structure. The Board is made up of members elected by the General Body.",
                  "सहायक प्रबंधन संरचना में फील्ड स्टाफ होते हैं। बोर्ड साधारण सभा द्वारा चुने गए सदस्यों से बनता है।"
                )
              }
            ]
          }
        ],
        "finalQuiz": {
          "passScore": 70,
          "isFinal": true,
          "questions": [
            {
              "topicId": "t-operational-governance",
              "type": "mcq",
              "q": L(
                "Which of these is part of the Operational structure of an MPO, closest to the farmer?",
                "इनमें से कौन-सा MPO की परिचालन संरचना का हिस्सा है, जो किसान के सबसे करीब है?"
              ),
              "options": [
                L("The MPP (Milk Pooling Point)", "MPP (मिल्क पूलिंग पॉइंट)"),
                L("The Chief Executive", "मुख्य कार्यकारी"),
                L("The state government", "राज्य सरकार"),
                L("A private bank", "एक निजी बैंक")
              ],
              "answer": 0,
              "explain": L(
                "The MPP is the village-level collection point where every farmer's journey with the MPO begins.",
                "MPP गाँव स्तर का संग्रह बिंदु है जहाँ से हर किसान की MPO के साथ यात्रा शुरू होती है।"
              )
            },
            {
              "topicId": "t-operational-governance",
              "type": "truefalse",
              "q": L(
                "The General Body is made up of all the members of the MPO together.",
                "साधारण सभा MPO के सभी सदस्यों को मिलाकर बनती है।"
              ),
              "answer": true,
              "explain": L(
                "Yes — the General Body is the full membership meeting together, the highest decision-making group.",
                "हाँ — साधारण सभा पूरी सदस्यता की एक साथ बैठक है, जो सबसे बड़ा फैसला लेने वाला समूह है।"
              )
            },
            {
              "topicId": "t-management-structure",
              "type": "mcq",
              "q": L(
                "What is the main reason an MPO separates governance (farmers/Board) from management (CEO, staff)?",
                "MPO प्रशासन (किसान/बोर्ड) को प्रबंधन (CEO, कर्मचारी) से अलग क्यों रखती है, इसका मुख्य कारण क्या है?"
              ),
              "options": [
                L(
                  "So daily business runs efficiently while farmers still own and guide the company",
                  "ताकि रोज़ का व्यापार कुशलता से चले जबकि किसान ही कंपनी के मालिक और मार्गदर्शक बने रहें"
                ),
                L("So farmers never get to make any decisions", "ताकि किसान कभी कोई फैसला न ले सकें"),
                L("So the government can control the company", "ताकि सरकार कंपनी को नियंत्रित कर सके"),
                L("So Sahayaks can become Directors automatically", "ताकि सहायक अपने आप निदेशक बन जाएँ")
              ],
              "answer": 0,
              "explain": L(
                "This separation keeps daily operations professional and efficient, while member-farmers retain ownership and direction through the Board.",
                "यह अलगाव रोज़ के काम को पेशेवर और कुशल बनाए रखता है, जबकि सदस्य-किसान बोर्ड के ज़रिए स्वामित्व और दिशा बनाए रखते हैं।"
              )
            }
          ]
        }
      }
    ]
  },
  {
    "id": "m3",
    "number": 3,
    "title": L("Core Design Principle", "मूल डिज़ाइन सिद्धांत"),
    "subtitle": L(
      "Learn the core design principles that make an MPO work as a true farmer-owned business — from active membership to technology — and see them tested in a real case study.",
      "उन मूल डिज़ाइन सिद्धांतों को जानिए जो MPO को एक असली किसान-स्वामित्व वाला व्यापार बनाते हैं — सक्रिय सदस्यता से लेकर तकनीक तक — और देखिए कि इन्हें एक असली केस स्टडी में कैसे परखा गया।"
    ),
    "icon": "milk",
    "available": true,
    "lessons": [
      {
        "id": "m3-l1",
        "title": L("Farmer, Milk Producer, or Member?", "किसान, दूध उत्पादक, या सदस्य?"),
        "estMinutes": 8,
        "hook": [
          {
            "type": "hero",
            "heading": L("Farmer, Milk Producer, or Member?", "किसान, दूध उत्पादक, या सदस्य?"),
            "text": L(
              "Three words that sound almost the same — but mean very different things in an MPO. Getting this right is the first design principle.",
              "तीन शब्द जो लगभग एक जैसे लगते हैं — लेकिन एक MPO में इनका मतलब बहुत अलग होता है। इसे सही समझना पहला डिज़ाइन सिद्धांत है।"
            )
          }
        ],
        "topics": [
          {
            "id": "t-three-words",
            "title": L("Three Words That Sound the Same, But Aren't", "तीन शब्द जो सुनने में एक जैसे लगते हैं, पर हैं नहीं"),
            "teach": [
              {
                "type": "text",
                "heading": L("Why This Matters", "यह क्यों ज़रूरी है"),
                "html": L(
                  "You will hear three similar words a lot in your work: <b>Farmer</b>, <b>Milk Producer</b>, and <b>Member</b>. They are not the same thing. Let's tell them apart.",
                  "आप अपने काम में तीन मिलते-जुलते शब्द बार-बार सुनेंगे: <b>किसान</b>, <b>दूध उत्पादक</b>, और <b>सदस्य</b>। ये एक जैसे नहीं हैं। आइए इन्हें अलग-अलग समझें।"
                )
              },
              {
                "type": "glossary",
                "term": L("Farmer", "किसान (Farmer)"),
                "meaning": L(
                  "Someone who works on land or keeps animals, growing crops or producing milk, for a living.",
                  "वह व्यक्ति जो जीविका के लिए ज़मीन पर काम करता है या पशु पालता है, फसल उगाता है या दूध उत्पादन करता है।"
                )
              },
              {
                "type": "glossary",
                "term": L("Milk Producer", "दूध उत्पादक (Milk Producer)"),
                "meaning": L(
                  "Any farmer who actually keeps milk animals and produces milk to sell — a more specific kind of farmer.",
                  "वह किसान जो असल में दुधारू पशु पालता है और बेचने के लिए दूध उत्पादन करता है — किसान का एक ज़्यादा विशेष प्रकार।"
                )
              },
              {
                "type": "glossary",
                "term": L("Member", "सदस्य (Member)"),
                "meaning": L(
                  "A milk producer who has formally joined the MPO, holds shares in it, and has ownership rights and duties.",
                  "एक दूध उत्पादक जिसने विधिवत रूप से MPO ज्वाइन किया है, उसमें शेयर रखता है, और जिसके पास स्वामित्व के अधिकार व कर्तव्य हैं।"
                )
              },
              {
                "type": "example",
                "heading": L("Not Every Milk Producer Is a Member", "हर दूध उत्पादक सदस्य नहीं होता"),
                "text": L(
                  "A farmer down the road may produce milk every day, but if they have not joined the MPO — bought shares, filled the membership form — they are not a Member. Only Members truly own the company.",
                  "सड़क के उस पार रहने वाला एक किसान हर दिन दूध उत्पादन कर सकता है, लेकिन अगर उसने MPO ज्वाइन नहीं किया — शेयर नहीं खरीदे, सदस्यता फॉर्म नहीं भरा — तो वह सदस्य नहीं है। सिर्फ सदस्य ही असल में कंपनी के मालिक होते हैं।"
                )
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": L(
                  "What makes someone a 'Member' of an MPO, and not just a milk producer?",
                  "किसी को MPO का 'सदस्य' क्या बनाता है, सिर्फ दूध उत्पादक नहीं?"
                ),
                "options": [
                  L("Owning the most cows in the village", "गाँव में सबसे ज़्यादा गायें रखना"),
                  L(
                    "Formally joining the MPO, holding shares, and taking on membership duties",
                    "विधिवत रूप से MPO ज्वाइन करना, शेयर रखना, और सदस्यता के कर्तव्य निभाना"
                  ),
                  L("Living closest to the MPP", "MPP के सबसे करीब रहना"),
                  L("Being the oldest farmer in the village", "गाँव का सबसे बुज़ुर्ग किसान होना")
                ],
                "answer": 1,
                "explain": L(
                  "A Member has formally joined, holds shares, and has both rights and duties — not just anyone who produces milk.",
                  "एक सदस्य ने विधिवत रूप से ज्वाइन किया है, शेयर रखता है, और उसके पास अधिकार व कर्तव्य दोनों हैं — सिर्फ दूध उत्पादन करने वाला कोई भी नहीं।"
                )
              },
              {
                "type": "truefalse",
                "q": L(
                  "Every milk producer in a village is automatically a Member of the local MPO.",
                  "गाँव का हर दूध उत्पादक अपने आप स्थानीय MPO का सदस्य बन जाता है।"
                ),
                "answer": false,
                "explain": L(
                  "A milk producer only becomes a Member after formally joining the MPO and taking up shares.",
                  "एक दूध उत्पादक तभी सदस्य बनता है जब वह विधिवत रूप से MPO ज्वाइन करे और शेयर ले।"
                )
              }
            ]
          },
          {
            "id": "t-members-only",
            "title": L("Business Only With Members", "सिर्फ सदस्यों के साथ व्यापार"),
            "teach": [
              {
                "type": "text",
                "heading": L("Design Principle 1: Business Only With Members", "डिज़ाइन सिद्धांत 1: सिर्फ सदस्यों के साथ व्यापार"),
                "html": L(
                  "An MPO's most basic rule is: it does business only with its own <b>Members</b>. Why? Because an MPO is a user-owned enterprise — it belongs to the very people who use its services. Non-members should not get the same benefits without sharing the same responsibilities.",
                  "एक MPO का सबसे बुनियादी नियम है: यह सिर्फ अपने <b>सदस्यों</b> के साथ व्यापार करती है। क्यों? क्योंकि एक MPO उपयोगकर्ता-स्वामित्व वाला उद्यम है — यह उन्हीं लोगों की है जो इसकी सेवाओं का उपयोग करते हैं। गैर-सदस्यों को समान ज़िम्मेदारियाँ साझा किए बिना समान फ़ायदे नहीं मिलने चाहिए।"
                )
              },
              {
                "type": "callout",
                "style": "warning",
                "heading": L("What Goes Wrong Otherwise", "वरना क्या गलत होता है"),
                "text": L(
                  "If an MPO accepts milk from non-members too, it can hurt the very members who invested their own share capital and time — because outsiders get the same payment and services for free, without any ownership stake or duty.",
                  "अगर एक MPO गैर-सदस्यों से भी दूध लेती है, तो इससे उन्हीं सदस्यों को नुकसान हो सकता है जिन्होंने अपनी शेयर पूंजी और समय लगाया है — क्योंकि बाहरी लोगों को बिना किसी स्वामित्व हिस्से या कर्तव्य के मुफ्त में वही भुगतान और सेवाएँ मिल जाती हैं।"
                )
              },
              {
                "type": "text",
                "heading": L("How MPOs Make This Work", "MPO इसे कैसे संभव बनाती हैं"),
                "html": L(
                  "To keep this rule strong, MPOs keep membership enrolment simple and easy, get Board approval for new members, and give each member a special code so only members' milk is accepted for payment.",
                  "इस नियम को मज़बूत बनाए रखने के लिए, MPO सदस्यता नामांकन को सरल और आसान रखती हैं, नए सदस्यों के लिए बोर्ड की मंज़ूरी लेती हैं, और हर सदस्य को एक विशेष कोड देती हैं ताकि भुगतान के लिए सिर्फ सदस्यों का दूध ही स्वीकार किया जाए।"
                )
              },
              {
                "type": "glossary",
                "term": L("Share Capital", "शेयर पूंजी (Share Capital)"),
                "meaning": L(
                  "Money that a member pays into the company to become a part-owner, in return for shares.",
                  "वह पैसा जो एक सदस्य शेयरों के बदले आंशिक-मालिक बनने के लिए कंपनी में जमा करता है।"
                )
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": L("Why does an MPO do business only with its Members?", "एक MPO सिर्फ अपने सदस्यों के साथ व्यापार क्यों करती है?"),
                "options": [
                  L(
                    "Because it is a user-owned enterprise, and benefits should go to those who share the responsibilities",
                    "क्योंकि यह उपयोगकर्ता-स्वामित्व वाला उद्यम है, और फ़ायदे उन्हें मिलने चाहिए जो ज़िम्मेदारियाँ साझा करते हैं"
                  ),
                  L("Because the government forbids selling to non-members", "क्योंकि सरकार गैर-सदस्यों को बेचने से मना करती है"),
                  L("Because non-members produce worse milk", "क्योंकि गैर-सदस्य खराब दूध उत्पादन करते हैं"),
                  L("Because Members pay higher prices", "क्योंकि सदस्य ज़्यादा कीमत चुकाते हैं")
                ],
                "answer": 0,
                "explain": L(
                  "An MPO belongs to its Members. Business only with Members keeps ownership and benefit fairly linked.",
                  "एक MPO अपने सदस्यों की होती है। सिर्फ सदस्यों के साथ व्यापार स्वामित्व और फ़ायदे को न्यायपूर्ण तरीके से जोड़े रखता है।"
                )
              },
              {
                "type": "truefalse",
                "q": L(
                  "It is good practice for an MPO to buy milk from non-members regularly, alongside members.",
                  "एक MPO के लिए सदस्यों के साथ-साथ नियमित रूप से गैर-सदस्यों से भी दूध खरीदना अच्छी प्रथा है।"
                ),
                "answer": false,
                "explain": L(
                  "This weakens the MPO's ownership model and is unfair to Members who invested share capital and took on duties.",
                  "यह MPO के स्वामित्व मॉडल को कमज़ोर करता है और उन सदस्यों के लिए अन्यायपूर्ण है जिन्होंने शेयर पूंजी लगाई और कर्तव्य निभाए।"
                )
              }
            ]
          },
          {
            "id": "t-active-membership",
            "title": L("Active Members, Not Free Riders", "सक्रिय सदस्य, मुफ्तखोर नहीं"),
            "teach": [
              {
                "type": "text",
                "heading": L("Design Principle 2: No Free Riders", "डिज़ाइन सिद्धांत 2: कोई मुफ्तखोर नहीं"),
                "html": L(
                  "Being a Member is not just a one-time sign-up. Members are expected to stay active — regularly supplying milk and taking part in meetings. Someone who joined once, took the benefits, but never supplies milk or shows up, is a <b>free rider</b>.",
                  "सदस्य होना सिर्फ एक बार का नामांकन नहीं है। सदस्यों से उम्मीद की जाती है कि वे सक्रिय रहें — नियमित रूप से दूध दें और बैठकों में हिस्सा लें। जो व्यक्ति एक बार जुड़ा, फ़ायदे लिए, लेकिन कभी दूध नहीं देता या नहीं आता, वह <b>मुफ्तखोर (free rider)</b> है।"
                )
              },
              {
                "type": "glossary",
                "term": L("Free Rider", "मुफ्तखोर (Free Rider)"),
                "meaning": L(
                  "Someone who enjoys the benefits of membership without actively contributing to or participating in the business.",
                  "वह व्यक्ति जो व्यापार में सक्रिय रूप से योगदान या भागीदारी किए बिना सदस्यता के फ़ायदे उठाता है।"
                )
              },
              {
                "type": "callout",
                "style": "info",
                "heading": L("Why This Matters", "यह क्यों ज़रूरी है"),
                "text": L(
                  "Active participation makes the business predictable and efficient. If too many members are inactive, it becomes harder to plan operations, and it wastes the company's resources.",
                  "सक्रिय भागीदारी व्यापार को अनुमानित और कुशल बनाती है। अगर बहुत सारे सदस्य निष्क्रिय हों, तो काम की योजना बनाना मुश्किल हो जाता है, और कंपनी के संसाधन बर्बाद होते हैं।"
                )
              },
              {
                "type": "text",
                "heading": L("How MPOs Encourage Active Membership", "MPO सक्रिय सदस्यता को कैसे प्रोत्साहित करती हैं"),
                "html": L(
                  "MPOs follow up regularly with new members to make sure they start supplying milk. They hold special meetings with members who are not supplying milk regularly. And anyone who wants to stand for election as a Director must meet stricter conditions, like being a regular, active supplier.",
                  "MPO नए सदस्यों के साथ नियमित रूप से संपर्क बनाए रखती हैं ताकि वे दूध देना शुरू करें। वे उन सदस्यों के साथ विशेष बैठकें करती हैं जो नियमित रूप से दूध नहीं दे रहे। और जो कोई निदेशक पद के लिए चुनाव लड़ना चाहता है, उसे सख्त शर्तें पूरी करनी होती हैं, जैसे नियमित, सक्रिय आपूर्तिकर्ता होना।"
                )
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": L("What is a 'free rider' in an MPO?", "एक MPO में 'मुफ्तखोर' क्या है?"),
                "options": [
                  L("A farmer who delivers milk on a bicycle", "एक किसान जो साइकिल पर दूध पहुँचाता है"),
                  L(
                    "Someone who enjoys membership benefits without actively contributing or participating",
                    "वह जो योगदान या भागीदारी किए बिना सदस्यता के फ़ायदे उठाता है"
                  ),
                  L("A member who wins a Board election", "एक सदस्य जो बोर्ड चुनाव जीतता है"),
                  L("A Sahayak who visits every MPP", "एक सहायक जो हर MPP का दौरा करता है")
                ],
                "answer": 1,
                "explain": L(
                  "A free rider takes the benefits of membership without regularly supplying milk or taking part.",
                  "एक मुफ्तखोर नियमित रूप से दूध दिए या भाग लिए बिना सदस्यता के फ़ायदे लेता है।"
                )
              },
              {
                "type": "mcq",
                "q": L(
                  "What is expected of a member who wants to stand for election as a Director?",
                  "जो सदस्य निदेशक पद के लिए चुनाव लड़ना चाहता है, उससे क्या उम्मीद की जाती है?"
                ),
                "options": [
                  L("Nothing extra is expected", "कुछ अतिरिक्त उम्मीद नहीं की जाती"),
                  L(
                    "They must meet stricter conditions, like being a regular, active milk supplier",
                    "उन्हें सख्त शर्तें पूरी करनी होती हैं, जैसे नियमित, सक्रिय दूध आपूर्तिकर्ता होना"
                  ),
                  L("They must own the most land in the village", "उनके पास गाँव की सबसे ज़्यादा ज़मीन होनी चाहिए"),
                  L("They must be related to a current Director", "उन्हें किसी मौजूदा निदेशक का रिश्तेदार होना चाहिए")
                ],
                "answer": 1,
                "explain": L(
                  "MPOs apply stricter conditions for Director candidates, to make sure leaders are genuinely active members.",
                  "MPO निदेशक उम्मीदवारों के लिए सख्त शर्तें लागू करती हैं, ताकि यह सुनिश्चित हो सके कि नेता सच में सक्रिय सदस्य हैं।"
                )
              }
            ]
          }
        ],
        "finalQuiz": {
          "passScore": 70,
          "questions": [
            {
              "topicId": "t-three-words",
              "type": "mcq",
              "q": L(
                "Which word describes a person who has formally joined the MPO and holds shares in it?",
                "कौन-सा शब्द उस व्यक्ति को बताता है जिसने विधिवत रूप से MPO ज्वाइन किया है और उसमें शेयर रखता है?"
              ),
              "options": [
                L("Farmer", "किसान"),
                L("Milk Producer", "दूध उत्पादक"),
                L("Member", "सदस्य"),
                L("Trader", "व्यापारी")
              ],
              "answer": 2,
              "explain": L(
                "A Member is a milk producer who has formally joined the MPO and holds shares, with ownership rights and duties.",
                "एक सदस्य वह दूध उत्पादक है जिसने विधिवत रूप से MPO ज्वाइन किया है और शेयर रखता है, स्वामित्व अधिकार व कर्तव्यों के साथ।"
              )
            },
            {
              "topicId": "t-members-only",
              "type": "truefalse",
              "q": L(
                "An MPO's basic rule is to do business only with its Members.",
                "एक MPO का बुनियादी नियम है सिर्फ अपने सदस्यों के साथ व्यापार करना।"
              ),
              "answer": true,
              "explain": L(
                "Yes — this is Design Principle 1, and it protects the value of being a Member.",
                "हाँ — यह डिज़ाइन सिद्धांत 1 है, और यह सदस्य होने के मूल्य की रक्षा करता है।"
              )
            },
            {
              "topicId": "t-active-membership",
              "type": "mcq",
              "q": L("Why do MPOs discourage 'free riders'?", "MPO 'मुफ्तखोरों' को हतोत्साहित क्यों करती हैं?"),
              "options": [
                L(
                  "Because too many inactive members make business planning harder and waste resources",
                  "क्योंकि बहुत सारे निष्क्रिय सदस्य व्यापार की योजना बनाना मुश्किल बनाते हैं और संसाधन बर्बाद करते हैं"
                ),
                L("Because free riders produce more milk than everyone else", "क्योंकि मुफ्तखोर सबसे ज़्यादा दूध उत्पादन करते हैं"),
                L("Because the law bans inactive members entirely", "क्योंकि कानून निष्क्रिय सदस्यों पर पूरी तरह प्रतिबंध लगाता है"),
                L("Because free riders are always dishonest", "क्योंकि मुफ्तखोर हमेशा बेईमान होते हैं")
              ],
              "answer": 0,
              "explain": L(
                "Inactive membership makes operations unpredictable and wastes company resources — so MPOs encourage active participation.",
                "निष्क्रिय सदस्यता काम को अनिश्चित बनाती है और कंपनी के संसाधन बर्बाद करती है — इसलिए MPO सक्रिय भागीदारी को प्रोत्साहित करती हैं।"
              )
            }
          ]
        }
      },
      {
        "id": "m3-l2",
        "title": L("Owning a Real Stake", "एक असली हिस्सेदारी का मालिक होना"),
        "estMinutes": 9,
        "hook": [
          {
            "type": "hero",
            "heading": L("Owning a Real Stake", "एक असली हिस्सेदारी का मालिक होना"),
            "text": L(
              "Real ownership means more than a membership card. Let's see how MPOs link ownership to real contribution — and how members get heard.",
              "असली स्वामित्व का मतलब सिर्फ सदस्यता कार्ड से कहीं ज़्यादा है। आइए देखें कि MPO स्वामित्व को असली योगदान से कैसे जोड़ती हैं — और सदस्यों की बात कैसे सुनी जाती है।"
            )
          }
        ],
        "topics": [
          {
            "id": "t-skin-in-game",
            "title": L("Equity in Proportion to Patronage", "योगदान के अनुपात में इक्विटी"),
            "teach": [
              {
                "type": "text",
                "heading": L("Design Principle 3: Skin in the Game", "डिज़ाइन सिद्धांत 3: निजी दाँव (Skin in the Game)"),
                "html": L(
                  "In an MPO, the more milk a member supplies, the more shares (<b>equity</b>) they are expected to hold. This is sometimes called having <b>'skin in the game'</b> — members have their own money invested, so they care about protecting the company.",
                  "एक MPO में, सदस्य जितना ज़्यादा दूध देता है, उससे उतने ही ज़्यादा शेयर (<b>इक्विटी</b>) रखने की उम्मीद की जाती है। इसे कभी-कभी <b>'स्किन इन द गेम'</b> कहा जाता है — सदस्यों का अपना पैसा लगा होता है, इसलिए वे कंपनी की रक्षा की परवाह करते हैं।"
                )
              },
              {
                "type": "glossary",
                "term": L("Patronage", "योगदान (Patronage)"),
                "meaning": L(
                  "How much business — in this case, how much milk — a member actually gives to the company.",
                  "एक सदस्य कंपनी को असल में कितना व्यापार — इस मामले में, कितना दूध — देता है।"
                )
              },
              {
                "type": "glossary",
                "term": L("Equity", "इक्विटी (Equity)"),
                "meaning": L(
                  "The share of ownership a member holds in the company, based on the shares they bought.",
                  "एक सदस्य के पास कंपनी में स्वामित्व का वह हिस्सा, जो उसके खरीदे गए शेयरों पर आधारित है।"
                )
              },
              {
                "type": "example",
                "heading": L("In Numbers", "संख्याओं में"),
                "text": L(
                  "If a member supplies twice as much milk as another member, the company expects them to hold roughly twice as much equity too — keeping ownership fair and linked to real contribution.",
                  "अगर एक सदस्य दूसरे सदस्य से दोगुना दूध देता है, तो कंपनी उम्मीद करती है कि उसके पास लगभग दोगुनी इक्विटी भी हो — जिससे स्वामित्व न्यायपूर्ण रहे और असली योगदान से जुड़ा रहे।"
                )
              },
              {
                "type": "text",
                "heading": L("How MPOs Make This Work", "MPO इसे कैसे संभव बनाती हैं"),
                "html": L(
                  "MPOs display each member's patronage details at the MPP, hand out share certificates on time, and share information about profits — so members can see and trust the link between what they give and what they own.",
                  "MPO हर सदस्य के योगदान का ब्यौरा MPP पर दिखाती हैं, समय पर शेयर प्रमाणपत्र देती हैं, और मुनाफ़े की जानकारी साझा करती हैं — ताकि सदस्य यह देख और भरोसा कर सकें कि वे क्या देते हैं और क्या रखते हैं, इसमें क्या संबंध है।"
                )
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": L(
                  "What does 'skin in the game' mean for a member of an MPO?",
                  "एक MPO के सदस्य के लिए 'स्किन इन द गेम' का क्या मतलब है?"
                ),
                "options": [
                  L(
                    "They have their own money invested, so they care about protecting the company",
                    "उनका अपना पैसा लगा है, इसलिए वे कंपनी की रक्षा की परवाह करते हैं"
                  ),
                  L("They must physically work at the MPP every day", "उन्हें हर दिन MPP पर शारीरिक रूप से काम करना ज़रूरी है"),
                  L("They get free milk for their family", "उन्हें अपने परिवार के लिए मुफ्त दूध मिलता है"),
                  L("They are exempt from all rules", "वे सभी नियमों से मुक्त हैं")
                ],
                "answer": 0,
                "explain": L(
                  "Skin in the game means a member has real money (equity) invested, giving them a genuine stake in the company's success.",
                  "स्किन इन द गेम का मतलब है कि एक सदस्य का असली पैसा (इक्विटी) लगा है, जिससे कंपनी की सफलता में उसकी असली हिस्सेदारी बनती है।"
                )
              },
              {
                "type": "truefalse",
                "q": L(
                  "A member's equity (shares) should be linked to how much milk they actually supply.",
                  "एक सदस्य की इक्विटी (शेयर) उसके असल में दिए गए दूध की मात्रा से जुड़ी होनी चाहिए।"
                ),
                "answer": true,
                "explain": L(
                  "Yes — equity in proportion to patronage keeps ownership fair and tied to real contribution.",
                  "हाँ — योगदान के अनुपात में इक्विटी स्वामित्व को न्यायपूर्ण रखती है और असली योगदान से जोड़े रखती है।"
                )
              }
            ]
          },
          {
            "id": "t-member-classes",
            "title": L("Fair Representation on the Board", "बोर्ड में न्यायपूर्ण प्रतिनिधित्व"),
            "teach": [
              {
                "type": "text",
                "heading": L("Design Principle 4: Member Classes", "डिज़ाइन सिद्धांत 4: सदस्य वर्ग"),
                "html": L(
                  "Not all members supply the same amount of milk. So an MPO can group members into different <b>classes</b> based on how much milk (patronage) they supply, and give each class fair representation on the Board.",
                  "सभी सदस्य समान मात्रा में दूध नहीं देते। इसलिए एक MPO सदस्यों को उनके दूध (योगदान) के आधार पर अलग-अलग <b>वर्गों</b> में बाँट सकती है, और हर वर्ग को बोर्ड में न्यायपूर्ण प्रतिनिधित्व दे सकती है।"
                )
              },
              {
                "type": "glossary",
                "term": L("Member Class", "सदस्य वर्ग (Member Class)"),
                "meaning": L(
                  "A group of members categorised by how much milk they supply, used to make sure the Board fairly represents everyone.",
                  "सदस्यों का एक समूह जो उनके दूध की मात्रा के आधार पर वर्गीकृत होता है, ताकि यह सुनिश्चित हो सके कि बोर्ड सभी का न्यायपूर्ण प्रतिनिधित्व करे।"
                )
              },
              {
                "type": "text",
                "heading": L("Why This Is Fair", "यह न्यायपूर्ण क्यों है"),
                "html": L(
                  "Board seats for each member class are decided in proportion to the milk that class supplies. This way, both big and small suppliers get a genuine voice in decisions — not just the loudest or the largest.",
                  "हर सदस्य वर्ग की बोर्ड सीटें उस वर्ग द्वारा दिए गए दूध के अनुपात में तय की जाती हैं। इस तरह, बड़े और छोटे दोनों तरह के आपूर्तिकर्ताओं को फैसलों में असली आवाज़ मिलती है — सिर्फ सबसे ज़ोरदार या सबसे बड़े को नहीं।"
                )
              },
              {
                "type": "callout",
                "style": "info",
                "heading": L("Decided Together", "मिलकर तय किया गया"),
                "text": L(
                  "How members are grouped into classes is approved at the company's AGM — a yearly meeting where all members can take part in big decisions.",
                  "सदस्यों को वर्गों में कैसे बाँटा जाए, यह कंपनी की AGM में मंज़ूर किया जाता है — एक सालाना बैठक जहाँ सभी सदस्य बड़े फैसलों में हिस्सा ले सकते हैं।"
                )
              },
              {
                "type": "glossary",
                "term": L("AGM (Annual General Meeting)", "AGM (वार्षिक सामान्य बैठक)"),
                "meaning": L(
                  "A meeting held once a year where all members of the company gather to review performance and make key decisions.",
                  "साल में एक बार होने वाली बैठक, जहाँ कंपनी के सभी सदस्य प्रदर्शन की समीक्षा करने और मुख्य फैसले लेने के लिए इकट्ठा होते हैं।"
                )
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": L(
                  "Why does an MPO create 'member classes' based on patronage?",
                  "एक MPO योगदान के आधार पर 'सदस्य वर्ग' क्यों बनाती है?"
                ),
                "options": [
                  L(
                    "To make sure the Board fairly represents both big and small milk suppliers",
                    "ताकि यह सुनिश्चित हो कि बोर्ड बड़े और छोटे दोनों तरह के दूध आपूर्तिकर्ताओं का न्यायपूर्ण प्रतिनिधित्व करे"
                  ),
                  L("To stop small farmers from joining at all", "ताकि छोटे किसानों को बिल्कुल जुड़ने से रोका जा सके"),
                  L("To give free shares to the largest supplier", "सबसे बड़े आपूर्तिकर्ता को मुफ्त शेयर देने के लिए"),
                  L("To reduce the number of members", "सदस्यों की संख्या कम करने के लिए")
                ],
                "answer": 0,
                "explain": L(
                  "Member classes ensure Board representation is fair and proportional to how much each group contributes.",
                  "सदस्य वर्ग यह सुनिश्चित करते हैं कि बोर्ड में प्रतिनिधित्व न्यायपूर्ण हो और हर समूह के योगदान के अनुपात में हो।"
                )
              },
              {
                "type": "mcq",
                "q": L("Where is the grouping of members into classes approved?", "सदस्यों को वर्गों में बाँटना कहाँ मंज़ूर किया जाता है?"),
                "options": [
                  L("At a private meeting of the CEO alone", "अकेले CEO की एक निजी बैठक में"),
                  L("At the AGM (Annual General Meeting)", "AGM (वार्षिक सामान्य बैठक) में"),
                  L("By the state government", "राज्य सरकार द्वारा"),
                  L("By a private trader", "एक निजी व्यापारी द्वारा")
                ],
                "answer": 1,
                "explain": L(
                  "Member class categorisation is approved at the AGM, where all members can take part.",
                  "सदस्य वर्ग का वर्गीकरण AGM में मंज़ूर किया जाता है, जहाँ सभी सदस्य हिस्सा ले सकते हैं।"
                )
              }
            ]
          },
          {
            "id": "t-grievance",
            "title": L("Being Heard: Communication and Grievance Redressal", "सुने जाना: संचार और शिकायत निवारण"),
            "teach": [
              {
                "type": "text",
                "heading": L("Design Principle 5: A Way to Be Heard", "डिज़ाइन सिद्धांत 5: सुने जाने का एक तरीका"),
                "html": L(
                  "Members need an easy way to talk to their company — and to complain when something goes wrong. This is called <b>grievance redressal</b>.",
                  "सदस्यों को अपनी कंपनी से बात करने का एक आसान तरीका चाहिए होता है — और कुछ गलत होने पर शिकायत करने का भी। इसे <b>शिकायत निवारण (grievance redressal)</b> कहा जाता है।"
                )
              },
              {
                "type": "glossary",
                "term": L("Grievance Redressal", "शिकायत निवारण (Grievance Redressal)"),
                "meaning": L(
                  "A proper system for members to raise complaints and get them resolved.",
                  "सदस्यों के लिए शिकायत दर्ज कराने और उसका समाधान पाने की एक उचित व्यवस्था।"
                )
              },
              {
                "type": "text",
                "heading": L("Tools MPOs Use", "MPO जो साधन उपयोग करती हैं"),
                "html": L(
                  "Many MPOs provide a toll-free phone number for members to register complaints, and appoint a <b>Grievance Redressal Officer (GRO)</b> whose job is to solve them. Village and member representative groups hold regular meetings and share notes with senior company officials.",
                  "कई MPO सदस्यों के लिए शिकायत दर्ज कराने के लिए एक टोल-फ्री नंबर देती हैं, और एक <b>शिकायत निवारण अधिकारी (GRO)</b> नियुक्त करती हैं जिसका काम उन्हें हल करना है। गाँव और सदस्य प्रतिनिधि समूह नियमित बैठकें करते हैं और वरिष्ठ कंपनी अधिकारियों के साथ बातें साझा करते हैं।"
                )
              },
              {
                "type": "glossary",
                "term": L("GRO (Grievance Redressal Officer)", "GRO (शिकायत निवारण अधिकारी)"),
                "meaning": L(
                  "The staff member responsible for handling and resolving member complaints.",
                  "वह कर्मचारी जो सदस्यों की शिकायतों को संभालने और हल करने के लिए ज़िम्मेदार है।"
                )
              },
              {
                "type": "callout",
                "style": "tip",
                "heading": L("Why It Builds Trust", "यह भरोसा क्यों बनाता है"),
                "text": L(
                  "When members know exactly who to call, and see their problems actually get solved, they trust the company more — and stay active, engaged members.",
                  "जब सदस्यों को ठीक-ठीक पता होता है कि किसे बुलाना है, और वे देखते हैं कि उनकी समस्याएँ वाकई हल होती हैं, तो वे कंपनी पर ज़्यादा भरोसा करते हैं — और सक्रिय, जुड़े हुए सदस्य बने रहते हैं।"
                )
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": L("What is the job of a GRO (Grievance Redressal Officer)?", "GRO (शिकायत निवारण अधिकारी) का काम क्या है?"),
                "options": [
                  L("To handle and resolve member complaints", "सदस्यों की शिकायतों को संभालना और हल करना"),
                  L("To sell milk to non-members", "गैर-सदस्यों को दूध बेचना"),
                  L("To run the Board elections only", "सिर्फ बोर्ड चुनाव चलाना"),
                  L("To manage the milk tankers", "दूध के टैंकरों को संभालना")
                ],
                "answer": 0,
                "explain": L(
                  "The GRO is specifically responsible for handling and resolving members' complaints.",
                  "GRO खासतौर पर सदस्यों की शिकायतों को संभालने और हल करने के लिए ज़िम्मेदार होता है।"
                )
              },
              {
                "type": "truefalse",
                "q": L(
                  "A toll-free number and a GRO are examples of tools that help with grievance redressal.",
                  "टोल-फ्री नंबर और एक GRO शिकायत निवारण में मदद करने वाले साधनों के उदाहरण हैं।"
                ),
                "answer": true,
                "explain": L(
                  "Yes — these are practical tools MPOs use to make sure members can be heard and helped.",
                  "हाँ — ये व्यावहारिक साधन हैं जिनका उपयोग MPO यह सुनिश्चित करने के लिए करती हैं कि सदस्यों की बात सुनी जाए और उनकी मदद हो।"
                )
              }
            ]
          }
        ],
        "finalQuiz": {
          "passScore": 70,
          "questions": [
            {
              "topicId": "t-skin-in-game",
              "type": "mcq",
              "q": L(
                "A member's equity (shares) in an MPO should ideally be linked to:",
                "एक MPO में सदस्य की इक्विटी (शेयर) आदर्श रूप से किससे जुड़ी होनी चाहिए:"
              ),
              "options": [
                L("Their age", "उनकी उम्र"),
                L("How much milk (patronage) they supply", "वे कितना दूध (योगदान) देते हैं"),
                L("How far they live from the MPP", "वे MPP से कितनी दूर रहते हैं"),
                L("Their family size", "उनके परिवार का आकार")
              ],
              "answer": 1,
              "explain": L(
                "Equity in proportion to patronage keeps ownership fair and tied to real contribution — 'skin in the game'.",
                "योगदान के अनुपात में इक्विटी स्वामित्व को न्यायपूर्ण रखती है और असली योगदान से जोड़े रखती है — 'स्किन इन द गेम'।"
              )
            },
            {
              "topicId": "t-member-classes",
              "type": "truefalse",
              "q": L("Member class categorisation must be approved at the AGM.", "सदस्य वर्ग का वर्गीकरण AGM में मंज़ूर होना ज़रूरी है।"),
              "answer": true,
              "explain": L(
                "Yes — this decision is made together with all members at the Annual General Meeting.",
                "हाँ — यह फैसला वार्षिक सामान्य बैठक में सभी सदस्यों के साथ मिलकर लिया जाता है।"
              )
            },
            {
              "topicId": "t-grievance",
              "type": "mcq",
              "q": L(
                "Why do MPOs set up a formal grievance redressal system?",
                "MPO एक औपचारिक शिकायत निवारण व्यवस्था क्यों बनाती हैं?"
              ),
              "options": [
                L(
                  "So members have a clear way to raise and resolve complaints, which builds trust",
                  "ताकि सदस्यों के पास शिकायत दर्ज कराने और हल कराने का स्पष्ट तरीका हो, जिससे भरोसा बनता है"
                ),
                L("So complaints can be ignored more easily", "ताकि शिकायतों को आसानी से अनदेखा किया जा सके"),
                L("Because the law requires no communication with members", "क्योंकि कानून सदस्यों के साथ कोई संचार न करने की माँग करता है"),
                L("To reduce the number of members", "सदस्यों की संख्या कम करने के लिए")
              ],
              "answer": 0,
              "explain": L(
                "A formal system for hearing and resolving complaints keeps members engaged and builds their trust in the company.",
                "शिकायतें सुनने और हल करने की एक औपचारिक व्यवस्था सदस्यों को जुड़ा रखती है और कंपनी में उनका भरोसा बनाती है।"
              )
            }
          ]
        }
      },
      {
        "id": "m3-l3",
        "title": L("Running It Like a Real Business", "इसे एक असली व्यापार की तरह चलाना"),
        "estMinutes": 8,
        "hook": [
          {
            "type": "hero",
            "heading": L("Running It Like a Real Business", "इसे एक असली व्यापार की तरह चलाना"),
            "text": L(
              "An MPO is not just a village committee — it is a real company competing in the market. Let's see what that takes.",
              "एक MPO सिर्फ एक गाँव समिति नहीं है — यह बाज़ार में मुकाबला करने वाली एक असली कंपनी है। आइए देखें इसके लिए क्या चाहिए।"
            )
          }
        ],
        "topics": [
          {
            "id": "t-professional-mgmt",
            "title": L("Run by Trained Professionals", "प्रशिक्षित पेशेवरों द्वारा संचालित"),
            "teach": [
              {
                "type": "text",
                "heading": L("Design Principle 6: Professional Management", "डिज़ाइन सिद्धांत 6: पेशेवर प्रबंधन"),
                "html": L(
                  "An MPO is a real business enterprise, competing with private and multi-national dairy companies. To succeed, it needs properly trained, capable people running it.",
                  "एक MPO एक असली व्यापारिक उद्यम है, जो निजी और बहुराष्ट्रीय डेयरी कंपनियों से मुकाबला करती है। सफल होने के लिए, इसे ठीक से प्रशिक्षित, सक्षम लोगों की ज़रूरत है जो इसे चलाएँ।"
                )
              },
              {
                "type": "text",
                "heading": L("How MPOs Build This", "MPO इसे कैसे बनाती हैं"),
                "html": L(
                  "MPOs recruit capable staff, train and groom them for their roles, and adopt the best practices used across the dairy business — not just old habits.",
                  "MPO सक्षम कर्मचारियों की भर्ती करती हैं, उन्हें उनकी भूमिकाओं के लिए प्रशिक्षित और तैयार करती हैं, और पूरे डेयरी व्यापार में इस्तेमाल होने वाली सबसे अच्छी प्रथाएँ अपनाती हैं — सिर्फ पुरानी आदतें नहीं।"
                )
              },
              {
                "type": "callout",
                "style": "info",
                "heading": L("Big Enough to Matter", "मायने रखने लायक बड़ा"),
                "text": L(
                  "A design goal for every MPO is to reach a scale of business that is big enough to sustain itself — enough milk, enough members, enough income — so it does not depend forever on outside support.",
                  "हर MPO के लिए एक डिज़ाइन लक्ष्य है इतना बड़ा व्यापार पैमाना हासिल करना जो खुद को टिकाए रख सके — पर्याप्त दूध, पर्याप्त सदस्य, पर्याप्त आय — ताकि यह हमेशा के लिए बाहरी सहायता पर निर्भर न रहे।"
                )
              },
              {
                "type": "glossary",
                "term": L("Economy of Scale", "स्केल की मितव्ययिता (Economy of Scale)"),
                "meaning": L(
                  "When a business becomes more efficient and cost-effective as it grows bigger.",
                  "जब एक व्यापार बड़ा होने के साथ ज़्यादा कुशल और किफ़ायती बनता जाता है।"
                )
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": L(
                  "Why does an MPO need professionally trained management?",
                  "एक MPO को पेशेवर रूप से प्रशिक्षित प्रबंधन की ज़रूरत क्यों है?"
                ),
                "options": [
                  L(
                    "Because it competes with private and multi-national dairy companies, and needs to run efficiently",
                    "क्योंकि यह निजी और बहुराष्ट्रीय डेयरी कंपनियों से मुकाबला करती है, और इसे कुशलता से चलना ज़रूरी है"
                  ),
                  L("Because the law requires it to hire only outsiders", "क्योंकि कानून के अनुसार सिर्फ बाहरी लोगों को रखना ज़रूरी है"),
                  L("Because farmers are not capable of any decisions", "क्योंकि किसान कोई भी फैसला लेने में सक्षम नहीं हैं"),
                  L("Because it has no real business to run", "क्योंकि इसके पास चलाने के लिए कोई असली व्यापार नहीं है")
                ],
                "answer": 0,
                "explain": L(
                  "As a real business competing in the market, an MPO needs skilled, trained people to run it well.",
                  "बाज़ार में मुकाबला करने वाले एक असली व्यापार के तौर पर, एक MPO को अच्छी तरह चलाने के लिए कुशल, प्रशिक्षित लोग चाहिए।"
                )
              },
              {
                "type": "truefalse",
                "q": L(
                  "'Economy of scale' means a business becomes more efficient and cost-effective as it grows bigger.",
                  "'स्केल की मितव्ययिता' का मतलब है कि एक व्यापार बड़ा होने के साथ ज़्यादा कुशल और किफ़ायती बनता है।"
                ),
                "answer": true,
                "explain": L(
                  "Correct — bigger, well-run scale usually brings down costs per unit and improves efficiency.",
                  "सही — बड़ा, अच्छी तरह चलाया गया पैमाना आमतौर पर प्रति इकाई लागत कम करता है और कुशलता बढ़ाता है।"
                )
              }
            ]
          },
          {
            "id": "t-value-chain",
            "title": L("Getting the Most Value for Members", "सदस्यों के लिए सबसे ज़्यादा मूल्य पाना"),
            "teach": [
              {
                "type": "text",
                "heading": L("Design Principle 7: Managing the Whole Value Chain", "डिज़ाइन सिद्धांत 7: पूरी वैल्यू चेन का प्रबंधन"),
                "html": L(
                  "From the moment milk leaves a farmer's animal to the moment it reaches a customer as milk, curd, or ghee, every step is called the <b>value chain</b>. An MPO tries to manage this whole chain efficiently, so more value — and more money — reaches the farmer-members.",
                  "जिस पल दूध किसान के पशु से निकलता है, उस पल से लेकर जब वह दूध, दही, या घी के रूप में ग्राहक तक पहुँचता है, हर कदम को <b>वैल्यू चेन (value chain)</b> कहा जाता है। एक MPO इस पूरी चेन को कुशलता से संभालने की कोशिश करती है, ताकि ज़्यादा मूल्य — और ज़्यादा पैसा — किसान-सदस्यों तक पहुँचे।"
                )
              },
              {
                "type": "glossary",
                "term": L("Value Chain", "वैल्यू चेन (Value Chain)"),
                "meaning": L(
                  "Every step a product passes through, from raw milk at the farm to the finished product reaching a customer.",
                  "एक उत्पाद जिन सभी चरणों से गुज़रता है, फार्म के कच्चे दूध से लेकर ग्राहक तक पहुँचने वाले तैयार उत्पाद तक।"
                )
              },
              {
                "type": "text",
                "heading": L("How MPOs Do This", "MPO यह कैसे करती हैं"),
                "html": L(
                  "They standardise how every part of the business works using <b>SOPs</b> (Standard Operating Procedures), hire quality auditors to check accounting practices, and have the Board regularly review how the business is performing — market by market, product by product.",
                  "वे <b>SOP</b> (मानक संचालन प्रक्रिया) का उपयोग करके व्यापार के हर हिस्से को मानकीकृत करती हैं, लेखा-जोखा जाँचने के लिए गुणवत्ता ऑडिटर रखती हैं, और बोर्ड नियमित रूप से यह समीक्षा करता है कि व्यापार कैसा प्रदर्शन कर रहा है — बाज़ार दर बाज़ार, उत्पाद दर उत्पाद।"
                )
              },
              {
                "type": "glossary",
                "term": L("SOP (Standard Operating Procedure)", "SOP (मानक संचालन प्रक्रिया)"),
                "meaning": L(
                  "A written, step-by-step way of doing a task, so it is done correctly and the same way every time.",
                  "किसी काम को करने का एक लिखित, चरण-दर-चरण तरीका, ताकि वह हर बार सही और एक जैसे तरीके से हो।"
                )
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": L("What is the 'value chain' of milk?", "दूध की 'वैल्यू चेन' क्या है?"),
                "options": [
                  L(
                    "Every step from raw milk at the farm to the finished product reaching a customer",
                    "फार्म के कच्चे दूध से लेकर ग्राहक तक पहुँचने वाले तैयार उत्पाद तक के सभी चरण"
                  ),
                  L("Only the moment milk is collected at the MPP", "सिर्फ वह पल जब दूध MPP पर इकट्ठा होता है"),
                  L("The price printed on a milk packet", "दूध के पैकेट पर छपी कीमत"),
                  L("The list of Board members", "बोर्ड सदस्यों की सूची")
                ],
                "answer": 0,
                "explain": L(
                  "The value chain covers every step milk passes through, from the farm to the final product a customer buys.",
                  "वैल्यू चेन उन सभी चरणों को शामिल करती है जिनसे दूध गुज़रता है, फार्म से लेकर ग्राहक द्वारा खरीदे गए अंतिम उत्पाद तक।"
                )
              },
              {
                "type": "mcq",
                "q": L("What does SOP stand for?", "SOP का पूरा नाम क्या है?"),
                "options": [
                  L("Standard Operating Procedure", "मानक संचालन प्रक्रिया"),
                  L("State Office Policy", "स्टेट ऑफिस पॉलिसी"),
                  L("Special Ownership Plan", "स्पेशल ओनरशिप प्लान"),
                  L("Simple Order Process", "सिंपल ऑर्डर प्रोसेस")
                ],
                "answer": 0,
                "explain": L(
                  "SOP means Standard Operating Procedure — a consistent, written way of doing a task correctly.",
                  "SOP का मतलब है मानक संचालन प्रक्रिया — किसी काम को सही तरीके से करने का एक स्थिर, लिखित तरीका।"
                )
              }
            ]
          },
          {
            "id": "t-technology",
            "title": L("Using Technology for Transparency", "पारदर्शिता के लिए तकनीक का उपयोग"),
            "teach": [
              {
                "type": "text",
                "heading": L("Design Principle 8: Technology for Trust", "डिज़ाइन सिद्धांत 8: भरोसे के लिए तकनीक"),
                "html": L(
                  "Good governance needs good information. MPOs use technology to track data accurately, keep members updated, and stay ready for new tools in the future.",
                  "अच्छे प्रशासन के लिए अच्छी जानकारी चाहिए। MPO डेटा को सही ढंग से ट्रैक करने, सदस्यों को अपडेट रखने, और भविष्य के नए साधनों के लिए तैयार रहने के लिए तकनीक का उपयोग करती हैं।"
                )
              },
              {
                "type": "text",
                "heading": L("What This Looks Like", "यह कैसा दिखता है"),
                "html": L(
                  "MPOs share each member's equity and patronage details regularly, automate as much of the process as they can (like the DPMCU machines you may use at an MPP), and adopt new digital tools to stay future-ready.",
                  "MPO हर सदस्य की इक्विटी और योगदान का ब्यौरा नियमित रूप से साझा करती हैं, जितना हो सके प्रक्रिया को स्वचालित बनाती हैं (जैसे DPMCU मशीनें जो आप MPP पर उपयोग कर सकते हैं), और भविष्य के लिए तैयार रहने के लिए नए डिजिटल साधन अपनाती हैं।"
                )
              },
              {
                "type": "glossary",
                "term": L("DPMCU (Dairy Producer Milk Collection Unit)", "DPMCU (डेयरी प्रोड्यूसर मिल्क कलेक्शन यूनिट)"),
                "meaning": L(
                  "A machine at the MPP that automatically measures milk quantity and quality, and prints a receipt.",
                  "MPP पर लगी एक मशीन जो अपने आप दूध की मात्रा और गुणवत्ता मापती है, और रसीद छापती है।"
                )
              },
              {
                "type": "callout",
                "style": "warning",
                "heading": L("What Happens Without It", "इसके बिना क्या होता है"),
                "text": L(
                  "Without reliable technology and data, it becomes hard to know which members are active, resolve payment disputes fairly, or build member trust. You'll see exactly what this looks like in the next lesson's real case study.",
                  "भरोसेमंद तकनीक और डेटा के बिना, यह जानना मुश्किल हो जाता है कि कौन-से सदस्य सक्रिय हैं, भुगतान विवादों को न्यायपूर्ण तरीके से हल करना, या सदस्यों का भरोसा बनाना। अगली पाठ की असली केस स्टडी में आप ठीक-ठीक देखेंगे कि यह कैसा दिखता है।"
                )
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": L("What is a DPMCU used for?", "DPMCU किसलिए उपयोग होता है?"),
                "options": [
                  L(
                    "Automatically measuring milk quantity and quality at the MPP, and printing a receipt",
                    "MPP पर अपने आप दूध की मात्रा और गुणवत्ता मापना, और रसीद छापना"
                  ),
                  L("Paying member salaries", "सदस्यों की तनख्वाह देना"),
                  L("Running Board elections", "बोर्ड चुनाव चलाना"),
                  L("Transporting milk to the city", "दूध को शहर तक पहुँचाना")
                ],
                "answer": 0,
                "explain": L(
                  "A DPMCU is the machine at the MPP that measures milk and prints a collection receipt.",
                  "DPMCU MPP पर लगी वह मशीन है जो दूध मापती है और संग्रह रसीद छापती है।"
                )
              },
              {
                "type": "truefalse",
                "q": L(
                  "Reliable technology and data help build trust and resolve disputes fairly in an MPO.",
                  "भरोसेमंद तकनीक और डेटा एक MPO में भरोसा बनाने और विवादों को न्यायपूर्ण तरीके से हल करने में मदद करते हैं।"
                ),
                "answer": true,
                "explain": L(
                  "Yes — good data and technology support transparency, fairness, and member trust.",
                  "हाँ — अच्छा डेटा और तकनीक पारदर्शिता, न्यायपूर्णता और सदस्यों के भरोसे में मदद करते हैं।"
                )
              }
            ]
          }
        ],
        "finalQuiz": {
          "passScore": 70,
          "questions": [
            {
              "topicId": "t-professional-mgmt",
              "type": "mcq",
              "q": L(
                "Why do MPOs need to run like professionally managed businesses?",
                "MPO को पेशेवर रूप से प्रबंधित व्यापार की तरह क्यों चलना चाहिए?"
              ),
              "options": [
                L(
                  "Because they compete with private and multi-national dairy companies",
                  "क्योंकि वे निजी और बहुराष्ट्रीय डेयरी कंपनियों से मुकाबला करती हैं"
                ),
                L("Because farmers are not allowed to be involved", "क्योंकि किसानों को शामिल होने की अनुमति नहीं है"),
                L("Because the government manages them directly", "क्योंकि सरकार सीधे इन्हें प्रबंधित करती है"),
                L("Because there is no real competition in dairy", "क्योंकि डेयरी में कोई असली प्रतिस्पर्धा नहीं है")
              ],
              "answer": 0,
              "explain": L(
                "MPOs compete in a real market, so they need trained, professional management to succeed and grow.",
                "MPO एक असली बाज़ार में मुकाबला करती हैं, इसलिए सफल होने और बढ़ने के लिए उन्हें प्रशिक्षित, पेशेवर प्रबंधन चाहिए।"
              )
            },
            {
              "topicId": "t-value-chain",
              "type": "truefalse",
              "q": L(
                "Managing the value chain well helps more money reach the farmer-members.",
                "वैल्यू चेन को अच्छी तरह संभालना ज़्यादा पैसा किसान-सदस्यों तक पहुँचाने में मदद करता है।"
              ),
              "answer": true,
              "explain": L(
                "Efficient value chain management increases the value captured at each step, benefiting member-farmers.",
                "कुशल वैल्यू चेन प्रबंधन हर चरण में पकड़े गए मूल्य को बढ़ाता है, जिससे सदस्य-किसानों को फ़ायदा होता है।"
              )
            },
            {
              "topicId": "t-technology",
              "type": "mcq",
              "q": L(
                "What is one benefit of using technology like DPMCUs at the MPP?",
                "MPP पर DPMCU जैसी तकनीक का उपयोग करने का एक फ़ायदा क्या है?"
              ),
              "options": [
                L(
                  "Accurate, automatic measurement that builds transparency and trust",
                  "सटीक, स्वचालित माप जो पारदर्शिता और भरोसा बनाती है"
                ),
                L("It removes the need for any farmers to supply milk", "यह किसानों के दूध देने की ज़रूरत को खत्म कर देती है"),
                L("It replaces the Board of Directors", "यह निदेशक मंडल की जगह ले लेती है"),
                L("It stops members from asking questions", "यह सदस्यों को सवाल पूछने से रोकती है")
              ],
              "answer": 0,
              "explain": L(
                "Technology like DPMCUs makes measurement accurate and consistent, supporting transparency and trust.",
                "DPMCU जैसी तकनीक माप को सटीक और स्थिर बनाती है, जो पारदर्शिता और भरोसे में मदद करती है।"
              )
            }
          ]
        }
      },
      {
        "id": "m3-l4",
        "title": L("Case Study: What Went Wrong at Pragati MPC", "केस स्टडी: प्रगति MPC में क्या गलत हुआ"),
        "estMinutes": 13,
        "hook": [
          {
            "type": "hero",
            "heading": L("Case Study: Pragati Milk Producer Company", "केस स्टडी: प्रगति मिल्क प्रोड्यूसर कंपनी"),
            "text": L(
              "Every design principle you just learned exists for a reason. Let's see what happens to a real MPO when some of them start slipping.",
              "आपने अभी जो हर डिज़ाइन सिद्धांत सीखा, वह किसी वजह से बना है। आइए देखें कि जब उनमें से कुछ फिसलने लगें तो एक असली MPO का क्या होता है।"
            )
          }
        ],
        "topics": [
          {
            "id": "t-pmpc-growth",
            "title": L("A Company That Grew Fast", "एक कंपनी जो तेज़ी से बढ़ी"),
            "teach": [
              {
                "type": "text",
                "heading": L("Meet Pragati MPC", "प्रगति MPC से मिलिए"),
                "html": L(
                  "Pragati Milk Producer Company Limited (PMPC) was set up in 2018 to give milk producers across 42 villages an organised, fair market for their milk. The dream: farmers would not just sell milk, but truly own the business.",
                  "प्रगति मिल्क प्रोड्यूसर कंपनी लिमिटेड (PMPC) की स्थापना 2018 में 42 गाँवों के दूध उत्पादकों को उनके दूध के लिए एक संगठित, न्यायपूर्ण बाज़ार देने के लिए हुई थी। सपना था: किसान सिर्फ दूध न बेचें, बल्कि सच में व्यापार के मालिक बनें।"
                )
              },
              {
                "type": "stat-grid",
                "items": [
                  {
                    "label": L("18 MPPs", "18 MPP"),
                    "text": L(
                      "PMPC grew its milk collection network to 18 Milk Pooling Points across its area.",
                      "PMPC ने अपने क्षेत्र में दूध संग्रह नेटवर्क को 18 मिल्क पूलिंग पॉइंट तक बढ़ाया।"
                    )
                  },
                  {
                    "label": L("1 Bulk Chilling Centre", "1 बल्क चिलिंग सेंटर"),
                    "text": L(
                      "One Bulk Milk Chilling Centre (BMC) can chill up to 10,000 litres of milk a day.",
                      "एक बल्क मिल्क चिलिंग सेंटर (BMC) रोज़ 10,000 लीटर तक दूध ठंडा कर सकता है।"
                    )
                  },
                  {
                    "label": L("Village Sahayaks", "गाँव के सहायक"),
                    "text": L(
                      "Village-level Sahayaks handle milk collection, member engagement and record-keeping.",
                      "गाँव स्तर के सहायक दूध संग्रह, सदस्य जुड़ाव और रिकॉर्ड-कीपिंग संभालते हैं।"
                    )
                  }
                ]
              },
              {
                "type": "ledger",
                "heading": L("A Sahayak's Average Monthly Income at PMPC", "PMPC में एक सहायक की औसत मासिक आय"),
                "rows": [
                  { "label": L("Milk collection commission", "दूध संग्रह कमीशन"), "amount": "₹8,750" },
                  { "label": L("Input sales commission", "इनपुट बिक्री कमीशन"), "amount": "₹2,100" },
                  { "label": L("Incentives", "प्रोत्साहन"), "amount": "₹1,650" },
                  { "label": L("Other income", "अन्य आय"), "amount": "₹3,500" }
                ],
                "total": { "label": L("Total average income", "कुल औसत आय"), "amount": "₹16,000" }
              },
              {
                "type": "text",
                "heading": L("Five Years Later, Cracks Appear", "पाँच साल बाद, दरारें दिखने लगीं"),
                "html": L(
                  "After five years, the Board of Directors began to worry. Membership numbers looked great on paper — but something felt wrong underneath.",
                  "पाँच साल बाद, निदेशक मंडल को चिंता होने लगी। कागज़ पर सदस्यता के आँकड़े बहुत अच्छे लग रहे थे — लेकिन अंदर ही अंदर कुछ गड़बड़ महसूस हो रही थी।"
                )
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": L(
                  "In which year was Pragati Milk Producer Company (PMPC) established?",
                  "प्रगति मिल्क प्रोड्यूसर कंपनी (PMPC) की स्थापना किस साल हुई थी?"
                ),
                "options": ["2002", "2018", "2020", "2026"].map((s) => L(s, s)),
                "answer": 1,
                "explain": L(
                  "PMPC was established in 2018, to give milk producers across 42 villages an organised market.",
                  "PMPC की स्थापना 2018 में हुई थी, ताकि 42 गाँवों के दूध उत्पादकों को एक संगठित बाज़ार मिल सके।"
                )
              },
              {
                "type": "mcq",
                "q": L("How many Milk Pooling Points (MPPs) did PMPC operate?", "PMPC कितने मिल्क पूलिंग पॉइंट (MPP) चलाती थी?"),
                "options": ["8", "12", "18", "42"].map((s) => L(s, s)),
                "answer": 2,
                "explain": L(
                  "PMPC expanded its network to 18 MPPs, plus one Bulk Milk Chilling Centre.",
                  "PMPC ने अपना नेटवर्क 18 MPP तक बढ़ाया, साथ ही एक बल्क मिल्क चिलिंग सेंटर भी।"
                )
              }
            ]
          },
          {
            "id": "t-warning-signs",
            "title": L("The Warning Signs", "चेतावनी के संकेत"),
            "teach": [
              {
                "type": "text",
                "heading": L("Members On Paper vs Members in Practice", "कागज़ पर सदस्य बनाम असल में सदस्य"),
                "html": L(
                  "PMPC had enrolled thousands of members. But how many were actually active — regularly bringing milk and taking part?",
                  "PMPC ने हज़ारों सदस्यों का नामांकन किया था। लेकिन असल में कितने सक्रिय थे — नियमित रूप से दूध लाते और भाग लेते हुए?"
                )
              },
              {
                "type": "stat-grid",
                "items": [
                  {
                    "label": L("4,850 registered members", "4,850 पंजीकृत सदस्य"),
                    "text": L(
                      "The total number of members enrolled in the company.",
                      "कंपनी में नामांकित सदस्यों की कुल संख्या।"
                    )
                  },
                  {
                    "label": L("3,210 supplied milk at least once", "3,210 ने कम से कम एक बार दूध दिया"),
                    "text": L(
                      "Only about two-thirds of registered members even brought milk in the past month.",
                      "पिछले महीने में पंजीकृत सदस्यों में से लगभग दो-तिहाई ने ही दूध लाया था।"
                    )
                  },
                  {
                    "label": L("1,985 regular suppliers", "1,985 नियमित आपूर्तिकर्ता"),
                    "text": L(
                      "Fewer than half of all members supplied milk on more than 25 days that month — the truly active core.",
                      "सभी सदस्यों में से आधे से भी कम ने उस महीने 25 दिनों से ज़्यादा दूध दिया — यही असली सक्रिय आधार था।"
                    )
                  }
                ]
              },
              {
                "type": "callout",
                "style": "warning",
                "heading": L("The Free Rider Problem, in Real Life", "मुफ्तखोर की समस्या, असल ज़िंदगी में"),
                "text": L(
                  "Worse, 638 non-members were also selling milk to PMPC's MPPs — receiving almost the same payment and service as real members, without buying shares or taking on any membership duties. This is exactly the 'free rider' problem you learned about, and it made active members feel cheated.",
                  "और भी बुरा, 638 गैर-सदस्य भी PMPC के MPP को दूध बेच रहे थे — बिना शेयर खरीदे या कोई सदस्यता कर्तव्य निभाए, असली सदस्यों जैसा ही भुगतान और सेवा पा रहे थे। यही ठीक वह 'मुफ्तखोर' समस्या है जो आपने सीखी, और इसने सक्रिय सदस्यों को ठगा हुआ महसूस कराया।"
                )
              },
              {
                "type": "text",
                "heading": L("Weak Skin in the Game", "कमज़ोर निजी दाँव"),
                "html": L(
                  "Many members who now supplied a lot more milk than before still held only the smallest, minimum required shares — breaking the link between patronage and equity that Design Principle 3 calls for.",
                  "कई सदस्य जो अब पहले से बहुत ज़्यादा दूध दे रहे थे, फिर भी सिर्फ सबसे छोटे, न्यूनतम ज़रूरी शेयर ही रखते थे — जिससे योगदान और इक्विटी के बीच वह संबंध टूट रहा था जो डिज़ाइन सिद्धांत 3 माँगता है।"
                )
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": L(
                  "Out of 4,850 registered members, how many were regular suppliers (more than 25 days a month)?",
                  "4,850 पंजीकृत सदस्यों में से, कितने नियमित आपूर्तिकर्ता थे (महीने में 25 दिनों से ज़्यादा)?"
                ),
                "options": ["638", "1,985", "3,210", "4,850"].map((s) => L(s, s)),
                "answer": 1,
                "explain": L(
                  "Only 1,985 members were regular suppliers — a much smaller number than total registered membership.",
                  "सिर्फ 1,985 सदस्य नियमित आपूर्तिकर्ता थे — कुल पंजीकृत सदस्यता से कहीं कम संख्या।"
                )
              },
              {
                "type": "truefalse",
                "q": L(
                  "PMPC's non-member milk suppliers were a healthy sign of a well-run MPO.",
                  "PMPC के गैर-सदस्य दूध आपूर्तिकर्ता एक अच्छी तरह चलने वाली MPO का स्वस्थ संकेत थे।"
                ),
                "answer": false,
                "explain": L(
                  "Non-members getting near-identical benefits without ownership duties is the 'free rider' problem — it weakens the MPO model and upsets real members.",
                  "बिना स्वामित्व कर्तव्यों के लगभग समान फ़ायदे पाने वाले गैर-सदस्य 'मुफ्तखोर' समस्या हैं — यह MPO मॉडल को कमज़ोर करता है और असली सदस्यों को नाराज़ करता है।"
                )
              }
            ]
          },
          {
            "id": "t-fixing-it",
            "title": L("Fixing the System", "व्यवस्था को ठीक करना"),
            "teach": [
              {
                "type": "text",
                "heading": L("Technology Troubles Too", "तकनीक की परेशानियाँ भी"),
                "html": L(
                  "PMPC had installed DPMCU machines at all 18 MPPs, but breakdowns were common. In one year alone, there were 126 total days of downtime, caused by printer failures, testing-machine failures, and other issues.",
                  "PMPC ने सभी 18 MPP पर DPMCU मशीनें लगाई थीं, लेकिन खराबी आम बात थी। सिर्फ एक साल में, प्रिंटर खराबी, टेस्टिंग-मशीन खराबी और अन्य समस्याओं की वजह से कुल 126 दिन काम बंद रहा।"
                )
              },
              {
                "type": "barchart",
                "heading": L("DPMCU Breakdown Incidents (One Year)", "DPMCU खराबी की घटनाएँ (एक साल)"),
                "source": L("PMPC internal case study data", "PMPC आंतरिक केस स्टडी डेटा"),
                "unit": L("incidents", "घटनाएँ"),
                "data": [
                  { "label": L("Printer failure", "प्रिंटर खराबी"), "value": 41 },
                  { "label": L("Software sync problems", "सॉफ्टवेयर सिंक समस्याएँ"), "value": 37 },
                  { "label": L("Analyzer failure", "एनालाइज़र खराबी"), "value": 29 },
                  { "label": L("Power backup failure", "पावर बैकअप खराबी"), "value": 24 },
                  { "label": L("Weigh scale issues", "वज़न तराज़ू समस्याएँ"), "value": 18 }
                ]
              },
              {
                "type": "text",
                "heading": L("No Way to Complain Properly", "ठीक से शिकायत करने का कोई तरीका नहीं"),
                "html": L(
                  "Members had complaints — about payments, milk testing, membership and share capital — 522 complaints in total during the year. But there was no formal system to register or track them. Most were just told to the Sahayak by word of mouth, and many were forgotten.",
                  "सदस्यों की शिकायतें थीं — भुगतान, दूध जाँच, सदस्यता और शेयर पूंजी के बारे में — साल भर में कुल 522 शिकायतें। लेकिन उन्हें दर्ज करने या ट्रैक करने की कोई औपचारिक व्यवस्था नहीं थी। ज़्यादातर सिर्फ मुँह-ज़बानी सहायक को बताई जाती थीं, और कई भुला दी जाती थीं।"
                )
              },
              {
                "type": "text",
                "heading": L("The Board's Response", "बोर्ड की प्रतिक्रिया"),
                "html": L(
                  "The Board considered spending about ₹42 lakh over three years on a digital system (a CRM platform and mobile app) to fix record-keeping, communication and grievance redressal. Some directors worried technology alone would not fix deeper problems, like weak active-membership rules and low participation.",
                  "बोर्ड ने रिकॉर्ड-कीपिंग, संचार और शिकायत निवारण को ठीक करने के लिए तीन सालों में एक डिजिटल व्यवस्था (एक CRM प्लेटफ़ॉर्म और मोबाइल ऐप) पर लगभग ₹42 लाख खर्च करने पर विचार किया। कुछ निदेशकों को चिंता थी कि सिर्फ तकनीक कमज़ोर सक्रिय-सदस्यता नियमों और कम भागीदारी जैसी गहरी समस्याओं को नहीं सुधारेगी।"
                )
              },
              {
                "type": "callout",
                "style": "tip",
                "heading": L("Back to the Design Principles", "डिज़ाइन सिद्धांतों की ओर वापसी"),
                "text": L(
                  "PMPC's real fix is not just new software — it is going back to basics: enforcing 'business only with members', encouraging active participation, linking equity to patronage, and building a proper grievance system. Technology can help, but only alongside strong design principles.",
                  "PMPC का असली समाधान सिर्फ नया सॉफ्टवेयर नहीं है — यह बुनियादी बातों पर वापस जाना है: 'सिर्फ सदस्यों के साथ व्यापार' लागू करना, सक्रिय भागीदारी को प्रोत्साहित करना, इक्विटी को योगदान से जोड़ना, और एक उचित शिकायत व्यवस्था बनाना। तकनीक मदद कर सकती है, लेकिन सिर्फ मज़बूत डिज़ाइन सिद्धांतों के साथ।"
                )
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": L(
                  "About how many member complaints did PMPC receive in one year, with no formal tracking system?",
                  "PMPC को बिना किसी औपचारिक ट्रैकिंग व्यवस्था के एक साल में लगभग कितनी सदस्य शिकायतें मिलीं?"
                ),
                "options": ["126", "42", "522", "638"].map((s) => L(s, s)),
                "answer": 2,
                "explain": L(
                  "PMPC received 522 complaints in the year, but had no formal system to register or track them.",
                  "PMPC को साल भर में 522 शिकायतें मिलीं, लेकिन उन्हें दर्ज या ट्रैक करने की कोई औपचारिक व्यवस्था नहीं थी।"
                )
              },
              {
                "type": "truefalse",
                "q": L(
                  "Buying new technology alone is enough to fix all of PMPC's governance problems.",
                  "सिर्फ नई तकनीक खरीदना PMPC की सभी प्रशासनिक समस्याओं को ठीक करने के लिए काफ़ी है।"
                ),
                "answer": false,
                "explain": L(
                  "Technology helps, but PMPC also needs to strengthen its core design principles — active membership, equity linked to patronage, and grievance redressal.",
                  "तकनीक मदद करती है, लेकिन PMPC को अपने मूल डिज़ाइन सिद्धांतों को भी मज़बूत करना होगा — सक्रिय सदस्यता, योगदान से जुड़ी इक्विटी, और शिकायत निवारण।"
                )
              }
            ]
          }
        ],
        "finalQuiz": {
          "passScore": 70,
          "isFinal": true,
          "questions": [
            {
              "topicId": "t-pmpc-growth",
              "type": "mcq",
              "q": L(
                "PMPC was set up to give milk producers across how many villages an organised market?",
                "PMPC कितने गाँवों के दूध उत्पादकों को एक संगठित बाज़ार देने के लिए बनाई गई थी?"
              ),
              "options": ["18", "42", "126", "522"].map((s) => L(s, s)),
              "answer": 1,
              "explain": L("PMPC served a semi-rural cluster of 42 villages.", "PMPC 42 गाँवों के एक अर्ध-ग्रामीण समूह की सेवा करती थी।")
            },
            {
              "topicId": "t-warning-signs",
              "type": "mcq",
              "q": L(
                "What did the gap between 4,850 registered members and 1,985 regular suppliers reveal?",
                "4,850 पंजीकृत सदस्यों और 1,985 नियमित आपूर्तिकर्ताओं के बीच के अंतर ने क्या उजागर किया?"
              ),
              "options": [
                L("That most members were highly active and engaged", "कि ज़्यादातर सदस्य बहुत सक्रिय और जुड़े हुए थे"),
                L(
                  "That a large share of 'members' were inactive or barely participating",
                  "कि 'सदस्यों' का एक बड़ा हिस्सा निष्क्रिय था या मुश्किल से भाग ले रहा था"
                ),
                L("That PMPC had too few registered members", "कि PMPC के पास बहुत कम पंजीकृत सदस्य थे"),
                L("That non-members were the most loyal suppliers", "कि गैर-सदस्य सबसे वफ़ादार आपूर्तिकर्ता थे")
              ],
              "answer": 1,
              "explain": L(
                "The big gap between registered and regularly active members showed weak active-membership enforcement — a warning sign for any MPO.",
                "पंजीकृत और नियमित सक्रिय सदस्यों के बीच बड़ा अंतर कमज़ोर सक्रिय-सदस्यता प्रवर्तन दिखाता है — किसी भी MPO के लिए एक चेतावनी संकेत।"
              )
            },
            {
              "topicId": "t-warning-signs",
              "type": "truefalse",
              "q": L(
                "Accepting milk from 638 non-members alongside members is a good long-term practice for an MPO.",
                "सदस्यों के साथ-साथ 638 गैर-सदस्यों से दूध लेना एक MPO के लिए अच्छी दीर्घकालिक प्रथा है।"
              ),
              "answer": false,
              "explain": L(
                "This is the 'free rider' problem — it weakens the value of membership and can create dissatisfaction among genuine member-owners.",
                "यह 'मुफ्तखोर' समस्या है — यह सदस्यता के मूल्य को कमज़ोर करती है और असली सदस्य-मालिकों में असंतोष पैदा कर सकती है।"
              )
            },
            {
              "topicId": "t-fixing-it",
              "type": "mcq",
              "q": L("What is the biggest lesson from PMPC's story?", "PMPC की कहानी से सबसे बड़ा सबक क्या है?"),
              "options": [
                L("Technology alone can fix any governance problem", "सिर्फ तकनीक किसी भी प्रशासनिक समस्या को ठीक कर सकती है"),
                L(
                  "Strong design principles — active membership, fair equity, grievance redressal — matter as much as technology",
                  "मज़बूत डिज़ाइन सिद्धांत — सक्रिय सदस्यता, न्यायपूर्ण इक्विटी, शिकायत निवारण — तकनीक जितने ही मायने रखते हैं"
                ),
                L("MPOs should stop accepting new members", "MPO को नए सदस्य लेना बंद कर देना चाहिए"),
                L("Case studies are not useful for real MPOs", "केस स्टडी असली MPO के लिए उपयोगी नहीं हैं")
              ],
              "answer": 1,
              "explain": L(
                "PMPC's troubles show that design principles and technology must work together — neither one alone is enough to keep an MPO healthy.",
                "PMPC की परेशानियाँ दिखाती हैं कि डिज़ाइन सिद्धांत और तकनीक को साथ काम करना चाहिए — एक MPO को स्वस्थ रखने के लिए अकेला कोई भी काफ़ी नहीं है।"
              )
            }
          ]
        }
      }
    ]
  },
  {
    "id": "m4",
    "number": 4,
    "title": L("Interaction with Farmers (One to One)", "किसानों के साथ बातचीत (एक-से-एक)"),
    "subtitle": L(
      "Learn how to talk to farmers one-on-one — with patience, respect and honesty. See real example conversations of what to say, and what to avoid.",
      "किसानों से एक-से-एक बात करना सीखिए — धैर्य, सम्मान और ईमानदारी के साथ। क्या कहें और क्या न कहें, इसके असली उदाहरण बातचीत देखिए।"
    ),
    "icon": "milk",
    "available": true,
    "lessons": [
      {
        "id": "m4-l1",
        "title": L("Listening First, Talking Second", "पहले सुनना, फिर बोलना"),
        "estMinutes": 7,
        "hook": [
          {
            "type": "hero",
            "heading": L("Listening First, Talking Second", "पहले सुनना, फिर बोलना"),
            "text": L(
              "Every farmer you meet has their own worries, questions and experience. Before you say anything, learn how to truly listen. This lesson shows you how, with real example conversations.",
              "हर किसान जिससे आप मिलते हैं, उसकी अपनी चिंताएँ, सवाल और अनुभव होते हैं। कुछ भी कहने से पहले, सच में सुनना सीखिए। यह पाठ आपको असली उदाहरण बातचीत के साथ यह दिखाता है।"
            )
          }
        ],
        "topics": [
          {
            "id": "t-why-listening",
            "title": L("Why Listening Comes First", "सुनना पहले क्यों आता है"),
            "teach": [
              {
                "type": "text",
                "heading": L("Your Most Important Tool Is Your Ears", "आपका सबसे ज़रूरी औज़ार आपके कान हैं"),
                "html": L(
                  "As a Sahayak, you meet farmers almost every day — at the MPP, on their farm, or on the road. The most important skill you bring to any conversation is not talking. It is <b>listening</b>.",
                  "एक सहायक के तौर पर, आप लगभग हर दिन किसानों से मिलते हैं — MPP पर, उनके खेत पर, या रास्ते में। किसी भी बातचीत में आपका सबसे ज़रूरी कौशल बोलना नहीं है। यह <b>सुनना</b> है।"
                )
              },
              {
                "type": "text",
                "heading": L("What Good Listening Looks Like", "अच्छा सुनना कैसा दिखता है"),
                "html": L(
                  "Good listening means giving the farmer your full attention, letting them finish speaking, and trying to understand their problem before you reply. It does not mean quietly waiting for your turn to talk.",
                  "अच्छे सुनने का मतलब है किसान को अपना पूरा ध्यान देना, उन्हें बोलना पूरा करने देना, और जवाब देने से पहले उनकी समस्या समझने की कोशिश करना। इसका मतलब चुपचाप अपनी बारी का इंतज़ार करना नहीं है।"
                )
              },
              {
                "type": "glossary",
                "term": L("MPP (Milk Pooling Point)", "MPP (मिल्क पूलिंग पॉइंट)"),
                "meaning": L(
                  "A place in the village where farmers bring their milk every day. It is checked for quality and farmers get paid a fair price, on time.",
                  "गाँव की वह जगह जहाँ किसान हर दिन अपना दूध लाते हैं। इसकी गुणवत्ता जाँची जाती है और किसानों को समय पर न्यायपूर्ण कीमत मिलती है।"
                )
              },
              {
                "type": "callout",
                "style": "tip",
                "heading": L("Do", "करें"),
                "text": L(
                  "Listen patiently. Let the farmer finish speaking. Try to understand their concern or experience before you reply — even if you think you already know the answer.",
                  "धैर्य से सुनें। किसान को बोलना पूरा करने दें। जवाब देने से पहले उनकी चिंता या अनुभव समझने की कोशिश करें — भले ही आपको लगे कि आप जवाब पहले से जानते हैं।"
                )
              },
              {
                "type": "callout",
                "style": "warning",
                "heading": L("Don't", "न करें"),
                "text": L(
                  "Do not interrupt or dismiss what a farmer is saying, even if you are in a hurry or think their concern is small. Cutting a farmer off tells them their opinion doesn't matter.",
                  "किसान की बात को न टोकें और न ही उसे नज़रअंदाज़ करें, भले ही आप जल्दी में हों या उनकी चिंता छोटी लगे। किसान की बात काटने से उन्हें लगता है कि उनकी राय मायने नहीं रखती।"
                )
              },
              {
                "type": "example",
                "heading": L("A Good Conversation", "एक अच्छी बातचीत"),
                "text": L(
                  "Farmer: Sahayak, my cow's milk has dropped since last week. I don't understand why. Sahayak: That must be worrying for you. Tell me — has anything changed in her feed or her routine recently? Notice the Sahayak did not jump to an answer. They listened, and then asked a question.",
                  "किसान: सहायक जी, पिछले हफ्ते से मेरी गाय का दूध कम हो गया है। मुझे समझ नहीं आ रहा क्यों। सहायक: यह आपके लिए चिंता की बात होगी। बताइए — क्या हाल ही में उसके आहार या दिनचर्या में कुछ बदला है? ध्यान दें कि सहायक ने सीधे जवाब नहीं दिया। उन्होंने पहले सुना, फिर सवाल पूछा।"
                )
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": L(
                  "A farmer is explaining a problem with their cow. What should you do first?",
                  "एक किसान अपनी गाय की समस्या बता रहा है। आपको पहले क्या करना चाहिए?"
                ),
                "options": [
                  L("Interrupt with the first solution that comes to mind", "दिमाग में आया पहला समाधान बीच में बता दें"),
                  L("Let them finish, and try to understand the problem fully", "उन्हें पूरा बोलने दें, और समस्या को पूरी तरह समझने की कोशिश करें"),
                  L("Change the subject to something easier", "किसी आसान विषय पर बात बदल दें"),
                  L("Tell them their traditional practices are wrong", "उन्हें बताएँ कि उनकी पारंपरिक प्रथाएँ गलत हैं")
                ],
                "answer": 1,
                "explain": L(
                  "Good listening means letting the farmer finish and understanding their concern before you respond.",
                  "अच्छे सुनने का मतलब है किसान को पूरा बोलने देना और जवाब देने से पहले उनकी चिंता को समझना।"
                )
              },
              {
                "type": "truefalse",
                "q": L(
                  "It is fine to cut off a farmer mid-sentence if you already think you know the answer.",
                  "अगर आपको लगता है कि आप जवाब पहले से जानते हैं, तो किसान की बात बीच में काटना ठीक है।"
                ),
                "answer": false,
                "explain": L(
                  "Interrupting a farmer tells them their opinion doesn't matter, even if you think you know the answer already.",
                  "किसान की बात टोकने से उन्हें लगता है कि उनकी राय मायने नहीं रखती, भले ही आपको लगे कि आप जवाब पहले से जानते हैं।"
                )
              }
            ]
          },
          {
            "id": "t-simple-language",
            "title": L("Speak Simply, Speak Local", "सरल बोलें, स्थानीय भाषा में बोलें"),
            "teach": [
              {
                "type": "text",
                "heading": L("Use Words Farmers Already Know", "उन शब्दों का उपयोग करें जो किसान पहले से जानते हैं"),
                "html": L(
                  "Use simple, everyday words and the local language farmers are comfortable with. Avoid technical jargon — words like 'SNF' or 'compliance threshold' mean nothing to a farmer who has never studied these terms.",
                  "सरल, रोज़मर्रा के शब्द और वह स्थानीय भाषा उपयोग करें जिसमें किसान सहज हों। तकनीकी शब्दजाल से बचें — 'SNF' या 'compliance threshold' जैसे शब्दों का उस किसान के लिए कोई मतलब नहीं है जिसने ये शब्द कभी नहीं पढ़े।"
                )
              },
              {
                "type": "callout",
                "style": "tip",
                "heading": L("Do", "करें"),
                "text": L(
                  "Use simple and local language for better communication. Respect the farmer's own knowledge and practices — they have often been raising animals for many years, longer than you may have worked in dairy.",
                  "बेहतर संचार के लिए सरल और स्थानीय भाषा उपयोग करें। किसान के अपने ज्ञान और प्रथाओं का सम्मान करें — वे अक्सर सालों से पशु पाल रहे होते हैं, आपके डेयरी में काम करने से भी ज़्यादा समय से।"
                )
              },
              {
                "type": "callout",
                "style": "warning",
                "heading": L("Don't", "न करें"),
                "text": L(
                  "Avoid technical jargon that may confuse farmers. Avoid criticising traditional practices directly — even when a practice needs to change, criticising it bluntly makes a farmer defensive instead of open to change.",
                  "उस तकनीकी शब्दजाल से बचें जो किसानों को उलझन में डाल सकता है। पारंपरिक प्रथाओं की सीधी आलोचना करने से बचें — भले ही किसी प्रथा को बदलना ज़रूरी हो, बेबाक आलोचना किसान को बदलाव के लिए खुला रहने के बजाय बचाव की मुद्रा में ले आती है।"
                )
              },
              {
                "type": "example",
                "heading": L("Same Message, Two Ways", "एक ही बात, दो तरीके"),
                "text": L(
                  "Confusing: Your SNF is below the compliance threshold, so payment is adjusted. Simple: Today your milk had a little less of the solid content we test for, so the price is a bit lower. Let's check together why that may have happened.",
                  "उलझाने वाला: आपका SNF अनुपालन सीमा से नीचे है, इसलिए भुगतान समायोजित किया गया है। सरल: आज आपके दूध में हमारे जाँचे जाने वाले ठोस तत्व थोड़े कम थे, इसलिए कीमत थोड़ी कम है। आइए साथ मिलकर देखें कि ऐसा क्यों हुआ होगा।"
                )
              },
              {
                "type": "poll",
                "heading": L("What Would You Say?", "आप क्या कहेंगे?"),
                "questions": [
                  {
                    "q": L(
                      "A farmer asks why his milk payment was lower today. Which reply is better?",
                      "एक किसान पूछता है कि आज उसका दूध भुगतान कम क्यों था। कौन-सा जवाब बेहतर है?"
                    ),
                    "options": [
                      L(
                        "Your SNF value fell below the compliance threshold.",
                        "आपका SNF मूल्य अनुपालन सीमा से नीचे गिर गया।"
                      ),
                      L(
                        "Today your milk had a little less of the good solids we test for, so the rate was a bit lower. Let's look at why, together.",
                        "आज आपके दूध में हमारे जाँचे जाने वाले अच्छे ठोस तत्व थोड़े कम थे, इसलिए दर थोड़ी कम थी। आइए साथ मिलकर देखें क्यों।"
                      )
                    ],
                    "answer": 1,
                    "reveal": L(
                      "The second reply uses simple words and invites the farmer to solve the problem with you — that builds trust.",
                      "दूसरा जवाब सरल शब्दों का उपयोग करता है और किसान को आपके साथ मिलकर समस्या हल करने के लिए बुलाता है — इससे भरोसा बनता है।"
                    )
                  }
                ]
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": L(
                  "Why should you avoid technical jargon when talking to farmers?",
                  "किसानों से बात करते समय आपको तकनीकी शब्दजाल से क्यों बचना चाहिए?"
                ),
                "options": [
                  L("Jargon makes you sound less experienced", "शब्दजाल से आप कम अनुभवी लगते हैं"),
                  L(
                    "It may confuse farmers who have never studied those terms",
                    "यह उन किसानों को उलझन में डाल सकता है जिन्होंने ये शब्द कभी नहीं पढ़े"
                  ),
                  L("Farmers already know all the technical terms", "किसान सभी तकनीकी शब्द पहले से जानते हैं"),
                  L("It is against the rules to use any English words", "किसी भी अंग्रेज़ी शब्द का उपयोग करना नियमों के खिलाफ है")
                ],
                "answer": 1,
                "explain": L(
                  "Jargon can confuse farmers and get in the way of clear communication — plain, local language works better.",
                  "शब्दजाल किसानों को उलझन में डाल सकता है और स्पष्ट संचार में बाधा बन सकता है — सरल, स्थानीय भाषा बेहतर काम करती है।"
                )
              },
              {
                "type": "truefalse",
                "q": L(
                  "If a farmer's traditional practice needs to change, the best approach is to criticise it directly and bluntly.",
                  "अगर किसान की पारंपरिक प्रथा को बदलना ज़रूरी है, तो सबसे अच्छा तरीका है उसकी सीधी और बेबाक आलोचना करना।"
                ),
                "answer": false,
                "explain": L(
                  "Bluntly criticising a traditional practice makes a farmer defensive. It is better to discuss it respectfully and explain reasons.",
                  "पारंपरिक प्रथा की बेबाक आलोचना किसान को बचाव की मुद्रा में ला देती है। इसे सम्मानपूर्वक चर्चा करके और कारण समझाकर करना बेहतर है।"
                )
              }
            ]
          }
        ],
        "finalQuiz": {
          "passScore": 70,
          "questions": [
            {
              "topicId": "t-why-listening",
              "type": "mcq",
              "q": L(
                "What does good listening mean in a conversation with a farmer?",
                "किसान के साथ बातचीत में अच्छे सुनने का क्या मतलब है?"
              ),
              "options": [
                L("Nodding without really paying attention", "बिना ध्यान दिए सिर्फ सिर हिलाना"),
                L(
                  "Giving full attention, letting them finish, and understanding before replying",
                  "पूरा ध्यान देना, उन्हें पूरा बोलने देना, और जवाब देने से पहले समझना"
                ),
                L("Waiting silently just so you can speak next", "सिर्फ अपनी बारी के लिए चुपचाप इंतज़ार करना"),
                L("Writing down only the parts you find interesting", "सिर्फ दिलचस्प लगने वाले हिस्से लिखना")
              ],
              "answer": 1,
              "explain": L(
                "Good listening means real attention and understanding, not just waiting for your turn to talk.",
                "अच्छे सुनने का मतलब है असली ध्यान और समझ, सिर्फ बोलने की बारी का इंतज़ार करना नहीं।"
              )
            },
            {
              "topicId": "t-why-listening",
              "type": "truefalse",
              "q": L("You should never interrupt a farmer, even if you are busy.", "आपको किसान की बात कभी नहीं टोकनी चाहिए, भले ही आप व्यस्त हों।"),
              "answer": true,
              "explain": L(
                "Even when busy, interrupting or dismissing a farmer's concern damages trust.",
                "व्यस्त होने पर भी, किसान की चिंता को टोकना या नज़रअंदाज़ करना भरोसे को नुकसान पहुँचाता है।"
              )
            },
            {
              "topicId": "t-simple-language",
              "type": "mcq",
              "q": L(
                "Which of these is the best way to explain a lower milk payment to a farmer?",
                "किसान को कम दूध भुगतान समझाने का सबसे अच्छा तरीका इनमें से कौन-सा है?"
              ),
              "options": [
                L("Use only technical terms so it sounds official", "सिर्फ तकनीकी शब्द उपयोग करें ताकि यह आधिकारिक लगे"),
                L("Say nothing and hope they don't ask", "कुछ न कहें और उम्मीद करें कि वे नहीं पूछेंगे"),
                L(
                  "Explain simply, in local language, and offer to check the reason together",
                  "सरल तरीके से, स्थानीय भाषा में समझाएँ, और साथ मिलकर कारण जाँचने की पेशकश करें"
                ),
                L("Tell them it's none of their business", "उन्हें बताएँ कि यह उनका मामला नहीं है")
              ],
              "answer": 2,
              "explain": L(
                "Simple, honest, local-language explanations that involve the farmer build trust.",
                "सरल, ईमानदार, स्थानीय भाषा में स्पष्टीकरण जो किसान को शामिल करते हैं, भरोसा बनाते हैं।"
              )
            },
            {
              "topicId": "t-simple-language",
              "type": "truefalse",
              "q": L(
                "Respecting a farmer's traditional knowledge and practices is part of good communication.",
                "किसान के पारंपरिक ज्ञान और प्रथाओं का सम्मान करना अच्छे संचार का हिस्सा है।"
              ),
              "answer": true,
              "explain": L(
                "Farmers often have years of experience. Respecting that experience is part of building trust.",
                "किसानों के पास अक्सर सालों का अनुभव होता है। उस अनुभव का सम्मान करना भरोसा बनाने का हिस्सा है।"
              )
            }
          ]
        }
      },
      {
        "id": "m4-l2",
        "title": L("Honest Conversations and Follow-Up", "ईमानदार बातचीत और अनुवर्तन"),
        "estMinutes": 8,
        "hook": [
          {
            "type": "hero",
            "heading": L("Honest Conversations and Follow-Up", "ईमानदार बातचीत और अनुवर्तन"),
            "text": L(
              "Some conversations are harder — a new MPP starting in the village, a question about milk price, or a complaint. Let's learn how to handle these with honesty and care.",
              "कुछ बातचीत मुश्किल होती हैं — गाँव में नया MPP शुरू होना, दूध की कीमत के बारे में सवाल, या कोई शिकायत। आइए सीखें कि इन्हें ईमानदारी और देखभाल से कैसे संभालें।"
            )
          }
        ],
        "topics": [
          {
            "id": "t-new-mpp-concerns",
            "title": L("Talking About a New MPP and Milk Price", "नए MPP और दूध की कीमत के बारे में बात करना"),
            "teach": [
              {
                "type": "text",
                "heading": L("Why Farmers Worry About Something New", "किसान नई चीज़ों को लेकर क्यों चिंतित होते हैं"),
                "html": L(
                  "When a new MPP or MPO starts in a village, farmers may worry: Will I get paid on time? Will the testing be fair? Is this better or worse than where I sell now? These worries are natural — change is always a little scary, especially with something as important as daily income.",
                  "जब गाँव में नया MPP या MPO शुरू होता है, तो किसान चिंतित हो सकते हैं: क्या मुझे समय पर भुगतान मिलेगा? क्या जाँच न्यायपूर्ण होगी? क्या यह उससे बेहतर है जहाँ मैं अभी बेचता हूँ, या बदतर? ये चिंताएँ स्वाभाविक हैं — बदलाव हमेशा थोड़ा डरावना होता है, खासकर रोज़ की आय जैसी ज़रूरी चीज़ के साथ।"
                )
              },
              {
                "type": "glossary",
                "term": L("MPO (Milk Producer Organisation)", "MPO (मिल्क प्रोड्यूसर ऑर्गेनाइज़ेशन)"),
                "meaning": L(
                  "A farmer-owned group that runs the MPP in a village, tests milk fairly, and pays farmers a fair price on time.",
                  "किसान-स्वामित्व वाला समूह जो गाँव में MPP चलाता है, दूध की न्यायपूर्ण जाँच करता है, और किसानों को समय पर न्यायपूर्ण कीमत देता है।"
                )
              },
              {
                "type": "callout",
                "style": "tip",
                "heading": L("Be Honest About Milk Pricing", "दूध की कीमत के बारे में ईमानदार रहें"),
                "text": L(
                  "If a farmer asks how the price is decided, explain it simply and honestly — for example, that the price depends on the fat and SNF (solid content) tested in their milk that day. Never guess or make up a number. If you don't know, say so and find out.",
                  "अगर कोई किसान पूछे कि कीमत कैसे तय होती है, तो इसे सरल और ईमानदारी से समझाएँ — जैसे कि कीमत उस दिन उनके दूध में जाँचे गए फैट और SNF (ठोस तत्व) पर निर्भर करती है। कभी अंदाज़ा न लगाएँ या नंबर न बनाएँ। अगर आपको नहीं पता, तो यह कह दें और पता लगाएँ।"
                )
              },
              {
                "type": "example",
                "heading": L("Handling a Price Question Honestly", "कीमत के सवाल को ईमानदारी से संभालना"),
                "text": L(
                  "Farmer: Why does my neighbour get a higher rate than me for the same amount of milk? Sahayak: It's not the amount that decides the rate — it's the fat and SNF content. Let's check both your test slips together so you can see the difference. The Sahayak did not get defensive. They showed the farmer real proof.",
                  "किसान: मेरे पड़ोसी को उतने ही दूध पर मुझसे ज़्यादा दर क्यों मिलती है? सहायक: दर मात्रा से नहीं, फैट और SNF सामग्री से तय होती है। आइए हम दोनों के टेस्ट स्लिप साथ में देखें ताकि आपको अंतर दिख सके। सहायक ने बचाव की मुद्रा नहीं ली। उन्होंने किसान को असली सबूत दिखाया।"
                )
              },
              {
                "type": "callout",
                "style": "warning",
                "heading": L("Don't Make Promises You Can't Keep", "ऐसे वादे न करें जो निभा न सकें"),
                "text": L(
                  "Do not make unrealistic promises, like guaranteeing a certain price or payment date you are not sure about. A broken promise damages trust far more than an honest 'I'm not sure, let me find out.'",
                  "ऐसे अवास्तविक वादे न करें, जैसे किसी ऐसी कीमत या भुगतान तारीख की गारंटी देना जिसके बारे में आप निश्चित नहीं हैं। टूटा हुआ वादा एक ईमानदार 'मुझे यकीन नहीं है, मुझे पता लगाने दीजिए' से कहीं ज़्यादा भरोसे को नुकसान पहुँचाता है।"
                )
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": L(
                  "A farmer asks why a new MPP pays differently from the old buyer. What should you do?",
                  "एक किसान पूछता है कि नया MPP पुराने खरीदार से अलग भुगतान क्यों करता है। आपको क्या करना चाहिए?"
                ),
                "options": [
                  L("Avoid the question so you don't have to explain", "सवाल टाल दें ताकि समझाना न पड़े"),
                  L(
                    "Explain honestly how the price is decided, using simple language",
                    "सरल भाषा का उपयोग करते हुए ईमानदारी से समझाएँ कि कीमत कैसे तय होती है"
                  ),
                  L("Make up a reassuring answer even if you're not fully sure", "भले ही आप पूरी तरह निश्चित न हों, एक तसल्ली देने वाला जवाब बना दें"),
                  L("Tell them to stop asking questions", "उन्हें सवाल पूछना बंद करने को कहें")
                ],
                "answer": 1,
                "explain": L(
                  "Honesty, even about a topic like pricing, is the best way to build a farmer's trust in a new MPP.",
                  "कीमत जैसे विषय के बारे में भी ईमानदारी, एक नए MPP में किसान का भरोसा बनाने का सबसे अच्छा तरीका है।"
                )
              },
              {
                "type": "truefalse",
                "q": L(
                  "It is fine to promise a farmer a specific payment date, even if you are not sure it will happen.",
                  "किसान को किसी खास भुगतान तारीख का वादा करना ठीक है, भले ही आप निश्चित न हों कि यह होगा।"
                ),
                "answer": false,
                "explain": L(
                  "Unrealistic promises that later break damage trust much more than being honest about uncertainty.",
                  "अवास्तविक वादे जो बाद में टूट जाते हैं, अनिश्चितता के बारे में ईमानदार रहने से कहीं ज़्यादा भरोसे को नुकसान पहुँचाते हैं।"
                )
              }
            ]
          },
          {
            "id": "t-followup",
            "title": L("Ending Well and Following Up", "अच्छे से खत्म करना और अनुवर्तन करना"),
            "teach": [
              {
                "type": "text",
                "heading": L("Don't Rush the Conversation", "बातचीत में जल्दबाज़ी न करें"),
                "html": L(
                  "Do not rush an interaction or appear disinterested, even when you are busy. A farmer can tell when you are only half-listening, and it makes them trust you less the next time.",
                  "व्यस्त होने पर भी बातचीत में जल्दबाज़ी न दिखाएँ या अनिच्छुक न लगें। किसान समझ जाता है जब आप आधा-अधूरा सुन रहे होते हैं, और इससे अगली बार वे आप पर कम भरोसा करते हैं।"
                )
              },
              {
                "type": "text",
                "heading": L("Involve the Farmer in the Solution", "समाधान में किसान को शामिल करें"),
                "html": L(
                  "Avoid imposing a solution without discussion. Instead, encourage participation — ask the farmer what they think, and use open-ended questions like 'What do you think is causing this?' rather than only yes-or-no questions.",
                  "बिना चर्चा के समाधान थोपने से बचें। इसके बजाय, भागीदारी को प्रोत्साहित करें — किसान से पूछें कि वे क्या सोचते हैं, और सिर्फ हाँ-नहीं वाले सवालों के बजाय 'आपको क्या लगता है इसका कारण क्या है?' जैसे खुले सवाल पूछें।"
                )
              },
              {
                "type": "callout",
                "style": "tip",
                "heading": L("Always Follow Up", "हमेशा अनुवर्तन करें"),
                "text": L(
                  "If you promise to check something or come back with an answer, do it — and tell the farmer that you did. A simple follow-up, like 'I checked, and here's what I found,' shows the farmer you kept your word.",
                  "अगर आप कुछ जाँचने या जवाब लेकर वापस आने का वादा करते हैं, तो करें — और किसान को बताएँ कि आपने किया। 'मैंने जाँच की, और यह पाया' जैसा एक सरल अनुवर्तन किसान को दिखाता है कि आपने अपना वादा निभाया।"
                )
              },
              {
                "type": "example",
                "heading": L("A Good Follow-Up", "एक अच्छा अनुवर्तन"),
                "text": L(
                  "Sahayak, a week later: Bhai, you asked me last week why your fat percentage looked low. I checked with the lab — your feed batch that week had less protein. Try switching back and let's test again next week. This builds trust because the Sahayak remembered and followed through.",
                  "सहायक, एक हफ्ते बाद: भाई, आपने पिछले हफ्ते पूछा था कि आपका फैट प्रतिशत कम क्यों लग रहा था। मैंने लैब से जाँच की — उस हफ्ते के आपके आहार बैच में प्रोटीन कम था। पुराने आहार पर वापस जाकर देखिए और अगले हफ्ते फिर जाँच करते हैं। इससे भरोसा बनता है क्योंकि सहायक को याद रहा और उन्होंने काम पूरा किया।"
                )
              },
              {
                "type": "poll",
                "heading": L("What Should the Sahayak Say Here?", "यहाँ सहायक को क्या कहना चाहिए?"),
                "questions": [
                  {
                    "q": L(
                      "A farmer's concern from last week hasn't been fully resolved. You still don't have a complete answer. What should you say?",
                      "पिछले हफ्ते की किसान की चिंता पूरी तरह हल नहीं हुई है। आपके पास अभी भी पूरा जवाब नहीं है। आपको क्या कहना चाहिए?"
                    ),
                    "options": [
                      L("Avoid the farmer until you have a full answer", "जब तक पूरा जवाब न मिले, किसान से बचें"),
                      L(
                        "Tell the farmer you're still checking, and give a realistic idea of when you'll know more",
                        "किसान को बताएँ कि आप अभी भी जाँच कर रहे हैं, और यह भी बताएँ कि आपको कब तक और जानकारी मिलेगी"
                      )
                    ],
                    "answer": 1,
                    "reveal": L(
                      "Being honest about not having the full answer yet — while showing you haven't forgotten — keeps trust intact.",
                      "अभी पूरा जवाब न होने के बारे में ईमानदार रहना — साथ ही यह दिखाना कि आप भूले नहीं हैं — भरोसे को बरकरार रखता है।"
                    )
                  }
                ]
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": L(
                  "What is the best way to make a farmer feel involved in solving their own problem?",
                  "किसान को अपनी समस्या हल करने में शामिल महसूस कराने का सबसे अच्छा तरीका क्या है?"
                ),
                "options": [
                  L("Give them a solution without asking anything", "बिना कुछ पूछे उन्हें समाधान दे दें"),
                  L("Ask open-ended questions like 'What do you think is causing this?'", "'आपको क्या लगता है इसका कारण क्या है?' जैसे खुले सवाल पूछें"),
                  L("Tell them the answer is too technical for them to understand", "उन्हें बताएँ कि जवाब उनके समझने के लिए बहुत तकनीकी है"),
                  L("Ask only yes-or-no questions", "सिर्फ हाँ-नहीं वाले सवाल पूछें")
                ],
                "answer": 1,
                "explain": L(
                  "Open-ended questions invite the farmer to think and participate, instead of just receiving an order.",
                  "खुले सवाल किसान को सोचने और भाग लेने के लिए बुलाते हैं, सिर्फ आदेश पाने के बजाय।"
                )
              },
              {
                "type": "truefalse",
                "q": L(
                  "If you promised to check something for a farmer, it's fine to forget about it once you're busy with other work.",
                  "अगर आपने किसान के लिए कुछ जाँचने का वादा किया, तो दूसरे काम में व्यस्त होने पर उसे भूल जाना ठीक है।"
                ),
                "answer": false,
                "explain": L(
                  "Following up on a promise, even a small one, shows the farmer you keep your word and builds long-term trust.",
                  "एक छोटे वादे का भी अनुवर्तन करना किसान को दिखाता है कि आप अपना वचन निभाते हैं और इससे दीर्घकालिक भरोसा बनता है।"
                )
              }
            ]
          }
        ],
        "finalQuiz": {
          "passScore": 70,
          "isFinal": true,
          "questions": [
            {
              "topicId": "t-new-mpp-concerns",
              "type": "mcq",
              "q": L(
                "What is the best response when a farmer questions how milk pricing works at a new MPP?",
                "जब कोई किसान पूछे कि नए MPP में दूध की कीमत कैसे तय होती है, तो सबसे अच्छा जवाब क्या है?"
              ),
              "options": [
                L("Change the topic to avoid confrontation", "टकराव से बचने के लिए विषय बदल दें"),
                L(
                  "Explain simply and honestly, and show proof like test slips if needed",
                  "सरल और ईमानदारी से समझाएँ, और ज़रूरत पड़ने पर टेस्ट स्लिप जैसा सबूत दिखाएँ"
                ),
                L("Say it's decided randomly", "कह दें कि यह मनमाने ढंग से तय होता है"),
                L("Tell them to ask someone else", "उन्हें किसी और से पूछने को कहें")
              ],
              "answer": 1,
              "explain": L(
                "Honest, simple explanations — backed by real proof — build a farmer's confidence in a new MPP.",
                "ईमानदार, सरल स्पष्टीकरण — असली सबूत के साथ — नए MPP में किसान का भरोसा बनाते हैं।"
              )
            },
            {
              "topicId": "t-new-mpp-concerns",
              "type": "truefalse",
              "q": L(
                "Farmers naturally feel some worry when a new MPP or MPO starts in their village.",
                "जब गाँव में नया MPP या MPO शुरू होता है, तो किसान स्वाभाविक रूप से थोड़ी चिंता महसूस करते हैं।"
              ),
              "answer": true,
              "explain": L(
                "Change is naturally a little unsettling, especially for something as important as daily income — this worry is normal.",
                "बदलाव स्वाभाविक रूप से थोड़ा असहज करने वाला होता है, खासकर रोज़ की आय जैसी ज़रूरी चीज़ के लिए — यह चिंता सामान्य है।"
              )
            },
            {
              "topicId": "t-followup",
              "type": "mcq",
              "q": L("Why is following up on a promise to a farmer important?", "किसान से किए गए वादे का अनुवर्तन करना क्यों ज़रूरी है?"),
              "options": [
                L("It is not important — farmers forget quickly", "यह ज़रूरी नहीं है — किसान जल्दी भूल जाते हैं"),
                L("It shows the farmer you kept your word and builds trust", "यह किसान को दिखाता है कि आपने अपना वचन निभाया, और भरोसा बनाता है"),
                L("It is only needed for big problems", "यह सिर्फ बड़ी समस्याओं के लिए ज़रूरी है"),
                L("It wastes time better spent elsewhere", "यह समय बर्बाद करता है जो कहीं और बेहतर लगाया जा सकता है")
              ],
              "answer": 1,
              "explain": L(
                "Following up, even on small promises, builds long-term trust between the Sahayak and the farmer.",
                "छोटे वादों पर भी अनुवर्तन करना सहायक और किसान के बीच दीर्घकालिक भरोसा बनाता है।"
              )
            },
            {
              "topicId": "t-followup",
              "type": "truefalse",
              "q": L(
                "Rushing through a conversation because you are busy has no effect on how much a farmer trusts you.",
                "व्यस्त होने की वजह से बातचीत में जल्दबाज़ी करने का किसान के भरोसे पर कोई असर नहीं पड़ता।"
              ),
              "answer": false,
              "explain": L(
                "Farmers can tell when you are rushing or only half-listening, which reduces their trust in you.",
                "किसान समझ जाते हैं जब आप जल्दबाज़ी कर रहे हों या आधा-अधूरा सुन रहे हों, जिससे उनका आप पर भरोसा कम हो जाता है।"
              )
            }
          ]
        }
      }
    ]
  },
  {
    "id": "m5",
    "number": 5,
    "title": L("Designing a Need-Based Communication Content", "ज़रूरत-आधारित संचार सामग्री तैयार करना"),
    "subtitle": "Learn the CRI method for building training content that answers real problems in the field — not generic lessons nobody asked for.",
    "icon": "milk",
    "available": true,
    "lessons": [
      {
        "id": "m5-l1",
        "title": "What Is CRI, and Why 'Need-Based' Matters",
        "estMinutes": 7,
        "hook": [
          {
            "type": "hero",
            "heading": "Why Generic Training Doesn't Work",
            "text": "Imagine sitting through a training on animal vaccination when your real problem is farmers leaving your MPP. That training would feel like a waste of time. This lesson shows you a better way — CRI."
          }
        ],
        "topics": [
          {
            "id": "t-generic-vs-needbased",
            "title": "The Problem With Generic Content",
            "teach": [
              {
                "type": "text",
                "heading": "One Size Does Not Fit All Villages",
                "html": "Every village and every MPP has different problems. One village may be losing members. Another may have farmers whose milk fat is dropping. A third may need help with animal nutrition. If you teach the same generic content everywhere, it may not solve anyone's real problem."
              },
              {
                "type": "callout",
                "style": "info",
                "heading": "Did You Know?",
                "text": "Training designed around a clear, planned approach and teaching-learning psychology is far more effective for adult learners than a generic lecture. Adults learn best when the content answers a real problem they are facing right now."
              },
              {
                "type": "glossary",
                "term": "CRI",
                "meaning": "Short for Criterion-Referenced Instruction — a method for designing training content that is built around exactly what learners need to be able to do, instead of around generic topics."
              },
              {
                "type": "text",
                "heading": "What CRI Helps You Do",
                "html": "CRI helps trainers design need-based, field-relevant programs. It also helps build the capability to actually change behaviour — not just deliver information, but check that people really do things differently afterward."
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": "Why might the same generic training content fail in different villages?",
                "options": [
                  "Because every village has the exact same problems",
                  "Because different villages have different real problems, so one-size-fits-all content may not help",
                  "Because generic content is always more effective",
                  "Because farmers dislike all training equally"
                ],
                "answer": 1,
                "explain": "Villages face different problems, so content built for one specific problem often does not solve another."
              },
              {
                "type": "truefalse",
                "q": "CRI stands for a method that designs training around what learners actually need to be able to do.",
                "answer": true,
                "explain": "CRI (Criterion-Referenced Instruction) is built around real learner needs, not generic topics."
              }
            ]
          },
          {
            "id": "t-cri-four-steps",
            "title": "The Four Steps of CRI",
            "teach": [
              {
                "type": "text",
                "heading": "Four Steps, Always in Order",
                "html": "CRI has four steps, always followed in the same order. Each step checks that the training really matches what learners need — not just what a trainer assumes they need."
              },
              {
                "type": "stat-grid",
                "items": [
                  {
                    "label": "1. Behavioural Objectives",
                    "text": "Decide exactly what learners should be able to DO after the training — an action you can see and measure, not just 'understand' something."
                  },
                  {
                    "label": "2. Pre-Evaluation",
                    "text": "Check what learners already know and can do, before you teach anything. This stops you from teaching things they already know."
                  },
                  {
                    "label": "3. Teaching",
                    "text": "Deliver the content itself, using teaching-learning principles that help adults learn faster — covered in the next lesson."
                  },
                  {
                    "label": "4. Post-Evaluation",
                    "text": "Check what learners actually learned after the training, to see if it worked and to find any gaps that still need attention."
                  }
                ]
              },
              {
                "type": "example",
                "heading": "CRI in Action",
                "text": "Suppose many farmers in a village are leaving the MPP. Behavioural Objective: Sahayak should be able to explain 3 reasons farmers stay with an MPP. Pre-Evaluation: ask Sahayaks what they currently tell farmers. Teaching: run a short session filling the gaps. Post-Evaluation: check a week later if fewer farmers are leaving."
              },
              {
                "type": "callout",
                "style": "tip",
                "heading": "Remember",
                "text": "Behavioural Objectives and Evaluation are like bookends — they make sure training is not just delivered, but actually works."
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": "What is a 'Behavioural Objective' in CRI?",
                "options": [
                  "A vague hope that learners feel inspired",
                  "A clear, measurable action learners should be able to DO after training",
                  "The name of the trainer's manager",
                  "A test given only at the very end of the year"
                ],
                "answer": 1,
                "explain": "A Behavioural Objective is a specific, observable action — something you can actually see the learner do."
              },
              {
                "type": "truefalse",
                "q": "Pre-Evaluation happens after the teaching is complete.",
                "answer": false,
                "explain": "Pre-Evaluation happens BEFORE teaching — it checks what learners already know so training doesn't repeat it."
              }
            ]
          }
        ],
        "finalQuiz": {
          "passScore": 70,
          "questions": [
            {
              "topicId": "t-generic-vs-needbased",
              "type": "mcq",
              "q": "What makes CRI different from a generic training lecture?",
              "options": [
                "CRI is always longer than a lecture",
                "CRI is built around what learners actually need, checked before and after",
                "CRI uses only videos, never live teaching",
                "CRI is only for new employees"
              ],
              "answer": 1,
              "explain": "CRI matches content to real, checked learner needs — unlike a one-size-fits-all lecture."
            },
            {
              "topicId": "t-generic-vs-needbased",
              "type": "truefalse",
              "q": "Adults generally learn best from content that connects to a real problem they are facing right now.",
              "answer": true,
              "explain": "Adult learners respond best to training that clearly answers a problem relevant to their own situation."
            },
            {
              "topicId": "t-cri-four-steps",
              "type": "mcq",
              "q": "Put these CRI steps in the correct order: Teaching, Post-Evaluation, Behavioural Objectives, Pre-Evaluation.",
              "options": [
                "Behavioural Objectives, Pre-Evaluation, Teaching, Post-Evaluation",
                "Post-Evaluation, Teaching, Pre-Evaluation, Behavioural Objectives",
                "Teaching, Behavioural Objectives, Post-Evaluation, Pre-Evaluation",
                "Pre-Evaluation, Post-Evaluation, Teaching, Behavioural Objectives"
              ],
              "answer": 0,
              "explain": "CRI always follows this order: decide the objective, check existing knowledge, teach, then check what was learned."
            },
            {
              "topicId": "t-cri-four-steps",
              "type": "truefalse",
              "q": "Post-Evaluation helps find gaps that still need attention after training.",
              "answer": true,
              "explain": "Post-Evaluation checks whether the training actually worked, and reveals any remaining gaps."
            }
          ]
        }
      },
      {
        "id": "m5-l2",
        "title": "Designing and Delivering a Real Session",
        "estMinutes": 8,
        "hook": [
          {
            "type": "hero",
            "heading": "From Village Problem to Training Content",
            "text": "Now let's turn what you've learned into practice — picking a real topic and building a short session that Sahayaks or farmers actually need."
          }
        ],
        "topics": [
          {
            "id": "t-teaching-principles",
            "title": "Five Principles That Help Adults Learn",
            "teach": [
              {
                "type": "text",
                "heading": "Teaching the CRI Way",
                "html": "Inside the 'Teaching' step of CRI, five principles make learning stick — especially for adult learners who are busy and practical-minded."
              },
              {
                "type": "stat-grid",
                "items": [
                  {
                    "label": "Perceived Purpose",
                    "text": "Learners must know WHY this matters to them before you begin — make the goal clear upfront."
                  },
                  {
                    "label": "Individual Differentiation",
                    "text": "Different learners already know different things. Address their different needs, instead of teaching everyone the exact same way."
                  },
                  {
                    "label": "Graduated Sequence",
                    "text": "Teach simple ideas first, moving to more complex ideas only after the basics are clear."
                  }
                ]
              },
              {
                "type": "stat-grid",
                "items": [
                  {
                    "label": "Appropriate Practice",
                    "text": "Let learners actually try the skill themselves — hands-on practice, not just listening."
                  },
                  {
                    "label": "Knowledge of Results",
                    "text": "Tell learners quickly whether they got it right or wrong, so they can correct themselves while it's fresh."
                  }
                ]
              },
              {
                "type": "example",
                "heading": "Putting It Together",
                "text": "Teaching Sahayaks how to explain milk pricing: start with why it matters (a common farmer complaint), teach the simple fat/SNF idea before the payment formula, let them practice explaining it to each other, then correct any mistakes on the spot."
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": "What does 'Graduated Sequence' mean in teaching?",
                "options": [
                  "Teaching only to learners who have graduated school",
                  "Teaching simple ideas first, then moving to more complex ones",
                  "Giving a certificate at the end",
                  "Repeating the same idea many times without changing it"
                ],
                "answer": 1,
                "explain": "Graduated Sequence means building understanding step by step, from simple to complex."
              },
              {
                "type": "truefalse",
                "q": "'Knowledge of Results' means telling learners quickly whether they got something right or wrong.",
                "answer": true,
                "explain": "Fast feedback helps learners correct mistakes while the lesson is still fresh in their minds."
              }
            ]
          },
          {
            "id": "t-picking-topics",
            "title": "Choosing the Right Topic From Real Data",
            "teach": [
              {
                "type": "text",
                "heading": "Let the Problem Choose the Topic",
                "html": "The best training topics come from real problems happening in the field — not guesses. Look at what MPPs are actually struggling with."
              },
              {
                "type": "stat-grid",
                "items": [
                  {
                    "label": "Falling membership",
                    "text": "Fewer farmers are staying members of the MPP — training could cover how to listen to farmers' concerns and rebuild trust."
                  },
                  {
                    "label": "Low milk production",
                    "text": "Farmers' animals are giving less milk than expected — training could cover animal feeding and care basics."
                  },
                  {
                    "label": "Animal nutrition problems",
                    "text": "Farmers may be feeding animals incorrectly — training could cover simple, low-cost nutrition improvements."
                  }
                ]
              },
              {
                "type": "callout",
                "style": "info",
                "heading": "Group Activity",
                "text": "In your training group, you may be asked to pick a real topic like these, prepare a short 15-minute session on it, and then deliver it to the group. This practice is exactly how CRI content gets built in real life."
              },
              {
                "type": "poll",
                "heading": "What Would You Choose?",
                "questions": [
                  {
                    "q": "Your MPP has seen 6 farmers stop supplying milk this month. Which is the better first training topic?",
                    "options": [
                      "A generic session on the history of dairy in India",
                      "A short session on why farmers leave, and how to listen and respond to their concerns"
                    ],
                    "answer": 1,
                    "reveal": "Training should follow the real problem on the ground — here, it's farmers leaving, so the content should target that directly."
                  }
                ]
              },
              {
                "type": "example",
                "heading": "A Simple Session Outline",
                "text": "Behavioural Objective: Sahayak can list 3 reasons for farmer drop-off and respond to each. Pre-Evaluation: ask Sahayaks what they think the reasons are. Teaching: share real reasons from farmer conversations. Practice: role-play a talk with a farmer thinking of leaving. Post-Evaluation: ask Sahayaks to explain the 3 reasons back."
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": "Where should a good training topic come from?",
                "options": [
                  "Whatever topic the trainer personally finds most interesting",
                  "Real problems actually happening in the field, like falling membership or low milk production",
                  "A random topic chosen without any data",
                  "The longest topic available"
                ],
                "answer": 1,
                "explain": "CRI-based training topics come from real field problems, not guesses or personal preference."
              },
              {
                "type": "truefalse",
                "q": "A 15-minute group activity to design and deliver a short session is a realistic way to practice the CRI method.",
                "answer": true,
                "explain": "Practicing on a small, real topic is exactly how the CRI method is used to build effective training in the field."
              }
            ]
          }
        ],
        "finalQuiz": {
          "passScore": 70,
          "isFinal": true,
          "questions": [
            {
              "topicId": "t-teaching-principles",
              "type": "mcq",
              "q": "Why is 'Perceived Purpose' important at the start of a teaching session?",
              "options": [
                "It is not important, learners will pay attention anyway",
                "Learners need to know why the content matters to them before they will engage",
                "It replaces the need for any practice",
                "It is only useful for children, not adults"
              ],
              "answer": 1,
              "explain": "Adult learners engage better when they understand upfront why the content matters to them."
            },
            {
              "topicId": "t-teaching-principles",
              "type": "truefalse",
              "q": "Appropriate Practice means learners only listen and never try the skill themselves.",
              "answer": false,
              "explain": "Appropriate Practice means letting learners actually try the skill hands-on, not just listen."
            },
            {
              "topicId": "t-picking-topics",
              "type": "mcq",
              "q": "A village is struggling with low milk production. What kind of training content fits this problem best?",
              "options": [
                "A session on village meeting etiquette",
                "A session on animal feeding and care basics",
                "A session on the history of milk cooperatives",
                "No training is needed for this problem"
              ],
              "answer": 1,
              "explain": "Content should match the real problem — here, low milk production points to feeding and animal care training."
            },
            {
              "topicId": "t-picking-topics",
              "type": "truefalse",
              "q": "Real field data, like membership numbers or milk production trends, can help decide what training content to design.",
              "answer": true,
              "explain": "Real field data points trainers toward the actual problems that need solving, making content more relevant."
            }
          ]
        }
      }
    ]
  },
  {
    "id": "m6",
    "number": 6,
    "title": L("Interaction with Sahayak (One to One)", "सहायक के साथ बातचीत (एक-से-एक)"),
    "subtitle": "Learn how to mentor and support a fellow Sahayak one-on-one — through listening, honest feedback and encouragement.",
    "icon": "milk",
    "available": true,
    "lessons": [
      {
        "id": "m6-l1",
        "title": "Understanding Before Advising",
        "estMinutes": 7,
        "hook": [
          {
            "type": "hero",
            "heading": "Understanding Before Advising",
            "text": "Sometimes you may be the one guiding another Sahayak — maybe someone new, or someone struggling at their MPP. This lesson shows you how to start that conversation the right way."
          }
        ],
        "topics": [
          {
            "id": "t-sahayak-challenges",
            "title": "Walking in Another Sahayak's Shoes",
            "teach": [
              {
                "type": "text",
                "heading": "Every Sahayak's Day Is Different",
                "html": "A Sahayak's daily work is not easy — testing milk, weighing it correctly, recording data, handling cash, and managing farmers who are sometimes upset. Before you offer advice to another Sahayak, take time to understand what their day actually looks like."
              },
              {
                "type": "text",
                "heading": "Why This Conversation Matters",
                "html": "When you sit down with a Sahayak one-on-one — maybe a new Sahayak still learning the job, or one who is struggling — your goal is not to judge them. It is to understand their challenges and help them do better."
              },
              {
                "type": "callout",
                "style": "tip",
                "heading": "Start by Asking, Not Telling",
                "text": "Before giving any advice, ask the Sahayak to describe their day, their difficulties, and what they think is going wrong. You will often learn things you did not expect."
              },
              {
                "type": "example",
                "heading": "Starting the Right Way",
                "text": "Senior Sahayak: Before we talk about the low collection numbers, tell me — how has this month been for you at the MPP? New Sahayak: Honestly, it's been hard. Two farmers stopped coming and I don't fully understand why. Notice the senior Sahayak asked an open question first, instead of starting with the problem."
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": "Before giving advice to a struggling Sahayak, what should you do first?",
                "options": [
                  "Tell them everything they are doing wrong",
                  "Ask them to describe their day and difficulties, and listen",
                  "Compare them unfavourably to other Sahayaks",
                  "Wait for someone else to talk to them instead"
                ],
                "answer": 1,
                "explain": "Understanding a Sahayak's real challenges first helps you give advice that actually fits their situation."
              },
              {
                "type": "truefalse",
                "q": "The goal of a one-on-one conversation with a struggling Sahayak is to judge their performance, not to understand them.",
                "answer": false,
                "explain": "The goal is to understand their challenges and help them improve — not to judge them."
              }
            ]
          },
          {
            "id": "t-active-listening-sahayak",
            "title": "Listening Without Jumping to Solutions",
            "teach": [
              {
                "type": "text",
                "heading": "Resist the Urge to Fix It Immediately",
                "html": "When someone tells you a problem, it's tempting to jump straight to a solution. But if you do this too fast, the Sahayak may feel unheard — and you might end up solving the wrong problem."
              },
              {
                "type": "callout",
                "style": "warning",
                "heading": "A Common Mistake",
                "text": "Cutting off a Sahayak mid-sentence to give advice, or assuming you already know their problem before they finish explaining, can make them stop being honest with you in future conversations."
              },
              {
                "type": "text",
                "heading": "Ask Open-Ended Questions",
                "html": "Instead of yes-or-no questions, ask things like 'What do you think caused this?' or 'What have you already tried?' These questions help the Sahayak think it through — and often they find their own answer."
              },
              {
                "type": "example",
                "heading": "Good vs. Rushed Listening",
                "text": "Rushed: You probably didn't test the milk properly, that's why farmers complained. Better: Walk me through what happened when the farmer complained. What did you do first?"
              },
              {
                "type": "poll",
                "heading": "What Should You Say Here?",
                "questions": [
                  {
                    "q": "A Sahayak tells you collections have dropped this month. What's the better first response?",
                    "options": [
                      "You must be doing something wrong at collection time.",
                      "Tell me more — when did you first notice the drop, and have you spoken to any farmers about it?"
                    ],
                    "answer": 1,
                    "reveal": "Asking first, before assuming, gets you the real reason and keeps the Sahayak comfortable being honest with you."
                  }
                ]
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": "What is a risk of jumping straight to a solution before fully listening?",
                "options": [
                  "There is no risk, faster is always better",
                  "You might end up solving the wrong problem",
                  "The Sahayak will always agree with you anyway",
                  "It saves so much time that it is always worth it"
                ],
                "answer": 1,
                "explain": "Without fully understanding the real problem, you risk offering a solution that doesn't actually fix it."
              },
              {
                "type": "truefalse",
                "q": "Open-ended questions like 'What do you think caused this?' can help a Sahayak think through their own problem.",
                "answer": true,
                "explain": "Open-ended questions encourage the Sahayak to reflect and often arrive at their own useful answer."
              }
            ]
          }
        ],
        "finalQuiz": {
          "passScore": 70,
          "questions": [
            {
              "topicId": "t-sahayak-challenges",
              "type": "mcq",
              "q": "Why is it important to understand a Sahayak's day-to-day challenges before advising them?",
              "options": [
                "It isn't important — advice works the same regardless",
                "It helps you give advice that actually fits their real situation",
                "It is only a formality with no real value",
                "It wastes time that could be spent giving instructions"
              ],
              "answer": 1,
              "explain": "Understanding the real, on-ground challenges helps you offer advice that is actually useful and relevant."
            },
            {
              "topicId": "t-sahayak-challenges",
              "type": "truefalse",
              "q": "Starting a mentoring conversation with an open question, like asking how their month has been, is a good approach.",
              "answer": true,
              "explain": "Open questions invite honesty and help you understand the real situation before discussing problems."
            },
            {
              "topicId": "t-active-listening-sahayak",
              "type": "mcq",
              "q": "A Sahayak is explaining a problem, but you think you already know the cause. What should you do?",
              "options": [
                "Interrupt and explain the cause immediately",
                "Let them finish and ask follow-up questions before concluding anything",
                "Change the subject",
                "Assume you're right and move on without checking"
              ],
              "answer": 1,
              "explain": "Letting the Sahayak finish and asking follow-up questions helps you confirm the real cause instead of guessing."
            },
            {
              "topicId": "t-active-listening-sahayak",
              "type": "truefalse",
              "q": "Assuming you already know a Sahayak's problem before they finish explaining can damage their trust in you.",
              "answer": true,
              "explain": "Jumping to conclusions can make a Sahayak feel unheard, and less likely to be open with you in future."
            }
          ]
        }
      },
      {
        "id": "m6-l2",
        "title": "Feedback That Builds Confidence",
        "estMinutes": 8,
        "hook": [
          {
            "type": "hero",
            "heading": "Feedback That Builds Confidence",
            "text": "Good feedback helps a Sahayak grow. Bad feedback makes them defensive or discouraged. Let's learn how to give feedback that actually helps."
          }
        ],
        "topics": [
          {
            "id": "t-constructive-feedback",
            "title": "Giving Feedback the Right Way",
            "teach": [
              {
                "type": "text",
                "heading": "Be Specific, Not General",
                "html": "Instead of saying 'Your record-keeping is bad,' point to something specific: 'I noticed three days last week where the evening collection wasn't logged. Let's look at why.' Specific feedback is much easier to act on."
              },
              {
                "type": "text",
                "heading": "Give Feedback in Private",
                "html": "Always give corrective feedback one-on-one, in private — never in front of farmers or other Sahayaks. Public criticism embarrasses people and makes them defensive instead of open to improving."
              },
              {
                "type": "callout",
                "style": "tip",
                "heading": "Balance Praise With Improvement",
                "text": "Mention what the Sahayak is doing well, not only what needs to change. This is not about softening bad news — it is about giving an honest, complete picture so the Sahayak knows what to keep doing too."
              },
              {
                "type": "example",
                "heading": "Two Ways to Give the Same Feedback",
                "text": "Harsh: You keep making mistakes with the fat testing, this needs to stop. Constructive: Your farmer relationships are strong — I can see that from how they talk to you. I did notice a couple of fat-testing readings that looked off last week. Can we go over the testing steps together?"
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": "Which is an example of specific, useful feedback?",
                "options": [
                  "'Your work is bad.'",
                  "'I noticed three days last week where the evening collection wasn't logged. Let's look at why.'",
                  "'You never do anything right.'",
                  "'Just try harder next time.'"
                ],
                "answer": 1,
                "explain": "Specific feedback points to an exact situation, which makes it much easier for the Sahayak to act on."
              },
              {
                "type": "truefalse",
                "q": "It is fine to correct a Sahayak's mistake in front of farmers if it saves time.",
                "answer": false,
                "explain": "Corrective feedback should always be given in private — public criticism embarrasses and discourages people."
              }
            ]
          },
          {
            "id": "t-building-confidence",
            "title": "Encouraging Growth and Following Up",
            "teach": [
              {
                "type": "text",
                "heading": "Small Wins Build Confidence",
                "html": "When a Sahayak improves, even a little, notice it and say so. A new Sahayak who used to make mistakes but is now testing milk correctly deserves to hear that you noticed the improvement."
              },
              {
                "type": "text",
                "heading": "Set Small, Achievable Goals",
                "html": "Instead of asking a struggling Sahayak to fix everything at once, agree on one or two small, clear goals to work on before your next conversation. This feels achievable, not overwhelming."
              },
              {
                "type": "callout",
                "style": "warning",
                "heading": "Don't Disappear After the Conversation",
                "text": "A one-time conversation is not enough. If you don't follow up, the Sahayak may feel like the conversation didn't matter, or that you have already given up on them."
              },
              {
                "type": "example",
                "heading": "A Good Follow-Up Conversation",
                "text": "Senior Sahayak, at the next visit: Last time we talked about logging every collection. I checked — you've logged every single one this week. That's a real improvement. New Sahayak: Thank you, that means a lot. It's easier now that I have a system for it. This follow-up shows the senior Sahayak kept track and recognised the effort."
              },
              {
                "type": "poll",
                "heading": "What Should You Say Here?",
                "questions": [
                  {
                    "q": "A Sahayak you're mentoring has improved on one goal but is still struggling with another. What's the better approach?",
                    "options": [
                      "Only point out what's still going wrong",
                      "Recognise the improvement first, then gently work on the next goal together"
                    ],
                    "answer": 1,
                    "reveal": "Recognising progress keeps the Sahayak motivated and open to continuing to improve."
                  }
                ]
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": "What is the benefit of setting one or two small, achievable goals instead of asking a Sahayak to fix everything at once?",
                "options": [
                  "It makes the goals easier to ignore",
                  "It feels achievable rather than overwhelming, so the Sahayak is more likely to succeed",
                  "It has no real benefit",
                  "It slows down all improvement permanently"
                ],
                "answer": 1,
                "explain": "Small, clear goals feel achievable, which helps a struggling Sahayak build momentum and confidence."
              },
              {
                "type": "truefalse",
                "q": "Once you've had one feedback conversation with a Sahayak, there is no need to follow up later.",
                "answer": false,
                "explain": "Following up shows the Sahayak that the conversation mattered and that you are still invested in their progress."
              }
            ]
          }
        ],
        "finalQuiz": {
          "passScore": 70,
          "isFinal": true,
          "questions": [
            {
              "topicId": "t-constructive-feedback",
              "type": "mcq",
              "q": "Why should corrective feedback be given in private, one-on-one?",
              "options": [
                "Because it takes too long to do in public",
                "Because public criticism embarrasses people and makes them defensive",
                "Because private conversations don't need to be honest",
                "Because it is required only by written rules, not for any real reason"
              ],
              "answer": 1,
              "explain": "Private feedback avoids embarrassment and keeps the Sahayak open to hearing and acting on it."
            },
            {
              "topicId": "t-constructive-feedback",
              "type": "truefalse",
              "q": "Good feedback should mention what a Sahayak is doing well, not only what needs to change.",
              "answer": true,
              "explain": "Balanced feedback gives an honest, complete picture, so the Sahayak knows what to keep doing as well as what to improve."
            },
            {
              "topicId": "t-building-confidence",
              "type": "mcq",
              "q": "A Sahayak has shown a small improvement since your last conversation. What should you do?",
              "options": [
                "Say nothing since the improvement is small",
                "Notice and acknowledge the improvement before discussing anything else",
                "Focus only on what's still wrong",
                "Wait for a bigger improvement before saying anything"
              ],
              "answer": 1,
              "explain": "Acknowledging even small improvements builds confidence and keeps the Sahayak motivated to keep improving."
            },
            {
              "topicId": "t-building-confidence",
              "type": "truefalse",
              "q": "Following up after a mentoring conversation shows the Sahayak that you are still invested in their progress.",
              "answer": true,
              "explain": "Following up proves the earlier conversation mattered and that support continues beyond a single talk."
            }
          ]
        }
      }
    ]
  },
  {
    "id": "m7",
    "number": 7,
    "title": L("Village Level Meeting for Small Groups", "छोटे समूहों के लिए गाँव स्तरीय बैठक"),
    "subtitle": "Learn how to plan and run a good meeting with a small group of farmers — and how that is different from a big village-wide meeting.",
    "icon": "milk",
    "available": true,
    "lessons": [
      {
        "id": "m7-l1",
        "title": "Why We Call a Village Meeting",
        "estMinutes": 6,
        "hook": [
          {
            "type": "hero",
            "heading": "Why We Call a Village Meeting",
            "text": "Collecting milk is only part of your job. Talking to farmers, together, in one place — that is where trust is built. Let's see why meetings matter."
          }
        ],
        "topics": [
          {
            "id": "t-why-meetings",
            "title": "Why Meetings Matter",
            "teach": [
              {
                "type": "text",
                "heading": "More Than Just Collecting Milk",
                "html": "As a <b>Sahayak</b>, your job is not only to collect milk every day. You also need to talk with farmers regularly — explain new things, answer questions, and solve problems together. A <b>meeting</b> is the best way to do all of this at once."
              },
              {
                "type": "glossary",
                "term": "Village Meeting",
                "meaning": "A meeting is when farmers and the Sahayak come together, at one place and one time, to talk about the dairy business — new information, a problem, or a plan."
              },
              {
                "type": "text",
                "heading": "When Should You Call a Meeting?",
                "html": "Call a meeting when: <b>a new rule or scheme</b> needs to be explained, <b>many farmers</b> are facing the same problem, <b>new members</b> need to be welcomed, or something important is about to change — like a change in milk rate."
              },
              {
                "type": "example",
                "heading": "Think About It",
                "text": "If 5 farmers each ask you the same question on 5 different days, you answer it 5 times — and each answer may come out a little different. If you call one meeting instead, you answer it once, and everyone hears the same, correct answer together."
              },
              {
                "type": "callout",
                "style": "info",
                "heading": "Did You Know?",
                "text": "A good meeting builds trust. When farmers feel heard, they trust the MPP more — and they keep bringing their milk there instead of selling it to someone else."
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": "Why is it better to answer a common question in a meeting instead of one farmer at a time?",
                "options": [
                  "It takes more of your time",
                  "Everyone hears the same, correct answer together",
                  "Farmers do not like meetings",
                  "It is not better — one at a time is always best"
                ],
                "answer": 1,
                "explain": "A meeting lets you give one clear, correct answer to everyone at the same time, instead of repeating (and possibly changing) the answer many times."
              },
              {
                "type": "truefalse",
                "q": "You should only call a meeting when milk rates change — never for anything else.",
                "answer": false,
                "explain": "Meetings are also useful for explaining new rules, solving a shared problem, or welcoming new members — not only for rate changes."
              }
            ]
          },
          {
            "id": "t-meeting-groups",
            "title": "Who Meets in a Small Group?",
            "teach": [
              {
                "type": "text",
                "heading": "Two Kinds of Small Groups",
                "html": "Not every meeting needs the whole village. Often, a <b>small group</b> of the right people is enough to solve a problem or share information quickly. Two common small groups are the VCG and the MRG."
              },
              {
                "type": "glossary",
                "term": "VCG (Village Contact Group)",
                "meaning": "A small group of active, respected farmers in the village who help the Sahayak stay in touch with all the other farmer members and pass on information both ways."
              },
              {
                "type": "glossary",
                "term": "MRG (Member Relation Group)",
                "meaning": "A small group that looks after the relationship with members — listening to their problems and helping solve them, so members stay happy with the MPP."
              },
              {
                "type": "stat-grid",
                "items": [
                  {
                    "label": "Sahayak",
                    "text": "Leads the meeting, shares information, and listens to what farmers say."
                  },
                  {
                    "label": "Management Committee",
                    "text": "Local leaders who help run the MPP and take decisions on behalf of the members."
                  },
                  {
                    "label": "Transporter",
                    "text": "The person who drives the vehicle that carries milk cans — sometimes called in to discuss collection timing."
                  }
                ]
              },
              {
                "type": "text",
                "heading": "Small Meeting Means a Small Number of People",
                "html": "A small-group meeting usually has only the people who are directly involved in that topic — maybe 5 to 15 people. This makes it easy for everyone to speak, ask questions, and be heard."
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": "What does the VCG (Village Contact Group) mainly help with?",
                "options": [
                  "Repairing the milk collection vehicle",
                  "Keeping the Sahayak in touch with all the other farmer members",
                  "Setting the price of milk for the whole state",
                  "Printing farmer ID cards"
                ],
                "answer": 1,
                "explain": "The VCG is a small group of active farmers who help the Sahayak pass information to and from all the other members in the village."
              },
              {
                "type": "truefalse",
                "q": "A small-group meeting usually includes the entire village, sometimes hundreds of people.",
                "answer": false,
                "explain": "A small-group meeting is kept small on purpose — often just 5 to 15 people — so everyone can speak and be heard."
              }
            ]
          }
        ],
        "finalQuiz": {
          "passScore": 70,
          "questions": [
            {
              "topicId": "t-why-meetings",
              "type": "mcq",
              "q": "Which of these is a good reason to call a village meeting?",
              "options": [
                "To avoid talking to farmers directly",
                "To explain a new rule to many farmers at the same time",
                "To collect milk faster",
                "To replace the Management Committee"
              ],
              "answer": 1,
              "explain": "Meetings are called to explain something important, like a new rule, to many farmers at once, so everyone hears the same correct information."
            },
            {
              "topicId": "t-meeting-groups",
              "type": "truefalse",
              "q": "The MRG (Member Relation Group) mainly focuses on listening to members' problems and helping solve them.",
              "answer": true,
              "explain": "The MRG's main job is looking after the relationship with members — hearing problems and helping resolve them."
            }
          ]
        }
      },
      {
        "id": "m7-l2",
        "title": "Planning and Running a Small-Group Meeting",
        "estMinutes": 7,
        "hook": [
          {
            "type": "hero",
            "heading": "Planning and Running a Small-Group Meeting",
            "text": "Calling a meeting is easy. Running one well — where quiet people speak up and problems get solved — takes a little planning. Let's learn how."
          }
        ],
        "topics": [
          {
            "id": "t-plan-agenda",
            "title": "Before the Meeting: Planning",
            "teach": [
              {
                "type": "text",
                "heading": "Every Meeting Needs an Agenda",
                "html": "Before you call people together, decide exactly what you want to talk about, and in what order. Writing this down — even as a short list — is called an <b>agenda</b>."
              },
              {
                "type": "glossary",
                "term": "Agenda",
                "meaning": "A short list of the topics you will talk about in a meeting, in order. It keeps the meeting on track and stops it from running too long."
              },
              {
                "type": "text",
                "heading": "Where and How People Sit",
                "html": "How people sit changes how they talk. Sitting in a <b>circle</b> or facing each other lets everyone see who is speaking and feel equally included. If people sit in rows facing only the Sahayak, like a classroom, quiet farmers often stay quiet."
              },
              {
                "type": "example",
                "heading": "A Good Agenda Looks Like This",
                "text": "1) Welcome the farmers (2 minutes). 2) Share today's topic — for example, a new milk-testing method (5 minutes). 3) Answer questions (10 minutes). 4) Agree on next steps (3 minutes)."
              },
              {
                "type": "callout",
                "style": "tip",
                "heading": "Keep It Short",
                "text": "A small-group meeting works best when it stays short — around 15 minutes. A focused, on-time meeting keeps farmers willing to come to the next one."
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": "What is an agenda?",
                "options": [
                  "The place where the meeting is held",
                  "A short list of topics to discuss, in order",
                  "The list of farmers who did not attend",
                  "The bill for the meeting's tea and snacks"
                ],
                "answer": 1,
                "explain": "An agenda is a short, ordered list of what will be discussed. It keeps a meeting focused and on time."
              },
              {
                "type": "truefalse",
                "q": "Seating everyone in a circle, facing each other, usually helps more people speak up than seating them in rows facing only the Sahayak.",
                "answer": true,
                "explain": "A circle lets everyone see each other and feel equally part of the discussion, which encourages quieter people to speak."
              }
            ]
          },
          {
            "id": "t-encourage-speak",
            "title": "Getting Everyone to Speak — and Handling Objections",
            "teach": [
              {
                "type": "text",
                "heading": "Quiet Members Have Good Ideas Too",
                "html": "In every group, some people speak up easily and some stay quiet — even when they have something important to say. Part of your job as Sahayak is to gently invite the quiet ones into the conversation."
              },
              {
                "type": "example",
                "heading": "Try This",
                "text": "Sahayak: \"Lakshmi akka, you have kept animals for many years. What do you think about this new collection time?\" Lakshmi: \"I think it will help — but what about the days when it rains heavily?\" A simple, direct question, asked kindly, brought out a real concern that everyone needed to hear."
              },
              {
                "type": "text",
                "heading": "When Someone Objects",
                "html": "When a farmer disagrees or raises a problem, do not argue or brush it aside. First, <b>listen fully</b>. Then <b>repeat the concern back</b> in your own words, so they know you understood. Then answer calmly, using facts. If you do not know the answer, say so honestly, and promise to find out and come back."
              },
              {
                "type": "example",
                "heading": "Handling an Objection — Do This",
                "text": "Farmer: \"Why should we trust this new payment schedule? Last time we were told something and it did not happen.\" Sahayak: \"I understand your worry — trust was broken before. Let me explain exactly how this is different, and I will also write down the new dates so you can check them yourself.\""
              },
              {
                "type": "callout",
                "style": "warning",
                "heading": "Don't Do This",
                "text": "Don't argue back. Don't say \"just trust me.\" Don't ignore an objection and quickly move to the next topic. Doing this makes farmers feel unheard — and they may stop coming to meetings altogether."
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": "A farmer raises an objection you don't have an answer for. What should you do?",
                "options": [
                  "Ignore it and move to the next topic",
                  "Argue that the farmer is wrong",
                  "Admit you don't know, and promise to find out and come back",
                  "End the meeting early"
                ],
                "answer": 2,
                "explain": "Honesty builds trust. It is far better to admit you don't know and follow up later than to guess or dismiss the concern."
              },
              {
                "type": "truefalse",
                "q": "Directly and kindly inviting a quiet member to speak, by name, can help bring out concerns the group needs to hear.",
                "answer": true,
                "explain": "Asking a quiet member directly, in a respectful way, often draws out useful information that would otherwise go unsaid."
              }
            ]
          }
        ],
        "finalQuiz": {
          "passScore": 70,
          "questions": [
            {
              "topicId": "t-plan-agenda",
              "type": "mcq",
              "q": "About how long should a small-group meeting last?",
              "options": [
                "Around 15 minutes",
                "2 hours",
                "The whole day",
                "5 minutes, no more"
              ],
              "answer": 0,
              "explain": "A small-group meeting works best when kept short and focused — around 15 minutes."
            },
            {
              "topicId": "t-encourage-speak",
              "type": "truefalse",
              "q": "When handling an objection, you should first listen fully and repeat the concern back before answering.",
              "answer": true,
              "explain": "Listening first and repeating the concern shows the farmer you understood, which makes your answer land better."
            }
          ]
        }
      },
      {
        "id": "m7-l3",
        "title": "Small Group Meeting or Mass Meeting?",
        "estMinutes": 6,
        "hook": [
          {
            "type": "hero",
            "heading": "Small Group Meeting or Mass Meeting?",
            "text": "From a handful of farmers to a whole village — which meeting do you call, and when? Let's learn the difference."
          }
        ],
        "topics": [
          {
            "id": "t-mass-meeting",
            "title": "What Is a Village Mass Meeting?",
            "teach": [
              {
                "type": "text",
                "heading": "When the Whole Village Comes Together",
                "html": "Sometimes a topic is important enough that most or all farmer families in the village need to hear it directly. For this, a <b>mass meeting</b> is called — much bigger than a small-group meeting."
              },
              {
                "type": "glossary",
                "term": "Mass Meeting",
                "meaning": "A large meeting where most or all of the farmer families in a village are invited — not just a small group directly affected by one issue."
              },
              {
                "type": "stat-grid",
                "items": [
                  {
                    "label": "Village Meeting",
                    "text": "A general meeting for the whole village, used to share important news or take a big decision together."
                  },
                  {
                    "label": "Health Camp",
                    "text": "A camp where trained staff check the health of milk animals, give advice, and sometimes vaccinate them — held for the whole village at once."
                  },
                  {
                    "label": "Milk Testing Camp (DMT)",
                    "text": "A camp where milk quality is tested openly in front of many farmers together, so they can see for themselves how testing works and trust it."
                  }
                ]
              },
              {
                "type": "callout",
                "style": "info",
                "heading": "Did You Know?",
                "text": "A mass meeting usually needs more planning than a small-group meeting — more space, more chairs, and more helpers to manage a bigger crowd."
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": "What is a mass meeting?",
                "options": [
                  "A meeting with only the Management Committee",
                  "A large meeting where most or all farmer families in the village are invited",
                  "A meeting held only once a year",
                  "A meeting only for new members"
                ],
                "answer": 1,
                "explain": "A mass meeting is a large, village-wide meeting, unlike a small-group meeting which involves only the people directly affected by one topic."
              },
              {
                "type": "truefalse",
                "q": "A health camp for milk animals is an example of an activity that can be part of a village mass meeting.",
                "answer": true,
                "explain": "Health camps, along with village meetings and milk testing camps, are examples of activities held for the whole village at once."
              }
            ]
          },
          {
            "id": "t-choosing-right-meeting",
            "title": "Which One Should You Call?",
            "teach": [
              {
                "type": "text",
                "heading": "Small Group vs Mass Meeting",
                "html": "The right choice depends on <b>who is affected</b> and <b>what you need from the meeting</b>. A small group works when only a few farmers are involved and you need real discussion. A mass meeting works when everyone needs the same information at once."
              },
              {
                "type": "stat-grid",
                "items": [
                  {
                    "label": "Choose a Small Group When...",
                    "text": "the topic affects only a few farmers, or you need everyone present to discuss in detail and be heard."
                  },
                  {
                    "label": "Choose a Mass Meeting When...",
                    "text": "the topic affects the whole village — like a new MPP opening or a big rate change — and you mainly need to inform many people at once."
                  }
                ]
              },
              {
                "type": "example",
                "heading": "Think About It",
                "text": "Ten farmers are unhappy about how their milk's fat percentage is being measured. Should you call a mass meeting of 100 people, or a small group of these 10? A small group is better here — it lets you discuss each farmer's concern in real detail."
              },
              {
                "type": "callout",
                "style": "tip",
                "heading": "Plan Extra Time for Mass Meetings",
                "text": "A mass meeting for a large group usually needs about 20 minutes or more, often with two or more people helping manage the crowd — much more than a small 15-minute group meeting."
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": "A new MPP is opening and every farmer in the village needs to know about it. Which type of meeting fits best?",
                "options": [
                  "A small-group meeting with 5 farmers",
                  "A mass meeting for the whole village",
                  "No meeting is needed",
                  "A meeting only with the transporter"
                ],
                "answer": 1,
                "explain": "Since this news affects every farmer in the village, a mass meeting is the right choice so everyone hears it directly."
              },
              {
                "type": "truefalse",
                "q": "A mass meeting usually needs less planning time than a small-group meeting.",
                "answer": false,
                "explain": "A mass meeting needs MORE planning — more space, more helpers, and more time — because it involves far more people."
              }
            ]
          }
        ],
        "finalQuiz": {
          "passScore": 70,
          "isFinal": true,
          "questions": [
            {
              "topicId": "t-mass-meeting",
              "type": "mcq",
              "q": "Which of these best describes a mass meeting?",
              "options": [
                "A meeting with just the VCG",
                "A large, village-wide meeting for most or all farmer families",
                "A one-on-one talk with a single farmer",
                "A meeting held only inside the MPP office"
              ],
              "answer": 1,
              "explain": "A mass meeting is large and village-wide, unlike a small-group meeting."
            },
            {
              "topicId": "t-choosing-right-meeting",
              "type": "mcq",
              "q": "A handful of farmers have a detailed complaint about payment delays. What is the better choice?",
              "options": [
                "A mass meeting for the whole village",
                "A small-group meeting with just those farmers",
                "No meeting, just wait for it to resolve itself",
                "A health camp"
              ],
              "answer": 1,
              "explain": "Since only a few farmers are affected and the issue needs real discussion, a small-group meeting is the better choice."
            }
          ]
        }
      }
    ]
  },
  {
    "id": "m8",
    "number": 8,
    "title": L("Formation of MPP & Milk Routes", "MPP और दूध मार्गों का निर्माण"),
    "subtitle": "Learn how a new Milk Pooling Point is chosen and set up, and how milk collection routes are planned so milk reaches the chilling centre fresh and on time.",
    "icon": "milk",
    "available": true,
    "lessons": [
      {
        "id": "m8-l1",
        "title": "Where Should a New MPP Go?",
        "estMinutes": 7,
        "hook": [
          {
            "type": "hero",
            "heading": "Where Should a New MPP Go?",
            "text": "Before an MPP ever opens its doors, someone has to work out exactly where it should be. In this lesson, you'll learn how that decision gets made."
          }
        ],
        "topics": [
          {
            "id": "t-village-survey",
            "title": "The Village Survey",
            "teach": [
              {
                "type": "text",
                "heading": "Why Survey a Village First?",
                "html": "Before setting up a new <b>MPP</b> or chilling facility in an area, the organisation needs real facts about that area — not guesses. This is done through a <b>village survey</b>."
              },
              {
                "type": "glossary",
                "term": "MPP (Milk Pooling Point)",
                "meaning": "A place where farmers bring their milk daily and get paid fairly and on time — the same MPP you help form and run as a Sahayak."
              },
              {
                "type": "text",
                "heading": "How Far Does the Survey Go?",
                "html": "Villages located <b>4 to 5 km</b> on either side of the main road are surveyed. Villages this close to a road are within reasonable reach for a daily milk collection route."
              },
              {
                "type": "glossary",
                "term": "MAH (Milk Animal Household)",
                "meaning": "A household in the village that keeps cows or buffaloes for milk. During a survey, the team visits each MAH and asks a set of questions, using a fixed format."
              },
              {
                "type": "stat-grid",
                "items": [
                  {
                    "label": "How Many Animals",
                    "text": "The total number of milk animals in each household, and in the whole village."
                  },
                  {
                    "label": "How Much Milk",
                    "text": "How much milk is produced, how much the family keeps for itself, and how much surplus is left over to sell."
                  },
                  {
                    "label": "Where Milk Goes Now",
                    "text": "Which traders or dairies farmers currently sell to, at what price, and how (and when) they get paid."
                  },
                  {
                    "label": "Village Facilities",
                    "text": "Roads, electricity, water, schools — these affect how easy it will be to run a collection point in this village."
                  }
                ]
              },
              {
                "type": "callout",
                "style": "info",
                "heading": "Did You Know?",
                "text": "The survey doesn't stop at milk numbers. It also looks at the different communities living in the village and how they relate to each other — because a collection point works best when it serves the whole village fairly."
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": "How far from the main road are villages typically surveyed?",
                "options": [
                  "Only right next to the road",
                  "4 to 5 km on either side",
                  "50 km on either side",
                  "Only villages with no road access"
                ],
                "answer": 1,
                "explain": "Villages within about 4 to 5 km of the main road are surveyed, since they are within reasonable reach of a daily collection route."
              },
              {
                "type": "truefalse",
                "q": "The village survey only counts milk animals and ignores things like roads, water, and schools.",
                "answer": false,
                "explain": "The survey also looks at village facilities like roads, electricity, water, and schools, because these affect how easy it will be to run a collection point there."
              }
            ]
          },
          {
            "id": "t-siting-criteria",
            "title": "Deciding Where to Place the MPP",
            "teach": [
              {
                "type": "text",
                "heading": "From Survey to Decision",
                "html": "Once several villages have been surveyed, the numbers are compared to work out how much milk could realistically be collected from the whole area. This decides both the location and the size of the facility needed."
              },
              {
                "type": "stat-grid",
                "items": [
                  {
                    "label": "Enough Farmers",
                    "text": "The area should have enough milk-animal households to make setting up a collection point worthwhile."
                  },
                  {
                    "label": "Enough Milk Volume",
                    "text": "The expected surplus milk (after each household's own use) must be large enough to justify running a chilling facility."
                  },
                  {
                    "label": "Distance Between Villages",
                    "text": "Village-to-village distance is measured so a realistic collection route can connect them to the MPP."
                  },
                  {
                    "label": "Easy Access",
                    "text": "The site must be reachable by vehicle, so milk cans can be collected and moved out quickly, every day."
                  }
                ]
              },
              {
                "type": "text",
                "heading": "Choosing a Cluster BMC or an MCC",
                "html": "Based on how much milk is available, the organisation decides what kind of chilling setup fits best — a smaller Cluster BMC, or a bigger MCC."
              },
              {
                "type": "glossary",
                "term": "BMC (Bulk Milk Cooler)",
                "meaning": "A machine that cools milk quickly and keeps it fresh until it is picked up. A Cluster BMC serves a group of nearby villages together."
              },
              {
                "type": "glossary",
                "term": "MCC (Milk Chilling Centre)",
                "meaning": "A bigger centre that chills milk coming in from many villages, before it is sent onward to the dairy plant."
              },
              {
                "type": "example",
                "heading": "Think About It",
                "text": "If government census data shows an area has thousands of milk animals but very few organised dairy buyers already working there, that is a good sign for opening a new MPP nearby."
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": "What mainly decides whether an area gets a smaller Cluster BMC or a bigger MCC?",
                "options": [
                  "The colour of the milk cans used",
                  "How much milk is available in that area",
                  "The number of Sahayaks already trained",
                  "The distance to the nearest city"
                ],
                "answer": 1,
                "explain": "The amount of milk available in the area decides whether a smaller Cluster BMC or a bigger MCC is the right fit."
              },
              {
                "type": "truefalse",
                "q": "Village-to-village distance is measured mainly so a realistic milk collection route can be planned.",
                "answer": true,
                "explain": "Distance between villages helps decide how they can be linked together into one practical collection route."
              }
            ]
          }
        ],
        "finalQuiz": {
          "passScore": 70,
          "questions": [
            {
              "topicId": "t-village-survey",
              "type": "mcq",
              "q": "What does an MAH survey mainly try to find out?",
              "options": [
                "How many schools are in the village",
                "How many milk animals, how much milk, and where it is currently sold",
                "The names of every child in the household",
                "The colour of each family's roof"
              ],
              "answer": 1,
              "explain": "The MAH survey collects facts about milk animals, milk production and surplus, and where the milk is currently sold."
            },
            {
              "topicId": "t-siting-criteria",
              "type": "truefalse",
              "q": "The expected surplus milk in an area is one of the things considered before setting up a chilling facility there.",
              "answer": true,
              "explain": "Enough surplus milk is needed to justify the cost of running a chilling facility in that area."
            }
          ]
        }
      },
      {
        "id": "m8-l2",
        "title": "Setting Up the MPP, Step by Step",
        "estMinutes": 7,
        "hook": [
          {
            "type": "hero",
            "heading": "Setting Up the MPP, Step by Step",
            "text": "Once a location looks promising, there is still a clear sequence of steps to follow — and a village and a Sahayak to choose — before the MPP can actually open."
          }
        ],
        "topics": [
          {
            "id": "t-setup-steps",
            "title": "The Steps to Set Up an MPP",
            "teach": [
              {
                "type": "text",
                "heading": "From Data to a Working MPP",
                "html": "Setting up a new MPP or chilling facility follows a clear order: gather background information, check it on the ground, decide the setup needed, find someone to build it, and then follow up until it is running."
              },
              {
                "type": "stat-grid",
                "items": [
                  {
                    "label": "1. Gather Data",
                    "text": "Collect secondary data — government census, survey reports, and information on any organised buyers already working in the area."
                  },
                  {
                    "label": "2. Visit and Validate",
                    "text": "Visit the villages in person to check that the data matches what is really happening on the ground."
                  },
                  {
                    "label": "3. Decide the Setup",
                    "text": "Based on milk availability, decide the chilling mode (Cluster BMC or MCC) and its capacity."
                  },
                  {
                    "label": "4. Appoint and Follow Up",
                    "text": "Identify a party to build the facility, issue a Letter of Intent with a timeline, then follow up regularly until it opens."
                  }
                ]
              },
              {
                "type": "glossary",
                "term": "Secondary Data",
                "meaning": "Information that is already collected by someone else — like a government survey — that gives you a starting point before you visit a village yourself."
              },
              {
                "type": "glossary",
                "term": "LOI (Letter of Intent)",
                "meaning": "A written letter stating that the organisation intends to work with a certain party — a person or a company — to build or run the facility, along with an agreed timeline."
              },
              {
                "type": "callout",
                "style": "tip",
                "heading": "Don't Skip the Follow-Up",
                "text": "Issuing the LOI is not the end of the job. Someone must regularly check progress, so the chilling facility opens on time — not months late."
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": "What usually happens right after secondary data is gathered?",
                "options": [
                  "The MPP opens immediately",
                  "Villages are visited in person to check the data on the ground",
                  "Milk rates are announced",
                  "A health camp is held"
                ],
                "answer": 1,
                "explain": "After gathering secondary data, the next step is visiting villages in person to validate that the information is accurate."
              },
              {
                "type": "truefalse",
                "q": "Once the LOI is issued, no more follow-up is needed.",
                "answer": false,
                "explain": "Regular follow-up after the LOI is issued is essential, so the facility actually opens on time."
              }
            ]
          },
          {
            "id": "t-choosing-sahayak",
            "title": "Choosing the Village and the Sahayak",
            "teach": [
              {
                "type": "text",
                "heading": "The Right Village",
                "html": "Before finalising anything, a village-level meeting is held with farmers to explain the plan and see how much interest there really is."
              },
              {
                "type": "text",
                "heading": "Choosing the MPP's Exact Location Within the Village",
                "html": "Even after a village is chosen, the exact spot for the MPP matters. It should be <b>convenient</b> for the most members, easy for the milk-collection vehicle to reach, and already <b>clean and tidy</b>."
              },
              {
                "type": "stat-grid",
                "items": [
                  {
                    "label": "Convenient Location",
                    "text": "Easy to reach for the largest possible number of member farmers, not just a few living nearby."
                  },
                  {
                    "label": "Vehicle Access",
                    "text": "The inward vehicle that collects milk must be able to reach and turn around easily, even early in the morning."
                  },
                  {
                    "label": "Clean & Tidy",
                    "text": "The site should already be clean, because milk is a food product and hygiene starts with the location itself."
                  }
                ]
              },
              {
                "type": "text",
                "heading": "Finding the Right Sahayak",
                "html": "Along with choosing the location, the organisation looks for a good <b>Sahayak candidate</b> from the village — someone locally trusted, available both morning and evening, honest, and comfortable talking with people."
              },
              {
                "type": "example",
                "heading": "Structure of a Good MPP",
                "text": "A well-built MPP has accessible, well-designed infrastructure; a clean and hygienic environment; and clear communication — for example, a notice board showing that day's milk rate, so every farmer can see it for themselves."
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": "Which of these is NOT one of the location criteria mentioned for placing an MPP?",
                "options": [
                  "Convenient for the maximum number of members",
                  "Easy access for the inward vehicle",
                  "Clean and tidy locality",
                  "Located exactly at the centre of the district"
                ],
                "answer": 3,
                "explain": "The criteria mentioned are convenience for members, vehicle access, and cleanliness — not distance to the district centre."
              },
              {
                "type": "truefalse",
                "q": "A village-level meeting with farmers is held to explain the plan before finalising an MPP in that village.",
                "answer": true,
                "explain": "A village-level meeting helps explain the plan to farmers and gauge their interest before the MPP is finalised."
              }
            ]
          }
        ],
        "finalQuiz": {
          "passScore": 70,
          "questions": [
            {
              "topicId": "t-setup-steps",
              "type": "mcq",
              "q": "What is an LOI?",
              "options": [
                "A type of milk can",
                "A written letter stating intent to work with a party, with a timeline",
                "A government census report",
                "A type of chilling machine"
              ],
              "answer": 1,
              "explain": "An LOI (Letter of Intent) is a written statement of intent to work with a chosen party, along with an agreed timeline."
            },
            {
              "topicId": "t-choosing-sahayak",
              "type": "mcq",
              "q": "Besides being locally trusted, what else matters when choosing a Sahayak candidate?",
              "options": [
                "Being available both morning and evening, and comfortable with people",
                "Owning the most animals in the village",
                "Being related to the Management Committee",
                "Living farthest from the MPP site"
              ],
              "answer": 0,
              "explain": "A good Sahayak candidate should be locally trusted, available at both collection times, honest, and good with people."
            }
          ]
        }
      },
      {
        "id": "m8-l3",
        "title": "Planning Milk Collection Routes",
        "estMinutes": 7,
        "hook": [
          {
            "type": "hero",
            "heading": "Planning Milk Collection Routes",
            "text": "Once MPPs are set up, milk still has to travel from each village to the chilling centre — fresh, and on time. That is route planning."
          }
        ],
        "topics": [
          {
            "id": "t-route-goals",
            "title": "What Good Route Planning Achieves",
            "teach": [
              {
                "type": "text",
                "heading": "Four Things a Good Route Must Do",
                "html": "A milk collection route is not just about connecting villages by road. A good route is planned to achieve four things together."
              },
              {
                "type": "stat-grid",
                "items": [
                  {
                    "label": "Maintain Milk Quality",
                    "text": "The shorter and better-planned the journey, the fresher the milk stays by the time it reaches the chilling centre."
                  },
                  {
                    "label": "Timely Collection",
                    "text": "Milk must be picked up at a fixed, predictable time every day, so farmers know exactly when to be ready."
                  },
                  {
                    "label": "Minimise Transport Cost",
                    "text": "The route should avoid unnecessary distance or repeated trips, saving fuel and vehicle cost."
                  },
                  {
                    "label": "Optimal Time at MPP",
                    "text": "The vehicle should not sit too long at any one MPP, so it can complete the whole route without milk waiting around and losing freshness."
                  }
                ]
              },
              {
                "type": "callout",
                "style": "warning",
                "heading": "Why This Matters",
                "text": "Milk starts losing quality soon after it leaves the animal, especially in the heat. A poorly planned route — one that is too long or wastes time — can spoil milk before it even reaches the chilling centre."
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": "Why does a route need timely, predictable collection?",
                "options": [
                  "So the vehicle can visit more villages than planned",
                  "So farmers know exactly when to be ready with their milk",
                  "So drivers can take longer breaks",
                  "It does not really matter"
                ],
                "answer": 1,
                "explain": "A fixed, predictable collection time lets farmers plan around it and have their milk ready when the vehicle arrives."
              },
              {
                "type": "truefalse",
                "q": "A vehicle spending too long at one MPP can cause milk collected earlier on the route to lose freshness.",
                "answer": true,
                "explain": "Time adds up along the whole route. Delays at any one stop can affect how fresh the milk collected earlier still is by the end."
              }
            ]
          },
          {
            "id": "t-route-practice",
            "title": "Planning a Route in Practice",
            "teach": [
              {
                "type": "text",
                "heading": "Using the Village Survey",
                "html": "Once village-to-village distances are collected during the survey, the route can actually be planned. A road map of the whole area, showing villages and the BMC/MCC positions, is prepared so the sequence of stops is clear."
              },
              {
                "type": "example",
                "heading": "A Simple Route Example",
                "text": "Villages A, B and C sit on the same road, about 3 km apart from each other. Village D is 6 km off the main road, with far fewer farmers. Instead of driving out to D first and doubling back, the route runs A, then B, then C in a straight line — and D is only added if there is enough milk there to be worth the extra time, or it gets a separate, smaller route."
              },
              {
                "type": "text",
                "heading": "Balancing Speed and Coverage",
                "html": "Whoever plans the route has to balance two things: covering as many villages as possible, without making the total trip so long that milk collected first spoils before the vehicle even reaches the chilling centre."
              },
              {
                "type": "callout",
                "style": "tip",
                "heading": "Review Routes Regularly",
                "text": "As farmers join or leave, or milk volume in a village grows, routes should be reviewed and adjusted. A route planned once does not have to stay fixed forever."
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": "In the route example, why is village D only added if it has enough milk, or given a separate route?",
                "options": [
                  "Because D has no farmers at all",
                  "Because visiting D first would mean doubling back, adding time to the whole route",
                  "Because D does not want an MPP",
                  "Because D is closer than A, B and C"
                ],
                "answer": 1,
                "explain": "Village D is off the main road, so reaching it means extra distance and doubling back — worth doing only if there is enough milk to justify the added time."
              },
              {
                "type": "truefalse",
                "q": "Once a milk route is planned, it should never be changed again.",
                "answer": false,
                "explain": "Routes should be reviewed and adjusted over time, as the number of farmers or the amount of milk in a village changes."
              }
            ]
          }
        ],
        "finalQuiz": {
          "passScore": 70,
          "isFinal": true,
          "questions": [
            {
              "topicId": "t-route-goals",
              "type": "mcq",
              "q": "Which of these is one of the four goals of good route planning?",
              "options": [
                "Maximising transport cost",
                "Minimising transportation cost",
                "Making the vehicle wait as long as possible at each stop",
                "Avoiding timely collection"
              ],
              "answer": 1,
              "explain": "Minimising transportation cost is one of the four goals, along with milk quality, timely collection, and optimal time at the MPP."
            },
            {
              "topicId": "t-route-practice",
              "type": "truefalse",
              "q": "A road map showing villages and BMC/MCC positions helps make the sequence of route stops clear.",
              "answer": true,
              "explain": "Preparing a road map of the area, with villages and chilling-point positions marked, helps plan a clear and practical route."
            }
          ]
        }
      }
    ]
  },
  {
    "id": "m9",
    "number": 9,
    "title": L("Member Enrolment and Data Collection", "सदस्य नामांकन और डेटा संग्रह"),
    "subtitle": "Learn how a farmer becomes a registered MPP member, and how daily milk records are kept accurate and fair for everyone.",
    "icon": "milk",
    "available": true,
    "lessons": [
      {
        "id": "m9-l1",
        "title": "Enrolling a New Farmer Member",
        "estMinutes": 7,
        "hook": [
          {
            "type": "hero",
            "heading": "Welcoming a New Member",
            "text": "Before a farmer can sell even one litre of milk at the MPP, they must first become a registered member. Let's learn how this is done, step by step."
          }
        ],
        "topics": [
          {
            "id": "t-m9-l1-documents",
            "title": "What a New Member Must Provide",
            "teach": [
              {
                "type": "text",
                "heading": "Becoming a Member",
                "html": "Before a farmer can sell milk at the MPP and get paid, they must first join as a <b>member</b>. This is called <b>enrolment</b>. Enrolment is not just paperwork — it protects both the farmer and the MPO (Milk Producer Organisation)."
              },
              {
                "type": "glossary",
                "term": "Enrolment",
                "meaning": "The process of officially signing up a farmer as a member of the MPP, so they can supply milk and receive payment for it."
              },
              {
                "type": "text",
                "heading": "Basic KYC Details",
                "html": "Every new member must give some basic details about themselves. This is called <b>KYC</b>, which means 'Know Your Customer'. It proves who the farmer really is, before any money changes hands."
              },
              {
                "type": "glossary",
                "term": "KYC (Know Your Customer)",
                "meaning": "A simple check of a person's identity using official documents, like Aadhaar. It stops fraud and confirms who is really joining as a member."
              },
              {
                "type": "stat-grid",
                "items": [
                  {
                    "label": "Aadhaar Card",
                    "text": "Proves the farmer's identity and address. A photocopy is kept with the enrolment form."
                  },
                  {
                    "label": "Bank Account Details",
                    "text": "The farmer's own bank account number and IFSC code, so milk payments go directly to them — no cash, no middleman."
                  },
                  {
                    "label": "Passport-Size Photo",
                    "text": "A recent photo for the membership file and, where used, the member's ID card."
                  },
                  {
                    "label": "Animal Details",
                    "text": "How many milk animals the farmer owns (cows or buffaloes), and roughly how much milk each one gives."
                  }
                ]
              },
              {
                "type": "callout",
                "style": "tip",
                "heading": "Why the Bank Account Matters So Much",
                "text": "When a farmer's own bank account is on file, payment goes straight to them, automatically, every time. No one else can collect the money on their behalf without their knowledge. This is one of the biggest protections that enrolment gives a farmer."
              },
              {
                "type": "example",
                "heading": "Meet Farmer Lakshmi",
                "text": "Lakshmi owns two buffaloes and wants to start selling milk at her village MPP. Before she can bring even one litre of milk, the Sahayak asks her for her Aadhaar card, her bank passbook, and details of her animals. Only after this is checked and recorded does she become a registered member."
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": "Why does the MPP collect a farmer's bank account details during enrolment?",
                "options": [
                  "So the MPO can lend the farmer money",
                  "So milk payment goes directly to the farmer, safely and on time",
                  "So the farmer can pay a membership fee",
                  "It is not really necessary"
                ],
                "answer": 1,
                "explain": "A farmer's own bank account means payment goes straight to them every time — safe, direct, and on time, with no middleman."
              },
              {
                "type": "truefalse",
                "q": "KYC means checking who a person really is, using documents like Aadhaar.",
                "answer": true,
                "explain": "Correct. KYC stands for 'Know Your Customer' — it confirms the true identity of the person joining as a member."
              }
            ]
          },
          {
            "id": "t-m9-l1-steps",
            "title": "Steps to Register a Member at the MPP",
            "teach": [
              {
                "type": "text",
                "heading": "From Visit to Registered Member",
                "html": "Enrolling a new member follows the same basic steps at most MPPs across India. Let's walk through them one by one."
              },
              {
                "type": "text",
                "heading": "The Five Steps",
                "html": "<b>1. Farmer visits the MPP:</b> The farmer, usually with help from the Sahayak, comes to the MPP to ask about joining.<br><b>2. Fill the enrolment form:</b> Basic details — name, address, family details, and animal details — are written into the official enrolment form.<br><b>3. Collect and verify documents:</b> The Sahayak checks the Aadhaar card and bank passbook copies against the form, to make sure everything matches.<br><b>4. Assign a membership number:</b> Once approved, the farmer gets a unique membership number, or ID. This number is used every single day to record their milk.<br><b>5. Issue a passbook or ID card:</b> The farmer gets their own record book or card, showing their membership number and details."
              },
              {
                "type": "glossary",
                "term": "Membership Number",
                "meaning": "A unique ID number given to each farmer member. It links every milk record, quality test and payment back to that one farmer."
              },
              {
                "type": "callout",
                "style": "warning",
                "heading": "Never Skip Verification",
                "text": "A membership must never be created without checking real documents. Enrolling a person who does not exist, or who is not really the animal owner, can lead to wrong payments and fraud that hurts the whole MPO."
              },
              {
                "type": "callout",
                "style": "tip",
                "heading": "Double-Check Before You Submit",
                "text": "Small mistakes — a wrong Aadhaar number, a misspelled name, a wrong account number — can delay a farmer's very first payment. Always read every detail back to the farmer before finishing enrolment."
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": "What is a membership number mainly used for?",
                "options": [
                  "To decide how much land the farmer owns",
                  "To link every milk record, test and payment to one farmer",
                  "To give the farmer a bank loan",
                  "It has no real use"
                ],
                "answer": 1,
                "explain": "Every day's milk record, quality test and payment is linked back to the farmer through their membership number."
              },
              {
                "type": "truefalse",
                "q": "It is fine to register a new member without checking their documents, as long as they seem trustworthy.",
                "answer": false,
                "explain": "Every new member's documents must always be verified. Skipping this step can lead to fraud and wrong payments later."
              }
            ]
          }
        ],
        "finalQuiz": {
          "passScore": 70,
          "questions": [
            {
              "topicId": "t-m9-l1-documents",
              "type": "mcq",
              "q": "Which of these is NOT something a new member usually needs to provide?",
              "options": [
                "Aadhaar card copy",
                "Bank account details",
                "A vehicle registration certificate",
                "Animal details"
              ],
              "answer": 2,
              "explain": "Farmers provide identity proof, bank details and animal details — not a vehicle registration certificate."
            },
            {
              "topicId": "t-m9-l1-steps",
              "type": "truefalse",
              "q": "A farmer's membership number is only used once, at the time of joining.",
              "answer": false,
              "explain": "The membership number is used every day, for every milk record, test and payment — not just once at joining."
            }
          ]
        }
      },
      {
        "id": "m9-l2",
        "title": "Recording Milk Data Every Day",
        "estMinutes": 7,
        "hook": [
          {
            "type": "hero",
            "heading": "Every Drop Counts",
            "text": "Once a farmer is enrolled, their real work with the MPP begins — bringing milk, twice a day, every day. Each time, important information must be recorded correctly. Let's see what gets recorded, and why it matters so much."
          }
        ],
        "topics": [
          {
            "id": "t-m9-l2-what-to-record",
            "title": "What Gets Recorded at Every Milk Collection",
            "teach": [
              {
                "type": "text",
                "heading": "Two Sessions a Day",
                "html": "Farmers bring milk to the MPP twice a day — a <b>morning session</b> and an <b>evening session</b>. Each time, the MPP records details about that day's milk."
              },
              {
                "type": "stat-grid",
                "items": [
                  {
                    "label": "Membership Number",
                    "text": "So the milk is credited to the correct farmer, and nobody else."
                  },
                  {
                    "label": "Date and Session",
                    "text": "Whether it was the morning or evening collection, and on which date."
                  },
                  {
                    "label": "Quantity (in litres)",
                    "text": "How much milk the farmer brought, measured carefully every time."
                  },
                  {
                    "label": "Quality Test Result",
                    "text": "The FAT and SNF levels found when the milk is tested — this decides the rate paid per litre."
                  }
                ]
              },
              {
                "type": "example",
                "heading": "One Entry, Step by Step",
                "text": "Farmer Ramu, membership number 214, brings his milk to the MPP at 7 AM. The Sahayak records: Membership No. 214, today's date, Morning session, Quantity 8 litres, and the test result from the machine. This single entry decides exactly how much Ramu will be paid for that milk."
              },
              {
                "type": "callout",
                "style": "info",
                "heading": "Why Twice a Day?",
                "text": "Milking happens twice a day, so records are also made twice a day. This keeps payments accurate and matches what the animal actually produced, session by session."
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": "Which of these is recorded every time a farmer brings milk?",
                "options": [
                  "The farmer's favourite crop",
                  "Membership number, quantity and quality test result",
                  "The farmer's shoe size",
                  "The weather forecast for next week"
                ],
                "answer": 1,
                "explain": "Every milk collection is recorded with the farmer's membership number, the quantity, and the quality test result."
              },
              {
                "type": "truefalse",
                "q": "Milk is usually collected and recorded only once a day.",
                "answer": false,
                "explain": "Milk is collected and recorded twice a day — morning and evening — because animals are milked twice a day."
              }
            ]
          },
          {
            "id": "t-m9-l2-mistakes",
            "title": "Common Data Mistakes — and Why They Matter",
            "teach": [
              {
                "type": "text",
                "heading": "Why Accuracy Protects Everyone",
                "html": "Good record-keeping is not just paperwork. It is what makes sure every farmer gets paid exactly what they earned — no more, no less. A single wrong entry can cause a real problem for a real family."
              },
              {
                "type": "stat-grid",
                "items": [
                  {
                    "label": "Wrong Membership Number",
                    "text": "Milk gets credited to the wrong farmer, so one person is underpaid while another is overpaid."
                  },
                  {
                    "label": "Illegible Handwriting",
                    "text": "If numbers cannot be read clearly later, mistakes creep in when payments are calculated."
                  },
                  {
                    "label": "Delayed or Skipped Entries",
                    "text": "If an entry is not made right away, details can be forgotten or guessed — and guessing is never accurate."
                  },
                  {
                    "label": "Mixing Up Sessions",
                    "text": "Recording an evening collection as morning (or the other way around) can confuse the whole day's record."
                  }
                ]
              },
              {
                "type": "callout",
                "style": "warning",
                "heading": "A Small Mistake, A Big Problem",
                "text": "Even one wrong digit in a membership number or quantity can mean a farmer does not get paid correctly. Repeated mistakes can also make farmers lose trust in the MPP."
              },
              {
                "type": "callout",
                "style": "tip",
                "heading": "Good Habits for Accurate Records",
                "text": "Record every entry immediately, right at the time of collection. Read the membership number and quantity back to the farmer before moving to the next person. Keep the register neat and clear, so anyone can check it later."
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": "What can happen if a farmer's membership number is entered wrong?",
                "options": [
                  "Nothing, it does not matter",
                  "Milk gets credited to the wrong farmer, causing wrong payments",
                  "The MPP closes for the day",
                  "The milk quality improves"
                ],
                "answer": 1,
                "explain": "A wrong membership number means the milk — and the payment for it — goes to the wrong person's record."
              },
              {
                "type": "truefalse",
                "q": "It is fine to record milk details from memory at the end of the day, instead of at the time of collection.",
                "answer": false,
                "explain": "Details should be recorded immediately. Waiting and relying on memory leads to guesses and mistakes."
              }
            ]
          }
        ],
        "finalQuiz": {
          "passScore": 70,
          "isFinal": true,
          "questions": [
            {
              "topicId": "t-m9-l2-what-to-record",
              "type": "mcq",
              "q": "How many times a day is milk usually collected and recorded at an MPP?",
              "options": [
                "Once",
                "Twice",
                "Three times",
                "Only on Sundays"
              ],
              "answer": 1,
              "explain": "Milk is collected and recorded twice a day — morning and evening."
            },
            {
              "topicId": "t-m9-l2-mistakes",
              "type": "mcq",
              "q": "Why is it important to record milk details immediately, at the time of collection?",
              "options": [
                "Because the register looks nicer",
                "Because waiting causes mistakes and guessing",
                "Because farmers prefer to wait",
                "It is not important"
              ],
              "answer": 1,
              "explain": "Recording immediately avoids guesswork and keeps every farmer's payment accurate."
            }
          ]
        }
      }
    ]
  },
  {
    "id": "m10",
    "number": 10,
    "title": L("Milk Rates, Its Parameters and Methodologies", "दूध की दरें, इसके मानदंड और तरीके"),
    "subtitle": "Learn why milk is priced on quality, not just quantity — and practice the real maths MPPs use to work out a fair rate.",
    "icon": "milk",
    "available": true,
    "lessons": [
      {
        "id": "m10-l1",
        "title": "Why FAT and SNF Decide the Price",
        "estMinutes": 7,
        "hook": [
          {
            "type": "hero",
            "heading": "Why Isn't Milk Priced Like Water?",
            "text": "Two farmers each bring 10 litres of milk. Do they always get paid the same amount? Not necessarily — and there's a good reason why. Let's find out."
          }
        ],
        "topics": [
          {
            "id": "t-m10-l1-not-just-volume",
            "title": "Why Milk Isn't Priced by Volume Alone",
            "teach": [
              {
                "type": "text",
                "heading": "Same Litres, Different Value",
                "html": "If milk was priced only by how many litres a farmer brings, there would be no reward for good-quality milk — and no way to stop someone from adding water to increase volume. That is why MPPs price milk mainly on two things found inside it: <b>FAT</b> and <b>SNF</b>."
              },
              {
                "type": "glossary",
                "term": "FAT",
                "meaning": "The fat content of milk — it is what gives milk its richness, and is used to make butter, ghee and cream. It is measured as a percentage, like 4% or 6%."
              },
              {
                "type": "glossary",
                "term": "SNF (Solids-Not-Fat)",
                "meaning": "Everything solid in milk except fat — mainly protein, milk sugar (lactose) and minerals. It is also measured as a percentage, and matters for products like paneer and milk powder."
              },
              {
                "type": "stat-grid",
                "items": [
                  {
                    "label": "FAT — Richness",
                    "text": "Higher FAT means richer milk, better for ghee and butter. Cow milk is usually lower in FAT; buffalo milk is usually higher."
                  },
                  {
                    "label": "SNF — Solids",
                    "text": "Higher SNF means more protein, minerals and milk sugar — important for the milk's real food value and for products like paneer."
                  },
                  {
                    "label": "Testing Before Payment",
                    "text": "Every farmer's milk is tested for FAT and SNF before the rate is worked out — this is what makes the payment fair."
                  }
                ]
              },
              {
                "type": "callout",
                "style": "info",
                "heading": "Fair Pay for Real Quality",
                "text": "A farmer who feeds their animal well and takes good care of it usually gets milk with higher FAT and SNF — and earns a better rate. This system rewards good care, not just a bigger can of milk."
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": "What does FAT in milk mainly affect?",
                "options": [
                  "The colour of the milk can",
                  "The richness of the milk, used for ghee and butter",
                  "The distance milk travels to the MPP",
                  "The size of the farmer's herd"
                ],
                "answer": 1,
                "explain": "FAT is what gives milk its richness, and is used to make products like ghee and butter."
              },
              {
                "type": "truefalse",
                "q": "SNF stands for 'Solids-Not-Fat' and includes things like protein and milk sugar.",
                "answer": true,
                "explain": "Correct. SNF covers all the solid parts of milk apart from fat — mainly protein, lactose (milk sugar) and minerals."
              }
            ]
          },
          {
            "id": "t-m10-l1-factors",
            "title": "What Makes FAT and SNF Go Up or Down",
            "teach": [
              {
                "type": "text",
                "heading": "Not Every Litre Is the Same",
                "html": "FAT and SNF levels are not fixed — they change based on a few real factors. Knowing these helps a Sahayak explain milk rates to farmers clearly."
              },
              {
                "type": "stat-grid",
                "items": [
                  {
                    "label": "Species (Cow or Buffalo)",
                    "text": "Buffalo milk usually has more FAT (around 6-8%) than cow milk (around 3-4.5%). That is one reason buffalo milk often earns a higher rate per litre."
                  },
                  {
                    "label": "Breed",
                    "text": "Some breeds, like local indigenous breeds, can naturally give milk with higher FAT than some high-yield crossbred (HF) cows, even if the crossbred cow gives more total litres."
                  },
                  {
                    "label": "Season",
                    "text": "FAT and SNF can dip a little in hot summer months and rise in cooler winter months, because animals eat and drink differently."
                  }
                ]
              },
              {
                "type": "callout",
                "style": "warning",
                "heading": "Why Adulteration Is Caught",
                "text": "Adding water to milk lowers both FAT and SNF, because it dilutes everything in the milk. This is exactly why every sample is tested before payment — it protects honest farmers and the MPO."
              },
              {
                "type": "example",
                "heading": "Buffalo vs Cow, Same Rate",
                "text": "At the same fat rate, a buffalo giving 7% FAT milk will earn more per litre than a cow giving 4% FAT milk — because the buffalo's milk has more of what is actually being paid for."
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": "Which of these can cause FAT and SNF to be lower than they should be?",
                "options": [
                  "The farmer's name",
                  "Adding water to the milk",
                  "The colour of the milk can",
                  "The time the Sahayak wakes up"
                ],
                "answer": 1,
                "explain": "Adding water dilutes the milk, lowering both its FAT and SNF readings."
              },
              {
                "type": "truefalse",
                "q": "Buffalo milk usually has lower FAT than cow milk.",
                "answer": false,
                "explain": "It is the opposite — buffalo milk usually has more FAT (around 6-8%) than cow milk (around 3-4.5%)."
              }
            ]
          }
        ],
        "finalQuiz": {
          "passScore": 70,
          "questions": [
            {
              "topicId": "t-m10-l1-not-just-volume",
              "type": "mcq",
              "q": "Why do MPPs test milk for FAT and SNF before paying farmers?",
              "options": [
                "To decide the colour of the milk can",
                "To make sure the rate paid matches the real quality of the milk",
                "Because it is required for the animal's health",
                "To count how many farmers are members"
              ],
              "answer": 1,
              "explain": "Testing FAT and SNF makes sure farmers are paid fairly, based on the real quality of the milk they brought."
            },
            {
              "topicId": "t-m10-l1-factors",
              "type": "truefalse",
              "q": "Season can affect the FAT and SNF levels in milk.",
              "answer": true,
              "explain": "Yes — FAT and SNF can shift a little between summer and winter, because of changes in what animals eat and drink."
            }
          ]
        }
      },
      {
        "id": "m10-l2",
        "title": "Pricing on Fat Basis — Let's Do the Maths",
        "estMinutes": 8,
        "hook": [
          {
            "type": "hero",
            "heading": "Method 1: Pro-Rata Fat Pricing",
            "text": "This is the simplest pricing method — sometimes called Single-Axis pricing because it looks at just ONE thing: FAT. Let's learn the formula and try it with real numbers."
          }
        ],
        "topics": [
          {
            "id": "t-m10-l2-formula",
            "title": "The Pro-Rata Fat Formula",
            "teach": [
              {
                "type": "text",
                "heading": "One Simple Formula",
                "html": "In <b>Pro-Rata Fat pricing</b> (also called <b>Single-Axis pricing</b>), the price per litre depends only on the milk's FAT percentage and the <b>fat rate</b> the MPO has set. The formula is:<br><b>Price per litre = (FAT% ÷ 100) × Fat Rate</b>"
              },
              {
                "type": "glossary",
                "term": "Fat Rate",
                "meaning": "The price the MPO sets for one full kilogram of fat — for example, ₹580 per kg. It is the starting number used to work out what each farmer's milk is worth."
              },
              {
                "type": "text",
                "heading": "Let's Do the Maths Together",
                "html": "A farmer's milk has FAT of 5.5%, and the fat rate is ₹580 per kg.<br>Price per litre = (5.5 ÷ 100) × 580 = <b>₹31.90 per litre</b>."
              },
              {
                "type": "example",
                "heading": "Try It Yourself — Scaling Up",
                "text": "If the MPP collects 2,000 litres today, all at this same average FAT, the total paid to farmers is: 2,000 litres × ₹31.90 = ₹63,800 in one day, from milk alone."
              },
              {
                "type": "callout",
                "style": "info",
                "heading": "Same Formula, Every Time",
                "text": "Whether it's one litre or ten thousand litres, the formula stays exactly the same — only the FAT percentage and the total quantity change."
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": "A farmer's milk has 7% FAT. The fat rate is ₹500 per kg. What is the price per litre?",
                "options": [
                  "₹7",
                  "₹35",
                  "₹350",
                  "₹500"
                ],
                "answer": 1,
                "explain": "Price = (7 ÷ 100) × 500 = ₹35 per litre."
              },
              {
                "type": "mcq",
                "q": "In the Pro-Rata Fat method, which two numbers decide the price per litre?",
                "options": [
                  "The farmer's name and village",
                  "The FAT percentage and the fat rate",
                  "The colour of the can and the season",
                  "The number of members in the MPP"
                ],
                "answer": 1,
                "explain": "Price per litre = (FAT% ÷ 100) × Fat Rate — nothing else is needed for this method."
              }
            ]
          },
          {
            "id": "t-m10-l2-deductions-incentives",
            "title": "Deductions, Incentives and Comparing Milk Types",
            "teach": [
              {
                "type": "text",
                "heading": "Not Always a Flat Formula",
                "html": "MPOs often adjust the base price up or down, to reward good quality and discourage poor quality. Let's see two real examples."
              },
              {
                "type": "ledger",
                "heading": "Example: A Deduction for Low SNF",
                "rows": [
                  {
                    "label": "Base price (6% FAT × ₹600/kg fat rate)",
                    "amount": "₹36.00"
                  },
                  {
                    "label": "Deduction for SNF below standard",
                    "amount": "−₹1.50"
                  }
                ],
                "total": {
                  "label": "Final price paid per litre",
                  "amount": "₹34.50"
                }
              },
              {
                "type": "ledger",
                "heading": "Example: An Incentive for High FAT",
                "rows": [
                  {
                    "label": "Base price (6.8% FAT × ₹610/kg fat rate)",
                    "amount": "₹41.48"
                  },
                  {
                    "label": "Incentive for FAT above 6.5%",
                    "amount": "+₹2.00"
                  }
                ],
                "total": {
                  "label": "Final price paid per litre",
                  "amount": "₹43.48"
                }
              },
              {
                "type": "callout",
                "style": "tip",
                "heading": "Why Incentives Help Everyone",
                "text": "Incentives reward farmers who feed and care for their animals well enough to get richer milk. This encourages better care across the whole village, which means better milk for the MPP too."
              },
              {
                "type": "barchart",
                "heading": "Price per Litre by Milk Type (at ₹620/kg fat rate)",
                "source": "Worked example, Pro-Rata Fat method",
                "unit": "₹ per litre",
                "data": [
                  {
                    "label": "Buffalo milk (7.5% FAT)",
                    "value": 46.5
                  },
                  {
                    "label": "Cow milk (4% FAT)",
                    "value": 24.8
                  }
                ]
              },
              {
                "type": "text",
                "heading": "Same Rate, Different Result",
                "html": "Both farmers are paid at the exact same fat rate of ₹620 per kg. The buffalo milk earns more per litre only because it naturally has more FAT — not because it is treated differently."
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": "Why does buffalo milk usually earn a higher price per litre than cow milk, at the same fat rate?",
                "options": [
                  "Buffaloes are bigger animals",
                  "Buffalo milk usually has a higher FAT percentage",
                  "Cow milk is tested less often",
                  "There is no real difference"
                ],
                "answer": 1,
                "explain": "Since the price depends on FAT%, and buffalo milk usually has more FAT, it earns more per litre at the same fat rate."
              },
              {
                "type": "truefalse",
                "q": "A deduction lowers the base price, and an incentive raises it.",
                "answer": true,
                "explain": "Correct — deductions (for issues like low SNF) reduce the price, while incentives (for high FAT) increase it."
              }
            ]
          }
        ],
        "finalQuiz": {
          "passScore": 70,
          "questions": [
            {
              "topicId": "t-m10-l2-formula",
              "type": "mcq",
              "q": "A farmer's milk has FAT 5%. The fat rate is ₹500 per kg. What is the price per litre?",
              "options": [
                "₹5",
                "₹25",
                "₹50",
                "₹500"
              ],
              "answer": 1,
              "explain": "Price = (5 ÷ 100) × 500 = ₹25 per litre."
            },
            {
              "topicId": "t-m10-l2-deductions-incentives",
              "type": "mcq",
              "q": "What is the effect of an incentive on the price paid to a farmer?",
              "options": [
                "It lowers the price",
                "It raises the price",
                "It has no effect",
                "It changes the FAT test result"
              ],
              "answer": 1,
              "explain": "An incentive is an amount added on top of the base price, so it raises what the farmer is paid."
            }
          ]
        }
      },
      {
        "id": "m10-l3",
        "title": "Pricing on EFU Basis — A Second Method",
        "estMinutes": 8,
        "hook": [
          {
            "type": "hero",
            "heading": "Method 2: Equivalent Fat Units (EFU)",
            "text": "The Pro-Rata Fat method looks at FAT alone. This second method — EFU — combines FAT and SNF into one fair number. Let's learn how it works, with real numbers."
          }
        ],
        "topics": [
          {
            "id": "t-m10-l3-efu-formula",
            "title": "What Is EFU and How Do We Calculate It",
            "teach": [
              {
                "type": "text",
                "heading": "Combining FAT and SNF",
                "html": "<b>EFU</b> stands for <b>Equivalent Fat Units</b>. Instead of looking at FAT alone, it combines FAT and SNF into a single number, so both are rewarded fairly. The formula is:<br><b>EFU = FAT% + (SNF% × 2/3)</b>"
              },
              {
                "type": "glossary",
                "term": "EFU (Equivalent Fat Units)",
                "meaning": "A single number that combines a milk sample's FAT and SNF together, so both can be compared fairly against a standard reference point."
              },
              {
                "type": "text",
                "heading": "Let's Do the Maths Together",
                "html": "A farmer's milk has FAT 5.5% and SNF 8.6%.<br>EFU = 5.5 + (8.6 × 2/3) = 5.5 + 5.73 = <b>11.23</b>."
              },
              {
                "type": "example",
                "heading": "Try It Yourself",
                "text": "Milk with FAT 6.8% and SNF 9.0%: EFU = 6.8 + (9.0 × 2/3) = 6.8 + 6.0 = 12.8. Many MPOs use 12.5 EFU as the standard base level — so this milk, at 12.8, is slightly ABOVE standard."
              },
              {
                "type": "callout",
                "style": "info",
                "heading": "What the Base EFU Means",
                "text": "12.5 EFU is a common standard reference point. Milk above this base is richer than standard and earns more. Milk below this base earns less."
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": "What does EFU combine into one number?",
                "options": [
                  "FAT and the price of feed",
                  "FAT and SNF",
                  "The farmer's age and animal breed",
                  "Season and distance to the MPP"
                ],
                "answer": 1,
                "explain": "EFU (Equivalent Fat Units) combines a milk sample's FAT and SNF into a single number."
              },
              {
                "type": "mcq",
                "q": "Milk has FAT 4% and SNF 9%. Using EFU = FAT + (SNF × 2/3), what is its EFU?",
                "options": [
                  "4",
                  "9",
                  "10",
                  "13"
                ],
                "answer": 2,
                "explain": "EFU = 4 + (9 × 2/3) = 4 + 6 = 10."
              }
            ]
          },
          {
            "id": "t-m10-l3-efu-price",
            "title": "Using EFU to Work Out the Price",
            "teach": [
              {
                "type": "text",
                "heading": "From EFU to Rupees",
                "html": "Once we know a farmer's EFU, we compare it to the base EFU to work out the price. The formula is:<br><b>Price per litre = (Farmer's EFU ÷ Base EFU) × Declared Rate</b>"
              },
              {
                "type": "glossary",
                "term": "Declared Rate",
                "meaning": "The price per litre the MPO announces for milk that is exactly at the base EFU (for example, 12.5 EFU). It is the reference price used in the formula."
              },
              {
                "type": "text",
                "heading": "Let's Do the Maths Together",
                "html": "A farmer's milk has FAT 4.5% and SNF 8.2%. First, find the EFU: EFU = 4.5 + (8.2 × 2/3) = 4.5 + 5.47 = 9.97.<br>The declared rate (for 12.5 EFU) is ₹60 per litre.<br>Price = (9.97 ÷ 12.5) × 60 = <b>₹47.86 per litre</b>."
              },
              {
                "type": "example",
                "heading": "Try It Yourself",
                "text": "Milk with FAT 6.0% and SNF 8.8%, declared rate ₹58 per litre: EFU = 6.0 + (8.8 × 2/3) = 6.0 + 5.87 = 11.87. Price = (11.87 ÷ 12.5) × 58 = ₹55.05 per litre."
              },
              {
                "type": "ledger",
                "heading": "What Happens When SNF Improves?",
                "rows": [
                  {
                    "label": "Price at old SNF (FAT 5.5%, SNF 8.2%)",
                    "amount": "₹52.66"
                  },
                  {
                    "label": "Extra earned per litre from better SNF (8.9%)",
                    "amount": "+₹2.20"
                  }
                ],
                "total": {
                  "label": "New price per litre (FAT 5.5%, SNF 8.9%)",
                  "amount": "₹54.86"
                }
              },
              {
                "type": "callout",
                "style": "tip",
                "heading": "Why Improving SNF Pays Off",
                "text": "Improving SNF — through better feed and animal care — raises the EFU even if FAT stays exactly the same. That means more income for the farmer, without needing a different animal."
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": "Milk has FAT 6.0% and SNF 8.8%, and the declared rate is ₹58 per litre. What is the approximate price per litre?",
                "options": [
                  "₹48",
                  "₹55",
                  "₹58",
                  "₹65"
                ],
                "answer": 1,
                "explain": "EFU = 6.0 + (8.8 × 2/3) = 11.87. Price = (11.87 ÷ 12.5) × 58 ≈ ₹55."
              },
              {
                "type": "truefalse",
                "q": "Improving SNF, even if FAT stays the same, can increase a farmer's price per litre under the EFU method.",
                "answer": true,
                "explain": "Yes — because EFU includes SNF too, a higher SNF raises the EFU, and therefore the price, even without any change in FAT."
              }
            ]
          }
        ],
        "finalQuiz": {
          "passScore": 70,
          "isFinal": true,
          "questions": [
            {
              "topicId": "t-m10-l3-efu-formula",
              "type": "mcq",
              "q": "What is the formula for EFU?",
              "options": [
                "EFU = FAT × SNF",
                "EFU = FAT + (SNF × 2/3)",
                "EFU = FAT − SNF",
                "EFU = SNF ÷ FAT"
              ],
              "answer": 1,
              "explain": "EFU = FAT% + (SNF% × 2/3)."
            },
            {
              "topicId": "t-m10-l3-efu-price",
              "type": "mcq",
              "q": "Under the EFU method, what happens to a farmer's price if their milk's EFU is higher than the base EFU?",
              "options": [
                "The price is lower than the declared rate",
                "The price is exactly the declared rate no matter what",
                "The price is higher than the declared rate",
                "EFU has no effect on price"
              ],
              "answer": 2,
              "explain": "When EFU is above the base (for example, above 12.5), the price paid is higher than the declared rate."
            }
          ]
        }
      }
    ]
  },
  {
    "id": "m11",
    "number": 11,
    "title": L("CDA — Its Constituents and Calculation", "CDA — इसके घटक और गणना"),
    "subtitle": "Learn what happens to milk quantity as it travels from farmer to dairy — and how CDA finds and fixes any milk that goes missing along the way.",
    "icon": "milk",
    "available": true,
    "lessons": [
      {
        "id": "m11-l1",
        "title": "What Is CDA, and Why Does It Exist?",
        "estMinutes": 8,
        "hook": [
          {
            "type": "hero",
            "heading": "What Is CDA?",
            "text": "Every day, milk travels from a farmer's bucket to the dairy plant. Sometimes, a little milk goes missing on the way. In this lesson, you'll learn why that happens — and how CDA helps find and fix it."
          }
        ],
        "topics": [
          {
            "id": "t-milk-goes-missing",
            "title": "The Problem: Milk That Goes Missing",
            "teach": [
              {
                "type": "text",
                "heading": "A Simple Question",
                "html": "A farmer pours 10 litres of milk into a can at the village Milk Pooling Point, or MPP. That milk then travels — by can, by van, sometimes by tanker — until it reaches the dairy plant. Does the plant always receive exactly 10 litres? Not always. Sometimes a little less arrives. This lesson is about why that happens, and what the dairy does about it."
              },
              {
                "type": "glossary",
                "term": "MPP (Milk Pooling Point)",
                "meaning": "The place in the village where farmers bring their milk every day. Here, the milk is weighed, tested for quality, and written down before it is sent onward."
              },
              {
                "type": "text",
                "heading": "Five Reasons Milk Quantity Can Change",
                "html": "Milk quantity recorded at the village can end up different from milk quantity received at the dairy. There are five common reasons for this. Let's look at each one."
              },
              {
                "type": "stat-grid",
                "items": [
                  {
                    "label": "Measurement Mistakes",
                    "text": "A weighing scale that is not set correctly, or a person who writes down the wrong number by mistake, can make the recorded quantity wrong — even if no milk was actually lost."
                  },
                  {
                    "label": "Spillage on the Way",
                    "text": "Milk can spill out of a can or tanker while it is being poured, loaded, or driven over a bumpy road. This is called a handling loss."
                  },
                  {
                    "label": "Milk Taken Without Permission",
                    "text": "Sometimes, a small amount of milk is deliberately removed during handling or transport. This is called pilferage, and it is not allowed."
                  },
                  {
                    "label": "Changes in Fat and SNF",
                    "text": "If milk is tested incorrectly, or if water or another substance is mixed into it, the Fat and SNF readings can change — and this affects what the milk is worth, even if the volume looks the same."
                  }
                ]
              },
              {
                "type": "callout",
                "style": "warning",
                "heading": "A Fifth Reason: Gaps on Paper",
                "text": "Sometimes the problem is not the milk at all — it's the paperwork. If the dispatch quantity written down is more than the quantity that was actually tested (the composite quantity), or if entries are delayed or use the wrong units, the numbers will not match — even if every drop of milk arrived safely."
              },
              {
                "type": "example",
                "heading": "Think About It",
                "text": "Imagine a Sahayak collects milk in the morning and pours it into a can to send to the chilling centre. If the can's lid is loose, a little milk can spill out on the bumpy village road. Nobody stole it, nobody made a paperwork mistake — but the chilling centre will still receive less milk than was recorded at the village. This is exactly the kind of gap that CDA is designed to catch."
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": "Which of these is an example of a handling loss?",
                "options": [
                  "Milk spilling out of a can while it is being loaded",
                  "A farmer selling extra milk to a neighbour",
                  "A cow giving less milk in summer",
                  "A Sahayak's phone running out of battery"
                ],
                "answer": 0,
                "explain": "Milk spilling during loading, transfer or transport is called a handling loss — one of the common reasons milk quantity changes between the village and the dairy."
              },
              {
                "type": "truefalse",
                "q": "Milk quantity can only go missing if someone steals it.",
                "answer": false,
                "explain": "Milk quantity can change for many reasons — spillage, measurement mistakes, testing errors and paperwork gaps — not only theft."
              }
            ]
          },
          {
            "id": "t-what-cda-does",
            "title": "What CDA Does About It",
            "teach": [
              {
                "type": "text",
                "heading": "Meet CDA",
                "html": "CDA stands for <b>Composite, Dispatch and Actual</b> — the names of three points where milk quantity is written down as it moves from the village to the dairy. By comparing the numbers at these three points, the dairy can find out exactly where — and how much — milk went missing."
              },
              {
                "type": "glossary",
                "term": "CDA (Composite – Dispatch – Actual)",
                "meaning": "A system that compares three numbers: how much milk was recorded at the MPP (Composite), how much was sent out (Dispatch), and how much actually arrived at the chilling centre (Actual). Comparing these numbers helps the dairy find and recover any shortfall."
              },
              {
                "type": "text",
                "heading": "Why CDA Matters",
                "html": "CDA is not about blaming anyone. It exists so that farmers are paid correctly for the milk they actually gave, so the union or company can find exactly where losses are happening — which village, which route, which Sahayak — and fix the problem quickly, and so everyone handling milk is encouraged to be careful and honest, because their numbers are being checked."
              },
              {
                "type": "callout",
                "style": "info",
                "heading": "Checked at Many Levels",
                "text": "CDA is not calculated only once for the whole dairy. It can be worked out MPP-wise, route-wise, officer-wise, and BMC or MCC-wise. This helps managers compare performance across units, spot the weakest links, and track whether things are improving over time."
              },
              {
                "type": "example",
                "heading": "Why This Protects Everyone",
                "text": "A Sahayak whose route shows very little missing milk is clearly handling milk carefully — checking cans, weighing correctly, and dispatching on time. A low CDA loss is proof of good work, and it protects both the Sahayak's reputation and the farmers' income."
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": "What three points does CDA compare to find missing milk?",
                "options": [
                  "Composite, Dispatch and Actual quantities",
                  "Morning, afternoon and evening prices",
                  "Fat, SNF and water content only",
                  "Cow, buffalo and goat milk"
                ],
                "answer": 0,
                "explain": "CDA compares the Composite (recorded at the MPP), Dispatch (sent out) and Actual (received at the chilling centre) quantities to find any gap."
              },
              {
                "type": "truefalse",
                "q": "CDA can be calculated separately for each route or each Sahayak, not just for the whole dairy.",
                "answer": true,
                "explain": "CDA can be worked out at many levels — MPP-wise, route-wise, officer-wise and BMC/MCC-wise — to find exactly where losses happen."
              }
            ]
          }
        ],
        "finalQuiz": {
          "passScore": 70,
          "questions": [
            {
              "topicId": "t-milk-goes-missing",
              "type": "mcq",
              "q": "Which of these can cause milk quantity to change between the MPP and the dairy?",
              "options": [
                "A wrongly calibrated weighing scale",
                "The name written on the milk can",
                "The colour of the Sahayak's uniform",
                "The distance from the MPP to the farmer's house"
              ],
              "answer": 0,
              "explain": "A wrongly calibrated weighing scale can record the wrong quantity, even though no milk was actually lost."
            },
            {
              "topicId": "t-what-cda-does",
              "type": "mcq",
              "q": "What is the main purpose of CDA?",
              "options": [
                "To find and recover milk quantity that goes missing between the village and the dairy",
                "To decide which cows give the most milk",
                "To fix the price of cattle feed",
                "To choose which Sahayak gets promoted"
              ],
              "answer": 0,
              "explain": "CDA compares recorded quantities at the Composite, Dispatch and Actual stages so that any shortfall can be found and recovered."
            }
          ]
        }
      },
      {
        "id": "m11-l2",
        "title": "The Three Checkpoints of CDA",
        "estMinutes": 9,
        "hook": [
          {
            "type": "hero",
            "heading": "The Three Checkpoints",
            "text": "CDA works by checking milk quantity at three different points in its journey. Let's walk through each checkpoint and see what is checked there."
          }
        ],
        "topics": [
          {
            "id": "t-checkpoint-mpp-dispatch",
            "title": "Checkpoint 1 and 2: At the MPP and On the Road",
            "teach": [
              {
                "type": "text",
                "heading": "Checkpoint 1: Composite Control (At the MPP)",
                "html": "The first checkpoint happens right at the village MPP. This is where the <b>Composite</b> quantity is set — the official recorded amount of milk collected that day."
              },
              {
                "type": "stat-grid",
                "items": [
                  {
                    "label": "Correct Weighing",
                    "text": "The weighing scale must be checked and calibrated so every pour is measured correctly."
                  },
                  {
                    "label": "Careful Handling",
                    "text": "Collection must be supervised so milk is not spilled, leaked, or mixed up between farmers."
                  },
                  {
                    "label": "Proper Testing",
                    "text": "Milk must be sampled and tested correctly for Fat and SNF, using the right method."
                  },
                  {
                    "label": "Checking for Mixing",
                    "text": "Random checks — like using a lactometer — help catch water or other substances mixed into the milk."
                  }
                ]
              },
              {
                "type": "text",
                "heading": "Checkpoint 2: Dispatch Control (At the Sahayak Stage)",
                "html": "The second checkpoint happens when the Sahayak sends the milk onward — from the MPP toward the chilling centre. This is the <b>Dispatch</b> stage."
              },
              {
                "type": "glossary",
                "term": "Dispatch",
                "meaning": "The act of sending milk out from the MPP toward the chilling centre or dairy. The dispatch quantity is the amount recorded as being sent."
              },
              {
                "type": "stat-grid",
                "items": [
                  {
                    "label": "Quantity Matches",
                    "text": "The quantity being dispatched must match what was recorded at the composite stage — no more, no less."
                  },
                  {
                    "label": "Careful Loading",
                    "text": "Pouring and loading must be supervised to prevent spillage or leakage."
                  },
                  {
                    "label": "Cans and Vehicle Ready",
                    "text": "Cans must be clean and leak-proof, and the vehicle must be ready before milk is loaded."
                  },
                  {
                    "label": "Sealed and Documented",
                    "text": "Cans or tankers must be properly sealed, and dispatch slips filled in correctly, so nothing can be added or removed unnoticed."
                  }
                ]
              },
              {
                "type": "callout",
                "style": "tip",
                "heading": "Why Sealing Matters",
                "text": "A sealed can or tanker is like a locked box — if the seal is broken when it reaches the chilling centre, everyone knows something may have happened on the way. This is one of the simplest ways to protect milk quantity during transport."
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": "At the MPP (Composite stage), what helps make sure milk quantity is recorded correctly?",
                "options": [
                  "A correctly calibrated weighing scale",
                  "A louder radio at the MPP",
                  "Selling milk at a discount",
                  "Painting the MPP a bright colour"
                ],
                "answer": 0,
                "explain": "A correctly calibrated weighing scale, checked regularly, ensures every pour of milk is measured accurately."
              },
              {
                "type": "truefalse",
                "q": "Sealing cans and tankers before dispatch has nothing to do with protecting milk quantity.",
                "answer": false,
                "explain": "Sealing helps prevent milk from being added or removed unnoticed during transport, protecting the recorded quantity."
              }
            ]
          },
          {
            "id": "t-checkpoint-actual-receipt",
            "title": "Checkpoint 3: Arrival at the Chilling Centre",
            "teach": [
              {
                "type": "text",
                "heading": "Checkpoint 3: Actual Receipt and Transit Control",
                "html": "The third and final checkpoint happens when the milk actually arrives at the chilling centre — the MCC or BMC. This is where the <b>Actual</b> quantity is recorded."
              },
              {
                "type": "glossary",
                "term": "MCC / BMC",
                "meaning": "MCC (Milk Chilling Centre) and BMC (Bulk Milk Cooler) are places where milk is cooled quickly after it arrives, to keep it fresh before it goes on to the dairy plant."
              },
              {
                "type": "stat-grid",
                "items": [
                  {
                    "label": "Re-checking Quantity",
                    "text": "The actual quantity received is compared with the dispatch quantity, using a properly calibrated scale."
                  },
                  {
                    "label": "Checking Quality on Arrival",
                    "text": "Fat and SNF are tested again, and the milk is checked for sourness, curdling, smell or contamination before it is accepted."
                  },
                  {
                    "label": "Checking Seals",
                    "text": "Seals on cans or tankers are checked for any sign of tampering, which could mean milk was removed on the way."
                  },
                  {
                    "label": "Spotting Transit Losses",
                    "text": "Any leakage, spillage or delay during the journey is noted, since it can affect both quantity and quality."
                  }
                ]
              },
              {
                "type": "text",
                "heading": "Putting the Three Checkpoints Together",
                "html": "Now you know all three checkpoints: <b>Composite</b> (at the MPP), <b>Dispatch</b> (when the Sahayak sends it out), and <b>Actual</b> (when it arrives at the chilling centre). CDA compares these three numbers to find exactly where any milk went missing."
              },
              {
                "type": "callout",
                "style": "info",
                "heading": "The CDA Loss Formula",
                "text": "The basic idea is simple: Net Loss = Actual Quantity minus Composite Quantity. If the actual quantity received is lower, that difference is the loss. In the next lesson, you will learn how to turn this into a full worked calculation, including how the value of that loss is measured."
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": "What is recorded at the third CDA checkpoint?",
                "options": [
                  "The Actual quantity of milk received at the chilling centre",
                  "The name of the cow that gave the most milk",
                  "The number of MPPs in the district",
                  "The price of diesel that week"
                ],
                "answer": 0,
                "explain": "The third checkpoint records the Actual quantity received at the MCC or BMC, so it can be compared against Composite and Dispatch."
              },
              {
                "type": "mcq",
                "q": "What is checked when milk arrives at the chilling centre?",
                "options": [
                  "Quantity, Fat and SNF, seal condition, and any signs of transit loss",
                  "Only the colour of the milk can",
                  "Only how fast the driver was going",
                  "Only the Sahayak's attendance"
                ],
                "answer": 0,
                "explain": "On arrival, the chilling centre checks quantity, quality (Fat and SNF), seal integrity, and any leakage, spillage or delay during transit."
              }
            ]
          }
        ],
        "finalQuiz": {
          "passScore": 70,
          "questions": [
            {
              "topicId": "t-checkpoint-mpp-dispatch",
              "type": "mcq",
              "q": "Why must cans or tankers be sealed before dispatch?",
              "options": [
                "So nothing can be added or removed unnoticed during transport",
                "So the milk looks nicer",
                "So the vehicle uses less fuel",
                "So the Sahayak can finish work early"
              ],
              "answer": 0,
              "explain": "A proper seal protects the recorded quantity — if it is broken on arrival, it is a sign something may have happened during transport."
            },
            {
              "topicId": "t-checkpoint-actual-receipt",
              "type": "mcq",
              "q": "At the Actual Receipt checkpoint, what does the chilling centre compare the received quantity against?",
              "options": [
                "The Dispatch quantity that was sent out",
                "The price of milk last month",
                "The number of farmers in the village",
                "The weather forecast"
              ],
              "answer": 0,
              "explain": "The chilling centre checks the Actual quantity received against the Dispatch quantity to spot any gap during transit."
            }
          ]
        }
      },
      {
        "id": "m11-l3",
        "title": "Let's Calculate CDA — A Worked Example",
        "estMinutes": 12,
        "hook": [
          {
            "type": "hero",
            "heading": "Let's Calculate CDA",
            "text": "Now that you know why CDA exists and what its three checkpoints are, let's work through a real calculation step by step — just like a dairy accountant would."
          }
        ],
        "topics": [
          {
            "id": "t-value-the-milk",
            "title": "Step 1: Finding the Real Value of the Milk",
            "teach": [
              {
                "type": "text",
                "heading": "Meet the Numbers",
                "html": "At a BMC, the composite record for one day shows: Composite Amount = ₹44,00,000 and Composite Quantity = 1,00,000 litres. The milk tested at Fat = 4.2% and SNF = 8.6%. Let's use these numbers to find the true value of this milk, step by step."
              },
              {
                "type": "glossary",
                "term": "Average Rate",
                "meaning": "The average price paid per litre, found by dividing the total money (composite amount) by the total quantity of milk."
              },
              {
                "type": "example",
                "heading": "Step 1: Calculate the Average Rate",
                "text": "Average Rate = Composite Amount ÷ Composite Quantity = ₹44,00,000 ÷ 1,00,000 litres = ₹44 per litre. This tells us what was paid, on average, for every litre — but it does not yet tell us if that price matches the milk's real quality."
              },
              {
                "type": "glossary",
                "term": "EFU (Equivalent Fat Unit)",
                "meaning": "A single number that combines Fat % and SNF % into one score, so milk of different quality can be compared fairly. EFU = Fat % + (2 ÷ 3 × SNF %)."
              },
              {
                "type": "example",
                "heading": "Step 2: Calculate the EFU",
                "text": "EFU = Fat + (2/3 × SNF) = 4.2 + (2/3 × 8.6) = 4.2 + 5.73 = 9.93. This milk's EFU is 9.93 — a little below the standard reference EFU of 12.5, which comes from standard buffalo milk (6.5% Fat, 9% SNF) used as the benchmark for comparison."
              },
              {
                "type": "glossary",
                "term": "Standard Landing Rate",
                "meaning": "The fair per-litre value of milk after adjusting the Average Rate for its actual quality (EFU), compared against the standard reference EFU of 12.5."
              },
              {
                "type": "example",
                "heading": "Step 3: Calculate the Standard Landing Rate",
                "text": "Standard Landing Rate = Average Rate × (12.5 ÷ EFU) = ₹44 × (12.5 ÷ 9.93) = ₹44 × 1.259 = ₹55.39 per litre. Because this milk's EFU (9.93) is lower than the standard (12.5), the calculation adjusts the rate upward, to show what one litre of this exact quality is really worth."
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": "In this example, what is the Average Rate?",
                "options": [
                  "₹44 per litre",
                  "₹100 per litre",
                  "₹4,400 per litre",
                  "₹0.44 per litre"
                ],
                "answer": 0,
                "explain": "Average Rate = ₹44,00,000 ÷ 1,00,000 litres = ₹44 per litre."
              },
              {
                "type": "mcq",
                "q": "What does EFU combine into a single number?",
                "options": [
                  "Fat % and SNF %",
                  "Distance and time",
                  "Price and season",
                  "Litres and rupees"
                ],
                "answer": 0,
                "explain": "EFU (Equivalent Fat Unit) combines Fat % and SNF % into one quality score, so milk of different quality can be compared fairly."
              }
            ]
          },
          {
            "id": "t-pro-rata-and-loss",
            "title": "Step 2: Pro-Rata Impact and the CDA Loss",
            "teach": [
              {
                "type": "text",
                "heading": "Comparing Declared Rate with Landing Rate",
                "html": "The union had already declared a rate of ₹52 per litre for this milk — this is called the <b>Declared Rate</b>. We just calculated the Standard Landing Rate as ₹55.39. Let's compare them."
              },
              {
                "type": "glossary",
                "term": "Declared Rate",
                "meaning": "The rate per litre that the union or company announces it will pay, before adjusting for the exact quality of milk received that day."
              },
              {
                "type": "glossary",
                "term": "Pro-Rata Impact",
                "meaning": "The difference between the Declared Rate and the Standard Landing Rate. It shows whether the declared price was enough to cover the real value of the milk received."
              },
              {
                "type": "example",
                "heading": "Step 4: Calculate the Pro-Rata Impact",
                "text": "Pro-Rata Impact = Declared Rate − Standard Landing Rate = ₹52 − ₹55.39 = −₹3.39. Because this number is negative, it is Unfavourable — the milk received was actually worth more than the declared rate paid for it, based on its real Fat and SNF quality."
              },
              {
                "type": "ledger",
                "heading": "Today's Quality-Value Summary",
                "rows": [
                  {
                    "label": "Average Rate (per litre)",
                    "amount": "₹44.00"
                  },
                  {
                    "label": "Standard Landing Rate (per litre)",
                    "amount": "₹55.39"
                  },
                  {
                    "label": "Declared Rate (per litre)",
                    "amount": "₹52.00"
                  }
                ],
                "total": {
                  "label": "Pro-Rata Impact (Declared − Landing)",
                  "amount": "−₹3.39 (Unfavourable)"
                }
              },
              {
                "type": "text",
                "heading": "Now Let's Find the CDA Quantity Loss",
                "html": "Pro-Rata Impact tells us about VALUE. But CDA is also about QUANTITY — how much milk itself went missing. Suppose the chilling centre's records for the same day show: Composite Quantity (recorded at the MPP) = 1,00,000 litres, but Actual Quantity (received at the BMC) = 99,400 litres."
              },
              {
                "type": "example",
                "heading": "Step 5: Calculate the Net Loss (Quantity)",
                "text": "Net Loss (Quantity) = Actual Quantity − Composite Quantity = 99,400 − 1,00,000 = −600 litres. So, 600 litres of milk went missing somewhere between the MPP and the BMC."
              },
              {
                "type": "example",
                "heading": "Step 6: Calculate the CDA Loss %",
                "text": "First, find the value of the loss: Loss Value = 600 litres × ₹55.39 (Standard Landing Rate) = ₹33,234. Next, find the value of the full composite milk: Composite Milk Value = 1,00,000 litres × ₹55.39 = ₹55,39,000. Finally: CDA Loss % = (Loss Value ÷ Composite Milk Value) × 100 = (₹33,234 ÷ ₹55,39,000) × 100 = 0.6%."
              },
              {
                "type": "callout",
                "style": "tip",
                "heading": "A Handy Shortcut",
                "text": "Notice that the CDA Loss % (0.6%) came out exactly the same as 600 litres out of 1,00,000 litres (0.6%). That's because both the loss and the composite milk were valued at the same rate, so the rate cancels out. This shortcut works whenever quality hasn't changed between dispatch and receipt."
              },
              {
                "type": "callout",
                "style": "info",
                "heading": "Is 0.6% a Lot?",
                "text": "A CDA Loss of 0.6% may look small, but across a large dairy handling lakhs of litres every day, even a small percentage adds up to a big amount of money. This is exactly why the dairy tracks CDA Loss % for every route, MPP and officer — small, steady losses are just as important to catch as big, sudden ones."
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": "In this example, is the Pro-Rata Impact favourable or unfavourable?",
                "options": [
                  "Unfavourable, because the milk was worth more than the declared rate paid",
                  "Favourable, because the union saved money",
                  "Neither, because Pro-Rata does not apply here",
                  "Unfavourable, because too much milk arrived"
                ],
                "answer": 0,
                "explain": "Declared Rate (₹52) was less than the Standard Landing Rate (₹55.39), giving a Pro-Rata Impact of −₹3.39 — Unfavourable."
              },
              {
                "type": "mcq",
                "q": "How is CDA Loss % calculated?",
                "options": [
                  "(Loss Value ÷ Composite Milk Value) × 100",
                  "(Composite Quantity ÷ Actual Quantity) × 100",
                  "(Declared Rate ÷ Average Rate) × 100",
                  "(Actual Quantity × Declared Rate)"
                ],
                "answer": 0,
                "explain": "CDA Loss % = (Loss Value ÷ Composite Milk Value) × 100 — the value of the missing milk as a percentage of the total composite milk value."
              }
            ]
          }
        ],
        "finalQuiz": {
          "passScore": 70,
          "isFinal": true,
          "questions": [
            {
              "topicId": "t-value-the-milk",
              "type": "mcq",
              "q": "What is the Standard Landing Rate in this lesson's example?",
              "options": [
                "₹44.00",
                "₹52.00",
                "₹55.39",
                "₹9.93"
              ],
              "answer": 2,
              "explain": "Standard Landing Rate = ₹44 × (12.5 ÷ 9.93) = ₹55.39 per litre."
            },
            {
              "topicId": "t-value-the-milk",
              "type": "mcq",
              "q": "EFU = Fat % + (2/3 × SNF %). If Fat = 4.2% and SNF = 8.6%, what is the EFU?",
              "options": [
                "9.93",
                "12.5",
                "4.2",
                "8.6"
              ],
              "answer": 0,
              "explain": "EFU = 4.2 + (2/3 × 8.6) = 4.2 + 5.73 = 9.93."
            },
            {
              "topicId": "t-pro-rata-and-loss",
              "type": "mcq",
              "q": "In this lesson's example, how many litres of milk went missing between the MPP and the BMC?",
              "options": [
                "600 litres",
                "1,00,000 litres",
                "99,400 litres",
                "6,000 litres"
              ],
              "answer": 0,
              "explain": "Net Loss = 99,400 − 1,00,000 = −600 litres, so 600 litres went missing."
            },
            {
              "topicId": "t-pro-rata-and-loss",
              "type": "mcq",
              "q": "What was the CDA Loss % in this lesson's example?",
              "options": [
                "0.6%",
                "6%",
                "60%",
                "0.06%"
              ],
              "answer": 0,
              "explain": "CDA Loss % = (₹33,234 ÷ ₹55,39,000) × 100 = 0.6%."
            }
          ]
        }
      }
    ]
  },
  {
    "id": "m12",
    "number": 12,
    "title": L("Cost Associated with Milk Handling", "दूध संभालने से जुड़ी लागत"),
    "subtitle": "See where every rupee goes as milk travels from farmer to dairy — and learn how a real dairy company is working to bring transport costs down.",
    "icon": "milk",
    "available": true,
    "lessons": [
      {
        "id": "m12-l1",
        "title": "What Does It Cost to Get Milk From Farmer to Dairy?",
        "estMinutes": 8,
        "hook": [
          {
            "type": "hero",
            "heading": "Where Does the Money Go?",
            "text": "Milk does not travel from a farmer's bucket to the dairy plant by magic. Every step — collecting, chilling, and transporting — costs money. Let's find out where that money goes, and why it matters to everyone."
          }
        ],
        "topics": [
          {
            "id": "t-milk-journey-costs",
            "title": "The Journey — And What It Costs at Each Step",
            "teach": [
              {
                "type": "text",
                "heading": "From Bucket to Plant",
                "html": "Milk travels through several steps before it reaches the dairy plant: the farmer milks the animal, brings it to the MPP, the Sahayak dispatches it, it is chilled at a BMC or MCC, and then it is transported to the plant. Each of these steps costs money to run."
              },
              {
                "type": "glossary",
                "term": "BMC (Bulk Milk Cooler)",
                "meaning": "A machine that quickly cools milk after it arrives from the villages, to keep it fresh until it reaches the dairy plant."
              },
              {
                "type": "glossary",
                "term": "Inward Transportation",
                "meaning": "The cost of moving milk from the MPPs to the chilling centre, and from there to the dairy plant. This includes fuel, the vehicle, and the driver."
              },
              {
                "type": "stat-grid",
                "items": [
                  {
                    "label": "Sahayak Commission",
                    "text": "The Sahayak is paid a small amount for every litre of milk they help collect and dispatch correctly."
                  },
                  {
                    "label": "Transportation",
                    "text": "Fuel, vehicle costs and driver wages to move milk from MPPs to the chilling centre and onward to the plant."
                  },
                  {
                    "label": "Chilling & Infrastructure",
                    "text": "Rent, electricity and equipment costs to keep the chilling centre running and milk cold."
                  },
                  {
                    "label": "Cleaning & Maintenance",
                    "text": "Regular cleaning (like Cleaning-in-Place, or CIP) and repair of equipment, so milk stays safe and machines keep working."
                  }
                ]
              },
              {
                "type": "glossary",
                "term": "CIP (Cleaning-in-Place)",
                "meaning": "A standard cleaning process for milk cans, tanks and pipes, done regularly to keep milk safe and free of contamination."
              },
              {
                "type": "text",
                "heading": "Transportation and Chilling Are the Biggest Costs",
                "html": "Across most dairies, transportation and chilling together form the largest share of the total cost of handling milk. That is why this module looks closely at these two areas."
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": "Which two costs together usually form the largest share of milk handling cost?",
                "options": [
                  "Transportation and chilling",
                  "Stationery and paint",
                  "Advertising and printing",
                  "Office furniture and internet"
                ],
                "answer": 0,
                "explain": "Transportation and chilling together make up the largest share of the cost of handling milk from farmer to dairy."
              },
              {
                "type": "truefalse",
                "q": "CIP (Cleaning-in-Place) is a one-time activity done only when a chilling centre is first built.",
                "answer": false,
                "explain": "CIP is a regular cleaning process, done again and again, to keep milk safe and equipment working well."
              }
            ]
          },
          {
            "id": "t-why-it-matters",
            "title": "Why Controlling These Costs Matters for Everyone",
            "teach": [
              {
                "type": "text",
                "heading": "One Shared Pot of Money",
                "html": "Think of all the money that comes in when milk is sold to the dairy plant. Handling costs — Sahayak commission, transport, chilling, cleaning, maintenance — are taken out of that same pot before farmers are paid and before the union or company keeps its margin."
              },
              {
                "type": "example",
                "heading": "A Simple Way to See It",
                "text": "If handling costs are high, less money is left over to pay farmers a good price or to invest in growing the business. If handling costs are kept efficient, more money is left over — for better farmer prices, better infrastructure, and a stronger, more sustainable dairy."
              },
              {
                "type": "callout",
                "style": "info",
                "heading": "Every Litre Counts",
                "text": "Higher milk volumes reduce the cost per litre, because fixed costs — like rent for a chilling centre — get spread across more litres. That is one reason why increasing how much milk each MPP collects is so valuable."
              },
              {
                "type": "callout",
                "style": "warning",
                "heading": "Hidden Losses Add Up",
                "text": "Spillage, pilferage and quality problems don't just lose milk — they quietly inflate the real cost of handling every litre that does arrive safely. Careful handling protects both quantity and cost."
              },
              {
                "type": "text",
                "heading": "Every Sahayak Has a Role",
                "html": "As a Sahayak, the way you handle milk — careful collection, on-time dispatch, clean cans — directly affects handling costs. Small daily habits, multiplied across thousands of litres, make a real difference to what is left over for everyone."
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": "Why does controlling milk handling costs matter for farmers?",
                "options": [
                  "Lower handling costs leave more money available to pay farmers a fair price",
                  "It has no connection to farmer income",
                  "It only matters for the dairy plant's office staff",
                  "It only affects the price of animal feed"
                ],
                "answer": 0,
                "explain": "Handling costs come out of the same pot of money earned from milk sales — keeping them low leaves more for farmer payments."
              },
              {
                "type": "mcq",
                "q": "Why do higher milk volumes usually lower the cost per litre?",
                "options": [
                  "Fixed costs like rent get spread across more litres",
                  "Vehicles use less fuel when carrying more weight",
                  "Farmers charge less for more milk",
                  "Chilling machines work faster with more milk"
                ],
                "answer": 0,
                "explain": "Fixed costs stay roughly the same no matter the volume, so more litres means each litre carries a smaller share of that fixed cost."
              }
            ]
          }
        ],
        "finalQuiz": {
          "passScore": 70,
          "questions": [
            {
              "topicId": "t-milk-journey-costs",
              "type": "mcq",
              "q": "What does 'Inward Transportation' cost cover?",
              "options": [
                "Moving milk from the MPPs to the chilling centre and onward to the plant",
                "The price farmers are paid for milk",
                "The cost of building new farmer houses",
                "The Sahayak's mobile phone bill"
              ],
              "answer": 0,
              "explain": "Inward transportation covers the fuel, vehicle and driver costs of moving milk from MPPs to the chilling centre and then to the plant."
            },
            {
              "topicId": "t-why-it-matters",
              "type": "mcq",
              "q": "What happens to the money left over when handling costs are kept low and efficient?",
              "options": [
                "More money is available for farmer prices and business investment",
                "It disappears completely",
                "It can only be used for advertising",
                "It has no effect on anyone"
              ],
              "answer": 0,
              "explain": "Efficient handling costs leave more of the money earned from milk sales available for fair farmer prices and growth."
            }
          ]
        }
      },
      {
        "id": "m12-l2",
        "title": "What Drives These Costs Up or Down",
        "estMinutes": 8,
        "hook": [
          {
            "type": "hero",
            "heading": "What Makes Costs Rise or Fall?",
            "text": "Some milk handling costs change with how much milk you handle. Others stay almost the same no matter what. Understanding the difference helps everyone make better decisions."
          }
        ],
        "topics": [
          {
            "id": "t-fixed-variable-costs",
            "title": "Fixed Costs, Variable Costs, and Volume",
            "teach": [
              {
                "type": "text",
                "heading": "Two Kinds of Cost",
                "html": "Some costs change directly with how much milk is handled — these are called <b>variable costs</b>. Others stay mostly the same, whether you handle a little milk or a lot — these are called <b>fixed costs</b>."
              },
              {
                "type": "glossary",
                "term": "Variable Cost",
                "meaning": "A cost that goes up or down depending on how much milk is handled — like fuel for a delivery van, which increases if the van makes more trips."
              },
              {
                "type": "glossary",
                "term": "Fixed Cost",
                "meaning": "A cost that stays roughly the same no matter how much milk is handled — like the monthly rent for a chilling centre building."
              },
              {
                "type": "text",
                "heading": "MCC Costs vs BMC Costs",
                "html": "At an MCC (Milk Chilling Centre), costs tend to be more variable — they move closely with the quantity of milk handled per litre. At a BMC (Bulk Milk Cooler), costs tend to be largely fixed — the equipment and building cost about the same to run whether it is half full or completely full. This is why volume matters so much for BMC efficiency."
              },
              {
                "type": "example",
                "heading": "Seeing It With Numbers",
                "text": "Imagine a BMC costs ₹35,000 a month to run, no matter how much milk passes through it. If it handles 50,000 litres that month, the fixed cost works out to ₹0.70 per litre. If it handles only 25,000 litres, the same ₹35,000 now works out to ₹1.40 per litre — double the cost, just because less milk passed through."
              },
              {
                "type": "callout",
                "style": "tip",
                "heading": "The Big Idea",
                "text": "Higher milk volumes at a BMC or MCC mean the same fixed costs get divided among more litres — so the cost per litre drops. This is why growing procurement at each MPP is just as important as opening new MPPs."
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": "What is a fixed cost?",
                "options": [
                  "A cost that stays roughly the same, no matter how much milk is handled",
                  "A cost that only happens once a year",
                  "A cost that farmers pay directly",
                  "A cost that only applies to transport"
                ],
                "answer": 0,
                "explain": "A fixed cost — like a chilling centre's rent — stays roughly the same whether milk volumes are high or low."
              },
              {
                "type": "truefalse",
                "q": "If a BMC handles less milk in a month, its fixed cost per litre usually goes down.",
                "answer": false,
                "explain": "If less milk passes through, the same fixed cost is spread over fewer litres, so the cost per litre actually goes UP."
              }
            ]
          },
          {
            "id": "t-controlling-costs",
            "title": "Hidden Costs and How to Control Them",
            "teach": [
              {
                "type": "text",
                "heading": "Routing Matters",
                "html": "Inefficient routing — like a vehicle travelling a long, winding path to visit MPPs in a poor order — directly increases the cost per litre. Planning routes well is one of the simplest ways to control transport cost."
              },
              {
                "type": "text",
                "heading": "Right Vehicle, Right Capacity",
                "html": "Using a vehicle that matches the amount of milk on a route — not too big, not too small — gives the lowest possible cost per litre for inward transportation. A large tanker on a route that only collects a few hundred litres wastes fuel and money."
              },
              {
                "type": "glossary",
                "term": "Capacity Utilisation",
                "meaning": "How much of a vehicle's or machine's full capacity is actually being used. A tanker that could carry 3,000 litres but only carries 900 litres has poor capacity utilisation."
              },
              {
                "type": "stat-grid",
                "items": [
                  {
                    "label": "Right Vehicle Sizing",
                    "text": "Matching vehicle capacity to the actual milk volume on a route keeps transport cost per litre as low as possible."
                  },
                  {
                    "label": "Energy Optimisation",
                    "text": "Using electricity and fuel efficiently at chilling centres is key to keeping chilling costs down."
                  },
                  {
                    "label": "Capacity Utilisation",
                    "text": "Filling vehicles and equipment closer to their full capacity drives down the overall cost per litre."
                  }
                ]
              },
              {
                "type": "callout",
                "style": "warning",
                "heading": "Hidden Losses Inflate Cost",
                "text": "Spillage, pilferage and quality problems don't show up as a separate 'cost' line — but they quietly increase the real cost of every litre that does arrive safely, because the same fixed costs are now spread over less usable milk."
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": "What does 'right vehicle + right capacity' achieve?",
                "options": [
                  "The lowest possible inward transportation cost per litre",
                  "The fastest possible speed on the highway",
                  "The smallest fuel tank size",
                  "The shortest driver shift"
                ],
                "answer": 0,
                "explain": "Matching vehicle size to the actual milk volume on a route gives the lowest possible transportation cost per litre."
              },
              {
                "type": "mcq",
                "q": "What is capacity utilisation?",
                "options": [
                  "How much of a vehicle's or machine's full capacity is actually being used",
                  "The number of MPPs on a route",
                  "The price of diesel per litre",
                  "The number of Sahayaks on a route"
                ],
                "answer": 0,
                "explain": "Capacity utilisation measures how fully a vehicle or machine's capacity is actually being used."
              }
            ]
          }
        ],
        "finalQuiz": {
          "passScore": 70,
          "questions": [
            {
              "topicId": "t-fixed-variable-costs",
              "type": "mcq",
              "q": "Why do BMC costs tend to be largely fixed?",
              "options": [
                "The equipment and building cost about the same whether it is half full or completely full",
                "BMCs never cost any money to run",
                "BMC costs change every single day",
                "BMCs only cost money in summer"
              ],
              "answer": 0,
              "explain": "BMC running costs stay roughly the same regardless of how much milk passes through, which is why higher volume lowers the cost per litre."
            },
            {
              "topicId": "t-controlling-costs",
              "type": "mcq",
              "q": "What is one simple way to control inward transportation cost?",
              "options": [
                "Plan efficient routes and match vehicle size to actual milk volume",
                "Always use the biggest tanker available on every route",
                "Skip vehicle maintenance to save money",
                "Remove milk quality checks to save time"
              ],
              "answer": 0,
              "explain": "Efficient routing and right-sized vehicles keep transportation cost per litre as low as possible."
            }
          ]
        }
      },
      {
        "id": "m12-l3",
        "title": "The Shakti MPC Story: Solving the Transport Cost Puzzle",
        "estMinutes": 14,
        "hook": [
          {
            "type": "hero",
            "heading": "A Real Dairy's Cost Puzzle",
            "text": "This is the story of a real Milk Producer Company working through a real transport cost problem. Everything you've learned in this course comes together here. Let's dig in."
          }
        ],
        "topics": [
          {
            "id": "t-meet-shakti",
            "title": "Meet Shakti MPC",
            "teach": [
              {
                "type": "text",
                "heading": "A Growing Company",
                "html": "Shakti Milk Producer Company Limited (Shakti MPC) started in 2021 to give rural milk producers a reliable market and fair prices. It began with support from an outside grant, which paid for MPPs, BMCs, testing equipment and vehicles while the company was still growing."
              },
              {
                "type": "glossary",
                "term": "Grant Support",
                "meaning": "Money given to help a company get started, which does not need to be paid back like a loan. Grant support often reduces or ends as the company grows and needs to stand on its own."
              },
              {
                "type": "text",
                "heading": "Standing on Its Own",
                "html": "As the grant support ended, Shakti MPC had to cover its own running costs from what it earns handling milk — its procurement margins and its own efficiency. Today, the company runs one of the largest milk procurement networks in its region."
              },
              {
                "type": "stat-grid",
                "items": [
                  {
                    "label": "800 MPPs",
                    "text": "Shakti MPC collects milk from about 800 village-level Milk Pooling Points."
                  },
                  {
                    "label": "1,200+ Villages",
                    "text": "These MPPs are spread across more than 1,200 villages."
                  },
                  {
                    "label": "85,000 Members",
                    "text": "Nearly 85,000 farmer families are members of the company."
                  },
                  {
                    "label": "84,000 to 1.15 Lakh Litres a Day",
                    "text": "Daily milk collection ranges from about 84,000 litres in the lean season to more than 1,15,000 litres at peak season."
                  }
                ]
              },
              {
                "type": "barchart",
                "heading": "Five Years of Growth (Average Daily Procurement)",
                "source": "Shakti MPC internal records",
                "unit": "litres per day",
                "data": [
                  {
                    "label": "FY 2021-22",
                    "value": 22500
                  },
                  {
                    "label": "FY 2022-23",
                    "value": 41200
                  },
                  {
                    "label": "FY 2023-24",
                    "value": 63500
                  },
                  {
                    "label": "FY 2024-25",
                    "value": 78800
                  },
                  {
                    "label": "FY 2025-26",
                    "value": 84000
                  }
                ]
              },
              {
                "type": "example",
                "heading": "Fast Growth, New Problems",
                "text": "In just five years, Shakti MPC nearly quadrupled its daily milk collection. But fast growth brought a new challenge: rising costs, especially for transportation — even as the amount of milk collected kept growing."
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": "About how many MPPs does Shakti MPC currently operate?",
                "options": [
                  "About 800",
                  "About 80",
                  "About 8,000",
                  "About 8"
                ],
                "answer": 0,
                "explain": "Shakti MPC procures milk from approximately 800 Milk Pooling Points."
              },
              {
                "type": "truefalse",
                "q": "Shakti MPC's daily milk procurement grew steadily over five years, from about 22,500 litres to about 84,000 litres.",
                "answer": true,
                "explain": "Average daily procurement grew from 22,500 litres in FY 2021-22 to 84,000 litres in FY 2025-26."
              }
            ]
          },
          {
            "id": "t-where-money-goes",
            "title": "Where the Money Goes — Real Cost Numbers",
            "teach": [
              {
                "type": "text",
                "heading": "A Detailed Cost Review",
                "html": "As grant support ended, Shakti MPC studied exactly where its procurement money was going, for every single litre of milk. Here is what they found."
              },
              {
                "type": "ledger",
                "heading": "Shakti MPC — Cost per Litre of Milk Procured",
                "rows": [
                  {
                    "label": "Sahayak Commission",
                    "amount": "₹0.90"
                  },
                  {
                    "label": "Inward Transportation",
                    "amount": "₹2.28"
                  },
                  {
                    "label": "BMC Rent & Infrastructure",
                    "amount": "₹0.35"
                  },
                  {
                    "label": "Labour Cost",
                    "amount": "₹0.25"
                  },
                  {
                    "label": "Diesel & Utilities",
                    "amount": "₹0.42"
                  },
                  {
                    "label": "Cleaning & CIP",
                    "amount": "₹0.12"
                  },
                  {
                    "label": "Repair & Maintenance",
                    "amount": "₹0.18"
                  }
                ],
                "total": {
                  "label": "Total Cost per Litre",
                  "amount": "₹4.50"
                }
              },
              {
                "type": "example",
                "heading": "Which Cost Is the Biggest?",
                "text": "Inward Transportation alone is ₹2.28 out of the ₹4.50 total cost per litre — more than half of everything spent to handle each litre of milk. This is exactly why the company is focused on solving its transportation cost problem."
              },
              {
                "type": "callout",
                "style": "info",
                "heading": "A Rising Trend",
                "text": "Inward transportation cost per litre has been climbing every year — from ₹1.68 in FY 2021-22 to ₹2.28 in FY 2025-26 — even as the company's daily milk volumes grew. More milk did not automatically mean a lower cost per litre."
              },
              {
                "type": "barchart",
                "heading": "Inward Transportation Cost Trend",
                "source": "Shakti MPC internal records",
                "unit": "₹ per litre",
                "data": [
                  {
                    "label": "FY 2021-22",
                    "value": 1.68
                  },
                  {
                    "label": "FY 2022-23",
                    "value": 1.82
                  },
                  {
                    "label": "FY 2023-24",
                    "value": 1.96
                  },
                  {
                    "label": "FY 2024-25",
                    "value": 2.12
                  },
                  {
                    "label": "FY 2025-26",
                    "value": 2.28
                  }
                ]
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": "In Shakti MPC's cost structure, what is the single biggest cost per litre?",
                "options": [
                  "Inward Transportation",
                  "Cleaning & CIP",
                  "Repair & Maintenance",
                  "Labour Cost"
                ],
                "answer": 0,
                "explain": "At ₹2.28 per litre, Inward Transportation is the largest single cost, more than half of the ₹4.50 total."
              },
              {
                "type": "mcq",
                "q": "What happened to inward transportation cost per litre over five years, even as milk volumes grew?",
                "options": [
                  "It kept rising, from ₹1.68 to ₹2.28 per litre",
                  "It fell steadily every year",
                  "It stayed exactly the same",
                  "It dropped to zero"
                ],
                "answer": 0,
                "explain": "Despite volume growth, inward transportation cost per litre rose every year, from ₹1.68 to ₹2.28."
              }
            ]
          },
          {
            "id": "t-route-timing-puzzle",
            "title": "The Route Timing Puzzle",
            "teach": [
              {
                "type": "text",
                "heading": "The Three-Hour Rule",
                "html": "To protect milk quality, Shakti MPC follows a strict rule: milk collected at the first MPP on a route must reach the chilling centre within three hours. Waiting longer lets acidity and bacteria increase, which spoils milk quality."
              },
              {
                "type": "text",
                "heading": "Working Backwards From the Deadline",
                "html": "Because chilled milk must reach the plant by 9:30 AM (morning) or 9:30 PM (evening), routes are planned backwards from that deadline. This means the first and second MPPs on many routes must finish pouring milk by about 6:30 AM or 6:30 PM — quite early for farmers who finish milking and housework a bit later."
              },
              {
                "type": "callout",
                "style": "warning",
                "heading": "A Paradox",
                "text": "Competing dairies often visit these same villages as the sixth or seventh stop on their route — giving farmers 30 to 45 extra minutes. Farmers find this more convenient, so Shakti MPC's first and second MPPs on many routes collect less milk than similar villages served by competitors. Careful route discipline protects quality, but may also be holding back procurement volume."
              },
              {
                "type": "text",
                "heading": "Small MPPs, Big Inefficiency",
                "html": "A review of all 800 MPPs found the average was about 105 litres per MPP per day — but this hid a big problem underneath."
              },
              {
                "type": "stat-grid",
                "items": [
                  {
                    "label": "Less than 50 litres/day",
                    "text": "About 30% of MPPs collect less than 50 litres a day — a very small amount for a vehicle to travel out for."
                  },
                  {
                    "label": "50 to 100 litres/day",
                    "text": "About 50% of MPPs collect between 50 and 100 litres a day."
                  },
                  {
                    "label": "100 to 200 litres/day",
                    "text": "About 15% of MPPs collect between 100 and 200 litres a day."
                  },
                  {
                    "label": "More than 200 litres/day",
                    "text": "Only about 5% of MPPs collect more than 200 litres a day."
                  }
                ]
              },
              {
                "type": "example",
                "heading": "A Costly Trip",
                "text": "In many cases, a vehicle visits all ten MPPs allowed on a route but collects less than 1,000 litres in total for the whole trip. That means the vehicle, the fuel, and the driver's time are being used for a very small amount of milk — pushing the transport cost per litre higher."
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": "Why must milk from the first MPP on a route reach the chilling centre within three hours?",
                "options": [
                  "To prevent rising acidity, bacterial growth and quality loss",
                  "Because the plant closes at that time",
                  "Because Sahayaks are only paid for three hours of work",
                  "Because vehicles cannot carry milk for longer"
                ],
                "answer": 0,
                "explain": "Delays beyond three hours let acidity and bacteria increase, which deteriorates milk quality."
              },
              {
                "type": "mcq",
                "q": "According to the MPP review, what share of MPPs collect less than 50 litres a day?",
                "options": [
                  "About 30%",
                  "About 5%",
                  "About 50%",
                  "About 100%"
                ],
                "answer": 0,
                "explain": "Nearly 30 percent of MPPs were found to collect less than 50 litres per day."
              }
            ]
          },
          {
            "id": "t-what-would-you-do",
            "title": "What Would You Do? — A Decision for the Sahayak",
            "teach": [
              {
                "type": "text",
                "heading": "Doing the Maths on a Low-Volume Route",
                "html": "Let's calculate what a low-volume route really costs. A vehicle visits all 10 MPPs allowed on a route and collects a total of 900 litres for the trip. If Shakti MPC's average inward transportation cost is ₹2.28 per litre, what should this trip cost to run?"
              },
              {
                "type": "example",
                "heading": "Step 1: What the Trip Should Cost",
                "text": "At the company's average rate: 900 litres × ₹2.28 = ₹2,052. This is the transportation cost we would expect to be 'fair' for 900 litres on this route."
              },
              {
                "type": "text",
                "heading": "But What If the Actual Trip Cost More?",
                "html": "Suppose the actual diesel, driver time and vehicle cost for this specific ten-MPP trip was ₹3,150 — because the vehicle travelled a long distance for a small amount of milk."
              },
              {
                "type": "ledger",
                "heading": "This Route: Expected vs Actual Cost",
                "rows": [
                  {
                    "label": "Expected cost (900 litres × ₹2.28)",
                    "amount": "₹2,052"
                  },
                  {
                    "label": "Actual cost of this trip",
                    "amount": "₹3,150"
                  }
                ],
                "total": {
                  "label": "Extra cost above expected",
                  "amount": "₹1,098"
                }
              },
              {
                "type": "example",
                "heading": "What This Means Per Litre",
                "text": "₹3,150 ÷ 900 litres = ₹3.50 per litre — much higher than the company's average of ₹2.28 per litre. This single low-volume route is quietly pulling up the average cost for the whole company."
              },
              {
                "type": "callout",
                "style": "tip",
                "heading": "Options on the Table",
                "text": "Shakti MPC's committee is weighing several options: restructuring routes, encouraging more milk at existing MPPs, trying electric or CNG vehicles, using smaller three-wheelers on low-volume routes, and possibly resequencing which villages are visited first."
              },
              {
                "type": "poll",
                "heading": "What Would You Recommend First?",
                "questions": [
                  {
                    "q": "If you were advising Shakti MPC's committee, which step would you try FIRST to reduce this route's cost per litre?",
                    "options": [
                      "Use a smaller vehicle sized for this route's actual volume",
                      "Buy the most expensive new tanker available",
                      "Stop collecting milk from small MPPs completely",
                      "Ignore the cost and keep the same vehicle"
                    ],
                    "answer": 0,
                    "reveal": "Many producer companies have found that matching vehicle size to actual route volume — smaller vehicles for smaller routes — is often the fastest and cheapest way to bring cost per litre down, without changing route timing or losing farmer trust."
                  }
                ]
              },
              {
                "type": "callout",
                "style": "info",
                "heading": "Not a Simple Fix",
                "text": "Every option has trade-offs. Smaller vehicles may struggle on poor roads or during peak season. EVs need charging infrastructure that is still limited in rural areas. Changing route timing could raise procurement but risks milk quality. Good decisions balance cost, quality, and what is fair and convenient for farmers."
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": "In this example, what was the extra cost above the expected amount for the 900-litre trip?",
                "options": [
                  "₹1,098",
                  "₹2,052",
                  "₹3,150",
                  "₹900"
                ],
                "answer": 0,
                "explain": "Extra cost = ₹3,150 actual − ₹2,052 expected = ₹1,098."
              },
              {
                "type": "mcq",
                "q": "What is one practical way to lower the cost per litre on a low-volume route?",
                "options": [
                  "Use a smaller vehicle that better matches the route's actual milk volume",
                  "Always use the biggest tanker available, regardless of volume",
                  "Stop testing milk quality to save time",
                  "Remove the three-hour quality rule everywhere"
                ],
                "answer": 0,
                "explain": "Right-sizing the vehicle to the route's actual volume is a practical way to bring transport cost per litre down."
              }
            ]
          }
        ],
        "finalQuiz": {
          "passScore": 70,
          "isFinal": true,
          "questions": [
            {
              "topicId": "t-meet-shakti",
              "type": "mcq",
              "q": "About how many producer members does Shakti MPC serve?",
              "options": [
                "Nearly 85,000",
                "Nearly 8,500",
                "Nearly 850",
                "Nearly 8,50,000"
              ],
              "answer": 0,
              "explain": "Shakti MPC serves nearly 85,000 producer members."
            },
            {
              "topicId": "t-where-money-goes",
              "type": "mcq",
              "q": "What share of Shakti MPC's total cost per litre (₹4.50) comes from inward transportation (₹2.28)?",
              "options": [
                "More than half of the total cost",
                "Less than 5% of the total cost",
                "None of the total cost",
                "Exactly equal to the Sahayak commission"
              ],
              "answer": 0,
              "explain": "₹2.28 out of ₹4.50 is more than half of the total cost per litre."
            },
            {
              "topicId": "t-route-timing-puzzle",
              "type": "mcq",
              "q": "Why do Shakti MPC's first and second MPPs on many routes often collect less milk than nearby villages served by competitors?",
              "options": [
                "Competitors visit later in the route, giving farmers more time before the vehicle arrives",
                "Those villages have no farmers",
                "Shakti MPC pays a lower price there",
                "Those MPPs are closed on some days"
              ],
              "answer": 0,
              "explain": "Competitors visiting as the sixth or seventh stop give farmers 30-45 extra minutes, which farmers find more convenient."
            },
            {
              "topicId": "t-what-would-you-do",
              "type": "mcq",
              "q": "What is the biggest lesson from the 900-litre route example?",
              "options": [
                "A vehicle that is too big for a route's actual volume can push the cost per litre well above average",
                "Bigger vehicles are always cheaper to run",
                "Route cost has nothing to do with vehicle size",
                "Only Sahayak commission affects route cost"
              ],
              "answer": 0,
              "explain": "The 900-litre route's actual cost per litre (₹3.50) was well above the company average (₹2.28), showing how vehicle-to-volume mismatch drives up cost."
            }
          ]
        }
      }
    ]
  }
];

export function getModule(moduleId) {
  return MODULES.find((m) => m.id === moduleId);
}

export function getLesson(moduleId, lessonId) {
  const mod = getModule(moduleId);
  if (!mod || !mod.lessons) return null;
  return mod.lessons.find((l) => l.id === lessonId);
}

export function getLessonIndex(moduleId, lessonId) {
  const mod = getModule(moduleId);
  if (!mod || !mod.lessons) return -1;
  return mod.lessons.findIndex((l) => l.id === lessonId);
}
