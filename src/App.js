import "./App.css";
import React from "react";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";

// components
import AuthProvider from "./components/AuthProvider";
import Dashboard from "./components/Dashboard";
import { PostList, PostEdit, PostCreate } from "./components/Posts";
import UserList from "./components/UserList";

// icons
import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

function App() {
  return (
    <Admin
      dashboard={Dashboard}
      authProvider={AuthProvider}
      dataProvider={dataProvider}
    >
      <Resource
        name="posts"
        list={PostList}
        edit={PostEdit}
        create={PostCreate}
        icon={PostIcon}
      />
      <Resource
        name="users"
        list={UserList}
        recordRepresentation="name"
        icon={UserIcon}
      />
    </Admin>
  );
}

export default App;
