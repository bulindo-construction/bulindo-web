import Link from "next/link";
import React, { PropsWithChildren } from "react";

export interface ButtonProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes {
  className: string;
  href: string;
}

export interface BorderedButtonProps extends ButtonProps {
  stylingClassname?: string;
}

export const BorderedButton: React.FC<BorderedButtonProps> = (
  props: PropsWithChildren<BorderedButtonProps>
) => {
  const { children, className, stylingClassname, href } = props;
  return (
    <button className={className}>
      <Link
        href={href}
        className={`flex justify-center items-center text-white-1 border-4 border-solid border-spacing-4 border-primary-1 ${stylingClassname}`}
      >
        <div className="bg-primary-1 m-1 py-2 px-6 hover:mix-blend-lighten transition-colors duration-300">
          {children}
        </div>
      </Link>
    </button>
  );
};
