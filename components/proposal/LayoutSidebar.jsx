export default function LayoutSidebar({ children }) {
  return (
    <div className='hidden lg:block fixed shrink-0 w-[320px] p-10 min-h-screen max-h-screen overflow-y-auto'>
      { children }
    </div>
  )
}
