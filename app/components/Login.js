import logo from "./leaf-icon.svg";
import Image from "next/image";

export default const Login = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("LOGIN SUBMIT")
    }

    return (
        <div>
            <Image src={logo} className="logo" alt="Business view - Reports" />
            <form className="form" onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder="nome@email.com.br" />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" />
                </div>
                <button className="primary">Submit</button>
            </form>
        </div>
    )
}