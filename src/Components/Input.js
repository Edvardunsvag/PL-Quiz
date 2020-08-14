import React from 'react';

export default function Input({ handleChange, change, ref }) {
    return (
        <>
            <h1 className='head'>List All The Premier League Teams</h1>
            <form>
                <div className='form-group'>
                    <input
                        ref={ref}
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
