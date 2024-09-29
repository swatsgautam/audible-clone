import React, { useState } from 'react';
import './FaqComponent.css'

const FaqComponent = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleAccordion = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <div className="faq-section">
        <div className="container">
          <h2 className="faq-heading">Frequently Asked Questions</h2>

          <div className="accordion">
            
            {/* FAQ Item 1 */}
            <div className="accordion-item">
           
              <a
                className="accordion-header"
                role="button"
                onClick={() => toggleAccordion(1)}
                aria-expanded={expanded === 1}
              >
                <div className="accordion-icon">
                  <i className={expanded === 1 ? 'fa fa-chevron-down' : 'fa fa-chevron-right'} />
                </div>
                <div className="accordion-title">How does the free trial work?</div>
              </a>
              {expanded === 1 && (
                <div className="accordion-content">
                  <p>
                    Audible is a membership service that provides customers with a huge selection of
                    audiobooks as well as podcasts, exclusive originals, and more.
                  </p>
                  <p>
                    If you're new to Audible, you can take a free membership trial for 30 days. Your
                    membership will automatically continue for ₹199/month after the first 30 days, and
                    you can cancel anytime.
                  </p>
                  <p>Download the free Audible app to start listening on your iOS or Android device.</p>
                </div>
              )}
            </div>

            {/* FAQ Item 2 */}
            <div className="accordion-item">
              <a
                className="accordion-header"
                role="button"
                onClick={() => toggleAccordion(2)}
                aria-expanded={expanded === 2}
              >
                <div className="accordion-icon">
                  <i className={expanded === 2 ? 'fa fa-chevron-down' : 'fa fa-chevron-right'} />
                </div>
                <div className="accordion-title">
                  What is included with my Audible Premium Plus membership?
                </div>
              </a>
              {expanded === 2 && (
                <div className="accordion-content">
                  <p>As an Audible member, your subscription includes:</p>
                  <ul>
                    <li>1 credit a month to use on any title of your choice—yours to keep.</li>
                    <li>Access to the Plus Catalogue—thousands of Audible Originals, audiobooks, and podcasts.</li>
                    <li>Exclusive access to member-only sales and deals.</li>
                  </ul>
                </div>
              )}
            </div>

            {/* FAQ Item 3 */}
            <div className="accordion-item">
              <a 
                className="accordion-header"
                role="button"
                onClick={() => toggleAccordion(3)}
                aria-expanded={expanded === 3}
              >
                <div className="accordion-icon">
                  <i className={expanded === 3 ? 'fa fa-chevron-down' : 'fa fa-chevron-right'} />
                </div>
                <div className="accordion-title">
                  Are there additional benefits for Amazon Prime members?
                </div>
              </a>
              {expanded === 3 && (
                <div className="accordion-content">
                  <p>
                    Amazon Prime members can take a free 30-day trial and receive 2 credits that can be
                    used on any 2 titles of their choice. After the trial period, membership is ₹199/month
                    for 1 credit per month.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ Item 4 */}
            <div className="accordion-item">
              <a 
                className="accordion-header"
                role="button"
                onClick={() => toggleAccordion(4)}
                aria-expanded={expanded === 4}
              >
                <div className="accordion-icon">
                  <i className={expanded === 4 ? 'fa fa-chevron-down' : 'fa fa-chevron-right'} />
                </div>
                <div className="accordion-title">What happens if I want to cancel?</div>
              </a>
              {expanded === 4 && (
                <div className="accordion-content">
                  <p>
                    You can cancel your membership at any time at no cost. Titles added to your Library
                    with a credit are yours to keep, even if you cancel.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      
    </div>
  );
};

export default FaqComponent;
