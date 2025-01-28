import { FaApplePay, FaGooglePay, FaLanguage, FaLinkedinIn, FaPhoneVolume, FaXTwitter } from "react-icons/fa6";
import { ContactsType, FaqItemsType, FeatureCardType, FooterColumnType, LawyerFeaturesType, LawyerProfileType, legalBlogsType, legalFeaturesType, legalServicesType, NavbarType, PaymentMethodsType, SelectingType, SocialLinksType } from "../types/type";
import { BiBriefcase, BiCalendar, BiTime } from "react-icons/bi";
import { GrValidate } from "react-icons/gr";
import { MdCorporateFare, MdOutlineMailOutline } from "react-icons/md";
import { FaRegFileAlt } from "react-icons/fa";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import legalImg1 from "../assets/legalBlog1.png"
import legalImg2 from "../assets/legalBlog2.png"
import legalImg3 from "../assets/legalBlog3.png"
import dunne from "../assets/dunne.png"
import alAnsari from "../assets/alAnsari.png"
import salehForLaw from "../assets/salehForLaw.png"
import statistics1 from "../assets/statistic.png"
import transactions from "../assets/transactions.png"
import { CiLocationOn } from "react-icons/ci";
import { FiInstagram } from "react-icons/fi";
import { IoLogoYoutube } from "react-icons/io5";
import { SiMastercard, SiVisa } from "react-icons/si";

export const navbarList: NavbarType[] = [
    {name:"Home", to:"home"},
    {name:"About us", to:"about-us"},
    {name:"Law frim", to:"law-frim"},
    {name:"Services", to:"services"},
    {name:"Community", to:"commuinty"},
    {name:"Contact us", to:"contact-us"},
]

export const selectingList: SelectingType[] = [
    { 
      name: "Consultation date", 
      label:"select date",
      Icon: BiCalendar, 
      list: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
    },
    { 
      name: "Consultation time", 
      label:"select time",
      Icon: BiTime, 
      list: ["Morning (9AM - 12PM)", "Afternoon (1PM - 5PM)", "Evening (6PM - 9PM)"]
    },
    { 
      name: "Consultation language", 
      label:"select language",
      Icon: FaLanguage, 
      list: ["English", "Spanish", "French", "German", "Mandarin"]
    },
    { 
      name: "Years of experience", 
      label:"select experience",
      Icon: BiBriefcase, 
      list: ["0-2 years", "3-5 years", "6-10 years", "10+ years"]
    },
];

export const legalFeatures: legalFeaturesType[] = [
  { 
    title: "Reliable Legal Services", 
    description:"naseh platform provides legal advice approved by lawyers registered with the qatari ministry of justice.",
    Icon: GrValidate, 
  },
  { 
    title: "Diversity of services", 
    description:"naseh offers a wide range of legal services that meet the needs of individuals and companies.",
    Icon: GrValidate, 
  },
  { 
    title: "Security & confidentiality", 
    description:"naseh ensures the protection of users' data and legal information through advanced security systems.",
    Icon: GrValidate, 
  },
  { 
    title: "Easy electronic payment", 
    description:"safe and convenient payment options, ensuring transactions are completed easily and comfortably.",
    Icon: GrValidate, 
  },
];

export const legalServices: legalServicesType[] = [
  { 
    title: "Scheduled consultations", 
    description:"Naseh platform provides legal advice approved by lawyers registered with the qatari ministry of justice.",
    buttonText:"Book a consultation",
    iconColor:"bg-green-400",
    Icon: BiCalendar, 
  },
  { 
    title: "Urgent consultation", 
    description:"Naseh platform provides legal advice approved by lawyers registered with the qatari ministry of justice.",
    buttonText:"Book a consultation",
    iconColor:"bg-red-400",
    Icon: FaPhoneVolume, 
  },
  { 
    title: "Corporate Portal", 
    description:"Naseh platform provides legal advice approved by lawyers registered with the qatari ministry of justice.",
    buttonText:"Soon",
    iconColor:"bg-blue-400",
    Icon: MdCorporateFare, 
  },
  { 
    title: "Written consultation", 
    description:"Naseh platform provides legal advice approved by lawyers registered with the qatari ministry of justice.",
    buttonText:"Soon",
    iconColor:"bg-yellow-400",
    Icon: FaRegFileAlt, 
  },
  { 
    title: "Contracts & agreements", 
    description:"Naseh platform provides legal advice approved by lawyers registered with the qatari ministry of justice.",
    buttonText:"Soon",
    iconColor:"bg-purple-400",
    Icon: BsFillJournalBookmarkFill, 
  },
  { 
    title: "Hire A Lawyer", 
    description:"Naseh platform provides legal advice approved by lawyers registered with the qatari ministry of justice.",
    buttonText:"Soon",
    iconColor:"bg-orange-400",
    Icon: BiBriefcase, 
  },
];

