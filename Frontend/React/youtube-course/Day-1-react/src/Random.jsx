function Random () {
    let number = Math.random() * 100;

    return <p style = {{'background-color': '#778932' }}>  The random no is: {Math.round(number)}</p>

}

export default Random;