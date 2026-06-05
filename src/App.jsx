```react
import React, { useState } from 'react';
import { 
  Heart, 
  Calendar, 
  MapPin, 
  Users, 
  BookOpen, 
  ArrowRight, 
  ChevronRight, 
  PhoneCall, 
  DollarSign, 
  Award, 
  CheckCircle, 
  FileText, 
  Share2, 
  Globe, 
  Menu, 
  X, 
  Sparkles, 
  Gift, 
  ChevronLeft,
  Search,
  Shield,
  Clock,
  Baby,
  Smile,
  AlertCircle
} from 'lucide-react';

// TRANSLATION DICTIONARY
const TRANSLATIONS = {
  en: {
    // Header & Brand
    brandName: "Voices For Life",
    brandSubtitle: "Compassion • Support • Advocacy",
    emergencyBanner: "Need help, pregnancy housing, or counseling resources? We support you every step of the way.",
    crisisHotline: "Crisis Care Hotline",
    supportFamilies: "Support Families",
    
    // Nav
    navHome: "Home",
    navMission: "Our Mission",
    navSupport: "Find Support",
    navAction: "Take Action",
    navEvents: "Upcoming Events",
    navDonateTab: "Donate",

    // Common labels
    readMore: "Read More",
    freeService: "100% Free Service",
    copied: "Copied!",
    shareLinkCopied: "Petition share link copied to clipboard.",
    close: "Close",
    register: "Register for Event",
    confirmFreeReg: "Confirm Free Registration",
    agreeGuidelines: "By registering, you agree to attend and comply with our peaceful, family-friendly behavior guidelines.",
    yourName: "Your Full Name",
    emailAddr: "Email Address",
    selectState: "Select State...",
    requiredField: "This field is required.",
    success: "Success!",
    error: "Error",
    thankYou: "Thank you!",
    allStates: "All States (Any Location)",
    allSupportTypes: "All Support Types",
    clearFilters: "Clear Search Filters",
    searchPlaceholder: "Search by center name, city, or service...",

    // Hero Section
    heroBadge: "Emboldening a Culture of Compassion",
    heroTitle1: "Every Child Deserves",
    heroTitleColored: "A Voice, A Future,",
    heroTitle2: "& Unconditional Love.",
    heroDesc: "We stand alongside women and children with robust legal advocacy, community material aid, and structural crisis pregnancy support systems. No mother walks alone.",
    heroCTA1: "Find Free Help Near You",
    heroCTA2: "Sign Our Latest Bill Petition",
    raisedCount: "Families Assisted",
    freeServicesBadge: "Free Client Services",
    activeCoalitions: "Active Coalitions",

    // Goal Card
    immediateGoal: "Immediate Action Goal",
    endsInDays: "Ends in 12 Days",
    goalCardTitle: "Sponsor Crisis Housing & Essential Supplies for 150 High-Risk Mothers",
    goalCardDesc: "Local safehouses and pregnancy support shelters are operating at maximum capacity. We need structural funding to secure extra apartments, warm baby clothing, and ultrasound tech.",
    goalRaised: "Raised",
    goalTarget: "Goal",
    fundedBy: "funded by 421 compassionate donors",
    supportFamilyToday: "Support A Family Today",

    // Pillars Section
    dualApproachSubtitle: "Our Dual Approach",
    dualApproachTitle: "Supportive Care Meets Structural Action",
    dualApproachDesc: "We believe that being truly dedicated to the mission means actively walking alongside families on the ground while changing minds and laws globally.",
    
    pillar1Title: "Support Motherhood",
    pillar1Desc: "Empowering every mother to feel secure, loved, and fully supplied. We coordinate safe housing, high-quality healthcare networks, free parenting mentors, diapers, and baby cribs. Our goal is to break the systemic barriers of fear and financial insecurity.",
    pillar1Item1: "Access to free certified medical ultrasounds & prenatal aid.",
    pillar1Item2: "Maternity housing options for women facing crisis situations.",
    pillar1Item3: "Lifetime mentoring and post-natal parenting support circles.",
    pillar1Button: "View Support Directory",

    pillar2Title: "Defend the Vulnerable",
    pillar2Desc: "Shaping policies and public education to ensure that human life is legally recognized and cared for at every developmental stage. We advocate for bills providing robust funding for pregnancy centers, stronger adoption systems, and comprehensive family support benefits.",
    pillar2Item1: "Educating communities with medically precise, scientific facts.",
    pillar2Item2: "Direct legislative lobbying for maternity protections & state aid.",
    pillar2Item3: "Peaceful, highly disciplined grassroots mobilizations and rallies.",
    pillar2Button: "Explore Advocacy Campaigns",

    // Scientific Timeline Section
    timelineSubtitle: "Educational Journey",
    timelineTitle: "The Science of Human Development",
    timelineDesc: "Explore key scientific milestones that happen in the womb. Every stage of prenatal growth is complex, beautiful, and completely unique.",
    timelineStageLabel: "Prenatal Stage",
    timelineMilestoneLabel: "Key Scientific Milestone",
    timelineProgressLabel: "Milestone Progress",
    timelineProgressSub: "Perfect Developmental Design",

    // Impact Banner
    tangibleProgress: "Tangible Progress",
    impactTitle: "Transforming Lives and Empowering Communities",
    impactDesc: "Every dollar raised, volunteer hours donated, and advocate voice combined contributes to real-world, measurable safety nets for women and unborn babies.",
    impactMetric1Title: "Cribs & Car Seats",
    impactMetric1Desc: "Distributed to low income homes",
    impactMetric2Title: "Counseling Hours",
    impactMetric2Desc: "Offered at no cost to clients",
    impactMetric3Title: "Supporters Safe",
    impactMetric3Desc: "Signed petitions & written letters",

    // Find Support (Resources) Tab
    resourcesHeaderTitle: "You Are Not Alone",
    resourcesHeaderDesc: "We maintain active partnerships with verified pregnancy resource clinics, safe houses, legal advisers, and diaper supply banks across the country. Find local, completely free, and anonymous support instantly.",
    crisisBoxTitle: "Facing an Unplanned Pregnancy or Need Crisis shelter?",
    crisisBoxDesc: "Immediate, 100% confidential housing assistance, healthcare support, and advice available 24/7.",
    crisisBoxCTA: "Call Option Line Now",
    searchTitle: "Search Local Maternity Homes & Pregnancy Aid Clinics",
    noCentersFound: "No centers found matching those search filters",
    noCentersSub: "Try modifying your text query or selecting a different state option.",
    babyBankLabel: "Community Baby Bank Network",
    babyBankTitle: "Need Diapers, Strollers, Car Seats, or Formula Packages?",
    babyBankDesc: "Through our extensive logistics network, we ship care packages directly to expecting mothers or family centers. Request your essential packages completely confidentially.",
    requestPkgBtn: "Request A Baby Support Package",
    donateSuppliesBtn: "Donate Baby Supplies",
    maternityCenterCheck: "Our care packages support pipeline is checking coordinates. We will link back within 24 hours.",

    // Take Action (Advocacy) Tab
    advocacyHeaderTitle: "Empower Life Through Courageous Leadership",
    advocacyHeaderDesc: "Real change happens when structural public policies match supportive local action. Join our active advocacy campaigns to protect vulnerable lives.",
    activePetitionLabel: "Active National Petition",
    prioritySupportLabel: "Priority Support",
    billTitle: "The Maternal Support & Housing Grant Act (Bill H.R. 4026)",
    billDesc: "This vital policy bill directs federal block grants to secure long-term transitional housing, healthcare vouchers, and professional childcare networks for high-risk single mothers nationwide.",
    petitionSubscribers: "Supporters",
    petitionHelpReach: "Help us reach 10,000 signatures to officially hand over the petition results to legislative committees.",
    signSuccess: "Thank you, your signature has been processed!",
    signSuccessDesc: "Please share this petition with your friends, family, and local church networks to compound our voice.",
    copyReferralLink: "Copy Referral Link",
    addSignatureTitle: "Add Your Signature Below",
    yourState: "Your State",
    signButton: "Sign & Support HR 4026",
    advocacyToolkitLabel: "Advocacy Toolkit",
    repLetterTitle: "Send a Prepared Letter to Your Representative",
    repLetterDesc: "Direct letters are one of the most powerful ways to grab a Senator or Congress member's attention. Copy our professionally-drafted template below, fill in the placeholder blanks, and send it directly.",
    clickToSelectAll: "[CLICK INSIDE TO SELECT ALL TEXT]",
    letterSubject: "Subject: Please Support the Maternal Support & Housing Grant Act (H.R. 4026)",
    letterSalutation: "Dear Honorable Representative,",
    letterParagraph1: "As a resident of your district, I urge you to vote in favor of H.R. 4026, the Maternal Support & Housing Grant Act. Comprehensive support networks are absolutely essential to ensure that vulnerable mothers have access to safe transitional housing, critical healthcare, and baby supplies.",
    letterParagraph2: "Supporting mothers ensures the health, safety, and security of our communities' newest generation of children. Please co-sponsor this bill and champion family welfare.",
    letterSignOff: "Respectfully submitted,",
    letterPlaceholderName: "[Your Full Name Here]",
    letterPlaceholderAddress: "[Your Address]",
    findRepLabel: "Need to find who your representative is?",
    findRepBtn: "Find Representative Address",
    legWatchTitle: "Legislative Priorities Action Watch",
    legWatchDesc: "Tracking key supportive policies moving through state and federal levels.",
    watchStatus1: "Pending Committee",
    watchBill1Title: "Baby Supply Tax Exemption Bill",
    watchBill1Desc: "Exempts infant diapers, clothing, cribs, and baby formula products from sales tax state-wide.",
    watchStatus2: "Successfully Passed",
    watchBill2Title: "Safe Haven Education Expansion",
    watchBill2Desc: "Provides robust funding to place heated infant rescue boxes at all high-priority regional hospitals.",
    watchStatus3: "Hearing Scheduled",
    watchBill3Title: "Foster Care System Reform Policy",
    watchBill3Desc: "Improves the processing timeline and legal filing costs associated with family adoptions.",

    // Events Tab
    eventsTitle: "Join Us in Solidarity & Care",
    eventsDesc: "Participate in localized community baby showers, legislative lobbying seminars, or peaceful prayer assemblies. Together, we show the tangible power of hope.",
    eventRsvpedLabel: "Registered",
    eventRsvpConfirmed: "RSVP Confirmed (Check Email)",
    eventRsvpBtn: "RSVP For Free",
    rsvpConfirmTitle: "RSVP Confirmed!",
    rsvpConfirmDesc: "You are successfully registered. A confirmation email has been sent.",
    localChapterSupport: "Local Chapter Support",
    hostEventTitle: "Host An Event in Your Local Church or Town Hall",
    hostEventDesc: "We supply comprehensive digital templates, event organizing guides, safety outlines, promotional graphics, and even small financial grants to help activists host successful community events.",
    downloadEventKitBtn: "Download Host Event Kit",
    eventKitSuccess: "Our local events dispatch system will send you organizational guidelines shortly.",

    // Donate Tab
    donateTitle: "Fuel Compassion & Save Lives",
    donateDesc: "Your direct support powers maternal shelter homes, infant medical diagnostics, counseling pipelines, legal advocacy, and direct physical baby banks.",
    monthlyDonation: "Give Monthly (Sustainer)",
    oneTimeDonation: "Give One-Time",
    selectTierLabel: "Select Donation Tier",
    diapersLabel: "Diapers",
    formulaLabel: "Formula",
    ultrasoundLabel: "Ultrasound",
    shelterLabel: "Shelter",
    counselingLabel: "Counseling",
    sanctuaryLabel: "Sanctuary",
    customAmountLabel: "Or enter a custom amount",
    securityDisclosureTitle: "Security & Disclosures",
    securityDisclosureDesc: "All donations are fully encrypted, tax-deductible to the extent of the law, and handled with bank-level security algorithms. We never rent or sell your donor profile details.",
    confirmDonationBtn: "Confirm Support",
    howMoneyUsedTitle: "How Your Money is Utilized",
    donation25Title: "$25 Donation",
    donation25Desc: "Provides one newborn essential pack consisting of 120 diapers, baby wipes, baby soap, and soothing rash creams.",
    donation100Title: "$100 Donation",
    donation100Desc: "Funds a complete and free certified clinical diagnostic pregnancy test & high-definition ultrasound for an expecting mother.",
    donation250Title: "$250 Donation",
    donation250Desc: "Secures 3 weeks of crisis shelter housing, home utilities, food supplies, and parenting mentoring classes in our localized home sanctuaries.",
    sustainerCardTitle: "Join the Sustainer Sanctuary",
    sustainerCardDesc: "Giving monthly helps us reliably budget our regional supply orders, secure long-term apartment leases, and secure continuous protective advocacy pathways.",

    // About Tab
    aboutHeaderTitle: "A Mission Founded on Compassion & Unwavering Hope",
    aboutHeaderDesc: "We advocate for human life with truth, clarity, and unconditional support for both mother and child.",
    aboutValue1Title: "Mother-First Protection",
    aboutValue1Desc: "We believe no mother should ever feel that aborting her child is her only choice due to a lack of resources, medical help, or housing safety nets.",
    aboutValue2Title: "Inherent Value of Life",
    aboutValue2Desc: "Science teaches that human life begins at fertilization. We honor this biology with respectful, compassionate legal standing and community action.",
    aboutValue3Title: "Collaborative Action",
    aboutValue3Desc: "We work side-by-side with localized health centers, adoption agencies, legal networks, and baby banks to build comprehensive family welfare support.",
    foundersVisionTitle: "Our Founder's Vision",
    foundersVisionQuote: '"Advocating for life is incomplete if we do not show up at 2 AM with formula, safe housing, and unconditional friendship. We represent a loving movement of solidarity."',
    foundersVisionDesc1: "Voices For Life was founded in 2018 to bridge the critical gap between public advocacy and practical community action. We noticed that millions of families wanted to help locally but lacked an integrated platform where women in hard circumstances could immediately link up with support housing and essential baby items.",
    foundersVisionDesc2: "Today, we coordinate closely with thousands of volunteers, state leaders, maternity centers, and legislative groups to provide a seamless national security net for vulnerable human life.",
    teamTitle: "Organizing Leadership Team",
    member1Title: "Executive Director & Medical Adviser",
    member2Title: "Director of Local Chapter Grassroots Engagement",
    member3Title: "Lead Coordinator for Pregnancy Housing Sanctuary",
    viewPartnershipsBtn: "View Our Local Partnerships",
    financialTransTitle: "Transparency & Financial Honesty Guaranteed",
    financialTransDesc: "As a verified advocacy non-profit organization, 85% of our expenses directly fund maternity home grants, baby supply logistics, and free support center resources.",
    readFinancialReportBtn: "Read 2025 Annual Financial Report (PDF)",

    // Footer
    footerBrandDesc: "We advocate for human life with medical accuracy, structural public education, dynamic legal standing, and robust, completely free support for expectant families on the ground.",
    footerCoalition: "International Life Coalition Partners",
    footerQuickActions: "Quick Actions",
    footerDisclosuresTitle: "Advocacy & Support Disclosures",
    footerDisclosuresDesc: "Voices For Life is a verified 501(c)(3) advocacy non-profit organization. Information provided is educational and should not replace consultation with professional medical advisers.",
    allRightsReserved: "All rights reserved.",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    financialAccountability: "Financial Accountability Statement"
  },
  ar: {
    // Header & Brand
    brandName: "أصوات من أجل الحياة",
    brandSubtitle: "الرحمة • الدعم • التأييد والمناصرة",
    emergencyBanner: "هل تحتاجين إلى مساعدة، أو سكن للحوامل، أو موارد إرشادية؟ نحن ندعمكِ في كل خطوة على الطريق.",
    crisisHotline: "الخط الساخن للرعاية الطارئة",
    supportFamilies: "دعم الأسر والعائلات",
    
    // Nav
    navHome: "الرئيسية",
    navMission: "رسالتنا وقيمنا",
    navSupport: "البحث عن الدعم",
    navAction: "اتخذ خطوة",
    navEvents: "الفعاليات القادمة",
    navDonateTab: "تبرع الآن",

    // Common labels
    readMore: "اقرأ المزيد",
    freeService: "خدمة مجانية بالكامل ١٠٠٪",
    copied: "تم النسخ!",
    shareLinkCopied: "تم نسخ رابط مشاركة العريضة إلى الحافظة بنجاح.",
    close: "إغلاق",
    register: "التسجيل في الفعالية",
    confirmFreeReg: "تأكيد التسجيل المجاني",
    agreeGuidelines: "من خلال التسجيل، فإنك توافق على الحضور والالتزام بإرشادات السلوك السلمية والمناسبة للعائلات.",
    yourName: "الاسم الكامل",
    emailAddr: "البريد الإلكتروني",
    selectState: "اختر المنطقة/الولاية...",
    requiredField: "هذا الحقل مطلوب.",
    success: "نجاح!",
    error: "خطأ",
    thankYou: "شكراً لك!",
    allStates: "جميع الولايات والمناطق",
    allSupportTypes: "جميع أنواع الدعم والرعاية",
    clearFilters: "إعادة تعيين الفلاتر",
    searchPlaceholder: "البحث عن طريق اسم المركز، المدينة، أو الخدمة المحددة...",

    // Hero Section
    heroBadge: "ترسيخ ثقافة الرحمة والرعاية والمسؤولية",
    heroTitle1: "كل طفل يستحق",
    heroTitleColored: "صوتًا، ومستقبلًا،",
    heroTitle2: "وحبًا غير مشروط.",
    heroDesc: "نحن نقف إلى جانب الأمهات والأطفال من خلال المناصرة القانونية القوية، والمساعدات العينية المجتمعية، وأنظمة دعم الإسكان في حالات الحمل الطارئة. لن تسير أي أم بمفردها.",
    heroCTA1: "ابحثي عن مساعدة مجانية بالقرب منكِ",
    heroCTA2: "وقّع على عريضة دعم مشروع القانون الجديد",
    raisedCount: "عائلات تم مساعدتها",
    freeServicesBadge: "الخدمات المجانية المقدمة للعملاء",
    activeCoalitions: "التحالفات والمنظمات النشطة معنا",

    // Goal Card
    immediateGoal: "هدف عاجل ومباشر",
    endsInDays: "ينتهي خلال ١٢ يوماً",
    goalCardTitle: "كفالة الإسكان الطارئ والمستلزمات الأساسية لـ ١٥٠ من الأمهات الأكثر احتياجاً",
    goalCardDesc: "تعمل دور الرعاية الآمنة وملاجئ دعم الحوامل المحلية بطاقتها الاستيعابية القصوى. نحن بحاجة إلى تمويل عاجل لتأمين شقق إضافية، ملابس شتوية للأطفال، وتقنيات الموجات فوق الصوتية.",
    goalRaised: "المبلغ الذي تم جمعه",
    goalTarget: "الهدف المطلق",
    fundedBy: "تم التمويل بواسطة ٤٢١ متبرعاً سخياً من شركاء الإنسانية",
    supportFamilyToday: "ادعم أسرة اليوم",

    // Pillars Section
    dualApproachSubtitle: "نهجنا الثنائي والمتكامل",
    dualApproachTitle: "الرعاية الداعمة تلتقي مع العمل الهيكلي",
    dualApproachDesc: "نحن نؤمن بأن الإخلاص الحقيقي للرسالة يعني الوقوف جنباً إلى جنب مع العائلات على الأرض مع السعي لتغيير الأفكار والقوانين على نطاق واسع.",
    
    pillar1Title: "دعم ورعاية الأمومة",
    pillar1Desc: "تمكين كل أم لتشعر بالأمان، بالحب، والتمتع بكامل المستلزمات لوليدها. نحن ننسق السكن الآمن، شبكات الرعاية الصحية عالية الجودة، مرشدي التربية المتطوعين، الحفاضات، وأسِرّة الأطفال. هدفنا كسر حواجز الخوف وانعدام الأمان المالي.",
    pillar1Item1: "الحصول على فحوصات مجانية للموجات فوق الصوتية والمستلزمات الطبية.",
    pillar1Item2: "خيارات إسكان آمنة للأمهات اللواتي يواجهن ظروفاً معيشية صعبة.",
    pillar1Item3: "توجيه مستمر مدى الحياة وحلقات دعم للأمومة بعد الولادة.",
    pillar1Button: "عرض دليل مراكز الدعم",

    pillar2Title: "الدفاع عن الفئات المستضعفة",
    pillar2Desc: "صياغة السياسات وتثقيف المجتمع لضمان الاعتراف بالحياة البشرية ورعايتها قانونياً في كافة مراحل تطورها. نحن نناضل من أجل مشاريع قوانين توفر تمويلاً قوياً لمراكز رعاية الحوامل، وتدعم نظم التبني، وتقدم مزايا الدعم الأسري الشامل.",
    pillar2Item1: "تثقيف المجتمعات بالحقائق العلمية والطبية الدقيقة والموثقة.",
    pillar2Item2: "الضغط التشريعي المباشر لحماية الأمومة وتأمين الدعم الحكومي الموجه.",
    pillar2Item3: "مسيرات وفعاليات مجتمعية سلمية ومنضبطة للغاية لرفع الوعي العام.",
    pillar2Button: "استكشف حملات المناصرة",

    // Scientific Timeline Section
    timelineSubtitle: "رحلة تعليمية تفاعلية",
    timelineTitle: "علم وتطور التكوين البشري",
    timelineDesc: "استكشف المحطات العلمية الرئيسية التي تحدث داخل الرحم. كل مرحلة من مراحل نمو الجنين معقدة، جميلة، وفريدة من نوعها بشكل كامل.",
    timelineStageLabel: "مرحلة ما قبل الولادة",
    timelineMilestoneLabel: "أبرز الإنجازات والخصائص العلمية",
    timelineProgressLabel: "مؤشر التطور والنمو",
    timelineProgressSub: "تصميم متقن وفريد لكل حياة جديدة",

    // Impact Banner
    tangibleProgress: "تأثير ملموس وحقيقي",
    impactTitle: "تغيير حياة العائلات وتمكين المجتمعات المحلية",
    impactDesc: "كل دولار يتم جمعه، وساعة عمل يتطوع بها المساعدون، وصوت مناصر يتكاتف معنا، يساهم في بناء شبكات أمان حقيقية للأمهات والأطفال.",
    impactMetric1Title: "أسرة وعربات أطفال",
    impactMetric1Desc: "تم توزيعها على العائلات الأشد احتياجاً",
    impactMetric2Title: "ساعات إرشاد وتوجيه",
    impactMetric2Desc: "قُدمت دون أي تكلفة على الأمهات والآباء",
    impactMetric3Title: "مؤيدون فاعلون ومسجلون",
    impactMetric3Desc: "وقّعوا العرائض وأرسلوا رسائل الدعم التشريعي",

    // Find Support (Resources) Tab
    resourcesHeaderTitle: "لستِ بمفردكِ أبداً",
    resourcesHeaderDesc: "نحن نحافظ على شراكات نشطة وفعالة مع عيادات موارد الحمل المعتمدة، دور الرعاية الآمنة، المستشارين القانونيين، وبنوك حفاضات ومستلزمات الأطفال. ابحثي عن دعم محلي مجاني وسري بالكامل على الفور.",
    crisisBoxTitle: "هل تواجهين حملاً غير مخطط له أو تحتاجين إلى سكن آمن على عجل؟",
    crisisBoxDesc: "مساعدة فورية وسرية ١٠٠٪ للإسكان، الرعاية الطبية، والمشورة النفسية والاجتماعية على مدار الساعة طوال أيام الأسبوع.",
    crisisBoxCTA: "اتصلي بخط الدعم الساخن الآن",
    searchTitle: "البحث في دور رعاية الأمهات وعيادات دعم الحمل المحلية",
    noCentersFound: "لم يتم العثور على مراكز مطابقة لفلاتر البحث المحددة",
    noCentersSub: "يرجى تعديل نص البحث الخاص بك أو اختيار منطقة/ولاية مختلفة.",
    babyBankLabel: "الشبكة المجتمعية لبنك مستلزمات الأطفال",
    babyBankTitle: "هل تحتاجين إلى حفاضات، عربات أطفال، أسرة، أو عبوات حليب رضع؟",
    babyBankDesc: "من خلال شبكة الدعم اللوجستية الواسعة لدينا، نقوم بشحن طرود الرعاية مباشرة إلى الأمهات الحوامل أو مراكز رعاية الأسرة المحلية. اطلبي طرودك الأساسية بسرية تامة.",
    requestPkgBtn: "طلب طرد رعاية مستلزمات الأطفال",
    donateSuppliesBtn: "تبرع بمستلزمات وألعاب الأطفال",
    maternityCenterCheck: "يقوم نظام دعم شحن المساعدات لدينا بالتحقق من العناوين المتاحة الآن. سنقوم بالتواصل معكِ في غضون ٢٤ ساعة.",

    // Take Action (Advocacy) Tab
    advocacyHeaderTitle: "تمكين ودعم الحياة من خلال قيادة واعية وشجاعة",
    advocacyHeaderDesc: "التغيير الحقيقي والداعم يحدث عندما تتلاقى السياسات العامة الهيكلية مع العمل المجتمعي الداعم على الأرض. شارك في حملات المناصرة الفعالة.",
    activePetitionLabel: "العريضة الوطنية النشطة حالياً",
    prioritySupportLabel: "دعم ذو أولوية عالية",
    billTitle: "قانون منح الإسكان والدعم الشامل للأمومة (مشروع قانون H.R. 4026)",
    billDesc: "يوجه مشروع القانون الحيوي هذا منحاً مخصصة لتأمين السكن الانتقالي طويل الأجل، وقسائم الرعاية الصحية، وشبكات رعاية الأطفال المهنية للأمهات العازبات المعرضات للمخاطر المعيشية.",
    petitionSubscribers: "مؤيد وموقّع",
    petitionHelpReach: "ساعدنا في الوصول إلى ١٠,٠٠٠ توقيع لتسليم نتائج العريضة رسمياً إلى اللجان التشريعية والبرلمانية المعنية.",
    signSuccess: "شكراً جزيلاً لك، تم تسجيل توقيعك بنجاح ونقله لقاعدة المؤيدين!",
    signSuccessDesc: "يرجى مشاركة هذه العريضة مع أصدقائك، عائلتك، والشبكات المجتمعية لتعظيم وتوسيع صوتنا الداعم للحياة.",
    copyReferralLink: "نسخ رابط المشاركة والإحالة",
    addSignatureTitle: "أضف توقيعك الداعم أدناه",
    yourState: "الولاية/المنطقة السكنية",
    signButton: "توقيع ودعم مشروع القانون H.R. 4026",
    advocacyToolkitLabel: "أدوات المناصرة والتمكين",
    repLetterTitle: "أرسل رسالة جاهزة ومعدة مسبقاً إلى ممثلك التشريعي",
    repLetterDesc: "الرسائل المباشرة هي واحدة من أقوى الطرق لجذب انتباه أعضاء مجلس النواب أو الشيوخ. انسخ النموذج المصمم باحترافية أدناه، واملأ الفراغات بالمعلومات الخاصة بك وأرسلها مباشرة.",
    clickToSelectAll: "[انقر داخل المربع لتحديد النص كاملاً ونسخه بسهولة]",
    letterSubject: "الموضوع: يرجى دعم قانون منح الإسكان والدعم الشامل للأمومة (H.R. 4026)",
    letterSalutation: "عزيزي ممثل الدائرة التشريعية الموقر،",
    letterParagraph1: "بصفتي مقيماً في دائرتكم الانتخابية، أحثكم بشدة على التصويت لصالح مشروع القانون H.R. 4026. إن شبكات الدعم الشاملة ضرورية للغاية لضمان حصول الأمهات ذوات الظروف المعقدة على سكن انتقالي آمن ورعاية صحية ومستلزمات الأطفال الأساسية.",
    letterParagraph2: "دعم الأمهات يضمن صحة وسلامة وأمن الأجيال الجديدة في مجتمعنا. يرجى رعاية هذا القانون وتأييده.",
    letterSignOff: "وتقبلوا وافر الاحترام والتقدير،",
    letterPlaceholderName: "[اسمك الكامل هنا]",
    letterPlaceholderAddress: "[عنوانك السكني]",
    findRepLabel: "هل تبحث عن طريقة لمعرفة ممثلك وعنوان مكتبه المباشر؟",
    findRepBtn: "البحث عن عنوان ممثلي البرلماني",
    legWatchTitle: "مرصد أولويات العمل التشريعي والقوانين",
    legWatchDesc: "تتبع أهم السياسات الداعمة التي تتحرك وتناقش في المستويات التشريعية والمحلية.",
    watchStatus1: "قيد المراجعة في اللجنة",
    watchBill1Title: "قانون الإعفاء الضريبي لمستلزمات الأطفال الرضع",
    watchBill1Desc: "يعفي حفاضات الرضع والملابس والأسرة وحليب الأطفال من ضرائب المبيعات على مستوى الولاية.",
    watchStatus2: "تم تمريره واعتماده بنجاح",
    watchBill2Title: "توسيع التثقيف في قانون الملاذ الآمن",
    watchBill2Desc: "يوفر تمويلاً قوياً لتوفير صناديق استلام وإنقاذ الرضع الدافئة والمطورة في المستشفيات الإقليمية.",
    watchStatus3: "تم جدولة جلسة الاستماع",
    watchBill3Title: "سياسة إصلاح نظام الرعاية البديلة والتبني",
    watchBill3Desc: "يعمل على تسريع وتبسيط المدة الزمنية وتخفيض التكاليف القانونية المرتبطة بتبني ورعاية الأطفال وتأهيل الأسر.",

    // Events Tab
    eventsTitle: "انضم إلينا في التضامن والعمل المشترك",
    eventsDesc: "شارك في فعاليات توزيع الهدايا للأمهات الجدد، وحلقات التدريب على الضغط التشريعي، أو التجمعات السلمية للتضامن. معاً، نظهر قوة الأمل الحقيقية والملموسة.",
    eventRsvpedLabel: "تم التسجيل",
    eventRsvpConfirmed: "تم تأكيد تسجيلك (يرجى مراجعة بريدك الإلكتروني)",
    eventRsvpBtn: "سجل حضورك مجاناً الآن",
    rsvpConfirmTitle: "تم تأكيد حجز مقعدك بنجاح!",
    rsvpConfirmDesc: "لقد تم تسجيلك بنجاح في الفعالية المحددة. تم إرسال رسالة تأكيد تحوي كامل التفاصيل والموقع الجغرافي لبريدك.",
    localChapterSupport: "دعم وتجهيز الفروع المحلية للمنظمة",
    hostEventTitle: "استضف فعالية أو حملة تبرع في مجتمعك المحلي أو كنيستك/مركزك الاجتماعي",
    hostEventDesc: "نحن نوفر كشوفات ونماذج رقمية كاملة، أدلة لتنظيم الفعاليات، خطوط السلامة، الرسوم الإعلانية، وحتى منحاً مالية صغيرة لمساعدتك على استضافة فعاليات ناجحة ومؤثرة.",
    downloadEventKitBtn: "تحميل حقيبة تجهيز واستضافة الفعاليات",
    eventKitSuccess: "سيقوم فريق الدعم وتنسيق الفعاليات المحلية لدينا بإرسال المبادئ التوجيهية وتجهيزك بكامل المواد اللازمة قريباً.",

    // Donate Tab
    donateTitle: "غذّوا الرحمة والمحبة وأنقذوا الأرواح",
    donateDesc: "تبرعك المباشر يدعم بشكل وثيق ملاجئ ودور رعاية الأمهات، الفحوصات الطبية المتقدمة للأطفال، برامج الاستشارات والدعم، والمناصرة القانونية، وتأمين حزم المستلزمات العينية للأسر الحاضنة.",
    monthlyDonation: "تبرع شهري مستمر (شريك مستدام)",
    oneTimeDonation: "تبرع لمرة واحدة",
    selectTierLabel: "حدد فئة ومستوى التبرع المفضل لديك",
    diapersLabel: "حفاضات ومطهرات",
    formulaLabel: "حليب أطفال رضع",
    ultrasoundLabel: "فحص موجات فوق صوتية",
    shelterLabel: "إيواء آمن للحوامل",
    counselingLabel: "إرشاد نفسي واجتماعي",
    sanctuaryLabel: "رعاية شاملة ومستمرة",
    customAmountLabel: "أو أدخل مبلغاً مخصصاً تود التبرع به",
    securityDisclosureTitle: "الأمان المالي والإفصاح عن أوجه الصرف",
    securityDisclosureDesc: "جميع التبرعات مشفرة بالكامل ومعفاة من الضرائب وفقاً للقوانين المتبعة، وتدار عبر خوارزميات أمان مصرفية معتمدة وعالية المستوى. لا نقوم بمشاركة تفاصيلك مع أي طرف آخر.",
    confirmDonationBtn: "تأكيد الدعم المالي والتبرع بمبلغ",
    howMoneyUsedTitle: "كيفية تخصيص واستخدام تبرعك السخي",
    donation25Title: "تبرع بقيمة ٢٥ دولار",
    donation25Desc: "يوفر حزمة أساسية لحديثي الولادة تتكون من ١٢٠ حفاضة، مناديل رطبة ومطهرة، صابون لطيف للأطفال الرضع، وكريمات معالجة الحساسية الجلدية.",
    donation100Title: "تبرع بقيمة ١٠٠ دولار",
    donation100Desc: "يمول فحصاً طبياً تشخيصياً كاملاً ومجانياً للحمل واختبارات المراقبة عبر جهاز الأمواج فوق الصوتية عالي الدقة للأمهات ذوات الدخل المحدود.",
    donation250Title: "تبرع بقيمة ٢٥٠ دولار",
    donation250Desc: "يضمن ٣ أسابيع كاملة من الإيواء الطارئ الآمن، تغطية فواتير المرافق، السلال الغذائية، وتأهيل الأمهات في برامج التوجيه التربوي الشامل.",
    sustainerCardTitle: "انضم إلى تحالف الشركاء المستدامين لدعم الحياة",
    sustainerCardDesc: "التبرع الشهري المستمر يتيح لنا جدولة طلبات الإمدادات والمستلزمات بثقة، وإبرام عقود إيجار طويلة الأجل لدور الإيواء، وضمان تحركات المناصرة وحماية الأطفال دون انقطاع.",

    // About Tab
    aboutHeaderTitle: "رسالة إنسانية مكرسة ومبنية على التضامن والمحبة والأمل والعمل",
    aboutHeaderDesc: "نحن نناصر حماية الحياة البشرية بالاعتماد على الحقائق العلمية الراسخة، وتوفير المساعدات الشاملة غير المشروطة لكل من الأم وطفلها المعزز.",
    aboutValue1Title: "حماية ورعاية الأم أولاً وبالمقام الأبرز",
    aboutValue1Desc: "نحن نؤمن بأنه لا ينبغي لأي أم أن تشعر بأن الإجهاض هو خيارها الوحيد أو الاضطراري بسبب نقص الموارد المادية أو غياب الدعم الطبي والإسكاني.",
    aboutValue2Title: "القيمة الجوهرية المتأصلة في كل حياة بشرية",
    aboutValue2Desc: "يعلمنا العلم والطب الحديث أن الحياة البشرية المتكاملة والفريدة جينياً تبدأ لحظة الإخصاب. نحن نحترم هذا الواقع العلمي بمواقف ومناصرة تشريعية واعية.",
    aboutValue3Title: "العمل التشاركي والتعاوني واسع النطاق",
    aboutValue3Desc: "نحن نعمل جنباً إلى جنب مع المراكز الصحية المحلية والبلدية، مكاتب التبني المرخصة، الشبكات القانونية، وبنوك مستلزمات الرضع لبناء شبكة أمان متكاملة.",
    foundersVisionTitle: "رؤية ورسالة المؤسسين والشركاء",
    foundersVisionQuote: '"إن مناصرة الحياة والدفاع عنها تظل ناقصة وبلا معنى إن لم نتواجد في الميدان في تمام الساعة الثانية صباحاً لنقدم حليباً دافئاً للرضيع، مسكناً آمناً للأم، وصداقة مخلصة غير مشروطة."',
    foundersVisionDesc1: "تم تأسيس منظمة أصوات من أجل الحياة في عام ٢٠١٨ لسد الفجوة الكبيرة بين المناصرة والخطاب العام وبين تقديم المساعدات العملية الفعلية والآمنة على الأرض. لاحظنا وجود رغبة لدى آلاف المتطوعين في المساعدة على المستوى المحلي ولكن غابت المنصة المنسقة لتوجيههم ودعم الأسر بشكل فوري وسري ومباشر.",
    foundersVisionDesc2: "اليوم، نقوم بالتنسيق بشكل وثيق مع متطوعينا، الشركاء والعيادات، ودور الرعاية الآمنة، والمجموعات التشريعية لتوفير شبكة أمان وطنية ومحلية سلسة ومتينة لحماية حياة الجنين والأم.",
    teamTitle: "فريق الإدارة والقيادة والتنظيم الميداني",
    member1Title: "المدير التنفيذي والمستشار الطبي المعتمد",
    member2Title: "مدير مشاركة وتنسيق الفروع الميدانية والمتطوعين",
    member3Title: "المنسق العام لمشروع الملاذ الآمن للإيواء السكني للحوامل",
    viewPartnershipsBtn: "عرض شراكاتنا المحلية والإقليمية المعتمدة",
    financialTransTitle: "الشفافية الكاملة والأمانة المالية المضمونة",
    financialTransDesc: "بصفتنا منظمة مناصرة وتطوعية مرخصة وغير هادفة للربح بالكامل، فإن أكثر من ٨٥٪ من نفقات التبرعات تذهب مباشرة لتمويل المساعدات العينية، دور الرعاية السكنية، وشراء مستلزمات الرضع والأمهات.",
    readFinancialReportBtn: "الاطلاع على التقرير المالي السنوي والمدقق لعام ٢٠٢٥ (PDF)",

    // Footer
    footerBrandDesc: "نحن نناصر حماية الحياة الإنسانية استناداً للحقائق الطبية، التثقيف التشريعي، والمساعدات العينية والغذائية والسكنية المجانية وغير المشروطة للأمهات والعائلات في مجتمعاتنا.",
    footerCoalition: "شركاء التحالف الدولي لحماية وتأييد الحياة",
    footerQuickActions: "روابط سريعة ومهمة",
    footerDisclosuresTitle: "إفصاحات الأمان والمسؤولية المهنية",
    footerDisclosuresDesc: "أصوات من أجل الحياة هي منظمة غير ربحية معتمدة ومسجلة رسمياً بموجب القوانين الناظمة. جميع المعلومات الطبية المقدمة هي للتثقيف العام ولا تعوض الاستشارة الطبية المتخصصة.",
    allRightsReserved: "جميع الحقوق محفوظة ومحمية.",
    privacyPolicy: "سياسة الخصوصية وحماية البيانات",
    termsOfService: "شروط وأحكام الاستخدام والخدمة",
    financialAccountability: "وثيقة المسؤولية والنزاهة المالية للمنظمة"
  }
};

// Mock Pregnancy Resource Centers
const RESOURCE_CENTERS = [
  {
    id: 1,
    name: { en: "St. Bernadette Maternity Home", ar: "دار القديسة برناديت السكنية للأمومة" },
    state: "Texas",
    city: { en: "Austin", ar: "أوستن" },
    type: { en: "Housing & Shelter", ar: "الإسكان والمأوى" },
    phone: "1-800-555-0191",
    services: {
      en: ["Free Housing", "Parenting Classes", "Financial Aid Assistance"],
      ar: ["إسكان آمن ومجاني", "حصص لتأهيل الأمهات والآباء", "مساعدات ومنح معيشية مباشرة"]
    }
  },
  {
    id: 2,
    name: { en: "Care Net Pregnancy Center of Austin", ar: "مركز شبكة الرعاية للحمل في أوستن" },
    state: "Texas",
    city: { en: "Austin", ar: "أوستن" },
    type: { en: "Medical Support", ar: "الدعم الطبي" },
    phone: "1-800-555-0192",
    services: {
      en: ["Free Ultrasounds", "Pregnancy Testing", "STI Testing"],
      ar: ["فحوصات موجات فوق صوتية مجانية", "اختبارات الحمل وتحديد المواعيد المباشرة", "فحوصات الصحة والسلامة الوقائية"]
    }
  },
  {
    id: 3,
    name: { en: "New Beginnings Family Care", ar: "مركز بدايات جديدة لرعاية ومستلزمات الأسرة" },
    state: "California",
    city: { en: "Sacramento", ar: "ساكرامنتو" },
    type: { en: "Material Aid", ar: "المساعدات العينية" },
    phone: "1-800-555-0193",
    services: {
      en: ["Diaper Bank", "Baby Clothing", "Car Seats & Formula"],
      ar: ["بنك الحفاضات والمطهرات", "توفير ملابس الرضع والأطفال", "مقاعد سيارات آمنة وعبوات حليب"]
    }
  },
  {
    id: 4,
    name: { en: "Hope & Healing Counseling Center", ar: "مركز الأمل والتعافي لتقديم الاستشارات النفسية والاجتماعية" },
    state: "California",
    city: { en: "Los Angeles", ar: "لوس أنجلوس" },
    type: { en: "Mental Health Center", ar: "مركز الصحة النفسية" },
    phone: "1-800-555-0194",
    services: {
      en: ["Post-Abortive Healing", "Perinatal Depression Therapy", "Grief Counseling"],
      ar: ["برامج استشفاء وتأهيل نفسي", "علاج اكتئاب ما قبل وبعد الولادة للوالدين", "التوجيه الإرشادي ومساندة حالات الفقد"]
    }
  },
  {
    id: 5,
    name: { en: "The Gabriel Project Network", ar: "شبكة مشروع الملاك جبرائيل للمساندة العائلية" },
    state: "Ohio",
    city: { en: "Columbus", ar: "كولومبوس" },
    type: { en: "Material Aid", ar: "المساعدات العينية" },
    phone: "1-800-555-0195",
    services: {
      en: ["Mentorship", "Direct Material Aid", "Transportation Help"],
      ar: ["المرافقة والتوجيه الفردي", "المساعدات المادية المباشرة للمستلزمات", "تسهيل وسائل النقل للمواعيد الطبية"]
    }
  },
  {
    id: 6,
    name: { en: "Magnolia Motherhood Sanctuary", ar: "ملاذ ماغنوليا الآمن لدعم الأمومة والإيواء" },
    state: "Georgia",
    city: { en: "Atlanta", ar: "أتلانتا" },
    type: { en: "Housing & Shelter", ar: "الإسكان والمأوى" },
    phone: "1-800-555-0196",
    services: {
      en: ["Residential Living", "Nutritional Therapy", "Career Counseling"],
      ar: ["إقامة فندقية وسكنية متكاملة", "استشارات التغذية الصحية للحوامل", "برامج تأهيلية وتدريب مهني للعمل"]
    }
  }
];

// Interactive Developmental Timeline
const TIMELINE_STAGES = [
  {
    week: { en: "Conception", ar: "لحظة الإخصاب" },
    title: { en: "A Unique Beginning", ar: "بداية بشرية فريدة وجديدة" },
    description: {
      en: "A completely unique DNA sequence is created, determining eye color, hair color, height, and gender instantly.",
      ar: "يتشكل شريط حمض نووي (DNA) فريد من نوعه بالكامل، يحدد لون العينين، خصائص الشعر، الطول المستقبلي، والجنس بصورة فورية وتلقائية."
    },
    milestone: {
      en: "23 pairs of chromosomes combine, initiating rapid cellular division.",
      ar: "تتحد ٢٣ زوجاً من الكروموسومات وتبدأ على الفور عملية الانقسام السريع وتشكيل البنية الأولى للحياة الجديدة."
    }
  },
  {
    week: { en: "Week 3", ar: "الأسبوع الثالث" },
    title: { en: "The Heart Beats", ar: "النبضات الأولى للقلب" },
    description: {
      en: "The cardiovascular system begins to form, and the heart starts to contract and beat rhythmically.",
      ar: "يبدأ نظام القلب والأوعية الدموية في التكون والنشاط، ويبدأ القلب البشري الصغير في الانقباض والنبض بإيقاع منتظم وتلقائي."
    },
    milestone: {
      en: "First organ system to become fully functional.",
      ar: "القلب هو أول جهاز عضوي بشري داخلي يبدأ عمله الوظيفي والحيوي في هذا العمر المبكر للغاية."
    }
  },
  {
    week: { en: "Week 6", ar: "الأسبوع السادس" },
    title: { en: "Brain Waves & Movement", ar: "النشاط الدماغي والحركات المبكرة" },
    description: {
      en: "Brain activity can be recorded with an EEG. Budding limbs start to emerge and fingers begin to develop.",
      ar: "يمكن تسجيل أولى موجات النشاط الدماغي الحيوية بواسطة أجهزة التخطيط الدقيق. تبدأ براعم الأطراف واليدين في البروز تدريجياً."
    },
    milestone: {
      en: "Slight twitching movements begin, though too small for a mother to feel.",
      ar: "تبدأ حركات انقباض طفيفة ومبكرة، على الرغم من كونها متناهية الصغر لتشعر بها الأم الحاضنة في هذه المرحلة."
    }
  },
  {
    week: { en: "Week 10", ar: "الأسبوع العاشر" },
    title: { en: "Fully Formed", ar: "اكتمال تشكل البنية الأساسية للأعضاء" },
    description: {
      en: "All major internal organs are present and functioning. Fingerprints are permanently set.",
      ar: "تكون جميع الأعضاء الداخلية الكبرى في مكانها وتبدأ عملها وتكاملها الطبيعي. تتشكل بصمات الأصابع الخاصة بالجنين بصورة دائمة."
    },
    milestone: {
      en: "The baby can now open and close their hands and squint their eyes.",
      ar: "يصبح الجنين قادراً الآن على فتح وغلق يديه الصغيرتين وتعديل تعابير عينيه البسيطة وتجربة الإحساس."
    }
  },
  {
    week: { en: "Week 15", ar: "الأسبوع الخامس عشر" },
    title: { en: "Hearing the World", ar: "بدء سماع الأصوات المحيطة" },
    description: {
      en: "The structural elements of the inner ear are complete. The baby can hear the mother's heartbeat and voice.",
      ar: "تكتمل البنية الأساسية لعظام وتجاويف الأذن الداخلية بالكامل. يستطيع الطفل الآن سماع صوت دقات قلب أمه وأصوات الكلام الخارجي."
    },
    milestone: {
      en: "Active breathing and swallowing amniotic fluid to practice lung development.",
      ar: "يقوم الجنين بممارسة تدريبات الشهيق والزفير وابتلاع السائل الأمنيوسي لتدريب وتأهيل رئتيه وجهازه التنفسي للولادة."
    }
  },
  {
    week: { en: "Week 20", ar: "الأسبوع العشرون" },
    title: { en: "Viability Threshold", ar: "عتبة الحياة والتفاعل الإحساسي المتقدم" },
    description: {
      en: "The baby reacts actively to external touch and loud sounds, sleeping and waking in patterned intervals.",
      ar: "يتفاعل الجنين بشكل حي ونشط للغاية مع اللمسات الخارجية للرحم والأصوات المرتفعة، ويبدأ في انتهاج فترات نوم واستيقاظ مجدولة."
    },
    milestone: {
      en: "Rapid neurological and sensory development accelerates.",
      ar: "يتسارع التطور والنمو العصبي والحسي بصورة مذهلة ليغطي نطاقات أوسع للتكامل العقلي والحسي للطفل."
    }
  }
];

// Upcoming Activist Events
const UPCOMING_EVENTS = [
  {
    id: 1,
    title: { en: "Annual Community Baby Shower", ar: "حفل استقبال وتوزيع هدايا الأطفال السنوي للأسر المحتاجة" },
    date: { en: "June 27, 2026", ar: "٢٧ يونيو ٢٠٢٦" },
    time: { en: "10:00 AM - 2:00 PM", ar: "١٠:٠٠ صباحاً - ٢:٠٠ ظهراً" },
    location: { en: "Civic Center Hall, Austin, TX", ar: "قاعة المركز المدني والاجتماعي، أوستن، تكساس" },
    description: {
      en: "Gathering and packaging essential baby supplies, diapers, and formula for local low-income mothers. Join us to sort, box, and write supportive letters.",
      ar: "جمع وتعبئة حزم مستلزمات رعاية الأطفال الأساسية، الحفاضات، وحليب الرضع لتوزيعها على الأمهات الجدد ذوات الدخل المحدود. انضم إلينا للمساعدة في الفرز والتعبئة وكتابة رسائل التشجيع."
    },
    category: { en: "Service Project", ar: "مشروع خدمي وتطوعي" }
  },
  {
    id: 2,
    title: { en: "Voices of Hope Advocacy Seminar", ar: "ندوة وحلقة تدريب «أصوات الأمل» للضغط والمناصرة المجتمعية" },
    date: { en: "July 12, 2026", ar: "١٢ يوليو ٢٠٢٦" },
    time: { en: "6:30 PM - 8:30 PM", ar: "٦:٣٠ مساءً - ٨:٣٠ مساءً" },
    location: { en: "Online / Virtual Webinar", ar: "عبر الإنترنت / ندوة رقمية مباشرة" },
    description: {
      en: "An educational webinar teaching positive, compassionate advocacy, legislative writing, and how to effectively support local maternity homes.",
      ar: "ندوة تثقيفية لتعلم كيفية المناصرة والدفاع الإيجابي والرحيم عن قضايا الحياة، وكتابة الرسائل التشريعية، وطرق الدعم الفعال لدور رعاية الأمهات والحوامل المحلية."
    },
    category: { en: "Educational", ar: "تثقيفي وتعليمي" }
  },
  {
    id: 3,
    title: { en: "Prayer Walk & Peaceful Gathering", ar: "مسيرة صلاة صامتة وتجمع تضامني سلمي" },
    date: { en: "August 05, 2026", ar: "٠٥ أغسطس ٢٠٢٦" },
    time: { en: "8:00 AM - 10:00 AM", ar: "٨:٠٠ صباحاً - ١٠:٠٠ صباحاً" },
    location: { en: "State Capitol Steps", ar: "ساحة ودرج مبنى الكابيتول الإقليمي" },
    description: {
      en: "A silent, peaceful candlelit prayer gathering focused on unity, compassion, and raising public awareness for crisis pregnancy support networks.",
      ar: "تجمع تضامني سلمي بالشموع يركز على الوحدة والرحمة والمحبة، ويهدف إلى رفع مستوى الوعي العام تجاه شبكات وملاجئ دعم الأمهات الحوامل في حالات الأزمات."
    },
    category: { en: "Advocacy", ar: "مناصرة وتوعية جماهيرية" }
  }
];

// Main App Component
export default function App() {
  const [lang, setLang] = useState('en'); // 'en' or 'ar'
  const [activeTab, setActiveTab] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeAlert, setActiveAlert] = useState(null);

  // States for interactive modules
  const [donationType, setDonationType] = useState('monthly');
  const [selectedDonationAmount, setSelectedDonationAmount] = useState(50);
  const [customDonationAmount, setCustomDonationAmount] = useState('');
  const [selectedTimelineIndex, setSelectedTimelineIndex] = useState(0);
  
  // Petition State
  const [petitionName, setPetitionName] = useState('');
  const [petitionEmail, setPetitionEmail] = useState('');
  const [petitionState, setPetitionState] = useState('');
  const [petitionSignatures, setPetitionSignatures] = useState(8420);
  const [hasSigned, setHasSigned] = useState(false);

  // Resource Finder State
  const [searchStateFilter, setSearchStateFilter] = useState('All');
  const [searchCategoryFilter, setSearchCategoryFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // RSVPs State
  const [rsvpedEvents, setRsvpedEvents] = useState({});
  const [rsvpName, setRsvpName] = useState('');
  const [rsvpEmail, setRsvpEmail] = useState('');
  const [activeRsvpModal, setActiveRsvpModal] = useState(null);

  // Quick localization helper
  const t = (key) => {
    return TRANSLATIONS[lang]?.[key] || TRANSLATIONS['en']?.[key] || key;
  };

  // Toggle Language
  const toggleLanguage = () => {
    const newLang = lang === 'en' ? 'ar' : 'en';
    setLang(newLang);
    // Auto translate current search filter keywords when language changes to preserve search integrity
    setSearchCategoryFilter('All');
    setSearchStateFilter('All');
  };

  // Trigger alert helper
  const triggerNotification = (title, message, type = 'success') => {
    setActiveAlert({ title, message, type });
    setTimeout(() => {
      setActiveAlert(null);
    }, 6000);
  };

  // Handle donation submission
  const handleDonationSubmit = (e) => {
    e.preventDefault();
    const finalAmount = customDonationAmount ? parseFloat(customDonationAmount) : selectedDonationAmount;
    if (!finalAmount || isNaN(finalAmount) || finalAmount <= 0) {
      triggerNotification(
        t('error'), 
        lang === 'en' ? "Please enter a valid donation amount." : "يرجى إدخال مبلغ تبرع صالح وقيمة صحيحة.", 
        "error"
      );
      return;
    }
    
    const messageEn = `Your compassionate donation of $${finalAmount} (${donationType === 'monthly' ? 'Monthly' : 'One-time'}) will directly support mothers, babies, and our ongoing advocacy work!`;
    const messageAr = `تبرعك السخي والرحيم بقيمة ${finalAmount}$ (${donationType === 'monthly' ? 'شهري مستمر' : 'لمرة واحدة'}) سيذهب مباشرة لدعم الأمهات، الرضع، ومواصلة جهود المناصرة المجتمعية والتشريعية الميدانية!`;

    triggerNotification(
      t('thankYou'), 
      lang === 'en' ? messageEn : messageAr, 
      "success"
    );
    setCustomDonationAmount('');
  };

  // Handle Petition Submit
  const handlePetitionSubmit = (e) => {
    e.preventDefault();
    if (!petitionName || !petitionEmail || !petitionState) {
      triggerNotification(t('error'), t('requiredField'), "error");
      return;
    }
    setPetitionSignatures(prev => prev + 1);
    setHasSigned(true);
    triggerNotification(
      t('thankYou'), 
      lang === 'en' 
        ? "Your voice has been added to support our advocacy bill!" 
        : "تمت إضافة اسمك وتوقيعك الداعم بنجاح لنصرة ودعم مشروع القانون الجديد وتوفير الإسكان للأمهات!", 
      "success"
    );
  };

  // Filter resource centers
  const filteredCenters = RESOURCE_CENTERS.filter(center => {
    const matchesState = searchStateFilter === 'All' || center.state === searchStateFilter;
    
    // Support type mapping for localization
    const matchesCategory = searchCategoryFilter === 'All' || 
      center.type.en === searchCategoryFilter || 
      center.type.ar === searchCategoryFilter;

    const query = searchQuery.toLowerCase();
    const matchesQuery = searchQuery === '' || 
      center.name.en.toLowerCase().includes(query) ||
      center.name.ar.includes(query) ||
      center.city.en.toLowerCase().includes(query) ||
      center.city.ar.includes(query) ||
      center.services.en.some(s => s.toLowerCase().includes(query)) ||
      center.services.ar.some(s => s.includes(query));

    return matchesState && matchesCategory && matchesQuery;
  });

  // Handle RSVP
  const processRsvp = (e) => {
    e.preventDefault();
    if (!rsvpName || !rsvpEmail) {
      triggerNotification(t('error'), t('requiredField'), "error");
      return;
    }
    setRsvpedEvents(prev => ({ ...prev, [activeRsvpModal.id]: true }));
    triggerNotification(
      t('rsvpConfirmTitle'), 
      `${t('rsvpConfirmDesc')} (${activeRsvpModal.title[lang]})`, 
      "success"
    );
    setActiveRsvpModal(null);
    setRsvpName('');
    setRsvpEmail('');
  };

  const isRtl = lang === 'ar';

  return (
    <div 
      dir={isRtl ? 'rtl' : 'ltr'} 
      className={`min-h-screen bg-stone-50 text-slate-800 flex flex-col transition-all duration-300 ${isRtl ? 'font-sans' : 'font-sans'}`}
    >
      
      {/* Dynamic Notifications */}
      {activeAlert && (
        <div className={`fixed top-6 z-50 max-w-sm bg-white border-l-4 ${isRtl ? 'border-r-4 border-l-0 left-6' : 'border-l-4 right-6'} border-emerald-600 rounded-lg shadow-xl p-4 flex items-start gap-3 animate-in slide-in-from-top duration-300`}>
          {activeAlert.type === 'success' ? (
            <CheckCircle className="text-emerald-600 shrink-0 w-6 h-6 mt-0.5" />
          ) : (
            <AlertCircle className="text-rose-500 shrink-0 w-6 h-6 mt-0.5" />
          )}
          <div>
            <h4 className="font-bold text-slate-900">{activeAlert.title}</h4>
            <p className="text-xs text-slate-600 mt-1">{activeAlert.message}</p>
          </div>
          <button onClick={() => setActiveAlert(null)} className={`${isRtl ? 'mr-auto' : 'ml-auto'} text-slate-400 hover:text-slate-600`}>
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* RSVP Modal */}
      {activeRsvpModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            <button 
              onClick={() => setActiveRsvpModal(null)} 
              className={`absolute top-4 ${isRtl ? 'left-4' : 'right-4'} text-slate-400 hover:text-slate-600`}
            >
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-xl font-black text-slate-900 mb-2">{t('register')}</h3>
            <p className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg mb-4">
              {activeRsvpModal.title[lang]}
            </p>
            
            <form onSubmit={processRsvp} className="space-y-4">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">{t('yourName')}</label>
                <input 
                  type="text" 
                  value={rsvpName} 
                  onChange={(e) => setRsvpName(e.target.value)} 
                  required 
                  placeholder={isRtl ? "مثال: فاطمة أحمد" : "e.g. Fatima Ahmed"}
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">{t('emailAddr')}</label>
                <input 
                  type="email" 
                  value={rsvpEmail} 
                  onChange={(e) => setRsvpEmail(e.target.value)} 
                  required 
                  placeholder="name@example.com"
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500 text-left"
                  dir="ltr"
                />
              </div>
              <div className="bg-stone-50 border-s-4 border-emerald-500 p-3 rounded-e-lg text-[11px] text-slate-600 flex gap-2">
                <CheckCircle className="w-4 h-4 shrink-0 mt-0.5 text-emerald-600" />
                <span>{t('agreeGuidelines')}</span>
              </div>
              <button 
                type="submit" 
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold py-3 px-4 rounded-xl text-xs uppercase tracking-wider transition"
              >
                {t('confirmFreeReg')}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* EMERGENCY CRISIS HEADER BANNER */}
      <div className="bg-emerald-950 text-emerald-100 text-[11px] py-2 px-4 flex flex-col md:flex-row justify-between items-center gap-2 font-medium">
        <div className="flex items-center gap-2">
          <Heart className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400 animate-pulse" />
          <span>{t('emergencyBanner')}</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="tel:1-800-712-4357" className="flex items-center gap-1 font-bold hover:underline hover:text-white transition" dir="ltr">
            <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
            <span>{t('crisisHotline')}: 1-800-712-4357</span>
          </a>
        </div>
      </div>

      {/* MAIN NAVIGATION BAR */}
      <header className="bg-white border-b border-stone-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('home')}>
              <div className="bg-emerald-600 text-white p-2.5 rounded-full shadow-md shadow-emerald-200">
                <Baby className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xl font-extrabold text-slate-900 tracking-tight block leading-tight">{t('brandName')}</span>
                <span className="text-[9px] uppercase font-bold tracking-wider text-emerald-600 block">{t('brandSubtitle')}</span>
              </div>
            </div>

            {/* Desktop Nav Items */}
            <nav className="hidden lg:flex items-center gap-1">
              {[
                { id: 'home', label: t('navHome') },
                { id: 'about', label: t('navMission') },
                { id: 'resources', label: t('navSupport') },
                { id: 'advocacy', label: t('navAction') },
                { id: 'events', label: t('navEvents') },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`px-3.5 py-2 rounded-full text-xs font-extrabold transition ${
                    activeTab === item.id 
                    ? 'bg-emerald-50 text-emerald-700' 
                    : 'text-slate-600 hover:text-emerald-600 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Desktop Language Switcher and Donate CTA */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Language Switch Button */}
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1 px-3 py-2 rounded-lg border border-stone-200 text-slate-700 hover:bg-slate-50 text-xs font-bold transition"
              >
                <Globe className="w-4 h-4 text-emerald-600" />
                <span>{lang === 'en' ? 'العربية' : 'English'}</span>
              </button>

              <button
                onClick={() => setActiveTab('donate')}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold px-5 py-2.5 rounded-full shadow-lg shadow-emerald-200 transition transform hover:-translate-y-0.5 flex items-center gap-2 text-xs"
              >
                <Heart className="w-3.5 h-3.5 fill-white" />
                <span>{t('supportFamilies')}</span>
              </button>
            </div>

            {/* Mobile Actions: Language Switch & Menu Toggle */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={toggleLanguage}
                className="p-2.5 rounded-lg border border-stone-200 text-slate-700 hover:bg-slate-50 text-xs font-bold flex items-center gap-1"
              >
                <Globe className="w-4 h-4 text-emerald-600" />
                <span className="text-[10px]">{lang === 'en' ? 'AR' : 'EN'}</span>
              </button>

              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-slate-700 p-2 hover:bg-slate-100 rounded-lg"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Panel */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-stone-200 py-4 px-4 space-y-1.5 shadow-inner">
            {[
              { id: 'home', label: t('navHome') },
              { id: 'about', label: t('navMission') },
              { id: 'resources', label: t('navSupport') },
              { id: 'advocacy', label: t('navAction') },
              { id: 'events', label: t('navEvents') },
              { id: 'donate', label: t('navDonateTab') },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-start px-4 py-2.5 rounded-lg text-xs font-bold transition ${
                  activeTab === item.id 
                  ? 'bg-emerald-600 text-white' 
                  : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* VIEWPORT CONTROLLER */}
      <main className="flex-grow">
        
        {/* ====================================
            HOME TAB 
           ==================================== */}
        {activeTab === 'home' && (
          <div className="animate-in fade-in duration-300">
            {/* HERO SECTION */}
            <section className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-slate-950 text-white py-16 md:py-24 overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                {/* Left Side: Call to Action */}
                <div className="lg:col-span-7 space-y-6 text-center lg:text-start">
                  <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase border border-emerald-500/30">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{t('heroBadge')}</span>
                  </div>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight md:leading-snug">
                    {t('heroTitle1')} <br />
                    <span className="text-emerald-400">{t('heroTitleColored')}</span> <br />
                    {t('heroTitle2')}
                  </h1>
                  <p className="text-sm md:text-base text-emerald-100 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                    {t('heroDesc')}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                    <button 
                      onClick={() => setActiveTab('resources')}
                      className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold px-8 py-3.5 rounded-full text-xs tracking-wide shadow-xl shadow-emerald-950/50 transition duration-300 flex items-center justify-center gap-2"
                    >
                      <PhoneCall className="w-4 h-4" />
                      <span>{t('heroCTA1')}</span>
                    </button>
                    <button 
                      onClick={() => setActiveTab('advocacy')}
                      className="w-full sm:w-auto bg-transparent border-2 border-emerald-400/40 hover:border-emerald-400 hover:bg-emerald-400/10 text-emerald-300 hover:text-white font-extrabold px-8 py-3.5 rounded-full text-xs tracking-wide transition duration-300"
                    >
                      {t('heroCTA2')}
                    </button>
                  </div>

                  {/* Trust Badges */}
                  <div className="pt-6 border-t border-emerald-800/40 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
                    <div>
                      <div className="text-2xl font-black text-emerald-400">14k+</div>
                      <div className="text-[10px] text-emerald-200">{t('raisedCount')}</div>
                    </div>
                    <div>
                      <div className="text-2xl font-black text-emerald-400">100%</div>
                      <div className="text-[10px] text-emerald-200">{t('freeServicesBadge')}</div>
                    </div>
                    <div>
                      <div className="text-2xl font-black text-emerald-400">30+</div>
                      <div className="text-[10px] text-emerald-200">{t('activeCoalitions')}</div>
                    </div>
                  </div>
                </div>

                {/* Right Side: Hero Visual Interactive Card */}
                <div className="lg:col-span-5">
                  <div className="bg-white text-slate-800 rounded-3xl shadow-2xl p-6 border border-emerald-100/50 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-500 to-emerald-700"></div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-emerald-100 text-emerald-800 text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider">
                        {t('immediateGoal')}
                      </span>
                      <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-500">
                        <Clock className="w-3.5 h-3.5 text-rose-500" />
                        <span>{t('endsInDays')}</span>
                      </div>
                    </div>

                    <h3 className="text-base font-black text-slate-900 leading-snug">
                      {t('goalCardTitle')}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {t('goalCardDesc')}
                    </p>

                    {/* Progress Bar */}
                    <div className="mt-6 space-y-2">
                      <div className="flex justify-between text-xs font-extrabold">
                        <span className="text-emerald-700">{t('goalRaised')}: $38,400</span>
                        <span className="text-slate-500">{t('goalTarget')}: $50,000</span>
                      </div>
                      <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
                        <div className={`bg-emerald-600 h-full rounded-full transition-all duration-1000 ${isRtl ? 'float-right' : 'float-left'}`} style={{ width: '76.8%' }}></div>
                      </div>
                      <div className="text-[10px] text-slate-400 italic text-end">
                        76.8% {t('fundedBy')}
                      </div>
                    </div>

                    {/* Quick Donate Matrix */}
                    <div className="mt-6 grid grid-cols-4 gap-2">
                      {[15, 30, 50, 100].map((amt) => (
                        <button
                          key={amt}
                          onClick={() => {
                            setSelectedDonationAmount(amt);
                            setActiveTab('donate');
                          }}
                          className="bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-xl py-2 text-xs font-extrabold text-emerald-800 transition"
                        >
                          ${amt}
                        </button>
                      ))}
                    </div>

                    <button 
                      onClick={() => setActiveTab('donate')}
                      className="w-full mt-4 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold py-3 rounded-xl text-xs uppercase tracking-wider transition flex items-center justify-center gap-2"
                    >
                      <Heart className="w-4 h-4" />
                      <span>{t('supportFamilyToday')}</span>
                    </button>
                  </div>
                </div>

              </div>
            </section>

            {/* TWO-PILLARS SUMMARY SECTION */}
            <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center space-y-3 max-w-2xl mx-auto mb-12">
                <span className="text-emerald-600 uppercase font-black tracking-widest text-xs">{t('dualApproachSubtitle')}</span>
                <h2 className="text-2xl md:text-3xl font-black text-slate-900">
                  {t('dualApproachTitle')}
                </h2>
                <p className="text-xs md:text-sm text-slate-500 leading-relaxed">
                  {t('dualApproachDesc')}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Pillar 1: Material and Social Support */}
                <div className="bg-white rounded-3xl p-6 md:p-8 border border-stone-200 shadow-sm hover:shadow-md transition relative overflow-hidden flex flex-col justify-between">
                  <div>
                    <div className="bg-emerald-100 text-emerald-800 w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
                      <Gift className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-black text-slate-900 mb-3">{t('pillar1Title')}</h3>
                    <p className="text-slate-600 text-xs leading-relaxed mb-6">
                      {t('pillar1Desc')}
                    </p>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{t('pillar1Item1')}</span>
                      </li>
                      <li className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{t('pillar1Item2')}</span>
                      </li>
                      <li className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{t('pillar1Item3')}</span>
                      </li>
                    </ul>
                  </div>
                  <button 
                    onClick={() => setActiveTab('resources')}
                    className="w-full bg-slate-50 hover:bg-emerald-50 text-emerald-800 border border-slate-200 hover:border-emerald-200 font-bold py-3 px-4 rounded-xl text-xs transition flex items-center justify-center gap-2"
                  >
                    <span>{t('pillar1Button')}</span>
                    <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
                  </button>
                </div>

                {/* Pillar 2: Bold Advocacy & Legislative Action */}
                <div className="bg-white rounded-3xl p-6 md:p-8 border border-stone-200 shadow-sm hover:shadow-md transition relative overflow-hidden flex flex-col justify-between">
                  <div>
                    <div className="bg-emerald-100 text-emerald-800 w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
                      <Shield className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-black text-slate-900 mb-3">{t('pillar2Title')}</h3>
                    <p className="text-slate-600 text-xs leading-relaxed mb-6">
                      {t('pillar2Desc')}
                    </p>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{t('pillar2Item1')}</span>
                      </li>
                      <li className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{t('pillar2Item2')}</span>
                      </li>
                      <li className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{t('pillar2Item3')}</span>
                      </li>
                    </ul>
                  </div>
                  <button 
                    onClick={() => setActiveTab('advocacy')}
                    className="w-full bg-slate-50 hover:bg-emerald-50 text-emerald-800 border border-slate-200 hover:border-emerald-200 font-bold py-3 px-4 rounded-xl text-xs transition flex items-center justify-center gap-2"
                  >
                    <span>{t('pillar2Button')}</span>
                    <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
                  </button>
                </div>
              </div>
            </section>

            {/* INTERACTIVE COMPONENT: HUMAN DEVELOPMENT TIMELINE */}
            <section className="bg-stone-100 py-16 border-t border-b border-stone-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="text-center space-y-3 max-w-2xl mx-auto mb-10">
                  <span className="text-emerald-600 uppercase font-black tracking-widest text-xs">{t('timelineSubtitle')}</span>
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900">
                    {t('timelineTitle')}
                  </h2>
                  <p className="text-xs md:text-sm text-slate-500 leading-relaxed">
                    {t('timelineDesc')}
                  </p>
                </div>

                {/* Timeline Horizontal Selector */}
                <div className="flex flex-nowrap overflow-x-auto pb-4 gap-2 scrollbar-none justify-start md:justify-center">
                  {TIMELINE_STAGES.map((stage, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedTimelineIndex(idx)}
                      className={`px-5 py-3 rounded-full text-xs font-extrabold shrink-0 border transition ${
                        selectedTimelineIndex === idx 
                        ? 'bg-emerald-600 border-emerald-600 text-white shadow-lg shadow-emerald-100' 
                        : 'bg-white border-stone-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {stage.week[lang]}
                    </button>
                  ))}
                </div>

                {/* Timeline Main Display Card */}
                <div className="mt-6 bg-white rounded-3xl p-6 md:p-10 border border-stone-200 shadow-xl max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative overflow-hidden">
                  
                  {/* Left Column: Stage Detail Info */}
                  <div className="md:col-span-8 space-y-4">
                    <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-[10px] font-black uppercase">
                      <Baby className="w-3.5 h-3.5" />
                      <span>{t('timelineStageLabel')}: {TIMELINE_STAGES[selectedTimelineIndex].week[lang]}</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-black text-slate-900 leading-tight">
                      {TIMELINE_STAGES[selectedTimelineIndex].title[lang]}
                    </h3>
                    <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                      {TIMELINE_STAGES[selectedTimelineIndex].description[lang]}
                    </p>
                    <div className={`bg-stone-50 p-4 rounded-xl ${isRtl ? 'border-r-4 border-emerald-500' : 'border-l-4 border-emerald-500'}`}>
                      <span className="block text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1">{t('timelineMilestoneLabel')}</span>
                      <p className="text-xs text-slate-700 font-bold leading-relaxed">
                        {TIMELINE_STAGES[selectedTimelineIndex].milestone[lang]}
                      </p>
                    </div>
                  </div>

                  {/* Right Column: Visual Indicator Graphic */}
                  <div className="md:col-span-4 bg-gradient-to-tr from-emerald-50 to-stone-100 rounded-2xl p-6 border border-stone-200 flex flex-col items-center justify-center text-center space-y-3 min-h-[220px]">
                    <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xl font-black shadow-lg shadow-emerald-200 animate-pulse">
                      {selectedTimelineIndex + 1}
                    </div>
                    <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider">{t('timelineProgressLabel')}</span>
                    <span className="text-xs font-extrabold text-slate-800">{t('timelineProgressSub')}</span>
                    
                    {/* Navigation inside card */}
                    <div className="flex gap-2 pt-2">
                      <button
                        disabled={selectedTimelineIndex === 0}
                        onClick={() => setSelectedTimelineIndex(prev => Math.max(0, prev - 1))}
                        className={`p-2 rounded-full border transition ${
                          selectedTimelineIndex === 0 
                          ? 'border-slate-100 text-slate-300 cursor-not-allowed' 
                          : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                        }`}
                      >
                        <ChevronLeft className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
                      </button>
                      <button
                        disabled={selectedTimelineIndex === TIMELINE_STAGES.length - 1}
                        onClick={() => setSelectedTimelineIndex(prev => Math.min(TIMELINE_STAGES.length - 1, prev + 1))}
                        className={`p-2 rounded-full border transition ${
                          selectedTimelineIndex === TIMELINE_STAGES.length - 1 
                          ? 'border-slate-100 text-slate-300 cursor-not-allowed' 
                          : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                        }`}
                      >
                        <ChevronRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
                      </button>
                    </div>
                  </div>

                </div>

              </div>
            </section>

            {/* IMPACT STATISTICS SECTION */}
            <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-emerald-950 text-white rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">
                <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]"></div>
                
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-5 space-y-4 text-center lg:text-start">
                    <span className="text-emerald-400 font-extrabold uppercase tracking-widest text-xs">{t('tangibleProgress')}</span>
                    <h2 className="text-2xl md:text-3xl font-black text-white">
                      {t('impactTitle')}
                    </h2>
                    <p className="text-xs text-emerald-100 leading-relaxed">
                      {t('impactDesc')}
                    </p>
                  </div>

                  <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="bg-emerald-900/40 border border-emerald-800/40 rounded-2xl p-6 text-center">
                      <div className="text-3xl md:text-4xl font-black text-emerald-400 mb-1">12,400+</div>
                      <div className="text-xs font-black text-white mb-1">{t('impactMetric1Title')}</div>
                      <div className="text-[10px] text-emerald-200">{t('impactMetric1Desc')}</div>
                    </div>
                    
                    <div className="bg-emerald-900/40 border border-emerald-800/40 rounded-2xl p-6 text-center">
                      <div className="text-3xl md:text-4xl font-black text-emerald-400 mb-1">35,000+</div>
                      <div className="text-xs font-black text-white mb-1">{t('impactMetric2Title')}</div>
                      <div className="text-[10px] text-emerald-200">{t('impactMetric2Desc')}</div>
                    </div>

                    <div className="bg-emerald-900/40 border border-emerald-800/40 rounded-2xl p-6 text-center">
                      <div className="text-3xl md:text-4xl font-black text-emerald-400 mb-1">18,500+</div>
                      <div className="text-xs font-black text-white mb-1">{t('impactMetric3Title')}</div>
                      <div className="text-[10px] text-emerald-200">{t('impactMetric3Desc')}</div>
                    </div>
                  </div>
                </div>

              </div>
            </section>

          </div>
        )}

        {/* ====================================
            ABOUT TAB (OUR MISSION)
           ==================================== */}
        {activeTab === 'about' && (
          <div className="animate-in fade-in duration-300 max-w-6xl mx-auto px-4 py-12 space-y-12">
            
            {/* Header block */}
            <div className="text-center space-y-3 max-w-2xl mx-auto">
              <span className="text-emerald-600 uppercase font-black tracking-widest text-xs">{t('navMission')}</span>
              <h1 className="text-3xl font-black text-slate-900">
                {t('aboutHeaderTitle')}
              </h1>
              <p className="text-xs md:text-sm text-slate-500 leading-relaxed">
                {t('aboutHeaderDesc')}
              </p>
            </div>

            {/* Core Values / Philosophy Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm">
                <div className="bg-emerald-100 text-emerald-800 w-10 h-10 rounded-xl flex items-center justify-center mb-4 font-black">1</div>
                <h3 className="text-base font-black text-slate-900 mb-2">{t('aboutValue1Title')}</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  {t('aboutValue1Desc')}
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm">
                <div className="bg-emerald-100 text-emerald-800 w-10 h-10 rounded-xl flex items-center justify-center mb-4 font-black">2</div>
                <h3 className="text-base font-black text-slate-900 mb-2">{t('aboutValue2Title')}</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  {t('aboutValue2Desc')}
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm">
                <div className="bg-emerald-100 text-emerald-800 w-10 h-10 rounded-xl flex items-center justify-center mb-4 font-black">3</div>
                <h3 className="text-base font-black text-slate-900 mb-2">{t('aboutValue3Title')}</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  {t('aboutValue3Desc')}
                </p>
              </div>

            </div>

            {/* Story / Founders Section */}
            <div className="bg-white rounded-3xl border border-stone-200 p-6 md:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-5">
                <h2 className="text-2xl font-black text-slate-900">{t('foundersVisionTitle')}</h2>
                <blockquote className={`border-emerald-500 pl-4 pr-4 text-slate-700 italic text-xs leading-relaxed ${isRtl ? 'border-r-4 border-l-0' : 'border-l-4 border-r-0'}`}>
                  {t('foundersVisionQuote')}
                </blockquote>
                <p className="text-slate-600 text-xs leading-relaxed">
                  {t('foundersVisionDesc1')}
                </p>
                <p className="text-slate-600 text-xs leading-relaxed">
                  {t('foundersVisionDesc2')}
                </p>
              </div>

              <div className="lg:col-span-5 bg-gradient-to-tr from-emerald-50 to-stone-100 rounded-2xl p-6 border border-stone-200 space-y-4">
                <h3 className="font-black text-slate-800 text-sm">{t('teamTitle')}</h3>
                
                <div className="space-y-4 text-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">EG</div>
                    <div>
                      <h4 className="font-bold text-slate-900">{lang === 'en' ? 'Dr. Elizabeth Gentry' : 'د. إليزابيث جينتري'}</h4>
                      <span className="text-slate-500 block text-[10px]">{t('member1Title')}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">ML</div>
                    <div>
                      <h4 className="font-bold text-slate-900">{lang === 'en' ? 'Marcus Lindemann' : 'ماركوس ليندمان'}</h4>
                      <span className="text-slate-500 block text-[10px]">{t('member2Title')}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">CR</div>
                    <div>
                      <h4 className="font-bold text-slate-900">{lang === 'en' ? 'Clara Ramirez' : 'كلارا راميريز'}</h4>
                      <span className="text-slate-500 block text-[10px]">{t('member3Title')}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-200">
                  <button 
                    onClick={() => setActiveTab('resources')}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-4 rounded-lg text-xs text-center transition block"
                  >
                    {t('viewPartnershipsBtn')}
                  </button>
                </div>
              </div>
            </div>

            {/* Financial Transparency Trust Badge */}
            <div className="bg-stone-100 rounded-2xl p-6 flex flex-col md:flex-row justify-between items-center gap-4 border border-stone-200">
              <div className="flex flex-col md:flex-row items-center gap-3 text-center md:text-start">
                <div className="bg-white p-3 rounded-xl text-emerald-600 border border-stone-200 shadow-sm shrink-0">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 text-sm">{t('financialTransTitle')}</h4>
                  <p className="text-xs text-slate-500 max-w-xl leading-relaxed">
                    {t('financialTransDesc')}
                  </p>
                </div>
              </div>
              <button className="bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-xs font-bold px-4 py-2.5 rounded-lg transition shrink-0">
                {t('readFinancialReportBtn')}
              </button>
            </div>

          </div>
        )}

        {/* ====================================
            RESOURCES TAB (FIND SUPPORT)
           ==================================== */}
        {activeTab === 'resources' && (
          <div className="animate-in fade-in duration-300 max-w-7xl mx-auto px-4 py-12">
            
            {/* Header Block */}
            <div className="text-center space-y-3 max-w-2xl mx-auto mb-10">
              <span className="text-emerald-600 uppercase font-black tracking-widest text-xs">{t('navSupport')}</span>
              <h1 className="text-3xl font-black text-slate-900">
                {t('resourcesHeaderTitle')}
              </h1>
              <p className="text-xs md:text-sm text-slate-500 leading-relaxed">
                {t('resourcesHeaderDesc')}
              </p>
            </div>

            {/* Emergency Hotline Quick Ribbon */}
            <div className="bg-rose-50 border border-rose-200 rounded-2xl p-4 flex flex-col md:flex-row justify-between items-center gap-4 max-w-4xl mx-auto mb-10 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="bg-rose-500 text-white p-2 rounded-xl shrink-0">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-rose-950 text-sm">{t('crisisBoxTitle')}</h3>
                  <p className="text-xs text-rose-700">{t('crisisBoxDesc')}</p>
                </div>
              </div>
              <a 
                href="tel:1-800-712-4357"
                className="bg-rose-600 hover:bg-rose-700 text-white text-xs font-black px-5 py-2.5 rounded-xl transition shadow-md shadow-rose-200 shrink-0"
              >
                {t('crisisBoxCTA')}: 1-800-712-4357
              </a>
            </div>

            {/* INTERACTIVE RESOURCE FINDER BOX */}
            <div className="bg-white border border-stone-200 rounded-3xl p-6 md:p-8 shadow-md">
              <h2 className="text-base font-black text-slate-900 mb-4 flex items-center gap-2">
                <Search className="w-5 h-5 text-emerald-600" />
                <span>{t('searchTitle')}</span>
              </h2>

              {/* Search Criteria Bar */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                
                {/* Text Query */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder={t('searchPlaceholder')}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full text-xs pl-8 pr-8 py-2.5 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                  <Search className={`absolute ${isRtl ? 'right-3' : 'left-3'} top-3 w-4 h-4 text-slate-400`} />
                </div>

                {/* State Dropdown */}
                <select
                  value={searchStateFilter}
                  onChange={(e) => setSearchStateFilter(e.target.value)}
                  className="w-full text-xs px-3 py-2.5 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                >
                  <option value="All">{t('allStates')}</option>
                  <option value="Texas">Texas</option>
                  <option value="California">California</option>
                  <option value="Ohio">Ohio</option>
                  <option value="Georgia">Georgia</option>
                </select>

                {/* Category Dropdown */}
                <select
                  value={searchCategoryFilter}
                  onChange={(e) => setSearchCategoryFilter(e.target.value)}
                  className="w-full text-xs px-3 py-2.5 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                >
                  <option value="All">{t('allSupportTypes')}</option>
                  <option value="Housing & Shelter">{lang === 'en' ? 'Housing & Shelter' : 'الإسكان والمأوى'}</option>
                  <option value="Medical Support">{lang === 'en' ? 'Medical Support' : 'الدعم الطبي'}</option>
                  <option value="Material Aid">{lang === 'en' ? 'Material Aid' : 'المساعدات العينية'}</option>
                  <option value="Mental Health Center">{lang === 'en' ? 'Mental Health Center' : 'مركز الصحة النفسية'}</option>
                </select>

                {/* Clear Filter Button */}
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSearchStateFilter('All');
                    setSearchCategoryFilter('All');
                  }}
                  className="w-full bg-stone-100 hover:bg-stone-200 text-slate-700 text-xs font-bold py-2.5 rounded-xl transition"
                >
                  {t('clearFilters')}
                </button>

              </div>

              {/* Resources list output */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCenters.length > 0 ? (
                  filteredCenters.map((center) => (
                    <div 
                      key={center.id}
                      className="border border-stone-200 hover:border-emerald-200 rounded-2xl p-5 hover:shadow-md transition bg-gradient-to-b from-white to-stone-50 flex flex-col justify-between"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="bg-emerald-100 text-emerald-800 text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full">
                            {center.type[lang]}
                          </span>
                          <span className="text-[9px] text-slate-400 font-bold flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {center.city[lang]}, {center.state}
                          </span>
                        </div>
                        
                        <h3 className="font-black text-slate-900 text-base">{center.name[lang]}</h3>
                        
                        <div className="space-y-1">
                          <span className="text-[10px] uppercase font-black tracking-widest text-slate-400 block">Services Provided</span>
                          <div className="flex flex-wrap gap-1">
                            {center.services[lang].map((srv, i) => (
                              <span key={i} className="bg-white border border-stone-200 text-slate-700 text-[10px] px-2 py-0.5 rounded">
                                {srv}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="pt-4 mt-4 border-t border-stone-150 flex items-center justify-between">
                        <a 
                          href={`tel:${center.phone}`}
                          className="text-emerald-700 hover:text-emerald-800 font-black text-xs flex items-center gap-1"
                        >
                          <PhoneCall className="w-3.5 h-3.5" />
                          <span>{center.phone}</span>
                        </a>
                        <span className="text-[10px] text-emerald-600 font-bold">{t('freeService')}</span>
                      </div>

                    </div>
                  ))
                ) : (
                  <div className="col-span-full py-12 text-center space-y-2">
                    <AlertCircle className="w-8 h-8 text-slate-300 mx-auto" />
                    <h4 className="font-bold text-slate-800 text-sm">{t('noCentersFound')}</h4>
                    <p className="text-xs text-slate-500">{t('noCentersSub')}</p>
                  </div>
                )}
              </div>

            </div>

            {/* Additional Material Request Section */}
            <div className="mt-12 bg-emerald-950 text-white rounded-3xl p-6 md:p-12 shadow-md flex flex-col lg:flex-row justify-between items-center gap-8">
              <div className="space-y-4 max-w-2xl text-center lg:text-start">
                <span className="text-emerald-400 font-extrabold uppercase tracking-widest text-xs">{t('babyBankLabel')}</span>
                <h2 className="text-xl md:text-2xl font-black">{t('babyBankTitle')}</h2>
                <p className="text-xs md:text-sm text-emerald-100 leading-relaxed">
                  {t('babyBankDesc')}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full lg:w-auto">
                <button 
                  onClick={() => triggerNotification(t('success'), t('maternityCenterCheck'), "success")}
                  className="w-full sm:w-auto bg-white hover:bg-stone-100 text-slate-900 font-extrabold text-xs px-6 py-3.5 rounded-xl transition"
                >
                  {t('requestPkgBtn')}
                </button>
                <button 
                  onClick={() => setActiveTab('donate')}
                  className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-extrabold text-xs px-6 py-3.5 rounded-xl transition"
                >
                  {t('donateSuppliesBtn')}
                </button>
              </div>
            </div>

          </div>
        )}

        {/* ====================================
            ADVOCACY TAB (TAKE ACTION)
           ==================================== */}
        {activeTab === 'advocacy' && (
          <div className="animate-in fade-in duration-300 max-w-7xl mx-auto px-4 py-12">
            
            {/* Header Block */}
            <div className="text-center space-y-3 max-w-2xl mx-auto mb-10">
              <span className="text-emerald-600 uppercase font-black tracking-widest text-xs">{t('navAction')}</span>
              <h1 className="text-3xl font-black text-slate-900">
                {t('advocacyHeaderTitle')}
              </h1>
              <p className="text-xs md:text-sm text-slate-500 leading-relaxed">
                {t('advocacyHeaderDesc')}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Left Side: Interactive Signature Form */}
              <div className="lg:col-span-6 bg-white border border-stone-200 rounded-3xl p-6 md:p-8 shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-emerald-100 text-emerald-800 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full">
                    {t('activePetitionLabel')}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-rose-600 font-bold">
                    <Award className="w-3.5 h-3.5" />
                    <span>{t('prioritySupportLabel')}</span>
                  </div>
                </div>

                <h3 className="text-lg font-black text-slate-900 leading-snug">
                  {t('billTitle')}
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {t('billDesc')}
                </p>

                {/* Progress Signatures Counter */}
                <div className="mt-6 space-y-2">
                  <div className="flex justify-between text-xs font-black">
                    <span className="text-emerald-700">{petitionSignatures.toLocaleString()} {t('petitionSubscribers')}</span>
                    <span className="text-slate-500">10,000</span>
                  </div>
                  <div className="w-full bg-slate-100 h-3.5 rounded-full overflow-hidden">
                    <div className={`bg-emerald-600 h-full rounded-full transition-all duration-500 ${isRtl ? 'float-right' : 'float-left'}`} style={{ width: `${(petitionSignatures / 10000) * 100}%` }}></div>
                  </div>
                  <div className="text-[10px] text-slate-400 italic">
                    {t('petitionHelpReach')}
                  </div>
                </div>

                {/* Signature Form */}
                {hasSigned ? (
                  <div className="mt-6 bg-emerald-50 border border-emerald-200 text-emerald-800 p-5 rounded-2xl space-y-2 text-center animate-pulse">
                    <CheckCircle className="w-10 h-10 text-emerald-600 mx-auto" />
                    <h4 className="font-extrabold text-sm">{t('signSuccess')}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{t('signSuccessDesc')}</p>
                    <button 
                      onClick={() => {
                        document.execCommand('copy');
                        triggerNotification(t('copied'), t('shareLinkCopied'), "success");
                      }}
                      className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-2 px-4 rounded-xl transition mt-2"
                    >
                      <Share2 className="w-3.5 h-3.5" />
                      <span>{t('copyReferralLink')}</span>
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handlePetitionSubmit} className="mt-6 space-y-4">
                    <h4 className="font-extrabold text-slate-800 text-xs uppercase tracking-wider">{t('addSignatureTitle')}</h4>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-black text-slate-500 uppercase mb-1">{t('yourName')}</label>
                        <input
                          type="text"
                          required
                          value={petitionName}
                          onChange={(e) => setPetitionName(e.target.value)}
                          placeholder="e.g. Fatima Ahmed"
                          className="w-full text-xs px-3 py-2 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-black text-slate-500 uppercase mb-1">{t('emailAddr')}</label>
                        <input
                          type="email"
                          required
                          value={petitionEmail}
                          onChange={(e) => setPetitionEmail(e.target.value)}
                          placeholder="fatima@example.com"
                          className="w-full text-xs px-3 py-2 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-left"
                          dir="ltr"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-black text-slate-500 uppercase mb-1">{t('yourState')}</label>
                      <select
                        required
                        value={petitionState}
                        onChange={(e) => setPetitionState(e.target.value)}
                        className="w-full text-xs px-3 py-2.5 border border-stone-200 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      >
                        <option value="">{t('selectState')}</option>
                        <option value="TX">Texas</option>
                        <option value="CA">California</option>
                        <option value="OH">Ohio</option>
                        <option value="GA">Georgia</option>
                        <option value="FL">Florida</option>
                        <option value="NY">New York</option>
                        <option value="Other">Other (Outside USA)</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold py-3.5 rounded-xl text-xs uppercase tracking-wider transition shadow-lg shadow-emerald-150"
                    >
                      {t('signButton')}
                    </button>
                  </form>
                )}

              </div>

              {/* Right Side: Letter Generator to Representatives */}
              <div className="lg:col-span-6 bg-stone-100 border border-stone-200 rounded-3xl p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 bg-white text-slate-800 px-3 py-1.5 rounded-full border border-stone-200 w-fit text-xs font-black uppercase mb-4">
                    <FileText className="w-4 h-4 text-emerald-600" />
                    <span>{t('advocacyToolkitLabel')}</span>
                  </div>
                  
                  <h3 className="text-lg font-black text-slate-900 leading-snug">
                    {t('repLetterTitle')}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {t('repLetterDesc')}
                  </p>

                  {/* Letter Box Mockup */}
                  <div className="mt-4 bg-white border border-stone-200 rounded-xl p-4 text-[10.5px] text-slate-700 leading-relaxed max-h-[220px] overflow-y-auto select-all text-start">
                    <span className="font-extrabold block text-slate-400 uppercase text-[9px] mb-2 tracking-wide">{t('clickToSelectAll')}</span>
                    <p className="font-bold">{t('letterSubject')}</p>
                    <p className="mt-2">{t('letterSalutation')}</p>
                    <p className="mt-2">
                      {t('letterParagraph1')}
                    </p>
                    <p className="mt-2">
                      {t('letterParagraph2')}
                    </p>
                    <p className="mt-2">{t('letterSignOff')}</p>
                    <p className="italic">{t('letterPlaceholderName')}</p>
                    <p className="italic">{t('letterPlaceholderAddress')}</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-stone-200 mt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                  <span className="text-[10px] text-slate-500 font-bold">
                    {t('findRepLabel')}
                  </span>
                  <a
                    href="https://www.house.gov/representatives/find-your-representative"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 text-xs font-black px-4 py-2.5 rounded-lg text-center transition"
                  >
                    {t('findRepBtn')}
                  </a>
                </div>

              </div>

            </div>

            {/* Legislative Watch List Card */}
            <div className="mt-12 bg-white border border-stone-200 rounded-3xl p-6 md:p-8">
              <h3 className="text-lg font-black text-slate-900 mb-2">{t('legWatchTitle')}</h3>
              <p className="text-xs text-slate-500 mb-6">{t('legWatchDesc')}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                <div className="border border-stone-200 p-5 rounded-2xl bg-stone-50 space-y-2">
                  <span className="bg-amber-100 text-amber-800 text-[9px] font-black uppercase px-2 py-0.5 rounded">{t('watchStatus1')}</span>
                  <h4 className="font-bold text-xs text-slate-900">{t('watchBill1Title')}</h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed">{t('watchBill1Desc')}</p>
                </div>

                <div className="border border-stone-200 p-5 rounded-2xl bg-stone-50 space-y-2">
                  <span className="bg-emerald-100 text-emerald-800 text-[9px] font-black uppercase px-2 py-0.5 rounded">{t('watchStatus2')}</span>
                  <h4 className="font-bold text-xs text-slate-900">{t('watchBill2Title')}</h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed">{t('watchBill2Desc')}</p>
                </div>

                <div className="border border-stone-200 p-5 rounded-2xl bg-stone-50 space-y-2">
                  <span className="bg-amber-100 text-amber-800 text-[9px] font-black uppercase px-2 py-0.5 rounded">{t('watchStatus3')}</span>
                  <h4 className="font-bold text-xs text-slate-900">{t('watchBill3Title')}</h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed">{t('watchBill3Desc')}</p>
                </div>

              </div>
            </div>

          </div>
        )}

        {/* ====================================
            EVENTS TAB 
           ==================================== */}
        {activeTab === 'events' && (
          <div className="animate-in fade-in duration-300 max-w-7xl mx-auto px-4 py-12">
            
            {/* Header Block */}
            <div className="text-center space-y-3 max-w-2xl mx-auto mb-10">
              <span className="text-emerald-600 uppercase font-black tracking-widest text-xs">{t('navEvents')}</span>
              <h1 className="text-3xl font-black text-slate-900">
                {t('eventsTitle')}
              </h1>
              <p className="text-xs md:text-sm text-slate-500 leading-relaxed">
                {t('eventsDesc')}
              </p>
            </div>

            {/* Event Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {UPCOMING_EVENTS.map((event) => {
                const isRsvped = rsvpedEvents[event.id];
                return (
                  <div 
                    key={event.id}
                    className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition relative overflow-hidden"
                  >
                    {/* Visual Tab accent based on category */}
                    <div className="absolute top-0 left-0 w-full h-1.5 bg-emerald-600"></div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="bg-emerald-50 text-emerald-800 border border-emerald-100 text-[9px] font-black uppercase px-2.5 py-1 rounded-lg">
                          {event.category[lang]}
                        </span>
                        {isRsvped && (
                          <span className="bg-emerald-600 text-white text-[9px] font-black px-2 py-0.5 rounded flex items-center gap-1 animate-pulse">
                            <CheckCircle className="w-3 h-3" />
                            {t('eventRsvpedLabel')}
                          </span>
                        )}
                      </div>

                      <h3 className="font-black text-slate-900 text-base leading-tight">{event.title[lang]}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">{event.description[lang]}</p>
                      
                      <div className="space-y-2 pt-2 border-t border-stone-100 text-xs" dir="ltr">
                        <div className="flex items-center gap-2 text-slate-500 justify-start">
                          <Calendar className="w-4 h-4 text-emerald-600" />
                          <span>{event.date[lang]} • {event.time[lang]}</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-500 justify-start">
                          <MapPin className="w-4 h-4 text-emerald-600" />
                          <span>{event.location[lang]}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-stone-100">
                      {isRsvped ? (
                        <button
                          disabled
                          className="w-full bg-emerald-50 text-emerald-800 font-bold py-2.5 px-4 rounded-xl text-xs text-center border border-emerald-100 cursor-not-allowed"
                        >
                          {t('eventRsvpConfirmed')}
                        </button>
                      ) : (
                        <button
                          onClick={() => setActiveRsvpModal(event)}
                          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-4 rounded-xl text-xs text-center transition"
                        >
                          {t('eventRsvpBtn')}
                        </button>
                      )}
                    </div>

                  </div>
                );
              })}
            </div>

            {/* Host Your Own Vigil / Shower CTA block */}
            <div className="mt-12 bg-stone-100 border border-stone-200 rounded-3xl p-6 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="text-emerald-600 font-black uppercase tracking-widest text-xs">{t('localChapterSupport')}</span>
                <h3 className="text-xl md:text-2xl font-black text-slate-900">{t('hostEventTitle')}</h3>
                <p className="text-xs md:text-sm text-slate-500 leading-relaxed">
                  {t('hostEventDesc')}
                </p>
              </div>
              <div className="lg:col-span-4 shrink-0 w-full lg:w-auto">
                <button 
                  onClick={() => triggerNotification(t('success'), t('eventKitSuccess'), "success")}
                  className="w-full bg-white hover:bg-slate-50 text-slate-900 border border-stone-200 font-black text-xs py-3.5 px-6 rounded-xl text-center transition shadow-sm"
                >
                  {t('downloadEventKitBtn')}
                </button>
              </div>
            </div>

          </div>
        )}

        {/* ====================================
            DONATE TAB 
           ==================================== */}
        {activeTab === 'donate' && (
          <div className="animate-in fade-in duration-300 max-w-5xl mx-auto px-4 py-12">
            
            {/* Header Block */}
            <div className="text-center space-y-3 max-w-2xl mx-auto mb-10">
              <span className="text-emerald-600 uppercase font-black tracking-widest text-xs">{t('navDonateTab')}</span>
              <h1 className="text-3xl font-black text-slate-900">
                {t('donateTitle')}
              </h1>
              <p className="text-xs md:text-sm text-slate-500 leading-relaxed">
                {t('donateDesc')}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Donation Form Panel */}
              <div className="lg:col-span-7 bg-white border border-stone-200 rounded-3xl p-6 md:p-8 shadow-md">
                
                {/* One-time / Monthly Toggle */}
                <div className="flex bg-stone-100 p-1.5 rounded-2xl mb-6">
                  <button
                    onClick={() => setDonationType('monthly')}
                    className={`flex-1 py-3 text-xs font-black uppercase tracking-wider rounded-xl transition ${
                      donationType === 'monthly'
                      ? 'bg-emerald-600 text-white shadow-md'
                      : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {t('monthlyDonation')}
                  </button>
                  <button
                    onClick={() => setDonationType('one-time')}
                    className={`flex-1 py-3 text-xs font-black uppercase tracking-wider rounded-xl transition ${
                      donationType === 'one-time'
                      ? 'bg-emerald-600 text-white shadow-md'
                      : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {t('oneTimeDonation')}
                  </button>
                </div>

                <form onSubmit={handleDonationSubmit} className="space-y-6">
                  
                  {/* Grid of Standard Donation Values */}
                  <div>
                    <label className="block text-[10px] font-black uppercase text-slate-400 tracking-wider mb-2">{t('selectTierLabel')}</label>
                    <div className="grid grid-cols-3 gap-3">
                      {[25, 50, 100, 250, 500, 1000].map((amount) => (
                        <button
                          key={amount}
                          type="button"
                          onClick={() => {
                            setSelectedDonationAmount(amount);
                            setCustomDonationAmount('');
                          }}
                          className={`py-4 rounded-xl font-black text-sm border transition flex flex-col items-center justify-center gap-1 ${
                            selectedDonationAmount === amount && !customDonationAmount
                            ? 'bg-emerald-50 border-emerald-500 text-emerald-800'
                            : 'bg-white border-stone-200 hover:bg-slate-50 text-slate-700'
                          }`}
                        >
                          <span>${amount}</span>
                          <span className="text-[9px] font-medium text-slate-400">
                            {amount === 25 && t('diapersLabel')}
                            {amount === 50 && t('formulaLabel')}
                            {amount === 100 && t('ultrasoundLabel')}
                            {amount === 250 && t('shelterLabel')}
                            {amount === 500 && t('counselingLabel')}
                            {amount === 1000 && t('sanctuaryLabel')}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Custom Donation Field */}
                  <div>
                    <label className="block text-[10px] font-black uppercase text-slate-400 tracking-wider mb-2">{t('customAmountLabel')}</label>
                    <div className="relative">
                      <span className={`absolute ${isRtl ? 'right-3' : 'left-3'} top-3.5 text-slate-400 font-bold text-xs`}>$</span>
                      <input
                        type="number"
                        placeholder={isRtl ? "مبلغ مخصص" : "Other amount"}
                        value={customDonationAmount}
                        onChange={(e) => {
                          setCustomDonationAmount(e.target.value);
                          setSelectedDonationAmount(0);
                        }}
                        className={`w-full text-xs py-3 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 ${isRtl ? 'pr-8 pl-4' : 'pl-8 pr-4'}`}
                      />
                    </div>
                  </div>

                  {/* Security trust badge */}
                  <div className="bg-emerald-50/50 text-emerald-950 p-4 rounded-2xl text-xs space-y-1.5 border border-emerald-100">
                    <div className="flex items-center gap-2 font-black">
                      <Shield className="w-4 h-4 text-emerald-600" />
                      <span>{t('securityDisclosureTitle')}</span>
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                      {t('securityDisclosureDesc')}
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold py-4 rounded-xl text-xs uppercase tracking-wider transition shadow-xl shadow-emerald-150 flex items-center justify-center gap-2"
                  >
                    <Heart className="w-4 h-4 fill-white" />
                    <span>{t('confirmDonationBtn')}: ${customDonationAmount ? customDonationAmount : selectedDonationAmount}</span>
                  </button>

                </form>

              </div>

              {/* Right Column: Visual Impact Explainer */}
              <div className="lg:col-span-5 space-y-6">
                
                <div className="bg-stone-100 border border-stone-200 rounded-3xl p-6 space-y-4">
                  <h3 className="font-black text-slate-900 text-xs uppercase tracking-wider">{t('howMoneyUsedTitle')}</h3>
                  
                  <div className="space-y-4 text-xs">
                    <div className="flex gap-3">
                      <div className="bg-white p-2.5 rounded-xl border border-stone-200 shadow-sm text-emerald-600 shrink-0 h-10 w-10 flex items-center justify-center">
                        <Gift className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900">{t('donation25Title')}</h4>
                        <p className="text-slate-500 leading-relaxed">{t('donation25Desc')}</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <div className="bg-white p-2.5 rounded-xl border border-stone-200 shadow-sm text-emerald-600 shrink-0 h-10 w-10 flex items-center justify-center">
                        <Baby className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900">{t('donation100Title')}</h4>
                        <p className="text-slate-500 leading-relaxed">{t('donation100Desc')}</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <div className="bg-white p-2.5 rounded-xl border border-stone-200 shadow-sm text-emerald-600 shrink-0 h-10 w-10 flex items-center justify-center">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900">{t('donation250Title')}</h4>
                        <p className="text-slate-500 leading-relaxed">{t('donation250Desc')}</p>
                      </div>
                    </div>
                  </div>

                </div>

                <div className="bg-emerald-950 text-white rounded-3xl p-6 text-center space-y-2">
                  <Award className="w-8 h-8 text-emerald-400 mx-auto animate-bounce" />
                  <h4 className="font-extrabold text-sm">{t('sustainerCardTitle')}</h4>
                  <p className="text-xs text-emerald-100 leading-relaxed">
                    {t('sustainerCardDesc')}
                  </p>
                </div>

              </div>

            </div>

          </div>
        )}

      </main>

      {/* FOOTER SECTION */}
      <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 text-xs py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Brand block */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-emerald-600 text-white p-2 rounded-full">
                <Baby className="w-5 h-5" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">{t('brandName')}</span>
            </div>
            <p className="leading-relaxed max-w-sm">
              {t('footerBrandDesc')}
            </p>
            <div className="flex items-center gap-3 text-slate-500">
              <Globe className="w-4 h-4 text-emerald-600" />
              <span>{t('footerCoalition')}</span>
            </div>
          </div>

          {/* Quick links navigation */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider">{t('footerQuickActions')}</h4>
            <ul className="space-y-2">
              <li><button onClick={() => setActiveTab('resources')} className="hover:text-emerald-400 transition">{t('navSupport')}</button></li>
              <li><button onClick={() => setActiveTab('advocacy')} className="hover:text-emerald-400 transition">{t('navAction')}</button></li>
              <li><button onClick={() => setActiveTab('events')} className="hover:text-emerald-400 transition">{t('navEvents')}</button></li>
              <li><button onClick={() => setActiveTab('donate')} className="hover:text-emerald-400 transition">{t('navDonateTab')}</button></li>
            </ul>
          </div>

          {/* Legal / Accountability block */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider">{t('footerDisclosuresTitle')}</h4>
            <p className="leading-relaxed text-slate-500">
              {t('footerDisclosuresDesc')}
            </p>
            <div className="pt-2">
              <span className="font-bold text-slate-300">Option Line 24/7 Hotline:</span>
              <a href="tel:1-800-712-4357" className="text-emerald-400 font-bold block hover:underline" dir="ltr">1-800-712-4357</a>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-500">
          <span>&copy; {new Date().getFullYear()} {t('brandName')}. {t('allRightsReserved')}</span>
          <div className="flex gap-4">
            <a href="#" className="hover:underline hover:text-slate-400 transition">{t('privacyPolicy')}</a>
            <a href="#" className="hover:underline hover:text-slate-400 transition">{t('termsOfService')}</a>
            <a href="#" className="hover:underline hover:text-slate-400 transition">{t('financialAccountability')}</a>
          </div>
        </div>
      </footer>

    </div>
  );
}

```
