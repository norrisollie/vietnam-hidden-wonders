import background1 from "./assets/slide-1.jpg";
import background2 from "./assets/slide-2.jpg";
import background3 from "./assets/slide-3.jpg";

import background1_x2 from "./assets/slide-1@x2.jpg";
import background2_x2 from "./assets/slide-2@x2.jpg";
import background3_x2 from "./assets/slide-3@x2.jpg";

import card1 from "./assets/slide-1-card.jpg";
import card2 from "./assets/slide-3-card.jpg";
import card3 from "./assets/slide-3-card.jpg";

import card1_x2 from "./assets/slide-1-card@x2.jpg";
import card2_x2 from "./assets/slide-3-card@x2.jpg";
import card3_x2 from "./assets/slide-3-card@x2.jpg";

import video from "./assets/slide-3-video.mp4";

export const slideData = [
  {
    title: "HIDDEN WONDERS",
    subtitle: "Unveil the Secrets of Ancient Caves",
    cta: "See more",
    ctaColour: "#D5CEBD",
    location: "Sơn Động District, Vietnam",
    background: background1,
    background_x2: background1_x2,
    modalAsset: card1,
    modalAsset_x2: card1_x2,
    modalText:
      "Descend into a world of towering stalactites and shimmering pools. Explore Vietnam's labyrinthine cave systems, where ancient secrets and breathtaking beauty collide.",
    modalCTA: "Find out more",
    modalCTAColour: "#B6BA10",
    modalCTALink: "https://mmgyglobal.com",
    isVideo: false,
  },
  {
    title: "CULINARY DELIGHTS",
    subtitle: "A Feast for the Senses: Explore Vietnam's Street Food Scene",
    cta: "See more",
    ctaColour: "#FCA776",
    location: "Phu Quoc, Vietnam",
    background: background2,
    background_x2: background2_x2,
    modalAsset: card2,
    modalAsset_x2: card2_x2,
    modalText:
      "Immerse yourself in the vibrant energy of Vietnam's bustling night markets. Savour an explosion of flavours as you navigate a maze of food stalls, each one a testament to Vietnam's rich culinary heritage.",
    modalCTA: "Find out more",
    modalCTAColour: "#E5603A",
    modalCTALink: "https://mmgyglobal.com",
    isVideo: false,
  },
  {
    title: "PARADISE FOUND",
    subtitle:
      "Cruise Through Paradise: Discover the Enchantment of Ha Long Bay",
    cta: "See more",
    ctaColour: "#D6CFA3",
    location: "Hạ Long Bay, Vietnam",
    background: background3,
    background_x2: background3_x2,
    modalAsset: video,
    modalAssetPoster: card3_x2,
    modalText:
      "Embark on a journey through a mystical landscape of towering limestone pillars and emerald waters. Cruise through the awe-inspiring Ha Long Bay.",
    modalCTA: "Find out more",
    modalCTAColour: "#DAC95F",
    modalCTALink: "https://mmgyglobal.com",
    isVideo: true,
  },
];
