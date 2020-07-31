import React from 'react';
import { ISkill } from "../../pages/index";
import { 
  SkillsDiv, SkillsTitle, Skill, SkillLable, SkillRate, 
  Divider, SkillRateDiv,SkillsWrapper 
} from './styles';

const Skills: React.FC<{skills: ISkill[]}>= ({skills}) => {
  return (
    <SkillsDiv>
      <SkillsTitle>Skills</SkillsTitle>
      <Divider />
      <SkillsWrapper>    
        {skills.map(obj => (
          <Skill>
            <SkillLable>
              {obj.name} 
            </SkillLable>
            <SkillRateDiv>
              <SkillRate rate={obj.rate} />
            </SkillRateDiv>
          </Skill>
        ))}
      </SkillsWrapper>
    </SkillsDiv>
  );
}

export default Skills;