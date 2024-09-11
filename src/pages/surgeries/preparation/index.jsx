import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import Layout from '../../../components/Layout';
import VideoSection from '../../../components/VideoSection';
import Image from '../../../components/Image';
import Seo from '../../../components/Seo';
import './preparation.scss';

export default function PreparationPage() {
  // State to keep track of the current scroll position
  const [currentIndex, setCurrentIndex] = useState(0);
  // State to manage the direction of the arrow
  const [isAtBottom, setIsAtBottom] = useState(false);

  // Array of sections to scroll through
  const sections = ['video-1', 'video-2', 'video-3'];

  // Function to handle FAB click
  const handleFabClick = () => {
    if (currentIndex < sections.length) {
      // Scroll to the next section
      document
        .getElementById(sections[currentIndex])
        .scrollIntoView({ behavior: 'smooth' });
      setCurrentIndex(currentIndex + 1);

      // If this is the last section, set the button to scroll up mode
      if (currentIndex + 1 === sections.length) {
        setIsAtBottom(true);
      }
    } else {
      // Scroll back to the top when reaching the end
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setCurrentIndex(0); // Reset index
      setIsAtBottom(false); // Reset button direction
    }
  };

  return (
    <Layout includeCover={false} isShowLangSwitcher={true}>
      <div className="welcome-content">
        <div className="welcome-container">
          <Image src="caricature-transparent.png" className="welcome-right" />
          <div className="welcome-left">
            <div className="rounded-box title">
              <h1>
                <FormattedMessage id="preparation_title" />
              </h1>
            </div>
            <div className="rounded-box text">
              <p>
                <FormattedMessage id="preparation_text_line1" />
              </p>
              <p>
                <FormattedMessage id="preparation_text_line2" />
              </p>
              <p>
                <FormattedMessage id="preparation_text_line3" />
              </p>
            </div>
          </div>
        </div>
      </div>
      <VideoSection
        sectionId="video-1"
        videoTitle={<FormattedMessage id="preparation_vedio_link1" />}
        videoSrc="https://www.youtube.com/embed/NjPi58h0QJE"
      />
      <VideoSection
        sectionId="video-2"
        videoTitle={<FormattedMessage id="preparation_vedio_link2" />}
        videoSrc="https://www.youtube.com/embed/YcYcM0RkRz4"
        className="bg-gray"
      />
      <VideoSection
        sectionId="video-3"
        videoTitle={<FormattedMessage id="preparation_vedio_link3" />}
        videoSrc="https://www.youtube.com/embed/J1KPyQiCRc0"
      />

      <section>
        <div className="best-regards-container">
          <p className="text-center">
            <b>
              <FormattedMessage id="preparation_bestRegards" />
            </b>
          </p>
          <p className="text-center">
            <b>
              <FormattedMessage id="preparation_team" />
            </b>
          </p>
        </div>
      </section>

      {/* FAB button */}
      <button id="fab" className="fab" onClick={handleFabClick}>
        {isAtBottom ? '▲' : '▼'}
      </button>
    </Layout>
  );
}

export const Head = () => <Seo title="הכנה לניתוח - בית החולים אסותא אשדוד" />;
