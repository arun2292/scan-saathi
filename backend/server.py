from fastapi import FastAPI, Form
from fastapi import File, UploadFile, Form
from fastapi.middleware.cors import CORSMiddleware
from utils.ApiResponse import ApiResponse
from controllers.uploadAndPredict import uploadAndPredict
from ai.getAiReport import generateFeedback

from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods
    allow_headers=["*"],  # Allow all headers
)

@app.get("/")
def start():
    res = ApiResponse(message="OK", data=None)
    return res

@app.post("/prediction")
async def servePrediction(name: str = Form(...), file: UploadFile = File(...)):
    arthritis_severity = await uploadAndPredict(name, file)
    res = ApiResponse(message="OK", data=arthritis_severity)
    return res

class FeedbackRequest(BaseModel):
    severity: int

@app.post("/ai/feedback")
async def serveAiFeedback(payload: FeedbackRequest):
    prompt = f"Arthritis severity level is {payload.severity}"
    ai_feedback = await generateFeedback(prompt)
    res = ApiResponse(message="OK", data=ai_feedback)
    return res

# Run using: uvicorn server:app --reload
# uvicorn spins off the server at port 8000 by default