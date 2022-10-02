import React from "react";
import {
  useRecordContext,
  List,
  SimpleList,
  ReferenceField,
  Edit,
  Create,
  SimpleForm,
  ReferenceInput,
  TextInput,
  Datagrid,
  TextField,
  EditButton,
} from "react-admin";
import { useMediaQuery } from "@mui/material";

// post title
const PostTitle = () => {
  const record = useRecordContext();
  return <span>Post {record ? `"${record.title}"` : ""}</span>;
};

// post list
export const PostList = () => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    // post filter
    <List>
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.title}
          secondaryText={(record) => (
            <ReferenceField label="User" source="userId" reference="users" />
          )}
        />
      ) : (
        <Datagrid>
          <TextField source="id" />
          <ReferenceField label="User" source="userId" reference="users" />
          <TextField source="title" />
          <TextField source="body" />
          <EditButton />
        </Datagrid>
      )}
    </List>
  );
};

// post edit
export const PostEdit = () => {
  return (
    <Edit title={<PostTitle />}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <ReferenceInput source="userId" reference="users" />
        <TextInput source="title" />
        <TextInput multiline source="body" />
      </SimpleForm>
    </Edit>
  );
};

// post create
export const PostCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput source="userId" reference="users" />
      <TextInput source="title" />
      <TextInput multiline source="body" />
    </SimpleForm>
  </Create>
);
