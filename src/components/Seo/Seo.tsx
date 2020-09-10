import React from 'react';
import { Helmet } from 'react-helmet';
import i18n from '../../i18n/i18n';

// import { Container } from './styles';
export interface SEOProps {
  title: string; 
  description: string; 
  image: string;
  url: string
}

const Seo: React.FC<SEOProps> = ({title, description, image, url}) => {
  return (
    <Helmet title={title}>
      <html lang={i18n.language}/>
      <title>VSCoding | HOME</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1" />
      <meta name="image" content={image} />
      <meta name="twitter:image" content={image} /> 
      <meta property="og:image" content={image} />
      <meta property="og:title" content={title} />
      <meta name="twitter:title" content={title} />
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta name="twitter:description" content={description} />
      <meta property="og:url" content={url} />
      <link rel="preconnect" href="https://www.linkedin.com/in/vinicius-soran%C3%A7o/" crossOrigin=''></link>
    </Helmet>
  );
}

export default Seo;