import { Routes } from '@angular/router';
import { Login } from './Compoment/login/login';
import { Register } from './Compoment/register/register';
import { Dashbord } from './Compoment/dashbord/dashbord';
import { Navbar } from './Compoment/navbar/navbar';
import { AddACourse } from './Compoment/RequesrForm/add-a-course/add-a-course';
import { DropACourse } from './Compoment/RequesrForm/drop-a-course/drop-a-course';
import { AddDropACourse } from './Compoment/RequesrForm/add-drop-a-course/add-drop-a-course';
import { OpenACourse } from './Compoment/RequesrForm/open-a-course/open-a-course';
import { InstructorsData } from './Compoment/instructors-data/instructors-data';
import { StaffsData } from './Compoment/staffs-data/staffs-data';
import { Setting } from './Compoment/setting/setting';

export const routes: Routes = [
    { path: '', component: Login },
    { path: 'register', component: Register },
    { path: 'navbar', 
        component: Navbar,
        children: [
            { path: '', redirectTo: 'dashbord', pathMatch: 'full' },
            { path: 'dashbord', component: Dashbord },
            { path: 'add-course', component: AddACourse },
            { path: 'drop-course', component: DropACourse },
            { path: 'add-drop-course', component: AddDropACourse },
            { path: 'open-course', component: OpenACourse },
            { path: 'instructors-data', component: InstructorsData },
            { path: 'staffs-data', component: StaffsData },
            { path: 'settings', component: Setting },
        ]
    },
];
