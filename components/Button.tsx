import Link from "next/link";

interface Props {
  className?: string;
  children: React.ReactNode;
  href: string;
}

export default function Button({ href, className, children }: Props) {
  const btnClass = `bg-transparent hover:bg-white text-white font-semibold hover:text-black py-2 px-4 border border-white hover:border-transparent rounded ${className}`;

  if (href) {
    return (
      <Link href={href}>
        <a className={btnClass}>{children}</a>
      </Link>
    );
  }

  return <button className={btnClass}>{children}</button>;
}
