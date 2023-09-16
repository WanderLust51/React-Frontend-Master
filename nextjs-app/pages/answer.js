import { useState } from "react"

export default function Answer(){
    const [answer, setAnswer] = useState('')
    const [error, setError] = useState('')
    const [status, setStatus] = useState('Typing')

    if (status === 'success'){
        return <h4>Todo salió bien</h4>
    }

    function handleInputChange(e){
        setAnswer(e.target.value)

    }

    function submitForm(answer){
        return Promise((resolve, reject) => {
            setTimeout(() => {
                let existeError = answer.toLowerCase() !== 'queso'
                if (existeError){
                    reject(new Error('Eso no era'))
                }
            },1000)
        })
    }

    async function handleSubmit(e){
        e.preventDefault();
        setStatus('submitting');

        try{
            await submitForm(answer);
            setStatus('success')
            
        }catch{
            setStatus('failed')
        }
    }

    return(
        <>
            
            <h3>Indique algo, quien sabe qué</h3>
            <form onSubmit={handleSubmit}>
                <input value={answer} onChange={handleInputChange}></input>
                <button>Enviar</button>
                {error !== null && <p>{error.message}</p>}
            </form>

        </>
    )
}