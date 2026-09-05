import { FaUserAltSlash, FaUserShield } from 'react-icons/fa';
import { GiTeacher } from 'react-icons/gi';

export const Herow = {
  imageSrc: '/images/teaching.jpg',
  title: 'دیگه وقتشه دوره‌ی خودت رو بسازی',
  subtitle: 'چون تدریس در مکتب‌خونه از همیشه راحت‌تر شده',
  ctaLabel: 'شروع تدریس در مکتب‌خونه',
};

export const tWhyTeach = {
  title: 'چرا باید تدریس در مکتب‌خونه را شروع کنم؟',
  features: [
    {
      id: 'benefit',
      icon: <FaUserAltSlash />,
      title: 'از مزایای آن بهره‌مند شو',
      description:
        'شبکه کاری و تخصصی خودت رو گسترش بده، در کنار برترین اساتید قرار بگیر و کسب درآمد کن',
    },
    {
      id: 'impact',
      icon: <FaUserShield />,
      title: 'زندگی دیگران رو متحول کن',
      description:
        'با آموزش آنلاین به دیگران کمک کن تا علایق خودشون رو پیدا و در مسیر شغلی خود پیشرفت کنند',
    },
    {
      id: 'teach',
      icon: <GiTeacher />,
      title: 'به سبک خودت آموزش بده',
      description:
        'موضوعی که دوست داری رو انتخاب کن و به روشی که دوست داری ارائه بده',
    },
  ],
};

export const Stats = [
  { id: 'signups', value: '+۲ هزار', label: 'ثبت‌نام' },
  { id: 'students', value: '+۱ میلیون', label: 'دانشجو' },
  { id: 'teachers', value: '+۱ هزار', label: 'استاد' },
  { id: 'hours', value: '+۲ هزار', label: 'ساعت آموزش' },
];
