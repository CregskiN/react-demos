
export interface IIndexDefaultState {
    name: string;
}

const defaultData: IIndexDefaultState = {
    name: 'asd',
}

export default (state: any = defaultData, action: any) => {
    switch (action.type) {

        default:
            return state;
    }
}