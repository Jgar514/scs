import React from 'react';
import emailjs from 'emailjs-com';

function ContactForm() {
  function sendEmail(e) {
    e.preventDefault();

    // Validate email format using HTML5 pattern attribute
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailInput = e.target.user_email.value;
    if (!emailRegex.test(emailInput)) {
      alert('Please enter a valid email address.');
      return;
    }

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    // Reset form fields after submission (optional)
    e.target.reset();
  }

  return (
    <div className="flex justify-center">
      <form className="w-full max-w-md mt-8 p-8 bg-white shadow-lg rounded-lg" onSubmit={sendEmail}>
        <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>

        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            id="name"
            type="text"
            name="user_name"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="user_email"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
            pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
            title="Please enter a valid email address"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="inquiry" className="block text-sm font-medium text-gray-700">
            Inquiring About
          </label>
          <select
            id="inquiry"
            name="inquiry"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          >
            <option value="">Select an option</option>
            <option value="Service 1">Service 1</option>
            <option value="Service 2">Service 2</option>
            <option value="Service 3">Service 3</option>
            <option value="Service 4">Service 4</option>
            <option value="Service 5">Service 5</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
