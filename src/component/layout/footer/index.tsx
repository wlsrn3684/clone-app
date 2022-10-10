import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: block;

  & > footer {
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    overflow: hidden;
    color: #535768;
    background-color: #ffffff;
    &::before {
      display: block;
      content: "";
      height: 1px;
      width: 100%;
      background-color: #dcdfec;
      position: relative;
    }
  }
`;

const ContentContainer = styled.div`
  max-width: 1440px;
  width: 100%;
  padding: 80px 32px 0 32px;
  font-size: 14px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  position: relative;
`;

const Content = styled.nav`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 1440px;

  @media (max-width: 1440px) {
    padding: 0;
  }
`;

const CategoriesContainer = styled.div`
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: nowrap;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -webkit-align-items: flex-start;
  -webkit-box-align: flex-start;
  -ms-flex-align: flex-start;
  align-items: flex-start;
`;

const CategoryContainer = styled.div`
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: nowrap;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -webkit-align-items: flex-start;
  -webkit-box-align: flex-start;
  -ms-flex-align: flex-start;
  align-items: flex-start;

  &:last-child {
    -webkit-box-flex: 0;
    -webkit-flex-grow: 0;
    -ms-flex-positive: 0;
    flex-grow: 0;
  }

  &:not(:last-child) {
    margin-right: 16px;
  }
`;

const CategoryComponent = styled.div``;

const LogoWrapper = styled.div`
  margin-bottom: 10px;

  & > a {
    background-color: transparent;
  }
`;

const Links = styled.div``;

const Link = styled.div`
  line-height: 22px;

  &:not(:last-child) {
    margin-bottom: 16px;
  }

  & > a {
    -webkit-text-decoration: none;
    text-decoration: none;
    color: inherit;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-column-gap: 8px;
    column-gap: 8px;
    -webkit-align-items: flex-end;
    -webkit-box-align: flex-end;
    -ms-flex-align: flex-end;
    align-items: flex-end;
    background-color: transparent;
  }

  &:hover {
    color: #5034ff;
  }
`;

const Title = styled.h3`
  margin-top: 11px;
  margin-bottom: 24px;
  font-size: 16px;
  font-weight: 500;
`;

const ColumnWrapper = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  gap: 38px;
`;

const BottomBar = styled.div`
  position: relative;
  font-size: 14px;
  color: #808080;
  width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;

  &::before {
    display: block;
    content: "";
    height: 1px;
    width: calc(100% - 64px);
    background-color: #dcdfec;
    position: relative;
    max-width: 1376px;
  }
`;

const BarWrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 40px 32px 48px;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: 180px;
`;

const BarLeft = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  gap: 32px;
  height: 100%;
`;

const LangauageAndSecurity = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  height: 100%;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
`;

const Langauage = styled.div`
  height: 40px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  & > div {
    position: relative;
  }

  & > div > div {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    height: 32px;
    line-height: 32px;
  }

  & > div > div > div {
    margin: 0px 8px;
    max-width: 104px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    -webkit-transition: color 150ms ease;
    transition: color 150ms ease;
    color: #535768;
  }
`;

const Security = styled.div`
  & > div {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
  }

  & > div > div {
    margin-right: 8px;
    cursor: pointer;
  }
`;

const SocialAndLinks = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  height: 100%;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
`;

const IconWrapper = styled.div`
  height: 40px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;

  & > div {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
  }

  & > div > div {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    gap: 16px;
  }
`;

const EtcWrapper = styled.div`
  height: 24px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding-bottom: 6px;
  gap: 24px;
`;

const EtcContainer = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;

  & > div {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;

    &:not(:last-child) {
      &::after {
        content: " | ";
        margin: 0 8px;
      }
    }
  }

  & > div > a {
    font-size: 14px;
    color: #535768;
    -webkit-transition: 100ms color ease;
    transition: 100ms color ease;

    background-color: transparent;
  }
`;

const AllRight = styled.div`
  padding-bottom: 2px;
  & > div {
    font-size: 14px;
    line-height: 2;
    height: 24px;
    color: #535768;
  }
`;

const BarRight = styled.div`
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
`;

const AppStore = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  gap: 16px;
  height: 40px;
`;

const Accessbility = styled.div`
  height: 24px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  & > div {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    font-size: 14px;
    cursor: pointer;
  }

  & > div > div {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    font-size: 14px;
    cursor: pointer;
  }

  & > div > div > div > a {
    transition: 150ms color ease;
    color: #535768;
  }
`;

const r = styled.div``;

