import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface MonthInPicturesItem {
  id: number;
  month: string;
  year: number;
  thumbnail: string;
  imageCount: number;
  images: string[];
}

export interface PressConferenceItem {
  id: number;
  title: string;
  youtubeLink: string;
  date: string;
}

export interface PressCoverageItem {
  id: number;
  summary: string;
  title: string;
  source: string;
  date: string;
  link: string;
  thumbnail: string;
}

export interface PressReleaseItem {
  id: number;
  title: string;
  date: string;
  content: string;
  thumbnail: string;
}

interface DataContextType {
  monthInPictures: MonthInPicturesItem[];
  pressConferences: PressConferenceItem[];
  pressCoverages: PressCoverageItem[];
  pressReleases: PressReleaseItem[];
  addMonthInPictures: (item: Omit<MonthInPicturesItem, 'id'>) => void;
  updateMonthInPictures: (id: number, item: Partial<MonthInPicturesItem>) => void;
  deleteMonthInPictures: (id: number) => void;
  addPressConference: (item: Omit<PressConferenceItem, 'id'>) => void;
  updatePressConference: (id: number, item: Partial<PressConferenceItem>) => void;
  deletePressConference: (id: number) => void;
  addPressCoverage: (item: Omit<PressCoverageItem, 'id'>) => void;
  updatePressCoverage: (id: number, item: Partial<PressCoverageItem>) => void;
  deletePressCoverage: (id: number) => void;
  addPressRelease: (item: Omit<PressReleaseItem, 'id'>) => void;
  updatePressRelease: (id: number, item: Partial<PressReleaseItem>) => void;
  deletePressRelease: (id: number) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

interface DataProviderProps {
  children: ReactNode;
}

const defaultMonthInPictures: MonthInPicturesItem[] = [
  {
    id: 1,
    month: "March 2026",
    year: 2026,
    thumbnail: "img2501.png",
    imageCount: 45,
    images: ["img2501.png", "img2501.png", "img2501.png", "img2501.png", "img2501.png"],
  },
  {
    id: 2,
    month: "February 2026",
    year: 2026,
    thumbnail: "img2502.png",
    imageCount: 38,
    images: ["img2502.png", "img2502.png", "img2502.png", "img2502.png"],
  },
  {
    id: 3,
    month: "January 2026",
    year: 2026,
    thumbnail: "img2503.png",
    imageCount: 52,
    images: ["img2503.png", "img2503.png", "img2503.png", "img2503.png", "img2503.png", "img2503.png"],
  },
  {
    id: 4,
    month: "December 2025",
    year: 2025,
    thumbnail: "img2504.png",
    imageCount: 41,
    images: ["img2504.png", "img2504.png", "img2504.png"],
  },
  {
    id: 5,
    month: "November 2025",
    year: 2025,
    thumbnail: "img2505.png",
    imageCount: 35,
    images: ["img2505.png", "img2505.png"],
  },
];

const defaultPressConferences: PressConferenceItem[] = [
  {
    id: 1,
    title: `DTU Press Conference on "AWARENESS ABOUT THE NEW ACADEMIC PROGRAMS AND INITIATIVES" 9th July -2025`,
    youtubeLink: "https://youtu.be/tN0GPM7RQRE",
    date: "2026-03-15",
  },
  {
    id: 2,
    title: "Technology Innovation Summit",
    youtubeLink: "https://youtube.com/watch?v=example2",
    date: "2026-02-20",
  },
];

const defaultPressCoverages: PressCoverageItem[] = [
  {
    "id": 1,
    "title": "DTU: Engineering curriculum to be aligned with SDGs, VC at international conference",
    "summary": "Delhi Technological University (DTU) vice-chancellor Prateek Sharma announced that the curriculum of all engineering courses will be aligned to Sustainable Development Goals (SDG) for ensuring sustainability through educational and research efforts.",
    "source": "Careers 360",
    "date": "2025-01-09",
    "link": "https://news.careers360.com/dtu-delhi-technological-university-engineering-curriculum-be-aligned-sustainable-development-goals-vice-chancellor/amp",
    "thumbnail": "image_1.png"
  },
  {
    "id": 2,
    "title": "DTU Scientists Develop Eco-Friendly Nanoparticles For Water Pollution Treatment",
    "summary": "DTU scientists led by Dr. Mohan Singh Mehata developed eco-friendly nanoparticles using natural extracts like tulsi and neem to treat water pollution, particularly in the Yamuna river.",
    "source": "Times of India",
    "date": "2025-01-18",
    "link": "https://timesofindia.indiatimes.com/city/delhi/dtu-scientists-develop-eco-friendly-nanoparticles-for-water-pollution-treatment/amp_articleshow/117361137.cms",
    "thumbnail": "N/A"
  },
  {
    "id": 3,
    "title": "Pradhan Calls for DTU-Led Initiative Uniting IIT Delhi, DU, and IP University for Clean Delhi",
    "summary": "Education Minister Dharmendra Pradhan emphasized DTU's role in driving digital education and called for a collaboration between major Delhi universities to address the city's cleanliness.",
    "source": "Shiksha",
    "date": "2025-02-21",
    "link": "https://www.shiksha.com/news/engineering-pradhan-calls-for-dtu-led-initiative-uniting-iit-delhi-du-and-ip-university-for-clean-delhi-blogId-191178",
    "thumbnail": "N/A"
  },
  {
    "id": 4,
    "title": "Delhi Technological University (DTU) tech fest: Robosoccer and Samurai vibes take over!",
    "summary": "DTU's annual tech fest 'Invictus' featured a Japanese Samurai theme with over 80 events including robotics and hackathons, attracting over 15,000 students.",
    "source": "Hindustan Times",
    "date": "2025-02-22",
    "link": "https://www.hindustantimes.com/htcity/htcity-delhi-junction/delhi-technological-university-dtu-tech-fest-robosoccer-and-samurai-vibes-take-over-101740135552848-amp.html",
    "thumbnail": "image_2.png"
  },
  {
    "id": 5,
    "title": "Paytm Foundation Partners with DTU to Provide Computer Skills Training",
    "summary": "Launch of 'Wisdom on Wheels', a mobile learning bus to provide a certified 3-month basic computer course to underserved students in Delhi/NCR.",
    "source": "Passionate in Marketing",
    "date": "2025-02-24",
    "link": "https://www.passionateinmarketing.com/paytm-foundation-partners-with-delhi-technological-university-to-provide-computer-skills-training-to-underserved-students-launches-wisdom-on-wheels/",
    "thumbnail": "N/A"
  },
  {
    "id": 6,
    "title": "Stones thrown at Sonu Nigam during concert at DTU Engifest",
    "summary": "Chaos ensued at DTU's annual cultural fest 'Engifest' during a performance by singer Sonu Nigam, with reports of objects being thrown at the stage.",
    "source": "Hindustan Times",
    "date": "2025-03-23",
    "link": "https://www.hindustantimes.com/htcity/htcity-delhi-junction/stones-thrown-at-sonu-nigam-during-concert-at-delhi-technological-university-engifest-singer-pleads-aisa-na-kariye-101742812299574.html",
    "thumbnail": "image_4.png"
  },
  {
    "id": 7,
    "title": "Sonu Nigam shuts down stone-pelting rumours at DTU concert",
    "summary": "Following reports of stone-pelting, the singer clarified the actual events that took place during the Engifest concert.",
    "source": "Economic Times",
    "date": "2025-03-26",
    "link": "https://economictimes.indiatimes.com/magazines/panache/sonu-nigam-shuts-down-stone-pelting-rumours-at-delhi-tech-university-concert-reveals-what-actually-hit-the-stage-/articleshow/119527495.cms?from=mdr",
    "thumbnail": "image_5.png"
  },
  {
    "id": 8,
    "title": "Not Stones, Sonu Nigam Reveals What Was Thrown At Him At Delhi College Fest",
    "summary": "Sonu Nigam clarifies that a vape was thrown on stage during his DTU performance, not stones as previously rumored.",
    "source": "NDTV",
    "date": "2025-03-26",
    "link": "https://www.ndtv.com/entertainment/sonu-nigam-denies-dtu-stone-pelting-at-concert-jokes-about-pookie-band-8013229",
    "thumbnail": "image_6.png"
  },
  {
    "id": 9,
    "title": "University of Houston partnership with Delhi Technological University",
    "summary": "DTU signed an MoU with the University of Houston to enhance academic cooperation and global research initiatives.",
    "source": "Indian Express",
    "date": "2025-03-26",
    "link": "https://indianexpress.com/article/education/study-abroad/university-houston-partnership-delhi-technological-university-9914035/",
    "thumbnail": "N/A"
  },
  {
    "id": 10,
    "title": "University of Houston and DTU sign MOU to enhance academic cooperation",
    "summary": "A detailed report on the academic partnership between the two institutions focusing on joint research and exchange programs.",
    "source": "India Today",
    "date": "2025-03-31",
    "link": "https://bestcolleges.indiatoday.in/news-detail/university-of-houston-and-dtu-sign-mou-to-enhance-academic-cooperation",
    "thumbnail": "N/A"
  },
  {
    "id": 11,
    "title": "Minister Ashwini Vaishnaw inaugurates semiconductor centre at DTU",
    "summary": "Union Minister Ashwini Vaishnaw launched the semiconductor centre at DTU, highlighting the push for AI and startups in the tech ecosystem.",
    "source": "News On Air",
    "date": "2025-04-07",
    "link": "https://www.newsonair.gov.in/minister-ashwini-vaishnaw-inaugurates-semiconductor-centre-at-dtu-highlights-ai-startup-push/",
    "thumbnail": "N/A"
  },
  {
    "id": 12,
    "title": "DTU inaugurates Vinod Dham Centre of Excellence in semiconductors",
    "summary": "The centre aims to drive innovation in semiconductors and microelectronics, named after DTU alumnus Vinod Dham.",
    "source": "Shiksha",
    "date": "2025-04-08",
    "link": "https://www.shiksha.com/news/engineering-dtu-inaugurates-vinod-dham-centre-of-excellence-to-drive-innovation-in-semiconductors-and-microelectronics-blogId-195584",
    "thumbnail": "N/A"
  },
  {
    "id": 13,
    "title": "DTU BTech, LLB, MTech courses: 20% seats for women's quota",
    "summary": "DTU announced a 20% seat reservation for women across various engineering and law courses to promote gender diversity.",
    "source": "Careers 360",
    "date": "2025-04-23",
    "link": "https://news.careers360.com/dtu-delhi-technological-university-btech-llb-mtech-course-20-pc-seats-womens-quota-engineering-society-faculty-cut-off-placements/amp",
    "thumbnail": "N/A"
  },
  {
    "id": 14,
    "title": "DTU signs MoU with SAU to advance joint efforts in R&D and sustainability",
    "summary": "South Asian University and DTU collaborate for research and development initiatives focused on education and sustainable goals.",
    "source": "Shiksha",
    "date": "2025-04-23",
    "link": "https://www.shiksha.com/news/engineering-dtu-signs-mou-with-sau-to-advance-joint-efforts-in-r-d-sustainability-and-education-blogId-197132",
    "thumbnail": "N/A"
  },
  {
    "id": 15,
    "title": "Vinod Dham, DTU alumnus, honoured with Padma Bhushan 2025",
    "summary": "Recognized as the 'Father of Pentium Chip', DTU alumnus Vinod Dham received one of India's highest civilian awards.",
    "source": "Shiksha",
    "date": "2025-04-29",
    "link": "https://www.shiksha.com/news/engineering-vinod-dham-father-of-pentium-chip-and-dtu-alumnus-honoured-with-padma-bhushan-2025-blogId-197660",
    "thumbnail": "N/A"
  },
  {
    "id": 16,
    "title": "DTU researchers build AI system to detect fake news and deepfakes",
    "summary": "Innovative AI tool developed to combat misinformation and deepfakes, with a public app slated for release.",
    "source": "ETV Bharat",
    "date": "2025-05-10",
    "link": "https://www.etvbharat.com/amp/en/!technology/dtu-researchers-build-ai-system-to-detect-fake-news-deep-fakes-hate-speech-public-app-coming-soon-enn25051001462",
    "thumbnail": "N/A"
  },
  {
    "id": 17,
    "title": "JAC Delhi 2025 Counselling: DTU allows NIOS students to apply",
    "summary": "DTU opens admission round 2 for students from NIOS backgrounds with valid JEE Main scores.",
    "source": "Careers 360",
    "date": "2025-06-12",
    "link": "https://news.careers360.com/jac-delhi-2025-counselling-dtu-allows-nios-students-valid-jee-main-scores-apply-for-round-2-jacdelhi-admissions-nic-in/amp",
    "thumbnail": "N/A"
  },
  {
    "id": 18,
    "title": "DTU launches new BTech and MTech programs focused on community development",
    "summary": "New academic programs launched to bridge the gap between technical education and social community impact.",
    "source": "Hindustan Hindi",
    "date": "2025-07-09",
    "link": "https://www.livehindustan.com/ncr/new-delhi/story-dtu-launches-new-b-tech-and-m-tech-programs-focuses-on-community-development-and-global-collaboration-201752059045495.amp.html",
    "thumbnail": "N/A"
  },
  {
    "id": 19,
    "title": "DTU to launch research park and expand global ties: VC",
    "summary": "Vice-chancellor announces the establishment of a Research Park to foster innovation and entrepreneurship on campus.",
    "source": "Economic Times",
    "date": "2025-07-09",
    "link": "https://education.economictimes.indiatimes.com/amp/news/higher-education/dtu-to-launch-research-park-expand-digital-education-forge-global-ties-vc/122342335",
    "thumbnail": "N/A"
  },
  {
    "id": 20,
    "title": "DTU to set up Research Park to boost innovation",
    "summary": "Institution highlights plans for a dedicated space for digital learning and international academic partnerships.",
    "source": "India Today",
    "date": "2025-07-09",
    "link": "https://www.indiatoday.in/education-today/news/story/dtu-to-set-up-research-park-expand-digital-learning-and-global-partnerships-2753585-2025-07-10",
    "thumbnail": "N/A"
  },
  {
    "id": 21,
    "title": "DTU launches BTech in Cybersecurity, Data Analytics, VLSI",
    "summary": "Three new specialized BTech programs introduced to cater to emerging technology sectors.",
    "source": "Careers 360",
    "date": "2025-07-09",
    "link": "https://www.google.com/amp/s/news.careers360.com/dtu-launches-btech-in-cybersecurity-data-analytics-vlsi-admissions-through-gate-for-mtech-courses/amp",
    "thumbnail": "N/A"
  },
  {
    "id": 22,
    "title": "DTU deepens global ties with US and unveils research initiatives",
    "summary": "Strategic international collaborations announced to enhance innovation and digital inclusion.",
    "source": "Times of India",
    "date": "2025-07-11",
    "link": "https://timesofindia.indiatimes.com/education/news/dtu-deepens-global-ties-with-us-and-unveils-research-initiatives-to-boost-education-innovation-and-digital-inclusion/amp_articleshow/122378027.cms",
    "thumbnail": "N/A"
  },
  {
    "id": 23,
    "title": "DTU registration 2025 for BTech odd semesters begins",
    "summary": "Formal opening of the registration process for the 2025 academic session.",
    "source": "Hindustan Times",
    "date": "2025-07-11",
    "link": "https://www.hindustantimes.com/education/admissions/delhi-technological-university-dtu-registration-2025-for-btech-odd-semesters-begins-today-check-details-101752206279402-amp.html",
    "thumbnail": "N/A"
  },
  {
    "id": 24,
    "title": "DTU strengthens defence collaborations, launches Geospatial Tech department",
    "summary": "New department established to work closely with national security and defence agencies.",
    "source": "Shiksha",
    "date": "2025-07-16",
    "link": "https://www.shiksha.com/news/engineering-dtu-strengthens-defence-collaborations-launches-geospatial-tech-department-and-expands-global-ties-vc-prateek-sharma-blogId-205660",
    "thumbnail": "N/A"
  },
  {
    "id": 25,
    "title": "DTU implements biometric attendance for PhD fellowship",
    "summary": "Strict monitoring introduced for researchers to maintain eligibility for institutional fellowships.",
    "source": "Times of India",
    "date": "2025-08-13",
    "link": "https://timesofindia.indiatimes.com/city/delhi/dtu-implements-biometric-attendance-for-phd-fellowship-eligibility/amp_articleshow/123282715.cms",
    "thumbnail": "N/A"
  },
  {
    "id": 26,
    "title": "Edu Minister inaugurates clean energy laboratory at DTU",
    "summary": "Minister Ashish Sood launched the Yogi Goswami Clean Energy Lab focused on sustainable power solutions.",
    "source": "The Tribune / Times of India",
    "date": "2025-09-08",
    "link": "https://www.google.com/amp/s/timesofindia.indiatimes.com/city/delhi/dtu-inaugurates-clean-energy-laboratory-to-boost-innovation-and-research/amp_articleshow/123767160.cms",
    "thumbnail": "N/A"
  },
  {
    "id": 27,
    "title": "Clean energy is today's responsibility: Ashish Sood at DTU",
    "summary": "Inauguration event of a specialized green lab for research into renewable energy technologies.",
    "source": "The Statesman",
    "date": "2025-09-08",
    "link": "https://www.google.com/amp/s/www.thestatesman.com/cities/clean-energy-is-todays-responsibility-not-tomorrows-dream-ashish-sood-1503483087.html/amp",
    "thumbnail": "N/A"
  },
  {
    "id": 28,
    "title": "DDA seeks technical help from IIT and DTU for basement flooding",
    "summary": "Government authority partners with DTU experts to solve drainage issues in Dwarka apartments.",
    "source": "Times of India",
    "date": "2025-10-09",
    "link": "https://timesofindia.indiatimes.com/city/delhi/dda-seeks-technical-help-from-iit-and-dtu-after-basement-flooding-dwarka-apartments/amp_articleshow/124395545.cms",
    "thumbnail": "N/A"
  },
  {
    "id": 29,
    "title": "DTU students win second position at DARPA Triage Challenge",
    "summary": "University team secures global recognition at a prestigious challenge held in Georgia, USA.",
    "source": "Education Times",
    "date": "2025-10-14",
    "link": "https://www.educationtimes.com/article/newsroom/99739867/dtu-students-win-second-position-at-darpa-triage-challenge-held-in-georgia",
    "thumbnail": "N/A"
  },
  {
    "id": 30,
    "title": "DTU partners with Indian Army to boost innovation",
    "summary": "Collaborative framework signed for defense research and self-reliance in technology.",
    "source": "Careers 360 / Times of India",
    "date": "2025-10-15",
    "link": "https://timesofindia.indiatimes.com/city/delhi/indian-army-collaborates-with-dtu-to-advance-defence-innovation-skill-development/amp_articleshow/124763861.cms",
    "thumbnail": "N/A"
  },
  {
    "id": 31,
    "title": "DTU study flags Delhi's polluting two-wheelers",
    "summary": "Research findings emphasize that vehicle age is a critical factor in the city's rising air pollution levels.",
    "source": "Times of India",
    "date": "2025-11-11",
    "link": "https://timesofindia.indiatimes.com/city/delhi/age-is-just-a-number-mileage-matters-more-dtu-study-flags-delhis-polluting-two-wheelers/amp_articleshow/125352852.cms",
    "thumbnail": "N/A"
  },
  {
    "id": 32,
    "title": "DTU opens PhD admissions for Jan 2026",
    "summary": "Official notification for researchers to join various technology departments for the upcoming winter cycle.",
    "source": "Times of India",
    "date": "2025-11-21",
    "link": "https://timesofindia.indiatimes.com/city/delhi/dtu-opens-phd-admissions-for-jan-2026/articleshow/125488038.cms",
    "thumbnail": "N/A"
  },
  {
    "id": 33,
    "title": "Three teams from DTU win Smart India Hackathon 2025",
    "summary": "Students emerge triumphant in the national-level coding competition with innovative social solutions.",
    "source": "Education Times / The Tribune",
    "date": "2025-12-13",
    "link": "https://www.tribuneindia.com/news/delhi/3-dtu-students-triumph-at-smart-india-hackathon/",
    "thumbnail": "N/A"
  },
  {
    "id": 34,
    "title": "DTU study says planting bamboo at Baansera improved air quality",
    "summary": "Research confirms that the 'Baansera' park acts as a green lung, significantly reducing pollution and heat.",
    "source": "Times of India / Hindustan Times",
    "date": "2025-12-18",
    "link": "https://www.hindustantimes.com/cities/delhi-news/bamboo-park-baansera-records-cleaner-air-lower-heat-than-delhi-greens-dtu-study-101765995068819-amp.html",
    "thumbnail": "N/A"
  },
  {
    "id": 35,
    "title": "DTU, Bajaj Auto to set up training centre for skill development",
    "summary": "Corporate-academic partnership to enhance vocational training for engineering students.",
    "source": "The Tribune",
    "date": "2025-12-20",
    "link": "https://www.google.com/amp/s/www.tribuneindia.com/news/delhi/dtu-bajaj-auto-to-set-up-training-centre-to-enhance-skill-development/amp",
    "thumbnail": "N/A"
  }
]

const defaultPressReleases: PressReleaseItem[] = [
  {
    id: 1,
    title: "DTU Studio Launches New Initiative",
    date: "2026-03-01",
    content: "We are excited to announce...",
    thumbnail: "img2501.png",
  },
  {
    id: 2,
    title: "Quarterly Results Released",
    date: "2026-01-15",
    content: "Our quarterly results show...",
    thumbnail: "img2502.png",
  },
];

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [monthInPictures, setMonthInPictures] = useState<MonthInPicturesItem[]>([]);
  const [pressConferences, setPressConferences] = useState<PressConferenceItem[]>([]);
  const [pressCoverages, setPressCoverages] = useState<PressCoverageItem[]>([]);
  const [pressReleases, setPressReleases] = useState<PressReleaseItem[]>([]);

