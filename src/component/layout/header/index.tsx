import React, { useState } from "react";
import styled from "styled-components";
import CustomButton from "../../common/button";

const Wrapper = styled.header`
  width: 100%;
`;

const Component = styled.div`
  width: 100%;
  height: 72px;
`;

const ContentWrapper = styled.header`
  max-width: 100vw;
  width: 100%;
  height: 72px;
  position: fixed;
  z-index: 556;
  background-color: #ffffff;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
`;

const Content = styled.div`
  max-width: 100vw;
  width: 100%;
  position: fixed;
  height: 72px;
  padding-left: 32px;
  padding-right: 32px;
  z-index: 555;
  background-color: #ffffff;
  -webkit-transition: background-color 200ms ease;
  transition: background-color 200ms ease;
  top: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`;

const LogoWrapper = styled.div`
  transition: opacity 50ms ease;

  & > a {
    background-color: transparent;
  }

  & > a > picture > img {
    height: 42px;
    margin-right: 16px;
  }
`;

const Nav = styled.nav`
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  height: 72px;
`;

const LeftSide = styled.div`
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;

  height: 100%;
  display: flex;
`;

const MainLinks = styled.div`
  opacity: 1;
  visibility: visible;
  -webkit-transition: opacity 500ms ease, transform 500ms ease;
  transition: opacity 500ms ease, transform 500ms ease;

  position: absolute;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  height: 100%;
`;

const Link = styled.div<{ isActive: boolean }>`
  position: relative;

  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  & > div {
    color: ${({ isActive }) => (isActive ? "#5034FF" : "")};
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: ${({ isActive }) => (isActive ? "#5034FF" : "transparent")};
  }
`;

const Item = styled.div`
  cursor: pointer;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 8px 10px;
  color: #535768;
  -webkit-transition: color 200ms ease;
  transition: color 200ms ease;
  border-radius: 8px;

  & > span {
    margin-right: 4px;
  }

  & > svg {
    height: 7px;
    width: 10px;
    margin-top: 4px;
    -webkit-transition: -webkit-transform 200ms ease;
    -webkit-transition: transform 200ms ease;
    transition: transform 200ms ease;
  }

  &:hover {
    outline: none;
    color: #5034ff;
    background-color: #f0f3ff;
  }
`;

const RightSide = styled.div`
  flex-shrink: 0;

  height: 100%;
  display: flex;
`;

const LinkItemComponent = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  & > a {
    cursor: pointer;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 8px 10px;
    -webkit-text-decoration: none;
    text-decoration: none;
    color: #535768;
    -webkit-transition: color 200ms ease;
    transition: color 200ms ease;
    border-radius: 8px;
  }
`;

const ButtonWrapper = styled.div`
  flex-shrink: 0;

  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding-left: 16px;

  & > div > button {
    background-image: "linear-gradient(90deg, #5034ff 25.69%, #b4b4ff 100%)";
    color: #ffffff;
    min-width: 130px;
    background-color: #6c6cff;
    padding: 11px 14px 8px 16px;
    border-radius: 40px;
    border: none;
    font-weight: 400;
    text-align: center;
    cursor: pointer;
    user-select: none;
    line-height: 17px;
    -webkit-appearance: button;

    height: 40px;

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
      font-size: 14px !important;
      text-align: center;
      cursor: pointer;
      user-select: none;
      line-height: 17px;
      text-transform: none;
    }

    &:nth-child(2) {
      padding-left: 8px;
      padding-right: 4px;
      transition: padding 0.3s ease-in-out;

      & > svg {
        height: 12px;
        width: 16px;
        fill: #ffffff;
      }
    }
  }
`;

const ComponentWrapper = styled.div`
  position: fixed;
  top: 72px;
  z-index: 555;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.1);
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
  pointer-events: none;
  width: 100%;

  display: flex;
  flex-direction: column;
`;

const SubMenu = styled.nav`
  pointer-events: all;
`;

const SectionHeader = styled.div`
  padding: 0;
  box-shadow: none;
  width: 100%;
  background-color: white;
`;

const SectionHeaderComponent = styled.div`
  max-width: 1440px;
  width: 100%;
  height: 100%;
  display: flex;
  margin: auto;
  padding: 0px 32px;
`;

const MenuSection = styled.div`
  padding: 32px 0 0px;
  background-color: transparent;
  min-height: 400px;
`;

const MenuSectionComponent = styled.div`
  height: 100%;
`;

const SectionTitle = styled.div`
  color: #676879;
  font-weight: 300;
  font-size: 14px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  & > div {
    font-weight: 700;
    font-size: 22px;
    line-height: 24px;
    color: #676879;
  }
