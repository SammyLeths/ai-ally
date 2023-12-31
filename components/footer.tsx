import Link from "next/link";

const credit = "<SammyLeths />";

const Footer = () => {
  return (
    <div className="flex w-full justify-center px-4 lg:px-8 fixed bottom-0 p-2 bg-primary/10 text-primary text-sm">
      A project by &nbsp;
      <Link
        className="font-bold hover:text-primary/60"
        href="https://www.sammyleths.com"
        target="_blank"
      >
        {credit}
      </Link>
    </div>
  );
};

export default Footer;
