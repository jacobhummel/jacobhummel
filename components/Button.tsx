import Link from "next/link";

interface Props {
  className?: string;
  children: React.ReactNode;
  href: string;
}

export default function Button({ href, className, children }: Props) {
  const btnClass = `text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none ${className}`;

  if (href) {
    return (
      <Link href={href}>
        <a className={btnClass}>{children}</a>
      </Link>
    );
  }

  return <button className={btnClass}>{children}</button>;
}
