import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Wand2,
    Upload,
    ArrowRightCircle,
    BrainCircuit, // For AI/Deep Learning
    Image,       // For Image Processing
    Telescope,    // For Future Scope
    Heart,       //Added Heart icon
    Users,
    MonitorCheckIcon,
} from 'lucide-react';
import { motion } from 'framer-motion';

// Animation Variants
const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeInOut' } },
};

const featureVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
        opacity: 1,
        scale: 1,
        transition: { duration: 0.6, delay: i * 0.2, ease: 'easeInOut' },
    }),
};

const buttonVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.8, type: 'spring', stiffness: 120 } },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
};

const LandingPage = () => {

    const navigate = useNavigate();
    return (
        <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 flex flex-col items-center justify-start">
            {/* Header Section */}
            <motion.div
                variants={headerVariants}
                initial="hidden"
                animate="visible"
                className="py-8 px-6 border-b border-gray-300 flex flex-col items-center justify-center space-y-4 text-center"
            >
                <Wand2 className="text-blue-600 h-16 w-16" />
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-800 tracking-tight bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    Scan-Saathi
                </h1>
                <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 tracking-tight">
                    X-Ray Severity Prediction Platform
                </h2>
            </motion.div>

            {/* Main Content Section */}
            <div className="p-6 sm:p-8 space-y-8 max-w-4xl text-center">
                <p className="text-gray-700 leading-relaxed text-lg sm:text-xl font-medium">
                    <Heart className="inline-block w-6 h-6 mr-1 text-red-500" />
                    Our AI-powered platform analyzes knee X-ray images to predict the severity of arthritis.
                    <br />
                    Scan-Saathi allows you to upload X-ray images and instantly receive a severity prediction based on advanced machine learning algorithms.
                    Whether you&apos;re a patient or a healthcare provider, Scan-Saathi empowers you with quick, preliminary insights to support early diagnosis and timely treatment.
                </p>

                {/* Features Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    <motion.div
                        variants={featureVariants}
                        initial="hidden"
                        animate="visible"
                        custom={0}
                        className="flex flex-col items-center bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"

                        onClick={() => {
                            navigate('/upload');
                        }}
                    >
                        <Upload className="h-16 w-16 text-blue-500 mb-4" />
                        <span className="text-xl font-semibold text-blue-700 mb-2">Upload Your X-Ray</span>
                        <p className="text-gray-600 text-sm">Easily upload your knee X-ray image to get started.</p>
                    </motion.div>

                    <motion.div
                        variants={featureVariants}
                        initial="hidden"
                        animate="visible"
                        custom={1}
                        className="flex flex-col items-center bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"

                        onClick={() => {
                            navigate('/upload');
                        }}
                    >
                        <Wand2 className="h-16 w-16 text-blue-500 mb-4" />
                        <span className="text-xl font-semibold text-blue-700 mb-2">AI-Powered Prediction</span>
                        <p className="text-gray-600 text-sm">Receive instant, accurate predictions powered by advanced AI algorithms trained on real-world radiographic data.</p>
                    </motion.div>
                </div>

                {/* Get Started Button */}
                <motion.div
                    variants={buttonVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    whileTap="tap"
                    className="mt-10"
                >
                    <button
                        onClick={() => (window.location.href = '/upload')}
                        className="bg-blue-600 text-white py-4 px-10 rounded-full shadow-lg text-lg font-semibold flex items-center justify-center hover:bg-blue-700 transition-all duration-200 cursor-pointer"
                    >
                        Get Started
                        <ArrowRightCircle className="ml-3 w-6 h-6" />
                    </button>
                </motion.div>
            </div>

            {/* Deep Learning and Image Processing Section */}
            <div className="py-16 px-8 sm:px-12 w-full bg-gradient-to-r from-white via-gray-50 to-gray-100 rounded-lg shadow-lg">
                <div className="max-w-4xl mx-auto space-y-12">
                    <h3 className="text-3xl font-semibold text-gray-800 text-center flex items-center justify-center space-x-4">
                        <BrainCircuit className="w-10 h-10 text-purple-500" />
                        <span>How It Works: Deep Learning & Image Processing</span>
                    </h3>

                    <p className="text-gray-700 leading-relaxed text-lg sm:text-xl text-center">
                        Scan-Saathi utilizes state-of-the-art deep learning models to analyze X-ray images. Here’s a simplified overview:
                    </p>

                    <ul className="list-disc list-inside space-y-6 text-gray-700 text-lg sm:text-xl">
                        <li className="transition-transform transform hover:scale-105 hover:text-teal-600">
                            <span className="font-semibold text-teal-700">Image Acquisition:</span> You upload your knee X-ray image.
                        </li>
                        <li className="transition-transform transform hover:scale-105 hover:text-teal-600">
                            <span className="font-semibold text-teal-700">Image Preprocessing:</span> The image is processed to enhance relevant features and standardize the input for the model.
                        </li>
                        <li className="transition-transform transform hover:scale-105 hover:text-teal-600">
                            <span className="font-semibold text-teal-700">Feature Extraction:</span> Convolutional Neural Networks (CNNs), a type of deep learning model, automatically extract hierarchical features from the X-ray image. These features are indicative of arthritis severity.
                        </li>
                        <li className="transition-transform transform hover:scale-105 hover:text-teal-600">
                            <span className="font-semibold text-teal-700">Severity Prediction:</span> The extracted features are fed into a classification/regression layer to predict the severity level (e.g., on a scale of 0–5).
                        </li>
                        <li className="transition-transform transform hover:scale-105 hover:text-teal-600">
                            <span className="font-semibold text-teal-700">Result Display:</span> The predicted severity is displayed to you in an easy-to-understand format.
                        </li>
                    </ul>

                    <p className="text-gray-700 leading-relaxed text-lg sm:text-xl text-center">
                        <Image className="inline-block w-6 h-6 mr-1 text-green-500" />
                        Our models are trained on large datasets of annotated X-ray images to ensure accuracy and reliability.
                    </p>
                </div>
            </div>


            {/* Future Scope Section */}
            <div className="py-16 px-8 sm:px-12 w-full bg-gradient-to-r from-white via-gray-50 to-gray-100 rounded-lg shadow-lg">
                <div className="max-w-4xl mx-auto space-y-10">
                    <h3 className="text-3xl sm:text-4xl font-semibold text-gray-800 text-center flex items-center justify-center space-x-4">
                        <Telescope className="w-10 h-10 text-teal-600" />
                        <span>Future Scope & Vision</span>
                    </h3>

                    <p className="text-gray-700 leading-relaxed text-lg sm:text-xl text-center">
                        We envision Scan-Saathi becoming an indispensable tool for both patients and healthcare providers. Our future plans include:
                    </p>

                    <ul className="list-disc list-inside space-y-6 text-gray-700 text-lg sm:text-xl">
                        <li className="transition-transform transform hover:scale-105 hover:text-teal-600">
                            <span className="font-semibold text-teal-700">Expanding the platform:</span> Detecting other musculoskeletal conditions from X-rays.
                            <MonitorCheckIcon className="inline-block w-6 h-6 ml-2 text-teal-400" />
                        </li>
                        <li className="transition-transform transform hover:scale-105 hover:text-teal-600">
                            <span className="font-semibold text-teal-700">Developing a mobile app:</span> For increased accessibility.
                        </li>
                        <li className="transition-transform transform hover:scale-105 hover:text-teal-600">
                            <span className="font-semibold text-teal-700">EHR integration:</span> Seamless integration with electronic health record systems.
                        </li>
                        <li className="transition-transform transform hover:scale-105 hover:text-teal-600">
                            <span className="font-semibold text-teal-700">Longitudinal tracking:</span> Monitoring disease progression over time.
                        </li>
                        <li className="transition-transform transform hover:scale-105 hover:text-teal-600">
                            <span className="font-semibold text-teal-700">Personalized treatment recommendations:</span> Based on predicted severity and patient history.
                            <Users className="inline-block w-6 h-6 ml-2 text-orange-400" />
                        </li>
                        <li className="transition-transform transform hover:scale-105 hover:text-teal-600">
                            <span className="font-semibold text-teal-700">Exploring 3D models:</span> Using 3D models from X-rays for enhanced analysis.
                        </li>
                    </ul>

                    <p className="text-gray-700 leading-relaxed text-lg sm:text-xl text-center">
                        Our ultimate goal is to empower patients with knowledge about their condition and assist healthcare providers in making informed decisions, leading to better patient outcomes.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default LandingPage;