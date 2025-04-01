'use client';

import { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';

export default function Home() {
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        'https://yeahblend.app.n8n.cloud/webhook/575a76f1-3710-4ab9-bbe9-ef626702529b',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ city }),
        }
      );

      if (response.ok) {
        toast.success('Workflow started!');
      } else {
        toast.error('Failed to submit!');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSendEmails = async (e: any) => {
    e.preventDefault();
    setLoading2(true);

    try {
      const response = await fetch(
        'https://yeahblend.app.n8n.cloud/webhook/56a56aa7-12e6-4223-948b-ca536b81ccf1',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' }
        }
      );

      if (response.ok) {
        toast.success('Workflow started!');
      } else {
        toast.error('Failed to submit!');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.');
    } finally {
      setLoading2(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-6">
      <Toaster position='top-right' />
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Enter a City Name</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="City Name"
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white font-semibold px-6 py-3 rounded-lg transition duration-300 flex items-center justify-center"
            disabled={loading}>
            {loading ? (
              <svg className="animate-spin h-5 w-5 mr-3 border-2 border-white border-t-transparent rounded-full" viewBox="0 0 24 24"></svg>
            ) : (
              'Submit'
            )}
          </button>
          <button
            type="button"
            onClick={handleSendEmails}
            className="bg-yellow-600 hover:bg-yellow-700 cursor-pointer text-white font-semibold px-6 py-3 rounded-lg transition duration-300 flex items-center justify-center"
            disabled={loading2}>
            {loading2 ? (
              <svg className="animate-spin h-5 w-5 mr-3 border-2 border-white border-t-transparent rounded-full" viewBox="0 0 24 24"></svg>
            ) : (
              'Send Emails'
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
