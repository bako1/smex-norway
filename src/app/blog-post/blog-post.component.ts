import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {BlogService} from '../blog.service'

@Component({
  selector: 'app-blog-post',
  template: `<div [innerHTML]="content"></div>`,
})
export class BlogPostComponent implements OnInit {
  content = '';
  private route = inject(ActivatedRoute)
   private blog = inject(BlogService)
  constructor() {}

  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug') || 'hello-world';
    this.blog.getPost(slug).subscribe(async html => this.content = await html);
  }
}
