// export default function GalleryModal({ images, isOpen, closeGallery }) {
//     if (!isOpen) return null;

//     return (
//         <div
//             className=" fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 overflow-auto p-4"
//             onClick={closeGallery}
//         >
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-max">
//                 {images.map((img, index) => (
//                     <div key={index} className="overflow-hidden rounded-lg">
//                         <img
//                             src={img}
//                             alt={`Gallery ${index + 1}`}
//                             className="w-full h-60 object-cover transform transition-transform duration-300 hover:scale-110"
//                             loading="lazy"
//                             onClick={(e) => e.stopPropagation()} // Prevent modal close
//                         />
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }
