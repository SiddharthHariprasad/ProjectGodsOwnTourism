import { useEffect } from 'react';
import { Button, Col, Icon, Preloader, Row, Card } from 'react-materialize';
import { useDispatch, useSelector } from 'react-redux';
import { getCarts } from '../../actions/carts';
import { putOrder } from '../../actions/orders';
import Cart from './Cart/Cart';

function Carts() {

    const user = JSON.parse(localStorage.getItem('profile'));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCarts());
    }, [dispatch]);

    const carts = useSelector((state) => state.carts);

    let checker=0;

    carts.map((cart) => (
        (cart.cartID === user?.result?.googleId || cart.cartID === user?.result._id) ? 
            checker=checker+1
        : checker
    ));

    
    const placeOrder = () => {
        carts.map((cart) => (
            (cart.cartID === user?.result?.googleId || cart.cartID === user?.result._id) ? 
            dispatch(putOrder({...cart, orderCategory: cart.cartCategory, orderID: cart.cartID }))
            : null 
        ));
        alert("Order Placed successfully!");
        clear();
    }

    const clear = () => {
        window.open("/Order", "_self");
    }

    if (!user) {
        return(
            <div id="main-content" className="container errorPage">
                <div className="container">
                    <Card className="black" textClassName="teal-text text-accent-3" title="Authentication Required" actions={[<a className="white-text btn btn-large" key="1" href="/auth">Sign In</a>]}>
                        <span>Please Login to Proceed</span>
                    </Card>
                </div>
            </div>
        )
    }

    return(
        !carts.length && checker!==0 ? 
            <div id="main-content" className="loaderPage">
                <h1>Cart is empty! 😕</h1>
            </div>
        :(
            checker===0 ?
                <div id="main-content" className="loaderPage">
                    <Preloader active size="big" flashing={false} color="green" />
                </div>
            :(
                <div id="main-content" className="container cartPage">
                    <div id="removeSuccess" className="success" hidden>Item successfully removed from cart!</div>
                    <h1 className="center">Cart</h1>
                    <Row id="cartRow">
                        {carts.map((cart) => (
                            (cart.cartID === user?.result?.googleId || cart.cartID === user?.result._id) ? 
                                <Col key={cart._id} s={12} m={6}>
                                    <Cart cart={cart} />
                                </Col> 
                                : null 
                        ))}
                    </Row>
                    <Button node="button" onClick={placeOrder}><Icon>shopping_bag</Icon> Place Order</Button>
                </div>
            )
        )
    );
}


export default Carts;