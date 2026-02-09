
import React, { useState } from 'react';
import Section from './Section';
import { FAQItem } from '../types';

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Do I need to be a pro runner?",
    answer: "Not at all! Our club welcomes runners of all levels, from complete beginners to seasoned athletes. We focus on conversational pace runs where the social is just as important as the miles. We also plan to do all types of activities in the very near future, everything from Padel to Mini Golf"
  },
  {
    question: "Where do we usually meet?",
    answer: "We launch from different iconic spots around Manchester — Ancoats, Deansgate, Castlefield, and MediaCityUK. Follow our instagram for our monthly schedule and meetup points. After each session we usually grab a coffee, snack or cocktail to chat, connect and unwind"
  },
  {
    question: "Is there a membership fee?",
    answer: "No fixed fee. We operate on a 'Donate to Join' model. Every session has an optional sign-up donation which goes 100% to our partner children's charities. If you can spare a penny, a pound or more, everything helps. If you can't afford to right now but just want to meet more people then please come along and join the community, everyone is welcome."
  },
  {
    question: "What should I bring?",
    answer: "Comfortable activewear, running shoes, and a positive attitude. We often head for coffee or light snacks locally after sessions, so bring a layer to keep warm. You will also be able to drop your stuff of at the location we meet at." 
  },
  {
    question: "How can I get involved?",
    answer: "If our mission resonates with you and you want to play a part in growing the community, there are plenty of ways to get involved. We're always open to volunteers. Get in touch and let's build something amazing together!"
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section id="faq" className="bg-black">
      <h2 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-12">[ Common Questions ]</h2>
      <div className="space-y-1">
        {FAQ_ITEMS.map((item, index) => (
          <div 
            key={index} 
            className="border-b border-white/10 group cursor-pointer"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <div className="py-8 flex justify-between items-center">
              <h3 className={`text-xl md:text-2xl font-black uppercase transition-all duration-300 ${openIndex === index ? 'gradient-text translate-x-4' : 'group-hover:translate-x-4'}`}>
                {item.question}
              </h3>
              <div className={`transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''}`}>
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 4v16m8-8H4" />
                </svg>
              </div>
            </div>
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-96 pb-8' : 'max-h-0'}`}>
              <p className="text-white/60 text-lg max-w-2xl leading-relaxed pl-4">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default FAQ;
