import dialogsReducer, {MessagesPageType, sendMessageCreator,} from './dialogs-reducer';


test('correct body should be added to correct array', () => {

    const startState: MessagesPageType = {
        messagesData:
            [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'yoyoyo'},
                {id: 3, message: 'Wai'},
                {id: 4, message: 'yoyoyooyoy'}
            ],
        dialogData: [
            {id: 1, name: 'Dima'},
            {id: 2, name: 'Andrei'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sacha'}
        ],
        newMessageBody: ''
};

const action = sendMessageCreator();

const endState = dialogsReducer(startState, action)

expect(endState.messagesData.length).toBe(5);
// expect(endState["todolistId2"].every(t => t.id != "2")).toBeTruthy();
});

