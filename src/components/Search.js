import React, {useState} from 'react'

const Search = ({getQuery}) => {
    const [text, setText] = useState('')

    const onChange = (text) => {
        setText(text);
        getQuery(text);
    }

    return (
        <section className="search">
            <form>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search Character"
                    autoFocus
                    value={text}
                    onChange={e => onChange(e.target.value)}
                />
            </form>
        </section>
    )
}

export default Search
