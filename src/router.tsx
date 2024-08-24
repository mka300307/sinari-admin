import {createBrowserRouter} from "react-router-dom";
import Dashboard from "./pages/dashboard";
import React from "react";
import Pasien from "./pages/pasien";
import KlusterPage from "./pages/kluster";
import SkriningPage from "./pages/skrining";
import AddPasienPage from "./pages/pasien/add";
import DetailPasien from "./pages/pasien/detail";
import EditPasien from "./pages/pasien/edit";
import EditKluster from "./pages/kluster/edit";
import TambahKluster from "./pages/kluster/add";
import FormPlay from "./pages/skrining/play";
import TambahSkrining from "./pages/skrining/add";

export const router = createBrowserRouter([
    {
        path : '/',
        element: <Dashboard/>
    },
    {
        path : '/pasien',
        element: <Pasien/>,
    },
    {
        path: '/pasien/add',
        element : <AddPasienPage/>
    },
    {
        path: '/pasien/detail/:id',
        element : <DetailPasien/>
    },
    {
        path: '/pasien/edit/:id',
        element : <EditPasien/>
    },
    {
        path:'/kluster',
        element:<KlusterPage/>
    },
    {
        path:'/kluster/edit/:id',
        element:<EditKluster/>
    },
    {
        path:'/kluster/add',
        element:<TambahKluster/>
    },
    {
        path : '/skrining',
        element: <SkriningPage/>
    },
    {
        path : '/skrining/play/:id',
        element: <FormPlay/>
    },
    {
        path : '/skrining/add',
        element: <TambahSkrining/>
    }

])
