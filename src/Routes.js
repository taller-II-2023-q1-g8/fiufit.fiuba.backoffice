import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomeScreen } from './screens/home';
import UsersScreen from './screens/users';
import { AdminsScreen } from './screens/admins/admins';
import { PlansScreen } from './screens/plans';
import RegisterScreen from './screens/register';

export const ApplicationRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path= "/" element={<HomeScreen/>}/>
                <Route path= "/users" element={<UsersScreen/>}/>
                <Route path= "/plans" element={<PlansScreen/>}/>
                <Route path= "/admins" element={<AdminsScreen/>}/>
                <Route path= "/admins/add" element={<RegisterScreen/>}/>
                <Route path= "*" element={<h1>No Implementado Aún</h1>}/>
            </Routes>
        </Router>
    );
}