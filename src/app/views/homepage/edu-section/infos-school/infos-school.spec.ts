import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfosSchool } from './infos-school';

describe('InfosSchool', () => {
  let component: InfosSchool;
  let fixture: ComponentFixture<InfosSchool>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfosSchool],
    }).compileComponents();

    fixture = TestBed.createComponent(InfosSchool);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
