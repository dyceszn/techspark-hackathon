from fastapi import APIRouter, Depends, HTTPException, status
from app.core.db import get_session
from app.models.market_place_model import Item,Item_Update
from app.models.user_model import Seller

from sqlmodel import select

router = APIRouter()

#Display all Products
@router.get("/products")
def show_all_products(session=Depends(get_session)):
    products=session.exec(select(Item).where(Item.is_service == False)).all()

    if not products:
        raise HTTPException(status_code=404, detail="No Products Found")
    return products


#Display all Services
@router.get("/services")
def show_all_services(session=Depends(get_session)):
    services=session.exec(select(Item).where(Item.is_service == True)).all()

    if not services:
        raise HTTPException(status_code=404, detail="No Services Found")
    return services

#Display all Businesses
@router.get("/businesses")
def show_businesses(session=Depends(get_session)):
    businesses=session.exec(select(Seller)).all()

    if not businesses:
        raise HTTPException(status_code=404,detail="No Businesses found")
    return businesses

#Display spotlight
@router.get("/spotlight")
def show_spotlight(session=Depends(get_session)):
    businesses=session.exec(select(Seller).where(Seller.is_spotlighted == True)).all() #We may need to update the seller table for this to work

    if not businesses:
        raise HTTPException(status_code=404,detail="No Businesses on spotlight")
    return businesses

#Show Items on sale
@router.get("/sales")
def show_sales(session=Depends(get_session)):
    products=session.exec(select(Item).where(Item.discount_price >0)).all()
    if not products:
        raise HTTPException(status_code=404,detail="No Products on sale")
    
    return products


#Add Product to Marketplace
#@router.post("/{product_id}/add")
#def add_product(data:Item,session=Depends(get_session)):
#    product=Item(
#        product_id=data.product_id,
#        seller_id=data.seller_id,
#        amount_id=data.amount,
#        sell_status=data.sell_status,
#        best_seller=False,
#        discount_price=data.discount_price
#    )

#    try:
#        session.add(product); session.commit(); session.refresh(product)
#        return {"status": "Item added successfully"}
#    except Exception as e:
#        return {"status":"Item couldn't be added. Error: {e}"}
    
#Edit Item on Marketplace. Reserved for making best seller, changing the price, adding a discount
@router.put("/items/{item_id}/edit")
def edit_item(data:Item_Update,session=Depends(get_session)):
    item=session.get(Item, data.item_id)

    item.amount =  data.amount
    item.best_seller = data.best_seller
    item.discount_price = data.discount_price

    try:
        session.add(item); session.commit() ; session.refresh(item)
        return {"status":"Item Succesfully Edited"}
    except Exception as e:
        return {"status":"Couldn't edit Item. Error: {e}"}
    
#Delete Item on Marketplace
@router.delete("/items/{item_id}/delete")
def delete_item(item_id:int,session=Depends(get_session)):
    item = session.get(Item, item_id)

    try:
        session.delete(item); session.commit()
        return {"status":"Item Deleted Sucessfully"}
    except Exception as e:
        return {"status":"Couldn't Delete Item. Error: {e}"}  

