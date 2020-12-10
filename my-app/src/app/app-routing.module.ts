import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import{ HomeComponent} from './home/home.component';
import{ BlogComponent} from './blog/blog.component';
import{ PostComponent} from './post/post.component';
import{ PageNotFoundComponent} from './page-not-found/page-not-found.component';

const routes: Routes = [

  {path:'home',component:HomeComponent},
  {path: 'blog', component: BlogComponent },
  {path: 'post/:id', component: PostComponent },
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: '**', component: PageNotFoundComponent }

];

// on route change scroll position goes to the top of the page.
@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
