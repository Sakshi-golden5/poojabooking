import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen pt-28 px-6 md:px-20 lg:px-32  text-gray-800">
      <h1 className="text-4xl font-playfair mb-4">About Pandit Ji</h1>
      <p className="text-gray-700 text-lg max-w-3xl leading-7 mb-6">
        Welcome to the official portal of <strong>Pandit Ji</strong>, your trusted Vedic expert. With decades of experience in performing sacred rituals, spiritual ceremonies, and guiding devotees, Pandit Ji brings devotion, authenticity, and peace to your home and heart.
      </p>

      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
          <p className="text-gray-700 leading-7">
            Our goal is to make Vedic rituals easily accessible to everyone. We aim to simplify the process of booking and performing poojas so that devotees can focus on devotion, not logistics.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Services Offered</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Griha Pravesh</li>
            <li>Satyanarayan Katha</li>
            <li>Navgrah Shanti</li>
            <li>Mangal Aarti</li>
            <li>Special Personalized Poojas</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Why Choose Us?</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Experienced and certified Pandit Ji</li>
            <li>Authentic rituals following Vedic traditions</li>
            <li>Seamless booking experience</li>
            <li>Support and guidance at every step</li>
            <li>Personalized services based on your needs</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Location</h2>
          <p className="text-gray-700">
            Based in the holy city of <strong>Haridwar, Uttarakhand</strong>, we serve across India and abroad through online guidance and video pooja services.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
