import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { marked } from 'marked';
import { map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BlogService {
  private http = inject(HttpClient)

  getPost(slug: string) {
    return this.http.get(`assets/posts/${slug}.md`, { responseType: 'text' })
      .pipe(map(content => marked.parse(content)));
  }
}
