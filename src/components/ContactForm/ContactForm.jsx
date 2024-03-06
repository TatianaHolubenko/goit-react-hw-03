import { Field, Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";

export default function ContactForm({ addContact }) {
  const initialValues = { name: "", number: "" };
  const userNameId = useId();
  const userNumberId = useId();

  function handleSubmit(values, actions) {
    addContact({
      name: values.name.trim(),
      number: values.number.trim(),
      id: nanoid(),
    });
    actions.resetForm();
  }

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={css.formContainer}>
        <div className={css.fieldContainer}>
          <label htmlFor={userNameId}>Name</label>
          <Field
            className={css.input}
            type="text"
            name="name"
            id={userNameId}
          />
          <ErrorMessage name="name" component="span" className={css.error} />
        </div>
        <div className={css.fieldContainer}>
          <label htmlFor={userNumberId}>Number</label>
          <Field
            className={css.input}
            type="tel"
            name="number"
            id={userNumberId}
          />
          <ErrorMessage name="number" component="span" className={css.error} />
        </div>
        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
