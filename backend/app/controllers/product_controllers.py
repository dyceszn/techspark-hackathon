from fastapi import APIRouter, Depends, HTTPException, status
from app.models.product_model import Product
from app.schemas.product_schema import ProductCreate, ProductResponse
from app.core.db import get_session
from sqlmodel import select

router = APIRouter()


@router.post("/products", response_model=ProductResponse)
def create_product(product_data: ProductCreate, session=Depends(get_session)):
    new_product = Product(
        name=product_data.name,
        description=product_data.description,
        category=product_data.category,
        base_price=product_data.base_price,
        quantity=product_data.quantity,
        seller_id=product_data.seller_id
    )

    session.add(new_product)
    session.commit()
    session.refresh(new_product)

    return ProductResponse(
        product_id=new_product.id,
        name=product_data.name,
        description=product_data.description,
        category=product_data.category,
        seller_id=product_data.seller_id,
        quantity=product_data.quantity,
        base_price=product_data.base_price,
    )


@router.get("/products")
def get_all_products(session=Depends(get_session)):
    all_products = []
    categories = ["clothing", "technology", "beauty", "care", "food & snack",
                  "fitness", "stationery", "Decor", "Hygiene"]
    with session:
        for category in categories:
            stmt = select(Product).where(Product.category == category)
            products = session.exec(stmt).all()
            if products:
                all_products.append({category: products})
    return all_products
