import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => (
  <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
    <div className="flex items-center space-x-4 mb-6">
      <Phone className="text-blue-600 h-8 w-8" />
      <h2 className="text-2xl font-bold text-gray-800">Contact Us</h2>
    </div>
    <p className="text-gray-700 leading-relaxed mb-6">
      Need help, have feedback, or want to collaborate? We're here for you.
    </p>

    <div className="grid sm:grid-cols-2 gap-6">
      <div className="space-y-4">
        <div className="flex items-start space-x-3">
          <Mail className="text-gray-500 mt-1 h-5 w-5" />
          <p className="text-gray-700">
            <strong>Email:</strong>{' '}
            <a href="mailto:support@example.com" className="text-blue-500 hover:underline">
              support@example.com
            </a>
          </p>
        </div>
        <div className="flex items-start space-x-3">
          <Phone className="text-gray-500 mt-1 h-5 w-5" />
          <p className="text-gray-700">
            <strong>Phone:</strong> +91-XXXXXXXXXX
          </p>
        </div>
        <div className="flex items-start space-x-3">
          <MapPin className="text-gray-500 mt-1 h-5 w-5" />
          <p className="text-gray-700">
            <strong>Address:</strong><br />
            Landmark Street,<br />
            Bhopal, Madhya Pradesh, India
          </p>
        </div>
      </div>

      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            id="message"
            rows="4"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="w-full inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  </div>
);

export default Contact;