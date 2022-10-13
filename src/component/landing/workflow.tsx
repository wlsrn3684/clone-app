import React, { useState } from "react";
import styled from "styled-components";
import tabData from "../../constant/data/tabData";
import workflowData from "../../constant/data/workflowData";

const Wrapper = styled.div`
  padding-top: 150px;
  padding-bottom: 0px;
`;

const ParagraphComponent = styled.div`
  max-width: 1440px;
  margin: auto;
`;

const ParagraphWrapper = styled.div`
  max-width: 1100px;
  margin: auto;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  padding: 0px 32px;
`;

const Paragraph = styled.div`
  text-align: center;
  word-break: break-word;
  width: 100%;
`;

const TitleWrapper = styled.div`
  margin-top: 0px;
  margin-bottom: 16px;

  & > h2 {
    font-size: 50px;
    line-height: 60px;
    font-weight: 700;
    word-break: break-word;
    margin: 0;
  }

  & > h2 > span {
    box-sizing: border-box;
    font-weight: 300;
  }
`;

const ParagraphBodyWrapper = styled.div`
  text-align: center;
`;

const ParagraphBody = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin: 0;
  word-break: break-word;
`;

const ViewWrapper = styled.div``;

const DesktopWrapper = styled.div``;

const DesktopComponent = styled.div`
  display: block;
  max-width: 1440px;
  margin: auto;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  padding: 40px 0;
`;

const TabListWrapper = styled.div`
  height: 83px;
  box-shadow: 0px 10px 30px rgb(29 140 242 / 20%);
  border-radius: 8px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  margin-bottom: 40px;
`;

const Tab = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: space-evenly;
  -webkit-justify-content: space-evenly;
  -ms-flex-pack: space-evenly;
  justify-content: space-evenly;
  position: relative;
  cursor: pointer;
  padding: 0 20px;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  min-width: 100px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const IconWrapper = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  padding-top: 8px;
  opacity: 0.6;
  position: relative;
`;

const IconContainer = styled.div`
  position: absolute;
  top: 0;
  opacity: 1;
`;

const AssetInner = styled.div`
  width: 16px;
  position: relative;
`;

const PictureComponent = styled.picture`
  & > img {
    width: 16px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    border-style: none;
  }
`;

const Name = styled.div<{ isActive: boolean }>`
  font-weight: 300;
  opacity: 0.6;
  color: ${({ isActive }) => (isActive ? "rgb(80, 52, 255)" : "rgb(15, 16, 72)")};
`;

const Marker = styled.div<{ isActive: boolean }>`
  background-color: ${({ isActive }) => (isActive ? "rgb(80, 52, 255)" : "transparent")};

  position: absolute;
  bottom: 0;
  left: 0;
  height: 4px;
  width: 100%;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  -webkit-transition: background-color 0.1s ease-in-out;
  transition: background-color 0.1s ease-in-out;
`;

const ContentWrapper = styled.div`
  width: 100%;
  position: relative;
`;

const Content = styled.div<{ isSelected: boolean }>`
  -webkit-transition: 0.3s;
  transition: 0.3s;

  visibility: ${({ isSelected }) => (isSelected ? "visible" : "hidden")};
  opacity: ${({ isSelected }) => (isSelected ? 1 : 0)};

  &:not(:first-child) {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const TextAndAsset = styled.div`
  height: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
`;

const LeftSpace = styled.div`
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
`;

const RightSpace = styled.div`
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
`;

const SideBySide = styled.div`
  --mobile-space-between-text-and-asset: 0;
  flex-direction: row-reverse;
  width: 100%;
  padding: 0 96px;
  max-width: 1440px;
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`;

const FullParagraphWrapper = styled.div`
  padding: 0 0 0 60px;
  width: 40%;
  position: relative;
  z-index: 1;
`;

const FullParagraph = styled.div`
  text-align: left;
  word-break: break-word;
  width: 100%;
`;

const Title = styled.div`
  margin-top: 0px;
  margin-bottom: 16px;

  & > span {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
  }

  & > span > div {
    margin-right: 14px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: flex-end;
    -webkit-box-align: flex-end;
    -ms-flex-align: flex-end;
    align-items: flex-end;
  }

  & > span > div > picture {
    height: 24px;
    margin-bottom: 4px;
  }

  & > span > div > picture > img {
    height: 100%;
    border-style: none;
  }

  & > span > h2 {
    color: rgb(108, 108, 255);
    font-size: 32px;
    line-height: 40px;
    font-weight: 400;
    word-break: break-word;
  }
`;

const Body = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin: 0;
  word-break: break-word;
`;

const ImageWrapper = styled.div`
  align-self: center;
  width: 60%;
  overflow: hidden;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  position: relative;
  z-index: 1;
`;

const SideAsset = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`;

const WindowMask = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  padding: 56px 48px;
  filter: drop-shadow(0px 8px 24px rgba(29, 140, 242, 0.5));
`;

const WindowHeader = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  height: 15px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background: rgba(255, 255, 255, 0.4);
`;

const WindowContent = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
`;

const VideoComponent = styled.div`
  height: 100%;
  outline: none;
`;

const Player = styled.div`
  width: 100%;
  height: 100%;

  & > video {
    width: 100%;
    height: 100%;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;

const CircleWrapper = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-left: 8px;
`;

const Circle = styled.span`
  background: #ffffff;
  height: 5px;
  width: 5px;
  border-radius: 50%;
  margin-right: 4px;
`;

const ButtonWrapper = styled.div`
  -webkit-box-pack: start;
  justify-content: flex-start;
  margin-top: 32px;
`;

