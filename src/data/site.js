const DEP = 'https://fanamoozan.com/dep'
const UP = 'https://fanamoozan.com/wp-content/uploads'

export const site = {
  brand: 'آموزشگاه فنی و حرفه‌ای فن‌آموزان',
  tagline: 'دارای مجوز رسمی سازمان آموزش فنی و حرفه‌ای کشور',
  phone: '۰۲۱۹۱۳۲۱۰۰۱',
  phoneHref: 'tel:02191321001',
  address: 'تهران، خیابان آزادی، نبش خیابان بهبودی، پلاک ۵۶',
  email: 'info@fanamoozan.com',
}

export const navLinks = [
  { label: 'دوره‌ها', href: '#courses', hasMenu: true },
  { label: 'برنامه کلاس‌ها', href: '#schedule' },
  { label: 'شهریه دوره‌ها', href: '#tuition' },
  { label: 'اشتغال', href: '#employment' },
  { label: 'مجله', href: '#magazine' },
  { label: 'تماس با ما', href: '#contact' },
]

export const socials = [
  { label: 'اینستاگرام', href: '#instagram', icon: 'instagram' },
  { label: 'تلگرام', href: '#telegram', icon: 'telegram' },
  { label: 'یوتیوب', href: '#youtube', icon: 'youtube' },
]

export const benefits = [
  { label: 'کار عملی در کارگاه', icon: 'workshop' },
  { label: 'پشتیبانی نامحدود', icon: 'support' },
  { label: 'ارائه مدرک بین‌المللی', icon: 'certificate' },
  { label: 'ارائه خوابگاه رایگان', icon: 'dorm' },
  { label: 'معرفی به کار از سامانه اشتغال فن‌آموزان', icon: 'briefcase' },
  { label: 'دوره‌های حضوری و مجازی', icon: 'hybrid' },
]

export const stats = [
  { value: '۲۴٬۰۰۰+', label: 'دانش‌آموخته' },
  { value: '۱۸۰+', label: 'دوره تخصصی' },
  { value: '۹۴٪', label: 'اشتغال پس از دوره' },
  { value: '۶', label: 'شعبه در کشور' },
]

export const heroOrbit = [
  { name: 'تاسیسات', person: 'مسعود انصاری', icon: `${DEP}/tasisat.webp`, accent: '#4f9dff' },
  { name: 'صنایع دستی', person: 'فاطمه امینی', icon: `${DEP}/handmade.webp`, accent: '#ff5d8f' },
  { name: 'اتومکانیک', person: 'علی باغنده', icon: `${DEP}/mechanic.webp`, accent: '#ff7a59' },
  { name: 'برد و الکترونیک', person: 'آتوسا محمدی', icon: `${DEP}/electronic.webp`, accent: '#00a896' },
  { name: 'صنایع چوب', person: 'نارین صفری', icon: `${DEP}/axe.webp`, accent: '#b3813f' },
  { name: 'علوم مالی', person: 'سارا کریمی', icon: `${DEP}/accounting.webp`, accent: '#7c6cff' },
]

export const departments = [
  { name: 'دپارتمان برق', desc: 'برق صنعتی، PLC و تابلوبرق', icon: `${DEP}/bargh.webp` },
  { name: 'دپارتمان اتومکانیک', desc: 'ECU، انژکتور و برق خودرو', icon: `${DEP}/mechanic.webp` },
  { name: 'دپارتمان تاسیسات', desc: 'موتورخانه، پکیج و کولر گازی', icon: `${DEP}/tasisat.webp` },
  { name: 'دپارتمان فناوری اطلاعات', desc: 'برنامه‌نویسی، شبکه و دیجیتال‌مارکتینگ', icon: `${DEP}/computer.webp` },
  { name: 'دپارتمان هنر', desc: 'گرافیک، نقاشی و هنرهای تجسمی', icon: `${DEP}/art.webp` },
  { name: 'دپارتمان صنایع دستی', desc: 'چرم، سفال و رشته‌های دست‌ساز', icon: `${DEP}/handmade.webp` },
  { name: 'دپارتمان جوش و برش', desc: 'آرگون، CO₂ و بازرسی جوش', icon: `${DEP}/welding.webp` },
  { name: 'دپارتمان صنایع غذایی', desc: 'آشپزی ملل، قنادی و باریستا', icon: `${DEP}/foodcake.webp` },
  { name: 'دپارتمان صنایع چوب', desc: 'کابینت، منبت و دکوراسیون چوبی', icon: `${DEP}/axe.webp` },
  { name: 'دپارتمان علوم مالی', desc: 'حسابداری بازار کار و نرم‌افزارهای مالی', icon: `${DEP}/accounting.webp` },
]

