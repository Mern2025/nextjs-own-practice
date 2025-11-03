import React from "react";
import Image from "next/image";

// ✅ Dynamic Single Product Page
const ProductDetails = async ({ params }) => {
  const param = await params
  const id = param.id

  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await res.json();
  console.log(product)

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 pt-24 px-6">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-2xl p-8 grid md:grid-cols-2 gap-10">
        {/* LEFT: Product Image */}
        <div className="flex flex-col items-center">
          <div className="relative w-full h-80 md:h-[400px] rounded-2xl overflow-hidden shadow">
            <Image
              src={product.thumbnail}
              alt={product.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Additional Images */}
          <div className="flex gap-3 mt-4">
            {product.images?.slice(0, 3).map((img, index) => (
              <div
                key={index}
                className="relative w-20 h-20 rounded-xl overflow-hidden border"
              >
                <Image src={img} alt="thumb" fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Product Info */}
        <div>
          <h1 className="text-3xl font-bold text-indigo-600 mb-3">
            {product.title}
          </h1>
          <p className="text-gray-600 mb-4">{product.description}</p>

          {/* Price and Rating */}
          <div className="flex items-center justify-between mb-4">
            <p className="text-2xl font-semibold text-indigo-600">
              ${product.price}
            </p>
            <span className="text-yellow-500">⭐ {product.rating.toFixed(1)}</span>
          </div>

          {/* Stock and Brand */}
          <p
            className={`font-medium mb-2 ${
              product.availabilityStatus === "In Stock"
                ? "text-green-600"
                : "text-red-500"
            }`}
          >
            {product.availabilityStatus}
          </p>
          <p className="text-gray-500 mb-2">
            <span className="font-semibold text-gray-700">Brand:</span>{" "}
            {product.brand}
          </p>
          <p className="text-gray-500 mb-2">
            <span className="font-semibold text-gray-700">Category:</span>{" "}
            {product.category}
          </p>
          <p className="text-gray-500 mb-2">
            <span className="font-semibold text-gray-700">SKU:</span>{" "}
            {product.sku}
          </p>

          {/* Shipping / Warranty / Policy */}
          <div className="mt-6 space-y-2 text-gray-600">
            <p>
              <span className="font-semibold text-gray-800">Shipping:</span>{" "}
              {product.shippingInformation}
            </p>
            <p>
              <span className="font-semibold text-gray-800">Warranty:</span>{" "}
              {product.warrantyInformation}
            </p>
            <p>
              <span className="font-semibold text-gray-800">Return Policy:</span>{" "}
              {product.returnPolicy}
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex gap-4">
            <button className="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-all">
              Add to Cart
            </button>
            <button className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-xl hover:bg-indigo-600 hover:text-white transition-all">
              Buy Now
            </button>
          </div>

          {/* Barcode + Meta */}
          <div className="mt-8 flex items-center gap-6">
            <div>
              <p className="text-gray-500 text-sm">
                <span className="font-semibold text-gray-700">Barcode:</span>{" "}
                {product.meta?.barcode}
              </p>
              <p className="text-gray-500 text-sm">
                Created: {new Date(product.meta?.createdAt).toLocaleDateString()}
              </p>
            </div>
            {product.meta?.qrCode && (
              <Image
                src={product.meta.qrCode}
                alt="QR Code"
                width={80}
                height={80}
              />
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetails;
