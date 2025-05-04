import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useToast } from "@/hooks/use-toast";
import { Github, Linkedin, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    reason: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Replace these with your actual Google Form entry IDs
    const formId = 'YOUR_GOOGLE_FORM_ID';
    const nameId = 'entry.XXXXXXXX';
    const emailId = 'entry.XXXXXXXX';
    const phoneId = 'entry.XXXXXXXX';
    const reasonId = 'entry.XXXXXXXX';
    const messageId = 'entry.XXXXXXXX';
    
    // Construct the form data in the format Google Forms expects
    const formEntries = new URLSearchParams();
    formEntries.append(nameId, formData.name);
    formEntries.append(emailId, formData.email);
    if (formData.phone) formEntries.append(phoneId, formData.phone);
    formEntries.append(reasonId, formData.reason);
    formEntries.append(messageId, formData.message);
    
    try {
      // Send the form data to Google Forms
      const response = await fetch(`https://docs.google.com/forms/d/e/${formId}/formResponse`, {
        method: 'POST',
        mode: 'no-cors', // This is important as Google Forms doesn't allow CORS
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formEntries.toString(),
      });
      
      // Since we're using no-cors, we won't get a proper response status
      // So we'll just assume it worked if there's no error
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. We'll get back to you soon.",
      });
      
      // Reset the form
      setFormData({
        name: '',
        email: '',
        phone: '',
        reason: '',
        message: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Submission Failed",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Send us a message</h2>
            <p className="text-gray-600 mb-6">
              Have questions, feedback, or want to report an error? Fill out the form below to get in touch with our team.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email <span className="text-red-500">*</span></label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Your email address"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number (optional)</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Your phone number"
                />
              </div>
              
              <div>
                <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-1">Reason for Contacting <span className="text-red-500">*</span></label>
                <select
                  id="reason"
                  name="reason"
                  required
                  value={formData.reason}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  <option value="">Select a reason</option>
                  <option value="feedback">Feedback</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="error">Reporting Error</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message <span className="text-red-500">*</span></label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Write your message here..."
                ></textarea>
              </div>
              
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 transition-colors disabled:opacity-70"
                >
                  {isSubmitting ? 'Sending...' : 'Submit'}
                </button>
              </div>
              
              <p className="text-xs text-gray-500">
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </form>
          </div>
          
          <div>
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-600 mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="font-medium text-gray-800">Email</p>
                    <a href="mailto:kamsaliswapna9@gmail.com" className="text-teal-600 hover:underline">kamsaliswapna9@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-600 mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="font-medium text-gray-800">Phone</p>
                    <p className="text-gray-600">+91 8431723067</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-600 mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-medium text-gray-800">Operating Hours</p>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM IST</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
              
              <div className="flex space-x-4">
                <a href="https://github.com/swapnaxdata" target="_blank" rel="noopener noreferrer" className="bg-gray-100 hover:bg-gray-200 transition-colors p-3 rounded-full">
                  <Github className="h-6 w-6 text-gray-700" />
                </a>
                
                <a href="https://linkedin.com/in/swapnaxdata" target="_blank" rel="noopener noreferrer" className="bg-gray-100 hover:bg-gray-200 transition-colors p-3 rounded-full">
                  <Linkedin className="h-6 w-6 text-gray-700" />
                </a>
                
                <a href="https://medium.com/@kamsaliswapna9" target="_blank" rel="noopener noreferrer" className="bg-gray-100 hover:bg-gray-200 transition-colors p-3 rounded-full">
                  <MessageSquare className="h-6 w-6 text-gray-700" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
