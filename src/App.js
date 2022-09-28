import React, {useState} from 'react';
import AppLayout from './layouts/AppLayout';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Input from './componets/Input';
import Button from './componets/Button';

function App() {

    const [colQueAnsw, setColQueAnsw] = useState({question:'', answer:''});

    const buttonClick = (e) => {
        const {value} = e.target;
        switch(value) {
            case '=':
                    if (colQueAnsw.question !=='') {
                        var ans = '';
                        try {
                            ans = eval(colQueAnsw.question);
                        } catch (error) {
                            setColQueAnsw({answer:'Math Error'});
                        }

                        if (ans === undefined) {
                            setColQueAnsw({answer:"Math Error"});
                        } else {
                            setColQueAnsw({answer:ans, question:''});
                        }
                    }
                break;
            case 'clear':
                    setColQueAnsw({answer:'', question:''});
                break;
            case 'delete':
                    var str = colQueAnsw.question;
                    str = str.substring(0, str.length-1 );
                    setColQueAnsw({question:str ?? '', answer:''});
                break;
            default:
                setColQueAnsw({question:colQueAnsw.question +=value, answer:''});
        }
    }

  return (
    <AppLayout>
        <div className='cal-c-container text-center'>
            <section className='cal-c-header mt-3'>
                <div className='row'>
                    <div className='col-12'>
                        <Input name="input_val" className="w-100" value={colQueAnsw.question} readOnly></Input>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12'>
                        <Input name="result" className="w-100" value={colQueAnsw.answer} readOnly></Input>
                    </div>
                </div>
            </section>
            <section className='mt-3'>
                <div className='row'>
                    <div className='col-3'>
                        <div className='cal-c-buttons'><Button label="Clear" value="clear" onClick={buttonClick}/></div>
                    </div>
                    <div className='col-3'>
                        <div className='cal-c-buttons'><Button label="Delete" value="delete" onClick={buttonClick}/></div>
                    </div>
                    <div className='col-3'>
                        <div className='cal-c-buttons empty-btn'></div>
                    </div>
                    <div className='col-3'>
                        <div className='cal-c-buttons'><Button label="/" value="/" onClick={buttonClick}/></div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-3'>
                        <div className='cal-c-buttons'><Button label="7" value="7" onClick={buttonClick}/></div>
                    </div>
                    <div className='col-3'>
                        <div className='cal-c-buttons'><Button label="8" value="8" onClick={buttonClick}/></div>
                    </div>
                    <div className='col-3'>
                        <div className='cal-c-buttons'><Button label="9" value="9" onClick={buttonClick}/></div>
                    </div>
                    <div className='col-3'>
                        <div className='cal-c-buttons'><Button label="*" value="*" onClick={buttonClick}/></div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-3'>
                        <div className='cal-c-buttons'><Button label="4" value="4" onClick={buttonClick}/></div>
                    </div>
                    <div className='col-3'>
                        <div className='cal-c-buttons'><Button label="5" value="5" onClick={buttonClick}/></div>
                    </div>
                    <div className='col-3'>
                        <div className='cal-c-buttons'><Button label="6" value="6" onClick={buttonClick} /></div>
                    </div>
                    <div className='col-3'>
                        <div className='cal-c-buttons'><Button label="-" value="-" onClick={buttonClick}/></div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-3'>
                        <div className='cal-c-buttons'><Button label="3" value="3" onClick={buttonClick}/></div>
                    </div>
                    <div className='col-3'>
                        <div className='cal-c-buttons'><Button label="2" value="2" onClick={buttonClick}/></div>
                    </div>
                    <div className='col-3'>
                        <div className='cal-c-buttons'><Button label="1" value="1" onClick={buttonClick}/></div>
                    </div>
                    <div className='col-3'>
                        <div className='cal-c-buttons'><Button label="+" value="+" onClick={buttonClick}/></div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-3'></div>
                    <div className='col-3'>
                        <div className='cal-c-buttons'><Button label="0" value="0" onClick={buttonClick}/></div>
                    </div>
                    <div className='col-3'>
                        <div className='cal-c-buttons'><Button label="=" value="=" onClick={buttonClick}/></div>
                    </div>
                    <div className='col-3'></div>
                </div>
            </section>
        </div>
    </AppLayout>
  );
}

export default App;
