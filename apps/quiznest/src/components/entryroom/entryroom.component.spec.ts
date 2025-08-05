import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EntryroomComponent } from './entryroom.component';

describe('EntryroomComponent', () => {
  let component: EntryroomComponent;
  let fixture: ComponentFixture<EntryroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntryroomComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EntryroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
