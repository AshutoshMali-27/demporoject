import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanctionorderinboxnewComponent } from './sanctionorderinboxnew.component';

describe('SanctionorderinboxnewComponent', () => {
  let component: SanctionorderinboxnewComponent;
  let fixture: ComponentFixture<SanctionorderinboxnewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SanctionorderinboxnewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SanctionorderinboxnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
