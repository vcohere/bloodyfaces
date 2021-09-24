import React, { Component } from "react";

import HeroSection from "./HeroSection";
import StorySection from "./StorySection";
import RoadmapSection from "./RoadmapSection";
import FaqSection from "./FaqSection";

class Index extends Component {
  render() {
    return (
      <div class="page">
        <HeroSection drizzle={this.props.drizzle} drizzleState={this.props.drizzleState} />
        <StorySection />
        <RoadmapSection />
        <FaqSection />
      </div>
    )
  }
}

export default Index;
