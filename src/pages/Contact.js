import { useLocation } from "react-router-dom"



export const Contact = () => {
    const queryString = useLocation().search
    console.log(queryString)

    const queryParams = new URLSearchParams(queryString)
    const name = queryParams.get("name")
    return (
        <div>
            <h2>Hey {name}, Contact us here...</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, sequi eaque. Dolor similique libero ea expedita, molestiae blanditiis, vero reprehenderit facilis eius, perferendis animi totam fugiat voluptatum repellendus. Magnam, fuga!</p>
        </div>
    )
}
