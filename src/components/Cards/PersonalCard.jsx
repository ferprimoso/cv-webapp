import { FaUserLarge } from "react-icons/fa6";
import EditButton from "../Buttons/EditButton";

export default function PersonalCard({ name, email, number, address, onChange }) {

    return (
        <form className="card">
            <h1><FaUserLarge size={'1.5rem'} />Personal Information</h1>
            <br />
            <div className="input-field">
                <span>Name:</span>
                <input type="text" value={name} key='name' data-key='name' onChange={onChange} />
            </div>
            <div className="input-field">
                <span>Email:</span>
                <input type="text" value={email} key='email' data-key='email' onChange={onChange} />
            </div>
            <div className="input-field">
                <span>Number:</span>
                <input type="text" value={number} key='number' data-key='number' onChange={onChange} />
            </div>
            <div className="input-field">
                <span>Address:</span>
                <input type="text" value={address} key='address' data-key='address' onChange={onChange} />
            </div>

            {/* <EditButton /> */}
        </form >
    )

}

// <br />
// <h2>Name</h2>
// <input type="text" />

// <br />

// <h2>Email</h2>
// <input type="text" />

// <h2>Phone Number</h2>
// <input type="text" />

// <h2>Address</h2>
// <input type="text" />