import MenuItem from "./MenuItem"
import Link from 'next/link';
import {AiFillHome}  from 'react-icons/ai'
import {BsFillInfoCircleFill}  from 'react-icons/bs'

export default function Header() {
  return (
<div className='flex justify-between items-center p-3 max-w-6xl mx-auto' >
    <div className='flex gap-4'>
      <MenuItem title='home' address='/' Icon={AiFillHome}/>
      <MenuItem title='anout' address='/about' Icon={BsFillInfoCircleFill}/>
    </div>

   <Link href={'/'}className="flex gap-1 items-center">
    <span className='text-2xt font-bold bg-amber-500 py-1 px-2 rounded-lg'>
      IMDb
    </span>
    <span className='text-xl hidden sm:inline'>Clone</span>
  </Link>
</div>
  )
}