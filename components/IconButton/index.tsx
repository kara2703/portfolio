import React, { HTMLAttributes, forwardRef } from 'react';

import classnames from 'clsx';
import tw from 'tailwind-styled-components';

interface ButtonProps extends HTMLAttributes<HTMLElement> {
  as?: string;
  isFullWidth?: boolean;
}

interface ButtonProps {
  $isFullWidth?: boolean;
}

// @ts-ignore
const Button = tw.button<ButtonProps>`
  ${(p) => (p.$isFullWidth ? 'w-full' : 'w-auto')}
  inline-flex
  appearance-none
  items-center
  justify-center
  transition-all
  select-none
  relative
  whitespace-nowrap
  align-middle
  outline-none
`;

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  as?: string;
  icon?: React.ReactElement;
  overrideClassName?: boolean;
}

const IconButton = forwardRef<HTMLElement, IconButtonProps>(
  ({ icon, children, overrideClassName = false, ...props }, ref) => {
    /**
     * Passing the icon as prop or children should work
     */
    const element = icon || children;
    const _children = React.isValidElement(element)
      ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
        React.cloneElement(element as any, {
          'aria-hidden': true,
          focusable: false,
        })
      : null;

    return (
      <Button
        {...props}
        children={_children}
        ref={ref}
        className={
          overrideClassName
            ? props.className
            : classnames(
                'inline-block rounded-lg bg-gray-200 p-3 text-black transition-colors ease-in-out hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75 dark:bg-naturalGray-500 dark:text-white',
                props.className,
              )
        }
      />
    );
  },
);

export default IconButton;
