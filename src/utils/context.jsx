import { createContext, useCallback, useEffect, useState } from "react";
import { useTelegram } from "../hooks/useTelegram";
import { useNavigate } from "react-router-dom";

export const Context = createContext(null);

function Provider(props) {
  const [cartItems, setCartItems] = useState([]);
  const { tg } = useTelegram();
  const navigate = useNavigate();

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

  const toCart = useCallback(() => {
    navigate("/cart");
  }, []);

  useEffect(() => {
    tg.MainButton.setParams({
      text: "View order",
    });

    tg.onEvent("mainButtonClicked", toCart);

    return () => {
      tg.offEvent("mainButtonClicked", toCart);
    };
  }, []);

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
      }}
    >
      {props?.children}
    </Context.Provider>
  );
}

export default Provider;
