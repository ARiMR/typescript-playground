type State = 'NEW' | 'ACCEPTED' | 'REJECTED' | 'FINISHED';

// ------------------------------------------------------------------------------------------------------------------ //

enum EState {
    NEW,
    ACCEPTED,
    REJECTED,
    FINISHED
}

console.log(EState.ACCEPTED);

// ------------------------------------------------------------------------------------------------------------------ //

enum EBetterState {
    NEW = 'NEW',
    ACCEPTED = 'ACCEPTED',
    REJECTED = 'REJECTED',
    FINISHED = 'FINISHED'
}

console.log(EBetterState.ACCEPTED);