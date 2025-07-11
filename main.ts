/**
 * Robot extension voor DJON 
 * Maakt het gemakkelijker om de robot te programmeren
 * Linkerarm op  P2
 * Rechterarm op P0
 * Hoofd op      P1
 * 
 */
enum blik {
    links =  180,
    rechts =   0,
    vooruit = 90
}

enum richtingRechts {
    omhoog = 180,
    vooruit = 90,
    omlaag =   0
}

enum richtingLinks {
    omhoog =   0,
    vooruit = 90,
    omlaag = 180
}

//% color="#AA278d" weight=20 

namespace robot {
/*
*  hoofd blok
*
*/

    
    //% block = "hoofd $kies1"
    export function hoofd(kies1:blik): void {
      pins.servoWritePin(AnalogPin.P1,kies1)
    }

    
/*
*  rechterarm blok
*
*/
    //% block = "rechterarm $kies2"
    export function rechterarm(kies2:richtingRechts):void {
      pins.servoWritePin(AnalogPin.P0,kies2)
    }

/*
*   linkerarm blok
*
*/
    
    //% block = "linkerarm $kies3"
    export function linkerarm(kies3:richtingLinks): void {
      pins.servoWritePin(AnalogPin.P2,kies3)
    }


}
