from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from pymongo import MongoClient
from bson import ObjectId
from typing import List
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
import os

load_dotenv()

app = FastAPI()

mongo_uri = os.getenv("MONGODB_URI")
client = MongoClient(mongo_uri)
db = client["sci_fi_db"]
collection = db["characters"]

origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Character(BaseModel):
    name: str
    species: str
    homeworld: str

class CharacterInDB(Character):
    id: str

@app.post("/characters/", response_model=CharacterInDB)
async def create_character(character: Character):
    result = collection.insert_one(character.dict())
    return CharacterInDB(id=str(result.inserted_id), **character.dict())

@app.get("/characters/", response_model=List[CharacterInDB])
async def get_characters():
    characters = list(collection.find())
    return [CharacterInDB(id=str(c["_id"]), **c) for c in characters]

@app.put("/characters/{character_id}", response_model=CharacterInDB)
async def update_character(character_id: str, character: Character):
    result = collection.update_one({"_id": ObjectId(character_id)}, {"$set": character.dict()})
    if result.matched_count == 0:
        raise HTTPException(status_code=404, detail="Character not found")
    return CharacterInDB(id=character_id, **character.dict())

@app.delete("/characters/{character_id}")
async def delete_character(character_id: str):
    result = collection.delete_one({"_id": ObjectId(character_id)})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Character not found")
    return {"message": "Character deleted"}

@app.put("/characters/{character_id}", response_model=CharacterInDB)
async def update_character(character_id: str, character: Character):
    result = collection.update_one({"_id": ObjectId(character_id)}, {"$set": character.dict()})
    if result.matched_count == 0:
        raise HTTPException(status_code=404, detail="Character not found")
    return CharacterInDB(id=character_id, **character.dict())
