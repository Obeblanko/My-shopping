import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const ProductsPage = () => {
  return (
    <div>
      <Header />
      <Navbar
        showHome={true}
        showAbout={true}
        showShop={true}
        showContact={true}
      />

      <div className="container mx-auto my-8">
        <h1 className="text-3xl font-bold mb-4">Explore Our Products</h1>
        <p className="text-gray-600 mb-8">
          Welcome to our diverse collection of high-quality products. Find the
          perfect items that suit your needs and preferences. <br/> Whether you're
          looking for the latest gadgets, stylish clothing, or essential
          everyday items, we have it all!
        </p>

        <section className="my-8">
          <h2 className="text-2xl font-bold mb-2 text-center">
            <strong>Featured Products</strong>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="border p-4 rounded-md shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-blue-500">
                ELECTRONICS ACCESSORIES
              </h3>
              <p className="text-gray-600">
                Upgrade your tech experience with our cutting-edge [Product
                Name]. Designed for [specific device or purpose], this premium
                [Type of Accessory] is the perfect blend of style and
                functionality. Upgrade your tech game today with the [Product
                Name] and enjoy a seamless, stylish, and enhanced electronic
                experience. Order now and redefine the way you interact with
                your devices!
              </p>
            </div>

            <div className="border p-4 rounded-md shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-blue-500">
                BOOKS & STATIONERY
              </h3>
              <p className="text-gray-700">
                Discover a world of inspiration with our [Book/Stationery
                Product Name]—the perfect companion for both avid readers and
                creative minds. Immerse yourself in captivating stories, or let
                your ideas flow onto the pages of our premium stationery. <br />
                Unleash your creativity and organize your thoughts with this
                thoughtfully crafted [book/stationery].
              </p>
            </div>

            <div className="border p-4 rounded-md shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-blue-500">
                SPORTS & OUTDOORS
              </h3>
              <p className="text-gray-700">
                Embark on your next outdoor escapade with [Product Name], the
                ultimate companion for sports enthusiasts and outdoor
                adventurers. Engineered for durability and designed for
                performance, this [sports/outdoor gear] is your ticket to a
                thrilling and comfortable experience in nature. 
                Order now and get ready to
                embark on your next adventure!
              </p>
            </div>

            <div className="border p-4 rounded-md shadow-md">
              <h3 className="text-xl font-semibold mb-2">TOYS & GAMES</h3>
              <p className="text-gray-700">
                Description of the first featured product.
              </p>
            </div>

            <div className="border p-4 rounded-md shadow-md">
              <h3 className="text-xl font-semibold mb-2">HEALTH & BEAUTY</h3>
              <p className="text-gray-700">
                Description of the first featured product.
              </p>
            </div>

            <div className="border p-4 rounded-md shadow-md">
              <h3 className="text-xl font-semibold mb-2">HOME & FURNITURE</h3>
              <p className="text-gray-700">
                Description of the first featured product.
              </p>
            </div>
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold mb-2 text-center">
            {" "}
            <strong>New Arrivals</strong>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="border p-4 rounded-md shadow-md">
              <h3 className="text-xl font-semibold mb-2">TECH GADGETS</h3>
              <p className="text-gray-700">
                Description of the first new arrival product.
              </p>
            </div>

            <div className="border p-4 rounded-md shadow-md">
              <h3 className="text-xl font-semibold mb-2">
                UNIQUE & HANDMADE ITEMS
              </h3>
              <p className="text-gray-700">
                Description of the second new arrival product.
              </p>
            </div>

            <div className="border p-4 rounded-md shadow-md">
              <h3 className="text-xl font-semibold mb-2">FOOD AND BEVERAGES</h3>
              <p className="text-gray-700">
                Description of the first new arrival product.
              </p>
            </div>

            <div className="border p-4 rounded-md shadow-md">
              <h3 className="text-xl font-semibold mb-2">ART AND CRAFT</h3>
              <p className="text-gray-700">
                Description of the first new arrival product.
              </p>
            </div>

            <div className="border p-4 rounded-md shadow-md">
              <h3 className="text-xl font-semibold mb-2">FASHION & APPRREL</h3>
              <p className="text-gray-700">
                Description of the first new arrival product.
              </p>
            </div>

            <div className="border p-4 rounded-md shadow-md">
              <h3 className="text-xl font-semibold mb-2">PET PRODUCTS</h3>
              <p className="text-gray-700">
                Description of the first new arrival product.
              </p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default ProductsPage;
