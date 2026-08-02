import { Project, Service, StatItem, ProcessStep, SkillItem, Testimonial, ClientBrand } from '../types';
import heroMockupPath from '../assets/images/hero_graphic_mockup_1785711220525.jpg';
import portraitPath from '../assets/images/designer_portrait_1785711234373.jpg';

export const DESIGNER_INFO = {
  name: 'Adebolu Miracle Bolutife',
  brandName: 'MOCREATIVES',
  shortName: 'Miracle Adebolu',
  title: 'Senior Graphic Designer & Brand Strategist',
  headline: 'I Turn Ideas Into Visual Experiences.',
  tagline: 'Crafting bold visual identities, high-impact print collateral, social media art, and intuitive digital interfaces that elevate brands.',
  bio: 'I am a multidimensional graphic designer based in Abuja, Nigeria. Over the past 4+ years, I have helped brands, startups, and creative entrepreneurs communicate with authority through purposeful visual identity, editorial print design, and engaging social content.',
  location: 'Abuja, Nigeria (House B128 Mararaba Loko / Asherifa)',
  primaryPhone: '09017522702',
  secondaryPhone: '08104468700',
  formattedPhones: ['+234 901 752 2702', '+234 810 446 8700'],
  email: 'adebolumimeetife17@gmail.com',
  socials: {
    instagram: 'https://instagram.com/mocrea_tives',
    instagramHandle: '@mocrea_tives',
    linkedin: 'https://linkedin.com/in/miracle-adebolu',
    linkedinHandle: 'Miracle Adebolu',
    driveFolder: 'https://drive.google.com/drive/folders/1mhtiyF4wEYZT3TZbmN6hvdUwDoou55XB',
    whatsapp: 'https://wa.me/2349017522702',
    behance: 'https://behance.net/miracleadebolu',
    dribbble: 'https://dribbble.net/mocreatives'
  },
  status: 'Available for freelance projects & brand retainers',
  heroMockup: heroMockupPath,
  portrait: portraitPath
};

export const STATS: StatItem[] = [
  {
    id: 'exp',
    value: 4,
    suffix: '+',
    label: 'Years Experience',
    description: 'Mastering brand strategy, print production, and social graphic art.'
  },
  {
    id: 'projects',
    value: 100,
    suffix: '+',
    label: 'Projects Completed',
    description: 'Delivered across branding, social media campaigns, posters, and UI visuals.'
  },
  {
    id: 'clients',
    value: 50,
    suffix: '+',
    label: 'Happy Clients',
    description: 'Entrepreneurs, startups, events, and corporate organizations worldwide.'
  },
  {
    id: 'brands',
    value: 10,
    suffix: '+',
    label: 'Brands Worked With',
    description: 'Long-term corporate retainers & high-growth venture identities.'
  }
];

