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
    "subtitle": L(
      "Learn the CRI method for building training content that answers real problems in the field — not generic lessons nobody asked for.",
      "CRI तरीका सीखिए, जो ज़मीनी स्तर की असली समस्याओं का जवाब देने वाली प्रशिक्षण सामग्री बनाता है — ऐसे सामान्य पाठ नहीं जो किसी ने माँगे ही न हों।"
    ),
    "icon": "milk",
    "available": true,
    "lessons": [
      {
        "id": "m5-l1",
        "title": L("What Is CRI, and Why 'Need-Based' Matters", "CRI क्या है, और 'ज़रूरत-आधारित' क्यों मायने रखता है"),
        "estMinutes": 7,
        "hook": [
          {
            "type": "hero",
            "heading": L("Why Generic Training Doesn't Work", "सामान्य प्रशिक्षण क्यों काम नहीं करता"),
            "text": L(
              "Imagine sitting through a training on animal vaccination when your real problem is farmers leaving your MPP. That training would feel like a waste of time. This lesson shows you a better way — CRI.",
              "ज़रा सोचिए कि आप पशु टीकाकरण पर एक प्रशिक्षण में बैठे हैं जबकि आपकी असली समस्या है किसानों का आपका MPP छोड़ना। वह प्रशिक्षण समय की बर्बादी जैसा लगेगा। यह पाठ आपको एक बेहतर तरीका दिखाता है — CRI।"
            )
          }
        ],
        "topics": [
          {
            "id": "t-generic-vs-needbased",
            "title": L("The Problem With Generic Content", "सामान्य सामग्री की समस्या"),
            "teach": [
              {
                "type": "text",
                "heading": L("One Size Does Not Fit All Villages", "एक ही तरीका सभी गाँवों के लिए काम नहीं करता"),
                "html": L(
                  "Every village and every MPP has different problems. One village may be losing members. Another may have farmers whose milk fat is dropping. A third may need help with animal nutrition. If you teach the same generic content everywhere, it may not solve anyone's real problem.",
                  "हर गाँव और हर MPP की समस्याएँ अलग होती हैं। एक गाँव सदस्य खो रहा हो सकता है। किसी दूसरे में किसानों के दूध का फैट गिर रहा हो सकता है। तीसरे को पशु आहार में मदद चाहिए हो सकती है। अगर आप हर जगह एक जैसी सामान्य सामग्री पढ़ाएँ, तो शायद यह किसी की भी असली समस्या हल न करे।"
                )
              },
              {
                "type": "callout",
                "style": "info",
                "heading": L("Did You Know?", "क्या आप जानते हैं?"),
                "text": L(
                  "Training designed around a clear, planned approach and teaching-learning psychology is far more effective for adult learners than a generic lecture. Adults learn best when the content answers a real problem they are facing right now.",
                  "एक स्पष्ट, योजनाबद्ध तरीके और शिक्षण-अधिगम मनोविज्ञान के आधार पर बना प्रशिक्षण, वयस्क शिक्षार्थियों के लिए एक सामान्य व्याख्यान से कहीं ज़्यादा असरदार होता है। वयस्क तब सबसे अच्छा सीखते हैं जब सामग्री उस असली समस्या का जवाब देती है जिसका वे अभी सामना कर रहे हैं।"
                )
              },
              {
                "type": "glossary",
                "term": L("CRI", "CRI"),
                "meaning": L(
                  "Short for Criterion-Referenced Instruction — a method for designing training content that is built around exactly what learners need to be able to do, instead of around generic topics.",
                  "Criterion-Referenced Instruction का संक्षिप्त रूप — प्रशिक्षण सामग्री डिज़ाइन करने का एक तरीका जो ठीक उसी पर आधारित है जो शिक्षार्थियों को करने में सक्षम होना चाहिए, न कि सामान्य विषयों पर।"
                )
              },
              {
                "type": "text",
                "heading": L("What CRI Helps You Do", "CRI आपको क्या करने में मदद करता है"),
                "html": L(
                  "CRI helps trainers design need-based, field-relevant programs. It also helps build the capability to actually change behaviour — not just deliver information, but check that people really do things differently afterward.",
                  "CRI प्रशिक्षकों को ज़रूरत-आधारित, ज़मीनी स्तर से जुड़े कार्यक्रम डिज़ाइन करने में मदद करता है। यह असल में व्यवहार बदलने की क्षमता बनाने में भी मदद करता है — सिर्फ जानकारी देना नहीं, बल्कि यह जाँचना कि लोग बाद में सचमुच अलग तरीके से काम करते हैं।"
                )
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": L(
                  "Why might the same generic training content fail in different villages?",
                  "एक ही सामान्य प्रशिक्षण सामग्री अलग-अलग गाँवों में क्यों असफल हो सकती है?"
                ),
                "options": [
                  L("Because every village has the exact same problems", "क्योंकि हर गाँव की समस्याएँ बिल्कुल एक जैसी होती हैं"),
                  L(
                    "Because different villages have different real problems, so one-size-fits-all content may not help",
                    "क्योंकि अलग-अलग गाँवों की असली समस्याएँ अलग होती हैं, इसलिए एक-जैसी सामग्री मदद न करे"
                  ),
                  L("Because generic content is always more effective", "क्योंकि सामान्य सामग्री हमेशा ज़्यादा असरदार होती है"),
                  L("Because farmers dislike all training equally", "क्योंकि किसान हर प्रशिक्षण को बराबर नापसंद करते हैं")
                ],
                "answer": 1,
                "explain": L(
                  "Villages face different problems, so content built for one specific problem often does not solve another.",
                  "गाँवों की समस्याएँ अलग-अलग होती हैं, इसलिए एक खास समस्या के लिए बनी सामग्री अक्सर दूसरी समस्या हल नहीं करती।"
                )
              },
              {
                "type": "truefalse",
                "q": L(
                  "CRI stands for a method that designs training around what learners actually need to be able to do.",
                  "CRI एक ऐसे तरीके के लिए है जो प्रशिक्षण को इस आधार पर डिज़ाइन करता है कि शिक्षार्थियों को असल में क्या करने में सक्षम होना चाहिए।"
                ),
                "answer": true,
                "explain": L(
                  "CRI (Criterion-Referenced Instruction) is built around real learner needs, not generic topics.",
                  "CRI (Criterion-Referenced Instruction) असली शिक्षार्थी ज़रूरतों पर आधारित है, सामान्य विषयों पर नहीं।"
                )
              }
            ]
          },
          {
            "id": "t-cri-four-steps",
            "title": L("The Four Steps of CRI", "CRI के चार चरण"),
            "teach": [
              {
                "type": "text",
                "heading": L("Four Steps, Always in Order", "चार चरण, हमेशा एक क्रम में"),
                "html": L(
                  "CRI has four steps, always followed in the same order. Each step checks that the training really matches what learners need — not just what a trainer assumes they need.",
                  "CRI के चार चरण हैं, जिन्हें हमेशा एक ही क्रम में अपनाया जाता है। हर चरण यह जाँचता है कि प्रशिक्षण वाकई शिक्षार्थियों की ज़रूरत से मेल खाता है — सिर्फ वह नहीं जो प्रशिक्षक मान लेता है।"
                )
              },
              {
                "type": "stat-grid",
                "items": [
                  {
                    "label": L("1. Behavioural Objectives", "1. व्यवहारिक उद्देश्य"),
                    "text": L(
                      "Decide exactly what learners should be able to DO after the training — an action you can see and measure, not just 'understand' something.",
                      "ठीक-ठीक तय करें कि प्रशिक्षण के बाद शिक्षार्थियों को क्या करने में सक्षम होना चाहिए — एक ऐसा काम जिसे आप देख और माप सकें, सिर्फ कुछ 'समझना' नहीं।"
                    )
                  },
                  {
                    "label": L("2. Pre-Evaluation", "2. पूर्व-मूल्यांकन"),
                    "text": L(
                      "Check what learners already know and can do, before you teach anything. This stops you from teaching things they already know.",
                      "कुछ भी सिखाने से पहले जाँचें कि शिक्षार्थी पहले से क्या जानते और कर सकते हैं। इससे आप वह नहीं सिखाते जो वे पहले से जानते हैं।"
                    )
                  },
                  {
                    "label": L("3. Teaching", "3. शिक्षण"),
                    "text": L(
                      "Deliver the content itself, using teaching-learning principles that help adults learn faster — covered in the next lesson.",
                      "उन शिक्षण-अधिगम सिद्धांतों का उपयोग करके सामग्री पढ़ाएँ जो वयस्कों को तेज़ी से सीखने में मदद करते हैं — अगले पाठ में बताया गया है।"
                    )
                  },
                  {
                    "label": L("4. Post-Evaluation", "4. पश्च-मूल्यांकन"),
                    "text": L(
                      "Check what learners actually learned after the training, to see if it worked and to find any gaps that still need attention.",
                      "जाँचें कि प्रशिक्षण के बाद शिक्षार्थियों ने असल में क्या सीखा, यह देखने के लिए कि यह काम कर गया या नहीं, और अभी भी ध्यान देने लायक कोई कमी है या नहीं।"
                    )
                  }
                ]
              },
              {
                "type": "example",
                "heading": L("CRI in Action", "CRI असल में कैसे काम करता है"),
                "text": L(
                  "Suppose many farmers in a village are leaving the MPP. Behavioural Objective: Sahayak should be able to explain 3 reasons farmers stay with an MPP. Pre-Evaluation: ask Sahayaks what they currently tell farmers. Teaching: run a short session filling the gaps. Post-Evaluation: check a week later if fewer farmers are leaving.",
                  "मान लीजिए कि एक गाँव के कई किसान MPP छोड़ रहे हैं। व्यवहारिक उद्देश्य: सहायक को 3 कारण बताने में सक्षम होना चाहिए कि किसान MPP के साथ क्यों बने रहते हैं। पूर्व-मूल्यांकन: सहायकों से पूछें कि वे अभी किसानों को क्या बताते हैं। शिक्षण: कमियों को भरने के लिए एक छोटा सत्र चलाएँ। पश्च-मूल्यांकन: एक हफ्ते बाद जाँचें कि कम किसान छोड़ रहे हैं या नहीं।"
                )
              },
              {
                "type": "callout",
                "style": "tip",
                "heading": L("Remember", "याद रखें"),
                "text": L(
                  "Behavioural Objectives and Evaluation are like bookends — they make sure training is not just delivered, but actually works.",
                  "व्यवहारिक उद्देश्य और मूल्यांकन बुकएंड्स की तरह हैं — वे सुनिश्चित करते हैं कि प्रशिक्षण सिर्फ दिया न जाए, बल्कि असल में काम भी करे।"
                )
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": L("What is a 'Behavioural Objective' in CRI?", "CRI में 'व्यवहारिक उद्देश्य' क्या है?"),
                "options": [
                  L("A vague hope that learners feel inspired", "एक अस्पष्ट उम्मीद कि शिक्षार्थी प्रेरित महसूस करें"),
                  L(
                    "A clear, measurable action learners should be able to DO after training",
                    "एक स्पष्ट, मापने योग्य काम जो शिक्षार्थी प्रशिक्षण के बाद कर सकें"
                  ),
                  L("The name of the trainer's manager", "प्रशिक्षक के मैनेजर का नाम"),
                  L("A test given only at the very end of the year", "साल के बिल्कुल अंत में दिया जाने वाला एक टेस्ट")
                ],
                "answer": 1,
                "explain": L(
                  "A Behavioural Objective is a specific, observable action — something you can actually see the learner do.",
                  "एक व्यवहारिक उद्देश्य एक स्पष्ट, देखने योग्य काम है — कुछ ऐसा जो आप शिक्षार्थी को करते हुए वाकई देख सकें।"
                )
              },
              {
                "type": "truefalse",
                "q": L("Pre-Evaluation happens after the teaching is complete.", "पूर्व-मूल्यांकन शिक्षण पूरा होने के बाद होता है।"),
                "answer": false,
                "explain": L(
                  "Pre-Evaluation happens BEFORE teaching — it checks what learners already know so training doesn't repeat it.",
                  "पूर्व-मूल्यांकन शिक्षण से पहले होता है — यह जाँचता है कि शिक्षार्थी पहले से क्या जानते हैं ताकि प्रशिक्षण उसे न दोहराए।"
                )
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
              "q": L("What makes CRI different from a generic training lecture?", "CRI को एक सामान्य प्रशिक्षण व्याख्यान से अलग क्या बनाता है?"),
              "options": [
                L("CRI is always longer than a lecture", "CRI हमेशा व्याख्यान से लंबा होता है"),
                L(
                  "CRI is built around what learners actually need, checked before and after",
                  "CRI इस पर बना है कि शिक्षार्थियों को असल में क्या चाहिए, जिसे पहले और बाद में जाँचा जाता है"
                ),
                L("CRI uses only videos, never live teaching", "CRI सिर्फ वीडियो उपयोग करता है, कभी लाइव शिक्षण नहीं"),
                L("CRI is only for new employees", "CRI सिर्फ नए कर्मचारियों के लिए है")
              ],
              "answer": 1,
              "explain": L(
                "CRI matches content to real, checked learner needs — unlike a one-size-fits-all lecture.",
                "CRI सामग्री को असली, जाँची गई शिक्षार्थी ज़रूरतों से मिलाता है — एक-जैसे व्याख्यान के विपरीत।"
              )
            },
            {
              "topicId": "t-generic-vs-needbased",
              "type": "truefalse",
              "q": L(
                "Adults generally learn best from content that connects to a real problem they are facing right now.",
                "वयस्क आमतौर पर उस सामग्री से सबसे अच्छा सीखते हैं जो उनकी अभी की असली समस्या से जुड़ी हो।"
              ),
              "answer": true,
              "explain": L(
                "Adult learners respond best to training that clearly answers a problem relevant to their own situation.",
                "वयस्क शिक्षार्थी उस प्रशिक्षण पर सबसे अच्छी प्रतिक्रिया देते हैं जो उनकी अपनी स्थिति से जुड़ी समस्या का स्पष्ट जवाब दे।"
              )
            },
            {
              "topicId": "t-cri-four-steps",
              "type": "mcq",
              "q": L(
                "Put these CRI steps in the correct order: Teaching, Post-Evaluation, Behavioural Objectives, Pre-Evaluation.",
                "इन CRI चरणों को सही क्रम में लगाएँ: शिक्षण, पश्च-मूल्यांकन, व्यवहारिक उद्देश्य, पूर्व-मूल्यांकन।"
              ),
              "options": [
                L(
                  "Behavioural Objectives, Pre-Evaluation, Teaching, Post-Evaluation",
                  "व्यवहारिक उद्देश्य, पूर्व-मूल्यांकन, शिक्षण, पश्च-मूल्यांकन"
                ),
                L(
                  "Post-Evaluation, Teaching, Pre-Evaluation, Behavioural Objectives",
                  "पश्च-मूल्यांकन, शिक्षण, पूर्व-मूल्यांकन, व्यवहारिक उद्देश्य"
                ),
                L(
                  "Teaching, Behavioural Objectives, Post-Evaluation, Pre-Evaluation",
                  "शिक्षण, व्यवहारिक उद्देश्य, पश्च-मूल्यांकन, पूर्व-मूल्यांकन"
                ),
                L(
                  "Pre-Evaluation, Post-Evaluation, Teaching, Behavioural Objectives",
                  "पूर्व-मूल्यांकन, पश्च-मूल्यांकन, शिक्षण, व्यवहारिक उद्देश्य"
                )
              ],
              "answer": 0,
              "explain": L(
                "CRI always follows this order: decide the objective, check existing knowledge, teach, then check what was learned.",
                "CRI हमेशा इसी क्रम का पालन करता है: उद्देश्य तय करें, मौजूदा ज्ञान जाँचें, सिखाएँ, फिर जाँचें कि क्या सीखा गया।"
              )
            },
            {
              "topicId": "t-cri-four-steps",
              "type": "truefalse",
              "q": L(
                "Post-Evaluation helps find gaps that still need attention after training.",
                "पश्च-मूल्यांकन प्रशिक्षण के बाद ध्यान देने लायक कमियों को खोजने में मदद करता है।"
              ),
              "answer": true,
              "explain": L(
                "Post-Evaluation checks whether the training actually worked, and reveals any remaining gaps.",
                "पश्च-मूल्यांकन जाँचता है कि प्रशिक्षण वाकई काम कर गया या नहीं, और बची हुई किसी भी कमी को उजागर करता है।"
              )
            }
          ]
        }
      },
      {
        "id": "m5-l2",
        "title": L("Designing and Delivering a Real Session", "एक असली सत्र डिज़ाइन करना और देना"),
        "estMinutes": 8,
        "hook": [
          {
            "type": "hero",
            "heading": L("From Village Problem to Training Content", "गाँव की समस्या से प्रशिक्षण सामग्री तक"),
            "text": L(
              "Now let's turn what you've learned into practice — picking a real topic and building a short session that Sahayaks or farmers actually need.",
              "अब आइए जो आपने सीखा उसे अभ्यास में बदलें — एक असली विषय चुनें और एक छोटा सत्र बनाएँ जिसकी सहायकों या किसानों को असल में ज़रूरत है।"
            )
          }
        ],
        "topics": [
          {
            "id": "t-teaching-principles",
            "title": L("Five Principles That Help Adults Learn", "पाँच सिद्धांत जो वयस्कों को सीखने में मदद करते हैं"),
            "teach": [
              {
                "type": "text",
                "heading": L("Teaching the CRI Way", "CRI तरीके से पढ़ाना"),
                "html": L(
                  "Inside the 'Teaching' step of CRI, five principles make learning stick — especially for adult learners who are busy and practical-minded.",
                  "CRI के 'शिक्षण' चरण के भीतर, पाँच सिद्धांत सीखने को टिकाऊ बनाते हैं — खासकर व्यस्त और व्यावहारिक सोच वाले वयस्क शिक्षार्थियों के लिए।"
                )
              },
              {
                "type": "stat-grid",
                "items": [
                  {
                    "label": L("Perceived Purpose", "महसूस किया गया उद्देश्य"),
                    "text": L(
                      "Learners must know WHY this matters to them before you begin — make the goal clear upfront.",
                      "शुरू करने से पहले शिक्षार्थियों को यह जानना ज़रूरी है कि यह उनके लिए क्यों मायने रखता है — लक्ष्य शुरू में ही साफ़ करें।"
                    )
                  },
                  {
                    "label": L("Individual Differentiation", "व्यक्तिगत भिन्नता"),
                    "text": L(
                      "Different learners already know different things. Address their different needs, instead of teaching everyone the exact same way.",
                      "अलग-अलग शिक्षार्थी पहले से अलग-अलग चीज़ें जानते हैं। सबको बिल्कुल एक जैसे तरीके से पढ़ाने के बजाय उनकी अलग-अलग ज़रूरतों को संबोधित करें।"
                    )
                  },
                  {
                    "label": L("Graduated Sequence", "क्रमिक अनुक्रम"),
                    "text": L(
                      "Teach simple ideas first, moving to more complex ideas only after the basics are clear.",
                      "पहले सरल विचार पढ़ाएँ, और जटिल विचारों की ओर तभी बढ़ें जब बुनियादी बातें साफ़ हो जाएँ।"
                    )
                  }
                ]
              },
              {
                "type": "stat-grid",
                "items": [
                  {
                    "label": L("Appropriate Practice", "उचित अभ्यास"),
                    "text": L(
                      "Let learners actually try the skill themselves — hands-on practice, not just listening.",
                      "शिक्षार्थियों को खुद कौशल आज़माने दें — हाथों-हाथ अभ्यास, सिर्फ सुनना नहीं।"
                    )
                  },
                  {
                    "label": L("Knowledge of Results", "नतीजों की जानकारी"),
                    "text": L(
                      "Tell learners quickly whether they got it right or wrong, so they can correct themselves while it's fresh.",
                      "शिक्षार्थियों को जल्दी बताएँ कि उन्होंने सही किया या गलत, ताकि वे ताज़ा रहते हुए खुद को सुधार सकें।"
                    )
                  }
                ]
              },
              {
                "type": "example",
                "heading": L("Putting It Together", "इसे साथ में जोड़ना"),
                "text": L(
                  "Teaching Sahayaks how to explain milk pricing: start with why it matters (a common farmer complaint), teach the simple fat/SNF idea before the payment formula, let them practice explaining it to each other, then correct any mistakes on the spot.",
                  "सहायकों को दूध की कीमत समझाना सिखाना: यह क्यों मायने रखता है (एक आम किसान शिकायत) से शुरू करें, भुगतान फॉर्मूले से पहले सरल फैट/SNF विचार सिखाएँ, उन्हें एक-दूसरे को समझाने का अभ्यास करने दें, फिर मौके पर ही किसी गलती को ठीक करें।"
                )
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": L("What does 'Graduated Sequence' mean in teaching?", "शिक्षण में 'क्रमिक अनुक्रम' का क्या मतलब है?"),
                "options": [
                  L("Teaching only to learners who have graduated school", "सिर्फ स्कूल से स्नातक शिक्षार्थियों को पढ़ाना"),
                  L("Teaching simple ideas first, then moving to more complex ones", "पहले सरल विचार पढ़ाना, फिर जटिल विचारों की ओर बढ़ना"),
                  L("Giving a certificate at the end", "अंत में एक प्रमाणपत्र देना"),
                  L("Repeating the same idea many times without changing it", "एक ही विचार को बिना बदले कई बार दोहराना")
                ],
                "answer": 1,
                "explain": L(
                  "Graduated Sequence means building understanding step by step, from simple to complex.",
                  "क्रमिक अनुक्रम का मतलब है समझ को चरण-दर-चरण बनाना, सरल से जटिल की ओर।"
                )
              },
              {
                "type": "truefalse",
                "q": L(
                  "'Knowledge of Results' means telling learners quickly whether they got something right or wrong.",
                  "'नतीजों की जानकारी' का मतलब है शिक्षार्थियों को जल्दी बताना कि उन्होंने कुछ सही किया या गलत।"
                ),
                "answer": true,
                "explain": L(
                  "Fast feedback helps learners correct mistakes while the lesson is still fresh in their minds.",
                  "तेज़ प्रतिक्रिया शिक्षार्थियों को गलतियाँ सुधारने में मदद करती है जब पाठ अभी भी उनके दिमाग में ताज़ा हो।"
                )
              }
            ]
          },
          {
            "id": "t-picking-topics",
            "title": L("Choosing the Right Topic From Real Data", "असली डेटा से सही विषय चुनना"),
            "teach": [
              {
                "type": "text",
                "heading": L("Let the Problem Choose the Topic", "समस्या को विषय चुनने दें"),
                "html": L(
                  "The best training topics come from real problems happening in the field — not guesses. Look at what MPPs are actually struggling with.",
                  "सबसे अच्छे प्रशिक्षण विषय ज़मीनी स्तर पर हो रही असली समस्याओं से आते हैं — अंदाज़ों से नहीं। देखें कि MPP को असल में किस चीज़ से जूझना पड़ रहा है।"
                )
              },
              {
                "type": "stat-grid",
                "items": [
                  {
                    "label": L("Falling membership", "गिरती सदस्यता"),
                    "text": L(
                      "Fewer farmers are staying members of the MPP — training could cover how to listen to farmers' concerns and rebuild trust.",
                      "कम किसान MPP के सदस्य बने रह रहे हैं — प्रशिक्षण में किसानों की चिंताएँ सुनने और भरोसा फिर से बनाने का तरीका शामिल हो सकता है।"
                    )
                  },
                  {
                    "label": L("Low milk production", "कम दूध उत्पादन"),
                    "text": L(
                      "Farmers' animals are giving less milk than expected — training could cover animal feeding and care basics.",
                      "किसानों के पशु उम्मीद से कम दूध दे रहे हैं — प्रशिक्षण में पशु आहार और देखभाल की बुनियादी बातें शामिल हो सकती हैं।"
                    )
                  },
                  {
                    "label": L("Animal nutrition problems", "पशु पोषण की समस्याएँ"),
                    "text": L(
                      "Farmers may be feeding animals incorrectly — training could cover simple, low-cost nutrition improvements.",
                      "किसान शायद पशुओं को गलत तरीके से खिला रहे हों — प्रशिक्षण में सरल, कम लागत वाले पोषण सुधार शामिल हो सकते हैं।"
                    )
                  }
                ]
              },
              {
                "type": "callout",
                "style": "info",
                "heading": L("Group Activity", "समूह गतिविधि"),
                "text": L(
                  "In your training group, you may be asked to pick a real topic like these, prepare a short 15-minute session on it, and then deliver it to the group. This practice is exactly how CRI content gets built in real life.",
                  "अपने प्रशिक्षण समूह में, आपसे इन जैसा कोई असली विषय चुनने, उस पर एक छोटा 15-मिनट का सत्र तैयार करने, और फिर समूह को देने के लिए कहा जा सकता है। यह अभ्यास ठीक वैसे ही है जैसे असली ज़िंदगी में CRI सामग्री बनाई जाती है।"
                )
              },
              {
                "type": "poll",
                "heading": L("What Would You Choose?", "आप क्या चुनेंगे?"),
                "questions": [
                  {
                    "q": L(
                      "Your MPP has seen 6 farmers stop supplying milk this month. Which is the better first training topic?",
                      "आपके MPP में इस महीने 6 किसानों ने दूध देना बंद कर दिया है। पहला प्रशिक्षण विषय कौन-सा बेहतर है?"
                    ),
                    "options": [
                      L("A generic session on the history of dairy in India", "भारत में डेयरी के इतिहास पर एक सामान्य सत्र"),
                      L(
                        "A short session on why farmers leave, and how to listen and respond to their concerns",
                        "किसान क्यों छोड़ते हैं, और उनकी चिंताएँ कैसे सुनें व उनका जवाब दें, इस पर एक छोटा सत्र"
                      )
                    ],
                    "answer": 1,
                    "reveal": L(
                      "Training should follow the real problem on the ground — here, it's farmers leaving, so the content should target that directly.",
                      "प्रशिक्षण को ज़मीनी असली समस्या का अनुसरण करना चाहिए — यहाँ, यह किसानों का छोड़ना है, इसलिए सामग्री को सीधे उसी पर लक्षित होना चाहिए।"
                    )
                  }
                ]
              },
              {
                "type": "example",
                "heading": L("A Simple Session Outline", "एक सरल सत्र रूपरेखा"),
                "text": L(
                  "Behavioural Objective: Sahayak can list 3 reasons for farmer drop-off and respond to each. Pre-Evaluation: ask Sahayaks what they think the reasons are. Teaching: share real reasons from farmer conversations. Practice: role-play a talk with a farmer thinking of leaving. Post-Evaluation: ask Sahayaks to explain the 3 reasons back.",
                  "व्यवहारिक उद्देश्य: सहायक किसानों के छोड़ने के 3 कारण बता सके और हर एक का जवाब दे सके। पूर्व-मूल्यांकन: सहायकों से पूछें कि उन्हें क्या कारण लगते हैं। शिक्षण: किसान बातचीत से असली कारण साझा करें। अभ्यास: छोड़ने की सोच रहे किसान के साथ एक रोल-प्ले बातचीत करें। पश्च-मूल्यांकन: सहायकों से वे 3 कारण वापस समझाने को कहें।"
                )
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": L("Where should a good training topic come from?", "एक अच्छा प्रशिक्षण विषय कहाँ से आना चाहिए?"),
                "options": [
                  L(
                    "Whatever topic the trainer personally finds most interesting",
                    "जो भी विषय प्रशिक्षक को व्यक्तिगत रूप से सबसे दिलचस्प लगे"
                  ),
                  L(
                    "Real problems actually happening in the field, like falling membership or low milk production",
                    "ज़मीनी स्तर पर असल में हो रही समस्याएँ, जैसे गिरती सदस्यता या कम दूध उत्पादन"
                  ),
                  L("A random topic chosen without any data", "बिना किसी डेटा के चुना गया एक बेतरतीब विषय"),
                  L("The longest topic available", "उपलब्ध सबसे लंबा विषय")
                ],
                "answer": 1,
                "explain": L(
                  "CRI-based training topics come from real field problems, not guesses or personal preference.",
                  "CRI-आधारित प्रशिक्षण विषय असली ज़मीनी समस्याओं से आते हैं, अंदाज़ों या व्यक्तिगत पसंद से नहीं।"
                )
              },
              {
                "type": "truefalse",
                "q": L(
                  "A 15-minute group activity to design and deliver a short session is a realistic way to practice the CRI method.",
                  "एक छोटा सत्र डिज़ाइन करने और देने के लिए 15-मिनट की समूह गतिविधि CRI तरीके का अभ्यास करने का एक व्यावहारिक तरीका है।"
                ),
                "answer": true,
                "explain": L(
                  "Practicing on a small, real topic is exactly how the CRI method is used to build effective training in the field.",
                  "एक छोटे, असली विषय पर अभ्यास करना ठीक वैसे ही है जैसे CRI तरीके का उपयोग ज़मीनी स्तर पर असरदार प्रशिक्षण बनाने के लिए किया जाता है।"
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
              "topicId": "t-teaching-principles",
              "type": "mcq",
              "q": L(
                "Why is 'Perceived Purpose' important at the start of a teaching session?",
                "एक शिक्षण सत्र की शुरुआत में 'महसूस किया गया उद्देश्य' क्यों ज़रूरी है?"
              ),
              "options": [
                L("It is not important, learners will pay attention anyway", "यह ज़रूरी नहीं है, शिक्षार्थी वैसे भी ध्यान देंगे"),
                L(
                  "Learners need to know why the content matters to them before they will engage",
                  "जुड़ने से पहले शिक्षार्थियों को जानना ज़रूरी है कि सामग्री उनके लिए क्यों मायने रखती है"
                ),
                L("It replaces the need for any practice", "यह किसी भी अभ्यास की ज़रूरत को खत्म कर देता है"),
                L("It is only useful for children, not adults", "यह सिर्फ बच्चों के लिए उपयोगी है, वयस्कों के लिए नहीं")
              ],
              "answer": 1,
              "explain": L(
                "Adult learners engage better when they understand upfront why the content matters to them.",
                "वयस्क शिक्षार्थी बेहतर जुड़ते हैं जब वे पहले ही समझ लें कि सामग्री उनके लिए क्यों मायने रखती है।"
              )
            },
            {
              "topicId": "t-teaching-principles",
              "type": "truefalse",
              "q": L(
                "Appropriate Practice means learners only listen and never try the skill themselves.",
                "उचित अभ्यास का मतलब है शिक्षार्थी सिर्फ सुनें और कभी खुद कौशल न आज़माएँ।"
              ),
              "answer": false,
              "explain": L(
                "Appropriate Practice means letting learners actually try the skill hands-on, not just listen.",
                "उचित अभ्यास का मतलब है शिक्षार्थियों को हाथों-हाथ कौशल आज़माने देना, सिर्फ सुनना नहीं।"
              )
            },
            {
              "topicId": "t-picking-topics",
              "type": "mcq",
              "q": L(
                "A village is struggling with low milk production. What kind of training content fits this problem best?",
                "एक गाँव कम दूध उत्पादन से जूझ रहा है। इस समस्या के लिए कौन-सी प्रशिक्षण सामग्री सबसे उपयुक्त है?"
              ),
              "options": [
                L("A session on village meeting etiquette", "गाँव बैठक शिष्टाचार पर एक सत्र"),
                L("A session on animal feeding and care basics", "पशु आहार और देखभाल की बुनियादी बातों पर एक सत्र"),
                L("A session on the history of milk cooperatives", "दूध सहकारी समितियों के इतिहास पर एक सत्र"),
                L("No training is needed for this problem", "इस समस्या के लिए किसी प्रशिक्षण की ज़रूरत नहीं है")
              ],
              "answer": 1,
              "explain": L(
                "Content should match the real problem — here, low milk production points to feeding and animal care training.",
                "सामग्री को असली समस्या से मेल खाना चाहिए — यहाँ, कम दूध उत्पादन आहार और पशु देखभाल प्रशिक्षण की ओर इशारा करता है।"
              )
            },
            {
              "topicId": "t-picking-topics",
              "type": "truefalse",
              "q": L(
                "Real field data, like membership numbers or milk production trends, can help decide what training content to design.",
                "असली ज़मीनी डेटा, जैसे सदस्यता संख्या या दूध उत्पादन रुझान, यह तय करने में मदद कर सकता है कि क्या प्रशिक्षण सामग्री डिज़ाइन करनी है।"
              ),
              "answer": true,
              "explain": L(
                "Real field data points trainers toward the actual problems that need solving, making content more relevant.",
                "असली ज़मीनी डेटा प्रशिक्षकों को उन असली समस्याओं की ओर इशारा करता है जिन्हें हल करना है, जिससे सामग्री ज़्यादा प्रासंगिक बनती है।"
              )
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
    "subtitle": L(
      "Learn how to mentor and support a fellow Sahayak one-on-one — through listening, honest feedback and encouragement.",
      "एक साथी सहायक को एक-से-एक तरीके से मार्गदर्शन और सहयोग देना सीखिए — सुनने, ईमानदार प्रतिक्रिया और प्रोत्साहन के ज़रिए।"
    ),
    "icon": "milk",
    "available": true,
    "lessons": [
      {
        "id": "m6-l1",
        "title": L("Understanding Before Advising", "सलाह देने से पहले समझना"),
        "estMinutes": 7,
        "hook": [
          {
            "type": "hero",
            "heading": L("Understanding Before Advising", "सलाह देने से पहले समझना"),
            "text": L(
              "Sometimes you may be the one guiding another Sahayak — maybe someone new, or someone struggling at their MPP. This lesson shows you how to start that conversation the right way.",
              "कभी-कभी आप ही किसी दूसरे सहायक का मार्गदर्शन कर रहे हो सकते हैं — शायद कोई नया, या कोई जो अपने MPP में जूझ रहा हो। यह पाठ आपको दिखाता है कि उस बातचीत को सही तरीके से कैसे शुरू करें।"
            )
          }
        ],
        "topics": [
          {
            "id": "t-sahayak-challenges",
            "title": L("Walking in Another Sahayak's Shoes", "दूसरे सहायक की जगह खुद को रखना"),
            "teach": [
              {
                "type": "text",
                "heading": L("Every Sahayak's Day Is Different", "हर सहायक का दिन अलग होता है"),
                "html": L(
                  "A Sahayak's daily work is not easy — testing milk, weighing it correctly, recording data, handling cash, and managing farmers who are sometimes upset. Before you offer advice to another Sahayak, take time to understand what their day actually looks like.",
                  "एक सहायक का रोज़ का काम आसान नहीं है — दूध जाँचना, उसे सही से तौलना, डेटा दर्ज करना, नकदी संभालना, और कभी-कभी नाराज़ किसानों को संभालना। किसी दूसरे सहायक को सलाह देने से पहले, यह समझने के लिए समय लें कि उनका दिन असल में कैसा दिखता है।"
                )
              },
              {
                "type": "text",
                "heading": L("Why This Conversation Matters", "यह बातचीत क्यों ज़रूरी है"),
                "html": L(
                  "When you sit down with a Sahayak one-on-one — maybe a new Sahayak still learning the job, or one who is struggling — your goal is not to judge them. It is to understand their challenges and help them do better.",
                  "जब आप किसी सहायक के साथ एक-से-एक बैठते हैं — शायद कोई नया सहायक जो अभी काम सीख रहा है, या कोई जो जूझ रहा है — आपका लक्ष्य उन्हें आँकना नहीं है। यह उनकी चुनौतियों को समझना और उन्हें बेहतर करने में मदद करना है।"
                )
              },
              {
                "type": "callout",
                "style": "tip",
                "heading": L("Start by Asking, Not Telling", "बताने से नहीं, पूछने से शुरू करें"),
                "text": L(
                  "Before giving any advice, ask the Sahayak to describe their day, their difficulties, and what they think is going wrong. You will often learn things you did not expect.",
                  "कोई भी सलाह देने से पहले, सहायक से उनका दिन, उनकी मुश्किलें, और उन्हें क्या गलत लगता है, बताने को कहें। आप अक्सर ऐसी बातें सीखेंगे जिनकी आपने उम्मीद नहीं की थी।"
                )
              },
              {
                "type": "example",
                "heading": L("Starting the Right Way", "सही तरीके से शुरुआत करना"),
                "text": L(
                  "Senior Sahayak: Before we talk about the low collection numbers, tell me — how has this month been for you at the MPP? New Sahayak: Honestly, it's been hard. Two farmers stopped coming and I don't fully understand why. Notice the senior Sahayak asked an open question first, instead of starting with the problem.",
                  "वरिष्ठ सहायक: कम संग्रह संख्या पर बात करने से पहले, बताओ — इस महीने MPP पर आपके लिए कैसा रहा? नया सहायक: सच कहूँ तो मुश्किल रहा। दो किसानों ने आना बंद कर दिया और मुझे पूरी तरह समझ नहीं आ रहा क्यों। ध्यान दें कि वरिष्ठ सहायक ने समस्या से शुरू करने के बजाय पहले एक खुला सवाल पूछा।"
                )
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": L(
                  "Before giving advice to a struggling Sahayak, what should you do first?",
                  "जूझ रहे सहायक को सलाह देने से पहले, आपको पहले क्या करना चाहिए?"
                ),
                "options": [
                  L("Tell them everything they are doing wrong", "उन्हें बताएँ कि वे सब कुछ गलत कर रहे हैं"),
                  L("Ask them to describe their day and difficulties, and listen", "उनसे उनका दिन और मुश्किलें बताने को कहें, और सुनें"),
                  L("Compare them unfavourably to other Sahayaks", "उनकी तुलना दूसरे सहायकों से नकारात्मक ढंग से करें"),
                  L("Wait for someone else to talk to them instead", "किसी और के उनसे बात करने का इंतज़ार करें")
                ],
                "answer": 1,
                "explain": L(
                  "Understanding a Sahayak's real challenges first helps you give advice that actually fits their situation.",
                  "पहले सहायक की असली चुनौतियों को समझना आपको ऐसी सलाह देने में मदद करता है जो उनकी स्थिति के अनुकूल हो।"
                )
              },
              {
                "type": "truefalse",
                "q": L(
                  "The goal of a one-on-one conversation with a struggling Sahayak is to judge their performance, not to understand them.",
                  "जूझ रहे सहायक के साथ एक-से-एक बातचीत का लक्ष्य उनके प्रदर्शन को आँकना है, उन्हें समझना नहीं।"
                ),
                "answer": false,
                "explain": L(
                  "The goal is to understand their challenges and help them improve — not to judge them.",
                  "लक्ष्य है उनकी चुनौतियों को समझना और उन्हें सुधरने में मदद करना — उन्हें आँकना नहीं।"
                )
              }
            ]
          },
          {
            "id": "t-active-listening-sahayak",
            "title": L("Listening Without Jumping to Solutions", "बिना समाधान पर कूदे सुनना"),
            "teach": [
              {
                "type": "text",
                "heading": L("Resist the Urge to Fix It Immediately", "तुरंत ठीक करने की इच्छा पर काबू रखें"),
                "html": L(
                  "When someone tells you a problem, it's tempting to jump straight to a solution. But if you do this too fast, the Sahayak may feel unheard — and you might end up solving the wrong problem.",
                  "जब कोई आपको समस्या बताता है, तो सीधे समाधान पर कूदना आकर्षक लगता है। लेकिन अगर आप ऐसा बहुत जल्दी करते हैं, तो सहायक को लग सकता है कि उन्हें सुना नहीं गया — और हो सकता है आप गलत समस्या हल कर बैठें।"
                )
              },
              {
                "type": "callout",
                "style": "warning",
                "heading": L("A Common Mistake", "एक आम गलती"),
                "text": L(
                  "Cutting off a Sahayak mid-sentence to give advice, or assuming you already know their problem before they finish explaining, can make them stop being honest with you in future conversations.",
                  "सलाह देने के लिए सहायक की बात बीच में काटना, या यह मान लेना कि आप उनकी समस्या पहले से जानते हैं इससे पहले कि वे समझा पूरा करें, भविष्य की बातचीत में उन्हें आपसे ईमानदार होना बंद करा सकता है।"
                )
              },
              {
                "type": "text",
                "heading": L("Ask Open-Ended Questions", "खुले सवाल पूछें"),
                "html": L(
                  "Instead of yes-or-no questions, ask things like 'What do you think caused this?' or 'What have you already tried?' These questions help the Sahayak think it through — and often they find their own answer.",
                  "हाँ-नहीं वाले सवालों के बजाय, 'आपको क्या लगता है इसका कारण क्या है?' या 'आपने अब तक क्या आज़माया है?' जैसे सवाल पूछें। ये सवाल सहायक को सोचने में मदद करते हैं — और अक्सर वे खुद अपना जवाब पा लेते हैं।"
                )
              },
              {
                "type": "example",
                "heading": L("Good vs. Rushed Listening", "अच्छा बनाम जल्दबाज़ी वाला सुनना"),
                "text": L(
                  "Rushed: You probably didn't test the milk properly, that's why farmers complained. Better: Walk me through what happened when the farmer complained. What did you do first?",
                  "जल्दबाज़ी वाला: शायद आपने दूध ठीक से नहीं जाँचा, इसलिए किसानों ने शिकायत की। बेहतर: मुझे बताइए कि जब किसान ने शिकायत की तो क्या हुआ। आपने पहले क्या किया?"
                )
              },
              {
                "type": "poll",
                "heading": L("What Should You Say Here?", "यहाँ आपको क्या कहना चाहिए?"),
                "questions": [
                  {
                    "q": L(
                      "A Sahayak tells you collections have dropped this month. What's the better first response?",
                      "एक सहायक आपको बताता है कि इस महीने संग्रह गिर गया है। पहली बेहतर प्रतिक्रिया क्या है?"
                    ),
                    "options": [
                      L("You must be doing something wrong at collection time.", "आप ज़रूर संग्रह के समय कुछ गलत कर रहे हैं।"),
                      L(
                        "Tell me more — when did you first notice the drop, and have you spoken to any farmers about it?",
                        "मुझे और बताइए — आपने गिरावट पहली बार कब देखी, और क्या आपने किसी किसान से इस बारे में बात की?"
                      )
                    ],
                    "answer": 1,
                    "reveal": L(
                      "Asking first, before assuming, gets you the real reason and keeps the Sahayak comfortable being honest with you.",
                      "मान लेने से पहले पूछना आपको असली कारण दिलाता है और सहायक को आपके साथ ईमानदार रहने में सहज रखता है।"
                    )
                  }
                ]
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": L(
                  "What is a risk of jumping straight to a solution before fully listening?",
                  "पूरी तरह सुनने से पहले सीधे समाधान पर कूदने का एक जोखिम क्या है?"
                ),
                "options": [
                  L("There is no risk, faster is always better", "कोई जोखिम नहीं, तेज़ हमेशा बेहतर होता है"),
                  L("You might end up solving the wrong problem", "आप गलत समस्या हल कर सकते हैं"),
                  L("The Sahayak will always agree with you anyway", "सहायक वैसे भी हमेशा आपसे सहमत होगा"),
                  L("It saves so much time that it is always worth it", "यह इतना समय बचाता है कि यह हमेशा फ़ायदेमंद है")
                ],
                "answer": 1,
                "explain": L(
                  "Without fully understanding the real problem, you risk offering a solution that doesn't actually fix it.",
                  "असली समस्या को पूरी तरह समझे बिना, आप एक ऐसा समाधान दे सकते हैं जो असल में उसे ठीक नहीं करता।"
                )
              },
              {
                "type": "truefalse",
                "q": L(
                  "Open-ended questions like 'What do you think caused this?' can help a Sahayak think through their own problem.",
                  "'आपको क्या लगता है इसका कारण क्या है?' जैसे खुले सवाल एक सहायक को अपनी समस्या पर सोचने में मदद कर सकते हैं।"
                ),
                "answer": true,
                "explain": L(
                  "Open-ended questions encourage the Sahayak to reflect and often arrive at their own useful answer.",
                  "खुले सवाल सहायक को सोचने के लिए प्रोत्साहित करते हैं और अक्सर वे खुद एक उपयोगी जवाब तक पहुँच जाते हैं।"
                )
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
              "q": L(
                "Why is it important to understand a Sahayak's day-to-day challenges before advising them?",
                "सलाह देने से पहले सहायक की रोज़मर्रा की चुनौतियों को समझना क्यों ज़रूरी है?"
              ),
              "options": [
                L("It isn't important — advice works the same regardless", "यह ज़रूरी नहीं है — सलाह वैसे भी एक जैसी काम करती है"),
                L("It helps you give advice that actually fits their real situation", "यह आपको ऐसी सलाह देने में मदद करता है जो उनकी असली स्थिति के अनुकूल हो"),
                L("It is only a formality with no real value", "यह सिर्फ एक औपचारिकता है जिसका कोई असली मूल्य नहीं"),
                L("It wastes time that could be spent giving instructions", "यह समय बर्बाद करता है जो निर्देश देने में लगाया जा सकता था")
              ],
              "answer": 1,
              "explain": L(
                "Understanding the real, on-ground challenges helps you offer advice that is actually useful and relevant.",
                "असली, ज़मीनी चुनौतियों को समझना आपको ऐसी सलाह देने में मदद करता है जो असल में उपयोगी और प्रासंगिक हो।"
              )
            },
            {
              "topicId": "t-sahayak-challenges",
              "type": "truefalse",
              "q": L(
                "Starting a mentoring conversation with an open question, like asking how their month has been, is a good approach.",
                "एक मार्गदर्शन बातचीत को एक खुले सवाल से शुरू करना, जैसे पूछना कि उनका महीना कैसा रहा, एक अच्छा तरीका है।"
              ),
              "answer": true,
              "explain": L(
                "Open questions invite honesty and help you understand the real situation before discussing problems.",
                "खुले सवाल ईमानदारी को बुलाते हैं और समस्याओं पर चर्चा करने से पहले असली स्थिति समझने में मदद करते हैं।"
              )
            },
            {
              "topicId": "t-active-listening-sahayak",
              "type": "mcq",
              "q": L(
                "A Sahayak is explaining a problem, but you think you already know the cause. What should you do?",
                "एक सहायक समस्या समझा रहा है, लेकिन आपको लगता है कि आप कारण पहले से जानते हैं। आपको क्या करना चाहिए?"
              ),
              "options": [
                L("Interrupt and explain the cause immediately", "टोकें और तुरंत कारण समझाएँ"),
                L(
                  "Let them finish and ask follow-up questions before concluding anything",
                  "उन्हें पूरा बोलने दें और किसी निष्कर्ष से पहले अनुवर्ती सवाल पूछें"
                ),
                L("Change the subject", "विषय बदल दें"),
                L("Assume you're right and move on without checking", "मान लें कि आप सही हैं और बिना जाँचे आगे बढ़ें")
              ],
              "answer": 1,
              "explain": L(
                "Letting the Sahayak finish and asking follow-up questions helps you confirm the real cause instead of guessing.",
                "सहायक को पूरा बोलने देना और अनुवर्ती सवाल पूछना आपको अंदाज़ा लगाने के बजाय असली कारण की पुष्टि करने में मदद करता है।"
              )
            },
            {
              "topicId": "t-active-listening-sahayak",
              "type": "truefalse",
              "q": L(
                "Assuming you already know a Sahayak's problem before they finish explaining can damage their trust in you.",
                "सहायक की समस्या को उनके पूरा समझाने से पहले ही मान लेना, आप पर उनके भरोसे को नुकसान पहुँचा सकता है।"
              ),
              "answer": true,
              "explain": L(
                "Jumping to conclusions can make a Sahayak feel unheard, and less likely to be open with you in future.",
                "निष्कर्ष पर कूदना सहायक को अनसुना महसूस करा सकता है, और भविष्य में उनके आपसे खुले रहने की संभावना कम कर सकता है।"
              )
            }
          ]
        }
      },
      {
        "id": "m6-l2",
        "title": L("Feedback That Builds Confidence", "प्रतिक्रिया जो आत्मविश्वास बनाती है"),
        "estMinutes": 8,
        "hook": [
          {
            "type": "hero",
            "heading": L("Feedback That Builds Confidence", "प्रतिक्रिया जो आत्मविश्वास बनाती है"),
            "text": L(
              "Good feedback helps a Sahayak grow. Bad feedback makes them defensive or discouraged. Let's learn how to give feedback that actually helps.",
              "अच्छी प्रतिक्रिया एक सहायक को आगे बढ़ने में मदद करती है। बुरी प्रतिक्रिया उन्हें बचावी या हतोत्साहित बना देती है। आइए सीखें कि ऐसी प्रतिक्रिया कैसे दें जो असल में मदद करे।"
            )
          }
        ],
        "topics": [
          {
            "id": "t-constructive-feedback",
            "title": L("Giving Feedback the Right Way", "प्रतिक्रिया सही तरीके से देना"),
            "teach": [
              {
                "type": "text",
                "heading": L("Be Specific, Not General", "विशेष रहें, सामान्य नहीं"),
                "html": L(
                  "Instead of saying 'Your record-keeping is bad,' point to something specific: 'I noticed three days last week where the evening collection wasn't logged. Let's look at why.' Specific feedback is much easier to act on.",
                  "'आपकी रिकॉर्ड-कीपिंग खराब है' कहने के बजाय, किसी खास बात की ओर इशारा करें: 'मैंने देखा पिछले हफ्ते तीन दिन शाम का संग्रह दर्ज नहीं हुआ। आइए देखें क्यों।' विशेष प्रतिक्रिया पर काम करना कहीं आसान होता है।"
                )
              },
              {
                "type": "text",
                "heading": L("Give Feedback in Private", "प्रतिक्रिया निजी तौर पर दें"),
                "html": L(
                  "Always give corrective feedback one-on-one, in private — never in front of farmers or other Sahayaks. Public criticism embarrasses people and makes them defensive instead of open to improving.",
                  "सुधारात्मक प्रतिक्रिया हमेशा एक-से-एक, निजी तौर पर दें — कभी किसानों या दूसरे सहायकों के सामने नहीं। सार्वजनिक आलोचना लोगों को शर्मिंदा करती है और उन्हें सुधरने के लिए खुले रहने के बजाय बचावी बना देती है।"
                )
              },
              {
                "type": "callout",
                "style": "tip",
                "heading": L("Balance Praise With Improvement", "प्रशंसा और सुधार में संतुलन रखें"),
                "text": L(
                  "Mention what the Sahayak is doing well, not only what needs to change. This is not about softening bad news — it is about giving an honest, complete picture so the Sahayak knows what to keep doing too.",
                  "यह बताएँ कि सहायक क्या अच्छा कर रहा है, सिर्फ यह नहीं कि क्या बदलना है। यह बुरी खबर को नरम करने की बात नहीं है — यह एक ईमानदार, पूरी तस्वीर देने की बात है ताकि सहायक यह भी जान सके कि क्या करते रहना है।"
                )
              },
              {
                "type": "example",
                "heading": L("Two Ways to Give the Same Feedback", "एक ही प्रतिक्रिया देने के दो तरीके"),
                "text": L(
                  "Harsh: You keep making mistakes with the fat testing, this needs to stop. Constructive: Your farmer relationships are strong — I can see that from how they talk to you. I did notice a couple of fat-testing readings that looked off last week. Can we go over the testing steps together?",
                  "कठोर: आप फैट जाँच में लगातार गलतियाँ करते हैं, यह रुकना चाहिए। रचनात्मक: आपके किसान संबंध मज़बूत हैं — यह मुझे उनके आपसे बात करने के तरीके से दिखता है। मैंने पिछले हफ्ते कुछ फैट-जाँच रीडिंग गलत देखीं। क्या हम साथ में जाँच के चरणों को दोबारा देख सकते हैं?"
                )
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": L("Which is an example of specific, useful feedback?", "विशेष, उपयोगी प्रतिक्रिया का उदाहरण कौन-सा है?"),
                "options": [
                  L("'Your work is bad.'", "'आपका काम खराब है।'"),
                  L(
                    "'I noticed three days last week where the evening collection wasn't logged. Let's look at why.'",
                    "'मैंने देखा पिछले हफ्ते तीन दिन शाम का संग्रह दर्ज नहीं हुआ। आइए देखें क्यों।'"
                  ),
                  L("'You never do anything right.'", "'आप कभी कुछ सही नहीं करते।'"),
                  L("'Just try harder next time.'", "'अगली बार बस ज़्यादा कोशिश करें।'")
                ],
                "answer": 1,
                "explain": L(
                  "Specific feedback points to an exact situation, which makes it much easier for the Sahayak to act on.",
                  "विशेष प्रतिक्रिया एक सटीक स्थिति की ओर इशारा करती है, जिससे सहायक के लिए उस पर काम करना कहीं आसान हो जाता है।"
                )
              },
              {
                "type": "truefalse",
                "q": L(
                  "It is fine to correct a Sahayak's mistake in front of farmers if it saves time.",
                  "अगर समय बचता है, तो किसानों के सामने सहायक की गलती सुधारना ठीक है।"
                ),
                "answer": false,
                "explain": L(
                  "Corrective feedback should always be given in private — public criticism embarrasses and discourages people.",
                  "सुधारात्मक प्रतिक्रिया हमेशा निजी तौर पर दी जानी चाहिए — सार्वजनिक आलोचना लोगों को शर्मिंदा और हतोत्साहित करती है।"
                )
              }
            ]
          },
          {
            "id": "t-building-confidence",
            "title": L("Encouraging Growth and Following Up", "विकास को प्रोत्साहित करना और अनुवर्तन करना"),
            "teach": [
              {
                "type": "text",
                "heading": L("Small Wins Build Confidence", "छोटी जीतें आत्मविश्वास बनाती हैं"),
                "html": L(
                  "When a Sahayak improves, even a little, notice it and say so. A new Sahayak who used to make mistakes but is now testing milk correctly deserves to hear that you noticed the improvement.",
                  "जब एक सहायक सुधरे, थोड़ा भी, इसे नोटिस करें और कहें। एक नया सहायक जो पहले गलतियाँ करता था लेकिन अब सही तरीके से दूध जाँच रहा है, यह सुनने का हकदार है कि आपने सुधार देखा।"
                )
              },
              {
                "type": "text",
                "heading": L("Set Small, Achievable Goals", "छोटे, हासिल किए जा सकने वाले लक्ष्य तय करें"),
                "html": L(
                  "Instead of asking a struggling Sahayak to fix everything at once, agree on one or two small, clear goals to work on before your next conversation. This feels achievable, not overwhelming.",
                  "जूझ रहे सहायक से एक साथ सब कुछ ठीक करने को कहने के बजाय, अगली बातचीत से पहले काम करने के लिए एक या दो छोटे, स्पष्ट लक्ष्यों पर सहमत हों। यह हासिल किए जाने योग्य लगता है, भारी नहीं।"
                )
              },
              {
                "type": "callout",
                "style": "warning",
                "heading": L("Don't Disappear After the Conversation", "बातचीत के बाद गायब न हो जाएँ"),
                "text": L(
                  "A one-time conversation is not enough. If you don't follow up, the Sahayak may feel like the conversation didn't matter, or that you have already given up on them.",
                  "एक बार की बातचीत काफ़ी नहीं है। अगर आप अनुवर्तन नहीं करते, तो सहायक को लग सकता है कि बातचीत मायने नहीं रखती थी, या कि आपने उन्हें पहले ही छोड़ दिया है।"
                )
              },
              {
                "type": "example",
                "heading": L("A Good Follow-Up Conversation", "एक अच्छी अनुवर्तन बातचीत"),
                "text": L(
                  "Senior Sahayak, at the next visit: Last time we talked about logging every collection. I checked — you've logged every single one this week. That's a real improvement. New Sahayak: Thank you, that means a lot. It's easier now that I have a system for it. This follow-up shows the senior Sahayak kept track and recognised the effort.",
                  "वरिष्ठ सहायक, अगली मुलाकात में: पिछली बार हमने हर संग्रह दर्ज करने पर बात की थी। मैंने जाँचा — आपने इस हफ्ते हर एक दर्ज किया। यह एक असली सुधार है। नया सहायक: धन्यवाद, इसका बहुत मतलब है। अब आसान है क्योंकि मेरे पास इसके लिए एक व्यवस्था है। यह अनुवर्तन दिखाता है कि वरिष्ठ सहायक ने ट्रैक रखा और मेहनत को पहचाना।"
                )
              },
              {
                "type": "poll",
                "heading": L("What Should You Say Here?", "यहाँ आपको क्या कहना चाहिए?"),
                "questions": [
                  {
                    "q": L(
                      "A Sahayak you're mentoring has improved on one goal but is still struggling with another. What's the better approach?",
                      "जिस सहायक का आप मार्गदर्शन कर रहे हैं, वह एक लक्ष्य पर सुधरा है लेकिन दूसरे में अभी भी जूझ रहा है। बेहतर तरीका क्या है?"
                    ),
                    "options": [
                      L("Only point out what's still going wrong", "सिर्फ यह बताएँ कि अभी भी क्या गलत हो रहा है"),
                      L(
                        "Recognise the improvement first, then gently work on the next goal together",
                        "पहले सुधार को पहचानें, फिर धीरे से अगले लक्ष्य पर साथ में काम करें"
                      )
                    ],
                    "answer": 1,
                    "reveal": L(
                      "Recognising progress keeps the Sahayak motivated and open to continuing to improve.",
                      "प्रगति को पहचानना सहायक को प्रेरित और सुधार जारी रखने के लिए खुला रखता है।"
                    )
                  }
                ]
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": L(
                  "What is the benefit of setting one or two small, achievable goals instead of asking a Sahayak to fix everything at once?",
                  "सहायक से एक साथ सब कुछ ठीक करने को कहने के बजाय एक या दो छोटे, हासिल किए जाने योग्य लक्ष्य तय करने का क्या फ़ायदा है?"
                ),
                "options": [
                  L("It makes the goals easier to ignore", "इससे लक्ष्यों को नज़रअंदाज़ करना आसान हो जाता है"),
                  L(
                    "It feels achievable rather than overwhelming, so the Sahayak is more likely to succeed",
                    "यह भारी लगने के बजाय हासिल किए जाने योग्य लगता है, इसलिए सहायक के सफल होने की संभावना ज़्यादा है"
                  ),
                  L("It has no real benefit", "इसका कोई असली फ़ायदा नहीं है"),
                  L("It slows down all improvement permanently", "यह सभी सुधार को हमेशा के लिए धीमा कर देता है")
                ],
                "answer": 1,
                "explain": L(
                  "Small, clear goals feel achievable, which helps a struggling Sahayak build momentum and confidence.",
                  "छोटे, स्पष्ट लक्ष्य हासिल किए जाने योग्य लगते हैं, जो जूझ रहे सहायक को गति और आत्मविश्वास बनाने में मदद करते हैं।"
                )
              },
              {
                "type": "truefalse",
                "q": L(
                  "Once you've had one feedback conversation with a Sahayak, there is no need to follow up later.",
                  "एक बार सहायक के साथ प्रतिक्रिया बातचीत हो जाने के बाद, बाद में अनुवर्तन की कोई ज़रूरत नहीं है।"
                ),
                "answer": false,
                "explain": L(
                  "Following up shows the Sahayak that the conversation mattered and that you are still invested in their progress.",
                  "अनुवर्तन सहायक को दिखाता है कि बातचीत मायने रखती थी और आप अभी भी उनकी प्रगति में रुचि रखते हैं।"
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
              "topicId": "t-constructive-feedback",
              "type": "mcq",
              "q": L("Why should corrective feedback be given in private, one-on-one?", "सुधारात्मक प्रतिक्रिया निजी तौर पर, एक-से-एक क्यों दी जानी चाहिए?"),
              "options": [
                L("Because it takes too long to do in public", "क्योंकि सार्वजनिक रूप से करने में बहुत समय लगता है"),
                L(
                  "Because public criticism embarrasses people and makes them defensive",
                  "क्योंकि सार्वजनिक आलोचना लोगों को शर्मिंदा करती है और उन्हें बचावी बना देती है"
                ),
                L("Because private conversations don't need to be honest", "क्योंकि निजी बातचीत को ईमानदार होने की ज़रूरत नहीं है"),
                L(
                  "Because it is required only by written rules, not for any real reason",
                  "क्योंकि यह सिर्फ लिखित नियमों की वजह से ज़रूरी है, किसी असली कारण से नहीं"
                )
              ],
              "answer": 1,
              "explain": L(
                "Private feedback avoids embarrassment and keeps the Sahayak open to hearing and acting on it.",
                "निजी प्रतिक्रिया शर्मिंदगी से बचाती है और सहायक को इसे सुनने और उस पर काम करने के लिए खुला रखती है।"
              )
            },
            {
              "topicId": "t-constructive-feedback",
              "type": "truefalse",
              "q": L(
                "Good feedback should mention what a Sahayak is doing well, not only what needs to change.",
                "अच्छी प्रतिक्रिया में यह बताना चाहिए कि एक सहायक क्या अच्छा कर रहा है, सिर्फ यह नहीं कि क्या बदलना है।"
              ),
              "answer": true,
              "explain": L(
                "Balanced feedback gives an honest, complete picture, so the Sahayak knows what to keep doing as well as what to improve.",
                "संतुलित प्रतिक्रिया एक ईमानदार, पूरी तस्वीर देती है, ताकि सहायक जान सके कि क्या करते रहना है और क्या सुधारना है।"
              )
            },
            {
              "topicId": "t-building-confidence",
              "type": "mcq",
              "q": L(
                "A Sahayak has shown a small improvement since your last conversation. What should you do?",
                "आपकी पिछली बातचीत के बाद से एक सहायक ने थोड़ा सुधार दिखाया है। आपको क्या करना चाहिए?"
              ),
              "options": [
                L("Say nothing since the improvement is small", "कुछ न कहें क्योंकि सुधार छोटा है"),
                L("Notice and acknowledge the improvement before discussing anything else", "कुछ और चर्चा करने से पहले सुधार को नोटिस करें और स्वीकार करें"),
                L("Focus only on what's still wrong", "सिर्फ इस पर ध्यान दें कि अभी भी क्या गलत है"),
                L("Wait for a bigger improvement before saying anything", "कुछ कहने से पहले बड़े सुधार का इंतज़ार करें")
              ],
              "answer": 1,
              "explain": L(
                "Acknowledging even small improvements builds confidence and keeps the Sahayak motivated to keep improving.",
                "छोटे सुधार को भी स्वीकार करना आत्मविश्वास बनाता है और सहायक को सुधरते रहने के लिए प्रेरित रखता है।"
              )
            },
            {
              "topicId": "t-building-confidence",
              "type": "truefalse",
              "q": L(
                "Following up after a mentoring conversation shows the Sahayak that you are still invested in their progress.",
                "मार्गदर्शन बातचीत के बाद अनुवर्तन करना सहायक को दिखाता है कि आप अभी भी उनकी प्रगति में रुचि रखते हैं।"
              ),
              "answer": true,
              "explain": L(
                "Following up proves the earlier conversation mattered and that support continues beyond a single talk.",
                "अनुवर्तन साबित करता है कि पिछली बातचीत मायने रखती थी और सहयोग एक बार की बातचीत से आगे भी जारी रहता है।"
              )
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
    "subtitle": L(
      "Learn how to plan and run a good meeting with a small group of farmers — and how that is different from a big village-wide meeting.",
      "किसानों के एक छोटे समूह के साथ एक अच्छी बैठक की योजना बनाना और चलाना सीखिए — और यह एक बड़ी गाँव-स्तरीय बैठक से कैसे अलग है।"
    ),
    "icon": "milk",
    "available": true,
    "lessons": [
      {
        "id": "m7-l1",
        "title": L("Why We Call a Village Meeting", "हम गाँव बैठक क्यों बुलाते हैं"),
        "estMinutes": 6,
        "hook": [
          {
            "type": "hero",
            "heading": L("Why We Call a Village Meeting", "हम गाँव बैठक क्यों बुलाते हैं"),
            "text": L(
              "Collecting milk is only part of your job. Talking to farmers, together, in one place — that is where trust is built. Let's see why meetings matter.",
              "दूध इकट्ठा करना आपके काम का सिर्फ एक हिस्सा है। किसानों से एक साथ, एक जगह पर बात करना — वहीं भरोसा बनता है। आइए देखें बैठकें क्यों मायने रखती हैं।"
            )
          }
        ],
        "topics": [
          {
            "id": "t-why-meetings",
            "title": L("Why Meetings Matter", "बैठकें क्यों मायने रखती हैं"),
            "teach": [
              {
                "type": "text",
                "heading": L("More Than Just Collecting Milk", "सिर्फ दूध इकट्ठा करने से कहीं ज़्यादा"),
                "html": L(
                  "As a <b>Sahayak</b>, your job is not only to collect milk every day. You also need to talk with farmers regularly — explain new things, answer questions, and solve problems together. A <b>meeting</b> is the best way to do all of this at once.",
                  "एक <b>सहायक</b> के तौर पर, आपका काम सिर्फ हर दिन दूध इकट्ठा करना नहीं है। आपको किसानों से नियमित रूप से बात भी करनी है — नई बातें समझाना, सवालों के जवाब देना, और साथ मिलकर समस्याएँ हल करना। एक <b>बैठक</b> यह सब एक साथ करने का सबसे अच्छा तरीका है।"
                )
              },
              {
                "type": "glossary",
                "term": L("Village Meeting", "गाँव बैठक (Village Meeting)"),
                "meaning": L(
                  "A meeting is when farmers and the Sahayak come together, at one place and one time, to talk about the dairy business — new information, a problem, or a plan.",
                  "एक बैठक तब होती है जब किसान और सहायक एक जगह, एक समय पर इकट्ठा होते हैं, डेयरी व्यापार के बारे में बात करने के लिए — नई जानकारी, कोई समस्या, या कोई योजना।"
                )
              },
              {
                "type": "text",
                "heading": L("When Should You Call a Meeting?", "आपको बैठक कब बुलानी चाहिए?"),
                "html": L(
                  "Call a meeting when: <b>a new rule or scheme</b> needs to be explained, <b>many farmers</b> are facing the same problem, <b>new members</b> need to be welcomed, or something important is about to change — like a change in milk rate.",
                  "बैठक तब बुलाएँ जब: <b>किसी नए नियम या योजना</b> को समझाना हो, <b>कई किसान</b> एक ही समस्या का सामना कर रहे हों, <b>नए सदस्यों</b> का स्वागत करना हो, या कुछ ज़रूरी बदलने वाला हो — जैसे दूध की दर में बदलाव।"
                )
              },
              {
                "type": "example",
                "heading": L("Think About It", "इस पर सोचिए"),
                "text": L(
                  "If 5 farmers each ask you the same question on 5 different days, you answer it 5 times — and each answer may come out a little different. If you call one meeting instead, you answer it once, and everyone hears the same, correct answer together.",
                  "अगर 5 किसान 5 अलग-अलग दिनों में आपसे एक ही सवाल पूछें, तो आप इसका जवाब 5 बार देते हैं — और हर जवाब थोड़ा अलग निकल सकता है। अगर इसके बजाय आप एक बैठक बुलाएँ, तो आप इसका जवाब एक बार देते हैं, और सभी एक साथ एक ही सही जवाब सुनते हैं।"
                )
              },
              {
                "type": "callout",
                "style": "info",
                "heading": L("Did You Know?", "क्या आप जानते हैं?"),
                "text": L(
                  "A good meeting builds trust. When farmers feel heard, they trust the MPP more — and they keep bringing their milk there instead of selling it to someone else.",
                  "एक अच्छी बैठक भरोसा बनाती है। जब किसानों को लगता है कि उनकी बात सुनी जा रही है, तो वे MPP पर ज़्यादा भरोसा करते हैं — और अपना दूध कहीं और बेचने के बजाय वहीं लाते रहते हैं।"
                )
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": L(
                  "Why is it better to answer a common question in a meeting instead of one farmer at a time?",
                  "एक-एक किसान को अलग-अलग जवाब देने के बजाय एक बैठक में आम सवाल का जवाब देना बेहतर क्यों है?"
                ),
                "options": [
                  L("It takes more of your time", "इसमें आपका ज़्यादा समय लगता है"),
                  L("Everyone hears the same, correct answer together", "सभी एक साथ एक ही सही जवाब सुनते हैं"),
                  L("Farmers do not like meetings", "किसानों को बैठकें पसंद नहीं हैं"),
                  L("It is not better — one at a time is always best", "यह बेहतर नहीं है — एक-एक करना हमेशा सबसे अच्छा है")
                ],
                "answer": 1,
                "explain": L(
                  "A meeting lets you give one clear, correct answer to everyone at the same time, instead of repeating (and possibly changing) the answer many times.",
                  "एक बैठक आपको जवाब को कई बार दोहराने (और शायद बदलने) के बजाय, सभी को एक साथ एक स्पष्ट, सही जवाब देने देती है।"
                )
              },
              {
                "type": "truefalse",
                "q": L(
                  "You should only call a meeting when milk rates change — never for anything else.",
                  "आपको बैठक सिर्फ तब बुलानी चाहिए जब दूध की दरें बदलें — कभी किसी और वजह से नहीं।"
                ),
                "answer": false,
                "explain": L(
                  "Meetings are also useful for explaining new rules, solving a shared problem, or welcoming new members — not only for rate changes.",
                  "बैठकें नए नियम समझाने, साझा समस्या हल करने, या नए सदस्यों का स्वागत करने के लिए भी उपयोगी हैं — सिर्फ दर बदलाव के लिए नहीं।"
                )
              }
            ]
          },
          {
            "id": "t-meeting-groups",
            "title": L("Who Meets in a Small Group?", "छोटे समूह में कौन मिलता है?"),
            "teach": [
              {
                "type": "text",
                "heading": L("Two Kinds of Small Groups", "दो तरह के छोटे समूह"),
                "html": L(
                  "Not every meeting needs the whole village. Often, a <b>small group</b> of the right people is enough to solve a problem or share information quickly. Two common small groups are the VCG and the MRG.",
                  "हर बैठक के लिए पूरे गाँव की ज़रूरत नहीं होती। अक्सर, सही लोगों का एक <b>छोटा समूह</b> किसी समस्या को हल करने या जल्दी जानकारी साझा करने के लिए काफ़ी होता है। दो आम छोटे समूह हैं VCG और MRG।"
                )
              },
              {
                "type": "glossary",
                "term": L("VCG (Village Contact Group)", "VCG (गाँव संपर्क समूह)"),
                "meaning": L(
                  "A small group of active, respected farmers in the village who help the Sahayak stay in touch with all the other farmer members and pass on information both ways.",
                  "गाँव के सक्रिय, सम्मानित किसानों का एक छोटा समूह जो सहायक को बाकी सभी किसान सदस्यों के संपर्क में रहने में मदद करता है और दोनों तरफ जानकारी पहुँचाता है।"
                )
              },
              {
                "type": "glossary",
                "term": L("MRG (Member Relation Group)", "MRG (सदस्य संबंध समूह)"),
                "meaning": L(
                  "A small group that looks after the relationship with members — listening to their problems and helping solve them, so members stay happy with the MPP.",
                  "एक छोटा समूह जो सदस्यों के साथ संबंध का ध्यान रखता है — उनकी समस्याएँ सुनता है और उन्हें हल करने में मदद करता है, ताकि सदस्य MPP से खुश रहें।"
                )
              },
              {
                "type": "stat-grid",
                "items": [
                  {
                    "label": L("Sahayak", "सहायक"),
                    "text": L(
                      "Leads the meeting, shares information, and listens to what farmers say.",
                      "बैठक का नेतृत्व करता है, जानकारी साझा करता है, और किसानों की बात सुनता है।"
                    )
                  },
                  {
                    "label": L("Management Committee", "प्रबंधन समिति"),
                    "text": L(
                      "Local leaders who help run the MPP and take decisions on behalf of the members.",
                      "स्थानीय नेता जो MPP चलाने में मदद करते हैं और सदस्यों की ओर से फैसले लेते हैं।"
                    )
                  },
                  {
                    "label": L("Transporter", "परिवहनकर्ता"),
                    "text": L(
                      "The person who drives the vehicle that carries milk cans — sometimes called in to discuss collection timing.",
                      "वह व्यक्ति जो दूध के कैन ले जाने वाला वाहन चलाता है — कभी-कभी संग्रह के समय पर चर्चा के लिए बुलाया जाता है।"
                    )
                  }
                ]
              },
              {
                "type": "text",
                "heading": L("Small Meeting Means a Small Number of People", "छोटी बैठक का मतलब है कम लोग"),
                "html": L(
                  "A small-group meeting usually has only the people who are directly involved in that topic — maybe 5 to 15 people. This makes it easy for everyone to speak, ask questions, and be heard.",
                  "एक छोटे-समूह की बैठक में आमतौर पर सिर्फ वे लोग होते हैं जो उस विषय से सीधे जुड़े हों — शायद 5 से 15 लोग। इससे सबके लिए बोलना, सवाल पूछना, और सुना जाना आसान हो जाता है।"
                )
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": L("What does the VCG (Village Contact Group) mainly help with?", "VCG (गाँव संपर्क समूह) मुख्य रूप से किसमें मदद करता है?"),
                "options": [
                  L("Repairing the milk collection vehicle", "दूध संग्रह वाहन की मरम्मत करना"),
                  L(
                    "Keeping the Sahayak in touch with all the other farmer members",
                    "सहायक को बाकी सभी किसान सदस्यों के संपर्क में रखना"
                  ),
                  L("Setting the price of milk for the whole state", "पूरे राज्य के लिए दूध की कीमत तय करना"),
                  L("Printing farmer ID cards", "किसान पहचान पत्र छापना")
                ],
                "answer": 1,
                "explain": L(
                  "The VCG is a small group of active farmers who help the Sahayak pass information to and from all the other members in the village.",
                  "VCG सक्रिय किसानों का एक छोटा समूह है जो सहायक को गाँव के बाकी सभी सदस्यों तक और उनसे जानकारी पहुँचाने में मदद करता है।"
                )
              },
              {
                "type": "truefalse",
                "q": L(
                  "A small-group meeting usually includes the entire village, sometimes hundreds of people.",
                  "एक छोटे-समूह की बैठक में आमतौर पर पूरा गाँव शामिल होता है, कभी-कभी सैकड़ों लोग।"
                ),
                "answer": false,
                "explain": L(
                  "A small-group meeting is kept small on purpose — often just 5 to 15 people — so everyone can speak and be heard.",
                  "एक छोटे-समूह की बैठक जानबूझकर छोटी रखी जाती है — अक्सर सिर्फ 5 से 15 लोग — ताकि सभी बोल सकें और सुने जा सकें।"
                )
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
              "q": L("Which of these is a good reason to call a village meeting?", "गाँव बैठक बुलाने का एक अच्छा कारण इनमें से कौन-सा है?"),
              "options": [
                L("To avoid talking to farmers directly", "किसानों से सीधे बात करने से बचने के लिए"),
                L("To explain a new rule to many farmers at the same time", "एक ही समय पर कई किसानों को एक नया नियम समझाने के लिए"),
                L("To collect milk faster", "दूध जल्दी इकट्ठा करने के लिए"),
                L("To replace the Management Committee", "प्रबंधन समिति की जगह लेने के लिए")
              ],
              "answer": 1,
              "explain": L(
                "Meetings are called to explain something important, like a new rule, to many farmers at once, so everyone hears the same correct information.",
                "बैठकें कुछ ज़रूरी समझाने के लिए बुलाई जाती हैं, जैसे एक नया नियम, कई किसानों को एक साथ, ताकि सभी एक ही सही जानकारी सुनें।"
              )
            },
            {
              "topicId": "t-meeting-groups",
              "type": "truefalse",
              "q": L(
                "The MRG (Member Relation Group) mainly focuses on listening to members' problems and helping solve them.",
                "MRG (सदस्य संबंध समूह) मुख्य रूप से सदस्यों की समस्याएँ सुनने और उन्हें हल करने में मदद करने पर केंद्रित है।"
              ),
              "answer": true,
              "explain": L(
                "The MRG's main job is looking after the relationship with members — hearing problems and helping resolve them.",
                "MRG का मुख्य काम सदस्यों के साथ संबंध का ध्यान रखना है — समस्याएँ सुनना और उन्हें हल करने में मदद करना।"
              )
            }
          ]
        }
      },
      {
        "id": "m7-l2",
        "title": L("Planning and Running a Small-Group Meeting", "एक छोटे-समूह की बैठक की योजना बनाना और चलाना"),
        "estMinutes": 7,
        "hook": [
          {
            "type": "hero",
            "heading": L("Planning and Running a Small-Group Meeting", "एक छोटे-समूह की बैठक की योजना बनाना और चलाना"),
            "text": L(
              "Calling a meeting is easy. Running one well — where quiet people speak up and problems get solved — takes a little planning. Let's learn how.",
              "बैठक बुलाना आसान है। इसे अच्छी तरह चलाना — जहाँ शांत लोग बोलें और समस्याएँ हल हों — थोड़ी योजना चाहिए। आइए सीखें कैसे।"
            )
          }
        ],
        "topics": [
          {
            "id": "t-plan-agenda",
            "title": L("Before the Meeting: Planning", "बैठक से पहले: योजना बनाना"),
            "teach": [
              {
                "type": "text",
                "heading": L("Every Meeting Needs an Agenda", "हर बैठक को एक कार्यसूची चाहिए"),
                "html": L(
                  "Before you call people together, decide exactly what you want to talk about, and in what order. Writing this down — even as a short list — is called an <b>agenda</b>.",
                  "लोगों को इकट्ठा करने से पहले, तय करें कि आप ठीक-ठीक किस बारे में और किस क्रम में बात करना चाहते हैं। इसे लिखना — एक छोटी सूची के रूप में भी — <b>कार्यसूची (agenda)</b> कहलाता है।"
                )
              },
              {
                "type": "glossary",
                "term": L("Agenda", "कार्यसूची (Agenda)"),
                "meaning": L(
                  "A short list of the topics you will talk about in a meeting, in order. It keeps the meeting on track and stops it from running too long.",
                  "बैठक में आप जिन विषयों पर बात करेंगे, उनकी एक छोटी, क्रमबद्ध सूची। यह बैठक को दिशा में रखती है और इसे बहुत लंबा चलने से रोकती है।"
                )
              },
              {
                "type": "text",
                "heading": L("Where and How People Sit", "लोग कहाँ और कैसे बैठते हैं"),
                "html": L(
                  "How people sit changes how they talk. Sitting in a <b>circle</b> or facing each other lets everyone see who is speaking and feel equally included. If people sit in rows facing only the Sahayak, like a classroom, quiet farmers often stay quiet.",
                  "लोग कैसे बैठते हैं, इससे उनके बोलने का तरीका बदलता है। एक <b>घेरे</b> में या एक-दूसरे के सामने बैठने से सभी देख पाते हैं कि कौन बोल रहा है और बराबर शामिल महसूस करते हैं। अगर लोग सिर्फ सहायक के सामने पंक्तियों में बैठें, कक्षा की तरह, तो शांत किसान अक्सर शांत ही रहते हैं।"
                )
              },
              {
                "type": "example",
                "heading": L("A Good Agenda Looks Like This", "एक अच्छी कार्यसूची ऐसी दिखती है"),
                "text": L(
                  "1) Welcome the farmers (2 minutes). 2) Share today's topic — for example, a new milk-testing method (5 minutes). 3) Answer questions (10 minutes). 4) Agree on next steps (3 minutes).",
                  "1) किसानों का स्वागत (2 मिनट)। 2) आज का विषय साझा करें — जैसे, एक नया दूध-जाँच तरीका (5 मिनट)। 3) सवालों के जवाब दें (10 मिनट)। 4) अगले कदमों पर सहमति (3 मिनट)।"
                )
              },
              {
                "type": "callout",
                "style": "tip",
                "heading": L("Keep It Short", "इसे छोटा रखें"),
                "text": L(
                  "A small-group meeting works best when it stays short — around 15 minutes. A focused, on-time meeting keeps farmers willing to come to the next one.",
                  "एक छोटे-समूह की बैठक सबसे अच्छा तब काम करती है जब वह छोटी रहे — लगभग 15 मिनट। एक केंद्रित, समय पर होने वाली बैठक किसानों को अगली बैठक में आने के लिए तैयार रखती है।"
                )
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": L("What is an agenda?", "कार्यसूची क्या है?"),
                "options": [
                  L("The place where the meeting is held", "वह जगह जहाँ बैठक होती है"),
                  L("A short list of topics to discuss, in order", "चर्चा किए जाने वाले विषयों की एक छोटी, क्रमबद्ध सूची"),
                  L("The list of farmers who did not attend", "उन किसानों की सूची जो नहीं आए"),
                  L("The bill for the meeting's tea and snacks", "बैठक की चाय-नाश्ते का बिल")
                ],
                "answer": 1,
                "explain": L(
                  "An agenda is a short, ordered list of what will be discussed. It keeps a meeting focused and on time.",
                  "कार्यसूची चर्चा किए जाने वाली चीज़ों की एक छोटी, क्रमबद्ध सूची है। यह बैठक को केंद्रित और समय पर रखती है।"
                )
              },
              {
                "type": "truefalse",
                "q": L(
                  "Seating everyone in a circle, facing each other, usually helps more people speak up than seating them in rows facing only the Sahayak.",
                  "सभी को एक घेरे में, एक-दूसरे के सामने बैठाना, आमतौर पर सिर्फ सहायक के सामने पंक्तियों में बैठाने से ज़्यादा लोगों को बोलने में मदद करता है।"
                ),
                "answer": true,
                "explain": L(
                  "A circle lets everyone see each other and feel equally part of the discussion, which encourages quieter people to speak.",
                  "एक घेरा सभी को एक-दूसरे को देखने देता है और चर्चा का बराबर हिस्सा महसूस कराता है, जो शांत लोगों को बोलने के लिए प्रोत्साहित करता है।"
                )
              }
            ]
          },
          {
            "id": "t-encourage-speak",
            "title": L("Getting Everyone to Speak — and Handling Objections", "सबको बोलने के लिए तैयार करना — और आपत्तियों को संभालना"),
            "teach": [
              {
                "type": "text",
                "heading": L("Quiet Members Have Good Ideas Too", "शांत सदस्यों के पास भी अच्छे विचार होते हैं"),
                "html": L(
                  "In every group, some people speak up easily and some stay quiet — even when they have something important to say. Part of your job as Sahayak is to gently invite the quiet ones into the conversation.",
                  "हर समूह में, कुछ लोग आसानी से बोलते हैं और कुछ शांत रहते हैं — भले ही उनके पास कहने के लिए कुछ ज़रूरी हो। सहायक के तौर पर आपका काम है शांत लोगों को धीरे से बातचीत में शामिल करना।"
                )
              },
              {
                "type": "example",
                "heading": L("Try This", "यह आज़माएँ"),
                "text": L(
                  "Sahayak: \"Lakshmi akka, you have kept animals for many years. What do you think about this new collection time?\" Lakshmi: \"I think it will help — but what about the days when it rains heavily?\" A simple, direct question, asked kindly, brought out a real concern that everyone needed to hear.",
                  "सहायक: \"लक्ष्मी अक्का, आपने सालों से पशु पाले हैं। इस नए संग्रह समय के बारे में आपको क्या लगता है?\" लक्ष्मी: \"मुझे लगता है यह मदद करेगा — लेकिन तेज़ बारिश वाले दिनों का क्या?\" एक सरल, सीधा सवाल, दयालुता से पूछा गया, एक असली चिंता सामने लाया जिसे सबको सुनना ज़रूरी था।"
                )
              },
              {
                "type": "text",
                "heading": L("When Someone Objects", "जब कोई आपत्ति करे"),
                "html": L(
                  "When a farmer disagrees or raises a problem, do not argue or brush it aside. First, <b>listen fully</b>. Then <b>repeat the concern back</b> in your own words, so they know you understood. Then answer calmly, using facts. If you do not know the answer, say so honestly, and promise to find out and come back.",
                  "जब कोई किसान असहमत हो या समस्या उठाए, तो बहस न करें या उसे नज़रअंदाज़ न करें। पहले, <b>पूरी तरह सुनें</b>। फिर अपने शब्दों में <b>चिंता को दोहराएँ</b>, ताकि उन्हें पता चले कि आपने समझा। फिर तथ्यों का उपयोग करते हुए शांति से जवाब दें। अगर आपको जवाब नहीं पता, तो ईमानदारी से यह कहें, और पता लगाकर वापस आने का वादा करें।"
                )
              },
              {
                "type": "example",
                "heading": L("Handling an Objection — Do This", "आपत्ति संभालना — यह करें"),
                "text": L(
                  "Farmer: \"Why should we trust this new payment schedule? Last time we were told something and it did not happen.\" Sahayak: \"I understand your worry — trust was broken before. Let me explain exactly how this is different, and I will also write down the new dates so you can check them yourself.\"",
                  "किसान: \"हम इस नए भुगतान समय-सारणी पर भरोसा क्यों करें? पिछली बार हमें कुछ बताया गया और वह नहीं हुआ।\" सहायक: \"मैं आपकी चिंता समझता हूँ — पहले भरोसा टूटा था। मैं ठीक-ठीक समझाता हूँ कि यह कैसे अलग है, और मैं नई तारीखें भी लिख दूँगा ताकि आप खुद जाँच सकें।\""
                )
              },
              {
                "type": "callout",
                "style": "warning",
                "heading": L("Don't Do This", "यह न करें"),
                "text": L(
                  "Don't argue back. Don't say \"just trust me.\" Don't ignore an objection and quickly move to the next topic. Doing this makes farmers feel unheard — and they may stop coming to meetings altogether.",
                  "बहस न करें। \"बस मुझ पर भरोसा करो\" न कहें। किसी आपत्ति को नज़रअंदाज़ करके जल्दी अगले विषय पर न बढ़ें। ऐसा करने से किसानों को लगता है कि उनकी बात नहीं सुनी गई — और वे बैठकों में आना पूरी तरह बंद कर सकते हैं।"
                )
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": L("A farmer raises an objection you don't have an answer for. What should you do?", "एक किसान ऐसी आपत्ति उठाता है जिसका आपके पास जवाब नहीं है। आपको क्या करना चाहिए?"),
                "options": [
                  L("Ignore it and move to the next topic", "इसे नज़रअंदाज़ करें और अगले विषय पर बढ़ें"),
                  L("Argue that the farmer is wrong", "तर्क दें कि किसान गलत है"),
                  L("Admit you don't know, and promise to find out and come back", "स्वीकार करें कि आपको नहीं पता, और पता लगाकर वापस आने का वादा करें"),
                  L("End the meeting early", "बैठक जल्दी खत्म कर दें")
                ],
                "answer": 2,
                "explain": L(
                  "Honesty builds trust. It is far better to admit you don't know and follow up later than to guess or dismiss the concern.",
                  "ईमानदारी भरोसा बनाती है। यह अंदाज़ा लगाने या चिंता को नज़रअंदाज़ करने से कहीं बेहतर है कि आप स्वीकार करें कि आपको नहीं पता और बाद में अनुवर्तन करें।"
                )
              },
              {
                "type": "truefalse",
                "q": L(
                  "Directly and kindly inviting a quiet member to speak, by name, can help bring out concerns the group needs to hear.",
                  "एक शांत सदस्य को नाम लेकर सीधे और दयालुता से बोलने के लिए बुलाना, समूह को सुनने लायक चिंताओं को सामने ला सकता है।"
                ),
                "answer": true,
                "explain": L(
                  "Asking a quiet member directly, in a respectful way, often draws out useful information that would otherwise go unsaid.",
                  "एक शांत सदस्य से सम्मानपूर्वक सीधे पूछना अक्सर ऐसी उपयोगी जानकारी सामने लाता है जो वरना अनकही रह जाती।"
                )
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
              "q": L("About how long should a small-group meeting last?", "एक छोटे-समूह की बैठक लगभग कितनी देर चलनी चाहिए?"),
              "options": [
                L("Around 15 minutes", "लगभग 15 मिनट"),
                L("2 hours", "2 घंटे"),
                L("The whole day", "पूरा दिन"),
                L("5 minutes, no more", "5 मिनट, इससे ज़्यादा नहीं")
              ],
              "answer": 0,
              "explain": L(
                "A small-group meeting works best when kept short and focused — around 15 minutes.",
                "एक छोटे-समूह की बैठक सबसे अच्छा तब काम करती है जब वह छोटी और केंद्रित रहे — लगभग 15 मिनट।"
              )
            },
            {
              "topicId": "t-encourage-speak",
              "type": "truefalse",
              "q": L(
                "When handling an objection, you should first listen fully and repeat the concern back before answering.",
                "आपत्ति संभालते समय, आपको जवाब देने से पहले पूरी तरह सुनना चाहिए और चिंता को दोहराना चाहिए।"
              ),
              "answer": true,
              "explain": L(
                "Listening first and repeating the concern shows the farmer you understood, which makes your answer land better.",
                "पहले सुनना और चिंता को दोहराना किसान को दिखाता है कि आपने समझा, जिससे आपका जवाब बेहतर असर करता है।"
              )
            }
          ]
        }
      },
      {
        "id": "m7-l3",
        "title": L("Small Group Meeting or Mass Meeting?", "छोटे-समूह की बैठक या सामूहिक बैठक?"),
        "estMinutes": 6,
        "hook": [
          {
            "type": "hero",
            "heading": L("Small Group Meeting or Mass Meeting?", "छोटे-समूह की बैठक या सामूहिक बैठक?"),
            "text": L(
              "From a handful of farmers to a whole village — which meeting do you call, and when? Let's learn the difference.",
              "मुट्ठी भर किसानों से लेकर पूरे गाँव तक — कौन-सी बैठक बुलाएँ, और कब? आइए अंतर सीखें।"
            )
          }
        ],
        "topics": [
          {
            "id": "t-mass-meeting",
            "title": L("What Is a Village Mass Meeting?", "गाँव सामूहिक बैठक क्या है?"),
            "teach": [
              {
                "type": "text",
                "heading": L("When the Whole Village Comes Together", "जब पूरा गाँव एक साथ आता है"),
                "html": L(
                  "Sometimes a topic is important enough that most or all farmer families in the village need to hear it directly. For this, a <b>mass meeting</b> is called — much bigger than a small-group meeting.",
                  "कभी-कभी एक विषय इतना ज़रूरी होता है कि गाँव के ज़्यादातर या सभी किसान परिवारों को इसे सीधे सुनना चाहिए। इसके लिए, एक <b>सामूहिक बैठक</b> बुलाई जाती है — छोटे-समूह की बैठक से कहीं बड़ी।"
                )
              },
              {
                "type": "glossary",
                "term": L("Mass Meeting", "सामूहिक बैठक (Mass Meeting)"),
                "meaning": L(
                  "A large meeting where most or all of the farmer families in a village are invited — not just a small group directly affected by one issue.",
                  "एक बड़ी बैठक जिसमें गाँव के ज़्यादातर या सभी किसान परिवारों को बुलाया जाता है — सिर्फ एक मुद्दे से सीधे प्रभावित छोटे समूह को नहीं।"
                )
              },
              {
                "type": "stat-grid",
                "items": [
                  {
                    "label": L("Village Meeting", "गाँव बैठक"),
                    "text": L(
                      "A general meeting for the whole village, used to share important news or take a big decision together.",
                      "पूरे गाँव के लिए एक सामान्य बैठक, ज़रूरी खबर साझा करने या साथ मिलकर एक बड़ा फैसला लेने के लिए।"
                    )
                  },
                  {
                    "label": L("Health Camp", "स्वास्थ्य शिविर"),
                    "text": L(
                      "A camp where trained staff check the health of milk animals, give advice, and sometimes vaccinate them — held for the whole village at once.",
                      "एक शिविर जहाँ प्रशिक्षित कर्मचारी दुधारू पशुओं का स्वास्थ्य जाँचते हैं, सलाह देते हैं, और कभी-कभी टीका लगाते हैं — पूरे गाँव के लिए एक साथ आयोजित।"
                    )
                  },
                  {
                    "label": L("Milk Testing Camp (DMT)", "दूध जाँच शिविर (DMT)"),
                    "text": L(
                      "A camp where milk quality is tested openly in front of many farmers together, so they can see for themselves how testing works and trust it.",
                      "एक शिविर जहाँ कई किसानों के सामने खुले तौर पर दूध की गुणवत्ता जाँची जाती है, ताकि वे खुद देख सकें कि जाँच कैसे होती है और उस पर भरोसा करें।"
                    )
                  }
                ]
              },
              {
                "type": "callout",
                "style": "info",
                "heading": L("Did You Know?", "क्या आप जानते हैं?"),
                "text": L(
                  "A mass meeting usually needs more planning than a small-group meeting — more space, more chairs, and more helpers to manage a bigger crowd.",
                  "एक सामूहिक बैठक को आमतौर पर छोटे-समूह की बैठक से ज़्यादा योजना चाहिए — ज़्यादा जगह, ज़्यादा कुर्सियाँ, और बड़ी भीड़ संभालने के लिए ज़्यादा मददगार।"
                )
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": L("What is a mass meeting?", "सामूहिक बैठक क्या है?"),
                "options": [
                  L("A meeting with only the Management Committee", "सिर्फ प्रबंधन समिति के साथ एक बैठक"),
                  L(
                    "A large meeting where most or all farmer families in the village are invited",
                    "एक बड़ी बैठक जिसमें गाँव के ज़्यादातर या सभी किसान परिवारों को बुलाया जाता है"
                  ),
                  L("A meeting held only once a year", "साल में सिर्फ एक बार होने वाली बैठक"),
                  L("A meeting only for new members", "सिर्फ नए सदस्यों के लिए एक बैठक")
                ],
                "answer": 1,
                "explain": L(
                  "A mass meeting is a large, village-wide meeting, unlike a small-group meeting which involves only the people directly affected by one topic.",
                  "एक सामूहिक बैठक एक बड़ी, पूरे गाँव की बैठक है, जबकि छोटे-समूह की बैठक में सिर्फ एक विषय से सीधे प्रभावित लोग शामिल होते हैं।"
                )
              },
              {
                "type": "truefalse",
                "q": L(
                  "A health camp for milk animals is an example of an activity that can be part of a village mass meeting.",
                  "दुधारू पशुओं के लिए एक स्वास्थ्य शिविर एक गतिविधि का उदाहरण है जो गाँव सामूहिक बैठक का हिस्सा हो सकती है।"
                ),
                "answer": true,
                "explain": L(
                  "Health camps, along with village meetings and milk testing camps, are examples of activities held for the whole village at once.",
                  "स्वास्थ्य शिविर, गाँव बैठकों और दूध जाँच शिविरों के साथ, पूरे गाँव के लिए एक साथ आयोजित गतिविधियों के उदाहरण हैं।"
                )
              }
            ]
          },
          {
            "id": "t-choosing-right-meeting",
            "title": L("Which One Should You Call?", "आपको कौन-सी बुलानी चाहिए?"),
            "teach": [
              {
                "type": "text",
                "heading": L("Small Group vs Mass Meeting", "छोटा समूह बनाम सामूहिक बैठक"),
                "html": L(
                  "The right choice depends on <b>who is affected</b> and <b>what you need from the meeting</b>. A small group works when only a few farmers are involved and you need real discussion. A mass meeting works when everyone needs the same information at once.",
                  "सही चुनाव इस पर निर्भर करता है कि <b>कौन प्रभावित है</b> और <b>बैठक से आपको क्या चाहिए</b>। एक छोटा समूह तब काम करता है जब सिर्फ कुछ किसान शामिल हों और आपको असली चर्चा चाहिए। एक सामूहिक बैठक तब काम करती है जब सभी को एक साथ एक ही जानकारी चाहिए।"
                )
              },
              {
                "type": "stat-grid",
                "items": [
                  {
                    "label": L("Choose a Small Group When...", "छोटा समूह चुनें जब..."),
                    "text": L(
                      "the topic affects only a few farmers, or you need everyone present to discuss in detail and be heard.",
                      "विषय सिर्फ कुछ किसानों को प्रभावित करता हो, या आपको विस्तार से चर्चा करने और सुने जाने के लिए सभी की मौजूदगी चाहिए।"
                    )
                  },
                  {
                    "label": L("Choose a Mass Meeting When...", "सामूहिक बैठक चुनें जब..."),
                    "text": L(
                      "the topic affects the whole village — like a new MPP opening or a big rate change — and you mainly need to inform many people at once.",
                      "विषय पूरे गाँव को प्रभावित करता हो — जैसे एक नया MPP खुलना या बड़ा दर बदलाव — और आपको मुख्य रूप से एक साथ कई लोगों को सूचित करना हो।"
                    )
                  }
                ]
              },
              {
                "type": "example",
                "heading": L("Think About It", "इस पर सोचिए"),
                "text": L(
                  "Ten farmers are unhappy about how their milk's fat percentage is being measured. Should you call a mass meeting of 100 people, or a small group of these 10? A small group is better here — it lets you discuss each farmer's concern in real detail.",
                  "दस किसान इस बात से नाखुश हैं कि उनके दूध का फैट प्रतिशत कैसे मापा जा रहा है। क्या आपको 100 लोगों की सामूहिक बैठक बुलानी चाहिए, या इन 10 का एक छोटा समूह? यहाँ छोटा समूह बेहतर है — यह आपको हर किसान की चिंता को असल विस्तार से चर्चा करने देता है।"
                )
              },
              {
                "type": "callout",
                "style": "tip",
                "heading": L("Plan Extra Time for Mass Meetings", "सामूहिक बैठकों के लिए अतिरिक्त समय की योजना बनाएँ"),
                "text": L(
                  "A mass meeting for a large group usually needs about 20 minutes or more, often with two or more people helping manage the crowd — much more than a small 15-minute group meeting.",
                  "एक बड़े समूह के लिए सामूहिक बैठक को आमतौर पर लगभग 20 मिनट या ज़्यादा चाहिए, अक्सर भीड़ संभालने में मदद करने वाले दो या ज़्यादा लोगों के साथ — एक छोटी 15-मिनट की समूह बैठक से कहीं ज़्यादा।"
                )
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": L(
                  "A new MPP is opening and every farmer in the village needs to know about it. Which type of meeting fits best?",
                  "एक नया MPP खुल रहा है और गाँव के हर किसान को इसके बारे में जानना ज़रूरी है। कौन-सी बैठक सबसे उपयुक्त है?"
                ),
                "options": [
                  L("A small-group meeting with 5 farmers", "5 किसानों की एक छोटे-समूह की बैठक"),
                  L("A mass meeting for the whole village", "पूरे गाँव के लिए एक सामूहिक बैठक"),
                  L("No meeting is needed", "किसी बैठक की ज़रूरत नहीं है"),
                  L("A meeting only with the transporter", "सिर्फ परिवहनकर्ता के साथ एक बैठक")
                ],
                "answer": 1,
                "explain": L(
                  "Since this news affects every farmer in the village, a mass meeting is the right choice so everyone hears it directly.",
                  "चूँकि यह खबर गाँव के हर किसान को प्रभावित करती है, एक सामूहिक बैठक सही चुनाव है ताकि सभी इसे सीधे सुनें।"
                )
              },
              {
                "type": "truefalse",
                "q": L(
                  "A mass meeting usually needs less planning time than a small-group meeting.",
                  "एक सामूहिक बैठक को आमतौर पर छोटे-समूह की बैठक से कम योजना समय चाहिए।"
                ),
                "answer": false,
                "explain": L(
                  "A mass meeting needs MORE planning — more space, more helpers, and more time — because it involves far more people.",
                  "एक सामूहिक बैठक को ज़्यादा योजना चाहिए — ज़्यादा जगह, ज़्यादा मददगार, और ज़्यादा समय — क्योंकि इसमें कहीं ज़्यादा लोग शामिल होते हैं।"
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
              "topicId": "t-mass-meeting",
              "type": "mcq",
              "q": L("Which of these best describes a mass meeting?", "इनमें से कौन-सा सामूहिक बैठक का सबसे अच्छा वर्णन करता है?"),
              "options": [
                L("A meeting with just the VCG", "सिर्फ VCG के साथ एक बैठक"),
                L("A large, village-wide meeting for most or all farmer families", "ज़्यादातर या सभी किसान परिवारों के लिए एक बड़ी, पूरे गाँव की बैठक"),
                L("A one-on-one talk with a single farmer", "एक किसान के साथ एक-से-एक बातचीत"),
                L("A meeting held only inside the MPP office", "सिर्फ MPP कार्यालय के अंदर होने वाली बैठक")
              ],
              "answer": 1,
              "explain": L("A mass meeting is large and village-wide, unlike a small-group meeting.", "एक सामूहिक बैठक बड़ी और पूरे गाँव की होती है, छोटे-समूह की बैठक के विपरीत।")
            },
            {
              "topicId": "t-choosing-right-meeting",
              "type": "mcq",
              "q": L(
                "A handful of farmers have a detailed complaint about payment delays. What is the better choice?",
                "मुट्ठी भर किसानों की भुगतान में देरी को लेकर एक विस्तृत शिकायत है। बेहतर चुनाव क्या है?"
              ),
              "options": [
                L("A mass meeting for the whole village", "पूरे गाँव के लिए एक सामूहिक बैठक"),
                L("A small-group meeting with just those farmers", "सिर्फ उन किसानों के साथ एक छोटे-समूह की बैठक"),
                L("No meeting, just wait for it to resolve itself", "कोई बैठक नहीं, बस इसके खुद हल होने का इंतज़ार करें"),
                L("A health camp", "एक स्वास्थ्य शिविर")
              ],
              "answer": 1,
              "explain": L(
                "Since only a few farmers are affected and the issue needs real discussion, a small-group meeting is the better choice.",
                "चूँकि सिर्फ कुछ किसान प्रभावित हैं और मुद्दे को असली चर्चा चाहिए, एक छोटे-समूह की बैठक बेहतर चुनाव है।"
              )
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
    "subtitle": L(
      "Learn how a new Milk Pooling Point is chosen and set up, and how milk collection routes are planned so milk reaches the chilling centre fresh and on time.",
      "जानिए कि एक नया मिल्क पूलिंग पॉइंट कैसे चुना और स्थापित किया जाता है, और दूध संग्रह मार्गों की योजना कैसे बनाई जाती है ताकि दूध ताज़ा और समय पर चिलिंग सेंटर पहुँचे।"
    ),
    "icon": "milk",
    "available": true,
    "lessons": [
      {
        "id": "m8-l1",
        "title": L("Where Should a New MPP Go?", "एक नया MPP कहाँ होना चाहिए?"),
        "estMinutes": 7,
        "hook": [
          {
            "type": "hero",
            "heading": L("Where Should a New MPP Go?", "एक नया MPP कहाँ होना चाहिए?"),
            "text": L(
              "Before an MPP ever opens its doors, someone has to work out exactly where it should be. In this lesson, you'll learn how that decision gets made.",
              "किसी MPP के दरवाज़े खुलने से पहले, किसी को ठीक-ठीक तय करना होता है कि यह कहाँ होना चाहिए। इस पाठ में, आप सीखेंगे कि यह फैसला कैसे लिया जाता है।"
            )
          }
        ],
        "topics": [
          {
            "id": "t-village-survey",
            "title": L("The Village Survey", "गाँव सर्वेक्षण"),
            "teach": [
              {
                "type": "text",
                "heading": L("Why Survey a Village First?", "पहले गाँव का सर्वेक्षण क्यों करें?"),
                "html": L(
                  "Before setting up a new <b>MPP</b> or chilling facility in an area, the organisation needs real facts about that area — not guesses. This is done through a <b>village survey</b>.",
                  "किसी क्षेत्र में नया <b>MPP</b> या चिलिंग सुविधा स्थापित करने से पहले, संगठन को उस क्षेत्र के बारे में असली तथ्य चाहिए — अंदाज़े नहीं। यह एक <b>गाँव सर्वेक्षण</b> के ज़रिए किया जाता है।"
                )
              },
              {
                "type": "glossary",
                "term": L("MPP (Milk Pooling Point)", "MPP (मिल्क पूलिंग पॉइंट)"),
                "meaning": L(
                  "A place where farmers bring their milk daily and get paid fairly and on time — the same MPP you help form and run as a Sahayak.",
                  "एक जगह जहाँ किसान रोज़ दूध लाते हैं और समय पर न्यायपूर्ण भुगतान पाते हैं — वही MPP जिसे बनाने और चलाने में आप एक सहायक के तौर पर मदद करते हैं।"
                )
              },
              {
                "type": "text",
                "heading": L("How Far Does the Survey Go?", "सर्वेक्षण कितनी दूर तक जाता है?"),
                "html": L(
                  "Villages located <b>4 to 5 km</b> on either side of the main road are surveyed. Villages this close to a road are within reasonable reach for a daily milk collection route.",
                  "मुख्य सड़क के दोनों ओर <b>4 से 5 किमी</b> पर स्थित गाँवों का सर्वेक्षण किया जाता है। सड़क के इतने करीब गाँव रोज़ के दूध संग्रह मार्ग के लिए उचित पहुँच में होते हैं।"
                )
              },
              {
                "type": "glossary",
                "term": L("MAH (Milk Animal Household)", "MAH (दुधारू पशु परिवार)"),
                "meaning": L(
                  "A household in the village that keeps cows or buffaloes for milk. During a survey, the team visits each MAH and asks a set of questions, using a fixed format.",
                  "गाँव का एक परिवार जो दूध के लिए गाय या भैंस पालता है। सर्वेक्षण के दौरान, टीम हर MAH का दौरा करती है और एक तय प्रारूप में सवाल पूछती है।"
                )
              },
              {
                "type": "stat-grid",
                "items": [
                  {
                    "label": L("How Many Animals", "कितने पशु"),
                    "text": L(
                      "The total number of milk animals in each household, and in the whole village.",
                      "हर परिवार में, और पूरे गाँव में दुधारू पशुओं की कुल संख्या।"
                    )
                  },
                  {
                    "label": L("How Much Milk", "कितना दूध"),
                    "text": L(
                      "How much milk is produced, how much the family keeps for itself, and how much surplus is left over to sell.",
                      "कितना दूध उत्पादन होता है, परिवार खुद के लिए कितना रखता है, और बेचने के लिए कितना अतिरिक्त बचता है।"
                    )
                  },
                  {
                    "label": L("Where Milk Goes Now", "अभी दूध कहाँ जाता है"),
                    "text": L(
                      "Which traders or dairies farmers currently sell to, at what price, and how (and when) they get paid.",
                      "किसान अभी किन व्यापारियों या डेयरियों को बेचते हैं, किस कीमत पर, और उन्हें कैसे (और कब) भुगतान मिलता है।"
                    )
                  },
                  {
                    "label": L("Village Facilities", "गाँव की सुविधाएँ"),
                    "text": L(
                      "Roads, electricity, water, schools — these affect how easy it will be to run a collection point in this village.",
                      "सड़कें, बिजली, पानी, स्कूल — ये प्रभावित करते हैं कि इस गाँव में संग्रह केंद्र चलाना कितना आसान होगा।"
                    )
                  }
                ]
              },
              {
                "type": "callout",
                "style": "info",
                "heading": L("Did You Know?", "क्या आप जानते हैं?"),
                "text": L(
                  "The survey doesn't stop at milk numbers. It also looks at the different communities living in the village and how they relate to each other — because a collection point works best when it serves the whole village fairly.",
                  "सर्वेक्षण सिर्फ दूध की संख्या तक सीमित नहीं है। यह गाँव में रहने वाले अलग-अलग समुदायों और उनके आपसी संबंधों को भी देखता है — क्योंकि एक संग्रह केंद्र तभी सबसे अच्छा काम करता है जब वह पूरे गाँव की न्यायपूर्ण सेवा करे।"
                )
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": L("How far from the main road are villages typically surveyed?", "मुख्य सड़क से कितनी दूर तक गाँवों का सर्वेक्षण आमतौर पर होता है?"),
                "options": [
                  L("Only right next to the road", "सिर्फ सड़क के बिल्कुल बगल में"),
                  L("4 to 5 km on either side", "दोनों ओर 4 से 5 किमी"),
                  L("50 km on either side", "दोनों ओर 50 किमी"),
                  L("Only villages with no road access", "सिर्फ वे गाँव जहाँ सड़क नहीं पहुँचती")
                ],
                "answer": 1,
                "explain": L(
                  "Villages within about 4 to 5 km of the main road are surveyed, since they are within reasonable reach of a daily collection route.",
                  "मुख्य सड़क से लगभग 4 से 5 किमी के भीतर के गाँवों का सर्वेक्षण किया जाता है, क्योंकि वे रोज़ के संग्रह मार्ग की उचित पहुँच में होते हैं।"
                )
              },
              {
                "type": "truefalse",
                "q": L(
                  "The village survey only counts milk animals and ignores things like roads, water, and schools.",
                  "गाँव सर्वेक्षण सिर्फ दुधारू पशु गिनता है और सड़कों, पानी, और स्कूलों जैसी चीज़ों को नज़रअंदाज़ करता है।"
                ),
                "answer": false,
                "explain": L(
                  "The survey also looks at village facilities like roads, electricity, water, and schools, because these affect how easy it will be to run a collection point there.",
                  "सर्वेक्षण सड़कों, बिजली, पानी, और स्कूलों जैसी गाँव की सुविधाओं को भी देखता है, क्योंकि ये प्रभावित करते हैं कि वहाँ संग्रह केंद्र चलाना कितना आसान होगा।"
                )
              }
            ]
          },
          {
            "id": "t-siting-criteria",
            "title": L("Deciding Where to Place the MPP", "MPP कहाँ रखना है यह तय करना"),
            "teach": [
              {
                "type": "text",
                "heading": L("From Survey to Decision", "सर्वेक्षण से फैसले तक"),
                "html": L(
                  "Once several villages have been surveyed, the numbers are compared to work out how much milk could realistically be collected from the whole area. This decides both the location and the size of the facility needed.",
                  "कई गाँवों का सर्वेक्षण हो जाने के बाद, यह पता लगाने के लिए आँकड़ों की तुलना की जाती है कि पूरे क्षेत्र से वास्तव में कितना दूध इकट्ठा हो सकता है। यह जगह और ज़रूरी सुविधा का आकार दोनों तय करता है।"
                )
              },
              {
                "type": "stat-grid",
                "items": [
                  {
                    "label": L("Enough Farmers", "पर्याप्त किसान"),
                    "text": L(
                      "The area should have enough milk-animal households to make setting up a collection point worthwhile.",
                      "क्षेत्र में संग्रह केंद्र बनाना सार्थक करने के लिए पर्याप्त दुधारू-पशु परिवार होने चाहिए।"
                    )
                  },
                  {
                    "label": L("Enough Milk Volume", "पर्याप्त दूध मात्रा"),
                    "text": L(
                      "The expected surplus milk (after each household's own use) must be large enough to justify running a chilling facility.",
                      "अपेक्षित अतिरिक्त दूध (हर परिवार के अपने उपयोग के बाद) इतना बड़ा होना चाहिए कि चिलिंग सुविधा चलाना उचित लगे।"
                    )
                  },
                  {
                    "label": L("Distance Between Villages", "गाँवों के बीच की दूरी"),
                    "text": L(
                      "Village-to-village distance is measured so a realistic collection route can connect them to the MPP.",
                      "गाँव-से-गाँव की दूरी मापी जाती है ताकि एक व्यावहारिक संग्रह मार्ग उन्हें MPP से जोड़ सके।"
                    )
                  },
                  {
                    "label": L("Easy Access", "आसान पहुँच"),
                    "text": L(
                      "The site must be reachable by vehicle, so milk cans can be collected and moved out quickly, every day.",
                      "जगह तक वाहन से पहुँचना ज़रूरी है, ताकि दूध के कैन हर दिन जल्दी इकट्ठा और बाहर भेजे जा सकें।"
                    )
                  }
                ]
              },
              {
                "type": "text",
                "heading": L("Choosing a Cluster BMC or an MCC", "क्लस्टर BMC या MCC चुनना"),
                "html": L(
                  "Based on how much milk is available, the organisation decides what kind of chilling setup fits best — a smaller Cluster BMC, or a bigger MCC.",
                  "कितना दूध उपलब्ध है, इसके आधार पर संगठन तय करता है कि कौन-सी चिलिंग व्यवस्था सबसे उपयुक्त है — एक छोटा क्लस्टर BMC, या एक बड़ा MCC।"
                )
              },
              {
                "type": "glossary",
                "term": L("BMC (Bulk Milk Cooler)", "BMC (बल्क मिल्क कूलर)"),
                "meaning": L(
                  "A machine that cools milk quickly and keeps it fresh until it is picked up. A Cluster BMC serves a group of nearby villages together.",
                  "एक मशीन जो दूध को जल्दी ठंडा करती है और उठाए जाने तक ताज़ा रखती है। एक क्लस्टर BMC पास के गाँवों के एक समूह की एक साथ सेवा करता है।"
                )
              },
              {
                "type": "glossary",
                "term": L("MCC (Milk Chilling Centre)", "MCC (मिल्क चिलिंग सेंटर)"),
                "meaning": L(
                  "A bigger centre that chills milk coming in from many villages, before it is sent onward to the dairy plant.",
                  "एक बड़ा केंद्र जो कई गाँवों से आने वाले दूध को ठंडा करता है, इससे पहले कि यह डेयरी प्लांट की ओर आगे भेजा जाए।"
                )
              },
              {
                "type": "example",
                "heading": L("Think About It", "इस पर सोचिए"),
                "text": L(
                  "If government census data shows an area has thousands of milk animals but very few organised dairy buyers already working there, that is a good sign for opening a new MPP nearby.",
                  "अगर सरकारी जनगणना डेटा दिखाता है कि एक क्षेत्र में हज़ारों दुधारू पशु हैं लेकिन वहाँ पहले से बहुत कम संगठित डेयरी खरीदार काम कर रहे हैं, तो यह पास में एक नया MPP खोलने का अच्छा संकेत है।"
                )
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": L("What mainly decides whether an area gets a smaller Cluster BMC or a bigger MCC?", "मुख्य रूप से क्या तय करता है कि किसी क्षेत्र को छोटा क्लस्टर BMC मिले या बड़ा MCC?"),
                "options": [
                  L("The colour of the milk cans used", "उपयोग किए गए दूध के कैन का रंग"),
                  L("How much milk is available in that area", "उस क्षेत्र में कितना दूध उपलब्ध है"),
                  L("The number of Sahayaks already trained", "पहले से प्रशिक्षित सहायकों की संख्या"),
                  L("The distance to the nearest city", "निकटतम शहर की दूरी")
                ],
                "answer": 1,
                "explain": L(
                  "The amount of milk available in the area decides whether a smaller Cluster BMC or a bigger MCC is the right fit.",
                  "क्षेत्र में उपलब्ध दूध की मात्रा तय करती है कि छोटा क्लस्टर BMC सही है या बड़ा MCC।"
                )
              },
              {
                "type": "truefalse",
                "q": L(
                  "Village-to-village distance is measured mainly so a realistic milk collection route can be planned.",
                  "गाँव-से-गाँव की दूरी मुख्य रूप से इसलिए मापी जाती है ताकि एक व्यावहारिक दूध संग्रह मार्ग की योजना बनाई जा सके।"
                ),
                "answer": true,
                "explain": L(
                  "Distance between villages helps decide how they can be linked together into one practical collection route.",
                  "गाँवों के बीच की दूरी यह तय करने में मदद करती है कि उन्हें एक व्यावहारिक संग्रह मार्ग में कैसे जोड़ा जाए।"
                )
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
              "q": L("What does an MAH survey mainly try to find out?", "एक MAH सर्वेक्षण मुख्य रूप से क्या पता लगाने की कोशिश करता है?"),
              "options": [
                L("How many schools are in the village", "गाँव में कितने स्कूल हैं"),
                L(
                  "How many milk animals, how much milk, and where it is currently sold",
                  "कितने दुधारू पशु हैं, कितना दूध है, और यह अभी कहाँ बेचा जाता है"
                ),
                L("The names of every child in the household", "परिवार के हर बच्चे का नाम"),
                L("The colour of each family's roof", "हर परिवार की छत का रंग")
              ],
              "answer": 1,
              "explain": L(
                "The MAH survey collects facts about milk animals, milk production and surplus, and where the milk is currently sold.",
                "MAH सर्वेक्षण दुधारू पशुओं, दूध उत्पादन और अतिरिक्त, और दूध अभी कहाँ बेचा जाता है, इसके बारे में तथ्य इकट्ठा करता है।"
              )
            },
            {
              "topicId": "t-siting-criteria",
              "type": "truefalse",
              "q": L(
                "The expected surplus milk in an area is one of the things considered before setting up a chilling facility there.",
                "किसी क्षेत्र में अपेक्षित अतिरिक्त दूध वहाँ चिलिंग सुविधा स्थापित करने से पहले विचार की जाने वाली बातों में से एक है।"
              ),
              "answer": true,
              "explain": L(
                "Enough surplus milk is needed to justify the cost of running a chilling facility in that area.",
                "उस क्षेत्र में चिलिंग सुविधा चलाने की लागत को उचित ठहराने के लिए पर्याप्त अतिरिक्त दूध चाहिए।"
              )
            }
          ]
        }
      },
      {
        "id": "m8-l2",
        "title": L("Setting Up the MPP, Step by Step", "MPP स्थापित करना, चरण दर चरण"),
        "estMinutes": 7,
        "hook": [
          {
            "type": "hero",
            "heading": L("Setting Up the MPP, Step by Step", "MPP स्थापित करना, चरण दर चरण"),
            "text": L(
              "Once a location looks promising, there is still a clear sequence of steps to follow — and a village and a Sahayak to choose — before the MPP can actually open.",
              "एक जगह अच्छी लगने के बाद भी, MPP असल में खुलने से पहले अभी भी अनुसरण करने के लिए स्पष्ट चरणों का क्रम है — और एक गाँव व एक सहायक चुनना बाकी है।"
            )
          }
        ],
        "topics": [
          {
            "id": "t-setup-steps",
            "title": L("The Steps to Set Up an MPP", "MPP स्थापित करने के चरण"),
            "teach": [
              {
                "type": "text",
                "heading": L("From Data to a Working MPP", "डेटा से एक काम करने वाले MPP तक"),
                "html": L(
                  "Setting up a new MPP or chilling facility follows a clear order: gather background information, check it on the ground, decide the setup needed, find someone to build it, and then follow up until it is running.",
                  "एक नया MPP या चिलिंग सुविधा स्थापित करना एक स्पष्ट क्रम का पालन करता है: पृष्ठभूमि जानकारी इकट्ठा करें, इसे ज़मीन पर जाँचें, ज़रूरी व्यवस्था तय करें, इसे बनाने वाला कोई ढूँढें, फिर चलने तक अनुवर्तन करें।"
                )
              },
              {
                "type": "stat-grid",
                "items": [
                  {
                    "label": L("1. Gather Data", "1. डेटा इकट्ठा करें"),
                    "text": L(
                      "Collect secondary data — government census, survey reports, and information on any organised buyers already working in the area.",
                      "द्वितीयक डेटा इकट्ठा करें — सरकारी जनगणना, सर्वेक्षण रिपोर्ट, और क्षेत्र में पहले से काम कर रहे किसी भी संगठित खरीदार की जानकारी।"
                    )
                  },
                  {
                    "label": L("2. Visit and Validate", "2. दौरा करें और सत्यापित करें"),
                    "text": L(
                      "Visit the villages in person to check that the data matches what is really happening on the ground.",
                      "यह जाँचने के लिए गाँवों का खुद दौरा करें कि डेटा उससे मेल खाता है जो असल में ज़मीन पर हो रहा है।"
                    )
                  },
                  {
                    "label": L("3. Decide the Setup", "3. व्यवस्था तय करें"),
                    "text": L(
                      "Based on milk availability, decide the chilling mode (Cluster BMC or MCC) and its capacity.",
                      "दूध की उपलब्धता के आधार पर, चिलिंग मोड (क्लस्टर BMC या MCC) और उसकी क्षमता तय करें।"
                    )
                  },
                  {
                    "label": L("4. Appoint and Follow Up", "4. नियुक्त करें और अनुवर्तन करें"),
                    "text": L(
                      "Identify a party to build the facility, issue a Letter of Intent with a timeline, then follow up regularly until it opens.",
                      "सुविधा बनाने के लिए एक पक्ष की पहचान करें, समय-सीमा के साथ एक इरादा पत्र जारी करें, फिर खुलने तक नियमित रूप से अनुवर्तन करें।"
                    )
                  }
                ]
              },
              {
                "type": "glossary",
                "term": L("Secondary Data", "द्वितीयक डेटा (Secondary Data)"),
                "meaning": L(
                  "Information that is already collected by someone else — like a government survey — that gives you a starting point before you visit a village yourself.",
                  "वह जानकारी जो किसी और ने पहले से इकट्ठा की है — जैसे एक सरकारी सर्वेक्षण — जो आपको खुद गाँव जाने से पहले एक शुरुआती बिंदु देती है।"
                )
              },
              {
                "type": "glossary",
                "term": L("LOI (Letter of Intent)", "LOI (इरादा पत्र)"),
                "meaning": L(
                  "A written letter stating that the organisation intends to work with a certain party — a person or a company — to build or run the facility, along with an agreed timeline.",
                  "एक लिखित पत्र जिसमें बताया जाता है कि संगठन एक तय समय-सीमा के साथ सुविधा बनाने या चलाने के लिए किसी खास पक्ष — व्यक्ति या कंपनी — के साथ काम करने का इरादा रखता है।"
                )
              },
              {
                "type": "callout",
                "style": "tip",
                "heading": L("Don't Skip the Follow-Up", "अनुवर्तन न छोड़ें"),
                "text": L(
                  "Issuing the LOI is not the end of the job. Someone must regularly check progress, so the chilling facility opens on time — not months late.",
                  "LOI जारी करना काम का अंत नहीं है। किसी को नियमित रूप से प्रगति जाँचनी चाहिए, ताकि चिलिंग सुविधा समय पर खुले — महीनों देरी से नहीं।"
                )
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": L("What usually happens right after secondary data is gathered?", "द्वितीयक डेटा इकट्ठा करने के तुरंत बाद आमतौर पर क्या होता है?"),
                "options": [
                  L("The MPP opens immediately", "MPP तुरंत खुल जाता है"),
                  L("Villages are visited in person to check the data on the ground", "ज़मीन पर डेटा जाँचने के लिए गाँवों का खुद दौरा किया जाता है"),
                  L("Milk rates are announced", "दूध की दरें घोषित की जाती हैं"),
                  L("A health camp is held", "एक स्वास्थ्य शिविर आयोजित किया जाता है")
                ],
                "answer": 1,
                "explain": L(
                  "After gathering secondary data, the next step is visiting villages in person to validate that the information is accurate.",
                  "द्वितीयक डेटा इकट्ठा करने के बाद, अगला चरण है गाँवों का खुद दौरा करके यह सत्यापित करना कि जानकारी सही है।"
                )
              },
              {
                "type": "truefalse",
                "q": L("Once the LOI is issued, no more follow-up is needed.", "LOI जारी होने के बाद, आगे किसी अनुवर्तन की ज़रूरत नहीं है।"),
                "answer": false,
                "explain": L(
                  "Regular follow-up after the LOI is issued is essential, so the facility actually opens on time.",
                  "LOI जारी होने के बाद नियमित अनुवर्तन ज़रूरी है, ताकि सुविधा असल में समय पर खुले।"
                )
              }
            ]
          },
          {
            "id": "t-choosing-sahayak",
            "title": L("Choosing the Village and the Sahayak", "गाँव और सहायक चुनना"),
            "teach": [
              {
                "type": "text",
                "heading": L("The Right Village", "सही गाँव"),
                "html": L(
                  "Before finalising anything, a village-level meeting is held with farmers to explain the plan and see how much interest there really is.",
                  "कुछ भी अंतिम रूप देने से पहले, योजना समझाने और यह देखने के लिए कि असल में कितनी दिलचस्पी है, किसानों के साथ एक गाँव-स्तरीय बैठक की जाती है।"
                )
              },
              {
                "type": "text",
                "heading": L("Choosing the MPP's Exact Location Within the Village", "गाँव के भीतर MPP की सही जगह चुनना"),
                "html": L(
                  "Even after a village is chosen, the exact spot for the MPP matters. It should be <b>convenient</b> for the most members, easy for the milk-collection vehicle to reach, and already <b>clean and tidy</b>.",
                  "एक गाँव चुनने के बाद भी, MPP की सही जगह मायने रखती है। यह ज़्यादातर सदस्यों के लिए <b>सुविधाजनक</b>, दूध-संग्रह वाहन के लिए आसान पहुँच वाली, और पहले से <b>साफ़-सुथरी</b> होनी चाहिए।"
                )
              },
              {
                "type": "stat-grid",
                "items": [
                  {
                    "label": L("Convenient Location", "सुविधाजनक जगह"),
                    "text": L(
                      "Easy to reach for the largest possible number of member farmers, not just a few living nearby.",
                      "सिर्फ पास रहने वाले कुछ किसानों के लिए नहीं, बल्कि ज़्यादा से ज़्यादा सदस्य किसानों के लिए आसान पहुँच।"
                    )
                  },
                  {
                    "label": L("Vehicle Access", "वाहन पहुँच"),
                    "text": L(
                      "The inward vehicle that collects milk must be able to reach and turn around easily, even early in the morning.",
                      "दूध इकट्ठा करने वाला वाहन आसानी से पहुँच और घूम सके, सुबह जल्दी भी।"
                    )
                  },
                  {
                    "label": L("Clean & Tidy", "साफ़ और सुव्यवस्थित"),
                    "text": L(
                      "The site should already be clean, because milk is a food product and hygiene starts with the location itself.",
                      "जगह पहले से साफ़ होनी चाहिए, क्योंकि दूध एक खाद्य उत्पाद है और स्वच्छता जगह से ही शुरू होती है।"
                    )
                  }
                ]
              },
              {
                "type": "text",
                "heading": L("Finding the Right Sahayak", "सही सहायक ढूँढना"),
                "html": L(
                  "Along with choosing the location, the organisation looks for a good <b>Sahayak candidate</b> from the village — someone locally trusted, available both morning and evening, honest, and comfortable talking with people.",
                  "जगह चुनने के साथ-साथ, संगठन गाँव से एक अच्छे <b>सहायक उम्मीदवार</b> की तलाश करता है — कोई स्थानीय रूप से भरोसेमंद, सुबह-शाम दोनों समय उपलब्ध, ईमानदार, और लोगों से बात करने में सहज।"
                )
              },
              {
                "type": "example",
                "heading": L("Structure of a Good MPP", "एक अच्छे MPP की संरचना"),
                "text": L(
                  "A well-built MPP has accessible, well-designed infrastructure; a clean and hygienic environment; and clear communication — for example, a notice board showing that day's milk rate, so every farmer can see it for themselves.",
                  "एक अच्छी तरह बना MPP में सुलभ, अच्छी तरह डिज़ाइन किया गया ढाँचा; एक साफ़ और स्वच्छ माहौल; और स्पष्ट संचार होता है — जैसे, उस दिन की दूध दर दिखाने वाला एक नोटिस बोर्ड, ताकि हर किसान इसे खुद देख सके।"
                )
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": L("Which of these is NOT one of the location criteria mentioned for placing an MPP?", "MPP रखने के लिए बताए गए स्थान मानदंडों में से इनमें से कौन-सा नहीं है?"),
                "options": [
                  L("Convenient for the maximum number of members", "अधिकतम सदस्यों के लिए सुविधाजनक"),
                  L("Easy access for the inward vehicle", "आने वाले वाहन के लिए आसान पहुँच"),
                  L("Clean and tidy locality", "साफ़ और सुव्यवस्थित इलाका"),
                  L("Located exactly at the centre of the district", "ठीक ज़िले के केंद्र में स्थित")
                ],
                "answer": 3,
                "explain": L(
                  "The criteria mentioned are convenience for members, vehicle access, and cleanliness — not distance to the district centre.",
                  "बताए गए मानदंड हैं सदस्यों के लिए सुविधा, वाहन पहुँच, और स्वच्छता — ज़िला केंद्र की दूरी नहीं।"
                )
              },
              {
                "type": "truefalse",
                "q": L(
                  "A village-level meeting with farmers is held to explain the plan before finalising an MPP in that village.",
                  "उस गाँव में MPP को अंतिम रूप देने से पहले योजना समझाने के लिए किसानों के साथ एक गाँव-स्तरीय बैठक की जाती है।"
                ),
                "answer": true,
                "explain": L(
                  "A village-level meeting helps explain the plan to farmers and gauge their interest before the MPP is finalised.",
                  "एक गाँव-स्तरीय बैठक MPP को अंतिम रूप देने से पहले किसानों को योजना समझाने और उनकी दिलचस्पी नापने में मदद करती है।"
                )
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
              "q": L("What is an LOI?", "LOI क्या है?"),
              "options": [
                L("A type of milk can", "दूध के कैन का एक प्रकार"),
                L("A written letter stating intent to work with a party, with a timeline", "एक तय समय-सीमा के साथ किसी पक्ष के साथ काम करने का इरादा बताने वाला लिखित पत्र"),
                L("A government census report", "एक सरकारी जनगणना रिपोर्ट"),
                L("A type of chilling machine", "चिलिंग मशीन का एक प्रकार")
              ],
              "answer": 1,
              "explain": L(
                "An LOI (Letter of Intent) is a written statement of intent to work with a chosen party, along with an agreed timeline.",
                "एक LOI (इरादा पत्र) एक तय समय-सीमा के साथ चुने गए पक्ष के साथ काम करने के इरादे का लिखित बयान है।"
              )
            },
            {
              "topicId": "t-choosing-sahayak",
              "type": "mcq",
              "q": L("Besides being locally trusted, what else matters when choosing a Sahayak candidate?", "स्थानीय रूप से भरोसेमंद होने के अलावा, सहायक उम्मीदवार चुनते समय और क्या मायने रखता है?"),
              "options": [
                L("Being available both morning and evening, and comfortable with people", "सुबह-शाम दोनों समय उपलब्ध होना, और लोगों के साथ सहज होना"),
                L("Owning the most animals in the village", "गाँव में सबसे ज़्यादा पशु रखना"),
                L("Being related to the Management Committee", "प्रबंधन समिति से रिश्तेदार होना"),
                L("Living farthest from the MPP site", "MPP जगह से सबसे दूर रहना")
              ],
              "answer": 0,
              "explain": L(
                "A good Sahayak candidate should be locally trusted, available at both collection times, honest, and good with people.",
                "एक अच्छा सहायक उम्मीदवार स्थानीय रूप से भरोसेमंद, दोनों संग्रह समय पर उपलब्ध, ईमानदार, और लोगों के साथ अच्छा होना चाहिए।"
              )
            }
          ]
        }
      },
      {
        "id": "m8-l3",
        "title": L("Planning Milk Collection Routes", "दूध संग्रह मार्गों की योजना बनाना"),
        "estMinutes": 7,
        "hook": [
          {
            "type": "hero",
            "heading": L("Planning Milk Collection Routes", "दूध संग्रह मार्गों की योजना बनाना"),
            "text": L(
              "Once MPPs are set up, milk still has to travel from each village to the chilling centre — fresh, and on time. That is route planning.",
              "MPP स्थापित होने के बाद भी, दूध को हर गाँव से चिलिंग सेंटर तक जाना होता है — ताज़ा, और समय पर। यही मार्ग योजना है।"
            )
          }
        ],
        "topics": [
          {
            "id": "t-route-goals",
            "title": L("What Good Route Planning Achieves", "अच्छी मार्ग योजना क्या हासिल करती है"),
            "teach": [
              {
                "type": "text",
                "heading": L("Four Things a Good Route Must Do", "चार चीज़ें जो एक अच्छे मार्ग को करनी चाहिए"),
                "html": L(
                  "A milk collection route is not just about connecting villages by road. A good route is planned to achieve four things together.",
                  "एक दूध संग्रह मार्ग सिर्फ सड़क से गाँवों को जोड़ने की बात नहीं है। एक अच्छा मार्ग साथ में चार चीज़ें हासिल करने के लिए योजनाबद्ध होता है।"
                )
              },
              {
                "type": "stat-grid",
                "items": [
                  {
                    "label": L("Maintain Milk Quality", "दूध की गुणवत्ता बनाए रखना"),
                    "text": L(
                      "The shorter and better-planned the journey, the fresher the milk stays by the time it reaches the chilling centre.",
                      "यात्रा जितनी छोटी और बेहतर योजनाबद्ध होगी, चिलिंग सेंटर पहुँचने तक दूध उतना ही ताज़ा रहेगा।"
                    )
                  },
                  {
                    "label": L("Timely Collection", "समय पर संग्रह"),
                    "text": L(
                      "Milk must be picked up at a fixed, predictable time every day, so farmers know exactly when to be ready.",
                      "दूध को हर दिन एक तय, अनुमानित समय पर उठाया जाना चाहिए, ताकि किसान ठीक-ठीक जानें कि कब तैयार रहना है।"
                    )
                  },
                  {
                    "label": L("Minimise Transport Cost", "परिवहन लागत कम करना"),
                    "text": L(
                      "The route should avoid unnecessary distance or repeated trips, saving fuel and vehicle cost.",
                      "मार्ग को अनावश्यक दूरी या बार-बार यात्राओं से बचना चाहिए, जिससे ईंधन और वाहन लागत बचे।"
                    )
                  },
                  {
                    "label": L("Optimal Time at MPP", "MPP पर उचित समय"),
                    "text": L(
                      "The vehicle should not sit too long at any one MPP, so it can complete the whole route without milk waiting around and losing freshness.",
                      "वाहन को किसी एक MPP पर ज़्यादा देर नहीं रुकना चाहिए, ताकि वह पूरा मार्ग बिना दूध को इंतज़ार कराए और ताज़गी खोए बिना पूरा कर सके।"
                    )
                  }
                ]
              },
              {
                "type": "callout",
                "style": "warning",
                "heading": L("Why This Matters", "यह क्यों मायने रखता है"),
                "text": L(
                  "Milk starts losing quality soon after it leaves the animal, especially in the heat. A poorly planned route — one that is too long or wastes time — can spoil milk before it even reaches the chilling centre.",
                  "पशु से निकलने के तुरंत बाद दूध की गुणवत्ता कम होने लगती है, खासकर गर्मी में। एक खराब योजनाबद्ध मार्ग — जो बहुत लंबा हो या समय बर्बाद करे — दूध को चिलिंग सेंटर पहुँचने से पहले ही खराब कर सकता है।"
                )
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": L("Why does a route need timely, predictable collection?", "एक मार्ग को समय पर, अनुमानित संग्रह की ज़रूरत क्यों है?"),
                "options": [
                  L("So the vehicle can visit more villages than planned", "ताकि वाहन योजना से ज़्यादा गाँवों का दौरा कर सके"),
                  L("So farmers know exactly when to be ready with their milk", "ताकि किसान ठीक-ठीक जानें कि अपने दूध के साथ कब तैयार रहना है"),
                  L("So drivers can take longer breaks", "ताकि ड्राइवर लंबे ब्रेक ले सकें"),
                  L("It does not really matter", "इससे असल में कोई फ़र्क नहीं पड़ता")
                ],
                "answer": 1,
                "explain": L(
                  "A fixed, predictable collection time lets farmers plan around it and have their milk ready when the vehicle arrives.",
                  "एक तय, अनुमानित संग्रह समय किसानों को उसके अनुसार योजना बनाने और वाहन आने पर दूध तैयार रखने देता है।"
                )
              },
              {
                "type": "truefalse",
                "q": L(
                  "A vehicle spending too long at one MPP can cause milk collected earlier on the route to lose freshness.",
                  "एक वाहन का किसी एक MPP पर ज़्यादा देर रुकना मार्ग में पहले इकट्ठा किए गए दूध की ताज़गी खोने का कारण बन सकता है।"
                ),
                "answer": true,
                "explain": L(
                  "Time adds up along the whole route. Delays at any one stop can affect how fresh the milk collected earlier still is by the end.",
                  "पूरे मार्ग में समय जुड़ता जाता है। किसी एक पड़ाव पर देरी असर डाल सकती है कि पहले इकट्ठा दूध अंत तक कितना ताज़ा रहता है।"
                )
              }
            ]
          },
          {
            "id": "t-route-practice",
            "title": L("Planning a Route in Practice", "व्यवहार में एक मार्ग की योजना बनाना"),
            "teach": [
              {
                "type": "text",
                "heading": L("Using the Village Survey", "गाँव सर्वेक्षण का उपयोग करना"),
                "html": L(
                  "Once village-to-village distances are collected during the survey, the route can actually be planned. A road map of the whole area, showing villages and the BMC/MCC positions, is prepared so the sequence of stops is clear.",
                  "सर्वेक्षण के दौरान गाँव-से-गाँव की दूरियाँ इकट्ठा होने के बाद, असल में मार्ग की योजना बनाई जा सकती है। पूरे क्षेत्र का एक सड़क मानचित्र, जिसमें गाँव और BMC/MCC की स्थिति दिखाई गई हो, तैयार किया जाता है ताकि पड़ावों का क्रम स्पष्ट हो।"
                )
              },
              {
                "type": "example",
                "heading": L("A Simple Route Example", "एक सरल मार्ग उदाहरण"),
                "text": L(
                  "Villages A, B and C sit on the same road, about 3 km apart from each other. Village D is 6 km off the main road, with far fewer farmers. Instead of driving out to D first and doubling back, the route runs A, then B, then C in a straight line — and D is only added if there is enough milk there to be worth the extra time, or it gets a separate, smaller route.",
                  "गाँव A, B और C एक ही सड़क पर हैं, एक-दूसरे से लगभग 3 किमी दूर। गाँव D मुख्य सड़क से 6 किमी हटकर है, जहाँ किसान कहीं कम हैं। पहले D तक जाकर वापस लौटने के बजाय, मार्ग A, फिर B, फिर C में सीधी रेखा में चलता है — और D को तभी जोड़ा जाता है जब वहाँ इतना दूध हो कि अतिरिक्त समय उचित लगे, या उसे एक अलग, छोटा मार्ग दिया जाता है।"
                )
              },
              {
                "type": "text",
                "heading": L("Balancing Speed and Coverage", "गति और कवरेज में संतुलन"),
                "html": L(
                  "Whoever plans the route has to balance two things: covering as many villages as possible, without making the total trip so long that milk collected first spoils before the vehicle even reaches the chilling centre.",
                  "जो कोई भी मार्ग की योजना बनाता है उसे दो चीज़ों में संतुलन बनाना होता है: ज़्यादा से ज़्यादा गाँवों को कवर करना, बिना कुल यात्रा को इतना लंबा बनाए कि पहले इकट्ठा दूध वाहन के चिलिंग सेंटर पहुँचने से पहले ही खराब हो जाए।"
                )
              },
              {
                "type": "callout",
                "style": "tip",
                "heading": L("Review Routes Regularly", "मार्गों की नियमित समीक्षा करें"),
                "text": L(
                  "As farmers join or leave, or milk volume in a village grows, routes should be reviewed and adjusted. A route planned once does not have to stay fixed forever.",
                  "जैसे-जैसे किसान जुड़ते या छोड़ते हैं, या गाँव में दूध की मात्रा बढ़ती है, मार्गों की समीक्षा और समायोजन होना चाहिए। एक बार बनाया गया मार्ग हमेशा के लिए तय नहीं रहना चाहिए।"
                )
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": L(
                  "In the route example, why is village D only added if it has enough milk, or given a separate route?",
                  "मार्ग उदाहरण में, गाँव D को तभी क्यों जोड़ा जाता है जब उसके पास पर्याप्त दूध हो, या उसे अलग मार्ग क्यों दिया जाता है?"
                ),
                "options": [
                  L("Because D has no farmers at all", "क्योंकि D में बिल्कुल कोई किसान नहीं है"),
                  L(
                    "Because visiting D first would mean doubling back, adding time to the whole route",
                    "क्योंकि पहले D जाने का मतलब होगा वापस लौटना, जिससे पूरे मार्ग में समय बढ़ेगा"
                  ),
                  L("Because D does not want an MPP", "क्योंकि D को MPP नहीं चाहिए"),
                  L("Because D is closer than A, B and C", "क्योंकि D, A, B और C से ज़्यादा करीब है")
                ],
                "answer": 1,
                "explain": L(
                  "Village D is off the main road, so reaching it means extra distance and doubling back — worth doing only if there is enough milk to justify the added time.",
                  "गाँव D मुख्य सड़क से हटकर है, इसलिए वहाँ पहुँचने का मतलब है अतिरिक्त दूरी और वापस लौटना — यह तभी उचित है जब अतिरिक्त समय को उचित ठहराने लायक पर्याप्त दूध हो।"
                )
              },
              {
                "type": "truefalse",
                "q": L("Once a milk route is planned, it should never be changed again.", "एक बार दूध मार्ग की योजना बन जाने के बाद, इसे फिर कभी नहीं बदलना चाहिए।"),
                "answer": false,
                "explain": L(
                  "Routes should be reviewed and adjusted over time, as the number of farmers or the amount of milk in a village changes.",
                  "समय के साथ मार्गों की समीक्षा और समायोजन होना चाहिए, जैसे-जैसे किसानों की संख्या या गाँव में दूध की मात्रा बदलती है।"
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
              "topicId": "t-route-goals",
              "type": "mcq",
              "q": L("Which of these is one of the four goals of good route planning?", "इनमें से कौन-सा अच्छी मार्ग योजना के चार लक्ष्यों में से एक है?"),
              "options": [
                L("Maximising transport cost", "परिवहन लागत को अधिकतम करना"),
                L("Minimising transportation cost", "परिवहन लागत को कम करना"),
                L("Making the vehicle wait as long as possible at each stop", "वाहन को हर पड़ाव पर जितना हो सके ज़्यादा देर रोकना"),
                L("Avoiding timely collection", "समय पर संग्रह से बचना")
              ],
              "answer": 1,
              "explain": L(
                "Minimising transportation cost is one of the four goals, along with milk quality, timely collection, and optimal time at the MPP.",
                "दूध गुणवत्ता, समय पर संग्रह, और MPP पर उचित समय के साथ, परिवहन लागत कम करना चार लक्ष्यों में से एक है।"
              )
            },
            {
              "topicId": "t-route-practice",
              "type": "truefalse",
              "q": L(
                "A road map showing villages and BMC/MCC positions helps make the sequence of route stops clear.",
                "गाँवों और BMC/MCC की स्थिति दिखाने वाला एक सड़क मानचित्र मार्ग के पड़ावों के क्रम को स्पष्ट बनाने में मदद करता है।"
              ),
              "answer": true,
              "explain": L(
                "Preparing a road map of the area, with villages and chilling-point positions marked, helps plan a clear and practical route.",
                "क्षेत्र का एक सड़क मानचित्र तैयार करना, जिसमें गाँव और चिलिंग-पॉइंट की स्थिति चिह्नित हो, एक स्पष्ट और व्यावहारिक मार्ग की योजना बनाने में मदद करता है।"
              )
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
    "subtitle": L(
      "Learn how a farmer becomes a registered MPP member, and how daily milk records are kept accurate and fair for everyone.",
      "जानिए कि एक किसान MPP का पंजीकृत सदस्य कैसे बनता है, और रोज़ के दूध रिकॉर्ड को सबके लिए सटीक और न्यायपूर्ण कैसे रखा जाता है।"
    ),
    "icon": "milk",
    "available": true,
    "lessons": [
      {
        "id": "m9-l1",
        "title": L("Enrolling a New Farmer Member", "एक नए किसान सदस्य का नामांकन"),
        "estMinutes": 7,
        "hook": [
          {
            "type": "hero",
            "heading": L("Welcoming a New Member", "एक नए सदस्य का स्वागत"),
            "text": L(
              "Before a farmer can sell even one litre of milk at the MPP, they must first become a registered member. Let's learn how this is done, step by step.",
              "MPP पर एक लीटर दूध भी बेचने से पहले, किसान को पहले एक पंजीकृत सदस्य बनना होता है। आइए सीखें कि यह चरण दर चरण कैसे किया जाता है।"
            )
          }
        ],
        "topics": [
          {
            "id": "t-m9-l1-documents",
            "title": L("What a New Member Must Provide", "एक नए सदस्य को क्या देना होगा"),
            "teach": [
              {
                "type": "text",
                "heading": L("Becoming a Member", "सदस्य बनना"),
                "html": L(
                  "Before a farmer can sell milk at the MPP and get paid, they must first join as a <b>member</b>. This is called <b>enrolment</b>. Enrolment is not just paperwork — it protects both the farmer and the MPO (Milk Producer Organisation).",
                  "MPP पर दूध बेचने और भुगतान पाने से पहले, किसान को पहले <b>सदस्य</b> के रूप में जुड़ना होता है। इसे <b>नामांकन (enrolment)</b> कहते हैं। नामांकन सिर्फ कागज़ी काम नहीं है — यह किसान और MPO (मिल्क प्रोड्यूसर ऑर्गेनाइज़ेशन) दोनों की रक्षा करता है।"
                )
              },
              {
                "type": "glossary",
                "term": L("Enrolment", "नामांकन (Enrolment)"),
                "meaning": L(
                  "The process of officially signing up a farmer as a member of the MPP, so they can supply milk and receive payment for it.",
                  "एक किसान को MPP के सदस्य के रूप में आधिकारिक रूप से जोड़ने की प्रक्रिया, ताकि वे दूध दे सकें और उसका भुगतान पा सकें।"
                )
              },
              {
                "type": "text",
                "heading": L("Basic KYC Details", "बुनियादी KYC विवरण"),
                "html": L(
                  "Every new member must give some basic details about themselves. This is called <b>KYC</b>, which means 'Know Your Customer'. It proves who the farmer really is, before any money changes hands.",
                  "हर नए सदस्य को अपने बारे में कुछ बुनियादी जानकारी देनी होती है। इसे <b>KYC</b> कहते हैं, जिसका मतलब है 'अपने ग्राहक को जानें'। यह साबित करता है कि किसान असल में कौन है, इससे पहले कि कोई पैसा हाथ बदले।"
                )
              },
              {
                "type": "glossary",
                "term": L("KYC (Know Your Customer)", "KYC (अपने ग्राहक को जानें)"),
                "meaning": L(
                  "A simple check of a person's identity using official documents, like Aadhaar. It stops fraud and confirms who is really joining as a member.",
                  "आधार जैसे आधिकारिक दस्तावेज़ों का उपयोग करके किसी व्यक्ति की पहचान की एक सरल जाँच। यह धोखाधड़ी रोकता है और पुष्टि करता है कि सदस्य के रूप में असल में कौन जुड़ रहा है।"
                )
              },
              {
                "type": "stat-grid",
                "items": [
                  {
                    "label": L("Aadhaar Card", "आधार कार्ड"),
                    "text": L(
                      "Proves the farmer's identity and address. A photocopy is kept with the enrolment form.",
                      "किसान की पहचान और पता साबित करता है। इसकी एक फोटोकॉपी नामांकन फॉर्म के साथ रखी जाती है।"
                    )
                  },
                  {
                    "label": L("Bank Account Details", "बैंक खाता विवरण"),
                    "text": L(
                      "The farmer's own bank account number and IFSC code, so milk payments go directly to them — no cash, no middleman.",
                      "किसान का अपना बैंक खाता नंबर और IFSC कोड, ताकि दूध भुगतान सीधे उन्हें मिले — कोई नकदी नहीं, कोई बिचौलिया नहीं।"
                    )
                  },
                  {
                    "label": L("Passport-Size Photo", "पासपोर्ट-साइज़ फोटो"),
                    "text": L(
                      "A recent photo for the membership file and, where used, the member's ID card.",
                      "सदस्यता फ़ाइल के लिए एक हालिया फोटो, और जहाँ उपयोग हो, सदस्य के पहचान पत्र के लिए भी।"
                    )
                  },
                  {
                    "label": L("Animal Details", "पशु विवरण"),
                    "text": L(
                      "How many milk animals the farmer owns (cows or buffaloes), and roughly how much milk each one gives.",
                      "किसान के पास कितने दुधारू पशु हैं (गाय या भैंस), और हर एक लगभग कितना दूध देता है।"
                    )
                  }
                ]
              },
              {
                "type": "callout",
                "style": "tip",
                "heading": L("Why the Bank Account Matters So Much", "बैंक खाता इतना मायने क्यों रखता है"),
                "text": L(
                  "When a farmer's own bank account is on file, payment goes straight to them, automatically, every time. No one else can collect the money on their behalf without their knowledge. This is one of the biggest protections that enrolment gives a farmer.",
                  "जब किसान का अपना बैंक खाता फ़ाइल में हो, तो भुगतान हर बार सीधे, अपने आप उन्हें मिलता है। उनकी जानकारी के बिना कोई और उनकी ओर से पैसा नहीं ले सकता। यह नामांकन द्वारा किसान को दी जाने वाली सबसे बड़ी सुरक्षाओं में से एक है।"
                )
              },
              {
                "type": "example",
                "heading": L("Meet Farmer Lakshmi", "किसान लक्ष्मी से मिलिए"),
                "text": L(
                  "Lakshmi owns two buffaloes and wants to start selling milk at her village MPP. Before she can bring even one litre of milk, the Sahayak asks her for her Aadhaar card, her bank passbook, and details of her animals. Only after this is checked and recorded does she become a registered member.",
                  "लक्ष्मी के पास दो भैंसें हैं और वह अपने गाँव के MPP पर दूध बेचना शुरू करना चाहती है। वह एक लीटर दूध भी लाने से पहले, सहायक उससे उसका आधार कार्ड, बैंक पासबुक, और उसके पशुओं का विवरण माँगता है। इसे जाँचने और दर्ज करने के बाद ही वह एक पंजीकृत सदस्य बनती है।"
                )
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": L(
                  "Why does the MPP collect a farmer's bank account details during enrolment?",
                  "नामांकन के दौरान MPP किसान का बैंक खाता विवरण क्यों इकट्ठा करता है?"
                ),
                "options": [
                  L("So the MPO can lend the farmer money", "ताकि MPO किसान को पैसे उधार दे सके"),
                  L("So milk payment goes directly to the farmer, safely and on time", "ताकि दूध भुगतान सीधे, सुरक्षित रूप से और समय पर किसान को मिले"),
                  L("So the farmer can pay a membership fee", "ताकि किसान सदस्यता शुल्क दे सके"),
                  L("It is not really necessary", "यह असल में ज़रूरी नहीं है")
                ],
                "answer": 1,
                "explain": L(
                  "A farmer's own bank account means payment goes straight to them every time — safe, direct, and on time, with no middleman.",
                  "किसान का अपना बैंक खाता होने का मतलब है भुगतान हर बार सीधे उन्हें मिलता है — सुरक्षित, प्रत्यक्ष, और समय पर, बिना किसी बिचौलिये के।"
                )
              },
              {
                "type": "truefalse",
                "q": L("KYC means checking who a person really is, using documents like Aadhaar.", "KYC का मतलब है आधार जैसे दस्तावेज़ों का उपयोग करके यह जाँचना कि व्यक्ति असल में कौन है।"),
                "answer": true,
                "explain": L(
                  "Correct. KYC stands for 'Know Your Customer' — it confirms the true identity of the person joining as a member.",
                  "सही। KYC का मतलब है 'अपने ग्राहक को जानें' — यह सदस्य के रूप में जुड़ने वाले व्यक्ति की असली पहचान की पुष्टि करता है।"
                )
              }
            ]
          },
          {
            "id": "t-m9-l1-steps",
            "title": L("Steps to Register a Member at the MPP", "MPP पर एक सदस्य को पंजीकृत करने के चरण"),
            "teach": [
              {
                "type": "text",
                "heading": L("From Visit to Registered Member", "मुलाकात से लेकर पंजीकृत सदस्य तक"),
                "html": L(
                  "Enrolling a new member follows the same basic steps at most MPPs across India. Let's walk through them one by one.",
                  "एक नए सदस्य का नामांकन पूरे भारत में ज़्यादातर MPP पर एक जैसे बुनियादी चरणों का पालन करता है। आइए इन्हें एक-एक करके देखें।"
                )
              },
              {
                "type": "text",
                "heading": L("The Five Steps", "पाँच चरण"),
                "html": L(
                  "<b>1. Farmer visits the MPP:</b> The farmer, usually with help from the Sahayak, comes to the MPP to ask about joining.<br><b>2. Fill the enrolment form:</b> Basic details — name, address, family details, and animal details — are written into the official enrolment form.<br><b>3. Collect and verify documents:</b> The Sahayak checks the Aadhaar card and bank passbook copies against the form, to make sure everything matches.<br><b>4. Assign a membership number:</b> Once approved, the farmer gets a unique membership number, or ID. This number is used every single day to record their milk.<br><b>5. Issue a passbook or ID card:</b> The farmer gets their own record book or card, showing their membership number and details.",
                  "<b>1. किसान MPP जाता है:</b> किसान, आमतौर पर सहायक की मदद से, जुड़ने के बारे में पूछने के लिए MPP आता है।<br><b>2. नामांकन फॉर्म भरें:</b> बुनियादी विवरण — नाम, पता, परिवार का विवरण, और पशु विवरण — आधिकारिक नामांकन फॉर्म में लिखे जाते हैं।<br><b>3. दस्तावेज़ इकट्ठा करें और सत्यापित करें:</b> सहायक फॉर्म के मुकाबले आधार कार्ड और बैंक पासबुक की प्रतियाँ जाँचता है, यह सुनिश्चित करने के लिए कि सब कुछ मेल खाता है।<br><b>4. सदस्यता संख्या दें:</b> मंज़ूरी मिलने के बाद, किसान को एक अनोखी सदस्यता संख्या या ID मिलती है। इस संख्या का उपयोग हर दिन उनके दूध को दर्ज करने के लिए होता है।<br><b>5. पासबुक या ID कार्ड जारी करें:</b> किसान को अपनी रिकॉर्ड बुक या कार्ड मिलता है, जिसमें उनकी सदस्यता संख्या और विवरण दिखता है।"
                )
              },
              {
                "type": "glossary",
                "term": L("Membership Number", "सदस्यता संख्या (Membership Number)"),
                "meaning": L(
                  "A unique ID number given to each farmer member. It links every milk record, quality test and payment back to that one farmer.",
                  "हर किसान सदस्य को दी गई एक अनोखी ID संख्या। यह हर दूध रिकॉर्ड, गुणवत्ता जाँच और भुगतान को उसी एक किसान से जोड़ती है।"
                )
              },
              {
                "type": "callout",
                "style": "warning",
                "heading": L("Never Skip Verification", "सत्यापन कभी न छोड़ें"),
                "text": L(
                  "A membership must never be created without checking real documents. Enrolling a person who does not exist, or who is not really the animal owner, can lead to wrong payments and fraud that hurts the whole MPO.",
                  "असली दस्तावेज़ जाँचे बिना कभी सदस्यता नहीं बनानी चाहिए। ऐसे व्यक्ति का नामांकन करना जो असल में मौजूद नहीं है, या जो असल में पशु का मालिक नहीं है, गलत भुगतान और धोखाधड़ी की ओर ले जा सकता है जो पूरी MPO को नुकसान पहुँचाती है।"
                )
              },
              {
                "type": "callout",
                "style": "tip",
                "heading": L("Double-Check Before You Submit", "जमा करने से पहले दोबारा जाँचें"),
                "text": L(
                  "Small mistakes — a wrong Aadhaar number, a misspelled name, a wrong account number — can delay a farmer's very first payment. Always read every detail back to the farmer before finishing enrolment.",
                  "छोटी गलतियाँ — गलत आधार नंबर, ग़लत लिखा नाम, गलत खाता नंबर — किसान के पहले भुगतान में देरी कर सकती हैं। नामांकन पूरा करने से पहले हमेशा हर विवरण किसान को पढ़कर सुनाएँ।"
                )
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": L("What is a membership number mainly used for?", "सदस्यता संख्या मुख्य रूप से किसके लिए उपयोग होती है?"),
                "options": [
                  L("To decide how much land the farmer owns", "यह तय करने के लिए कि किसान के पास कितनी ज़मीन है"),
                  L("To link every milk record, test and payment to one farmer", "हर दूध रिकॉर्ड, जाँच और भुगतान को एक किसान से जोड़ने के लिए"),
                  L("To give the farmer a bank loan", "किसान को बैंक ऋण देने के लिए"),
                  L("It has no real use", "इसका कोई असली उपयोग नहीं है")
                ],
                "answer": 1,
                "explain": L(
                  "Every day's milk record, quality test and payment is linked back to the farmer through their membership number.",
                  "हर दिन का दूध रिकॉर्ड, गुणवत्ता जाँच और भुगतान उनकी सदस्यता संख्या के ज़रिए किसान से जुड़ता है।"
                )
              },
              {
                "type": "truefalse",
                "q": L(
                  "It is fine to register a new member without checking their documents, as long as they seem trustworthy.",
                  "एक नए सदस्य को बिना उनके दस्तावेज़ जाँचे पंजीकृत करना ठीक है, जब तक वे भरोसेमंद लगें।"
                ),
                "answer": false,
                "explain": L(
                  "Every new member's documents must always be verified. Skipping this step can lead to fraud and wrong payments later.",
                  "हर नए सदस्य के दस्तावेज़ों को हमेशा सत्यापित करना चाहिए। इस चरण को छोड़ना बाद में धोखाधड़ी और गलत भुगतान की ओर ले जा सकता है।"
                )
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
              "q": L("Which of these is NOT something a new member usually needs to provide?", "इनमें से क्या एक नए सदस्य को आमतौर पर देने की ज़रूरत नहीं है?"),
              "options": [
                L("Aadhaar card copy", "आधार कार्ड की प्रति"),
                L("Bank account details", "बैंक खाता विवरण"),
                L("A vehicle registration certificate", "एक वाहन पंजीकरण प्रमाणपत्र"),
                L("Animal details", "पशु विवरण")
              ],
              "answer": 2,
              "explain": L(
                "Farmers provide identity proof, bank details and animal details — not a vehicle registration certificate.",
                "किसान पहचान प्रमाण, बैंक विवरण और पशु विवरण देते हैं — वाहन पंजीकरण प्रमाणपत्र नहीं।"
              )
            },
            {
              "topicId": "t-m9-l1-steps",
              "type": "truefalse",
              "q": L(
                "A farmer's membership number is only used once, at the time of joining.",
                "एक किसान की सदस्यता संख्या का उपयोग सिर्फ एक बार, जुड़ने के समय होता है।"
              ),
              "answer": false,
              "explain": L(
                "The membership number is used every day, for every milk record, test and payment — not just once at joining.",
                "सदस्यता संख्या का उपयोग हर दिन, हर दूध रिकॉर्ड, जाँच और भुगतान के लिए होता है — सिर्फ जुड़ने के समय एक बार नहीं।"
              )
            }
          ]
        }
      },
      {
        "id": "m9-l2",
        "title": L("Recording Milk Data Every Day", "हर दिन दूध डेटा दर्ज करना"),
        "estMinutes": 7,
        "hook": [
          {
            "type": "hero",
            "heading": L("Every Drop Counts", "हर बूँद मायने रखती है"),
            "text": L(
              "Once a farmer is enrolled, their real work with the MPP begins — bringing milk, twice a day, every day. Each time, important information must be recorded correctly. Let's see what gets recorded, and why it matters so much.",
              "एक बार किसान नामांकित हो जाए, तो MPP के साथ उनका असली काम शुरू होता है — हर दिन, दिन में दो बार दूध लाना। हर बार, ज़रूरी जानकारी सही तरीके से दर्ज होनी चाहिए। आइए देखें क्या दर्ज होता है, और यह इतना मायने क्यों रखता है।"
            )
          }
        ],
        "topics": [
          {
            "id": "t-m9-l2-what-to-record",
            "title": L("What Gets Recorded at Every Milk Collection", "हर दूध संग्रह में क्या दर्ज होता है"),
            "teach": [
              {
                "type": "text",
                "heading": L("Two Sessions a Day", "दिन में दो सत्र"),
                "html": L(
                  "Farmers bring milk to the MPP twice a day — a <b>morning session</b> and an <b>evening session</b>. Each time, the MPP records details about that day's milk.",
                  "किसान MPP पर दिन में दो बार दूध लाते हैं — एक <b>सुबह का सत्र</b> और एक <b>शाम का सत्र</b>। हर बार, MPP उस दिन के दूध का विवरण दर्ज करता है।"
                )
              },
              {
                "type": "stat-grid",
                "items": [
                  {
                    "label": L("Membership Number", "सदस्यता संख्या"),
                    "text": L(
                      "So the milk is credited to the correct farmer, and nobody else.",
                      "ताकि दूध का श्रेय सही किसान को मिले, किसी और को नहीं।"
                    )
                  },
                  {
                    "label": L("Date and Session", "तारीख और सत्र"),
                    "text": L(
                      "Whether it was the morning or evening collection, and on which date.",
                      "यह सुबह का था या शाम का संग्रह, और किस तारीख को।"
                    )
                  },
                  {
                    "label": L("Quantity (in litres)", "मात्रा (लीटर में)"),
                    "text": L(
                      "How much milk the farmer brought, measured carefully every time.",
                      "किसान कितना दूध लाया, हर बार सावधानी से मापा गया।"
                    )
                  },
                  {
                    "label": L("Quality Test Result", "गुणवत्ता जाँच परिणाम"),
                    "text": L(
                      "The FAT and SNF levels found when the milk is tested — this decides the rate paid per litre.",
                      "दूध जाँचे जाने पर मिले FAT और SNF स्तर — यही प्रति लीटर दी जाने वाली दर तय करते हैं।"
                    )
                  }
                ]
              },
              {
                "type": "example",
                "heading": L("One Entry, Step by Step", "एक प्रविष्टि, चरण दर चरण"),
                "text": L(
                  "Farmer Ramu, membership number 214, brings his milk to the MPP at 7 AM. The Sahayak records: Membership No. 214, today's date, Morning session, Quantity 8 litres, and the test result from the machine. This single entry decides exactly how much Ramu will be paid for that milk.",
                  "किसान रामू, सदस्यता संख्या 214, सुबह 7 बजे अपना दूध MPP पर लाता है। सहायक दर्ज करता है: सदस्यता संख्या 214, आज की तारीख, सुबह का सत्र, मात्रा 8 लीटर, और मशीन से जाँच परिणाम। यह एक प्रविष्टि ठीक-ठीक तय करती है कि उस दूध के लिए रामू को कितना भुगतान मिलेगा।"
                )
              },
              {
                "type": "callout",
                "style": "info",
                "heading": L("Why Twice a Day?", "दिन में दो बार क्यों?"),
                "text": L(
                  "Milking happens twice a day, so records are also made twice a day. This keeps payments accurate and matches what the animal actually produced, session by session.",
                  "दूध दुहना दिन में दो बार होता है, इसलिए रिकॉर्ड भी दिन में दो बार बनते हैं। इससे भुगतान सटीक रहता है और सत्र-दर-सत्र वास्तविक उत्पादन से मेल खाता है।"
                )
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": L("Which of these is recorded every time a farmer brings milk?", "जब भी किसान दूध लाता है, इनमें से क्या दर्ज होता है?"),
                "options": [
                  L("The farmer's favourite crop", "किसान की पसंदीदा फसल"),
                  L("Membership number, quantity and quality test result", "सदस्यता संख्या, मात्रा और गुणवत्ता जाँच परिणाम"),
                  L("The farmer's shoe size", "किसान के जूते का साइज़"),
                  L("The weather forecast for next week", "अगले हफ्ते का मौसम पूर्वानुमान")
                ],
                "answer": 1,
                "explain": L(
                  "Every milk collection is recorded with the farmer's membership number, the quantity, and the quality test result.",
                  "हर दूध संग्रह किसान की सदस्यता संख्या, मात्रा, और गुणवत्ता जाँच परिणाम के साथ दर्ज होता है।"
                )
              },
              {
                "type": "truefalse",
                "q": L("Milk is usually collected and recorded only once a day.", "दूध आमतौर पर दिन में सिर्फ एक बार इकट्ठा और दर्ज होता है।"),
                "answer": false,
                "explain": L(
                  "Milk is collected and recorded twice a day — morning and evening — because animals are milked twice a day.",
                  "दूध दिन में दो बार इकट्ठा और दर्ज होता है — सुबह और शाम — क्योंकि पशुओं का दूध दिन में दो बार दुहा जाता है।"
                )
              }
            ]
          },
          {
            "id": "t-m9-l2-mistakes",
            "title": L("Common Data Mistakes — and Why They Matter", "आम डेटा गलतियाँ — और वे क्यों मायने रखती हैं"),
            "teach": [
              {
                "type": "text",
                "heading": L("Why Accuracy Protects Everyone", "सटीकता सबकी रक्षा क्यों करती है"),
                "html": L(
                  "Good record-keeping is not just paperwork. It is what makes sure every farmer gets paid exactly what they earned — no more, no less. A single wrong entry can cause a real problem for a real family.",
                  "अच्छी रिकॉर्ड-कीपिंग सिर्फ कागज़ी काम नहीं है। यह सुनिश्चित करती है कि हर किसान को ठीक उतना भुगतान मिले जितना उसने कमाया — न ज़्यादा, न कम। एक गलत प्रविष्टि एक असली परिवार के लिए असली समस्या बन सकती है।"
                )
              },
              {
                "type": "stat-grid",
                "items": [
                  {
                    "label": L("Wrong Membership Number", "गलत सदस्यता संख्या"),
                    "text": L(
                      "Milk gets credited to the wrong farmer, so one person is underpaid while another is overpaid.",
                      "दूध का श्रेय गलत किसान को मिलता है, इसलिए एक को कम और दूसरे को ज़्यादा भुगतान होता है।"
                    )
                  },
                  {
                    "label": L("Illegible Handwriting", "अस्पष्ट लिखावट"),
                    "text": L(
                      "If numbers cannot be read clearly later, mistakes creep in when payments are calculated.",
                      "अगर बाद में संख्याएँ स्पष्ट रूप से नहीं पढ़ी जा सकतीं, तो भुगतान की गणना करते समय गलतियाँ हो जाती हैं।"
                    )
                  },
                  {
                    "label": L("Delayed or Skipped Entries", "देरी से या छूटी हुई प्रविष्टियाँ"),
                    "text": L(
                      "If an entry is not made right away, details can be forgotten or guessed — and guessing is never accurate.",
                      "अगर प्रविष्टि तुरंत नहीं की जाती, तो विवरण भूले जा सकते हैं या अंदाज़े से लिखे जा सकते हैं — और अंदाज़ा कभी सटीक नहीं होता।"
                    )
                  },
                  {
                    "label": L("Mixing Up Sessions", "सत्रों को गड़बड़ा देना"),
                    "text": L(
                      "Recording an evening collection as morning (or the other way around) can confuse the whole day's record.",
                      "शाम के संग्रह को सुबह के रूप में दर्ज करना (या इसका उल्टा) पूरे दिन के रिकॉर्ड को उलझा सकता है।"
                    )
                  }
                ]
              },
              {
                "type": "callout",
                "style": "warning",
                "heading": L("A Small Mistake, A Big Problem", "एक छोटी गलती, एक बड़ी समस्या"),
                "text": L(
                  "Even one wrong digit in a membership number or quantity can mean a farmer does not get paid correctly. Repeated mistakes can also make farmers lose trust in the MPP.",
                  "सदस्यता संख्या या मात्रा में एक भी गलत अंक का मतलब हो सकता है कि किसान को सही भुगतान न मिले। बार-बार होने वाली गलतियाँ किसानों का MPP पर भरोसा भी खत्म कर सकती हैं।"
                )
              },
              {
                "type": "callout",
                "style": "tip",
                "heading": L("Good Habits for Accurate Records", "सटीक रिकॉर्ड के लिए अच्छी आदतें"),
                "text": L(
                  "Record every entry immediately, right at the time of collection. Read the membership number and quantity back to the farmer before moving to the next person. Keep the register neat and clear, so anyone can check it later.",
                  "संग्रह के समय ही तुरंत हर प्रविष्टि दर्ज करें। अगले व्यक्ति की ओर बढ़ने से पहले सदस्यता संख्या और मात्रा किसान को पढ़कर सुनाएँ। रजिस्टर को साफ़-सुथरा और स्पष्ट रखें, ताकि कोई भी इसे बाद में जाँच सके।"
                )
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": L("What can happen if a farmer's membership number is entered wrong?", "अगर किसान की सदस्यता संख्या गलत दर्ज हो जाए तो क्या हो सकता है?"),
                "options": [
                  L("Nothing, it does not matter", "कुछ नहीं, इससे कोई फ़र्क नहीं पड़ता"),
                  L("Milk gets credited to the wrong farmer, causing wrong payments", "दूध का श्रेय गलत किसान को मिलता है, जिससे गलत भुगतान होता है"),
                  L("The MPP closes for the day", "MPP उस दिन बंद हो जाता है"),
                  L("The milk quality improves", "दूध की गुणवत्ता सुधर जाती है")
                ],
                "answer": 1,
                "explain": L(
                  "A wrong membership number means the milk — and the payment for it — goes to the wrong person's record.",
                  "गलत सदस्यता संख्या का मतलब है दूध — और उसका भुगतान — गलत व्यक्ति के रिकॉर्ड में जाता है।"
                )
              },
              {
                "type": "truefalse",
                "q": L(
                  "It is fine to record milk details from memory at the end of the day, instead of at the time of collection.",
                  "संग्रह के समय के बजाय दिन के अंत में याददाश्त से दूध का विवरण दर्ज करना ठीक है।"
                ),
                "answer": false,
                "explain": L(
                  "Details should be recorded immediately. Waiting and relying on memory leads to guesses and mistakes.",
                  "विवरण तुरंत दर्ज होने चाहिए। इंतज़ार करना और याददाश्त पर निर्भर रहना अंदाज़ों और गलतियों की ओर ले जाता है।"
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
              "topicId": "t-m9-l2-what-to-record",
              "type": "mcq",
              "q": L("How many times a day is milk usually collected and recorded at an MPP?", "MPP पर दूध आमतौर पर दिन में कितनी बार इकट्ठा और दर्ज होता है?"),
              "options": [
                L("Once", "एक बार"),
                L("Twice", "दो बार"),
                L("Three times", "तीन बार"),
                L("Only on Sundays", "सिर्फ रविवार को")
              ],
              "answer": 1,
              "explain": L("Milk is collected and recorded twice a day — morning and evening.", "दूध दिन में दो बार इकट्ठा और दर्ज होता है — सुबह और शाम।")
            },
            {
              "topicId": "t-m9-l2-mistakes",
              "type": "mcq",
              "q": L(
                "Why is it important to record milk details immediately, at the time of collection?",
                "संग्रह के समय ही दूध का विवरण तुरंत दर्ज करना क्यों ज़रूरी है?"
              ),
              "options": [
                L("Because the register looks nicer", "क्योंकि रजिस्टर बेहतर दिखता है"),
                L("Because waiting causes mistakes and guessing", "क्योंकि इंतज़ार करने से गलतियाँ और अंदाज़े होते हैं"),
                L("Because farmers prefer to wait", "क्योंकि किसान इंतज़ार करना पसंद करते हैं"),
                L("It is not important", "यह ज़रूरी नहीं है")
              ],
              "answer": 1,
              "explain": L(
                "Recording immediately avoids guesswork and keeps every farmer's payment accurate.",
                "तुरंत दर्ज करना अंदाज़े से बचाता है और हर किसान का भुगतान सटीक रखता है।"
              )
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
    "subtitle": L("Learn why milk is priced on quality, not just quantity — and practice the real maths MPPs use to work out a fair rate.", "जानें कि दूध की कीमत केवल मात्रा नहीं, बल्कि गुणवत्ता के आधार पर क्यों तय होती है — और वह असली गणित सीखें जो MPP उचित दर तय करने के लिए इस्तेमाल करते हैं।"),
    "icon": "milk",
    "available": true,
    "lessons": [
      {
        "id": "m10-l1",
        "title": L("Why FAT and SNF Decide the Price", "FAT और SNF कीमत कैसे तय करते हैं"),
        "estMinutes": 7,
        "hook": [
          {
            "type": "hero",
            "heading": L("Why Isn't Milk Priced Like Water?", "दूध की कीमत पानी जैसी क्यों नहीं होती?"),
            "text": L("Two farmers each bring 10 litres of milk. Do they always get paid the same amount? Not necessarily — and there's a good reason why. Let's find out.", "दो किसान हर एक 10 लीटर दूध लाते हैं। क्या उन्हें हमेशा बराबर पैसा मिलता है? जरूरी नहीं — और इसकी एक अच्छी वजह है। आइए जानते हैं।")
          }
        ],
        "topics": [
          {
            "id": "t-m10-l1-not-just-volume",
            "title": L("Why Milk Isn't Priced by Volume Alone", "केवल मात्रा से दूध की कीमत क्यों तय नहीं होती"),
            "teach": [
              {
                "type": "text",
                "heading": L("Same Litres, Different Value", "बराबर लीटर, अलग मूल्य"),
                "html": L("If milk was priced only by how many litres a farmer brings, there would be no reward for good-quality milk — and no way to stop someone from adding water to increase volume. That is why MPPs price milk mainly on two things found inside it: <b>FAT</b> and <b>SNF</b>.", "अगर दूध की कीमत केवल इस बात पर तय होती कि किसान कितने लीटर लाया है, तो अच्छी गुणवत्ता वाले दूध के लिए कोई इनाम नहीं मिलता — और किसी को मात्रा बढ़ाने के लिए पानी मिलाने से रोकने का कोई तरीका नहीं होता। इसीलिए MPP दूध की कीमत मुख्य रूप से उसमें मौजूद दो चीज़ों पर तय करते हैं: <b>FAT</b> और <b>SNF</b>।")
              },
              {
                "type": "glossary",
                "term": L("FAT", "FAT (वसा)"),
                "meaning": L("The fat content of milk — it is what gives milk its richness, and is used to make butter, ghee and cream. It is measured as a percentage, like 4% or 6%.", "दूध में मौजूद वसा (चिकनाई) की मात्रा — यही दूध को गाढ़ापन देती है, और इसका उपयोग मक्खन, घी और क्रीम बनाने में होता है। इसे प्रतिशत में मापा जाता है, जैसे 4% या 6%।")
              },
              {
                "type": "glossary",
                "term": L("SNF (Solids-Not-Fat)", "SNF (वसा-रहित ठोस पदार्थ)"),
                "meaning": L("Everything solid in milk except fat — mainly protein, milk sugar (lactose) and minerals. It is also measured as a percentage, and matters for products like paneer and milk powder.", "वसा के अलावा दूध में मौजूद हर ठोस पदार्थ — मुख्य रूप से प्रोटीन, दूध की शर्करा (लैक्टोज़) और खनिज। इसे भी प्रतिशत में मापा जाता है, और यह पनीर व मिल्क पाउडर जैसे उत्पादों के लिए महत्वपूर्ण होता है।")
              },
              {
                "type": "stat-grid",
                "items": [
                  {
                    "label": L("FAT — Richness", "FAT — गाढ़ापन"),
                    "text": L("Higher FAT means richer milk, better for ghee and butter. Cow milk is usually lower in FAT; buffalo milk is usually higher.", "अधिक FAT का मतलब है गाढ़ा दूध, जो घी और मक्खन के लिए बेहतर होता है। गाय के दूध में आमतौर पर FAT कम होता है; भैंस के दूध में आमतौर पर ज़्यादा होता है।")
                  },
                  {
                    "label": L("SNF — Solids", "SNF — ठोस पदार्थ"),
                    "text": L("Higher SNF means more protein, minerals and milk sugar — important for the milk's real food value and for products like paneer.", "अधिक SNF का मतलब है ज़्यादा प्रोटीन, खनिज और दूध की शर्करा — जो दूध के असली पोषण मूल्य और पनीर जैसे उत्पादों के लिए महत्वपूर्ण है।")
                  },
                  {
                    "label": L("Testing Before Payment", "भुगतान से पहले जांच"),
                    "text": L("Every farmer's milk is tested for FAT and SNF before the rate is worked out — this is what makes the payment fair.", "दर तय करने से पहले हर किसान के दूध की FAT और SNF के लिए जांच की जाती है — यही भुगतान को उचित बनाता है।")
                  }
                ]
              },
              {
                "type": "callout",
                "style": "info",
                "heading": L("Fair Pay for Real Quality", "असली गुणवत्ता के लिए उचित भुगतान"),
                "text": L("A farmer who feeds their animal well and takes good care of it usually gets milk with higher FAT and SNF — and earns a better rate. This system rewards good care, not just a bigger can of milk.", "जो किसान अपने पशु को अच्छी तरह खिलाता है और उसकी अच्छी देखभाल करता है, उसे आमतौर पर ज़्यादा FAT और SNF वाला दूध मिलता है — और उसे बेहतर दर मिलती है। यह व्यवस्था अच्छी देखभाल को इनाम देती है, न कि केवल बड़ी कैन भर दूध को।")
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": L("What does FAT in milk mainly affect?", "दूध में FAT मुख्य रूप से किस चीज़ को प्रभावित करता है?"),
                "options": [
                  L("The colour of the milk can", "दूध की कैन का रंग"),
                  L("The richness of the milk, used for ghee and butter", "दूध का गाढ़ापन, जो घी और मक्खन के लिए उपयोग होता है"),
                  L("The distance milk travels to the MPP", "दूध MPP तक कितनी दूरी तय करता है"),
                  L("The size of the farmer's herd", "किसान के पशुधन का आकार")
                ],
                "answer": 1,
                "explain": L("FAT is what gives milk its richness, and is used to make products like ghee and butter.", "FAT ही दूध को गाढ़ापन देता है, और इसका उपयोग घी व मक्खन जैसे उत्पाद बनाने में होता है।")
              },
              {
                "type": "truefalse",
                "q": L("SNF stands for 'Solids-Not-Fat' and includes things like protein and milk sugar.", "SNF का मतलब है 'वसा-रहित ठोस पदार्थ' और इसमें प्रोटीन व दूध की शर्करा जैसी चीज़ें शामिल हैं।"),
                "answer": true,
                "explain": L("Correct. SNF covers all the solid parts of milk apart from fat — mainly protein, lactose (milk sugar) and minerals.", "सही। SNF में वसा के अलावा दूध के सभी ठोस हिस्से शामिल हैं — मुख्य रूप से प्रोटीन, लैक्टोज़ (दूध की शर्करा) और खनिज।")
              }
            ]
          },
          {
            "id": "t-m10-l1-factors",
            "title": L("What Makes FAT and SNF Go Up or Down", "FAT और SNF का घटना-बढ़ना किस पर निर्भर करता है"),
            "teach": [
              {
                "type": "text",
                "heading": L("Not Every Litre Is the Same", "हर लीटर एक जैसा नहीं होता"),
                "html": L("FAT and SNF levels are not fixed — they change based on a few real factors. Knowing these helps a Sahayak explain milk rates to farmers clearly.", "FAT और SNF का स्तर स्थिर नहीं होता — यह कुछ वास्तविक कारकों के आधार पर बदलता है। इन्हें जानने से सहायक को किसानों को दूध की दरें स्पष्ट रूप से समझाने में मदद मिलती है।")
              },
              {
                "type": "stat-grid",
                "items": [
                  {
                    "label": L("Species (Cow or Buffalo)", "प्रजाति (गाय या भैंस)"),
                    "text": L("Buffalo milk usually has more FAT (around 6-8%) than cow milk (around 3-4.5%). That is one reason buffalo milk often earns a higher rate per litre.", "भैंस के दूध में आमतौर पर गाय के दूध (लगभग 3-4.5%) की तुलना में ज़्यादा FAT (लगभग 6-8%) होता है। यही एक कारण है कि भैंस के दूध की प्रति लीटर दर अक्सर ज़्यादा होती है।")
                  },
                  {
                    "label": L("Breed", "नस्ल"),
                    "text": L("Some breeds, like local indigenous breeds, can naturally give milk with higher FAT than some high-yield crossbred (HF) cows, even if the crossbred cow gives more total litres.", "कुछ नस्लें, जैसे स्थानीय देसी नस्लें, स्वाभाविक रूप से उच्च उत्पादन वाली संकर (HF) गायों की तुलना में ज़्यादा FAT वाला दूध दे सकती हैं, भले ही संकर गाय कुल मिलाकर ज़्यादा लीटर दूध देती हो।")
                  },
                  {
                    "label": L("Season", "मौसम"),
                    "text": L("FAT and SNF can dip a little in hot summer months and rise in cooler winter months, because animals eat and drink differently.", "गर्मी के महीनों में FAT और SNF थोड़ा कम हो सकता है और ठंड के महीनों में बढ़ सकता है, क्योंकि पशु अलग-अलग तरीके से खाते-पीते हैं।")
                  }
                ]
              },
              {
                "type": "callout",
                "style": "warning",
                "heading": L("Why Adulteration Is Caught", "मिलावट कैसे पकड़ी जाती है"),
                "text": L("Adding water to milk lowers both FAT and SNF, because it dilutes everything in the milk. This is exactly why every sample is tested before payment — it protects honest farmers and the MPO.", "दूध में पानी मिलाने से FAT और SNF दोनों कम हो जाते हैं, क्योंकि इससे दूध की हर चीज़ पतली हो जाती है। इसीलिए भुगतान से पहले हर नमूने की जांच की जाती है — यह ईमानदार किसानों और MPO दोनों की रक्षा करता है।")
              },
              {
                "type": "example",
                "heading": L("Buffalo vs Cow, Same Rate", "भैंस बनाम गाय, समान दर पर"),
                "text": L("At the same fat rate, a buffalo giving 7% FAT milk will earn more per litre than a cow giving 4% FAT milk — because the buffalo's milk has more of what is actually being paid for.", "समान फैट दर पर, 7% FAT वाला दूध देने वाली भैंस, 4% FAT वाला दूध देने वाली गाय की तुलना में प्रति लीटर ज़्यादा कमाएगी — क्योंकि भैंस के दूध में वह चीज़ ज़्यादा है जिसके लिए असल में भुगतान किया जा रहा है।")
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": L("Which of these can cause FAT and SNF to be lower than they should be?", "इनमें से क्या FAT और SNF को उनके सामान्य स्तर से कम कर सकता है?"),
                "options": [
                  L("The farmer's name", "किसान का नाम"),
                  L("Adding water to the milk", "दूध में पानी मिलाना"),
                  L("The colour of the milk can", "दूध की कैन का रंग"),
                  L("The time the Sahayak wakes up", "सहायक के जागने का समय")
                ],
                "answer": 1,
                "explain": L("Adding water dilutes the milk, lowering both its FAT and SNF readings.", "पानी मिलाने से दूध पतला हो जाता है, जिससे उसका FAT और SNF रीडिंग दोनों कम हो जाते हैं।")
              },
              {
                "type": "truefalse",
                "q": L("Buffalo milk usually has lower FAT than cow milk.", "भैंस के दूध में आमतौर पर गाय के दूध से कम FAT होता है।"),
                "answer": false,
                "explain": L("It is the opposite — buffalo milk usually has more FAT (around 6-8%) than cow milk (around 3-4.5%).", "इसका उल्टा सच है — भैंस के दूध में आमतौर पर गाय के दूध (लगभग 3-4.5%) की तुलना में ज़्यादा FAT (लगभग 6-8%) होता है।")
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
              "q": L("Why do MPPs test milk for FAT and SNF before paying farmers?", "MPP किसानों को भुगतान करने से पहले दूध की FAT और SNF जांच क्यों करते हैं?"),
              "options": [
                L("To decide the colour of the milk can", "दूध की कैन का रंग तय करने के लिए"),
                L("To make sure the rate paid matches the real quality of the milk", "यह सुनिश्चित करने के लिए कि भुगतान की गई दर दूध की असली गुणवत्ता से मेल खाती है"),
                L("Because it is required for the animal's health", "क्योंकि यह पशु के स्वास्थ्य के लिए आवश्यक है"),
                L("To count how many farmers are members", "यह गिनने के लिए कि कितने किसान सदस्य हैं")
              ],
              "answer": 1,
              "explain": L("Testing FAT and SNF makes sure farmers are paid fairly, based on the real quality of the milk they brought.", "FAT और SNF की जांच यह सुनिश्चित करती है कि किसानों को उनके लाए दूध की असली गुणवत्ता के आधार पर उचित भुगतान मिले।")
            },
            {
              "topicId": "t-m10-l1-factors",
              "type": "truefalse",
              "q": L("Season can affect the FAT and SNF levels in milk.", "मौसम दूध में FAT और SNF के स्तर को प्रभावित कर सकता है।"),
              "answer": true,
              "explain": L("Yes — FAT and SNF can shift a little between summer and winter, because of changes in what animals eat and drink.", "हां — गर्मी और सर्दी के बीच FAT और SNF थोड़ा बदल सकता है, क्योंकि पशुओं के खाने-पीने में बदलाव आता है।")
            }
          ]
        }
      },
      {
        "id": "m10-l2",
        "title": L("Pricing on Fat Basis — Let's Do the Maths", "फैट आधार पर मूल्य निर्धारण — आइए गणित करें"),
        "estMinutes": 8,
        "hook": [
          {
            "type": "hero",
            "heading": L("Method 1: Pro-Rata Fat Pricing", "तरीका 1: प्रो-रेटा फैट प्राइसिंग"),
            "text": L("This is the simplest pricing method — sometimes called Single-Axis pricing because it looks at just ONE thing: FAT. Let's learn the formula and try it with real numbers.", "यह सबसे सरल मूल्य निर्धारण तरीका है — इसे कभी-कभी सिंगल-एक्सिस प्राइसिंग भी कहा जाता है क्योंकि यह केवल एक चीज़ पर ध्यान देता है: FAT। आइए इसका सूत्र सीखें और असली आंकड़ों से इसे आज़माएं।")
          }
        ],
        "topics": [
          {
            "id": "t-m10-l2-formula",
            "title": L("The Pro-Rata Fat Formula", "प्रो-रेटा फैट का सूत्र"),
            "teach": [
              {
                "type": "text",
                "heading": L("One Simple Formula", "एक सरल सूत्र"),
                "html": L("In <b>Pro-Rata Fat pricing</b> (also called <b>Single-Axis pricing</b>), the price per litre depends only on the milk's FAT percentage and the <b>fat rate</b> the MPO has set. The formula is:<br><b>Price per litre = (FAT% ÷ 100) × Fat Rate</b>", "<b>प्रो-रेटा फैट प्राइसिंग</b> (जिसे <b>सिंगल-एक्सिस प्राइसिंग</b> भी कहते हैं) में, प्रति लीटर कीमत केवल दूध के FAT प्रतिशत और MPO द्वारा तय की गई <b>फैट दर</b> पर निर्भर करती है। सूत्र है:<br><b>प्रति लीटर कीमत = (FAT% ÷ 100) × फैट दर</b>")
              },
              {
                "type": "glossary",
                "term": L("Fat Rate", "फैट दर"),
                "meaning": L("The price the MPO sets for one full kilogram of fat — for example, ₹580 per kg. It is the starting number used to work out what each farmer's milk is worth.", "MPO द्वारा एक पूरे किलोग्राम फैट के लिए तय की गई कीमत — उदाहरण के लिए, ₹580 प्रति किलो। यह वह शुरुआती संख्या है जिससे हर किसान के दूध की कीमत निकाली जाती है।")
              },
              {
                "type": "text",
                "heading": L("Let's Do the Maths Together", "आइए साथ में गणित करें"),
                "html": L("A farmer's milk has FAT of 5.5%, and the fat rate is ₹580 per kg.<br>Price per litre = (5.5 ÷ 100) × 580 = <b>₹31.90 per litre</b>.", "एक किसान के दूध में FAT 5.5% है, और फैट दर ₹580 प्रति किलो है।<br>प्रति लीटर कीमत = (5.5 ÷ 100) × 580 = <b>₹31.90 प्रति लीटर</b>।")
              },
              {
                "type": "example",
                "heading": L("Try It Yourself — Scaling Up", "खुद आज़माएं — बड़े पैमाने पर"),
                "text": L("If the MPP collects 2,000 litres today, all at this same average FAT, the total paid to farmers is: 2,000 litres × ₹31.90 = ₹63,800 in one day, from milk alone.", "अगर MPP आज 2,000 लीटर दूध इकट्ठा करता है, और सभी का औसत FAT यही है, तो किसानों को कुल भुगतान होगा: 2,000 लीटर × ₹31.90 = ₹63,800 केवल एक दिन में, सिर्फ दूध से।")
              },
              {
                "type": "callout",
                "style": "info",
                "heading": L("Same Formula, Every Time", "हर बार वही सूत्र"),
                "text": L("Whether it's one litre or ten thousand litres, the formula stays exactly the same — only the FAT percentage and the total quantity change.", "चाहे एक लीटर हो या दस हज़ार लीटर, सूत्र बिल्कुल वही रहता है — केवल FAT प्रतिशत और कुल मात्रा बदलती है।")
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": L("A farmer's milk has 7% FAT. The fat rate is ₹500 per kg. What is the price per litre?", "एक किसान के दूध में 7% FAT है। फैट दर ₹500 प्रति किलो है। प्रति लीटर कीमत क्या है?"),
                "options": [
                  L("₹7", "₹7"),
                  L("₹35", "₹35"),
                  L("₹350", "₹350"),
                  L("₹500", "₹500")
                ],
                "answer": 1,
                "explain": L("Price = (7 ÷ 100) × 500 = ₹35 per litre.", "कीमत = (7 ÷ 100) × 500 = ₹35 प्रति लीटर।")
              },
              {
                "type": "mcq",
                "q": L("In the Pro-Rata Fat method, which two numbers decide the price per litre?", "प्रो-रेटा फैट तरीके में, कौन-सी दो संख्याएं प्रति लीटर कीमत तय करती हैं?"),
                "options": [
                  L("The farmer's name and village", "किसान का नाम और गांव"),
                  L("The FAT percentage and the fat rate", "FAT प्रतिशत और फैट दर"),
                  L("The colour of the can and the season", "कैन का रंग और मौसम"),
                  L("The number of members in the MPP", "MPP में सदस्यों की संख्या")
                ],
                "answer": 1,
                "explain": L("Price per litre = (FAT% ÷ 100) × Fat Rate — nothing else is needed for this method.", "प्रति लीटर कीमत = (FAT% ÷ 100) × फैट दर — इस तरीके के लिए और कुछ नहीं चाहिए।")
              }
            ]
          },
          {
            "id": "t-m10-l2-deductions-incentives",
            "title": L("Deductions, Incentives and Comparing Milk Types", "कटौती, प्रोत्साहन और दूध के प्रकारों की तुलना"),
            "teach": [
              {
                "type": "text",
                "heading": L("Not Always a Flat Formula", "हमेशा एक सीधा सूत्र नहीं"),
                "html": L("MPOs often adjust the base price up or down, to reward good quality and discourage poor quality. Let's see two real examples.", "MPO अक्सर आधार कीमत को ऊपर या नीचे समायोजित करते हैं, ताकि अच्छी गुणवत्ता को इनाम दिया जा सके और खराब गुणवत्ता को हतोत्साहित किया जा सके। आइए दो असली उदाहरण देखें।")
              },
              {
                "type": "ledger",
                "heading": L("Example: A Deduction for Low SNF", "उदाहरण: कम SNF के लिए कटौती"),
                "rows": [
                  {
                    "label": L("Base price (6% FAT × ₹600/kg fat rate)", "आधार कीमत (6% FAT × ₹600/किलो फैट दर)"),
                    "amount": "₹36.00"
                  },
                  {
                    "label": L("Deduction for SNF below standard", "मानक से कम SNF के लिए कटौती"),
                    "amount": "−₹1.50"
                  }
                ],
                "total": {
                  "label": L("Final price paid per litre", "प्रति लीटर अंतिम भुगतान की गई कीमत"),
                  "amount": "₹34.50"
                }
              },
              {
                "type": "ledger",
                "heading": L("Example: An Incentive for High FAT", "उदाहरण: उच्च FAT के लिए प्रोत्साहन"),
                "rows": [
                  {
                    "label": L("Base price (6.8% FAT × ₹610/kg fat rate)", "आधार कीमत (6.8% FAT × ₹610/किलो फैट दर)"),
                    "amount": "₹41.48"
                  },
                  {
                    "label": L("Incentive for FAT above 6.5%", "6.5% से अधिक FAT के लिए प्रोत्साहन"),
                    "amount": "+₹2.00"
                  }
                ],
                "total": {
                  "label": L("Final price paid per litre", "प्रति लीटर अंतिम भुगतान की गई कीमत"),
                  "amount": "₹43.48"
                }
              },
              {
                "type": "callout",
                "style": "tip",
                "heading": L("Why Incentives Help Everyone", "प्रोत्साहन सबकी मदद कैसे करते हैं"),
                "text": L("Incentives reward farmers who feed and care for their animals well enough to get richer milk. This encourages better care across the whole village, which means better milk for the MPP too.", "प्रोत्साहन उन किसानों को इनाम देते हैं जो अपने पशुओं को इतनी अच्छी तरह खिलाते और उनकी देखभाल करते हैं कि गाढ़ा दूध मिले। इससे पूरे गांव में बेहतर देखभाल को बढ़ावा मिलता है, जिससे MPP के लिए भी बेहतर दूध मिलता है।")
              },
              {
                "type": "barchart",
                "heading": L("Price per Litre by Milk Type (at ₹620/kg fat rate)", "दूध के प्रकार के अनुसार प्रति लीटर कीमत (₹620/किलो फैट दर पर)"),
                "source": L("Worked example, Pro-Rata Fat method", "हल किया गया उदाहरण, प्रो-रेटा फैट तरीका"),
                "unit": L("₹ per litre", "₹ प्रति लीटर"),
                "data": [
                  {
                    "label": L("Buffalo milk (7.5% FAT)", "भैंस का दूध (7.5% FAT)"),
                    "value": 46.5
                  },
                  {
                    "label": L("Cow milk (4% FAT)", "गाय का दूध (4% FAT)"),
                    "value": 24.8
                  }
                ]
              },
              {
                "type": "text",
                "heading": L("Same Rate, Different Result", "समान दर, अलग परिणाम"),
                "html": L("Both farmers are paid at the exact same fat rate of ₹620 per kg. The buffalo milk earns more per litre only because it naturally has more FAT — not because it is treated differently.", "दोनों किसानों को ठीक उसी ₹620 प्रति किलो फैट दर पर भुगतान किया जाता है। भैंस का दूध केवल इसलिए प्रति लीटर ज़्यादा कमाता है क्योंकि उसमें स्वाभाविक रूप से ज़्यादा FAT है — न कि इसलिए कि उसके साथ अलग व्यवहार किया जाता है।")
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": L("Why does buffalo milk usually earn a higher price per litre than cow milk, at the same fat rate?", "समान फैट दर पर, भैंस के दूध की कीमत आमतौर पर गाय के दूध से ज़्यादा क्यों होती है?"),
                "options": [
                  L("Buffaloes are bigger animals", "भैंसें बड़े पशु होती हैं"),
                  L("Buffalo milk usually has a higher FAT percentage", "भैंस के दूध में आमतौर पर ज़्यादा FAT प्रतिशत होता है"),
                  L("Cow milk is tested less often", "गाय के दूध की जांच कम बार होती है"),
                  L("There is no real difference", "वास्तव में कोई अंतर नहीं है")
                ],
                "answer": 1,
                "explain": L("Since the price depends on FAT%, and buffalo milk usually has more FAT, it earns more per litre at the same fat rate.", "चूंकि कीमत FAT% पर निर्भर करती है, और भैंस के दूध में आमतौर पर ज़्यादा FAT होता है, इसलिए वह समान फैट दर पर प्रति लीटर ज़्यादा कमाता है।")
              },
              {
                "type": "truefalse",
                "q": L("A deduction lowers the base price, and an incentive raises it.", "कटौती आधार कीमत को घटाती है, और प्रोत्साहन उसे बढ़ाता है।"),
                "answer": true,
                "explain": L("Correct — deductions (for issues like low SNF) reduce the price, while incentives (for high FAT) increase it.", "सही — कटौती (जैसे कम SNF के लिए) कीमत घटाती है, जबकि प्रोत्साहन (उच्च FAT के लिए) उसे बढ़ाता है।")
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
              "q": L("A farmer's milk has FAT 5%. The fat rate is ₹500 per kg. What is the price per litre?", "एक किसान के दूध में FAT 5% है। फैट दर ₹500 प्रति किलो है। प्रति लीटर कीमत क्या है?"),
              "options": [
                L("₹5", "₹5"),
                L("₹25", "₹25"),
                L("₹50", "₹50"),
                L("₹500", "₹500")
              ],
              "answer": 1,
              "explain": L("Price = (5 ÷ 100) × 500 = ₹25 per litre.", "कीमत = (5 ÷ 100) × 500 = ₹25 प्रति लीटर।")
            },
            {
              "topicId": "t-m10-l2-deductions-incentives",
              "type": "mcq",
              "q": L("What is the effect of an incentive on the price paid to a farmer?", "किसान को दिए जाने वाले भुगतान पर प्रोत्साहन का क्या प्रभाव पड़ता है?"),
              "options": [
                L("It lowers the price", "यह कीमत को घटाता है"),
                L("It raises the price", "यह कीमत को बढ़ाता है"),
                L("It has no effect", "इसका कोई प्रभाव नहीं पड़ता"),
                L("It changes the FAT test result", "यह FAT जांच के परिणाम को बदलता है")
              ],
              "answer": 1,
              "explain": L("An incentive is an amount added on top of the base price, so it raises what the farmer is paid.", "प्रोत्साहन आधार कीमत के ऊपर जोड़ी जाने वाली राशि है, इसलिए यह किसान को मिलने वाले भुगतान को बढ़ाता है।")
            }
          ]
        }
      },
      {
        "id": "m10-l3",
        "title": L("Pricing on EFU Basis — A Second Method", "EFU आधार पर मूल्य निर्धारण — एक दूसरा तरीका"),
        "estMinutes": 8,
        "hook": [
          {
            "type": "hero",
            "heading": L("Method 2: Equivalent Fat Units (EFU)", "तरीका 2: इक्विवेलेंट फैट यूनिट्स (EFU)"),
            "text": L("The Pro-Rata Fat method looks at FAT alone. This second method — EFU — combines FAT and SNF into one fair number. Let's learn how it works, with real numbers.", "प्रो-रेटा फैट तरीका केवल FAT देखता है। यह दूसरा तरीका — EFU — FAT और SNF को मिलाकर एक उचित संख्या बनाता है। आइए असली आंकड़ों के साथ जानें कि यह कैसे काम करता है।")
          }
        ],
        "topics": [
          {
            "id": "t-m10-l3-efu-formula",
            "title": L("What Is EFU and How Do We Calculate It", "EFU क्या है और इसकी गणना कैसे करें"),
            "teach": [
              {
                "type": "text",
                "heading": L("Combining FAT and SNF", "FAT और SNF को मिलाना"),
                "html": L("<b>EFU</b> stands for <b>Equivalent Fat Units</b>. Instead of looking at FAT alone, it combines FAT and SNF into a single number, so both are rewarded fairly. The formula is:<br><b>EFU = FAT% + (SNF% × 2/3)</b>", "<b>EFU</b> का मतलब है <b>इक्विवेलेंट फैट यूनिट्स</b>। केवल FAT देखने के बजाय, यह FAT और SNF को एक ही संख्या में मिला देता है, ताकि दोनों को उचित रूप से इनाम मिले। सूत्र है:<br><b>EFU = FAT% + (SNF% × 2/3)</b>")
              },
              {
                "type": "glossary",
                "term": L("EFU (Equivalent Fat Units)", "EFU (इक्विवेलेंट फैट यूनिट्स)"),
                "meaning": L("A single number that combines a milk sample's FAT and SNF together, so both can be compared fairly against a standard reference point.", "एक ऐसी संख्या जो दूध के नमूने के FAT और SNF को एक साथ मिला देती है, ताकि दोनों की तुलना एक मानक संदर्भ बिंदु के विरुद्ध उचित रूप से की जा सके।")
              },
              {
                "type": "text",
                "heading": L("Let's Do the Maths Together", "आइए साथ में गणित करें"),
                "html": L("A farmer's milk has FAT 5.5% and SNF 8.6%.<br>EFU = 5.5 + (8.6 × 2/3) = 5.5 + 5.73 = <b>11.23</b>.", "एक किसान के दूध में FAT 5.5% और SNF 8.6% है।<br>EFU = 5.5 + (8.6 × 2/3) = 5.5 + 5.73 = <b>11.23</b>।")
              },
              {
                "type": "example",
                "heading": L("Try It Yourself", "खुद आज़माएं"),
                "text": L("Milk with FAT 6.8% and SNF 9.0%: EFU = 6.8 + (9.0 × 2/3) = 6.8 + 6.0 = 12.8. Many MPOs use 12.5 EFU as the standard base level — so this milk, at 12.8, is slightly ABOVE standard.", "FAT 6.8% और SNF 9.0% वाला दूध: EFU = 6.8 + (9.0 × 2/3) = 6.8 + 6.0 = 12.8। कई MPO 12.5 EFU को मानक आधार स्तर मानते हैं — इसलिए यह दूध, 12.8 पर, मानक से थोड़ा ऊपर है।")
              },
              {
                "type": "callout",
                "style": "info",
                "heading": L("What the Base EFU Means", "आधार EFU का मतलब क्या है"),
                "text": L("12.5 EFU is a common standard reference point. Milk above this base is richer than standard and earns more. Milk below this base earns less.", "12.5 EFU एक सामान्य मानक संदर्भ बिंदु है। इस आधार से ऊपर का दूध मानक से ज़्यादा गाढ़ा होता है और ज़्यादा कमाता है। इस आधार से नीचे का दूध कम कमाता है।")
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": L("What does EFU combine into one number?", "EFU किन दो चीज़ों को एक संख्या में मिलाता है?"),
                "options": [
                  L("FAT and the price of feed", "FAT और चारे की कीमत"),
                  L("FAT and SNF", "FAT और SNF"),
                  L("The farmer's age and animal breed", "किसान की उम्र और पशु की नस्ल"),
                  L("Season and distance to the MPP", "मौसम और MPP की दूरी")
                ],
                "answer": 1,
                "explain": L("EFU (Equivalent Fat Units) combines a milk sample's FAT and SNF into a single number.", "EFU (इक्विवेलेंट फैट यूनिट्स) दूध के नमूने के FAT और SNF को एक ही संख्या में मिलाता है।")
              },
              {
                "type": "mcq",
                "q": L("Milk has FAT 4% and SNF 9%. Using EFU = FAT + (SNF × 2/3), what is its EFU?", "दूध में FAT 4% और SNF 9% है। EFU = FAT + (SNF × 2/3) का उपयोग करके, इसका EFU क्या है?"),
                "options": [
                  L("4", "4"),
                  L("9", "9"),
                  L("10", "10"),
                  L("13", "13")
                ],
                "answer": 2,
                "explain": L("EFU = 4 + (9 × 2/3) = 4 + 6 = 10.", "EFU = 4 + (9 × 2/3) = 4 + 6 = 10।")
              }
            ]
          },
          {
            "id": "t-m10-l3-efu-price",
            "title": L("Using EFU to Work Out the Price", "कीमत निकालने के लिए EFU का उपयोग"),
            "teach": [
              {
                "type": "text",
                "heading": L("From EFU to Rupees", "EFU से रुपयों तक"),
                "html": L("Once we know a farmer's EFU, we compare it to the base EFU to work out the price. The formula is:<br><b>Price per litre = (Farmer's EFU ÷ Base EFU) × Declared Rate</b>", "एक बार जब हमें किसान का EFU पता चल जाता है, तो हम कीमत निकालने के लिए इसकी तुलना आधार EFU से करते हैं। सूत्र है:<br><b>प्रति लीटर कीमत = (किसान का EFU ÷ आधार EFU) × घोषित दर</b>")
              },
              {
                "type": "glossary",
                "term": L("Declared Rate", "घोषित दर"),
                "meaning": L("The price per litre the MPO announces for milk that is exactly at the base EFU (for example, 12.5 EFU). It is the reference price used in the formula.", "वह प्रति लीटर कीमत जो MPO उस दूध के लिए घोषित करता है जो ठीक आधार EFU (उदाहरण के लिए, 12.5 EFU) पर है। यह सूत्र में उपयोग की जाने वाली संदर्भ कीमत है।")
              },
              {
                "type": "text",
                "heading": L("Let's Do the Maths Together", "आइए साथ में गणित करें"),
                "html": L("A farmer's milk has FAT 4.5% and SNF 8.2%. First, find the EFU: EFU = 4.5 + (8.2 × 2/3) = 4.5 + 5.47 = 9.97.<br>The declared rate (for 12.5 EFU) is ₹60 per litre.<br>Price = (9.97 ÷ 12.5) × 60 = <b>₹47.86 per litre</b>.", "एक किसान के दूध में FAT 4.5% और SNF 8.2% है। पहले, EFU निकालें: EFU = 4.5 + (8.2 × 2/3) = 4.5 + 5.47 = 9.97।<br>घोषित दर (12.5 EFU के लिए) ₹60 प्रति लीटर है।<br>कीमत = (9.97 ÷ 12.5) × 60 = <b>₹47.86 प्रति लीटर</b>।")
              },
              {
                "type": "example",
                "heading": L("Try It Yourself", "खुद आज़माएं"),
                "text": L("Milk with FAT 6.0% and SNF 8.8%, declared rate ₹58 per litre: EFU = 6.0 + (8.8 × 2/3) = 6.0 + 5.87 = 11.87. Price = (11.87 ÷ 12.5) × 58 = ₹55.05 per litre.", "FAT 6.0% और SNF 8.8% वाला दूध, घोषित दर ₹58 प्रति लीटर: EFU = 6.0 + (8.8 × 2/3) = 6.0 + 5.87 = 11.87। कीमत = (11.87 ÷ 12.5) × 58 = ₹55.05 प्रति लीटर।")
              },
              {
                "type": "ledger",
                "heading": L("What Happens When SNF Improves?", "SNF सुधरने पर क्या होता है?"),
                "rows": [
                  {
                    "label": L("Price at old SNF (FAT 5.5%, SNF 8.2%)", "पुराने SNF पर कीमत (FAT 5.5%, SNF 8.2%)"),
                    "amount": "₹52.66"
                  },
                  {
                    "label": L("Extra earned per litre from better SNF (8.9%)", "बेहतर SNF (8.9%) से प्रति लीटर अतिरिक्त कमाई"),
                    "amount": "+₹2.20"
                  }
                ],
                "total": {
                  "label": L("New price per litre (FAT 5.5%, SNF 8.9%)", "नई प्रति लीटर कीमत (FAT 5.5%, SNF 8.9%)"),
                  "amount": "₹54.86"
                }
              },
              {
                "type": "callout",
                "style": "tip",
                "heading": L("Why Improving SNF Pays Off", "SNF सुधारने का फायदा क्यों मिलता है"),
                "text": L("Improving SNF — through better feed and animal care — raises the EFU even if FAT stays exactly the same. That means more income for the farmer, without needing a different animal.", "बेहतर चारे और पशु देखभाल के ज़रिए SNF सुधारने से EFU बढ़ता है, भले ही FAT बिल्कुल वही रहे। इसका मतलब है किसान के लिए ज़्यादा आय, बिना किसी दूसरे पशु की ज़रूरत के।")
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": L("Milk has FAT 6.0% and SNF 8.8%, and the declared rate is ₹58 per litre. What is the approximate price per litre?", "दूध में FAT 6.0% और SNF 8.8% है, और घोषित दर ₹58 प्रति लीटर है। लगभग प्रति लीटर कीमत क्या है?"),
                "options": [
                  L("₹48", "₹48"),
                  L("₹55", "₹55"),
                  L("₹58", "₹58"),
                  L("₹65", "₹65")
                ],
                "answer": 1,
                "explain": L("EFU = 6.0 + (8.8 × 2/3) = 11.87. Price = (11.87 ÷ 12.5) × 58 ≈ ₹55.", "EFU = 6.0 + (8.8 × 2/3) = 11.87। कीमत = (11.87 ÷ 12.5) × 58 ≈ ₹55।")
              },
              {
                "type": "truefalse",
                "q": L("Improving SNF, even if FAT stays the same, can increase a farmer's price per litre under the EFU method.", "EFU तरीके के तहत, FAT वही रहने पर भी SNF सुधारने से किसान की प्रति लीटर कीमत बढ़ सकती है।"),
                "answer": true,
                "explain": L("Yes — because EFU includes SNF too, a higher SNF raises the EFU, and therefore the price, even without any change in FAT.", "हां — क्योंकि EFU में SNF भी शामिल है, ज़्यादा SNF से EFU बढ़ता है, और इसलिए कीमत भी बढ़ती है, भले ही FAT में कोई बदलाव न हो।")
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
              "q": L("What is the formula for EFU?", "EFU का सूत्र क्या है?"),
              "options": [
                L("EFU = FAT × SNF", "EFU = FAT × SNF"),
                L("EFU = FAT + (SNF × 2/3)", "EFU = FAT + (SNF × 2/3)"),
                L("EFU = FAT − SNF", "EFU = FAT − SNF"),
                L("EFU = SNF ÷ FAT", "EFU = SNF ÷ FAT")
              ],
              "answer": 1,
              "explain": L("EFU = FAT% + (SNF% × 2/3).", "EFU = FAT% + (SNF% × 2/3)।")
            },
            {
              "topicId": "t-m10-l3-efu-price",
              "type": "mcq",
              "q": L("Under the EFU method, what happens to a farmer's price if their milk's EFU is higher than the base EFU?", "EFU तरीके के तहत, अगर किसान के दूध का EFU आधार EFU से ज़्यादा है, तो उसकी कीमत का क्या होता है?"),
              "options": [
                L("The price is lower than the declared rate", "कीमत घोषित दर से कम होती है"),
                L("The price is exactly the declared rate no matter what", "कीमत हमेशा ठीक घोषित दर के बराबर होती है"),
                L("The price is higher than the declared rate", "कीमत घोषित दर से ज़्यादा होती है"),
                L("EFU has no effect on price", "EFU का कीमत पर कोई प्रभाव नहीं पड़ता")
              ],
              "answer": 2,
              "explain": L("When EFU is above the base (for example, above 12.5), the price paid is higher than the declared rate.", "जब EFU आधार से ऊपर होता है (उदाहरण के लिए, 12.5 से ऊपर), तो भुगतान की गई कीमत घोषित दर से ज़्यादा होती है।")
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
    "subtitle": L("Learn what happens to milk quantity as it travels from farmer to dairy — and how CDA finds and fixes any milk that goes missing along the way.", "जानें कि दूध जब किसान से डेयरी तक पहुंचता है तो उसकी मात्रा के साथ क्या होता है — और CDA रास्ते में गायब हुए किसी भी दूध को कैसे ढूंढता और ठीक करता है।"),
    "icon": "milk",
    "available": true,
    "lessons": [
      {
        "id": "m11-l1",
        "title": L("What Is CDA, and Why Does It Exist?", "CDA क्या है, और यह क्यों मौजूद है?"),
        "estMinutes": 8,
        "hook": [
          {
            "type": "hero",
            "heading": L("What Is CDA?", "CDA क्या है?"),
            "text": L("Every day, milk travels from a farmer's bucket to the dairy plant. Sometimes, a little milk goes missing on the way. In this lesson, you'll learn why that happens — and how CDA helps find and fix it.", "हर दिन, दूध किसान की बाल्टी से डेयरी प्लांट तक जाता है। कभी-कभी, रास्ते में थोड़ा दूध गायब हो जाता है। इस पाठ में, आप सीखेंगे कि ऐसा क्यों होता है — और CDA इसे ढूंढने और ठीक करने में कैसे मदद करता है।")
          }
        ],
        "topics": [
          {
            "id": "t-milk-goes-missing",
            "title": L("The Problem: Milk That Goes Missing", "समस्या: दूध का गायब होना"),
            "teach": [
              {
                "type": "text",
                "heading": L("A Simple Question", "एक सरल सवाल"),
                "html": L("A farmer pours 10 litres of milk into a can at the village Milk Pooling Point, or MPP. That milk then travels — by can, by van, sometimes by tanker — until it reaches the dairy plant. Does the plant always receive exactly 10 litres? Not always. Sometimes a little less arrives. This lesson is about why that happens, and what the dairy does about it.", "एक किसान गांव के मिल्क पूलिंग पॉइंट (MPP) पर एक कैन में 10 लीटर दूध डालता है। वह दूध फिर यात्रा करता है — कैन से, वैन से, कभी-कभी टैंकर से — जब तक कि यह डेयरी प्लांट तक नहीं पहुंचता। क्या प्लांट को हमेशा ठीक 10 लीटर ही मिलता है? हमेशा नहीं। कभी-कभी थोड़ा कम पहुंचता है। यह पाठ इस बारे में है कि ऐसा क्यों होता है, और डेयरी इसके बारे में क्या करती है।")
              },
              {
                "type": "glossary",
                "term": L("MPP (Milk Pooling Point)", "MPP (मिल्क पूलिंग पॉइंट)"),
                "meaning": L("The place in the village where farmers bring their milk every day. Here, the milk is weighed, tested for quality, and written down before it is sent onward.", "गांव में वह जगह जहां किसान हर दिन अपना दूध लाते हैं। यहां, दूध को तौला जाता है, गुणवत्ता के लिए जांचा जाता है, और आगे भेजने से पहले दर्ज किया जाता है।")
              },
              {
                "type": "text",
                "heading": L("Five Reasons Milk Quantity Can Change", "दूध की मात्रा बदलने के पांच कारण"),
                "html": L("Milk quantity recorded at the village can end up different from milk quantity received at the dairy. There are five common reasons for this. Let's look at each one.", "गांव में दर्ज दूध की मात्रा डेयरी में प्राप्त दूध की मात्रा से अलग हो सकती है। इसके पांच सामान्य कारण हैं। आइए हर एक को देखें।")
              },
              {
                "type": "stat-grid",
                "items": [
                  {
                    "label": L("Measurement Mistakes", "माप की गलतियां"),
                    "text": L("A weighing scale that is not set correctly, or a person who writes down the wrong number by mistake, can make the recorded quantity wrong — even if no milk was actually lost.", "ठीक से सेट न किया गया तौल कांटा, या गलती से गलत संख्या लिख देने वाला व्यक्ति, दर्ज मात्रा को गलत बना सकता है — भले ही असल में कोई दूध नहीं खोया हो।")
                  },
                  {
                    "label": L("Spillage on the Way", "रास्ते में गिरना"),
                    "text": L("Milk can spill out of a can or tanker while it is being poured, loaded, or driven over a bumpy road. This is called a handling loss.", "दूध डालते, लादते, या ऊबड़-खाबड़ सड़क पर गाड़ी चलाते समय कैन या टैंकर से बाहर गिर सकता है। इसे हैंडलिंग लॉस (संभाल में हुई क्षति) कहते हैं।")
                  },
                  {
                    "label": L("Milk Taken Without Permission", "बिना अनुमति के दूध निकालना"),
                    "text": L("Sometimes, a small amount of milk is deliberately removed during handling or transport. This is called pilferage, and it is not allowed.", "कभी-कभी, संभालते या ले जाते समय जानबूझकर थोड़ी मात्रा में दूध निकाल लिया जाता है। इसे पिल्फरेज (चोरी) कहते हैं, और यह अनुमति योग्य नहीं है।")
                  },
                  {
                    "label": L("Changes in Fat and SNF", "Fat और SNF में बदलाव"),
                    "text": L("If milk is tested incorrectly, or if water or another substance is mixed into it, the Fat and SNF readings can change — and this affects what the milk is worth, even if the volume looks the same.", "अगर दूध की जांच गलत तरीके से की जाए, या उसमें पानी या कोई और चीज़ मिला दी जाए, तो Fat और SNF की रीडिंग बदल सकती है — और इससे दूध की कीमत प्रभावित होती है, भले ही मात्रा एक जैसी दिखे।")
                  }
                ]
              },
              {
                "type": "callout",
                "style": "warning",
                "heading": L("A Fifth Reason: Gaps on Paper", "पांचवां कारण: कागज़ पर अंतर"),
                "text": L("Sometimes the problem is not the milk at all — it's the paperwork. If the dispatch quantity written down is more than the quantity that was actually tested (the composite quantity), or if entries are delayed or use the wrong units, the numbers will not match — even if every drop of milk arrived safely.", "कभी-कभी समस्या दूध में बिल्कुल नहीं होती — यह कागज़ी कार्रवाई में होती है। अगर लिखी गई डिस्पैच मात्रा असल में जांची गई मात्रा (कंपोज़िट मात्रा) से ज़्यादा है, या अगर एंट्री देर से की जाती है या गलत इकाइयों में की जाती है, तो संख्याएं मेल नहीं खाएंगी — भले ही दूध की हर बूंद सुरक्षित पहुंची हो।")
              },
              {
                "type": "example",
                "heading": L("Think About It", "इस पर सोचें"),
                "text": L("Imagine a Sahayak collects milk in the morning and pours it into a can to send to the chilling centre. If the can's lid is loose, a little milk can spill out on the bumpy village road. Nobody stole it, nobody made a paperwork mistake — but the chilling centre will still receive less milk than was recorded at the village. This is exactly the kind of gap that CDA is designed to catch.", "कल्पना करें कि एक सहायक सुबह दूध इकट्ठा करता है और उसे चिलिंग सेंटर भेजने के लिए एक कैन में डालता है। अगर कैन का ढक्कन ढीला है, तो ऊबड़-खाबड़ गांव की सड़क पर थोड़ा दूध गिर सकता है। न किसी ने चोरी की, न किसी ने कागज़ी गलती की — लेकिन फिर भी चिलिंग सेंटर को गांव में दर्ज दूध से कम दूध मिलेगा। यही वह अंतर है जिसे पकड़ने के लिए CDA बनाया गया है।")
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": L("Which of these is an example of a handling loss?", "इनमें से कौन-सा हैंडलिंग लॉस का उदाहरण है?"),
                "options": [
                  L("Milk spilling out of a can while it is being loaded", "लादते समय कैन से दूध का गिरना"),
                  L("A farmer selling extra milk to a neighbour", "एक किसान द्वारा पड़ोसी को अतिरिक्त दूध बेचना"),
                  L("A cow giving less milk in summer", "गर्मी में गाय का कम दूध देना"),
                  L("A Sahayak's phone running out of battery", "सहायक के फोन की बैटरी खत्म होना")
                ],
                "answer": 0,
                "explain": L("Milk spilling during loading, transfer or transport is called a handling loss — one of the common reasons milk quantity changes between the village and the dairy.", "लादते, स्थानांतरित करते या ले जाते समय दूध का गिरना हैंडलिंग लॉस कहलाता है — गांव और डेयरी के बीच दूध की मात्रा बदलने का एक सामान्य कारण।")
              },
              {
                "type": "truefalse",
                "q": L("Milk quantity can only go missing if someone steals it.", "दूध की मात्रा तभी गायब हो सकती है जब कोई इसे चुराए।"),
                "answer": false,
                "explain": L("Milk quantity can change for many reasons — spillage, measurement mistakes, testing errors and paperwork gaps — not only theft.", "दूध की मात्रा कई कारणों से बदल सकती है — गिरना, माप की गलतियां, जांच में त्रुटियां और कागज़ी अंतर — केवल चोरी से नहीं।")
              }
            ]
          },
          {
            "id": "t-what-cda-does",
            "title": L("What CDA Does About It", "CDA इसके बारे में क्या करता है"),
            "teach": [
              {
                "type": "text",
                "heading": L("Meet CDA", "CDA से मिलें"),
                "html": L("CDA stands for <b>Composite, Dispatch and Actual</b> — the names of three points where milk quantity is written down as it moves from the village to the dairy. By comparing the numbers at these three points, the dairy can find out exactly where — and how much — milk went missing.", "CDA का मतलब है <b>कंपोज़िट, डिस्पैच और एक्चुअल</b> — उन तीन बिंदुओं के नाम जहां दूध की मात्रा दर्ज की जाती है जब यह गांव से डेयरी तक जाता है। इन तीन बिंदुओं की संख्याओं की तुलना करके, डेयरी ठीक-ठीक पता लगा सकती है कि दूध कहां — और कितना — गायब हुआ।")
              },
              {
                "type": "glossary",
                "term": L("CDA (Composite – Dispatch – Actual)", "CDA (कंपोज़िट – डिस्पैच – एक्चुअल)"),
                "meaning": L("A system that compares three numbers: how much milk was recorded at the MPP (Composite), how much was sent out (Dispatch), and how much actually arrived at the chilling centre (Actual). Comparing these numbers helps the dairy find and recover any shortfall.", "एक व्यवस्था जो तीन संख्याओं की तुलना करती है: MPP पर कितना दूध दर्ज हुआ (कंपोज़िट), कितना भेजा गया (डिस्पैच), और चिलिंग सेंटर पर असल में कितना पहुंचा (एक्चुअल)। इन संख्याओं की तुलना करने से डेयरी को किसी भी कमी को ढूंढने और वसूलने में मदद मिलती है।")
              },
              {
                "type": "text",
                "heading": L("Why CDA Matters", "CDA क्यों महत्वपूर्ण है"),
                "html": L("CDA is not about blaming anyone. It exists so that farmers are paid correctly for the milk they actually gave, so the union or company can find exactly where losses are happening — which village, which route, which Sahayak — and fix the problem quickly, and so everyone handling milk is encouraged to be careful and honest, because their numbers are being checked.", "CDA किसी को दोष देने के बारे में नहीं है। यह इसलिए मौजूद है ताकि किसानों को उनके दिए गए असली दूध के लिए सही भुगतान मिले, ताकि संघ या कंपनी ठीक-ठीक पता लगा सके कि नुकसान कहां हो रहा है — कौन सा गांव, कौन सा रूट, कौन सा सहायक — और समस्या को जल्दी ठीक कर सके, और ताकि दूध संभालने वाला हर व्यक्ति सावधान और ईमानदार रहने के लिए प्रेरित हो, क्योंकि उनकी संख्याओं की जांच हो रही है।")
              },
              {
                "type": "callout",
                "style": "info",
                "heading": L("Checked at Many Levels", "कई स्तरों पर जांच"),
                "text": L("CDA is not calculated only once for the whole dairy. It can be worked out MPP-wise, route-wise, officer-wise, and BMC or MCC-wise. This helps managers compare performance across units, spot the weakest links, and track whether things are improving over time.", "CDA की गणना केवल पूरी डेयरी के लिए एक बार नहीं की जाती। इसे MPP-वार, रूट-वार, अधिकारी-वार, और BMC या MCC-वार निकाला जा सकता है। इससे प्रबंधकों को इकाइयों के बीच प्रदर्शन की तुलना करने, सबसे कमज़ोर कड़ियों को पहचानने, और समय के साथ सुधार को ट्रैक करने में मदद मिलती है।")
              },
              {
                "type": "example",
                "heading": L("Why This Protects Everyone", "यह सबकी सुरक्षा कैसे करता है"),
                "text": L("A Sahayak whose route shows very little missing milk is clearly handling milk carefully — checking cans, weighing correctly, and dispatching on time. A low CDA loss is proof of good work, and it protects both the Sahayak's reputation and the farmers' income.", "जिस सहायक के रूट में बहुत कम दूध गायब होता है, वह स्पष्ट रूप से दूध को सावधानी से संभाल रहा है — कैन की जांच कर रहा है, सही तरीके से तौल रहा है, और समय पर भेज रहा है। कम CDA लॉस अच्छे काम का सबूत है, और यह सहायक की प्रतिष्ठा और किसानों की आय दोनों की रक्षा करता है।")
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": L("What three points does CDA compare to find missing milk?", "गायब दूध को ढूंढने के लिए CDA किन तीन बिंदुओं की तुलना करता है?"),
                "options": [
                  L("Composite, Dispatch and Actual quantities", "कंपोज़िट, डिस्पैच और एक्चुअल मात्राएं"),
                  L("Morning, afternoon and evening prices", "सुबह, दोपहर और शाम की कीमतें"),
                  L("Fat, SNF and water content only", "केवल Fat, SNF और पानी की मात्रा"),
                  L("Cow, buffalo and goat milk", "गाय, भैंस और बकरी का दूध")
                ],
                "answer": 0,
                "explain": L("CDA compares the Composite (recorded at the MPP), Dispatch (sent out) and Actual (received at the chilling centre) quantities to find any gap.", "CDA किसी भी अंतर को ढूंढने के लिए कंपोज़िट (MPP पर दर्ज), डिस्पैच (भेजी गई) और एक्चुअल (चिलिंग सेंटर पर प्राप्त) मात्राओं की तुलना करता है।")
              },
              {
                "type": "truefalse",
                "q": L("CDA can be calculated separately for each route or each Sahayak, not just for the whole dairy.", "CDA की गणना केवल पूरी डेयरी के लिए ही नहीं, बल्कि हर रूट या हर सहायक के लिए अलग से भी की जा सकती है।"),
                "answer": true,
                "explain": L("CDA can be worked out at many levels — MPP-wise, route-wise, officer-wise and BMC/MCC-wise — to find exactly where losses happen.", "CDA को कई स्तरों पर निकाला जा सकता है — MPP-वार, रूट-वार, अधिकारी-वार और BMC/MCC-वार — ताकि यह ठीक-ठीक पता चल सके कि नुकसान कहां हो रहा है।")
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
              "q": L("Which of these can cause milk quantity to change between the MPP and the dairy?", "इनमें से क्या MPP और डेयरी के बीच दूध की मात्रा बदलने का कारण बन सकता है?"),
              "options": [
                L("A wrongly calibrated weighing scale", "गलत तरीके से कैलिब्रेट किया गया तौल कांटा"),
                L("The name written on the milk can", "दूध की कैन पर लिखा नाम"),
                L("The colour of the Sahayak's uniform", "सहायक की वर्दी का रंग"),
                L("The distance from the MPP to the farmer's house", "MPP से किसान के घर की दूरी")
              ],
              "answer": 0,
              "explain": L("A wrongly calibrated weighing scale can record the wrong quantity, even though no milk was actually lost.", "गलत तरीके से कैलिब्रेट किया गया तौल कांटा गलत मात्रा दर्ज कर सकता है, भले ही असल में कोई दूध नहीं खोया हो।")
            },
            {
              "topicId": "t-what-cda-does",
              "type": "mcq",
              "q": L("What is the main purpose of CDA?", "CDA का मुख्य उद्देश्य क्या है?"),
              "options": [
                L("To find and recover milk quantity that goes missing between the village and the dairy", "गांव और डेयरी के बीच गायब हुई दूध की मात्रा को ढूंढना और वसूलना"),
                L("To decide which cows give the most milk", "यह तय करना कि कौन सी गायें सबसे ज़्यादा दूध देती हैं"),
                L("To fix the price of cattle feed", "पशु चारे की कीमत तय करना"),
                L("To choose which Sahayak gets promoted", "यह चुनना कि किस सहायक को पदोन्नति मिले")
              ],
              "answer": 0,
              "explain": L("CDA compares recorded quantities at the Composite, Dispatch and Actual stages so that any shortfall can be found and recovered.", "CDA कंपोज़िट, डिस्पैच और एक्चुअल चरणों में दर्ज मात्राओं की तुलना करता है ताकि किसी भी कमी को ढूंढा और वसूला जा सके।")
            }
          ]
        }
      },
      {
        "id": "m11-l2",
        "title": L("The Three Checkpoints of CDA", "CDA के तीन चेकपॉइंट"),
        "estMinutes": 9,
        "hook": [
          {
            "type": "hero",
            "heading": L("The Three Checkpoints", "तीन चेकपॉइंट"),
            "text": L("CDA works by checking milk quantity at three different points in its journey. Let's walk through each checkpoint and see what is checked there.", "CDA दूध की मात्रा को उसकी यात्रा के तीन अलग-अलग बिंदुओं पर जांच कर काम करता है। आइए हर चेकपॉइंट को समझें और देखें कि वहां क्या जांचा जाता है।")
          }
        ],
        "topics": [
          {
            "id": "t-checkpoint-mpp-dispatch",
            "title": L("Checkpoint 1 and 2: At the MPP and On the Road", "चेकपॉइंट 1 और 2: MPP पर और रास्ते में"),
            "teach": [
              {
                "type": "text",
                "heading": L("Checkpoint 1: Composite Control (At the MPP)", "चेकपॉइंट 1: कंपोज़िट नियंत्रण (MPP पर)"),
                "html": L("The first checkpoint happens right at the village MPP. This is where the <b>Composite</b> quantity is set — the official recorded amount of milk collected that day.", "पहला चेकपॉइंट गांव के MPP पर ही होता है। यहीं <b>कंपोज़िट</b> मात्रा तय होती है — उस दिन इकट्ठा किए गए दूध की आधिकारिक दर्ज मात्रा।")
              },
              {
                "type": "stat-grid",
                "items": [
                  {
                    "label": L("Correct Weighing", "सही तौल"),
                    "text": L("The weighing scale must be checked and calibrated so every pour is measured correctly.", "तौल कांटे की जांच और कैलिब्रेशन होनी चाहिए ताकि हर बार डाला गया दूध सही से मापा जाए।")
                  },
                  {
                    "label": L("Careful Handling", "सावधानीपूर्वक संभाल"),
                    "text": L("Collection must be supervised so milk is not spilled, leaked, or mixed up between farmers.", "संग्रह की निगरानी होनी चाहिए ताकि दूध गिरे नहीं, रिसे नहीं, या किसानों के बीच मिश्रित न हो।")
                  },
                  {
                    "label": L("Proper Testing", "उचित जांच"),
                    "text": L("Milk must be sampled and tested correctly for Fat and SNF, using the right method.", "दूध का नमूना लेकर सही तरीके से Fat और SNF की सही विधि से जांच होनी चाहिए।")
                  },
                  {
                    "label": L("Checking for Mixing", "मिलावट की जांच"),
                    "text": L("Random checks — like using a lactometer — help catch water or other substances mixed into the milk.", "यादृच्छिक जांच — जैसे लैक्टोमीटर का उपयोग — दूध में मिलाए गए पानी या अन्य पदार्थों को पकड़ने में मदद करती है।")
                  }
                ]
              },
              {
                "type": "text",
                "heading": L("Checkpoint 2: Dispatch Control (At the Sahayak Stage)", "चेकपॉइंट 2: डिस्पैच नियंत्रण (सहायक के चरण पर)"),
                "html": L("The second checkpoint happens when the Sahayak sends the milk onward — from the MPP toward the chilling centre. This is the <b>Dispatch</b> stage.", "दूसरा चेकपॉइंट तब होता है जब सहायक दूध को आगे भेजता है — MPP से चिलिंग सेंटर की ओर। यह <b>डिस्पैच</b> चरण है।")
              },
              {
                "type": "glossary",
                "term": L("Dispatch", "डिस्पैच"),
                "meaning": L("The act of sending milk out from the MPP toward the chilling centre or dairy. The dispatch quantity is the amount recorded as being sent.", "MPP से चिलिंग सेंटर या डेयरी की ओर दूध भेजने की प्रक्रिया। डिस्पैच मात्रा वह राशि है जो भेजी गई दर्ज की जाती है।")
              },
              {
                "type": "stat-grid",
                "items": [
                  {
                    "label": L("Quantity Matches", "मात्रा का मेल"),
                    "text": L("The quantity being dispatched must match what was recorded at the composite stage — no more, no less.", "भेजी जा रही मात्रा कंपोज़िट चरण में दर्ज मात्रा से मेल खानी चाहिए — न ज़्यादा, न कम।")
                  },
                  {
                    "label": L("Careful Loading", "सावधानीपूर्वक लदान"),
                    "text": L("Pouring and loading must be supervised to prevent spillage or leakage.", "गिरने या रिसाव को रोकने के लिए डालने और लादने की निगरानी होनी चाहिए।")
                  },
                  {
                    "label": L("Cans and Vehicle Ready", "कैन और वाहन तैयार"),
                    "text": L("Cans must be clean and leak-proof, and the vehicle must be ready before milk is loaded.", "कैन साफ और रिसाव-रोधी होने चाहिए, और दूध लादने से पहले वाहन तैयार होना चाहिए।")
                  },
                  {
                    "label": L("Sealed and Documented", "सील और दस्तावेज़ीकृत"),
                    "text": L("Cans or tankers must be properly sealed, and dispatch slips filled in correctly, so nothing can be added or removed unnoticed.", "कैन या टैंकर ठीक से सील होने चाहिए, और डिस्पैच पर्चियां सही ढंग से भरी होनी चाहिए, ताकि बिना पता चले कुछ भी जोड़ा या निकाला न जा सके।")
                  }
                ]
              },
              {
                "type": "callout",
                "style": "tip",
                "heading": L("Why Sealing Matters", "सीलिंग क्यों महत्वपूर्ण है"),
                "text": L("A sealed can or tanker is like a locked box — if the seal is broken when it reaches the chilling centre, everyone knows something may have happened on the way. This is one of the simplest ways to protect milk quantity during transport.", "सील किया गया कैन या टैंकर एक ताले वाले बक्से जैसा है — अगर चिलिंग सेंटर पहुंचने पर सील टूटी मिले, तो सबको पता चल जाता है कि रास्ते में कुछ हुआ होगा। यह ले जाने के दौरान दूध की मात्रा की रक्षा करने के सबसे सरल तरीकों में से एक है।")
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": L("At the MPP (Composite stage), what helps make sure milk quantity is recorded correctly?", "MPP पर (कंपोज़िट चरण में), दूध की मात्रा सही ढंग से दर्ज होना सुनिश्चित करने में क्या मदद करता है?"),
                "options": [
                  L("A correctly calibrated weighing scale", "सही ढंग से कैलिब्रेट किया गया तौल कांटा"),
                  L("A louder radio at the MPP", "MPP पर तेज़ आवाज़ वाला रेडियो"),
                  L("Selling milk at a discount", "दूध को छूट पर बेचना"),
                  L("Painting the MPP a bright colour", "MPP को चमकीले रंग से रंगना")
                ],
                "answer": 0,
                "explain": L("A correctly calibrated weighing scale, checked regularly, ensures every pour of milk is measured accurately.", "नियमित रूप से जांचा गया, सही ढंग से कैलिब्रेट किया गया तौल कांटा सुनिश्चित करता है कि दूध की हर मात्रा सटीक रूप से मापी जाए।")
              },
              {
                "type": "truefalse",
                "q": L("Sealing cans and tankers before dispatch has nothing to do with protecting milk quantity.", "डिस्पैच से पहले कैन और टैंकरों को सील करने का दूध की मात्रा की सुरक्षा से कोई लेना-देना नहीं है।"),
                "answer": false,
                "explain": L("Sealing helps prevent milk from being added or removed unnoticed during transport, protecting the recorded quantity.", "सीलिंग ले जाने के दौरान बिना पता चले दूध जोड़े या निकाले जाने को रोकने में मदद करती है, जिससे दर्ज मात्रा की रक्षा होती है।")
              }
            ]
          },
          {
            "id": "t-checkpoint-actual-receipt",
            "title": L("Checkpoint 3: Arrival at the Chilling Centre", "चेकपॉइंट 3: चिलिंग सेंटर पर पहुंच"),
            "teach": [
              {
                "type": "text",
                "heading": L("Checkpoint 3: Actual Receipt and Transit Control", "चेकपॉइंट 3: एक्चुअल प्राप्ति और परिवहन नियंत्रण"),
                "html": L("The third and final checkpoint happens when the milk actually arrives at the chilling centre — the MCC or BMC. This is where the <b>Actual</b> quantity is recorded.", "तीसरा और अंतिम चेकपॉइंट तब होता है जब दूध वास्तव में चिलिंग सेंटर — MCC या BMC — पर पहुंचता है। यहीं <b>एक्चुअल</b> मात्रा दर्ज होती है।")
              },
              {
                "type": "glossary",
                "term": L("MCC / BMC", "MCC / BMC"),
                "meaning": L("MCC (Milk Chilling Centre) and BMC (Bulk Milk Cooler) are places where milk is cooled quickly after it arrives, to keep it fresh before it goes on to the dairy plant.", "MCC (मिल्क चिलिंग सेंटर) और BMC (बल्क मिल्क कूलर) वे स्थान हैं जहां दूध पहुंचने के बाद जल्दी ठंडा किया जाता है, ताकि डेयरी प्लांट जाने से पहले वह ताज़ा रहे।")
              },
              {
                "type": "stat-grid",
                "items": [
                  {
                    "label": L("Re-checking Quantity", "मात्रा की पुनः जांच"),
                    "text": L("The actual quantity received is compared with the dispatch quantity, using a properly calibrated scale.", "प्राप्त एक्चुअल मात्रा की तुलना, ठीक से कैलिब्रेट किए गए तौल कांटे का उपयोग करके, डिस्पैच मात्रा से की जाती है।")
                  },
                  {
                    "label": L("Checking Quality on Arrival", "पहुंचने पर गुणवत्ता की जांच"),
                    "text": L("Fat and SNF are tested again, and the milk is checked for sourness, curdling, smell or contamination before it is accepted.", "Fat और SNF की दोबारा जांच होती है, और स्वीकार करने से पहले दूध की खटास, जमाव, गंध या मिलावट की जांच की जाती है।")
                  },
                  {
                    "label": L("Checking Seals", "सील की जांच"),
                    "text": L("Seals on cans or tankers are checked for any sign of tampering, which could mean milk was removed on the way.", "कैन या टैंकरों की सीलों की छेड़छाड़ के किसी भी संकेत के लिए जांच की जाती है, जिसका मतलब हो सकता है कि रास्ते में दूध निकाला गया हो।")
                  },
                  {
                    "label": L("Spotting Transit Losses", "परिवहन में हुए नुकसान की पहचान"),
                    "text": L("Any leakage, spillage or delay during the journey is noted, since it can affect both quantity and quality.", "यात्रा के दौरान किसी भी रिसाव, गिरने या देरी को नोट किया जाता है, क्योंकि यह मात्रा और गुणवत्ता दोनों को प्रभावित कर सकता है।")
                  }
                ]
              },
              {
                "type": "text",
                "heading": L("Putting the Three Checkpoints Together", "तीनों चेकपॉइंट को एक साथ जोड़ना"),
                "html": L("Now you know all three checkpoints: <b>Composite</b> (at the MPP), <b>Dispatch</b> (when the Sahayak sends it out), and <b>Actual</b> (when it arrives at the chilling centre). CDA compares these three numbers to find exactly where any milk went missing.", "अब आप तीनों चेकपॉइंट जानते हैं: <b>कंपोज़िट</b> (MPP पर), <b>डिस्पैच</b> (जब सहायक इसे भेजता है), और <b>एक्चुअल</b> (जब यह चिलिंग सेंटर पहुंचता है)। CDA इन तीन संख्याओं की तुलना करके ठीक-ठीक पता लगाता है कि दूध कहां गायब हुआ।")
              },
              {
                "type": "callout",
                "style": "info",
                "heading": L("The CDA Loss Formula", "CDA लॉस का सूत्र"),
                "text": L("The basic idea is simple: Net Loss = Actual Quantity minus Composite Quantity. If the actual quantity received is lower, that difference is the loss. In the next lesson, you will learn how to turn this into a full worked calculation, including how the value of that loss is measured.", "मूल विचार सरल है: नेट लॉस = एक्चुअल मात्रा माइनस कंपोज़िट मात्रा। अगर प्राप्त एक्चुअल मात्रा कम है, तो वह अंतर ही नुकसान है। अगले पाठ में, आप सीखेंगे कि इसे एक पूरी हल की गई गणना में कैसे बदला जाए, जिसमें यह भी शामिल है कि उस नुकसान का मूल्य कैसे मापा जाता है।")
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": L("What is recorded at the third CDA checkpoint?", "तीसरे CDA चेकपॉइंट पर क्या दर्ज होता है?"),
                "options": [
                  L("The Actual quantity of milk received at the chilling centre", "चिलिंग सेंटर पर प्राप्त दूध की एक्चुअल मात्रा"),
                  L("The name of the cow that gave the most milk", "सबसे ज़्यादा दूध देने वाली गाय का नाम"),
                  L("The number of MPPs in the district", "जिले में MPP की संख्या"),
                  L("The price of diesel that week", "उस हफ्ते डीजल की कीमत")
                ],
                "answer": 0,
                "explain": L("The third checkpoint records the Actual quantity received at the MCC or BMC, so it can be compared against Composite and Dispatch.", "तीसरा चेकपॉइंट MCC या BMC पर प्राप्त एक्चुअल मात्रा दर्ज करता है, ताकि इसकी तुलना कंपोज़िट और डिस्पैच से की जा सके।")
              },
              {
                "type": "mcq",
                "q": L("What is checked when milk arrives at the chilling centre?", "जब दूध चिलिंग सेंटर पहुंचता है तो क्या जांचा जाता है?"),
                "options": [
                  L("Quantity, Fat and SNF, seal condition, and any signs of transit loss", "मात्रा, Fat और SNF, सील की स्थिति, और परिवहन नुकसान के कोई संकेत"),
                  L("Only the colour of the milk can", "केवल दूध की कैन का रंग"),
                  L("Only how fast the driver was going", "केवल ड्राइवर कितनी तेज़ी से जा रहा था"),
                  L("Only the Sahayak's attendance", "केवल सहायक की उपस्थिति")
                ],
                "answer": 0,
                "explain": L("On arrival, the chilling centre checks quantity, quality (Fat and SNF), seal integrity, and any leakage, spillage or delay during transit.", "पहुंचने पर, चिलिंग सेंटर मात्रा, गुणवत्ता (Fat और SNF), सील की सुरक्षा, और परिवहन के दौरान किसी भी रिसाव, गिरने या देरी की जांच करता है।")
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
              "q": L("Why must cans or tankers be sealed before dispatch?", "डिस्पैच से पहले कैन या टैंकरों को सील क्यों किया जाना चाहिए?"),
              "options": [
                L("So nothing can be added or removed unnoticed during transport", "ताकि परिवहन के दौरान बिना पता चले कुछ भी जोड़ा या निकाला न जा सके"),
                L("So the milk looks nicer", "ताकि दूध अच्छा दिखे"),
                L("So the vehicle uses less fuel", "ताकि वाहन कम ईंधन इस्तेमाल करे"),
                L("So the Sahayak can finish work early", "ताकि सहायक जल्दी काम खत्म कर सके")
              ],
              "answer": 0,
              "explain": L("A proper seal protects the recorded quantity — if it is broken on arrival, it is a sign something may have happened during transport.", "एक उचित सील दर्ज मात्रा की रक्षा करती है — अगर यह पहुंचने पर टूटी मिले, तो यह इस बात का संकेत है कि परिवहन के दौरान कुछ हुआ होगा।")
            },
            {
              "topicId": "t-checkpoint-actual-receipt",
              "type": "mcq",
              "q": L("At the Actual Receipt checkpoint, what does the chilling centre compare the received quantity against?", "एक्चुअल प्राप्ति चेकपॉइंट पर, चिलिंग सेंटर प्राप्त मात्रा की तुलना किससे करता है?"),
              "options": [
                L("The Dispatch quantity that was sent out", "भेजी गई डिस्पैच मात्रा"),
                L("The price of milk last month", "पिछले महीने दूध की कीमत"),
                L("The number of farmers in the village", "गांव में किसानों की संख्या"),
                L("The weather forecast", "मौसम का पूर्वानुमान")
              ],
              "answer": 0,
              "explain": L("The chilling centre checks the Actual quantity received against the Dispatch quantity to spot any gap during transit.", "चिलिंग सेंटर परिवहन के दौरान किसी भी अंतर को पहचानने के लिए प्राप्त एक्चुअल मात्रा की डिस्पैच मात्रा से जांच करता है।")
            }
          ]
        }
      },
      {
        "id": "m11-l3",
        "title": L("Let's Calculate CDA — A Worked Example", "आइए CDA की गणना करें — एक हल किया गया उदाहरण"),
        "estMinutes": 12,
        "hook": [
          {
            "type": "hero",
            "heading": L("Let's Calculate CDA", "आइए CDA की गणना करें"),
            "text": L("Now that you know why CDA exists and what its three checkpoints are, let's work through a real calculation step by step — just like a dairy accountant would.", "अब जब आप जानते हैं कि CDA क्यों मौजूद है और इसके तीन चेकपॉइंट क्या हैं, आइए एक डेयरी अकाउंटेंट की तरह चरण-दर-चरण एक असली गणना करें।")
          }
        ],
        "topics": [
          {
            "id": "t-value-the-milk",
            "title": L("Step 1: Finding the Real Value of the Milk", "चरण 1: दूध का असली मूल्य निकालना"),
            "teach": [
              {
                "type": "text",
                "heading": L("Meet the Numbers", "संख्याओं से मिलें"),
                "html": L("At a BMC, the composite record for one day shows: Composite Amount = ₹44,00,000 and Composite Quantity = 1,00,000 litres. The milk tested at Fat = 4.2% and SNF = 8.6%. Let's use these numbers to find the true value of this milk, step by step.", "एक BMC में, एक दिन का कंपोज़िट रिकॉर्ड दिखाता है: कंपोज़िट राशि = ₹44,00,000 और कंपोज़िट मात्रा = 1,00,000 लीटर। दूध की जांच में Fat = 4.2% और SNF = 8.6% पाया गया। आइए इन संख्याओं का उपयोग करके इस दूध का असली मूल्य चरण-दर-चरण निकालें।")
              },
              {
                "type": "glossary",
                "term": L("Average Rate", "औसत दर"),
                "meaning": L("The average price paid per litre, found by dividing the total money (composite amount) by the total quantity of milk.", "प्रति लीटर भुगतान की गई औसत कीमत, जो कुल पैसे (कंपोज़िट राशि) को दूध की कुल मात्रा से विभाजित करके निकाली जाती है।")
              },
              {
                "type": "example",
                "heading": L("Step 1: Calculate the Average Rate", "चरण 1: औसत दर की गणना करें"),
                "text": L("Average Rate = Composite Amount ÷ Composite Quantity = ₹44,00,000 ÷ 1,00,000 litres = ₹44 per litre. This tells us what was paid, on average, for every litre — but it does not yet tell us if that price matches the milk's real quality.", "औसत दर = कंपोज़िट राशि ÷ कंपोज़िट मात्रा = ₹44,00,000 ÷ 1,00,000 लीटर = ₹44 प्रति लीटर। यह बताता है कि हर लीटर के लिए औसतन क्या भुगतान किया गया — लेकिन यह अभी नहीं बताता कि वह कीमत दूध की असली गुणवत्ता से मेल खाती है या नहीं।")
              },
              {
                "type": "glossary",
                "term": L("EFU (Equivalent Fat Unit)", "EFU (इक्विवेलेंट फैट यूनिट)"),
                "meaning": L("A single number that combines Fat % and SNF % into one score, so milk of different quality can be compared fairly. EFU = Fat % + (2 ÷ 3 × SNF %).", "एक अकेली संख्या जो Fat % और SNF % को एक स्कोर में मिला देती है, ताकि अलग-अलग गुणवत्ता वाले दूध की उचित तुलना की जा सके। EFU = Fat % + (2 ÷ 3 × SNF %)।")
              },
              {
                "type": "example",
                "heading": L("Step 2: Calculate the EFU", "चरण 2: EFU की गणना करें"),
                "text": L("EFU = Fat + (2/3 × SNF) = 4.2 + (2/3 × 8.6) = 4.2 + 5.73 = 9.93. This milk's EFU is 9.93 — a little below the standard reference EFU of 12.5, which comes from standard buffalo milk (6.5% Fat, 9% SNF) used as the benchmark for comparison.", "EFU = Fat + (2/3 × SNF) = 4.2 + (2/3 × 8.6) = 4.2 + 5.73 = 9.93। इस दूध का EFU 9.93 है — मानक संदर्भ EFU 12.5 से थोड़ा कम, जो मानक भैंस के दूध (6.5% Fat, 9% SNF) से आता है जिसे तुलना के लिए मानदंड के रूप में उपयोग किया जाता है।")
              },
              {
                "type": "glossary",
                "term": L("Standard Landing Rate", "स्टैंडर्ड लैंडिंग रेट"),
                "meaning": L("The fair per-litre value of milk after adjusting the Average Rate for its actual quality (EFU), compared against the standard reference EFU of 12.5.", "12.5 के मानक संदर्भ EFU की तुलना में, दूध की असली गुणवत्ता (EFU) के लिए औसत दर को समायोजित करने के बाद उसका उचित प्रति-लीटर मूल्य।")
              },
              {
                "type": "example",
                "heading": L("Step 3: Calculate the Standard Landing Rate", "चरण 3: स्टैंडर्ड लैंडिंग रेट की गणना करें"),
                "text": L("Standard Landing Rate = Average Rate × (12.5 ÷ EFU) = ₹44 × (12.5 ÷ 9.93) = ₹44 × 1.259 = ₹55.39 per litre. Because this milk's EFU (9.93) is lower than the standard (12.5), the calculation adjusts the rate upward, to show what one litre of this exact quality is really worth.", "स्टैंडर्ड लैंडिंग रेट = औसत दर × (12.5 ÷ EFU) = ₹44 × (12.5 ÷ 9.93) = ₹44 × 1.259 = ₹55.39 प्रति लीटर। क्योंकि इस दूध का EFU (9.93) मानक (12.5) से कम है, गणना दर को ऊपर की ओर समायोजित करती है, ताकि यह दिखाया जा सके कि इसी गुणवत्ता का एक लीटर असल में कितने का है।")
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": L("In this example, what is the Average Rate?", "इस उदाहरण में, औसत दर क्या है?"),
                "options": [
                  L("₹44 per litre", "₹44 प्रति लीटर"),
                  L("₹100 per litre", "₹100 प्रति लीटर"),
                  L("₹4,400 per litre", "₹4,400 प्रति लीटर"),
                  L("₹0.44 per litre", "₹0.44 प्रति लीटर")
                ],
                "answer": 0,
                "explain": L("Average Rate = ₹44,00,000 ÷ 1,00,000 litres = ₹44 per litre.", "औसत दर = ₹44,00,000 ÷ 1,00,000 लीटर = ₹44 प्रति लीटर।")
              },
              {
                "type": "mcq",
                "q": L("What does EFU combine into a single number?", "EFU किन दो चीज़ों को एक संख्या में मिलाता है?"),
                "options": [
                  L("Fat % and SNF %", "Fat % और SNF %"),
                  L("Distance and time", "दूरी और समय"),
                  L("Price and season", "कीमत और मौसम"),
                  L("Litres and rupees", "लीटर और रुपये")
                ],
                "answer": 0,
                "explain": L("EFU (Equivalent Fat Unit) combines Fat % and SNF % into one quality score, so milk of different quality can be compared fairly.", "EFU (इक्विवेलेंट फैट यूनिट) Fat % और SNF % को एक गुणवत्ता स्कोर में मिलाता है, ताकि अलग-अलग गुणवत्ता वाले दूध की उचित तुलना की जा सके।")
              }
            ]
          },
          {
            "id": "t-pro-rata-and-loss",
            "title": L("Step 2: Pro-Rata Impact and the CDA Loss", "चरण 2: प्रो-रेटा प्रभाव और CDA लॉस"),
            "teach": [
              {
                "type": "text",
                "heading": L("Comparing Declared Rate with Landing Rate", "घोषित दर की लैंडिंग रेट से तुलना"),
                "html": L("The union had already declared a rate of ₹52 per litre for this milk — this is called the <b>Declared Rate</b>. We just calculated the Standard Landing Rate as ₹55.39. Let's compare them.", "संघ ने पहले ही इस दूध के लिए ₹52 प्रति लीटर की दर घोषित कर दी थी — इसे <b>घोषित दर</b> कहते हैं। हमने अभी स्टैंडर्ड लैंडिंग रेट ₹55.39 निकाली। आइए इनकी तुलना करें।")
              },
              {
                "type": "glossary",
                "term": L("Declared Rate", "घोषित दर"),
                "meaning": L("The rate per litre that the union or company announces it will pay, before adjusting for the exact quality of milk received that day.", "वह प्रति लीटर दर जो संघ या कंपनी भुगतान करने की घोषणा करती है, उस दिन प्राप्त दूध की ठीक-ठीक गुणवत्ता के लिए समायोजन करने से पहले।")
              },
              {
                "type": "glossary",
                "term": L("Pro-Rata Impact", "प्रो-रेटा प्रभाव"),
                "meaning": L("The difference between the Declared Rate and the Standard Landing Rate. It shows whether the declared price was enough to cover the real value of the milk received.", "घोषित दर और स्टैंडर्ड लैंडिंग रेट के बीच का अंतर। यह दिखाता है कि क्या घोषित कीमत प्राप्त दूध के असली मूल्य को कवर करने के लिए पर्याप्त थी।")
              },
              {
                "type": "example",
                "heading": L("Step 4: Calculate the Pro-Rata Impact", "चरण 4: प्रो-रेटा प्रभाव की गणना करें"),
                "text": L("Pro-Rata Impact = Declared Rate − Standard Landing Rate = ₹52 − ₹55.39 = −₹3.39. Because this number is negative, it is Unfavourable — the milk received was actually worth more than the declared rate paid for it, based on its real Fat and SNF quality.", "प्रो-रेटा प्रभाव = घोषित दर − स्टैंडर्ड लैंडिंग रेट = ₹52 − ₹55.39 = −₹3.39। क्योंकि यह संख्या ऋणात्मक है, यह प्रतिकूल (Unfavourable) है — प्राप्त दूध असल में उसके लिए दिए गए घोषित दर से ज़्यादा मूल्य का था, उसकी असली Fat और SNF गुणवत्ता के आधार पर।")
              },
              {
                "type": "ledger",
                "heading": L("Today's Quality-Value Summary", "आज का गुणवत्ता-मूल्य सारांश"),
                "rows": [
                  {
                    "label": L("Average Rate (per litre)", "औसत दर (प्रति लीटर)"),
                    "amount": "₹44.00"
                  },
                  {
                    "label": L("Standard Landing Rate (per litre)", "स्टैंडर्ड लैंडिंग रेट (प्रति लीटर)"),
                    "amount": "₹55.39"
                  },
                  {
                    "label": L("Declared Rate (per litre)", "घोषित दर (प्रति लीटर)"),
                    "amount": "₹52.00"
                  }
                ],
                "total": {
                  "label": L("Pro-Rata Impact (Declared − Landing)", "प्रो-रेटा प्रभाव (घोषित − लैंडिंग)"),
                  "amount": L("−₹3.39 (Unfavourable)", "−₹3.39 (प्रतिकूल)")
                }
              },
              {
                "type": "text",
                "heading": L("Now Let's Find the CDA Quantity Loss", "अब आइए CDA मात्रा नुकसान निकालें"),
                "html": L("Pro-Rata Impact tells us about VALUE. But CDA is also about QUANTITY — how much milk itself went missing. Suppose the chilling centre's records for the same day show: Composite Quantity (recorded at the MPP) = 1,00,000 litres, but Actual Quantity (received at the BMC) = 99,400 litres.", "प्रो-रेटा प्रभाव हमें मूल्य के बारे में बताता है। लेकिन CDA मात्रा के बारे में भी है — कि दूध की कितनी मात्रा असल में गायब हुई। मान लीजिए उसी दिन के लिए चिलिंग सेंटर के रिकॉर्ड दिखाते हैं: कंपोज़िट मात्रा (MPP पर दर्ज) = 1,00,000 लीटर, लेकिन एक्चुअल मात्रा (BMC पर प्राप्त) = 99,400 लीटर।")
              },
              {
                "type": "example",
                "heading": L("Step 5: Calculate the Net Loss (Quantity)", "चरण 5: नेट लॉस (मात्रा) की गणना करें"),
                "text": L("Net Loss (Quantity) = Actual Quantity − Composite Quantity = 99,400 − 1,00,000 = −600 litres. So, 600 litres of milk went missing somewhere between the MPP and the BMC.", "नेट लॉस (मात्रा) = एक्चुअल मात्रा − कंपोज़िट मात्रा = 99,400 − 1,00,000 = −600 लीटर। तो, MPP और BMC के बीच कहीं 600 लीटर दूध गायब हो गया।")
              },
              {
                "type": "example",
                "heading": L("Step 6: Calculate the CDA Loss %", "चरण 6: CDA लॉस % की गणना करें"),
                "text": L("First, find the value of the loss: Loss Value = 600 litres × ₹55.39 (Standard Landing Rate) = ₹33,234. Next, find the value of the full composite milk: Composite Milk Value = 1,00,000 litres × ₹55.39 = ₹55,39,000. Finally: CDA Loss % = (Loss Value ÷ Composite Milk Value) × 100 = (₹33,234 ÷ ₹55,39,000) × 100 = 0.6%.", "पहले, नुकसान का मूल्य निकालें: लॉस वैल्यू = 600 लीटर × ₹55.39 (स्टैंडर्ड लैंडिंग रेट) = ₹33,234। इसके बाद, पूरे कंपोज़िट दूध का मूल्य निकालें: कंपोज़िट मिल्क वैल्यू = 1,00,000 लीटर × ₹55.39 = ₹55,39,000। अंत में: CDA लॉस % = (लॉस वैल्यू ÷ कंपोज़िट मिल्क वैल्यू) × 100 = (₹33,234 ÷ ₹55,39,000) × 100 = 0.6%।")
              },
              {
                "type": "callout",
                "style": "tip",
                "heading": L("A Handy Shortcut", "एक काम का शॉर्टकट"),
                "text": L("Notice that the CDA Loss % (0.6%) came out exactly the same as 600 litres out of 1,00,000 litres (0.6%). That's because both the loss and the composite milk were valued at the same rate, so the rate cancels out. This shortcut works whenever quality hasn't changed between dispatch and receipt.", "ध्यान दें कि CDA लॉस % (0.6%) ठीक वैसा ही निकला जैसा 1,00,000 लीटर में से 600 लीटर (0.6%) होता है। ऐसा इसलिए है क्योंकि नुकसान और कंपोज़िट दूध दोनों का मूल्यांकन उसी दर पर हुआ, इसलिए दर आपस में कट जाती है। यह शॉर्टकट तभी काम करता है जब डिस्पैच और प्राप्ति के बीच गुणवत्ता न बदली हो।")
              },
              {
                "type": "callout",
                "style": "info",
                "heading": L("Is 0.6% a Lot?", "क्या 0.6% ज़्यादा है?"),
                "text": L("A CDA Loss of 0.6% may look small, but across a large dairy handling lakhs of litres every day, even a small percentage adds up to a big amount of money. This is exactly why the dairy tracks CDA Loss % for every route, MPP and officer — small, steady losses are just as important to catch as big, sudden ones.", "0.6% का CDA लॉस छोटा लग सकता है, लेकिन हर दिन लाखों लीटर संभालने वाली एक बड़ी डेयरी में, एक छोटा प्रतिशत भी बड़ी राशि में बदल जाता है। इसीलिए डेयरी हर रूट, MPP और अधिकारी के लिए CDA लॉस % ट्रैक करती है — छोटे, लगातार होने वाले नुकसान को पकड़ना बड़े, अचानक होने वाले नुकसान जितना ही महत्वपूर्ण है।")
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": L("In this example, is the Pro-Rata Impact favourable or unfavourable?", "इस उदाहरण में, प्रो-रेटा प्रभाव अनुकूल है या प्रतिकूल?"),
                "options": [
                  L("Unfavourable, because the milk was worth more than the declared rate paid", "प्रतिकूल, क्योंकि दूध की कीमत भुगतान की गई घोषित दर से ज़्यादा थी"),
                  L("Favourable, because the union saved money", "अनुकूल, क्योंकि संघ ने पैसे बचाए"),
                  L("Neither, because Pro-Rata does not apply here", "न तो, क्योंकि प्रो-रेटा यहां लागू नहीं होता"),
                  L("Unfavourable, because too much milk arrived", "प्रतिकूल, क्योंकि बहुत ज़्यादा दूध पहुंचा")
                ],
                "answer": 0,
                "explain": L("Declared Rate (₹52) was less than the Standard Landing Rate (₹55.39), giving a Pro-Rata Impact of −₹3.39 — Unfavourable.", "घोषित दर (₹52) स्टैंडर्ड लैंडिंग रेट (₹55.39) से कम थी, जिससे प्रो-रेटा प्रभाव −₹3.39 आया — प्रतिकूल।")
              },
              {
                "type": "mcq",
                "q": L("How is CDA Loss % calculated?", "CDA लॉस % की गणना कैसे की जाती है?"),
                "options": [
                  L("(Loss Value ÷ Composite Milk Value) × 100", "(लॉस वैल्यू ÷ कंपोज़िट मिल्क वैल्यू) × 100"),
                  L("(Composite Quantity ÷ Actual Quantity) × 100", "(कंपोज़िट मात्रा ÷ एक्चुअल मात्रा) × 100"),
                  L("(Declared Rate ÷ Average Rate) × 100", "(घोषित दर ÷ औसत दर) × 100"),
                  L("(Actual Quantity × Declared Rate)", "(एक्चुअल मात्रा × घोषित दर)")
                ],
                "answer": 0,
                "explain": L("CDA Loss % = (Loss Value ÷ Composite Milk Value) × 100 — the value of the missing milk as a percentage of the total composite milk value.", "CDA लॉस % = (लॉस वैल्यू ÷ कंपोज़िट मिल्क वैल्यू) × 100 — कुल कंपोज़िट दूध मूल्य के प्रतिशत के रूप में गायब दूध का मूल्य।")
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
              "q": L("What is the Standard Landing Rate in this lesson's example?", "इस पाठ के उदाहरण में स्टैंडर्ड लैंडिंग रेट क्या है?"),
              "options": [
                L("₹44.00", "₹44.00"),
                L("₹52.00", "₹52.00"),
                L("₹55.39", "₹55.39"),
                L("₹9.93", "₹9.93")
              ],
              "answer": 2,
              "explain": L("Standard Landing Rate = ₹44 × (12.5 ÷ 9.93) = ₹55.39 per litre.", "स्टैंडर्ड लैंडिंग रेट = ₹44 × (12.5 ÷ 9.93) = ₹55.39 प्रति लीटर।")
            },
            {
              "topicId": "t-value-the-milk",
              "type": "mcq",
              "q": L("EFU = Fat % + (2/3 × SNF %). If Fat = 4.2% and SNF = 8.6%, what is the EFU?", "EFU = Fat % + (2/3 × SNF %)। अगर Fat = 4.2% और SNF = 8.6% है, तो EFU क्या है?"),
              "options": [
                L("9.93", "9.93"),
                L("12.5", "12.5"),
                L("4.2", "4.2"),
                L("8.6", "8.6")
              ],
              "answer": 0,
              "explain": L("EFU = 4.2 + (2/3 × 8.6) = 4.2 + 5.73 = 9.93.", "EFU = 4.2 + (2/3 × 8.6) = 4.2 + 5.73 = 9.93।")
            },
            {
              "topicId": "t-pro-rata-and-loss",
              "type": "mcq",
              "q": L("In this lesson's example, how many litres of milk went missing between the MPP and the BMC?", "इस पाठ के उदाहरण में, MPP और BMC के बीच कितने लीटर दूध गायब हुआ?"),
              "options": [
                L("600 litres", "600 लीटर"),
                L("1,00,000 litres", "1,00,000 लीटर"),
                L("99,400 litres", "99,400 लीटर"),
                L("6,000 litres", "6,000 लीटर")
              ],
              "answer": 0,
              "explain": L("Net Loss = 99,400 − 1,00,000 = −600 litres, so 600 litres went missing.", "नेट लॉस = 99,400 − 1,00,000 = −600 लीटर, तो 600 लीटर गायब हुआ।")
            },
            {
              "topicId": "t-pro-rata-and-loss",
              "type": "mcq",
              "q": L("What was the CDA Loss % in this lesson's example?", "इस पाठ के उदाहरण में CDA लॉस % क्या था?"),
              "options": [
                L("0.6%", "0.6%"),
                L("6%", "6%"),
                L("60%", "60%"),
                L("0.06%", "0.06%")
              ],
              "answer": 0,
              "explain": L("CDA Loss % = (₹33,234 ÷ ₹55,39,000) × 100 = 0.6%.", "CDA लॉस % = (₹33,234 ÷ ₹55,39,000) × 100 = 0.6%।")
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
    "subtitle": L("See where every rupee goes as milk travels from farmer to dairy — and learn how a real dairy company is working to bring transport costs down.", "देखें कि जब दूध किसान से डेयरी तक जाता है तो हर रुपया कहां जाता है — और जानें कि एक असली डेयरी कंपनी परिवहन लागत को कम करने के लिए कैसे काम कर रही है।"),
    "icon": "milk",
    "available": true,
    "lessons": [
      {
        "id": "m12-l1",
        "title": L("What Does It Cost to Get Milk From Farmer to Dairy?", "किसान से डेयरी तक दूध पहुंचाने की लागत क्या है?"),
        "estMinutes": 8,
        "hook": [
          {
            "type": "hero",
            "heading": L("Where Does the Money Go?", "पैसा कहां जाता है?"),
            "text": L("Milk does not travel from a farmer's bucket to the dairy plant by magic. Every step — collecting, chilling, and transporting — costs money. Let's find out where that money goes, and why it matters to everyone.", "दूध किसान की बाल्टी से डेयरी प्लांट तक जादू से नहीं जाता। हर कदम — संग्रह, ठंडा करना, और परिवहन — पैसे खर्च करता है। आइए जानें कि वह पैसा कहां जाता है, और यह सबके लिए क्यों मायने रखता है।")
          }
        ],
        "topics": [
          {
            "id": "t-milk-journey-costs",
            "title": L("The Journey — And What It Costs at Each Step", "यात्रा — और हर कदम पर इसकी लागत"),
            "teach": [
              {
                "type": "text",
                "heading": L("From Bucket to Plant", "बाल्टी से प्लांट तक"),
                "html": L("Milk travels through several steps before it reaches the dairy plant: the farmer milks the animal, brings it to the MPP, the Sahayak dispatches it, it is chilled at a BMC or MCC, and then it is transported to the plant. Each of these steps costs money to run.", "डेयरी प्लांट तक पहुंचने से पहले दूध कई चरणों से गुज़रता है: किसान पशु का दूध निकालता है, उसे MPP तक लाता है, सहायक उसे भेजता है, इसे BMC या MCC पर ठंडा किया जाता है, और फिर इसे प्लांट तक ले जाया जाता है। इनमें से हर चरण को चलाने में पैसा खर्च होता है।")
              },
              {
                "type": "glossary",
                "term": L("BMC (Bulk Milk Cooler)", "BMC (बल्क मिल्क कूलर)"),
                "meaning": L("A machine that quickly cools milk after it arrives from the villages, to keep it fresh until it reaches the dairy plant.", "एक मशीन जो गांवों से पहुंचने के बाद दूध को जल्दी ठंडा करती है, ताकि डेयरी प्लांट तक पहुंचने तक यह ताज़ा रहे।")
              },
              {
                "type": "glossary",
                "term": L("Inward Transportation", "इनवर्ड ट्रांसपोर्टेशन"),
                "meaning": L("The cost of moving milk from the MPPs to the chilling centre, and from there to the dairy plant. This includes fuel, the vehicle, and the driver.", "MPP से चिलिंग सेंटर तक, और वहां से डेयरी प्लांट तक दूध ले जाने की लागत। इसमें ईंधन, वाहन, और ड्राइवर शामिल हैं।")
              },
              {
                "type": "stat-grid",
                "items": [
                  {
                    "label": L("Sahayak Commission", "सहायक कमीशन"),
                    "text": L("The Sahayak is paid a small amount for every litre of milk they help collect and dispatch correctly.", "सहायक को हर उस लीटर दूध के लिए एक छोटी राशि दी जाती है जिसे वह सही ढंग से इकट्ठा करने और भेजने में मदद करता है।")
                  },
                  {
                    "label": L("Transportation", "परिवहन"),
                    "text": L("Fuel, vehicle costs and driver wages to move milk from MPPs to the chilling centre and onward to the plant.", "MPP से चिलिंग सेंटर और फिर प्लांट तक दूध ले जाने के लिए ईंधन, वाहन की लागत और ड्राइवर की मज़दूरी।")
                  },
                  {
                    "label": L("Chilling & Infrastructure", "चिलिंग और आधारभूत संरचना"),
                    "text": L("Rent, electricity and equipment costs to keep the chilling centre running and milk cold.", "चिलिंग सेंटर को चलाने और दूध को ठंडा रखने के लिए किराया, बिजली और उपकरण की लागत।")
                  },
                  {
                    "label": L("Cleaning & Maintenance", "सफाई और रखरखाव"),
                    "text": L("Regular cleaning (like Cleaning-in-Place, or CIP) and repair of equipment, so milk stays safe and machines keep working.", "नियमित सफाई (जैसे क्लीनिंग-इन-प्लेस, या CIP) और उपकरणों की मरम्मत, ताकि दूध सुरक्षित रहे और मशीनें काम करती रहें।")
                  }
                ]
              },
              {
                "type": "glossary",
                "term": L("CIP (Cleaning-in-Place)", "CIP (क्लीनिंग-इन-प्लेस)"),
                "meaning": L("A standard cleaning process for milk cans, tanks and pipes, done regularly to keep milk safe and free of contamination.", "दूध की कैन, टैंक और पाइपों के लिए एक मानक सफाई प्रक्रिया, जो दूध को सुरक्षित और मिलावट-मुक्त रखने के लिए नियमित रूप से की जाती है।")
              },
              {
                "type": "text",
                "heading": L("Transportation and Chilling Are the Biggest Costs", "परिवहन और चिलिंग सबसे बड़ी लागत हैं"),
                "html": L("Across most dairies, transportation and chilling together form the largest share of the total cost of handling milk. That is why this module looks closely at these two areas.", "अधिकांश डेयरियों में, परिवहन और चिलिंग मिलकर दूध संभालने की कुल लागत का सबसे बड़ा हिस्सा बनते हैं। इसीलिए यह मॉड्यूल इन दो क्षेत्रों को बारीकी से देखता है।")
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": L("Which two costs together usually form the largest share of milk handling cost?", "कौन-सी दो लागतें मिलकर आमतौर पर दूध संभालने की लागत का सबसे बड़ा हिस्सा बनती हैं?"),
                "options": [
                  L("Transportation and chilling", "परिवहन और चिलिंग"),
                  L("Stationery and paint", "स्टेशनरी और पेंट"),
                  L("Advertising and printing", "विज्ञापन और छपाई"),
                  L("Office furniture and internet", "ऑफिस फर्नीचर और इंटरनेट")
                ],
                "answer": 0,
                "explain": L("Transportation and chilling together make up the largest share of the cost of handling milk from farmer to dairy.", "परिवहन और चिलिंग मिलकर किसान से डेयरी तक दूध संभालने की लागत का सबसे बड़ा हिस्सा बनते हैं।")
              },
              {
                "type": "truefalse",
                "q": L("CIP (Cleaning-in-Place) is a one-time activity done only when a chilling centre is first built.", "CIP (क्लीनिंग-इन-प्लेस) एक बार की गतिविधि है जो केवल तब की जाती है जब चिलिंग सेंटर पहली बार बनाया जाता है।"),
                "answer": false,
                "explain": L("CIP is a regular cleaning process, done again and again, to keep milk safe and equipment working well.", "CIP एक नियमित सफाई प्रक्रिया है, जो दूध को सुरक्षित और उपकरणों को अच्छी तरह काम करते रखने के लिए बार-बार की जाती है।")
              }
            ]
          },
          {
            "id": "t-why-it-matters",
            "title": L("Why Controlling These Costs Matters for Everyone", "इन लागतों को नियंत्रित करना सबके लिए क्यों मायने रखता है"),
            "teach": [
              {
                "type": "text",
                "heading": L("One Shared Pot of Money", "पैसे का एक साझा भंडार"),
                "html": L("Think of all the money that comes in when milk is sold to the dairy plant. Handling costs — Sahayak commission, transport, chilling, cleaning, maintenance — are taken out of that same pot before farmers are paid and before the union or company keeps its margin.", "सोचिए उस सारे पैसे के बारे में जो डेयरी प्लांट को दूध बेचे जाने पर आता है। संभाल की लागतें — सहायक कमीशन, परिवहन, चिलिंग, सफाई, रखरखाव — किसानों को भुगतान करने से पहले और संघ या कंपनी अपना मार्जिन रखने से पहले उसी भंडार से निकाली जाती हैं।")
              },
              {
                "type": "example",
                "heading": L("A Simple Way to See It", "इसे देखने का एक सरल तरीका"),
                "text": L("If handling costs are high, less money is left over to pay farmers a good price or to invest in growing the business. If handling costs are kept efficient, more money is left over — for better farmer prices, better infrastructure, and a stronger, more sustainable dairy.", "अगर संभाल की लागत ज़्यादा है, तो किसानों को अच्छी कीमत देने या व्यवसाय बढ़ाने में निवेश करने के लिए कम पैसा बचता है। अगर संभाल की लागत कुशल रखी जाती है, तो ज़्यादा पैसा बचता है — बेहतर किसान कीमतों, बेहतर आधारभूत संरचना, और एक मज़बूत, अधिक टिकाऊ डेयरी के लिए।")
              },
              {
                "type": "callout",
                "style": "info",
                "heading": L("Every Litre Counts", "हर लीटर मायने रखता है"),
                "text": L("Higher milk volumes reduce the cost per litre, because fixed costs — like rent for a chilling centre — get spread across more litres. That is one reason why increasing how much milk each MPP collects is so valuable.", "ज़्यादा दूध की मात्रा प्रति लीटर लागत को घटाती है, क्योंकि स्थिर लागतें — जैसे चिलिंग सेंटर का किराया — ज़्यादा लीटर में बंट जाती हैं। यही एक कारण है कि हर MPP कितना दूध इकट्ठा करता है, इसे बढ़ाना इतना मूल्यवान है।")
              },
              {
                "type": "callout",
                "style": "warning",
                "heading": L("Hidden Losses Add Up", "छिपे हुए नुकसान जुड़ते जाते हैं"),
                "text": L("Spillage, pilferage and quality problems don't just lose milk — they quietly inflate the real cost of handling every litre that does arrive safely. Careful handling protects both quantity and cost.", "गिरना, चोरी और गुणवत्ता की समस्याएं केवल दूध नहीं खोतीं — वे चुपचाप उस हर लीटर की असली लागत बढ़ा देती हैं जो सुरक्षित पहुंचता है। सावधानीपूर्वक संभाल मात्रा और लागत दोनों की रक्षा करती है।")
              },
              {
                "type": "text",
                "heading": L("Every Sahayak Has a Role", "हर सहायक की एक भूमिका है"),
                "html": L("As a Sahayak, the way you handle milk — careful collection, on-time dispatch, clean cans — directly affects handling costs. Small daily habits, multiplied across thousands of litres, make a real difference to what is left over for everyone.", "एक सहायक के रूप में, आप दूध को जिस तरह संभालते हैं — सावधानीपूर्वक संग्रह, समय पर भेजना, साफ कैन — सीधे संभाल की लागत को प्रभावित करता है। छोटी दैनिक आदतें, हज़ारों लीटर में गुणा होकर, सबके लिए बचने वाली राशि में असली अंतर लाती हैं।")
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": L("Why does controlling milk handling costs matter for farmers?", "दूध संभालने की लागत को नियंत्रित करना किसानों के लिए क्यों मायने रखता है?"),
                "options": [
                  L("Lower handling costs leave more money available to pay farmers a fair price", "कम संभाल लागत किसानों को उचित कीमत देने के लिए ज़्यादा पैसा उपलब्ध छोड़ती है"),
                  L("It has no connection to farmer income", "इसका किसान की आय से कोई संबंध नहीं है"),
                  L("It only matters for the dairy plant's office staff", "यह केवल डेयरी प्लांट के कार्यालय कर्मचारियों के लिए मायने रखता है"),
                  L("It only affects the price of animal feed", "यह केवल पशु चारे की कीमत को प्रभावित करता है")
                ],
                "answer": 0,
                "explain": L("Handling costs come out of the same pot of money earned from milk sales — keeping them low leaves more for farmer payments.", "संभाल की लागतें दूध बिक्री से कमाए गए उसी पैसे के भंडार से निकलती हैं — इन्हें कम रखने से किसान भुगतान के लिए ज़्यादा बचता है।")
              },
              {
                "type": "mcq",
                "q": L("Why do higher milk volumes usually lower the cost per litre?", "ज़्यादा दूध की मात्रा आमतौर पर प्रति लीटर लागत को क्यों घटाती है?"),
                "options": [
                  L("Fixed costs like rent get spread across more litres", "किराए जैसी स्थिर लागतें ज़्यादा लीटर में बंट जाती हैं"),
                  L("Vehicles use less fuel when carrying more weight", "ज़्यादा वज़न ले जाने पर वाहन कम ईंधन इस्तेमाल करते हैं"),
                  L("Farmers charge less for more milk", "किसान ज़्यादा दूध के लिए कम कीमत लेते हैं"),
                  L("Chilling machines work faster with more milk", "ज़्यादा दूध होने पर चिलिंग मशीनें तेज़ काम करती हैं")
                ],
                "answer": 0,
                "explain": L("Fixed costs stay roughly the same no matter the volume, so more litres means each litre carries a smaller share of that fixed cost.", "स्थिर लागतें मात्रा चाहे जो भी हो, लगभग समान रहती हैं, इसलिए ज़्यादा लीटर का मतलब है कि हर लीटर उस स्थिर लागत का एक छोटा हिस्सा उठाता है।")
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
              "q": L("What does 'Inward Transportation' cost cover?", "'इनवर्ड ट्रांसपोर्टेशन' लागत क्या कवर करती है?"),
              "options": [
                L("Moving milk from the MPPs to the chilling centre and onward to the plant", "MPP से चिलिंग सेंटर और फिर प्लांट तक दूध ले जाना"),
                L("The price farmers are paid for milk", "किसानों को दूध के लिए दी जाने वाली कीमत"),
                L("The cost of building new farmer houses", "नए किसान घर बनाने की लागत"),
                L("The Sahayak's mobile phone bill", "सहायक का मोबाइल फोन बिल")
              ],
              "answer": 0,
              "explain": L("Inward transportation covers the fuel, vehicle and driver costs of moving milk from MPPs to the chilling centre and then to the plant.", "इनवर्ड ट्रांसपोर्टेशन में MPP से चिलिंग सेंटर और फिर प्लांट तक दूध ले जाने के ईंधन, वाहन और ड्राइवर की लागत शामिल है।")
            },
            {
              "topicId": "t-why-it-matters",
              "type": "mcq",
              "q": L("What happens to the money left over when handling costs are kept low and efficient?", "जब संभाल की लागत कम और कुशल रखी जाती है तो बचे हुए पैसे का क्या होता है?"),
              "options": [
                L("More money is available for farmer prices and business investment", "किसान कीमतों और व्यवसाय निवेश के लिए ज़्यादा पैसा उपलब्ध होता है"),
                L("It disappears completely", "यह पूरी तरह गायब हो जाता है"),
                L("It can only be used for advertising", "इसका उपयोग केवल विज्ञापन के लिए किया जा सकता है"),
                L("It has no effect on anyone", "इसका किसी पर कोई प्रभाव नहीं पड़ता")
              ],
              "answer": 0,
              "explain": L("Efficient handling costs leave more of the money earned from milk sales available for fair farmer prices and growth.", "कुशल संभाल लागत दूध बिक्री से कमाए गए पैसे का ज़्यादा हिस्सा उचित किसान कीमतों और विकास के लिए उपलब्ध छोड़ती है।")
            }
          ]
        }
      },
      {
        "id": "m12-l2",
        "title": L("What Drives These Costs Up or Down", "इन लागतों का घटना-बढ़ना किस पर निर्भर करता है"),
        "estMinutes": 8,
        "hook": [
          {
            "type": "hero",
            "heading": L("What Makes Costs Rise or Fall?", "लागत बढ़ने या घटने का कारण क्या है?"),
            "text": L("Some milk handling costs change with how much milk you handle. Others stay almost the same no matter what. Understanding the difference helps everyone make better decisions.", "कुछ दूध संभाल लागतें इस बात पर निर्भर करती हैं कि आप कितना दूध संभालते हैं। अन्य लगभग एक जैसी रहती हैं चाहे कुछ भी हो। इस अंतर को समझने से सबको बेहतर निर्णय लेने में मदद मिलती है।")
          }
        ],
        "topics": [
          {
            "id": "t-fixed-variable-costs",
            "title": L("Fixed Costs, Variable Costs, and Volume", "स्थिर लागत, परिवर्तनशील लागत, और मात्रा"),
            "teach": [
              {
                "type": "text",
                "heading": L("Two Kinds of Cost", "दो तरह की लागत"),
                "html": L("Some costs change directly with how much milk is handled — these are called <b>variable costs</b>. Others stay mostly the same, whether you handle a little milk or a lot — these are called <b>fixed costs</b>.", "कुछ लागतें सीधे इस बात पर बदलती हैं कि कितना दूध संभाला जा रहा है — इन्हें <b>परिवर्तनशील लागत</b> कहते हैं। अन्य लगभग एक जैसी रहती हैं, चाहे आप थोड़ा दूध संभालें या बहुत — इन्हें <b>स्थिर लागत</b> कहते हैं।")
              },
              {
                "type": "glossary",
                "term": L("Variable Cost", "परिवर्तनशील लागत"),
                "meaning": L("A cost that goes up or down depending on how much milk is handled — like fuel for a delivery van, which increases if the van makes more trips.", "एक ऐसी लागत जो इस बात पर निर्भर करती है कि कितना दूध संभाला जा रहा है — जैसे डिलीवरी वैन के लिए ईंधन, जो बढ़ता है अगर वैन ज़्यादा चक्कर लगाए।")
              },
              {
                "type": "glossary",
                "term": L("Fixed Cost", "स्थिर लागत"),
                "meaning": L("A cost that stays roughly the same no matter how much milk is handled — like the monthly rent for a chilling centre building.", "एक ऐसी लागत जो लगभग समान रहती है चाहे कितना भी दूध संभाला जाए — जैसे चिलिंग सेंटर की इमारत का मासिक किराया।")
              },
              {
                "type": "text",
                "heading": L("MCC Costs vs BMC Costs", "MCC लागत बनाम BMC लागत"),
                "html": L("At an MCC (Milk Chilling Centre), costs tend to be more variable — they move closely with the quantity of milk handled per litre. At a BMC (Bulk Milk Cooler), costs tend to be largely fixed — the equipment and building cost about the same to run whether it is half full or completely full. This is why volume matters so much for BMC efficiency.", "MCC (मिल्क चिलिंग सेंटर) में, लागतें ज़्यादा परिवर्तनशील होती हैं — वे प्रति लीटर संभाले गए दूध की मात्रा के साथ निकटता से बदलती हैं। BMC (बल्क मिल्क कूलर) में, लागतें ज़्यादातर स्थिर होती हैं — उपकरण और इमारत को चलाने में लगभग समान लागत आती है चाहे यह आधा भरा हो या पूरी तरह भरा। इसीलिए BMC की कुशलता के लिए मात्रा इतनी मायने रखती है।")
              },
              {
                "type": "example",
                "heading": L("Seeing It With Numbers", "इसे संख्याओं से देखना"),
                "text": L("Imagine a BMC costs ₹35,000 a month to run, no matter how much milk passes through it. If it handles 50,000 litres that month, the fixed cost works out to ₹0.70 per litre. If it handles only 25,000 litres, the same ₹35,000 now works out to ₹1.40 per litre — double the cost, just because less milk passed through.", "कल्पना करें कि एक BMC को चलाने में हर महीने ₹35,000 खर्च होते हैं, चाहे उससे कितना भी दूध गुज़रे। अगर उस महीने वह 50,000 लीटर संभालता है, तो स्थिर लागत ₹0.70 प्रति लीटर निकलती है। अगर वह केवल 25,000 लीटर संभालता है, तो वही ₹35,000 अब ₹1.40 प्रति लीटर निकलता है — दोगुनी लागत, केवल इसलिए क्योंकि कम दूध गुज़रा।")
              },
              {
                "type": "callout",
                "style": "tip",
                "heading": L("The Big Idea", "बड़ा विचार"),
                "text": L("Higher milk volumes at a BMC or MCC mean the same fixed costs get divided among more litres — so the cost per litre drops. This is why growing procurement at each MPP is just as important as opening new MPPs.", "BMC या MCC में ज़्यादा दूध की मात्रा का मतलब है कि वही स्थिर लागतें ज़्यादा लीटर में बंट जाती हैं — इसलिए प्रति लीटर लागत घट जाती है। इसीलिए हर MPP पर खरीद बढ़ाना उतना ही महत्वपूर्ण है जितना नए MPP खोलना।")
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": L("What is a fixed cost?", "स्थिर लागत क्या है?"),
                "options": [
                  L("A cost that stays roughly the same, no matter how much milk is handled", "एक ऐसी लागत जो लगभग समान रहती है, चाहे कितना भी दूध संभाला जाए"),
                  L("A cost that only happens once a year", "एक ऐसी लागत जो साल में केवल एक बार होती है"),
                  L("A cost that farmers pay directly", "एक ऐसी लागत जो किसान सीधे भुगतान करते हैं"),
                  L("A cost that only applies to transport", "एक ऐसी लागत जो केवल परिवहन पर लागू होती है")
                ],
                "answer": 0,
                "explain": L("A fixed cost — like a chilling centre's rent — stays roughly the same whether milk volumes are high or low.", "एक स्थिर लागत — जैसे चिलिंग सेंटर का किराया — लगभग समान रहती है चाहे दूध की मात्रा ज़्यादा हो या कम।")
              },
              {
                "type": "truefalse",
                "q": L("If a BMC handles less milk in a month, its fixed cost per litre usually goes down.", "अगर एक BMC किसी महीने में कम दूध संभालता है, तो उसकी प्रति लीटर स्थिर लागत आमतौर पर घट जाती है।"),
                "answer": false,
                "explain": L("If less milk passes through, the same fixed cost is spread over fewer litres, so the cost per litre actually goes UP.", "अगर कम दूध गुज़रता है, तो वही स्थिर लागत कम लीटर में बंटती है, इसलिए प्रति लीटर लागत असल में बढ़ जाती है।")
              }
            ]
          },
          {
            "id": "t-controlling-costs",
            "title": L("Hidden Costs and How to Control Them", "छिपी हुई लागतें और उन्हें कैसे नियंत्रित करें"),
            "teach": [
              {
                "type": "text",
                "heading": L("Routing Matters", "रूट का मायने रखना"),
                "html": L("Inefficient routing — like a vehicle travelling a long, winding path to visit MPPs in a poor order — directly increases the cost per litre. Planning routes well is one of the simplest ways to control transport cost.", "अकुशल रूट — जैसे एक वाहन का MPP को खराब क्रम में देखने के लिए लंबा, घुमावदार रास्ता तय करना — सीधे प्रति लीटर लागत बढ़ाता है। रूट की अच्छी योजना बनाना परिवहन लागत को नियंत्रित करने के सबसे सरल तरीकों में से एक है।")
              },
              {
                "type": "text",
                "heading": L("Right Vehicle, Right Capacity", "सही वाहन, सही क्षमता"),
                "html": L("Using a vehicle that matches the amount of milk on a route — not too big, not too small — gives the lowest possible cost per litre for inward transportation. A large tanker on a route that only collects a few hundred litres wastes fuel and money.", "एक रूट पर दूध की मात्रा से मेल खाने वाले वाहन का उपयोग करना — न बहुत बड़ा, न बहुत छोटा — इनवर्ड ट्रांसपोर्टेशन के लिए सबसे कम संभव प्रति लीटर लागत देता है। एक ऐसे रूट पर बड़ा टैंकर जो केवल कुछ सौ लीटर इकट्ठा करता है, ईंधन और पैसा बर्बाद करता है।")
              },
              {
                "type": "glossary",
                "term": L("Capacity Utilisation", "क्षमता उपयोग"),
                "meaning": L("How much of a vehicle's or machine's full capacity is actually being used. A tanker that could carry 3,000 litres but only carries 900 litres has poor capacity utilisation.", "किसी वाहन या मशीन की पूरी क्षमता का असल में कितना उपयोग हो रहा है। एक टैंकर जो 3,000 लीटर ले जा सकता है लेकिन केवल 900 लीटर ले जाता है, उसका क्षमता उपयोग खराब है।")
              },
              {
                "type": "stat-grid",
                "items": [
                  {
                    "label": L("Right Vehicle Sizing", "सही वाहन आकार"),
                    "text": L("Matching vehicle capacity to the actual milk volume on a route keeps transport cost per litre as low as possible.", "वाहन की क्षमता को रूट पर असली दूध की मात्रा से मिलाना प्रति लीटर परिवहन लागत को यथासंभव कम रखता है।")
                  },
                  {
                    "label": L("Energy Optimisation", "ऊर्जा अनुकूलन"),
                    "text": L("Using electricity and fuel efficiently at chilling centres is key to keeping chilling costs down.", "चिलिंग सेंटर पर बिजली और ईंधन का कुशलता से उपयोग करना चिलिंग लागत को कम रखने की कुंजी है।")
                  },
                  {
                    "label": L("Capacity Utilisation", "क्षमता उपयोग"),
                    "text": L("Filling vehicles and equipment closer to their full capacity drives down the overall cost per litre.", "वाहनों और उपकरणों को उनकी पूरी क्षमता के करीब भरना कुल प्रति लीटर लागत को कम करता है।")
                  }
                ]
              },
              {
                "type": "callout",
                "style": "warning",
                "heading": L("Hidden Losses Inflate Cost", "छिपे हुए नुकसान लागत बढ़ाते हैं"),
                "text": L("Spillage, pilferage and quality problems don't show up as a separate 'cost' line — but they quietly increase the real cost of every litre that does arrive safely, because the same fixed costs are now spread over less usable milk.", "गिरना, चोरी और गुणवत्ता की समस्याएं एक अलग 'लागत' पंक्ति के रूप में नहीं दिखतीं — लेकिन वे चुपचाप हर उस लीटर की असली लागत बढ़ा देती हैं जो सुरक्षित पहुंचता है, क्योंकि वही स्थिर लागतें अब कम उपयोगी दूध में बंटती हैं।")
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": L("What does 'right vehicle + right capacity' achieve?", "'सही वाहन + सही क्षमता' क्या हासिल करता है?"),
                "options": [
                  L("The lowest possible inward transportation cost per litre", "सबसे कम संभव प्रति लीटर इनवर्ड ट्रांसपोर्टेशन लागत"),
                  L("The fastest possible speed on the highway", "हाईवे पर सबसे तेज़ संभव गति"),
                  L("The smallest fuel tank size", "सबसे छोटा ईंधन टैंक आकार"),
                  L("The shortest driver shift", "सबसे छोटी ड्राइवर शिफ्ट")
                ],
                "answer": 0,
                "explain": L("Matching vehicle size to the actual milk volume on a route gives the lowest possible transportation cost per litre.", "रूट पर असली दूध की मात्रा से वाहन के आकार को मिलाना सबसे कम संभव प्रति लीटर परिवहन लागत देता है।")
              },
              {
                "type": "mcq",
                "q": L("What is capacity utilisation?", "क्षमता उपयोग क्या है?"),
                "options": [
                  L("How much of a vehicle's or machine's full capacity is actually being used", "किसी वाहन या मशीन की पूरी क्षमता का असल में कितना उपयोग हो रहा है"),
                  L("The number of MPPs on a route", "एक रूट पर MPP की संख्या"),
                  L("The price of diesel per litre", "प्रति लीटर डीजल की कीमत"),
                  L("The number of Sahayaks on a route", "एक रूट पर सहायकों की संख्या")
                ],
                "answer": 0,
                "explain": L("Capacity utilisation measures how fully a vehicle or machine's capacity is actually being used.", "क्षमता उपयोग मापता है कि किसी वाहन या मशीन की क्षमता का असल में कितनी पूरी तरह उपयोग हो रहा है।")
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
              "q": L("Why do BMC costs tend to be largely fixed?", "BMC लागतें ज़्यादातर स्थिर क्यों होती हैं?"),
              "options": [
                L("The equipment and building cost about the same whether it is half full or completely full", "उपकरण और इमारत की लागत लगभग समान होती है चाहे यह आधा भरा हो या पूरी तरह भरा"),
                L("BMCs never cost any money to run", "BMC को चलाने में कभी कोई पैसा खर्च नहीं होता"),
                L("BMC costs change every single day", "BMC लागत हर दिन बदलती है"),
                L("BMCs only cost money in summer", "BMC केवल गर्मियों में पैसा खर्च करता है")
              ],
              "answer": 0,
              "explain": L("BMC running costs stay roughly the same regardless of how much milk passes through, which is why higher volume lowers the cost per litre.", "BMC चलाने की लागत लगभग समान रहती है चाहे कितना भी दूध गुज़रे, इसीलिए ज़्यादा मात्रा प्रति लीटर लागत को घटाती है।")
            },
            {
              "topicId": "t-controlling-costs",
              "type": "mcq",
              "q": L("What is one simple way to control inward transportation cost?", "इनवर्ड ट्रांसपोर्टेशन लागत को नियंत्रित करने का एक सरल तरीका क्या है?"),
              "options": [
                L("Plan efficient routes and match vehicle size to actual milk volume", "कुशल रूट की योजना बनाएं और वाहन के आकार को असली दूध की मात्रा से मिलाएं"),
                L("Always use the biggest tanker available on every route", "हर रूट पर हमेशा सबसे बड़ा उपलब्ध टैंकर इस्तेमाल करें"),
                L("Skip vehicle maintenance to save money", "पैसे बचाने के लिए वाहन रखरखाव छोड़ें"),
                L("Remove milk quality checks to save time", "समय बचाने के लिए दूध गुणवत्ता जांच हटाएं")
              ],
              "answer": 0,
              "explain": L("Efficient routing and right-sized vehicles keep transportation cost per litre as low as possible.", "कुशल रूटिंग और सही आकार के वाहन प्रति लीटर परिवहन लागत को यथासंभव कम रखते हैं।")
            }
          ]
        }
      },
      {
        "id": "m12-l3",
        "title": L("The Shakti MPC Story: Solving the Transport Cost Puzzle", "शक्ति MPC की कहानी: परिवहन लागत की पहेली सुलझाना"),
        "estMinutes": 14,
        "hook": [
          {
            "type": "hero",
            "heading": L("A Real Dairy's Cost Puzzle", "एक असली डेयरी की लागत पहेली"),
            "text": L("This is the story of a real Milk Producer Company working through a real transport cost problem. Everything you've learned in this course comes together here. Let's dig in.", "यह एक असली मिल्क प्रोड्यूसर कंपनी की कहानी है जो एक असली परिवहन लागत समस्या से जूझ रही है। इस कोर्स में आपने जो कुछ भी सीखा है वह यहां एक साथ आता है। आइए गहराई में जाएं।")
          }
        ],
        "topics": [
          {
            "id": "t-meet-shakti",
            "title": L("Meet Shakti MPC", "शक्ति MPC से मिलें"),
            "teach": [
              {
                "type": "text",
                "heading": L("A Growing Company", "एक बढ़ती हुई कंपनी"),
                "html": L("Shakti Milk Producer Company Limited (Shakti MPC) started in 2021 to give rural milk producers a reliable market and fair prices. It began with support from an outside grant, which paid for MPPs, BMCs, testing equipment and vehicles while the company was still growing.", "शक्ति मिल्क प्रोड्यूसर कंपनी लिमिटेड (शक्ति MPC) की शुरुआत 2021 में ग्रामीण दूध उत्पादकों को एक भरोसेमंद बाज़ार और उचित कीमतें देने के लिए हुई। इसकी शुरुआत एक बाहरी अनुदान के सहयोग से हुई, जिसने कंपनी के बढ़ने के दौरान MPP, BMC, जांच उपकरण और वाहनों के लिए भुगतान किया।")
              },
              {
                "type": "glossary",
                "term": L("Grant Support", "अनुदान सहयोग"),
                "meaning": L("Money given to help a company get started, which does not need to be paid back like a loan. Grant support often reduces or ends as the company grows and needs to stand on its own.", "किसी कंपनी को शुरू करने में मदद के लिए दिया गया पैसा, जिसे ऋण की तरह वापस चुकाने की ज़रूरत नहीं होती। जैसे-जैसे कंपनी बढ़ती है और उसे अपने दम पर खड़ा होना पड़ता है, अनुदान सहयोग अक्सर घटता या समाप्त हो जाता है।")
              },
              {
                "type": "text",
                "heading": L("Standing on Its Own", "अपने दम पर खड़ा होना"),
                "html": L("As the grant support ended, Shakti MPC had to cover its own running costs from what it earns handling milk — its procurement margins and its own efficiency. Today, the company runs one of the largest milk procurement networks in its region.", "जैसे ही अनुदान सहयोग समाप्त हुआ, शक्ति MPC को दूध संभालने से होने वाली अपनी कमाई से — अपने खरीद मार्जिन और अपनी दक्षता से — अपनी खुद की चलाने की लागत को कवर करना पड़ा। आज, कंपनी अपने क्षेत्र के सबसे बड़े दूध खरीद नेटवर्क में से एक चलाती है।")
              },
              {
                "type": "stat-grid",
                "items": [
                  {
                    "label": L("800 MPPs", "800 MPP"),
                    "text": L("Shakti MPC collects milk from about 800 village-level Milk Pooling Points.", "शक्ति MPC लगभग 800 गांव-स्तरीय मिल्क पूलिंग पॉइंट्स से दूध इकट्ठा करती है।")
                  },
                  {
                    "label": L("1,200+ Villages", "1,200+ गांव"),
                    "text": L("These MPPs are spread across more than 1,200 villages.", "ये MPP 1,200 से ज़्यादा गांवों में फैले हुए हैं।")
                  },
                  {
                    "label": L("85,000 Members", "85,000 सदस्य"),
                    "text": L("Nearly 85,000 farmer families are members of the company.", "लगभग 85,000 किसान परिवार कंपनी के सदस्य हैं।")
                  },
                  {
                    "label": L("84,000 to 1.15 Lakh Litres a Day", "84,000 से 1.15 लाख लीटर प्रतिदिन"),
                    "text": L("Daily milk collection ranges from about 84,000 litres in the lean season to more than 1,15,000 litres at peak season.", "दैनिक दूध संग्रह मंदी के मौसम में लगभग 84,000 लीटर से लेकर शिखर मौसम में 1,15,000 लीटर से अधिक तक होता है।")
                  }
                ]
              },
              {
                "type": "barchart",
                "heading": L("Five Years of Growth (Average Daily Procurement)", "पांच वर्षों की वृद्धि (औसत दैनिक खरीद)"),
                "source": L("Shakti MPC internal records", "शक्ति MPC आंतरिक रिकॉर्ड"),
                "unit": L("litres per day", "लीटर प्रति दिन"),
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
                "heading": L("Fast Growth, New Problems", "तेज़ वृद्धि, नई समस्याएं"),
                "text": L("In just five years, Shakti MPC nearly quadrupled its daily milk collection. But fast growth brought a new challenge: rising costs, especially for transportation — even as the amount of milk collected kept growing.", "केवल पांच वर्षों में, शक्ति MPC ने अपने दैनिक दूध संग्रह को लगभग चौगुना कर दिया। लेकिन तेज़ वृद्धि एक नई चुनौती लेकर आई: बढ़ती लागतें, खासकर परिवहन के लिए — भले ही इकट्ठा किए गए दूध की मात्रा बढ़ती रही।")
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": L("About how many MPPs does Shakti MPC currently operate?", "शक्ति MPC वर्तमान में लगभग कितने MPP संचालित करती है?"),
                "options": [
                  L("About 800", "लगभग 800"),
                  L("About 80", "लगभग 80"),
                  L("About 8,000", "लगभग 8,000"),
                  L("About 8", "लगभग 8")
                ],
                "answer": 0,
                "explain": L("Shakti MPC procures milk from approximately 800 Milk Pooling Points.", "शक्ति MPC लगभग 800 मिल्क पूलिंग पॉइंट्स से दूध खरीदती है।")
              },
              {
                "type": "truefalse",
                "q": L("Shakti MPC's daily milk procurement grew steadily over five years, from about 22,500 litres to about 84,000 litres.", "शक्ति MPC की दैनिक दूध खरीद पांच वर्षों में लगातार बढ़ी, लगभग 22,500 लीटर से लगभग 84,000 लीटर तक।"),
                "answer": true,
                "explain": L("Average daily procurement grew from 22,500 litres in FY 2021-22 to 84,000 litres in FY 2025-26.", "औसत दैनिक खरीद FY 2021-22 में 22,500 लीटर से बढ़कर FY 2025-26 में 84,000 लीटर हो गई।")
              }
            ]
          },
          {
            "id": "t-where-money-goes",
            "title": L("Where the Money Goes — Real Cost Numbers", "पैसा कहां जाता है — असली लागत संख्याएं"),
            "teach": [
              {
                "type": "text",
                "heading": L("A Detailed Cost Review", "एक विस्तृत लागत समीक्षा"),
                "html": L("As grant support ended, Shakti MPC studied exactly where its procurement money was going, for every single litre of milk. Here is what they found.", "जैसे ही अनुदान सहयोग समाप्त हुआ, शक्ति MPC ने ठीक-ठीक अध्ययन किया कि दूध के हर एक लीटर के लिए उसका खरीद पैसा कहां जा रहा है। यहां वे जो पाया वह है।")
              },
              {
                "type": "ledger",
                "heading": L("Shakti MPC — Cost per Litre of Milk Procured", "शक्ति MPC — खरीदे गए दूध की प्रति लीटर लागत"),
                "rows": [
                  {
                    "label": L("Sahayak Commission", "सहायक कमीशन"),
                    "amount": "₹0.90"
                  },
                  {
                    "label": L("Inward Transportation", "इनवर्ड ट्रांसपोर्टेशन"),
                    "amount": "₹2.28"
                  },
                  {
                    "label": L("BMC Rent & Infrastructure", "BMC किराया और आधारभूत संरचना"),
                    "amount": "₹0.35"
                  },
                  {
                    "label": L("Labour Cost", "श्रम लागत"),
                    "amount": "₹0.25"
                  },
                  {
                    "label": L("Diesel & Utilities", "डीजल और उपयोगिताएं"),
                    "amount": "₹0.42"
                  },
                  {
                    "label": L("Cleaning & CIP", "सफाई और CIP"),
                    "amount": "₹0.12"
                  },
                  {
                    "label": L("Repair & Maintenance", "मरम्मत और रखरखाव"),
                    "amount": "₹0.18"
                  }
                ],
                "total": {
                  "label": L("Total Cost per Litre", "प्रति लीटर कुल लागत"),
                  "amount": "₹4.50"
                }
              },
              {
                "type": "example",
                "heading": L("Which Cost Is the Biggest?", "सबसे बड़ी लागत कौन-सी है?"),
                "text": L("Inward Transportation alone is ₹2.28 out of the ₹4.50 total cost per litre — more than half of everything spent to handle each litre of milk. This is exactly why the company is focused on solving its transportation cost problem.", "अकेले इनवर्ड ट्रांसपोर्टेशन ₹4.50 की कुल प्रति लीटर लागत में से ₹2.28 है — दूध के हर लीटर को संभालने में खर्च की गई हर चीज़ का आधे से ज़्यादा। यही कारण है कि कंपनी अपनी परिवहन लागत समस्या को सुलझाने पर केंद्रित है।")
              },
              {
                "type": "callout",
                "style": "info",
                "heading": L("A Rising Trend", "एक बढ़ता हुआ रुझान"),
                "text": L("Inward transportation cost per litre has been climbing every year — from ₹1.68 in FY 2021-22 to ₹2.28 in FY 2025-26 — even as the company's daily milk volumes grew. More milk did not automatically mean a lower cost per litre.", "प्रति लीटर इनवर्ड ट्रांसपोर्टेशन लागत हर साल बढ़ रही है — FY 2021-22 में ₹1.68 से FY 2025-26 में ₹2.28 तक — भले ही कंपनी की दैनिक दूध मात्रा बढ़ी। ज़्यादा दूध का मतलब अपने आप कम प्रति लीटर लागत नहीं था।")
              },
              {
                "type": "barchart",
                "heading": L("Inward Transportation Cost Trend", "इनवर्ड ट्रांसपोर्टेशन लागत का रुझान"),
                "source": L("Shakti MPC internal records", "शक्ति MPC आंतरिक रिकॉर्ड"),
                "unit": L("₹ per litre", "₹ प्रति लीटर"),
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
                "q": L("In Shakti MPC's cost structure, what is the single biggest cost per litre?", "शक्ति MPC की लागत संरचना में, प्रति लीटर सबसे बड़ी अकेली लागत क्या है?"),
                "options": [
                  L("Inward Transportation", "इनवर्ड ट्रांसपोर्टेशन"),
                  L("Cleaning & CIP", "सफाई और CIP"),
                  L("Repair & Maintenance", "मरम्मत और रखरखाव"),
                  L("Labour Cost", "श्रम लागत")
                ],
                "answer": 0,
                "explain": L("At ₹2.28 per litre, Inward Transportation is the largest single cost, more than half of the ₹4.50 total.", "₹2.28 प्रति लीटर पर, इनवर्ड ट्रांसपोर्टेशन सबसे बड़ी अकेली लागत है, जो ₹4.50 के कुल का आधे से ज़्यादा है।")
              },
              {
                "type": "mcq",
                "q": L("What happened to inward transportation cost per litre over five years, even as milk volumes grew?", "दूध की मात्रा बढ़ने के बावजूद, पांच वर्षों में प्रति लीटर इनवर्ड ट्रांसपोर्टेशन लागत का क्या हुआ?"),
                "options": [
                  L("It kept rising, from ₹1.68 to ₹2.28 per litre", "यह लगातार बढ़ती रही, ₹1.68 से ₹2.28 प्रति लीटर तक"),
                  L("It fell steadily every year", "यह हर साल लगातार घटती रही"),
                  L("It stayed exactly the same", "यह बिल्कुल समान रही"),
                  L("It dropped to zero", "यह शून्य पर गिर गई")
                ],
                "answer": 0,
                "explain": L("Despite volume growth, inward transportation cost per litre rose every year, from ₹1.68 to ₹2.28.", "मात्रा बढ़ने के बावजूद, प्रति लीटर इनवर्ड ट्रांसपोर्टेशन लागत हर साल बढ़ी, ₹1.68 से ₹2.28 तक।")
              }
            ]
          },
          {
            "id": "t-route-timing-puzzle",
            "title": L("The Route Timing Puzzle", "रूट टाइमिंग की पहेली"),
            "teach": [
              {
                "type": "text",
                "heading": L("The Three-Hour Rule", "तीन घंटे का नियम"),
                "html": L("To protect milk quality, Shakti MPC follows a strict rule: milk collected at the first MPP on a route must reach the chilling centre within three hours. Waiting longer lets acidity and bacteria increase, which spoils milk quality.", "दूध की गुणवत्ता की रक्षा के लिए, शक्ति MPC एक सख्त नियम का पालन करती है: एक रूट पर पहले MPP पर इकट्ठा किया गया दूध तीन घंटे के भीतर चिलिंग सेंटर तक पहुंचना चाहिए। ज़्यादा इंतज़ार करने से अम्लता और बैक्टीरिया बढ़ जाते हैं, जिससे दूध की गुणवत्ता खराब होती है।")
              },
              {
                "type": "text",
                "heading": L("Working Backwards From the Deadline", "समय सीमा से पीछे की ओर काम करना"),
                "html": L("Because chilled milk must reach the plant by 9:30 AM (morning) or 9:30 PM (evening), routes are planned backwards from that deadline. This means the first and second MPPs on many routes must finish pouring milk by about 6:30 AM or 6:30 PM — quite early for farmers who finish milking and housework a bit later.", "क्योंकि ठंडा किया गया दूध सुबह 9:30 बजे (सुबह) या रात 9:30 बजे (शाम) तक प्लांट पहुंचना चाहिए, रूट उस समय सीमा से पीछे की ओर योजनाबद्ध किए जाते हैं। इसका मतलब है कि कई रूटों पर पहले और दूसरे MPP को लगभग सुबह 6:30 बजे या शाम 6:30 बजे तक दूध डालना खत्म करना चाहिए — उन किसानों के लिए काफी जल्दी जो दूध निकालना और घर का काम थोड़ी देर बाद खत्म करते हैं।")
              },
              {
                "type": "callout",
                "style": "warning",
                "heading": L("A Paradox", "एक विरोधाभास"),
                "text": L("Competing dairies often visit these same villages as the sixth or seventh stop on their route — giving farmers 30 to 45 extra minutes. Farmers find this more convenient, so Shakti MPC's first and second MPPs on many routes collect less milk than similar villages served by competitors. Careful route discipline protects quality, but may also be holding back procurement volume.", "प्रतिस्पर्धी डेयरियां अक्सर इन्हीं गांवों में अपने रूट के छठे या सातवें पड़ाव के रूप में जाती हैं — जिससे किसानों को 30 से 45 अतिरिक्त मिनट मिलते हैं। किसानों को यह ज़्यादा सुविधाजनक लगता है, इसलिए शक्ति MPC के कई रूटों पर पहले और दूसरे MPP प्रतिस्पर्धियों द्वारा सेवा प्राप्त समान गांवों की तुलना में कम दूध इकट्ठा करते हैं। सावधानीपूर्ण रूट अनुशासन गुणवत्ता की रक्षा करता है, लेकिन यह खरीद की मात्रा को भी रोक सकता है।")
              },
              {
                "type": "text",
                "heading": L("Small MPPs, Big Inefficiency", "छोटे MPP, बड़ी अकुशलता"),
                "html": L("A review of all 800 MPPs found the average was about 105 litres per MPP per day — but this hid a big problem underneath.", "सभी 800 MPP की समीक्षा में औसत लगभग 105 लीटर प्रति MPP प्रतिदिन पाया गया — लेकिन इसके नीचे एक बड़ी समस्या छिपी थी।")
              },
              {
                "type": "stat-grid",
                "items": [
                  {
                    "label": L("Less than 50 litres/day", "50 लीटर/दिन से कम"),
                    "text": L("About 30% of MPPs collect less than 50 litres a day — a very small amount for a vehicle to travel out for.", "लगभग 30% MPP प्रतिदिन 50 लीटर से कम इकट्ठा करते हैं — एक वाहन के जाने के लिए बहुत छोटी मात्रा।")
                  },
                  {
                    "label": L("50 to 100 litres/day", "50 से 100 लीटर/दिन"),
                    "text": L("About 50% of MPPs collect between 50 and 100 litres a day.", "लगभग 50% MPP प्रतिदिन 50 से 100 लीटर के बीच इकट्ठा करते हैं।")
                  },
                  {
                    "label": L("100 to 200 litres/day", "100 से 200 लीटर/दिन"),
                    "text": L("About 15% of MPPs collect between 100 and 200 litres a day.", "लगभग 15% MPP प्रतिदिन 100 से 200 लीटर के बीच इकट्ठा करते हैं।")
                  },
                  {
                    "label": L("More than 200 litres/day", "200 लीटर/दिन से ज़्यादा"),
                    "text": L("Only about 5% of MPPs collect more than 200 litres a day.", "केवल लगभग 5% MPP प्रतिदिन 200 लीटर से ज़्यादा इकट्ठा करते हैं।")
                  }
                ]
              },
              {
                "type": "example",
                "heading": L("A Costly Trip", "एक महंगी यात्रा"),
                "text": L("In many cases, a vehicle visits all ten MPPs allowed on a route but collects less than 1,000 litres in total for the whole trip. That means the vehicle, the fuel, and the driver's time are being used for a very small amount of milk — pushing the transport cost per litre higher.", "कई मामलों में, एक वाहन एक रूट पर अनुमत सभी दस MPP जाता है लेकिन पूरी यात्रा के लिए कुल मिलाकर 1,000 लीटर से कम इकट्ठा करता है। इसका मतलब है कि वाहन, ईंधन, और ड्राइवर का समय बहुत छोटी मात्रा में दूध के लिए इस्तेमाल हो रहे हैं — जिससे प्रति लीटर परिवहन लागत बढ़ जाती है।")
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": L("Why must milk from the first MPP on a route reach the chilling centre within three hours?", "एक रूट पर पहले MPP से दूध को तीन घंटे के भीतर चिलिंग सेंटर तक क्यों पहुंचना चाहिए?"),
                "options": [
                  L("To prevent rising acidity, bacterial growth and quality loss", "बढ़ती अम्लता, बैक्टीरिया वृद्धि और गुणवत्ता हानि को रोकने के लिए"),
                  L("Because the plant closes at that time", "क्योंकि प्लांट उस समय बंद हो जाता है"),
                  L("Because Sahayaks are only paid for three hours of work", "क्योंकि सहायकों को केवल तीन घंटे के काम के लिए भुगतान किया जाता है"),
                  L("Because vehicles cannot carry milk for longer", "क्योंकि वाहन इससे ज़्यादा समय तक दूध नहीं ले जा सकते")
                ],
                "answer": 0,
                "explain": L("Delays beyond three hours let acidity and bacteria increase, which deteriorates milk quality.", "तीन घंटे से ज़्यादा देरी अम्लता और बैक्टीरिया को बढ़ने देती है, जिससे दूध की गुणवत्ता बिगड़ती है।")
              },
              {
                "type": "mcq",
                "q": L("According to the MPP review, what share of MPPs collect less than 50 litres a day?", "MPP समीक्षा के अनुसार, कितने प्रतिशत MPP प्रतिदिन 50 लीटर से कम इकट्ठा करते हैं?"),
                "options": [
                  L("About 30%", "लगभग 30%"),
                  L("About 5%", "लगभग 5%"),
                  L("About 50%", "लगभग 50%"),
                  L("About 100%", "लगभग 100%")
                ],
                "answer": 0,
                "explain": L("Nearly 30 percent of MPPs were found to collect less than 50 litres per day.", "लगभग 30 प्रतिशत MPP प्रतिदिन 50 लीटर से कम इकट्ठा करते पाए गए।")
              }
            ]
          },
          {
            "id": "t-what-would-you-do",
            "title": L("What Would You Do? — A Decision for the Sahayak", "आप क्या करेंगे? — सहायक के लिए एक निर्णय"),
            "teach": [
              {
                "type": "text",
                "heading": L("Doing the Maths on a Low-Volume Route", "कम मात्रा वाले रूट पर गणित करना"),
                "html": L("Let's calculate what a low-volume route really costs. A vehicle visits all 10 MPPs allowed on a route and collects a total of 900 litres for the trip. If Shakti MPC's average inward transportation cost is ₹2.28 per litre, what should this trip cost to run?", "आइए गणना करें कि एक कम मात्रा वाले रूट की असली लागत क्या है। एक वाहन एक रूट पर अनुमत सभी 10 MPP जाता है और यात्रा के लिए कुल 900 लीटर इकट्ठा करता है। अगर शक्ति MPC की औसत इनवर्ड ट्रांसपोर्टेशन लागत ₹2.28 प्रति लीटर है, तो इस यात्रा को चलाने में कितना खर्च होना चाहिए?")
              },
              {
                "type": "example",
                "heading": L("Step 1: What the Trip Should Cost", "चरण 1: यात्रा की लागत क्या होनी चाहिए"),
                "text": L("At the company's average rate: 900 litres × ₹2.28 = ₹2,052. This is the transportation cost we would expect to be 'fair' for 900 litres on this route.", "कंपनी की औसत दर पर: 900 लीटर × ₹2.28 = ₹2,052। यह वह परिवहन लागत है जिसे हम इस रूट पर 900 लीटर के लिए 'उचित' मानेंगे।")
              },
              {
                "type": "text",
                "heading": L("But What If the Actual Trip Cost More?", "लेकिन क्या हो अगर असली यात्रा की लागत ज़्यादा हो?"),
                "html": L("Suppose the actual diesel, driver time and vehicle cost for this specific ten-MPP trip was ₹3,150 — because the vehicle travelled a long distance for a small amount of milk.", "मान लीजिए इस खास दस-MPP यात्रा के लिए असली डीजल, ड्राइवर समय और वाहन लागत ₹3,150 थी — क्योंकि वाहन ने थोड़ी मात्रा में दूध के लिए लंबी दूरी तय की।")
              },
              {
                "type": "ledger",
                "heading": L("This Route: Expected vs Actual Cost", "यह रूट: अपेक्षित बनाम असली लागत"),
                "rows": [
                  {
                    "label": L("Expected cost (900 litres × ₹2.28)", "अपेक्षित लागत (900 लीटर × ₹2.28)"),
                    "amount": "₹2,052"
                  },
                  {
                    "label": L("Actual cost of this trip", "इस यात्रा की असली लागत"),
                    "amount": "₹3,150"
                  }
                ],
                "total": {
                  "label": L("Extra cost above expected", "अपेक्षित से अतिरिक्त लागत"),
                  "amount": "₹1,098"
                }
              },
              {
                "type": "example",
                "heading": L("What This Means Per Litre", "प्रति लीटर इसका क्या मतलब है"),
                "text": L("₹3,150 ÷ 900 litres = ₹3.50 per litre — much higher than the company's average of ₹2.28 per litre. This single low-volume route is quietly pulling up the average cost for the whole company.", "₹3,150 ÷ 900 लीटर = ₹3.50 प्रति लीटर — कंपनी की औसत ₹2.28 प्रति लीटर से कहीं ज़्यादा। यह एक अकेला कम मात्रा वाला रूट चुपचाप पूरी कंपनी की औसत लागत बढ़ा रहा है।")
              },
              {
                "type": "callout",
                "style": "tip",
                "heading": L("Options on the Table", "मेज़ पर विकल्प"),
                "text": L("Shakti MPC's committee is weighing several options: restructuring routes, encouraging more milk at existing MPPs, trying electric or CNG vehicles, using smaller three-wheelers on low-volume routes, and possibly resequencing which villages are visited first.", "शक्ति MPC की समिति कई विकल्पों पर विचार कर रही है: रूटों का पुनर्गठन, मौजूदा MPP में ज़्यादा दूध को बढ़ावा देना, इलेक्ट्रिक या CNG वाहन आज़माना, कम मात्रा वाले रूटों पर छोटे तिपहिया वाहनों का उपयोग करना, और संभवतः यह फिर से तय करना कि कौन से गांव पहले जाए जाएं।")
              },
              {
                "type": "poll",
                "heading": L("What Would You Recommend First?", "आप पहले क्या सुझाएंगे?"),
                "questions": [
                  {
                    "q": L("If you were advising Shakti MPC's committee, which step would you try FIRST to reduce this route's cost per litre?", "अगर आप शक्ति MPC की समिति को सलाह दे रहे होते, तो इस रूट की प्रति लीटर लागत घटाने के लिए आप सबसे पहले कौन-सा कदम आज़माते?"),
                    "options": [
                      L("Use a smaller vehicle sized for this route's actual volume", "इस रूट की असली मात्रा के अनुसार छोटे आकार का वाहन इस्तेमाल करें"),
                      L("Buy the most expensive new tanker available", "उपलब्ध सबसे महंगा नया टैंकर खरीदें"),
                      L("Stop collecting milk from small MPPs completely", "छोटे MPP से दूध इकट्ठा करना पूरी तरह बंद कर दें"),
                      L("Ignore the cost and keep the same vehicle", "लागत को नज़रअंदाज़ करें और वही वाहन रखें")
                    ],
                    "answer": 0,
                    "reveal": L("Many producer companies have found that matching vehicle size to actual route volume — smaller vehicles for smaller routes — is often the fastest and cheapest way to bring cost per litre down, without changing route timing or losing farmer trust.", "कई प्रोड्यूसर कंपनियों ने पाया है कि वाहन के आकार को असली रूट मात्रा से मिलाना — छोटे रूटों के लिए छोटे वाहन — अक्सर प्रति लीटर लागत घटाने का सबसे तेज़ और सस्ता तरीका है, बिना रूट का समय बदले या किसान का भरोसा खोए।")
                  }
                ]
              },
              {
                "type": "callout",
                "style": "info",
                "heading": L("Not a Simple Fix", "कोई सरल समाधान नहीं"),
                "text": L("Every option has trade-offs. Smaller vehicles may struggle on poor roads or during peak season. EVs need charging infrastructure that is still limited in rural areas. Changing route timing could raise procurement but risks milk quality. Good decisions balance cost, quality, and what is fair and convenient for farmers.", "हर विकल्प के साथ समझौते जुड़े हैं। छोटे वाहनों को खराब सड़कों पर या शिखर मौसम में परेशानी हो सकती है। EV को चार्जिंग आधारभूत संरचना चाहिए जो ग्रामीण क्षेत्रों में अभी भी सीमित है। रूट का समय बदलने से खरीद बढ़ सकती है लेकिन दूध की गुणवत्ता को खतरा हो सकता है। अच्छे निर्णय लागत, गुणवत्ता, और किसानों के लिए जो उचित और सुविधाजनक है, उसे संतुलित करते हैं।")
              }
            ],
            "check": [
              {
                "type": "mcq",
                "q": L("In this example, what was the extra cost above the expected amount for the 900-litre trip?", "इस उदाहरण में, 900-लीटर यात्रा के लिए अपेक्षित राशि से अतिरिक्त लागत क्या थी?"),
                "options": [
                  L("₹1,098", "₹1,098"),
                  L("₹2,052", "₹2,052"),
                  L("₹3,150", "₹3,150"),
                  L("₹900", "₹900")
                ],
                "answer": 0,
                "explain": L("Extra cost = ₹3,150 actual − ₹2,052 expected = ₹1,098.", "अतिरिक्त लागत = ₹3,150 असली − ₹2,052 अपेक्षित = ₹1,098।")
              },
              {
                "type": "mcq",
                "q": L("What is one practical way to lower the cost per litre on a low-volume route?", "कम मात्रा वाले रूट पर प्रति लीटर लागत घटाने का एक व्यावहारिक तरीका क्या है?"),
                "options": [
                  L("Use a smaller vehicle that better matches the route's actual milk volume", "एक छोटा वाहन इस्तेमाल करें जो रूट की असली दूध मात्रा से बेहतर मेल खाता हो"),
                  L("Always use the biggest tanker available, regardless of volume", "मात्रा की परवाह किए बिना हमेशा सबसे बड़ा उपलब्ध टैंकर इस्तेमाल करें"),
                  L("Stop testing milk quality to save time", "समय बचाने के लिए दूध गुणवत्ता की जांच बंद कर दें"),
                  L("Remove the three-hour quality rule everywhere", "हर जगह तीन घंटे के गुणवत्ता नियम को हटा दें")
                ],
                "answer": 0,
                "explain": L("Right-sizing the vehicle to the route's actual volume is a practical way to bring transport cost per litre down.", "वाहन को रूट की असली मात्रा के अनुसार सही आकार देना प्रति लीटर परिवहन लागत घटाने का एक व्यावहारिक तरीका है।")
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
              "q": L("About how many producer members does Shakti MPC serve?", "शक्ति MPC लगभग कितने उत्पादक सदस्यों की सेवा करती है?"),
              "options": [
                L("Nearly 85,000", "लगभग 85,000"),
                L("Nearly 8,500", "लगभग 8,500"),
                L("Nearly 850", "लगभग 850"),
                L("Nearly 8,50,000", "लगभग 8,50,000")
              ],
              "answer": 0,
              "explain": L("Shakti MPC serves nearly 85,000 producer members.", "शक्ति MPC लगभग 85,000 उत्पादक सदस्यों की सेवा करती है।")
            },
            {
              "topicId": "t-where-money-goes",
              "type": "mcq",
              "q": L("What share of Shakti MPC's total cost per litre (₹4.50) comes from inward transportation (₹2.28)?", "शक्ति MPC की कुल प्रति लीटर लागत (₹4.50) का कितना हिस्सा इनवर्ड ट्रांसपोर्टेशन (₹2.28) से आता है?"),
              "options": [
                L("More than half of the total cost", "कुल लागत का आधे से ज़्यादा"),
                L("Less than 5% of the total cost", "कुल लागत का 5% से कम"),
                L("None of the total cost", "कुल लागत का कोई हिस्सा नहीं"),
                L("Exactly equal to the Sahayak commission", "सहायक कमीशन के बिल्कुल बराबर")
              ],
              "answer": 0,
              "explain": L("₹2.28 out of ₹4.50 is more than half of the total cost per litre.", "₹4.50 में से ₹2.28 प्रति लीटर कुल लागत का आधे से ज़्यादा है।")
            },
            {
              "topicId": "t-route-timing-puzzle",
              "type": "mcq",
              "q": L("Why do Shakti MPC's first and second MPPs on many routes often collect less milk than nearby villages served by competitors?", "शक्ति MPC के कई रूटों पर पहले और दूसरे MPP अक्सर प्रतिस्पर्धियों द्वारा सेवा प्राप्त पास के गांवों की तुलना में कम दूध क्यों इकट्ठा करते हैं?"),
              "options": [
                L("Competitors visit later in the route, giving farmers more time before the vehicle arrives", "प्रतिस्पर्धी रूट में बाद में जाते हैं, जिससे वाहन पहुंचने से पहले किसानों को ज़्यादा समय मिलता है"),
                L("Those villages have no farmers", "उन गांवों में कोई किसान नहीं है"),
                L("Shakti MPC pays a lower price there", "शक्ति MPC वहां कम कीमत देती है"),
                L("Those MPPs are closed on some days", "वे MPP कुछ दिनों में बंद रहते हैं")
              ],
              "answer": 0,
              "explain": L("Competitors visiting as the sixth or seventh stop give farmers 30-45 extra minutes, which farmers find more convenient.", "छठे या सातवें पड़ाव के रूप में जाने वाले प्रतिस्पर्धी किसानों को 30-45 अतिरिक्त मिनट देते हैं, जो किसानों को ज़्यादा सुविधाजनक लगता है।")
            },
            {
              "topicId": "t-what-would-you-do",
              "type": "mcq",
              "q": L("What is the biggest lesson from the 900-litre route example?", "900-लीटर रूट के उदाहरण से सबसे बड़ा सबक क्या है?"),
              "options": [
                L("A vehicle that is too big for a route's actual volume can push the cost per litre well above average", "एक ऐसा वाहन जो रूट की असली मात्रा के लिए बहुत बड़ा है, प्रति लीटर लागत को औसत से काफी ऊपर धकेल सकता है"),
                L("Bigger vehicles are always cheaper to run", "बड़े वाहन चलाने में हमेशा सस्ते होते हैं"),
                L("Route cost has nothing to do with vehicle size", "रूट लागत का वाहन के आकार से कोई लेना-देना नहीं है"),
                L("Only Sahayak commission affects route cost", "केवल सहायक कमीशन रूट लागत को प्रभावित करता है")
              ],
              "answer": 0,
              "explain": L("The 900-litre route's actual cost per litre (₹3.50) was well above the company average (₹2.28), showing how vehicle-to-volume mismatch drives up cost.", "900-लीटर रूट की असली प्रति लीटर लागत (₹3.50) कंपनी की औसत (₹2.28) से काफी ऊपर थी, जो दिखाती है कि वाहन-से-मात्रा का बेमेल कैसे लागत बढ़ाता है।")
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
