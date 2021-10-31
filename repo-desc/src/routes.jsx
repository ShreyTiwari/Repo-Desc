import {HomePage} from './containers/HomePage/HomePage';
import {ActionPage} from './containers/ActionPage/ActionPage';

const RepoRoutes = [
    {
        path: "/repo/:id",
        name: "Repository",
        component: ActionPage,
        layout: "",
        exact: false,
    },
    {
        path: "/repo",
        name: "HomePage",
        component: HomePage,
        layout: "",
        exact: true,
    },
];

export default RepoRoutes;