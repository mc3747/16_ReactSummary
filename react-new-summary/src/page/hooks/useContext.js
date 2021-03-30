import React, { useContext } from "react";
/*
context：语境，上下文
*/
const colorContext = React.createContext("gray");
const textContext = React.createContext("apple");

function Bar() {
    const color = useContext(colorContext);
    return <div style={{ backgroundColor: color }}>{color}</div>;
}
function Foo() {
    return <Bar />;
}
function HeaderBar() {
    const color = useContext(colorContext);
    const text = useContext(textContext);
    return (
        <div>
            颜色{color}! 水果{text}
        </div>
    );
}

export default function UseContext() {
    return (
        <div>
            <colorContext.Provider value={"red"}>
                <Foo />
            </colorContext.Provider>
            <HeaderBar />
        </div>
    );
}
