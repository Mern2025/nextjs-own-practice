import React from "react";
import Link from "next/link";
import Image from "next/image";

const HomePage = () => {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 pt-24">
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-indigo-600 leading-tight mb-6">
            Build Better Digital Experiences with Us
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            We design and develop modern websites and apps that help your
            business grow and stand out online.
          </p>
          <div className="space-x-4">
            <Link
              href="/services"
              className="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-all duration-300"
            >
              Get Started
            </Link>
            <Link
              href="/about"
              className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-xl hover:bg-indigo-600 hover:text-white transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative w-full h-80 md:h-[400px]">
          <Image
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="Team working on a project"
            fill
            className="object-cover rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-indigo-600 mb-8">
            Why Choose Us?
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-md transition-all">
              <h3 className="text-xl font-semibold mb-3">Modern Design</h3>
              <p className="text-gray-600">
                We create sleek, user-friendly designs that leave a lasting
                impression.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-md transition-all">
              <h3 className="text-xl font-semibold mb-3">Fast Performance</h3>
              <p className="text-gray-600">
                Our optimized websites and apps ensure fast load times and
                smooth experiences.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-md transition-all">
              <h3 className="text-xl font-semibold mb-3">Dedicated Support</h3>
              <p className="text-gray-600">
                We’re here to help before, during, and after your project is
                live.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div className="relative w-full h-72 md:h-[350px]">
          <Image
            src="https://images.unsplash.com/photo-1605379399642-870262d3d051"
            alt="Office workspace"
            fill
            className="object-cover rounded-2xl shadow-lg"
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold text-indigo-600 mb-4">
            We’re Passionate About Innovation
          </h2>
          <p className="text-gray-600 mb-4">
            Our team works together to bring ideas to life — combining design,
            development, and creativity to deliver impactful results.
          </p>
          <Link
            href="/about"
            className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-all duration-300"
          >
            Read Our Story
          </Link>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-indigo-600 py-20 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Build Something Amazing?
        </h2>
        <p className="text-lg mb-6">
          Let’s collaborate and make your vision a reality.
        </p>
        <Link
          href="/contact"
          className="px-8 py-3 bg-white text-indigo-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300"
        >
          Contact Us
        </Link>
      </section>
    </main>
  );
};

export default HomePage;