  useEffect(() => {
    const storedMonthInPictures = localStorage.getItem('monthInPictures');
    const storedPressConferences = localStorage.getItem('pressConferences');
    const storedPressCoverages = localStorage.getItem('pressCoverages');
    const storedPressReleases = localStorage.getItem('pressReleases');

    setMonthInPictures(storedMonthInPictures ? JSON.parse(storedMonthInPictures) : defaultMonthInPictures);
    setPressConferences(storedPressConferences ? JSON.parse(storedPressConferences) : defaultPressConferences);
    setPressCoverages(storedPressCoverages ? JSON.parse(storedPressCoverages) : defaultPressCoverages);
    setPressReleases(storedPressReleases ? JSON.parse(storedPressReleases) : defaultPressReleases);
  }, []);

  const saveToStorage = (key: string, data: any) => {
    localStorage.setItem(key, JSON.stringify(data));
  };

  const addMonthInPictures = (item: Omit<MonthInPicturesItem, 'id'>) => {
    const newItem = { ...item, id: Date.now() };
    const updated = [...monthInPictures, newItem];
    setMonthInPictures(updated);
    saveToStorage('monthInPictures', updated);
  };

  const updateMonthInPictures = (id: number, item: Partial<MonthInPicturesItem>) => {
    const updated = monthInPictures.map(m => m.id === id ? { ...m, ...item } : m);
    setMonthInPictures(updated);
    saveToStorage('monthInPictures', updated);
  };

