import React, { useState } from "react";
import styled from "styled-components";
import CustomButton from "../../common/button";

const Wrapper = styled.header`
  @media (max-width: 1229px) {
    display: none;
  }
  width: 100%;
`;

const Component = styled.div`
  width: 100%;
  height: 72px;
`;

const ContentWrapper = styled.header`
  @media (max-width: 1440px) {
    max-width: 100vw;
  }
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

  &::after {
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 8px;
    box-shadow: 0px 4px 4px rgb(29 140 242 / 8%);
    z-index: 557;
  }
`;

const Content = styled.div`
  @media (max-width: 1440px) {
    max-width: 100vw;
  }
  max-width: 1440px;
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

const MenuSectionWrapper = styled.div`
  height: 54px;
  width: 187px;
  padding: 14px 8px;
  margin-bottom: 24px;
  border-color: rgb(240, 243, 255);
  border-radius: 4px;
  border-width: 2px;
  border-style: solid;

  &:nth-child(n) {
    margin-right: 8px;
  }

  &:nth-child(n + 5) {
    margin-right: 40px;
  }

  &:hover {
    background-color: #f0f3ff;
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

  & > a > div > div {
    align-items: center;
    display: flex;
  }

  & > a > div > div > svg {
    flex-shrink: 0;
    font-size: 16px;
    margin-right: 16px;
  }

  & > a > div > div > div > div {
    display: flex;
    flex-direction: column;
  }

  & > a > div > div > div > div > div {
    display: flex;
  }

  & > a > div > div > div > div > span {
    margin-top: 8px;
    font-size: 14px;
    line-height: 20px;
    color: rgb(103, 104, 121);
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
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
  margin-top: 20px;
  margin: 20px 0px;
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: repeat(3, auto);

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

const MobileWrapper = styled.div`
  @media (max-width: 1229px) {
    display: block;
  }

  display: none;
`;

const MobileComponent = styled.header`
  width: 100%;
  height: 72px;
`;

const MobileHeader = styled.div`
  width: 100%;
  height: 72px;
`;

const MobileContentWrapper = styled.div`
  @media (max-width: 1440px) {
    max-width: 100vw;
  }
  width: 100%;
  height: 72px;
  z-index: 556;
  background-color: #ffffff;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;

  &::after {
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 8px;
    box-shadow: 0px 4px 4px rgb(29 140 242 / 8%);
    z-index: 557;
  }
`;

const MobileContent = styled.div`
  @media (max-width: 1440px) {
    max-width: 100vw;
  }
  max-width: 1440px;
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

const MobileRightSection = styled.div`
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
  -ms-flex-pack: end;
  justify-content: flex-end;
`;

const HamburgerMenu = styled.div`
  width: 28px;
  -webkit-transform: rotate(0deg);
  -ms-transform: rotate(0deg);
  transform: rotate(0deg);
  cursor: pointer;
  z-index: 667;
  margin-left: 24px;
  margin-right: 8px;
  height: 36px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
`;

const HamburgerMenuLine = styled.span<{ isOpen: boolean }>`
  height: 2px !important;
  display: block;
  position: absolute;
  height: 3px;
  width: 100%;
  background-color: #333333;
  border-radius: 4px;
  opacity: 1;
  left: 0;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;

  &:nth-child(1) {
    top: ${({ isOpen }) => (isOpen ? "18px" : "8px")};
    width: ${({ isOpen }) => (isOpen ? "0%" : "100%")};
    left: ${({ isOpen }) => (isOpen ? "50%" : "0")};
  }

  &:nth-child(2) {
    -webkit-transform: ${({ isOpen }) => (isOpen ? "rotate(45deg)" : "rotate(0deg)")};
    -ms-transform: ${({ isOpen }) => (isOpen ? "rotate(45deg)" : "rotate(0deg)")};
    transform: ${({ isOpen }) => (isOpen ? "rotate(45deg)" : "rotate(0deg)")};

    top: 17px;
  }

  &:nth-child(3) {
    -webkit-transform: ${({ isOpen }) => (isOpen ? "rotate(-45deg)" : "rotate(0deg)")};
    -ms-transform: ${({ isOpen }) => (isOpen ? "rotate(-45deg)" : "rotate(0deg)")};
    transform: ${({ isOpen }) => (isOpen ? "rotate(-45deg)" : "rotate(0deg)")};

    top: 17px;
  }

  &:nth-child(4) {
    top: ${({ isOpen }) => (isOpen ? "18px" : "26px")};
    width: ${({ isOpen }) => (isOpen ? "0%" : "100%")};
    left: ${({ isOpen }) => (isOpen ? "50%" : "0")};
  }
`;

const MobileComponentWrapper = styled.div<{ isOpen: boolean }>`
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};

  @media (max-width: 1440px) {
    max-width: 100vw;
  }

  position: fixed;
  z-index: 10000000;
  top: 71px;
  height: calc(100% - 71px);
  width: 100%;
  -webkit-transition: opacity 300ms ease, visibility 300ms ease;
  transition: opacity 300ms ease, visibility 300ms ease;
`;

const MobileMenuWrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: #ffffff;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  padding-bottom: 80px;
  padding: 0px 32px 80px;
  overflow: auto;
`;

const MobileMenu = styled.div`
  border-bottom: 1px solid #f1f1f1;
  overflow: hidden;
  -webkit-transition: height 400ms ease;
  transition: height 400ms ease;
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
`;

const MobileLink = styled.a`
  height: 70px;
  border-bottom: 1px solid #f1f1f1;
  font-size: 20px;
  color: #535768;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  -webkit-text-decoration: none;
  text-decoration: none;
`;

const MobileAppStoreWrapper = styled.div`
  margin-top: 32px;
`;

const MobileAppStore = styled.div`
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
`;

const MobileTitleWrapper = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  font-size: 20px;
  height: 70px;
  cursor: pointer;

  & > span {
    color: #535768;
    margin-right: 8px;
    font-weight: 300;
  }

  & > svg {
    margin-top: 5px;
    height: 10px;
    width: 10px;
    -webkit-transition: -webkit-transform 400ms ease;
    -webkit-transition: transform 400ms ease;
    transition: transform 400ms ease;
  }
`;

const MobileMenuLinks = styled.div`
  height: 0px;
  overflow: hidden;

  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-transition: height 400ms ease;
  transition: height 400ms ease;
`;

const SectionWrapper = styled.div`
  margin: 0 0 32px 12px;

  & > div > a {
    height: 48px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    gap: 16px;

    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    font-size: 16px;
    color: #383b45;
    -webkit-text-decoration: none;
    text-decoration: none;
  }
`;

const SectionLink = styled.div`
  color: #535768;
  font-weight: bold;
  border-bottom: 1px solid #f5f6f8;
  padding: 16px 0;
`;

function Header(): JSX.Element {
  const [index, setIndex] = useState<number>(-1);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [subMenu, setSubMenu] = useState<number>(-1);

  const onClickSubMenu = (index: number) => () => {
    setSubMenu((state) => (state === index ? -1 : index));
  };

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

                        <div style={{ display: index === 0 ? "block" : "none" }}>
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

                        <div style={{ display: index === 1 ? "block" : "none" }}>
                          <ComponentWrapper>
                            <SubMenu>
                              <SectionHeader>
                                <SectionHeaderComponent>
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
                                        <span>팀별</span>
                                      </SectionTitle>
                                      <SectionItems
                                        style={{
                                          margin: "20px 0px",
                                          padding: "0px",
                                          gridTemplateRows: "repeat(4, auto)",
                                        }}
                                      >
                                        <MenuSectionWrapper>
                                          <a href="/marketing">
                                            <div>
                                              <div>
                                                <svg
                                                  width="28"
                                                  height="28"
                                                  viewBox="0 0 28 28"
                                                  fill="none"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  className="jsx-1475715785 menu-item-title-icon outline"
                                                >
                                                  <path
                                                    transform="matrix(.34684 .93793 -.95008 .312 10.22 17.544)"
                                                    stroke="#F04095"
                                                    strokeWidth="2.5"
                                                    strokeLinecap="round"
                                                    d="M1.25-1.25h2.707"
                                                  ></path>
                                                  <path
                                                    d="M7.942 17.543L7 14.435 18.306 6l3.062 10.729-13.426.814z"
                                                    stroke="#F04095"
                                                    strokeWidth="2.5"
                                                    strokeLinejoin="round"
                                                  ></path>
                                                </svg>
                                                <div>
                                                  <div>
                                                    <div>
                                                      <span>마케팅</span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </a>
                                        </MenuSectionWrapper>
                                        <MenuSectionWrapper>
                                          <a href="/dev">
                                            <div>
                                              <div>
                                                <svg
                                                  width="28"
                                                  height="28"
                                                  viewBox="0 0 28 28"
                                                  fill="none"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                >
                                                  <path
                                                    stroke="#00C875"
                                                    strokeWidth="2.175"
                                                    strokeLinecap="round"
                                                    d="M10.835 8.999l-4.834 4.826M10.897 18.688l-4.834-4.826M16.914 8.999l4.833 4.826M16.851 18.688l4.834-4.826"
                                                  ></path>
                                                </svg>
                                                <div>
                                                  <div>
                                                    <div>
                                                      <span>개발자 모드</span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </a>
                                        </MenuSectionWrapper>
                                        <MenuSectionWrapper>
                                          <a href="/operations">
                                            <div>
                                              <div>
                                                <svg
                                                  width="28"
                                                  height="28"
                                                  viewBox="0 0 28 28"
                                                  fill="none"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                >
                                                  <circle
                                                    cx="14"
                                                    cy="15"
                                                    r="6"
                                                    stroke="#6C6CFF"
                                                    strokeWidth="2"
                                                  ></circle>
                                                  <circle
                                                    cx="14"
                                                    cy="15"
                                                    r="2.1"
                                                    stroke="#6C6CFF"
                                                    strokeWidth="1.8"
                                                  ></circle>
                                                </svg>
                                                <div>
                                                  <div>
                                                    <div>
                                                      <span>운영</span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </a>
                                        </MenuSectionWrapper>
                                        <MenuSectionWrapper>
                                          <a href="/use-cases/hr-management-software">
                                            <div>
                                              <div>
                                                <svg
                                                  width="28"
                                                  height="28"
                                                  viewBox="0 0 28 28"
                                                  fill="none"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                >
                                                  <path
                                                    d="M18 22v-9M10 22v-9M18 8V7M10 8V7"
                                                    stroke="#6C6CFF"
                                                    strokeWidth="2.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                  ></path>
                                                </svg>
                                                <div>
                                                  <div>
                                                    <div>
                                                      <span>HR</span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </a>
                                        </MenuSectionWrapper>
                                        <MenuSectionWrapper>
                                          <a href="/crm">
                                            <div>
                                              <div>
                                                <svg
                                                  width="28"
                                                  height="28"
                                                  viewBox="0 0 28 28"
                                                  fill="none"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                >
                                                  <path
                                                    d="M5 20.5L9.5 15l5 3 6-10m0 0L15 9.5M20.5 8l1.5 5"
                                                    stroke="#00D2D2"
                                                    strokeWidth="2.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                  ></path>
                                                </svg>
                                                <div>
                                                  <div>
                                                    <div>
                                                      <span>영업</span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </a>
                                        </MenuSectionWrapper>
                                        <MenuSectionWrapper>
                                          <a href="/project-management">
                                            <div>
                                              <div>
                                                <svg
                                                  width="28"
                                                  height="28"
                                                  viewBox="0 0 28 28"
                                                  fill="none"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                >
                                                  <path
                                                    stroke="#FF9900"
                                                    strokeWidth="2.5"
                                                    strokeLinecap="round"
                                                    d="M7.434 7.401h8.922M11.444 14.302h8.923M7.25 21.203h8.923"
                                                  ></path>
                                                </svg>
                                                <div>
                                                  <div>
                                                    <div>
                                                      <span>프로젝트 관리</span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </a>
                                        </MenuSectionWrapper>
                                        <MenuSectionWrapper>
                                          <a href="/use-cases/it-operations">
                                            <div>
                                              <div>
                                                <svg
                                                  width="28"
                                                  height="28"
                                                  viewBox="0 0 28 28"
                                                  fill="none"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                >
                                                  <path
                                                    d="M6 19h15M21 10H6M19 8v4M10 17v4"
                                                    stroke="#6C6CFF"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                  ></path>
                                                </svg>
                                                <div>
                                                  <div>
                                                    <div>
                                                      <span>IT</span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </a>
                                        </MenuSectionWrapper>
                                      </SectionItems>
                                    </MenuSectionComponent>
                                  </MenuSection>
                                  <Seperator />
                                  <MenuSection style={{ paddingTop: "48px" }}>
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
                                        <span>사업 규모별</span>
                                      </SectionTitle>
                                      <SectionItems
                                        style={{
                                          margin: "20px 0px",
                                          padding: "0px",
                                          gridTemplateRows: "repeat(4, auto)",
                                        }}
                                      >
                                        <MenuSectionWrapper style={{ borderColor: "transparent" }}>
                                          <a href="/enterprise">
                                            <div>
                                              <div>
                                                <svg
                                                  width="28"
                                                  height="28"
                                                  viewBox="0 0 28 28"
                                                  fill="none"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                >
                                                  <path
                                                    d="M2.857 25.143h22.286M18.434 6.733h-8.72v18.41h8.72V6.733zM23.019 15.453h-3.876v9.69h3.876v-9.69zM9.304 15.453H5.43v9.69h3.875v-9.69zM15.714 3.714h-3.428v2.572h3.428V3.714zM14 3.714V2M14.857 10.571h-1.714M14.857 14h-1.714M14.857 17.429h-1.714"
                                                    stroke="#6C6CFF"
                                                    strokeWidth="1.5"
                                                    strokeMiterlimit="10"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                  ></path>
                                                </svg>
                                                <div>
                                                  <div>
                                                    <div>
                                                      <span>엔터프라이즈</span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </a>
                                        </MenuSectionWrapper>
                                        <MenuSectionWrapper style={{ borderColor: "transparent" }}>
                                          <a href="/smb/">
                                            <div>
                                              <div>
                                                <svg
                                                  width="28"
                                                  height="28"
                                                  viewBox="0 0 28 28"
                                                  fill="none"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                >
                                                  <path
                                                    d="M22 6H7v16h15V6zM13 11h3"
                                                    stroke="#6C6CFF"
                                                    strokeWidth="1.5"
                                                    strokeMiterlimit="10"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                  ></path>
                                                  <path
                                                    d="M12 22v-7h5v7"
                                                    stroke="#6C6CFF"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                  ></path>
                                                </svg>
                                                <div>
                                                  <div>
                                                    <div>
                                                      <span>소규모 비즈니스</span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </a>
                                        </MenuSectionWrapper>
                                        <MenuSectionWrapper style={{ borderColor: "transparent" }}>
                                          <a href="/nonprofits">
                                            <div>
                                              <div>
                                                <svg
                                                  width="28"
                                                  height="28"
                                                  viewBox="0 0 28 28"
                                                  fill="none"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                >
                                                  <path
                                                    d="M14.212 13.387l-4.197-3.883c-2.288-2.298 1.05-6.748 4.197-3.148 3.149-3.589 6.518.86 4.198 3.148l-4.198 3.883zM10.678 18.637c.516.258 2.28.774 3.097.774 1.806 0 2.394-.318 3.097-.516 1.032-.292 1.458-.997 1.568-1.324m0 0c.074-.223.125.276 0-.225-.517-2.064-2.6-.291-4.665-.55-2.065-.257-4.646-1.514-5.678-1.514S5 16.022 5 17.346c0 1 .774 2.065 2.065 3.064 1.29.998 3.87 1.806 6.452 1.806 3.145 0 4.645-1.066 5.935-1.806.448-.257 3.613-2.84 3.871-3.613.333-1-.234-1.311-.774-1.515-.774-.292-1.419.5-2.064.999-1.29.998-1.29 1.066-2.045 1.29z"
                                                    stroke="#6C6CFF"
                                                    strokeWidth="1.703"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                  ></path>
                                                </svg>
                                                <div>
                                                  <div>
                                                    <div>
                                                      <span>비영리</span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </a>
                                        </MenuSectionWrapper>
                                      </SectionItems>
                                    </MenuSectionComponent>
                                  </MenuSection>
                                  <Seperator />
                                  <MenuSection style={{ paddingTop: "48px" }}>
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
                                        <span>워크플로우 별</span>
                                      </SectionTitle>
                                      <SectionItems
                                        style={{
                                          margin: "20px 0px",
                                          padding: "0px",
                                          gridTemplateRows: "repeat(3, auto)",
                                        }}
                                      >
                                        <MenuSectionWrapper
                                          style={{
                                            borderColor: "transparent",
                                            height: "98px",
                                            padding: "16px 8px",
                                            marginRight: "18px",
                                            marginBottom: "0px",
                                            width: "290px",
                                          }}
                                        >
                                          <a href="/nonprofits">
                                            <div>
                                              <div style={{ alignItems: "flex-start" }}>
                                                <svg
                                                  width="28"
                                                  height="28"
                                                  viewBox="0 0 28 28"
                                                  fill="none"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                >
                                                  <path
                                                    d="M11.403 17.439H8.258A1.265 1.265 0 0 1 7 16.175V6.628a1.256 1.256 0 0 1 1.258-1.262h11.32c.335 0 .654.132.89.369s.369.558.369.893V9.21M7.33 9.184h10.377"
                                                    stroke="#6C6CFF"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                  ></path>
                                                  <path
                                                    stroke="#6C6CFF"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    d="M10.657 4.809v1.358M17.982 4.75v1.358"
                                                  ></path>
                                                  <rect
                                                    x="15"
                                                    y="14"
                                                    width="6"
                                                    height="6"
                                                    rx=".804"
                                                    stroke="#6C6CFF"
                                                    strokeWidth="1.5"
                                                  ></rect>
                                                </svg>
                                                <div>
                                                  <div>
                                                    <div>
                                                      <span
                                                        style={{
                                                          fontWeight: 400,
                                                          textOverflow: "ellipsis",
                                                          whiteSpace: "nowrap",
                                                          overflow: "hidden",
                                                          lineHeight: "20px",
                                                        }}
                                                      >
                                                        프로젝트 관리
                                                      </span>
                                                    </div>
                                                    <span>
                                                      <div>모든 프로젝트를 처음부터 끝까지 계획, 관리, 추적하세요</div>
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </a>
                                        </MenuSectionWrapper>
                                        <MenuSectionWrapper
                                          style={{
                                            borderColor: "transparent",
                                            height: "98px",
                                            padding: "16px 8px",
                                            marginRight: "18px",
                                            marginBottom: "0px",
                                            width: "290px",
                                          }}
                                        >
                                          <a href="/nonprofits">
                                            <div>
                                              <div style={{ alignItems: "flex-start" }}>
                                                <svg
                                                  width="28"
                                                  height="28"
                                                  viewBox="0 0 28 28"
                                                  fill="none"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                >
                                                  <path
                                                    d="M20.826 18.5a.676.676 0 0 0 .674-.674V9.2a.813.813 0 0 0-.26-.551L13.75 3 6.26 8.649A.814.814 0 0 0 6 9.2v8.626a.676.676 0 0 0 .674.674h14.152z"
                                                    stroke="#6C6CFF"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                  ></path>
                                                  <path
                                                    d="M11 18v-6h5v6"
                                                    stroke="#6C6CFF"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                  ></path>
                                                </svg>
                                                <div>
                                                  <div>
                                                    <div>
                                                      <span
                                                        style={{
                                                          fontWeight: 400,
                                                          textOverflow: "ellipsis",
                                                          whiteSpace: "nowrap",
                                                          overflow: "hidden",
                                                          lineHeight: "20px",
                                                        }}
                                                      >
                                                        재택 근무
                                                      </span>
                                                    </div>
                                                    <span>
                                                      <div>어디서든 협력하고 생산성을 유지하세요</div>
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </a>
                                        </MenuSectionWrapper>
                                        <MenuSectionWrapper
                                          style={{
                                            borderColor: "transparent",
                                            height: "98px",
                                            padding: "16px 8px",
                                            marginRight: "18px",
                                            marginBottom: "0px",
                                            width: "290px",
                                          }}
                                        >
                                          <a href="/nonprofits">
                                            <div>
                                              <div style={{ alignItems: "flex-start" }}>
                                                <svg
                                                  width="28"
                                                  height="28"
                                                  viewBox="0 0 28 28"
                                                  fill="none"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  className="jsx-1475715785 menu-item-title-icon outline"
                                                >
                                                  <path
                                                    d="M8.613 10.827h4.215M8.613 13.838h2.409M8.613 16.849h2.409M12.225 21.064h-6.02A1.204 1.204 0 0 1 5 19.858V7.215A1.204 1.204 0 0 1 6.204 6.01h3.01a3.01 3.01 0 1 1 6.022 0h3.01a1.204 1.204 0 0 1 1.205 1.204V9.02"
                                                    stroke="#6C6CFF"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                  ></path>
                                                  <path
                                                    d="M12.225 21.064h-6.02A1.204 1.204 0 0 1 5 19.858V7.215M12.226 5.409a.301.301 0 1 1 0 .602.301.301 0 0 1 0-.602M14.63 16.722a4.34 4.34 0 1 0 8.68 0 4.34 4.34 0 0 0-8.68 0z"
                                                    stroke="#6C6CFF"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                  ></path>
                                                  <path
                                                    d="M20.905 15.46l-2.102 2.802a.543.543 0 0 1-.818.058l-1.086-1.085"
                                                    stroke="#6C6CFF"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                  ></path>
                                                </svg>
                                                <div>
                                                  <div>
                                                    <div>
                                                      <span
                                                        style={{
                                                          fontWeight: 400,
                                                          textOverflow: "ellipsis",
                                                          whiteSpace: "nowrap",
                                                          overflow: "hidden",
                                                          lineHeight: "20px",
                                                        }}
                                                      >
                                                        재고 추적
                                                      </span>
                                                    </div>
                                                    <span>
                                                      <div>수집부터 최종 배송까지 재고를 모니터링 할 수 있습니다</div>
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </a>
                                        </MenuSectionWrapper>
                                        <MenuSectionWrapper
                                          style={{
                                            borderColor: "transparent",
                                            height: "98px",
                                            padding: "16px 8px",
                                            marginRight: "18px",
                                            marginBottom: "0px",
                                            marginLeft: "8",
                                            width: "290px",
                                          }}
                                        >
                                          <a href="/nonprofits">
                                            <div>
                                              <div style={{ alignItems: "flex-start" }}>
                                                <svg
                                                  width="28"
                                                  height="28"
                                                  viewBox="0 0 28 28"
                                                  fill="none"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                >
                                                  <mask id="path-1-inside-1_719_353165" fill="#fff">
                                                    <rect x="9" y="7" width="14" height="14" rx="1"></rect>
                                                  </mask>
                                                  <rect
                                                    x="9"
                                                    y="7"
                                                    width="14"
                                                    height="14"
                                                    rx="1"
                                                    stroke="#6C6CFF"
                                                    strokeWidth="3"
                                                    strokeLinejoin="round"
                                                    mask="url(#path-1-inside-1_719_353165)"
                                                  ></rect>
                                                  <path
                                                    d="M18 7.5v-3a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h2.658"
                                                    stroke="#6C6CFF"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                  ></path>
                                                  <path
                                                    d="M16 12v4M14 13.999h4"
                                                    stroke="#6C6CFF"
                                                    strokeWidth="1.2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                  ></path>
                                                </svg>
                                                <div>
                                                  <div>
                                                    <div>
                                                      <span
                                                        style={{
                                                          fontWeight: 400,
                                                          textOverflow: "ellipsis",
                                                          whiteSpace: "nowrap",
                                                          overflow: "hidden",
                                                          lineHeight: "20px",
                                                        }}
                                                      >
                                                        200개 이상의 워크플로우
                                                      </span>
                                                    </div>
                                                    <span>
                                                      <div>검증된 워크플로우를 통해 업무 관리를 시작하세요</div>
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </a>
                                        </MenuSectionWrapper>
                                      </SectionItems>
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
                        <div style={{ display: index === 2 ? "block" : "none" }}>
                          <ComponentWrapper>
                            <SubMenu>
                              <SectionHeader>
                                <SectionHeaderComponent>
                                  <MenuSection style={{ paddingTop: "48px" }}>
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
                                        <span>주요 기능</span>
                                      </SectionTitle>
                                      <SectionItems
                                        style={{
                                          margin: "20px 0px",
                                          padding: "0px",
                                          gridTemplateRows: "repeat(2, auto)",
                                        }}
                                      >
                                        <MenuSectionWrapper
                                          style={{
                                            height: "98px",
                                            padding: "16px 12px",
                                            marginRight: "14px",
                                            marginBottom: "14px",
                                            width: "280px",
                                          }}
                                        >
                                          <a href="/nonprofits">
                                            <div>
                                              <div style={{ alignItems: "flex-start" }}>
                                                <svg
                                                  style={{ backgroundColor: "#F0F3FF" }}
                                                  width="22"
                                                  height="22"
                                                  viewBox="0 0 22 22"
                                                  fill="none"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  className="jsx-1475715785 menu-item-title-icon outline"
                                                >
                                                  <rect
                                                    x="3.5"
                                                    y="3.5"
                                                    width="14"
                                                    height="14"
                                                    rx="1.375"
                                                    stroke="#6C6CFF"
                                                  ></rect>
                                                  <path
                                                    stroke="#6C6CFF"
                                                    strokeLinecap="round"
                                                    d="M7.183 14.687V11M10.936 14.687V8.188M14.69 14.687V6.312"
                                                  ></path>
                                                </svg>
                                                <div>
                                                  <div>
                                                    <div>
                                                      <span
                                                        style={{
                                                          fontWeight: 400,
                                                          textOverflow: "ellipsis",
                                                          whiteSpace: "nowrap",
                                                          overflow: "hidden",
                                                          lineHeight: "20px",
                                                        }}
                                                      >
                                                        대시보드
                                                      </span>
                                                    </div>
                                                    <span>
                                                      <div>실시간 인사이트와 함께 의사결정을 간소화하세요</div>
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </a>
                                        </MenuSectionWrapper>
                                        <MenuSectionWrapper
                                          style={{
                                            height: "98px",
                                            padding: "16px 12px",
                                            marginRight: "14px",
                                            marginBottom: "14px",
                                            width: "280px",
                                          }}
                                        >
                                          <a href="/nonprofits">
                                            <div>
                                              <div style={{ alignItems: "flex-start" }}>
                                                <svg
                                                  style={{ backgroundColor: "#F0F3FF" }}
                                                  width="22"
                                                  height="22"
                                                  viewBox="0 0 22 22"
                                                  fill="none"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  className="jsx-1475715785 menu-item-title-icon outline"
                                                >
                                                  <path
                                                    stroke="#6C6CFF"
                                                    strokeLinecap="round"
                                                    d="M3.5 8.735l3.036 3.036M7.738 4.5l3.036 3.036M14.393 14.981l2.753 2.754"
                                                  ></path>
                                                  <path
                                                    d="M5.745 12.735l6.78-6.78 3.67 3.671c.89.89.89 2.333 0 3.223l-3.556 3.556a2.28 2.28 0 0 1-3.223 0l-3.67-3.67z"
                                                    stroke="#6C6CFF"
                                                  ></path>
                                                  <path
                                                    d="M4.031 14.342l9.5-9.328"
                                                    stroke="#6C6CFF"
                                                    strokeLinecap="round"
                                                  ></path>
                                                </svg>
                                                <div>
                                                  <div>
                                                    <div>
                                                      <span
                                                        style={{
                                                          fontWeight: 400,
                                                          textOverflow: "ellipsis",
                                                          whiteSpace: "nowrap",
                                                          overflow: "hidden",
                                                          lineHeight: "20px",
                                                        }}
                                                      >
                                                        연동
                                                      </span>
                                                    </div>
                                                    <span>
                                                      <div>모든 비즈니스 도구를 한 곳에 보관하세요.</div>
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </a>
                                        </MenuSectionWrapper>
                                        <MenuSectionWrapper
                                          style={{
                                            height: "98px",
                                            padding: "16px 12px",
                                            marginRight: "14px",
                                            marginBottom: "14px",
                                            width: "280px",
                                          }}
                                        >
                                          <a href="/nonprofits">
                                            <div>
                                              <div style={{ alignItems: "flex-start" }}>
                                                <svg
                                                  style={{ backgroundColor: "#F0F3FF" }}
                                                  width="22"
                                                  height="22"
                                                  viewBox="0 0 22 22"
                                                  fill="none"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  className="jsx-1475715785 menu-item-title-icon outline"
                                                >
                                                  <rect
                                                    x="5.183"
                                                    y="6.287"
                                                    width="12.047"
                                                    height="10.951"
                                                    rx="2.259"
                                                    stroke="#6C6CFF"
                                                  ></rect>
                                                  <path
                                                    stroke="#6C6CFF"
                                                    strokeLinecap="round"
                                                    d="M8.974 10.072v2.285M13.35 10.072v2.285"
                                                  ></path>
                                                  <path
                                                    d="M3 10.701c0-.624.506-1.13 1.13-1.13h1.06v4.381H4.13A1.13 1.13 0 0 1 3 12.823v-2.122zM17.234 9.572h1.061c.624 0 1.13.505 1.13 1.13v2.121a1.13 1.13 0 0 1-1.13 1.13h-1.06V9.571z"
                                                    stroke="#6C6CFF"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                  ></path>
                                                  <path
                                                    stroke="#6C6CFF"
                                                    strokeLinecap="round"
                                                    d="M11.162 3.5v2.285"
                                                  ></path>
                                                </svg>
                                                <div>
                                                  <div>
                                                    <div>
                                                      <span
                                                        style={{
                                                          fontWeight: 400,
                                                          textOverflow: "ellipsis",
                                                          whiteSpace: "nowrap",
                                                          overflow: "hidden",
                                                          lineHeight: "20px",
                                                        }}
                                                      >
                                                        자동화
                                                      </span>
                                                    </div>
                                                    <span>
                                                      <div>시간을 절약하고 반복적인 업무에서 벗어나세요</div>
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </a>
                                        </MenuSectionWrapper>
                                        <MenuSectionWrapper
                                          style={{
                                            height: "98px",
                                            padding: "16px 12px",
                                            marginRight: "14px",
                                            marginBottom: "14px",
                                            width: "280px",
                                          }}
                                        >
                                          <a href="/nonprofits">
                                            <div>
                                              <div style={{ alignItems: "flex-start" }}>
                                                <svg
                                                  style={{ backgroundColor: "#F0F3FF" }}
                                                  width="22"
                                                  height="22"
                                                  viewBox="0 0 22 22"
                                                  fill="none"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  className="jsx-1475715785 menu-item-title-icon outline"
                                                >
                                                  <path
                                                    d="M9 6H2M14 11H6M19.242 16H12"
                                                    stroke="#6C6CFF"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                  ></path>
                                                </svg>
                                                <div>
                                                  <div>
                                                    <div>
                                                      <span
                                                        style={{
                                                          fontWeight: 400,
                                                          textOverflow: "ellipsis",
                                                          whiteSpace: "nowrap",
                                                          overflow: "hidden",
                                                          lineHeight: "20px",
                                                        }}
                                                      >
                                                        간트
                                                      </span>
                                                    </div>
                                                    <span>
                                                      <div>
                                                        프로젝트 마일스톤
                                                        <br />및 종속성을 시각화하세요
                                                      </div>
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </a>
                                        </MenuSectionWrapper>
                                        <MenuSectionWrapper
                                          style={{
                                            height: "98px",
                                            padding: "16px 12px",
                                            marginRight: "14px",
                                            marginBottom: "14px",
                                            width: "280px",
                                          }}
                                        >
                                          <a href="/nonprofits">
                                            <div>
                                              <div style={{ alignItems: "flex-start" }}>
                                                <svg
                                                  style={{ backgroundColor: "#F0F3FF" }}
                                                  width="22"
                                                  height="22"
                                                  viewBox="0 0 22 22"
                                                  fill="none"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                >
                                                  <path
                                                    d="M4 3.5h4.5V14a.5.5 0 0 1-.5.5H4a.5.5 0 0 1-.5-.5V4a.5.5 0 0 1 .5-.5zM13.5 3.5H18a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5V3.5z"
                                                    stroke="#6C6CFF"
                                                    strokeLinejoin="round"
                                                  ></path>
                                                  <rect
                                                    x="8.5"
                                                    y="3.5"
                                                    width="5"
                                                    height="15"
                                                    rx=".5"
                                                    stroke="#6C6CFF"
                                                    strokeLinejoin="round"
                                                  ></rect>
                                                </svg>
                                                <div>
                                                  <div>
                                                    <div>
                                                      <span
                                                        style={{
                                                          fontWeight: 400,
                                                          textOverflow: "ellipsis",
                                                          whiteSpace: "nowrap",
                                                          overflow: "hidden",
                                                          lineHeight: "20px",
                                                        }}
                                                      >
                                                        칸반
                                                      </span>
                                                    </div>
                                                    <span>
                                                      <div>
                                                        능력에 따라 요구사항의 우선순위를 지정하고 요구의 균형을
                                                        맞추세요
                                                      </div>
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </a>
                                        </MenuSectionWrapper>
                                        <MenuSectionWrapper
                                          style={{
                                            height: "98px",
                                            padding: "16px 12px",
                                            marginRight: "14px",
                                            marginBottom: "14px",
                                            width: "280px",
                                          }}
                                        >
                                          <a href="/nonprofits">
                                            <div>
                                              <div style={{ alignItems: "flex-start" }}>
                                                <svg
                                                  style={{ backgroundColor: "#F0F3FF" }}
                                                  width="22"
                                                  height="22"
                                                  viewBox="0 0 22 22"
                                                  fill="none"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  className="jsx-1475715785 menu-item-title-icon outline"
                                                >
                                                  <path
                                                    d="M5 17.273V4a1 1 0 0 1 1-1h6.728a1 1 0 0 1 .753.342l3.272 3.74A1 1 0 0 1 17 7.74v9.533a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z"
                                                    stroke="#6C6CFF"
                                                  ></path>
                                                  <path
                                                    d="M13.143 7.114V3.447c0-.157.194-.232.299-.115L16.742 7c.1.11.021.286-.127.286h-3.3a.171.171 0 0 1-.172-.172z"
                                                    stroke="#6C6CFF"
                                                  ></path>
                                                  <path
                                                    d="M7.857 9.962h4.104M7.682 13.409h5.545"
                                                    stroke="#6C6CFF"
                                                    strokeLinecap="round"
                                                  ></path>
                                                </svg>
                                                <div>
                                                  <div>
                                                    <div>
                                                      <span
                                                        style={{
                                                          fontWeight: 400,
                                                          textOverflow: "ellipsis",
                                                          whiteSpace: "nowrap",
                                                          overflow: "hidden",
                                                          lineHeight: "20px",
                                                        }}
                                                      >
                                                        Docs
                                                      </span>
                                                    </div>
                                                    <span>
                                                      <div>단어를 워크플로우로 만들고 실시간으로 협업하세요</div>
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </a>
                                        </MenuSectionWrapper>

                                        <MenuSectionWrapper
                                          style={{
                                            height: "98px",
                                            padding: "16px 12px",
                                            marginRight: "14px",
                                            marginBottom: "14px",
                                            width: "280px",
                                          }}
                                        >
                                          <a href="/nonprofits">
                                            <div>
                                              <div style={{ alignItems: "flex-start" }}>
                                                <svg
                                                  style={{ backgroundColor: "#F0F3FF" }}
                                                  width="22"
                                                  height="22"
                                                  viewBox="0 0 22 22"
                                                  fill="none"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  className="jsx-1475715785 menu-item-title-icon outline"
                                                >
                                                  <rect
                                                    x="6.833"
                                                    y="3.5"
                                                    width="10.667"
                                                    height="11.833"
                                                    rx=".667"
                                                    stroke="#6C6CFF"
                                                  ></rect>
                                                  <path
                                                    stroke="#6C6CFF"
                                                    strokeLinecap="round"
                                                    d="M15.167 7h-6M15.167 10.5h-6"
                                                  ></path>
                                                  <path
                                                    d="M4 7.667v10.266c0 .129.104.233.233.233h7.934"
                                                    stroke="#6C6CFF"
                                                    strokeMiterlimit="1.414"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                  ></path>
                                                </svg>
                                                <div>
                                                  <div>
                                                    <div>
                                                      <span
                                                        style={{
                                                          fontWeight: 400,
                                                          textOverflow: "ellipsis",
                                                          whiteSpace: "nowrap",
                                                          overflow: "hidden",
                                                          lineHeight: "20px",
                                                        }}
                                                      >
                                                        파일
                                                      </span>
                                                    </div>
                                                    <span>
                                                      <div>모든 파일 형식을 업로드하여 작업에 태스크 추가</div>
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </a>
                                        </MenuSectionWrapper>
                                      </SectionItems>
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
                        <div style={{ display: index === 3 ? "block" : "none" }}>
                          <ComponentWrapper>
                            <SubMenu>
                              <SectionHeader>
                                <SectionHeaderComponent>
                                  <MenuSection style={{ paddingTop: "48px" }}>
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
                                        <span>더 알아보기</span>
                                      </SectionTitle>
                                      <SectionItems
                                        style={{
                                          margin: "20px 0px",
                                          padding: "0px",
                                          gridTemplateRows: "repeat(5, auto)",
                                        }}
                                      >
                                        <MenuSectionWrapper
                                          style={{
                                            borderColor: "transparent",
                                            height: "98px",
                                            padding: "16px 12px",
                                            marginRight: "28px",
                                            marginBottom: "14px",
                                            width: "274px",
                                          }}
                                        >
                                          <a href="/nonprofits">
                                            <div>
                                              <div style={{ alignItems: "flex-start" }}>
                                                <div>
                                                  <div>
                                                    <div>
                                                      <span
                                                        style={{
                                                          fontWeight: 400,
                                                          textOverflow: "ellipsis",
                                                          whiteSpace: "nowrap",
                                                          overflow: "hidden",
                                                          lineHeight: "20px",
                                                        }}
                                                      >
                                                        지원 센터
                                                      </span>
                                                    </div>
                                                    <span>
                                                      <div>monday.com 사용을 위한 튜토리얼 및 방법 가이드</div>
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </a>
                                        </MenuSectionWrapper>
                                        <MenuSectionWrapper
                                          style={{
                                            borderColor: "transparent",
                                            height: "98px",
                                            padding: "16px 12px",
                                            marginRight: "28px",
                                            marginBottom: "14px",
                                            width: "274px",
                                          }}
                                        >
                                          <a href="/nonprofits">
                                            <div>
                                              <div style={{ alignItems: "flex-start" }}>
                                                <div>
                                                  <div>
                                                    <div>
                                                      <span
                                                        style={{
                                                          fontWeight: 400,
                                                          textOverflow: "ellipsis",
                                                          whiteSpace: "nowrap",
                                                          overflow: "hidden",
                                                          lineHeight: "20px",
                                                        }}
                                                      >
                                                        About us
                                                      </span>
                                                    </div>
                                                    <span>
                                                      <div>monday.com의 연혁, 우리의 가치와 마일스톤 </div>
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </a>
                                        </MenuSectionWrapper>
                                        <MenuSectionWrapper
                                          style={{
                                            borderColor: "transparent",
                                            height: "98px",
                                            padding: "16px 12px",
                                            marginRight: "28px",
                                            marginBottom: "14px",
                                            width: "274px",
                                          }}
                                        >
                                          <a href="/nonprofits">
                                            <div>
                                              <div style={{ alignItems: "flex-start" }}>
                                                <div>
                                                  <div>
                                                    <div>
                                                      <span
                                                        style={{
                                                          fontWeight: 400,
                                                          textOverflow: "ellipsis",
                                                          whiteSpace: "nowrap",
                                                          overflow: "hidden",
                                                          lineHeight: "20px",
                                                        }}
                                                      >
                                                        웨비나
                                                      </span>
                                                    </div>
                                                    <span>
                                                      <div>
                                                        라이브 및 웨비나를 통해 monday.com에 대해 자세히 알아보세요
                                                      </div>
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </a>
                                        </MenuSectionWrapper>
                                        <MenuSectionWrapper
                                          style={{
                                            borderColor: "transparent",
                                            height: "98px",
                                            padding: "16px 12px",
                                            marginRight: "28px",
                                            marginBottom: "14px",
                                            width: "274px",
                                          }}
                                        >
                                          <a href="/nonprofits">
                                            <div>
                                              <div style={{ alignItems: "flex-start" }}>
                                                <div>
                                                  <div>
                                                    <div>
                                                      <span
                                                        style={{
                                                          fontWeight: 400,
                                                          textOverflow: "ellipsis",
                                                          whiteSpace: "nowrap",
                                                          overflow: "hidden",
                                                          lineHeight: "20px",
                                                        }}
                                                      >
                                                        블로그
                                                      </span>
                                                    </div>
                                                    <span>
                                                      <div>
                                                        생산성, 제품 뉴스, 팁 등 monday.com의 ﻿최신 소식을 살펴보세요
                                                      </div>
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </a>
                                        </MenuSectionWrapper>
                                      </SectionItems>
                                    </MenuSectionComponent>
                                  </MenuSection>
                                  <MenuSection style={{ paddingTop: "48px" }}>
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
                                        <span>지원</span>
                                      </SectionTitle>
                                      <SectionItems
                                        style={{
                                          margin: "20px 0px",
                                          padding: "0px",
                                          gridTemplateRows: "repeat(5, auto)",
                                        }}
                                      >
                                        <MenuSectionWrapper
                                          style={{
                                            borderColor: "transparent",
                                            height: "98px",
                                            padding: "16px 12px",
                                            marginRight: "28px",
                                            marginBottom: "14px",
                                            width: "274px",
                                          }}
                                        >
                                          <a href="/nonprofits">
                                            <div>
                                              <div style={{ alignItems: "flex-start" }}>
                                                <div>
                                                  <div>
                                                    <div>
                                                      <span
                                                        style={{
                                                          fontWeight: 400,
                                                          textOverflow: "ellipsis",
                                                          whiteSpace: "nowrap",
                                                          overflow: "hidden",
                                                          lineHeight: "20px",
                                                        }}
                                                      >
                                                        연중 무휴 24시간 지원
                                                      </span>
                                                    </div>
                                                    <span>
                                                      <div>
                                                        전 세계 어디에서나 신속하고 전문적인 지원을 받을 수 있습니다
                                                      </div>
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </a>
                                        </MenuSectionWrapper>
                                        <MenuSectionWrapper
                                          style={{
                                            borderColor: "transparent",
                                            height: "98px",
                                            padding: "16px 12px",
                                            marginRight: "28px",
                                            marginBottom: "14px",
                                            width: "274px",
                                          }}
                                        >
                                          <a href="/nonprofits">
                                            <div>
                                              <div style={{ alignItems: "flex-start" }}>
                                                <div>
                                                  <div>
                                                    <div>
                                                      <span
                                                        style={{
                                                          fontWeight: 400,
                                                          textOverflow: "ellipsis",
                                                          whiteSpace: "nowrap",
                                                          overflow: "hidden",
                                                          lineHeight: "20px",
                                                        }}
                                                      >
                                                        파트너
                                                      </span>
                                                    </div>
                                                    <span>
                                                      <div>파트너십 프로그램에 대해 자세히 알아보기</div>
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </a>
                                        </MenuSectionWrapper>
                                        <MenuSectionWrapper
                                          style={{
                                            borderColor: "transparent",
                                            height: "98px",
                                            padding: "16px 12px",
                                            marginRight: "28px",
                                            marginBottom: "14px",
                                            width: "274px",
                                          }}
                                        >
                                          <a href="/nonprofits">
                                            <div>
                                              <div style={{ alignItems: "flex-start" }}>
                                                <div>
                                                  <div>
                                                    <div>
                                                      <span
                                                        style={{
                                                          fontWeight: 400,
                                                          textOverflow: "ellipsis",
                                                          whiteSpace: "nowrap",
                                                          overflow: "hidden",
                                                          lineHeight: "20px",
                                                        }}
                                                      >
                                                        글로벌 이벤트
                                                      </span>
                                                    </div>
                                                    <span>
                                                      <div>
                                                        예정된 온라인 및 오프라인 이벤트에 참여해 새로운 인사이트를
                                                        확보하세요
                                                      </div>
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </a>
                                        </MenuSectionWrapper>
                                        <MenuSectionWrapper
                                          style={{
                                            borderColor: "transparent",
                                            height: "98px",
                                            padding: "16px 12px",
                                            marginRight: "28px",
                                            marginBottom: "14px",
                                            width: "274px",
                                          }}
                                        >
                                          <a href="/nonprofits">
                                            <div>
                                              <div style={{ alignItems: "flex-start" }}>
                                                <div>
                                                  <div>
                                                    <div>
                                                      <span
                                                        style={{
                                                          fontWeight: 400,
                                                          textOverflow: "ellipsis",
                                                          whiteSpace: "nowrap",
                                                          overflow: "hidden",
                                                          lineHeight: "20px",
                                                        }}
                                                      >
                                                        디지털 리프트
                                                      </span>
                                                    </div>
                                                    <span>
                                                      <div>
                                                        비영리단체가 기술을 통해 지속적인 영향을 미칠 수 있도록 지원
                                                      </div>
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </a>
                                        </MenuSectionWrapper>
                                      </SectionItems>
                                    </MenuSectionComponent>
                                  </MenuSection>
                                  <MenuSection style={{ paddingTop: "48px" }}>
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
                                        <span>탐색</span>
                                      </SectionTitle>
                                      <SectionItems
                                        style={{
                                          margin: "20px 0px",
                                          padding: "0px",
                                          gridTemplateRows: "repeat(5, auto)",
                                        }}
                                      >
                                        <MenuSectionWrapper
                                          style={{
                                            borderColor: "transparent",
                                            height: "98px",
                                            padding: "16px 12px",
                                            marginRight: "28px",
                                            marginBottom: "14px",
                                            width: "274px",
                                          }}
                                        >
                                          <a href="/nonprofits">
                                            <div>
                                              <div style={{ alignItems: "flex-start" }}>
                                                <div>
                                                  <div>
                                                    <div>
                                                      <span
                                                        style={{
                                                          fontWeight: 400,
                                                          textOverflow: "ellipsis",
                                                          whiteSpace: "nowrap",
                                                          overflow: "hidden",
                                                          lineHeight: "20px",
                                                        }}
                                                      >
                                                        템플릿 센터
                                                      </span>
                                                    </div>
                                                    <span>
                                                      <div>
                                                        지금 당장 시작할﻿ 수 있는 200개 이상의 템플릿과 워크플로우
                                                      </div>
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </a>
                                        </MenuSectionWrapper>
                                        <MenuSectionWrapper
                                          style={{
                                            borderColor: "transparent",
                                            height: "98px",
                                            padding: "16px 12px",
                                            marginRight: "28px",
                                            marginBottom: "14px",
                                            width: "274px",
                                          }}
                                        >
                                          <a href="/nonprofits">
                                            <div>
                                              <div style={{ alignItems: "flex-start" }}>
                                                <div>
                                                  <div>
                                                    <div>
                                                      <span
                                                        style={{
                                                          fontWeight: 400,
                                                          textOverflow: "ellipsis",
                                                          whiteSpace: "nowrap",
                                                          overflow: "hidden",
                                                          lineHeight: "20px",
                                                        }}
                                                      >
                                                        앱 마켓플레이스
                                                      </span>
                                                    </div>
                                                    <span>
                                                      <div>
                                                        미리 준비된 앱을 탐색하여 monday.com Work OS를 확장해보세요
                                                      </div>
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </a>
                                        </MenuSectionWrapper>
                                        <MenuSectionWrapper
                                          style={{
                                            borderColor: "transparent",
                                            height: "98px",
                                            padding: "16px 12px",
                                            marginRight: "28px",
                                            marginBottom: "14px",
                                            width: "274px",
                                          }}
                                        >
                                          <a href="/nonprofits">
                                            <div>
                                              <div style={{ alignItems: "flex-start" }}>
                                                <div>
                                                  <div>
                                                    <div>
                                                      <span
                                                        style={{
                                                          fontWeight: 400,
                                                          textOverflow: "ellipsis",
                                                          whiteSpace: "nowrap",
                                                          overflow: "hidden",
                                                          lineHeight: "20px",
                                                        }}
                                                      >
                                                        앱 개발
                                                      </span>
                                                    </div>
                                                    <span>
                                                      <div>앱 마켓플레이스를 위해 앱을 빌드할 때 알아야 할 모든 것</div>
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </a>
                                        </MenuSectionWrapper>
                                        <MenuSectionWrapper
                                          style={{
                                            borderColor: "transparent",
                                            height: "98px",
                                            padding: "16px 12px",
                                            marginRight: "28px",
                                            marginBottom: "14px",
                                            width: "274px",
                                          }}
                                        >
                                          <a href="/nonprofits">
                                            <div>
                                              <div style={{ alignItems: "flex-start" }}>
                                                <div>
                                                  <div>
                                                    <div>
                                                      <span
                                                        style={{
                                                          fontWeight: 400,
                                                          textOverflow: "ellipsis",
                                                          whiteSpace: "nowrap",
                                                          overflow: "hidden",
                                                          lineHeight: "20px",
                                                        }}
                                                      >
                                                        고객 사례
                                                      </span>
                                                    </div>
                                                    <span>
                                                      <div>
                                                        고객들이 monday.com으로 영향력을 발휘하는 방법을 알아보세요
                                                      </div>
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </a>
                                        </MenuSectionWrapper>
                                        <MenuSectionWrapper
                                          style={{
                                            borderColor: "transparent",
                                            height: "98px",
                                            padding: "16px 12px",
                                            marginRight: "28px",
                                            marginBottom: "14px",
                                            width: "274px",
                                          }}
                                        >
                                          <a href="/nonprofits">
                                            <div>
                                              <div style={{ alignItems: "flex-start" }}>
                                                <div>
                                                  <div>
                                                    <div>
                                                      <span
                                                        style={{
                                                          fontWeight: 400,
                                                          textOverflow: "ellipsis",
                                                          whiteSpace: "nowrap",
                                                          overflow: "hidden",
                                                          lineHeight: "20px",
                                                        }}
                                                      >
                                                        우리와 함께하세요
                                                      </span>
                                                    </div>
                                                    <span>
                                                      <div>영향을 미칠 준비가 되셨나요? 모든 포지션 탐색하기</div>
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </a>
                                        </MenuSectionWrapper>
                                      </SectionItems>
                                    </MenuSectionComponent>
                                  </MenuSection>
                                  <MenuSection
                                    style={{
                                      paddingTop: "48px",
                                      paddingBottom: "32px",
                                      backgroundColor: "#F0F3FF",
                                      paddingLeft: "54px",
                                      flex: 1,
                                    }}
                                  >
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
                                        <span>추천 기사</span>
                                      </SectionTitle>
                                      <SectionItems
                                        style={{
                                          margin: "20px 0px",
                                          padding: "0px",
                                          gridTemplateRows: "repeat(2, auto)",
                                        }}
                                      >
                                        <div
                                          style={{
                                            border: "none",
                                            height: "unset",
                                            padding: "0",
                                            marginRight: "18px",
                                            marginBottom: "20px",
                                            width: "280px",
                                            borderRadius: "4px",
                                          }}
                                        >
                                          <a
                                            style={{
                                              display: "flex",
                                              height: "100%",
                                              width: "100%",
                                              cursor: "pointer",
                                              alignItems: "center",
                                              transition: "background-color 200ms ease 0s",
                                              textDecoration: "none",
                                              color: "rgb(51, 51, 51)",
                                            }}
                                            href="/customers/oscar"
                                            target="_self"
                                            rel="noreferrer"
                                          >
                                            <div style={{ display: "flex", flexDirection: "column" }}>
                                              <div
                                                style={{
                                                  display: "flex",
                                                  flexDirection: "column",
                                                  backgroundColor: "#ffffff",
                                                }}
                                              >
                                                <picture className="jsx-4212101279 picture-component">
                                                  <img
                                                    style={{
                                                      width: "100%",
                                                      height: "115px",
                                                      background: "#c4c4c4",
                                                      borderTopLeftRadius: "4px",
                                                      borderTopRightRadius: "4px",
                                                    }}
                                                    alt="customer story"
                                                    className="jsx-4212101279 "
                                                    src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/header/customer_story.png"
                                                  />
                                                </picture>
                                                <div className="jsx-1475715785 menu-item-text-and-tags-wrapper">
                                                  <div
                                                    style={{
                                                      padding: "8px 20px 16px",
                                                      display: "flex",
                                                      flexDirection: "column",
                                                    }}
                                                  >
                                                    <span
                                                      style={{
                                                        fontSize: "14px",
                                                        lineHeight: "19px",
                                                        color: "#323338",
                                                        marginTop: "8px",
                                                        overflow: "hidden",
                                                        textOverflow: "ellipsis",
                                                        display: "-webkit-box",
                                                        fontWeight: 300,
                                                      }}
                                                    >
                                                      <div className="monday-markup-language-component">
                                                        Oscar는 monday.com Work OS로 매월 1,850시간과 $50,000를
                                                        절약합니다.
                                                      </div>
                                                    </span>
                                                    <div style={{ marginTop: "16px" }}>
                                                      <div
                                                        style={{
                                                          fontSize: "14px",
                                                          fontWeight: "700",
                                                          lineHeight: "24px",
                                                          display: "flex",
                                                        }}
                                                      >
                                                        <a
                                                          href="/customers/oscar"
                                                          target="_self"
                                                          className="jsx-2709791578 with-underline"
                                                          style={{
                                                            color: "rgb(51, 51, 51)",
                                                            backgroundSize: "100% 1px,0 1px",
                                                            backgroundPosition: "100% 100%,0 100%",
                                                            backgroundRepeat: "no-repeat",
                                                            transition: "background-size 0.3s",
                                                            display: "flex",
                                                            alignItems: "center",
                                                            textDecoration: "none",
                                                            borderBottom: "1px solid lightgray",
                                                            background:
                                                              "linear-gradient(to right,rgba(51, 51, 51, 0.4),rgba(51, 51, 51, 0.4)),linear-gradient(to right,#333333,#333333,#333333);",
                                                          }}
                                                        >
                                                          <span className="jsx-2709791578 secondary-button-text">
                                                            더 알아보기
                                                          </span>
                                                          <span
                                                            style={{
                                                              paddingLeft: "8px",
                                                              paddingRight: "4px",
                                                              marginRight: "-4px",
                                                              transition: "padding 0.3s ease-in-out",
                                                            }}
                                                          >
                                                            <svg
                                                              width="10"
                                                              height="14"
                                                              viewBox="0 0 9 7"
                                                              xmlns="http://www.w3.org/2000/svg"
                                                              style={{
                                                                height: "10px",
                                                                width: "12px",
                                                              }}
                                                            >
                                                              <path
                                                                fillRule="evenodd"
                                                                clipRule="evenodd"
                                                                d="M4.628.616a.5.5 0 1 0-.64.768L6.203 3.23H.5a.5.5 0 0 0 0 1h5.612L3.988 6a.5.5 0 1 0 .64.769l3.23-2.693a.5.5 0 0 0 0-.768L4.628.616z"
                                                              ></path>
                                                            </svg>
                                                          </span>
                                                        </a>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </a>
                                        </div>
                                        <div
                                          style={{
                                            border: "none",
                                            height: "unset",
                                            padding: "0",
                                            marginRight: "18px",
                                            marginBottom: "20px",
                                            width: "280px",
                                            borderRadius: "4px",
                                          }}
                                        >
                                          <a
                                            style={{
                                              display: "flex",
                                              height: "100%",
                                              width: "100%",
                                              cursor: "pointer",
                                              alignItems: "center",
                                              transition: "background-color 200ms ease 0s",
                                              textDecoration: "none",
                                              color: "rgb(51, 51, 51)",
                                            }}
                                            href="/customers/oscar"
                                            target="_self"
                                            rel="noreferrer"
                                          >
                                            <div style={{ display: "flex", flexDirection: "column" }}>
                                              <div
                                                style={{
                                                  display: "flex",
                                                  flexDirection: "column",
                                                  backgroundColor: "#ffffff",
                                                }}
                                              >
                                                <picture className="jsx-4212101279 picture-component">
                                                  <img
                                                    style={{
                                                      width: "100%",
                                                      height: "115px",
                                                      background: "#c4c4c4",
                                                      borderTopLeftRadius: "4px",
                                                      borderTopRightRadius: "4px",
                                                    }}
                                                    alt="customer story"
                                                    className="jsx-4212101279 "
                                                    src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/header/big-Gantt_charts_explained.jpg"
                                                  />
                                                </picture>
                                                <div className="jsx-1475715785 menu-item-text-and-tags-wrapper">
                                                  <div
                                                    style={{
                                                      padding: "8px 20px 16px",
                                                      display: "flex",
                                                      flexDirection: "column",
                                                    }}
                                                  >
                                                    <span
                                                      style={{
                                                        fontSize: "14px",
                                                        lineHeight: "19px",
                                                        color: "#323338",
                                                        marginTop: "8px",
                                                        overflow: "hidden",
                                                        textOverflow: "ellipsis",
                                                        display: "-webkit-box",
                                                        fontWeight: 300,
                                                      }}
                                                    >
                                                      <div className="monday-markup-language-component">
                                                        간트 차트 설명 [+ 나만의 차트 만들기 3단계]
                                                      </div>
                                                    </span>
                                                    <div style={{ marginTop: "16px" }}>
                                                      <div
                                                        style={{
                                                          fontSize: "14px",
                                                          fontWeight: "700",
                                                          lineHeight: "24px",
                                                          display: "flex",
                                                        }}
                                                      >
                                                        <a
                                                          href="/customers/oscar"
                                                          target="_self"
                                                          className="jsx-2709791578 with-underline"
                                                          style={{
                                                            color: "rgb(51, 51, 51)",
                                                            backgroundSize: "100% 1px,0 1px",
                                                            backgroundPosition: "100% 100%,0 100%",
                                                            backgroundRepeat: "no-repeat",
                                                            transition: "background-size 0.3s",
                                                            display: "flex",
                                                            alignItems: "center",
                                                            textDecoration: "none",
                                                            borderBottom: "1px solid lightgray",
                                                            background:
                                                              "linear-gradient(to right,rgba(51, 51, 51, 0.4),rgba(51, 51, 51, 0.4)),linear-gradient(to right,#333333,#333333,#333333);",
                                                          }}
                                                        >
                                                          <span className="jsx-2709791578 secondary-button-text">
                                                            더 알아보기
                                                          </span>
                                                          <span
                                                            style={{
                                                              paddingLeft: "8px",
                                                              paddingRight: "4px",
                                                              marginRight: "-4px",
                                                              transition: "padding 0.3s ease-in-out",
                                                            }}
                                                          >
                                                            <svg
                                                              width="10"
                                                              height="14"
                                                              viewBox="0 0 9 7"
                                                              xmlns="http://www.w3.org/2000/svg"
                                                              style={{
                                                                height: "10px",
                                                                width: "12px",
                                                              }}
                                                            >
                                                              <path
                                                                fillRule="evenodd"
                                                                clipRule="evenodd"
                                                                d="M4.628.616a.5.5 0 1 0-.64.768L6.203 3.23H.5a.5.5 0 0 0 0 1h5.612L3.988 6a.5.5 0 1 0 .64.769l3.23-2.693a.5.5 0 0 0 0-.768L4.628.616z"
                                                              ></path>
                                                            </svg>
                                                          </span>
                                                        </a>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </a>
                                        </div>
                                        <MenuSectionWrapper
                                          style={{
                                            border: "none",
                                            height: "unset",
                                            padding: "0",
                                            marginRight: "18px",
                                            marginBottom: "20px",
                                            width: "280px",
                                          }}
                                        ></MenuSectionWrapper>
                                      </SectionItems>
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
          <MobileWrapper>
            <MobileComponent>
              <MobileHeader>
                <MobileContentWrapper>
                  <MobileContent>
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
                    <MobileRightSection>
                      <div
                        onClick={() => {
                          setIsOpen(!isOpen);
                        }}
                      >
                        <HamburgerMenu>
                          <HamburgerMenuLine isOpen={isOpen} />
                          <HamburgerMenuLine isOpen={isOpen} />
                          <HamburgerMenuLine isOpen={isOpen} />
                          <HamburgerMenuLine isOpen={isOpen} />
                        </HamburgerMenu>
                      </div>
                    </MobileRightSection>
                  </MobileContent>
                </MobileContentWrapper>
              </MobileHeader>
              <MobileComponentWrapper isOpen={isOpen}>
                <MobileMenuWrapper>
                  <MobileMenu>
                    <MobileTitleWrapper onClick={onClickSubMenu(0)}>
                      <span style={{ color: subMenu === 0 ? "#595ad4" : "#535768" }}>제품</span>
                      <svg
                        style={{ transform: subMenu === 0 ? "rotate(180deg)" : "rotate(0deg)" }}
                        width="256"
                        height="256"
                        viewBox="0 0 256 256"
                        xmlns="http://www.w3.org/2000/svg"
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
                    </MobileTitleWrapper>
                    <MobileMenuLinks style={{ height: subMenu === 0 ? "503px" : "0px" }}>
                      <div>
                        <SectionWrapper>
                          <SectionLink>팀 니즈 맞춤형</SectionLink>
                          <div>
                            <a href="/work-management" target="_self">
                              <svg
                                width="25"
                                height="25"
                                viewBox="0 0 25 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M2.226 21.405c-1.403-.956-1.744-2.838-.762-4.204l8.29-11.526a3.123 3.123 0 0 1 2.56-1.287 3.123 3.123 0 0 1 2.556 1.287l8.29 11.53c.983 1.365.642 3.247-.76 4.204-1.403.956-3.336.624-4.318-.742l-5.77-8.024-5.769 8.021c-.982 1.366-2.915 1.698-4.317.741z"
                                  fill="#6C6CFF"
                                ></path>
                                <path
                                  d="M2.228 3.893C.825 4.849.484 6.73 1.466 8.097l8.286 11.521c.604.841 1.57 1.29 2.55 1.288a3.124 3.124 0 0 0 2.567-1.288l8.285-11.521c.982-1.366.642-3.248-.761-4.204-1.403-.956-3.336-.624-4.318.741l-5.765 8.017-5.765-8.017C5.563 3.27 3.63 2.937 2.228 3.893z"
                                  fill="url(#paint0_linear_512_2135)"
                                ></path>
                                <path
                                  d="M8.525 7.386L4.74 12.649l3.785 5.263 3.785-5.263-3.785-5.263z"
                                  fill="#7E7EFF"
                                ></path>
                                <defs>
                                  <linearGradient
                                    id="paint0_linear_512_2135"
                                    x1="14.092"
                                    y1="12.126"
                                    x2="13.145"
                                    y2="21.214"
                                    gradientUnits="userSpaceOnUse"
                                  >
                                    <stop stopColor="#8F8FFF"></stop>
                                    <stop offset="1" stopColor="#BABAFD"></stop>
                                  </linearGradient>
                                </defs>
                              </svg>
                              monday work management
                            </a>
                            <a href="/crm" target="_self">
                              <svg
                                width="25"
                                height="25"
                                viewBox="0 0 25 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M16.646 12.818a.563.563 0 0 1-.572.595H8.926a.563.563 0 0 0-.572.595 8.458 8.458 0 0 0 1.87 4.743 8.32 8.32 0 0 0 4.817 2.914 8.264 8.264 0 0 0 5.554-.832 8.385 8.385 0 0 0 3.77-4.2c.739-1.798.836-3.8.276-5.662a8.408 8.408 0 0 0-3.345-4.553 8.272 8.272 0 0 0-7.124-1.032 8.295 8.295 0 0 0-1.691.747 8.374 8.374 0 0 1 3.079 3.131l.002-.036.017.03a8.472 8.472 0 0 1 1.067 3.56z"
                                  fill="#00A0A0"
                                ></path>
                                <ellipse cx="8.333" cy="13.414" rx="8.333" ry="8.413" fill="#fff"></ellipse>
                                <ellipse
                                  cx="8.333"
                                  cy="13.414"
                                  rx="8.333"
                                  ry="8.413"
                                  fill="url(#paint0_linear_1_20)"
                                ></ellipse>
                                <path
                                  d="M12.502 20.7a8.425 8.425 0 0 0 4.165-7.287c.007-.34-.021-.595-.021-.595a.568.568 0 0 1-.572.595H8.926a.563.563 0 0 0-.572.595 8.459 8.459 0 0 0 1.87 4.743 8.353 8.353 0 0 0 2.277 1.95z"
                                  fill="url(#paint1_linear_1_20)"
                                ></path>
                                <defs>
                                  <linearGradient
                                    id="paint0_linear_1_20"
                                    x1="2.538"
                                    y1="8.363"
                                    x2="16.723"
                                    y2="15.544"
                                    gradientUnits="userSpaceOnUse"
                                  >
                                    <stop stopColor="#00D2D2"></stop>
                                    <stop offset="1" stopColor="#00D2D2" stopOpacity=".29"></stop>
                                  </linearGradient>
                                  <linearGradient
                                    id="paint1_linear_1_20"
                                    x1="17.571"
                                    y1="17.755"
                                    x2="4.308"
                                    y2="15.018"
                                    gradientUnits="userSpaceOnUse"
                                  >
                                    <stop stopColor="#00A0A0"></stop>
                                    <stop offset="1" stopColor="#00D2D2"></stop>
                                  </linearGradient>
                                </defs>
                              </svg>
                              monday sales CRM
                            </a>
                            <a href="/dev" target="_self">
                              <svg
                                width="25"
                                height="25"
                                viewBox="0 0 25 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clipPath="url(#clip0_1_22)">
                                  <path
                                    d="M13.319 8.717l-.045-5.75c-.488-.052-.976-.029-1.464.011-4.337.407-7.685 3.951-7.594 8.186.074 3.428 2.281 5.681 4.007 6.92 2.458 1.763 5.356 2.494 8.334 2.81 1.754.185 3.602.27 4.904.241l1.483-.03a.567.567 0 0 0 .451-.237l1.645-2.311a.565.565 0 0 0-.012-.673l-1.714-2.23a.567.567 0 0 0-.46-.22l-1.515.029c-.99.021-2.572-.045-4.119-.21-1.925-.203-3.833-.563-5.431-1.71-1.04-.746-1.622-1.57-1.642-2.506-.024-1.124.774-2.083 1.866-2.35a2.435 2.435 0 0 1 1.306.03z"
                                    fill="url(#paint0_linear_1_22)"
                                  ></path>
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M12.514 8.05c.006.312.268.553.575.614 1.103.22 1.942 1.144 1.966 2.268.02.937-.526 1.784-1.532 2.574-1.565 1.228-3.422 1.653-5.354 1.942-1.538.23-3.115.364-4.106.385l-1.445.022a.567.567 0 0 0-.529.387L.563 20.82a.566.566 0 0 0 .548.744l2.128-.037.946-.02c1.303-.028 3.145-.192 4.89-.452 1.592-.238 3.515-.613 4.836-1.207l.004-.001a13.844 13.844 0 0 0 3.365-1.956c1.67-1.311 3.78-3.657 3.706-7.085-.092-4.26-3.63-7.672-8.015-7.857a.54.54 0 0 0-.555.56l.098 4.541z"
                                    fill="url(#paint1_linear_1_22)"
                                  ></path>
                                  <path
                                    opacity=".6"
                                    d="M19.6 15.433a40.316 40.316 0 0 1-2.38-.18c-1.583-.167-3.153-.44-4.55-1.17-1.37.796-2.91 1.127-4.5 1.365-.81.12-1.63.215-2.37.28.742 1.009 1.633 1.789 2.423 2.356 1.428 1.024 3.005 1.7 4.66 2.15a9.734 9.734 0 0 0 1.028-.387l.004-.001a13.843 13.843 0 0 0 3.364-1.956c.766-.6 1.623-1.418 2.32-2.457z"
                                    fill="#019152"
                                  ></path>
                                </g>
                                <defs>
                                  <linearGradient
                                    id="paint0_linear_1_22"
                                    x1="8.643"
                                    y1="10.43"
                                    x2="13.867"
                                    y2="19.303"
                                    gradientUnits="userSpaceOnUse"
                                  >
                                    <stop stopColor="#00C875"></stop>
                                    <stop offset="1" stopColor="#2EAE67"></stop>
                                  </linearGradient>
                                  <linearGradient
                                    id="paint1_linear_1_22"
                                    x1="14.134"
                                    y1="11.595"
                                    x2="-2.952"
                                    y2="22.154"
                                    gradientUnits="userSpaceOnUse"
                                  >
                                    <stop stopColor="#00CA72"></stop>
                                    <stop offset="1" stopColor="#C0FFE5"></stop>
                                  </linearGradient>
                                  <clipPath id="clip0_1_22">
                                    <path fill="#fff" d="M0 0h25v25H0z"></path>
                                  </clipPath>
                                </defs>
                              </svg>
                              monday dev
                            </a>
                            <a href="/marketing" target="_self">
                              <svg
                                width="25"
                                height="25"
                                viewBox="0 0 25 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clipPath="url(#clip0_1_21)">
                                  <path
                                    d="M9.455 11.386v9.678c0 .362.292.654.653.654h4.784a.654.654 0 0 0 .654-.654v-8.791a1.681 1.681 0 0 1 3.363 0v8.791c0 .362.293.654.654.654h4.783a.654.654 0 0 0 .654-.654v-9.678C25 7.307 21.52 4 17.227 4c-4.293 0-7.772 3.307-7.772 7.386z"
                                    fill="#CA0C6B"
                                  ></path>
                                  <path
                                    d="M0 11.386v9.678c0 .362.293.654.654.654h4.783a.654.654 0 0 0 .654-.654v-8.791a1.681 1.681 0 0 1 3.363 0v8.791c0 .362.293.654.654.654h4.784a.654.654 0 0 0 .654-.654v-9.678C15.546 7.307 12.066 4 7.773 4 3.48 4 0 7.307 0 11.386z"
                                    fill="url(#paint0_linear_1_21)"
                                  ></path>
                                  <path
                                    d="M0 16.026h6.09v5.153a.54.54 0 0 1-.54.54H.54a.54.54 0 0 1-.54-.54v-5.153zM9.455 16.026h6.09v5.153a.54.54 0 0 1-.539.54H9.995a.54.54 0 0 1-.54-.54v-5.153zM18.91 16.026H25v5.153a.54.54 0 0 1-.539.54h-5.01a.54.54 0 0 1-.54-.54v-5.153z"
                                    fill="#F8C3DD"
                                  ></path>
                                </g>
                                <defs>
                                  <linearGradient
                                    id="paint0_linear_1_21"
                                    x1="-.507"
                                    y1="20.464"
                                    x2="24.777"
                                    y2="17.216"
                                    gradientUnits="userSpaceOnUse"
                                  >
                                    <stop stopColor="#FF158A"></stop>
                                    <stop offset=".766" stopColor="#FF158A" stopOpacity=".5"></stop>
                                  </linearGradient>
                                  <clipPath id="clip0_1_21">
                                    <path fill="#fff" d="M0 0h25v25H0z"></path>
                                  </clipPath>
                                </defs>
                              </svg>
                              monday marketer
                            </a>
                            <a href="/project-management" target="_self">
                              <svg
                                width="25"
                                height="25"
                                viewBox="0 0 25 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clipPath="url(#clip0_1_23)">
                                  <path
                                    d="M6.25 4.333c0-.583.308-1.12.807-1.412L11.693.218a1.6 1.6 0 0 1 1.614 0l4.636 2.703c.5.291.807.83.807 1.412v6.347l-6.25 3.643-6.25-3.643V4.333z"
                                    fill="url(#paint0_linear_1_23)"
                                  ></path>
                                  <path
                                    d="M6.25 10.68c-1.81 1.062-3.628 2.112-5.443 3.17-.5.291-.807.83-.807 1.412v5.405c0 .582.308 1.12.807 1.412l4.636 2.703c.5.29 1.115.29 1.614 0l5.443-3.17v-7.288L6.25 10.68z"
                                    fill="url(#paint1_linear_1_23)"
                                  ></path>
                                  <path
                                    d="M24.193 13.85c.5.29.807.83.807 1.412v5.405c0 .582-.308 1.12-.807 1.412l-4.636 2.703c-.5.29-1.115.29-1.614 0l-5.443-3.17v-7.288l6.25-3.644c1.811 1.062 3.629 2.112 5.443 3.17z"
                                    fill="url(#paint2_linear_1_23)"
                                  ></path>
                                  <path
                                    d="M6.25 11.15c0-.29.154-.56.404-.706l5.443-3.173a.8.8 0 0 1 .807 0l5.442 3.173c.25.146.404.415.404.706v6.347c0 .291-.154.56-.404.706l-5.442 3.173a.8.8 0 0 1-.807 0l-5.443-3.173a.817.817 0 0 1-.404-.706V11.15z"
                                    fill="url(#paint3_linear_1_23)"
                                    style={{ mixBlendMode: "multiply" }}
                                  ></path>
                                </g>
                                <defs>
                                  <linearGradient
                                    id="paint0_linear_1_23"
                                    x1="6.25"
                                    y1="3.401"
                                    x2="18.806"
                                    y2="10.585"
                                    gradientUnits="userSpaceOnUse"
                                  >
                                    <stop stopColor="#FB9000"></stop>
                                    <stop offset="1" stopColor="#FFCB00"></stop>
                                  </linearGradient>
                                  <linearGradient
                                    id="paint1_linear_1_23"
                                    x1="12.5"
                                    y1="14.318"
                                    x2="-.056"
                                    y2="21.502"
                                    gradientUnits="userSpaceOnUse"
                                  >
                                    <stop stopColor="#FB9000"></stop>
                                    <stop offset="1" stopColor="#FFCB00"></stop>
                                  </linearGradient>
                                  <linearGradient
                                    id="paint2_linear_1_23"
                                    x1="12.5"
                                    y1="14.317"
                                    x2="25.056"
                                    y2="21.502"
                                    gradientUnits="userSpaceOnUse"
                                  >
                                    <stop stopColor="#FB9000"></stop>
                                    <stop offset="1" stopColor="#FFCB00"></stop>
                                  </linearGradient>
                                  <linearGradient
                                    id="paint3_linear_1_23"
                                    x1="12.5"
                                    y1="7.162"
                                    x2="12.5"
                                    y2="21.485"
                                    gradientUnits="userSpaceOnUse"
                                  >
                                    <stop stopColor="#FDAB3D"></stop>
                                    <stop offset="1" stopColor="#FFCB00" stopOpacity=".51"></stop>
                                  </linearGradient>
                                  <clipPath id="clip0_1_23">
                                    <path fill="#fff" d="M0 0h25v25H0z"></path>
                                  </clipPath>
                                </defs>
                              </svg>
                              monday projects
                            </a>
                          </div>
                        </SectionWrapper>
                        <SectionWrapper>
                          <SectionLink>자세한 내용은 monday.com를 참조해주세요.</SectionLink>
                          <div>
                            <a href="https://workforms.monday.com/" target="_blank" rel="noreferrer">
                              WorkForms
                            </a>
                            <a href="//workcanvas.com/" target="_blank" rel="noreferrer">
                              Canvas
                            </a>
                          </div>
                        </SectionWrapper>
                      </div>
                    </MobileMenuLinks>
                  </MobileMenu>
                  <MobileMenu>
                    <MobileTitleWrapper onClick={onClickSubMenu(1)}>
                      <span style={{ color: subMenu === 1 ? "#595ad4" : "#535768" }}>활용 사례</span>
                      <svg
                        style={{ transform: subMenu === 1 ? "rotate(180deg)" : "rotate(0deg)" }}
                        width="256"
                        height="256"
                        viewBox="0 0 256 256"
                        xmlns="http://www.w3.org/2000/svg"
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
                    </MobileTitleWrapper>
                    <MobileMenuLinks style={{ height: subMenu === 1 ? "922px" : "0px" }}>
                      <div>
                        <SectionWrapper>
                          <SectionLink>팀별</SectionLink>
                          <div>
                            <a href="/marketing" target="_self">
                              마케팅
                            </a>
                            <a href="/dev" target="_self">
                              개발자 모드
                            </a>
                            <a href="/operations" target="_self">
                              운영
                            </a>
                            <a href="/use-cases/hr-management-software" target="_self">
                              HR
                            </a>
                            <a href="/crm" target="_self">
                              영업
                            </a>
                            <a href="/project-management" target="_self">
                              프로젝트 관리
                            </a>
                            <a href="/use-cases/it-operations" target="_self">
                              IT
                            </a>
                          </div>
                        </SectionWrapper>
                        <SectionWrapper>
                          <SectionLink>사업 규모별</SectionLink>
                          <div>
                            <a href="/enterprise/" target="_self">
                              엔터프라이즈
                            </a>
                            <a href="/smb/" target="_self">
                              소규모 비즈니스
                            </a>
                            <a href="/nonprofits" target="_self">
                              비영리
                            </a>
                          </div>
                        </SectionWrapper>
                        <SectionWrapper>
                          <SectionLink>워크플로우 별</SectionLink>
                          <div>
                            <a href="/project-management" target="_self">
                              프로젝트 관리
                            </a>
                            <a href="/use-cases/remote-work" target="_self">
                              재택 근무
                            </a>
                            <a href="/inventory-tracking" target="_self">
                              재고 추적
                            </a>
                            <a href="/templates/" target="_self">
                              200개 이상의 워크플로우
                            </a>
                          </div>
                        </SectionWrapper>
                      </div>
                    </MobileMenuLinks>
                  </MobileMenu>
                  <MobileMenu>
                    <MobileTitleWrapper onClick={onClickSubMenu(2)}>
                      <span style={{ color: subMenu === 2 ? "#595ad4" : "#535768" }}>기능</span>
                      <svg
                        style={{ transform: subMenu === 2 ? "rotate(180deg)" : "rotate(0deg)" }}
                        width="256"
                        height="256"
                        viewBox="0 0 256 256"
                        xmlns="http://www.w3.org/2000/svg"
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
                    </MobileTitleWrapper>
                    <MobileMenuLinks style={{ height: subMenu === 2 ? "419px" : "0px" }}>
                      <div>
                        <SectionWrapper>
                          <SectionLink>주요 기능</SectionLink>
                          <div>
                            <a href="/features/dashboards" target="_self">
                              대시보드
                            </a>
                            <a href="/integrations/" target="_self">
                              연동
                            </a>
                            <a href="/features/automations" target="_self">
                              자동화
                            </a>
                            <a href="/features/gantt" target="_self">
                              간트
                            </a>
                            <a href="/features/kanban" target="_self">
                              칸반
                            </a>
                            <a href="/workdocs" target="_self">
                              Docs
                            </a>
                            <a href="/features/files" target="_self">
                              파일
                            </a>
                          </div>
                        </SectionWrapper>
                      </div>
                    </MobileMenuLinks>
                  </MobileMenu>
                  <MobileMenu>
                    <MobileTitleWrapper onClick={onClickSubMenu(3)}>
                      <span style={{ color: subMenu === 3 ? "#595ad4" : "#535768" }}>리소스</span>
                      <svg
                        style={{ transform: subMenu === 3 ? "rotate(180deg)" : "rotate(0deg)" }}
                        width="256"
                        height="256"
                        viewBox="0 0 256 256"
                        xmlns="http://www.w3.org/2000/svg"
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
                    </MobileTitleWrapper>
                    <MobileMenuLinks style={{ height: subMenu === 3 ? "874px" : "0px" }}>
                      <div>
                        <SectionWrapper>
                          <SectionLink>더 알아보기</SectionLink>
                          <div>
                            <a href="/helpcenter" target="_self">
                              지원 센터
                            </a>
                            <a href="/p/about/" target="_self">
                              About us
                            </a>
                            <a href="/webinars/" target="_self">
                              웨비나
                            </a>
                            <a href="//monday.com/blog" target="_self">
                              블로그
                            </a>
                          </div>
                        </SectionWrapper>
                        <SectionWrapper>
                          <SectionLink>지원</SectionLink>
                          <div>
                            <a href="/helpcenter" target="_self">
                              연중 무휴 24시간 지원
                            </a>
                            <a href="/partnership/" target="_self">
                              파트너
                            </a>
                            <a href="/p/events-hub/" target="_self">
                              글로벌 이벤트
                            </a>
                            <a href="//digital-lift.org/" target="_self">
                              디지털 리프트
                            </a>
                          </div>
                        </SectionWrapper>
                        <SectionWrapper>
                          <SectionLink>탐색</SectionLink>
                          <div>
                            <a href="/templates/" target="_self">
                              템플릿 센터
                            </a>
                            <a href="/marketplace" target="_self">
                              앱 마켓플레이스
                            </a>
                            <a href="/appsdeveloper" target="_self">
                              앱 개발
                            </a>
                            <a href="/why-monday/stories/" target="_self">
                              고객 사례
                            </a>
                            <a href="/careers/" target="_self">
                              우리와 함께하세요
                            </a>
                          </div>
                        </SectionWrapper>
                      </div>
                    </MobileMenuLinks>
                  </MobileMenu>
                  <MobileLink href="/pricing/">가격</MobileLink>
                  <MobileLink href="/sales/contact-us?from=header&source=Website%20-%20Contact%20Sales">
                    영업팀에 문의
                  </MobileLink>
                  <MobileLink href="//auth.monday.com/login">로그인</MobileLink>
                  <MobileAppStoreWrapper>
                    <MobileAppStore>
                      <picture>
                        <img
                          style={{ width: "168px" }}
                          alt="app store"
                          src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/apps/app_store.png"
                        />
                      </picture>
                    </MobileAppStore>
                  </MobileAppStoreWrapper>
                </MobileMenuWrapper>
              </MobileComponentWrapper>
            </MobileComponent>
          </MobileWrapper>
        </div>
      </div>
    </div>
  );
}

export default Header;
