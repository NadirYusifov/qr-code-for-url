import { Link } from "react-router"

export const Footer = () => {
    return (
        <footer className="bg-sky-800 text-center text-white py-10">
            <div className="container px-4 mx-auto grid grid-cols-1 lg:grid-cols-2">
                <div>
                    <p className="text-xl font-medium">Social media</p>
                    <ul>
                        <li>
                            <a className="text-[1.125rem] underline underline-offset-5" href="https://github.com/NadirYusifov">GitHub</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <p className="text-xl font-medium">Pages</p>
                    <ul>
                        <li className="flex flex-col space-y-3">
                            <Link className="text-[1.125rem] underline underline-offset-5" to="/">Home</Link>
                            <Link className="text-[1.125rem] underline underline-offset-5" to="/referance">Referance</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}