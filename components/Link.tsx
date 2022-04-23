import * as NextLink from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
};

export default function Link({ href, children }: Props) {
  return (
    <NextLink.default href={href}>
      <a className="text-neutral-700 hover:text-blue-800 hover:underline">
        {children}
      </a>
    </NextLink.default>
  );
}
