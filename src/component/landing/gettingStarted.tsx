import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import starData from "../../constant/data/starData";
import tagData from "../../constant/data/tagData";
import IStarProps from "../../type/start";
import ITagProps from "../../type/tag";

const Wrapper = styled.div`
  background: linear-gradient(rgb(0, 1, 51) 0%, rgb(15, 16, 72) 100%);
  padding-top: 64px;
  color: #ffffff;
  font-weight: 300;
`;

const Container = styled.div`
  max-width: 1440px;
  height: 600px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const StarCanvas = styled.div`
  position: absolute;
  height: 100%;
  width: 1440px;
`;

const twinkle = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1.2);
  }
`;

export const Star = styled.div<IStarProps>`
  background-image: url("https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/parallax/integrations/star.svg");
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  left: ${(p) => p.left};
  top: ${(p) => p.top};
  border-radius: 50%;
  width: ${(p) => p.size};
  height: ${(p) => p.size};
  animation: ${twinkle} infinite alternate;
  animation-duration: ${(p) => p.duration};
  animation-delay: ${(p) => p.delay};
`;

const ParagraphWrapper = styled.div`
  text-align: center;
  word-break: break-word;
  width: 100%;
`;

const ParagraphTitle = styled.div`
  max-width: 800px;
  margin: auto;
  margin-top: 0px;
  margin-bottom: 32px;
  text-align: center;

  & > h1 {
    background: linear-gradient(360deg, #ffffff 53.95%, #0b0b4a 207.37%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    padding-bottom: 12px;
    font-weight: 400;
    font-size: 72px;
    line-height: 72px;
  }
`;

const ParagraphBody = styled.div`
  box-sizing: border-box;
  font-weight: 300;

  & > h2 {
    font-size: 24px;
    line-height: 40px;
  }
`;

const TagWrapper = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  position: relative;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  line-height: 18.4px;
`;

const TagGroup = styled.div`
  margin-top: 48px;
  margin-bottom: 56px;
  display: flex;
`;

const breathIn = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(1);
  }
`;

const breathOut = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

const Tag = styled.div<Pick<ITagProps, "borderColor"> & { isActive: boolean }>`
  width: 140px;
  max-width: 170px;
  min-width: 140px;
  position: relative;

  & > div {
    color: ${({ borderColor }) => borderColor};
    border: ${({ borderColor, isActive }) =>
      `1px solid ${isActive === true ? borderColor : "rgba(255, 255, 255, 0.3)"}`};
    border-radius: 8px;
    margin: 8px;
    padding: 8px 8px 16px 8px;
    height: calc(100% - 16px);
    transition: border 0.1s ease-in-out;

    display: flex;
    flex-direction: column;
    justify-content: unset;
    align-items: center;

    position: relative;
    z-index: 9;
    cursor: pointer;
    font-weight: 300;

    -webkit-box-pack: unset;
    user-select: none;

    &:hover {
      transition: border 0.1s ease-in-out;
      border-color: currentColor;
      & > div:nth-child(2) {
        border-color: currentColor;
      }
    }

    &.breathIn {
      animation: ${breathIn} 0.3s linear;
    }
  }

  & > div > div:nth-child(2) {
    background-color: ${(p) => (p.isActive === true ? "currentColor" : "")};
    & > svg {
      color: #0f1048;
    }
  }
`;

const BackgroundCircle = styled.div`
  transition: opacity 100ms ease-in-out;
  position: absolute;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: currentColor;
  opacity: 0%;
  z-index: 0;
`;

const CheckBox = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: all 0.05s ease-in-out;
  width: 20px;
  height: 20px;
  border-radius: 4px;
  align-self: start;
`;

const TagImage = styled.div`
  & > picture {
    display: flex;
  }

  & > picture > img {
    height: 40px;
    border-style: none;
  }
`;

const TagText = styled.div`
  transition: opacity 100ms ease-in-out;
  text-align: center;
  font-size: 16px;
  color: #ffffff;
  opacity: 85%;
  padding-top: 4px;
  padding-right: 8px;
  padding-left: 8px;

  box-sizing: border-box;
  font-weight: 300;

  cursor: pointer;
`;

const ButtonWrapper = styled.div<{ background: string; backgroundHover: string }>`
  display: flex;
  -webkit-box-align: center;
  align-items: center;

  & > div {
    transform: scale(1);
    &.breathOut {
      animation: ${breathOut} 0.3s linear;
    }
  }

  & > div > button {
    background-image: ${({ background }) => background};
    color: #ffffff;
    min-width: 130px;
    background-color: #6c6cff;
    padding: 16px 32px 16px 31px;
    padding-right: 20px;
    font-size: 18px;
    border-radius: 40px;
    border: none;
    font-weight: 400;
    text-align: center;
    cursor: pointer;
    user-select: none;
    line-height: 17px;
    -webkit-appearance: button;

    &:hover {
      background-color: #5a5ad5;
      filter: unset;
      color: #ffffff;

      & span:nth-child(2) {
        padding-left: 15px;
        padding-right: 0px;
      }
    }
  }

  & > div > button > span {
    &:nth-child(1) {
      font-weight: 300;
      font-size: 18px;
      text-align: center;
      cursor: pointer;
      user-select: none;
      line-height: 17px;
      text-transform: none;
    }

    &:nth-child(2) {
      padding-left: 10px;
      padding-right: 5px;
      transition: padding 0.3s ease-in-out;

      & > svg {
        height: 12px;
        width: 16px;
        fill: #ffffff;
      }
    }
  }
