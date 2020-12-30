import { MDXProvider } from '@mdx-js/react';
import mdx from '@utils/mdx';
import { theme } from '@utils/theme';
import type { GatsbyBrowser } from 'gatsby';
import React from 'react';
import { ThemeProvider } from 'theme-ui';

const Page: GatsbyBrowser['wrapPageElement'] = ({ element }) => {
  // This wrapper is mounted once but re-rendered on page change
  // https://www.gatsbyjs.org/docs/browser-apis/#wrapPageElement
  return (
    <ThemeProvider theme={theme}>
      <MDXProvider components={mdx}>{element}</MDXProvider>
    </ThemeProvider>
  );
};

export default Page;
