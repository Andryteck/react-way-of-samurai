export type FriendsType = { id: number, name: string, isOnline: boolean }

let initialState = [
    {id: 1, name: 'Andrei', isOnline: true},
    {id: 2, name: 'Sveta', isOnline: false},
    {id: 3, name: 'Dimych', isOnline: true}
]

type ActionType = {
    type: any
}

const navbarReducer = (state: Array<FriendsType> = initialState, action: ActionType) => {
    switch (action.type) {

    }
    return state
}




export default navbarReducer