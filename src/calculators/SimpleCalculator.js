import '../common/Button'

function SimpleCalculator() {
    return (
            <div className="calculator-grid">
            <div className="output">
            <div className="previous-operand"></div>
            <div className="current-operand"></div>
            </div>
            <button className='span-two'>AC</button>
            <button className='span-one'>DEL</button>
            <button className='span-one'>÷</button>
            <button className='span-one'>1</button>
            <button className='span-one'>2</button>
            <button className='span-one'>3</button>
            <button className='span-one'>*</button>
            <button className='span-one'>4</button>
            <button className='span-one'>5</button>
            <button className='span-one'>6</button>
            <button className='span-one'>+</button>
            <button className='span-one'>7</button>
            <button className='span-one'>8</button>
            <button className='span-one'>9</button>
            <button className='span-one'>-</button>
            <button className='span-one'>-</button>
            <button className='span-one'>0</button>
            <button className='span-one'>=</button>
            </div>
    )
};

export default SimpleCalculator;