import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StanfordModalPage } from './stanford-modal.page';

describe('StanfordModalPage', () => {
  let component: StanfordModalPage;
  let fixture: ComponentFixture<StanfordModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StanfordModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StanfordModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
