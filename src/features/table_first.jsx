import { useState } from "react";
import { useEffect } from "react";
import { getData } from "../actions/actions";
import Table from "../components/table/table";

export default function TableFirst() {
    const [data, setData] = useState([{ name: 'Ilya', id: 1 }, { name: 'Aiden', id: 2 }])

    useEffect(() => {//для вызова запроса на сервер
        getData({ id: 1 }).then((e) => setData(e)) //вызов функции запроса на сервер
    }, [])

    return (
        <Table
            head={['имя', 'id']} //название колонок в таблице
            body={['name', 'id']}//название ключа объекта для отрисовки
            data={data}//массив объектов
        />
    )
}