import {useState} from "react";
import {ResumeEntry, ResumeEntryConfiguration} from "./ResumeEntry";

export type ResumeSectionProps = {
    title: string;
    items: ResumeEntryConfiguration[];
};

export function ResumeSection({title, items}: ResumeSectionProps) {
    const [selected, setSelected] = useState<number | undefined>();

    return (
        <div className="grow py-2">
            <h2>{title}</h2>
            <div className="grid justify-items-stretch gap-0.5 p-2">
                {items.map((item, index) => (
                    <ResumeEntry
                        key={index}
                        open={selected === index}
                        onClick={() => setSelected(prev => index === prev ? undefined : index)}
                        {...item}
                    />
                ))}
            </div>
        </div>
    )
}