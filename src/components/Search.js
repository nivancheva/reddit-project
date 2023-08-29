import { useState } from "react";
import magnifyingGlass from '../magnifying-glass-solid.svg';
import './Search.css'

export default function Search({onClick}) {
    const [search, setSearch] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        onClick(search);
    }

    return (
        <form className="search_form" onSubmit={handleSubmit}>
            <input 
                className="search_input"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search"
            />
            <button className="btn"><img src={magnifyingGlass}/></button>
        </form>
    );
}