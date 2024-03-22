import { React, memo } from "react";
// Since i have wrapped the child-component with memo but still it re-render this is due to referential equality 
function ChildComponent({ learning }) {
    console.log(">> I am child component");
    return (
        <>

        </>
    )
}

// here i have cover childcomponent with memo
export default memo(ChildComponent);