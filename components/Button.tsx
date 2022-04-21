interface Props {
  className?: string;
  children: React.ReactNode;
  href: string;
}

export default function Button({ href, className, children }: Props) {
  const btnClass = `bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ${className}`;

  if (href) {
    return (
      <a href={href} className={btnClass}>
        {children}
      </a>
    );
  }

  return <button className={btnClass}>{children}</button>;
}
