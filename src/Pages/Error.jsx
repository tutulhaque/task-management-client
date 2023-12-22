import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div>
            <div className="h-screen py-28">
                <div className="flex justify-center items-center">
                <h1 className="text-6xl">404 Page Not Found!</h1>

                </div>
                <div className="flex justify-center items-center py-8">
                    <Link to='/'><button className="btn btn-success">Back To Home</button></Link>
                </div>
            </div>
        </div>

    );
};

export default Error;