import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfosCompany } from './infos-company';

describe('InfosCompany', () => {
  let component: InfosCompany;
  let fixture: ComponentFixture<InfosCompany>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfosCompany],
    }).compileComponents();

    fixture = TestBed.createComponent(InfosCompany);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
