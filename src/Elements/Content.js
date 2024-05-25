import { Painting01, Painting02, Painting03, Painting04, Painting05, Painting06, Artist01, Artist02, Artist03, Artist04, Review01, Review02, Review03 } from "../assets/images";

export const navLinks = [
  { href: "home", label: "Home" },
  { href: "paintings", label: "Paintings" },
  { href: "artists", label: "Artists" },
  { href: "contact-us", label: "Contact Us" },
  { href: "reviews", label: "Reviews" },
];

export const paintings = [
  {
    urlImg: Painting01,
    details: "Starry Night, 1889 A luminous night sky swirls over a tranquil village, its celestial beauty both haunting and serene.",
    price: "1299 MAD"
  },
  {
    urlImg: Painting02,
    details: "The Potato Eaters, 1885 A rustic scene capturing the harsh reality of peasant life with somber tones and honest depiction.",
    price: "1499 MAD"
  },
  {
    urlImg: Painting03,
    details: "Sunflowers, 1888 Vibrant sunflowers bask in a golden glow, their vivid presence a symbol of devotion and life.",
    price: "999 MAD"
  },
  {
    urlImg: Painting04,
    details: "Olive Trees With Yellow Sky And Sun, 1889 Twisted olive trees stand against a radiant sky, reflecting nature's wild beauty and energy.",
    price: "1399 MAD"
  },
  {
    urlImg: Painting05,
    details: "Quay with Men Unloading Sand Barges Laborers toil by the river, unloading barges as life flows by, a snapshot of everyday perseverance.",
    price: "1299 MAD"
  },
  {
    urlImg: Painting06,
    details: "Still Life with Coffee Pot, 1888 A simple coffee pot stands amidst a symphony of colors, a still life teeming with dynamic contrast.",
    price: "899 MAD"
  },
];

export const artists = [
  {
    urlImg: Artist01,
    name: "Pablo Picasso",
    smallBio: "Pablo Ruiz Picasso was a Spanish painter, sculptor, printmaker, ceramicist, and theatre designer who spent most of his adult life in France."
  },
  {
    urlImg: Artist02,
    name: "Salvador Dalí",
    smallBio: "Salvador Domingo Felipe Jacinto Dalí i Domènech, Marquess of Dalí of Púbol gcYC, known as Salvador Dalí, was a Spanish surrealist artist renowned for his technical skill."
  },
  {
    urlImg: Artist03,
    name: "Leonardo da Vinci",
    smallBio: "Leonardo di ser Piero da Vinci was an Italian polymath of the High Renaissance who was active as a painter, draughtsman, engineer, scientist, theorist, sculptor, and architect."
  },
  {
    urlImg: Artist04,
    name: "Frida Kahlo",
    smallBio: "Magdalena Carmen Frida Kahlo y Calderón was a Mexican painter known for her many portraits, self-portraits, and works inspired by the nature and artifacts of Mexico."
  }
];

export const reviews = [
  {
    urlImg: Review01,
    review: "David Hockney, a prominent contemporary artist, has often expressed his deep admiration for Vincent Van Gogh's work. Hockney sees Van Gogh as a master of color and a visionary in the way he represented nature and space. In interviews, Hockney has spoken about the joy and gaiety he perceives in Van Gogh's paintings, despite the latter's well-documented personal struggles. He relates to Van Gogh's passion for the natural world, a theme that resonates strongly in his own landscapes. Hockney's exhibition 'The Joy of Nature' can be seen as a tribute to Van Gogh's influence, showcasing how both artists find beauty and inspiration in the natural environment, capturing its dynamism with their unique perspectives and vibrant palettes.",
    name: "David Hockney"
  },
  {
    urlImg: Review02,
    review: "Benedict Cumberbatch, the acclaimed actor who portrayed Vincent Van Gogh in the docudrama 'Van Gogh: Painted with Words,' has spoken about the profound impact Van Gogh's art has had on him. Through his immersive portrayal, Cumberbatch explored the depths of Van Gogh's emotional landscape, bringing to life the painter's intense and passionate relationship with his art. Cumberbatch's performance was informed by Van Gogh's own words, sourced from the vast collection of letters he wrote during his lifetime, providing a window into the soul of the troubled yet brilliant artist. The actor's deep dive into Van Gogh's psyche revealed a complex figure, whose preoccupation with social justice and the beauty of the natural world was as fervent as his battle with mental illness.",
    name: "Benedict Cumberbatch"
  },
  {
    urlImg: Review03,
    review: "Ai Weiwei, the Chinese contemporary artist and activist, regards Vincent Van Gogh not only as an artistic genius but also as a symbol of the artist as an outsider. Ai has drawn parallels between his own experiences with state oppression and Van Gogh's struggles with societal acceptance. He admires Van Gogh's unwavering commitment to his vision, even in the face of immense personal and professional challenges. Ai sees Van Gogh's dedication to art as a form of worship, a belief system that the Dutch painter adhered to with religious fervor. This perspective is reflected in Ai's own approach to art, where he continuously refines his expressions through the lens of growth, life experiences, beliefs, and emotions, much like Van Gogh did with his paintings.",
    name: "Ai Weiwei"
  }
];

export const footerLinks = [
  {
    title: "Paintings",
    links: [
      { name: "Starry Night", link: "paintings" },
      { name: "The Potato Eaters", link: "paintings" },
      { name: "Sunflowers", link: "paintings" },
      { name: "Olive Trees", link: "paintings" },
      { name: "Quay with Men Unloading", link: "paintings" },
      { name: "Still Life with Coffee Pot", link: "paintings" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@vangogh.com", link: "mailto:customer@vangogh.com" },
      { name: "+212 690435687", link: "tel:+212690435687" },
    ],
  },
  {
    title: "Social media",
    links: [
      { name: "Github", link: "https://github.com/abdellah-agrm" },
      { name: "Linkedin", link: "https://www.linkedin.com/in/abdellah-agourram" },
    ],
  },
];