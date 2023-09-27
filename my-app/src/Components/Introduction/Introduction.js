import "bootstrap/dist/css/bootstrap.min.css";
import './Introduction.css'

function Introduction(){
    return (
        <div className='Introduction'>
            <div className = 'Positioning'>
                <div className= 'group1'>
                    <h1> Hey, I'm Jason Zhong! </h1>
                    <div>
                        <div className="Intro">
                        I'm a current undergraduate at the University of Maryland
                        and an aspiring software engineer. Coding has always been
                        fun for me, and I hope that my work can benefit people across the globe.
                        </div>
                        <div className='Separate'>Welcome to my website!</div> 
                    </div>
                </div>
                <img width={400} height={400} src='/intro_pic.png' alt="my picture"/>
            </div>
        </div>
    )
}

export default Introduction