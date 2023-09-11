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

export interface BorderedButtonProps extends ButtonProps {}

export const BorderedButton: React.FC<BorderedButtonProps> = (
  props: PropsWithChildren<BorderedButtonProps>
) => {
  const { children, className, href } = props;
  return (
    <Link
      href={href}
      className={`flex justify-center items-center text-white-1 border-4 border-solid border-spacing-4 border-primary-1 ${className}`}
    >
      <div className="bg-primary-1/80 m-1 py-2 px-6 hover:bg-primary-1 transition-colors duration-200">
        {children}
      </div>
    </Link>
  );
};

export const BorderedTransparentButton: React.FC<BorderedButtonProps> = (
  props: PropsWithChildren<BorderedButtonProps>
) => {
  const { children, className, href } = props;
  return (
    <Link
      href={href}
      className={`flex justify-center items-center text-white-1 border-4 border-solid border-spacing-4 border-primary-1 ${className}`}
    >
      <div className="hover:bg-white-1/20  m-1 py-2 px-6 hover:mix-blend-lighten transition-colors duration-200">
        {children}
      </div>
    </Link>
  );
};
