/**
 * Application routes with its version
 * https://github.com/Sairyss/backend-best-practices#api-versioning
 */

// Root
const usersRoot = 'users';
const communityRoot = 'community';

// Api Versions
const v1 = 'v1';

export const routesV1 = {
  version: v1,
  user: {
    root: usersRoot,
    delete: `/${usersRoot}/:id`,
    create: `/${usersRoot}`,
  },
  community: {
    root: communityRoot,
    delete: `/${communityRoot}/:id`,
    create: `/${communityRoot}`,
  },
};
