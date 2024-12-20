import { ButtonSubmit, LabelTeam, TitleForm, StyledInput, FormContainer, StyledTextarea, ErrorMsg} from "./Contacts.style"
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
export default function Contacts(){
    const validationSchema = Yup.object({
        name: Yup.string()
          .required('Обов"язкове поле для заповнення '),
        phone: Yup.string()
          .matches(
            /^(\+3|8)\d{10}$/,
            'Введиіть вірний номер телефона (наприклад +380960000000)'
          )
          .required('Обов"язкове поле для заповнення'),
        message: Yup.string()
          .required('Обов"язкове поле для заповнення')
          .min(5, 'Повідомлення має містити мінімум 5 символів'),
      });
    return(
        <>
    <FormContainer id="contacts">
      <TitleForm>Контактна форма для замовлення</TitleForm>
      <Formik
        initialValues={{ name: '', phone: '', message: '' }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log('Заявка відправлена: ', values);
        }}
      >
        {() => (
            
          <Form>
            <div>
              <LabelTeam htmlFor="name">Ваше ім*я</LabelTeam>
              <Field
                type="text"
                id="name"
                name="name"
                placeholder="Введіть ваше і*мя"
                component={StyledInput}
              />
              <ErrorMessage name="name" component="div" className="error" />
            </div>
            <div>
              <LabelTeam htmlFor="phone">Телефон</LabelTeam>
              <Field
                type="text"
                id="phone"
                name="phone"
                placeholder="Ваш телефон"
                component={StyledInput}
              />
              <ErrorMessage name="phone" component="div" className="error" />
            </div>
            <div>
              <LabelTeam htmlFor="message">Повідомлення</LabelTeam>
              <Field
                as="textarea"
                id="message"
                name="message"
                placeholder="Ваше повідомлення"
                component={StyledTextarea}
              />
              <ErrorMessage name="message"  render={(msg) => <ErrorMsg>{msg.message}</ErrorMsg>}/>
            </div>
            <ButtonSubmit type="submit">Відправити заявку</ButtonSubmit>
          </Form>
        )}
      </Formik>
      </FormContainer>
        </>
    )
}



  

