export const ColorConfiguration = () => {
  return (
    <>
      <h3 className=' text-xl font-semibold mt-8 text-white'>Colors</h3>
      <div className='p-6 rounded-md border mt-4 border-border'>
        <p className='text-base font-medium text-muted/60'>
          <span className='font-semibold text-lg text-white'>
            1. Override Colors
          </span>{' '}
          <br />
          For any change in colors : /src/app/globals.css
        </p>
        <div className='py-4 px-5 rounded-md bg-dark_grey mt-8'>
          <p className='text-sm text-gray-400 flex flex-col gap-2'>
            <span>--primary: oklch(84.972% 0.12016 146.073);</span>
            <span>--secondary: oklch(75.768% 0.125 198.173);</span>
            <span>--foreground: #263238;</span>
            <span>--muted: oklch(88.911% 0.00329 198.79);</span>
            <span>--destructive: oklch(56.165% 0.19591 28.745);</span>
            <span>--background: oklch(100% 0.00011 271.152);</span>
            <span>--border: oklch(100% 0.00011 271.152 / 0.102);</span>
          </p>
        </div>
      </div>
      <div className='p-6 rounded-md border mt-4 border-border'>
        <p className='text-base font-medium text-muted/60'>
          <span className='font-semibold text-lg text-white'>
            2. Override Theme Colors
          </span>{' '}
          <br />
          For change , go to : /src/app/globals.css
        </p>
        <div className='py-4 px-5 rounded-md bg-dark_grey mt-8'>
          <p className='text-sm text-gray-400 flex flex-col gap-2'>
            <span>--primary: oklch(84.972% 0.12016 146.073);</span>
            <span>--secondary: oklch(75.768% 0.125 198.173);</span>
          </p>
        </div>
      </div>
    </>
  )
}
