import { useEffect } from "react";
import { Col, Row, Preloader, Button, Icon } from "react-materialize";
import { useDispatch, useSelector } from "react-redux";
import { getOrders, deleteOrder } from "../../actions/orders";
import Order from './Order/Order.js';

function Orders() {

    const user  = JSON.parse(localStorage.getItem('profile'));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOrders());
    }, [dispatch]);

    const orders = useSelector((state) => state.carts);

    let checker=0;

    orders.map((order) => (
        (order.orderID === user?.result?.googleId || order.orderID === user?.result?._id) ? 
            checker=checker+1
        : checker
    ));

    const cancelOrder = () => {
        let deleteOrderSuccess = document.getElementById('deleteOrderSuccess');
        orders.map((order) => (
            (order.orderID === user?.result?.googleId || order.orderID === user?.result?._id) ? 
                dispatch(deleteOrder(order.orderID))
            : null
        ));
        deleteOrderSuccess.removeAttribute('hidden');
        setTimeout(() => { deleteOrderSuccess.setAttribute('hidden',""); clear();}, 3000);
    }

    const clear = () => {
        window.open("/Cart", "_self");
    }

    return(
        !orders.length && checker!==0 ?
            <div id="main-content" className="loaderPage">
                <h1>Order is empty! 😕</h1>
            </div>
        :(
            checker===0 ?
                <div id="main-content" className="loaderPage">
                    <Preloader active size="big" flashing={false} color="green" />
                </div>
            :(
                <div id="main-content" className="container orderPage">
                    <div id="deleteOrderSuccess" className="success" hidden>Order cancelled successfully!</div>
                    <div id="orderSuccess" className="success" hidden>Order Placed successfully!</div>
                    <h1 className="center">Orders</h1>
                    <Row>
                        {orders.map((order) => (
                            (order.orderID === user?.result?.googleId || order.orderID === user?.result?._id) ? 
                                <Col key={order._id} s={12} m={6}>
                                    <Order order={order} />
                                </Col> 
                                : null
                        ))}
                    </Row>
                    <Button node="button" onClick={cancelOrder}><Icon>close</Icon> Cancel Order</Button>
                </div>
            )
        )
    );
}

export default Orders;