function Footer(): JSX.Element {
  return (
    <div>
      <div>
        <Wrapper>
          <footer>
            <ContentContainer>
              <Content>
                <CategoriesContainer>
                  <CategoryContainer>
                    <CategoryComponent>
                      <div>
                        <LogoWrapper>
                          <a href="https://monday.com/lang/ko/">
                            <svg width="127" height="42" viewBox="0 0 127 23" xmlns="http://www.w3.org/2000/svg">
                              <title>Logo / monday.com</title>
                              <g id="Page-1" fill="none" fillRule="evenodd">
                                <g id="Logo-/-monday.com-Copy">
                                  <g id="Logo-/-monday.com">
                                    <g id="Group" transform="translate(0 5.552)" fillRule="nonzero">
                                      <path
                                        d="M2.62 12.627a2.63 2.63 0 0 1-2.292-1.33A2.543 2.543 0 0 1 .4 8.679l4.72-7.412A2.632 2.632 0 0 1 7.45.001a2.627 2.627 0 0 1 2.255 1.39c.44.832.385 1.833-.142 2.614l-4.717 7.412a2.631 2.631 0 0 1-2.226 1.21z"
                                        id="Shape"
                                        fill="#F62B54"
                                      ></path>
                                      <path
                                        d="M10.716 12.627c-.952 0-1.828-.509-2.288-1.327A2.535 2.535 0 0 1 8.5 8.689l4.711-7.395A2.628 2.628 0 0 1 15.543.001c.96.021 1.83.558 2.27 1.398.437.84.373 1.847-.17 2.626l-4.71 7.395a2.627 2.627 0 0 1-2.217 1.207z"
                                        id="Shape"
                                        fill="#FC0"
                                      ></path>
                                      <ellipse
                                        id="Shape"
                                        fill="#00CA72"
                                        cx="18.631"
                                        cy="10.31"
                                        rx="2.43"
                                        ry="2.379"
                                      ></ellipse>
                                    </g>
                                    <path
                                      d="M124.197 13.621c.734 0 1.173.522 1.173 1.377v2.93h.997v-2.997c0-1.454-.685-2.297-1.973-2.297-.504 0-1.304.138-1.781 1.065a1.633 1.633 0 0 0-1.337-1.01 2.3 2.3 0 0 0-.56-.033c-.41.033-1.14.288-1.413.866v-.777h-.998v5.183h.998v-2.797c0-1.088.712-1.51 1.425-1.51.668 0 1.107.511 1.107 1.366v2.941h.992v-2.797c0-.866.52-1.52 1.37-1.51zm-9.555 3.441c.456.01.896-.172 1.215-.502.32-.33.49-.779.473-1.24 0-1.044-.768-1.699-1.688-1.699-.921 0-1.688.655-1.688 1.699-.018.46.152.908.47 1.237.318.33.756.513 1.21.505h.008zm0 .972c-1.458 0-2.675-1.077-2.675-2.72 0-1.643 1.217-2.686 2.675-2.686 1.458 0 2.685 1.043 2.685 2.686s-1.234 2.725-2.692 2.725l.007-.005zm-7.81-2.72l-.01.006c0-1.643 1.249-2.686 2.717-2.692a2.635 2.635 0 0 1 1.973.832l-.756.644a1.704 1.704 0 0 0-1.217-.488c-.92 0-1.72.655-1.72 1.698 0 .705.419 1.34 1.062 1.61s1.383.12 1.875-.378l.767.644a2.651 2.651 0 0 1-1.984.844c-1.457 0-2.707-1.077-2.707-2.72zm-3.193 1.619a.69.69 0 0 1 .682-.698.69.69 0 0 1 .682.698.69.69 0 0 1-.682.655.69.69 0 0 1-.682-.655z"
                                      id="com"
                                      fill="#333"
                                      fillRule="nonzero"
                                    ></path>
                                    <path
                                      d="M106.367 6.156h-3.551l-2.489 6.417-2.476-6.417H94.3l4.317 10.14L95.932 23h3.525l6.91-16.844zm-21.596 5.64c0 1.62 1.416 2.686 2.807 2.686 1.367 0 2.71-.992 2.71-2.687 0-1.695-1.343-2.688-2.71-2.688-1.391 0-2.807 1.067-2.807 2.688zm5.517 5.662v-1.283c-.72 1.09-2.4 1.502-3.262 1.502-2.854 0-5.709-2.25-5.709-5.882 0-3.631 2.854-5.881 5.709-5.881.719 0 2.399.24 3.262 1.5V6.16h3.31v11.3l-3.31-.001zm-9.913 0h-3.31v-1.404c-.553 1.04-1.894 1.646-3.286 1.646-2.879 0-5.422-2.299-5.422-5.859 0-3.627 2.543-5.929 5.422-5.929 1.39 0 2.735.58 3.286 1.621V0h3.31v17.458zm-3.382-5.688c0-1.694-1.223-2.687-2.59-2.687-1.416 0-2.592 1.065-2.592 2.687 0 1.674 1.176 2.734 2.591 2.734 1.393.002 2.591-1.112 2.591-2.734zm-16.82-.292c0-1.718.888-2.299 2.063-2.299 1.127 0 1.943.75 1.943 2.25v6.027h3.334v-6.752c0-3.218-1.584-4.792-4.103-4.792-1.319 0-2.638.75-3.238 1.888V6.156H56.84v11.3h3.333v-5.978zM50.07 17.65c-3.166 0-5.807-2.323-5.807-5.881 0-3.56 2.638-5.86 5.807-5.86 3.169 0 5.83 2.3 5.83 5.86 0 3.56-2.664 5.882-5.83 5.882v-.001zm0-3.29c1.39 0 2.543-1.018 2.543-2.59 0-1.525-1.152-2.566-2.543-2.566a2.468 2.468 0 0 0-1.802.741 2.513 2.513 0 0 0-.717 1.825c.001 1.574 1.152 2.59 2.519 2.59zM38.286 9.18c.983 0 1.847.775 1.847 2.25v6.028h3.31V11.04c0-3.412-1.659-5.13-4.318-5.13-.79 0-2.278.24-3.358 2.008-.624-1.307-1.823-1.985-3.595-1.985a3.203 3.203 0 0 0-2.926 1.864v-1.64H25.91v11.3h3.333v-5.979c0-1.718.936-2.299 1.943-2.299.96 0 1.822.75 1.847 2.178v6.1h3.334v-5.979c0-1.643.864-2.297 1.919-2.297z"
                                      id="monday"
                                      fill="#333"
                                    ></path>
                                  </g>
                                </g>
                              </g>
                            </svg>
                          </a>
                        </LogoWrapper>
                        <Links>
                          <Link>
                            <a href="/pricing/" target="_self">
                              가격
                            </a>
                          </Link>
                          <Link>
                            <a href="/help" target="_self">
                              문의하기
                            </a>
                          </Link>
                          <Link>
                            <a href="/templates/" target="_self">
                              템플릿
                            </a>
                          </Link>
                          <Link>
                            <a href="/smb/" target="_self">
                              중소기업
                            </a>
                          </Link>
                          <Link>
                            <a href="/enterprise/" target="_self">
                              엔터프라이즈
                            </a>
                          </Link>
                          <Link>
                            <a href="/nonprofits" target="_self">
                              비영리 단체
                            </a>
                          </Link>
                          <Link>
                            <a href="/marketplace" target="_self">
                              앱 마켓플레이스
                            </a>
                          </Link>
                          <Link>
                            <a href="/helpcenter" target="_self">
                              연중 무휴 24시간 지원
                            </a>
                          </Link>
                        </Links>
                      </div>
                    </CategoryComponent>
                  </CategoryContainer>
                  <CategoryContainer>
                    <div>
                      <div>
                        <Title>기능</Title>
                      </div>
                      <Links>
                        <Link>
                          <a href="/workdocs" target="_self">
                            Docs
                          </a>
                        </Link>
                        <Link>
                          <a href="/integrations/" target="_self">
                            연동
                          </a>
                        </Link>
                        <Link>
                          <a href="/features/automations" target="_self">
                            자동화
                          </a>
                        </Link>
                        <Link>
                          <a href="/features/files" target="_self">
                            파일
                          </a>
                        </Link>
                        <Link>
                          <a href="/features/dashboards" target="_self">
                            대시보드
                          </a>
                        </Link>
                        <Link>
                          <a href="/features/kanban" target="_self">
                            칸반
                          </a>
                        </Link>
                        <Link>
                          <a href="/features/gantt" target="_self">
                            간트
                          </a>
                        </Link>
                      </Links>
                    </div>
                  </CategoryContainer>
                  <CategoryContainer>
                    <ColumnWrapper>
                      <div>
                        <div>
                          <Title>monday 제품</Title>
                        </div>
                        <Links>
                          <Link>
                            <a href="/work-management" target="_self">
                              <span>
                                <picture>
                                  <img
                                    style={{ height: "18px" }}
                                    alt="wm icon footer"
                                    src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/footer/wm_icon_footer.png"
                                  />
                                </picture>
                              </span>
                              monday work management
                            </a>
                          </Link>
                          <Link>
                            <a href="/crm" target="_self">
                              <span>
                                <picture>
                                  <img
                                    style={{ height: "18px" }}
                                    alt="crm icon footer"
                                    src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/footer/crm_icon_footer.png"
                                  />
                                </picture>
                              </span>
                              monday sales CRM
                            </a>
                          </Link>
                          <Link>
                            <a href="/marketing" target="_self">
                              <span>
                                <picture>
                                  <img
                                    style={{ height: "18px" }}
                                    alt="marketer icon footer"
                                    src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/footer/marketer_icon_footer.png"
                                  />
                                </picture>
                              </span>
                              monday marketer
                            </a>
                          </Link>
                          <Link>
                            <a href="/project-management" target="_self">
                              <span>
                                <picture>
                                  <img
                                    style={{ height: "18px" }}
                                    alt="projects icon footer"
                                    src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/footer/projects_icon_footer.png"
                                  />
                                </picture>
                              </span>
                              monday projects
                            </a>
                          </Link>
                          <Link>
                            <a href="/dev" target="_self">
                              <span>
                                <picture>
                                  <img
                                    style={{ height: "18px" }}
                                    alt="monday dev product management software"
                                    src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/footer/monday_dev_product_management_software.png"
                                  />
                                </picture>
                              </span>
                              monday dev
                            </a>
                          </Link>
                        </Links>
                      </div>
                      <div>
                        <div>
                          <Title>monday.com에서 더 알아보기</Title>
                        </div>
                        <Links>
                          <Link>
                            <a href="//workcanvas.com/" target="_blank" rel="noreferrer">
                              <span>
                                <picture>
                                  <img
                                    style={{ height: "18px" }}
                                    alt="canvas icon footer"
                                    src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/footer/canvas_icon_footer.png"
                                  />
                                </picture>
                              </span>
                              Canvas
                            </a>
                          </Link>
                          <Link>
                            <a href="https://workforms.monday.com/" target="_blank" rel="noreferrer">
                              <span>
                                <picture>
                                  <img
                                    style={{ height: "18px" }}
                                    alt="workforms icon footer"
                                    src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/footer/workforms_icon_footer.png"
                                  />
                                </picture>
                              </span>
                              WorkForms
                            </a>
                          </Link>
                        </Links>
                      </div>
                    </ColumnWrapper>
                  </CategoryContainer>
                  <CategoryContainer>
                    <div>
                      <div>
                        <Title>활용사례</Title>
                      </div>
                      <Links>
                        <Link>
                          <a href="/marketing" target="_self">
                            마케팅
                          </a>
                        </Link>
                        <Link>
                          <a href="/project-management" target="_self">
                            프로젝트 관리
                          </a>
                        </Link>
                        <Link>
                          <a href="/crm" target="_self">
                            세일즈
                          </a>
                        </Link>
                        <Link>
                          <a href="/dev" target="_self">
                            개발자 모드
                          </a>
                        </Link>
                        <Link>
                          <a href="/use-cases/hr-management-software" target="_self">
                            HR
                          </a>
                        </Link>
                        <Link>
                          <a href="/use-cases/it-operations" target="_self">
                            IT
                          </a>
                        </Link>
                        <Link>
                          <a href="/operations" target="_self">
                            운영
                          </a>
                        </Link>
                        <Link>
                          <a href="/construction" target="_self">
                            건설
                          </a>
                        </Link>
                        <Link>
                          <a href="/education" target="_self">
                            교육
                          </a>
                        </Link>
                      </Links>
                    </div>
                  </CategoryContainer>
                  <CategoryContainer>
                    <div>
                      <div>
                        <Title>회사</Title>
                      </div>
                      <Links>
                        <Link>
                          <a href="/p/about/" target="_self">
                            About Us
                          </a>
                        </Link>
                        <Link>
                          <a href="/careers/" target="_self">
                            커리어 - 채용 중입니다!
                          </a>
                        </Link>
                        <Link>
                          <a href="//www.monday-u.com" target="_blank" rel="noreferrer">
                            monday-U
                          </a>
                        </Link>
                        <Link>
                          <a href="/p/news/" target="_self">
                            보도 자료
                          </a>
                        </Link>
                        <Link>
                          <a href="/stories/" target="_self">
                            고객 사례
                          </a>
                        </Link>
                        <Link>
                          <a href="/partnership/" target="_self">
                            파트너가 되세요
                          </a>
                        </Link>
                        <Link>
                          <a href="/p/esg" target="_self">
                            지속 가능성 및 ESG
                          </a>
                        </Link>
                        <Link>
                          <a href="/affiliate-program/" target="_self">
                            협력사
                          </a>
                        </Link>
                        <Link>
                          <a href="//digital-lift.org/" target="_blank" rel="noreferrer">
                            디지털 리프트
                          </a>
                        </Link>
                        <Link>
                          <a href="//ir.monday.com" target="_blank" rel="noreferrer">
                            투자자 관계
                          </a>
                        </Link>
                      </Links>
                    </div>
                  </CategoryContainer>
                  <CategoryContainer>
                    <div>
                      <div>
                        <Title>리소스</Title>
                      </div>
                      <Links>
                        <Link>
                          <a href="/helpcenter" target="_blank">
                            지원 센터
                          </a>
                        </Link>
                        <Link>
                          <a href="//community.monday.com" target="_blank" rel="noreferrer">
                            커뮤니티
                          </a>
                        </Link>
                        <Link>
                          <a href="//monday.com/blog" target="_blank" rel="noreferrer">
                            블로그
                          </a>
                        </Link>
                        <Link>
                          <a href="/webinars/" target="_self">
                            웨비나
                          </a>
                        </Link>
                        <Link>
                          <a href="https://www.startupforstartup.com/ww/" target="_blank" rel="noreferrer">
                            Startup for startup
                          </a>
                        </Link>
                        <Link>
                          <a href="/p/events-hub/" target="_self">
                            글로벌 이벤트
                          </a>
                        </Link>
                        <Link>
                          <a href="/appsdeveloper" target="_blank">
                            앱 개발
                          </a>
                        </Link>
                        <Link>
                          <a href="/p/find-a-partner/" target="_self">
                            파트너 찾기
                          </a>
                        </Link>
                        <Link>
                          <a href="/alternative" target="_self">
                            비교
                          </a>
                        </Link>
                      </Links>
                    </div>
                  </CategoryContainer>
                </CategoriesContainer>
              </Content>
            </ContentContainer>
            <BottomBar>
              <BarWrapper>
                <BarLeft>
                  <LangauageAndSecurity>
                    <Langauage>
                      <div>
                        <div>
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ overflow: "hidden" }}
                          >
                            <path
                              d="M10 19a9 9 0 1 0 0-18 9 9 0 0 0 0 18z"
                              stroke="#323338"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M7.831 18.737C6.613 16.95 5.8 13.707 5.8 10c0-3.706.813-6.951 2.031-8.737M1 10h18M2.386 14.8h15.229M2.386 5.2h15.229M12.169 1.263C13.386 3.05 14.2 6.293 14.2 10c0 3.706-.813 6.951-2.031 8.737"
                              stroke="#323338"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                          <div>한국어</div>
                          <svg
                            width="256"
                            height="256"
                            viewBox="0 0 256 256"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{
                              height: "10px",
                              width: "10px",
                              transform: "translateY(1px)",
                              transition: "transform 200ms ease",
                            }}
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
                        </div>
                      </div>
                    </Langauage>
                    <Security>
                      <div>
                        <div>
                          <a href="/terms/gdpr" target="_self">
                            <picture>
                              <img
                                style={{ height: "32px" }}
                                alt="gdpr"
                                src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/footer/gdpr-logo.png"
                              />
                            </picture>
                          </a>
                        </div>
                        <div>
                          <a href="/trustcenter/iso" target="_self">
                            <picture>
                              <img
                                style={{ height: "32px" }}
                                alt="iso"
                                src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/footer/iso-logo1.png"
                              />
                            </picture>
                          </a>
                        </div>
                        <div>
                          <a href="/terms/soc2" target="_self">
                            <picture>
                              <img
                                style={{ height: "32px" }}
                                alt="soc"
                                src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/footer/soc-logo.png"
                              />
                            </picture>
                          </a>
                        </div>
                        <div>
                          <a href="https://support.monday.com/hc/en-us/articles/360006506699" target="_self">
                            <picture>
                              <img
                                style={{ height: "32px" }}
                                alt="hipaa"
                                src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/footer/hipaa-logo.png"
                              />
                            </picture>
                          </a>
                        </div>
                      </div>
                    </Security>
                  </LangauageAndSecurity>
                  <SocialAndLinks>
                    <IconWrapper>
                      <div>
                        <div>
                          <div>
                            <div>
                              <a
                                target="_blank"
                                href="https://twitter.com/mondaydotcom"
                                title="twitter"
                                rel="noreferrer"
                              >
                                <div>
                                  <svg
                                    width="90"
                                    height="90"
                                    viewBox="0 0 90 90"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    style={{ width: "auto", height: "24px" }}
                                  >
                                    <path
                                      d="M43.632 32.252l.141 2.317-2.353-.284c-8.567-1.087-16.052-4.776-22.406-10.971l-3.107-3.074-.8 2.27c-1.695 5.06-.612 10.404 2.918 13.998 1.883 1.986 1.46 2.27-1.789 1.088-1.13-.378-2.118-.662-2.212-.52-.33.33.8 4.634 1.695 6.337 1.223 2.364 3.718 4.682 6.448 6.053l2.307 1.088-2.73.047c-2.636 0-2.73.047-2.448 1.04.942 3.075 4.66 6.338 8.803 7.756l2.918.994-2.542 1.513c-3.766 2.175-8.19 3.405-12.615 3.5-2.118.047-3.86.236-3.86.378 0 .473 5.743 3.121 9.085 4.161 10.026 3.074 21.935 1.75 30.879-3.5 6.354-3.735 12.709-11.16 15.674-18.348 1.6-3.831 3.201-10.83 3.201-14.188 0-2.175.142-2.459 2.778-5.06 1.553-1.513 3.012-3.169 3.295-3.642.47-.898.423-.898-1.977-.094-4.002 1.419-4.566 1.23-2.59-.899 1.46-1.513 3.201-4.256 3.201-5.06 0-.142-.706.095-1.506.52-.847.473-2.73 1.183-4.142 1.608l-2.542.804-2.306-1.56c-1.271-.852-3.06-1.797-4.002-2.081-2.4-.662-6.072-.568-8.237.189-5.884 2.128-9.603 7.614-9.179 13.62z"
                                      fill="#535768"
                                    ></path>
                                  </svg>
                                </div>
                              </a>
                            </div>
                          </div>
                          <div>
                            <div>
                              <a
                                target="_blank"
                                href="https://www.linkedin.com/company/2525169/"
                                title="LinkedIn"
                                rel="noreferrer"
                              >
                                <div>
                                  <svg
                                    width="90"
                                    height="90"
                                    viewBox="0 0 90 90"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    style={{ width: "auto", height: "24px" }}
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M29.647 18.724C29.562 14.907 26.82 12 22.366 12S15 14.907 15 18.724c0 3.738 2.826 6.729 7.197 6.729h.083c4.54 0 7.367-2.991 7.367-6.729zm-.858 12.041h-13.02v38.929h13.02V30.765zm31.962-.913c8.567 0 14.99 5.565 14.99 17.522v22.321H62.72V48.868c0-5.231-1.883-8.8-6.596-8.8-3.597 0-5.74 2.406-6.68 4.73-.345.833-.43 1.994-.43 3.157v21.741h-13.02s.171-35.276 0-38.929h13.02v5.514c1.728-2.65 4.823-6.429 11.736-6.429z"
                                      fill="#535768"
                                    ></path>
                                  </svg>
                                </div>
                              </a>
                            </div>
                          </div>
                          <div>
                            <div>
                              <a
                                target="_blank"
                                href="https://www.facebook.com/mondaydotcom"
                                title="Facebook"
                                rel="noreferrer"
                              >
                                <div>
                                  <svg
                                    width="90"
                                    height="90"
                                    viewBox="0 0 90 90"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    style={{ width: "auto", height: "24px" }}
                                  >
                                    <path
                                      d="M76.134 45.067C76.134 27.907 62.227 14 45.067 14S14 27.907 14 45.067c0 15.51 11.359 28.36 26.213 30.69v-21.71h-7.888v-8.98h7.888v-6.844c0-7.785 4.636-12.087 11.735-12.087 3.398 0 6.954.606 6.954.606v7.646h-3.92c-3.86 0-5.06 2.397-5.06 4.854v5.825h8.616l-1.378 8.98h-7.239v21.71c14.854-2.33 26.213-15.18 26.213-30.69z"
                                      fill="#535768"
                                    ></path>
                                  </svg>
                                </div>
                              </a>
                            </div>
                          </div>
                          <div>
                            <div>
                              <a
                                target="_blank"
                                href="https://www.youtube.com/channel/UCA9UvBiKHly15rN8u_Km3BQ"
                                title="Youtube"
                                rel="noreferrer"
                              >
                                <div>
                                  <svg
                                    width="90"
                                    height="90"
                                    viewBox="0 0 90 90"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    style={{ width: "auto", height: "24px" }}
                                  >
                                    <path
                                      d="M83.82 24.928a10.211 10.211 0 0 0-7.184-7.183C70.26 16 44.75 16 44.75 16s-25.51 0-31.888 1.678c-3.423.94-6.243 3.76-7.183 7.25C4 31.306 4 44.532 4 44.532s0 13.292 1.678 19.602a10.211 10.211 0 0 0 7.183 7.184c6.445 1.745 31.888 1.745 31.888 1.745s25.51 0 31.887-1.678A10.211 10.211 0 0 0 83.82 64.2c1.678-6.378 1.678-19.603 1.678-19.603s.067-13.292-1.678-19.67zm-47.194 31.82V32.314L57.84 44.531 36.626 56.749z"
                                      fill="#535768"
                                    ></path>
                                  </svg>
                                </div>
                              </a>
                            </div>
                          </div>
                          <div>
                            <div>
                              <a
                                target="_blank"
                                href="https://www.instagram.com/mondaydotcom"
                                title="Instagram"
                                rel="noreferrer"
                              >
                                <div>
                                  <svg
                                    width="90"
                                    height="90"
                                    viewBox="0 0 90 90"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    style={{ width: "auto", height: "24px" }}
                                  >
                                    <path
                                      d="M44.994 19.586c8.28 0 9.252.037 12.525.185 3.027.135 4.664.64 5.759 1.07 1.452.566 2.485 1.23 3.568 2.313 1.083 1.083 1.76 2.116 2.313 3.568.418 1.095.935 2.732 1.07 5.759.148 3.273.185 4.244.185 12.525 0 8.28-.037 9.253-.185 12.526-.135 3.026-.64 4.663-1.07 5.758-.566 1.452-1.23 2.485-2.313 3.568-1.083 1.083-2.117 1.76-3.568 2.313-1.095.419-2.732.935-5.759 1.07-3.273.148-4.244.185-12.525.185-8.28 0-9.253-.037-12.526-.184-3.026-.136-4.663-.64-5.758-1.07-1.452-.567-2.485-1.231-3.568-2.314-1.083-1.083-1.76-2.116-2.313-3.568-.419-1.095-.935-2.732-1.07-5.758-.148-3.273-.185-4.245-.185-12.526 0-8.28.037-9.252.184-12.525.136-3.027.64-4.664 1.07-5.759.567-1.452 1.231-2.485 2.314-3.568 1.083-1.083 2.116-1.76 3.568-2.313 1.095-.418 2.732-.935 5.758-1.07 3.273-.16 4.257-.185 12.526-.185zm0-5.586c-8.416 0-9.474.037-12.784.185-3.297.147-5.55.676-7.518 1.44-2.042.787-3.765 1.857-5.487 3.58-1.723 1.722-2.781 3.457-3.58 5.487-.764 1.969-1.293 4.22-1.44 7.53C14.037 35.52 14 36.578 14 44.994s.037 9.474.185 12.784c.147 3.297.676 5.549 1.44 7.53.787 2.042 1.857 3.765 3.58 5.487 1.722 1.723 3.457 2.781 5.487 3.58 1.969.764 4.22 1.293 7.53 1.44 3.31.148 4.356.185 12.784.185s9.474-.037 12.784-.185c3.297-.147 5.55-.676 7.53-1.44 2.043-.787 3.765-1.857 5.488-3.58 1.722-1.722 2.78-3.457 3.58-5.487.763-1.969 1.292-4.22 1.44-7.53.147-3.31.184-4.356.184-12.784s-.037-9.474-.184-12.784c-.148-3.297-.677-5.55-1.44-7.53-.787-2.043-1.858-3.765-3.58-5.488-1.723-1.722-3.458-2.78-5.488-3.58-1.968-.763-4.22-1.292-7.53-1.44-3.322-.135-4.38-.172-12.796-.172z"
                                      fill="#535768"
                                    ></path>
                                    <path
                                      d="M44.995 29.085c-8.785 0-15.922 7.124-15.922 15.921s7.124 15.922 15.922 15.922c8.797 0 15.921-7.124 15.921-15.922 0-8.797-7.124-15.921-15.921-15.921zm0 26.244c-5.71 0-10.336-4.626-10.336-10.335 0-5.71 4.627-10.336 10.336-10.336 5.709 0 10.335 4.627 10.335 10.336 0 5.709-4.626 10.335-10.335 10.335zM61.544 32.16a3.716 3.716 0 1 0 0-7.43 3.716 3.716 0 0 0 0 7.43z"
                                      fill="#535768"
                                    ></path>
                                  </svg>
                                </div>
                              </a>
                            </div>
                          </div>
                          <div>
                            <div>
                              <a
                                target="_blank"
                                href="https://www.tiktok.com/@mondaydotcom"
                                title="TikTok"
                                rel="noreferrer"
                              >
                                <div>
                                  <svg
                                    width="90"
                                    height="90"
                                    viewBox="0 0 90 90"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    style={{ width: "auto", height: "24px" }}
                                  >
                                    <path
                                      d="M71.883 29.343c-3.85-.116-7.338-1.961-9.968-4.426a14.4 14.4 0 0 1-4.466-10.638H46.73v41.284c0 6.744-4.042 10.718-9.008 10.718a9.013 9.013 0 1 1 2.912-17.506V37.873a13.216 13.216 0 0 0-2.912-.308 19.722 19.722 0 0 0-18.22 12.169 19.717 19.717 0 1 0 37.933 7.549v-22.22c4.154 2.872 9.115 4.23 14.412 4.324l.036-10.044z"
                                      fill="#535768"
                                    ></path>
                                  </svg>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </IconWrapper>
                    <EtcWrapper>
                      <EtcContainer>
                        <div>
                          <a href="/trustcenter">보안</a>
                        </div>
                        <div>
                          <a href="/l/">개인정보 보호 정책</a>
                        </div>
                        <div>
                          <a href="/terms/privacy">개인 정보 정책</a>
                        </div>
                        <div>
                          <a href="https://status.monday.com/">상태</a>
                        </div>
                      </EtcContainer>
                      <AllRight>
                        <div>판권 소유 © monday.com</div>
                      </AllRight>
                    </EtcWrapper>
                  </SocialAndLinks>
                </BarLeft>
                <BarRight>
                  <AppStore>
                    <a
                      target="_blank"
                      href="https://play.google.com/store/apps/details?id=com.monday.monday"
                      title="Download the monday android App from Google Play"
                      rel="noreferrer"
                    >
                      <svg width="135" height="40" viewBox="0 0 135 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M130 40H5c-2.8 0-5-2.2-5-5V5c0-2.8 2.2-5 5-5h125c2.8 0 5 2.2 5 5v30c0 2.7-2.2 5-5 5z"
                          fill="#000"
                        ></path>
                        <path
                          d="M130 .8c2.3 0 4.2 1.9 4.2 4.2v30c0 2.3-1.9 4.2-4.2 4.2H5C2.7 39.2.8 37.3.8 35V5C.8 2.7 2.7.8 5 .8h125zm0-.8H5C2.2 0 0 2.2 0 5v30c0 2.8 2.2 5 5 5h125c2.8 0 5-2.2 5-5V5c0-2.7-2.2-5-5-5z"
                          fill="#A6A6A6"
                        ></path>
                        <path
                          d="M47.4 10.2c0 .8-.2 1.5-.7 2-.6.6-1.3.9-2.2.9-.9 0-1.6-.3-2.2-.9-.6-.6-.9-1.3-.9-2.2 0-.9.3-1.6.9-2.2.6-.6 1.3-.9 2.2-.9.4 0 .8.1 1.2.3.4.2.7.4.9.7l-.5.5c-.4-.5-.9-.7-1.6-.7-.6 0-1.2.2-1.6.7-.5.4-.7 1-.7 1.7s.2 1.3.7 1.7c.5.4 1 .7 1.6.7.7 0 1.2-.2 1.7-.7.3-.3.5-.7.5-1.2h-2.2v-.7h2.9v.3zM52 7.7h-2.7v1.9h2.5v.7h-2.5v1.9H52v.8h-3.5V7H52v.7zM55.3 13h-.8V7.7h-1.7V7H57v.7h-1.7V13zM59.9 13V7h.8v6h-.8zM64.1 13h-.8V7.7h-1.7V7h4.1v.7H64V13h.1zM73.6 12.2c-.6.6-1.3.9-2.2.9-.9 0-1.6-.3-2.2-.9-.6-.6-.9-1.3-.9-2.2 0-.9.3-1.6.9-2.2.6-.6 1.3-.9 2.2-.9.9 0 1.6.3 2.2.9.6.6.9 1.3.9 2.2 0 .9-.3 1.6-.9 2.2zm-3.8-.5c.4.4 1 .7 1.6.7.6 0 1.2-.2 1.6-.7.4-.4.7-1 .7-1.7s-.2-1.3-.7-1.7c-.4-.4-1-.7-1.6-.7-.6 0-1.2.2-1.6.7-.4.4-.7 1-.7 1.7s.2 1.3.7 1.7zM75.6 13V7h.9l2.9 4.7V7h.8v6h-.8l-3.1-4.9V13h-.7z"
                          fill="#fff"
                          stroke="#fff"
                          strokeWidth=".2"
                          strokeMiterlimit="10"
                        ></path>
                        <path
                          d="M68.1 21.8c-2.4 0-4.3 1.8-4.3 4.3 0 2.4 1.9 4.3 4.3 4.3s4.3-1.8 4.3-4.3c0-2.6-1.9-4.3-4.3-4.3zm0 6.8c-1.3 0-2.4-1.1-2.4-2.6s1.1-2.6 2.4-2.6c1.3 0 2.4 1 2.4 2.6 0 1.5-1.1 2.6-2.4 2.6zm-9.3-6.8c-2.4 0-4.3 1.8-4.3 4.3 0 2.4 1.9 4.3 4.3 4.3s4.3-1.8 4.3-4.3c0-2.6-1.9-4.3-4.3-4.3zm0 6.8c-1.3 0-2.4-1.1-2.4-2.6s1.1-2.6 2.4-2.6c1.3 0 2.4 1 2.4 2.6 0 1.5-1.1 2.6-2.4 2.6zm-11.1-5.5v1.8H52c-.1 1-.5 1.8-1 2.3-.6.6-1.6 1.3-3.3 1.3-2.7 0-4.7-2.1-4.7-4.8 0-2.7 2.1-4.8 4.7-4.8 1.4 0 2.5.6 3.3 1.3l1.3-1.3c-1.1-1-2.5-1.8-4.5-1.8-3.6 0-6.7 3-6.7 6.6 0 3.6 3.1 6.6 6.7 6.6 2 0 3.4-.6 4.6-1.9 1.2-1.2 1.6-2.9 1.6-4.2 0-.4 0-.8-.1-1.1h-6.2zm45.4 1.4c-.4-1-1.4-2.7-3.6-2.7s-4 1.7-4 4.3c0 2.4 1.8 4.3 4.2 4.3 1.9 0 3.1-1.2 3.5-1.9l-1.4-1c-.5.7-1.1 1.2-2.1 1.2s-1.6-.4-2.1-1.3l5.7-2.4-.2-.5zm-5.8 1.4c0-1.6 1.3-2.5 2.2-2.5.7 0 1.4.4 1.6.9l-3.8 1.6zM82.6 30h1.9V17.5h-1.9V30zm-3-7.3c-.5-.5-1.3-1-2.3-1-2.1 0-4.1 1.9-4.1 4.3s1.9 4.2 4.1 4.2c1 0 1.8-.5 2.2-1h.1v.6c0 1.6-.9 2.5-2.3 2.5-1.1 0-1.9-.8-2.1-1.5l-1.6.7c.5 1.1 1.7 2.5 3.8 2.5 2.2 0 4-1.3 4-4.4V22h-1.8v.7zm-2.2 5.9c-1.3 0-2.4-1.1-2.4-2.6s1.1-2.6 2.4-2.6c1.3 0 2.3 1.1 2.3 2.6s-1 2.6-2.3 2.6zm24.4-11.1h-4.5V30h1.9v-4.7h2.6c2.1 0 4.1-1.5 4.1-3.9s-2-3.9-4.1-3.9zm.1 6h-2.7v-4.3h2.7c1.4 0 2.2 1.2 2.2 2.1-.1 1.1-.9 2.2-2.2 2.2zm11.5-1.8c-1.4 0-2.8.6-3.3 1.9l1.7.7c.4-.7 1-.9 1.7-.9 1 0 1.9.6 2 1.6v.1c-.3-.2-1.1-.5-1.9-.5-1.8 0-3.6 1-3.6 2.8 0 1.7 1.5 2.8 3.1 2.8 1.3 0 1.9-.6 2.4-1.2h.1v1h1.8v-4.8c-.2-2.2-1.9-3.5-4-3.5zm-.2 6.9c-.6 0-1.5-.3-1.5-1.1 0-1 1.1-1.3 2-1.3.8 0 1.2.2 1.7.4-.2 1.2-1.2 2-2.2 2zm10.5-6.6l-2.1 5.4h-.1l-2.2-5.4h-2l3.3 7.6-1.9 4.2h1.9l5.1-11.8h-2zm-16.8 8h1.9V17.5h-1.9V30z"
                          fill="#fff"
                        ></path>
                        <path
                          d="M10.4 7.5c-.3.3-.5.8-.5 1.4V31c0 .6.2 1.1.5 1.4l.1.1 12.4-12.4v-.2L10.4 7.5z"
                          fill="url(#paint0_linear)"
                        ></path>
                        <path
                          d="M27 24.3l-4.1-4.1V19.9l4.1-4.1.1.1 4.9 2.8c1.4.8 1.4 2.1 0 2.9l-5 2.7z"
                          fill="url(#paint1_linear)"
                        ></path>
                        <path
                          d="M27.1 24.2L22.9 20 10.4 32.5c.5.5 1.2.5 2.1.1l14.6-8.4z"
                          fill="url(#paint2_linear)"
                        ></path>
                        <path
                          d="M27.1 15.8L12.5 7.5c-.9-.5-1.6-.4-2.1.1L22.9 20l4.2-4.2z"
                          fill="url(#paint3_linear)"
                        ></path>
                        <path
                          opacity=".2"
                          d="M27 24.1l-14.5 8.2c-.8.5-1.5.4-2 0l-.1.1.1.1c.5.4 1.2.5 2 0L27 24.1z"
                          fill="#000"
                        ></path>
                        <path
                          opacity=".12"
                          d="M10.4 32.3c-.3-.3-.4-.8-.4-1.4v.1c0 .6.2 1.1.5 1.4v-.1h-.1zM32 21.3l-5 2.8.1.1 4.9-2.8c.7-.4 1-.9 1-1.4 0 .5-.4.9-1 1.3z"
                          fill="#000"
                        ></path>
                        <path
                          opacity=".25"
                          d="M12.5 7.6L32 18.7c.6.4 1 .8 1 1.3 0-.5-.3-1-1-1.4L12.5 7.5C11.1 6.7 10 7.4 10 9v.1c0-1.6 1.1-2.3 2.5-1.5z"
                          fill="#fff"
                        ></path>
                        <defs>
                          <linearGradient
                            id="paint0_linear"
                            x1="21.8"
                            y1="8.71"
                            x2="5.017"
                            y2="25.492"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#00A0FF"></stop>
                            <stop offset=".007" stopColor="#00A1FF"></stop>
                            <stop offset=".26" stopColor="#00BEFF"></stop>
                            <stop offset=".512" stopColor="#00D2FF"></stop>
                            <stop offset=".76" stopColor="#00DFFF"></stop>
                            <stop offset="1" stopColor="#00E3FF"></stop>
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear"
                            x1="33.834"
                            y1="20.001"
                            x2="9.637"
                            y2="20.001"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#FFE000"></stop>
                            <stop offset=".409" stopColor="#FFBD00"></stop>
                            <stop offset=".775" stopColor="#FFA500"></stop>
                            <stop offset="1" stopColor="#FF9C00"></stop>
                          </linearGradient>
                          <linearGradient
                            id="paint2_linear"
                            x1="24.827"
                            y1="22.296"
                            x2="2.069"
                            y2="45.054"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#FF3A44"></stop>
                            <stop offset="1" stopColor="#C31162"></stop>
                          </linearGradient>
                          <linearGradient
                            id="paint3_linear"
                            x1="7.297"
                            y1=".176"
                            x2="17.46"
                            y2="10.339"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#32A071"></stop>
                            <stop offset=".069" stopColor="#2DA771"></stop>
                            <stop offset=".476" stopColor="#15CF74"></stop>
                            <stop offset=".801" stopColor="#06E775"></stop>
                            <stop offset="1" stopColor="#00F076"></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                    </a>
                    <a
                      target="_blank"
                      href="https://itunes.apple.com/app/id1290128888"
                      title="Download the monday iOS App from the App Store"
                      rel="noreferrer"
                    >
                      <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M110.135 0H9.535c-.367 0-.73 0-1.095.002-.306.002-.61.008-.919.013C6.85.023 6.18.082 5.517.19a6.665 6.665 0 0 0-1.9.627A6.438 6.438 0 0 0 .193 5.521a12.993 12.993 0 0 0-.179 2.002c-.01.307-.01.615-.015.921V31.56c.005.31.006.61.015.921.008.671.068 1.34.18 2.002.11.663.32 1.306.624 1.905.303.598.701 1.143 1.179 1.614.473.477 1.019.875 1.618 1.179.599.304 1.24.517 1.901.63.663.11 1.333.168 2.004.177.31.007.613.011.919.011.366.002.728.002 1.095.002h100.6c.359 0 .724 0 1.084-.002.304 0 .617-.004.922-.01.67-.01 1.338-.068 2-.178a6.808 6.808 0 0 0 1.908-.63A6.296 6.296 0 0 0 117.666 38a6.405 6.405 0 0 0 1.182-1.614c.302-.6.51-1.242.619-1.905.111-.661.173-1.33.185-2.002.004-.31.004-.61.004-.921.008-.364.008-.725.008-1.094V9.536c0-.366 0-.73-.008-1.092 0-.306 0-.614-.004-.92a13.57 13.57 0 0 0-.185-2.003 6.648 6.648 0 0 0-.619-1.903 6.469 6.469 0 0 0-2.799-2.8 6.77 6.77 0 0 0-1.908-.627c-.661-.11-1.33-.169-2-.176-.305-.005-.618-.011-.922-.013-.36-.002-.725-.002-1.084-.002z"
                          fill="#A6A6A6"
                        ></path>
                        <path
                          d="M8.445 39.125c-.305 0-.602-.004-.904-.01a12.696 12.696 0 0 1-1.87-.164 5.884 5.884 0 0 1-1.656-.548 5.406 5.406 0 0 1-1.397-1.016 5.321 5.321 0 0 1-1.02-1.397 5.722 5.722 0 0 1-.544-1.657 12.414 12.414 0 0 1-.166-1.875c-.007-.21-.015-.913-.015-.913v-23.1s.009-.692.015-.895a12.37 12.37 0 0 1 .165-1.872 5.756 5.756 0 0 1 .544-1.662c.26-.518.603-.99 1.015-1.398A5.565 5.565 0 0 1 5.667 1.05C6.287.95 6.915.895 7.543.887l.902-.012h102.769l.913.013a12.37 12.37 0 0 1 1.858.162 5.933 5.933 0 0 1 1.671.548 5.589 5.589 0 0 1 2.415 2.42 5.74 5.74 0 0 1 .535 1.649c.104.624.162 1.255.174 1.887.003.283.003.588.003.89.008.375.008.732.008 1.092v20.929c0 .363 0 .718-.008 1.075 0 .325 0 .623-.004.93-.011.62-.069 1.24-.171 1.853a5.716 5.716 0 0 1-.54 1.67 5.47 5.47 0 0 1-1.015 1.386 5.414 5.414 0 0 1-1.4 1.022 5.855 5.855 0 0 1-1.668.55c-.618.101-1.243.156-1.869.163-.293.007-.599.011-.897.011l-1.084.002-101.69-.002z"
                          fill="#000"
                        ></path>
                        <path
                          d="M24.769 20.3a4.947 4.947 0 0 1 2.356-4.151 5.065 5.065 0 0 0-3.99-2.158c-1.68-.176-3.308 1.005-4.164 1.005-.872 0-2.19-.988-3.608-.958a5.315 5.315 0 0 0-4.473 2.727c-1.934 3.349-.492 8.27 1.361 10.977.927 1.325 2.01 2.805 3.428 2.753 1.387-.058 1.905-.885 3.58-.885 1.658 0 2.144.885 3.59.852 1.489-.025 2.426-1.332 3.32-2.67a10.963 10.963 0 0 0 1.52-3.092 4.782 4.782 0 0 1-2.92-4.4zM22.037 12.21a4.873 4.873 0 0 0 1.115-3.49 4.957 4.957 0 0 0-3.208 1.66 4.637 4.637 0 0 0-1.143 3.361 4.1 4.1 0 0 0 3.236-1.53zM42.302 27.14H37.57l-1.137 3.356h-2.005l4.484-12.418h2.083l4.483 12.418h-2.039l-1.136-3.356zm-4.243-1.55h3.752l-1.85-5.446h-.051l-1.85 5.447zM55.16 25.97c0 2.813-1.506 4.62-3.779 4.62a3.07 3.07 0 0 1-2.848-1.583h-.043v4.484H46.63V21.442h1.8v1.506h.033a3.212 3.212 0 0 1 2.883-1.6c2.298 0 3.813 1.816 3.813 4.622zm-1.91 0c0-1.833-.948-3.038-2.393-3.038-1.42 0-2.375 1.23-2.375 3.038 0 1.824.955 3.046 2.375 3.046 1.445 0 2.392-1.197 2.392-3.046zM65.124 25.97c0 2.813-1.505 4.62-3.778 4.62a3.07 3.07 0 0 1-2.848-1.583h-.043v4.484h-1.859V21.442h1.799v1.506h.034a3.212 3.212 0 0 1 2.883-1.6c2.298 0 3.813 1.816 3.813 4.622zm-1.91 0c0-1.833-.947-3.038-2.392-3.038-1.42 0-2.375 1.23-2.375 3.038 0 1.824.955 3.046 2.375 3.046 1.445 0 2.392-1.197 2.392-3.046zM71.71 27.036c.138 1.232 1.335 2.04 2.97 2.04 1.566 0 2.693-.809 2.693-1.919 0-.964-.68-1.54-2.29-1.936l-1.609-.388c-2.28-.55-3.339-1.617-3.339-3.348 0-2.142 1.867-3.614 4.519-3.614 2.624 0 4.423 1.472 4.483 3.614h-1.876c-.112-1.239-1.136-1.987-2.634-1.987-1.497 0-2.521.757-2.521 1.858 0 .878.654 1.395 2.255 1.79l1.368.336c2.548.603 3.606 1.626 3.606 3.443 0 2.323-1.85 3.778-4.793 3.778-2.754 0-4.614-1.42-4.734-3.667h1.902zM83.346 19.3v2.142h1.722v1.472h-1.722v4.991c0 .776.345 1.137 1.102 1.137.204-.004.408-.018.611-.043v1.463c-.34.064-.686.092-1.032.086-1.833 0-2.548-.689-2.548-2.444v-5.19h-1.316v-1.472h1.316V19.3h1.867zM86.065 25.97c0-2.849 1.678-4.639 4.294-4.639 2.625 0 4.295 1.79 4.295 4.639 0 2.856-1.661 4.638-4.295 4.638-2.633 0-4.294-1.782-4.294-4.638zm6.695 0c0-1.954-.895-3.108-2.401-3.108-1.506 0-2.4 1.162-2.4 3.108 0 1.962.894 3.106 2.4 3.106 1.506 0 2.401-1.144 2.401-3.106zM96.186 21.442h1.772v1.541h.043a2.16 2.16 0 0 1 2.178-1.635c.214-.001.428.022.637.069v1.738a2.591 2.591 0 0 0-.835-.112 1.872 1.872 0 0 0-1.937 2.083v5.37h-1.858v-9.054zM109.384 27.837c-.25 1.643-1.85 2.771-3.898 2.771-2.634 0-4.269-1.764-4.269-4.595 0-2.84 1.644-4.682 4.191-4.682 2.505 0 4.08 1.72 4.08 4.466v.637h-6.395v.112a2.353 2.353 0 0 0 .639 1.832 2.364 2.364 0 0 0 1.797.732 2.045 2.045 0 0 0 2.091-1.273h1.764zm-6.282-2.702h4.526a2.167 2.167 0 0 0-.608-1.634 2.168 2.168 0 0 0-1.612-.664 2.291 2.291 0 0 0-2.306 2.298zM37.826 8.731a2.64 2.64 0 0 1 2.808 2.965c0 1.906-1.03 3.002-2.808 3.002h-2.155V8.73h2.155zm-1.228 5.123h1.125a1.876 1.876 0 0 0 1.967-2.146 1.882 1.882 0 0 0-1.967-2.134h-1.125v4.28zM41.68 12.444a2.132 2.132 0 1 1 4.248 0 2.135 2.135 0 1 1-4.247 0zm3.334 0c0-.976-.439-1.546-1.208-1.546-.773 0-1.207.57-1.207 1.546 0 .984.434 1.55 1.207 1.55.77 0 1.208-.57 1.208-1.55zM51.573 14.698h-.922l-.93-3.317h-.07l-.927 3.317h-.913l-1.242-4.503h.902l.806 3.436h.067l.926-3.436h.852l.926 3.436h.07l.803-3.436h.889l-1.237 4.503zM53.853 10.195h.856v.715h.066a1.348 1.348 0 0 1 1.344-.802 1.464 1.464 0 0 1 1.559 1.675v2.915h-.889v-2.692c0-.724-.314-1.084-.972-1.084a1.03 1.03 0 0 0-1.075 1.141v2.635h-.889v-4.503zM59.094 8.437h.888v6.26h-.888v-6.26zM61.218 12.444a2.134 2.134 0 1 1 4.247 0 2.133 2.133 0 1 1-4.247 0zm3.333 0c0-.976-.439-1.546-1.208-1.546-.773 0-1.207.57-1.207 1.546 0 .984.434 1.55 1.207 1.55.77 0 1.208-.57 1.208-1.55zM66.4 13.424c0-.81.604-1.277 1.676-1.344l1.22-.07v-.389c0-.476-.315-.744-.922-.744-.496 0-.84.182-.939.5h-.86c.09-.773.818-1.27 1.84-1.27 1.128 0 1.765.563 1.765 1.514v3.077h-.855v-.633h-.07a1.515 1.515 0 0 1-1.353.707 1.36 1.36 0 0 1-1.501-1.348zm2.895-.384v-.377l-1.1.07c-.62.042-.9.253-.9.65 0 .405.351.64.834.64a1.06 1.06 0 0 0 1.166-.983zM71.348 12.444c0-1.423.732-2.324 1.87-2.324a1.484 1.484 0 0 1 1.38.79h.067V8.437h.888v6.26h-.851v-.71h-.07a1.563 1.563 0 0 1-1.415.785c-1.145 0-1.869-.901-1.869-2.328zm.918 0c0 .955.45 1.53 1.203 1.53.75 0 1.212-.583 1.212-1.526 0-.938-.468-1.53-1.212-1.53-.748 0-1.203.58-1.203 1.526zM79.23 12.444a2.132 2.132 0 1 1 4.247 0 2.135 2.135 0 1 1-4.247 0zm3.333 0c0-.976-.439-1.546-1.208-1.546-.773 0-1.207.57-1.207 1.546 0 .984.435 1.55 1.207 1.55.77 0 1.208-.57 1.208-1.55zM84.67 10.195h.855v.715h.066a1.348 1.348 0 0 1 1.344-.802 1.464 1.464 0 0 1 1.559 1.675v2.915h-.889v-2.692c0-.724-.314-1.084-.972-1.084a1.03 1.03 0 0 0-1.075 1.141v2.635h-.889v-4.503zM93.515 9.074v1.141h.976v.749h-.976v2.315c0 .472.195.678.637.678.113 0 .226-.007.339-.02v.74c-.16.029-.322.044-.484.046-.988 0-1.382-.348-1.382-1.216v-2.543h-.714v-.749h.715V9.074h.89zM95.705 8.437h.88v2.482h.07a1.385 1.385 0 0 1 1.374-.807 1.482 1.482 0 0 1 1.55 1.678v2.908h-.889V12.01c0-.72-.335-1.084-.963-1.084a1.05 1.05 0 0 0-1.134 1.142v2.63h-.888V8.437zM104.761 13.482a1.823 1.823 0 0 1-1.951 1.303 2.045 2.045 0 0 1-2.08-2.325 2.077 2.077 0 0 1 2.076-2.352c1.253 0 2.009.856 2.009 2.27v.31h-3.18v.05a1.19 1.19 0 0 0 1.199 1.29 1.08 1.08 0 0 0 1.072-.546h.855zm-3.126-1.451h2.275a1.09 1.09 0 0 0-1.109-1.167 1.15 1.15 0 0 0-1.166 1.167z"
                          fill="#fff"
                        ></path>
                      </svg>
                    </a>
                  </AppStore>
                  <Accessbility>
                    <div>
                      <div>
                        <div>
                          <svg
                            width="21"
                            height="21"
                            viewBox="0 0 21 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6 8l4.035.913v3.155L8.142 17M15.216 8l-4.035.913v3.155L13.074 17"
                              stroke="#000"
                              strokeWidth="1.2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <circle cx="10.5" cy="10.5" r="9.5" stroke="#000" strokeLinecap="round"></circle>
                            <circle cx="10.5" cy="5.5" r="1.5" stroke="#000"></circle>
                          </svg>
                        </div>
                        <div style={{ paddingLeft: "8px" }}>
                          <a href="/accessibility-statement/">Accessibility Statement</a>
                        </div>
                      </div>
                    </div>
                  </Accessbility>
                </BarRight>
              </BarWrapper>
            </BottomBar>
          </footer>
        </Wrapper>
      </div>
    </div>
  );
}

export default Footer;
