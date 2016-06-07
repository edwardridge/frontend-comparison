import { RouterConfiguration, Router } from 'aurelia-router';

export class App {
    router: Router;
    
    configureRouter(config: RouterConfiguration, router: Router){
        config.title='Aurelia';
        config.map([
            {route: ['', 'general'], name: 'general', moduleId: './general', nav: true, title: 'General'},
            {route: 'rights', name: 'rights', moduleId: './rights-list', nav: true, title: 'Rights'}
        ]);
        
        this.router = router;
        // this.router.navigate('/general?id=3');
    }
}