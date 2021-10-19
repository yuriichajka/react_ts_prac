import React from 'react';
import { useHistory } from 'react-router-dom'

export const AboutPage = () => {
    const history = useHistory()
    return (
        <>
            <h1>Info</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consectetur,
                dolores ex facere illo itaque odit officia quos tempora vel.
            </p>
            <button
                className="btn"
                onClick={() => history.push('/')}
            >
                Go back
            </button>
        </>
    )
}
