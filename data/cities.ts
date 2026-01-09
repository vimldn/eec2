export interface CityContent {
  slug: string;
  name: string;
  region: string;
  population: string;
  industries: string[];
  landmarks: string[];
  areas: string[];
  description: string;
  economyFacts: string[];
  localSeo: { intro: string; why: string; industries: string; };
  seo: { intro: string; why: string; industries: string; };
  consultancy: { intro: string; why: string; industries: string; };
  image: string;
  imageAlt: string;
}

export const cities: CityContent[] = [
  {
    slug: 'london',
    name: 'London',
    region: 'Greater London',
    population: '9.5 million',
    industries: ['Finance', 'Tech', 'Creative Industries', 'Legal Services', 'Media'],
    landmarks: ['The Shard', 'Canary Wharf', 'Tower Bridge', 'Big Ben'],
    areas: ['The City', 'Shoreditch', 'Mayfair', 'Soho', 'Canary Wharf'],
    description: 'the world\'s leading financial centre and the UK\'s economic powerhouse',
    economyFacts: ['London generates 22% of the UK\'s GDP', 'Over 1 million businesses operate in London', 'The city attracts £50 billion in foreign investment annually'],
    localSeo: {
      intro: 'London is the most competitive market in the UK for local search. With over 1 million businesses vying for attention, standing out in Google\'s local results requires expertise, strategy, and consistent execution. From Shoreditch startups to Mayfair law firms, we help London businesses dominate their local search landscape.',
      why: 'In a city where 73% of consumers search online before visiting a local business, your Google Business Profile isn\'t optional—it\'s essential. London searchers have high expectations and low patience. If you\'re not in the top 3 local results, you\'re losing business to competitors who are.',
      industries: 'We\'ve helped London businesses across finance in the City, tech startups in Shoreditch, legal firms in Holborn, restaurants in Soho, and retail in Oxford Street. Each area has unique search patterns and competition levels that require tailored strategies.'
    },
    seo: {
      intro: 'Competing for organic search visibility in London means going up against some of the most well-resourced companies in the world. Our London SEO campaigns are built for this level of competition—combining technical excellence, strategic content, and authoritative link building.',
      why: 'London businesses can\'t afford to be invisible online. With the highest commercial rents in the UK, every website visitor matters. Our SEO strategies focus on driving qualified traffic that converts—not vanity metrics.',
      industries: 'From fintech companies in Canary Wharf to creative agencies in Clerkenwell, e-commerce brands in Fulham to professional services firms in the West End, we\'ve driven organic growth across London\'s diverse business landscape.'
    },
    consultancy: {
      intro: 'Many London businesses have talented in-house marketing teams but lack specialist SEO expertise. Our consultancy service bridges that gap—providing the strategic direction, technical audits, and ongoing guidance your team needs.',
      why: 'With the cost of hiring a senior SEO specialist in London exceeding £70,000 per year, consultancy offers a cost-effective way to access expert guidance. We work alongside your team, transferring knowledge and building internal capability.',
      industries: 'We consult for London agencies needing white-label expertise, enterprise brands requiring independent audits, and growing companies ready to bring SEO in-house.'
    },
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&h=800&fit=crop',
    imageAlt: 'London skyline featuring Tower Bridge and The Shard'
  },
  {
    slug: 'manchester',
    name: 'Manchester',
    region: 'Greater Manchester',
    population: '2.8 million',
    industries: ['Digital & Tech', 'Financial Services', 'Creative Industries', 'Healthcare', 'Media'],
    landmarks: ['Beetham Tower', 'Manchester Central', 'Old Trafford', 'Etihad Stadium'],
    areas: ['Spinningfields', 'Northern Quarter', 'MediaCityUK', 'Ancoats', 'Deansgate'],
    description: 'the North\'s digital capital and fastest-growing tech hub outside London',
    economyFacts: ['Manchester\'s digital sector employs over 100,000 people', 'The city has the largest creative cluster outside London', 'MediaCityUK houses BBC and ITV operations'],
    localSeo: {
      intro: 'Manchester\'s local search landscape is fiercely competitive, with businesses from Spinningfields to Salford fighting for visibility. As the commercial heart of the North West, ranking in Manchester\'s local pack means access to a metropolitan area of nearly 3 million potential customers.',
      why: 'Manchester consumers are digitally savvy and research-driven. They\'re searching "near me" more than ever, and 82% of smartphone users look up local businesses before visiting. In a city this dynamic, local SEO is your competitive advantage.',
      industries: 'From digital agencies in the Northern Quarter to law firms in Spinningfields, restaurants in Ancoats to healthcare providers across Greater Manchester, we understand the unique search behaviours in every corner of this city.'
    },
    seo: {
      intro: 'Manchester is establishing itself as the UK\'s second city for business—and competition for online visibility reflects that growth. Our SEO campaigns for Manchester businesses combine deep market knowledge with proven strategies that deliver sustainable organic growth.',
      why: 'As Manchester\'s economy continues to outpace the national average, more businesses are investing in digital. The companies winning in search today are building the brand authority that will define their industries for years.',
      industries: 'We\'ve delivered results for Manchester tech startups, established financial services firms, growing e-commerce brands, and professional services companies.'
    },
    consultancy: {
      intro: 'Manchester\'s thriving agency scene and growing corporate presence create strong demand for specialist SEO consultancy. We work with in-house teams across Greater Manchester, providing expert guidance needed to compete at the highest level.',
      why: 'With Manchester\'s digital sector growing 5x faster than the national average, businesses need SEO expertise that matches their ambition. Our consultancy delivers enterprise-level strategy without enterprise-level overheads.',
      industries: 'From MediaCityUK broadcasters to Northern Quarter agencies, Spinningfields corporates to University spin-outs, we provide consultancy tailored to Manchester\'s diverse business ecosystem.'
    },
    image: 'https://images.unsplash.com/photo-1515586838455-8f8f940d6853?w=1200&h=800&fit=crop',
    imageAlt: 'Manchester city centre skyline at dusk'
  },
  {
    slug: 'birmingham',
    name: 'Birmingham',
    region: 'West Midlands',
    population: '2.9 million',
    industries: ['Manufacturing', 'Financial Services', 'Professional Services', 'Retail', 'Automotive'],
    landmarks: ['Bullring', 'Library of Birmingham', 'Selfridges Building', 'Symphony Hall'],
    areas: ['Colmore Row', 'Jewellery Quarter', 'Digbeth', 'Brindleyplace', 'Edgbaston'],
    description: 'the UK\'s second-largest city and the commercial capital of the Midlands',
    economyFacts: ['Birmingham contributes £31 billion to the UK economy annually', 'The city is home to five FTSE 100 companies', 'HS2 will cut journey times to London to 49 minutes'],
    localSeo: {
      intro: 'Birmingham\'s regeneration has transformed it into one of the UK\'s most dynamic business destinations. From the professional services hub of Colmore Row to the creative quarter of Digbeth, local search visibility is essential for capturing the city\'s 2.9 million potential customers.',
      why: 'As Britain\'s second city, Birmingham\'s local search market is highly competitive but full of opportunity. The ongoing HS2 investment is attracting new businesses and customers—making now the perfect time to establish local search dominance.',
      industries: 'We work with Birmingham businesses across professional services in Colmore Row, creative industries in Digbeth, jewellers in the historic Jewellery Quarter, and hospitality venues around Brindleyplace.'
    },
    seo: {
      intro: 'Birmingham\'s business renaissance is creating unprecedented opportunities for companies ready to invest in organic growth. Our SEO campaigns help Birmingham businesses compete not just locally, but nationally and internationally.',
      why: 'With major infrastructure investments and a growing professional services sector, Birmingham businesses need search visibility that matches their ambitions. SEO delivers sustainable, cost-effective growth.',
      industries: 'From automotive suppliers in the wider West Midlands to fintech startups in the city centre, established manufacturers to emerging tech companies, we\'ve driven organic growth across Birmingham\'s diverse economy.'
    },
    consultancy: {
      intro: 'Birmingham\'s growing corporate presence includes many businesses with sophisticated marketing teams who need specialist SEO guidance. Our consultancy provides the expertise to elevate their organic search performance.',
      why: 'As Birmingham attracts more national and international businesses, competition for search visibility intensifies. Expert consultancy ensures your team has the strategic direction to stay ahead.',
      industries: 'We consult for Birmingham professional services firms, corporate marketing teams, and growing agencies. Our approach combines West Midlands market knowledge with best-in-class SEO methodology.'
    },
    image: 'https://images.unsplash.com/photo-1597003712265-94f90cb49cb5?w=1200&h=800&fit=crop',
    imageAlt: 'Birmingham city centre with Library of Birmingham'
  },
  {
    slug: 'leeds',
    name: 'Leeds',
    region: 'West Yorkshire',
    population: '1.9 million',
    industries: ['Financial Services', 'Legal Services', 'Digital', 'Healthcare', 'Manufacturing'],
    landmarks: ['Leeds Town Hall', 'Trinity Leeds', 'Corn Exchange', 'First Direct Arena'],
    areas: ['City Centre', 'Leeds Dock', 'Headingley', 'Chapel Allerton', 'Roundhay'],
    description: 'the largest legal and financial centre outside London',
    economyFacts: ['Leeds has the largest financial services sector outside London', 'The city is home to over 30 national and international banks', 'Leeds generates £66 billion for the UK economy'],
    localSeo: {
      intro: 'Leeds has quietly become one of the UK\'s most important business cities, with the largest financial and legal services sector outside London. For local businesses, appearing in Leeds search results means access to a wealthy, commercially-minded population across West Yorkshire.',
      why: 'Leeds professionals are high-value customers who research thoroughly before engaging services. With strong competition across professional services, retail, and hospitality, local SEO determines who captures this lucrative market.',
      industries: 'We help Leeds businesses from the financial services firms around Park Row to independent retailers in the Victoria Quarter, restaurants in Leeds Dock to healthcare providers across West Yorkshire.'
    },
    seo: {
      intro: 'As Yorkshire\'s economic powerhouse, Leeds offers significant opportunities for businesses ready to invest in organic search. Our SEO campaigns are built for the competitive Leeds market, delivering sustainable traffic growth.',
      why: 'Leeds businesses compete with London for talent and clients. Strong search visibility signals authority and builds the trust that wins business in professional services, legal, and financial markets.',
      industries: 'From legal firms on Park Square to tech companies in the South Bank regeneration area, we\'ve helped Leeds businesses across sectors achieve page one rankings for competitive terms.'
    },
    consultancy: {
      intro: 'Leeds\' sophisticated business community includes many organisations with capable marketing teams who need specialist SEO direction. Our consultancy service provides the expert guidance to unlock their full potential.',
      why: 'With Leeds positioning itself as a northern powerhouse for professional services, businesses need SEO strategies that reflect their market position. Expert consultancy delivers that strategic advantage.',
      industries: 'We consult for Leeds law firms, financial services companies, growing agencies, and corporate marketing teams.'
    },
    image: 'https://images.unsplash.com/photo-1598519493695-7a8bd82d06d6?w=1200&h=800&fit=crop',
    imageAlt: 'Leeds city centre skyline with Town Hall'
  },
  {
    slug: 'glasgow',
    name: 'Glasgow',
    region: 'Greater Glasgow',
    population: '1.7 million',
    industries: ['Financial Services', 'Engineering', 'Creative Industries', 'Life Sciences', 'Tourism'],
    landmarks: ['Glasgow Cathedral', 'Riverside Museum', 'SEC Armadillo', 'Kelvingrove'],
    areas: ['Merchant City', 'West End', 'Finnieston', 'City Centre', 'Govan'],
    description: 'Scotland\'s largest city, commercial capital, and cultural powerhouse',
    economyFacts: ['Glasgow generates over 30% of Scotland\'s GDP', 'The city has the largest retail sector in Scotland', 'Glasgow is the UK\'s top conference destination outside London'],
    localSeo: {
      intro: 'Glasgow is Scotland\'s commercial heartland, with a metropolitan population of 1.7 million making it the largest local search market north of the border. From the style bars of Finnieston to the corporate offices of the city centre, local visibility drives business.',
      why: 'Glasgow consumers are fiercely loyal to local businesses—but they need to find you first. With 78% of Glaswegians using their phones to find local services, appearing in the local pack isn\'t optional.',
      industries: 'We work with Glasgow businesses from creative agencies in the Merchant City to hospitality venues in Finnieston, professional services in the city centre to retailers on Buchanan Street.'
    },
    seo: {
      intro: 'Glasgow businesses compete in one of the UK\'s most vibrant economies. Our SEO campaigns help Glasgow companies build the organic visibility needed to capture search traffic across Scotland and beyond.',
      why: 'As Scotland\'s commercial capital, Glasgow businesses have ambitious growth targets. SEO delivers the sustainable, scalable traffic that supports long-term development without ongoing ad spend.',
      industries: 'From engineering firms in Govan to fintech startups in the city centre, whisky brands to tourism operators, we\'ve delivered SEO results across Glasgow\'s diverse economic landscape.'
    },
    consultancy: {
      intro: 'Glasgow\'s growing agency scene and expanding corporate sector create strong demand for specialist SEO consultancy. We provide the expert guidance Glasgow teams need to compete at the highest level.',
      why: 'With Glasgow positioning itself as Scotland\'s tech and creative hub, businesses need SEO expertise that matches their ambition. Consultancy delivers expert strategy without full-time headcount.',
      industries: 'We consult for Glasgow agencies, corporate marketing teams, and growing businesses across sectors.'
    },
    image: 'https://images.unsplash.com/photo-1583425423320-93f67a4c1ab6?w=1200&h=800&fit=crop',
    imageAlt: 'Glasgow cityscape with River Clyde'
  },
  {
    slug: 'liverpool',
    name: 'Liverpool',
    region: 'Merseyside',
    population: '1.5 million',
    industries: ['Maritime', 'Creative Industries', 'Life Sciences', 'Tourism', 'Financial Services'],
    landmarks: ['Royal Albert Dock', 'Liverpool Cathedral', 'Anfield', 'The Cavern Club'],
    areas: ['City Centre', 'Baltic Triangle', 'Ropewalks', 'Liverpool ONE', 'Waterfront'],
    description: 'a UNESCO World Heritage City with a thriving creative and digital economy',
    economyFacts: ['Liverpool\'s creative sector employs over 35,000 people', 'The city welcomes 67 million visitors annually', 'Liverpool has the UK\'s fastest-growing digital sector'],
    localSeo: {
      intro: 'Liverpool\'s renaissance has transformed it into one of the UK\'s most dynamic cities. From the Baltic Triangle\'s creative startups to professional services around the commercial district, local search visibility is crucial for capturing this market.',
      why: 'Liverpool combines fierce local pride with digitally-savvy consumers. They want to support local businesses but they\'re searching online first. Strong local SEO ensures you\'re visible when Liverpool customers are ready to buy.',
      industries: 'We help Liverpool businesses from creative agencies in the Baltic Triangle to hospitality venues across the city, professional services firms to retailers at Liverpool ONE.'
    },
    seo: {
      intro: 'Liverpool\'s economic transformation has created exciting opportunities for businesses investing in organic growth. Our SEO campaigns help Liverpool companies build the visibility needed to compete regionally and nationally.',
      why: 'Liverpool\'s digital sector is the UK\'s fastest growing. Businesses here are ambitious, innovative, and ready to compete. Strong SEO foundations support sustainable growth.',
      industries: 'From maritime companies to creative agencies, tourism operators to life sciences firms, we\'ve helped Liverpool businesses across sectors achieve significant organic growth.'
    },
    consultancy: {
      intro: 'Liverpool\'s expanding creative and digital sector includes many businesses with talented teams who need specialist SEO guidance. Our consultancy provides the expert direction to maximise their potential.',
      why: 'As Liverpool\'s business community grows more sophisticated, demand for specialist expertise increases. Consultancy delivers that expertise cost-effectively.',
      industries: 'We consult for Liverpool agencies, creative businesses, and growing companies across Merseyside.'
    },
    image: 'https://images.unsplash.com/photo-1560179304-6fc1d8749b23?w=1200&h=800&fit=crop',
    imageAlt: 'Liverpool waterfront with Royal Albert Dock'
  },
  {
    slug: 'edinburgh',
    name: 'Edinburgh',
    region: 'Lothian',
    population: '540,000',
    industries: ['Financial Services', 'Tourism', 'Tech', 'Higher Education', 'Creative'],
    landmarks: ['Edinburgh Castle', 'Royal Mile', 'Arthur\'s Seat', 'Scottish Parliament'],
    areas: ['Old Town', 'New Town', 'Leith', 'Financial District', 'West End'],
    description: 'Scotland\'s capital city and the UK\'s largest financial centre outside London',
    economyFacts: ['Edinburgh is Europe\'s 5th largest financial centre', 'The city hosts the world\'s largest arts festival', 'Edinburgh has the highest economic output per capita outside London'],
    localSeo: {
      intro: 'Edinburgh combines world-class tourism with a powerful financial services sector. For local businesses, this creates unique opportunities—and unique challenges. Standing out in Edinburgh\'s local search results requires strategic expertise.',
      why: 'Edinburgh attracts 4 million tourists annually and houses the UK\'s second-largest financial services sector. Whether you\'re targeting visitors on the Royal Mile or executives in the Financial District, local SEO is essential.',
      industries: 'We work with Edinburgh businesses from hospitality venues in the Old Town to financial services firms in the West End, legal practices to retail establishments.'
    },
    seo: {
      intro: 'Edinburgh businesses operate in a distinctive market—wealthy, educated, and internationally connected. Our SEO campaigns are tailored to this sophisticated audience, building visibility that drives high-value traffic.',
      why: 'Edinburgh\'s economy rewards quality. The businesses that succeed here maintain high standards across everything—including their digital presence. Strong SEO signals the authority Edinburgh customers expect.',
      industries: 'From asset managers to festival venues, law firms to tech startups, we\'ve delivered SEO results across Edinburgh\'s diverse economy.'
    },
    consultancy: {
      intro: 'Edinburgh\'s professional services community includes many sophisticated marketing teams seeking specialist SEO guidance. Our consultancy delivers the expertise these teams need.',
      why: 'With Edinburgh\'s competitive business environment, in-house teams need every advantage. Expert SEO consultancy provides strategic direction that elevates performance.',
      industries: 'We consult for Edinburgh financial services firms, legal practices, tech companies, and agencies.'
    },
    image: 'https://images.unsplash.com/photo-1567948097854-a1302e0cdb58?w=1200&h=800&fit=crop',
    imageAlt: 'Edinburgh Castle and city skyline at sunset'
  },
  {
    slug: 'bristol',
    name: 'Bristol',
    region: 'South West England',
    population: '700,000',
    industries: ['Aerospace', 'Tech', 'Creative Industries', 'Financial Services', 'Media'],
    landmarks: ['Clifton Suspension Bridge', 'SS Great Britain', 'Cabot Tower', 'Harbourside'],
    areas: ['Clifton', 'Harbourside', 'Temple Quarter', 'Stokes Croft', 'Redcliffe'],
    description: 'the South West\'s largest city and one of the UK\'s most innovative tech hubs',
    economyFacts: ['Bristol has the highest concentration of tech companies outside London', 'The city\'s aerospace sector employs over 30,000 people', 'Bristol has the highest start-up survival rate of any major UK city'],
    localSeo: {
      intro: 'Bristol\'s reputation as a progressive, entrepreneurial city attracts ambitious businesses and discerning customers. Local search visibility is crucial in this competitive market where consumers actively support local independent businesses.',
      why: 'Bristolians are famously loyal to local businesses—but they research online first. With strong competition across hospitality, retail, and professional services, appearing in the top 3 local results is essential.',
      industries: 'We help Bristol businesses from creative agencies in Stokes Croft to professional services in the city centre, restaurants at Harbourside to tech companies in Temple Quarter.'
    },
    seo: {
      intro: 'Bristol\'s thriving tech and creative sectors create strong demand for sophisticated digital marketing. Our SEO campaigns help Bristol businesses build the organic visibility needed to compete nationally and internationally.',
      why: 'Bristol businesses punch above their weight—competing with London agencies and international competitors. Strong SEO provides the foundation for sustainable growth that matches this ambition.',
      industries: 'From aerospace giants to tech startups, creative agencies to professional services firms, we\'ve delivered SEO results across Bristol\'s innovative economy.'
    },
    consultancy: {
      intro: 'Bristol\'s sophisticated agency and corporate landscape includes many teams seeking specialist SEO expertise. Our consultancy provides the strategic guidance these talented teams need.',
      why: 'Bristol\'s competitive business environment demands every advantage. Expert consultancy delivers SEO strategy that matches the ambition of the South West\'s leading city.',
      industries: 'We consult for Bristol agencies, tech companies, and corporate marketing teams.'
    },
    image: 'https://images.unsplash.com/photo-1591638428032-c3b87de0f56e?w=1200&h=800&fit=crop',
    imageAlt: 'Bristol Clifton Suspension Bridge'
  },
  {
    slug: 'sheffield',
    name: 'Sheffield',
    region: 'South Yorkshire',
    population: '730,000',
    industries: ['Advanced Manufacturing', 'Healthcare', 'Digital', 'Higher Education', 'Creative'],
    landmarks: ['Sheffield Winter Garden', 'Meadowhall', 'Crucible Theatre', 'Sheffield Cathedral'],
    areas: ['City Centre', 'Kelham Island', 'Ecclesall Road', 'Sharrow', 'Broomhill'],
    description: 'a city reinventing itself through innovation and advanced manufacturing',
    economyFacts: ['Sheffield is home to the Advanced Manufacturing Research Centre', 'The city has two world-renowned universities with 60,000 students', 'Sheffield\'s outdoor economy contributes £600 million annually'],
    localSeo: {
      intro: 'Sheffield\'s transformation from steel city to innovation hub has created a dynamic local business environment. From the regenerated Kelham Island to the bustling city centre, local search visibility is crucial for capturing this evolving market.',
      why: 'Sheffield combines strong local loyalty with digital sophistication. The city\'s large student population and young professional workforce expect to find businesses online—making local SEO essential.',
      industries: 'We help Sheffield businesses from creative enterprises in Kelham Island to professional services in the city centre, hospitality venues on Ecclesall Road to healthcare providers.'
    },
    seo: {
      intro: 'Sheffield\'s economy is evolving rapidly, with growth in digital, creative, and advanced manufacturing sectors. Our SEO campaigns help Sheffield businesses build visibility that matches their innovative spirit.',
      why: 'Sheffield businesses are increasingly competing on a national stage. Strong SEO foundations support the growth journey from local success to national recognition.',
      industries: 'From advanced manufacturing to healthcare, creative agencies to professional services, we\'ve helped Sheffield businesses across sectors achieve significant organic growth.'
    },
    consultancy: {
      intro: 'Sheffield\'s growing business community includes many organisations seeking specialist SEO guidance without full agency engagement. Our consultancy fills that gap.',
      why: 'As Sheffield\'s economy diversifies, businesses need digital expertise that matches their ambition. Consultancy delivers strategic SEO direction cost-effectively.',
      industries: 'We consult for Sheffield businesses across sectors, from university spin-outs to established manufacturers, agencies to corporate marketing teams.'
    },
    image: 'https://images.unsplash.com/photo-1588683865374-6c24c23e7d47?w=1200&h=800&fit=crop',
    imageAlt: 'Sheffield city centre with Winter Garden'
  },
  {
    slug: 'newcastle',
    name: 'Newcastle',
    region: 'Tyne and Wear',
    population: '800,000',
    industries: ['Digital', 'Life Sciences', 'Offshore Energy', 'Professional Services', 'Culture'],
    landmarks: ['Tyne Bridge', 'The Sage Gateshead', 'Angel of the North', 'Newcastle Castle'],
    areas: ['Quayside', 'Grey Street', 'Ouseburn', 'City Centre', 'Jesmond'],
    description: 'the economic and cultural hub of the North East with a booming digital sector',
    economyFacts: ['Newcastle\'s digital sector contributes £1.1 billion to the regional economy', 'The city is home to Greggs, Sage, and Virgin Money', 'Newcastle has more start-ups per capita than any UK city except London'],
    localSeo: {
      intro: 'Newcastle\'s combination of strong local identity and digital sophistication creates a unique market. Geordies support local businesses fiercely—but they\'re searching online first. Local SEO connects you with this loyal customer base.',
      why: 'As the North East\'s commercial hub, Newcastle dominates regional search. Businesses visible in Newcastle\'s local results access a catchment area spanning Northumberland to County Durham.',
      industries: 'We help Newcastle businesses from digital agencies in Ouseburn to hospitality venues on the Quayside, professional services in the city centre to retailers across Tyne and Wear.'
    },
    seo: {
      intro: 'Newcastle\'s thriving digital scene has produced some of the UK\'s most successful tech companies. Our SEO campaigns help Newcastle businesses compete nationally while maintaining their regional edge.',
      why: 'Newcastle businesses increasingly serve national and international markets. Strong SEO provides the visibility needed to compete beyond regional boundaries.',
      industries: 'From fintech companies to creative agencies, offshore energy to life sciences, we\'ve delivered SEO results across Newcastle\'s diverse economy.'
    },
    consultancy: {
      intro: 'Newcastle\'s growing agency sector and corporate presence create demand for specialist SEO consultancy. We provide the expertise that elevates in-house team performance.',
      why: 'With Newcastle\'s digital sector outperforming national averages, businesses need SEO expertise that matches this momentum. Consultancy delivers that strategic advantage.',
      industries: 'We consult for Newcastle agencies, tech companies, and corporate marketing teams across the North East.'
    },
    image: 'https://images.unsplash.com/photo-1558454834-76fdfb4c3193?w=1200&h=800&fit=crop',
    imageAlt: 'Newcastle Quayside with Tyne Bridge'
  },
  {
    slug: 'nottingham',
    name: 'Nottingham',
    region: 'East Midlands',
    population: '330,000',
    industries: ['Life Sciences', 'Digital', 'Creative Industries', 'Retail', 'Financial Services'],
    landmarks: ['Nottingham Castle', 'Old Market Square', 'Trent Bridge', 'City of Caves'],
    areas: ['Lace Market', 'Hockley', 'City Centre', 'Sneinton', 'West Bridgford'],
    description: 'a vibrant city with a growing tech and creative sector',
    economyFacts: ['Nottingham has two of the UK\'s top 40 universities', 'The city\'s creative quarter employs over 11,000 people', 'Nottingham was named the UK\'s best city for business by EY'],
    localSeo: {
      intro: 'Nottingham\'s compact city centre and strong local identity create an engaged consumer base that values local businesses. Standing out in Nottingham\'s local search results means capturing customers across the East Midlands.',
      why: 'Nottingham residents are proud of their city and supportive of local businesses. But with strong competition across retail, hospitality, and services, local SEO determines who wins their business.',
      industries: 'We help Nottingham businesses from creative agencies in the Lace Market to hospitality venues in Hockley, professional services in the city centre to retailers around Old Market Square.'
    },
    seo: {
      intro: 'Nottingham\'s economy is evolving, with strong growth in digital, creative, and life sciences sectors. Our SEO campaigns help Nottingham businesses build the visibility needed to compete regionally and nationally.',
      why: 'Nottingham businesses are increasingly ambitious, looking beyond local markets to national and international opportunities. Strong SEO foundations support this growth trajectory.',
      industries: 'From life sciences companies to creative agencies, fintech startups to established professional services firms, we\'ve delivered SEO results across Nottingham\'s diverse economy.'
    },
    consultancy: {
      intro: 'Nottingham\'s growing business community includes many organisations seeking specialist SEO guidance. Our consultancy provides the expert direction to maximise team performance.',
      why: 'As Nottingham\'s economy diversifies, businesses need SEO expertise that matches their evolving needs. Consultancy delivers strategic guidance cost-effectively.',
      industries: 'We consult for Nottingham businesses across sectors, from university spin-outs to established companies, agencies to corporate teams.'
    },
    image: 'https://images.unsplash.com/photo-1623072237847-9a7cb842a277?w=1200&h=800&fit=crop',
    imageAlt: 'Nottingham Old Market Square'
  },
  {
    slug: 'cardiff',
    name: 'Cardiff',
    region: 'South Wales',
    population: '480,000',
    industries: ['Financial Services', 'Creative Industries', 'Tech', 'Public Sector', 'Tourism'],
    landmarks: ['Cardiff Castle', 'Millennium Stadium', 'Cardiff Bay', 'National Museum'],
    areas: ['Cardiff Bay', 'City Centre', 'Cathays', 'Canton', 'Pontcanna'],
    description: 'the Welsh capital and one of the UK\'s fastest-growing cities',
    economyFacts: ['Cardiff contributes 20% of Welsh GDP', 'The city\'s financial services sector employs over 30,000 people', 'Cardiff Bay is Europe\'s largest waterfront development'],
    localSeo: {
      intro: 'As the Welsh capital, Cardiff combines national significance with strong local character. Businesses visible in Cardiff\'s local search results access not just the city but the wider South Wales region.',
      why: 'Cardiff\'s growing population and thriving business scene make local search increasingly competitive. Whether you\'re in Cardiff Bay or the city centre, appearing in the local pack drives real business.',
      industries: 'We help Cardiff businesses from creative agencies in Cardiff Bay to professional services in the city centre, hospitality venues to retailers across the Welsh capital.'
    },
    seo: {
      intro: 'Cardiff\'s economy is growing faster than the UK average, with particular strength in financial services, creative industries, and tech. Our SEO campaigns help Cardiff businesses build visibility that matches this momentum.',
      why: 'Cardiff businesses increasingly compete with English and international competitors. Strong SEO ensures you capture Welsh market share while reaching customers across the UK.',
      industries: 'From BBC Wales to local startups, financial services firms to creative agencies, we\'ve delivered SEO results across Cardiff\'s diverse economy.'
    },
    consultancy: {
      intro: 'Cardiff\'s growing corporate and agency sector includes many teams seeking specialist SEO expertise. Our consultancy provides the strategic guidance to elevate performance.',
      why: 'With Cardiff\'s business community becoming increasingly sophisticated, in-house teams need every advantage. Expert SEO consultancy delivers that edge.',
      industries: 'We consult for Cardiff agencies, corporate marketing teams, and businesses across South Wales.'
    },
    image: 'https://images.unsplash.com/photo-1569587112025-0d460e81a126?w=1200&h=800&fit=crop',
    imageAlt: 'Cardiff Bay waterfront'
  },
  {
    slug: 'leicester',
    name: 'Leicester',
    region: 'East Midlands',
    population: '500,000',
    industries: ['Manufacturing', 'Retail', 'Tech', 'Healthcare', 'Textiles'],
    landmarks: ['Leicester Cathedral', 'King Richard III Centre', 'National Space Centre', 'Leicester Market'],
    areas: ['City Centre', 'Cultural Quarter', 'Highcross', 'Leicester Market', 'Clarendon Park'],
    description: 'one of the UK\'s most diverse and entrepreneurial cities',
    economyFacts: ['Leicester is the UK\'s largest textile manufacturing centre', 'The city has one of the youngest populations in the UK', 'Leicester\'s economy has grown 15% faster than the national average'],
    localSeo: {
      intro: 'Leicester\'s diverse population and entrepreneurial spirit create a unique local market. With strong competition across retail, hospitality, and services, local SEO determines who captures this dynamic customer base.',
      why: 'Leicester consumers research online before buying locally. With the UK\'s youngest city population, digital-first behaviour is the norm—making local SEO essential for growth.',
      industries: 'We help Leicester businesses from retailers around Highcross to restaurants in the Cultural Quarter, professional services to healthcare providers across Leicestershire.'
    },
    seo: {
      intro: 'Leicester\'s economy is diverse and growing, with particular strength in manufacturing, retail, and emerging tech sectors. Our SEO campaigns help Leicester businesses build visibility across their target markets.',
      why: 'Leicester businesses serve local, regional, and increasingly national markets. Strong SEO provides the foundation for growth across all these channels.',
      industries: 'From textile manufacturers to tech startups, retailers to professional services, we\'ve helped Leicester businesses achieve significant organic growth.'
    },
    consultancy: {
      intro: 'Leicester\'s growing business community includes organisations seeking specialist SEO guidance. Our consultancy provides the expert direction to maximise marketing team performance.',
      why: 'As Leicester\'s economy evolves, businesses need digital expertise that matches their ambition. Consultancy delivers strategic SEO direction cost-effectively.',
      industries: 'We consult for Leicester businesses across manufacturing, retail, tech, and professional services.'
    },
    image: 'https://images.unsplash.com/photo-1614785084498-01c66c87dbf0?w=1200&h=800&fit=crop',
    imageAlt: 'Leicester city centre with clock tower'
  },
  {
    slug: 'southampton',
    name: 'Southampton',
    region: 'Hampshire',
    population: '260,000',
    industries: ['Maritime', 'Aerospace', 'Financial Services', 'Healthcare', 'Higher Education'],
    landmarks: ['Southampton Docks', 'SeaCity Museum', 'Bargate', 'Westquay'],
    areas: ['City Centre', 'Ocean Village', 'Bedford Place', 'Portswood', 'Shirley'],
    description: 'a major port city and the gateway to the South Coast',
    economyFacts: ['Southampton handles £36 billion in trade annually', 'The city is the UK\'s largest cruise port', 'Southampton\'s aerospace sector employs thousands regionally'],
    localSeo: {
      intro: 'Southampton\'s position as the South Coast\'s major commercial hub creates significant local search opportunities. Businesses visible in Southampton\'s results access customers across Hampshire and beyond.',
      why: 'Southampton combines a substantial local population with significant visitor traffic through its port and cruise terminal. Local SEO captures both residential and transient customer bases.',
      industries: 'We help Southampton businesses from maritime services to hospitality venues, professional services in the city centre to retailers at Westquay.'
    },
    seo: {
      intro: 'Southampton\'s strategic position and diverse economy create opportunities for businesses ready to invest in organic growth. Our SEO campaigns help Southampton companies build visibility that drives sustainable results.',
      why: 'Southampton businesses serve local, regional, and international markets. Strong SEO provides the visibility needed to compete across all these channels.',
      industries: 'From maritime companies to aerospace suppliers, healthcare providers to professional services, we\'ve delivered SEO results across Southampton\'s diverse economy.'
    },
    consultancy: {
      intro: 'Southampton\'s corporate and agency landscape includes teams seeking specialist SEO guidance. Our consultancy provides the strategic direction to elevate performance.',
      why: 'With strong competition across South Coast markets, in-house teams need every advantage. Expert SEO consultancy delivers that competitive edge.',
      industries: 'We consult for Southampton businesses across maritime, aerospace, professional services, and healthcare.'
    },
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&h=800&fit=crop',
    imageAlt: 'Southampton waterfront with Ocean Village'
  },
  {
    slug: 'brighton',
    name: 'Brighton',
    region: 'East Sussex',
    population: '290,000',
    industries: ['Digital', 'Creative Industries', 'Tourism', 'Education', 'Healthcare'],
    landmarks: ['Royal Pavilion', 'Brighton Pier', 'i360', 'The Lanes'],
    areas: ['The Lanes', 'North Laine', 'Kemptown', 'Hove', 'City Centre'],
    description: 'the UK\'s unofficial digital and creative capital by the sea',
    economyFacts: ['Brighton has more startups per capita than anywhere except London', 'The city\'s digital sector employs over 16,000 people', 'Brighton welcomes 10 million visitors annually'],
    localSeo: {
      intro: 'Brighton\'s reputation as the UK\'s creative capital attracts businesses and customers who value innovation and independence. Local search visibility is crucial for connecting with this distinctive market.',
      why: 'Brighton consumers are digitally sophisticated and actively support local independent businesses. But with intense competition across hospitality, retail, and creative services, local SEO determines who wins.',
      industries: 'We help Brighton businesses from creative agencies in North Laine to hospitality venues across the city, professional services to the thriving tourism sector.'
    },
    seo: {
      intro: 'Brighton has more digital businesses per capita than anywhere outside London. Our SEO campaigns help Brighton companies compete in this sophisticated market while reaching customers nationwide.',
      why: 'Brighton businesses set high standards. The digital companies here are among the UK\'s most innovative—and they expect the same quality from their SEO.',
      industries: 'From digital agencies to hospitality brands, creative studios to e-commerce companies, we\'ve delivered SEO results across Brighton\'s distinctive economy.'
    },
    consultancy: {
      intro: 'Brighton\'s sophisticated agency scene includes many teams with strong capabilities who need specialist SEO direction. Our consultancy provides that expert guidance.',
      why: 'Brighton agencies and in-house teams often have impressive creative talent but need specialist SEO expertise. Consultancy bridges that gap cost-effectively.',
      industries: 'We consult for Brighton agencies, creative businesses, and marketing teams across the city.'
    },
    image: 'https://images.unsplash.com/photo-1520986606890-93f8be55d6e4?w=1200&h=800&fit=crop',
    imageAlt: 'Brighton seafront with Royal Pavilion'
  },
  {
    slug: 'portsmouth',
    name: 'Portsmouth',
    region: 'Hampshire',
    population: '240,000',
    industries: ['Maritime', 'Defence', 'Tech', 'Tourism', 'Higher Education'],
    landmarks: ['Spinnaker Tower', 'HMS Victory', 'Historic Dockyard', 'Gunwharf Quays'],
    areas: ['Gunwharf Quays', 'Historic Dockyard', 'Southsea', 'Old Portsmouth', 'City Centre'],
    description: 'a historic naval city with a growing technology sector',
    economyFacts: ['Portsmouth is home to the Royal Navy\'s main base', 'The city\'s tech sector has grown 40% in five years', 'Portsmouth welcomes 2.5 million visitors to the Historic Dockyard annually'],
    localSeo: {
      intro: 'Portsmouth\'s combination of naval heritage, tourism appeal, and growing tech sector creates diverse local search opportunities. Visibility in Portsmouth\'s results means reaching residents and millions of annual visitors.',
      why: 'Portsmouth consumers are increasingly digital-first, researching local businesses online before visiting. Strong local SEO captures both the residential market and the substantial visitor economy.',
      industries: 'We help Portsmouth businesses from hospitality venues in Gunwharf Quays to professional services in the city centre, tourism operators to retailers across the city.'
    },
    seo: {
      intro: 'Portsmouth\'s economy is diversifying, with strong growth in technology alongside traditional maritime and defence sectors. Our SEO campaigns help Portsmouth businesses build visibility that drives sustainable growth.',
      why: 'Portsmouth businesses increasingly serve markets beyond the local area. Strong SEO provides the foundation for regional and national expansion.',
      industries: 'From defence contractors to tech startups, tourism operators to professional services, we\'ve delivered SEO results across Portsmouth\'s evolving economy.'
    },
    consultancy: {
      intro: 'Portsmouth\'s growing business community includes organisations seeking specialist SEO guidance. Our consultancy provides the strategic direction to maximise team performance.',
      why: 'As Portsmouth\'s economy diversifies, businesses need digital expertise that matches their ambition. Consultancy delivers strategic SEO direction cost-effectively.',
      industries: 'We consult for Portsmouth businesses across defence, tech, tourism, and professional services.'
    },
    image: 'https://images.unsplash.com/photo-1597230026577-0ab3d3d74e47?w=1200&h=800&fit=crop',
    imageAlt: 'Portsmouth Spinnaker Tower'
  },
  {
    slug: 'belfast',
    name: 'Belfast',
    region: 'Northern Ireland',
    population: '340,000',
    industries: ['Tech', 'Financial Services', 'Creative Industries', 'Aerospace', 'Tourism'],
    landmarks: ['Titanic Belfast', 'City Hall', 'St George\'s Market', 'Ulster Museum'],
    areas: ['Titanic Quarter', 'Cathedral Quarter', 'City Centre', 'Queen\'s Quarter', 'Ormeau'],
    description: 'Northern Ireland\'s capital with one of the UK\'s fastest-growing tech sectors',
    economyFacts: ['Belfast has been named the world\'s best city for fintech FDI', 'The city\'s tech sector has doubled in five years', 'Belfast has lower business costs than any other UK city'],
    localSeo: {
      intro: 'Belfast\'s tech renaissance has transformed it into one of the UK\'s most exciting business destinations. Local search visibility is essential for capturing customers across Northern Ireland\'s capital.',
      why: 'Belfast consumers are digitally engaged and increasingly expect businesses to be visible online. With the city\'s economy growing rapidly, local SEO helps you capture market share during this growth phase.',
      industries: 'We help Belfast businesses from tech companies in Titanic Quarter to hospitality venues in Cathedral Quarter, professional services to retailers across the city.'
    },
    seo: {
      intro: 'Belfast\'s tech sector is growing faster than any other UK city. Our SEO campaigns help Belfast businesses build visibility that supports ambitious growth across the UK and Ireland.',
      why: 'Belfast businesses increasingly compete on a UK-wide and international stage. Strong SEO provides the visibility needed to win business beyond Northern Ireland.',
      industries: 'From fintech companies to creative agencies, aerospace suppliers to professional services, we\'ve delivered SEO results across Belfast\'s booming economy.'
    },
    consultancy: {
      intro: 'Belfast\'s growing tech and corporate sector includes many teams seeking specialist SEO expertise. Our consultancy provides the strategic guidance to accelerate their success.',
      why: 'With Belfast\'s business community growing rapidly, in-house teams need SEO expertise that matches their ambition. Consultancy delivers that strategic advantage.',
      industries: 'We consult for Belfast tech companies, agencies, and corporate marketing teams across Northern Ireland.'
    },
    image: 'https://images.unsplash.com/photo-1602765947890-2e2aeb99fb37?w=1200&h=800&fit=crop',
    imageAlt: 'Belfast Titanic Quarter'
  },
  {
    slug: 'plymouth',
    name: 'Plymouth',
    region: 'Devon',
    population: '265,000',
    industries: ['Marine', 'Defence', 'Healthcare', 'Tourism', 'Higher Education'],
    landmarks: ['Plymouth Hoe', 'Royal William Yard', 'Smeaton\'s Tower', 'National Marine Aquarium'],
    areas: ['Barbican', 'Royal William Yard', 'City Centre', 'Sutton Harbour', 'Mutley'],
    description: 'the South West\'s largest coastal city and a centre for marine innovation',
    economyFacts: ['Plymouth is home to the UK\'s largest naval base', 'The city\'s marine sector is worth £400 million annually', 'Plymouth has the South West\'s largest hospital'],
    localSeo: {
      intro: 'Plymouth\'s position as the South West\'s largest coastal city creates significant local search opportunities. Visibility in Plymouth\'s results means reaching customers across Devon and Cornwall.',
      why: 'Plymouth consumers combine local pride with digital sophistication. They research online before visiting local businesses—making local SEO essential for capturing this market.',
      industries: 'We help Plymouth businesses from marine companies to hospitality venues at the Barbican, healthcare providers to retailers across the city.'
    },
    seo: {
      intro: 'Plymouth\'s economy is driven by marine innovation, defence, and healthcare. Our SEO campaigns help Plymouth businesses build visibility across these specialist sectors and beyond.',
      why: 'Plymouth businesses serve local, regional, and national markets. Strong SEO provides the visibility needed to compete across all these channels.',
      industries: 'From marine engineering to healthcare, defence contractors to tourism operators, we\'ve delivered SEO results across Plymouth\'s distinctive economy.'
    },
    consultancy: {
      intro: 'Plymouth\'s business community includes organisations seeking specialist SEO guidance. Our consultancy provides the strategic direction to maximise marketing team performance.',
      why: 'As Plymouth\'s economy evolves, businesses need digital expertise that matches their ambition. Consultancy delivers strategic SEO direction cost-effectively.',
      industries: 'We consult for Plymouth businesses across marine, defence, healthcare, and professional services.'
    },
    image: 'https://images.unsplash.com/photo-1578843559789-f6dbea3d24ee?w=1200&h=800&fit=crop',
    imageAlt: 'Plymouth Hoe waterfront'
  },
  {
    slug: 'reading',
    name: 'Reading',
    region: 'Berkshire',
    population: '230,000',
    industries: ['Tech', 'Financial Services', 'Professional Services', 'Logistics', 'Pharmaceuticals'],
    landmarks: ['Reading Abbey', 'The Oracle', 'Forbury Gardens', 'Madejski Stadium'],
    areas: ['Town Centre', 'Caversham', 'Green Park', 'Reading West', 'South Reading'],
    description: 'a major tech hub in the Thames Valley and one of the UK\'s most prosperous cities',
    economyFacts: ['Reading is home to Microsoft, Oracle, and Huawei European HQs', 'The town has the highest economic output per capita outside London', 'Reading\'s tech sector employs over 40,000 people'],
    localSeo: {
      intro: 'Reading\'s position at the heart of the Thames Valley tech corridor makes local search highly competitive. Standing out in Reading\'s results means competing with well-resourced businesses for a wealthy consumer base.',
      why: 'Reading residents have high disposable incomes and sophisticated buying habits. They research extensively online—making strong local SEO essential for targeting this affluent market.',
      industries: 'We help Reading businesses from professional services in the town centre to hospitality venues across the town, tech companies at Green Park to retailers at The Oracle.'
    },
    seo: {
      intro: 'Reading\'s tech sector is among the UK\'s most advanced. Our SEO campaigns help Reading businesses compete in this sophisticated market while reaching customers across the Thames Valley and beyond.',
      why: 'Reading businesses operate alongside global tech giants. Strong SEO ensures you capture your share of the market despite intense competition.',
      industries: 'From tech companies to professional services, pharmaceutical firms to logistics operators, we\'ve delivered SEO results across Reading\'s high-value economy.'
    },
    consultancy: {
      intro: 'Reading\'s sophisticated business community includes many marketing teams seeking specialist SEO guidance. Our consultancy provides the expert direction these talented teams need.',
      why: 'With some of the world\'s leading tech companies based in Reading, local businesses need SEO expertise that matches this competitive environment.',
      industries: 'We consult for Reading tech companies, professional services firms, and corporate marketing teams across the Thames Valley.'
    },
    image: 'https://images.unsplash.com/photo-1590069845295-f9d41f0cf857?w=1200&h=800&fit=crop',
    imageAlt: 'Reading town centre'
  },
  {
    slug: 'coventry',
    name: 'Coventry',
    region: 'West Midlands',
    population: '370,000',
    industries: ['Automotive', 'Advanced Manufacturing', 'Gaming', 'Healthcare', 'Higher Education'],
    landmarks: ['Coventry Cathedral', 'Coventry Transport Museum', 'FarGo Village', 'Herbert Art Gallery'],
    areas: ['City Centre', 'FarGo Village', 'Cathedral Quarter', 'Tile Hill', 'Earlsdon'],
    description: 'a city of innovation with the UK\'s largest gaming cluster',
    economyFacts: ['Coventry is home to the UK\'s largest games development cluster', 'The city\'s automotive sector includes Jaguar Land Rover', 'Coventry was UK City of Culture 2021'],
    localSeo: {
      intro: 'Coventry\'s transformation from industrial city to innovation hub has created new opportunities for local businesses. Local search visibility is crucial for capturing customers across this evolving market.',
      why: 'Coventry\'s young population—boosted by two major universities—is digitally native. They search online first for local businesses, making strong local SEO essential for growth.',
      industries: 'We help Coventry businesses from creative enterprises at FarGo Village to professional services in the city centre, hospitality venues to automotive suppliers.'
    },
    seo: {
      intro: 'Coventry\'s economy is being reshaped by gaming, advanced manufacturing, and innovation. Our SEO campaigns help Coventry businesses build visibility that matches their forward-thinking approach.',
      why: 'Coventry businesses increasingly serve national and international markets. Strong SEO provides the foundation for growth beyond local boundaries.',
      industries: 'From gaming studios to automotive suppliers, healthcare providers to professional services, we\'ve delivered SEO results across Coventry\'s diverse economy.'
    },
    consultancy: {
      intro: 'Coventry\'s growing innovation sector includes organisations seeking specialist SEO guidance. Our consultancy provides the strategic direction to maximise team performance.',
      why: 'With Coventry\'s economy evolving rapidly, businesses need SEO expertise that matches their ambition. Consultancy delivers that strategic advantage.',
      industries: 'We consult for Coventry businesses across gaming, automotive, healthcare, and professional services.'
    },
    image: 'https://images.unsplash.com/photo-1591115559411-b90de65f4103?w=1200&h=800&fit=crop',
    imageAlt: 'Coventry Cathedral'
  },
  {
    slug: 'derby',
    name: 'Derby',
    region: 'East Midlands',
    population: '260,000',
    industries: ['Aerospace', 'Rail', 'Advanced Manufacturing', 'Tech', 'Healthcare'],
    landmarks: ['Derby Cathedral', 'Silk Mill', 'Cathedral Quarter', 'Pride Park Stadium'],
    areas: ['Cathedral Quarter', 'City Centre', 'Pride Park', 'Darley Abbey', 'Markeaton'],
    description: 'a centre of engineering excellence and home to Rolls-Royce',
    economyFacts: ['Derby is home to Rolls-Royce\'s aerospace headquarters', 'The city is the UK\'s rail industry capital', 'Derby generates the highest GVA per worker in the East Midlands'],
    localSeo: {
      intro: 'Derby\'s engineering heritage has evolved into a modern economy led by aerospace, rail, and advanced manufacturing. Local search visibility helps you capture customers across this prosperous market.',
      why: 'Derby\'s workforce includes some of the UK\'s highest-paid engineers, creating significant local spending power. Strong local SEO ensures you reach this affluent customer base.',
      industries: 'We help Derby businesses from professional services in Cathedral Quarter to hospitality venues across the city, suppliers to major manufacturers to retail businesses.'
    },
    seo: {
      intro: 'Derby\'s engineering excellence extends across aerospace, rail, and advanced manufacturing. Our SEO campaigns help Derby businesses build visibility that matches their technical sophistication.',
      why: 'Derby businesses often serve national and international B2B markets. Strong SEO ensures you\'re visible when procurement teams and decision-makers are searching.',
      industries: 'From aerospace suppliers to rail technology companies, advanced manufacturers to professional services, we\'ve delivered SEO results across Derby\'s engineering-led economy.'
    },
    consultancy: {
      intro: 'Derby\'s sophisticated engineering community includes businesses seeking specialist SEO guidance. Our consultancy provides the strategic direction to complement their technical expertise.',
      why: 'With Derby\'s world-class engineering sector, businesses need SEO expertise that matches their standards. Consultancy delivers that quality.',
      industries: 'We consult for Derby businesses across aerospace, rail, manufacturing, and professional services.'
    },
    image: 'https://images.unsplash.com/photo-1587407627257-27b7127c868c?w=1200&h=800&fit=crop',
    imageAlt: 'Derby Cathedral Quarter'
  },
  {
    slug: 'stoke-on-trent',
    name: 'Stoke-on-Trent',
    region: 'Staffordshire',
    population: '270,000',
    industries: ['Ceramics', 'Distribution', 'Manufacturing', 'Digital', 'Healthcare'],
    landmarks: ['World of Wedgwood', 'Trentham Gardens', 'The Potteries Museum', 'Emma Bridgewater'],
    areas: ['Hanley', 'Stoke', 'Burslem', 'Trentham', 'Newcastle-under-Lyme'],
    description: 'the Potteries, famous for ceramics and reinventing itself for the digital age',
    economyFacts: ['Stoke-on-Trent is the world\'s ceramics capital', 'The city is a major distribution hub', 'Stoke has seen significant investment in digital infrastructure'],
    localSeo: {
      intro: 'Stoke-on-Trent\'s transformation from traditional manufacturing to a diverse modern economy creates opportunities for businesses visible in local search. The Potteries\' strong community loyalty rewards local businesses.',
      why: 'Stoke residents strongly support local businesses—but they research online first. With improving digital infrastructure, local SEO is increasingly important for capturing this loyal market.',
      industries: 'We help Stoke businesses from ceramics manufacturers to hospitality venues, distribution companies to retailers across the Potteries.'
    },
    seo: {
      intro: 'Stoke-on-Trent\'s economy is diversifying beyond ceramics into distribution, digital, and modern manufacturing. Our SEO campaigns help Stoke businesses build visibility across these evolving sectors.',
      why: 'Stoke businesses increasingly serve national markets. Strong SEO provides the visibility needed to compete beyond regional boundaries.',
      industries: 'From ceramics brands to distribution companies, healthcare providers to professional services, we\'ve delivered SEO results across Stoke\'s diverse economy.'
    },
    consultancy: {
      intro: 'Stoke-on-Trent\'s evolving business community includes organisations seeking specialist SEO guidance. Our consultancy provides the strategic direction to support their digital transformation.',
      why: 'As Stoke\'s economy evolves, businesses need digital expertise to match. Consultancy delivers SEO strategy that supports transformation.',
      industries: 'We consult for Stoke businesses across ceramics, distribution, manufacturing, and professional services.'
    },
    image: 'https://images.unsplash.com/photo-1580654838249-87ed56e1e1b0?w=1200&h=800&fit=crop',
    imageAlt: 'Stoke-on-Trent bottle kilns'
  },
  {
    slug: 'wolverhampton',
    name: 'Wolverhampton',
    region: 'West Midlands',
    population: '265,000',
    industries: ['Manufacturing', 'Aerospace', 'Professional Services', 'Retail', 'Healthcare'],
    landmarks: ['Grand Theatre', 'Molineux Stadium', 'Bantock House', 'Wightwick Manor'],
    areas: ['City Centre', 'Mander Centre', 'West Park', 'Bilston', 'Penn'],
    description: 'a key West Midlands business location with strong manufacturing and aerospace sectors',
    economyFacts: ['Wolverhampton is part of the UK\'s largest manufacturing region', 'The city has seen £4 billion investment in regeneration', 'Wolverhampton is strategically located on the HS2 network'],
    localSeo: {
      intro: 'Wolverhampton\'s ongoing regeneration is attracting new businesses and investment. Local search visibility is increasingly important for capturing customers in this evolving market.',
      why: 'Wolverhampton residents are loyal to local businesses. Strong local SEO ensures you\'re visible when they search for products and services in their area.',
      industries: 'We help Wolverhampton businesses from professional services in the city centre to hospitality venues across the city, manufacturers to retailers.'
    },
    seo: {
      intro: 'Wolverhampton\'s economy combines traditional manufacturing strength with growing professional services and aerospace sectors. Our SEO campaigns help Wolverhampton businesses build visibility that supports growth.',
      why: 'Wolverhampton businesses serve local and regional markets. Strong SEO ensures you capture market share across the West Midlands.',
      industries: 'From aerospace suppliers to professional services, manufacturers to healthcare providers, we\'ve delivered SEO results across Wolverhampton\'s economy.'
    },
    consultancy: {
      intro: 'Wolverhampton\'s business community includes organisations seeking specialist SEO guidance. Our consultancy provides strategic direction for teams looking to improve their digital performance.',
      why: 'As Wolverhampton attracts more investment, businesses need SEO expertise to capitalise on opportunities. Consultancy delivers that strategic advantage.',
      industries: 'We consult for Wolverhampton businesses across manufacturing, aerospace, professional services, and retail.'
    },
    image: 'https://images.unsplash.com/photo-1617871929560-82da77ec8a80?w=1200&h=800&fit=crop',
    imageAlt: 'Wolverhampton city centre'
  },
  {
    slug: 'swansea',
    name: 'Swansea',
    region: 'South Wales',
    population: '245,000',
    industries: ['Tech', 'Financial Services', 'Healthcare', 'Higher Education', 'Tourism'],
    landmarks: ['Swansea Marina', 'LC Swansea', 'Dylan Thomas Centre', 'Mumbles'],
    areas: ['City Centre', 'Marina', 'Uplands', 'Mumbles', 'SA1'],
    description: 'Wales\' second city with a growing tech sector and beautiful coastal setting',
    economyFacts: ['Swansea Bay Tech City initiative is driving digital growth', 'Swansea University is ranked in the global top 300', 'The city has major regeneration plans underway'],
    localSeo: {
      intro: 'Swansea combines beautiful coastal living with a growing tech economy. Local search visibility is essential for capturing customers across Wales\' second city and the wider Swansea Bay region.',
      why: 'Swansea residents value local businesses and the city\'s growing tech sector means digital sophistication is increasing. Local SEO connects you with this evolving market.',
      industries: 'We help Swansea businesses from tech companies in SA1 to hospitality venues in Mumbles, professional services in the city centre to tourism operators across Gower.'
    },
    seo: {
      intro: 'Swansea\'s economy is being transformed by tech investment and university research. Our SEO campaigns help Swansea businesses build visibility that supports ambitious growth.',
      why: 'Swansea businesses increasingly compete beyond Wales. Strong SEO provides the visibility needed to reach customers across the UK.',
      industries: 'From tech startups to healthcare providers, financial services to tourism operators, we\'ve delivered SEO results across Swansea\'s diverse economy.'
    },
    consultancy: {
      intro: 'Swansea\'s growing business community includes organisations seeking specialist SEO guidance. Our consultancy provides strategic direction for teams looking to accelerate their digital growth.',
      why: 'With Swansea\'s tech sector growing rapidly, businesses need SEO expertise that matches their ambition. Consultancy delivers that strategic edge.',
      industries: 'We consult for Swansea businesses across tech, financial services, healthcare, and professional services.'
    },
    image: 'https://images.unsplash.com/photo-1592916182410-8eb2ced2b7c3?w=1200&h=800&fit=crop',
    imageAlt: 'Swansea Marina waterfront'
  },
  {
    slug: 'milton-keynes',
    name: 'Milton Keynes',
    region: 'Buckinghamshire',
    population: '290,000',
    industries: ['Tech', 'Financial Services', 'Logistics', 'Professional Services', 'Retail'],
    landmarks: ['MK Dons Stadium', 'The Centre:MK', 'Bletchley Park', 'National Bowl'],
    areas: ['Central Milton Keynes', 'Bletchley', 'Wolverton', 'Campbell Park', 'Kingston'],
    description: 'one of the UK\'s fastest-growing cities and a hub for tech and innovation',
    economyFacts: ['Milton Keynes is the UK\'s fastest-growing city', 'The city has the highest business start-up rate in the UK', 'Milton Keynes is home to the Open University and Red Bull Racing'],
    localSeo: {
      intro: 'Milton Keynes\' rapid growth creates intense local search competition. With the UK\'s highest business start-up rate, standing out requires strategic, expert-led local SEO.',
      why: 'MK residents are young, affluent, and digitally sophisticated. They research extensively online before engaging local businesses—making local SEO essential for growth.',
      industries: 'We help Milton Keynes businesses from tech companies in the business parks to retailers at Centre:MK, professional services to hospitality venues across the city.'
    },
    seo: {
      intro: 'Milton Keynes attracts ambitious businesses and talented professionals. Our SEO campaigns help MK companies build visibility that matches the city\'s growth trajectory.',
      why: 'Milton Keynes businesses compete nationally from day one. Strong SEO foundations support the rapid growth that defines the city\'s business culture.',
      industries: 'From tech companies to logistics operators, financial services to professional services, we\'ve delivered SEO results across Milton Keynes\' dynamic economy.'
    },
    consultancy: {
      intro: 'Milton Keynes\' sophisticated business community includes many marketing teams seeking specialist SEO guidance. Our consultancy provides the expert direction these teams need.',
      why: 'With MK\'s competitive business environment, in-house teams need every advantage. Expert SEO consultancy delivers strategic direction that drives results.',
      industries: 'We consult for Milton Keynes tech companies, financial services firms, and corporate marketing teams.'
    },
    image: 'https://images.unsplash.com/photo-1604357710754-12fe5dba2d46?w=1200&h=800&fit=crop',
    imageAlt: 'Milton Keynes Centre:MK'
  },
  {
    slug: 'aberdeen',
    name: 'Aberdeen',
    region: 'North East Scotland',
    population: '230,000',
    industries: ['Energy', 'Tech', 'Life Sciences', 'Financial Services', 'Tourism'],
    landmarks: ['Aberdeen Harbour', 'Marischal College', 'Old Aberdeen', 'Beach Boulevard'],
    areas: ['City Centre', 'Old Aberdeen', 'Beach Boulevard', 'West End', 'Rosemount'],
    description: 'the energy capital of Europe, now diversifying into tech and life sciences',
    economyFacts: ['Aberdeen is Europe\'s oil and gas capital', 'The city is diversifying into renewable energy and tech', 'Aberdeen has the UK\'s highest average salary outside London'],
    localSeo: {
      intro: 'Aberdeen\'s position as Europe\'s energy capital creates a unique local market. With the UK\'s highest salaries outside London, local search visibility means access to wealthy, discerning consumers.',
      why: 'Aberdeen residents have significant disposable income and expect quality. Strong local SEO ensures you reach this affluent market when they search for products and services.',
      industries: 'We help Aberdeen businesses from energy sector suppliers to hospitality venues, professional services in the city centre to retailers across the Granite City.'
    },
    seo: {
      intro: 'Aberdeen\'s economy is diversifying from oil and gas into renewable energy, tech, and life sciences. Our SEO campaigns help Aberdeen businesses build visibility across these evolving sectors.',
      why: 'Aberdeen businesses serve national and international energy markets. Strong SEO ensures you\'re visible when decision-makers worldwide are searching.',
      industries: 'From energy companies to tech startups, life sciences firms to professional services, we\'ve delivered SEO results across Aberdeen\'s distinctive economy.'
    },
    consultancy: {
      intro: 'Aberdeen\'s sophisticated business community includes many organisations seeking specialist SEO guidance. Our consultancy provides strategic direction for teams looking to excel in digital.',
      why: 'With Aberdeen\'s economy evolving, businesses need SEO expertise that matches their changing needs. Consultancy delivers that strategic advantage.',
      industries: 'We consult for Aberdeen energy companies, tech firms, professional services, and corporate marketing teams.'
    },
    image: 'https://images.unsplash.com/photo-1588009093498-e6476cd95c71?w=1200&h=800&fit=crop',
    imageAlt: 'Aberdeen granite city skyline'
  },
  {
    slug: 'norwich',
    name: 'Norwich',
    region: 'Norfolk',
    population: '210,000',
    industries: ['Financial Services', 'Tech', 'Creative Industries', 'Healthcare', 'Tourism'],
    landmarks: ['Norwich Cathedral', 'Norwich Castle', 'The Forum', 'Norwich Lanes'],
    areas: ['Norwich Lanes', 'City Centre', 'Cathedral Quarter', 'Riverside', 'Golden Triangle'],
    description: 'East Anglia\'s vibrant capital and a major insurance hub',
    economyFacts: ['Norwich is the UK\'s third largest insurance centre', 'The city has a thriving creative and digital sector', 'Norwich is consistently rated among the UK\'s best places to live'],
    localSeo: {
      intro: 'Norwich combines historic charm with a modern economy led by financial services and creative industries. Local search visibility is essential for capturing customers across East Anglia\'s capital.',
      why: 'Norwich residents are proud of their city and supportive of local businesses. Strong local SEO ensures you\'re visible when they search for local products and services.',
      industries: 'We help Norwich businesses from creative agencies in the Lanes to financial services in the city centre, hospitality venues to retailers across the city.'
    },
    seo: {
      intro: 'Norwich\'s economy combines traditional financial services strength with growing creative and tech sectors. Our SEO campaigns help Norwich businesses build visibility across these markets.',
      why: 'Norwich businesses serve local, regional, and increasingly national markets. Strong SEO provides the foundation for growth across all these channels.',
      industries: 'From insurance companies to creative agencies, tech startups to professional services, we\'ve delivered SEO results across Norwich\'s diverse economy.'
    },
    consultancy: {
      intro: 'Norwich\'s business community includes many organisations seeking specialist SEO guidance. Our consultancy provides strategic direction for teams looking to enhance their digital performance.',
      why: 'With Norwich\'s creative and financial sectors both growing, businesses need SEO expertise that addresses their specific markets. Consultancy delivers that.',
      industries: 'We consult for Norwich financial services firms, creative agencies, and corporate marketing teams.'
    },
    image: 'https://images.unsplash.com/photo-1622394920059-8a43b9e62c26?w=1200&h=800&fit=crop',
    imageAlt: 'Norwich Cathedral and city centre'
  },
  {
    slug: 'oxford',
    name: 'Oxford',
    region: 'Oxfordshire',
    population: '155,000',
    industries: ['Education', 'Tech', 'Life Sciences', 'Publishing', 'Tourism'],
    landmarks: ['University of Oxford', 'Bodleian Library', 'Radcliffe Camera', 'Ashmolean Museum'],
    areas: ['City Centre', 'Jericho', 'Cowley', 'Headington', 'Summertown'],
    description: 'a world-renowned centre of education and innovation',
    economyFacts: ['Oxford\'s science parks house over 200 high-tech companies', 'The city has the highest concentration of spin-out companies in Europe', 'Oxford attracts £600 million in venture capital annually'],
    localSeo: {
      intro: 'Oxford combines world-class academia with a thriving commercial sector. Local search visibility in Oxford means reaching a highly educated, affluent consumer base with exacting standards.',
      why: 'Oxford residents and visitors are discerning consumers who research thoroughly. Strong local SEO ensures you\'re visible when they search for quality products and services.',
      industries: 'We help Oxford businesses from tech companies on the science parks to hospitality venues in the city centre, professional services to specialist retailers.'
    },
    seo: {
      intro: 'Oxford\'s tech and life sciences cluster is among Europe\'s most innovative. Our SEO campaigns help Oxford businesses build visibility that matches their ground-breaking work.',
      why: 'Oxford businesses often serve global markets. Strong SEO ensures you\'re visible when researchers, investors, and decision-makers worldwide are searching.',
      industries: 'From life sciences startups to established tech companies, publishing houses to professional services, we\'ve delivered SEO results across Oxford\'s innovation-led economy.'
    },
    consultancy: {
      intro: 'Oxford\'s sophisticated business and academic community includes many organisations seeking specialist SEO guidance. Our consultancy provides strategic direction for discerning clients.',
      why: 'With Oxford\'s competitive knowledge economy, businesses need SEO expertise that matches their intellectual rigour. Consultancy delivers that quality.',
      industries: 'We consult for Oxford tech companies, life sciences firms, publishing houses, and university spin-outs.'
    },
    image: 'https://images.unsplash.com/photo-1580902394724-b08ff9ba7e8a?w=1200&h=800&fit=crop',
    imageAlt: 'Oxford University Radcliffe Camera'
  },
  {
    slug: 'cambridge',
    name: 'Cambridge',
    region: 'Cambridgeshire',
    population: '145,000',
    industries: ['Tech', 'Life Sciences', 'Education', 'Research', 'Professional Services'],
    landmarks: ['King\'s College Chapel', 'The Backs', 'Fitzwilliam Museum', 'Mathematical Bridge'],
    areas: ['City Centre', 'Science Park', 'Mill Road', 'Newnham', 'Chesterton'],
    description: 'the heart of Silicon Fen and one of the world\'s leading tech hubs',
    economyFacts: ['Cambridge generates £15 billion in annual economic output', 'Silicon Fen has over 5,000 tech companies', 'Cambridge attracts more venture capital per capita than anywhere outside the US'],
    localSeo: {
      intro: 'Cambridge is one of the world\'s leading innovation centres. Local search visibility means reaching an extraordinarily wealthy, educated consumer base with demanding expectations.',
      why: 'Cambridge residents include world-leading academics, tech entrepreneurs, and venture capitalists. They expect quality—and they search online to find it.',
      industries: 'We help Cambridge businesses from tech companies on the Science Park to hospitality venues in the city centre, professional services to specialist retailers.'
    },
    seo: {
      intro: 'Cambridge is synonymous with innovation. Our SEO campaigns help Cambridge businesses build visibility that matches their world-leading work in tech and life sciences.',
      why: 'Cambridge businesses serve global markets from day one. Strong SEO ensures you\'re visible when investors, partners, and customers worldwide are searching.',
      industries: 'From AI startups to established biotech companies, research consultancies to professional services, we\'ve delivered SEO results across Silicon Fen.'
    },
    consultancy: {
      intro: 'Cambridge\'s world-class business and academic community demands specialist expertise. Our consultancy provides the rigorous, evidence-based SEO guidance these organisations expect.',
      why: 'Cambridge businesses set the highest standards. SEO consultancy must match that quality with strategic depth and measurable results.',
      industries: 'We consult for Cambridge tech companies, life sciences firms, research organisations, and venture-backed startups.'
    },
    image: 'https://images.unsplash.com/photo-1580902394836-21e0d429b7f4?w=1200&h=800&fit=crop',
    imageAlt: 'Cambridge King\'s College Chapel'
  },
  {
    slug: 'york',
    name: 'York',
    region: 'North Yorkshire',
    population: '210,000',
    industries: ['Tourism', 'Rail', 'Financial Services', 'Tech', 'Higher Education'],
    landmarks: ['York Minster', 'The Shambles', 'York City Walls', 'National Railway Museum'],
    areas: ['City Centre', 'Minster Quarter', 'Bishopthorpe Road', 'Clifton', 'Holgate'],
    description: 'a historic city combining heritage tourism with growing digital sectors',
    economyFacts: ['York welcomes 7 million visitors annually', 'The city is a major insurance and financial services centre', 'York has been named best place to live in the UK'],
    localSeo: {
      intro: 'York uniquely combines world-class heritage tourism with thriving financial and digital sectors. Local search visibility means capturing both the substantial resident market and millions of annual visitors.',
      why: 'York\'s 7 million annual visitors search online for local recommendations. Strong local SEO ensures you\'re visible to both residents and tourists.',
      industries: 'We help York businesses from hospitality venues across the historic centre to professional services, retailers in The Shambles to tourism operators.'
    },
    seo: {
      intro: 'York\'s economy balances heritage tourism with growing financial services and tech sectors. Our SEO campaigns help York businesses build visibility across these diverse markets.',
      why: 'York businesses serve local residents, regional customers, and international visitors. Strong SEO ensures you\'re visible across all these channels.',
      industries: 'From tourism operators to financial services companies, tech startups to hospitality brands, we\'ve delivered SEO results across York\'s distinctive economy.'
    },
    consultancy: {
      intro: 'York\'s business community includes many organisations seeking specialist SEO guidance. Our consultancy provides strategic direction that addresses York\'s unique market characteristics.',
      why: 'With York\'s complex mix of tourism and B2B markets, businesses need SEO expertise that addresses multiple audience types. Consultancy delivers that breadth.',
      industries: 'We consult for York tourism businesses, financial services firms, and corporate marketing teams.'
    },
    image: 'https://images.unsplash.com/photo-1558537348-c0f8e733989d?w=1200&h=800&fit=crop',
    imageAlt: 'York Minster and Shambles'
  }
];

export function getCityBySlug(slug: string): CityContent | undefined {
  return cities.find(city => city.slug === slug);
}

export function getAllCitySlugs(): string[] {
  return cities.map(city => city.slug);
}
