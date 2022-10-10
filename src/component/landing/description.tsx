import React from "react";
import styled from "styled-components";
import useCaseData from "../../constant/useCaseData";

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

const CircleContainer = styled.div``;

const ItemContainer = styled.div``;

const SmallCircle = styled.div``;

const MediumCircle = styled.div``;

const LargeCircle = styled.div``;

function Description(): JSX.Element {
  return (
    <Wrapper>
      <TopOverlay />
      <ContentWrapper>
        <DesktopWrapper>
          <Desktop>
            <Container>
              <Paragraphs>
                <ParallexParagraphs>
                  {useCaseData.map((data, i) => (
                    <Paragraph key={`description-paragraph-${i}`}>
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
                  <ParallexGalaxy>
                    <GalaxyContainer>
                      <SpinContainer></SpinContainer>
                    </GalaxyContainer>
                  </ParallexGalaxy>
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
