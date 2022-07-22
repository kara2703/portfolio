import Highlight, { Language, defaultProps } from 'prism-react-renderer';
import React, { HTMLAttributes } from 'react';

import classnames from 'clsx';

export interface CodeBlockProps {
  className?: string;

  /**
   * Show code line numbers?
   */
  noLineNumbers?: boolean;
  /**
   * The filename.
   */
  filename?: string;
  /**
   * The code.
   */
  children: string;
}
export interface CodeBlockProps extends HTMLAttributes<HTMLDivElement> {
  noLineNumbers?: boolean;
  customClass?: string;
  filename?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({
  noLineNumbers = false,
  className = '',
  filename,
  children,
  ...rest
}) => {
  const language = (
    className.replace(/language-/, '') === '' ? 'markup' : className.replace(/language-/, '')
  ) as Language;

  const showTopbar = !!filename;

  return (
    <div {...rest} className={classnames('transition-colors duration-500', showTopbar && 'my-3')}>
      {showTopbar && (
        <div className="rounded-t border-t border-l border-r border-gray-100 bg-gray-200 py-2 px-5 font-bold text-gray-800 dark:border-gray-700 dark:bg-naturalGray-400 dark:text-gray-200">
          {filename}
        </div>
      )}

      <Highlight
        {...defaultProps}
        // Disables using default theme so we can style using tailwind css
        theme={undefined}
        code={children.trim()}
        language={language}
      >
        {({ style, tokens, getLineProps, getTokenProps }) => (
          <pre
            style={style}
            className={classnames(
              'overflow-x-auto border border-gray-200 bg-gray-50 py-3 px-5 text-sm leading-relaxed text-gray-200 dark:border-gray-700 dark:bg-naturalGray-600',
              showTopbar ? 'mt-0 rounded-b' : 'my-3 rounded',
            )}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })} className="table-row">
                {!noLineNumbers && (
                  <div className="table-cell select-none pr-2 text-right text-black opacity-50 dark:text-white">
                    {i + 1}
                  </div>
                )}
                <span className="table-cell">
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </span>
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
};

export default CodeBlock;
