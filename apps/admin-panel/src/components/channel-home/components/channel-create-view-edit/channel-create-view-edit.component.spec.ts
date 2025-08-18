import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChannelCreateViewEditComponent } from './channel-create-view-edit.component';

describe('ChannelCreateViewEditComponent', () => {
  let component: ChannelCreateViewEditComponent;
  let fixture: ComponentFixture<ChannelCreateViewEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChannelCreateViewEditComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChannelCreateViewEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
