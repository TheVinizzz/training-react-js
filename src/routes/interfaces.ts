import { FC } from "react";

export type IRoutes = {
    exact?: boolean;
    path: string;
    component: FC<any>;
    routes?: IRoutes[]
}