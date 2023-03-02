export default function LayoutSidebar({ children }) {
  return (
    <div className='relative shrink-0 w-[320px] p-10 min-h-screen max-h-screen overflow-y-auto'>
        {/* border */}
        <div className='absolute top-[126px] h-px left-0 right-0 bg-gray-200'></div>
        
        { children }
    </div>
  )
}
