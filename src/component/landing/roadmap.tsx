import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  color: rgb(255, 255, 255);
  background: rgb(15, 16, 72);
  padding-top: 20px;

  & > div {
    min-height: 32vw;
    width: 100%;
  }

  & > div > div {
    max-width: none;
    margin: auto;
    display: flex;
  }

  & > div > div > div {
    width: 100%;
    position: relative;
  }

  & > div > div > div > picture > img {
    width: 100% !important;
    height: auto;
    display: flex;
  }
`;

function Roadmap(): JSX.Element {
  return (
    <Wrapper>
      <div>
        <div>
          <div>
            <picture>
              <img
                src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured images/Languages/Korean/New Homepage_March 2022/KO_Homepage_first_fold.png"
                alt=""
              />
            </picture>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Roadmap;
