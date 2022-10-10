import React, { useState } from "react";
import styled from "styled-components";
import productData from "../../constant/productData";

const Wrapper = styled.div`
  padding-top: 64px;
  padding-bottom: 30px;
`;

const ParagraphComponent = styled.div`
  max-width: 1440px;
  margin: auto;
`;

const ParagraphWrapper = styled.div`
  max-width: 1100px;
  margin: auto;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  padding: 0px 32px;
`;

const Paragraph = styled.div`
  text-align: center;
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

const BodyWrapper = styled.div`
  & > div {
    font-size: 20px;
    line-height: 32px;
    margin: 0;
    word-break: break-word;
    font-weight: 300;
  }
`;

const ProductCardFull = styled.div`
  display: unset;
`;

const ProductCardMedium = styled.div`
  display: unset;
`;

const MediumComponent = styled.div`
  max-width: 1440px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding-top: 64px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
`;

const VerticalTabWrapper = styled.div`
  z-index: 100;
`;

const VerticalTabs = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
`;

const Tabs = styled.div`
  padding-top: 0px;
  width: 350px;

  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
`;

const TabWrapper = styled.div`
  background-color: #f6f7fb;
  border-radius: 8px 0px 0px 8px;

  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  position: relative;
  width: 100%;
`;

const Tab = styled.div<{ isSelected: boolean; color: string }>`
  padding: 46px 24px;
  border-radius: 8px 0px 0px 8px;

  height: 40px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  cursor: pointer;
  color: #383b45;
  font-size: 16px;

  background-color: ${({ isSelected }) => (isSelected ? "#ffffff" : "#f6f7fb")};
  box-shadow: ${({ isSelected }) => (isSelected ? "-10px 0px 10px 1px rgb(29 140 242 / 16%)" : "")};
  z-index: ${({ isSelected }) => (isSelected ? 200 : "")};
  border-left: ${({ isSelected }) => (isSelected ? "5px solid" : "0px solid")};
  border-color: ${({ color }) => color};
`;

const TabImage = styled.div`
  & > picture > img {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    max-height: 30px;
    padding-left: 12px;
    border-style: none;
  }
`;

const TabPanel = styled.div`
  margin-left: -1px;
  padding: 0px 0px;

  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  border-radius: 4px;
`;

const CardMedium = styled.div`
  width: 650px;
  z-index: 100;
  background-color: white;
  box-shadow: 0px 0px 10px 1px rgb(29 140 242 / 16%);
  border-radius: 0px 8px 8px 0px;
  color: #333333;
  position: relative;
`;

const CardContent = styled.div`
  padding: 32px 58px;
  position: relative;
`;

const CardHeader = styled.div`
  margin-bottom: 32px;
`;

const CardHeaderImage = styled.div`
  height: 51px;
  margin-bottom: 5px;
  & > picture > img {
    max-height: 48px;
    border-style: none;
  }
`;

const CardHeaderSubTitle = styled.div`
  color: #676879;
  font-size: 14px;
`;

const CardBody = styled.div`
  font-weight: lighter;
  line-height: 1.5;
  width: 90%;
`;

const CardDivider = styled.div<{ color: string }>`
  box-sizing: content-box;
  border-width: 1px;
  border-style: solid;
  border-image: linear-gradient(to right, #ff158aff, #ff158a00);
  border-image-slice: 1;
  margin-bottom: 20px;
  margin-top: 32px;
  margin-bottom: 32px;

  border-image-source: ${({ color }) => `linear-gradient(to right, ${color}, ${color + "00"})`};
`;

const CardUseCases = styled.div`
  width: 400px;
`;
const CardUseTitle = styled.div`
  margin-bottom: 12px;
  font-size: 14px;
`;

const CardUseCasesBullet = styled.div`
  display: inline-grid;
  grid-template-columns: max-content max-content;
  -webkit-column-gap: 20px;
  column-gap: 20px;
  row-gap: 10px;
  margin-bottom: 10px;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
`;

const Bullet = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 5px;
  font-size: 14px;
`;

const BulletIcon = styled.div<{ color: string }>`
  margin-right: 5px;
  color: ${({ color }) => color};