  const deleteMonthInPictures = (id: number) => {
    const updated = monthInPictures.filter(m => m.id !== id);
    setMonthInPictures(updated);
    saveToStorage('monthInPictures', updated);
  };

  const addPressConference = (item: Omit<PressConferenceItem, 'id'>) => {
    const newItem = { ...item, id: Date.now() };
    const updated = [...pressConferences, newItem];
    setPressConferences(updated);
    saveToStorage('pressConferences', updated);
  };

  const updatePressConference = (id: number, item: Partial<PressConferenceItem>) => {
    const updated = pressConferences.map(p => p.id === id ? { ...p, ...item } : p);
    setPressConferences(updated);
    saveToStorage('pressConferences', updated);
  };

  const deletePressConference = (id: number) => {
    const updated = pressConferences.filter(p => p.id !== id);
    setPressConferences(updated);
    saveToStorage('pressConferences', updated);
  };

  const addPressCoverage = (item: Omit<PressCoverageItem, 'id'>) => {
    const newItem = { ...item, id: Date.now() };
    const updated = [...pressCoverages, newItem];
    setPressCoverages(updated);
    saveToStorage('pressCoverages', updated);
  };

  const updatePressCoverage = (id: number, item: Partial<PressCoverageItem>) => {
    const updated = pressCoverages.map(p => p.id === id ? { ...p, ...item } : p);
    setPressCoverages(updated);
    saveToStorage('pressCoverages', updated);
  };

