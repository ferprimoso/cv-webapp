export default function SaveButton({ onClick }) {
    return (
        <button className="add-btn" onClick={(e) => {
            e.preventDefault()
            onClick()
        }}>
            <span className="add-btn-text">Save</span>
        </button>
    )
}

