import Image from 'next/image'
import Button from '../ui/proposal/Button'

export default function Sidebar() {
  return (
    <div className='h-full flex flex-col justify-between'>
        {/* menu */}
        <div className='flex flex-col gap-y-[120px]'>
            {/* Logo */}
            <div className="w-full h-[48px]">
            <Image 
                src='/proposal/logo.svg' 
                width={200} 
                height={48} 
                alt='' 
                className='h-full w-auto max-w-full max-h-full' 
            />  
            </div>

            {/* Navigation */}
            <div className='flex flex-col gap-y-20'>
                <div className='flex flex-col gap-y-6'>
                    <p className='text-sidebar-subtitle'>
                        Contenuti
                    </p>

                    <div className="flex flex-col">
                        <button className='button-sidebar-menu'>
                            Overview
                        </button>
                        <button className='button-sidebar-menu'>
                            Project goals
                        </button>
                        <button className='button-sidebar-menu'>
                            Delivereables
                        </button>
                        <button className='button-sidebar-menu button-sidebar-menu-active'>
                            Pricing
                        </button>
                        <button className='button-sidebar-menu'>
                            Timeline and process
                        </button>
                        <button className='button-sidebar-menu'>
                            Next steps
                        </button>
                    </div>
                </div>
                <Button
                    text='View contract'
                    color='primary'
                    size='large'
                />
            </div>
        </div>

        {/* description */}
        <div></div>
    </div>
  )
}
