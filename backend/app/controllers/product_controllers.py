from fastapi import APIRouter, Depends, HTTPException, Query
from app.models.product_model import Product
from app.schemas.product_schema import ProductCreate, ProductUpdate, ProductResponse, CategoryProduct
from app.core.db import get_session
from sqlmodel import select
from typing import List

router = APIRouter()


# Create Product
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
        name=new_product.name,
        description=new_product.description,
        category=new_product.category,
        seller_id=new_product.seller_id,
        quantity=new_product.quantity,
        base_price=new_product.base_price,
        created_at=new_product.created_at
    )


# Get All products
@router.get("/products", response_model=List[CategoryProduct])
def get_all_products(
        page: int = Query(0, ge=0),
        limit: int = Query(0, le=50),
        session=Depends(get_session)
):
    all_products = []
    categories = ["clothing", "technology", "beauty", "care", "food & snack",
                  "fitness", "stationery", "Decor", "Hygiene"]

    skip = page * limit

    with session:
        for category in categories:
            stmt = select(Product).where(Product.category == category) \
                .offset(skip).limit(limit)

            product_models = session.exec(stmt).all()

            product_schemas = [
                ProductResponse.from_orm(p) for p in product_models
            ]
            if product_models:
                all_products.append(CategoryProduct(
                    category=category,
                    total=5,
                    page=page,
                    limit=limit,
                    products=product_schemas
                ))

    return all_products


# Get Product by Id
@router.get("/products/{product_id}")
def get_product(product_id: int, session=Depends(get_session)):
    with session:
        product = session.get(Product, product_id)

        if not product:
            raise HTTPException(status_code=404, detail="Product not found")

        return ProductResponse(
            product_id=product.id,
            name=product.name,
            description=product.description,
            category=product.category,
            seller_id=product.seller_id,
            quantity=product.quantity,
            base_price=product.base_price
        )


# Delete product
@router.delete("/products/{product_id}")
def delete_product(product_id: int, session=Depends(get_session)):
    with session:
        product = session.get(Product, product_id)

        if not product:
            raise HTTPException(status_code=404, detail="Product not found")

        session.delete(product)
        session.commit()


# Update Product
@router.put("/products/{product_id}")
def update_product(product_id, product_data: ProductUpdate, session=Depends(get_session)):
    with session:
        product = session.get(Product, product_id)

        if product_data.name:
            product.name = product_data.name
        elif product_data.description:
            product.description = product_data.description
        elif product_data.base_price:
            product.base_price = product_data.base_price
        elif product_data.category:
            product.category = product_data.category
        elif product_data.description:
            product.quantity = product_data.quantity

        session.add(product)
        session.commit()
        session.refresh(product)

        return ProductResponse(
            product_id=product.id,
            name=product.name,
            description=product.description,
            category=product.category,
            seller_id=product.seller_id,
            quantity=product.quantity,
            base_price=product.base_price,
            created_at=product.created_at,
        )
