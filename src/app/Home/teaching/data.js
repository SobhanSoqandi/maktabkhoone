import { FaWallet, FaRegLightbulb, FaChalkboardTeacher } from 'react-icons/fa';

export const Herow = {
  imageSrc: '/images/teaching.jpg',
  title: 'دانشت رو به یک تجربه‌ی ماندگار تبدیل کن',
  subtitle: 'با مکتب‌خونه، تجربه و تخصصت رو به دوره‌ای ارزشمند تبدیل کن و به هزاران یادگیرنده کمک کن مسیر رشدشون رو پیدا کنن.',
  ctaLabel: 'شروع همکاری با مکتب‌خونه',
};

export const tWhyTeach = {
  title: 'تجربه‌ات ارزش به اشتراک گذاشتن داره',
  subtitle: 'ما مسیر ساخت و انتشار دوره رو ساده‌تر می‌کنیم تا تو روی چیزی که بهتر از همه بلدی تمرکز کنی: آموزش.',
  features: [
    {
      id: 'benefit',
      icon: FaWallet,
      title: 'درآمد از تخصصت',
      description: 'دانشت رو به یک دوره‌ی کاربردی تبدیل کن و از تجربه‌ای که به دست آوردی ارزش بساز.',
    },
    {
      id: 'impact',
      icon: FaRegLightbulb,
      title: 'اثرگذاری واقعی',
      description: 'به یادگیرنده‌ها کمک کن مهارت‌های تازه به دست بیارن و قدم بعدی مسیرشون رو بردارن.',
    },
    {
      id: 'teach',
      icon: FaChalkboardTeacher,
      title: 'آموزش به سبک خودت',
      description: 'موضوع، تجربه و روش تدریست رو انتخاب کن و محتوایی بساز که امضای خودت رو داشته باشه.',
    },
  ],
};

export const tSteps = {
  title: 'شروع همکاری در سه قدم',
  subtitle: 'مسیر ساده‌ای از ثبت درخواست تا انتشار دوره‌ات.',
  items: [
    { id: 'apply', step: '۱', title: 'ثبت درخواست مدرس', description: 'درخواستت رو در پنل مدرس ثبت کن تا تیم مکتب‌خونه باهات در ارتباط باشه.' },
    { id: 'plan', step: '۲', title: 'هماهنگی با تیم', description: 'درباره‌ی موضوع دوره و جزئیات همکاری با تیم مکتب‌خونه هماهنگ می‌شی.' },
    { id: 'publish', step: '۳', title: 'ساخت و انتشار دوره', description: 'محتوات رو آماده کن و دوره‌ات رو برای یادگیرنده‌ها منتشر کن.' },
  ],
};

export const Stats = [
  { id: 'signups', value: '+۲ هزار', label: 'مدرس و همکار' },
  { id: 'students', value: '+۱ میلیون', label: 'یادگیرنده' },
  { id: 'teachers', value: '+۱ هزار', label: 'دوره‌ی آموزشی' },
  { id: 'hours', value: '+۲ هزار', label: 'ساعت آموزش' },
];
