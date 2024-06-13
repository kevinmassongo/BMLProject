import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { ExploreComponent } from './pages/explore.component';
import { ItemDetailsComponent } from './pages/item-details.component';
import { AuthorComponent } from './pages/author.component';
import { CreateComponent } from './pages/create.component';


export const appRoutes: Routes = [
    {
        path: '',
        title : 'Liberty NFT Markeplace -HTML CSS',
        component : HomeComponent
        },
        {
            path: 'home',
            title : 'Liberty NFT Markeplace -HTML CSS',
            component : HomeComponent
    },
    {
        path: 'explore',
        title : 'Liberty NFT Markeplace -HTML CSS',
        component : ExploreComponent
        },
    {
        path: 'item-details',
        title : 'Liberty NFT Markeplace -HTML CSS',
        component : ItemDetailsComponent
    },
    {
        path: 'author',
        title : 'Liberty NFT Markeplace -HTML CSS',
        component : AuthorComponent
    },
    {
        path: 'create',
        title : 'Liberty NFT Markeplace -HTML CSS',
        component : CreateComponent
    },
];
