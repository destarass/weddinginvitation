import React, { useEffect } from "react";
import "./Storyus.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Storyus = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="storyus-container" id="storyus">
      <div data-aos="fade-up" className="H1judulStory">
        <h1 className="H1storyus">Doa Pengantin</h1>
      </div>

      <div className="StoryUsWrapper">
        <div data-aos="slide-right" className="StoryUsCard">
          <h2 className="StoryUsH2arab">
            بَارَكَ اللَّهُ لَكَ وَ بَارَكَ عَلَيْكَ وَ جَمَعَ بَيْنَكُمَا فِيْ
            خَيْرٍ
          </h2>
          <h2 className="StoryUsH2">
            “Semoga Allah menganugerahkan barakah kepadamu, semoga Allah SWT
            juga menganugerahkan barakah atasmu. Dan, semoga Dia menghimpun
            kalian berdua dalam kebaikan”
          </h2>
        </div>
      </div>
      <img
        data-aos="fade-up"
        className="ImgStoryUS"
        src="images/storyus-2.jpg"
        alt=""
      />
    </div>
  );
};

export default Storyus;
