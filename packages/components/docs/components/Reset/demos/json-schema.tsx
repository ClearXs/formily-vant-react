import React from "react";
// @ts-ignore
import {
  Switch,
  FormLayout,
  FormItem,
  FormButtonGroup,
  Submit,
} from "@formily/react-vant";
import { Dialog } from "react-vant";
import { createForm } from "@formily/core";
import { FormProvider, createSchemaField } from "@formily/react";

const SchemaField = createSchemaField({
  components: {
    Switch,
    FormItem,
  },
});

const form = createForm();
const schema = {
  type: "object",
  properties: {
    switch: {
      type: "boolean",
      title: "开关",
      "x-decorator": "FormItem",
      "x-component": "Switch",
    },
  },
};

export default () => {
  const onSubmit = (values: any) => {
    Dialog.alert({
      message: JSON.stringify(values),
    });
  };

  return (
    <FormProvider form={form}>
      <FormLayout>
        <SchemaField schema={schema} />
      </FormLayout>
      <FormButtonGroup>
        <Submit onSubmit={onSubmit}>提交</Submit>
      </FormButtonGroup>
    </FormProvider>
  );
};
