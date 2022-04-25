
import styled from "styled-components";

export const HeaderWrap = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 0 15px;
  flex-wrap: wrap;
  margin-bottom: 40px;
`;
export const HeaderTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 50%;
`;
export const HeaderContent = styled.div`
  width: 50%;
  & h3 {
    text-transform: uppercase;
    padding-bottom: 5px;
    font-size: 24px;
    text-align: left;
    :after {
      left: 0;
    }
  }     
`;
