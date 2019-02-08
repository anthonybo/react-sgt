import 'materialize-css/dist/css/materialize.min.css'
import '../assets/css/app.scss';
import React from 'react';
import Table from './table'


const App = () => (
    <div>
        <h1 className='deep-orange darken-3 pulse center'>SGT</h1>
        
        <Table/>
    </div>
);

export default App;
