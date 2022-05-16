import { TOTAL_SCREENS} from './commonUtils'
import { Subject } from 'rxjs'



export default class ScrollService{
    static scrollHandler = new ScrollService();
    static currentScreenBrodCaster = new Subject();
    static currentScreenFadeIn = new Subject();
    

    constructor(){
        
        window.addEventListener('scroll', this.checkCurrenScreenUnderViewport);
    }

    scrollToHireMe = () => {
        let contactMeScreen = document.getElementById("Contac Me")
        if(!contactMeScreen) return;
        contactMeScreen.scrollIntoView({behavior:"smooth"})
    }
    scrollToHome = () => {
        let HomeScreen = document.getElementById("Home")
        if(!HomeScreen) return;
        HomeScreen.scrollIntoView({behavior:"smooth"})
    }

    isElementInView = (elem,type) => {
        let rec = elem.getBoundingClientRect();
        let elementTop = rec.top;
        let elementBotton =rec.Bottom


        let partiallyVisible = elementTop < window.innerHeight && elementBotton >=0;
        let complitelyVisible = window.elementTop >=0 && elementBotton <=window.innerHeight;

        switch(type){
          case "partial":
          return partiallyVisible
          case "complete":
          return complitelyVisible
          default:
              return false
        }
    }

    checkCurrenScreenUnderViewport = (event) => {

        if(!event|| Object.keys(event).length < 1)
        return;
        for(let screen of TOTAL_SCREENS){
            let screenFromDOM = document.getElementById(screen.screen_name)
            if(!screenFromDOM)
            continue;


            let fullyVisible = this.isElementInView(screenFromDOM, "complete");
            let partiallyVisible = this.isElementInView(screenFromDOM, "partial");


            if(fullyVisible || partiallyVisible){
                if(partiallyVisible && !screen.alreadyRendered){
                    ScrollService.currentScreenFadeIn.next({
                        fadeInScreen: screen.screen_name
                    });
                    screen['alreadyRendered'] = true;
                    break;
                }

                if(fullyVisible){
                    ScrollService.currentScreenBrodCaster.next({
                        screenInView: screen.screen_name
                    });
                    break;
                }
            }
        }
    }
}