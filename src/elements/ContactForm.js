import { useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactForm = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/contact`, form);

      if (data.success) {
        toast.success(data.message || 'Message sent!');
        setForm({ firstName: '', lastName: '', email: '', message: '' });
      } else {
        toast.error(data.message || 'Something went wrong.');
      }
    } catch (error) {
      console.error('Submission failed:', error);
      toast.error(error?.response?.data?.message || 'Server error. Try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-xl border p-4 sm:p-6 bg-white/60 shadow-lg border-gray-200">
      <Toaster position="top-right" />
      <h3 className="text-lg sm:text-xl font-bold mb-4">Send Us a Message</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="firstName" className="text-xs sm:text-sm font-medium">
              First name
            </label>
            <input
              id="firstName"
              value={form.firstName}
              onChange={handleChange}
              className="h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-xs sm:text-sm"
              placeholder="John"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="lastName" className="text-xs sm:text-sm font-medium">
              Last name
            </label>
            <input
              id="lastName"
              value={form.lastName}
              onChange={handleChange}
              className="h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-xs sm:text-sm"
              placeholder="Smith"
              required
            />
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-xs sm:text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className="h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-xs sm:text-sm"
            placeholder="john@example.com"
            required
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="message" className="text-xs sm:text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            value={form.message}
            onChange={handleChange}
            className="min-h-[120px] w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-xs sm:text-sm"
            placeholder="Tell us how we can help..."
            required
          />
        </div>
        <Button
          type="submit"
          className="w-full bg-indigo-700 hover:bg-indigo-700 text-sm"
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Send Message'}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
