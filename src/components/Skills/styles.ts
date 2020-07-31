import styled from 'styled-components';


export const SkillsWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 100%;
  height: 120%;
  padding: 0 70px;
  margin-top: 10px;
`;

export const SkillsTitle = styled.h2`
  font-size: 25px;
  margin-bottom: 20px;
`;

export const Skill = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 25px 60px 15px 10px;
`;

export const SkillLable = styled.p`
  font-size: 20px;
  margin-bottom: 20px;
`;

export const SkillRateDiv = styled.div`
  height: 20px;
  width: 100%;
  background-color: ${props => props.theme.colors.cyan}9e;
  border-radius:10px;
`;

export const SkillRate = styled.div<{rate: number}>`
  width: ${props => props.rate*100}%;
  height: 100%;
  border-radius:10px;
  background-color: ${props => props.theme.colors.cyan};
`;

export const Divider = styled.hr`
  width: 25%;
  border: 1px solid ${props => props.theme.colors.currentLine};
`;

export const SkillsDiv = styled.div`
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
      height: 95%;
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
  @media screen and (min-width: 320px) and (max-width:424px){
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
      height: 95%;
      padding: 0 0 30px 30px;
    }
  }
`;