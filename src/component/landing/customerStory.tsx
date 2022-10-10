import React, { useEffect, useState } from "react";
import styled from "styled-components";
import carouselData from "../../constant/carouselData";

const Wrapper = styled.div`
  padding-top: 320px;
`;

const Component = styled.div``;

const DesktopWrapper = styled.div`
  display: block;
`;

const CarouselWrapper = styled.div`
  max-width: 1440px;
  margin: auto;
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

const DesktopContent = styled.div`
  --mobile-space-between-text-and-asset: 0;

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

const ParagraphComponent = styled.div`
  padding-bottom: 100px;
  width: 40%;
  padding: 0 60px 0 0;

  position: relative;
  z-index: 1;
`;

const Paragraph = styled.div`
  text-align: left;

  word-break: break-word;
  width: 100%;
`;

const TitleWrapper = styled.div`
  margin-top: 0px;
  margin-bottom: 16px;
`;

const CoreTitle = styled.h2`
  font-size: 50px;
  line-height: 60px;
  font-weight: 700;
  word-break: break-word;
  margin: 0;
  & > span {
    font-weight: 300;
  }
`;

const ButtonWrapper = styled.div`
  -webkit-box-pack: start;
  justify-content: flex-start;
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

const ImageWrapper = styled.div`
  align-self: center;
  filter: drop-shadow(-16px 23px 56px rgba(29, 140, 242, 0.3));
  width: 60%;

  /* overflow: hidden; */
  display: flex;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;

  position: relative;
  z-index: 1;
`;

const ReviewCarousel = styled.div``;

const CarouselContent = styled.div`
  margin-bottom: 100px;
  margin-right: 120px;
`;

const Carousel = styled.div`
  width: 100%;
  height: 320px;
  background: linear-gradient(180deg, #6c6cff 0%, #6c6cff 25%, #5034ff 100%);
  border-radius: 16px;
  color: white;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  padding: 44px;
  position: relative;
`;

const QuoteWrapper = styled.div<{ isSelected: boolean }>`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  font-size: 24px;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  opacity: ${({ isSelected }) => (isSelected ? 1 : 0)};
  -webkit-transition: all 0.3s;
  transition: all 0.3s;

  & > div {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }
`;

const Quote = styled.blockquote`
  position: relative;
  margin: auto 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  text-align: left;
  -webkit-letter-spacing: -0.5px;
  -moz-letter-spacing: -0.5px;
  -ms-letter-spacing: -0.5px;
  letter-spacing: -0.5px;
  line-height: 36px;
`;

const QuotationMark = styled.blockquote`
  position: absolute;
  top: 0;
  left: -12px;
  margin-right: 8px;
`;

const QuotationText = styled.blockquote``;

const ReviewerInfo = styled.div`
  font-size: 16px;
`;
const Logo = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding-top: 16px;
  height: 38px;

  & > picture > img {
    max-height: 38px;
    border-style: none;
  }
`;

const Indicators = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-top: 24px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: 16px;
`;

const IndicatorWrapper = styled.div`
  padding: 4.5px;
  cursor: pointer;
  -webkit-transition: padding 0.2s ease-in-out;
  transition: padding 0.2s ease-in-out;
`;

const Indicator = styled.div<{ isSelected: boolean }>`
  background: ${({ isSelected }) => (isSelected ? "#6c6cff" : "")};
  border: ${({ isSelected }) => (isSelected ? "1px solid #6c6cff" : "1px solid")};
  width: 11px;
  height: 11px;
  border-radius: 8px;
  -webkit-transition: width 0.2s ease-in-out, height 0.2s ease-in-out;
  transition: width 0.2s ease-in-out, height 0.2s ease-in-out;
`;

const CarouselAsset = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 200px;
  height: 200px;
  border-radius: 16px;
  -webkit-transition: opacity 0.2s ease-in-out;
  transition: opacity 0.2s ease-in-out;

  & > picture > img {
    max-width: 200px;
    max-height: 200px;
    height: auto;
    width: auto;
    margin: 0 auto;
    border-radius: 16px;

    border-style: none;
  }
`;

const MobileWrapper = styled.div``;

function CustomerStory(): JSX.Element {
  const [carouseIndex, setCarouseIndex] = useState<number>(0);

  const autoSlideHandler = () => {
    setCarouseIndex((current) => (current + 1) % 3);
  };

  useEffect(() => {
    const interval = setInterval(autoSlideHandler, 10000);
    return () => clearInterval(interval);
  }, []);

  const onIndicatorClick = (index: number) => () => {
    setCarouseIndex(index);
  };

  return (
    <Wrapper>
      <Component>
        <DesktopWrapper>
          <CarouselWrapper>
            <div>
              <div>
                <TextAndAsset>
                  <LeftSpace />
                  <DesktopContent>
                    <ParagraphComponent>
                      <Paragraph>
                        <TitleWrapper>
                          <CoreTitle>
                            <span>
                              우리의 고객이
                              <br />
                              어떤 영향을 미치는지
                            </span>
                            <b>확인해보세요</b>
                          </CoreTitle>
                        </TitleWrapper>
                        <ButtonWrapper>
                          <div>
                            <Button>
                              <a href="https://monday.com/why-monday/stories/">
                                <span>더 많은 성공사례 읽기</span>
                                <ArrowWrapper>
                                  <svg width="10" height="14" viewBox="0 0 9 7" xmlns="http://www.w3.org/2000/svg">
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
                      </Paragraph>
                    </ParagraphComponent>
                    <ImageWrapper>
                      <ReviewCarousel>
                        <CarouselContent>
                          <Carousel>
                            {carouselData.map((data, i) => (
                              <QuoteWrapper isSelected={carouseIndex === i} key={`qutoe-${i}`} style={data.style}>
                                <div>
                                  <Quote>
                                    <QuotationMark>“</QuotationMark>
                                    <QuotationText>{data.text}</QuotationText>
                                  </Quote>
                                  <div>
                                    <ReviewerInfo>{data.reviewerInfo}</ReviewerInfo>
                                    <Logo>
                                      <picture>
                                        <img src={data.logoURL} />
                                      </picture>
                                    </Logo>
                                  </div>
                                </div>
                              </QuoteWrapper>
                            ))}
                          </Carousel>
                          <Indicators>
                            {[0, 1, 2].map((index) => (
                              <IndicatorWrapper key={`indicator-${index}`} onClick={onIndicatorClick(index)}>
                                <Indicator isSelected={carouseIndex === index}></Indicator>
                              </IndicatorWrapper>
                            ))}
                          </Indicators>
                        </CarouselContent>
                        <CarouselAsset>
                          <picture>
                            <img
                              src={
                                carouseIndex === 0
                                  ? "https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/reviews/oscar_image.png"
                                  : carouseIndex === 1
                                  ? "https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/reviews/the_student_hotel_image.png"
                                  : "https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/reviews/telefonica_image.png"
                              }
                            />
                          </picture>
                        </CarouselAsset>
                      </ReviewCarousel>
                    </ImageWrapper>
                  </DesktopContent>
                  <RightSpace />
                </TextAndAsset>
              </div>
            </div>
          </CarouselWrapper>
        </DesktopWrapper>
      </Component>
    </Wrapper>
  );
}

export default CustomerStory;
