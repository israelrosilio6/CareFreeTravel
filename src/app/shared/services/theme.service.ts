import {Injectable, Inject, Renderer2} from '@angular/core';
import {DOCUMENT} from '@angular/common';

interface ITheme {
    name: string;
    baseColor?: string;
    isActive?: boolean;
}

@Injectable()
export class ThemeService {
    public egretThemes: ITheme[] = [{
        'name': 'egret-dark-purple',
        'baseColor': '#9c27b0',
        'isActive': false
    }];
    public activatedTheme: ITheme;

    constructor(
        @Inject(DOCUMENT) private document: Document
    ) {
    }

    // Invoked in AppComponent and apply 'activatedTheme' on startup
    applyMatTheme(r: Renderer2) {
        this.activatedTheme = this.egretThemes[0];

        this.changeTheme(r, this.activatedTheme);
    }

    changeTheme(r: Renderer2, theme: ITheme) {
        r.removeClass(this.document.body, this.activatedTheme.name);
        r.addClass(this.document.body, theme.name);
        this.flipActiveFlag(theme);
    }

    flipActiveFlag(theme: ITheme) {
        this.egretThemes.forEach((t) => {
            t.isActive = false;
            if (t.name === theme.name) {
                t.isActive = true;
                this.activatedTheme = theme;
            }
        });
    }
}
