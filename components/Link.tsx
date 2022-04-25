import * as NextLink from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export default function Link({ href, children, className }: Props) {
  return (
    <NextLink.default href={href}>
      <a
        className={`text-neutral-700 hover:text-blue-800 hover:underline ${className}`}
      >
        {children}
      </a>
    </NextLink.default>
  );
}
