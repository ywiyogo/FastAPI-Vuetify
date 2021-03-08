import CategoryRepository from './CategoryRepository';
import ProductTypeRepository from './ProductTypeRepository';
import CustomerRepository from './CustomerRepository';
import UserRepository from './UserRepository';
import ProductRepository from './ProductRepository';
import VendorRepository from './VendorRepository';
import FileUploadRepository from './FileUploadRepository';
import OrderRepository from './OrderRepository';
import VariantRepository from './VariantRepository';
import ShippingRepository from './ShippingRepository';
import AuthenticationRepository from './AuthenticationRepository';

const repositories = {
    'categories': CategoryRepository,
    'customers': CustomerRepository,
    'users': UserRepository,
    'products': ProductRepository,
    'product_types': ProductTypeRepository,
    'vendors': VendorRepository,
    'files': FileUploadRepository,
    'orders': OrderRepository,
    'variants': VariantRepository,
    'shipping': ShippingRepository,
    'authentication': AuthenticationRepository
}
export default {
    get: name => repositories[name]
};