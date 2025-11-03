import React from "react";
import Image from "next/image";
import Link from "next/link";

// ✅ Server Component
const ProductsPage = async () => {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();

  return (
    <main className="min-h-screen bg-gray-50 pt-24 px-6">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-indigo-600 text-center mb-12">
        Our Products
      </h1>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data?.products?.map((item) => (
          <Link href={`/products/${item.id}`}
            key={item.id}
            className="bg-white rounded-2xl shadow hover:shadow-lg transition-all p-4 flex flex-col"
          >
            {/* Image */}
            <div className="relative w-full h-56 rounded-xl overflow-hidden mb-4">
              <Image
                src={item.thumbnail}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Product Info */}
            <h2 className="text-lg font-semibold text-gray-800 mb-1">
              {item.title}
            </h2>
            <p className="text-sm text-gray-500 mb-2">{item.category}</p>

            {/* Price & Rating */}
            <div className="flex justify-between items-center mb-3">
              <span className="text-indigo-600 font-bold text-lg">
                ${item.price}
              </span>
              <span className="text-yellow-500 text-sm">
                ⭐ {item.rating.toFixed(1)}
              </span>
            </div>

            {/* Stock Info */}
            <p
              className={`text-sm font-medium ${
                item.availabilityStatus === "In Stock"
                  ? "text-green-600"
                  : "text-red-500"
              }`}
            >
              {item.availabilityStatus}
            </p>

            {/* Button */}
            <button className="mt-4 bg-indigo-600 text-white py-2 rounded-xl hover:bg-indigo-700 transition-all">
              View Details
            </button>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default ProductsPage;
