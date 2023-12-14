export default function CancelButton({ onClick }) {
    return (
        <button className="add-btn" onClick={(e) => {
            e.preventDefault()
            onClick()
        }}>
            <span className="add-btn-text">Cancel</span>
        </button>
    )
}