  const deletePressCoverage = (id: number) => {
    const updated = pressCoverages.filter(p => p.id !== id);
    setPressCoverages(updated);
    saveToStorage('pressCoverages', updated);
  };

  const addPressRelease = (item: Omit<PressReleaseItem, 'id'>) => {
    const newItem = { ...item, id: Date.now() };
    const updated = [...pressReleases, newItem];
    setPressReleases(updated);
    saveToStorage('pressReleases', updated);
  };

  const updatePressRelease = (id: number, item: Partial<PressReleaseItem>) => {
    const updated = pressReleases.map(p => p.id === id ? { ...p, ...item } : p);
    setPressReleases(updated);
    saveToStorage('pressReleases', updated);
  };

  const deletePressRelease = (id: number) => {
    const updated = pressReleases.filter(p => p.id !== id);
    setPressReleases(updated);
    saveToStorage('pressReleases', updated);
  };

  return (
    <DataContext.Provider value={{
      monthInPictures,
      pressConferences,
      pressCoverages,
      pressReleases,
      addMonthInPictures,
      updateMonthInPictures,
      deleteMonthInPictures,
      addPressConference,
      updatePressConference,
      deletePressConference,
      addPressCoverage,
      updatePressCoverage,
      deletePressCoverage,
      addPressRelease,
      updatePressRelease,
      deletePressRelease,
    }}>
      {children}
    </DataContext.Provider>
  );
};