export const courses = [
  {
    title: 'آموزش تعمیرات موبایل',
    dept: 'دوره‌های تعمیرات',
    image: `${UP}/2020/12/%D8%A2%D9%85%D9%88%D8%B2%D8%B4-%D8%AA%D8%B9%D9%85%DB%8C%D8%B1%D8%A7%D8%AA-%D9%85%D9%88%D8%A8%D8%A7%DB%8C%D9%84-2.webp`,
  },
  {
    title: 'آموزش تعمیرات لپ تاپ',
    dept: 'دپارتمان برق',
    image: `${UP}/2020/12/%D8%A2%D9%85%D9%88%D8%B2%D8%B4-%D8%AA%D8%B9%D9%85%DB%8C%D8%B1%D8%A7%D8%AA-%D9%84%D9%BE-%D8%AA%D8%A7%D9%BE.webp`,
  },
  {
    title: 'آموزش تعمیرات لوازم خانگی',
    dept: 'دپارتمان برق',
    image: `${UP}/2020/12/%D8%A2%D9%85%D9%88%D8%B2%D8%B4-%D8%AA%D8%B9%D9%85%DB%8C%D8%B1%D8%A7%D8%AA-%D9%84%D9%88%D8%A7%D8%B2%D9%85-%D8%AE%D8%A7%D9%86%DA%AF%DB%8C.webp`,
  },
  {
    title: 'آموزش مکانیک خودرو',
    dept: 'دپارتمان اتومکانیک',
    image: `${UP}/2023/01/%D8%A2%D9%85%D9%88%D8%B2%D8%B4-%D9%85%DA%A9%D8%A7%D9%86%DB%8C%DA%A9-%D8%AE%D9%88%D8%AF%D8%B1%D9%88.webp`,
  },
  {
    title: 'آموزش برق خودرو',
    dept: 'الکترونیک اتومبیل',
    image: `${UP}/2025/09/%D8%A2%D9%85%D9%88%D8%B2%D8%B4-%D8%A8%D8%B1%D9%82-%D8%AE%D9%88%D8%AF%D8%B1%D9%88.webp`,
  },
  {
    title: 'آموزش تعمیرات ایسیو',
    dept: 'الکترونیک اتومبیل',
    image: `${UP}/2025/09/%D8%A2%D9%85%D9%88%D8%B2%D8%B4-%D8%AA%D8%B9%D9%85%DB%8C%D8%B1%D8%A7%D8%AA-%D8%A7%DB%8C%D8%B3%DB%8C%D9%88.webp`,
  },
  {
    title: 'آموزش صافکاری (PDR و سنتی)',
    dept: 'دپارتمان اتومکانیک',
    image: `${UP}/2023/01/%D8%A2%D9%85%D9%88%D8%B2%D8%B4-%D8%B5%D8%A7%D9%81%DA%A9%D8%A7%D8%B1%DB%8C-%D8%AE%D9%88%D8%AF%D8%B1%D9%88.webp`,
  },
  {
    title: 'آموزش کارشناسی رنگ خودرو',
    dept: 'دپارتمان اتومکانیک',
    image: `${UP}/2023/01/%D8%A2%D9%85%D9%88%D8%B2%D8%B4-%DA%A9%D8%A7%D8%B1%D8%B4%D9%86%D8%A7%D8%B3%DB%8C-%D8%B1%D9%86%DA%AF-%D8%AE%D9%88%D8%AF%D8%B1%D9%88.webp`,
  },
  {
    title: 'آموزش نقاشی خودرو',
    dept: 'دپارتمان اتومکانیک',
    image: `${UP}/2023/01/%D8%A2%D9%85%D9%88%D8%B2%D8%B4-%D9%86%D9%82%D8%A7%D8%B4%DB%8C-%D8%AE%D9%88%D8%AF%D8%B1%D9%88.webp`,
  },
  {
    title: 'آموزش برق ساختمان',
    dept: 'دپارتمان برق',
    image: `${UP}/2022/02/%D8%A2%D9%85%D9%88%D8%B2%D8%B4-%D8%A8%D8%B1%D9%82-%D8%B3%D8%A7%D8%AE%D8%AA%D9%85%D8%A7%D9%86.webp`,
  },
]

export const footerColumns = [
  {
    title: 'دپارتمان‌ها',
    links: ['برق و الکترونیک', 'اتومکانیک', 'تاسیسات', 'فناوری اطلاعات', 'هنر و صنایع دستی'],
  },
  {
    title: 'دسترسی سریع',
    links: ['دوره‌ها', 'برنامه کلاس‌ها', 'شهریه دوره‌ها', 'مجله فن‌آموزان', 'درباره ما'],
  },
  {
    title: 'خدمات',
    links: ['مشاوره رایگان', 'سامانه اشتغال', 'شعب ما', 'پنل کاربری', 'تماس با ما'],
  },
]

// Latin digits → Persian digits, used by the countdown timer.
export function toFa(value) {
  return String(value).replace(/\d/g, (d) => '۰۱۲۳۴۵۶۷۸۹'[Number(d)])
}
