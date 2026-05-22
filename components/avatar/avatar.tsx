import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

export const AvatarBlock = ()=>{
return (
    <Avatar className='w-[70] h-[70] border-2 border-white'>
            <AvatarImage src='/nazar.jpg'></AvatarImage>
            <AvatarFallback></AvatarFallback>
        </Avatar>
)
    
}