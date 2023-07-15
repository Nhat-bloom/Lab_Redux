import { useState } from 'react';
const Counter = () => {
    const [counter, setCounter] = useState<number>(0);
    const [date, setDate] = useState<number>(0);
    const [name, setName] = useState<string>('');
    const [age, setAge] = useState<number>(0)
    const [display, setDisplay] = useState(false)
    const handleCounter = () => {
        setAge(new Date().getFullYear() - date);
        setDisplay(true);
    }
    // const handleName = (event: any) =>{
    //     setName(event.taget.value);
    // }
    return(
        <>
        <input type="text" onChange={(event)=> setName(event.target.value)} />
        <input type="text" onChange={(event)=> setDate(+event.target.value)} />
            <h1>Tên tôi là: {name} Tuổi của tôi: {age}</h1>
            <h1>Đây là giá trị {counter}</h1>
            <input type="button" value={'count'} onClick={handleCounter} />
        </>
    )
}
export default Counter;