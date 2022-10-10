import React from "react";
import styled from "styled-components";
import CustomButton from "../common/button";

const Wrapper = styled.div`
  color: rgb(255, 255, 255);
  background: rgb(15, 16, 72);
  padding-top: 0px;
  padding-bottom: 64px;
`;

const Triangle = styled.div`
  border-bottom: 13.9173vw solid rgb(15, 16, 72);
  width: 0;
  height: 0;
  border-right: 100vw solid transparent;
  margin-top: -13.917310096006544vw;
  position: absolute;
  z-index: 2;
  pointer-events: none;
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

const CoreTitle = styled.div`
  font-size: 50px;
  line-height: 60px;
  font-weight: 700;
  word-break: break-word;

  & > span {
    font-weight: 300;
  }
`;

const ParagraphBodyWrapper = styled.div``;

const ParagraphBody = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin: 0;
  word-break: break-word;
  font-weight: 300;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 32px;
`;

function FreePlan(): JSX.Element {
  return (
    <Wrapper>
      <Triangle />
      <ParagraphComponent>
        <ParagraphWrapper>
          <Paragraph>
            <TitleWrapper>
              <CoreTitle>
                <br />
                먼데이닷컴으로
                <span> 최고의 작업을 수행해보세요</span>
              </CoreTitle>
            </TitleWrapper>
            <ParagraphBodyWrapper>
              <ParagraphBody>14일 무료 평가판 | 신용 카드 정보 필요 없음</ParagraphBody>
            </ParagraphBodyWrapper>
            <ButtonWrapper>
              <CustomButton />
            </ButtonWrapper>
          </Paragraph>
        </ParagraphWrapper>
      </ParagraphComponent>
    </Wrapper>
  );
}

export default FreePlan;