export const legalBlogs: legalBlogsType[] = [
  { 
    title: "Avoiding Trouble: Common Legal Mistakes to Keep Away", 
    description:"In Qatar,As In Any Country,It Is Important For Its Citizens And Expatriates To Follow The Local Laws And Regulations To Avoid Legal Problems.",
    type:"Legal Consultations ",
    date:"June 23, 2024",
    image: legalImg1, 
  },
  { 
    title: "Avoiding Trouble: Common Legal Mistakes to Keep Away", 
    description:"In Qatar,As In Any Country,It Is Important For Its Citizens And Expatriates To Follow The Local Laws And Regulations To Avoid Legal Problems.",
    type:"Legal Consultations ",
    date:"June 23, 2024",
    image: legalImg2, 
  },
  { 
    title: "Avoiding Trouble: Common Legal Mistakes to Keep Away", 
    description:"In Qatar,As In Any Country,It Is Important For Its Citizens And Expatriates To Follow The Local Laws And Regulations To Avoid Legal Problems.",
    type:"Legal Consultations ",
    date:"June 23, 2024",
    image: legalImg3, 
  },
];

export const faqItems: FaqItemsType[] = [
  {
    question: "What services does offer?",
    answer:
      "We offer comprehensive legal services through our platform. Our services include connecting you with qualified lawyers, document management, case tracking, and legal consultations.",
  },
  {
    question: "Is there a fee to use ?",
    answer: "Please contact our support team for detailed information about our fee structure and pricing plans.",
  },
  {
    question: "Can I track the progress of my legal case through ?",
    answer:
      "Yes, you can track your case progress through our platform. We provide real-time updates and status tracking for all your legal matters.",
  },
  {
    question: "What types of legal issues can help with?",
    answer:
      "We can assist with various legal matters including civil cases, corporate law, family law, and more. Contact us for specific information about your case.",
  },
  {
    question: "Can I upload and manage legal documents on ?",
    answer:
      "Yes, our platform provides secure document management features where you can upload, store, and share legal documents safely.",
  },
  {
    question: "How can I find a lawyer using ?",
    answer:
      "Our platform makes it easy to find qualified lawyers. You can search based on expertise, location, and other criteria to find the right legal professional.",
  },
  {
    question: "How can I schedule a consultation with a lawyer?",
    answer:
      "You can schedule consultations directly through our platform. Simply select a lawyer and choose an available time slot that works for you.",
  },
  {
    question: "Is Naseh available 24/7?",
    answer:
      "While our platform is accessible 24/7, lawyer availability may vary. Emergency support is available for urgent legal matters.",
  },
  {
    question: "How secure is my information on ?",
    answer:
      "We implement industry-standard security measures to protect your data. All information is encrypted and stored securely.",
  },
  {
    question: "How do I contact customer support if I have issues with the app?",
    answer:
      "Our customer support team is available through the app's help center, email, or phone. We aim to respond to all queries within 24 hours.",
  },
]

