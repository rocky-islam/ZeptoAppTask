const getStoreWishlist = () =>{
    const storeWishlistString = localStorage.getItem('wishlist');
    if(storeWishlistString){
        return JSON.parse(storeWishlistString);
    }
    return [];
}

const saveWishlistToLS = wishlist =>{
    const wishlistStringified = JSON.stringify(wishlist);
    localStorage.setItem('wishlist', wishlistStringified)
}

const addToLS = id =>{
    const wishlist = getStoreWishlist();
    wishlist.push(id);
    saveWishlistToLS(wishlist)
}

const removeFromLS = id =>{
    const wishlist = getStoreWishlist();
    const remaining = wishlist.filter(idx => idx !== id);
    saveWishlistToLS(remaining)
}

export {addToLS, getStoreWishlist, removeFromLS}