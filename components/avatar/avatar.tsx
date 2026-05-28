import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

export const AvatarBlock = ()=>{
return (
    <Avatar className='w-[150] h-[150] border-2 border-white'>
            <AvatarImage src='/me.jpg'></AvatarImage>
            <AvatarFallback></AvatarFallback>
        </Avatar>
)
    
}