const Button = styled.div`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  display: flex;

  & > a {
    color: rgb(108, 108, 255);
    --underline-color: #6c6cff;
    --underline-color-with-opacity: rgba(108, 108, 255, 0.4);

    background: linear-gradient(to right, var(--underline-color-with-opacity), var(--underline-color-with-opacity)),
      linear-gradient(to right, var(--underline-color), var(--underline-color), var(--underline-color));
    background-size: 100% 1px, 0 1px;
    background-position: 100% 100%, 0 100%;
    background-repeat: no-repeat;
    -webkit-transition: background-size 0.3s;
    transition: background-size 0.3s;

    display: flex;
    align-items: center;
    text-decoration: none;

    cursor: pointer;
    font-weight: 300;
  }
`;

const ArrowWrapper = styled.span`
  padding-left: 8px;
  padding-right: 4px;
  margin-right: -4px;
  -webkit-transition: padding 0.3s ease-in-out;
  transition: padding 0.3s ease-in-out;

  & > svg {
    fill: currentColor;
    height: 10px;
    width: 12px;
    overflow: hidden;
  }
`;

const MobileWrapper = styled.div``;

function Workflow(): JSX.Element {
  const [tabIndex, setTabIndex] = useState<number>(0);

  const onTabClick = (index: number) => () => {
    setTabIndex(index);
  };

  return (
    <React.Fragment>
      <Wrapper>
        <ParagraphComponent>
          <ParagraphWrapper>
            <Paragraph>
              <TitleWrapper>
                <h2>
                  <b>워크플로우에</b>
                  <span>필요한</span>
                  <b>모든 것</b>
                </h2>
              </TitleWrapper>
              <ParagraphBodyWrapper>
                <ParagraphBody>monday.com 빌딩 블록으로 이상적인 워크플로우를 쉽게 구축할 수 있습니다.</ParagraphBody>
              </ParagraphBodyWrapper>
            </Paragraph>
          </ParagraphWrapper>
        </ParagraphComponent>
      </Wrapper>
      <ViewWrapper>
        <div>
          <DesktopWrapper>
            <DesktopComponent>
              <TabListWrapper>
                {tabData.map((data, i) => (
                  <Tab key={`workflow-tab-${i}`} onClick={onTabClick(i)}>
                    <IconWrapper>
                      <IconContainer>
                        <AssetInner>
                          <PictureComponent>
                            <img src={tabIndex === i ? data.imageURL : data.activeImageURL} alt="" />
                          </PictureComponent>
                        </AssetInner>
                      </IconContainer>
                    </IconWrapper>
                    <Name isActive={tabIndex === i}>{data.name}</Name>
                    <Marker isActive={tabIndex === i} />
                  </Tab>
                ))}
              </TabListWrapper>
              <ContentWrapper>
                {workflowData.map((data, i) => (
                  <Content key={`workflow-content-${i}`} isSelected={tabIndex === i}>
                    <div>
                      <div>
                        <TextAndAsset>
                          <LeftSpace />
                          <SideBySide>
                            <FullParagraphWrapper>
                              <FullParagraph>
                                <Title>
                                  <span>
                                    <div>
                                      <picture>
                                        <img
                                          src="https://dapulse-res.cloudinary.com/image/upload/e_colorize,co_rgb:6C6CFF/Generator_featured images/Home Page - 2022 Rebrand/tabs/views_icon.svg"
                                          alt=""
                                        />
                                      </picture>
                                    </div>
                                    <h2>{data.title}</h2>
                                  </span>
                                </Title>
                                <div>
                                  <Body>{data.body}</Body>
                                </div>
                                {tabIndex !== 0 && tabIndex !== 1 && (
                                  <ButtonWrapper>
                                    <div>
                                      <Button>
                                        <a href="https://monday.com/features/dashboards">
                                          <span>더 알아보기</span>
                                          <ArrowWrapper>
                                            <svg
                                              width="10"
                                              height="14"
                                              viewBox="0 0 9 7"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M4.628.616a.5.5 0 1 0-.64.768L6.203 3.23H.5a.5.5 0 0 0 0 1h5.612L3.988 6a.5.5 0 1 0 .64.769l3.23-2.693a.5.5 0 0 0 0-.768L4.628.616z"
                                              ></path>
                                            </svg>
                                          </ArrowWrapper>
                                        </a>
                                      </Button>
                                    </div>
                                  </ButtonWrapper>
                                )}
                              </FullParagraph>
                            </FullParagraphWrapper>
                            <ImageWrapper>
                              <SideAsset>
                                <WindowMask>
                                  <WindowHeader>
                                    <CircleWrapper>
                                      <Circle />
                                      <Circle />
                                      <Circle />
                                    </CircleWrapper>
                                  </WindowHeader>
                                  <WindowContent>
                                    {data.source !== "" && (
                                      <VideoComponent>
                                        <Player>
                                          <video
                                            muted={true}
                                            preload="auto"
                                            autoPlay={true}
                                            loop={true}
                                            poster={data.poster}
                                            playsInline={true}
                                          >
                                            <source src={data.source} />
                                          </video>
                                        </Player>
                                      </VideoComponent>
                                    )}
                                  </WindowContent>
                                </WindowMask>
                              </SideAsset>
                            </ImageWrapper>
                          </SideBySide>
                          <RightSpace />
                        </TextAndAsset>
                      </div>
                    </div>
                  </Content>
                ))}
              </ContentWrapper>
            </DesktopComponent>
          </DesktopWrapper>
          <MobileWrapper></MobileWrapper>
        </div>
      </ViewWrapper>
    </React.Fragment>
  );
}

export default Workflow;
