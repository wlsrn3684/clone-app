import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
`;

const ComponentWrapper = styled.div`
  max-width: none;
  justify-content: center;
  margin: auto;
  display: flex;
`;

const ImageWrapper = styled.div`
  width: 100%;
  position: relative;
`;

const Video = styled.div`
  height: 100%;
  outline: none;
`;

const Player = styled.div`
  width: 100%;
  height: 100%;
  & > video {
    width: 100%;
    height: 100%;
    display: block !important;
  }
`;

// const ComponentWrapper = styled.div``

const TopTriangle = styled.div`
  border-bottom: 13.9173vw solid rgb(14, 14, 83);
  width: 0;
  height: 0;
  border-right: 100vw solid transparent;
  margin-top: -13.917310096006544vw;
  position: absolute;
  z-index: 2;
  pointer-events: none;
`;

const BottomTriangle = styled.div`
  border-top: 13.9173vw solid rgb(14, 14, 83);
  width: 0;
  height: 0;
  border-left: 100vw solid transparent;
  position: absolute;
  z-index: 2;
  pointer-events: none;
`;

function Animation(): JSX.Element {
  return (
    <Wrapper>
      <TopTriangle />

      <ComponentWrapper>
        <ImageWrapper>
          <Video>
            <Player>
              <video
                muted={true}
                preload="auto"
                autoPlay={true}
                loop={true}
                poster="https://dapulse-res.cloudinary.com/video/upload/so_0p/Generator_featured images/Home Page - 2022 Rebrand/products/products_video.jpg"
                playsInline={true}
              >
                <source src="https://dapulse-res.cloudinary.com/video/upload/q_auto,f_auto,cs_copy/Generator_featured images/Home Page - 2022 Rebrand/products/products_video.mp4" />
              </video>
            </Player>
          </Video>
        </ImageWrapper>
      </ComponentWrapper>
      <BottomTriangle />
    </Wrapper>
  );
}

export default Animation;
