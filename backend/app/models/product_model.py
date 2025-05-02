from sqlmodel import SQLModel, Field
from typing import Optional
from datetime import datetime
from sqlalchemy.sql import func


class Product(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str
    description: str
    base_price: float
    category: str
    quantity: int
    seller_id: int = Field(foreign_key="seller.id")
    created_at: datetime = Field(
        sa_column_kwargs={"server_default": func.now()},
        nullable=False
    )


class Category(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str
    description: str
