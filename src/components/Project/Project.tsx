import React from 'react';
import { IProject } from "../../pages/types";
import Tooltip from "../Tooltip/Tooltip";
import { useTranslation } from "react-i18next";
import { ProjectDescription, ProjectTitle, Divider, AvailableOn, Techs, LittleLogo, Container, FeaturedImage, FeaturedImagesWrapper, SeeMore} from './styles';
import ImagesCarrousel from '../ImagesCarrousel/index';

interface ProjectComponentProps {
  project: IProject
  index: number;
  techsImages: any[],
  images: any[]
}

const ProjectComponent: React.FC<ProjectComponentProps> = ({project, index, techsImages, images}) => {
  const { t, i18n } = useTranslation(['projects', 'translation']);
  return (
    <Container invert={index % 2 !== 0}>
      <ProjectTitle>{t(`projects:${index}.title`)}</ProjectTitle>
      <Divider />
      {!!project.link &&
        <AvailableOn>
          Disponível em:
          <a href={`http://${project.link}`} target="_blank" rel="noopener noreferrer">{project.link}</a>
        </AvailableOn>
      }
      <ProjectDescription>{t(`projects:${index}.description`)}</ProjectDescription>
      <Techs flexDirection={techsImages.some(obj => obj.fixed.width > 250) ? 'column' : 'row'}>
        Techs: 
        {techsImages.map((obj, j) => (
          <Tooltip key={j} title={t(`projects:${index}.techs.${j}.description`)}>
            <div onClick={() => window.open(project.techs[j].link, '_blank')}>
              <LittleLogo fixed={obj.fixed} alt={obj.fixed.originalName} />
            </div>
          </Tooltip>
        ))}
      </Techs>
      <Divider />
      <ImagesCarrousel invert={index % 2 !== 0} images={images} />
      {/* <FeaturedImagesWrapper>
        {project.featuredImages.map(img => (
          <FeaturedImage src={img.path}/>
        ))}
        <SeeMore to={`/gallery/${project.imagesDirectory}/`}>
          <div>
          Ver mais
          </div>
        </SeeMore>
      </FeaturedImagesWrapper> */}
    </Container>
  );
}

export default React.memo(ProjectComponent);