import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  color: rgb(255, 255, 255);
  background: rgb(15, 16, 72);
`;

const AssetComponent = styled.div`
  width: 100%;
`;

const AssetWrapper = styled.div`
  max-width: none;

  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;

  margin: auto;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
`;

const Inner = styled.div`
  width: 100%;
  position: relative;

  & > picture > img {
    width: 100% !important;
    height: auto;
    display: flex;
    border-style: none;
  }
`;

function BottomBackground(): JSX.Element {
  return (
    <Wrapper>
      <AssetComponent>
        <AssetWrapper>
          <Inner>
            <picture>
              <img
                alt="gradiant 3"
                src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured images/Home Page - 2022 Rebrand/buttom_banner/gradiant_3.png"
              />
            </picture>
          </Inner>
        </AssetWrapper>
      </AssetComponent>
    </Wrapper>
  );
}

export default BottomBackground;
