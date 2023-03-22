import { useState } from 'react'
import { MdClose, MdMenu } from 'react-icons/md'


export default function Navbar() {
  const navItems = ['home', 'projetos', 'contato']

  const [open, setOpen] = useState<boolean>(false)

  return (
    <>
      <nav
        className={`${open ? 'h-screen w-screen' : 'w-full tablet:w-auto'} flex items-center justify-center fixed pl-6 z-50 laptop:h-full bg-[#fff]`}
      >
        <button
          onClick={() => setOpen(!open)}
          className={`block absolute top-4 right-4 laptop:hidden p-4 bg-[#fff] rounded-full ${open ? 'rotate-90 transition' : 'rotate-0 transition'}`}
        >
          {open ? <MdClose className='w-6 h-6 ' /> : <MdMenu className='w-6 h-6' />}
        </button>
        <div className={`laptop:block ${open ? 'block' : 'hidden'}`}>
          {navItems.map((item) => (
            <a href={`#${item}`} key={item} onClick={() => setOpen(false)}>
              <p className={`text-xl font-medium relative transition-all before:transition-all w-min-content
                before:w-0 before:h-1 before:absolute before:bottom-0 before:right-0
              before:bg-primary-blue hover:before:w-full before:duration-300 hover:before:left-0 mb-10`}
              >
                {item.toLocaleUpperCase()}
              </p>
            </a>))}
        </div>
      </nav>
    </>
  )
}

