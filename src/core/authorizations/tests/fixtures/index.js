import validResponse from './permissions.json';
import empty from './empty.json';

export default {
  VALID: validResponse,
  EMPTY: empty,
  URI_452: /\/api\/internal\/v1\/axi-user-permissions\?.*&permissionId=452/,
  URI_999: /\/api\/internal\/v1\/axi-user-permissions\?.*&permissionId=999/,
  URI_452_999: /\/api\/internal\/v1\/axi-user-permissions\?.*&permissionId=452&permissionId=999/,
  URI_452_999_ALL: /\/api\/internal\/v1\/axi-user-permissions\?.*&permissionId=452&permissionId=999&region=ALL/,
  URI_452_999_1000: /\/api\/internal\/v1\/axi-user-permissions\?.*&permissionId=452&permissionId=999&permissionId=1000/
};
