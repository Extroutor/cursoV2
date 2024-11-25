export interface StatusObjProp {
    id: number,
    title: string,
    color: string,
    bgcolor: string,
}
export const StatusObj: StatusObjProp[] = [
    {id: 0, title: 'Processed', color: '#F08B34', bgcolor: '#FFDFC3'},
    {id: 1, title: 'Cancelled', color: '#FF847E', bgcolor: '#FFE0DE'},
    {id: 2, title: 'Paused', color: '#5188FF', bgcolor: '#D7E4FF'},
    {id: 3, title: 'Completed', color: '#09BC8A', bgcolor: '#D5F5EA'},
    {id: 4, title: 'Planned', color: '#696969', bgcolor: '#E5E5E5'},
]