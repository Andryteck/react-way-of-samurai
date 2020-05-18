export type SideBarNameType = {
    name: string
}

type SideBarType =
    Array<SideBarNameType>


let initialState: SideBarType =
    [
        {name: 'Andrew'},
        {name: 'Sasha'},
        {name: 'Sveta'}
    ]


const sidebarReducer = (state = initialState, action: any) => {

    return state
}

export default sidebarReducer