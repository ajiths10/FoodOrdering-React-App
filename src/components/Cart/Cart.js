import Modal from "../UI/Modal";
import CartList from "./CartLIst";

const Cart = (props) => {

  return (
    <Modal onClose={props.onClose} >
      <CartList onClose={props.onClose}/>
    </Modal>
  );
};

export default Cart;
