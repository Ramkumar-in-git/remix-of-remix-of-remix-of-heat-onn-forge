import cartridgeImage from "@/assets/heater-cartridge.jpg";
import bandImage from "@/assets/heater-band.jpg";
import ceramicBandImage from "@/assets/heater-ceramic-band.jpg";
import stripImage from "@/assets/heater-strip.jpg";
import customImage from "@/assets/heater-custom.jpg";
import workshopImage from "@/assets/heater-workshop.jpg";
import applicationsImage from "@/assets/heater-applications.jpg";
import heroImage from "@/assets/heater-hero.jpg";

export const images = {
  hero: heroImage,
  workshop: workshopImage,
  applications: applicationsImage,
};

export const navigation = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Blogs", to: "/blogs" },
  { label: "Contact", to: "/contact" },
];

export interface ProductCategory {
  slug: string;
  number: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface Product {
  slug: string;
  name: string;
  categorySlug: string;
  category: string;
  specification: string;
  image: string;
  imageAlt: string;
  overview: string;
  construction: string;
  features: string[];
  applications: string[];
  technicalSpecs: { label: string; value: string }[];
}

export const products: Product[] = [
  {
    slug: "high-density-cartridge-heater",
    name: "High-Density Cartridge Heater",
    categorySlug: "high-density-cartridge-heater",
    category: "Manufacturing Product 01",
    specification: "Compact, high-performance heating for drilled bores",
    image: cartridgeImage,
    imageAlt: "Stainless steel cartridge heaters arranged on a dark workshop surface",
    overview:
      "Reliable, thermally efficient cartridge heaters made for high-temperature environments. Construction is selected around the application, working temperature and specific load.",
    construction:
      "FeCrAl or NiCr resistance wire is insulated within a precision metal sheath. Plasma welding, optional temperature control components and a wide diameter range support application-specific builds.",
    features: [
      "Power density up to 35 W/cm²",
      "Maximum sheath temperature up to 860°C",
      "Plasma welding available for a clean, durable finish",
      "Optional thermostat or thermal fuse",
      "Wide sheath diameter selection",
    ],
    applications: [
      "Plastic machinery", "Packaging machinery", "Medical devices", "Scientific instruments", "Hydraulic systems", "Refrigeration and domestic heating",
    ],
    technicalSpecs: [
      { label: "Heating wire", value: "FeCrAl / NiCr" },
      { label: "Sheath", value: "AISI 304 / 321 / 316; Incoloy 800" },
      { label: "Diameter", value: "6–20 mm" },
      { label: "Sheath temperature", value: "Maximum 860°C" },
      { label: "Power density", value: "Customized, maximum 35 W/cm²" },
      { label: "Diameter tolerance", value: "Minimum 0.05 mm" },
    ],
  },
  {
    slug: "ceramic-mica-heaters",
    name: "Ceramic & Mica Heaters",
    categorySlug: "ceramic-mica-heaters",
    category: "Manufacturing Product 02",
    specification: "Band, strip and nozzle heaters for process machinery",
    image: bandImage,
    imageAlt: "Mica band heaters of several diameters on a steel bench",
    overview:
      "Ceramic- and mica-insulated heaters provide dependable contact heating for barrels, nozzles, strips and other process surfaces across plastics, medical and kitchen equipment.",
    construction:
      "NiCr or FeCrAl resistance wire is insulated with ceramic or mica, protected by a stainless, aluminized-steel or AISI 430 cover, and configured to the required width and closure arrangement.",
    features: [
      "Power density up to 8 W/cm²", "Minimum width of 20 mm", "Fully enclosed construction available", "Cover options for temperatures up to 450°C", "Ceramic-fibre, aerogel or fiberglass insulation options",
    ],
    applications: [
      "Injection moulding machinery", "Extrusion machinery", "Medical equipment", "Kitchen equipment", "Barrel, strip and nozzle heating",
    ],
    technicalSpecs: [
      { label: "Insulator", value: "Ceramic / mica" },
      { label: "Cover", value: "AISI 304 / 430 / aluminized steel" },
      { label: "Heating wire", value: "NiCr / FeCrAl" },
      { label: "Thermal insulation", value: "Ceramic fibre / aerogel / fiberglass" },
      { label: "Power density", value: "Maximum 8 W/cm²" },
      { label: "Minimum width", value: "20 mm" },
    ],
  },
  {
    slug: "tubular-heater",
    name: "Tubular Heater",
    categorySlug: "tubular-heater",
    category: "Manufacturing Product 03",
    specification: "Immersion and finned tubular elements for liquids and air",
    image: stripImage,
    imageAlt: "Industrial tubular heating elements with formed metal sheaths",
    overview:
      "Tubular heaters are available as immersion and finned-air configurations in varied pipe diameters, lengths, power ratings and installation arrangements.",
    construction:
      "Centered FeCrAl or NiCr wire and densely packed magnesium oxide support uniform heat distribution, dielectric performance and reliable operation. Flanged and unflanged builds are available.",
    features: [
      "Immersion and finned-air constructions", "Multiple flange and installation options", "Sheath lengths up to 6000 mm", "Stainless steel, Incoloy and copper sheath options", "Multiple welding and brazing processes",
    ],
    applications: [
      "Industrial water and oil heating", "Boilers and thermoregulators", "Dryers and air-conditioning equipment", "Packaging machines", "Dishwashers and catering equipment",
    ],
    technicalSpecs: [
      { label: "Sheath", value: "AISI 304 / 321 / 316; Incoloy 800 / 840; copper" },
      { label: "Heating wire", value: "FeCrAl / NiCr" },
      { label: "Diameter", value: "8–8.2 / 10.8–11 / 12.5 / 16 mm" },
      { label: "Length", value: "Maximum 6000 mm" },
      { label: "Power", value: "Customized" },
      { label: "Fin options", value: "Steel, aluminium or stainless steel" },
    ],
  },
  {
    slug: "casting-heater",
    name: "Casting Heater",
    categorySlug: "casting-heater",
    category: "Manufacturing Product 04",
    specification: "Cast aluminium heating assemblies in application-specific forms",
    image: bandImage,
    imageAlt: "Industrial cast heating assembly on a workshop surface",
    overview:
      "Cast heaters are manufactured in varied shapes, sizes and structures, including aluminium die-cast base plates, steam generators and heating blocks.",
    construction:
      "A tubular heating element is integrated into an aluminium casting to create a compact assembly with application-specific connectors, dimensions and thermal output.",
    features: [
      "Multiple casting shapes and structures", "Compact, space-saving construction", "Induction-welded water connector options", "Different casting tonnages for varied sizes", "Food-contact compliant configurations available where required",
    ],
    applications: [
      "Extruder barrels", "Coffee machines", "Washing machines and dryers", "Garment steamers", "Irons and rice cookers",
    ],
    technicalSpecs: [
      { label: "Element sheath", value: "Copper-plated mild steel / mild steel / stainless steel" },
      { label: "Heating wire", value: "FeCrAl" },
      { label: "Element diameter", value: "8 mm / 11 mm" },
      { label: "Aluminium", value: "ADC 12 / ZL 104" },
      { label: "Power density", value: "Maximum 40 W/cm²" },
    ],
  },
  {
    slug: "furnace-heater",
    name: "Furnace Heater",
    categorySlug: "furnace-heater",
    category: "Manufacturing Product 05",
    specification: "High-temperature elements for furnaces and industrial ovens",
    image: customImage,
    imageAlt: "High-temperature industrial furnace heating elements",
    overview:
      "Furnace heating solutions include bundle rod, silicon carbide, edge-wound and ceramic bobbin elements for heat treatment, melting, holding and laboratory applications.",
    construction:
      "Element material and construction are selected for the furnace temperature and duty, with customized diameters and lengths available across the documented product families.",
    features: [
      "Bundle rod heaters up to 1100°C", "Silicon carbide elements up to 1600°C", "Edge-wound heaters up to 1100°C", "Ceramic bobbin heaters up to 800°C", "Customized diameter and length options",
    ],
    applications: [
      "Annealing and spheroidizing furnaces", "Aluminium holding and melting", "Industrial and laboratory ovens", "Glass feeder and float-glass lines", "Heat treatment and galvanizing furnaces",
    ],
    technicalSpecs: [
      { label: "Bundle rod", value: "Up to 1100°C; NiCr 80:20 / FeCrAl alloys" },
      { label: "Silicon carbide", value: "Up to 1600°C" },
      { label: "Edge wound", value: "Up to 1100°C; NiCr 80:20 / FeCrAl" },
      { label: "Ceramic bobbin", value: "Up to 800°C; NiCr 80:20" },
    ],
  },
  {
    slug: "coil-ir-heaters", name: "Coil Heaters & IR Heaters", categorySlug: "coil-ir-heaters", category: "Manufacturing Product 06", specification: "Compact micro-tube heaters and infrared heating solutions", image: ceramicBandImage, imageAlt: "Compact industrial coil heaters for nozzles and process machinery",
    overview: "Micro-tube coil heaters provide high durability, power density, operating temperature and insulation in a compact form for plastic and packaging machinery.",
    construction: "Straight or spiral forms are manufactured to the required shape, with optional J- or K-type thermocouples and sealed metal-cover terminations.",
    features: ["Compact overall dimensions", "Straight or spiral customized forms", "Optional J- or K-type thermocouple", "Power density up to 8 W/cm²", "Operating temperature up to 550°C"],
    applications: ["Plastic machinery", "Packaging machinery", "Nozzle heating", "Compact process tooling", "Temperature-controlled assemblies"],
    technicalSpecs: [{ label: "Section sizes", value: "Ø1.8 / Ø3.1 / Ø4 / 4×2.5 / 3.2×1.8 / 3.2×3.2 / 2.4×1.4 mm" }, { label: "Sheath", value: "AISI 304" }, { label: "Length", value: "Maximum 2500 mm" }, { label: "Voltage", value: "24–240 V" }, { label: "Power density", value: "Maximum 8 W/cm²" }, { label: "Operating temperature", value: "550°C" }],
  },
  {
    slug: "thermo-sensor", name: "Thermo Sensor", categorySlug: "thermo-sensor", category: "Manufacturing Product 07", specification: "Thermocouple and RTD probes for precise process control", image: cartridgeImage, imageAlt: "Industrial temperature sensor probes and leads",
    overview: "High-precision temperature-monitoring probes support stable process control across machinery, heating systems and demanding industrial assemblies.",
    construction: "The range includes thermocouples and PT100/PT1000 RTDs in mineral-insulated flexible, bayonet, leaf-surface and heavy-duty configurations with custom terminal heads.",
    features: ["Thermocouple types J, K, T, E, N, R, S and B", "PT100 and PT1000 RTD sensors", "Mineral-insulated flexible probes", "Bayonet and leaf-type surface sensors", "Heavy-duty and high-pressure assemblies"],
    applications: ["Industrial process control", "Plastic-processing machinery", "Furnaces and ovens", "Laboratory equipment", "OEM machine assemblies"],
    technicalSpecs: [{ label: "Thermocouples", value: "Types J, K, T, E, N, R, S and B" }, { label: "RTD", value: "PT100 / PT1000" }, { label: "Probe forms", value: "MI flexible, bayonet, leaf surface" }, { label: "Assemblies", value: "High-pressure and heavy-duty options" }, { label: "Termination", value: "Custom terminal heads available" }],
  },
  {
    slug: "customized-heating-solution", name: "Customized Heating Solution", categorySlug: "customized-heating-solution", category: "Manufacturing Product 08", specification: "Application-specific thermal systems designed around the machine", image: customImage, imageAlt: "Customized industrial heating elements developed for OEM equipment",
    overview: "For requirements outside standard forms, HEAT-ONN develops heating solutions around the process, available space, operating medium, temperature and customer-supplied design information.",
    construction: "Suitable heater families, sheath materials, dimensions, power arrangements, sensor integration and terminations are combined into a traceable custom build.",
    features: ["Custom design capability", "Heater and sensor integration", "Application-led material selection", "In-house traceability", "Electrical verification before dispatch"],
    applications: ["OEM machinery", "Special purpose machines", "Replacement and retrofit projects", "Heavy process engineering", "Non-standard thermal assemblies"],
    technicalSpecs: [{ label: "Design input", value: "Application details, drawing or sample" }, { label: "Configuration", value: "Selected to suit process requirements" }, { label: "Verification", value: "High voltage, insulation resistance, continuity and wattage checks" }, { label: "Traceability", value: "In-house manufacturing traceability" }],
  },
];

export const categories: ProductCategory[] = products.map((product, index) => ({
  slug: product.slug,
  number: String(index + 1).padStart(2, "0"),
  name: product.name,
  tagline: product.specification,
  description: product.overview,
  image: product.image,
  imageAlt: product.imageAlt,
}));

export const applications = [
  { name: "Plastic Injection Moulding", description: "Barrel, nozzle and hot runner heating for moulding machines." },
  { name: "Plastic Extrusion", description: "Zone heating along extruder barrels and dies." },
  { name: "Packaging Machinery", description: "Sealing bars, cutting wires and shrink tunnels." },
  { name: "Rubber Processing", description: "Platen, mould and press heating." },
  { name: "Ovens & Dryers", description: "Air heating for industrial ovens and drying cabinets." },
  { name: "Chemical & Process Plant", description: "Pipe tracing, vessel and immersion heating." },
];

export const capabilities = [
  { title: "Element Winding", description: "Resistance wire wound and tensioned to the calculated wattage for each build." },
  { title: "Sheath Forming", description: "Tube drawing, swaging and bending to the dimensions the assembly requires." },
  { title: "Insulation & Compaction", description: "Magnesium oxide and mica insulation compacted for dielectric strength and heat transfer." },
  { title: "Assembly & Termination", description: "Terminals, leads, braids, conduits and thermocouples fitted to specification." },
  { title: "Electrical Testing", description: "Resistance, insulation resistance and continuity checked on every element." },
  { title: "Replacement & Retrofit", description: "Existing or obsolete elements reverse-engineered from a sample." },
];

export const qualityProcess = [
  { step: "01", title: "Requirement Review", description: "Operating temperature, medium, dimensions, wattage and voltage are confirmed before design." },
  { step: "02", title: "Design & Sample", description: "A drawing or sample is prepared and agreed so fit and termination are settled early." },
  { step: "03", title: "Manufacture", description: "Elements are wound, formed, insulated and assembled against the approved specification." },
  { step: "04", title: "Testing & Dispatch", description: "Each element is electrically tested and visually inspected before packing." },
];

export const values = [
  { title: "Application First", description: "Specification starts with the process, not a catalogue page." },
  { title: "Honest Engineering", description: "Clear answers on what an element will and will not do in service." },
  { title: "Consistency", description: "Repeat orders built to the same agreed specification." },
  { title: "Direct Support", description: "Speak to the people who make the heaters, not a call centre." },
];

export const contact = {
  phone: "+91- / +91-",
  email: "sales@heatonn.com",
  salesEmails: ["sales@Heatonn.com", "Info@Heatonn.com"],
  supportEmail: "bdm@Heatonn.com",
  website: "www.Heatonn.com",
  address: "No. 118, 118-A1, Basaveshwara Industrial Estate, Rajagopal Nagar Main Road, Peenya 2nd Stage, Bengaluru, Karnataka, 560058",
};

export const aboutContent = {
  story:
    "HeatOnn manufactures electric heating elements from Peenya, Bengaluru — one of India's densest industrial estates, and a short drive from most of the moulding, extrusion and packaging workshops we supply. That proximity shaped how the company works: elements are specified in conversation with the people running the machine, samples are checked against the actual assembly, and replacements are turned around quickly when a line is down.",
  approach:
    "Every heater is a combination of resistance wire, insulation, sheath and termination chosen for one operating condition. We start from the temperature, the medium, the available space and the duty cycle, then select construction accordingly. Where the requirement falls outside our standard range, we build to drawing rather than pushing a near-enough element.",
  mission:
    "To supply heating elements that hold their specification in service, and to make the engineering behind them easy for a customer to check.",
};

export const blogPosts = [
  {
    slug: "choosing-watt-density",
    title: "Why watt density matters more than total wattage",
    excerpt:
      "Two heaters can share a rating and behave very differently. A short look at how watt density, bore fit and medium decide element life.",
    topic: "Engineering Notes",
  },
  {
    slug: "mica-vs-ceramic-bands",
    title: "Mica or ceramic band heaters: how to decide",
    excerpt:
      "Operating temperature is the obvious factor, but heat loss, barrel condition and cycling patterns usually settle the choice.",
    topic: "Selection Guide",
  },
  {
    slug: "cartridge-heater-bore-fit",
    title: "Bore fit and cartridge heater failure",
    excerpt:
      "Most premature cartridge failures trace back to a loose or fouled bore. What to check before replacing an element again.",
    topic: "Maintenance",
  },
];
