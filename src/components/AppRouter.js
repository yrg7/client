import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import { autchRoutes, publicRoutes } from '../routes'
import { Context } from '../index'
const AppRouter = () => {
    const {user}  = useContext(Context)
    //console.log(user)
    return (
        <Routes>
            {user.isAuth && autchRoutes.map(Component  =>
                <Route key={Component.path} exact={Component.exact} path={Component.path} element={<Component.element />}></Route>
            )}
            { publicRoutes.map(Component  =>
                <Route key={Component.path} exact={Component.exact} path={Component.path} element={<Component.element />}></Route>
            )}

        </Routes>
    )
}

export default AppRouter
