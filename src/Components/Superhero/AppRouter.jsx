
import { useContext } from "react";
import { Routes,  Route, Navigate} from "../../../node_modules/react-router-dom/index";
import { Context } from "../../context/context";
import { routes } from "../router/router";
import Loader from "../UI/Loader/Loader";

const AppRouter = () => {
    const { isHeroLoading} = useContext(Context);
    console.log('isHeroLoading :>> ', isHeroLoading);

    if (isHeroLoading) {
        return <Loader/>
    }
    return (
        <Routes>
            {routes.map(route => 
                <Route
                    component={route.component}
                    path={route.path}
                    exact={route.exact}
                    key={route.path}
                />
                )}
                {/* <Navigate replace to="/superheroes" /> */}
        </Routes>
    );
}

export default AppRouter;