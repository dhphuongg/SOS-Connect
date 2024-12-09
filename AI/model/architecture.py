"""
  Copyright (C) 2024 phamdt203

  This file is part of SOS Connect.

  SOS Connect is free software: you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.

  SOS Connect is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.

  You should have received a copy of the GNU General Public License
  along with SOS Connect.  If not, see <http://www.gnu.org/licenses/>.
"""

import os
import base64
import google.generativeai as genai

from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_community.vectorstores import Chroma
from langchain_google_genai import GoogleGenerativeAIEmbeddings

class LanguageModel:
    def __init__(self, texts, embedding_name, model_name, temperature, human_message = True, vector_store = "vector_store/"):
        self.texts = texts
        self.embedding_name = embedding_name
        self.model_name = model_name
        self.temperature = temperature
        self.human_message = human_message
        self.vector_store = vector_store

    def load(self):
        self.embedding = GoogleGenerativeAIEmbeddings(model=self.embedding_name,google_api_key= os.getenv("GOOGLE_API_KEY"))
        self.model = ChatGoogleGenerativeAI(model=self.model_name, api_key=os.getenv("GOOGLE_API_KEY"),
                               temperature=self.temperature,convert_system_message_to_human=self.human_message)
        self.vision_model = genai.GenerativeModel(model_name=self.model_name, api_key=os.getenv("GOOGLE_API_KEY"))
        self.vector_indx = Chroma.from_texts(self.texts, self.embedding, persist_directory=self.vector_store)
        self.vector_indx.persist()
        return self.embedding, self.model, self.vector_indx

    def answer(self, question, prompt):
        context = self.vector_indx.similarity_search(question, k = 5)
        context = "\n".join(doc.page_content for doc in context)
        return self.model.invoke(prompt.format(context=context, question=question)).content
    
    def answer_image(self, question, image):    
        response = self.vision_model.generate_content([{'mime_type':'image/jpeg', 'data': base64.b64encode(image.content).decode('utf-8')}, question])
        return response.text
    
    def anwer_voice(self, audio_link):
        pass