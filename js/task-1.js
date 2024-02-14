function makeTransaction(quantity, pricePerDroid, customerCredits) {
    let message;
    const totalPrice = quantity * pricePerDroid

    if ( totalPrice > customerCredits) {
        message = "Insufficient funds!"
    } else {
        message = `You ordered ${quantity} droids worth ${totalPrice} credits!`
    }
    return message;
}

