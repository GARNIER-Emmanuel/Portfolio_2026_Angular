import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DialogCertif } from './dialog-certif';

describe('DialogCertif', () => {
  let component: DialogCertif;
  let fixture: ComponentFixture<DialogCertif>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogCertif],
    }).compileComponents();

    fixture = TestBed.createComponent(DialogCertif);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