`;

function GettingStarted(): JSX.Element {
  const [activeState, setActiveState] = useState<boolean[]>(new Array(9).fill(false));

  const onTagClick = (index: number) => (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setActiveState((state) => state.map((v, i) => (i === index ? !v : v)));
    const elementList = document.getElementsByClassName("square-tag-component");
    elementList[index].classList.add("breathIn");
    elementList[9].classList.add("breathOut");
    console.log(elementList[9]);
  };

  const onbreathInEnd = (index: number) => (event: React.AnimationEvent<HTMLDivElement>) => {
    document.getElementsByClassName("square-tag-component")[index].classList.remove("breathIn");
  };

  const onbreathOutEnd = (index: number) => (event: React.AnimationEvent<HTMLDivElement>) => {
    document.getElementsByClassName("square-tag-component")[index].classList.remove("breathOut");
  };

  const getButtonColor = (state: boolean[]) => {
    const colorProps = {
      background: "linear-gradient(90deg, #5034ff 25.69%, #b4b4ff 100%)",
      backgroundHover: "#5a5ad5",
    };
    const count = state.reduce((a, c) => a + (c ? 1 : 0), 0);

    if (count === 0) return colorProps;

    let index = 0;
    let newColor = "linear-gradient(90deg,";

    if (count === 1) {
      for (let i = 0; i < 9; i++) {
        if (state[i]) {
          newColor += ` ${tagData[i].subColor} 0%, ${tagData[i].subColor} 100%,`;
          break;
        }
      }
    } else {
      for (let i = 0; i < 9; i++) {
        if (state[i]) {
          newColor += ` ${tagData[i].subColor} ${100 * (index / (count - 1))}%,`;
          index += 1;
        }
      }
    }

    newColor = newColor.slice(0, newColor.length - 1) + ")";

    return {
      background: newColor,
      backgroundHover: newColor,
    };
  };

  return (
    <Wrapper>
      <Container>
        <StarCanvas>
          {starData.map((data: IStarProps, i: number) => (
            <Star {...data} key={`star-${i}`} />
          ))}
        </StarCanvas>
        <ParagraphWrapper>
          <ParagraphTitle>
            <h1>
              새로운 업무 방식 을
              <br />
              위한 플랫폼
            </h1>
          </ParagraphTitle>
          <ParagraphBody>
            <h2>monday.com 워크 OS를 사용하여 관리하고 싶은 것은 무엇입니까?</h2>
          </ParagraphBody>
        </ParagraphWrapper>
        <div>
          <TagWrapper>
            <TagGroup>
              {tagData.map((data: ITagProps, i: number) => (
                <Tag
                  borderColor={data.borderColor}
                  isActive={activeState[i]}
                  key={`tag-${i}`}
                  onClick={onTagClick(i)}
                  onAnimationEnd={onbreathInEnd(i)}
                >
                  <div className="square-tag-component">
                    <BackgroundCircle />
                    <CheckBox>
                      <svg viewBox="0 0 20 20" fill={data.borderColor} width="20" height="20">
                        <path
                          d="M8.53033 14.2478L8 13.7175L7.46967 14.2478C7.76256 14.5407 8.23744 14.5407 8.53033 14.2478ZM8 12.6569L4.53033 9.18718C4.23744 8.89429 3.76256 8.89429 3.46967 9.18718C3.17678 9.48008 3.17678 9.95495 3.46967 10.2478L7.46967 14.2478L8 13.7175L8.53033 14.2478L16.2478 6.53033C16.5407 6.23743 16.5407 5.76256 16.2478 5.46967C15.955 5.17677 15.4801 5.17677 15.1872 5.46967L8 12.6569Z"
                          fill="currentColor"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        />
                      </svg>
                    </CheckBox>
                    <TagImage>
                      <picture>
                        <img src={data.imageURL} alt="" />
                      </picture>
                    </TagImage>
                    <TagText>{data.text}</TagText>
                  </div>
                </Tag>
              ))}
            </TagGroup>
            <ButtonWrapper {...getButtonColor(activeState)}>
              <div className="square-tag-component" onAnimationEnd={onbreathOutEnd(9)}>
                <button>
                  <span>시작하기</span>
                  <span>
                    <svg width="10" height="14" viewBox="0 0 9 7" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.628.616a.5.5 0 1 0-.64.768L6.203 3.23H.5a.5.5 0 0 0 0 1h5.612L3.988 6a.5.5 0 1 0 .64.769l3.23-2.693a.5.5 0 0 0 0-.768L4.628.616z"
                      ></path>
                    </svg>
                  </span>
                </button>
              </div>
            </ButtonWrapper>
          </TagWrapper>
        </div>
      </Container>
    </Wrapper>
  );
}

export default GettingStarted;

//
