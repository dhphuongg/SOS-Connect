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

CFG = {
   "data": {
       "path": "dataset/ViMedical_Disease_grouped.csv",
       "presist": "vector_store/"
   },
   "model": {
       "embedding":{
           "name": "models/embedding-001",
       },
       "chat": {
           "name": "gemini-1.5-pro",
           "temperature": 0.2,
           "human_message": True
       }
   }
}