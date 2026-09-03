import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CvRefonte } from './cv-refonte';

describe('CvRefonte', () => {
  let component: CvRefonte;
  let fixture: ComponentFixture<CvRefonte>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CvRefonte],
    }).compileComponents();

    fixture = TestBed.createComponent(CvRefonte);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
