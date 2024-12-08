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

import pandas as pd
from dotenv import load_dotenv

load_dotenv()

class Data:
    def __init__(self, data_path : str):
        self.data_path = data_path
        self.data = pd.read_csv(self.data_path)
        self.texts = self.data['context'].dropna().tolist()
        
    def load_texts(self):
        return self.texts
