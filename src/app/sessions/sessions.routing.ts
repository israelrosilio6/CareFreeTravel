import {Routes} from '@angular/router';
import {ErrorComponent} from './error/error.component';
import {SigninComponent} from './signin/signin.component';

export const SessionsRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'signin',
                component: SigninComponent,
                data: { title: 'Signin' }
            },
            {
            path: 'error',
            component: ErrorComponent,
            data: {title: 'Error'}
        }]
    }
];
