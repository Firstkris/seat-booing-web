import React from 'react'

function Step({ stepItems }) {

    const renderedStep = []

    for (let i = 0; i < stepItems; i++) {

        renderedStep.push(<li className="step step-primary" key={stepItems - i} ></li>)
    }
    for (let i = 0; i < 5 - stepItems; i++) {
        renderedStep.push(<li className="step" key={stepItems + i + 1} ></li>)
    }

    return (
        <>
            <ul className="steps ">
                {renderedStep}
            </ul>
        </>
    )
}

export default Step