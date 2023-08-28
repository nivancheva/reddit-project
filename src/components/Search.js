import { useState } from "react";

export default function Search({onClick}) {
    const [search, setSearch] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        onClick(search);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search"
            />
            <button
                className="btn btn-primary">
                Search
            </button>
        </form>
    );
}