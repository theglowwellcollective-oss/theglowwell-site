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
    index_title: "",
    // EN: Home
    nav_home: "",
    // EN: Blog
    nav_blog: "",
    // EN: Free Resources
    nav_resources: "",
    // EN: Find Your Kit
    nav_kit: "",
    // EN: About
    nav_about: "",
    // EN: Get the Playbook
    nav_playbook_cta: "",
    // EN: Scan My Skin — Free
    nav_scan_cta: "",
    // EN: Scan Free →
    nav_scan_mobile: "",
    // EN: Playbook
    nav_playbook: "",
    // EN: Privacy Policy
    footer_privacy: "",
    // EN: Contact
    footer_contact: "",
    // EN: © 2025 The Glow Well · theglowwell.com
    footer_copy: "",

    // ── index.html — hero ──
    // EN: Free Skin Analysis · 150,000+ Scans Taken
    hero_eyebrow: "",
    // EN: Your Skin Has Been Sending Signals. It's Time to <em>Listen.</em>
    hero_h1: "",
    // EN: Upload a selfie. Answer 3 quick questions. Find out exactly what your skin needs — and how to give it to you.
    hero_sub: "",
    // EN: 5 questions · One photo · One minute
    hero_five_q: "",
    // EN: people getting their Glow Score right now
    hero_live_counter: "",
    // EN: Reveal My Glow Score — It's Free
    hero_cta: "",
    // EN: Free
    trust_free: "",
    // EN: No account
    trust_no_account: "",
    // EN: No credit card
    trust_no_card: "",
    // EN: Look younger. Feel confident. Stop guessing.
    hero_tagline: "",
    // EN: 🔒 Analyzed & Deleted immediately. Never stored.
    hero_privacy: "",
    // EN: Your Glow Score
    mock_label: "",
    // EN: Hydration
    score_hydration: "",
    // EN: Barrier Health
    score_barrier: "",
    // EN: Texture Clarity
    score_texture: "",
    // EN: Radiance
    score_radiance: "",
    // EN: FREE GLOW SCAN · THEGLOWWELL.COM
    brand_watermark: "",

    // ── index.html — old way / new way ──
    // EN: Why this is different
    why_eyebrow: "",
    // EN: Stop guessing. <em style="color:var(--sage-dark)">Start knowing.</em>
    why_h2: "",
    // EN: Built on peer-reviewed dermatology research — not TikTok trends.
    credibility_line: "",
    // EN: The old way
    old_way_title: "",
    // EN: Buy whatever TikTok recommends
    old_way_1: "",
    // EN: Trial and error, shelf of regrets
    old_way_2: "",
    // EN: Generic routines built for no one
    old_way_3: "",
    // EN: Waste $600+ on products that don't match your skin
    old_way_4: "",
    // EN: The Glow Well way
    new_way_title: "",
    // EN: Know exactly what YOUR skin needs
    new_way_1: "",
    // EN: Built from your face scan, not a template
    new_way_2: "",
    // EN: Personalized to your skin, age and budget
    new_way_3: "",
    // EN: One scan. One plan. Zero guessing.
    new_way_4: "",

    // ── index.html — how it works ──
    // EN: How it works
    how_eyebrow: "",
    // EN: Three steps. <em>60 seconds.</em>
    how_h2: "",
    // EN: No account. No credit card. Just your selfie and 5 questions.
    how_sub: "",
    // EN: Answer 5 questions
    how_step1_title: "",
    // EN: Skin concern, budget, routine, and how your skin feels. 30 seconds.
    how_step1_desc: "",
    // EN: Upload your selfie
    how_step2_title: "",
    // EN: Our trained scanner does the rest.
    how_step2_desc: "",
    // EN: Get your Glow Score
    how_step3_title: "",
    // EN: Your skin age, personalized score, and 3 things to know — free instantly.
    how_step3_desc: "",
    // EN: Start Your Free Scan →
    how_cta: "",

    // ── index.html — real results photos ──
    // EN: Real results
    photos_eyebrow: "",
    // EN: What the right routine <em>actually does.</em>
    photos_h2: "",
    // EN: Consistent routine use over 6-8 weeks. Real people, real skin.
    photos_sub: "",
    // EN: Results shown are from 6-8 weeks of consistent routine use — your skin's timeline may vary, but the path is the same.
    photos_disclaimer: "",

    // ── index.html — reviews ──
    // EN: What people are saying
    reviews_eyebrow: "",
    // EN: Real skin. <em>Real results.</em>
    reviews_h2: "",
    // EN: 4.9/5 average · Verified
    reviews_sub: "",
    // EN: "I thought I had dry skin for 3 years. Nope. Just a destroyed barrier. Fixed it in 3 weeks."
    review_1_quote: "",
    // EN: Sara, 26 · Verified
    review_1_attr: "",
    // EN: "Called out the exact stuff I keep buying and never use. Saved me money immediately."
    review_2_quote: "",
    // EN: Yasmine, 34 · Verified
    review_2_attr: "",
    // EN: "Finally understood why that $80 serum did nothing. Wrong acid for my skin."
    review_3_quote: "",
    // EN: Celeste, 42 · Verified
    review_3_attr: "",
    // EN: See What Your Skin Says →
    reviews_cta: "",

    // ── index.html — playbook ──
    // EN: Want the complete system?
    playbook_eyebrow: "",
    // EN: The 96-page guide <em>behind the scan.</em>
    playbook_h2: "",
    // EN: Ingredient decoder. Budget routines. Store shopping lists. Everything your Glow Scan points toward.
    playbook_sub: "",
    // EN: 96 pages of clarity
    playbook_prop1_title: "",
    // EN: Budget tiers, ingredient decoder, store lists for Target, Walmart, Amazon, and Sephora.
    playbook_prop1_desc: "",
    // EN: Works with your scan
    playbook_prop2_title: "",
    // EN: The education behind every recommendation your Glow Scan makes.
    playbook_prop2_desc: "",
    // EN: Get the Playbook — $19.99
    playbook_cta: "",
    // EN: Already have your Glow Score? The Playbook explains the why behind every result.
    playbook_note: "",

    // ── index.html — final CTA ──
    // EN: Find out for free
    final_eyebrow: "",
    // EN: Your skin has something<br>to tell you.
    final_h2: "",
    // EN: Find out what it is. Free. In 60 seconds.
    final_sub: "",
    // EN: Scan My Skin — It's Free
    final_cta: "",
    // EN: Photo deleted instantly · No account · 7-day report guarantee
    final_trust: "",

    // ── glowscan-v2.html — head / nav ──
    // EN: Glow Scan — Free AI Skin Analysis | The Glow Well
    scan_title: "",
    // EN: Free Scan
    nav_free_scan: "",

    // ── glowscan-v2.html — screen 1 (hero) ──
    // EN: Free AI Skin Analysis
    s1_eyebrow: "",
    // EN: Your skin has been sending signals. It's time to listen.
    s1_h1: "",
    // EN: Reveal My Glow Score — Free
    s1_cta: "",
    // EN: By continuing you agree to our <a href="privacy.html" style="color:var(--text-light);text-decoration:underline;text-underline-offset:2px;">Privacy Policy</a>.
    s1_privacy_agree: "",
    // EN: Photo never stored
    s1_trust_photo: "",
    // EN: 60 seconds
    s1_trust_time: "",
    // EN: Used by 14,000+ women who finally stopped guessing
    s1_social: "",

    // ── glowscan-v2.html — screen 2 (quiz) — labels only; submitted values stay English ──
    // EN: Step 1 of 4
    q_progress_1: "",
    // EN: Your skin is trying to tell you something. Every day.<br>These 3 questions help us hear it.
    q_intro: "",
    // EN: Question 1
    q1_label: "",
    // EN: How old are you?
    q1_text: "",
    // EN: (Your skin age might be a very different number.)
    q1_hint: "",
    // EN: Enter your age
    q1_placeholder: "",
    // EN: Question 2
    q2_label: "",
    // EN: Every skin type has a signature. Yours is already talking — <em>what's it saying?</em>
    q2_text: "",
    // EN: Fine lines that weren't there last year
    q2_opt1: "",
    // EN: Dull and tired, even when I'm not
    q2_opt2: "",
    // EN: Reactive — my skin has opinions about everything
    q2_opt3: "",
    // EN: Oily by noon, tight by morning — make it make sense
    q2_opt4: "",
    // EN: Texture that foundation can't hide
    q2_opt5: "",
    // EN: Breaking out at an age I shouldn't be
    q2_opt6: "",
    // EN: Question 3
    q3_label: "",
    // EN: Where are you based?
    q3_text: "",
    // EN: (This helps us match UV exposure, climate, and environmental stress to your skin.)
    q3_hint: "",
    // EN: Select your region...
    q3_placeholder: "",
    // EN: 🌎 North America (US, Canada)
    q3_opt_na: "",
    // EN: 🌍 Western Europe (UK, France, Germany + EU)
    q3_opt_we: "",
    // EN: 🌏 Australia & New Zealand
    q3_opt_anz: "",
    // EN: 🕌 Middle East (UAE, Saudi Arabia, Gulf)
    q3_opt_me: "",
    // EN: 🌐 East Asia (China, Japan, Korea, Southeast Asia)
    q3_opt_ea: "",
    // EN: 🌸 South Asia (India, Pakistan, Bangladesh)
    q3_opt_sa: "",
    // EN: 🌑 Africa & South America
    q3_opt_afsa: "",
    // EN: Next — Upload Your Photo →
    q_next: "",
    // EN: Answer all 3 questions to continue
    q_in_progress: "",

    // ── glowscan-v2.html — screen 2b (photo upload) ──
    // EN: Step 2 of 4
    q_progress_2: "",
    // EN: Final step before your results
    upload_eyebrow: "",
    // EN: Now the scan sees what the questions can't.
    upload_headline: "",
    // EN: Trained on 150,000+ real skin analyses. It takes 15 seconds. Your photo is deleted the moment it's done.
    upload_subtext: "",
    // EN: Tap to upload your photo
    upload_title: "",
    // EN: Face fully in frame, no sunglasses. The more real, the more accurate.
    upload_sub: "",
    // EN: women uploading their photo right now
    upload_live_counter: "",
    // EN: 🔒 Analyzed by AI. Never seen by a human. Deleted instantly. Not stored — ever.<br> <span>Your photo never touches a human. Ever.</span>
    upload_privacy: "",
    // EN: "It scanned my skin age as 39. I'm 44. I literally cried — absolutely love the AM/PM routine it recommended."
    upload_quote: "",
    // EN: — Gianna M., 44 · Verified
    upload_attr: "",

    // ── glowscan-v2.html — screen 2c (email) ──
    // EN: Step 3 of 4
    q_progress_3: "",
    // EN: Your Glow Score is ready.
    email_heading: "",
    // EN: Where should we send your results?
    email_subhead: "",
    // EN: We'll analyze your scan and have your personalized results ready in 15 seconds.
    email_sub: "",
    // EN: Your email address
    email_placeholder: "",
    // EN: Photo analyzed instantly. Never stored on our servers.<br>No spam — just your results and occasional skin tips.
    email_privacy: "",
    // EN: Send Me My Results →
    email_cta: "",

    // ── glowscan-v2.html — screen 3 (loading) ──
    // EN: Scanning sebaceous activity...
    loading_initial: "",
    // EN: 14,000+ women have seen results they didn't expect.
    loading_footnote: "",

    // ── glowscan-v2.html — screen 4 (free results) ──
    // EN: See What's In Your Full Report →
    r_see_full: "",
    // EN: Your Free Glow Scan Results
    r_eyebrow: "",
    // EN: Skin Age
    r_skin_age: "",
    // EN: estimated biological age
    r_age_sub: "",
    // EN: vs. your actual age
    r_gap_label: "",
    // EN: Skin age isn't permanent. Your full report shows exactly how to lower it.
    r_not_permanent: "",
    // EN: Skin Age:
    r_skin_age_mini: "",
    // EN: Glow Score: <strong id="glowScoreMini" style="color:var(--charcoal);font-size:16px">—</strong>/100
    r_glow_score_mini: "",
    // EN: Your Skin Scores
    r_scores_title: "",
    // EN: Your Glow Score
    r_glow_total_label: "",
    // EN: Your Glow Stage
    r_glow_stage: "",
    // EN: Share Your Glow Score With a Friend
    r_share_btn: "",
    // EN: For educational purposes only. Not a substitute for professional medical advice.
    r_disclaimer: "",
    // EN: Unlock My Full Report 🔒
    r_unlock_btn: "",
    // EN: This is your overview. Your full report goes 10x deeper.
    r_overview: "",
    // EN: What we're seeing
    r_seeing: "",
    // EN: Your Full Report Includes
    r_includes: "",
    // EN: YOUR CUSTOM AM/PM ROUTINE
    r_sec_routine: "",
    // EN: Your Morning Routine
    r_blur_morning: "",
    // EN: Step 1: Gentle cleanser — [personalized pick]<br>Step 2: Vitamin C serum — [matched to your skin age]<br>Step 3: Moisturizer — [barrier-matched formula]<br>Step 4: SPF — [your skin type specific]
    r_blur_morning_steps: "",
    // EN: 🔒 UNLOCK TO REVEAL
    r_unlock_reveal: "",
    // EN: INGREDIENT GUIDE FOR YOUR SKIN
    r_sec_ingredients: "",
    // EN: Ingredients Your Skin Needs
    r_blur_ingredients: "",
    // EN: ✓ [Active #1 matched to your concern]<br>✓ [Active #2 for your skin age]<br>✓ [Barrier ingredient personalized to you]<br>✗ [Ingredient currently working against you]
    r_blur_ingredients_list: "",
    // EN: WHAT YOUR SKIN NEEDS THIS WEEK
    r_sec_week: "",
    // EN: What To Stop Using This Week
    r_blur_stop: "",
    // EN: ⚠️ [Product type working against your barrier]<br>⚠️ [Ingredient pairing cancelling each other out]<br>⚠️ [Timing issue in your current routine]
    r_blur_stop_list: "",
    // EN: This is what your skin looks like when you know exactly what it needs.
    r_unlock_title: "",
    // EN: Full breakdown, routine gaps, ingredient matches, and your next-step plan.
    r_unlock_sub: "",
    // EN: Show Me My Full Glow Analysis →
    r_show_full: "",
    // EN: Full routine · Ingredient breakdown · What to fix first
    r_unlock_fine: "",

    // ── glowscan-v2.html — screen 5 (report details + price) ──
    // EN: Skip to checkout →
    p_skip: "",
    // EN: Your full report is ready
    p_eyebrow: "",
    // EN: Built from <span style="color:#4E6B49;font-style:italic">your face.</span> Not someone else's routine.
    p_h2: "",
    // EN: That skin age isn't permanent. Here's how you fix it.
    p_summary: "",
    // EN: Look younger · Feel confident · Spend smarter
    p_tagline: "",
    // EN: Your personalized AM/PM routine
    p_b1_title: "",
    // EN: Morning and evening steps built for your exact skin
    p_b1_desc: "",
    // EN: The 2-3 products working against you right now
    p_b2_title: "",
    // EN: What's on your shelf sabotaging your results
    p_b2_desc: "",
    // EN: Ingredient guide for your skin type
    p_b3_title: "",
    // EN: What actually works for your concerns — no guessing
    p_b3_desc: "",
    // EN: What your skin actually needs this week
    p_b4_title: "",
    // EN: Personalized picks based on your exact scan results
    p_b4_desc: "",
    // EN: I actually cried. I've wasted so much money on the wrong stuff. this fixed that
    p_review1: "",
    // EN: called out the exact products sabotaging my skin. I felt so seen
    p_review2: "",
    // EN: finally understood why my $80 serum did nothing. changed everything
    p_review3: "",
    // EN: What wrong products cost you
    p_cost_title: "",
    // EN: Wrong cleanser — yearly
    p_cost_1: "",
    // EN: Mismatched actives
    p_cost_2: "",
    // EN: Products that cancel each other
    p_cost_3: "",
    // EN: Trending items that don't match your skin
    p_cost_4: "",
    // EN: Average wasted per year
    p_cost_total: "",
    // EN: Less than your morning coffee. More useful than your last three serums.
    p_price_line: "",
    // EN: Originally $29
    p_price_orig: "",
    // EN: Today only — intro price
    p_price_badge: "",
    // EN: Instant access · Built from your scan · One-time payment<br>7-day refund if it doesn't help
    p_cta_fine: "",

    // ── glowscan-v2.html — screen 6 (checkout / playbook add-on) ──
    // EN: ONE LAST THING
    c_eyebrow: "",
    // EN: Add The Anti-Aging Playbook
    c_h2: "",
    // EN: Know the why behind every product you use.
    c_sub: "",
    // EN: Ingredient decoder · Smart shopping lists · 4 budget routines
    c_tagline: "",
    // EN: The Glow Well Anti-Aging Playbook
    c_product: "",
    // EN: GLOW SCAN EXCLUSIVE
    c_exclusive: "",
    // EN: $600 in skincare value. Yours for $14.99.
    c_value: "",
    // EN: 25% SCAN DISCOUNT APPLIED ✓
    c_discount: "",
    // EN: just started it and already know more about my skin than 10 years of guessing
    c_review1: "",
    // EN: already saved $200 swapping out the wrong products. feel so much smarter about everything I put on my face
    c_review2: "",
    // EN: Yes — Add the Playbook to My Order →
    c_btn_bundle: "",
    // EN: No thanks, just the report →
    c_btn_report: "",
    // EN: 14,200+ women · Secured by Lemon Squeezy · 7-day guarantee
    c_trust: "",

    // ── glowscan-v2.html — screen 7 (confirmation) ──
    // EN: You're all set.
    k_h2: "",
    // EN: Give us just a moment — we're building your full report, personalized to your skin and your scan results. Your photo has been deleted from our servers.
    k_sub: "",
    // EN: Your Glow Scan Report
    k_card_label: "",
    // EN: Full personalized skin analysis
    k_card_title: "",
    // EN: View Your Full Report →
    view_report: "",
    // EN: Building your personalized report — analyzing your photo patterns, matching ingredients to your budget, and building a routine around the stores you shop at. Usually 1-2 minutes. Worth the wait.
    k_wait_msg: "",
    // EN: The Glow Well Playbook
    k_pb_label: "",
    // EN: Your receipt email has your download link. Also at app.lemonsqueezy.com/my-orders
    k_pb_title: "",
    // EN: Download your Playbook — check your email for the link →
    k_pb_link: "",

    // ── glowscan-v2.html — discount popup / email recovery ──
    // EN: Still deciding?
    pop_still: "",
    // EN: Get 25% off your full report
    pop_title: "",
    // EN: Look younger. Feel confident. Start today.
    pop_sub: "",
    // EN: Unlock My Report — <span id="popupDiscountPrice"></span> →
    pop_btn: "",
    // EN: No thanks, I'll pay full price
    pop_dismiss: "",
    // EN: Welcome back
    rec_eyebrow: "",
    // EN: To load your personalized report on this device, please enter the email you used during your scan.
    rec_h2: "",
    // EN: Your scan is securely linked to your email — we'll use it to retrieve your real results.
    rec_sub: "",
    // EN: Load My Report →
    rec_btn: "",

    // ── glowscan-v2.html — strings built at runtime in JS ({price}/{age}/{n} are filled by the page) ──
    // EN: Unlock My Full Report — {price} →
    js_sticky_unlock: "",
    // EN: Unlock My Report — 25% Off — ${price} →
    js_sticky_discount: "",
    // EN: Reading your barrier health signals...
    js_scan_1: "",
    // EN: Mapping your hydration patterns across zones...
    js_scan_2: "",
    // EN: Matching ingredients to your skin profile...
    js_scan_3: "",
    // EN: Identifying what your current routine is missing...
    js_scan_4: "",
    // EN: Calculating your Glow Score...
    js_scan_5: "",
    // EN: We couldn't get a clear read on your photo. This usually happens with low lighting, too much distance, or an angled shot. Try again with a well-lit, straight-on selfie — natural light works best 🤍
    js_scan_fail: "",
    // EN: Retake Photo
    js_retake_photo: "",
    // EN: We couldn't read your skin clearly.
    js_invalid_title: "",
    // EN: No face was detected in your photo.
    js_invalid_no_face: "",
    // EN: Your photo lighting is too dark or overexposed.
    js_invalid_lighting: "",
    // EN: Heavy makeup or filters make accurate analysis difficult.
    js_invalid_makeup: "",
    // EN: Your face needs to be closer and fully in frame.
    js_invalid_too_far: "",
    // EN: For best results: natural light · no makeup · face fully in frame · no filters or sunglasses
    js_invalid_tips: "",
    // EN: Try Again →
    js_try_again: "",
    // EN: Your actual age: {age}
    js_actual_age: "",
    // EN: {n} years
    js_years_gap: "",
    // EN: On track
    js_on_track: "",
    // EN: Raw Start
    js_tier_1_name: "",
    // EN: Your skin's origin story starts here.
    js_tier_1_line: "",
    // EN: Bottom 20% — but Raw Start means most improved
    js_tier_1_percentile: "",
    // EN: The Rebuild
    js_tier_2_name: "",
    // EN: The foundations are shifting — in a good way.
    js_tier_2_line: "",
    // EN: Better than 35% of scanned users your age
    js_tier_2_percentile: "",
    // EN: Steady Glow
    js_tier_3_name: "",
    // EN: Solid base. Now we refine.
    js_tier_3_line: "",
    // EN: Better than 52% of scanned users your age
    js_tier_3_percentile: "",
    // EN: High Beam
    js_tier_4_name: "",
    // EN: Your routine is working. Keep going.
    js_tier_4_line: "",
    // EN: Better than 71% of scanned users your age
    js_tier_4_percentile: "",
    // EN: Rare Form
    js_tier_5_name: "",
    // EN: This is what consistency looks like.
    js_tier_5_line: "",
    // EN: Better than 87% of scanned users your age
    js_tier_5_percentile: "",
    // EN: Prime Glow
    js_tier_6_name: "",
    // EN: Your skin is having its moment.
    js_tier_6_line: "",
    // EN: Top 5% of all Glow Scans taken
    js_tier_6_percentile: "",
    // EN: Patterns consistent with a compromised barrier — more about habit than genetics.
    js_fallback_teaser_1: "",
    // EN: Your routine may be doing one thing well while undoing another at the same time.
    js_fallback_teaser_2: "",
    // EN: The concern you flagged tends to be a symptom of something upstream — not the root cause.
    js_fallback_teaser_3: "",
    // EN: just found out my skin is {n} years older than it should be 😭 got my free Glow Score at theglowwell.com — it's free and slightly terrifying
    js_share_older: "",
    // EN: just found out my skin is {n} years younger than my actual age ✨ got my free Glow Scan at theglowwell.com
    js_share_younger: "",
    // EN: My Glow Scan Score
    js_share_title: "",
    // EN: Screenshot saved — check your downloads
    js_share_saved: "",
    // EN: Your report is taking a little longer than usual. Please wait a moment and try again.
    js_report_delay: "",
    // EN: Generating...
    js_generating: "",
    // EN: Generating your report...
    js_generating_report: "",
    // EN: Tap to generate your report
    js_tap_generate: "",
    // EN: Please retake your scan to view your report
    js_retake_to_view: "",
    // EN: Please enter a valid email address.
    js_rec_invalid_email: "",
    // EN: Loading your report...
    js_rec_loading: "",
    // EN: No report found for that email. Please double-check the address you used during your scan.
    js_rec_not_found: "",
    // EN: Network error. Please check your connection and try again.
    js_rec_network: "",
  },
  fr: {
    // ── index.html — head / nav ──
    // EN: Glow Scan by The Glow Well — Free AI Skin Analysis
    index_title: "",
    // EN: Home
    nav_home: "",
    // EN: Blog
    nav_blog: "",
    // EN: Free Resources
    nav_resources: "",
    // EN: Find Your Kit
    nav_kit: "",
    // EN: About
    nav_about: "",
    // EN: Get the Playbook
    nav_playbook_cta: "",
    // EN: Scan My Skin — Free
    nav_scan_cta: "",
    // EN: Scan Free →
    nav_scan_mobile: "",
    // EN: Playbook
    nav_playbook: "",
    // EN: Privacy Policy
    footer_privacy: "",
    // EN: Contact
    footer_contact: "",
    // EN: © 2025 The Glow Well · theglowwell.com
    footer_copy: "",

    // ── index.html — hero ──
    // EN: Free Skin Analysis · 150,000+ Scans Taken
    hero_eyebrow: "",
    // EN: Your Skin Has Been Sending Signals. It's Time to <em>Listen.</em>
    hero_h1: "",
    // EN: Upload a selfie. Answer 3 quick questions. Find out exactly what your skin needs — and how to give it to you.
    hero_sub: "",
    // EN: 5 questions · One photo · One minute
    hero_five_q: "",
    // EN: people getting their Glow Score right now
    hero_live_counter: "",
    // EN: Reveal My Glow Score — It's Free
    hero_cta: "",
    // EN: Free
    trust_free: "",
    // EN: No account
    trust_no_account: "",
    // EN: No credit card
    trust_no_card: "",
    // EN: Look younger. Feel confident. Stop guessing.
    hero_tagline: "",
    // EN: 🔒 Analyzed & Deleted immediately. Never stored.
    hero_privacy: "",
    // EN: Your Glow Score
    mock_label: "",
    // EN: Hydration
    score_hydration: "",
    // EN: Barrier Health
    score_barrier: "",
    // EN: Texture Clarity
    score_texture: "",
    // EN: Radiance
    score_radiance: "",
    // EN: FREE GLOW SCAN · THEGLOWWELL.COM
    brand_watermark: "",

    // ── index.html — old way / new way ──
    // EN: Why this is different
    why_eyebrow: "",
    // EN: Stop guessing. <em style="color:var(--sage-dark)">Start knowing.</em>
    why_h2: "",
    // EN: Built on peer-reviewed dermatology research — not TikTok trends.
    credibility_line: "",
    // EN: The old way
    old_way_title: "",
    // EN: Buy whatever TikTok recommends
    old_way_1: "",
    // EN: Trial and error, shelf of regrets
    old_way_2: "",
    // EN: Generic routines built for no one
    old_way_3: "",
    // EN: Waste $600+ on products that don't match your skin
    old_way_4: "",
    // EN: The Glow Well way
    new_way_title: "",
    // EN: Know exactly what YOUR skin needs
    new_way_1: "",
    // EN: Built from your face scan, not a template
    new_way_2: "",
    // EN: Personalized to your skin, age and budget
    new_way_3: "",
    // EN: One scan. One plan. Zero guessing.
    new_way_4: "",

    // ── index.html — how it works ──
    // EN: How it works
    how_eyebrow: "",
    // EN: Three steps. <em>60 seconds.</em>
    how_h2: "",
    // EN: No account. No credit card. Just your selfie and 5 questions.
    how_sub: "",
    // EN: Answer 5 questions
    how_step1_title: "",
    // EN: Skin concern, budget, routine, and how your skin feels. 30 seconds.
    how_step1_desc: "",
    // EN: Upload your selfie
    how_step2_title: "",
    // EN: Our trained scanner does the rest.
    how_step2_desc: "",
    // EN: Get your Glow Score
    how_step3_title: "",
    // EN: Your skin age, personalized score, and 3 things to know — free instantly.
    how_step3_desc: "",
    // EN: Start Your Free Scan →
    how_cta: "",

    // ── index.html — real results photos ──
    // EN: Real results
    photos_eyebrow: "",
    // EN: What the right routine <em>actually does.</em>
    photos_h2: "",
    // EN: Consistent routine use over 6-8 weeks. Real people, real skin.
    photos_sub: "",
    // EN: Results shown are from 6-8 weeks of consistent routine use — your skin's timeline may vary, but the path is the same.
    photos_disclaimer: "",

    // ── index.html — reviews ──
    // EN: What people are saying
    reviews_eyebrow: "",
    // EN: Real skin. <em>Real results.</em>
    reviews_h2: "",
    // EN: 4.9/5 average · Verified
    reviews_sub: "",
    // EN: "I thought I had dry skin for 3 years. Nope. Just a destroyed barrier. Fixed it in 3 weeks."
    review_1_quote: "",
    // EN: Sara, 26 · Verified
    review_1_attr: "",
    // EN: "Called out the exact stuff I keep buying and never use. Saved me money immediately."
    review_2_quote: "",
    // EN: Yasmine, 34 · Verified
    review_2_attr: "",
    // EN: "Finally understood why that $80 serum did nothing. Wrong acid for my skin."
    review_3_quote: "",
    // EN: Celeste, 42 · Verified
    review_3_attr: "",
    // EN: See What Your Skin Says →
    reviews_cta: "",

    // ── index.html — playbook ──
    // EN: Want the complete system?
    playbook_eyebrow: "",
    // EN: The 96-page guide <em>behind the scan.</em>
    playbook_h2: "",
    // EN: Ingredient decoder. Budget routines. Store shopping lists. Everything your Glow Scan points toward.
    playbook_sub: "",
    // EN: 96 pages of clarity
    playbook_prop1_title: "",
    // EN: Budget tiers, ingredient decoder, store lists for Target, Walmart, Amazon, and Sephora.
    playbook_prop1_desc: "",
    // EN: Works with your scan
    playbook_prop2_title: "",
    // EN: The education behind every recommendation your Glow Scan makes.
    playbook_prop2_desc: "",
    // EN: Get the Playbook — $19.99
    playbook_cta: "",
    // EN: Already have your Glow Score? The Playbook explains the why behind every result.
    playbook_note: "",

    // ── index.html — final CTA ──
    // EN: Find out for free
    final_eyebrow: "",
    // EN: Your skin has something<br>to tell you.
    final_h2: "",
    // EN: Find out what it is. Free. In 60 seconds.
    final_sub: "",
    // EN: Scan My Skin — It's Free
    final_cta: "",
    // EN: Photo deleted instantly · No account · 7-day report guarantee
    final_trust: "",

    // ── glowscan-v2.html — head / nav ──
    // EN: Glow Scan — Free AI Skin Analysis | The Glow Well
    scan_title: "",
    // EN: Free Scan
    nav_free_scan: "",

    // ── glowscan-v2.html — screen 1 (hero) ──
    // EN: Free AI Skin Analysis
    s1_eyebrow: "",
    // EN: Your skin has been sending signals. It's time to listen.
    s1_h1: "",
    // EN: Reveal My Glow Score — Free
    s1_cta: "",
    // EN: By continuing you agree to our <a href="privacy.html" style="color:var(--text-light);text-decoration:underline;text-underline-offset:2px;">Privacy Policy</a>.
    s1_privacy_agree: "",
    // EN: Photo never stored
    s1_trust_photo: "",
    // EN: 60 seconds
    s1_trust_time: "",
    // EN: Used by 14,000+ women who finally stopped guessing
    s1_social: "",

    // ── glowscan-v2.html — screen 2 (quiz) — labels only; submitted values stay English ──
    // EN: Step 1 of 4
    q_progress_1: "",
    // EN: Your skin is trying to tell you something. Every day.<br>These 3 questions help us hear it.
    q_intro: "",
    // EN: Question 1
    q1_label: "",
    // EN: How old are you?
    q1_text: "",
    // EN: (Your skin age might be a very different number.)
    q1_hint: "",
    // EN: Enter your age
    q1_placeholder: "",
    // EN: Question 2
    q2_label: "",
    // EN: Every skin type has a signature. Yours is already talking — <em>what's it saying?</em>
    q2_text: "",
    // EN: Fine lines that weren't there last year
    q2_opt1: "",
    // EN: Dull and tired, even when I'm not
    q2_opt2: "",
    // EN: Reactive — my skin has opinions about everything
    q2_opt3: "",
    // EN: Oily by noon, tight by morning — make it make sense
    q2_opt4: "",
    // EN: Texture that foundation can't hide
    q2_opt5: "",
    // EN: Breaking out at an age I shouldn't be
    q2_opt6: "",
    // EN: Question 3
    q3_label: "",
    // EN: Where are you based?
    q3_text: "",
    // EN: (This helps us match UV exposure, climate, and environmental stress to your skin.)
    q3_hint: "",
    // EN: Select your region...
    q3_placeholder: "",
    // EN: 🌎 North America (US, Canada)
    q3_opt_na: "",
    // EN: 🌍 Western Europe (UK, France, Germany + EU)
    q3_opt_we: "",
    // EN: 🌏 Australia & New Zealand
    q3_opt_anz: "",
    // EN: 🕌 Middle East (UAE, Saudi Arabia, Gulf)
    q3_opt_me: "",
    // EN: 🌐 East Asia (China, Japan, Korea, Southeast Asia)
    q3_opt_ea: "",
    // EN: 🌸 South Asia (India, Pakistan, Bangladesh)
    q3_opt_sa: "",
    // EN: 🌑 Africa & South America
    q3_opt_afsa: "",
    // EN: Next — Upload Your Photo →
    q_next: "",
    // EN: Answer all 3 questions to continue
    q_in_progress: "",

    // ── glowscan-v2.html — screen 2b (photo upload) ──
    // EN: Step 2 of 4
    q_progress_2: "",
    // EN: Final step before your results
    upload_eyebrow: "",
    // EN: Now the scan sees what the questions can't.
    upload_headline: "",
    // EN: Trained on 150,000+ real skin analyses. It takes 15 seconds. Your photo is deleted the moment it's done.
    upload_subtext: "",
    // EN: Tap to upload your photo
    upload_title: "",
    // EN: Face fully in frame, no sunglasses. The more real, the more accurate.
    upload_sub: "",
    // EN: women uploading their photo right now
    upload_live_counter: "",
    // EN: 🔒 Analyzed by AI. Never seen by a human. Deleted instantly. Not stored — ever.<br> <span>Your photo never touches a human. Ever.</span>
    upload_privacy: "",
    // EN: "It scanned my skin age as 39. I'm 44. I literally cried — absolutely love the AM/PM routine it recommended."
    upload_quote: "",
    // EN: — Gianna M., 44 · Verified
    upload_attr: "",

    // ── glowscan-v2.html — screen 2c (email) ──
    // EN: Step 3 of 4
    q_progress_3: "",
    // EN: Your Glow Score is ready.
    email_heading: "",
    // EN: Where should we send your results?
    email_subhead: "",
    // EN: We'll analyze your scan and have your personalized results ready in 15 seconds.
    email_sub: "",
    // EN: Your email address
    email_placeholder: "",
    // EN: Photo analyzed instantly. Never stored on our servers.<br>No spam — just your results and occasional skin tips.
    email_privacy: "",
    // EN: Send Me My Results →
    email_cta: "",

    // ── glowscan-v2.html — screen 3 (loading) ──
    // EN: Scanning sebaceous activity...
    loading_initial: "",
    // EN: 14,000+ women have seen results they didn't expect.
    loading_footnote: "",

    // ── glowscan-v2.html — screen 4 (free results) ──
    // EN: See What's In Your Full Report →
    r_see_full: "",
    // EN: Your Free Glow Scan Results
    r_eyebrow: "",
    // EN: Skin Age
    r_skin_age: "",
    // EN: estimated biological age
    r_age_sub: "",
    // EN: vs. your actual age
    r_gap_label: "",
    // EN: Skin age isn't permanent. Your full report shows exactly how to lower it.
    r_not_permanent: "",
    // EN: Skin Age:
    r_skin_age_mini: "",
    // EN: Glow Score: <strong id="glowScoreMini" style="color:var(--charcoal);font-size:16px">—</strong>/100
    r_glow_score_mini: "",
    // EN: Your Skin Scores
    r_scores_title: "",
    // EN: Your Glow Score
    r_glow_total_label: "",
    // EN: Your Glow Stage
    r_glow_stage: "",
    // EN: Share Your Glow Score With a Friend
    r_share_btn: "",
    // EN: For educational purposes only. Not a substitute for professional medical advice.
    r_disclaimer: "",
    // EN: Unlock My Full Report 🔒
    r_unlock_btn: "",
    // EN: This is your overview. Your full report goes 10x deeper.
    r_overview: "",
    // EN: What we're seeing
    r_seeing: "",
    // EN: Your Full Report Includes
    r_includes: "",
    // EN: YOUR CUSTOM AM/PM ROUTINE
    r_sec_routine: "",
    // EN: Your Morning Routine
    r_blur_morning: "",
    // EN: Step 1: Gentle cleanser — [personalized pick]<br>Step 2: Vitamin C serum — [matched to your skin age]<br>Step 3: Moisturizer — [barrier-matched formula]<br>Step 4: SPF — [your skin type specific]
    r_blur_morning_steps: "",
    // EN: 🔒 UNLOCK TO REVEAL
    r_unlock_reveal: "",
    // EN: INGREDIENT GUIDE FOR YOUR SKIN
    r_sec_ingredients: "",
    // EN: Ingredients Your Skin Needs
    r_blur_ingredients: "",
    // EN: ✓ [Active #1 matched to your concern]<br>✓ [Active #2 for your skin age]<br>✓ [Barrier ingredient personalized to you]<br>✗ [Ingredient currently working against you]
    r_blur_ingredients_list: "",
    // EN: WHAT YOUR SKIN NEEDS THIS WEEK
    r_sec_week: "",
    // EN: What To Stop Using This Week
    r_blur_stop: "",
    // EN: ⚠️ [Product type working against your barrier]<br>⚠️ [Ingredient pairing cancelling each other out]<br>⚠️ [Timing issue in your current routine]
    r_blur_stop_list: "",
    // EN: This is what your skin looks like when you know exactly what it needs.
    r_unlock_title: "",
    // EN: Full breakdown, routine gaps, ingredient matches, and your next-step plan.
    r_unlock_sub: "",
    // EN: Show Me My Full Glow Analysis →
    r_show_full: "",
    // EN: Full routine · Ingredient breakdown · What to fix first
    r_unlock_fine: "",

    // ── glowscan-v2.html — screen 5 (report details + price) ──
    // EN: Skip to checkout →
    p_skip: "",
    // EN: Your full report is ready
    p_eyebrow: "",
    // EN: Built from <span style="color:#4E6B49;font-style:italic">your face.</span> Not someone else's routine.
    p_h2: "",
    // EN: That skin age isn't permanent. Here's how you fix it.
    p_summary: "",
    // EN: Look younger · Feel confident · Spend smarter
    p_tagline: "",
    // EN: Your personalized AM/PM routine
    p_b1_title: "",
    // EN: Morning and evening steps built for your exact skin
    p_b1_desc: "",
    // EN: The 2-3 products working against you right now
    p_b2_title: "",
    // EN: What's on your shelf sabotaging your results
    p_b2_desc: "",
    // EN: Ingredient guide for your skin type
    p_b3_title: "",
    // EN: What actually works for your concerns — no guessing
    p_b3_desc: "",
    // EN: What your skin actually needs this week
    p_b4_title: "",
    // EN: Personalized picks based on your exact scan results
    p_b4_desc: "",
    // EN: I actually cried. I've wasted so much money on the wrong stuff. this fixed that
    p_review1: "",
    // EN: called out the exact products sabotaging my skin. I felt so seen
    p_review2: "",
    // EN: finally understood why my $80 serum did nothing. changed everything
    p_review3: "",
    // EN: What wrong products cost you
    p_cost_title: "",
    // EN: Wrong cleanser — yearly
    p_cost_1: "",
    // EN: Mismatched actives
    p_cost_2: "",
    // EN: Products that cancel each other
    p_cost_3: "",
    // EN: Trending items that don't match your skin
    p_cost_4: "",
    // EN: Average wasted per year
    p_cost_total: "",
    // EN: Less than your morning coffee. More useful than your last three serums.
    p_price_line: "",
    // EN: Originally $29
    p_price_orig: "",
    // EN: Today only — intro price
    p_price_badge: "",
    // EN: Instant access · Built from your scan · One-time payment<br>7-day refund if it doesn't help
    p_cta_fine: "",

    // ── glowscan-v2.html — screen 6 (checkout / playbook add-on) ──
    // EN: ONE LAST THING
    c_eyebrow: "",
    // EN: Add The Anti-Aging Playbook
    c_h2: "",
    // EN: Know the why behind every product you use.
    c_sub: "",
    // EN: Ingredient decoder · Smart shopping lists · 4 budget routines
    c_tagline: "",
    // EN: The Glow Well Anti-Aging Playbook
    c_product: "",
    // EN: GLOW SCAN EXCLUSIVE
    c_exclusive: "",
    // EN: $600 in skincare value. Yours for $14.99.
    c_value: "",
    // EN: 25% SCAN DISCOUNT APPLIED ✓
    c_discount: "",
    // EN: just started it and already know more about my skin than 10 years of guessing
    c_review1: "",
    // EN: already saved $200 swapping out the wrong products. feel so much smarter about everything I put on my face
    c_review2: "",
    // EN: Yes — Add the Playbook to My Order →
    c_btn_bundle: "",
    // EN: No thanks, just the report →
    c_btn_report: "",
    // EN: 14,200+ women · Secured by Lemon Squeezy · 7-day guarantee
    c_trust: "",

    // ── glowscan-v2.html — screen 7 (confirmation) ──
    // EN: You're all set.
    k_h2: "",
    // EN: Give us just a moment — we're building your full report, personalized to your skin and your scan results. Your photo has been deleted from our servers.
    k_sub: "",
    // EN: Your Glow Scan Report
    k_card_label: "",
    // EN: Full personalized skin analysis
    k_card_title: "",
    // EN: View Your Full Report →
    view_report: "",
    // EN: Building your personalized report — analyzing your photo patterns, matching ingredients to your budget, and building a routine around the stores you shop at. Usually 1-2 minutes. Worth the wait.
    k_wait_msg: "",
    // EN: The Glow Well Playbook
    k_pb_label: "",
    // EN: Your receipt email has your download link. Also at app.lemonsqueezy.com/my-orders
    k_pb_title: "",
    // EN: Download your Playbook — check your email for the link →
    k_pb_link: "",

    // ── glowscan-v2.html — discount popup / email recovery ──
    // EN: Still deciding?
    pop_still: "",
    // EN: Get 25% off your full report
    pop_title: "",
    // EN: Look younger. Feel confident. Start today.
    pop_sub: "",
    // EN: Unlock My Report — <span id="popupDiscountPrice"></span> →
    pop_btn: "",
    // EN: No thanks, I'll pay full price
    pop_dismiss: "",
    // EN: Welcome back
    rec_eyebrow: "",
    // EN: To load your personalized report on this device, please enter the email you used during your scan.
    rec_h2: "",
    // EN: Your scan is securely linked to your email — we'll use it to retrieve your real results.
    rec_sub: "",
    // EN: Load My Report →
    rec_btn: "",

    // ── glowscan-v2.html — strings built at runtime in JS ({price}/{age}/{n} are filled by the page) ──
    // EN: Unlock My Full Report — {price} →
    js_sticky_unlock: "",
    // EN: Unlock My Report — 25% Off — ${price} →
    js_sticky_discount: "",
    // EN: Reading your barrier health signals...
    js_scan_1: "",
    // EN: Mapping your hydration patterns across zones...
    js_scan_2: "",
    // EN: Matching ingredients to your skin profile...
    js_scan_3: "",
    // EN: Identifying what your current routine is missing...
    js_scan_4: "",
    // EN: Calculating your Glow Score...
    js_scan_5: "",
    // EN: We couldn't get a clear read on your photo. This usually happens with low lighting, too much distance, or an angled shot. Try again with a well-lit, straight-on selfie — natural light works best 🤍
    js_scan_fail: "",
    // EN: Retake Photo
    js_retake_photo: "",
    // EN: We couldn't read your skin clearly.
    js_invalid_title: "",
    // EN: No face was detected in your photo.
    js_invalid_no_face: "",
    // EN: Your photo lighting is too dark or overexposed.
    js_invalid_lighting: "",
    // EN: Heavy makeup or filters make accurate analysis difficult.
    js_invalid_makeup: "",
    // EN: Your face needs to be closer and fully in frame.
    js_invalid_too_far: "",
    // EN: For best results: natural light · no makeup · face fully in frame · no filters or sunglasses
    js_invalid_tips: "",
    // EN: Try Again →
    js_try_again: "",
    // EN: Your actual age: {age}
    js_actual_age: "",
    // EN: {n} years
    js_years_gap: "",
    // EN: On track
    js_on_track: "",
    // EN: Raw Start
    js_tier_1_name: "",
    // EN: Your skin's origin story starts here.
    js_tier_1_line: "",
    // EN: Bottom 20% — but Raw Start means most improved
    js_tier_1_percentile: "",
    // EN: The Rebuild
    js_tier_2_name: "",
    // EN: The foundations are shifting — in a good way.
    js_tier_2_line: "",
    // EN: Better than 35% of scanned users your age
    js_tier_2_percentile: "",
    // EN: Steady Glow
    js_tier_3_name: "",
    // EN: Solid base. Now we refine.
    js_tier_3_line: "",
    // EN: Better than 52% of scanned users your age
    js_tier_3_percentile: "",
    // EN: High Beam
    js_tier_4_name: "",
    // EN: Your routine is working. Keep going.
    js_tier_4_line: "",
    // EN: Better than 71% of scanned users your age
    js_tier_4_percentile: "",
    // EN: Rare Form
    js_tier_5_name: "",
    // EN: This is what consistency looks like.
    js_tier_5_line: "",
    // EN: Better than 87% of scanned users your age
    js_tier_5_percentile: "",
    // EN: Prime Glow
    js_tier_6_name: "",
    // EN: Your skin is having its moment.
    js_tier_6_line: "",
    // EN: Top 5% of all Glow Scans taken
    js_tier_6_percentile: "",
    // EN: Patterns consistent with a compromised barrier — more about habit than genetics.
    js_fallback_teaser_1: "",
    // EN: Your routine may be doing one thing well while undoing another at the same time.
    js_fallback_teaser_2: "",
    // EN: The concern you flagged tends to be a symptom of something upstream — not the root cause.
    js_fallback_teaser_3: "",
    // EN: just found out my skin is {n} years older than it should be 😭 got my free Glow Score at theglowwell.com — it's free and slightly terrifying
    js_share_older: "",
    // EN: just found out my skin is {n} years younger than my actual age ✨ got my free Glow Scan at theglowwell.com
    js_share_younger: "",
    // EN: My Glow Scan Score
    js_share_title: "",
    // EN: Screenshot saved — check your downloads
    js_share_saved: "",
    // EN: Your report is taking a little longer than usual. Please wait a moment and try again.
    js_report_delay: "",
    // EN: Generating...
    js_generating: "",
    // EN: Generating your report...
    js_generating_report: "",
    // EN: Tap to generate your report
    js_tap_generate: "",
    // EN: Please retake your scan to view your report
    js_retake_to_view: "",
    // EN: Please enter a valid email address.
    js_rec_invalid_email: "",
    // EN: Loading your report...
    js_rec_loading: "",
    // EN: No report found for that email. Please double-check the address you used during your scan.
    js_rec_not_found: "",
    // EN: Network error. Please check your connection and try again.
    js_rec_network: "",
  }
};
