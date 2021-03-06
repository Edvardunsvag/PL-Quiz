import React from 'react';

export default function Input({ handleChange, change, focusing }) {
    return (
        <>
            <h1 className='head'>List All The Premier League Teams</h1>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                }}>
                <div className='form-group'>
                    <input
                        ref={focusing}
                        placeholder='Ex. Arsenal'
                        onChange={handleChange}
                        value={change}
                        type='text'
                    />
                </div>
            </form>
        </>
    );
}