`;

const SectionItems = styled.div`
  margin-left: -24px;
  padding-top: 24px;
  margin-top: 0;

  margin: 20px 0px;
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: repeat(3, auto);
`;

const SectionItem = styled.div<{ hoverColor: string }>`
  width: 500px;
  height: 118px;
  margin-right: 24px;
  padding: 16px 20px 20px;
  margin-bottom: 14px;
  border-color: transparent;
  border-radius: 4px;
  border-width: 2px;
  border-style: solid;

  &:hover {
    background-color: ${({ hoverColor }) => hoverColor};
  }

  & > a {
    display: flex;
    height: 100%;
    width: 100%;
    cursor: pointer;
    -webkit-box-align: center;
    align-items: center;
    transition: background-color 200ms ease 0s;
    text-decoration: none;
    color: rgb(51, 51, 51);
  }

  & > a > div {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
`;

const MenuItem = styled.div<{ borderColor: string }>`
  height: 100%;
  align-items: flex-start;
  -webkit-box-align: center;
  display: flex;

  & > svg {
    width: 48px;
    height: 48px;
    padding: 0;
    border-radius: 6px;
    margin-top: 6px;
    border: ${({ borderColor }) => `1px solid ${borderColor}`};
    flex-shrink: 0;
    font-size: 16px;
    margin-right: 16px;
    overflow: hidden;
  }

  & > div {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    height: 100%;
    gap: 4px;
  }

  & > div > div {
    gap: 4px;
    display: flex;
    flex-direction: column;
  }
`;

const ItemTitle = styled.div`
  display: flex;

  & > span {
    font-size: 22px;
    line-height: 28px;
    font-weight: 400;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;

const ItemSubTitle = styled.div`
  font-size: 14px;
  color: #676879;
  line-height: 16px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  line-height: 1.4;
`;

const TagList = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 4px;
  row-gap: 4px;
`;

const TagTitle = styled.div`
  font-size: 12px;
  padding-top: 1px;

  color: #676879;
  white-space: nowrap;
`;

const Tag = styled.div<{ backgroundColor: string; color: string }>`
  padding: 0 4px;
  margin: 0 2px;
  font-weight: 600;
  font-size: 12px;
  line-height: 154%;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};

  border-radius: 2px;
  white-space: nowrap;
`;

const Seperator = styled.div`
  margin-right: 32px;
  border-color: #f0f3ff;
  margin-bottom: 36px;
  margin-top: 32px;
  border-right: 1px solid rgb(230, 233, 239);
  margin-left: 4px;
`;

const MoreProducts = styled.div`
  --max-number-of-items-in-column: 3;
  margin-top: 20px;
  margin: 20px 0px;
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: repeat(var(--max-number-of-items-in-column), auto);

  & > div {
    width: 156px;
    height: 54px;
    margin-bottom: 12px;
    border-color: transparent;
    border-radius: 4px;
    border-width: 2px;
    border-style: solid;
    margin-right: 18px;
    padding: 16px 8px;

    &:hover {
      background-color: #f0f3ff;
    }
  }

  & > div > a {
    display: flex;
    height: 100%;
    width: 100%;
    cursor: pointer;
    -webkit-box-align: center;
    align-items: center;
    transition: background-color 200ms ease 0s;
    text-decoration: none;
    color: rgb(51, 51, 51);
  }

  & > div > a > div {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  & > div > a > div > div {
    display: flex;
  }

  & > div > a > div > div > svg {
    flex-shrink: 0;
    font-size: 16px;
    margin-right: 16px;
  }

  & > div > a > div > div > div > div {
    display: flex;
    flex-direction: column;
  }

  & > div > a > div > div > div > div > div > span {
    font-weight: 400;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    line-height: 20px;
  }
`;

function Header(): JSX.Element {
  const [index, setIndex] = useState<number>(-1);

  return (
    <div>
      <div>
        <div>
          <Wrapper>
            <Component>
              <ContentWrapper>
                <Content>
                  <LogoWrapper>
                    <a href="/" target="_self">
                      <picture>
                        <img
                          alt="monday.com logo"
                          src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/monday-logo-x2.png"
                        />
                      </picture>
                    </a>
                  </LogoWrapper>
                  <Nav>
                    <LeftSide>
                      <MainLinks>
                        <Link
                          isActive={index === 0}
                          onClick={() => {
                            setIndex(index === 0 ? -1 : 0);
                          }}
                        >
                          <Item>
                            <span>제품</span>
                            <svg
                              width="256"
                              height="256"
                              viewBox="0 0 256 256"
                              xmlns="http://www.w3.org/2000/svg"
                              style={{ transform: index === 0 ? "rotate(180deg)" : "" }}
                            >
                              <g id="Page-1" fill="none" fillRule="evenodd">
                                <g id="change-copy" fill="#000" fillRule="nonzero">
                                  <path
                                    d="M0 66.73c0 2.66.981 5.33 2.955 7.41l117.332 123.323a10.64 10.64 0 0 0 7.712 3.314c2.912 0 5.696-1.19 7.712-3.314L253.043 74.14c4.074-4.278 3.914-11.077-.331-15.163a10.627 10.627 0 0 0-15.083.333L128 174.536 18.379 59.32c-4.075-4.279-10.827-4.429-15.083-.343A10.76 10.76 0 0 0 0 66.73z"
                                    id="Shape"
                                  ></path>
                                </g>
                              </g>
                            </svg>
                          </Item>
                        </Link>

                        <div style={{ display: index === -1 ? "none" : "block" }}>
                          <ComponentWrapper>
                            <SubMenu>
                              <SectionHeader>
                                <SectionHeaderComponent>
                                  <MenuSection style={{ paddingTop: "30px" }}>
                                    <MenuSectionComponent>
                                      <SectionTitle>
                                        <div>monday 제품</div>
                                      </SectionTitle>
                                      <SectionItems style={{ marginTop: "0px" }}>
                                        <SectionItem hoverColor="rgba(108, 108, 255, 0.16)">
                                          <a href="/work-management">
                                            <div>
                                              <MenuItem borderColor="#DCDFEC">
                                                <svg
                                                  width="72"
                                                  height="72"
                                                  viewBox="0 0 72 72"
                                                  fill="none"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                >
                                                  <path
                                                    d="M16.367 52.545c-2.709-1.847-3.367-5.482-1.47-8.12l16.007-22.259c1.172-1.63 3.045-2.497 4.945-2.486 1.896-.008 3.766.86 4.936 2.486l16.012 22.266c1.896 2.637 1.238 6.272-1.47 8.119-2.71 1.846-6.442 1.205-8.339-1.432L35.844 35.623l-11.139 15.49c-1.896 2.637-5.63 3.278-8.338 1.432z"
                                                    fill="#6C6CFF"
                                                  ></path>
                                                  <path
                                                    d="M16.372 18.724c-2.709 1.847-3.367 5.482-1.47 8.119l16 22.25c1.168 1.624 3.032 2.49 4.925 2.486 1.904.015 3.783-.853 4.958-2.486l16-22.25c1.897-2.637 1.239-6.272-1.47-8.119-2.709-1.847-6.442-1.206-8.338 1.432L35.843 35.637 24.71 20.156c-1.897-2.638-5.63-3.279-8.338-1.432z"
                                                    fill="url(#paint0_linear_2108_574604)"
                                                  ></path>
                                                  <path
                                                    d="M28.532 25.47l-7.31 10.163 7.31 10.164 7.31-10.164-7.31-10.164z"
                                                    fill="#7E7EFF"
                                                  ></path>
                                                  <defs>
                                                    <linearGradient
                                                      id="paint0_linear_2108_574604"
                                                      x1="39.285"
                                                      y1="34.624"
                                                      x2="37.456"
                                                      y2="52.175"
                                                      gradientUnits="userSpaceOnUse"
                                                    >
                                                      <stop stopColor="#8F8FFF"></stop>
                                                      <stop offset="1" stopColor="#BABAFD"></stop>
                                                    </linearGradient>
                                                  </defs>
                                                </svg>
                                                <div>
                                                  <div>
                                                    <ItemTitle>
                                                      <span>monday work management</span>
                                                    </ItemTitle>
                                                    <ItemSubTitle>
                                                      <span>프로젝트, 태스크 및 워크플로우 관리용</span>
                                                    </ItemSubTitle>
                                                  </div>
                                                </div>
                                              </MenuItem>
                                              <TagList>
                                                <TagTitle>주요 활용 사례:</TagTitle>
                                                <Tag color="#5034FF" backgroundColor="rgba(186, 186, 253, 0.2);">
                                                  Project & task management
                                                </Tag>
                                                <Tag color="#5034FF" backgroundColor="rgba(186, 186, 253, 0.2);">
                                                  운영
                                                </Tag>
                                                <Tag color="#5034FF" backgroundColor="rgba(186, 186, 253, 0.2);">
                                                  Build your own
                                                </Tag>
                                              </TagList>
                                            </div>
                                          </a>
                                        </SectionItem>
                                        <SectionItem hoverColor="rgba(0, 210, 210, 0.16)">
                                          <a href="/work-management">
                                            <div>
                                              <MenuItem borderColor="#DCDFEC">
                                                <svg
                                                  width="72"
                                                  height="72"
                                                  viewBox="0 0 72 72"
                                                  fill="none"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                >
                                                  <path
                                                    d="M44.957 34.957c.047.664-.495 1.205-1.157 1.205H29.324c-.662 0-1.204.54-1.157 1.205a17.129 17.129 0 0 0 3.788 9.603 16.847 16.847 0 0 0 9.753 5.902c3.829.769 7.803.174 11.247-1.684a16.98 16.98 0 0 0 7.635-8.506 17.19 17.19 0 0 0 .558-11.466 17.025 17.025 0 0 0-6.773-9.22 16.751 16.751 0 0 0-14.427-2.09 16.794 16.794 0 0 0-3.425 1.514 16.959 16.959 0 0 1 6.236 6.34l.005-.073a17.157 17.157 0 0 1 2.194 7.27z"
                                                    fill="#00A0A0"
                                                  ></path>
                                                  <ellipse
                                                    cx="28.125"
                                                    cy="36.162"
                                                    rx="16.875"
                                                    ry="17.037"
                                                    fill="#fff"
                                                  ></ellipse>
                                                  <ellipse
                                                    cx="28.125"
                                                    cy="36.162"
                                                    rx="16.875"
                                                    ry="17.037"
                                                    fill="url(#paint0_linear_1371_406869)"
                                                  ></ellipse>
                                                  <path
                                                    d="M36.566 50.919A17.06 17.06 0 0 0 45 36.162a10.19 10.19 0 0 0-.043-1.205 1.151 1.151 0 0 1-1.157 1.205H29.324c-.662 0-1.204.54-1.157 1.205a17.129 17.129 0 0 0 3.788 9.603 16.917 16.917 0 0 0 4.61 3.949z"
                                                    fill="url(#paint1_linear_1371_406869)"
                                                  ></path>
                                                  <defs>
                                                    <linearGradient
                                                      id="paint0_linear_1371_406869"
                                                      x1="16.389"
                                                      y1="25.935"
                                                      x2="45.113"
                                                      y2="40.476"
                                                      gradientUnits="userSpaceOnUse"
                                                    >
                                                      <stop stopColor="#00D2D2"></stop>
                                                      <stop offset="1" stopColor="#00D2D2" stopOpacity=".29"></stop>
                                                    </linearGradient>
                                                    <linearGradient
                                                      id="paint1_linear_1371_406869"
                                                      x1="46.831"
                                                      y1="44.955"
                                                      x2="19.974"
                                                      y2="39.412"
                                                      gradientUnits="userSpaceOnUse"
                                                    >
                                                      <stop stopColor="#00A0A0"></stop>
                                                      <stop offset="1" stopColor="#00D2D2"></stop>
                                                    </linearGradient>
                                                  </defs>
                                                </svg>
                                                <div>
                                                  <div>
                                                    <ItemTitle>
                                                      <span>monday sales CRM</span>
                                                    </ItemTitle>
                                                    <ItemSubTitle>
                                                      <span>세일즈 및 고객 대면 팀용</span>
                                                    </ItemSubTitle>
                                                  </div>
                                                </div>
                                              </MenuItem>
                                              <TagList>
                                                <TagTitle>주요 활용 사례:</TagTitle>
                                                <Tag color="#025050" backgroundColor="rgba(0, 210, 210, 0.16)">
                                                  Contact management
                                                </Tag>
                                                <Tag color="#025050" backgroundColor="rgba(0, 210, 210, 0.16)">
                                                  Sales pipeline
                                                </Tag>
                                                <Tag color="#025050" backgroundColor="rgba(0, 210, 210, 0.16)">
                                                  Lead management
                                                </Tag>
                                              </TagList>
                                            </div>
                                          </a>
                                        </SectionItem>
                                        <SectionItem hoverColor="rgba(0, 200, 117, 0.16)">
                                          <a href="/work-management">
                                            <div>
                                              <MenuItem borderColor="#DCDFEC">
                                                <svg
                                                  width="72"
                                                  height="72"
                                                  viewBox="0 0 72 72"
                                                  fill="none"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                >
                                                  <path
                                                    d="M37.022 27.938l-.086-11.129c-.946-.1-1.89-.054-2.835.023-8.392.788-14.869 7.646-14.693 15.84.143 6.634 4.414 10.993 7.754 13.39 4.755 3.412 10.364 4.827 16.126 5.437 3.393.358 6.969.521 9.49.467l2.87-.056c.347-.007.67-.178.871-.46l3.184-4.474c.278-.391.269-.919-.024-1.3l-3.317-4.315a1.097 1.097 0 0 0-.89-.427l-2.93.056c-1.919.041-4.977-.087-7.971-.404-3.725-.394-7.416-1.091-10.51-3.311-2.012-1.444-3.138-3.036-3.177-4.848-.047-2.176 1.497-4.031 3.612-4.548.826-.202 1.71-.2 2.526.059z"
                                                    fill="url(#paint0_linear_1371_406875)"
                                                  ></path>
                                                  <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M35.464 26.645c.013.604.52 1.071 1.114 1.19 2.135.425 3.757 2.213 3.804 4.388.039 1.813-1.018 3.452-2.965 4.98-3.029 2.376-6.622 3.2-10.359 3.758-2.977.445-6.028.705-7.946.746l-2.796.043a1.096 1.096 0 0 0-1.023.749l-2.953 8.855a1.095 1.095 0 0 0 1.06 1.44l4.118-.072 1.83-.04c2.521-.053 6.086-.37 9.46-.873 3.083-.46 6.803-1.187 9.36-2.336l.007-.002c2.33-.934 4.54-2.238 6.511-3.784 3.234-2.538 7.314-7.076 7.172-13.71-.178-8.242-7.022-14.845-15.509-15.203-.605-.025-1.087.48-1.074 1.084l.19 8.787z"
                                                    fill="url(#paint1_linear_1371_406875)"
                                                  ></path>
                                                  <path
                                                    opacity=".6"
                                                    d="M49.174 40.932a78.169 78.169 0 0 1-4.603-.346c-3.063-.324-6.102-.853-8.806-2.264-2.648 1.54-5.629 2.18-8.707 2.64a78.231 78.231 0 0 1-4.584.543c1.434 1.95 3.159 3.46 4.688 4.557 2.763 1.983 5.815 3.29 9.017 4.159a18.811 18.811 0 0 0 1.99-.748l.005-.002c2.33-.934 4.541-2.238 6.512-3.784 1.48-1.162 3.14-2.744 4.488-4.755z"
                                                    fill="#019152"
                                                  ></path>
                                                  <defs>
                                                    <linearGradient
                                                      id="paint0_linear_1371_406875"
                                                      x1="27.974"
                                                      y1="31.251"
                                                      x2="38.083"
                                                      y2="48.422"
                                                      gradientUnits="userSpaceOnUse"
                                                    >
                                                      <stop stopColor="#00C875"></stop>
                                                      <stop offset="1" stopColor="#2EAE67"></stop>
                                                    </linearGradient>
                                                    <linearGradient
                                                      id="paint1_linear_1371_406875"
                                                      x1="38.601"
                                                      y1="33.506"
                                                      x2="5.538"
                                                      y2="53.938"
                                                      gradientUnits="userSpaceOnUse"
                                                    >
                                                      <stop stopColor="#00CA72"></stop>
                                                      <stop offset="1" stopColor="#C0FFE5"></stop>
                                                    </linearGradient>
                                                  </defs>
                                                </svg>
                                                <div>
                                                  <div>
                                                    <ItemTitle>
                                                      <span>monday dev</span>
                                                    </ItemTitle>
                                                    <ItemSubTitle>
                                                      <span>개발 및 제품 팀 용</span>
                                                    </ItemSubTitle>
                                                  </div>
                                                </div>
                                              </MenuItem>
                                              <TagList>
                                                <TagTitle>주요 활용 사례:</TagTitle>
                                                <Tag color="#015727" backgroundColor="rgba(0, 200, 117, 0.08)">
                                                  Roadmap planning
                                                </Tag>
                                                <Tag color="#015727" backgroundColor="rgba(0, 200, 117, 0.08)">
                                                  Bug tracking
                                                </Tag>
                                                <Tag color="#015727" backgroundColor="rgba(0, 200, 117, 0.08)">
                                                  Scrum & Kanban
                                                </Tag>
                                              </TagList>
                                            </div>
                                          </a>
                                        </SectionItem>
                                      </SectionItems>
                                    </MenuSectionComponent>
                                  </MenuSection>
                                  <MenuSection style={{ paddingTop: "54px" }}>
                                    <MenuSectionComponent>
                                      <SectionItems>
                                        <SectionItem hoverColor="rgba(240, 64, 149, 0.16)">
                                          <a href="/marketing">
                                            <div>
                                              <MenuItem borderColor="#DCDFEC">
                                                <svg
                                                  width="72"
                                                  height="72"
                                                  viewBox="0 0 72 72"
                                                  fill="none"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                >
                                                  <path
                                                    d="M30.518 33.545V51.31c0 .46.373.834.834.834h9.296c.46 0 .834-.373.834-.834V35.141a3.026 3.026 0 0 1 3.027-3.025 3.026 3.026 0 0 1 3.027 3.025V51.31c0 .46.373.834.834.834h9.296c.46 0 .834-.373.834-.834V33.545c0-7.343-6.264-13.295-13.991-13.295-7.727 0-13.99 5.953-13.99 13.295z"
                                                    fill="#CA0C6B"
                                                  ></path>
                                                  <path
                                                    d="M13.5 33.545V51.31c0 .46.373.834.834.834h9.296c.46 0 .834-.373.834-.834V35.141a3.026 3.026 0 0 1 3.027-3.025 3.026 3.026 0 0 1 3.027 3.025V51.31c0 .46.373.834.834.834h9.296c.46 0 .834-.373.834-.834V33.545c0-7.343-6.264-13.295-13.991-13.295-7.727 0-13.991 5.953-13.991 13.295z"
                                                    fill="url(#paint0_linear_1371_406872)"
                                                  ></path>
                                                  <path
                                                    d="M13.5 41.898h10.962v9.275a.97.97 0 0 1-.97.97h-9.02a.97.97 0 0 1-.972-.97v-9.276zM30.52 41.898h10.962v9.275a.97.97 0 0 1-.971.97h-9.02a.97.97 0 0 1-.971-.97v-9.276zM47.54 41.898H58.5v9.275a.97.97 0 0 1-.97.97h-9.02a.97.97 0 0 1-.972-.97v-9.276z"
                                                    fill="#F8C3DD"
                                                  ></path>
                                                  <defs>
                                                    <linearGradient
                                                      id="paint0_linear_1371_406872"
                                                      x1="12.588"
                                                      y1="49.885"
                                                      x2="58.099"
                                                      y2="44.038"
                                                      gradientUnits="userSpaceOnUse"
                                                    >
                                                      <stop stopColor="#FF158A"></stop>
                                                      <stop offset=".766" stopColor="#FF158A" stopOpacity=".5"></stop>
                                                    </linearGradient>
                                                  </defs>
                                                </svg>
                                                <div>
                                                  <div>
                                                    <ItemTitle>
                                                      <span>monday marketer</span>
                                                    </ItemTitle>
                                                    <ItemSubTitle>
                                                      <span>마케팅 및 크리에이티브 팀용</span>
                                                    </ItemSubTitle>
                                                  </div>
                                                </div>
                                              </MenuItem>
                                              <TagList>
                                                <TagTitle>주요 활용 사례:</TagTitle>
                                                <Tag color="#9A0550" backgroundColor="rgba(240, 64, 149, 0.08)">
                                                  Content calendar
                                                </Tag>
                                                <Tag color="#9A0550" backgroundColor="rgba(240, 64, 149, 0.08)">
                                                  마케팅 전략
                                                </Tag>
                                                <Tag color="#9A0550" backgroundColor="rgba(240, 64, 149, 0.08)">
                                                  크리에이티브 팀 요청
                                                </Tag>
                                              </TagList>
                                            </div>
                                          </a>
                                        </SectionItem>
                                        <SectionItem hoverColor="rgba(255, 153, 0, 0.16)">
                                          <a href="/project-management">
                                            <div>
                                              <MenuItem borderColor="#DCDFEC">
                                                <svg
                                                  width="72"
                                                  height="72"
                                                  viewBox="0 0 72 72"
                                                  fill="none"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                >
                                                  <path
                                                    d="M25.313 22.034c0-.996.526-1.916 1.38-2.414l7.927-4.622a2.738 2.738 0 0 1 2.76 0l7.928 4.622a2.793 2.793 0 0 1 1.38 2.414v10.853l-10.687 6.231-10.687-6.231-.001-10.853z"
                                                    fill="url(#paint0_linear_1371_406878)"
                                                  ></path>
                                                  <path
                                                    d="M25.313 32.888c-3.096 1.815-6.205 3.611-9.307 5.42a2.793 2.793 0 0 0-1.381 2.415v9.242c0 .997.526 1.917 1.38 2.415l7.927 4.621a2.738 2.738 0 0 0 2.761 0l9.308-5.42V39.119l-10.688-6.231z"
                                                    fill="url(#paint1_linear_1371_406878)"
                                                  ></path>
                                                  <path
                                                    d="M55.994 38.308a2.793 2.793 0 0 1 1.38 2.415v9.243c0 .996-.526 1.916-1.38 2.414l-7.926 4.621a2.737 2.737 0 0 1-2.761 0l-9.308-5.42V39.12l10.688-6.231c3.097 1.816 6.206 3.612 9.307 5.42z"
                                                    fill="url(#paint2_linear_1371_406878)"
                                                  ></path>
                                                  <path
                                                    d="M25.313 33.692c0-.498.263-.958.69-1.207l9.307-5.426a1.369 1.369 0 0 1 1.38 0l9.307 5.426c.427.25.69.71.69 1.207v10.853c0 .498-.263.958-.69 1.207l-9.307 5.426a1.369 1.369 0 0 1-1.38 0l-9.307-5.426a1.397 1.397 0 0 1-.69-1.207V33.692z"
                                                    fill="url(#paint3_linear_1371_406878)"
                                                    style={{ mixBlendMode: "multiply" }}
                                                  ></path>
                                                  <defs>
                                                    <linearGradient
                                                      id="paint0_linear_1371_406878"
                                                      x1="25.313"
                                                      y1="20.44"
                                                      x2="46.783"
                                                      y2="32.725"
                                                      gradientUnits="userSpaceOnUse"
                                                    >
                                                      <stop stopColor="#FB9000"></stop>
                                                      <stop offset="1" stopColor="#FFCB00"></stop>
                                                    </linearGradient>
                                                    <linearGradient
                                                      id="paint1_linear_1371_406878"
                                                      x1="36"
                                                      y1="39.108"
                                                      x2="14.53"
                                                      y2="51.393"
                                                      gradientUnits="userSpaceOnUse"
                                                    >
                                                      <stop stopColor="#FB9000"></stop>
                                                      <stop offset="1" stopColor="#FFCB00"></stop>
                                                    </linearGradient>
                                                    <linearGradient
                                                      id="paint2_linear_1371_406878"
                                                      x1="36"
                                                      y1="39.108"
                                                      x2="57.47"
                                                      y2="51.393"
                                                      gradientUnits="userSpaceOnUse"
                                                    >
                                                      <stop stopColor="#FB9000"></stop>
                                                      <stop offset="1" stopColor="#FFCB00"></stop>
                                                    </linearGradient>
                                                    <linearGradient
                                                      id="paint3_linear_1371_406878"
                                                      x1="36"
                                                      y1="26.872"
                                                      x2="36"
                                                      y2="51.365"
                                                      gradientUnits="userSpaceOnUse"
                                                    >
                                                      <stop stopColor="#FDAB3D"></stop>
                                                      <stop offset="1" stopColor="#FFCB00" stopOpacity=".51"></stop>
                                                    </linearGradient>
                                                  </defs>
                                                </svg>
                                                <div>
                                                  <div>
                                                    <ItemTitle>
                                                      <span>monday projects</span>
                                                    </ItemTitle>
                                                    <ItemSubTitle>
                                                      <span>PMO 팀 및 프로젝트 매니저용</span>
                                                    </ItemSubTitle>
                                                  </div>
                                                </div>
                                              </MenuItem>
                                              <TagList>
                                                <TagTitle>주요 활용 사례:</TagTitle>
                                                <Tag color="#BC5004" backgroundColor="rgba(255, 153, 0, 0.08)">
                                                  고급 프로젝트
                                                </Tag>
                                                <Tag color="#BC5004" backgroundColor="rgba(255, 153, 0, 0.08)">
                                                  포트폴리오 관리
                                                </Tag>
                                                <Tag color="#BC5004" backgroundColor="rgba(255, 153, 0, 0.08)">
                                                  크리티컬 패스
                                                </Tag>
                                              </TagList>
                                            </div>
                                          </a>
                                        </SectionItem>
                                      </SectionItems>
                                    </MenuSectionComponent>
                                  </MenuSection>
                                  <Seperator />
                                  <MenuSection style={{ paddingTop: "40px" }}>
                                    <MenuSectionComponent>
                                      <SectionTitle>
                                        <svg
                                          width="6"
                                          height="1"
                                          viewBox="0 0 6 1"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                          style={{ marginRight: "8px", stroke: "#676879" }}
                                        >
                                          <path stroke="#676879" strokeLinecap="round" d="M.25.75h5.5"></path>
                                        </svg>
                                        <span>자세한 내용은 monday.com를 참조해주세요.</span>
                                      </SectionTitle>
                                      <MoreProducts>
                                        <div>
                                          <a href="https://workforms.monday.com/" target="_blank" rel="noreferrer">
                                            <div>
                                              <div>
                                                <svg
                                                  width="15"
                                                  height="20"
                                                  viewBox="0 0 15 20"
                                                  fill="none"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                >
                                                  <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M2.885 0a2.885 2.885 0 0 0 0 5.77h9.23a2.885 2.885 0 0 0 0-5.77h-9.23zm0 6.92a2.885 2.885 0 0 0 0 5.77h5.192a2.885 2.885 0 0 0 0-5.77H2.885z"
                                                    fill="url(#paint0_linear_642_352343)"
                                                  ></path>
                                                  <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M5.77 2.885a2.885 2.885 0 1 1-5.77 0 2.885 2.885 0 0 1 5.77 0zm0 6.92a2.885 2.885 0 1 1-5.77 0 2.885 2.885 0 0 1 5.77 0zm-2.885 9.81a2.885 2.885 0 1 0 0-5.77 2.885 2.885 0 0 0 0 5.77z"
                                                    fill="url(#paint1_linear_642_352343)"
                                                  ></path>
                                                  <defs>
                                                    <linearGradient
                                                      id="paint0_linear_642_352343"
                                                      x1="-5.192"
                                                      y1="-4.326"
                                                      x2="1.082"
                                                      y2="18.73"
                                                      gradientUnits="userSpaceOnUse"
                                                    >
                                                      <stop stopColor="#DE0B76"></stop>
                                                      <stop offset="1" stopColor="#F58A25" stopOpacity="0"></stop>
                                                    </linearGradient>
                                                    <linearGradient
                                                      id="paint1_linear_642_352343"
                                                      x1="2.308"
                                                      y1="-1.154"
                                                      x2="16.418"
                                                      y2="21.548"
                                                      gradientUnits="userSpaceOnUse"
                                                    >
                                                      <stop stopColor="#C21E71"></stop>
                                                      <stop offset="1" stopColor="#DE5948" stopOpacity=".457"></stop>
                                                    </linearGradient>
                                                  </defs>
                                                </svg>
                                                <div>
                                                  <div>
                                                    <div>
                                                      <span>WorkForms</span>
                                                    </div>
                                                    <span></span>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </a>
                                        </div>
                                        <div>
                                          <a href="//workcanvas.com/" target="_blank" rel="noreferrer">
                                            <div>
                                              <div>
                                                <svg
                                                  width="20"
                                                  height="20"
                                                  viewBox="0 0 20 20"
                                                  fill="none"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                >
                                                  <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M8.756.525a.51.51 0 0 0-.51-.51H.51A.51.51 0 0 0 0 .525v18.958c0 .282.229.51.51.51H19.47a.51.51 0 0 0 .51-.51V11.74a.51.51 0 0 0-.51-.51H9.267a.51.51 0 0 1-.51-.511V.524z"
                                                    fill="#FFD15B"
                                                  ></path>
                                                  <path
                                                    d="M10.324.512c0-.5.645-.703.93-.292l3.424 4.93a.51.51 0 0 0 .128.128l4.93 3.424a.51.51 0 0 1-.291.93h-8.61a.51.51 0 0 1-.51-.51V.512z"
                                                    fill="#7517F8"
                                                  ></path>
                                                </svg>
                                                <div>
                                                  <div>
                                                    <div>
                                                      <span>Canvas</span>
                                                    </div>
                                                    <span></span>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </a>
                                        </div>
                                      </MoreProducts>
                                    </MenuSectionComponent>
                                  </MenuSection>
                                </SectionHeaderComponent>
                              </SectionHeader>
                            </SubMenu>
                            <div
                              style={{ flex: 1, pointerEvents: "all" }}
                              onClick={() => {
                                setIndex(-1);
                              }}
                            ></div>
                          </ComponentWrapper>
                        </div>
                        <Link
                          isActive={index === 1}
                          onClick={() => {
                            setIndex(index === 1 ? -1 : 1);
                          }}
                        >
                          <Item>
                            <span>활용 사례</span>
                            <svg
                              width="256"
                              height="256"
                              viewBox="0 0 256 256"
                              xmlns="http://www.w3.org/2000/svg"
                              style={{ transform: index === 1 ? "rotate(180deg)" : "" }}
                            >
                              <g id="Page-1" fill="none" fillRule="evenodd">
                                <g id="change-copy" fill="#000" fillRule="nonzero">
                                  <path
                                    d="M0 66.73c0 2.66.981 5.33 2.955 7.41l117.332 123.323a10.64 10.64 0 0 0 7.712 3.314c2.912 0 5.696-1.19 7.712-3.314L253.043 74.14c4.074-4.278 3.914-11.077-.331-15.163a10.627 10.627 0 0 0-15.083.333L128 174.536 18.379 59.32c-4.075-4.279-10.827-4.429-15.083-.343A10.76 10.76 0 0 0 0 66.73z"
                                    id="Shape"
                                  ></path>
                                </g>
                              </g>
                            </svg>
                          </Item>
                        </Link>

                        <div></div>
                        <Link
                          isActive={index === 2}
                          onClick={() => {
                            setIndex(index === 2 ? -1 : 2);
                          }}
                        >
                          <Item>
                            <span>기능</span>
                            <svg
                              width="256"
                              height="256"
                              viewBox="0 0 256 256"
                              xmlns="http://www.w3.org/2000/svg"
                              style={{ transform: index === 2 ? "rotate(180deg)" : "" }}
                            >
                              <g id="Page-1" fill="none" fillRule="evenodd">
                                <g id="change-copy" fill="#000" fillRule="nonzero">
                                  <path
                                    d="M0 66.73c0 2.66.981 5.33 2.955 7.41l117.332 123.323a10.64 10.64 0 0 0 7.712 3.314c2.912 0 5.696-1.19 7.712-3.314L253.043 74.14c4.074-4.278 3.914-11.077-.331-15.163a10.627 10.627 0 0 0-15.083.333L128 174.536 18.379 59.32c-4.075-4.279-10.827-4.429-15.083-.343A10.76 10.76 0 0 0 0 66.73z"
                                    id="Shape"
                                  ></path>
                                </g>
                              </g>
                            </svg>
                          </Item>
                        </Link>
                        <div></div>
                        <Link
                          isActive={index === 3}
                          onClick={() => {
                            setIndex(index === 3 ? -1 : 3);
                          }}
                        >
                          <Item>
                            <span>리소스</span>
                            <svg
                              width="256"
                              height="256"
                              viewBox="0 0 256 256"
                              xmlns="http://www.w3.org/2000/svg"
                              style={{ transform: index === 3 ? "rotate(180deg)" : "" }}
                            >
                              <g id="Page-1" fill="none" fillRule="evenodd">
                                <g id="change-copy" fill="#000" fillRule="nonzero">
                                  <path
                                    d="M0 66.73c0 2.66.981 5.33 2.955 7.41l117.332 123.323a10.64 10.64 0 0 0 7.712 3.314c2.912 0 5.696-1.19 7.712-3.314L253.043 74.14c4.074-4.278 3.914-11.077-.331-15.163a10.627 10.627 0 0 0-15.083.333L128 174.536 18.379 59.32c-4.075-4.279-10.827-4.429-15.083-.343A10.76 10.76 0 0 0 0 66.73z"
                                    id="Shape"
                                  ></path>
                                </g>
                              </g>
                            </svg>
                          </Item>
                        </Link>
                        <div></div>
                      </MainLinks>
                    </LeftSide>
                    <RightSide>
                      <LinkItemComponent>
                        <a href="/pricing/">가격</a>
                      </LinkItemComponent>
                      <LinkItemComponent>
                        <a href="/sales/contact-us?from=header&amp;source=Website%20-%20Contact%20Sales">
                          영업팀에 문의
                        </a>
                      </LinkItemComponent>
                      <LinkItemComponent>
                        <a href="//auth.monday.com/login">로그인</a>
                      </LinkItemComponent>
                    </RightSide>
                    <ButtonWrapper>
                      <div>
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
                  </Nav>
                </Content>
              </ContentWrapper>
            </Component>
          </Wrapper>
        </div>
      </div>
    </div>
  );
}

export default Header;
