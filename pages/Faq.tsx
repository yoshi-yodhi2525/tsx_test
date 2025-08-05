
import React, { useState } from 'react';
import { faqData } from '../data';
import type { FaqItem } from '../types';

const FaqItemComponent: React.FC<{ item: FaqItem }> = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200 dark:border-gray-700">
            <button
                className="w-full flex justify-between items-center text-left py-4 px-2"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="font-semibold text-lg">{item.question}</span>
                <svg
                    className={`w-6 h-6 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
            </button>
            {isOpen && (
                <div className="pb-4 px-2 text-gray-600 dark:text-gray-300">
                    <p>{item.answer}</p>
                </div>
            )}
        </div>
    );
};

const FaqPage = () => {
    return (
        <div className="bg-card dark:bg-dark-card p-6 rounded-lg shadow-md">
            <div className="space-y-4">
                {faqData.map((item, index) => (
                    <FaqItemComponent key={index} item={item} />
                ))}
            </div>
        </div>
    );
};

export default FaqPage;
