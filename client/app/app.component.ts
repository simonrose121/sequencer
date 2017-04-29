import { Component } from '@angular/core';

@Component({
    selector: 'sq-app',
    templateUrl: 'app/app.component.html',
    styleUrls: [
        'app/app.component.css',
    ]
})
export class AppComponent {
    constructor() {
        let images = [];
        for (let i = 1; i <= 30; i++) {
            for (let j = 1; j <= 4; j++) {
                const imageName = 'assets/' + i + '/' + j + '.jpg';
                images.push(imageName);
            }
        }
        this.preloadImages(images);
    }

    public preloadImages(array) {
        if (!this.preloadImages.list) {
            this.preloadImages.list = [];
        }
        var list = this.preloadImages.list;
        for (var i = 0; i < array.length; i++) {
            var img = new Image();
            img.onload = function() {
                var index = list.indexOf(this);
                if (index !== -1) {
                    // remove image from the array once it's loaded
                    // for memory consumption reasons
                    list.splice(index, 1);
                }
            };
            list.push(img);
            img.src = array[i];
        }
    }
}