export const lawyers: LawyerProfileType[] = [
  {
    id: 1,
    name: "Salawi Law Firm",
    image: dunne,
    description: "I Provide Specialized Legal Consultations In The Field Of Companies..",
    yearsExperience: "10-15",
    languages: ["Arabic", "English"],
  },
  {
    id: 2,
    name: "Saleh For Law",
    image: salehForLaw,
    description: "I Provide Specialized Legal Consultations In The Field Of Companies..",
    yearsExperience: "10-15",
    languages: ["Arabic", "English"],
  },
  {
    id: 3,
    name: "Al Ansari Law Firm",
    image: alAnsari,
    description: "I Provide Specialized Legal Consultations In The Field Of Companies..",
    yearsExperience: "10-15",
    languages: ["Arabic", "English"],
  },
  {
    id: 4,
    name: "Dunne Law Pllc",
    image: dunne,
    description: "I Provide Specialized Legal Consultations In The Field Of Companies..",
    yearsExperience: "10-15",
    languages: ["Arabic", "English"],
  },
  {
    id: 5,
    name: "Dunne Law",
    image: dunne,
    description: "I Provide Specialized Legal Consultations In The Field Of Companies..",
    yearsExperience: "10-15",
    languages: ["Arabic", "English"],
  },
]

export const lawyerFeatures: LawyerFeaturesType[] = [
  {
    title: "EXPAND YOUR CUSTOMER NETWORK",
  },
  {
    title: "FLEXIBLE CONSULTATION OPTIONS",
  },
  {
    title: "CONTROL YOUR SCHEDULE",
  },
  {
    title: "SECURE AND FAST PAYMENTS",
  },
  ]

export const features: FeatureCardType[] = [
  {
    title: "Here is the title of the feature or service in the",
    description:
      "Pioneering The First Qatari Online Legal Consultation Platform With The Largest Network Of Verified Lawyers Tailored To Your Every Needs.",
    image: statistics1,
  },
  {
    title: "Here is the title of the feature or service in the",
    description:
      "Choose The Legal Consultation Method That Suits You:video, Chat, Voice, Or Written. We're Here To Help.",
    image: transactions,
  },
  {
    title: "Here is the title of the feature or service in the",
    description:
      "A Group Of Lawyers Registered With The Ministry Of Justice. You Can Choose The Right Lawyer For You With Ease.",
    image: statistics1,
  },
]

export const contacts: ContactsType[] = [
  {
    Icon: MdOutlineMailOutline,
    label: "Get in touch",
    value: "XXXXXXXX",
  },
  {
    Icon: FaPhoneVolume,
    label: "Let's Talk",
    value: "XXXXXXXX",
  },
  {
    Icon: BsFillJournalBookmarkFill,
    label: "CR Number",
    value: "XXXXXXXX",
  },
  {
    Icon: CiLocationOn,
    label: "Location",
    value: "XXXXXXXX",
  },
]

export const socialLinks: SocialLinksType[] = [
  { Icon: FaXTwitter, href: "#", label: "Twitter", color:"" },
  { Icon: FaLinkedinIn , href: "#", label: "LinkedIn", color:"blue"},
  { Icon: FiInstagram , href: "#", label: "Instagram", color:"red" },
  { Icon: IoLogoYoutube , href: "#", label: "YouTube", color:"red" },
]

export const paymentMethods: PaymentMethodsType[] = [
  { label: "Google Pay", Icon: FaGooglePay,  href: "#", color:"red" },
  { label: "Apple Pay", Icon: FaApplePay,  href: "#", color:"" },
  { label: "Visa", Icon: SiVisa,  href: "#", color:"blue" },
  { label: "Mastercard", Icon: SiMastercard,  href: "#", color:"orange" },
]

export const footerColumns: FooterColumnType[] = [
  {
    title: "About",
    links: [
      { label: "About Us", href: "#about-us" },
      { label: "Blog", href: "#" },
      { label: "Lawyers", href: "#law-frim" },
      { label: "Services", href: "#services" },
      { label: "Community", href: "#commuinty" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact us", href: "#contact-us" },
      { label: "Online Chat", href: "#" },
      { label: "Whatsapp", href: "#" },
    ],
  },
  {
    title: "Legal Links",
    links: [
      { label: "privacy policy", href: "#" },
      { label: "Terms and Conditions", href: "#" },
      { label: "Cooke policy", href: "#" },
    ],
  },
]