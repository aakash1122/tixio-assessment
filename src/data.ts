import { Product } from "./types";
import Headphone from "@/assets/products/headphone.png";
import { nanoid } from "nanoid";

export const products: Product[] = [
  {
    id: nanoid(),
    name: "SONY WH-H910N",
    title: "Best in Hi-Res and Noise Cancelling",
    desc: "Experience finely tuned noise-canceling performance in a comfortable headphone. Long-lasting battery life plus quick charging keeps you listening for up to 35 hours since start.",
    price: 234,
    prevPrice: null,
    rating: 5,
    imageUrl: Headphone,
    onSale: true,
  },
  {
    id: nanoid(),
    name: "Sony Alpha A7 III Mirrorless ",
    title: "Best in Hi-Res and Noise Cancelling",
    desc: "Experience finely tuned noise-canceling performance in a comfortable headphone. Long-lasting battery life plus quick charging keeps you listening for up to 35 hours since start.",
    price: 1200,
    prevPrice: null,
    rating: 5,
    imageUrl:
      "https://www.techlandbd.com/image/cache/wp/gj/Camera/DSLR%20BRAND/Sony/alphaa7/A7%20III.4.jpg-550x550.webp",
  },
  {
    id: nanoid(),
    name: "Garmin Watch Fit X",
    title: "Best in Hi-Res and Noise Cancelling",
    desc: "Experience finely tuned noise-canceling performance in a comfortable headphone. Long-lasting battery life plus quick charging keeps you listening for up to 35 hours since start.",
    price: 75,
    prevPrice: null,
    rating: 5,
    imageUrl:
      "https://www.techlandbd.com/image/cache/wp/gj/Smart%20Watch/Zeblaze/THOR%206/zeblaze-thor-6-smartwatch-1.jpg-550x550.webp",
    onSale: true,
  },
  {
    id: nanoid(),
    name: "Airpods 2nd Gen",
    title: "Best in Hi-Res and Noise Cancelling",
    desc: "Experience finely tuned noise-canceling performance in a comfortable headphone. Long-lasting battery life plus quick charging keeps you listening for up to 35 hours since start.",
    price: 199,
    prevPrice: null,
    rating: 5,
    imageUrl:
      "https://www.techlandbd.com/image/cache/wp/gj/Earphone/Apple/3rd-gen/apple-3rd-generation-airpods-01.jpg-550x550.webp",
  },
  {
    id: nanoid(),
    name: "ASUS ProArt Display PA278QV ",
    title: "Best in Hi-Res and Noise Cancelling",
    desc: "Experience finely tuned noise-canceling performance in a comfortable headphone. Long-lasting battery life plus quick charging keeps you listening for up to 35 hours since start.",
    price: 500,
    prevPrice: null,
    rating: 5,
    imageUrl:
      "https://www.techlandbd.com/image/cache/wp/gj/Monitor/Asus/ASUS%20ProArt%20Display%20PA278QV/asus-proart-display-pa278qv-monitor.jpg-550x550.webp",
  },
  {
    id: nanoid(),
    name: "Apple MacBook Pro",
    title: "Best in Hi-Res and Noise Cancelling",
    desc: "Experience finely tuned noise-canceling performance in a comfortable headphone. Long-lasting battery life plus quick charging keeps you listening for up to 35 hours since start.",
    price: 500,
    prevPrice: null,
    rating: 5,
    imageUrl:
      "https://www.techlandbd.com/image/cache/wp/gj/Laptop/Apple/Macbook-pro/M1%20chip/space-gray/macbook-pro-space-gray-2.jpg-550x550.webp",
  },
  {
    id: nanoid(),
    name: "Xiaomi Amazfit GTS 2 Mini",
    title: "Best in Hi-Res and Noise Cancelling",
    desc: "Experience finely tuned noise-canceling performance in a comfortable headphone. Long-lasting battery life plus quick charging keeps you listening for up to 35 hours since start.",
    price: 100,
    prevPrice: null,
    rating: 5,
    onSale: true,
    imageUrl:
      "https://www.techlandbd.com/image/cache/wp/gj/Smart%20Watch/Xiaomi/%20GTS%202%20mini/xiaomi-amazfit-gts-2-mini.jpg-550x550.webp",
  },
  {
    id: nanoid(),
    name: "MSI MAG CH120 Steel Frame",
    title: "Best in Hi-Res and Noise Cancelling",
    desc: "Experience finely tuned noise-canceling performance in a comfortable headphone. Long-lasting battery life plus quick charging keeps you listening for up to 35 hours since start.",
    price: 150,
    prevPrice: null,
    rating: 5,
    imageUrl:
      "https://www.techlandbd.com/image/cache/wp/gj/Gaming%20Chair%20/MSI/MAG-CH120/MSI-MAG-CH120-Gaming-Chair-3.jpg-550x550.webp",
  },
];
