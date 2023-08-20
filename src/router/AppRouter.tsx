import React, { useEffect } from 'react'
import { Route, Routes, redirect, useNavigate } from 'react-router-dom';
import { routeConfig} from '../configs/RouterConfig';
import { Sidebar } from '../components/Parts/Sidebar/Sidebar';
import { useSelector } from 'react-redux';
import { getUser } from '../store/Auth/AuthSlice';

export const AppRouter = () => {
    let navigate = useNavigate();
    let user = useSelector(getUser);
    useEffect(() => {
        let isAllowed:boolean = !!user;
        
        if(!isAllowed){
            navigate(routeConfig.auth.path)
        }else{
            navigate(routeConfig.homepage.path)
        }
    }, [user])
    
    return (
        <Routes>
            {Object.values(routeConfig).map(({ element, path, isApp }) => {
                return(
                    <Route
                        key={path}
                        path={path}
                        element={(
                            <div className="page-wrapper">
                                {isApp && <Sidebar/>}
                                {element}
                            </div>
                        )}
                    />
                )
                
            })}
        </Routes>
    );
}



