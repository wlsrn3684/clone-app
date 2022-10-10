import React from "react";
import styled from "styled-components";
import Animation from "./animation";
import Begin from "./begin";
import BottomBackground from "./bottomBackground";
import CustomerStory from "./customerStory";
import Description from "./description";
import FreePlan from "./freePlan";

import GettingStarted from "./gettingStarted";
import Partner from "./partner";
import ProductImage from "./productImage";
import ProductInfomation from "./productInfomation";
import Roadmap from "./roadmap";
import Start from "./start";
import Support from "./support";
import Workflow from "./workflow";

const Main = styled.main``;

function Landing(): JSX.Element {
  return (
    <Main>
      <GettingStarted />
      <Roadmap />
      <Partner />
      <Start />
      <ProductImage />
      <Description />
      <Workflow />
      <ProductInfomation />
      <Animation />
      <CustomerStory />
      <Begin />
      <Support />
      <FreePlan />
      <BottomBackground />
    </Main>
  );
}

export default Landing;
