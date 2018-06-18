// cart => [
// 	{
// 		product: {},
// 		quantity: 2,
//		amount: 999
// 	},
// ]

exports.getNumberOfItems = cart => {
    if (!cart) {
        return 0;
    }

    var n = 0;
    for (var i = cart.length - 1; i >= 0; i--) {
        n += cart[i].quantity;
    }

    return n;
}

exports.add = (cart, item) => {
    for (var i = cart.length - 1; i >= 0; i--) {
        if (cart[i].product.productId == item.product.productId) {
            cart[i].quantity += item.quantity;
            cart[i].price += item.price;
            return;
        }
    }

    cart.push(item);
}

exports.reduce = (cart, item) => {
    for(var i = cart.length - 1; i >= 0; i--) {
        if(cart[i].product.productId == item.product.productId) {
            if(cart[i].quantity === 0) {
                cart.splice(i, 1);
                return;
            }

            cart[i].quantity = cart[i].quantity  - 1;
            cart[i].price = cart[i].price - item.price;
            return;
        }
    }
}

exports.remove = (cart, proId) => {
    for (var i = cart.length - 1; i >= 0; i--) {
        if (proId === cart[i].product.productId) {
            cart.splice(i, 1);
            return;
        }
    }
}

exports.getTotalPrice = (cart) => {
    if (!cart) {
        return 0;
    }

    var n = 0;
    for (var i = cart.length - 1; i >= 0; i--) {
        n += cart[i].price;
    }

    return n;
}