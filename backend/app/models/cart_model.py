from sqlmodel import SQLModel, Field
from sqlalchemy.sql import func
from typing import Optional

class Cart(SQLModel,table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    user_id: int = Field(foreign_key="user.id")
    checkout:bool

class Cart_item(SQLModel,table=True):
    id:Optional[int] = Field(default=None,primary_key=True)
    product_id:int = Field(foreign_key="product.id")

    amount_id:float
    quantity:int
    
    cart_id:int = Field(foreign_key="cart.id")