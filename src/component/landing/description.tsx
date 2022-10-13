import React, { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import descriptionStarData from "../../constant/data/descriptionStarData";
import useCaseData from "../../constant/data/useCaseData";
import Dropbox from "../../constant/icon/dropbox";
import Facebook from "../../constant/icon/facebook";
import GMail from "../../constant/icon/gmail";
import Harvest from "../../constant/icon/harvest";
import Jira from "../../constant/icon/jira";
import Jotform from "../../constant/icon/jotform";
import LinkedIn from "../../constant/icon/linkedIn";
import Mailchimp from "../../constant/icon/mailchimp";
import Salesforce from "../../constant/icon/salesforce";
import Zoom from "../../constant/icon/zoom";
import IStarProps from "../../type/start";
import IUseCaseProps from "../../type/usecase";
import { Star } from "./gettingStarted";
import { Circle, Inner, VideoComponent, WindowContent, WindowHeader, WindowMask } from "./productImage";

const Wrapper = styled.div`
  padding-top: 0px;
  padding-bottom: 128px;
`;

const TopOverlay = styled.div`
  border-bottom: 13.9173vw solid rgb(15, 16, 72);

  width: 0;
  height: 0;
  border-right: 100vw solid transparent;
  margin-top: -13.917310096006544vw;

  position: absolute;
  z-index: 2;
  pointer-events: none;
`;

const BottomOverlay = styled.div`
  border-top: 13.9173vw solid rgb(15, 16, 72);

  width: 0;
  height: 0;
  border-left: 100vw solid transparent;

  position: absolute;
  z-index: 2;
  pointer-events: none;
`;

const ContentWrapper = styled.div``;

const DesktopWrapper = styled.div``;

const Desktop = styled.div`
  background: #0f1048;
  color: #ffffff;
  position: relative;
  padding: 128px 0;
`;

const Container = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  max-width: 1440px;
  margin: auto;
  padding: 0 96px;
`;

const Paragraphs = styled.div`
  -webkit-flex: 1 0 0;
  -ms-flex: 1 0 0;
  flex: 1 0 0;
`;

const ParallexParagraphs = styled.div``;

const Paragraph = styled.div``;

const Headline = styled.div`
  margin-top: 128px;
  max-width: 500px;
`;

const FullParagraph = styled.div`
  text-align: left;
  word-break: break-word;
  width: 100%;
`;

const TitleWrapper = styled.div`
  margin-top: 0px;
  margin-bottom: 16px;
`;

const CoreTitle = styled.h2`
  font-size: 40px;
  font-weight: 300;
  line-height: 48px;
  word-break: break-word;
  margin: 0;

  & > b {
    font-weight: 700;
  }
`;

const ParagraphBody = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin: 0;
  word-break: break-word;
`;

const SocialProof = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-top: 150px;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  & > img {
    width: 72px;
    height: 72px;
  }
`;

const Testimonial = styled.div`
  font-size: 16px;
  line-height: 24px;
  margin-left: 16px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
`;

const Content = styled.div`
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  max-width: 400px;
`;

const Person = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-top: 8px;
  font-size: 14px;
  line-height: 20px;
  font-weight: bold;
`;

const Company = styled.div`
  font-size: 14px;
  line-height: 20px;
`;

const Parallex = styled.div`
  -webkit-flex: 1 0 0;
  -ms-flex: 1 0 0;
  flex: 1 0 0;
  position: relative;
  min-height: 100%;
  padding-left: 50px;
`;

const ParallexContainer = styled.div`
  height: 500px;
  position: -webkit-sticky;
  position: sticky;
  top: calc(50% - 250px);
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
`;

const GalaxyContainer = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 500px;
  height: 500px;
  margin: 0 auto;
  background-color: #0f1048;
  position: relative;
`;

const SpinContainer = styled.div`
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 448px;
  height: 448px;
  background-image: url(https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/parallax/integrations/bg_gradiant.svg);
`;

const rotateCircle = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const smallSpin = keyframes`
  100% {
    -webkit-transform: rotate(1turn) translate(95px) rotate(-1turn);
    -ms-transform: rotate(1turn) translate(95px) rotate(-1turn);
    transform: rotate(1turn) translate(95px) rotate(-1turn);
  }
`;

const mediumInnerSpin = keyframes`
  100% {
    -webkit-transform: rotate(1turn) translate(135px) rotate(-1turn);
    -ms-transform: rotate(1turn) translate(135px) rotate(-1turn);
    transform: rotate(1turn) translate(135px) rotate(-1turn);
  }
`;

const mediumOuterSpin = keyframes`
  100% {
    -webkit-transform: rotate(1turn) translate(175px) rotate(-1turn);
    -ms-transform: rotate(1turn) translate(175px) rotate(-1turn);
    transform: rotate(1turn) translate(175px) rotate(-1turn);
  }
`;

const largeSpin = keyframes`
  100% {
    -webkit-transform: rotate(1turn) translate(225px) rotate(-1turn);
    -ms-transform: rotate(1turn) translate(225px) rotate(-1turn);
    transform: rotate(1turn) translate(225px) rotate(-1turn);
  }
`;

const CircleContainer = styled.div`
  position: absolute;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  animation: ${rotateCircle} linear infinite;
`;

const ItemContainer = styled.div`
  position: absolute;
  display: grid;
  place-content: center;
`;

const Item = styled.div`
  -webkit-transform: rotate(0) translate(95px) rotate(0);
  -ms-transform: rotate(0) translate(95px) rotate(0);
  transform: rotate(0) translate(95px) rotate(0);
  grid-area: 1/1;
`;

const SmallItem = styled(Item)`
  animation-delay: calc(-0 * 9s / (3));
  width: auto;
  height: 68px;
  animation: ${smallSpin} 14s linear infinite;

  & > img {
    width: auto;
    height: 68px;
  }
`;

const MediumItem = styled(Item)`
  animation-delay: calc(-0 * 14s / (2));
  width: auto;
  height: 62px;

  & > img {
    width: auto;
    height: 62px;
  }
`;

const MediumInnerItem = styled(MediumItem)`
  animation: ${mediumInnerSpin} 14s linear infinite;
`;

const MediumOuterItem = styled(MediumItem)`
  animation: ${mediumOuterSpin} 14s linear infinite;
`;

const LargeItem = styled(Item)`
  animation-delay: calc(-0 * 25s / (6));
  width: auto;
  height: 50px;
  animation: ${largeSpin} 25s linear infinite;

  & > img {
    width: auto;
    height: 50px;
  }
`;

const SmallItemContainer = styled(ItemContainer)`
  width: 200px;
  height: 200px;

  & > :nth-child(1) {
    animation-delay: calc(-0 * 9s / (3));
  }

  & > :nth-child(2) {
    animation-delay: calc(-1 * 9s / (3));
  }

  & > :nth-child(3) {
    animation-delay: calc(-2 * 9s / (3));
  }
`;

const MediumItemContainer = styled(ItemContainer)`
  width: 270px;
  height: 270px;

  & > :nth-child(1) {
    animation-delay: calc(-0 * 14s / (2));
  }

  & > :nth-child(2) {
    animation-delay: calc(-1 * 14s / (2));
  }
`;

const LargeItemContainer = styled(ItemContainer)`
  width: 350px;
  height: 350px;

  & > :nth-child(1) {
    animation-delay: calc(-0 * 25s / (6));
  }

  & > :nth-child(2) {
    animation-delay: calc(-1 * 25s / (6));
  }

  & > :nth-child(3) {
    animation-delay: calc(-1.5 * 25s / (6));
  }

  & > :nth-child(4) {
    animation-delay: calc(-3 * 25s / (6));
  }

  & > :nth-child(5) {
    animation-delay: calc(-4 * 25s / (6));
  }
`;

const SmallCircleContainer = styled(CircleContainer)`
  width: 200px;
  height: 200px;
  background-image: url(https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/parallax/integrations/Ellipse3.svg);
  animation-duration: 6s;
`;

const MediumCircleContainer = styled(CircleContainer)`
  width: 270px;
  height: 270px;
  background-image: url(https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/parallax/integrations/Ellipse2.svg);
  animation-duration: 6s;
`;

const LargeCircleContainer = styled(CircleContainer)`
  width: 350px;
  height: 350px;
  background-image: url(https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/parallax/integrations/Ellipse1.svg);
  animation-duration: 15s;
`;

const TwinkleStars = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: transparent;
`;

const ParallexGalaxy = styled.div`
  position: absolute;
  z-index: 0;
  transition: opacity 0.5s ease 0s;
  transform: scale(0.75);
  right: -150px;
  top: -125px;
  opacity: 1;

  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`;

const AssetInner1 = styled.div`
  position: absolute;
  z-index: 1;
  transition: opacity 0.5s ease 0s;
  opacity: 0;
  width: 450px;
`;

const AssetInner2 = styled.div`
  position: absolute;
  z-index: 2;
  transition: left 0.6s ease-out 0s, top 0.6s ease-in-out 0s, transform 0.6s ease-in-out 0s;
  opacity: 1;
  width: 50px;
  left: 145px;
  top: 166px;
  transform: scale(0.3);
`;

const AssetInner3 = styled.div`
  left: 75px;
  top: 100px;
  position: absolute;
  font-size: 18px;
  transition: opacity 0.4s linear 0s;
  opacity: 0;
`;

const AssetContent = styled.span`
  white-space: pre;
`;

const Tag = styled.span`
  color: #0981fc;
`;

const typedjsBlink = keyframes`
50% {
    opacity: 0.0;
}
`;

const CursorBlink = styled.span`
  animation: ${typedjsBlink} 0.7s infinite;
  -webkit-animation: ${typedjsBlink} 0.7s infinite;
  animation: ${typedjsBlink} 0.7s infinite;

  opacity: 1;
`;

const fadeIn = keyframes`
0% {
    opacity: 0;
    -webkit-transform: scale(0.5);
    -ms-transform: scale(0.5);
    transform: scale(0.5);
}
80% {
    opacity: 1;
    -webkit-transform: scale(1.15);
    -ms-transform: scale(1.15);
    transform: scale(1.15);
}
100% {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
}
`;

const PDFImage = styled.img`
  width: 70px;
  margin-left: -20px;
  margin-top: -8px;
  -webkit-animation: ${fadeIn} 0.5s ease-in-out;
  animation: ${fadeIn} 0.5s ease-in-out;
`;
function Description(): JSX.Element {
  const WrapperRef = useRef<null | HTMLDivElement>(null);
  const refs = useRef<null[] | HTMLDivElement[]>(new Array(3));

  const handleScroll = () => {
    const windowOffset = window.scrollY;
    const WrapperOffset = WrapperRef.current?.offsetTop;

    if (WrapperOffset != null && WrapperOffset <= windowOffset) {
      const firstTrigger = refs.current[0]?.offsetTop;
      const firstHeight = refs.current[0]?.offsetHeight;
      const secondTrigger = refs.current[1]?.offsetTop;
      const secondHeight = refs.current[1]?.offsetHeight;

      if (firstTrigger != null && secondTrigger != null && firstHeight != null && secondHeight != null) {
        const assetList: HTMLDivElement[] = new Array(9);
        for (let i = 0; i < 9; i++) assetList[i] = document.getElementById(`animated-asset-${i}`) as HTMLDivElement;

        if (window.scrollY >= WrapperOffset + secondTrigger + secondHeight) {
          assetList[2].style.opacity = "1";
          const target = document.getElementById("description-video");
          if (target != null) (target as HTMLVideoElement).play();

          assetList[6].style.opacity = "0";
          assetList[7].style.opacity = "0";
          assetList[8].style.opacity = "0";

          assetList[3].style.left = "250px";
          assetList[3].style.top = "351px";
          assetList[3].style.transform = "scale(0.32)";
          assetList[3].style.transition =
            "left 0.8s ease-in-out 0s, top 0.8s ease-in-out 0s, transform 0.8s ease-in-out 0s";

          assetList[4].style.left = "305px";
          assetList[4].style.top = "351px";
          assetList[4].style.transform = "scale(0.32)";
          assetList[4].style.transition =
            "left 0.8s ease-in-out 0s, top 0.8s ease-in-out 0s, transform 0.8s ease-in-out 0s";

          assetList[5].style.left = "360px";
          assetList[5].style.top = "351px";
          assetList[5].style.transform = "scale(0.32)";
          assetList[5].style.transition =
            "left 0.8s ease-in-out 0s, top 0.8s ease-in-out 0s, transform 0.8s ease-in-out 0s";
        } else if (window.scrollY >= WrapperOffset + firstTrigger + firstHeight) {
          assetList[0].style.opacity = "0";
          assetList[1].style.opacity = "0";
          assetList[2].style.opacity = "0";

          assetList[6].style.opacity = "1";
          assetList[7].style.opacity = "1";
          assetList[8].style.opacity = "1";

          assetList[3].style.left = "0px";
          assetList[3].style.top = "100px";
          assetList[3].style.transform = "scale(1)";
          assetList[3].style.transition =
            "left 0.6s ease-out 0s, top 0.6s ease-in-out 0s, transform 0.6s ease-in-out 0s";

          assetList[4].style.left = "0px";
          assetList[4].style.top = "185px";
          assetList[4].style.transform = "scale(1)";
          assetList[4].style.transition =
            "left 0.6s ease-out 0s, top 0.6s ease-in-out 0s, transform 0.6s ease-in-out 0s";

          assetList[5].style.left = "0px";
          assetList[5].style.top = "270px";
          assetList[5].style.transform = "scale(1)";
          assetList[5].style.transition =
            "left 0.6s ease-out 0s, top 0.6s ease-in-out 0s, transform 0.6s ease-in-out 0s";
        } else {
          assetList[0].style.opacity = "1";
          assetList[1].style.opacity = "1";

          assetList[6].style.opacity = "0";
          assetList[7].style.opacity = "0";
          assetList[8].style.opacity = "0";

          assetList[3].style.left = "145px";
          assetList[3].style.top = "166px";
          assetList[3].style.transform = "scale(0.3)";

          assetList[4].style.left = "145px";
          assetList[4].style.top = "229px";
          assetList[4].style.transform = "scale(0.3)";

          assetList[5].style.left = "145px";
          assetList[5].style.top = "289px";
          assetList[5].style.transform = "scale(0.3)";
        }
      }
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      window.addEventListener("scroll", handleScroll);
    }, 100);
    return () => {
      clearInterval(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Wrapper ref={WrapperRef}>
      <TopOverlay />
      <ContentWrapper>
        <DesktopWrapper>
          <Desktop>
            <Container>
              <Paragraphs>
                <ParallexParagraphs>
                  {useCaseData.map((data: IUseCaseProps, i: number) => (
                    <Paragraph
                      key={`description-paragraph-${i}`}
                      ref={(element) => {
                        refs.current[i] = element;
                      }}
                    >
                      <Headline>
                        <FullParagraph>
                          <TitleWrapper>
                            <CoreTitle>
                              {data.title}
                              <br />
                              <b>{data.emphasis}</b>
                            </CoreTitle>
                          </TitleWrapper>
                          <div>
                            <ParagraphBody>{data.body}</ParagraphBody>
                          </div>
                        </FullParagraph>
                      </Headline>
                      <SocialProof>
                        <img src={data.avatarURL} alt="" />
                        <Testimonial>
                          <span>“</span>
                          <Content>
                            <span>{data.main}</span>
                            <Person>{data.person}</Person>
                            <Company>{data.company}</Company>
                          </Content>
                        </Testimonial>
                      </SocialProof>
                    </Paragraph>
                  ))}
                </ParallexParagraphs>
              </Paragraphs>

              <Parallex>
                <ParallexContainer>
                  <ParallexGalaxy id="animated-asset-0">
                    <GalaxyContainer>
                      <SpinContainer>
                        <TwinkleStars>
                          {descriptionStarData.map((data: IStarProps, i: number) => (
                            <Star {...data} key={`star-${i}`} />
                          ))}
                        </TwinkleStars>
                        <SmallCircleContainer />
                        <SmallItemContainer>
                          <SmallItem>
                            <GMail />
                          </SmallItem>
                          <SmallItem>
                            <LinkedIn />
                          </SmallItem>
                          <SmallItem>
                            <Harvest />
                          </SmallItem>
                        </SmallItemContainer>
                        <MediumCircleContainer />
                        <MediumItemContainer>
                          <MediumInnerItem>
                            <Zoom />
                          </MediumInnerItem>
                          <MediumOuterItem>
                            <Facebook />
                          </MediumOuterItem>
                        </MediumItemContainer>
                        <LargeCircleContainer />
                        <LargeItemContainer>
                          <LargeItem>
                            <Mailchimp />
                          </LargeItem>
                          <LargeItem>
                            <Jira />
                          </LargeItem>
                          <LargeItem>
                            <Salesforce />
                          </LargeItem>
                          <LargeItem>
                            <Jotform />
                          </LargeItem>
                          <LargeItem>
                            <Dropbox />
                          </LargeItem>
                        </LargeItemContainer>
                      </SpinContainer>
                    </GalaxyContainer>
                  </ParallexGalaxy>
                  <AssetInner1 id="animated-asset-1">
                    <WindowMask>
                      <WindowHeader>
                        <div>
                          <Circle />
                          <Circle />
                          <Circle />
                        </div>
                      </WindowHeader>
                      <WindowContent>
                        <picture>
                          <img
                            alt="다중 연동이 가능한 monday.com 보드"
                            src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto,w_450/Generator_featured images/Languages/Korean/KO Homepage_March 2022/KO_first_board.png"
                            style={{ width: "450px", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px" }}
                          />
                        </picture>
                      </WindowContent>
                    </WindowMask>
                  </AssetInner1>
                  <AssetInner1 id="animated-asset-2">
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
                                preload="auto"
                                poster="https://dapulse-res.cloudinary.com/video/upload/so_0p/remote_mondaycom_static/video/video-library/languages/korean/Homepage videos_March 2022/9_paralax-dashboard_KO.jpg"
                                muted={true}
                                playsInline={true}
                                id="description-video"
                              >
                                <source src="https://dapulse-res.cloudinary.com/video/upload/q_auto,f_auto,cs_copy/remote_mondaycom_static/video/video-library/languages/korean/Homepage videos_March 2022/9_paralax-dashboard_KO.mp4" />
                              </video>
                            </div>
                          </VideoComponent>
                        </Inner>
                      </WindowContent>
                    </WindowMask>
                  </AssetInner1>
                  <AssetInner2 id="animated-asset-3">
                    <picture>
                      <img
                        alt="Samantha's profile image"
                        src="https://dapulse-res.cloudinary.com/image/upload/v1649149959/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/parallax/person1.png"
                        style={{ width: "50px" }}
                      />
                    </picture>
                  </AssetInner2>
                  <AssetInner2 id="animated-asset-4" style={{ top: "229px" }}>
                    <picture>
                      <img
                        alt="Nate's profile image"
                        src="https://dapulse-res.cloudinary.com/image/upload/v1649149959/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/parallax/person2.png"
                        style={{ width: "50px" }}
                      />
                    </picture>
                  </AssetInner2>
                  <AssetInner2 id="animated-asset-5" style={{ top: "289px" }}>
                    <picture>
                      <img
                        alt="Paloma's profile image"
                        src="https://dapulse-res.cloudinary.com/image/upload/v1649149959/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/parallax/person3.png"
                        style={{ width: "50px" }}
                      />
                    </picture>
                  </AssetInner2>
                  <AssetInner3 id="animated-asset-6">
                    <AssetContent>
                      <Tag>@마케팅팀</Tag>
                      <span>
                        프로젝트 <br /> 진행상황 업데이트 해주실 수 있나요?
                      </span>
                    </AssetContent>
                    <CursorBlink>|</CursorBlink>
                  </AssetInner3>
                  <AssetInner3 id="animated-asset-7" style={{ top: "185px" }}>
                    <AssetContent>
                      <span>거의 다 했습니다,</span>
                      <br />
                      <Tag>@Samantha</Tag>
                      <span>파일 업로드 부탁드려요!</span>
                    </AssetContent>
                    <CursorBlink>|</CursorBlink>
                  </AssetInner3>
                  <AssetInner3 id="animated-asset-8" style={{ top: "270px", display: "flex" }}>
                    <AssetContent>
                      <div>
                        <div>
                          <span>방금 업데이트 완료했습니다!</span>
                        </div>
                        <PDFImage src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaystagingcom_static/uploads/Bar%20Ben/pdf_icon.png" />
                      </div>
                    </AssetContent>
                    <CursorBlink>|</CursorBlink>
                  </AssetInner3>
                </ParallexContainer>
              </Parallex>
            </Container>
          </Desktop>
        </DesktopWrapper>
      </ContentWrapper>
      <BottomOverlay />
    </Wrapper>
  );
}

export default Description;
