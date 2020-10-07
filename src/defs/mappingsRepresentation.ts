/**
 * https://www.keycloak.org/docs-api/11.0/rest-api/index.html#_mappingsrepresentation
 */
import RoleRepresentation from './roleRepresentation';

export default interface MappingsRepresentation {
  clientMappings?: Record<string, any>;
  realmMappings?: RoleRepresentation[];
}
