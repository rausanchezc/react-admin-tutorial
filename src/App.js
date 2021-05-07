import * as React from "react";
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from "./users";
import { PostEdit, PostList, PostCreate } from "./posts";
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import Dashboard from "./Dashboard";
import authProvider from "./authProvider";

// TODO define real data provider
// https://marmelab.com/react-admin/Tutorial.html#connecting-to-a-real-api

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
    <Admin
        dashboard={Dashboard}
        dataProvider={dataProvider}
        authProvider={authProvider}
    >
        <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
        <Resource name="users" list={UserList} icon={UserIcon}/>
    </Admin>
);

export default App;