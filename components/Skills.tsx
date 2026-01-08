import { skills } from "@/data/skills";
import { Panel, PanelHeader, PanelTitle, PanelContent } from "@/components/ui/panel";

export default function Skills() {
    return (
        <Panel id="skills">
            <PanelHeader>
                <PanelTitle>Skills</PanelTitle>
            </PanelHeader>

            <PanelContent>
                <div className="flex flex-wrap gap-1.5">
                    {skills.map((skill) => (
                        <span
                            key={skill.name}
                            className="px-2 py-0.5 text-xs rounded border border-muted-foreground/15 bg-muted text-muted-foreground"
                        >
                            {skill.name}
                        </span>
                    ))}
                </div>
            </PanelContent>
        </Panel>
    );
}
