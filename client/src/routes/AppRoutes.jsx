import { Route, Routes } from 'react-router-dom'
import RestaurantsListPage from '../pages/RestaurantsListPage'
import RestaurantDetailsPage from '../pages/RestaurantDetailsPage'
import NewRestaurantPage from '../pages/NewRestaurantPage'
import SignupPage from '../pages/SignupPage'
import LoginPage from '../pages/LoginPage'
import HomePage from '../pages/HomePage'
import ProfilePage from '../pages/ProfilePage'
import PrivateRoute from './PrivateRoute'
import EditRestaurantPage from '../pages/EditRestaurantPage'


const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/gallery' element={<RestaurantsListPage />} />
            <Route path='/signup' element={<SignupPage />} />
            <Route path='/login' element={<LoginPage />} />

            <Route path="/create" element={<PrivateRoute />}>
                <Route path="" element={<NewRestaurantPage />} />
            </Route>


            <Route path="/editar/:restaurant_id" element={<PrivateRoute />}>
                <Route path="" element={<EditRestaurantPage />} />
            </Route>

            <Route path="/details/:restaurant_id" element={<PrivateRoute />}>
                <Route path="" element={<RestaurantDetailsPage />} />
            </Route>

            <Route path="/profile" element={<PrivateRoute />}>
                <Route path="" element={<ProfilePage />} />
            </Route>

            <Route path='*' element={<h1>404</h1>} />
        </Routes>
    )
}

export default AppRoutes