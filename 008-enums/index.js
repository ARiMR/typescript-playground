// ------------------------------------------------------------------------------------------------------------------ //
var EState;
(function (EState) {
    EState[EState["NEW"] = 0] = "NEW";
    EState[EState["ACCEPTED"] = 1] = "ACCEPTED";
    EState[EState["REJECTED"] = 2] = "REJECTED";
    EState[EState["FINISHED"] = 3] = "FINISHED";
})(EState || (EState = {}));
console.log(EState.ACCEPTED);
// ------------------------------------------------------------------------------------------------------------------ //
var EBetterState;
(function (EBetterState) {
    EBetterState["NEW"] = "NEW";
    EBetterState["ACCEPTED"] = "ACCEPTED";
    EBetterState["REJECTED"] = "REJECTED";
    EBetterState["FINISHED"] = "FINISHED";
})(EBetterState || (EBetterState = {}));
console.log(EBetterState.ACCEPTED);
