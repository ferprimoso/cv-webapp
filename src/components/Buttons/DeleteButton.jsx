export default function DeleteButton({ onClick }) {
    return (
        <button className="add-btn" onClick={(e) => {
            e.preventDefault()
            onClick()
        }}>
            <span className="add-btn-text">Delete</span>
        </button>
    )
}

