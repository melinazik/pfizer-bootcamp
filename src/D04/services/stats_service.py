import csv
from typing import List
import numpy as np
import pandas as pd
import os
import pprint

df = pd.read_csv(r"../data/preprocessed_api_data.csv")

def barplot() -> List[dict]:
    lst = []
    avg_price = df.groupby('neighbourhood_cleansed')['price'].agg(np.mean).nlargest(10).to_dict()
    for k,v in avg_price.items():
        dictit = {}
        dictit["area"] = k
        dictit["price"] = v
        lst.append(dictit)
    return lst

def pie_chart() -> List[dict]:
    lst = []
    cnt_bthr = df.groupby('bathrooms_number')['id'].agg(['count']).to_dict().get("count")
    for k,v in cnt_bthr.items():
        dictit = {}
        dictit["bathroom_type"] = k
        dictit["count_of_listings"] = v
        lst.append(dictit)
    return lst


def bar_amen() -> List[dict]:
    lst = []
    no_amenities = df.groupby('amenities')['id'].agg(['count']).nlargest(20, 'count').to_dict().get("count")
    for k,v in no_amenities.items():
        dictit = {}
        dictit["number_of_amenities"] = k
        dictit["count_of_listings"] = v
        lst.append(dictit)
    return lst


def bar_bedrooms() -> List[dict]:
    lst = []
    no_bedrooms = df.groupby('bedrooms')['id'].agg(['count']).to_dict().get("count")
    for k,v in no_bedrooms.items():
        dictit = {}
        dictit["number_of_bedrooms"] = k
        dictit["count_of_listings"] = v
        lst.append(dictit)
    return lst


def main():
    return {"barplot_data_avg_price": barplot(), "pie_chart": pie_chart(), "bar2": bar_amen(), "bar3":bar_bedrooms()}
