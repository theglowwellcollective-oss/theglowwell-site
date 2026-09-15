/* translations.js — The Glow Well · German (de) and French (fr)
 *
 * English lives inline in the HTML and is the fallback: nothing here is needed for EN.
 * Fill in the "" values below. Any value left "" keeps the English for that string.
 *
 * How strings are applied (see i18n.js):
 *  - Plain text replaces the element's text. Child elements that carry no words
 *    (icons, ✓/✗ marks, live numbers, the "—" placeholders) are preserved automatically.
 *  - If the EN comment contains tags (<em>, <br>, <a …>, <span …>, <strong …>), keep those
 *    exact tags in your translation — the string is then inserted as HTML.
 *  - {price}, {age} and {n} are placeholders the page fills in at runtime. Keep them.
 *  - Keys starting with js_ are strings the quiz page builds at runtime (loading phrases,
 *    result labels, error messages, share text).
 *  - Quiz answers are NOT here on purpose: the values submitted to the Worker / MailerLite
 *    stay English; only the visible labels (q2_opt*, q3_opt*) are translated.
 */
var TRANSLATIONS = {
  de: {
    // ── index.html — head / nav ──
    // EN: Glow Scan by The Glow Well — Free AI Skin Analysis
    index_title: "Glow Scan von The Glow Well — Kostenlose KI-Hautanalyse",
    // EN: Home
    nav_home: "Startseite",
    // EN: Blog
    nav_blog: "Blog",
    // EN: Free Resources
    nav_resources: "Kostenlose Ressourcen",
    // EN: Find Your Kit
    nav_kit: "Finden Sie Ihr Kit",
    // EN: About
    nav_about: "Über uns",
    // EN: Get the Playbook
    nav_playbook_cta: "Sichern Sie sich das Playbook",
    // EN: Scan My Skin — Free
    nav_scan_cta: "Haut scannen — Kostenlos",
    // EN: Scan Free →
    nav_scan_mobile: "Kostenlos scannen →",
    // EN: Playbook
    nav_playbook: "Playbook",
    // EN: Privacy Policy
    footer_privacy: "Datenschutzrichtlinie",
    // EN: Contact
    footer_contact: "Kontakt",
    // EN: © 2025 The Glow Well · theglowwell.com
    footer_copy: "© 2025 The Glow Well · theglowwell.com",

    // ── index.html — hero ──
    // EN: Free Skin Analysis · 150,000+ Scans Taken
    hero_eyebrow: "Kostenlose Hautanalyse · Über 150.000 Scans durchgeführt",
    // EN: Your Skin Has Been Sending Signals. It's Time to <em>Listen.</em>
    hero_h1: "Ihre Haut sendet Signale. Es ist Zeit, <em>zuzuhören.</em>",
    // EN: Upload a selfie. Answer 3 quick questions. Find out exactly what your skin needs — and how to give it to you.
    hero_sub: "Laden Sie ein Selfie hoch. Beantworten Sie 3 kurze Fragen. Finden Sie genau heraus, was Ihre Haut braucht – und wie Sie sie optimal pflegen.",
    // EN: 5 questions · One photo · One minute
    hero_five_q: "5 Fragen · Ein Foto · Eine Minute",
    // EN: people getting their Glow Score right now
    hero_live_counter: "Personen berechnen gerade ihren Glow Score",
    // EN: Reveal My Glow Score — It's Free
    hero_cta: "Meinen Glow Score anzeigen — Kostenlos",
    // EN: Free
    trust_free: "Kostenlos",
    // EN: No account
    trust_no_account: "Kein Account nötig",
    // EN: No credit card
    trust_no_card: "Keine Kreditkarte",
    // EN: Look younger. Feel confident. Stop guessing.
    hero_tagline: "Jünger aussehen. Selbstbewusst fühlen. Schluss mit dem Rätselraten.",
    // EN: 🔒 Analyzed & Deleted immediately. Never stored.
    hero_privacy: "🔒 Sofort analysiert & gelöscht. Niemals gespeichert.",
    // EN: Your Glow Score
    mock_label: "Ihr Glow Score",
    // EN: Hydration
    score_hydration: "Feuchtigkeit",
    // EN: Barrier Health
    score_barrier: "Barrieregesundheit",
    // EN: Texture Clarity
    score_texture: "Hautbild & Klarheit",
    // EN: Radiance
    score_radiance: "Ausstrahlung",
    // EN: FREE GLOW SCAN · THEGLOWWELL.COM
    brand_watermark: "KOSTENLOSER GLOW SCAN · THEGLOWWELL.COM",

    // ── index.html — old way / new way ──
    // EN: Why this is different
    why_eyebrow: "Warum das hier anders ist",
    // EN: Stop guessing. <em style="color:var(--sage-dark)">Start knowing.</em>
    why_h2: "Schluss mit Raten. <em style=\"color:var(--sage-dark)\">Fangen Sie an zu verstehen.</em>",
    // EN: Built on peer-reviewed dermatology research — not TikTok trends.
    credibility_line: "Basiert auf fundierter dermatologischer Forschung — nicht auf TikTok-Trends.",
    // EN: The old way
    old_way_title: "Der alte Weg",
    // EN: Buy whatever TikTok recommends
    old_way_1: "Kaufen, was TikTok gerade empfiehlt",
    // EN: Trial and error, shelf of regrets
    old_way_2: "Trial-and-Error und ein Schrank voller Fehlkäufe",
    // EN: Generic routines built for no one
    old_way_3: "Generische Routinen, die für niemanden gemacht sind",
    // EN: Waste $600+ on products that don't match your skin
    old_way_4: "Über 600 € für Produkte verschwenden, die nicht zu Ihrer Haut passen",
    // EN: The Glow Well way
    new_way_title: "Der Glow Well Weg",
    // EN: Know exactly what YOUR skin needs
    new_way_1: "Genau wissen, was IHRE Haut braucht",
    // EN: Built from your face scan, not a template
    new_way_2: "Basierend auf Ihrem Gesichtsscan, nicht auf Vorlagen",
    // EN: Personalized to your skin, age and budget
    new_way_3: "Personalisiert auf Ihre Haut, Ihr Alter und Ihr Budget",
    // EN: One scan. One plan. Zero guessing.
    new_way_4: "Ein Scan. Ein Plan. Null Rätselraten.",

    // ── index.html — how it works ──
    // EN: How it works
    how_eyebrow: "Wie es funktioniert",
    // EN: Three steps. <em>60 seconds.</em>
    how_h2: "Drei Schritte. <em>60 Sekunden.</em>",
    // EN: No account. No credit card. Just your selfie and 5 questions.
    how_sub: "Kein Account. Keine Kreditkarte. Nur Ihr Selfie und 5 Fragen.",
    // EN: Answer 5 questions
    how_step1_title: "5 Fragen beantworten",
    // EN: Skin concern, budget, routine, and how your skin feels. 30 seconds.
    how_step1_desc: "Hautbedürfnisse, Budget, Routine und wie sich Ihre Haut anfühlt. Dauert 30 Sekunden.",
    // EN: Upload your selfie
    how_step2_title: "Laden Sie Ihr Selfie hoch",
    // EN: Our trained scanner does the rest.
    how_step2_desc: "Unser trainierter Scanner erledigt den Rest.",
    // EN: Get your Glow Score
    how_step3_title: "Erhalten Sie Ihren Glow Score",
    // EN: Your skin age, personalized score, and 3 things to know — free instantly.
    how_step3_desc: "Ihr Hautalter, Ihr personalisierter Score und 3 wichtige Erkenntnisse — sofort und kostenlos.",
    // EN: Start Your Free Scan →
    how_cta: "Kostenlosen Scan starten →",

    // ── index.html — real results photos ──
    // EN: Real results
    photos_eyebrow: "Echte Ergebnisse",
    // EN: What the right routine <em>actually does.</em>
    photos_h2: "Was die richtige Routine <em>wirklich bewirkt.</em>",
    // EN: Consistent routine use over 6-8 weeks. Real people, real skin.
    photos_sub: "Konsequente Anwendung über 6-8 Wochen. Echte Menschen, echte Haut.",
    // EN: Results shown are from 6-8 weeks of consistent routine use — your skin's timeline may vary, but the path is the same.
    photos_disclaimer: "Die gezeigten Ergebnisse stammen aus 6-8 Wochen konsequenter Anwendung — das Tempo Ihrer Haut kann variieren, aber der Weg bleibt der gleiche.",

    // ── index.html — reviews ──
    // EN: What people are saying
    reviews_eyebrow: "Was unsere Nutzerinnen sagen",
    // EN: Real skin. <em>Real results.</em>
    reviews_h2: "Echte Haut. <em>Echte Ergebnisse.</em>",
    // EN: 4.9/5 average · Verified
    reviews_sub: "4.9/5 Durchschnitt · Verifiziert",
    // EN: "I thought I had dry skin for 3 years. Nope. Just a destroyed barrier. Fixed it in 3 weeks."
    review_1_quote: "\"Ich dachte 3 Jahre lang, ich hätte trockene Haut. Nein. Nur eine zerstörte Hautbarriere. In 3 Wochen repariert.\"",
    // EN: Sara, 26 · Verified
    review_1_attr: "Sara, 26 · Verifiziert",
    // EN: "Called out the exact stuff I keep buying and never use. Saved me money immediately."
    review_2_quote: "\"Hat genau die Produkte entlarvt, die ich ständig kaufe und nie benutze. Hat mir sofort Geld gespart.\"",
    // EN: Yasmine, 34 · Verified
    review_2_attr: "Yasmine, 34 · Verifiziert",
    // EN: "Finally understood why that $80 serum did nothing. Wrong acid for my skin."
    review_3_quote: "\"Endlich habe ich verstanden, warum dieses 80-Euro-Serum nichts gebracht hat. Die falsche Säure für meine Haut.\"",
    // EN: Celeste, 42 · Verified
    review_3_attr: "Celeste, 42 · Verifiziert",
    // EN: See What Your Skin Says →
    reviews_cta: "Sehen Sie, was Ihre Haut sagt →",

    // ── index.html — playbook ──
    // EN: Want the complete system?
    playbook_eyebrow: "Möchten Sie das komplette System?",
    // EN: The 96-page guide <em>behind the scan.</em>
    playbook_h2: "Der 96-seitige Guide <em>hinter dem Scan.</em>",
    // EN: Ingredient decoder. Budget routines. Store shopping lists. Everything your Glow Scan points toward.
    playbook_sub: "Inhaltsstoff-Dekoder. Budget-Routinen. Einkaufslisten. Alles, worauf Ihr Glow Scan hinweist.",
    // EN: 96 pages of clarity
    playbook_prop1_title: "96 Seiten Klarheit",
    // EN: Budget tiers, ingredient decoder, store lists for Target, Walmart, Amazon, and Sephora.
    playbook_prop1_desc: "Budget-Kategorien, Inhaltsstoff-Dekoder, Einkaufslisten für Amazon, Sephora und Drogerien.",
    // EN: Works with your scan
    playbook_prop2_title: "Abgestimmt auf Ihren Scan",
    // EN: The education behind every recommendation your Glow Scan makes.
    playbook_prop2_desc: "Das Wissen hinter jeder Empfehlung Ihres Glow Scans.",
    // EN: Get the Playbook — $19.99
    playbook_cta: "Playbook holen — 19,99 $",
    // EN: Already have your Glow Score? The Playbook explains the why behind every result.
    playbook_note: "Haben Sie bereits Ihren Glow Score? Das Playbook erklärt das Warum hinter jedem Ergebnis.",

    // ── index.html — final CTA ──
    // EN: Find out for free
    final_eyebrow: "Kostenlos herausfinden",
    // EN: Your skin has something<br>to tell you.
    final_h2: "Ihre Haut möchte Ihnen<br>etwas mitteilen.",
    // EN: Find out what it is. Free. In 60 seconds.
    final_sub: "Finden Sie heraus, was es ist. Kostenlos. In 60 Sekunden.",
    // EN: Scan My Skin — It's Free
    final_cta: "Meine Haut scannen — Es ist kostenlos",
    // EN: Photo deleted instantly · No account · 7-day report guarantee
    final_trust: "Foto wird sofort gelöscht · Kein Account · 7-Tage-Report-Garantie",

    // ── glowscan-v2.html — head / nav ──
    // EN: Glow Scan — Free AI Skin Analysis | The Glow Well
    scan_title: "Glow Scan — Kostenlose KI-Hautanalyse | The Glow Well",
    // EN: Free Scan
    nav_free_scan: "Kostenloser Scan",

    // ── glowscan-v2.html — screen 1 (hero) ──
    // EN: Free AI Skin Analysis
    s1_eyebrow: "Kostenlose KI-Hautanalyse",
    // EN: Your skin has been sending signals. It's time to listen.
    s1_h1: "Ihre Haut sendet Signale. Es ist Zeit, zuzuhören.",
    // EN: Reveal My Glow Score — Free
    s1_cta: "Meinen Glow Score anzeigen — Kostenlos",
    // EN: By continuing you agree to our <a href="privacy.html" style="color:var(--text-light);text-decoration:underline;text-underline-offset:2px;">Privacy Policy</a>.
    s1_privacy_agree: "Mit dem Fortfahren akzeptieren Sie unsere <a href=\"privacy.html\" style=\"color:var(--text-light);text-decoration:underline;text-underline-offset:2px;\">Datenschutzrichtlinie</a>.",
    // EN: Photo never stored
    s1_trust_photo: "Foto wird nie gespeichert",
    // EN: 60 seconds
    s1_trust_time: "60 Sekunden",
    // EN: Used by 14,000+ women who finally stopped guessing
    s1_social: "Genutzt von über 14.000 Frauen, die endlich aufhören konnten zu raten",

    // ── glowscan-v2.html — screen 2 (quiz) — labels only; submitted values stay English ──
    // EN: Step 1 of 4
    q_progress_1: "Schritt 1 von 4",
    // EN: Your skin is trying to tell you something. Every day.<br>These 3 questions help us hear it.
    q_intro: "Ihre Haut versucht Ihnen etwas mitzuteilen. Jeden Tag.<br>Diese 3 Fragen helfen uns, sie zu verstehen.",
    // EN: Question 1
    q1_label: "Frage 1",
    // EN: How old are you?
    q1_text: "Wie alt sind Sie?",
    // EN: (Your skin age might be a very different number.)
    q1_hint: "(Ihr Hautalter könnte eine ganz andere Zahl sein.)",
    // EN: Enter your age
    q1_placeholder: "Geben Sie Ihr Alter ein",
    // EN: Question 2
    q2_label: "Frage 2",
    // EN: Every skin type has a signature. Yours is already talking — <em>what's it saying?</em>
    q2_text: "Jeder Hauttyp hat eine Signatur. Ihre spricht bereits — <em>was sagt sie?</em>",
    // EN: Fine lines that weren't there last year
    q2_opt1: "Feine Linien, die letztes Jahr noch nicht da waren",
    // EN: Dull and tired, even when I'm not
    q2_opt2: "Fahl und müde, selbst wenn ich es nicht bin",
    // EN: Reactive — my skin has opinions about everything
    q2_opt3: "Reaktiv — meine Haut reagiert auf fast alles empfindlich",
    // EN: Oily by noon, tight by morning — make it make sense
    q2_opt4: "Mittags ölig, morgens spannend — ich verstehe es nicht",
    // EN: Texture that foundation can't hide
    q2_opt5: "Unregelmäßiges Hautbild, das auch Make-up nicht versteckt",
    // EN: Breaking out at an age I shouldn't be
    q2_opt6: "Unreinheiten in einem Alter, in dem ich sie nicht mehr haben sollte",
    // EN: Question 3
    q3_label: "Frage 3",
    // EN: Where are you based?
    q3_text: "Wo leben Sie?",
    // EN: (This helps us match UV exposure, climate, and environmental stress to your skin.)
    q3_hint: "(Das hilft uns, UV-Belastung, Klima und Umweltstress an Ihre Haut anzupassen.)",
    // EN: Select your region...
    q3_placeholder: "Wählen Sie Ihre Region...",
    // EN: 🌎 North America (US, Canada)
    q3_opt_na: "🌎 Nordamerika (USA, Kanada)",
    // EN: 🌍 Western Europe (UK, France, Germany + EU)
    q3_opt_we: "🌍 Westeuropa (UK, Frankreich, Deutschland + EU)",
    // EN: 🌏 Australia & New Zealand
    q3_opt_anz: "🌏 Australien & Neuseeland",
    // EN: 🕌 Middle East (UAE, Saudi Arabia, Gulf)
    q3_opt_me: "🕌 Naher Osten (VAE, Saudi-Arabien, Golfregion)",
    // EN: 🌐 East Asia (China, Japan, Korea, Southeast Asia)
    q3_opt_ea: "🌐 Ostasien (China, Japan, Korea, Südostasien)",
    // EN: 🌸 South Asia (India, Pakistan, Bangladesh)
    q3_opt_sa: "🌸 Südasien (Indien, Pakistan, Bangladesch)",
    // EN: 🌑 Africa & South America
    q3_opt_afsa: "🌑 Afrika & Südamerika",
    // EN: Next — Upload Your Photo →
    q_next: "Weiter — Laden Sie Ihr Foto hoch →",
    // EN: Answer all 3 questions to continue
    q_in_progress: "Beantworten Sie alle 3 Fragen, um fortzufahren",

    // ── glowscan-v2.html — screen 2b (photo upload) ──
    // EN: Step 2 of 4
    q_progress_2: "Schritt 2 von 4",
    // EN: Final step before your results
    upload_eyebrow: "Letzter Schritt vor Ihren Ergebnissen",
    // EN: Now the scan sees what the questions can't.
    upload_headline: "Jetzt sieht der Scan das, was die Fragen nicht erfassen können.",
    // EN: Trained on 150,000+ real skin analyses. It takes 15 seconds. Your photo is deleted the moment it's done.
    upload_subtext: "Trainiert mit über 150.000 echten Hautanalysen. Es dauert 15 Sekunden. Ihr Foto wird sofort nach Abschluss gelöscht.",
    // EN: Tap to upload your photo
    upload_title: "Tippen Sie hier, um Ihr Foto hochzuladen",
    // EN: Face fully in frame, no sunglasses. The more real, the more accurate.
    upload_sub: "Das Gesicht komplett im Bild, keine Sonnenbrille. Je natürlicher, desto genauer.",
    // EN: women uploading their photo right now
    upload_live_counter: "Frauen laden in diesem Moment ihr Foto hoch",
    // EN: 🔒 Analyzed by AI. Never seen by a human. Deleted instantly. Not stored — ever.<br> <span>Your photo never touches a human. Ever.</span>
    upload_privacy: "🔒 Durch KI analysiert. Kein menschlicher Blick. Sofort gelöscht. Niemals gespeichert.<br> <span>Ihr Foto wird von keinem Menschen gesehen. Niemals.</span>",
    // EN: "It scanned my skin age as 39. I'm 44. I literally cried — absolutely love the AM/PM routine it recommended."
    upload_quote: "\"Mein Hautalter wurde auf 39 geschätzt. Ich bin 44. Ich habe wirklich geweint — und ich liebe die empfohlene Morgen-/Abendroutine absolut.\"",
    // EN: — Gianna M., 44 · Verified
    upload_attr: "— Gianna M., 44 · Verifiziert",

    // ── glowscan-v2.html — screen 2c (email) ──
    // EN: Step 3 of 4
    q_progress_3: "Schritt 3 von 4",
    // EN: Your Glow Score is ready.
    email_heading: "Ihr Glow Score ist fertig.",
    // EN: Where should we send your results?
    email_subhead: "Wohin sollen wir Ihre Ergebnisse senden?",
    // EN: We'll analyze your scan and have your personalized results ready in 15 seconds.
    email_sub: "Wir analysieren Ihren Scan und stellen Ihre personalisierten Ergebnisse in 15 Sekunden bereit.",
    // EN: Your email address
    email_placeholder: "Ihre E-Mail-Adresse",
    // EN: Photo analyzed instantly. Never stored on our servers.<br>No spam — just your results and occasional skin tips.
    email_privacy: "Foto wird sofort analysiert. Niemals auf unseren Servern gespeichert.<br>Kein Spam — nur Ihre Ergebnisse und gelegentliche Hautpflege-Tipps.",
    // EN: Send Me My Results →
    email_cta: "Senden Sie mir meine Ergebnisse →",

    // ── glowscan-v2.html — screen 3 (loading) ──
    // EN: Scanning sebaceous activity...
    loading_initial: "Talgdrüsenaktivität wird gescannt...",
    // EN: 14,000+ women have seen results they didn't expect.
    loading_footnote: "Über 14.000 Frauen haben Ergebnisse gesehen, die sie nicht erwartet hätten.",

    // ── glowscan-v2.html — screen 4 (free results) ──
    // EN: See What's In Your Full Report →
    r_see_full: "Sehen Sie, was in Ihrem vollständigen Report steht →",
    // EN: Your Free Glow Scan Results
    r_eyebrow: "Ihre kostenlosen Glow Scan Ergebnisse",
    // EN: Skin Age
    r_skin_age: "Hautalter",
    // EN: estimated biological age
    r_age_sub: "geschätztes biologisches Alter",
    // EN: vs. your actual age
    r_gap_label: "vs. Ihr tatsächliches Alter",
    // EN: Skin age isn't permanent. Your full report shows exactly how to lower it.
    r_not_permanent: "Das Hautalter ist nicht dauerhaft. Ihr vollständiger Report zeigt Ihnen genau, wie Sie es senken können.",
    // EN: Skin Age:
    r_skin_age_mini: "Hautalter:",
    // EN: Glow Score: <strong id="glowScoreMini" style="color:var(--charcoal);font-size:16px">—</strong>/100
    r_glow_score_mini: "Glow Score: <strong id=\"glowScoreMini\" style=\"color:var(--charcoal);font-size:16px\">—</strong>/100",
    // EN: Your Skin Scores
    r_scores_title: "Ihre Haut-Scores",
    // EN: Your Glow Score
    r_glow_total_label: "Ihr Glow Score",
    // EN: Your Glow Stage
    r_glow_stage: "Ihre Glow-Stufe",
    // EN: Share Your Glow Score With a Friend
    r_share_btn: "Teilen Sie Ihren Glow Score mit einer Freundin",
    // EN: For educational purposes only. Not a substitute for professional medical advice.
    r_disclaimer: "Nur zu Informationszwecken. Kein Ersatz für professionelle medizinische Beratung.",
    // EN: Unlock My Full Report 🔒
    r_unlock_btn: "Meinen vollständigen Report freischalten 🔒",
    // EN: This is your overview. Your full report goes 10x deeper.
    r_overview: "Das ist Ihre Übersicht. Ihr vollständiger Report geht 10x tiefer.",
    // EN: What we're seeing
    r_seeing: "Was wir sehen",
    // EN: Your Full Report Includes
    r_includes: "Ihr vollständiger Report enthält",
    // EN: YOUR CUSTOM AM/PM ROUTINE
    r_sec_routine: "IHRE MASSGESCHNEIDERTE MORGEN-/ABENDROUTINE",
    // EN: Your Morning Routine
    r_blur_morning: "Ihre Morgenroutine",
    // EN: Step 1: Gentle cleanser — [personalized pick]<br>Step 2: Vitamin C serum — [matched to your skin age]<br>Step 3: Moisturizer — [barrier-matched formula]<br>Step 4: SPF — [your skin type specific]
    r_blur_morning_steps: "Schritt 1: Sanfte Reinigung — [personalisierte Auswahl]<br>Schritt 2: Vitamin-C-Serum — [abgestimmt auf Ihr Hautalter]<br>Schritt 3: Feuchtigkeitspflege — [Barriere-stärkende Formel]<br>Schritt 4: LSF — [spezifisch für Ihren Hauttyp]",
    // EN: 🔒 UNLOCK TO REVEAL
    r_unlock_reveal: "🔒 ZUM FREISCHALTEN ENTSPERREN",
    // EN: INGREDIENT GUIDE FOR YOUR SKIN
    r_sec_ingredients: "INHALTSSTOFF-GUIDE FÜR IHRE HAUT",
    // EN: Ingredients Your Skin Needs
    r_blur_ingredients: "Inhaltsstoffe, die Ihre Haut braucht",
    // EN: ✓ [Active #1 matched to your concern]<br>✓ [Active #2 for your skin age]<br>✓ [Barrier ingredient personalized to you]<br>✗ [Ingredient currently working against you]
    r_blur_ingredients_list: "✓ [Wirkstoff #1 passend zu Ihrem Hautbedürfnis]<br>✓ [Wirkstoff #2 für Ihr Hautalter]<br>✓ [Barriere-Inhaltsstoff, auf Sie personalisiert]<br>✗ [Inhaltsstoff, der aktuell gegen Sie arbeitet]",
    // EN: WHAT YOUR SKIN NEEDS THIS WEEK
    r_sec_week: "WAS IHRE HAUT DIESE WOCHE BRAUCHT",
    // EN: What To Stop Using This Week
    r_blur_stop: "Worauf Sie diese Woche verzichten sollten",
    // EN: ⚠️ [Product type working against your barrier]<br>⚠️ [Ingredient pairing cancelling each other out]<br>⚠️ [Timing issue in your current routine]
    r_blur_stop_list: "⚠️ [Produkttyp, der Ihrer Barriere schadet]<br>⚠️ [Wirkstoff-Paarung, die sich gegenseitig aufhebt]<br>⚠️ [Timing-Fehler in Ihrer aktuellen Routine]",
    // EN: This is what your skin looks like when you know exactly what it needs.
    r_unlock_title: "So sieht Ihre Haut aus, wenn Sie genau wissen, was sie braucht.",
    // EN: Full breakdown, routine gaps, ingredient matches, and your next-step plan.
    r_unlock_sub: "Komplette Analyse, Lücken in der Routine, passende Inhaltsstoffe und Ihr Plan für die nächsten Schritte.",
    // EN: Show Me My Full Glow Analysis →
    r_show_full: "Zeigen Sie mir meine vollständige Glow-Analyse →",
    // EN: Full routine · Ingredient breakdown · What to fix first
    r_unlock_fine: "Komplette Routine · Inhaltsstoff-Analyse · Was Sie zuerst beheben sollten",

    // ── glowscan-v2.html — screen 5 (report details + price) ──
    // EN: Skip to checkout →
    p_skip: "Direkt zur Kasse →",
    // EN: Your full report is ready
    p_eyebrow: "Ihr vollständiger Report ist fertig",
    // EN: Built from <span style="color:#4E6B49;font-style:italic">your face.</span> Not someone else's routine.
    p_h2: "Basierend auf <span style=\"color:#4E6B49;font-style:italic\">Ihrem Gesicht.</span> Nicht auf der Routine einer anderen Person.",
    // EN: That skin age isn't permanent. Here's how you fix it.
    p_summary: "Dieses Hautalter ist nicht dauerhaft. So verbessern Sie es.",
    // EN: Look younger · Feel confident · Spend smarter
    p_tagline: "Jünger aussehen · Selbstbewusst fühlen · Intelligenter investieren",
    // EN: Your personalized AM/PM routine
    p_b1_title: "Ihre personalisierte Morgen- und Abendroutine",
    // EN: Morning and evening steps built for your exact skin
    p_b1_desc: "Pflegeschritte für morgens und abends, exakt auf Ihre Haut zugeschnitten",
    // EN: The 2-3 products working against you right now
    p_b2_title: "Die 2-3 Produkte, die aktuell gegen Sie arbeiten",
    // EN: What's on your shelf sabotaging your results
    p_b2_desc: "Was in Ihrem Badezimmerschrank Ihre Ergebnisse sabotiert",
    // EN: Ingredient guide for your skin type
    p_b3_title: "Inhaltsstoff-Guide für Ihren Hauttyp",
    // EN: What actually works for your concerns — no guessing
    p_b3_desc: "Was bei Ihren Hautbedürfnissen wirklich hilft — kein Rätselraten mehr",
    // EN: What your skin actually needs this week
    p_b4_title: "Was Ihre Haut diese Woche wirklich braucht",
    // EN: Personalized picks based on your exact scan results
    p_b4_desc: "Personalisierte Empfehlungen, basierend auf Ihren exakten Scan-Ergebnissen",
    // EN: I actually cried. I've wasted so much money on the wrong stuff. this fixed that
    p_review1: "Ich habe wirklich geweint. Ich habe so viel Geld für die falschen Sachen verschwendet. Das hat mein Problem gelöst",
    // EN: called out the exact products sabotaging my skin. I felt so seen
    p_review2: "Hat genau die Produkte entlarvt, die meine Haut sabotieren. Ich habe mich so verstanden gefühlt",
    // EN: finally understood why my $80 serum did nothing. changed everything
    p_review3: "Habe endlich verstanden, warum mein 80-Euro-Serum nichts gebracht hat. Es hat alles verändert",
    // EN: What wrong products cost you
    p_cost_title: "Was Sie falsche Produkte kosten",
    // EN: Wrong cleanser — yearly
    p_cost_1: "Falsche Reinigung — jährlich",
    // EN: Mismatched actives
    p_cost_2: "Unpassende Wirkstoffe",
    // EN: Products that cancel each other
    p_cost_3: "Produkte, die sich gegenseitig aufheben",
    // EN: Trending items that don't match your skin
    p_cost_4: "Trend-Produkte, die nicht zu Ihrer Haut passen",
    // EN: Average wasted per year
    p_cost_total: "Durchschnittlich verschwendet pro Jahr",
    // EN: Less than your morning coffee. More useful than your last three serums.
    p_price_line: "Weniger als Ihr Morgenkaffee. Hilfreicher als Ihre letzten drei Seren.",
    // EN: Originally $29
    p_price_orig: "Ursprünglich 29 $",
    // EN: Today only — intro price
    p_price_badge: "Nur heute — Einführungspreis",
    // EN: Instant access · Built from your scan · One-time payment<br>7-day refund if it doesn't help
    p_cta_fine: "Sofortiger Zugang · Basierend auf Ihrem Scan · Einmalige Zahlung<br>7-Tage-Geld-zurück-Garantie, falls es nicht hilft",

    // ── glowscan-v2.html — screen 6 (checkout / playbook add-on) ──
    // EN: ONE LAST THING
    c_eyebrow: "EINE LETZTE SACHE",
    // EN: Add The Anti-Aging Playbook
    c_h2: "Fügen Sie das Anti-Aging Playbook hinzu",
    // EN: Know the why behind every product you use.
    c_sub: "Verstehen Sie das Warum hinter jedem Produkt, das Sie verwenden.",
    // EN: Ingredient decoder · Smart shopping lists · 4 budget routines
    c_tagline: "Inhaltsstoff-Dekoder · Smarte Einkaufslisten · 4 Budget-Routinen",
    // EN: The Glow Well Anti-Aging Playbook
    c_product: "The Glow Well Anti-Aging Playbook",
    // EN: GLOW SCAN EXCLUSIVE
    c_exclusive: "EXKLUSIV FÜR GLOW SCAN",
    // EN: $600 in skincare value. Yours for $14.99.
    c_value: "Skincare-Wissen im Wert von 600 $. Für Sie nur 14,99 $.",
    // EN: 25% SCAN DISCOUNT APPLIED ✓
    c_discount: "25% SCAN-RABATT ANGEWANDT ✓",
    // EN: just started it and already know more about my skin than 10 years of guessing
    c_review1: "Habe gerade erst angefangen und weiß schon mehr über meine Haut als nach 10 Jahren Rätselraten",
    // EN: already saved $200 swapping out the wrong products. feel so much smarter about everything I put on my face
    c_review2: "Habe bereits 200 $ gespart, weil ich die falschen Produkte aussortiert habe. Fühle mich viel sicherer bei allem, was auf mein Gesicht kommt",
    // EN: Yes — Add the Playbook to My Order →
    c_btn_bundle: "Ja — Das Playbook zu meiner Bestellung hinzufügen →",
    // EN: No thanks, just the report →
    c_btn_report: "Nein danke, nur der Report →",
    // EN: 14,200+ women · Secured by Lemon Squeezy · 7-day guarantee
    c_trust: "Über 14.200 Frauen · Sicher bezahlen mit Lemon Squeezy · 7-Tage-Garantie",

    // ── glowscan-v2.html — screen 7 (confirmation) ──
    // EN: You're all set.
    k_h2: "Sie sind bereit.",
    // EN: Give us just a moment — we're building your full report, personalized to your skin and your scan results. Your photo has been deleted from our servers.
    k_sub: "Geben Sie uns einen Moment — wir erstellen Ihren vollständigen Report, personalisiert für Ihre Haut und Ihre Scan-Ergebnisse. Ihr Foto wurde von unseren Servern gelöscht.",
    // EN: Your Glow Scan Report
    k_card_label: "Ihr Glow Scan Report",
    // EN: Full personalized skin analysis
    k_card_title: "Vollständig personalisierte Hautanalyse",
    // EN: View Your Full Report →
    view_report: "Ihren vollständigen Report ansehen →",
    // EN: Building your personalized report — analyzing your photo patterns, matching ingredients to your budget, and building a routine around the stores you shop at. Usually 1-2 minutes. Worth the wait.
    k_wait_msg: "Ihr personalisierter Report wird erstellt — wir analysieren Ihre Fotomuster, passen Inhaltsstoffe an Ihr Budget an und erstellen eine Routine mit Produkten aus Ihren Lieblingsshops. Dauert meist 1-2 Minuten. Das Warten lohnt sich.",
    // EN: The Glow Well Playbook
    k_pb_label: "Das Glow Well Playbook",
    // EN: Your receipt email has your download link. Also at app.lemonsqueezy.com/my-orders
    k_pb_title: "Ihre Kaufbeleg-E-Mail enthält Ihren Download-Link. Auch unter app.lemonsqueezy.com/my-orders",
    // EN: Download your Playbook — check your email for the link →
    k_pb_link: "Laden Sie Ihr Playbook herunter — den Link finden Sie in Ihren E-Mails →",

    // ── glowscan-v2.html — discount popup / email recovery ──
    // EN: Still deciding?
    pop_still: "Überlegen Sie noch?",
    // EN: Get 25% off your full report
    pop_title: "Erhalten Sie 25% Rabatt auf Ihren vollständigen Report",
    // EN: Look younger. Feel confident. Start today.
    pop_sub: "Jünger aussehen. Selbstbewusst fühlen. Starten Sie heute.",
    // EN: Unlock My Report — <span id="popupDiscountPrice"></span> →
    pop_btn: "Meinen Report freischalten — <span id=\"popupDiscountPrice\"></span> →",
    // EN: No thanks, I'll pay full price
    pop_dismiss: "Nein danke, ich zahle den vollen Preis",
    // EN: Welcome back
    rec_eyebrow: "Willkommen zurück",
    // EN: To load your personalized report on this device, please enter the email you used during your scan.
    rec_h2: "Um Ihren personalisierten Report auf diesem Gerät zu laden, geben Sie bitte die E-Mail-Adresse ein, die Sie beim Scan verwendet haben.",
    // EN: Your scan is securely linked to your email — we'll use it to retrieve your real results.
    rec_sub: "Ihr Scan ist sicher mit Ihrer E-Mail verknüpft — wir nutzen diese, um Ihre echten Ergebnisse abzurufen.",
    // EN: Load My Report →
    rec_btn: "Meinen Report laden →",

    // ── glowscan-v2.html — strings built at runtime in JS ({price}/{age}/{n} are filled by the page) ──
    // EN: Unlock My Full Report — {price} →
    js_sticky_unlock: "Meinen vollständigen Report freischalten — {price} →",
    // EN: Unlock My Report — 25% Off — ${price} →
    js_sticky_discount: "Meinen Report freischalten — 25% Rabatt — ${price} →",
    // EN: Reading your barrier health signals...
    js_scan_1: "Signale Ihrer Barrieregesundheit werden gelesen...",
    // EN: Mapping your hydration patterns across zones...
    js_scan_2: "Feuchtigkeitsmuster in allen Hautzonen werden kartiert...",
    // EN: Matching ingredients to your skin profile...
    js_scan_3: "Inhaltsstoffe werden mit Ihrem Hautprofil abgeglichen...",
    // EN: Identifying what your current routine is missing...
    js_scan_4: "Lücken in Ihrer aktuellen Routine werden identifiziert...",
    // EN: Calculating your Glow Score...
    js_scan_5: "Ihr Glow Score wird berechnet...",
    // EN: We couldn't get a clear read on your photo. This usually happens with low lighting, too much distance, or an angled shot. Try again with a well-lit, straight-on selfie — natural light works best 🤍
    js_scan_fail: "Wir konnten Ihr Foto nicht eindeutig auslesen. Das passiert meist bei schlechten Lichtverhältnissen, zu viel Abstand oder einer ungünstigen Perspektive. Versuchen Sie es noch einmal mit einem gut ausgeleuchteten, frontalen Selfie — natürliches Licht funktioniert am besten 🤍",
    // EN: Retake Photo
    js_retake_photo: "Foto neu aufnehmen",
    // EN: We couldn't read your skin clearly.
    js_invalid_title: "Wir konnten Ihre Haut nicht klar erkennen.",
    // EN: No face was detected in your photo.
    js_invalid_no_face: "Es wurde kein Gesicht auf Ihrem Foto erkannt.",
    // EN: Your photo lighting is too dark or overexposed.
    js_invalid_lighting: "Ihr Foto ist zu dunkel oder überbelichtet.",
    // EN: Heavy makeup or filters make accurate analysis difficult.
    js_invalid_makeup: "Starkes Make-up oder Filter erschweren eine genaue Analyse.",
    // EN: Your face needs to be closer and fully in frame.
    js_invalid_too_far: "Ihr Gesicht muss näher dran und vollständig im Bild sein.",
    // EN: For best results: natural light · no makeup · face fully in frame · no filters or sunglasses
    js_invalid_tips: "Für die besten Ergebnisse: natürliches Licht · kein Make-up · Gesicht komplett im Bild · keine Filter oder Sonnenbrille",
    // EN: Try Again →
    js_try_again: "Noch einmal versuchen →",
    // EN: Your actual age: {age}
    js_actual_age: "Ihr tatsächliches Alter: {age}",
    // EN: {n} years
    js_years_gap: "{n} Jahre",
    // EN: On track
    js_on_track: "Auf einem guten Weg",
    // EN: Raw Start
    js_tier_1_name: "Raw Start",
    // EN: Your skin's origin story starts here.
    js_tier_1_line: "Die Ursprungsgeschichte Ihrer Haut beginnt hier.",
    // EN: Bottom 20% — but Raw Start means most improved
    js_tier_1_percentile: "Untere 20 % — aber hier ist das größte Verbesserungspotenzial",
    // EN: The Rebuild
    js_tier_2_name: "The Rebuild",
    // EN: The foundations are shifting — in a good way.
    js_tier_2_line: "Das Fundament verschiebt sich — im positiven Sinne.",
    // EN: Better than 35% of scanned users your age
    js_tier_2_percentile: "Besser als 35 % der gescannten Nutzerinnen in Ihrem Alter",
    // EN: Steady Glow
    js_tier_3_name: "Steady Glow",
    // EN: Solid base. Now we refine.
    js_tier_3_line: "Solide Basis. Jetzt geht es an den Feinschliff.",
    // EN: Better than 52% of scanned users your age
    js_tier_3_percentile: "Besser als 52 % der gescannten Nutzerinnen in Ihrem Alter",
    // EN: High Beam
    js_tier_4_name: "High Beam",
    // EN: Your routine is working. Keep going.
    js_tier_4_line: "Ihre Routine funktioniert. Bleiben Sie dran.",
    // EN: Better than 71% of scanned users your age
    js_tier_4_percentile: "Besser als 71 % der gescannten Nutzerinnen in Ihrem Alter",
    // EN: Rare Form
    js_tier_5_name: "Rare Form",
    // EN: This is what consistency looks like.
    js_tier_5_line: "So sieht Konsequenz aus.",
    // EN: Better than 87% of scanned users your age
    js_tier_5_percentile: "Besser als 87 % der gescannten Nutzerinnen in Ihrem Alter",
    // EN: Prime Glow
    js_tier_6_name: "Prime Glow",
    // EN: Your skin is having its moment.
    js_tier_6_line: "Ihre Haut erlebt ihren Höhepunkt.",
    // EN: Top 5% of all Glow Scans taken
    js_tier_6_percentile: "Top 5 % aller durchgeführten Glow Scans",
    // EN: Patterns consistent with a compromised barrier — more about habit than genetics.
    js_fallback_teaser_1: "Muster, die auf eine geschwächte Barriere hindeuten — mehr Gewohnheit als Genetik.",
    // EN: Your routine may be doing one thing well while undoing another at the same time.
    js_fallback_teaser_2: "Ihre Routine macht vielleicht das eine gut, während sie das andere gleichzeitig zunichte macht.",
    // EN: The concern you flagged tends to be a symptom of something upstream — not the root cause.
    js_fallback_teaser_3: "Das von Ihnen genannte Problem ist meist nur ein Symptom, nicht die eigentliche Ursache.",
    // EN: just found out my skin is {n} years older than it should be 😭 got my free Glow Score at theglowwell.com — it's free and slightly terrifying
    js_share_older: "habe gerade herausgefunden, dass meine Haut {n} Jahre älter ist, als sie sein sollte 😭 hol dir deinen kostenlosen Glow Score auf theglowwell.com — es ist gratis und leicht beängstigend",
    // EN: just found out my skin is {n} years younger than my actual age ✨ got my free Glow Scan at theglowwell.com
    js_share_younger: "habe gerade herausgefunden, dass meine Haut {n} Jahre jünger ist als mein eigentliches Alter ✨ hol dir deinen kostenlosen Glow Scan auf theglowwell.com",
    // EN: My Glow Scan Score
    js_share_title: "Mein Glow Scan Score",
    // EN: Screenshot saved — check your downloads
    js_share_saved: "Screenshot gespeichert — sehen Sie in Ihren Downloads nach",
    // EN: Your report is taking a little longer than usual. Please wait a moment and try again.
    js_report_delay: "Ihr Report dauert etwas länger als gewöhnlich. Bitte warten Sie einen Moment und versuchen Sie es erneut.",
    // EN: Generating...
    js_generating: "Wird erstellt...",
    // EN: Generating your report...
    js_generating_report: "Ihr Report wird erstellt...",
    // EN: Tap to generate your report
    js_tap_generate: "Tippen Sie, um Ihren Report zu erstellen",
    // EN: Please retake your scan to view your report
    js_retake_to_view: "Bitte wiederholen Sie den Scan, um Ihren Report anzusehen",
    // EN: Please enter a valid email address.
    js_rec_invalid_email: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
    // EN: Loading your report...
    js_rec_loading: "Ihr Report wird geladen...",
    // EN: No report found for that email. Please double-check the address you used during your scan.
    js_rec_not_found: "Für diese E-Mail wurde kein Report gefunden. Bitte überprüfen Sie die Adresse, die Sie bei Ihrem Scan verwendet haben.",
    // EN: Network error. Please check your connection and try again.
    js_rec_network: "Netzwerkfehler. Bitte überprüfen Sie Ihre Verbindung und versuchen Sie es erneut."
  },
  fr: {
    // ── index.html — head / nav ──
    // EN: Glow Scan by The Glow Well — Free AI Skin Analysis
    index_title: "Glow Scan par The Glow Well — Analyse de peau gratuite par l'IA",
    // EN: Home
    nav_home: "Accueil",
    // EN: Blog
    nav_blog: "Blog",
    // EN: Free Resources
    nav_resources: "Ressources gratuites",
    // EN: Find Your Kit
    nav_kit: "Trouvez votre kit",
    // EN: About
    nav_about: "À propos",
    // EN: Get the Playbook
    nav_playbook_cta: "Obtenir le Playbook",
    // EN: Scan My Skin — Free
    nav_scan_cta: "Scanner ma peau — Gratuit",
    // EN: Scan Free →
    nav_scan_mobile: "Scan gratuit →",
    // EN: Playbook
    nav_playbook: "Playbook",
    // EN: Privacy Policy
    footer_privacy: "Politique de confidentialité",
    // EN: Contact
    footer_contact: "Contact",
    // EN: © 2025 The Glow Well · theglowwell.com
    footer_copy: "© 2025 The Glow Well · theglowwell.com",

    // ── index.html — hero ──
    // EN: Free Skin Analysis · 150,000+ Scans Taken
    hero_eyebrow: "Analyse de peau gratuite · Plus de 150 000 scans réalisés",
    // EN: Your Skin Has Been Sending Signals. It's Time to <em>Listen.</em>
    hero_h1: "Votre peau vous envoie des signaux. Il est temps d'<em>écouter.</em>",
    // EN: Upload a selfie. Answer 3 quick questions. Find out exactly what your skin needs — and how to give it to you.
    hero_sub: "Téléchargez un selfie. Répondez à 3 questions rapides. Découvrez exactement ce dont votre peau a besoin — et comment lui offrir.",
    // EN: 5 questions · One photo · One minute
    hero_five_q: "5 questions · Une photo · Une minute",
    // EN: people getting their Glow Score right now
    hero_live_counter: "personnes découvrent leur Glow Score en ce moment",
    // EN: Reveal My Glow Score — It's Free
    hero_cta: "Révéler mon Glow Score — C'est gratuit",
    // EN: Free
    trust_free: "Gratuit",
    // EN: No account
    trust_no_account: "Sans compte",
    // EN: No credit card
    trust_no_card: "Sans carte bancaire",
    // EN: Look younger. Feel confident. Stop guessing.
    hero_tagline: "Paraissez plus jeune. Sentez-vous confiante. Arrêtez de deviner.",
    // EN: 🔒 Analyzed & Deleted immediately. Never stored.
    hero_privacy: "🔒 Analysé et supprimé immédiatement. Jamais stocké.",
    // EN: Your Glow Score
    mock_label: "Votre Glow Score",
    // EN: Hydration
    score_hydration: "Hydratation",
    // EN: Barrier Health
    score_barrier: "Santé de la barrière",
    // EN: Texture Clarity
    score_texture: "Clarté du grain de peau",
    // EN: Radiance
    score_radiance: "Éclat",
    // EN: FREE GLOW SCAN · THEGLOWWELL.COM
    brand_watermark: "GLOW SCAN GRATUIT · THEGLOWWELL.COM",

    // ── index.html — old way / new way ──
    // EN: Why this is different
    why_eyebrow: "Pourquoi c'est différent",
    // EN: Stop guessing. <em style="color:var(--sage-dark)">Start knowing.</em>
    why_h2: "Arrêtez de deviner. <em style=\"color:var(--sage-dark)\">Commencez à savoir.</em>",
    // EN: Built on peer-reviewed dermatology research — not TikTok trends.
    credibility_line: "Fondé sur des recherches en dermatologie validées par des pairs — et non sur les tendances TikTok.",
    // EN: The old way
    old_way_title: "L'ancienne méthode",
    // EN: Buy whatever TikTok recommends
    old_way_1: "Acheter ce que TikTok recommande",
    // EN: Trial and error, shelf of regrets
    old_way_2: "Essais et erreurs, un placard plein de regrets",
    // EN: Generic routines built for no one
    old_way_3: "Des routines génériques qui ne conviennent à personne",
    // EN: Waste $600+ on products that don't match your skin
    old_way_4: "Gaspiller plus de 600 € dans des produits inadaptés à votre peau",
    // EN: The Glow Well way
    new_way_title: "La méthode The Glow Well",
    // EN: Know exactly what YOUR skin needs
    new_way_1: "Savoir exactement ce dont VOTRE peau a besoin",
    // EN: Built from your face scan, not a template
    new_way_2: "Conçu à partir du scan de votre visage, pas d'un modèle",
    // EN: Personalized to your skin, age and budget
    new_way_3: "Personnalisé selon votre peau, votre âge et votre budget",
    // EN: One scan. One plan. Zero guessing.
    new_way_4: "Un scan. Un plan. Zéro devinette.",

    // ── index.html — how it works ──
    // EN: How it works
    how_eyebrow: "Comment ça marche",
    // EN: Three steps. <em>60 seconds.</em>
    how_h2: "Trois étapes. <em>60 secondes.</em>",
    // EN: No account. No credit card. Just your selfie and 5 questions.
    how_sub: "Aucun compte. Aucune carte bancaire. Juste votre selfie et 5 questions.",
    // EN: Answer 5 questions
    how_step1_title: "Répondez à 5 questions",
    // EN: Skin concern, budget, routine, and how your skin feels. 30 seconds.
    how_step1_desc: "Problématiques, budget, routine et ressenti de votre peau. 30 secondes.",
    // EN: Upload your selfie
    how_step2_title: "Téléchargez votre selfie",
    // EN: Our trained scanner does the rest.
    how_step2_desc: "Notre scanner intelligent fait le reste.",
    // EN: Get your Glow Score
    how_step3_title: "Obtenez votre Glow Score",
    // EN: Your skin age, personalized score, and 3 things to know — free instantly.
    how_step3_desc: "L'âge de votre peau, votre score personnalisé et 3 choses à savoir — gratuit et instantané.",
    // EN: Start Your Free Scan →
    how_cta: "Démarrer mon scan gratuit →",

    // ── index.html — real results photos ──
    // EN: Real results
    photos_eyebrow: "De vrais résultats",
    // EN: What the right routine <em>actually does.</em>
    photos_h2: "Ce qu'une routine adaptée <em>accomplit vraiment.</em>",
    // EN: Consistent routine use over 6-8 weeks. Real people, real skin.
    photos_sub: "Une routine suivie sur 6 à 8 semaines. De vraies personnes, une vraie peau.",
    // EN: Results shown are from 6-8 weeks of consistent routine use — your skin's timeline may vary, but the path is the same.
    photos_disclaimer: "Les résultats présentés sont obtenus après 6 à 8 semaines de routine régulière — le rythme de votre peau peut varier, mais la démarche reste la même.",

    // ── index.html — reviews ──
    // EN: What people are saying
    reviews_eyebrow: "Ce qu'elles en disent",
    // EN: Real skin. <em>Real results.</em>
    reviews_h2: "Une vraie peau. <em>De vrais résultats.</em>",
    // EN: 4.9/5 average · Verified
    reviews_sub: "Moyenne de 4,9/5 · Vérifié",
    // EN: "I thought I had dry skin for 3 years. Nope. Just a destroyed barrier. Fixed it in 3 weeks."
    review_1_quote: "\"Je pensais avoir la peau sèche depuis 3 ans. Faux. Juste une barrière cutanée abîmée. Réparée en 3 semaines.\"",
    // EN: Sara, 26 · Verified
    review_1_attr: "Sara, 26 ans · Vérifié",
    // EN: "Called out the exact stuff I keep buying and never use. Saved me money immediately."
    review_2_quote: "\"A mis le doigt sur les produits que j'achetais sans jamais utiliser. J'ai fait des économies immédiatement.\"",
    // EN: Yasmine, 34 · Verified
    review_2_attr: "Yasmine, 34 ans · Vérifié",
    // EN: "Finally understood why that $80 serum did nothing. Wrong acid for my skin."
    review_3_quote: "\"J'ai enfin compris pourquoi ce sérum à 80 € ne faisait rien. Ce n'était pas le bon acide pour ma peau.\"",
    // EN: Celeste, 42 · Verified
    review_3_attr: "Celeste, 42 ans · Vérifié",
    // EN: See What Your Skin Says →
    reviews_cta: "Découvrez ce que dit votre peau →",

    // ── index.html — playbook ──
    // EN: Want the complete system?
    playbook_eyebrow: "Vous voulez le système complet ?",
    // EN: The 96-page guide <em>behind the scan.</em>
    playbook_h2: "Le guide de 96 pages <em>derrière le scan.</em>",
    // EN: Ingredient decoder. Budget routines. Store shopping lists. Everything your Glow Scan points toward.
    playbook_sub: "Décryptage des ingrédients. Routines adaptées au budget. Listes de courses. Tout ce vers quoi pointe votre Glow Scan.",
    // EN: 96 pages of clarity
    playbook_prop1_title: "96 pages de clarté",
    // EN: Budget tiers, ingredient decoder, store lists for Target, Walmart, Amazon, and Sephora.
    playbook_prop1_desc: "Niveaux de budget, décryptage des ingrédients, listes de courses pour Amazon, Sephora et pharmacies.",
    // EN: Works with your scan
    playbook_prop2_title: "En parfaite synergie avec votre scan",
    // EN: The education behind every recommendation your Glow Scan makes.
    playbook_prop2_desc: "La science et l'explication derrière chaque recommandation de votre Glow Scan.",
    // EN: Get the Playbook — $19.99
    playbook_cta: "Obtenir le Playbook — 19,99 €",
    // EN: Already have your Glow Score? The Playbook explains the why behind every result.
    playbook_note: "Vous avez déjà votre Glow Score ? Le Playbook explique le pourquoi derrière chaque résultat.",

    // ── index.html — final CTA ──
    // EN: Find out for free
    final_eyebrow: "Découvrez-le gratuitement",
    // EN: Your skin has something<br>to tell you.
    final_h2: "Votre peau a quelque chose<br>à vous dire.",
    // EN: Find out what it is. Free. In 60 seconds.
    final_sub: "Découvrez quoi. Gratuitement. En 60 secondes.",
    // EN: Scan My Skin — It's Free
    final_cta: "Scanner ma peau — C'est gratuit",
    // EN: Photo deleted instantly · No account · 7-day report guarantee
    final_trust: "Photo supprimée instantanément · Sans compte · Garantie de 7 jours sur le rapport",

    // ── glowscan-v2.html — head / nav ──
    // EN: Glow Scan — Free AI Skin Analysis | The Glow Well
    scan_title: "Glow Scan — Analyse de peau IA gratuite | The Glow Well",
    // EN: Free Scan
    nav_free_scan: "Scan gratuit",

    // ── glowscan-v2.html — screen 1 (hero) ──
    // EN: Free AI Skin Analysis
    s1_eyebrow: "Analyse de peau gratuite par l'IA",
    // EN: Your skin has been sending signals. It's time to listen.
    s1_h1: "Votre peau vous envoie des signaux. Il est temps d'écouter.",
    // EN: Reveal My Glow Score — Free
    s1_cta: "Révéler mon Glow Score — Gratuit",
    // EN: By continuing you agree to our <a href="privacy.html" style="color:var(--text-light);text-decoration:underline;text-underline-offset:2px;">Privacy Policy</a>.
    s1_privacy_agree: "En continuant, vous acceptez notre <a href=\"privacy.html\" style=\"color:var(--text-light);text-decoration:underline;text-underline-offset:2px;\">Politique de confidentialité</a>.",
    // EN: Photo never stored
    s1_trust_photo: "Photo jamais stockée",
    // EN: 60 seconds
    s1_trust_time: "60 secondes",
    // EN: Used by 14,000+ women who finally stopped guessing
    s1_social: "Utilisé par plus de 14 000 femmes qui ont enfin arrêté de deviner",

    // ── glowscan-v2.html — screen 2 (quiz) — labels only; submitted values stay English ──
    // EN: Step 1 of 4
    q_progress_1: "Étape 1 sur 4",
    // EN: Your skin is trying to tell you something. Every day.<br>These 3 questions help us hear it.
    q_intro: "Votre peau essaie de vous dire quelque chose. Chaque jour.<br>Ces 3 questions nous aident à l'entendre.",
    // EN: Question 1
    q1_label: "Question 1",
    // EN: How old are you?
    q1_text: "Quel âge avez-vous ?",
    // EN: (Your skin age might be a very different number.)
    q1_hint: "(L'âge de votre peau pourrait être bien différent.)",
    // EN: Enter your age
    q1_placeholder: "Entrez votre âge",
    // EN: Question 2
    q2_label: "Question 2",
    // EN: Every skin type has a signature. Yours is already talking — <em>what's it saying?</em>
    q2_text: "Chaque type de peau a sa signature. La vôtre s'exprime déjà — <em>que dit-elle ?</em>",
    // EN: Fine lines that weren't there last year
    q2_opt1: "Des ridules qui n'étaient pas là l'année dernière",
    // EN: Dull and tired, even when I'm not
    q2_opt2: "Terne et fatiguée, même quand je ne le suis pas",
    // EN: Reactive — my skin has opinions about everything
    q2_opt3: "Réactive — ma peau réagit au quart de tour à tout",
    // EN: Oily by noon, tight by morning — make it make sense
    q2_opt4: "Grasse à midi, tiraille le matin — difficile de comprendre",
    // EN: Texture that foundation can't hide
    q2_opt5: "Un grain de peau irrégulier que le fond de teint ne peut cacher",
    // EN: Breaking out at an age I shouldn't be
    q2_opt6: "Des imperfections à un âge où je ne devrais plus en avoir",
    // EN: Question 3
    q3_label: "Question 3",
    // EN: Where are you based?
    q3_text: "Où habitez-vous ?",
    // EN: (This helps us match UV exposure, climate, and environmental stress to your skin.)
    q3_hint: "(Cela nous aide à adapter l'exposition aux UV, le climat et le stress environnemental à votre peau.)",
    // EN: Select your region...
    q3_placeholder: "Sélectionnez votre région...",
    // EN: 🌎 North America (US, Canada)
    q3_opt_na: "🌎 Amérique du Nord (États-Unis, Canada)",
    // EN: 🌍 Western Europe (UK, France, Germany + EU)
    q3_opt_we: "🌍 Europe de l'Ouest (France, Royaume-Uni, Allemagne + UE)",
    // EN: 🌏 Australia & New Zealand
    q3_opt_anz: "🌏 Australie et Nouvelle-Zélande",
    // EN: 🕌 Middle East (UAE, Saudi Arabia, Gulf)
    q3_opt_me: "🕌 Moyen-Orient (Émirats Arabes Unis, Arabie Saoudite, Golfe)",
    // EN: 🌐 East Asia (China, Japan, Korea, Southeast Asia)
    q3_opt_ea: "🌐 Asie de l'Est (Chine, Japon, Corée, Asie du Sud-Est)",
    // EN: 🌸 South Asia (India, Pakistan, Bangladesh)
    q3_opt_sa: "🌸 Asie du Sud (Inde, Pakistan, Bangladesh)",
    // EN: 🌑 Africa & South America
    q3_opt_afsa: "🌑 Afrique et Amérique du Sud",
    // EN: Next — Upload Your Photo →
    q_next: "Suivant — Téléchargez votre photo →",
    // EN: Answer all 3 questions to continue
    q_in_progress: "Répondez aux 3 questions pour continuer",

    // ── glowscan-v2.html — screen 2b (photo upload) ──
    // EN: Step 2 of 4
    q_progress_2: "Étape 2 sur 4",
    // EN: Final step before your results
    upload_eyebrow: "Dernière étape avant vos résultats",
    // EN: Now the scan sees what the questions can't.
    upload_headline: "À présent, le scan voit ce que les questions ne peuvent pas déceler.",
    // EN: Trained on 150,000+ real skin analyses. It takes 15 seconds. Your photo is deleted the moment it's done.
    upload_subtext: "Entraîné sur plus de 150 000 analyses réelles de peau. Cela prend 15 secondes. Votre photo est supprimée dès que c'est terminé.",
    // EN: Tap to upload your photo
    upload_title: "Appuyez pour télécharger votre photo",
    // EN: Face fully in frame, no sunglasses. The more real, the more accurate.
    upload_sub: "Visage entièrement dans le cadre, sans lunettes de soleil. Au plus c'est naturel, au plus c'est précis.",
    // EN: women uploading their photo right now
    upload_live_counter: "femmes téléchargent leur photo en ce moment",
    // EN: 🔒 Analyzed by AI. Never seen by a human. Deleted instantly. Not stored — ever.<br> <span>Your photo never touches a human. Ever.</span>
    upload_privacy: "🔒 Analysé par l'IA. Jamais vu par un humain. Supprimé instantanément. Jamais stocké.<br> <span>Votre photo ne passera jamais entre des mains humaines. Jamais.</span>",
    // EN: "It scanned my skin age as 39. I'm 44. I literally cried — absolutely love the AM/PM routine it recommended."
    upload_quote: "\"Le scan a estimé l'âge de ma peau à 39 ans. J'en ai 44. J'en ai littéralement pleuré — j'adore la routine matin et soir qui m'a été recommandée.\"",
    // EN: — Gianna M., 44 · Verified
    upload_attr: "— Gianna M., 44 ans · Vérifié",

    // ── glowscan-v2.html — screen 2c (email) ──
    // EN: Step 3 of 4
    q_progress_3: "Étape 3 sur 4",
    // EN: Your Glow Score is ready.
    email_heading: "Votre Glow Score est prêt.",
    // EN: Where should we send your results?
    email_subhead: "Où devons-nous envoyer vos résultats ?",
    // EN: We'll analyze your scan and have your personalized results ready in 15 seconds.
    email_sub: "Nous allons analyser votre scan et préparer vos résultats personnalisés en 15 secondes.",
    // EN: Your email address
    email_placeholder: "Votre adresse e-mail",
    // EN: Photo analyzed instantly. Never stored on our servers.<br>No spam — just your results and occasional skin tips.
    email_privacy: "Photo analysée instantanément. Jamais stockée sur nos serveurs.<br>Aucun spam — juste vos résultats et quelques conseils occasionnels pour votre peau.",
    // EN: Send Me My Results →
    email_cta: "Envoyez-moi mes résultats →",

    // ── glowscan-v2.html — screen 3 (loading) ──
    // EN: Scanning sebaceous activity...
    loading_initial: "Analyse de l'activité sébacée en cours...",
    // EN: 14,000+ women have seen results they didn't expect.
    loading_footnote: "Plus de 14 000 femmes ont découvert des résultats auxquels elles ne s'attendaient pas.",

    // ── glowscan-v2.html — screen 4 (free results) ──
    // EN: See What's In Your Full Report →
    r_see_full: "Découvrez ce qui se trouve dans votre rapport complet →",
    // EN: Your Free Glow Scan Results
    r_eyebrow: "Vos résultats Glow Scan gratuits",
    // EN: Skin Age
    r_skin_age: "Âge de la peau",
    // EN: estimated biological age
    r_age_sub: "âge biologique estimé",
    // EN: vs. your actual age
    r_gap_label: "vs votre âge réel",
    // EN: Skin age isn't permanent. Your full report shows exactly how to lower it.
    r_not_permanent: "L'âge de la peau n'est pas définitif. Votre rapport complet vous montre exactement comment le faire baisser.",
    // EN: Skin Age:
    r_skin_age_mini: "Âge de la peau :",
    // EN: Glow Score: <strong id="glowScoreMini" style="color:var(--charcoal);font-size:16px">—</strong>/100
    r_glow_score_mini: "Glow Score : <strong id=\"glowScoreMini\" style=\"color:var(--charcoal);font-size:16px\">—</strong>/100",
    // EN: Your Skin Scores
    r_scores_title: "Les scores de votre peau",
    // EN: Your Glow Score
    r_glow_total_label: "Votre Glow Score",
    // EN: Your Glow Stage
    r_glow_stage: "Votre stade Glow",
    // EN: Share Your Glow Score With a Friend
    r_share_btn: "Partagez votre Glow Score avec une amie",
    // EN: For educational purposes only. Not a substitute for professional medical advice.
    r_disclaimer: "À titre informatif uniquement. Ne remplace pas un avis médical professionnel.",
    // EN: Unlock My Full Report 🔒
    r_unlock_btn: "Débloquer mon rapport complet 🔒",
    // EN: This is your overview. Your full report goes 10x deeper.
    r_overview: "Ceci est un aperçu. Votre rapport complet va 10 fois plus loin.",
    // EN: What we're seeing
    r_seeing: "Ce que nous observons",
    // EN: Your Full Report Includes
    r_includes: "Votre rapport complet comprend",
    // EN: YOUR CUSTOM AM/PM ROUTINE
    r_sec_routine: "VOTRE ROUTINE MATIN & SOIR SUR MESURE",
    // EN: Your Morning Routine
    r_blur_morning: "Votre routine du matin",
    // EN: Step 1: Gentle cleanser — [personalized pick]<br>Step 2: Vitamin C serum — [matched to your skin age]<br>Step 3: Moisturizer — [barrier-matched formula]<br>Step 4: SPF — [your skin type specific]
    r_blur_morning_steps: "Étape 1 : Nettoyant doux — [choix personnalisé]<br>Étape 2 : Sérum à la vitamine C — [adapté à l'âge de votre peau]<br>Étape 3 : Crème hydratante — [formule renforçant la barrière]<br>Étape 4 : SPF — [spécifique à votre type de peau]",
    // EN: 🔒 UNLOCK TO REVEAL
    r_unlock_reveal: "🔒 DÉBLOQUER POUR RÉVÉLER",
    // EN: INGREDIENT GUIDE FOR YOUR SKIN
    r_sec_ingredients: "GUIDE DES INGRÉDIENTS POUR VOTRE PEAU",
    // EN: Ingredients Your Skin Needs
    r_blur_ingredients: "Les ingrédients dont votre peau a besoin",
    // EN: ✓ [Active #1 matched to your concern]<br>✓ [Active #2 for your skin age]<br>✓ [Barrier ingredient personalized to you]<br>✗ [Ingredient currently working against you]
    r_blur_ingredients_list: "✓ [Actif n°1 ciblant votre problématique]<br>✓ [Actif n°2 adapté à l'âge de votre peau]<br>✓ [Ingrédient protecteur de barrière personnalisé]<br>✗ [Ingrédient qui joue actuellement contre vous]",
    // EN: WHAT YOUR SKIN NEEDS THIS WEEK
    r_sec_week: "CE DONT VOTRE PEAU A BESOIN CETTE SEMAINE",
    // EN: What To Stop Using This Week
    r_blur_stop: "Ce que vous devez arrêter d'utiliser cette semaine",
    // EN: ⚠️ [Product type working against your barrier]<br>⚠️ [Ingredient pairing cancelling each other out]<br>⚠️ [Timing issue in your current routine]
    r_blur_stop_list: "⚠️ [Type de produit qui abîme votre barrière cutanée]<br>⚠️ [Association d'ingrédients qui s'annulent]<br>⚠️ [Erreur de timing dans votre routine actuelle]",
    // EN: This is what your skin looks like when you know exactly what it needs.
    r_unlock_title: "Voilà à quoi ressemble votre peau quand vous savez exactement ce dont elle a besoin.",
    // EN: Full breakdown, routine gaps, ingredient matches, and your next-step plan.
    r_unlock_sub: "Analyse détaillée, lacunes de votre routine, ingrédients adaptés et plan d'action.",
    // EN: Show Me My Full Glow Analysis →
    r_show_full: "Voir mon analyse Glow complète →",
    // EN: Full routine · Ingredient breakdown · What to fix first
    r_unlock_fine: "Routine complète · Décryptage des ingrédients · Ce qu'il faut corriger en premier",

    // ── glowscan-v2.html — screen 5 (report details + price) ──
    // EN: Skip to checkout →
    p_skip: "Passer directement au paiement →",
    // EN: Your full report is ready
    p_eyebrow: "Votre rapport complet est prêt",
    // EN: Built from <span style="color:#4E6B49;font-style:italic">your face.</span> Not someone else's routine.
    p_h2: "Conçu à partir de <span style=\"color:#4E6B49;font-style:italic\">votre visage.</span> Pas de la routine de quelqu'un d'autre.",
    // EN: That skin age isn't permanent. Here's how you fix it.
    p_summary: "Cet âge de peau n'est pas définitif. Voici comment y remédier.",
    // EN: Look younger · Feel confident · Spend smarter
    p_tagline: "Paraître plus jeune · Se sentir confiante · Dépenser plus intelligemment",
    // EN: Your personalized AM/PM routine
    p_b1_title: "Votre routine matin & soir personnalisée",
    // EN: Morning and evening steps built for your exact skin
    p_b1_desc: "Des étapes du matin et du soir pensées exactement pour votre peau",
    // EN: The 2-3 products working against you right now
    p_b2_title: "Les 2 ou 3 produits qui jouent contre vous en ce moment",
    // EN: What's on your shelf sabotaging your results
    p_b2_desc: "Ce qui, dans votre salle de bain, sabote vos résultats",
    // EN: Ingredient guide for your skin type
    p_b3_title: "Guide des ingrédients pour votre type de peau",
    // EN: What actually works for your concerns — no guessing
    p_b3_desc: "Ce qui fonctionne vraiment pour vos problématiques — sans deviner",
    // EN: What your skin actually needs this week
    p_b4_title: "Ce dont votre peau a vraiment besoin cette semaine",
    // EN: Personalized picks based on your exact scan results
    p_b4_desc: "Des recommandations personnalisées basées sur les résultats exacts de votre scan",
    // EN: I actually cried. I've wasted so much money on the wrong stuff. this fixed that
    p_review1: "J'en ai vraiment pleuré. J'ai gaspillé tellement d'argent dans les mauvais produits. Ce rapport a tout réglé",
    // EN: called out the exact products sabotaging my skin. I felt so seen
    p_review2: "a identifié exactement les produits qui sabotaient ma peau. Je me suis sentie tellement comprise",
    // EN: finally understood why my $80 serum did nothing. changed everything
    p_review3: "j'ai enfin compris pourquoi mon sérum à 80 € ne faisait rien. ça a tout changé",
    // EN: What wrong products cost you
    p_cost_title: "Ce que vous coûtent les mauvais produits",
    // EN: Wrong cleanser — yearly
    p_cost_1: "Mauvais nettoyant — par an",
    // EN: Mismatched actives
    p_cost_2: "Actifs incompatibles",
    // EN: Products that cancel each other
    p_cost_3: "Produits qui s'annulent",
    // EN: Trending items that don't match your skin
    p_cost_4: "Produits tendance inadaptés à votre peau",
    // EN: Average wasted per year
    p_cost_total: "Moyenne gaspillée par an",
    // EN: Less than your morning coffee. More useful than your last three serums.
    p_price_line: "Moins cher que votre café matinal. Plus utile que vos trois derniers sérums.",
    // EN: Originally $29
    p_price_orig: "Initialement 29 €",
    // EN: Today only — intro price
    p_price_badge: "Aujourd'hui seulement — prix de lancement",
    // EN: Instant access · Built from your scan · One-time payment<br>7-day refund if it doesn't help
    p_cta_fine: "Accès immédiat · Conçu à partir de votre scan · Paiement unique<br>Remboursement sous 7 jours si cela ne vous aide pas",

    // ── glowscan-v2.html — screen 6 (checkout / playbook add-on) ──
    // EN: ONE LAST THING
    c_eyebrow: "UNE DERNIÈRE CHOSE",
    // EN: Add The Anti-Aging Playbook
    c_h2: "Ajoutez Le Playbook Anti-Âge",
    // EN: Know the why behind every product you use.
    c_sub: "Comprenez le pourquoi derrière chaque produit que vous utilisez.",
    // EN: Ingredient decoder · Smart shopping lists · 4 budget routines
    c_tagline: "Décryptage des ingrédients · Listes de courses intelligentes · 4 routines par budget",
    // EN: The Glow Well Anti-Aging Playbook
    c_product: "Le Playbook Anti-Âge The Glow Well",
    // EN: GLOW SCAN EXCLUSIVE
    c_exclusive: "EXCLUSIVITÉ GLOW SCAN",
    // EN: $600 in skincare value. Yours for $14.99.
    c_value: "Une valeur de 600 € en conseils soins de la peau. À vous pour 14,99 €.",
    // EN: 25% SCAN DISCOUNT APPLIED ✓
    c_discount: "RÉDUCTION SCAN DE 25% APPLIQUÉE ✓",
    // EN: just started it and already know more about my skin than 10 years of guessing
    c_review1: "je viens de commencer et j'en sais déjà plus sur ma peau qu'après 10 ans de tâtonnements",
    // EN: already saved $200 swapping out the wrong products. feel so much smarter about everything I put on my face
    c_review2: "j'ai déjà économisé 200 € en éliminant les mauvais produits. je me sens beaucoup plus avisée sur tout ce que j'applique sur mon visage",
    // EN: Yes — Add the Playbook to My Order →
    c_btn_bundle: "Oui — Ajouter le Playbook à ma commande →",
    // EN: No thanks, just the report →
    c_btn_report: "Non merci, juste le rapport →",
    // EN: 14,200+ women · Secured by Lemon Squeezy · 7-day guarantee
    c_trust: "Plus de 14 200 femmes · Sécurisé par Lemon Squeezy · Garantie de 7 jours",

    // ── glowscan-v2.html — screen 7 (confirmation) ──
    // EN: You're all set.
    k_h2: "Tout est prêt.",
    // EN: Give us just a moment — we're building your full report, personalized to your skin and your scan results. Your photo has been deleted from our servers.
    k_sub: "Accordez-nous un instant — nous préparons votre rapport complet, personnalisé selon votre peau et les résultats de votre scan. Votre photo a été supprimée de nos serveurs.",
    // EN: Your Glow Scan Report
    k_card_label: "Votre Rapport Glow Scan",
    // EN: Full personalized skin analysis
    k_card_title: "Analyse de peau complète et personnalisée",
    // EN: View Your Full Report →
    view_report: "Voir votre rapport complet →",
    // EN: Building your personalized report — analyzing your photo patterns, matching ingredients to your budget, and building a routine around the stores you shop at. Usually 1-2 minutes. Worth the wait.
    k_wait_msg: "Création de votre rapport personnalisé — analyse des motifs sur votre photo, adéquation des ingrédients à votre budget, et élaboration d'une routine à partir de vos boutiques préférées. Prend généralement 1 à 2 minutes. L'attente en vaut la peine.",
    // EN: The Glow Well Playbook
    k_pb_label: "Le Playbook The Glow Well",
    // EN: Your receipt email has your download link. Also at app.lemonsqueezy.com/my-orders
    k_pb_title: "L'e-mail contenant votre reçu inclut votre lien de téléchargement. Également disponible sur app.lemonsqueezy.com/my-orders",
    // EN: Download your Playbook — check your email for the link →
    k_pb_link: "Téléchargez votre Playbook — vérifiez vos e-mails pour le lien →",

    // ── glowscan-v2.html — discount popup / email recovery ──
    // EN: Still deciding?
    pop_still: "Vous hésitez encore ?",
    // EN: Get 25% off your full report
    pop_title: "Profitez de -25% sur votre rapport complet",
    // EN: Look younger. Feel confident. Start today.
    pop_sub: "Paraissez plus jeune. Sentez-vous confiante. Commencez dès aujourd'hui.",
    // EN: Unlock My Report — <span id="popupDiscountPrice"></span> →
    pop_btn: "Débloquer mon rapport — <span id=\"popupDiscountPrice\"></span> →",
    // EN: No thanks, I'll pay full price
    pop_dismiss: "Non merci, je paierai le prix fort",
    // EN: Welcome back
    rec_eyebrow: "Bon retour",
    // EN: To load your personalized report on this device, please enter the email you used during your scan.
    rec_h2: "Pour charger votre rapport personnalisé sur cet appareil, veuillez entrer l'adresse e-mail utilisée lors de votre scan.",
    // EN: Your scan is securely linked to your email — we'll use it to retrieve your real results.
    rec_sub: "Votre scan est lié à votre e-mail de manière sécurisée — nous l'utiliserons pour récupérer vos résultats.",
    // EN: Load My Report →
    rec_btn: "Charger mon rapport →",

    // ── glowscan-v2.html — strings built at runtime in JS ({price}/{age}/{n} are filled by the page) ──
    // EN: Unlock My Full Report — {price} →
    js_sticky_unlock: "Débloquer mon rapport complet — {price} →",
    // EN: Unlock My Report — 25% Off — ${price} →
    js_sticky_discount: "Débloquer mon rapport — -25 % — ${price} →",
    // EN: Reading your barrier health signals...
    js_scan_1: "Lecture des signaux de santé de votre barrière cutanée...",
    // EN: Mapping your hydration patterns across zones...
    js_scan_2: "Cartographie de vos niveaux d'hydratation par zones...",
    // EN: Matching ingredients to your skin profile...
    js_scan_3: "Association des ingrédients à votre profil de peau...",
    // EN: Identifying what your current routine is missing...
    js_scan_4: "Identification des manques dans votre routine actuelle...",
    // EN: Calculating your Glow Score...
    js_scan_5: "Calcul de votre Glow Score...",
    // EN: We couldn't get a clear read on your photo. This usually happens with low lighting, too much distance, or an angled shot. Try again with a well-lit, straight-on selfie — natural light works best 🤍
    js_scan_fail: "Nous n'avons pas pu lire clairement votre photo. Cela se produit généralement en cas de faible luminosité, d'une trop grande distance ou d'un angle de vue de biais. Réessayez avec un selfie de face et bien éclairé — la lumière naturelle est idéale 🤍",
    // EN: Retake Photo
    js_retake_photo: "Reprendre la photo",
    // EN: We couldn't read your skin clearly.
    js_invalid_title: "Nous n'avons pas pu analyser votre peau clairement.",
    // EN: No face was detected in your photo.
    js_invalid_no_face: "Aucun visage n'a été détecté sur votre photo.",
    // EN: Your photo lighting is too dark or overexposed.
    js_invalid_lighting: "L'éclairage de votre photo est trop sombre ou surexposé.",
    // EN: Heavy makeup or filters make accurate analysis difficult.
    js_invalid_makeup: "Un maquillage prononcé ou des filtres rendent l'analyse précise difficile.",
    // EN: Your face needs to be closer and fully in frame.
    js_invalid_too_far: "Votre visage doit être plus proche et entièrement dans le cadre.",
    // EN: For best results: natural light · no makeup · face fully in frame · no filters or sunglasses
    js_invalid_tips: "Pour de meilleurs résultats : lumière naturelle · sans maquillage · visage entièrement dans le cadre · ni filtres ni lunettes de soleil",
    // EN: Try Again →
    js_try_again: "Réessayer →",
    // EN: Your actual age: {age}
    js_actual_age: "Votre âge réel : {age}",
    // EN: {n} years
    js_years_gap: "{n} ans",
    // EN: On track
    js_on_track: "Sur la bonne voie",
    // EN: Raw Start
    js_tier_1_name: "Point de départ",
    // EN: Your skin's origin story starts here.
    js_tier_1_line: "L'histoire de la transformation de votre peau commence ici.",
    // EN: Bottom 20% — but Raw Start means most improved
    js_tier_1_percentile: "Dans les 20 % inférieurs — mais c'est ici qu'on observe la plus belle progression",
    // EN: The Rebuild
    js_tier_2_name: "La Reconstruction",
    // EN: The foundations are shifting — in a good way.
    js_tier_2_line: "Les fondations bougent — et c'est une excellente chose.",
    // EN: Better than 35% of scanned users your age
    js_tier_2_percentile: "Mieux que 35 % des utilisatrices scannées de votre âge",
    // EN: Steady Glow
    js_tier_3_name: "Éclat Constant",
    // EN: Solid base. Now we refine.
    js_tier_3_line: "Une base solide. Il est temps de peaufiner.",
    // EN: Better than 52% of scanned users your age
    js_tier_3_percentile: "Mieux que 52 % des utilisatrices scannées de votre âge",
    // EN: High Beam
    js_tier_4_name: "Rayonnement",
    // EN: Your routine is working. Keep going.
    js_tier_4_line: "Votre routine fonctionne. Continuez sur cette lancée.",
    // EN: Better than 71% of scanned users your age
    js_tier_4_percentile: "Mieux que 71 % des utilisatrices scannées de votre âge",
    // EN: Rare Form
    js_tier_5_name: "Forme Rare",
    // EN: This is what consistency looks like.
    js_tier_5_line: "Voilà à quoi ressemble la régularité.",
    // EN: Better than 87% of scanned users your age
    js_tier_5_percentile: "Mieux que 87 % des utilisatrices scannées de votre âge",
    // EN: Prime Glow
    js_tier_6_name: "Glow Absolu",
    // EN: Your skin is having its moment.
    js_tier_6_line: "Votre peau vit son moment de gloire.",
    // EN: Top 5% of all Glow Scans taken
    js_tier_6_percentile: "Dans le top 5 % de tous les Glow Scans réalisés",
    // EN: Patterns consistent with a compromised barrier — more about habit than genetics.
    js_fallback_teaser_1: "Des signes qui correspondent à une barrière altérée — plus liés à vos habitudes qu'à la génétique.",
    // EN: Your routine may be doing one thing well while undoing another at the same time.
    js_fallback_teaser_2: "Votre routine a peut-être un point fort, mais annule ses effets par ailleurs.",
    // EN: The concern you flagged tends to be a symptom of something upstream — not the root cause.
    js_fallback_teaser_3: "Le problème que vous avez signalé est souvent le symptôme d'un autre déséquilibre — et non la cause profonde.",
    // EN: just found out my skin is {n} years older than it should be 😭 got my free Glow Score at theglowwell.com — it's free and slightly terrifying
    js_share_older: "je viens de découvrir que ma peau a {n} ans de plus qu'elle ne devrait 😭 j'ai obtenu mon Glow Score gratuit sur theglowwell.com — c'est gratuit et un peu effrayant",
    // EN: just found out my skin is {n} years younger than my actual age ✨ got my free Glow Scan at theglowwell.com
    js_share_younger: "je viens de découvrir que ma peau a {n} ans de moins que mon âge réel ✨ j'ai fait mon Glow Scan gratuit sur theglowwell.com",
    // EN: My Glow Scan Score
    js_share_title: "Mon Score Glow Scan",
    // EN: Screenshot saved — check your downloads
    js_share_saved: "Capture d'écran sauvegardée — vérifiez vos téléchargements",
    // EN: Your report is taking a little longer than usual. Please wait a moment and try again.
    js_report_delay: "Votre rapport prend un peu plus de temps que prévu. Veuillez patienter un instant et réessayer.",
    // EN: Generating...
    js_generating: "Génération en cours...",
    // EN: Generating your report...
    js_generating_report: "Génération de votre rapport...",
    // EN: Tap to generate your report
    js_tap_generate: "Appuyez pour générer votre rapport",
    // EN: Please retake your scan to view your report
    js_retake_to_view: "Veuillez refaire votre scan pour voir votre rapport",
    // EN: Please enter a valid email address.
    js_rec_invalid_email: "Veuillez entrer une adresse e-mail valide.",
    // EN: Loading your report...
    js_rec_loading: "Chargement de votre rapport...",
    // EN: No report found for that email. Please double-check the address you used during your scan.
    js_rec_not_found: "Aucun rapport trouvé pour cet e-mail. Veuillez vérifier l'adresse utilisée lors de votre scan.",
    // EN: Network error. Please check your connection and try again.
    js_rec_network: "Erreur réseau. Veuillez vérifier votre connexion et réessayer."
  }
};