export const SERVICES: Service[] = [
  {
    id: 'branding',
    title: 'Brand Identity',
    iconName: 'Palette',
    tagline: 'Building cohesive visual ecosystems',
    description: 'Crafting distinct visual identities from concept to master brand guidelines that set your business apart.',
    deliverables: [
      'Primary & Secondary Logos',
      'Comprehensive Brand Guidelines',
      'Color Palette & System',
      'Custom Typography Systems',
      'Visual Identity Assets',
      'Brand Collateral Templates'
    ],
    color: 'from-amber-500/20 to-orange-500/10'
  },
  {
    id: 'social',
    title: 'Social Media Design',
    iconName: 'Share2',
    tagline: 'High-engagement graphics & campaign art',
    description: 'Creating scroll-stopping social content that amplifies brand reach and drives organic engagement across all platforms.',
    deliverables: [
      'Instagram Grid & Story Layouts',
      'Social Media Ad Campaigns',
      'Promotional Graphic Banners',
      'Carousel Infographics',
      'Event Announcement Cards',
      'Custom Motion Graphics / Reels'
    ],
    color: 'from-rose-500/20 to-purple-500/10'
  },
  {
    id: 'print',
    title: 'Print Design',
    iconName: 'Printer',
    tagline: 'Tactile editorial & promotional print materials',
    description: 'High-resolution, print-ready collateral crafted with rigorous typography, bleeding margins, and tactile paper finishes.',
    deliverables: [
      'Event & Concert Posters',
      'Corporate Flyers & Pamphlets',
      'Luxury Business Cards',
      'Multi-Page Magazines & Brochures',
      'Large Format Vinyl Banners',
      'Custom Packaging & Labels'
    ],
    color: 'from-cyan-500/20 to-blue-500/10'
  },
  {
    id: 'ui-visual',
    title: 'UI / Visual Design',
    iconName: 'Layout',
    tagline: 'Pixel-perfect web & mobile interface visuals',
    description: 'Designing intuitive, aesthetically compelling digital layouts and web graphics optimized for high conversion.',
    deliverables: [
      'Website Visual Layouts',
      'Mobile App Interface Screens',
      'High-Converting Landing Pages',
      'Digital Product Design Systems',
      'Interactive Wireframes & Mockups',
      'Custom Vector Icons & Assets'
    ],
    color: 'from-emerald-500/20 to-teal-500/10'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'aura-botanicals',
    title: 'Aura Botanicals Identity & Packaging',
    subtitle: 'Organic Luxury Skincare Brand',
    category: 'Branding',
    year: '2025',
    client: 'Aura Organics Ltd.',
    thumbnail: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1200&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1600&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1608248597261-2624f1149463?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop'
    ],
    summary: 'Complete brand creation for an eco-conscious luxury skincare brand focused on minimalist elegance and sustainable materials.',
    challenge: 'Aura Botanicals needed to stand out in a saturated organic beauty market without resorting to cliché green leaf imagery.',
    process: 'We conducted deep market research on high-end cosmetics, curated a muted terracotta and sage color palette, and engineered a sleek serif wordmark with custom botanical monogram accents.',
    solution: 'A cohesive brand architecture across frosted glass containers, embossed paper boxes, and a digital visual guidelines book.',
    impact: 'Increased product pre-orders by 180% upon launch and secured placement in 12 boutique retail stores.',
    tools: ['Adobe Illustrator', 'Adobe Photoshop', 'Adobe InDesign', 'Figma'],
    deliverables: ['Logo Mark', 'Brand Guidelines', 'Packaging Boxes & Labels', 'E-commerce Assets'],
    featured: true,
    externalLink: DESIGNER_INFO.socials.driveFolder
  },
  {
    id: 'vanguard-music-fest',
    title: 'Vanguard Music & Arts Festival',
    subtitle: 'Event Visuals & Key Poster Campaign',
    category: 'Posters',
    year: '2025',
    client: 'Vanguard Live Media',
    thumbnail: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1600&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=1200&auto=format&fit=crop'
    ],
    summary: 'A vibrant, energetic visual poster system and merchandise design for a 3-day outdoor music and arts festival in Abuja.',
    challenge: 'Expressing the eclectic energy of Afro-fusion, electronic, and contemporary art in a single striking poster layout.',
    process: 'Combined custom distorted display typography with neon color contrasts and experimental photo collage techniques.',
    solution: 'Designed 5 collector edition posters, LED screen animations, social media teasers, and VIP wristbands.',
    impact: 'Festival ticket sales sold out 2 weeks before the event; festival posters went viral across Nigerian social media.',
    tools: ['Adobe Photoshop', 'Adobe Illustrator', 'After Effects'],
    deliverables: ['A0 Event Posters', 'LED Stage Graphics', 'Social Media Campaign', 'Merch Design'],
    featured: true,
    externalLink: DESIGNER_INFO.socials.driveFolder
  },
  {
    id: 'mocreatives-social-kit',
    title: 'MOCREATIVES High-Conversion Campaign',
    subtitle: 'Social Media Strategy & Content Assets',
    category: 'Social Media',
    year: '2026',
    client: 'MOCREATIVES Creative Studio',
    thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1600&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1542744094-3a31b272c490?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=1200&auto=format&fit=crop'
    ],
    summary: 'A curated 30-day Instagram and LinkedIn carousel visual system engineered for maximum shareability and brand awareness.',
    challenge: 'Delivering technical design tips and brand breakdown insights in digestible, visually captivating carousel posts.',
    process: 'Developed dynamic 1080x1350 grid slide structures with crisp typography hierarchy, subtle glassmorphism textures, and accent color accents.',
    solution: 'Created a modular 25-template social kit enabling rapid creation of high-performing visual graphics.',
    impact: 'Grew Instagram follower count by +320% and generated 40+ inbound client inquiries in 30 days.',
    tools: ['Canva', 'Adobe Photoshop', 'Figma'],
    deliverables: ['Instagram Carousels', 'Story Graphic Kits', 'Ad Creatives', 'Cover Art Templates'],
    featured: true,
    externalLink: DESIGNER_INFO.socials.instagram
  },
  {
    id: 'finova-mobile-ui',
    title: 'Finova NextGen Crypto & Wealth UI',
    subtitle: 'Digital Product Interface Design',
    category: 'UI Design',
    year: '2025',
    client: 'Finova Global Labs',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop'
    ],
    summary: 'A sleek, dark-mode fintech mobile app visual design prioritizing readability, smooth data visualizers, and seamless navigation.',
    challenge: 'Simplifying complex financial asset data and portfolio charts into an uncluttered interface accessible to everyday users.',
    process: 'Built a component library in Figma with custom graph widgets, dark obsidian color tokens, and vivid emerald status indicators.',
    solution: 'Complete UI layout flow from onboard landing to interactive trading dashboards and instant wallet transfers.',
    impact: 'User retention improved by 42% after visual layout overhaul; app nominated for Design Excellence awards.',
    tools: ['Figma', 'Adobe Illustrator', 'Photo Manipulation'],
    deliverables: ['Mobile UI Kit', 'Desktop Dashboard', 'Design System', 'Micro-Interactions'],
    featured: true,
    externalLink: DESIGNER_INFO.socials.driveFolder
  },
  {
    id: 'luminary-espresso-print',
    title: 'Luminary Espresso Editorial Collateral',
    subtitle: 'Luxury Coffee Menu & Print Campaign',
    category: 'Print Design',
    year: '2024',
    client: 'Luminary Roasters',
    thumbnail: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?q=80&w=1200&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?q=80&w=1600&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop'
    ],
    summary: 'Tactile leather-bound coffee menu design, takeaway cup sleeves, and promotional brochure collateral for an artisan cafe.',
    challenge: 'Communicating the artisanal origin story of single-origin coffee beans through physical print touchpoints.',
    process: 'Selected rich cotton paper stock with gold foil accent hot-stamping and custom hand-drawn coffee botanical illustrations.',
    solution: 'A 16-page editorial menu featuring origin maps, tasting profiles, and seasonal drink highlights.',
    impact: 'Enhanced customer average order value by 28% and received praise for premium table-side presentation.',
    tools: ['Adobe InDesign', 'Adobe Photoshop', 'Adobe Illustrator'],
    deliverables: ['Editorial Menu Booklet', 'Cup Sleeves', 'Takeaway Bags', 'Table Tents'],
    featured: false,
    externalLink: DESIGNER_INFO.socials.driveFolder
  },
  {
    id: 'neotech-summit-brand',
    title: 'NeoTech Summit Brand Architecture',
    subtitle: 'Global Technology Conference Identity',
    category: 'Branding',
    year: '2025',
    client: 'NeoTech Global Conference',
    thumbnail: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1600&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1200&auto=format&fit=crop'
    ],
    summary: 'Comprehensive corporate visual identity and signage architecture for a 5,000-attendee technology summit in West Africa.',
    challenge: 'Creating a modern, future-forward visual direction suitable for keynote presentations, stage backdrops, and mobile apps.',
    process: 'Engineered a dynamic geometric motif representing connected nodes and digital transformation, paired with electric ultramarine blue.',
    solution: 'Delivered 100+ digital and physical assets including speaker badges, stage graphics, directional signage, and promo video bumpers.',
    impact: 'Attracted 45 corporate sponsors and set a benchmark for regional technology summit visual standards.',
    tools: ['Adobe Illustrator', 'Photoshop', 'InDesign', 'After Effects'],
    deliverables: ['Event Brand Identity', 'Stage Keynotes', 'Attendee Lanyards', 'Directional Signage'],
    featured: true,
    externalLink: DESIGNER_INFO.socials.driveFolder
  },
  {
    id: 'cyberpulse-posters',
    title: 'CyberPulse Futuristic Poster Series',
    subtitle: 'Experimental Graphic Typography & Art',
    category: 'Posters',
    year: '2024',
    client: 'CyberPulse Apparel',
    thumbnail: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=1200&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=1600&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop'
    ],
    summary: 'A 6-part series of high-impact visual posters combining cyber-punk typography, halftone textures, and abstract 3D elements.',
    challenge: 'Pushing the boundaries of poster typography while maintaining brand storytelling for an urban streetwear brand.',
    process: 'Combined photo manipulation techniques in Photoshop with custom glyph creation in Illustrator.',
    solution: 'Limited edition screen-printed posters packaged with streetwear apparel drops.',
    impact: 'Posters sold out as standalone art prints within 48 hours of drop release.',
    tools: ['Adobe Photoshop', 'Photo Manipulation', 'Typography'],
    deliverables: ['Limited Art Posters', 'Apparel Graphics', 'Lookbook Layouts'],
    featured: false,
    externalLink: DESIGNER_INFO.socials.driveFolder
  },
  {
    id: 'zenith-fitness-campaign',
    title: 'Zenith Fitness Social & Promo Ad Suite',
    subtitle: 'High-Impact Promotional Graphics',
    category: 'Social Media',
    year: '2025',
    client: 'Zenith Performance Gym',
    thumbnail: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1600&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1200&auto=format&fit=crop'
    ],
    summary: 'Bold, high-contrast promotional graphics for social ads, billboard displays, and member onboarding welcome kits.',
    challenge: 'Communicating high energy and athletic transformation through aggressive graphic layouts and motion clips.',
    process: 'Utilized dramatic contrast, action photography cutouts, bold sans-serif typography, and motion blurring effects.',
    solution: 'Over 40 high-converting creative assets for Instagram, Facebook Ads, and local outdoor banners.',
    impact: 'Generated 250+ new gym memberships in the first month of campaign rollout.',
    tools: ['Adobe Photoshop', 'Canva', 'After Effects'],
    deliverables: ['Social Ad Banners', 'Outdoor Billboards', 'Member Guides'],
    featured: false,
    externalLink: DESIGNER_INFO.socials.driveFolder
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Discover',
    tagline: 'Uncovering core goals & audience essence',
    description: 'Every successful project begins with deep listening. I examine your business objectives, target demographics, brand vision, and project timeline.',
    keyOutputs: ['Creative Brief', 'Brand Alignment Checklist', 'Project Roadmap & Milestones'],
    iconName: 'Compass'
  },
  {
    number: '02',
    title: 'Research',
    tagline: 'Market analysis & visual benchmarking',
    description: 'I analyze industry trends, competitor landscape, and artistic benchmarks to identify white space and strategic visual opportunities.',
    keyOutputs: ['Visual Moodboards', 'Competitor Aesthetic Audit', 'Typography & Color Direction'],
    iconName: 'Search'
  },
  {
    number: '03',
    title: 'Concept',
    tagline: 'Translating strategy into creative ideas',
    description: 'I explore creative directions through preliminary sketches, composition tests, logo explorations, and layout grid variations.',
    keyOutputs: ['3-2 Distinct Concepts', 'Preliminary Vector Drafts', 'Initial Mockup Presentations'],
    iconName: 'Lightbulb'
  },
  {
    number: '04',
    title: 'Design',
    tagline: 'Refining selected concept into pixel perfection',
    description: 'Once the primary concept is chosen, I obsess over every detail—kerning typography, color balance, grid alignment, and mockups.',
    keyOutputs: ['High-Res Asset Production', 'Master Guidelines', 'Interactive/Tactile Mockups'],
    iconName: 'Layers'
  },
  {
    number: '05',
    title: 'Deliver',
    tagline: 'Exporting final production-ready master files',
    description: 'I package final assets in all required formats (AI, PSD, EPS, PDF, SVG, PNG) ready for high-resolution print or digital deployment.',
    keyOutputs: ['Print-Ready PDFs with Bleed', 'Digital Asset Bundles', 'Post-Handoff Support'],
    iconName: 'CheckCircle2'
  }
];

