import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding-top: 0px;
  padding-bottom: 250px;
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

const Content = styled.div`
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
  padding: 0 0 0 60px;
  width: 50%;
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
  margin-bottom: 48px;
`;

const CoreTitle = styled.div`
  font-size: 40px;
  line-height: 48px;
  font-weight: 400;
  word-break: break-word;

  & > b {
    font-weight: bold;
  }

  & > span {
    font-weight: 300;
  }
`;

const ParagraphBodyWrapper = styled.div`
  text-align: left;
`;

const ParagraphBody = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin: 0;
  word-break: break-word;
  font-weight: 300;
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

const Inner = styled.div`
  height: 100%;
  width: 100%;
  position: relative;

  & > picture {
    width: 100%;
    height: 100%;
    display: block;

    &::before {
      content: "";
      display: inline-block;
      height: 100%;
      vertical-align: middle;
    }
  }

  & > picture > img {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
    display: inline-block;
    vertical-align: middle;
    position: relative;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    border-style: none;
  }
`;

function Support(): JSX.Element {
  return (
    <Wrapper>
      <div>
        <TextAndAsset>
          <LeftSpace />
          <Content>
            <ParagraphComponent>
              <Paragraph>
                <TitleWrapper>
                  <CoreTitle>
                    <b>24/7</b>
                    <span>
                      <br />
                      고객 지원
                    </span>
                  </CoreTitle>
                </TitleWrapper>
                <ParagraphBodyWrapper>
                  <ParagraphBody>
                    저희 팀은 여러분에게 최고의 맞춤형 서비스를 제공하기 위해 여기에 있습니다. 또한 지원 센터에서 다양한
                    자체 학습 도구를 제공합니다:
                  </ParagraphBody>
                </ParagraphBodyWrapper>
                <ButtonWrapper>
                  <div>
                    <Button>
                      <a href="https://support.monday.com/hc/en-us">
                        <span>지원 센터를 사용하세요</span>
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
              <Inner>
                <picture>
                  <img
                    alt="customer support 2"
                    src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured images/Home Page - 2022 Rebrand/customer-support/customer_support_2.png"
                  />
                </picture>
              </Inner>
            </ImageWrapper>
          </Content>
          <RightSpace />
        </TextAndAsset>
      </div>
    </Wrapper>
  );
}

export default Support;
