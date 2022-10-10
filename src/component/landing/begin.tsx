import React from "react";
import styled from "styled-components";
import CustomButton from "../common/button";

const Wrapper = styled.div`
  padding-top: 64px;
  padding-bottom: 0px;
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

  -webkit-flex-direction: row-reverse;
  -ms-flex-direction: row-reverse;
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

const ParagraphComponent = styled.div`
  padding: 0 0 0 60px;
  width: 40%;
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

  & > span {
    font-weight: 300;
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

function Begin(): JSX.Element {
  return (
    <Wrapper>
      <div>
        <div>
          <TextAndAsset>
            <LeftSpace />
            <Content>
              <ParagraphComponent>
                <Paragraph>
                  <TitleWrapper>
                    <CoreTitle>
                      <b>하나의 플랫폼.</b>
                      <span>
                        <br />
                        무한한 워크플로우.
                      </span>
                    </CoreTitle>
                  </TitleWrapper>
                  <CustomButton />
                </Paragraph>
              </ParagraphComponent>
              <ImageWrapper>
                <Inner>
                  <picture>
                    <img
                      alt="hand image2"
                      src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured images/Home Page - 2022 Rebrand/workos-banner/hand_image2.png"
                    />
                  </picture>
                </Inner>
              </ImageWrapper>
            </Content>
            <RightSpace />
          </TextAndAsset>
        </div>
      </div>
    </Wrapper>
  );
}

export default Begin;
