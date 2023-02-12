import { FC } from "react";

import { DashboardPostList } from "@/app/components/dashboard/postList";

export const DashboardPage: FC = () => {
    return (
        <div className="px-20">
            <h1 className="text-3xl font-bold">Products</h1>
            <DashboardPostList/>
        </div>
    );
};