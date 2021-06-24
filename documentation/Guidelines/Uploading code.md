## Branches
- **main**: Branch on PRO. This is the final branch.
- **release/X.X.X**: This branch contains the changes that will be merged to main branch for the next update. 
- **develop**: Develop branch contains the changes that are recently developed and need to be tested. 
In this way, develop branch is created from release on each version and only the changes that were sucessfully tested on PRE on this branch will be merged to release.
- **feature/#`taskNumber`**: On this branch is where new features are developed. This branch is created from develop and will be merged to develop.
- **fix/#`taskNumber`**: On this branch is where bugs and other problems are fixed. This branch is created from develop and will be merged to develop.
- **hotfix/#`taskNumber`**: This branch is exceptionally created to solve problems on PRO. 
It is created from main branch and will be merged to release branch when the changes have been sucessfully tested on PRE.

## Commits
- **Title**: #`taskNumber` - `Short Description`
- **Description**: optional.

## Pull Requests (PRs)

- **Title for a feature**: Resolves #`taskNumber` - feature: `Short title`
- **Title for a fix**: Resolves #`taskNumber` - fix: `Short title`

**Description** is optional.

## Exceptions
Issues with tag "**Documentación**" can be commited directly to **main**.