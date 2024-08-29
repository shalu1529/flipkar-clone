/*let cart = [];

const handleCart = (state = cart, action) => {
    const product = action.payload;
    let nextState;

    switch (action.type) {
        case "ADDITEM":
            // Check if Product is Already Exist
            var exist = state.find((x) => x.id === product.id);
            if (exist) {
                // Increase the Quantity
                nextState = state.map((x) =>
                    x.id === product.id ? { ...x, qty: x.qty + 1 } : x
                );
            } else {
                nextState = [
                    ...state,
                    {
                        ...product,
                        qty: 1,
                    },
                ];
            }
            break;

        case "DELITEM":
            var exist1 = state.find((x) => x.id === product.id);
            if (exist1 && exist1.qty === 1) {
                nextState = state.filter((x) => x.id !== exist1.id);
            } else {
                nextState = state.map((x) =>
                    x.id === product.id ? { ...x, qty: x.qty - 1 } : x
                );
            }
            break;

        default:
            nextState = state;
    }

    return nextState;
};

export default handleCart;*/


// handleCart.js
let cart = [];

const handleCart = (state = cart, action) => {
  const product = action.payload;
  let nextState;

  switch (action.type) {
    case "ADDITEM":
      var exist = state.find((x) => x.id === product.id);
      if (exist) {
        nextState = state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        nextState = [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }
      break;

    case "DELITEM":
      var exist1 = state.find((x) => x.id === product.id);
      if (exist1 && exist1.qty === 1) {
        nextState = state.filter((x) => x.id !== exist1.id);
      } else {
        nextState = state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        );
      }
      break;

    default:
      nextState = state;
  }

  return nextState;
};

export default handleCart;
