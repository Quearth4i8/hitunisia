// participants.data.ts

// This map is data, so it belongs with the data.


export const PARTICIPANT_GROUPS = [
  {
    country: 'القطرية',
    youthParticipants: [/* PDF lists -1, -2 */],
    leaders: ['حسين الحبابي - أمين صندوق بيوت الشباب القطرية عضو مجلس أمناء الاتحاد الدولي']
  },
  {
    country: 'البحرينية', // Added based on PDF
    youthParticipants: ['يوسف عبد اللطيف أحمد جاسم', 'إيمان حسين على سليمان'],
    leaders: []
  },
  {
    country: 'السودانية',
    youthParticipants: ['سارة بابكر أحمد حمد', 'إيلاف حسين محمد أحمد'], // Corrected spelling
    leaders: ['هاشم عبد الله الفكي - رئيس جمعية بيوت الشباب بالسودان عضو مجلس إدارة الاتحاد العربي']
  },
  {
    country: 'الفلسطينية',
    youthParticipants: ['وسيم حازم الغفري', 'محمد عدنان هجاج'], // Corrected spelling
    leaders: ['حسام الدباس - رئيس جمعية بيوت الشباب الفلسطينية نائب رئيس مجلس إدارة الاتحاد العربي']
  },
  {
    country: 'المصرية',
    youthParticipants: ['وسام على محمد أنور' /* PDF lists -1, -2 */],
    leaders: ['أشرف على عثمان - رئيس جمعية بيوت الشباب المصرية أمين عام الاتحاد العربي']
  },
  {
    country: 'الجزائرية',
    youthParticipants: ['عبد الجليل حناني', 'خيثر يوسفي', 'محمد أمين زيات', 'نذير دحومان'], // Corrected spelling
    leaders: [
      'الهادي منصور - رئيس الفيدرالية الجزائرية لبيوت الشباب عضو مجلس إدارة الاتحاد العربي',
      'سید احمد بن صديق - عضو الفيدرالية الجزائرية لبيوت الشباب'
    ]
  },
  {
    country: 'المغربية',
    youthParticipants: ['أزويرى يوسف', 'عبد العزيز العلوى'], // Corrected spelling
    leaders: ['عبد الحق العياسي - رئيس الجامعة الملكية لماوي الشباب نائب رئيس مجلس إدارة الاتحاد العربي'] // Corrected name
  },
  {
    country: 'الليبية',
    youthParticipants: [
      'الهاشمي إبراهيم فرج محمد',
      'أحمد رمضان مفتاح القديري',
      'علاء مجدي عبد الستار',
      'تميم عبد الكريم عامر',
      'رابح أسماعيل عبد الله رابح',
      'ملاك عمران أحمد',
      'شدروان علي خلف الله' // Corrected spelling
    ],
    leaders: [
      'الشيباني عبد الله - رئيس جمعية بيوت الشباب الليبية رئيس الاتحاد المغاربي لبيوت الشباب', // Combined titles from PDF
      'عبد السلام المختار - المدير التنفيذي لبيوت الشباب الليبية عضو مجلس أمناء الاتحاد الدولي'
    ]
  },
  {
    country: 'الموريتانية',
    youthParticipants: [/* PDF lists -1 */],
    leaders: ['محمد الأغظف سيدي حنن - مستشار بوزارة الشباب الموريتانية']
  },
  {
    country: 'التونسية',
    youthParticipants: [
      'فاتن عليات', // Corrected order per PDF columns
      'لؤي كلثوم',
      'محمد أمين ورفلي', // Corrected spelling
      'ريان السويسي', // Corrected order
      'أمير عبد اللاوي',
      'أيهم نائلي', // Corrected spelling
      'سامي جهين',
      'محمد أمين العريبي', // Corrected order
      'محمد عزیز سحنون', // Corrected order
      'تقوى مرزوق', // Corrected order
      'نور العين بوسفة', // Corrected order
      'المهدي الدريدي', // Corrected spelling & order
      'عزيز بجاوي', // Corrected order
      'يوسف قريع', // Corrected spelling & order
      'محمد عزيز بن موسى', // Corrected order
      'ياسين كرشاني' // Corrected order
    ],
    leaders: [
      'الأسعد العياري - أمين صندوق بيوت الشباب التونسية',
      'الصحبي العياري - عضو الهيئة م بيوت الشباب التونسية'
    ]
  },
  {
    country: 'الصومالية',
    youthParticipants: ['عبد الرشيد محي الدين'],
    leaders: [/* PDF lists كرار النوري as مستشار بوزارة الشباب العراقية, not Somali leader */]
  },
  {
    country: 'العراقية',
    youthParticipants: [/* PDF lists -1 */],
    leaders: ['كرار النوري - مستشار بوزارة الشباب العراقية'] // Moved from الصومالية
  }
];

export const GUESTS = {
  title: 'الضيوف',
  list: [ // Corrected list to match 'الضيوف' column exactly
    'كرار النوري',
    'محمد الأغظف سيدي حنن',
    'مختار بوعرقوب',
    'أشرف الراجحي',
    'محسن الحارثي',
    'بدر غنام الصويلحي',
    'هويدا خليل',
    'سید احمد بن صديق',
    'بلال الونيفي'
  ]
};

export const LECTURERS = {
  title: 'المحاضرون وكادر التأطير', // Corrected title
  list: [
    'الدكتورة نجلاء حرب',
    'الدكتور ممدوح رشوان',
    'الدكتورة ريما العباسي',
    'الأستاذة درة قويعة',
    'الأستاذة نبيلة العريبي',
    'الأستاذة إيناس عاشور',
    'الأستاذة سامية شلبي',
    'الأستاذة سماح الجامي',
    'المعيدة الفة السياري'
  ]
};