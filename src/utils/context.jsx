import { createContext, useEffect, useState } from "react";
import { useTelegram } from "../hooks/useTelegram";

export const Context = createContext(null);

function Provider(props) {
  const [cartItems, setCartItems] = useState([]);
  const { tg } = useTelegram();

  const addItem = (item) => {
    if (isInCart(item.id)) {
      const newCartItems = cartItems.map((elem) => {
        if (elem.id === item.id) {
          elem.count += 1;
        }
        return elem;
      });
      setCartItems(newCartItems);
    } else {
      setCartItems([...cartItems, { ...item, count: 1 }]);
    }
  };

  const removeItem = (id) => {
    let itemCount = cartItems.find((elem) => elem.id === id).count;

    if (itemCount > 1) {
      itemCount--;
      const newCartItems = cartItems.map((elem) => {
        if (elem.id === id) {
          elem.count = itemCount;
        }
        return elem;
      });

      setCartItems([...newCartItems]);
    } else {
      setCartItems(cartItems.filter((elem) => elem.id !== id));
    }
  };

  const isEmpty = () => {
    return cartItems.length == 0;
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const isInCart = (id) => {
    return cartItems.find((elem) => elem.id === id) ? true : false;
  };

  const getCount = (id) => {
    return cartItems.find((elem) => elem.id === id)?.count;
  };

  const getCartPrice = () => {
    return cartItems.reduce((acc, elem) => acc + elem.price * elem.count, 0);
  };

  useEffect(() => {
    if (!isEmpty()) {
      tg.MainButton.show();
    } else {
      tg.MainButton.hide();
    }
  }, [cartItems]);

  return (
    <Context.Provider
      value={{
        cartItems,
        addItem,
        removeItem,
        isEmpty,
        clearCart,
        isInCart,
        getCount,
        getCartPrice,
      }}
    >
      {props?.children}
    </Context.Provider>
  );
}

export default Provider;
