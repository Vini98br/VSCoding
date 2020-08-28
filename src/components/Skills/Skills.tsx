import React from 'react';
import { ISkill } from "../../pages/index";
import { useTranslation } from "react-i18next";
import { 
  Container, SkillsTitle, Skill, SkillLable, SkillRate, 
  Divider, SkillRateDiv,SkillsWrapper 
} from './styles';

const Skills: React.FC<{skills: ISkill[]}>= ({skills}) => {
  const { t } = useTranslation();
  return (
    <Container>
      <SkillsTitle>{t('skillSectionTitle')}</SkillsTitle>
      <Divider />
      <SkillsWrapper>    
        {skills.map(obj => (
          <Skill key={obj.id}>
            <SkillLable>
              {obj.name} 
            </SkillLable>
            <SkillRateDiv>
              <SkillRate rate={obj.rate} />
            </SkillRateDiv>
          </Skill>
        ))}
      </SkillsWrapper>
    </Container>
  );
}

export default React.memo(Skills);