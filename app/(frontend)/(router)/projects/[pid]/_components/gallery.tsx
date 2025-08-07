import Image from "next/image";
import React from "react";

export default function Gallery() {
  const images = [
    {
      src: "/placeholder.svg",
      width: 300,
      height: 280,
    },
    {
      src: "/placeholder.svg",
      width: 300,
      height: 280,
    },
    {
      src: "/placeholder.svg",
      width: 300,
      height: 280,
    },
    {
      src: "/placeholder.svg",
      width: 300,
      height: 280,
    },
    {
      src: "/placeholder.svg",
      width: 300,
      height: 280,
    },
    {
      src: "/placeholder.svg",
      width: 300,
      height: 280,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-[#F3F2F9] rounded-2xl p-8 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
            Project Gallery
          </h2>

          {/* Featured large image */}
          <div className="mb-4">
            <Image
              src="/placeholder.svg"
              alt="Featured Project Image"
              width={800}
              height={400}
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>

          {/* Grid of smaller images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {images.map((image, index) => (
              <Image
                key={index}
                src={image.src}
                alt={`Project Image ${index + 1}`}
                width={image.width}
                height={image.height}
                className="w-full h-48 object-cover rounded-lg"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
