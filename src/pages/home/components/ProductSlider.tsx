import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Button from "../../../components/core/button";
import { products } from "../../../data";
import { Product } from "../../../types";
import { PropsWithChildren, useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const ProductSlide = ({
  product,
}: PropsWithChildren & { product: Product }) => {
  return (
    <div className="bg-[#E8F0D6] rounded py-16 lg:py-36">
      <div className="container grid md:grid-cols-2 items-center justify-center gap-6 ">
        {/* content */}
        <div className="order-last md:order-first">
          <p className="font-body font-medium text-sm">{product.name}</p>
          <h2 className="text-[38px] md:text-[56px] font-semibold leading-tight md:leading-[66px]">
            {product.title}
          </h2>
          <p className="text-sm md:text-base md:leading-6 opacity-80 mt-2">
            {product.desc}
          </p>

          <div className="flex items-center gap-4 mt-8">
            <Button variant="filled">
              Buy Now for $${product.price.toFixed(2)}
            </Button>
            <Button variant="outlined">Learn More</Button>
          </div>
        </div>

        <div>
          <img
            src={product.imageUrl}
            alt={product.name + " image"}
            className="h-[320px] md:h-[440px] w-auto block mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

type Props = {};
const Productslider = (props: Props) => {
  const featuredProduct = products[0];
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={true}
        className="product-slider"
      >
        <SwiperSlide>
          <ProductSlide product={featuredProduct} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductSlide product={featuredProduct} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Productslider;
