import React from 'react';
import { useTranslation } from "react-i18next";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers';
import emailjs from 'emailjs-com';
import NumberFormat from "react-number-format";
import Swal from 'sweetalert2';
import * as yup from "yup";
import { ContactDiv, ContactTitle, Input, Form, Divider, TextArea, 
  Label, FormControl, ErrorMessage, RedSpan, SubmitButton
} from './styles';

interface IFormInputs {
  name: string;
  email: string;
  subject?: string;
  phone?: string;
  message: string;
}

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  subject: yup.string().notRequired(),
  phone: yup.string().notRequired(),
  message: yup.string().required(),
})

const ContactForm: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isPT = i18n.language === 'pt';
  const { handleSubmit, register, errors, control } = useForm<IFormInputs>({
    resolver: yupResolver(schema)
  });
  const onSubmit = (data: IFormInputs ) => {
    emailjs.send('my_gmail_service','my_template', data, 'user_kWJIc0v20AkWUP4HXdHeA')
    .then(() => {
      isPT ?
        Swal.fire(
          'E-mail enviado!',
          'Obrigado! Em breve entrarei em contato!',
          'success'
        )
      :
        Swal.fire(
          'E-mail sent!',
          'Thank u! Soon i will get in touch!',
          'success'
        );

   }, () => {
    isPT ?
      Swal.fire(
        'Desculpe! :(',
        'Ocorreu um erro no envio do e-mail!',
        'error'
      )
    :
      Swal.fire(
        'Sorry! :(',
        'An error occurred on the e-mail sending!',
        'error'
      )
   });
  }

  const getFieldError = (error, fieldName = '') => {
    if(error){
      if(!!fieldName && error.type === fieldName)
        return t(`${fieldName}Invalid`);
      else
        return t(`${fieldName}Required`);
    }
  }

  return (
    <ContactDiv>
      <ContactTitle>{t('getInTouch')}</ContactTitle>
      <Divider />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <Label htmlFor='name'>{t('nameLabel')}<RedSpan>*</RedSpan></Label>
          <Input ref={register} name='name' id='name' placeholder={t('namePlaceholder')}/>
          <ErrorMessage>{getFieldError(errors.name, 'name')}</ErrorMessage>
        </FormControl>
        <FormControl>
          <Label htmlFor='email'>{t('emailLabel')}<RedSpan>*</RedSpan></Label>
          <Input ref={register} name='email' id='email' placeholder={t('emailPlaceholder')}/>
          <ErrorMessage>{getFieldError(errors.email, 'email')}</ErrorMessage>
        </FormControl>
        <FormControl>
          <Label htmlFor='phone'>{t('phoneLabel')}</Label>
          <Controller 
            name='phone' 
            control={control}
            as={PhoneNumberInput}
          />
          <ErrorMessage>{errors.phone?.message}</ErrorMessage>
        </FormControl>
        <FormControl>
          <Label htmlFor='subject'>{t('subjectLabel')}</Label>
          <Input ref={register} name='subject' id='subject' placeholder={t('subjectPlaceholder')}/>
          <ErrorMessage>{errors.subject?.message}</ErrorMessage>
        </FormControl>
        <FormControl>
          <Label htmlFor='message'>{t('messageLabel')}<RedSpan>*</RedSpan></Label>
          <TextArea ref={register} name='message' id='message' placeholder={t('messagePlaceholder')}/>
          <ErrorMessage>{getFieldError(errors.message, 'message')}</ErrorMessage>
        </FormControl>
        <SubmitButton type='submit'>{t('Send')}</SubmitButton>
      </Form>
    </ContactDiv>
  );
}

const PhoneNumberInput = ({onChange, value, ...rest}) => {
  const { t, i18n } = useTranslation();
  const [state, setState] = React.useState(value);
  return (
    <NumberFormat 
      {...rest}
      value={state}
      format={i18n.language === 'pt' ? "(##) #####-####" : "+1 (###) ###-####"} 
      mask=" " 
      placeholder={t('phonePlaceholder')} 
      customInput={Input}
      onValueChange={target => {
        setState(target.value);
        onChange(target.value);
      }}
      isNumericString
    />
  );
}


export default ContactForm;