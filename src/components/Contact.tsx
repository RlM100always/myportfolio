import React, { useState, FormEvent } from 'react';
import { SectionTitle } from './common/SectionTitle';
import { Github, Linkedin, Facebook, Mail, MessageCircle } from 'lucide-react';

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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage({
        type: 'success',
        text: 'Thank you! Your message has been sent successfully.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      // Clear message after 5 seconds
      setTimeout(() => {
        setSubmitMessage(null);
      }, 5000);
    }, 1500);
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
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 transform hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
            
            <p className="text-gray-300 mb-8 leading-relaxed">
              Feel free to reach out to me through any of these platforms. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            
            <div className="space-y-6">
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
                    <p className="text-sm text-gray-400">{link.url.replace('mailto:', '').replace('https://wa.me/+', '+')}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 transform hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-6 text-white">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-700/70 text-white border border-slate-600 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all duration-300"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-700/70 text-white border border-slate-600 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-slate-700/70 text-white border border-slate-600 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all duration-300 resize-none"
                  placeholder="Hello, I'd like to talk about..."
                ></textarea>
              </div>
              
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 rounded-lg font-bold text-white transition-all duration-300 ${
                    isSubmitting 
                      ? 'bg-slate-600 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 shadow-lg hover:shadow-cyan-500/25'
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
              
              {submitMessage && (
                <div className={`p-4 rounded-lg ${
                  submitMessage.type === 'success' 
                    ? 'bg-green-500/20 text-green-200' 
                    : 'bg-red-500/20 text-red-200'
                }`}>
                  {submitMessage.text}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};