import { IResolvers } from '@graphql-tools/utils';
import { CartoonDataSource } from '../../data/cartoonsdata';

// Resolver de Cartoons: maneja consultas de dibujos animados
const cartoonsResolver: IResolvers = {
    Query: {
        // Obtiene todos los cartoons desde el datasource local
        getCartoons() {
            return CartoonDataSource;
        }
    }
}

export default cartoonsResolver;