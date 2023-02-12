import { FC } from "react";

import { UtilityForm } from "@/app/components/organisms/utilityForm";

export const UtilityBar: FC = () => {
    return (
        <div className="w-full h-12 bg-indigo-100 mb-8 px-40">
            <UtilityForm/>
        </div>
    );
};