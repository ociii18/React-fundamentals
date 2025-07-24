import React, { useState } from 'react';
import { FiPhoneCall, FiMail, FiMapPin } from "react-icons/fi";

export default function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = {};

    if (!name.trim()) newErrors.name = "Name is required";
    if (!email.includes("@")) newErrors.email = "Valid email is required";
    if (!subject.trim()) newErrors.subject = "Subject is required";
    if (!message.trim()) newErrors.message = "Message is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      alert("Message sent successfully!");
      console.log({ name, email, subject, message });

      
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      setErrors({});
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div className="space-y-12">
            <div>
              <h3 className="text-lg font-medium text-teal-600 mb-2">Contact Us</h3>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Say Hello</h2>
            </div>
            <div className="space-y-8">
              <ContactItem icon={<FiMapPin className='w-8 h-8 max-auto' />} label="Address" value="Location KG 9 Ave, Kigali" />
              <ContactItem icon={<FiMail className='w-8 h-8 max-auto' />} label="Email" value="businesscafe@info.com" />
              <ContactItem icon={<FiPhoneCall className='w-8 h-8 max-auto' />} label="Phone" value="+250788183828" />
            </div>
          </div>

          
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
            <div className="mb-8">
              <h3 className="text-lg font-medium text-teal-600 mb-2">Have Question?</h3>
              <h2 className="text-4xl font-bold text-gray-900">Send a Message</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <InputField value={name} setValue={setName} placeholder="Name" error={errors.name} />
              <InputField value={email} setValue={setEmail} placeholder="Email" error={errors.email} />
              <InputField value={subject} setValue={setSubject} placeholder="Subject" error={errors.subject} />
              <TextAreaField value={message} setValue={setMessage} placeholder="Your Message" error={errors.message} />

              <button
                type="submit"
                className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactItem({ icon, label, value }) {
  return (
    <div className="flex items-start space-x-4">
      <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center relative">
        <div className="absolute inset-0 border-2 border-dashed border-teal-300 rounded-full animate-pulse"></div>
        <div className="text-white w-8 h-8">{icon}</div>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-1">{label}</h3>
        <p className="text-gray-600">{value}</p>
      </div>
    </div>
  );
}

function InputField({ value, setValue, placeholder, error }) {
  return (
    <div>
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
        className="w-full px-4 py-4 border border-teal-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none text-gray-900 placeholder-gray-500"
      />
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
}

function TextAreaField({ value, setValue, placeholder, error }) {
  return (
    <div>
      <textarea
        value={value}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
        className="w-full px-4 py-4 border border-teal-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none text-gray-900 placeholder-gray-500 resize-vertical"
      />
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
}
