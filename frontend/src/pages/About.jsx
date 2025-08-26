import React from 'react';
import { Info, BrainCircuit, ShieldCheck, FlaskConical, Wand2 } from 'lucide-react';

const About = () => (
  <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
    <div className="flex items-center space-x-4 mb-6">
      <Info className="text-blue-600 h-8 w-8" />
      <h2 className="text-2xl font-bold text-gray-800">About Scan-Saathi</h2>
    </div>

    <p className="text-gray-700 mb-6 leading-relaxed">
      <strong>Scan-Saathi</strong> is a cutting-edge web application designed to analyze <strong>knee X-ray images</strong> and predict the <strong>severity level of osteoarthritis</strong> using advanced machine learning algorithms. It serves as a non-invasive, easy-to-use tool to aid patients and professionals with preliminary insight.
    </p>

    <section className="mb-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center space-x-2">
        <FlaskConical className="text-blue-500 h-5 w-5" /> <span>The Technology</span>
      </h3>
      <p className="text-gray-700 leading-relaxed">
        We use a convolutional neural network (CNN) model trained on thousands of labeled X-ray images. The model identifies patterns, joint space narrowing, and other indicators to determine a severity score aligned with standard grading systems like Kellgren-Lawrence.
      </p>
    </section>

    <section className="mb-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center space-x-2">
        <BrainCircuit className="text-blue-500 h-5 w-5" /> <span>Empowering Decisions</span>
      </h3>
      <p className="text-gray-700 leading-relaxed">
        Our goal is to empower users by offering instant predictions, making healthcare more accessible. The predictor can support informed discussions with professionals and provide early intervention possibilities.
      </p>
    </section>

    <section className="mb-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center space-x-2">
        <ShieldCheck className="text-blue-500 h-5 w-5" /> <span>Reliable & Secure</span>
      </h3>
      <p className="text-gray-700 leading-relaxed">
        We prioritize data privacy and model accuracy. All uploads are processed securely and are not stored. We're committed to continuously improving prediction reliability.
      </p>
    </section>

    <section>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">Disclaimer</h3>
      <p className="text-gray-600 text-sm">
        This tool provides preliminary predictions and is not a replacement for medical diagnosis. Always consult certified professionals for clinical assessment.
      </p>
    </section>
  </div>
);

export default About;