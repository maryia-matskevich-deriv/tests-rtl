import React, { useState, useEffect } from "react";

const getUser = () => Promise.resolve({ id: 1, name: "WEB-Developer" });

const Search = ({ value, onChange, children }) => (
    <div>
        <label htmlFor="search">{children}</label>
        <input
            placeholder="search text..."
            id="search"
            type="text"
            defaultValue={value}
            onChange={onChange}
            data-testid="aria-invalid-false"
            aria-invalid="false"
            // required
        />
    </div>
);

const Assertive = () => {
    const [search, setSearch] = useState("");
    const [user, setUser] = useState(null);

    useEffect(() => {
        const loadUser = async () => {
            const user = await getUser();
            setUser(user);
        };

        loadUser();
    }, []);

    const handleChange = ({ target }) => {
        setSearch(target.value);
    };

    return (
        <div>
            {user && <h2>Logged in as {user.name}</h2>}
            <img className="image333" src="" alt="search image 333" />
            <Search defaultValue={search} onChange={handleChange}>
                SEARCH:
            </Search>
            <p>Searches for </p>
            <span role="searched_object">{search ? search : "..."}</span>
            <button type="button" disabled>Click Me!</button>
            <form role='form'>
                <input role="input" type="text" name="username" defaultValue="developer" />
                <input type="password" name="password" defaultValue="1fWfgvj" />
                <input aria-label="rememberMe" type="checkbox" onChange={()=>{}} name="rememberMe" checked />
            </form>
        </div>
    );
};

export default Assertive;
