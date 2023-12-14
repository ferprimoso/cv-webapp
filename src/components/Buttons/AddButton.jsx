import { FaPlus } from "react-icons/fa6";


export default function AddButton({ string, onClick }) {
    return (
        <button className="add-btn" onClick={e => {
            e.preventDefault()
            onClick()
        }}>
            <FaPlus size={'1rem'} />
            <span className="add-btn-text">{string}</span>
        </button>
    )
}

