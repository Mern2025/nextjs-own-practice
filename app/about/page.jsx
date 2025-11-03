import React from "react";
import Image from "next/image";

const about = () => {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 pt-24">
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-indigo-600 mb-4">
          About Us
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We’re passionate about building meaningful digital experiences that
          connect people and technology.
        </p>
      </section>

      {/* CONTENT SECTION */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="relative w-full h-80 md:h-[400px] rounded-2xl overflow-hidden shadow-lg">
          < Image fill src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxKGbcVrxAwYHZPSYOTTizkZdi2yTw7NLzjg&s'} alt="mubin"/>
        </div>

        {/* Text Content */}
        <div>
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
            Who We Are
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We are a creative team of designers, developers, and innovators who
            love turning ideas into reality. Our mission is to craft products
            that solve real problems while delivering delightful user
            experiences.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            With a focus on simplicity, functionality, and performance, we
            believe in creating solutions that last — built with care and
            purpose.
          </p>
          <button className="mt-4 px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-all duration-300">
            Learn More
          </button>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-indigo-600 mb-8">
          Our Core Values
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-all">
            <h3 className="text-xl font-semibold mb-3">Innovation</h3>
            <p className="text-gray-600">
              We embrace creativity and explore new technologies to stay ahead
              of the curve.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-all">
            <h3 className="text-xl font-semibold mb-3">Integrity</h3>
            <p className="text-gray-600">
              We believe in transparency, honesty, and doing what’s right—always.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-all">
            <h3 className="text-xl font-semibold mb-3">Excellence</h3>
            <p className="text-gray-600">
              We strive for quality in every project and continuously improve
              ourselves.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default about
