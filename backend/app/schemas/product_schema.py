from pydantic import BaseModel
from datetime import datetime
from typing import Optional, List


class ProductBase(BaseModel):
    name: str
    description: str


class ProductCreate(ProductBase):
    base_price: float
    category: str
    seller_id: int
    quantity: int


class ProductResponse(BaseModel):
    id: int
    name: str
    description: str
    category: str
    seller_id: int
    quantity: int
    base_price: float
    created_at: datetime

    class Config:
        orm_mode = True
        from_attributes = True


class ProductUpdate(ProductBase):
    name: Optional[str] = None
    description: Optional[str] = None
    base_price: Optional[float] = None
    category: Optional[str] = None
    quantity: Optional[int] = None


class CategoryProduct(BaseModel):
    category: str
    total: int
    page: int
    limit: int
    products: List[ProductResponse]
