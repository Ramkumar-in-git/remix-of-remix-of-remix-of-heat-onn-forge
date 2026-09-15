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

export const categories: ProductCategory[] = [
  {
    slug: "cartridge-heaters",
    number: "01",
    name: "Cartridge Heaters",
    tagline: "Localised heat inside drilled holes",
    description:
      "Compact cylindrical elements that insert directly into drilled bores in dies, moulds and platens to deliver concentrated heat exactly where the process needs it.",
    image: cartridgeImage,
    imageAlt: "Row of stainless steel cartridge heaters with braided lead wires",
  },
  {
    slug: "band-heaters",
    number: "02",
    name: "Band Heaters",
    tagline: "Clamp-on heating for cylindrical surfaces",
    description:
      "Mica-insulated clamp-on bands that wrap barrels, nozzles and pipes, transferring heat through close surface contact with even circumferential coverage.",
    image: bandImage,
    imageAlt: "Set of stainless steel mica band heaters of different diameters",
  },
  {
    slug: "ceramic-band-heaters",
    number: "03",
    name: "Ceramic Band Heaters",
    tagline: "High-temperature radiant and conductive heat",
    description:
      "Ceramic knuckle construction with insulating fibre backing for higher operating temperatures and lower heat loss on extruder barrels and large cylinders.",
    image: ceramicBandImage,
    imageAlt: "Ceramic band heaters fitted along an extruder barrel",
  },
  {
    slug: "strip-heaters",
    number: "04",
    name: "Strip Heaters",
    tagline: "Flat surface and air heating",
    description:
      "Flat rectangular elements bolted onto platens, tanks and panels, available in finned form for air heating in ovens, cabinets and drying enclosures.",
    image: stripImage,
    imageAlt: "Three finned strip heaters laid on a workshop bench",
  },
  {
    slug: "customized-heaters",
    number: "05",
    name: "Customized Heaters",
    tagline: "Built to your drawing",
    description:
      "Elements developed around a specific assembly — formed tubular heaters, nozzle coils, immersion elements and non-standard sheath, wattage or termination requirements.",
    image: customImage,
    imageAlt: "Assorted custom heating elements with engineering drawings and calipers",
  },
];

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
    slug: "cartridge-heaters",
    name: "Cartridge Heaters",
    categorySlug: "cartridge-heaters",
    category: "Cartridge Heaters",
    specification: "High-density and standard-density insert elements",
    image: cartridgeImage,
    imageAlt: "Stainless steel cartridge heaters arranged on a dark workshop surface",
    overview:
      "Cartridge heaters are cylindrical insert elements designed to sit inside a drilled hole and heat the surrounding metal by conduction. They suit applications where heat must be concentrated in a defined zone of a tool or fixture rather than applied to an outer surface.",
    construction:
      "A nickel-chrome resistance coil is wound over a ceramic core, packed with compacted magnesium oxide for dielectric strength and thermal transfer, and sealed inside a drawn stainless steel sheath. Fit tolerance between element and bore governs achievable watt density and service life.",
    features: [
      "Compacted magnesium oxide filling for efficient heat transfer",
      "Swaged stainless steel sheath for close bore fit",
      "Standard and high watt density windings",
      "Flexible leads, braided leads, right-angle exits or flexible conduit",
      "Optional internal thermocouple and mounting flange",
    ],
    applications: [
      "Injection moulding hot runner manifolds and dies",
      "Packaging and sealing tooling",
      "Rubber and plastic moulding platens",
      "Laboratory and test fixtures",
      "Medical and semiconductor process equipment",
    ],
    technicalSpecs: [
      { label: "Diameter range", value: "6 mm to 25 mm (standard)" },
      { label: "Sheath material", value: "Stainless steel 304 / 321 / Incoloy" },
      { label: "Max sheath temperature", value: "Up to 750°C" },
      { label: "Watt density", value: "Up to 45 W/cm² depending on fit" },
      { label: "Voltage", value: "Single phase, built to specified supply" },
      { label: "Terminations", value: "Fibreglass leads, braid, conduit, plug" },
    ],
  },
  {
    slug: "band-heaters",
    name: "Band Heaters",
    categorySlug: "band-heaters",
    category: "Band Heaters",
    specification: "Mica-insulated clamp-on barrel and nozzle heaters",
    image: bandImage,
    imageAlt: "Mica band heaters of several diameters on a steel bench",
    overview:
      "Band heaters clamp around cylindrical components and transfer heat through direct surface contact. They are the standard choice for plastics processing barrels, pipes, drums and nozzles where a full circumferential heat band is required.",
    construction:
      "Mica sheets insulate a flat resistance ribbon wound to the required wattage, enclosed in a stainless steel outer sheath. Clamping hardware — barrel nut, wedge lock or quick-release strap — maintains the tight contact pressure the design depends on.",
    features: [
      "Mica insulation with flat nickel-chrome ribbon element",
      "Stainless steel sheath with clamping band",
      "One-piece, two-piece or multi-section construction",
      "Cut-outs, holes and slots to suit fittings on the barrel",
      "Screw terminals, post terminals or lead-wire exits",
    ],
    applications: [
      "Injection moulding and blow moulding barrels",
      "Extruder feed zones",
      "Pipe and drum heating",
      "Nozzle and adaptor heating",
      "Packaging and sealing machinery",
    ],
    technicalSpecs: [
      { label: "Diameter range", value: "25 mm upwards, built to measurement" },
      { label: "Width", value: "20 mm to 200 mm" },
      { label: "Max operating temperature", value: "Up to 450°C sheath" },
      { label: "Watt density", value: "Up to 5.5 W/cm²" },
      { label: "Clamping", value: "Barrel nut, wedge lock or quick-release" },
      { label: "Voltage", value: "Built to specified supply" },
    ],
  },
  {
    slug: "ceramic-band-heaters",
    name: "Ceramic Band Heaters",
    categorySlug: "ceramic-band-heaters",
    category: "Ceramic Band Heaters",
    specification: "High-temperature ceramic knuckle construction",
    image: ceramicBandImage,
    imageAlt: "Ceramic band heaters mounted on an extruder barrel",
    overview:
      "Ceramic band heaters operate at higher temperatures than mica bands and combine radiated and conducted heat. The flexible ceramic knuckle body tolerates repeated thermal cycling, which suits extrusion lines and larger barrels running continuously.",
    construction:
      "A nickel-chrome coil is threaded through interlocking ceramic knuckles, backed with ceramic fibre insulation and enclosed in a perforated or solid stainless steel sheath. The insulation reduces outward heat loss and keeps the outer surface cooler.",
    features: [
      "Interlocking ceramic knuckles with coiled resistance wire",
      "Ceramic fibre insulation to reduce radiated heat loss",
      "Flexible body that conforms to slightly irregular barrels",
      "Ceramic terminal block or braided lead exits",
      "Available with integral thermocouple pockets",
    ],
    applications: [
      "Plastic extrusion barrels",
      "Blown film and pipe extrusion lines",
      "Large diameter drums and vessels",
      "High-temperature nozzle assemblies",
      "Continuous-duty processing equipment",
    ],
    technicalSpecs: [
      { label: "Diameter range", value: "80 mm upwards, built to measurement" },
      { label: "Width", value: "50 mm to 250 mm" },
      { label: "Max operating temperature", value: "Up to 700°C" },
      { label: "Insulation", value: "Ceramic fibre backing" },
      { label: "Sheath", value: "Stainless steel, perforated or solid" },
      { label: "Terminations", value: "Ceramic block or braided leads" },
    ],
  },
  {
    slug: "strip-heaters",
    name: "Strip Heaters",
    categorySlug: "strip-heaters",
    category: "Strip Heaters",
    specification: "Flat and finned elements for surface and air heating",
    image: stripImage,
    imageAlt: "Finned strip heaters with ceramic terminals on a workbench",
    overview:
      "Strip heaters are flat rectangular elements bolted or clamped onto a surface. In finned form they heat moving or still air, which makes them a practical element for ovens, drying cabinets and enclosure heating as well as platen contact heating.",
    construction:
      "Resistance wire is wound over a mica core, pressed between steel or stainless steel plates, and fitted with mounting tabs, slots or brackets. Finned versions add pressed fins along the body to increase the surface area available to air.",
    features: [
      "Mica-insulated flat element construction",
      "Plain or finned body for contact or air heating",
      "Mounting holes, slots, tabs or brackets to drawing",
      "Ceramic terminal insulators with screw posts",
      "Built to specified length, width and wattage",
    ],
    applications: [
      "Ovens, dryers and drying cabinets",
      "Platen and die surface heating",
      "Tank and vessel wall heating",
      "Duct and enclosure air heating",
      "Packaging machine sealing bars",
    ],
    technicalSpecs: [
      { label: "Length", value: "Built to requirement" },
      { label: "Standard widths", value: "38 mm and 50 mm" },
      { label: "Max operating temperature", value: "Up to 550°C (finned)" },
      { label: "Sheath material", value: "Mild steel or stainless steel" },
      { label: "Mounting", value: "Holes, slots, tabs or brackets" },
      { label: "Terminations", value: "Screw terminals or leads" },
    ],
  },
  {
    slug: "customized-heaters",
    name: "Customized Heaters",
    categorySlug: "customized-heaters",
    category: "Customized Heaters",
    specification: "Elements engineered around your assembly",
    image: customImage,
    imageAlt: "Custom formed tubular heaters, nozzle coils and immersion elements",
    overview:
      "When a standard element does not fit the machine, the element is built around the machine. We develop heaters from a drawing, a sample or a description of the process — covering formed tubular elements, nozzle coils, immersion heaters and non-standard terminations.",
    construction:
      "Sheath material, wattage, voltage, bend profile and termination are selected for the operating temperature, medium and available space. Prototype samples are produced and checked before a batch is released for manufacture.",
    features: [
      "Manufacture from drawing, sample or application description",
      "Formed tubular, coil, immersion and flange-mounted elements",
      "Sheath options in stainless steel, Incoloy and mild steel",
      "Non-standard voltages, wattages and lead arrangements",
      "Prototype sample before batch production",
    ],
    applications: [
      "Machine retrofits and obsolete element replacement",
      "Liquid and oil immersion heating",
      "Nozzle and hot runner assemblies",
      "Special ovens and process rigs",
      "OEM equipment builds",
    ],
    technicalSpecs: [
      { label: "Input required", value: "Drawing, sample or application details" },
      { label: "Sheath options", value: "SS 304 / 321 / Incoloy / mild steel" },
      { label: "Element types", value: "Tubular, coil, immersion, flanged" },
      { label: "Temperature", value: "Selected for the process" },
      { label: "Sampling", value: "Prototype checked before batch release" },
      { label: "Quantities", value: "Single replacements to repeat batches" },
    ],
  },
];

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
  phone: "+91 88808 08883",
  email: "sales@heatonn.com",
  address: "118/A, Rajagopalnagar Main Road, Peenya 2nd Stage, Bengaluru, Karnataka 560058, India",
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
