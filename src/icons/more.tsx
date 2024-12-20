const More = ({color}: {color?: string}) => {
    return (
        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
                d='M5.6 10.4004C4.71634 10.4004 4 11.1167 4 12.0004C4 12.884 4.71634 13.6004 5.6 13.6004C6.48366 13.6004 7.2 12.884 7.2 12.0004C7.2 11.1167 6.48366 10.4004 5.6 10.4004Z'
                fill={color ?? '#292929'}/>
            <path
                d='M10.4 12.0004C10.4 11.1167 11.1163 10.4004 12 10.4004C12.8837 10.4004 13.6 11.1167 13.6 12.0004C13.6 12.884 12.8837 13.6004 12 13.6004C11.1163 13.6004 10.4 12.884 10.4 12.0004Z'
                fill={color ??  '#292929'}/>
            <path
                d='M16.8 12.0004C16.8 11.1167 17.5163 10.4004 18.4 10.4004C19.2837 10.4004 20 11.1167 20 12.0004C20 12.884 19.2837 13.6004 18.4 13.6004C17.5163 13.6004 16.8 12.884 16.8 12.0004Z'
                fill={color ?? '#292929'}/>
        </svg>
    )
}

export default More