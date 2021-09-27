import React, { Component } from "react";

import HeroSection from "./HeroSection";
import StorySection from "./StorySection";
import RoadmapSection from "./RoadmapSection";
import FaqSection from "./FaqSection";
import MobileMenu from "./MobileMenu";

class Index extends Component {
  state = {
    showMobileMenu: false
  };

  burgerTap() {
    this.setState({ showMobileMenu: true });
  }

  render() {
    return (
      <div class="page">
        <MobileMenu triggerOpen={this.state.showMobileMenu} />
        <HeroSection />
        <StorySection />
        <RoadmapSection />
        <FaqSection />
      </div>
    )
  }
}

export default Index;
