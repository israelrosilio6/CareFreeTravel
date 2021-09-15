import { Component, OnInit, Input, OnDestroy, Renderer2 } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ThemeService } from '../../services/theme.service';
import { TranslateService } from 'ng2-translate/ng2-translate';
import { LayoutService } from '../../services/layout.service';
import {UsersAuthService} from '../../../services/users.auth.service';

@Component({
  selector: 'app-header-top',
  templateUrl: './header-top.component.html'
})
export class HeaderTopComponent implements OnInit, OnDestroy {
  layoutConf: any;
  menuItems:any;
  menuItemSub: Subscription;
  egretThemes: any[] = [];
  currentLang = 'en';
  availableLangs = [{
    name: 'English',
    code: 'en',
  }, {
    name: 'Spanish',
    code: 'es',
  }];
  constructor(
    private layout: LayoutService,
    public themeService: ThemeService,
    public translate: TranslateService,
    private renderer: Renderer2,
    private auth:UsersAuthService
  ) { }

  ngOnInit() {
    this.layoutConf = this.layout.layoutConf;
    this.egretThemes = this.themeService.egretThemes;
  }
  ngOnDestroy() {
    this.menuItemSub.unsubscribe();
  }
  setLang() {
    this.translate.use(this.currentLang);
  }
  changeTheme(theme) {
    this.themeService.changeTheme(this.renderer, theme);
  }
  toggleSidenav() {
    if(this.layoutConf.sidebarStyle === 'closed') {
      return this.layout.publishLayoutChange({
        sidebarStyle: 'full'
      });
    }
    this.layout.publishLayoutChange({
      sidebarStyle: 'closed'
    });
  }
  signOut(){
    this.auth.signOut();
  }
}
