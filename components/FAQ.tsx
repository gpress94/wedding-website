import React from 'react';
import { SectionId, FAQItem } from '../types';
import { FAQS } from '../constants';

const FAQ: React.FC = () => {
  return (
    <section id={SectionId.FAQ} className="py-24">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="font-script text-5xl mb-16 text-theme-text">Frequently Asked Questions</h2>
        
        <div className="space-y-16">
          {FAQS.map((faq, index) => (
            <div key={index} className="flex flex-col items-center space-y-4">
              <h3 className="font-serif text-2xl font-semibold text-theme-text tracking-wide">
                {faq.question}
              </h3>
              <p className="font-sans font-light text-theme-text/80 max-w-lg leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;