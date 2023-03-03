export default function LayoutSidebar({ children }) {
  return (
    <div className='hidden lg:block relative shrink-0 w-[320px] p-10 min-h-screen'>
      { children }
    </div>
  )
}
