import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Box, Text } from 'rebass';

export const Footer: React.FC = () => {
  const data = useStaticQuery<GatsbyTypes.FooterMetadataQuery>(graphql`
    query FooterMetadata {
      site {
        siteMetadata {
          author {
            firstName
            lastName
          }
        }
      }
    }
  `);
  const { author } = data.site.siteMetadata;

  return (
    <Box p={4} bg="secondary">
      <Text color="white">
        © Copyright {new Date().getFullYear()} {author.firstName} {author.lastName}. All Rights are
        Reserved.
      </Text>
    </Box>
  );
};
