// class Resources {
//     constructor() {
//         //    everything planned to be downloaded
//         this.toLoad = {
//             sky: "/sprites/sky.png",
//             ground: "/sprites/ground.png",
//             hero: "/sprites/hero-sheet.png",
//             shadow: "/sprites/shadow.png",
//             rod: "/sprites/rod.png",
//         };
//         // a bucket to keep all images
//         this.images = {};

//         // load each image

//         Object.keys(this.toLoad).forEach(key => {
//             const img = new Image();
//             img.src = this.toLoad[key];
//             this.images[key] = {
//         image: img,
//         isLoaded: false
//             }
//             img.onload = () => {
//                 this.images[key].isLoaded = true;
//             }
//         })
//     }
// }
// // create one instance for whole app 
// export const resources = new Resources();

class Resources {
    constructor() {
        // everything planned to be downloaded
        this.toLoad = {
            sky: "/sprites/sky.png",
            ground: "/sprites/ground.png",
            hero: "/sprites/hero-sheet.png",
            shadow: "/sprites/shadow.png",
            rod: "/sprites/rod.png",
        };
        // a bucket to keep all images
        this.images = {};

        // load each image
        Object.keys(this.toLoad).forEach(key => {
            const img = new Image();
            img.src = this.toLoad[key];
            this.images[key] = {
                image: img,
                isLoaded: false
            };
            img.onload = () => {
                this.images[key].isLoaded = true;
            };
        });
    }

    areAllResourcesLoaded() {
        return Object.values(this.images).every(resource => resource.isLoaded);
    }

    loadAllResources() {
        return new Promise((resolve, reject) => {
            const checkIfLoaded = () => {
                if (this.areAllResourcesLoaded()) {
                    resolve();
                } else {
                    setTimeout(checkIfLoaded, 100);
                }
            };
            checkIfLoaded();
        });
    }
}

// create one instance for the whole app 
export const resources = new Resources();
