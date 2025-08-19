import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightDrawerDialogComponent } from './right-drawer-dialog.component';

describe('RightDrawerDialogComponent', () => {
  let component: RightDrawerDialogComponent;
  let fixture: ComponentFixture<RightDrawerDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RightDrawerDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightDrawerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