export const SKILLS: SkillItem[] = [
  {
    name: 'Adobe Photoshop',
    category: 'Software',
    icon: 'Image',
    level: 96,
    years: '4+ Yrs',
    description: 'Advanced photo manipulation, mockups, poster compositing, color grading.'
  },
  {
    name: 'Adobe Illustrator',
    category: 'Software',
    icon: 'Vector',
    level: 95,
    years: '4+ Yrs',
    description: 'Vector logo design, brand systems, complex icons, custom typography.'
  },
  {
    name: 'Adobe InDesign',
    category: 'Software',
    icon: 'BookOpen',
    level: 90,
    years: '3+ Yrs',
    description: 'Multi-page editorial layouts, magazines, brand guideline books, brochures.'
  },
  {
    name: 'Figma',
    category: 'Software',
    icon: 'Figma',
    level: 88,
    years: '3+ Yrs',
    description: 'Digital UI visual design, interactive wireframes, design systems, assets.'
  },
  {
    name: 'Canva Pro',
    category: 'Software',
    icon: 'LayoutGrid',
    level: 94,
    years: '4+ Yrs',
    description: 'Rapid client templates, social kit production, batch promotional graphics.'
  },
  {
    name: 'After Effects',
    category: 'Software',
    icon: 'Video',
    level: 80,
    years: '2+ Yrs',
    description: 'Logo reveal animations, social media motion graphics, kinetic typography.'
  },
  {
    name: 'Brand Identity',
    category: 'Core Skill',
    level: 98,
    years: '4+ Yrs',
    description: 'Crafting memorable visual identities, logo strategy, and master guidelines.'
  },
  {
    name: 'Typography',
    category: 'Core Skill',
    level: 95,
    years: '4+ Yrs',
    description: 'Font pairing, editorial hierarchy, custom lettering, micro-kerning precision.'
  },
  {
    name: 'Color Theory',
    category: 'Core Skill',
    level: 94,
    years: '4+ Yrs',
    description: 'Emotional color psychology, print CMYK color management, digital RGB.'
  },
  {
    name: 'Layout & Grid Design',
    category: 'Core Skill',
    level: 92,
    years: '4+ Yrs',
    description: 'Asymmetric layouts, editorial grids, posters, proportion and negative space.'
  },
  {
    name: 'Photo Manipulation',
    category: 'Specialty',
    level: 91,
    years: '4+ Yrs',
    description: 'Surreal compositing, lighting adjustments, object removal, high retouching.'
  },
  {
    name: 'UI Visual Design',
    category: 'Specialty',
    level: 87,
    years: '3+ Yrs',
    description: 'Modern clean visual layouts for mobile apps, websites, and SaaS products.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    clientName: 'Olamide Williams',
    role: 'Founder & Managing Director',
    company: 'Aura Botanicals Ltd.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop',
    quote: 'Miracle completely transformed our brand image. His attention to detail, color choices, and luxury packaging designs exceeded all expectations. Our sales doubled after launch!',
    rating: 5,
    projectType: 'Brand Identity & Packaging'
  },
  {
    id: 'test-2',
    clientName: 'David K. Chukwu',
    role: 'Head of Operations',
    company: 'Vanguard Live Media',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop',
    quote: 'Working with Miracle on the Vanguard Festival was a breeze. He delivered stunning, viral-worthy posters and stage graphics under tight deadlines. Truly a top-tier designer in Nigeria.',
    rating: 5,
    projectType: 'Poster & Event Campaign'
  },
  {
    id: 'test-3',
    clientName: 'Amina Yusuf',
    role: 'Creative Marketing Lead',
    company: 'Finova Global Labs',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop',
    quote: 'The social media graphics and UI visuals Miracle created for Finova gave us an instant competitive edge. He understands business goals just as well as aesthetic design.',
    rating: 5,
    projectType: 'UI Visual & Social Content'
  },
  {
    id: 'test-4',
    clientName: 'Emmanuel Adebayo',
    role: 'Co-Founder',
    company: 'Luminary Coffee Roasters',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop',
    quote: 'From leather menu covers to custom cup sleeves, Miracle’s print design quality is unrivaled. Our customers constantly compliment our cafe aesthetic!',
    rating: 5,
    projectType: 'Print Design & Collateral'
  }
];

export const CLIENT_BRANDS: ClientBrand[] = [
  { id: '1', name: 'Aura Botanicals', industry: 'Luxury Skincare', logoText: 'AURA BOTANICALS', symbol: '🌿' },
  { id: '2', name: 'Vanguard Live', industry: 'Events & Media', logoText: 'VANGUARD LIVE', symbol: '⚡' },
  { id: '3', name: 'Finova Global', industry: 'Fintech & Web3', logoText: 'FINOVA LABS', symbol: '❖' },
  { id: '4', name: 'Luminary Coffee', industry: 'Hospitality', logoText: 'LUMINARY ROASTERS', symbol: '☕' },
  { id: '5', name: 'NeoTech Summit', industry: 'Global Tech', logoText: 'NEOTECH 2025', symbol: '⬢' },
  { id: '6', name: 'CyberPulse', industry: 'Apparel & Streetwear', logoText: 'CYBERPULSE', symbol: '✦' },
  { id: '7', name: 'Zenith Performance', industry: 'Health & Fitness', logoText: 'ZENITH FITNESS', symbol: '▲' }
];
