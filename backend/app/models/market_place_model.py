from sqlmodel import SQLModel, Field
from sqlalchemy.sql import func
from typing import Optional

class Item(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    product_id:int = Field(foreign_key="product.id")

    is_service=bool

    seller_id:int = Field(foreign_key="seller.id")
    amount:float
    sell_status:str
    best_seller:bool
    discount_price:float

class Item_Update(SQLModel,table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    amount:float
    sell_status:str
    best_seller:bool
    discount_price:float

