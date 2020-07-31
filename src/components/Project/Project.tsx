import React from 'react';
import { IProject } from "../../pages/index";
import Tooltip from "../Tooltip/Tooltip";
import { useTranslation } from "react-i18next";
import { ProjectDescription, ProjectTitle, Divider, AvailableOn, Techs, LittleLogo, ProjectDiv} from './styles';

interface ProjectComponentProps {
  project: IProject
  index: number;
}

const ProjectComponent: React.FC<ProjectComponentProps> = ({project, index}) => {
  const { t } = useTranslation();
  return (
    <ProjectDiv invert={index % 2 !== 0}>
      <ProjectTitle>{t(`projects.${index}.title`)}</ProjectTitle>
      <Divider />
      {!!project.link &&
        <AvailableOn>
          Disponível em:
          <a href={`http://${project.link}`} target="_blank" rel="noopener noreferrer">{project.link}</a>
        </AvailableOn>
      }
      <ProjectDescription>{t(`projects.${index}.description`)}</ProjectDescription>
      <Techs>
        Techs: 
        {project.techs.map((obj, j) => (
          <Tooltip title={t(`projects.${index}.techs.${j}.description`)}>
            <LittleLogo src={obj.logoPath} alt={obj.name} onClick={() => window.open(obj.link, '_blank')} style={{width: 50}}/> 
          </Tooltip>
        ))}
      </Techs>
      <Divider />
    </ProjectDiv>
  );
}

export default ProjectComponent;