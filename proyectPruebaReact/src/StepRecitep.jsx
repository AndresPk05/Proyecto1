import './StepRecitep.css'

export const StepRecepit = ({numberstep, text, image, isStepPair}) =>{
    const styleContainer = isStepPair ? "container stepPair" : "container stepInPair";

    return(
        <>
            <div className={styleContainer}>
                <h1 className="numberStep">{numberstep}</h1>
                <p className='textStep'>{text}</p>
                {image}
            </div>
        </>
    )
}