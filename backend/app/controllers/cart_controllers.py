from fastapi import APIRouter, Depends, HTTPException, status

from app.core.db import get_session
from app.models.cart_model import Cart,Cart_item
from sqlmodel import select

router = APIRouter()

#Show all Items in cart
@router.get("/{user_id}/cart")
def show_cart_items(user_id:int,session=Depends(get_session)):
    cart = session.exec(select(Cart).where(Cart.user_id == user_id)).one()

    if not cart:
        raise HTTPException(status_code=404,detail="User Has No cart")

    items = session.exec(select(Cart_item).where(Cart_item.cart_id == cart.id)).all()
    return items

#Add Item to cart
@router.post("/cart/{cart_id}/items/{product_id}")
def add_item_to_cart(cart_id: int, product_id: int, session=Depends(get_session)):
    cart = session.get(Cart, cart_id)
    if not cart:
        raise HTTPException(status_code=404, detail="Cart not found")
    cart_item = Cart_item(cart_id=cart_id, product_id=product_id)
    session.add(cart_item); session.commit()
    return {"status": "Item added to cart"}


#Remove Item from cart
@router.delete("/cart/{cart_id}/items/{product_id}")
def remove_item_from_cart(cart_id: int, product_id: int, session=Depends(get_session)):
    statement = select(Cart_item).where((Cart_item.cart_id == cart_id) &(Cart_item.product_id == product_id))
    cart_item = session.exec(statement).first()
    if not cart_item:
        raise HTTPException(status_code=404, detail="Item not found in cart")
    session.delete(cart_item); session.commit()
    return {"status": "Item removed from cart"}



#Create new cart
@router.post("/users/{user_id}/cart")
def create_cart(user_id: int, session=Depends(get_session)):
    existing = session.exec(select(Cart).where(Cart.user_id == user_id)).first()
    if existing:
        raise HTTPException(status_code=400, detail="Cart already exists")
    cart = Cart(user_id=user_id)
    session.add(cart); session.commit(); session.refresh(cart)
    return {"status": "Cart created successfully"}


#Delete cart
@router.delete("/users/{user_id}/cart")
def delete_cart(user_id: int, session=Depends(get_session)):
    cart = session.exec(select(Cart).where(Cart.user_id == user_id)).first()
    if not cart:
        raise HTTPException(status_code=404, detail="Cart not found")
    session.delete(cart); session.commit()
    return {"status": "Cart deleted successfully"}
