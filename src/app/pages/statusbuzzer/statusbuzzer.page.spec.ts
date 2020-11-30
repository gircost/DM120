import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StatusBuzzerPage } from './statusbuzzer.page';

describe('StatusBuzzerPage', () => {
  let component: StatusBuzzerPage;
  let fixture: ComponentFixture<StatusBuzzerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusBuzzerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StatusBuzzerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
