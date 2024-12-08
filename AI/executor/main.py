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

from configs import CFG
from utils import Prompt
from dataloader import Data
from model import LanguageModel
from rich.console import Console
from rich.markdown import Markdown

if __name__ == '__main__':
    data = Data(data_path=CFG["data"]["path"])

    texts = data.load_texts()

    model = LanguageModel(texts = texts,
                          embedding_name=CFG["model"]["embedding"]["name"],
                          model_name=CFG["model"]["chat"]["name"],
                          temperature=CFG["model"]["chat"]["temperature"],
                          human_message=CFG["model"]["chat"]["human_message"]
                          )
    embedding, chat, vector= model.load()
    
    while(1):
        template = """Bạn là một chuyên gia y tế trong việc cung cấp thông tin về bệnh tật và cách xử lý chấn thương. Bạn sẽ giúp người dùng trả lời các câu hỏi liên quan đến các triệu chứng bệnh, cách phòng tránh, và phương pháp xử lý tạm thời. Hãy trả lời ngắn gọn, chính xác và hữu ích.

                            Sử dụng các thông tin dưới đây để trả lời câu hỏi sau. Nếu bạn không biết câu trả lời, chỉ cần nói rằng bạn không chắc chắn và khuyến khích người hỏi đi khám bác sĩ. Đảm bảo rằng câu trả lời không quá dài, dễ hiểu và dễ áp dụng.

                            Context: {context}

                            Câu hỏi: {question}

                            Trả lời hữu ích (bao gồm lời khuyên, hướng dẫn cách xử lý tạm thời nếu có, và khuyến khích thăm khám bác sĩ nếu cần thiết, lưu ý hãy nói nhẹ nhàng một chút nhá, đưa ra lời khuyên như một bác sĩ đáng yêu):"""
        print("Nhập câu hỏi: ")
        question = input()
        if question == "exit":
            break
        else:
            prompt = Prompt(template)
            prom = prompt()

        response = model.answer(question, prom)

        console = Console()
        markdown_text = Markdown(response.content)
        console.print(markdown_text)