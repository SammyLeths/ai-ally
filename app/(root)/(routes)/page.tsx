import { UserButton } from '@clerk/nextjs';

const RootPage = () => {
  return (
    <div>
      <UserButton afterSignOutUrl='/' />
    </div>
  );
};

export default RootPage;
