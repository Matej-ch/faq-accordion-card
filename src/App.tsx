import './App.scss'
import FaqItem from "./FaqItem";

function App() {

    return (
        <main className="faq" role='main'>
            <div className={'logo'}></div>
            <h1>Faq</h1>
            <FaqItem heading={'How many team members can I invite?'}
                     paragraph={'You can invite 1337 members. On premium account number is unlimited.'}/>
            <FaqItem heading={'What is the maximum file upload size?'}
                     paragraph={'No more than 2GB. All files in your account must fit your allotted storage space.'}
                     isOpen={true}/>
            <FaqItem heading={'How do I reset my password?'}
                     paragraph={'It is impossible to reset your password.'}/>
            <FaqItem heading={'Can I cancel my subscription?'}
                     paragraph={'Yes you can cancel your subscription at any time.'}/>
            <FaqItem heading={'Do you provide additional support?'}
                     paragraph={'Yes, we do.'}/>
        </main>
    )
}

export default App
