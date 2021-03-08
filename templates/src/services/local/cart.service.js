import {LocalStorageService} from "./base/local-storage.service";

const CART_KEY = 'cart';


export const CartService = {

    itemTotal() {
        if (typeof window !== 'undefined') {
            if (LocalStorageService.get()) {
                return JSON.parse(LocalStorageService.get('cart')).length
            }
        }
        return 0
    },

    /**
     * Adds an item or updates the quantity, if the cart item is in the cart, the new quantity will be
     * set to the given quantity param.
     * @param product
     * @param quantity
     * @returns {Array}
     */
    addItem(product, quantity) {
        let cartItems = JSON.parse(LocalStorageService.get(CART_KEY)) || [];
        let cartItem = cartItems.find(ci => ci.id === product.id);
        // If it will be a change then proceed to save and notify the observers
        if ((cartItem && cartItem.quantity !== quantity) || !cartItem) {
            if (cartItem) {
                cartItem.quantity = quantity;
            } else {
                /* Clone the product, then trip out what we do not need
                cartItem = Object.assign({}, product);
                delete cartItem.stock;
                delete cartItem.comments;
                delete cartItem.tags;
                delete cartItem.categories;
                */
                // or take what we need and build a new object
                const {id, name, slug, price, image_urls} = product;
                cartItem = {
                    id, name, slug, price, quantity, image_urls
                };

                cartItems.push(cartItem);
            }
            localStorage.setItem(CART_KEY, JSON.stringify(cartItems));
        }

        return cartItems;

    },

    getCart() {
        if (typeof window !== "undefined") {
            if (LocalStorageService.get(CART_KEY)) {
                const cart = JSON.parse(LocalStorageService.get(CART_KEY));
                return cart;
            }
        }
        return []
    },
    removeItem(product) {
        if (LocalStorageService.get(CART_KEY)) {
            let cartItems = JSON.parse(LocalStorageService.get(CART_KEY));

            /*
            const index = cartItems.findIndex(ci => ci.id === product.id);
            cartItems.splice(index, 1);
            */
            // or even better:
            cartItems = cartItems.filter(ci => ci.id !== product.id);
            LocalStorageService.set(CART_KEY, JSON.stringify(cartItems));
            return cartItems
        }
        // this should never happen actually
        // debugger;
        return [];
    },
    emptyCart() {
        if (typeof window !== 'undefined') {
            LocalStorageService.remove(CART_KEY);
        }
    },
};
