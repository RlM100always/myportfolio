import React, { useState, FormEvent } from 'react';
import { SectionTitle } from './common/SectionTitle';
import { Github, Linkedin, Facebook, Mail, MessageCircle, Send, CheckCircle, AlertCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{type: 'success' | 'error', text: string} | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      // Validate form data
      if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
        throw new Error('Please fill in all fields');
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        throw new Error('Please enter a valid email address');
      }

      // Create form data for Getform
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('message', formData.message);
      
      // Send to Getform.io
      const response = await fetch('https://getform.io/f/brongnqa', {
        method: 'POST',
        body: formDataToSend
      });

      if (!response.ok) {
        throw new Error('Failed to send message. Please try again.');
      }

      setSubmitMessage({
        type: 'success',
        text: 'Thank you! Your message has been sent successfully. I\'ll get back to you soon!'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
    } catch (error) {
      setSubmitMessage({
        type: 'error',
        text: error instanceof Error ? error.message : 'Failed to send message. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
      
      // Clear message after 8 seconds
      setTimeout(() => {
        setSubmitMessage(null);
      }, 8000);
    }
  };

  const socialLinks = [
    { 
      name: 'GitHub', 
      icon: <Github size={24} />, 
      url: 'https://github.com/RlM100always',
      color: 'text-yellow-400 hover:text-yellow-300',
      hoverBg: 'hover:bg-yellow-400/10'
    },
    { 
      name: 'LinkedIn', 
      icon: <Linkedin size={24} />, 
      url: 'https://www.linkedin.com/in/RlM100always',
      color: 'text-blue-400 hover:text-blue-300',
      hoverBg: 'hover:bg-blue-400/10'
    },
    { 
      name: 'Facebook', 
      icon: <Facebook size={24} />, 
      url: 'https://www.facebook.com/RlM100always',
      color: 'text-blue-500 hover:text-blue-400',
      hoverBg: 'hover:bg-blue-500/10'
    },
    { 
      name: 'Email', 
      icon: <Mail size={24} />, 
      url: 'mailto:rakib100rlms@gmail.com',
      color: 'text-red-400 hover:text-red-300',
      hoverBg: 'hover:bg-red-400/10'
    },
    { 
      name: 'WhatsApp', 
      icon: <MessageCircle size={24} />, 
      url: 'https://wa.me/+8801782086907',
      color: 'text-green-400 hover:text-green-300',
      hoverBg: 'hover:bg-green-400/10'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 md:px-6 relative">
      <div className="container mx-auto">
        <SectionTitle>Get In Touch</SectionTitle>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Contact Information */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 transform hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Feel free to reach out to me through any of these platforms. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            
            <div className="space-y-4 sm:space-y-2 sm:grid sm:grid-cols-1 lg:grid-cols-2 gap-4">
              {socialLinks.map(link => (
                <a 
                  key={link.name} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 p-3 rounded-lg transition-all duration-300 ${link.hoverBg}`}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center bg-slate-700 ${link.color} transition-transform duration-300 hover:scale-110`}>
                    {link.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-white">{link.name}</h4>
                  </div>
                </a>
              ))}
            </div>

            {/* Direct Email Info */}
            <div className="mt-8 p-4 bg-slate-700/30 rounded-lg border border-slate-600">
              <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                <Mail size={18} className="text-yellow-400" />
                Direct Email
              </h4>
              <p className="text-gray-300 text-sm">
                You can also email me directly at:{' '}
                <a 
                  href="mailto:rakib100rlms@gmail.com" 
                  className="text-yellow-400 hover:text-yellow-300 font-medium"
                >
                  rakib100rlms@gmail.com
                </a>
              </p>
            </div>

            {/* Success Badge */}
            <div className="mt-6 p-3 bg-green-500/10 border border-green-500/30 rounded-lg">
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-green-400" />
                <span className="text-green-300 text-sm font-medium">
                  Direct Email Delivery Enabled
                </span>
              </div>
              <p className="text-green-200/80 text-xs mt-1">
                Messages sent through the form will be delivered directly to my inbox
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 transform hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
              <Send size={24} className="text-cyan-400" />
              Send Me a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-700/70 text-white border border-slate-600 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 placeholder-gray-400"
                  placeholder="Rakib Hossain"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-700/70 text-white border border-slate-600 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 placeholder-gray-400"
                  placeholder="rakib@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-slate-700/70 text-white border border-slate-600 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none placeholder-gray-400"
                  placeholder="Hello Rakib, I'd like to discuss..."
                ></textarea>
              </div>
              
              {/* Hidden honeypot field for spam protection */}
              <input 
                type="hidden" 
                name="_gotcha" 
                style={{ display: 'none !important' }} 
                tabIndex={-1}
                autoComplete="off"
              />
              
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 rounded-lg font-bold text-white transition-all duration-300 flex items-center justify-center gap-2 ${
                    isSubmitting 
                      ? 'bg-slate-600 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 shadow-lg hover:shadow-cyan-500/25 transform hover:scale-[1.02]'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </div>
              
              {submitMessage && (
                <div className={`p-4 rounded-lg border flex items-start gap-3 animate-slide-in-up ${
                  submitMessage.type === 'success' 
                    ? 'bg-green-500/10 border-green-500/30 text-green-200' 
                    : 'bg-red-500/10 border-red-500/30 text-red-200'
                }`}>
                  {submitMessage.type === 'success' ? (
                    <CheckCircle size={20} className="text-green-400 mt-0.5 flex-shrink-0" />
                  ) : (
                    <AlertCircle size={20} className="text-red-400 mt-0.5 flex-shrink-0" />
                  )}
                  <p className="text-sm leading-relaxed">{submitMessage.text}</p>
                </div>
              )}
            </form>

            {/* Alternative Contact Methods */}
            <div className="mt-6 pt-6 border-t border-slate-600">
              <p className="text-gray-400 text-sm text-center">
                Prefer other methods? You can also reach me via{' '}
                <a 
                  href="https://wa.me/+8801782086907" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 font-medium"
                >
                  WhatsApp
                </a>
                {' '}or{' '}
                <a 
                  href="https://www.linkedin.com/in/RlM100always" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 font-medium"
                >
                  LinkedIn
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};