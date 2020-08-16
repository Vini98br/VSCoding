import styled from 'styled-components';

export const SkillsWrapper = styled.div`
  /* display: flex;
  flex-flow: column wrap;
  height: 100%;
  */
  padding: 0 70px;
  margin-top: 10px; 
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(6,100px);
  grid-auto-flow: column;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(11,1fr);
  }
`;

export const SkillsTitle = styled.h2`
  font-size: 25px;
  margin-bottom: 20px;
`;

export const Skill = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 25px 60px 15px 10px;
`;

export const SkillLable = styled.p`
  font-size: 20px;
  margin-bottom: 20px;
`;

export const SkillRateDiv = styled.div`
  height: 20px;
  width: 100%;
  background-color: ${props => props.theme.colors.currentLine};
  border-radius:10px;
`;

export const SkillRate = styled.div<{rate: number}>`
  width: ${props => props.rate*100}%;
  height: 100%;
  border-radius:10px;
  background-color: ${props => props.theme.colors.green};
`;

export const Divider = styled.hr`
  width: 25%;
  border: 1px solid ${props => props.theme.colors.currentLine};
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 50px;
  @media screen and (min-width: 660px) and (max-width:1080px){
    ${Skill} {
      padding: 10px 60px 15px 10px;
    }
    ${SkillRateDiv}{
      height: 15px;
    }
    ${SkillsWrapper}{
      height: 90%;
    }
  }
  @media screen and (min-width: 425px) and (max-width:659px){
    ${Skill} {
      padding: 10px 50px 15px 10px;
    }
    ${SkillRateDiv}{
      height: 15px;
    }
    ${SkillsWrapper}{
      height: 95%;
      padding: 0 0 40px 40px;
    }
    ${SkillLable}{
      font-size: 18px;
    }
  }
  @media screen and (max-width:424px),  (max-height: 768px){
    ${Skill} {
      padding: 10px 40px 15px 10px;
    }
    ${SkillRateDiv}{
      height: 15px;
    }
    ${SkillLable}{
      font-size: 16px;
    }
    ${SkillsWrapper}{
      height: 100%;
      padding: 0 0 30px 30px;
    }
  }
`;