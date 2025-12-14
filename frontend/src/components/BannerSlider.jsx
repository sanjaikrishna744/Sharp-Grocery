// import { useState, useEffect } from "react";

// const banners = [
//   {
//     id: 1,
//     image:
//       "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=1000",
//     title: "Fresh Vegetables Delivered Daily",
//     subtitle: "Healthy • Organic • Farm Fresh",
//   },
//   {
//     id: 2,
//     image:
//       "https://images.unsplash.com/photo-1585325701954-19662d0dfde1?w=1000",
//     title: "Buy Grocery with SHARP Tokens",
//     subtitle: "Fast • Secure • Cashless",
//   },
//   {
//     id: 3,
//     image:
//       "https://images.unsplash.com/photo-1606813902770-bd6f9b9f1f9c?w=1000",
//     title: "Mega Discounts on Daily Essentials",
//     subtitle: "Save More • Earn More",
//   },
// ];

// export default function BannerSlider() {
//   const [index, setIndex] = useState(0);

//   // Auto slide every 3 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % banners.length);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative w-full h-64 sm:h-80 lg:h-96 overflow-hidden rounded-lg shadow-lg">
//       {/* Slide Images */}
//       <div
//         className="flex transition-transform duration-700"
//         style={{ transform: `translateX(-${index * 100}%)` }}
//       >
//         {banners.map((banner) => (
//           <div key={banner.id} className="min-w-full h-full relative">
//             <img
//               src={banner.image}
//               alt="banner"
//               className="w-full h-full object-cover"
//             />

//             <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white text-center px-4">
//               <h2 className="text-2xl sm:text-4xl font-bold drop-shadow-lg">
//                 {banner.title}
//               </h2>
//               <p className="text-md sm:text-xl mt-2">{banner.subtitle}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Dots */}
//       <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-3">
//         {banners.map((_, i) => (
//           <div
//             key={i}
//             className={`w-3 h-3 rounded-full cursor-pointer ${
//               i === index ? "bg-white" : "bg-gray-400"
//             }`}
//             onClick={() => setIndex(i)}
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// }




import { useState, useEffect } from "react";

const banners = [
  {
    id: 1,
    text: "Fresh Vegetables Delivered Daily",
    image:
      "https://www.neoflam.com.au/cdn/shop/articles/cauliflower_image_a7647855-dc53-427b-9c64-4a6f23762733.jpg?v=1744344281",
  },
  {
    id: 2,
    text: "Healthy Fruits for Healthy Life",
    image:
      "https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?w=1200",
  },
  {
    id: 3,
    text: "Best Grocery Deals Only Here!",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3I8ctBCDnxcZnyKHrA0bQsPu-buz2Lkiagg&s",
  },
];

export default function BannerSlider() {
  const [index, setIndex] = useState(0);

  // Auto-slide every 3 sec
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl relative">
      {banners.map((banner, i) => (
        <div
          key={banner.id}
          className={`absolute inset-0 transition-all duration-700 ease-in-out
            ${i === index ? "opacity-100 scale-100" : "opacity-0 scale-105"}
          `}
        >
          <img
            src={banner.image}
            alt="Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <h2 className="text-white text-2xl md:text-4xl font-bold drop-shadow-lg">
              {banner.text}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
}
