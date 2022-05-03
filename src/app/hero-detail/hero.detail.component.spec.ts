import {
  ComponentFixture,
  fakeAsync,
  flush,
  TestBed,
  tick,
  waitForAsync,
} from "@angular/core/testing";
import { HeroDetailComponent } from "./hero-detail.component";
import { Location } from "@angular/common";
import { of } from "rxjs";
import { FormsModule } from "@angular/forms";
import { HeroService } from "../hero.service";
import { ActivatedRoute } from "@angular/router";
import { doesNotReject } from "assert";
describe("HeroDetailComponent", () => {
  let fixture: ComponentFixture<HeroDetailComponent>;
  let mockActivatedRoute, mockHeroService, mockLocation;
  beforeEach(() => {
    mockActivatedRoute = {
      snapshot: {
        paramMap: {
          get: () => {
            return "3";
          },
        },
      },
    };
    mockHeroService = jasmine.createSpyObj(["getHero", "updateHero"]);
    mockLocation = jasmine.createSpyObj(["backl"]);
    TestBed.configureTestingModule({
      declarations: [HeroDetailComponent],
      imports: [FormsModule],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: HeroService, useValue: mockHeroService },
        { provide: Location, useValue: mockLocation },
      ],
    });

    fixture = TestBed.createComponent(HeroDetailComponent);

    mockHeroService.getHero.and.returnValue(
      of({ id: 3, name: "SuperDude", strength: 100 })
    );
  });

  it("should render hero name in h2 tag", () => {
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector("h2").textContent).toContain(
      "SUPERDUDE"
    );
  });

  // it("should call updateHero when save is called", fakeAsync(() => {
  //   mockHeroService.updateHero.and.returnValue(of({}));
  //   fixture.detectChanges();

  //   fixture.componentInstance.save();
  //   //tick(250); can also use flush() method ->
  //   flush();

  //   expect(mockHeroService.updateHero).toHaveBeenCalled();
  // }));

  //this is an alt to method above
  it("should call updateHero when save is called", waitForAsync(() => {
    mockHeroService.updateHero.and.returnValue(of({}));
    fixture.detectChanges();

    fixture.componentInstance.save();
    //tick(250); can also use flush() method ->

    fixture.whenStable().then(() => {
    expect(mockHeroService.updateHero).toHaveBeenCalled();
    });
  }));
});
