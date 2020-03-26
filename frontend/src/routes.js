import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/logon';
import Register from './pages/register';
import Profile from './pages/profile';
import NewIncident from './pages/newIncidents';

/**
 * tem q usar exact na rota raiz senão o react vai sempre verificar se começa com o primeiro caracter / pra qq rota, não acessando as demais
 * cliente http Axios (npm install axios) - permite realizar a comunicação entre o frontend e a API do backend
 */
export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ Logon }  /> 
                
                <Route path="/register" component={ Register }  />

                <Route path="/profile" component={ Profile }  />

                <Route path="/incidents/new" component={ NewIncident} />
            </Switch>
        </BrowserRouter>
    );
}