import heroImage from "@/assets/creative-granite-hero.jpg";
import vanityImage from "@/assets/creative-granite-vanity.jpg";
import slabImage from "@/assets/creative-granite-slab.jpg";

export const externalLinks = {
  estimator: "https://creativeestimator.com",
  visualizer: "https://creative_granite.quotekitchenandbath.com",
  instagram: "https://www.instagram.com/creativegraniteanddesign/",
  maps: "https://www.google.com/maps/search/?api=1&query=1998%20N.%20Redwood%20Rd.%20Salt%20Lake%20City%2C%20UT%2084116",
};

export const contact = {
  phone: "(801) 886-0204",
  phoneHref: "tel:+18018860204",
  email: "info@creativegranite.com",
  emailHref: "mailto:info@creativegranite.com",
  address: "1998 N. Redwood Rd. Salt Lake City, UT 84116",
  serviceArea: "Utah, Idaho, and Wyoming",
};

export const logoText = "Creative Granite & Design";
export const logoImage = "https://www.creativegranite.com/wp-content/uploads/2025/09/Group-18066-1.png";

export const images = {
  hero: heroImage,
  hero2: slabImage,
  story: slabImage,
  visualizer: heroImage,
  vanity: vanityImage,
  slab: slabImage,
  award: slabImage,
};

export const services = [
  { slug: "sinks", title: "Sinks", copy: "Plumbing accessories and sink selections coordinated with your stone, cabinetry, and installation details.", image: images.vanity },
  { slug: "countertops", title: "Countertops", copy: "Custom layouts, professional templating, fabrication, and installation for elevated kitchens, bathrooms, and living spaces.", image: images.hero },
  { slug: "finished-edges", title: "Finished Edges", copy: "Refined edge profiles that give every slab a tailored architectural finish and a polished final detail.", image: images.slab },
  { slug: "granite-countertops", title: "Granite Countertops", copy: "Premium granite countertops in Utah with expert fabrication, custom design, and professional installation.", image: images.hero },
  { slug: "marble-countertops", title: "Marble Countertops", copy: "Elegant marble surfaces bringing timeless luxury and beauty to kitchens, bathrooms, vanities, and more.", image: images.vanity },
  { slug: "quartz-countertops", title: "Quartz Countertops", copy: "High-quality quartz countertops that are durable, low-maintenance, and precisely installed for modern homes.", image: images.hero },
  { slug: "quartzite-countertops", title: "Quartzite Countertops", copy: "Durable natural quartzite surfaces that bring exceptional strength and luxury to kitchens, bathrooms, and more.", image: images.hero2 },
  { slug: "solid-surface-countertops", title: "Solid Surface Countertops", copy: "Seamless solid surface options for clean-lined, functional, and highly customizable interior spaces.", image: images.hero },
  { slug: "custom-cabinets", title: "Custom Cabinets", copy: "Cabinetry support to complete kitchen refreshes and coordinate beautifully with stone selections.", image: images.hero2 },
  { slug: "new-construction", title: "New Construction", copy: "Premium natural stone surfaces for homes, townhomes, condos, and community spaces throughout Utah.", image: images.slab },
  { slug: "multi-family", title: "Multi-Family", copy: "Production capacity and dependable installation crews for apartments, model units, clubhouses, and amenities.", image: images.vanity },
  { slug: "contractors-designers", title: "Contractors & Designers", copy: "Reliable support, streamlined communication, and material expertise for remodels, new builds, and custom projects.", image: images.slab },
];

export const portfolioItems = [
  { id: 1, category: "Kitchens", slug: "kitchens", title: "Kitchen Project", tone: "Coastal / Modern / Top Seller", image: images.hero },
  { id: 2, category: "Kitchens", slug: "kitchens", title: "Statement Island", tone: "Natural Stone / Custom Layout", image: images.visualizer },
  { id: 3, category: "Kitchens", slug: "kitchens", title: "Layered Stone Kitchen", tone: "Bright / Architectural", image: images.hero2 },
  { id: 4, category: "Vanities", slug: "vanities", title: "Bathroom Project", tone: "Tailored / Spa Detail", image: images.vanity },
  { id: 5, category: "Showers", slug: "showers", title: "Stone Shower Detail", tone: "Continuous Surface", image: images.vanity },
  { id: 6, category: "Fireplaces", slug: "fireplaces", title: "Fireplace Surround", tone: "Warm / Minimal", image: images.slab },
  { id: 7, category: "Parade of Homes", slug: "parade-of-homes", title: "Parade Home Surface", tone: "Awarded Craftsmanship", image: images.hero },
  { id: 8, category: "Videos", slug: "videos", title: "Workshop Motion", tone: "Behind the Build", image: images.slab },
];

export const testimonials = [
  { quote: "Great Place To Get Beautiful Counter Tops!", name: "Creative Granite Client" },
  { quote: "The team helped us choose the right stone, handled every detail, and delivered a kitchen that feels custom and timeless.", name: "Salt Lake City Homeowner" },
  { quote: "Professional scheduling, precise templating, and a finished result our clients loved.", name: "Utah Builder Partner" },
];

export const blogPosts = [
  { title: "The Latest Trends in Marble and Granite Countertops in Utah", date: "Stone Journal", category: "Materials", excerpt: "A refined look at what Utah homeowners are choosing for elevated natural stone surfaces.", image: images.slab },
  { title: "Top Off Your Love: Why Upgrading to Granite or Marble Countertops is the Perfect Valentine’s Gift", date: "Design Notes", category: "Inspiration", excerpt: "Why lasting materials and thoughtful fabrication can transform the heart of the home.", image: images.hero },
  { title: "The Effortless Elegance: Why Cleaning and Maintaining Granite and Natural Stone Is Easier", date: "Care Guide", category: "Education", excerpt: "Simple habits that preserve the character, performance, and presence of natural stone.", image: images.vanity },
];

export const awards = ["2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024"];

export const nav = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Design Center", to: "/design-center" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];
