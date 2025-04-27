from pydantic import BaseModel


class Marketplace(BaseModel):
    product_id:int
    seller_id:int
    amount:float
    sell_status:str

class MarketplaceBestSeller(Marketplace):
    best_seller:bool

class add_discount(Marketplace):
    discount_price:float