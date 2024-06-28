import React from 'react';
import { FormattedMessage } from 'react-intl';
import Layout from '../../../components/Layout';
import VideoSection from '../../../components/VideoSection';
import Image from '../../../components/Image';
import Seo from '../../../components/Seo';
import './preparation.scss';

export default function PreparationPage() {
  return (
    <Layout includeCover={false} isShowLangSwitcher={true}>
      <div className="welcome-content">
        <div className="welcome-container">
          <Image
            src="caricature-transparent.png"
            className="welcome-right"
          />
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
    </Layout>
  );
};

export const Head = () => <Seo title="הכנה לניתוח - בית החולים אסותא אשדוד" />;
