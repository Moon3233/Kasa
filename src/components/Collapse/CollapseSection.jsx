import React from "react";
import Collapse from "./Collapse";

function CollapseSection({ sections }) {
    return (
        <>
            {sections.map((section, index) => (
                <Collapse key={index} title={section.title} content={section.content} />
            ))}
        </>
    );
}

export default CollapseSection;
