import React, {ReactNode} from "react";
import {Collapse} from "../../util/Collapse";
import classNames from "classnames";


export interface ResumeEntryConfiguration {
    title: string;
    subtitle?: string;
    description?: ReactNode;
    timeframe?: string;
}

export interface ResumeEntryProps extends ResumeEntryConfiguration {
    open: boolean;
    onClick: () => void;
}

export function ResumeEntry({title, subtitle, description, timeframe, open, onClick}: ResumeEntryProps) {
    return (
        <div
            className={classNames(
                "p-1 hover:rounded-xl hover:shadow",
                {"cursor-pointer": description !== undefined},
            )}
            onClick={onClick}
        >
            <div className="flex grow justify-between">
                <div>
                    <p className="text-xl">{title}</p>
                    {subtitle ? <p className="text-sm text-gray-500">{subtitle}</p> : null}
                </div>
                {timeframe ? (
                    <p className="text-sm text-gray-500 ml-2">{timeframe}</p>
                ) : null}
            </div>
            {description ? (
                <Collapse open={open}>
                    <hr/>
                    <p>{description}</p>
                </Collapse>
            ) : null}
        </div>
    )
}