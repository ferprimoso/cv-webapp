import { FaGithub } from "react-icons/fa6";


export default function GitHub() {
    return (
        <div className="github-container">

            <a href="https://github.com/ferprimoso">
                <span>Created by</span>

                <div>
                    <FaGithub />
                    <span>Luiz Fernando</span>
                </div>
            </a>
        </div>
    )
}