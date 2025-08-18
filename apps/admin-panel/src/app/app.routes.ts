import { Route } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { QuizHomeComponent } from '../components/quiz-bulder/quiz-home/quiz-home.component';
import { QuizViewHomeComponent } from '../components/quiz-viewer/quiz-view-home/quiz-view-home.component';
import { ChannelHomeComponent } from '../components/channel-home/channel-home.component';

export const appRoutes: Route[] = [
    {
        path:"",
        component:HomeComponent
    },
    {
        path:"create",
        component:QuizHomeComponent
    },
    {
        path:"view",
        component:QuizViewHomeComponent
    },
    {
        path: "channels",
        component: ChannelHomeComponent
    }
];
