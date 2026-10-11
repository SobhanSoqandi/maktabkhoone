import { FaWallet, FaRegLightbulb, FaChalkboardTeacher } from 'react-icons/fa';

export const Herow = {
  imageSrc: '/images/teaching.jpg',
  title: 'دانشت رو به یک تجربه‌ی ماندگار تبدیل کن',
  subtitle: 'با مکتب‌خونه، تجربه و تخصصت رو به دوره‌ای ارزشمند تبدیل کن و به هزاران یادگیرنده کمک کن مسیر رشدشون رو پیدا کنن.',
  ctaLabel: 'شروع همکاری با مکتب‌خونه',
};

export const tWhyTeach = {
  eyebrow: 'چرا مکتب‌خونه؟',
  title: 'تجربه‌ات ارزش به اشتراک گذاشتن داره',
  subtitle: 'ما مسیر ساخت و انتشار دوره رو ساده‌تر می‌کنیم تا تو روی چیزی که بهتر از همه بلدی تمرکز کنی: آموزش.',
  features: [
    {
      id: 'benefit',
      icon: FaWallet,
      title: 'درآمد از تخصصت',
      description: 'دانشت رو به یک دوره‌ی کاربردی تبدیل کن و از تجربه‌ای که به دست آوردی ارزش بساز.',
      number: '۰۱',
    },
    {
      id: 'impact',
      icon: FaRegLightbulb,
      title: 'اثرگذاری واقعی',
      description: 'به یادگیرنده‌ها کمک کن مهارت‌های تازه به دست بیارن و قدم بعدی مسیرشون رو بردارن.',
      number: '۰۲',
    },
    {
      id: 'teach',
      icon: FaChalkboardTeacher,
      title: 'آموزش به سبک خودت',
      description: 'موضوع، تجربه و روش تدریست رو انتخاب کن و محتوایی بساز که امضای خودت رو داشته باشه.',
      number: '۰۳',
    },
  ],
};

export const Stats = [
  { id: 'signups', value: '+۲ هزار', label: 'مدرس و همکار' },
  { id: 'students', value: '+۱ میلیون', label: 'یادگیرنده' },
  { id: 'teachers', value: '+۱ هزار', label: 'دوره‌ی آموزشی' },
  { id: 'hours', value: '+۲ هزار', label: 'ساعت آموزش' },
];
