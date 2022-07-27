import { Product } from "./types";
import Headphone from "@/assets/products/headphone.png";

export const products: Product[] = [
  {
    id: "100",
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
    id: "101",
    name: "Women Yellow Turtleneck",
    title: "Best in Hi-Res and Noise Cancelling",
    desc: "Experience finely tuned noise-canceling performance in a comfortable headphone. Long-lasting battery life plus quick charging keeps you listening for up to 35 hours since start.",
    price: 45,
    prevPrice: null,
    rating: 5,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQro0YUksbBoKW031FrcQhHL3ds-GHpcu-qAQ&usqp=CAU",
  },
  {
    id: "102",
    name: "Garmin Watch Fit X",
    title: "Best in Hi-Res and Noise Cancelling",
    desc: "Experience finely tuned noise-canceling performance in a comfortable headphone. Long-lasting battery life plus quick charging keeps you listening for up to 35 hours since start.",
    price: 75,
    prevPrice: null,
    rating: 5,
    imageUrl:
      "https://w7.pngwing.com/pngs/313/947/png-transparent-gray-sony-smartwatch-sony-smartwatch-android-wear-smart-watches-gadget-electronics-mobile-phone.png",
    onSale: true,
  },
  {
    id: "103",
    name: "Airpods 2nd Gen",
    title: "Best in Hi-Res and Noise Cancelling",
    desc: "Experience finely tuned noise-canceling performance in a comfortable headphone. Long-lasting battery life plus quick charging keeps you listening for up to 35 hours since start.",
    price: 199,
    prevPrice: null,
    rating: 5,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDc7ocbdpHS5ODlgq6J-hbaTAzLdss1Z-O5A&usqp=CAU",
  },
];
