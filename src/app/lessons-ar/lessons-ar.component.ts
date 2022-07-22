import { Component, OnInit } from '@angular/core';
import { LessonsService } from '../services/lessons.service';
import { SharedDataService } from './../services/shared-data.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-lessons-ar',
  templateUrl: './lessons-ar.component.html',
  styleUrls: ['./lessons-ar.component.css'],
})
export class LessonsArComponent implements OnInit {
  video: any;
  videoId: any;
  playerVars = {
    cc_lang_pref: 'en',
  };
  player: any;
  savePlayer(player: any) {
    this.player = player;
  }

  playVideo() {
    this.player.playVideo();
  }

  pauseVideo() {
    this.player.pauseVideo();
  }

  iFrameURL: SafeResourceUrl;
  lessons: any;
  id: any;
  constructor(
    public LessonsService: LessonsService,
    public SharedDataService: SharedDataService,
    public router: Router,
    private route: ActivatedRoute,
    private DomSanitizer: DomSanitizer
  ) {}
  submit(id: any) {
    this.SharedDataService.courseId = id;
    this.router.navigateByUrl('/question');
  }
  ngOnInit(): void { this.id = this.route.snapshot.paramMap.get('lessonId');
  // const id = this.SharedDataService.courseId;
  this.LessonsService.getLessons(this.id).subscribe((res) => {
    this.lessons = res;
    // console.log('lessons', this.lessons)
    this. video = (this.lessons[1].LessonVideoUrl).split('v=')[1];
    // console.log('video', this.video)
  });}
}
