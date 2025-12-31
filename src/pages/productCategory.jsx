// import { useParams } from "react-router-dom";

// const images = [
// //   { name: "Product 1", img: "/images/p1.jpg" },
// //   { name: "Product 2", img: "/images/p2.jpg" },
// //   { name: "Product 3", img: "/images/p3.jpg" },
// //   { name: "Product 4", img: "/images/p4.jpg" },
// ];

// export default function ProductCategory() {
//   const { category } = useParams();

//   return (
//     <div className="max-w-7xl mx-auto px-6 py-12">
//       <h2 className="text-3xl font-bold text-center capitalize mb-10">
//         {category.replace("-", " ")}
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
//         {images.map((item, index) => (
//           <div
//             key={index}
//             className="relative group rounded-xl overflow-hidden shadow-lg"
//           >
//             <img
//               src={item.img}
//               alt={item.name}
//               className="w-full h-60 object-cover"
//             />

//             {/* Hover Overlay */}
//             <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
//               <p className="text-white text-lg font-semibold">
//                 {item.name}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
