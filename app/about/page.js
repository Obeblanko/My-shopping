import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Banner from "../components/Banner/Banner";

const AboutPage = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Navbar
        showHome={true}
        showProducts={true}
        showShop={true}
        showContact={true}
      />

      <div className="container mx-auto my-8 p-4 bg-white rounded shadow-md">
        <p className="text-gray-700 leading-7">
          Welcome to our online shopping website! At
          <strong> 1Click Mall</strong>, we are dedicated to providing our
          customers with a seamless and enjoyable shopping experience.
        </p>

        <h2 className="text-2xl font-bold mt-6 mb-4">Our Mission</h2>
        <p className="text-gray-700 leading-7">
          <strong>Our mission</strong> is to offer a wide range of high-quality
          products at competitive prices. We strive to meet the diverse needs of
          our customers while maintaining the highest standards of customer
          satisfaction.
        </p>

        <h2 className="text-2xl font-bold mt-6 mb-4">Why Choose Us?</h2>
        <p className="text-gray-700 leading-7">
          <strong>Extensive Product Selection</strong>: We curate a collection
          of products ranging from the latest trends to timeless classics.
          <br />
          <strong>Customer-Centric Approach</strong>: Your satisfaction is our
          priority. Our customer support team is ready to assist you with any
          inquiries.
          <br />
          <strong>Secure Shopping</strong>: Shop with confidence, knowing that
          your personal information is safe and secure.
        </p>

        <h2 className="text-2xl font-bold mt-6 mb-4">Our Values</h2>
        <p className="text-gray-700 leading-7">
          <strong>Integrity</strong>: We believe in transparency and honesty in
          all our business dealings.
          <br />
          <strong>Innovation</strong>: Embracing new ideas and technologies to
          enhance your shopping experience.
          <br />
          <strong>Community</strong>: Building a community of happy and
          satisfied customers.
        </p>

        <h2 className="text-2xl font-bold mt-6 mb-4">
          Join Us on Social Media
        </h2>
        <p className="text-gray-700 leading-7">
          Connect with us on social media to stay updated on the latest
          products, promotions, and community events. Follow us on Instagram,
          Facebook, and Twitter!
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;
