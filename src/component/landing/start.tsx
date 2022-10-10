import React from "react";
import styled from "styled-components";
import CustomButton from "../common/button";

const Wrapper = styled.div`
  padding-top: 64px;
  padding-bottom: 90px;
`;

const Container = styled.div`
  max-width: 1440px;
  margin: auto;

  & > div {
    height: 100%;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
  }
`;

const LeftSpace = styled.div`
  -webkit-box-flex: 1;
  flex-grow: 1;
`;

const ContentWrapper = styled.div`
  --mobile-space-between-text-and-asset: 0;
  padding-left: 32px;
  padding-right: 32px;
  align-items: flex-start;

  width: 100%;
  padding: 0 96px;
  max-width: 1440px;
  -webkit-box-flex: 1;

  flex-grow: 1;
  position: relative;

  display: flex;
`;

const Paragraph = styled.div`
  padding: 0 60px 0 0;
  position: relative;
  z-index: 1;
  width: 50%;

  & > h2 {
    font-size: 40px;
    line-height: 48px;
    font-weight: 400;
    word-break: break-word;
  }

  & > h2 > div {
    font-size: 38px;
    font-weight: 200;
  }

  & > h2 > b {
    font-weight: 700;
  }
`;

const EtcWrapper = styled.div`
  align-self: center;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  width: 50%;

  & > div {
    text-align: left;
    word-break: break-word;
    width: 100%;
  }
`;

const ParagraphBody = styled.div`
  & > div {
    font-size: 24px;
    line-height: 40px;
    margin: 0;
    word-break: break-word;
  }
`;

const ButtonWrapper = styled.div`
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;

  margin-top: 32px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
`;

function Start(): JSX.Element {
  return (
    <Wrapper>
      <Container>
        <div>
          <LeftSpace />
          <ContentWrapper>
            <Paragraph>
              <h2>
                <div>
                  Work OS를 통해 원하는 방식으로
                  <br />
                </div>
                <b>워크플로우를 구성해보세요.</b>
              </h2>
            </Paragraph>
            <EtcWrapper>
              <div>
                <ParagraphBody>
                  <div>
                    필요에 맞게 워크플로우를 커스터마이징하여 <br />
                    팀의 효율성 및 생산성을 높이십시오.
                  </div>
                </ParagraphBody>
                <ButtonWrapper>
                  <CustomButton />
                </ButtonWrapper>
              </div>
            </EtcWrapper>
          </ContentWrapper>
        </div>
      </Container>
    </Wrapper>
  );
}

export default Start;
