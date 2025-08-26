import { useState } from 'react';
import { Upload, Wand2, CheckCircle, XCircle } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import LandingPage from './pages/LandingPage';

import parse from 'html-react-parser';

function App() {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [result, setResult] = useState('');
  const [feedback, setFeedback] = useState('');
  const [feedbackLoading, setFeedbackLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const server = 'http://localhost:8000';

  const fetchFeedback = async (severity) => {
    setFeedbackLoading(true);
    setFeedback('');
    try {
      const res = await fetch(`${server}/ai/feedback`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ severity: parseInt(severity) }),
      });
      const data = await res.json();
      let report = parse(data.data);
      setFeedback(report || 'No feedback generated.');
    } catch (error) {
      setFeedback('Failed to fetch feedback. Please try again.');
    } finally {
      setFeedbackLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;

    setLoading(true);
    const formData = new FormData();
    formData.append('name', 'user_uploaded_image');
    formData.append('file', file);

    try {
      const res = await fetch(`${server}/prediction/`, {
        method: 'POST',
        body: formData,
      });
      const response = await res.json();
      setResult(response.data);
    } catch (error) {
      setResult('Prediction failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    setFile(selected);
    if (selected) {
      setPreviewUrl(URL.createObjectURL(selected));
    }
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />

        <main className="flex-grow flex items-center justify-center p-6">
          <Routes>
            <Route path='/' element={<LandingPage />} />

            <Route
              path="/upload"
              element={
                <div className="w-full max-w-xl bg-white rounded-xl shadow overflow-hidden">
                  <div className="bg-blue-50 py-5 px-6 border-b border-gray-200 flex items-center space-x-3">
                    <Wand2 className="text-blue-500 h-7 w-7" />
                    <h2 className="text-lg font-semibold text-gray-800 tracking-tight">
                      X-Ray Severity Prediction
                    </h2>
                  </div>

                  <div className="p-6 space-y-6">
                    {/* Intro Section */}
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Wand2 className="text-blue-500 h-6 w-6" />
                        <h3 className="text-xl font-semibold text-gray-800">
                          Welcome to Scan-Saathi
                        </h3>
                      </div>
                      <div className="flex space-x-4 mt-2 text-sm">
                        <div className="flex items-center space-x-2 text-blue-600">
                          <CheckCircle className="h-4 w-4" />
                          <span>Fast Predictions</span>
                        </div>
                        <div className="flex items-center space-x-2 text-blue-600">
                          <Upload className="h-4 w-4" />
                          <span>Secure Upload</span>
                        </div>
                        <div className="flex items-center space-x-2 text-blue-600">
                          <Wand2 className="h-4 w-4" />
                          <span>AI Driven</span>
                        </div>
                      </div>
                    </div>

                    {/* Upload Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="image-upload" className="block text-sm font-medium text-gray-700">
                          Upload X-Ray Image
                        </label>
                        <div className="mt-1 flex rounded-md shadow-sm">
                          <label
                            htmlFor="image-upload"
                            className="cursor-pointer bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 flex items-center justify-center px-4 py-2 rounded-md w-full"
                          >
                            {file ? (
                              <span className="truncate">{file.name}</span>
                            ) : (
                              <span className="flex items-center">
                                <Upload className="mr-2 h-5 w-5" /> Choose File
                              </span>
                            )}
                            <input
                              id="image-upload"
                              type="file"
                              accept="image/*"
                              className="sr-only"
                              onChange={handleFileChange}
                            />
                          </label>
                        </div>
                      </div>

                      {previewUrl && (
                        <div className="border rounded p-2 max-h-64 overflow-hidden">
                          <img src={previewUrl} alt="Preview" className="w-full h-auto object-cover rounded" />
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={loading || !file}
                        className={`cursor-pointer w-full flex justify-center py-3 px-4 rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${loading || !file ? 'opacity-50 cursor-not-allowed' : ''}`}
                      >
                        {loading ? (
                          <span className="flex items-center">
                            <svg
                              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V1a1 1 0 012 0v3a8 8 0 018 8h3a1 1 0 010 2h-3a8 8 0 01-8 8v3a1 1 0 01-2 0v-3a8 8 0 01-8-8H1a1 1 0 010-2h3z"
                              ></path>
                            </svg>
                            Predicting...
                          </span>
                        ) : (
                          <span className="flex items-center">
                            <Wand2 className="mr-2 h-5 w-5" />
                            Predict Severity
                          </span>
                        )}
                      </button>
                    </form>

                    {/* Prediction Result */}
                    {result && (
                      <div className="mt-6 p-6 rounded-xl shadow-md bg-white text-center space-y-4">
                        <h2 className="text-xl font-bold text-gray-800">Prediction Result</h2>

                        {parseInt(result) <= 2 ? (
                          <div className="flex flex-col items-center text-green-700">
                            <div className="flex items-center space-x-2 bg-green-50 px-4 py-2 rounded-md">
                              <CheckCircle className="h-6 w-6" />
                              <span className="text-lg font-semibold">
                                Severity Level: {result} (Low)
                              </span>
                            </div>
                            <p className="text-sm mt-2 max-w-md">
                              Your knee X-ray indicates a lower severity of arthritis. Regular exercise and a balanced diet can help maintain joint health.
                            </p>
                          </div>
                        ) : (
                          <div className="flex flex-col items-center text-red-700">
                            <div className="flex items-center space-x-2 bg-red-50 px-4 py-2 rounded-md">
                              <XCircle className="h-6 w-6" />
                              <span className="text-lg font-semibold">
                                Severity Level: {result} (High)
                              </span>
                            </div>
                            <p className="text-sm mt-2 max-w-md">
                              Your knee X-ray indicates a higher severity of arthritis. We recommend consulting a specialist for personalized treatment options.
                            </p>
                          </div>
                        )}

                        {/* Progress bar */}
                        <div className="w-full mt-4">
                          <div className="w-full bg-gray-200 rounded-full h-4">
                            <div
                              className={`h-4 rounded-full ${parseInt(result) <= 2 ? "bg-green-500" : "bg-red-500"
                                }`}
                              style={{ width: `${(parseInt(result) / 4) * 100}%` }}
                            ></div>
                          </div>
                          <div className="flex justify-between text-xs text-gray-500 mt-1 px-1">
                            <span>Level 0</span>
                            <span>Level 4</span>
                          </div>
                        </div>

                        {/* Generate AI Report Button */}
                        <div className="mt-4">
                          <button
                            onClick={() => fetchFeedback(result)}
                            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-md cursor-pointer"
                          >
                            Generate AI Report
                          </button>
                        </div>

                        {/* AI Report Section */}
                        {feedback && (
                          <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-400 text-blue-800 text-sm rounded-md">
                            <h3 className="font-semibold mb-1">AI-generated Report:</h3>
                            <p>{feedback}</p>
                          </div>
                        )}
                      </div>
                    )}

                  </div>
                </div>
              }
            />

            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;