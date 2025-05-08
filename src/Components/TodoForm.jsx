import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { TextField, Button } from "@mui/material";

const TodoForm = ({ onAdd }) => (
  <Formik
    initialValues={{ title: "", description: "" }}
    validationSchema={Yup.object({
      title: Yup.string().required("Required"),
    })}
    onSubmit={(values, { resetForm }) => {
      onAdd({ ...values, completed: false });
      resetForm();
    }}
  >
    <Form>
      <Field name="title" as={TextField} fullWidth label="Title" margin="normal" helperText={<ErrorMessage name="title" />} />
      <Field name="description" as={TextField} fullWidth label="Description" margin="normal" />
      <Button type="submit" variant="contained" sx={{ mt: 1 }}>Add Task</Button>
    </Form>
  </Formik>
);

export default TodoForm;