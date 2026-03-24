"use client"

import Image from "next/image"
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from "swiper/modules"
//import { ProductsDummy } from "../dummydata/DummyData";
// import ProductItem from "@/app/components/Common/ProductItem";
// import shopData from "@/app/components/Shop/shopData";
// import { ProductsDummy } from "@/app/components/Shop/ProductsDummy";
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/zoom"


const Slider = () => {

  return (
    <>
      <section className="overflow-hidden py-10">
        <div className="px-4">
          {/* <!-- section title --> */}
          {/* <div className="mb-7 flex items-center justify-between">
            <div>
              <span className="text-dark mb-1.5 flex items-center gap-2.5 font-medium">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.11826 15.4622C4.11794 16.6668 5.97853 16.6668 9.69971 16.6668H10.3007C14.0219 16.6668 15.8825 16.6668 16.8821 15.4622M3.11826 15.4622C2.11857 14.2577 2.46146 12.429 3.14723 8.77153C3.63491 6.17055 3.87875 4.87006 4.8045 4.10175M3.11826 15.4622C3.11826 15.4622 3.11826 15.4622 3.11826 15.4622ZM16.8821 15.4622C17.8818 14.2577 17.5389 12.429 16.8532 8.77153C16.3655 6.17055 16.1216 4.87006 15.1959 4.10175M16.8821 15.4622C16.8821 15.4622 16.8821 15.4622 16.8821 15.4622ZM15.1959 4.10175C14.2701 3.33345 12.947 3.33345 10.3007 3.33345H9.69971C7.0534 3.33345 5.73025 3.33345 4.8045 4.10175M15.1959 4.10175C15.1959 4.10175 15.1959 4.10175 15.1959 4.10175ZM4.8045 4.10175C4.8045 4.10175 4.8045 4.10175 4.8045 4.10175Z"
                    stroke="#fb923c"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M7.64258 6.66678C7.98578 7.63778 8.91181 8.33345 10.0003 8.33345C11.0888 8.33345 12.0149 7.63778 12.3581 6.66678"
                    stroke="#fb923c"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
                This Week&apos;s
              </span>
              <h2 className="xl:text-heading-5 text-dark text-xl font-semibold">
                Top Sellers
              </h2>
            </div>

            <Link
              href="/shop-with-sidebar"
              className="text-custom-sm border-gray-3 bg-gray-1 text-dark hover:bg-dark inline-flex rounded-md border px-7 py-2.5 font-medium duration-200 ease-out hover:border-orange-400 hover:text-orange-400"
            >
              View All
            </Link>
          </div> */}

          <div className="newarrival">
            <Swiper
              modules={[Navigation, Autoplay]}
              navigation={false}
              autoplay={{ delay: 5000 }}
              loop={true}
              spaceBetween={20}
              slidesPerView={4}
              
              className="h-100 w-full"
              breakpoints={{
                // when window width is >= 640px
                0: {
                  slidesPerView: 2,
                  spaceBetween: 5,
                },
                1000: {
                  slidesPerView: 4,
                  // spaceBetween: 4,
                },
              }}
            >
              {/* <!-- New Arrivals item --> */}
              {[1,2,3,4,5,6,7,8].map((item, key) => (
                <SwiperSlide key={key}>
               
                  <img
                    src="https://dummyjson.com/image/200"
                    // style={{
                    //   width:`${width / 4 }px`
                    // }}
                  />{" "}
                   
                </SwiperSlide>
              ))}
             
            </Swiper>
          </div>
        </div>
      </section>
    </>
  )
}

export default Slider
