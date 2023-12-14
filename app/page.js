"use client";
import React from "react";
import Header from "../app/components/Header/Header";
import Footer from "../app/components/Footer/Footer";
import Banner from "../app/components/Banner/Banner";
import Navbar from "../app/components/Navbar/Navbar";
import Link from "next/link";
// import Link from 'next/link'

const LandingPage = () => {
  return (
    <div className="bg-white">
      <Navbar
        showHome={true}
        showAbout={true}
        showProducts={true}
        showShop={true}
        showContact={true}
      />
      <Header />
      <Banner />
      <div className="container mx-auto mt-8 p-8 bg-gray-100 shadow-md rounded-md">
        <main className="container mx-auto p-4">
          <section>
            <p className="text-3xl font-bold text-blue-500">
              Welcome to <strong>1Click Mall</strong>! <br />
            </p>
            <h1 className="text-4xl font-bold mb-4">
              Your Ultimate Shopping Destination
            </h1>
            <p className="text-lg mb-4">
              At <strong>1Click Mall</strong>, we redefine your online shopping
              experience. Dive into a world of endless possibilities, where you
              can discover the latest tech gadgets, stay ahead of fashion
              trends, and find all your home essentials in one place.
            </p>
            <p className="text-lg mb-4">
              Our curated selection of products ensures that you have access to
              high-quality items that suit your lifestyle. From cutting-edge
              electronics to stylish fashion pieces and practical home goods,{" "}
              <strong> 1Click Mall</strong> has it all.
            </p>
            <p className="text-lg mb-4">
              Navigate our user-friendly platform with ease, and enjoy the
              convenience of quick and secure transactions. <br /> We prioritize
              your satisfaction, offering a seamless shopping journey from start
              to finish.
            </p>

            <div className="flex items-center mb-8 text-center">
              <Link
                href="/products"
                className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold transition duration-300 hover:bg-blue-600"
              >
                Explore Now
              </Link>
            </div>
            <p className="text-lg">
              <strong> 1Click Mall</strong> is not just a marketplace; it's a
              lifestyle. Join us on this exciting journey and elevate your
              online shopping experience today!
            </p>
          </section>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default LandingPage;
