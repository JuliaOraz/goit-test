import styled from "styled-components";

export const CardItem = styled.li`
  list-style: none;
  width: 380px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  text-align: center;
  margin-bottom: 25px;

  @media screen and (min-width: 768px) {
    margin-left: 6px;
    margin-right: 6px;
  }
  @media screen and (min-width: 1215px) {
    margin-bottom: 0;
  }
`;
export const CardHead = styled.div`
  position: relative;
  padding: 20px;
`;
export const CardLogo = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
`;
export const CardBody = styled.div`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 8px;
    background: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }
`;
export const CardAvatarWrapp = styled.div`
  position: absolute;
  top: -38px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 80px;
  background: rgb(235, 216, 255);
  box-shadow: rgb(0 0 0 / 6%) 0px 4.39163px 4.39163px,
    rgb(174 123 227) 0px -2.19582px 4.39163px inset,
    rgb(251 248 255) 0px 4.39163px 3.29372px inset;
  border-radius: 100%;
  padding: 8px;
  box-sizing: border-box;
`;
export const CardAvatarInner = styled.div`
  background: rgb(87, 54, 163);
  border-radius: 100%;
  overflow: hidden;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;
export const CardAvatar = styled.img`
  max-height: 100%;
  max-width: 100%;
  height: 62px;
  width: 62px;
`;
export const CardBox = styled.div`
  padding: 62px 20px 36px;
`;
export const CardСounter = styled.p`
  font-weight: 500;
  font-size: 20px;
  text-transform: uppercase;
  color: #ebd8ff;

  &:not(:first-child) {
    margin-top: 16px;
  }
`;
export const CardBtn = styled.button`
  margin-top: 26px;
  width: 196px;
  background: #ebd8ff;
  color: #373737;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 18px;
  padding: 14px 28px;
  border: none;
  cursor: pointer;
`;
export const CardBtnActive = styled(CardBtn)`
  background: #5cd3a8;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
`;
