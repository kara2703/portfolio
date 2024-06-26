import { graphql } from '@octokit/graphql';

type SortType = 'PUSHED_AT' | 'STARGAZERS';

export const fetchRepos = async (sort: SortType, limit: number) => {
  // https://docs.github.com/en/graphql/reference/objects#repository
  const { user } = await graphql(
    `
      query ($username: String!, $sort: RepositoryOrderField!, $limit: Int) {
        user(login: $username) {
          repositories(
            first: $limit
            isLocked: false
            isFork: false
            ownerAffiliations: OWNER
            privacy: PUBLIC
            orderBy: { field: $sort, direction: DESC }
          ) {
            edges {
              node {
                name
                url
                description
                pushedAt
                stargazerCount
                forkCount
                primaryLanguage {
                  name
                  color
                }
              }
            }
          }
        }
      }
    `,
    {
      username: 'kara2703',
      limit,
      sort,
      headers: {
        authorization: `token ${process.env.GH_PUBLIC_TOKEN}`,
      },
    },
  );

  const repos = user.repositories.edges.map(({ node: repo }) => ({
    name: repo.name,
    url: repo.url,
    description: repo.description,
    updatedAt: repo.pushedAt,
    // updatedAt: new Date(repo.pushedAt),
    stars: repo.stargazerCount,
    forks: repo.forkCount,
    language: repo.primaryLanguage,
  }));

  return repos;
};
