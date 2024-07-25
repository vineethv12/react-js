import { useEffect, useState } from "react";


const User = (props) => {

    const [count, setCount] = useState(0);
    const [count2] = useState(1);

    useEffect(() => {

        // setInterval(() => {
        //     console.log("Interval useEffect");
        // }, 1000);

        return () => {

        }
    }, [])

    // useEffect(() => {
    //     console.log("use")
    // }, [count,count2])

    // useEffect(() => {
    //     console.log("use")
    // }, [count2])

    const { name } = props


    return (
        <div className="user-card">
            <h1>Count = {count}</h1>
            <button onClick={() => {
                setCount(count + 1)
            }}>Increment</button>
            <h1>Count2 = {count2}</h1>
            <h2>Name: {name}</h2>
            <h3>Location: Bangalore</h3>
            <h4>Contact: @noob</h4>
        </div>
    )
}

export default User;