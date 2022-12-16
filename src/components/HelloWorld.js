import Frase from './Frase'
function HelloWorld() {
    const a = Number(window.prompt("Valor 1: "))
    const b = Number(window.prompt("Valor 2: "))
    return (
        <div>
            <Frase />
            <h1>{`A soma de ${a} + ${b} = ${a+b}`}</h1>
            <Frase />
            <Frase />
        </div>
    )       
}

export default HelloWorld