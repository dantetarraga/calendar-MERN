const AuthLayout = ({ children, title = '', subtitle = '' }) => {
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]'>
        <div className='absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]' />
      </div>

      <main className='max-w-[600px] md:w-2/4 w-5/6 bg-white p-5 rounded-lg shadow-sm'>
        <div className='mb-5 text-center'>
          <h1 className='md:text-3xl text-xl font-bold text-gray-700'>{title}</h1>
          <p className='md:text-sm text-xs text-slate-400'>{subtitle}</p>
        </div>

        {children}
      </main>
    </div>
  )
}

export default AuthLayout
