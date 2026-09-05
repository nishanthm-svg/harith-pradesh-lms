// ============================================================================
// Harith Pradesh LMS — Language support (English + Hindi only)
// A learner picks a language once (stored in localStorage) and every piece
// of UI chrome and lesson content renders in that language, falling back to
// English if a translation isn't available yet for a given piece of content.
// ============================================================================

export const LANGUAGES = [
  { code: "en", label: "English", native: "English" },
  { code: "hi", label: "Hindi", native: "हिन्दी" },
];

const LANG_KEY = "hp_lms_lang";

export function getLang() {
  return localStorage.getItem(LANG_KEY);
}

export function setLang(code) {
  localStorage.setItem(LANG_KEY, code);
}

// Shorthand used throughout data.js to build a translatable string:
// L("English text", "Hindi text")
export function L(en, hi) {
  return { en, hi: hi || en };
}

// Resolve a translatable field (either a plain string or an {en,hi} object
// built with L()) to text in the given language, always falling back to
// English so nothing ever renders blank.
export function tr(field, lang) {
  if (field == null) return "";
  if (typeof field === "string") return field;
  return field[lang] || field.en || "";
}

// UI chrome strings — everything that isn't lesson content.
const UI = {
  brandName: L("Harith Pradesh LMS", "हरित प्रदेश एलएमएस"),
  backButton: L("← Back", "← वापस"),

  dashboardTitle: L("🥛 Harith Pradesh Learning Academy", "🥛 हरित प्रदेश लर्निंग अकादमी"),
  dashboardTagline: L(
    "Learn step by step, on your own. Every topic is taught first — with examples and interactive moments — then checked, all at once, at the end.",
    "अपनी गति से, चरण दर चरण सीखें। हर विषय पहले उदाहरणों और रोचक गतिविधियों के साथ सिखाया जाता है — फिर अंत में सब कुछ एक साथ जाँचा जाता है।"
  ),
  progressHint: L(
    "Keep going — every lesson builds toward your certificate. 🎓",
    "आगे बढ़ते रहें — हर पाठ आपके प्रमाण पत्र की ओर एक कदम है। 🎓"
  ),
  badgeCompleted: L("✓ Completed", "✓ पूर्ण"),
  badgeInProgress: L("In progress", "जारी है"),
  badgeStart: L("Start", "शुरू करें"),
  badgeLocked: L("🔒 Locked", "🔒 बंद है"),
  comingSoon: L("Coming soon", "जल्द आ रहा है"),
  progressNote: L(
    "Your progress is saved to your account automatically.",
    "आपकी प्रगति स्वतः आपके खाते में सहेजी जाती है।"
  ),
  lessonsCompleteMeta: L("{completed}/{total} lessons complete", "{completed}/{total} पाठ पूरे"),
  lessonsCompletedCount: L("{done} of {total} lessons completed", "{total} में से {done} पाठ पूरे हुए"),
  moduleProgressComplete: L("{completed}/{total} complete", "{completed}/{total} पूर्ण"),
  lessonMeta: L("{min} min · {topics} topics", "{min} मिनट · {topics} विषय"),
  bestScoreSuffix: L("Best score {score}%", "सर्वश्रेष्ठ स्कोर {score}%"),
  lockedHint: L("Complete the previous lesson to unlock", "खोलने के लिए पिछला पाठ पूरा करें"),
  lessonOfTotal: L("Lesson {n} of {total}", "पाठ {n} / {total}"),
  topicOfTotal: L("Topic {n} of {total}", "विषय {n} / {total}"),
  prevButton: L("← Previous", "← पिछला"),
  nextTopicButton: L("Next Topic →", "अगला विषय →"),
  startQuizButton: L("📝 Start Lesson Quiz →", "📝 पाठ क्विज़ शुरू करें →"),
  lessonQuizTitle: L("📝 Lesson Quiz", "📝 पाठ क्विज़"),
  lessonQuizSub: L(
    "You've learned every topic in this lesson. Let's check everything together, all at once. If you miss something, you'll get a chance to re-learn just that part.",
    "आपने इस पाठ के सभी विषय सीख लिए हैं। अब सब कुछ एक साथ जाँचते हैं। अगर कोई सवाल गलत हुआ, तो आपको वह हिस्सा फिर से सीखने का मौका मिलेगा।"
  ),
  submitQuizButton: L("Submit Lesson Quiz", "पाठ क्विज़ जमा करें"),
  checkAnswersButton: L("Check My Answers", "मेरे उत्तर जाँचें"),
  checkAgainButton: L("Check Again", "फिर से जाँचें"),
  questionOfTotal: L("Question {n} of {total}", "प्रश्न {n} / {total}"),
  reviewTitlePrefix: L("📖 Let's Review:", "📖 फिर से देखते हैं:"),
  reviewSub: L(
    "You missed a question about this earlier. Here it is again — take your time.",
    "आपने इस बारे में एक सवाल पहले गलत किया था। यह फिर से यहाँ है — अपना समय लें।"
  ),
  tryAgainHeading: L("🔄 Try Again", "🔄 फिर से कोशिश करें"),
  reviewNextTopic: L("Review Next Topic →", "अगला विषय देखें →"),
  finishLesson: L("Finish Lesson →", "पाठ पूरा करें →"),
  reviewRetry: L("Read It Again & Retry", "फिर से पढ़ें और कोशिश करें"),
  checkPassGotIt: L("🎉 Got it — that's cleared up now!", "🎉 समझ गए — अब यह साफ़ है!"),
  checkFailTitle: L("Still not quite — one more look.", "अभी भी ठीक नहीं — एक बार और देखें।"),
  checkFailSub: L(
    "Scroll up and re-read this topic, then try once more.",
    "ऊपर जाकर इस विषय को फिर से पढ़ें, फिर एक बार और कोशिश करें।"
  ),
  completePassTitle: L("Great work!", "बहुत बढ़िया!"),
  completeReviewedTitle: L("All caught up!", "सब कुछ समझ गए!"),
  completePassText: L(
    "You've learned and passed every topic in this lesson.",
    "आपने इस पाठ के हर विषय को सीखा और पास किया है।"
  ),
  completeReviewedText: L(
    "You reviewed a few things and now know this lesson well.",
    "आपने कुछ चीज़ें फिर से देखीं और अब यह पाठ अच्छी तरह समझते हैं।"
  ),
  viewCertificate: L("View Certificate", "प्रमाण पत्र देखें"),
  continueNextLesson: L("Continue to Next Lesson →", "अगले पाठ पर जाएँ →"),
  backToModule: L("Back to Module", "मॉड्यूल पर वापस जाएँ"),
  moduleCompleteTitle: L("Module {n} Complete!", "मॉड्यूल {n} पूरा हुआ!"),
  moduleCompleteText: L(
    'You\'ve finished "{title}". Great job working through every lesson and quiz on your own.',
    '"{title}" आपने पूरा कर लिया। हर पाठ और क्विज़ खुद पूरा करने के लिए बधाई।'
  ),
  backToDashboard: L("Back to Dashboard", "डैशबोर्ड पर वापस जाएँ"),
  reviewModule: L("Review Module", "मॉड्यूल फिर से देखें"),
  nextModuleComingSoon: L('Module {n}: "{title}" is coming soon.', 'मॉड्यूल {n}: "{title}" जल्द आ रहा है।'),
  tapToReveal: L("👆 Tap to see what this means", "👆 अर्थ देखने के लिए टैप करें"),

  langPickerTitle: L("Choose Your Language", "अपनी भाषा चुनें"),
  langPickerSub: L(
    "Select the language you'd like to learn in. You can change this anytime.",
    "वह भाषा चुनें जिसमें आप सीखना चाहते हैं। आप इसे कभी भी बदल सकते हैं।"
  ),
  langContinue: L("Continue →", "आगे बढ़ें →"),
  changeLanguage: L("Language", "भाषा"),
  trueLabel: L("True", "सही"),
  falseLabel: L("False", "गलत"),

  landingHeroTitle: L(
    "Learn to Serve Farmers Better — At Your Own Pace",
    "किसानों की बेहतर सेवा करना सीखें — अपनी गति से"
  ),
  landingHeroSubtitle: L(
    "A training course for Harith Pradesh employees. Learn step by step, in the language you're most comfortable with.",
    "हरित प्रदेश के कर्मचारियों के लिए एक प्रशिक्षण पाठ्यक्रम। अपनी सुविधा की भाषा में, चरण दर चरण सीखें।"
  ),
  employeeLoginButton: L("👤 Employee Login →", "👤 कर्मचारी लॉगिन →"),
  adminLoginButtonLabel: L("🧑‍💼 Admin Login →", "🧑‍💼 एडमिन लॉगिन →"),
  landingFeature1Title: L("12 Modules", "12 मॉड्यूल"),
  landingFeature1Text: L(
    "From dairy basics to milk pricing, MPP routes, and cost management.",
    "डेयरी की मूल बातों से लेकर दूध की कीमत, एमपीपी मार्ग और लागत प्रबंधन तक।"
  ),
  landingFeature2Title: L("English & Hindi", "अंग्रेज़ी और हिन्दी"),
  landingFeature2Text: L(
    "Learn in English or Hindi — whichever you're comfortable with.",
    "अंग्रेज़ी या हिन्दी में सीखें — जो भी आपके लिए आसान हो।"
  ),
  landingFeature3Title: L("Tracked Progress", "प्रगति की निगरानी"),
  landingFeature3Text: L(
    "Your learning is saved to your account, and your progress is visible to your admin.",
    "आपकी सीख आपके खाते में सहेजी जाती है, और आपकी प्रगति आपके एडमिन को दिखती है।"
  ),

  // Login / auth
  loginTitle: L("Sign In", "साइन इन करें"),
  employeeLoginTitle: L("👤 Employee Sign In", "👤 कर्मचारी साइन इन"),
  adminLoginTitle: L("🧑‍💼 Admin Sign In", "🧑‍💼 एडमिन साइन इन"),
  loginSubtitle: L("Enter your email and password to continue.", "जारी रखने के लिए अपना ईमेल और पासवर्ड डालें।"),
  loginIdLabel: L("Email Address", "ईमेल पता"),
  adminUsernameLabel: L("Username", "यूज़रनेम"),
  passwordLabel: L("Password", "पासवर्ड"),
  loginButton: L("Sign In", "साइन इन करें"),
  loginSigningIn: L("Signing in…", "साइन इन हो रहा है…"),
  loginErrorGeneric: L("Something went wrong. Please try again.", "कुछ गलत हो गया। कृपया फिर से कोशिश करें।"),
  loginWrongPortalEmployee: L(
    "This is an employee account. Please use Employee Login instead.",
    "यह एक कर्मचारी खाता है। कृपया कर्मचारी लॉगिन का उपयोग करें।"
  ),
  loginWrongPortalAdmin: L(
    "This is an admin account. Please use Admin Login instead.",
    "यह एक एडमिन खाता है। कृपया एडमिन लॉगिन का उपयोग करें।"
  ),
  logoutButton: L("Log out", "लॉग आउट"),
  adminNavLink: L("Admin", "एडमिन"),

  changePasswordTitle: L("Set a New Password", "नया पासवर्ड बनाएँ"),
  changePasswordSubtitle: L(
    "For your security, please set your own password before continuing.",
    "सुरक्षा के लिए, आगे बढ़ने से पहले कृपया अपना पासवर्ड बनाएँ।"
  ),
  currentPasswordLabel: L("Current password", "मौजूदा पासवर्ड"),
  newPasswordLabel: L("New password", "नया पासवर्ड"),
  newPasswordHint: L("At least 6 characters.", "कम से कम 6 अक्षर।"),
  changePasswordButton: L("Save New Password", "नया पासवर्ड सहेजें"),
  changePasswordSaving: L("Saving…", "सहेजा जा रहा है…"),

  // Admin portal
  adminDashboardTitle: L("🧑‍💼 Admin Dashboard", "🧑‍💼 एडमिन डैशबोर्ड"),
  adminDashboardTagline: L(
    "See every employee's progress, and manage employee accounts.",
    "हर कर्मचारी की प्रगति देखें, और कर्मचारी खातों का प्रबंधन करें।"
  ),
  adminEmployeesHeading: L("Employees", "कर्मचारी"),
  adminAddEmployeeButton: L("+ Add Employee", "+ कर्मचारी जोड़ें"),
  adminExportCsvButton: L("⬇ Export CSV", "⬇ सीएसवी डाउनलोड करें"),
  adminSearchPlaceholder: L("Search by name or login ID…", "नाम या लॉगिन आईडी से खोजें…"),
  adminTableName: L("Name", "नाम"),
  adminTableLoginId: L("Login ID", "लॉगिन आईडी"),
  adminTableProgress: L("Progress", "प्रगति"),
  adminTableModules: L("Modules", "मॉड्यूल"),
  adminTableLastActive: L("Last Active", "अंतिम सक्रियता"),
  adminTableStatus: L("Status", "स्थिति"),
  adminStatusActive: L("Active", "सक्रिय"),
  adminStatusInactive: L("Inactive", "निष्क्रिय"),
  adminNoEmployees: L("No employees yet. Add your first one to get started.", "अभी कोई कर्मचारी नहीं है। शुरू करने के लिए पहला कर्मचारी जोड़ें।"),
  adminNeverActive: L("Never", "कभी नहीं"),

  adminNewEmployeeTitle: L("Add Employee", "कर्मचारी जोड़ें"),
  adminDisplayNameLabel: L("Full name", "पूरा नाम"),
  adminLoginIdHint: L("Must be a real email address the employee can access.", "यह एक असली ईमेल पता होना चाहिए जिसे कर्मचारी खोल सके।"),
  adminTempPasswordLabel: L("Temporary password", "अस्थायी पासवर्ड"),
  adminTempPasswordHint: L(
    "The employee will be asked to set their own password on first login.",
    "कर्मचारी को पहली बार लॉगिन करने पर अपना पासवर्ड बनाने के लिए कहा जाएगा।"
  ),
  adminCreateButton: L("Create Account", "खाता बनाएँ"),
  adminCreating: L("Creating…", "बनाया जा रहा है…"),
  adminCancelButton: L("Cancel", "रद्द करें"),

  adminEmployeeDetailBack: L("← All Employees", "← सभी कर्मचारी"),
  adminResetPasswordButton: L("Reset Password", "पासवर्ड रीसेट करें"),
  adminDeactivateButton: L("Deactivate", "निष्क्रिय करें"),
  adminReactivateButton: L("Reactivate", "पुनः सक्रिय करें"),
  adminResetPasswordPromptTitle: L("Reset Password", "पासवर्ड रीसेट करें"),
  adminResetPasswordPromptSub: L(
    "We'll email the employee a link to set a new password themselves.",
    "हम कर्मचारी को एक ईमेल भेजेंगे जिससे वे खुद नया पासवर्ड बना सकें।"
  ),
  adminSendResetEmailButton: L("Send Reset Email", "रीसेट ईमेल भेजें"),
  adminResetEmailSentNote: L("Reset email sent to {email}.", "{email} पर रीसेट ईमेल भेज दिया गया है।"),
  adminModuleLabel: L("Module {n}", "मॉड्यूल {n}"),
  adminLessonsCompleteLabel: L("{completed}/{total} lessons", "{completed}/{total} पाठ"),
  adminOverallLabel: L("Overall completion", "कुल पूर्णता"),
  adminSavedNote: L("Saved.", "सहेजा गया।"),
};

export function ui(key, lang, vars) {
  const entry = UI[key];
  let text = entry ? entry[lang] || entry.en : key;
  if (vars) {
    Object.keys(vars).forEach((k) => {
      text = text.split(`{${k}}`).join(String(vars[k]));
    });
  }
  return text;
}
