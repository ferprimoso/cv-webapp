import { FaPenToSquare } from "react-icons/fa6";

export default function EditButton() {
    return (
        <button className="edit-btn" onClick={e => e.preventDefault()}>
            <FaPenToSquare size={'1.5rem'} />
            <span className="edit-btn-text">Edit informations</span>
        </button>
    )
}

