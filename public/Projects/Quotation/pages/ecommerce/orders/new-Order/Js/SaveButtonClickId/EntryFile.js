import { StartFunc as StartFuncButtonClickFunc } from "./ButtonClickFunc.js";

let StartFunc = () => {
    let jVarLocalNewSaveId = document.getElementById("NewSaveId");

    if (jVarLocalNewSaveId === null === false) {
        jVarLocalNewSaveId.addEventListener("click", StartFuncButtonClickFunc);
    };
};

export { StartFunc };