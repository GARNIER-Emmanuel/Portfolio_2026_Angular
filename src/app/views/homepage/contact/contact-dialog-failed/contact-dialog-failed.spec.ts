import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactDialogFailed } from './contact-dialog-failed';

describe('ContactDialogFailed', () => {
  let component: ContactDialogFailed;
  let fixture: ComponentFixture<ContactDialogFailed>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactDialogFailed],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactDialogFailed);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
