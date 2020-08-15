import React from 'react';
import { ParallaxLayer } from 'react-spring/renderprops-addons';
import { GithubOutlined, LinkedinOutlined, InstagramOutlined } from "@ant-design/icons";
import { StyledParallaxLayer, IconsWrapper, Copyright, IconButton } from './styles';

interface Social {
  name: string;
  link: string;
}

export interface FooterProps {
  pages: number;
  social: Social[];
}

const Footer: React.FC<FooterProps> = ({pages, social}) => {
  const logos = {
    GitHub: <GithubOutlined style={{fontSize: '18px'}}/>,
    Linkedin: <LinkedinOutlined style={{fontSize: '18px'}}/>,
    Instagram: <InstagramOutlined style={{fontSize: '18px'}}/>
  };
  console.log(social)

  return (
    <StyledParallaxLayer factor={0.05} offset={pages - 0.1}>
      <Copyright>Copyright © 2020. All rights reserved.</Copyright>
      <IconsWrapper>
        {social.map(item => (
          <IconButton key={item.name} icon={logos[`${item.name}`]} shape='circle' onClick={() => window.open(item.link, '_blank')}/>
        ))}
      </IconsWrapper>
    </StyledParallaxLayer>
  );
}

export default Footer;