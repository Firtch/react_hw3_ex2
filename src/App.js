import logo from "./logo.svg";
import "./App.css";
import Lorem from "react-lorem-component";
import React from 'react';

function App() {

  const data = [
    {
      title: "В Иране начали продавать еще одну модель УАЗ",
      desc: "Мария Евдокимова Отечественный УАЗ расширяет свою линейку на рынке Ирана. Как сообщает дистрибьютор Soroush Diesel Mabna в Instagram, в стране запустили продажи уже второй модели после «Патриота» – «Пикапа», стоимость которого составляет 21 тысячу долларов или 1,55 миллиона рублей по текущему курсу."
    },
    {
      title: "Пикапу X-класса добавили колес, но это не спасет его от отставки",
      desc: "Текущий май станет последним месяцем сборки Mercedes-Benz X-класса: пикап совершенно точно отправляют в архив. Однако тюнеры все еще продолжают обращать внимание на модель и доказывают, что из грузовика премиальной марки можно сделать что-то еще более необычное."
    },
    {
      title: "Ford представил 571-сильный электрический пикап F-150 Lightning",
      desc: "Компания Ford представила серийный пикап F-150 с электрической силовой установкой. Машина получила приставку в названии Lightning («Молния»). Именно под таким наименования ранее продавались самые мощные версии пикапа F-150."
    },
  ]

  const newsCard = ({ title, desc }) => {
    return (
      <div
        style={{
          boxSizing: "border-box",
          padding: "10px",
          border: "1px solid black",
          width: "30%",
          borderRadius: "10px"          
        }}
      >
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
    );
  };

  return (
    <div className="App">
      <img
        style={{
          width: "100%",
        }}
        src="https://dealer-content.s3.amazonaws.com/images/models/ram/2021/trx/header.png"
        alt="Курс React"
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between"          
        }}
      >
        {data.map(props => newsCard(props))}
      </div>
    </div>
  );
}

export default App;