`;

const BulletText = styled.div``;

const ButtonWrapper = styled.div`
  -webkit-box-pack: start;
  justify-content: flex-start;
  padding-top: 20px;
`;

const Button = styled.div`
  font-size: 14px;
  margin-left: 26px;
  font-weight: 700;
  line-height: 24px;
  display: flex;

  & > a {
    color: rgb(51, 51, 51);
    --underline-color: #333333;
    --underline-color-with-opacity: rgba(51, 51, 51, 0.4);
    background: unset;

    font-weight: 400;
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

const ProductCardSmall = styled.div`
  display: unset;
`;

function ProductInfomation(): JSX.Element {
  const [productIndex, setProductIndex] = useState<number>(0);

  const onClickProduct = (index: number) => () => {
    setProductIndex(index);
  };

  return (
    <React.Fragment>
      <Wrapper>
        <ParagraphComponent>
          <ParagraphWrapper>
            <Paragraph>
              <TitleWrapper>
                <CoreTitle>
                  워크플로우를 <span>최대한</span> 활용하세요
                </CoreTitle>
              </TitleWrapper>
              <BodyWrapper>
                <div>해당 산업에 맞춘 end-to-end 워크플로우를 쉽게 시작할 수 있습니다.</div>
              </BodyWrapper>
            </Paragraph>
          </ParagraphWrapper>
        </ParagraphComponent>
      </Wrapper>
      <div>
        <div>
          <ProductCardFull></ProductCardFull>
          <ProductCardMedium>
            <MediumComponent>
              <VerticalTabWrapper>
                <VerticalTabs>
                  <Tabs>
                    <TabWrapper>
                      {productData.map((data, i) => (
                        <Tab
                          onClick={onClickProduct(i)}
                          key={`product-tab-medium-${i}`}
                          isSelected={productIndex === i}
                          color={data.color}
                        >
                          <TabImage>
                            <picture>
                              <img src={data.imageURL} alt="" />
                            </picture>
                          </TabImage>
                        </Tab>
                      ))}
                    </TabWrapper>
                  </Tabs>
                  <TabPanel>
                    <CardMedium>
                      <CardContent>
                        <CardHeader>
                          <CardHeaderImage>
                            <picture>
                              <img src={productData[productIndex].titleURL} alt="" />
                            </picture>
                          </CardHeaderImage>
                          <CardHeaderSubTitle>{productData[productIndex].subTitle}</CardHeaderSubTitle>
                        </CardHeader>
                        <div>
                          <CardBody>{productData[productIndex].body}</CardBody>
                          <CardDivider color={productData[productIndex].color} />
                          <CardUseCases>
                            <CardUseTitle>주요활용사례</CardUseTitle>
                            <CardUseCasesBullet>
                              {productData[productIndex].bulletTextList.map((text, i) => (
                                <Bullet key={`bullet-${text}-${i}`}>
                                  <BulletIcon color={productData[productIndex].color}>
                                    <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20">
                                      <path
                                        d="M8.53033 14.2478L8 13.7175L7.46967 14.2478C7.76256 14.5407 8.23744 14.5407 8.53033 14.2478ZM8 12.6569L4.53033 9.18718C4.23744 8.89429 3.76256 8.89429 3.46967 9.18718C3.17678 9.48008 3.17678 9.95495 3.46967 10.2478L7.46967 14.2478L8 13.7175L8.53033 14.2478L16.2478 6.53033C16.5407 6.23743 16.5407 5.76256 16.2478 5.46967C15.955 5.17677 15.4801 5.17677 15.1872 5.46967L8 12.6569Z"
                                        fill="currentColor"
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                      ></path>
                                    </svg>
                                  </BulletIcon>
                                  <BulletText>{text}</BulletText>
                                </Bullet>
                              ))}
                            </CardUseCasesBullet>
                            <ButtonWrapper>
                              <div>
                                <Button>
                                  <a>
                                    <span>더 알아보기</span>
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
                          </CardUseCases>
                        </div>
                      </CardContent>
                    </CardMedium>
                  </TabPanel>
                </VerticalTabs>
              </VerticalTabWrapper>
            </MediumComponent>
          </ProductCardMedium>
          <ProductCardSmall></ProductCardSmall>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ProductInfomation;
