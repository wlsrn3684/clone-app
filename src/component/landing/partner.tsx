import React from "react";
import styled from "styled-components";
import galleryData from "../../constant/data/galleryData";

const Wrapper = styled.div`
  padding-top: 0px;
  padding-bottom: 90px;
`;

const Overlay = styled.div`
  border-bottom: 13.9173vw solid rgb(255, 255, 255);
  width: 0;
  height: 0;
  border-right: 100vw solid transparent;
  margin-top: -13.917310096006544vw;
  position: absolute;
  z-index: 2;
  pointer-events: none;
  box-sizing: border-box;
  font-weight: 300;
`;

const ContentWrapper = styled.div`
  max-width: 768px;
  margin: auto;
`;

const LogoListWrapper = styled.div`
  width: 100%;
`;

const LogoGalleryRow = styled.div`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const LogoGallery = styled.div`
  width: 150px;
  padding: 24px 0;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;

  & > picture > img {
    max-height: 69px;
    max-width: 118px;
  }
`;

const LogoTitleWrapper = styled.div`
  margin-bottom: 24px;
`;

const LogoTitle = styled.div`
  text-align: center;
  padding: 0px 32px;

  & > h2 {
    font-size: 24px;
    line-height: 32px;
    font-weight: 400;
  }
`;

function Partner(): JSX.Element {
  return (
    <Wrapper>
      <Overlay />
      <ContentWrapper>
        <LogoTitleWrapper>
          <LogoTitle>
            <h2>전 세계 약 152,000팀 신뢰합니다 </h2>
          </LogoTitle>
        </LogoTitleWrapper>
        <LogoListWrapper>
          <div>
            <LogoGalleryRow>
              {galleryData.map((data, i) => (
                <LogoGallery key={`logo-gallery-${i}`}>
                  <picture>
                    <img src={data.imageURL} alt="" />
                  </picture>
                </LogoGallery>
              ))}
            </LogoGalleryRow>
          </div>
        </LogoListWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}

export default Partner;
