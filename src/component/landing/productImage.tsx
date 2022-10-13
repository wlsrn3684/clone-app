import React, { VideoHTMLAttributes } from "react";
import styled from "styled-components";
import productImageData from "../../constant/data/productImageData";
import IProductImageProps from "../../type/productImage";

const Wrapper = styled.div`
  & > div {
    max-width: 1440px;
    margin: auto;
  }

  & > div > div {
    padding-left: 32px;

    display: grid;
    grid-template-areas:
      "column1 battery phone automation comment . "
      "column2 battery phone . . . "
      "column2 battery phone dashboard dashboard dashboard"
      "integration integration phone dashboard dashboard dashboard"
      " . pie phone dashboard dashboard dashboard"
      " . . . dashboard dashboard dashboard";
    grid-template-columns: 12.64vw 11.54vw 14.79vw 14.72vw 12.64vw 18%;
    grid-template-rows: 5vw 2.5vw 1.25vw 6.39vw 9.17vw auto;
    grid-gap: 1.67vw;
  }
`;

const Item = styled.div`
  -webkit-filter: drop-shadow(-10.8923px 14.523px 35.0973px rgba(29, 140, 242, 0.2));
  filter: drop-shadow(-10.8923px 14.523px 35.0973px rgba(29, 140, 242, 0.2));
  border-radius: 8px;
  z-index: -1;
`;

export const Inner = styled.div`
  width: 100%;
  height: auto;
  position: relative;
`;

export const VideoComponent = styled.div`
  height: 100%;
  outline: none;

  & > div {
    width: 100%;
    height: 100%;
  }

  & > div > video {
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }
`;

export const WindowMask = styled.div`
  padding: 0;
  display: flex;
  flex-direction: column;
  filter: drop-shadow(0px 8px 24px rgba(29, 140, 242, 0.5));
`;

export const WindowHeader = styled.div`
  display: flex;
  height: 15px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background: rgba(255, 255, 255, 0.4);
  & > div {
    display: flex;
    align-items: center;
    margin-left: 8px;
  }
`;

export const Circle = styled.span`
  background: #ffffff;
  height: 5px;
  width: 5px;
  border-radius: 50%;
  margin-right: 4px;
`;

export const WindowContent = styled.div`
  display: flex;
  -webkit-box-flex: 1;
  flex-grow: 1;
`;

type IPlayListKey =
  | "timeline"
  | "status"
  | "dashboard"
  | "integration"
  | "automation"
  | "automation"
  | "comment"
  | "mobile"
  | "battery";

function ProductImage(): JSX.Element {
  const playList = {
    timeline: "status",
    status: "dashboard",
    dashboard: "integration",
    integration: "automation",
    automation: "comment",
    comment: "mobile",
    mobile: "battery",
    battery: "pie",
  };

  const onPlayEnded = (id: string) => () => {
    const targetId = playList[id as IPlayListKey];
    if (targetId !== undefined) {
      const target = document.getElementById(targetId);
      (target as HTMLVideoElement).play();
    }
  };

  return (
    <Wrapper>
      <div>
        <div>
          {productImageData.map((data, i) => (
            <Item key={`product-image-${i}`} className={`item${i + 1} ${data.className}`} style={data.style}>
              <Inner>
                <VideoComponent>
                  <div>
                    <video
                      id={data.className}
                      preload="auto"
                      muted={true}
                      autoPlay={i === 0}
                      playsInline={true}
                      poster={data.videoURL}
                      onEnded={onPlayEnded(data.className)}
                    >
                      <source src={data.source} />
                    </video>
                  </div>
                </VideoComponent>
              </Inner>
            </Item>
          ))}
          <Item
            className="item9 dashboard"
            style={{ filter: "none", minWidth: "638.81px", zIndex: -1, gridArea: "dashboard" }}
          >
            <WindowMask>
              <WindowHeader>
                <div>
                  <Circle />
                  <Circle />
                  <Circle />
                </div>
              </WindowHeader>
              <WindowContent>
                <Inner>
                  <VideoComponent>
                    <div>
                      <video
                        id="dashboard"
                        preload="auto"
                        poster="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured images/Languages/Korean/New Homepage_March 2022/KO_Dashboard.png"
                        muted={true}
                        playsInline={true}
                        onEnded={onPlayEnded("dashboard")}
                      >
                        <source src="https://dapulse-res.cloudinary.com/video/upload/q_auto,f_auto,cs_copy/remote_mondaycom_static/video/video-library/languages/korean/Homepage videos_March 2022/8_Dashboard_KO.mp4" />
                      </video>
                    </div>
                  </VideoComponent>
                </Inner>
              </WindowContent>
            </WindowMask>
          </Item>
        </div>
      </div>
    </Wrapper>
  );
}

export default ProductImage;
