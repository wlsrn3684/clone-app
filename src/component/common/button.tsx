import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;

  & > div {
    transform: scale(1);
  }

  & > div > button {
    background-image: "linear-gradient(90deg, #5034ff 25.69%, #b4b4ff 100%)";
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

function CustomButton(props: any): JSX.Element {
  return (
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
  );
}

export default CustomButton;
