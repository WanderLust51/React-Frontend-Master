export default function Header(){
    return (
        <>
            <header>
                <img src="https://www.curso-ingles.com/img/logo-white.svg"></img>
                <nav>
                    <span>APRENDER</span>
                    <span>PRACTICAR</span>
                    <span>HERRAMIENTAS</span>
                </nav>
                <div>
                    <span>Accede</span>
                    <button>Regístrate</button>
                    <span>español</span>
                </div>
            </header>

            <style jsx>{`
            
                header{
                    position: sticky;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    background-color: #103D7C;
                    height: 5rem;
                    border-bottom-left-radius: 2rem;
                    border-bottom-right-radius: 2rem;
                    & > img{
                        height: 2rem;
                        margin-left: 4rem;
                        margin-right: 5rem;
                    }
                    & > nav{
                        display: flex;
                        justify-content: center;
                        color: white;
                        & > span{
                            font-size: 0.9rem;
                            margin: 0 1.5rem;
                            font-weight: 500;
                        }
                    }
                    & > div{
                        display: flex;
                        align-items: center;
                        color: white;
                        margin-right: 3rem;
                        & > *{
                            font-size: 0.9rem;
                            margin: 0 1.2rem;
                            font-weight: 500;
                        }
                        & > button{
                            background-color: #00AEE6;
                            border: 0;
                            padding: 8px 20px;
                            border-radius: 2rem;
                        }
                    }
                }

            `}</style>
        </>
    )
}