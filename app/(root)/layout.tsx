const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='h-full'>
      <main className='md:pl-20 pt-16 h-full'>{children}</main>
    </div>
  );
};

export default RootLayout;
