

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
        return 550;
        if(this.isMobile){

        }
        else {

        }
    }

    getGameWidth(){
        return 350;
        if(this.isMobile){

        }
        else {
            
        }
    }
}