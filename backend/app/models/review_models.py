from sqlmodel import SQLModel, Field
from datetime import datetime
from sqlalchemy.sql import func
from typing import Optional

class Review(SQLModel,table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    user_id: int = Field(foreign_key="user.id")
    product_id: int = Field(foreign_key="product.id")
    description:str
    created_at: datetime = Field(
        sa_column_kwargs={"server_default": func.now()},
        nullable=False
    )
    edited_at: datetime = Field(
        sa_column_kwargs={"server_default": func.now()},
        nullable=True
    )