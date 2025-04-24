from pydantic import BaseModel
from datetime import datetime
from typing import Optional


class ProductBase(BaseModel):
    name: str
    description: str


class ProductCreate(ProductBase):
    base_price: float
    category: str
    seller_id: int
    quantity: int


class ProductResponse(BaseModel):
    product_id: int
    name: str
    description: str
    category: str
    seller_id: int
    quantity: int
    base_price: float
