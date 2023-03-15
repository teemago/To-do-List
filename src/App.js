import ButtonOnChange from './components/ButtonOnChange';
import AddMenu from './components/AddMenu';
import { useState } from 'react';
import './index.css';

function App() {
    const [addMenuOn, setAddMenuOn] = useState(false);

    const handleClickMenu = () => {
        setAddMenuOn(!addMenuOn);
    };  

    return (
        <div className="container">
            <div className='repartion'>
                <div>
                <ButtonOnChange onClick={handleClickMenu}/>
                </div>
                <div>
                    {addMenuOn && <AddMenu />}
                </div>
            </div>
        </div>
    );
};

export default App;