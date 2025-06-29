import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen py-30 px-6 md:px-20 lg:px-32 text-gray-800 bg-[#8B4513]">
      <div className="bg-white rounded-[15px] border border-gray-300 shadow-lg p-6 md:p-10">
        <h1 className="text-4xl font-playfair mb-4">Contact Pandit Ji</h1>
        <p className="text-gray-600 max-w-xl mb-8">
          Have a question, want to book a pooja, or need guidance? Feel free to reach out. We're here to support your spiritual journey.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <form className="space-y-6 bg-white p-6 rounded-lg shadow-md">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                rows="3"
                placeholder="Type your message"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded transition-all"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold">Contact Information</h2>
              <p className="text-gray-600 mt-2">Pandit Ji's personal spiritual services</p>
            </div>
            <div>
              <p><strong>Phone:</strong> +91 9090909090</p>
              <p><strong>Email:</strong> panditji@example.com</p>
              <p><strong>Location:</strong> Haridwar, Uttarakhand, India</p>
            </div>
            <div>
              <h2 className="text-lg font-medium">Availability</h2>
              <p className="text-gray-600 mt-1">Monday – Sunday: 7:00 AM – 9:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
