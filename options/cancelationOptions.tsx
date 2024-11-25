export interface CancelObjProp {
    id: number,
    sign: string,
    title: string,
}
export const CancelObj: CancelObjProp[] = [
    {id: 0, sign: 'both', title: 'Both parties can cancel the stream'},
    {id: 1, sign: 'sender', title: 'Only sender can cancel the stream'},
    {id: 2, sign: 'recipient', title: 'Only recipient can cancel the stream'},
    {id: 3, sign: 'nobody', title: 'No one can cancel the stream'},
]