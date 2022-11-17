import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import useLocalStorage from '../hooks/localStorage';
import Header from '../components/Header';
import ListTreatments from '../components/ListTreatments';
import AddTreatment from '../components/AddTreatment';

const AppRouter = () => {
    const [treatments, setTreaments] = useLocalStorage('treatments', []);

    return (
        <BrowserRouter>
            <div>
                <Header />
                <div className='main-content'>
                    <Switch>
                        <Route
                            render={(props) => (
                                <ListTreatments {...props} treatments={treatments} setTreaments={setTreaments} />
                            )}
                            path="/"
                            exact={true}
                        />
                        <Route
                            render={(props) => (
                                <AddTreatment {...props} treatments={treatments} setTreaments={setTreaments} />
                            )}                   
                            path="/adicionar"
                        />
                        <Route component={() => <Redirect to="/" />} />
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    )
}
export default AppRouter;