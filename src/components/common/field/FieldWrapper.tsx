import React, { forwardRef, PropsWithChildren } from 'react';

import classNames from 'classnames';

interface Props extends ElementProps<'div'> {
  label?: string;
  isFocus?: boolean;
}

const FieldWrapper = forwardRef<HTMLDivElement, PropsWithChildren<Props>>(
  ({ children, label, isFocus, ...divProps }, ref) => (
    <div
      ref={ref}
      role="presentation"
      id="password-field-wrapper"
      className={classNames(
        'relative',
        'px-[0.5625rem] pb-3 pt-4',
        'w-full',
        'border-[3px] border-solid rounded-lg',
        'border-opacity-50',
        'hover:border-opacity-100',
        {
          'border-opacity-100': isFocus,
          'border-primary-blue': isFocus,
          'border-white': !isFocus,
        },
      )}
      {...divProps}
    >
      <span
        className={classNames(
          'absolute top-0 transform -translate-y-1/2',
          'px-1',
          'text-[0.75rem] leading-[1.125rem] text-white',
          'bg-bg-dark',
        )}
      >
        {label}
      </span>
      {children}
    </div>
  ),
);

export default FieldWrapper;
