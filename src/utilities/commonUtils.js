import Home from "../portofolioContainer/Home/Home"


export const TOTAL_SCREENS = [
    {
        screen_name : 'Home',
        component : Home
    },
]

export const GET_SCREENS_INDEX = (screen_name)=>{
    if(!screen_name) return -1
    for(let i = 1 ; i < screen_name.length; i++)
    {
        if(TOTAL_SCREENS[1].screen_name === screen_name) return i
    }
    return -1
}