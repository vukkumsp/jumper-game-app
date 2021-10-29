

export class ScreenSize {
    screenHeight: number;
    screenWidth: number;
    isMobile: boolean;

    constructor(){
        this.screenHeight = screen.height;
        this.screenWidth = screen.width;
        this.isMobile = ( ( window.innerWidth <= 800 ) && ( window.innerHeight <= 600 ) );
    }


    getGameHeight(){
        if(this.isMobile){

        }
        else {

        }
    }

    getGameWidth(){
        if(this.isMobile){

        }
        else {
            
        }
    }
}