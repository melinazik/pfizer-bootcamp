from typing import List
import pandas as pd
import joblib

finalized_model = r"../data/best_model.sav"
data = pd.read_csv ("../data/preprocessed_api_data.csv")
model = joblib.load(finalized_model)

neighbourhood_mapper = data.groupby(data['neighbourhood_cleansed'])['price'].sum().reset_index()
neighbourhood_mapper = pd.DataFrame(neighbourhood_mapper)

def transform (data): 

    dct = {k: [v] for k,v in data.items()}

    df = pd.DataFrame(dct)

    if df["host_is_superhost"][0] == True:
        df['superhost'] = 1
        df['not_a_superhost'] = 0
        df.drop("host_is_superhost", axis = 1, inplace = True)
    else:
        df['superhost'] = 0
        df['not_a_superhost'] = 1
        df.drop("host_is_superhost", axis=1, inplace=True)

    if df['room_type'][0] == 'Home or apt':
        df['Home or apt'] = 1
        df['Hotel room'] = 0
        df['Private room'] = 0
        df['Shared room'] = 0
        df.drop("room_type", axis=1, inplace=True)
    elif df['room_type'][0] == 'Hotel room':
        df['Home or apt'] = 0
        df['Hotel room'] = 1
        df['Private room'] = 0
        df['Shared room'] = 0
        df.drop("room_type", axis=1, inplace=True)
    elif df['room_type'][0] == 'Private room':
        df['Home or apt'] = 0
        df['Hotel room'] = 0
        df['Private room'] = 1
        df['Shared room'] = 0
        df.drop("room_type", axis=1, inplace=True)
    else:
        df['Home or apt'] = 0
        df['Hotel room'] = 0
        df['Private room'] = 0
        df['Shared room'] = 1
        df.drop("room_type", axis=1, inplace=True)

    # Baths transformation
    if df["bathroom_text"][0] == "Private Bath":
        df["Private Bath"] = 1
        df["Shared Bath"] = 0
        df.drop("bathroom_text", axis=1, inplace=True)
    else:
        df["Private Bath"] = 0
        df["Shared Bath"] = 1
        df.drop("bathroom_text", axis=1, inplace=True)

    df['amenities'] = len(df['amenities'])

    df = pd.merge(df, neighbourhood_mapper, on='neighbourhood_cleansed', how='inner')

    df.drop('neighbourhood_cleansed',axis=1,inplace=True)
    df.rename(columns = {'price':'neighbourhood_cleansed'}, inplace = True)

    df['price'] = 0

    preds = model.predict(df)
    return preds

def main(data):
    return transform(data)
    